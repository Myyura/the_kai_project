---
sidebar_label: "2023年8月実施 計算機ソフトウェア（データ構造とアルゴリズム）"
tags:
  - Nagoya-Institute-of-Technology
  - Operations-Research.Combinatorial-Optimization.Traveling-Salesman-Problem
  - Operations-Research.Combinatorial-Optimization.Minimum-Spanning-Tree
  - Discrete-Mathematics.Graph-Algorithms.Kruskal-Algorithm
  - Discrete-Mathematics.Graph-Algorithms.Depth-First-Search
  - Computer-Science.Data-Structures.Union-Find-Data-Structure
  - Computer-Science.Algorithm-Design.Comparison-Sorting-Decision-Tree-Lower-Bound
---

# 名古屋工業大学 工学研究科 工学専攻 情報工学系 2023年8月実施 計算機ソフトウェア（データ構造とアルゴリズム）

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

**I**　ある組合せ最適化問題に関する (1)〜(4) の問いに答えよ。なお，設問中の時間計算量は漸近的評価（タイト）とする。

各辺に非負の実数値の重みが定義された完全無向グラフが与えられたとき，すべての頂点を巡回して出発点に戻る最短の巡回路（単純閉路）を求めたい。なお，最短の巡回路とは，各辺の重みの総和が最小になる巡回路を指す。この問題は，$\boxed{\mathrm{(A)}}$ 問題として知られている。完全無向グラフの頂点数を $n$ とすると，すべての頂点を巡回する巡回路の組合せ総数は，時計回り・反時計回りを区別する場合，$\boxed{\mathrm{(B)}}$ となる。各巡回路の試行において $n$ に比例した時間がかかる場合，すべての巡回路の試行に要する時間計算量は $O(\boxed{\mathrm{(C)}})$ となる。

ここで，$\boxed{\mathrm{(A)}}$ 問題に対し，「各辺の重みが頂点間のユークリッド距離を表し，なおかつ三角不等式を満たす」という条件を仮定したユークリッド $\boxed{\mathrm{(A)}}$ 問題（以降，Euc-P と表記）を考える。Euc-P の解法として，近似率保証のある近似アルゴリズムがいくつか知られており，ここでは最小全域木を用いた近似アルゴリズム（以降，Approx-P-Tour と表記）によって近似解を求める。Approx-P-Tour の処理手順を図1に示す。STEP 1 の最小全域木 $T$ の構成にあたっては，図2に示す Kruskal のアルゴリズムを用いる。完全無向グラフは $G=(V,E,c)$ として与えられ，$V$ は頂点集合 $\{v_1,v_2,\ldots,v_n\}$，$E$ は辺集合 $\{e_1,e_2,\ldots,e_m\}$，$c$ は辺に対する重み関数を表す。なお，$n$ は頂点数，$m$ は辺の総数をそれぞれ表す。

**STEP 1:** 完全無向グラフの最小全域木 $T$ を構成する。

**STEP 2:** 任意の頂点を始点として $T$ 上で深さ優先探索を行い，訪問順にすべての頂点を巡回する単純閉路を解とする。

図1：Approx-P-Tour の処理手順

```text
Min-Span-Tree(G=(V,E,c)) {
    T ← ∅; // 全域木を構成する辺集合
    for (各頂点 v ∈ V) make-set(v);

    // 各辺 e ∈ E を c(e) にしたがってソート（昇順）
    // ソート結果を e1,e2,...,em とする
    sort(E,c);

    for (i=1 to m) {
        // 辺 ei の端点をそれぞれ x,y とする
        (x,y) ← ei;
        if (find(x) ≠ find(y)) {
            T ← T ∪ {(x,y)};
            union(x,y);
        }
    }
}

void make-set(v) {
    p ← v の添字番号;
    parent[p] ← p; size[p] ← 1;
}
int find(v) {
    p ← v の添字番号;
    while (parent[p] ≠ p)
        p ← parent[p];
    return p;
}
void union(u,v) {
    p ← find(u); q ← find(v);
    if (size[p] ≥ size[q]) {
        parent[q] ← p; size[p] ← size[p] + size[q];
    } else {
        parent[p] ← q; size[q] ← size[q] + size[p];
    }
}
```

図2：Kruskal のアルゴリズム（擬似コード）

(1) 空欄 (A)〜(C) に対して，適切な語句を記述せよ。

(2) 図2の $\operatorname{sort}(E,c)$ において，比較に基づくソーティングアルゴリズムを用いる場合，最悪の時間計算量（比較回数）の下界を，$\Omega$ 記号と辺の総数である $m$ を用いて示せ。

