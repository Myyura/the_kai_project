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

Images below `docs/` are embedded so relative Markdown image links can be
resolved without fetching files from GitHub separately. Resolve a relative link
against the document's `directoryPath`, then look it up by `assets[].path`.

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

## Import semantics

A consumer should treat each file as a complete snapshot:

- a new `documentUuid` is an insert;
- an existing UUID with a different `contentHash` is an update;
- an existing UUID with the same hash can be skipped;
- a UUID absent from the new snapshot is no longer publicly available;
- user-owned notes, progress, or problem sets must not be deleted when public
  content disappears.

Import into staging tables first, validate counts, hashes, and directory
references, and only then switch the active content release. A failed import
should leave the previous snapshot active.

## Compatibility

Consumers must reject unsupported `schemaVersion` values. Adding optional
fields is backward-compatible within v1. Removing fields, changing field types,
or changing identity semantics requires `schemaVersion: 2` and a new export
path.
