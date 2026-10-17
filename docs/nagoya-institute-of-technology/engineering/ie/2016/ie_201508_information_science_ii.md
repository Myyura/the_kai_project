---
sidebar_label: "2015年8月実施 問題22 情報科学 II"
tags:
  - Nagoya-Institute-of-Technology
  - Discrete-Mathematics.Graph-Algorithms.Dijkstra-Algorithm
  - Operations-Research.Combinatorial-Optimization.Shortest-Path-Problem
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---

# 名古屋工業大学 工学研究科 情報工学専攻 2015年8月実施 問題22 情報科学 II

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

**II**　重み付き単純無向グラフ $G=(V,E)$ において，与えられた始点 $s\ (\in V)$ から各頂点への最短距離を求めるアルゴリズムの擬似コードを図1に示す。なお $V$ は $G$ の頂点集合であり，擬似コード中で各頂点 $v\ (\in V)$ は，$1,2,\ldots$ の自然数値で表されるものとする。また $E$ は $G$ の辺集合であり，擬似コード中で各辺は二次元配列 `E[][]` で表され，$E[i][j]$ および $E[j][i]$ には頂点 $i$ と頂点 $j$ を結ぶ辺の距離が格納されている。辺の距離は非負の値とし，頂点 $i$ と頂点 $j$ が辺で結ばれていない場合は $E[i][j]=\infty$ および $E[j][i]=\infty$ とする。このとき，次の (1)〜(4) の問いに答えよ。

```text
1:  Q ← V;
2:  for all v ∈ V do
3:      distance[v] ← ∞;
4:  end for
5:  distance[s] ← 0;

6:  while Q ≠ ∅ do
7:      u ← decrease(Q);
8:      for all v ∈ V do
9:          if E[u][v] ≠ ∞ then
10:             if distance[v] > distance[u] + E[u][v] then
11:                 distance[v] ← distance[u] + E[u][v];
12:             end if
13:         end if
14:     end for
15: end while

16: function decrease(Q)
17:     dist ← ∞;
18:     node ← NULL;
19:     for all q ∈ Q do
20:         if distance[q] < dist then
21:             dist ← distance[q];
22:             node ← q;
23:         end if
24:     end for
25:     Q ← Q - {node};
26:     return node;
27: end function
```

図1：各頂点への最短距離を求めるアルゴリズムの擬似コード

(1) このアルゴリズムは一般に，考案者の人名で呼ばれる。その人名を答えよ。

(2) `decrease(Q)` は，$Q$ に含まれる全ての要素 $v$ のうち最小の $\operatorname{distance}[v]$ を持つ要素を返し，その要素を $Q$ から取り除く。いま，集合 $Q$ を管理するデータ構造をサイズ $|V|$ の一次元配列で実現する場合を考える。すなわち，擬似コードの1行目では，この一次元配列に $V$ の全要素が順不同で格納される。また25行目では，`node` に相当する要素をこの一次元配列中から線形探索で発見し，当該要素を `NULL` で上書き消去する。このとき，`decrease(Q)` の時間計算量を，$\Theta$ 記法で示せ。ただし，$V$ の大きさを $|V|$，$E$ の大きさを $|E|$ と表記する。

(3) 上記 (2) の場合において，図1の擬似コードで示されたプログラム全体の時間計算量を，$\Theta$ 記法で示せ。

(4) 最短距離ではなく最長距離を求めることを目的に，図1のプログラムを以下に示すとおり4箇所書き換えたとする。なおここで2頂点間の最長距離とは，同じ頂点を二度通らない経路のうち最大の長さを持つ経路の距離を指す。このとき，書き換えたプログラムでは始点 $s$ から各頂点への最長距離を正しく求められない理由を，反例となる入力グラフ $G$ をひとつ挙げて説明せよ。

- 3行目において，$\operatorname{distance}[v]$ を $\infty$ ではなく $-\infty$ で初期化する。
- 10行目の $\operatorname{distance}[v]$ の更新条件を，$\operatorname{distance}[v]<\operatorname{distance}[u]+E[u][v]$ とする。
- 17行目において，$\mathrm{dist}\leftarrow\infty$ を $\mathrm{dist}\leftarrow-\infty$ とする。
- 20行目の，`node` の更新条件を，$\operatorname{distance}[q]>\mathrm{dist}$ とする。

#### 题目描述

**II**　在带权简单无向图 $G=(V,E)$ 中，图1给出从指定起点 $s\ (\in V)$ 求各顶点最短距离的算法伪代码。$V$ 为顶点集合，伪代码中各顶点 $v\in V$ 用自然数 $1,2,\ldots$ 表示。$E$ 为边集合，伪代码用二维数组 `E[][]` 表示各边，$E[i][j]$ 与 $E[j][i]$ 存储连接顶点 $i,j$ 的边长。边长非负；若顶点 $i,j$ 之间没有边，则令 $E[i][j]=\infty$ 且 $E[j][i]=\infty$。回答以下 (1) 至 (4) 问。

