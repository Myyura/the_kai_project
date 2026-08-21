---
sidebar_label: "データ構造・アルゴリズム 出題傾向と学習ガイド"
sidebar_position: 1
tags:
  - Nagoya-Institute-of-Technology
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
  - Computer-Science.Data-Structures.Binary-Search-Tree
  - Computer-Science.Data-Structures.Hash-Table
  - Computer-Science.Dynamic-Programming.Zero-One-Knapsack-Recurrence
  - Discrete-Mathematics.Graph-Algorithms.Dijkstra-Algorithm
  - Operations-Research.Combinatorial-Optimization.Traveling-Salesman-Problem
---

# 名古屋工業大学 情報工学系 データ構造・アルゴリズム出題傾向と学習ガイド

## **Author**
GPT-5.6 Sol

## **Description**

提供された PDF と追加画像から、2012--2025 年度の「計算機ソフトウェア」データ構造・アルゴリズム問題を年度別に整理し、頻出分野と追加学習事項をまとめる。元の PDF に含まれていなかった 2023 年度については、後から提供された問題画像を用いて補完した。

## **Kai**

### 年度別の中心考点

| 入学年度 | 中心考点 | 答案で要求される力 |
|---:|---|---|
| 2012 | 多倍長 2 進整数、分割統治、Karatsuba 法、漸化式 | 桁上げ・桁借りを式で表し、$4T(n/2)$ と $3T(n/2)$ の差を計算量まで導く |
| 2013 | 最大ヒープ、優先度付きキュー、上方・下方 Heapify | 配列添字と境界を正確に扱い、挿入・削除・キー変更を疑似コードで完成する |
| 2014 | 二分探索、線形探査ハッシュ、挿入ソート | 配列状態を手で追跡し、ループ不変条件と最良・最悪入力を説明する |
| 2015 | Quick Sort、Hoare 型 partition、ピボット選択 | 1 回の分割を正確に追い、中央値ピボットと端値ピボットの漸化式を比較する |
| 2016 | Dijkstra 法、配列による最小値選択、貪欲法の限界 | $O(|V|^2)$ を導き、「最長路版」が失敗する小さな反例を構成する |
| 2017 | 順序制約付き最大差、二分木、二分探索木 | 添字と符号のバグを見抜き、木の全列挙と $O/\Omega/\Theta$ の包含関係を扱う |
| 2018 | 漸近記法、開番地法、線形探査 | タイトな評価だけでなく、成立する上界・下界をすべて選び、衝突列を追跡する |
| 2019 | 0/1 ナップサック、動的計画法 | 状態 $M[i,j]$、遷移、初期値、添字 $i-1$ を一貫して書き、二重ループを評価する |
| 2020 | LSD 基数ソート、安定なバケット処理 | 各桁の処理順と安定性を理解し、時間 $\Theta(NK)$ とビット空間 $\Theta(NK)$ を区別する |
| 2021 | Dijkstra 法、前駆頂点、最短経路数 | 各反復の距離を追い、前駆グラフから経路を復元・計数し、緩和式を拡張する |
| 2022 | 二分探索木の先行順走査、挿入・削除、平衡木 | 再帰コードを完成し、2 子を持つ節点の削除と AVL 木の条件を説明する |
| 2023 | オープンアドレス法、線形探査、負荷率、探査幅 | 探査列を正確に追い、組合せ確率を求め、表サイズと互いに素な探査幅を選ぶ |
| 2024 | 巡回セールスマン問題、Kruskal 法、Union-Find、MST 2 近似 | 組合せ数と比較下界を示し、指定された tie-break に従って近似巡回路を再現する |
| 2025 | 各種ソート、Merge Sort、比較決定木 | 安定性・最良最悪計算量を判定し、途中列から手法を同定して 3 要素の全順列を列挙する |

### 出題傾向

大きく分けると、次の 5 系統が繰り返し出題されている。

1. **計算量の厳密な読み分け**：単に $\Theta$ を答えるだけでなく、ある関数が複数の $O$・$\Omega$ に属するかを問う。
2. **疑似コードの穴埋めと dry run**：配列添字、短絡評価、境界条件、更新順序が得点差になりやすい。
3. **基本データ構造**：ヒープ、ハッシュ表、二分探索木が中心で、操作後の具体的状態を図示させる。
4. **代表アルゴリズム**：整列、Dijkstra 法、Kruskal 法、0/1 ナップサックを、名称だけでなく不変条件・計算量・復元まで問う。
5. **誤った一般化への反例**：符号を逆にしたコード、最短路を最長路へ置き換えた貪欲法などに対し、小さな反例を作らせる。

したがって、暗記だけでなく「紙上で 5--10 要素を最後まで追う」「成立しない主張へ最小反例を作る」練習が重要である。

### 優先して補うべき知識

#### 優先度 A：必ず仕上げる

