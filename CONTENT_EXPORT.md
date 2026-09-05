# Kai Content Export v1

The repository publishes a complete, machine-readable snapshot of the public
documentation at:

```text
/content-export/v1/kai-content-v1.json.gz
```

The production URL is:

```text
https://runjp.com/content-export/v1/kai-content-v1.json.gz
```

Generate it locally with:

```bash
yarn content:export
```

The command writes:

```text
build/content-export/v1/kai-content-v1.json.gz
```

Use `yarn content:export --check` to build and validate the snapshot in memory
without writing the gzip file.

Both commands collect the images referenced by the exported Markdown, including
public HTTP(S) image-hosting URLs. They require network access. Repeated URLs are
downloaded once per run, with up to six downloads in parallel. Downloads have a
120-second timeout per attempt, a 20 MiB limit per image, and up to three attempts
for transient failures. The local `.cache/content-export/` directory stores image
bytes and HTTP validators; later runs revalidate cached images with the host.
Delete this directory to start with an empty cache.

If any referenced image cannot be read or downloaded, the command fails and
prints its source and the affected documents. It does not replace the previous
export with a partial snapshot. A successful export is written atomically.

## Top-level format

The gzip stream contains one UTF-8 JSON object:

```json
{
  "format": "kai-content",
  "schemaVersion": 1,
  "generatedAt": "2026-07-22T00:00:00.000Z",
  "source": {
    "repository": "https://github.com/Myyura/the_kai_project",
    "commit": "full Git commit SHA",
    "ref": "main"
  },
  "siteUrl": "https://runjp.com",
  "contentHash": "SHA-256 of the directories, documents, and assets collections",
  "counts": {
    "directories": 0,
    "documents": 0,
    "assets": 0
  },
  "directories": [],
  "documents": [],
  "assets": []
}
```

`source.commit` uses `GITHUB_SHA` in GitHub Actions and the current Git commit
when generated locally. Importers can skip a run when both `source.commit` and
`contentHash` have already been imported.

## Directories

Every directory below `docs/` is represented as a flat row. `_category_.json`
is included as the `category` object when it exists.

```json
{
  "path": "tokyo-university/IST/cs/2024",
  "parentPath": "tokyo-university/IST/cs",
  "name": "2024",
  "label": "2024年度",
  "position": 2024,
  "category": {
    "label": "2024年度",
    "position": 2024,
    "link": {
      "type": "generated-index",
      "slug": "/category/tokyo-university-ist-cs-2024"
    }
  }
}
```

Top-level directories have `parentPath: null`. A consumer can reconstruct the
tree by joining `parentPath` to `path`.

## Documents

Every `.md` and `.mdx` file below `docs/`, including `docs/intro.mdx`, is
included.

```json
{
  "documentUuid": "72dc6d93-df21-5bbe-b808-359a254e5ad9",
  "docId": "tokyo-university/IST/cs/2024/example",
  "directoryPath": "tokyo-university/IST/cs/2024",
  "sourcePath": "docs/tokyo-university/IST/cs/2024/example.md",
  "type": "exam",
  "title": "Document title",
  "sidebarLabel": "問題 1",
  "frontmatter": {
    "sidebar_label": "問題 1",
    "tags": []
  },
  "metadata": {
    "universityId": "tokyo-university",
    "universityName": "東京大学",
    "departmentId": "IST",
    "departmentName": "情報理工学系研究科",
    "programId": "cs",
    "programName": "コンピュータ科学専攻",
    "year": 2024,
    "yearLabel": "2024年度",
    "fileSlug": "example"
  },
  "tags": {
    "raw": [],
    "school": [],
    "learning": [],
    "subjects": [],
    "subsubjects": [],
    "topics": []
  },
  "contentHash": "SHA-256 of the original Markdown source including frontmatter",
  "markdown": "Markdown body without frontmatter",
  "sections": {
    "authorMarkdown": "",
    "descriptionMarkdown": "",
    "kaiMarkdown": ""
  },
  "webUrl": "https://runjp.com/docs/tokyo-university/IST/cs/2024/example"
}
```

`documentUuid` is the stable content identity. `docId` and `sourcePath` may
change after a recorded document move while the UUID remains the same.
After moving or renaming a source file, run
`yarn documents:move -- <old-doc-id> <new-doc-id>` before publishing. A manual
rename without this command produces a new UUID, so importers will correctly
observe one removal and one insertion.

## Assets

Images below `docs/` are embedded, along with local images under `static/` and
remote images referenced by the Markdown. Standard Markdown images, reference
images, and literal HTML/MDX `<img src="...">` images are collected. Images inside
code samples and HTML comments are ignored. JavaScript expressions used to
compute a `src` at runtime are not evaluated. `data:image/...` URLs already carry
their bytes in the Markdown and need no separate asset.

Local `docs/` assets retain their existing paths. Referenced static assets use
`_static/<path relative to static/>`; remote assets use
`_remote/<SHA-256 of normalized URL>.<extension>`. Static and remote assets have
`directoryPath: null` because they are outside the document directory tree.
`sourcePath` is the repository path for local files and the normalized URL for
remote files. Remote assets also include `sourceUrl`.

```json
{
  "path": "tokyo-university/example/figure.jpeg",
  "directoryPath": "tokyo-university/example",
  "sourcePath": "docs/tokyo-university/example/figure.jpeg",
  "mimeType": "image/jpeg",
  "contentHash": "SHA-256 of the original bytes",
  "encoding": "base64",
  "data": "base64-encoded bytes"
}
```

Each document now includes an optional `imageAssets` array mapping the image
sources in its Markdown to the corresponding `assets[].path`:

```json
{
  "imageAssets": [
    {
      "source": "https://raw.githubusercontent.com/owner/images/main/figure.png",
      "assetPath": "_remote/<url-sha256>.png"
    },
    {
      "source": "/img/figure.svg",
      "assetPath": "_static/img/figure.svg"
    }
  ]
}
```

Importers should resolve each rendered image source through this mapping, then
decode the matching asset's Base64 `data` and display it as a local file, Blob
URL, or `data:<mimeType>;base64,...` URL. Sources are the decoded values produced
by parsing Markdown/HTML (for example `&amp;` in an HTML attribute becomes `&`).
Preserve any fragment from the original source when constructing a local URL.
The original `markdown`, section Markdown, and document `contentHash` are
unchanged by image collection. Existing importers must add support for this
mapping to display remote/static images offline; retaining the original URLs
alone still requires network access.

For older exports without `imageAssets`, resolve relative image links against
the document's `directoryPath` and look them up by `assets[].path` as before.

## Import semantics

A consumer should treat each file as a complete snapshot:

- a new `documentUuid` is an insert;
- an existing UUID with a different `contentHash` is an update;
- an existing UUID with the same hash can skip Markdown and metadata updates;
- a UUID absent from the new snapshot is no longer publicly available;
- user-owned notes, progress, or problem sets must not be deleted when public
  content disappears.

Always synchronize each document's `imageAssets` mapping, including when its
document hash is unchanged. This is necessary on the first import after enabling
image bundling, because existing documents keep their original content hashes.
Process assets independently by their `path` and `contentHash`: an image host
can replace the bytes at the same URL. Changes to asset bytes or mappings also
change the snapshot's top-level `contentHash`.

Import into staging tables first, validate counts, hashes, and directory
references, and only then switch the active content release. A failed import
should leave the previous snapshot active.

## Compatibility

Consumers must reject unsupported `schemaVersion` values. Adding optional
fields is backward-compatible within v1. Removing fields, changing field types,
or changing identity semantics requires `schemaVersion: 2` and a new export
path.