(3) 最小全域木 $T$ に対する辺の重みの総和を $W$ とした場合，Euc-P の最適解における辺の重みの総和の下界と，Approx-P-Tour の解における辺の重みの総和の上界を，$W$ を用いて具体的に示せ（漸近的評価ではない）。

(4) 四つの頂点 $v_1,v_2,v_3,v_4$ からなる完全無向グラフ $G$ について，各辺の重みが表1のように与えられた場合，最小全域木 $T$ に対する辺の重みの総和 $W$，Approx-P-Tour の解における辺の重みの総和，および Euc-P の最適解における辺の重みの総和をそれぞれ示せ。なお，解答の際には以下の条件を満足せよ。

- 図2の辺 $e_i$ について，二つの端点（隣接頂点）のうち添字番号が小さい方を $x$ とせよ。
- 図1の深さ優先探索では，最小全域木 $T$ の構成後において，$\operatorname{find}(v)=v$ の添字番号となる頂点 $v$ を探索の始点とせよ。
- 同じく深さ優先探索において，ある訪問中の頂点に対して複数の辺が接続している場合は，最小全域木 $T$ に追加された順にしたがって探索せよ。

表1：完全無向グラフ $G$ における各辺の重み

| 辺の端点 | $v_1$ | $v_2$ | $v_3$ | $v_4$ |
|:---:|:---:|:---:|:---:|:---:|
| $v_1$ | — | $8$ | $5$ | $3$ |
| $v_2$ |  | — | $4$ | $7$ |
| $v_3$ |  |  | — | $6$ |
| $v_4$ |  |  |  | — |

### 题目描述

**I**　回答关于某个组合优化问题的 (1) 至 (4) 问。题中的时间复杂度均要求给出紧的渐近界。

给定完全无向图，每条边具有非负实数权重，希望求出遍历所有顶点并回到起点的最短巡回路线（简单环）。最短巡回路线是各边权重之和最小的巡回路线。该问题称为 $\boxed{\mathrm{(A)}}$ 问题。设完全无向图有 $n$ 个顶点，若区分顺时针与逆时针，则遍历全部顶点的巡回路线组合总数为 $\boxed{\mathrm{(B)}}$。若检验每条巡回路线所需时间与 $n$ 成正比，检验全部巡回路线的时间复杂度为 $O(\boxed{\mathrm{(C)}})$。

对 $\boxed{\mathrm{(A)}}$ 问题，进一步假设“边权表示顶点之间的欧几里得距离，并满足三角不等式”，称为欧几里得 $\boxed{\mathrm{(A)}}$ 问题（以下记为 Euc-P）。已知 Euc-P 有多种带近似比保证的近似算法；这里利用最小生成树的近似算法（以下记为 Approx-P-Tour）求近似解。图1给出其步骤。STEP 1 构造最小生成树 $T$ 时，使用图2的 Kruskal 算法。完全无向图表示为 $G=(V,E,c)$，其中 $V=\{v_1,v_2,\ldots,v_n\}$ 是顶点集合，$E=\{e_1,e_2,\ldots,e_m\}$ 是边集合，$c$ 是边权函数。$n$ 为顶点数，$m$ 为边的总数。

**STEP 1：** 构造完全无向图的最小生成树 $T$。

**STEP 2：** 任选一个顶点为起点，在 $T$ 上进行深度优先搜索，将按访问顺序遍历全部顶点所形成的简单环作为解。

图1：Approx-P-Tour 的步骤

```text
Min-Span-Tree(G=(V,E,c)) {
    T ← ∅; // 构成生成树的边集合
    for (每个顶点 v ∈ V) make-set(v);

    // 将每条边 e ∈ E 按 c(e) 升序排序
    // 设排序结果为 e1,e2,...,em
    sort(E,c);

    for (i=1 to m) {
        // 设边 ei 的两个端点分别为 x,y
        (x,y) ← ei;
        if (find(x) ≠ find(y)) {
            T ← T ∪ {(x,y)};
            union(x,y);
        }
    }
}

void make-set(v) {
    p ← v 的下标编号;
    parent[p] ← p; size[p] ← 1;
}
int find(v) {
    p ← v 的下标编号;
    while (parent[p] ≠ p)
        p ← parent[p];
    return p;
}
void union(u,v) {
    p ← find(u); q ← find(v);
    if (size[p] ≥ size[q]) {
        parent[q] ← p; size[p] ← size[p] + size[q];
    } else {
        parent[p] ← q; size[q] ← size[q] + size[p];
    }
}
```

图2：Kruskal 算法（伪代码）