- **漸近解析**：$O,\Omega,\Theta,o,\omega$ の定義、和・積・対数の比較、総和評価、再帰木、Master theorem。
- **整列**：挿入・選択・バブル・Merge・Quick・Heap・Counting・Radix・Bucket Sort。各手法について最良／平均／最悪、安定性、in-place 性、適応性を表にして覚える。
- **木とヒープ**：前順・中順・後順・幅優先走査、BST の探索・挿入・3 種類の削除、AVL 回転、Red-Black Tree の目的、二分ヒープの sift-up / sift-down。
- **ハッシュ**：連鎖法、線形・二次探査、double hashing、負荷率、削除用 tombstone、rehash、期待計算量と最悪計算量。探査幅と表サイズが互いに素となる条件、および探査列の周期も確認する。
- **グラフ**：隣接行列と隣接リスト、BFS/DFS、Dijkstra、Bellman--Ford、Floyd--Warshall、Prim、Kruskal、Union-Find。距離だけでなく経路復元と最短経路数も実装する。
- **0/1 ナップサック**：2 次元 DP、1 次元への空間圧縮、採用アイテムの復元、容量を降順に回す理由。

#### 優先度 B：本問より一段上まで学ぶ

- **動的計画法**：部分和、coin change、LCS、編集距離、LIS、区間 DP、木 DP、bit DP。各問で「状態・遷移・初期値・計算順・復元」を 5 行で説明できるようにする。
- **グラフの追加範囲**：トポロジカルソート、DAG 最短路、強連結成分、二部グラフ判定、負辺・負閉路の扱い。
- **分割統治**：Karatsuba、Quickselect、Merge Sort の漸化式。入力分割、部分解、結合処理の三段階で証明する。
- **貪欲法の証明**：交換法、cut property、最適部分構造、および貪欲法が失敗する反例。
- **計算困難性と近似**：P/NP/NP-hard の区別、metric TSP の double-tree 2 近似、Christofides 法の概要。証明では三角不等式を使う箇所を明示する。

#### 優先度 C：余裕があれば

- Trie、B-tree、skip list、deque、disjoint sparse table、Fenwick tree、segment tree。
- randomized Quick Sort、amortized analysis、potential method。
- 文字列探索（KMP、Rabin--Karp）と rolling hash。

これらは提供年度では中心出題ではないが、既出範囲から自然に拡張される標準的な大学院入試分野である。

### 答案作成のチェックリスト

- 配列が 0 始まりか 1 始まりかを最初に囲む。
- `<=` と `<`、`i` と `i-1`、更新前後の $n$ を区別する。
- $O$ と $\Theta$ を混同せず、「すべて選べ」では非タイトでも成立する上界・下界を確認する。
- 計算量は、ループ回数だけでなく各反復の仕事量を掛ける。
- グラフでは辺の向き、非負条件、tie-break、確定済み頂点の扱いを確認する。
- DP では表の行と列の意味を書いてから遷移式を書く。
- 反例はできる限り 2--4 頂点、または 4--5 要素まで小さくする。
- 図示問題は最終状態だけでなく、どの比較・交換・辺追加でその状態になったかを一行添える。

### 6 週間の復習案

| 週 | 学習内容 | 到達目標 |
|---:|---|---|
| 1 | 漸近記法、総和、再帰式、基本配列操作 | 複数選択の $O/\Omega/\Theta$ 問題を根拠付きで解く |
| 2 | 基本整列、Quick/Merge/Heap Sort | 任意の 10 要素を紙上で追い、計算量・安定性を即答する |
| 3 | ヒープ、ハッシュ、BST、AVL | 挿入・削除後の状態を図示し、境界を含む疑似コードを書く |
| 4 | BFS/DFS、最短路、MST、Union-Find | 距離・前駆・経路数を同時に管理し、反例も作る |
| 5 | 0/1 ナップサックと代表 DP | 2 次元・1 次元 DP と復元を実装し、他の 4 典型 DP に転用する |
| 6 | TSP 近似、全年度の時間制限演習 | 1 年分を通しで解き、誤答を「添字・不変条件・計算量・反例」に分類する |

各週の最後に、手計算結果を 20--40 行程度の短いプログラムで照合する。ただし本番答案では、プログラム出力だけでなく、その値になる理由を数式または不変条件で示す。

## **Reference**

- [名古屋工業大学 大学院入試・入学試験過去問題](https://www.nitech.ac.jp/examination/in/test.html)
- [2023年度 博士前期課程 一般・社会人入試募集要項](https://www.nitech.ac.jp/examination/mt_files/2023_bosyuuyoukou_in_master_ippan.pdf)
- [2023年度 専門試験問題公開のお知らせ](https://www.nitech.ac.jp/examination/sokuhou/9905.html)
- [2024年度 情報工学系 専門試験問題](https://www.nitech.ac.jp/examination/test/files/2024_08_joho.pdf)
- [2025年度 情報工学系 専門試験問題](https://www.nitech.ac.jp/examination/test/files/2025_08_joho.pdf)
