---
sidebar_label: "2015年8月実施 計算機システムとシステムプログラム"
tags:
  - Osaka-University
  - Computer-Architecture
---
# 大阪大学 情報科学研究科 情報工学 2015年8月実施 計算機システムとシステムプログラム

## **Author**
[KardeniaPoyu](https://github.com/KardeniaPoyu)

## **Description**

(1) 計算機 (computer), 特に, 中央処理装置 (CPU: central processing unit) に関する以下の各小問に答えよ. 解答は全て解答用紙の太線内に書くこと.

(1-1) 以下の文章の空欄 (a)～(e) に当てはまる最も適切な語句を, 下記の選択肢から選び, 記号で答えよ.

計算機の構成方式のことを [ (a) ] と呼ぶ. 現在, 実用的に利用されている大部分の計算機は, 線形アドレス空間 (linear address space) を有するメインメモリ (main memory) 上にプログラム (program) 及びデータ (data) を置き, プログラムを逐次実行する, 等の [ (a) ] を採用している. このような計算機は, [ (b) ] 計算機と呼ばれる．

[ (b) ] 計算機では, [ (c) ] が示すメインメモリアドレスから, プログラムの構成要素である機械語命令を読み出し, これをデコード (decode) して実行する. 機械語命令は, その種類を示す [ (d) ] 部と, 演算対象のデータである [ (e) ] の格納場所を示すアドレス部から成る.

### 【選択肢】
(ア) データフロー型 (dataflow architecture)
(イ) オペコード (operation code, opcode)
(ウ) プログラムカウンタ (program counter)
(エ) アーキテクチャ (architecture)
(オ) VLIW (very long instruction word)
(カ) オペランド (operand)
(キ) 命令レジスタ (instruction register)
(ク) メモリデータレジスタ (memory data register)
(ケ) スーパースカラ (superscalar)
(コ) ノイマン型 (von Neumann architecture)

(1-2) 一つの機械語命令 (以下, 命令と略す) の処理を $n$ 段のステージ (stage) に分け, 1 ステージを 1 クロックサイクル (clock cycle) で実行する同期型 CPU を考える. クロック周波数を $f$ [Hz] とする. 以下の (1-2-1)～(1-2-4) に答えよ.

- (1-2-1) $m$ 個の命令をパイプライン (pipeline) 処理を用いずに逐次的に実行する場合の実行時間 [s] を示せ.
- (1-2-2) $m$ 個の命令をパイプライン処理を用いて実行する場合の実行時間 [s] を示せ. 但し, パイプラインストール (pipeline stall) は無いものとする.
- (1-2-3) $m$ 個の命令をパイプライン処理を用いて実行する場合の単位時間あたりの命令実行数 [instructions/s] について, $m \to \infty$ における極限を示せ. 但し, パイプラインストールは無いものとする.
- (1-2-4) パイプライン処理を用いた CPU の性能 (単位時間あたりの命令実行数) を高める手法の一つとして, ステージ数 $n$ を増やす方法がある. この方法により CPU の性能を高めることが可能である理由を説明せよ.

(1-3) 一つの機械語命令 (以下, 命令と略す) の処理を, 命令フェッチ (IF: instruction fetch), デコード (D: decode), オペランドフェッチ (OF: operand fetch), 実行 (EX: execution), 結果の格納 (S: store) の 5 つのステージに分け, 1 ステージ 1 クロックサイクルのパイプライン処理を用いた同期型 CPU において, 以下の (1-3-1) および (1-3-2) に示す命令 1～3 を実行することを考える. 解答欄の命令 1 の例を参考に, 実行されるステージ名 "IF", "D", "OF", "EX", "S" を解答欄に記入せよ. パイプラインストールにより完了までに複数クロックサイクルが必要なステージは, 完了するクロックサイクルにステージ名を, それ以外のクロックサイクルに "-" を記入すること. なお, 以下の点を仮定する.
- パイプラインストールの原因としては, 構造ハザード (structural hazard) およびデータハザード (data hazard) を考える.
- 構造ハザードはメモリアクセス (memory access) の競合 (conflict) のみ考える.
- プログラムとデータは同じメインメモリ上にある.
- ある命令でレジスタに書き込まれた値を以降の命令で参照する場合, 前者の命令の格納 (S) が完了した後, 後者の命令のオペランドフェッチ (OF) が可能となる.

**(1-3-1)**
- 命令 1 : `MOV R1, (A)` ; メインメモリアドレス A の内容をレジスタ R1 に転送
- 命令 2 : `MOV R2, (B)` ; メインメモリアドレス B の内容をレジスタ R2 に転送
- 命令 3 : `ADD R1, R2` ; R1 + R2 の結果を R1 に代入

**(1-3-2)**
- 命令 1 : `MOV R1, (A)` ; メインメモリアドレス A の内容をレジスタ R1 に転送
- 命令 2 : `INC R1` ; R1 + 1 の結果を R1 に代入
- 命令 3 : `MOV (B), R1` ; レジスタ R1 の内容をメインメモリアドレス B に転送

(2) キャッシュメモリ (cache memory) 及びメインメモリ (main memory) で階層を形成しているメモリシステムを持つ計算機を考える. 以下の各小問に答えよ. 解答は全て解答用紙の太線内に書くこと.

- (2-1) キャッシュメモリに存在する命令あるいはデータを読み出す際のアクセス時間 (access time) が 2 [ns] であり, キャッシュメモリに存在しない命令あるいはデータをメインメモリから読み出す際の, キャッシュメモリ及びメインメモリへのアクセス時間の和が 50 [ns] であるとする. また, メインメモリの容量はプログラムに対して十分大きく, プログラムの命令及びデータは全てメインメモリに格納されているものとする. 以下の (2-1-1) 及び (2-1-2) に答えよ.
    - (2-1-1) プログラムを実行した結果, プログラムの命令あるいはデータを読み出す際の平均のキャッシュヒット率 (cache hit ratio, cache hit rate) が 80% であった. この時の, プログラムの命令あるいはデータを読み出す際の平均アクセス時間を求めよ. 導出根拠も示せ.
    - (2-1-2) キャッシュメモリを, 命令あるいはデータを読み出す際のアクセス時間が 2 [ns] のものから 4 [ns] のものに変更する. ただし, キャッシュメモリに存在しない命令あるいはデータをメインメモリから読み出す際の, キャッシュメモリ及びメインメモリへのアクセス時間の和は 50 [ns] のままであるとする. この時, (2-1-1) で得られた平均アクセス時間を維持するために必要となるキャッシュヒット率を求めよ. 導出根拠も示せ.
- (2-2) 一般に, プログラムを実行するためにアクセスされる命令及びデータには, 参照局所性 (locality of reference) がある. 次の 2 種類の参照局所性のそれぞれについて説明せよ.
    - (2-2-1) 空間的参照局所性 (spatial locality of reference)
    - (2-2-2) 時間的参照局所性 (temporal locality of reference)
- (2-3) キャッシュメモリとメインメモリで階層を形成することの利点をその理由と共に述べよ.

---

## **Kai**

### (1-1)
- (a) (エ) アーキテクチャ (architecture)
- (b) (コ) ノイマン型 (von Neumann architecture)
- (c) (ウ) プログラムカウンタ (program counter)
- (d) (イ) オペコード (operation code, opcode)
- (e) (カ) オペランド (operand)

### (1-2)
- (1-2-1) $T = \frac{mn}{f}$ [s]
- (1-2-2) $T = \frac{n + m - 1}{f}$ [s]
- (1-2-3) $\lim_{m \to \infty} \frac{m}{(n+m-1)/f} = f$ [instructions/s]
- (1-2-4) **理由**：ステージ数を増やすことで、1ステージあたりの論理回路が短くなり、各ステージの処理遅延が減少する。これにより、CPU をより高いクロック周波数 $f$ で動作させることが可能になり、结果として全体的な命令スループット（単位時間あたりの命令実行数）が向上するため。
  (English：Increasing the number of pipeline stages ($n$) reduces the logic gate delay per stage. This reduction allows the CPU to operate at a higher clock frequency ($f$), which consequently increases the overall instruction throughput.)

### (1-3)
**パイプラインの動作ルール:**
- 構造ハザード：プログラムとデータは同一のメインメモリにあるため、`IF`, `OF`, `S` が同一クロックサイクルで同時に発生するとメモリアクセス競合が起きる。
- データハザード：RAW (Read After Write)。ある命令の `S` ステージが完了した後のクロックサイクルでなければ、その値を参照する後続命令の `OF` ステージを開始できない。

**(1-3-1)**
| クロックサイクル | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 命令1: MOV R1, (A) | IF | D | OF | EX | S | | | | | | | |
| 命令2: INC R1 | | IF | D | - | - | OF | EX | S | | | | |
| 命令3: MOV (B), R1 | | | - | IF | D | - | - | - | OF | EX | S | |

*(注：クロック2では命令3の `IF` が命令1の `OF` と競合してストール。続くクロック3でも命令3の `IF` が命令2の `OF` と競合してストールし、クロック4でようやく `IF` が実行可能となる。)*

**(1-3-2)**
| クロックサイクル | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 命令1: MOV R1, (A) | IF | D | OF | EX | S | | | | | | | |
| 命令2: INC R1 | | IF | D | - | - | OF | EX | S | | | | |
| 命令3: MOV (B), R1 | | | - | IF | D | - | - | - | OF | EX | S | |

*(注：前記「ある命令でレジスタに書き込まれた値を以降の命令で参照する場合, 前者の命令の格納 (S) が完了した後, 後者の命令のオペランドフェッチ (OF) が可能となる」という条件に注意してほしい。)*

### (2-1)
- **(2-1-1)** 平均アクセス時間 = (ヒット率 $\times$ キャッシュアクセス時間) + (1 - ヒット率) $\times$ ミス時のアクセス時間の和
  - $T_{avg} = 0.8 \times 2 + 0.2 \times 50 = 1.6 + 10 = 11.6$ [ns]
- **(2-1-2)** 求めるキャッシュヒット率を $h$ とすると：
  - $11.6 = h \times 4 + (1 - h) \times 50$
  - $11.6 = 4h + 50 - 50h$
  - $46h = 38.4 \implies h = \frac{38.4}{46} = \frac{192}{230} \approx 0.835$
  - 答：約 83.5%

### (2-2)
- **(2-2-1) 空間的参照局所性**：あるメモリアドレスが参照されたとき、その近傍のメモリアドレスが近い将来に参照される可能性が高い性質。（例：配列要素の順次アクセスや、命令の逐次実行など）
  (English：When a memory address is accessed, there is a high probability that nearby memory addresses will be accessed in the near future. Examples: sequential access of array elements, or the sequential execution of instructions.)

- **(2-2-2) 時間的参照局所性**：あるメモリアドレスが参照されたとき、同じアドレスが近い将来に再び参照される可能性が高い性質。（例：ループ内の変数や命令など）
  (English：When a memory address is accessed, there is a high probability that the same address will be accessed again in the near future. Examples: variables and instructions within a loop.)

### (2-3)
- **利点**：システムのメモリアクセスにおいて、キャッシュメモリの「高速性」とメインメモリの「大容量・低コスト性」の両立を図ることができる点。
  (English：The advantage of forming a hierarchy between cache memory and main memory is the ability to achieve both the high speed of cache memory and the large capacity and low cost of main memory.)

- **理由**：プログラムの実行には(2-2)で説明した「参照の局所性」があるため、CPUからの要求の大部分（ヒット時）は小容量で高速なキャッシュメモリで処理できる。一部の要求（ミス時）のみ、大容量で低コストなメインメモリにアクセスすればよいため、システム全体の平均メモリアクセス時間を短縮しつつ、コストを抑えて大容量の記憶空間を提供できる。
  (English：
  - **Cache Memory**：It leverages the principle of locality (temporal and spatial locality). Because the CPU frequently requests recently accessed or adjacent data, most memory accesses result in a cache hit. This significantly reduces the average memory access time compared to fetching data directly from the slower main memory.
  - **Main Memory**：It provides a significantly larger storage capacity at a lower cost per byte. This allows the overall computer system to achieve a cost-effective balance between the high-speed processing capabilities of the cache and the large capacity requirements of executing programs.)