```text
1:  Q ← V;
2:  for all v ∈ V do
3:      distance[v] ← ∞;
4:  end for
5:  distance[s] ← 0;

6:  while Q ≠ ∅ do
7:      u ← decrease(Q);
8:      for all v ∈ V do
9:          if E[u][v] ≠ ∞ then
10:             if distance[v] > distance[u] + E[u][v] then
11:                 distance[v] ← distance[u] + E[u][v];
12:             end if
13:         end if
14:     end for
15: end while

16: function decrease(Q)
17:     dist ← ∞;
18:     node ← NULL;
19:     for all q ∈ Q do
20:         if distance[q] < dist then
21:             dist ← distance[q];
22:             node ← q;
23:         end if
24:     end for
25:     Q ← Q - {node};
26:     return node;
27: end function
```

图1：求到各顶点最短距离的算法伪代码

(1) 该算法一般以提出者的姓名命名，请写出该姓名。

(2) `decrease(Q)` 返回 $Q$ 的全部元素 $v$ 中 $\operatorname{distance}[v]$ 最小的元素，并将其从 $Q$ 中移除。现在用大小为 $|V|$ 的一维数组实现管理集合 $Q$ 的数据结构。第1行将 $V$ 的全部元素按任意顺序存入该数组；第25行用线性查找找到对应于 `node` 的元素，再用 `NULL` 覆盖以删除。请用 $\Theta$ 记法表示 `decrease(Q)` 的时间复杂度。其中 $V,E$ 的大小分别记为 $|V|,|E|$。

(3) 在第 (2) 问的情况下，请用 $\Theta$ 记法表示图1整个程序的时间复杂度。

(4) 为求最长距离而非最短距离，按以下四点修改图1程序。这里两顶点间的最长距离，是不重复经过同一顶点的路径中最大长度的路径距离。请举一个输入图 $G$ 的反例，解释为何修改后的程序不能正确求出从起点 $s$ 到各顶点的最长距离。

- 第3行将 $\operatorname{distance}[v]$ 初始化为 $-\infty$，而非 $\infty$。
- 第10行将 $\operatorname{distance}[v]$ 的更新条件改为 $\operatorname{distance}[v]<\operatorname{distance}[u]+E[u][v]$。
- 第17行将 $\mathrm{dist}\leftarrow\infty$ 改为 $\mathrm{dist}\leftarrow-\infty$。
- 第20行将 `node` 的更新条件改为 $\operatorname{distance}[q]>\mathrm{dist}$。

## **Kai**

### (1)

このアルゴリズムは

$$
\boxed{\text{ダイクストラ法}}
$$

であり、考案者は $\boxed{\text{Edsger W. Dijkstra（ダイクストラ）}}$ である。

ただし、題面ではグラフの連結性が明記されていないことに注意が必要である。擬似コードを文字どおり実行すると、$s$ から到達不能な頂点だけが $Q$ に残った時点で、それらの `distance` はすべて $\infty$ のままである。17 行目の `dist` も $\infty$ であり、20 行目の比較が狭義の `<` なので `node` は `NULL` のままとなり、25 行目でも $Q$ が縮まらない。このため、以下の (2)、(3) は「すべての頂点が $s$ から到達可能である」という意図された前提のもとでの評価である。一般の非連結グラフも扱うには、例えば `node` を $Q$ の任意の一要素で初期化してから最小値を探索する必要がある。

### (2)

19--24 行目で配列全体を調べて最小要素を求めるのに $\Theta(|V|)$、25 行目で同じ要素を線形探索して消去するのにも $\Theta(|V|)$ かかる。したがって、

$$
\boxed{\Theta(|V|)}
$$

である。

### (3)

すべての頂点が $s$ から到達可能であると仮定すれば、`while` 文は頂点を一つずつ $Q$ から除くので $|V|$ 回実行される。各反復について、`decrease(Q)` が $\Theta(|V|)$、8--14 行目の全頂点走査も $\Theta(|V|)$ である。よって、

$$
\Theta(|V|)+|V|\{\Theta(|V|)+\Theta(|V|)\}
=\boxed{\Theta(|V|^2)}
$$

となる。隣接行列を全走査するため、この評価は $|E|$ の大小には依存しない。

一方、$s$ から到達不能な頂点が存在する入力では、上で述べた `NULL` の問題により、提示された擬似コードはそのままでは終了しない。したがって、その場合には有限の実行時間計算量を与えられない。

### (4)

頂点を $V=\{s,a,b\}$ とし、辺が

$$
\{s,a\}\text{（重み 1）},\qquad
\{a,b\}\text{（重み 1）}
$$

だけであるグラフを考える。

書き換えたプログラムの動作は次のようになる。

1. $s$ を取り出すと、`distance[a]`$=1$ となる。
2. 次に $a$ を取り出すと、`distance[b]`$=2$ となる。
3. $b$ を取り出すと、すでに $Q$ から除かれた $a$ に対しても緩和を行い、`distance[a]`$=3$ と更新する。

最後の値 3 は、歩道

$$
s\to a\to b\to a
$$

の長さであり、頂点 $a$ を二度通っている。一方、$s$ から $a$ への単純路は $s\to a$ だけなので、正しい最長距離は 1 である。したがって、この貪欲な置換は訪問済み頂点を含む経路の重複を管理できず、

$$
\boxed{\text{最長単純路を正しく求められない}}
$$

ことが分かる。

## **Reference**

- [公式原題（公式サイトの保存版）](https://web.archive.org/web/20160309071546/http://www.nitech.ac.jp:80/examination/test/files/28-030.pdf)
