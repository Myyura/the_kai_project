---
sidebar_label: "2016年度 問題22 情報科学 II"
tags:
  - Nagoya-Institute-of-Technology
  - Discrete-Mathematics.Graph-Algorithms.Dijkstra-Algorithm
  - Operations-Research.Combinatorial-Optimization.Shortest-Path-Problem
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---

# 名古屋工業大学 工学研究科 情報工学専攻 2016年度 問題22 情報科学 II

## **Author**
GPT-5.6 Sol, 祭音Myyura

## **Description**

題意の要約。

設問 II について答えよ。重み付き単純無向グラフ $G=(V,E)$ において、与えられた始点 $s\in V$ から各頂点への最短距離を求めるアルゴリズムの擬似コードを図 1 に示す。

$V$ は $G$ の頂点集合であり、各頂点 $v\in V$ は $1,2,\ldots$ の自然数値で表される。$E$ は $G$ の辺集合であり、各辺は二次元配列 `E[][]` で表す。`E[i][j]` および `E[j][i]` には頂点 $i$ と頂点 $j$ を結ぶ辺の距離を格納する。辺の距離は非負とし、頂点 $i$ と頂点 $j$ が辺で結ばれていない場合は `E[i][j]`$=\infty$、また `E[j][i]`$=\infty$ とする。

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

### (1)

このアルゴリズムは一般に考案者の人名で呼ばれる。その人名を答えよ。

### (2)

`decrease(Q)` は、$Q$ に含まれる全要素 $v$ のうち最小の `distance[v]` を持つ要素を返し、その要素を $Q$ から取り除く。集合 $Q$ を管理するデータ構造を、サイズ $|V|$ の一次元配列で実現する場合を考える。すなわち、1 行目ではこの配列に $V$ の全要素が順不同で格納され、25 行目では `node` に相当する要素を一次元配列から線形探索で発見し、その要素を `NULL` で上書きして消去する。このとき、`decrease(Q)` の時間計算量を $\Theta$ 記法で示せ。ただし、$V$ の大きさを $|V|$、$E$ の大きさを $|E|$ と表す。

### (3)

(2) の場合に、図 1 の擬似コードで示されたプログラム全体の時間計算量を $\Theta$ 記法で示せ。

### (4)

最短距離ではなく最長距離を求めることを目的に、図 1 のプログラムを次の 4 箇所だけ書き換えたとする。ここで二頂点間の最長距離とは、同じ頂点を二度通らない経路のうち最大の長さを持つ経路の距離を指す。

- 3 行目で `distance[v]` を $\infty$ ではなく $-\infty$ で初期化する。
- 10 行目の更新条件を `distance[v] < distance[u] + E[u][v]` とする。
- 17 行目で `dist ← ∞` を `dist ← -∞` とする。
- 20 行目の `dist`, `node` の更新条件を `distance[q] > dist` とする。

この書き換えたプログラムでは、始点 $s$ から各頂点への最長距離を正しく求められない。その理由を、反例となる入力グラフ $G$ を一つ挙げて説明せよ。

出典：[名古屋工業大学 2016年度 原問題](https://web.archive.org/web/20160309071546/http://www.nitech.ac.jp:80/examination/test/files/28-030.pdf)。

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