(1) 在空格 (A) 至 (C) 中填入适当内容。

(2) 若图2的 $\operatorname{sort}(E,c)$ 使用基于比较的排序算法，请用 $\Omega$ 记号和边总数 $m$ 表示最坏时间复杂度（比较次数）的下界。

(3) 设最小生成树 $T$ 的边权总和为 $W$。请用 $W$ 具体表示 Euc-P 最优解边权总和的下界，以及 Approx-P-Tour 所得解边权总和的上界，不能只给出渐近界。

(4) 完全无向图 $G$ 由四个顶点 $v_1,v_2,v_3,v_4$ 构成，各边权重如表1。请分别给出最小生成树 $T$ 的边权总和 $W$、Approx-P-Tour 所得解的边权总和，以及 Euc-P 最优解的边权总和。作答时须遵守以下条件。

- 对图2的边 $e_i$，令两个端点（相邻顶点）中下标较小者为 $x$。
- 图1的深度优先搜索，在最小生成树 $T$ 构造完成后，从满足 $\operatorname{find}(v)$ 等于自身下标编号的顶点 $v$ 开始。
- 深度优先搜索时，如果当前访问的顶点连接多条边，则按这些边被加入最小生成树 $T$ 的先后顺序搜索。

表1：完全无向图 $G$ 各边的权重

| 边的端点 | $v_1$ | $v_2$ | $v_3$ | $v_4$ |
|:---:|:---:|:---:|:---:|:---:|
| $v_1$ | — | $8$ | $5$ | $3$ |
| $v_2$ |  | — | $4$ | $7$ |
| $v_3$ |  |  | — | $6$ |
| $v_4$ |  |  |  | — |

## **Kai**

### (1)

(A) は巡回セールスマン問題である。始点を一つ固定すると、残り $n-1$ 頂点の訪問順は $(n-1)!$ 通りであり、逆向きも別の巡回路として数えるので、

$$
\boxed{\text{(A)}=\text{巡回セールスマン}},\qquad
\boxed{\text{(B)}=(n-1)!}
$$

である。一つの巡回路の評価に $\Theta(n)$ 時間かかるため、

$$
n(n-1)!=n!
$$

より、

$$
\boxed{\text{(C)}=n!}
$$

となる。

### (2)

辺重みがすべて相異なる入力に限っても、その大小順序は $m!$ 通りある。比較決定木の高さを $h$ とすると、

$$
2^h\ge m!,\qquad h\ge \log_2(m!)=\Omega(m\log m).
$$

したがって、最悪比較回数の下界は

$$
\boxed{\Omega(m\log m)}
$$

である。

### (3)

最適巡回路から任意の一辺を除くと全頂点を含む全域木になる。その重みは最小全域木の重み $W$ 以上であるから、最適値を $\mathrm{OPT}$ とすると、

$$
\boxed{W\le \mathrm{OPT}}
$$

である。

一方、最小全域木の各辺を往復する閉路の重みは $2W$ である。深さ優先探索の初回訪問順へ短絡しても、三角不等式により重みは増えない。Approx-P-Tour の値を $L_{\mathrm{A}}$ とすると、

$$
\boxed{L_{\mathrm{A}}\le 2W}
$$

となる。

### (4)

辺を重みの昇順に並べると、

$$
\begin{gathered}
(v_1,v_4):3,\quad (v_2,v_3):4,\quad (v_1,v_3):5,\\
(v_3,v_4):6,\quad (v_2,v_4):7,\quad (v_1,v_2):8.
\end{gathered}
$$

である。Kruskal 法は最初の三辺を採用するので、

$$
T=\{(v_1,v_4),(v_2,v_3),(v_1,v_3)\},\qquad
\boxed{W=3+4+5=12}.
$$

同じ大きさの集合を併合するときは `union` の `>=` 側に入り、各辺の小さい添字側を $x$ とするため、最終代表元は $v_1$ である。$v_1$ から追加順に深さ優先探索すると、初回訪問順は

$$
v_1,v_4,v_3,v_2
$$

となる。したがって、近似巡回路と重みは

$$
v_1\to v_4\to v_3\to v_2\to v_1,\qquad
3+6+4+8=\boxed{21}.
$$

始点を $v_1$ に固定して残り三頂点の $3!=6$ 通りを調べると、最小は

$$
v_1\to v_3\to v_2\to v_4\to v_1
$$

とその逆向きであり、

$$
5+4+7+3=\boxed{19}.
$$

## **Reference**

- [名古屋工業大学 2024年度 情報工学系 入学試験問題](https://www.nitech.ac.jp/examination/test/files/2024_08_joho.pdf)
