# Tag names and terminology

The JSON files in this directory are the only source of tag definitions and translations. Each subject, subsubject, topic, and school has one canonical English ID and three required names: `labelZh`, `labelJa`, and `labelEn`. IDs identify document metadata, URLs, anchors, and saved selections; names are presentation only.

`src/utils/tags.js` supplies localized labels, descriptions, ordering, multilingual name search, and browse destinations. Do not create additional translation tables or derive display names from IDs. `docs/tags.yml` is generated; its `label` intentionally carries the canonical ID for Docusaurus to pass to the shared renderer.

Optional `searchAliases` contains language-keyed arrays of common abbreviations and synonyms. These are search terms, not new tag identities. Search covers all three names, IDs, and aliases regardless of the current UI language. Descriptions are excluded so mentioning a topic in a subject summary does not match every topic under that subject.

After editing, run `yarn tags:generate`, `yarn content:validate`, and `yarn test`. Validation requires all three names and rejects the retired single `label` field.

## Topic identity and consolidation

Search the full taxonomy before adding a topic, including topics under other subjects. Use one canonical ID for the same concept; different wording or a different exam program does not justify a duplicate. Keep distinct concepts separate even when their names match, such as the Bernoulli equations in fluid mechanics and differential equations.

When consolidating topics, update every document reference, remove the superseded definitions, and regenerate `docs/tags.yml`. Do not add compatibility aliases for retired canonical IDs. Remove duplicate tags and a parent subsubject when a document already has a concrete topic under that parent. Confirm the choice against the actual question, and preserve the document body.

## Translation policy

Use terminology found in university textbooks, course notes, and official entrance-exam materials. Public written exam-preparation notes can supplement those sources. For an ambiguous or unusually specific ID, read the associated problem before naming it. A long task description need not be presented as an established textbook term. Keep conventional acronyms and author-name spellings when a local transliteration is not established.

The initial translation review used the references below for common and ambiguous terms. These support terminology choices, not a claim that every compound topic name appears verbatim in a textbook.

| Area | Terminology references |
| --- | --- |
| Mathematics and statistics | [University of Tokyo entrance-exam keywords (Japanese/English)](https://www.i.u-tokyo.ac.jp/edu/course/mi/keywords.shtml); [Tsinghua linear algebra textbook](https://www.tup.tsinghua.edu.cn/bookscenter/book_06334502.html); [University of Tokyo mathematical statistics textbook](https://www.u-tokyo.ac.jp/biblioplaza/ja/D_00125.html) |
| Linear algebra and analysis | [Tsinghua textbook: companion matrices](https://www.tup.com.cn/upload/books/yz/076827-02.pdf); [Kanagawa University complex analysis notes](https://www.sci.kanagawa-u.ac.jp/math-phys/hmatsu/ComplexAnalysis2-book-2024.pdf); [Yamagata University differential equations syllabus](https://www.yamagata-u.ac.jp/gakumu/syllabus/2020/html/05_52801.html) |
| Algorithms and formal languages | [Hosei data structures and algorithms](https://syllabus.hosei.ac.jp/web/preview.php?gakubueng=AK&nendo=2024&no_id=2418136&radd=&t_mode=sp); [University of Tsukuba automata course](https://www.cs.tsukuba.ac.jp/~kam/lecture/automaton2016/) |
| Architecture and information theory | [Science Tokyo computer architecture notes](https://www.arch.cs.titech.ac.jp/lecture/CA/Lec-2025-11-07.pdf); [Kyushu Sangyo information theory course](https://www.is.kyusan-u.ac.jp/~miyazaki/lecture_H22/information_theory.htm) |
| Machine learning and optimization | [Dive into Deep Learning: distribution shift](https://zh.d2l.ai/chapter_multilayer-perceptrons/environment.html); [Sugiyama lecture on covariate shift](https://www.ms.k.u-tokyo.ac.jp/sugi/slide/20220730_JAMIT.pdf); [Tokyo University of Science optimization syllabus](https://class.admin.tus.ac.jp/slResult/2026/japanese/syllabusHtml/SyllabusHtml.2026.994637K.html) |
| Circuits and control | [Asakura circuit theory textbook](https://www.asakura.co.jp/detail.php?book_code=22748); [Corona classical control textbook](https://www.coronasha.co.jp/np/isbn/9784339032284/) |
| Signals, fluids, and heat transfer | [Corona digital signal processing textbook](https://www.coronasha.co.jp/np/isbn/9784339011210/); [Corona fluid mechanics textbook](https://www.coronasha.co.jp/np/isbn/9784339044652/); [Higher Education Press heat transfer textbook](https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=59cfa539ba9eb884cf82439e) |
| Physics | [Higher Education Press theoretical mechanics textbook](https://xuanshu.hep.com.cn/front/h5Mobile/bookDetails?bookId=5c4752cef18f967ee7f37de6); [Waseda quantum mechanics notes](https://www.hep.phys.waseda.ac.jp/lecture/quantum-all.pdf); [Shimane statistical mechanics notes](https://www.ipc.shimane-u.ac.jp/tanaka_lab/lecture/tokei/stat_mech.pdf) |

Specific distinctions to preserve when adding related tags:

- Companion matrices use **友矩阵** in Chinese; avoid confusing them with adjugate matrices.
- Censoring and truncation are distinct observation mechanisms; posterior odds and odds ratios are distinct quantities.
- Japanese usage includes **積率母関数**, **一致の定理**, **アドレス変換バッファ**, **相補性条件**, **単調回帰**, and **双一次変換**.
- `LogSumExp` denotes the logarithm of a sum of exponentials, not two separate logarithmic and exponential functions; see the [SciPy definition](https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.logsumexp.html).
- Terms such as polynomial “content,” cognitive “dissociation,” and language-prefix operations must follow the actual problem context rather than a literal word-by-word translation.
- Bell inequalities follow from local hidden-variable assumptions; it is their violation that conflicts with those assumptions. See the [Physical Society of Japan review](https://www.jstage.jst.go.jp/article/butsuri/81/1/81_81.1_4/_article/-char/ja).
- School display names can change without changing IDs. Osaka uses **The University of Osaka**, following its [official English-name announcement](https://www.osaka-u.ac.jp/en/news/topics/2025/04/01001); its previous English name remains a search alias.
