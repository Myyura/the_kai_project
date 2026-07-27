---
sidebar_label: 2020年8月実施 専門科目II 問題2
tags:
  - Hiroshima-University
  - Operations-Research.Combinatorial-Optimization.Shortest-Path-Problem
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2020年8月実施 専門科目II 問題2


## **Author**
祭音Myyura

## **Description**
有向グラフ $G = (V, E, l)$ を考える。
$V$ は頂点集合、$E$ は辺集合、$l(e)$ は辺 $e$ の長さとする。
また、$N_v$ を頂点 $v$ の隣接頂点集合とする。
この時、以下の $\textbf{Shortest}(G, s)$ は、$G$ 上のある頂点 $s$ を始点とし、頂点 $s$ から他の各頂点までの最短距離を求めるアルゴリズムである。

(1) Table 1 は、グラフ $G_1$ を入力とし、頂点 $1$ を始点とした場合の $\textbf{Shortest}(G_1, 1)$ の実行の過程における、各頂点 $v$ の $d(v)$ の値を示したものである。Table 1 を完成させよ。

(2) $G$ のすべての辺の長さが非負である場合に、$\textbf{Shortest}(G, s)$ で得られる $d(v)$ が、すべての頂点 $v \in V$ について頂点 $s$ からの最短距離となることを証明せよ。

(3) $G$ に負の長さの辺が存在する場合には、$\textbf{Shortest}(G, s)$ は $s$ からの最短距離を求められない場合があることを証明せよ。

(4) $\textbf{Shortest}(G, s)$ の最悪計算時間とその理由を述べよ。

---

Let $G = (V, E, l)$ be a directed graph, where $V$ is a set of nodes, $E$ is a set of edges, and $l(e)$ is the non-negative length of edge $e$.
Let $N_v$ be a set of adjacent nodes of node $v$. The following algorithm $\textbf{Shortest}(G, s)$ computes the shortest distance from a node $s$ to each of the other nodes.

(1) Table 1 shows the value of $d(v)$ for each $v \in V$ in the process of execution of $\textbf{Shortest}(G_1, 1)$, where the input graph is $G_1$ and the starting node is $1$. Complete Table 1.

(2) Prove that $d(v)$ for each $v \in V$ stores the shortest distance from $s$ to $v$ when $\textbf{Shortest}(G, s)$ terminates.

(3) Prove that $\textbf{Shortest}(G, s)$ may not find the shortest distance if some of the edges take negative length.

(4) Derive the time complexity of $\textbf{Shortest}(G, s)$.

<figure style="text-aligned:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hiroshima_university/ASE/is_202008_senmon_II_2_p1.png" width="800" height="350" alt=""/>
</figure>

### 题目描述

考虑有向图 $G=(V,E,l)$，其中 $V$ 为顶点集、$E$ 为边集、$l(e)$ 为边 $e$ 的长度，$N_v$ 表示顶点 $v$ 的邻接顶点集。图中给出的算法 $\mathbf{Shortest}(G,s)$ 以 $s$ 为起点，计算从 $s$ 到其他各顶点的最短距离。

1. 表 1 记录以图 $G_1$ 为输入、顶点 $1$ 为起点执行 $\mathbf{Shortest}(G_1,1)$ 时，各轮中每个顶点 $v$ 的 $d(v)$ 值；补全该表。
2. 当 $G$ 的所有边长均非负时，证明算法结束后，对每个 $v\in V$，$d(v)$ 都等于从 $s$ 到 $v$ 的最短距离。
3. 证明当 $G$ 中存在负长度边时，$\mathbf{Shortest}(G,s)$ 可能无法求出从 $s$ 出发的最短距离。
4. 给出 $\mathbf{Shortest}(G,s)$ 的最坏运行时间并说明理由。

算法、图 $G_1$ 与待补全的表 1 均见题中图示。

#### 考点

- 最短路问题：跟踪基于贪心松弛的单源最短路算法，证明其在非负边权下的正确性，分析负边反例及堆实现的复杂度。

## **Kai**
### (1)

|round|$d(1)$|$d(2)$|$d(3)$|$d(4)$|$d(5)$|$d(6)$|$d(7)$|
|-|-|-|-|-|-|-|-|
|1|0|$\infty$|$\infty$|$\infty$|$\infty$|$\infty$|$\infty$|
|2|0|4|5|$\infty$|$\infty$|$\infty$|$\infty$|
|3|0|4|5|7|14|$\infty$|$\infty$|
|4|0|4|5|7|14|14|$\infty$|
|5|0|4|5|7|13|10|$\infty$|
|6|0|4|5|7|12|10|12|

### (2)
Proof by contradiction:

Let $\delta(v)$ denote the length of a shortest path from $s$ to $v$.
Suppose that $u$ is the first vertex extracted from $T$ for which $d(u) \neq \delta(u)$.

Let $s \rightarrow P_1 \rightarrow x \rightarrow y \rightarrow P_2 \rightarrow u$ be a shortest path from $s$ to $u$, where $x$ satifies $d(x) = \delta(x)$ but $y$ does not.
When $x$ is extracted from $T$, since $y$ is adjacent to $x$, $d(y)$ will be updated

$$
d(y) = d(x) + l(xy) \leq \delta(x) + l(xy) + l(y \rightarrow P_2 \rightarrow u) = \delta(u) \leq d(u)
$$

Now both $y$ and $u$ are in $T$ when $u$ is chosen.
Note that by assumption $u$ is the first vertex extracted from $T$ for which $d(u) \neq \delta(u)$, hence either $d(y) = \delta(y)$ or $y$ is chosen after $u$, which means that $d(u) \leq d(y)$.
But by assumption we have $d(y) \neq \delta(y)$, hence we have

$$
d(u) \leq d(y)
$$

Thus the two inequalities must be equalities,

$$
d(y) = \delta(u) = d(u)
$$

a contradiction.

### (3)
<figure style="text-aligned:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hiroshima_university/ASE/is_202008_senmon_II_2_p2.png" width="300" height="300" alt=""/>
</figure>

$\textbf{Shortest}(G, A)$ from $A$ will first develop $B$, and will later fail to find $A \rightarrow C \rightarrow B$.

### (4)
If we stores the vertex set $T$ as a heap, and edges as an adjacent list, then finding $u$ of minimum $d(u)$ takes $O(\log |V|)$.

Note that we need update $d(v)$ of every $v \in T \cap N_u$, which can be done by inserting a "new vertex" $v$ of updated $d(v)$ into heap $T$,
hence the size of $T$ is at most $|E|$.

Therefore, the time complexity of $\textbf{Shortest}(G, s)$ is $O(|E|\log |V|)$.
