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
|7|0|4|5|7|12|10|12|
|8|0|4|5|7|12|10|12|

### (2)
Let $\delta(v)$ be the shortest distance from $s$ to $v$, with $\delta(v)=\infty$ for an unreachable vertex. Every finite label is the length of an actual path, so $d(v)\geq\delta(v)$.

We prove by induction that a vertex has its correct distance when it is extracted from $T$. The first vertex is $s$, with distance $0$. Suppose the assertion holds for all previously extracted vertices, and let $u$ be the next one.

If $u$ is reachable, choose a shortest path from $s$ to $u$. Let $y$ be its first vertex still in $T$ and $x$ its predecessor. Then $x$ has already been extracted with $d(x)=\delta(x)$, and its relaxation gives $d(y)\leq\delta(x)+l(xy)=\delta(y)$. Nonnegative edge lengths imply $\delta(y)\leq\delta(u)$, while the choice of $u$ gives $d(u)\leq d(y)$. Hence

$$
\delta(u)\leq d(u)\leq d(y)\leq\delta(y)\leq\delta(u),
$$

so $d(u)=\delta(u)$. If $u$ is unreachable, no relaxation can give it a finite label, and $d(u)=\delta(u)=\infty$. This completes the induction.

### (3)
Take the directed graph with exactly three edges:

$$
A\xrightarrow{1}B,\qquad A\xrightarrow{2}C,\qquad C\xrightarrow{-5}B.
$$

Starting from $A$, the algorithm extracts $B$ with label $1$ before $C$ with label $2$. When $C$ is extracted, $B$ is no longer in $T$, so the displayed algorithm does not relax $C\to B$. It returns $d(B)=1$, although the shortest path $A\to C\to B$ has length $2-5=-3$.

### (4)
If the displayed `find` operation scans $T$ directly, its total cost is $O(|V|^2)$, while all relaxations cost $O(|E|)$. Thus the displayed implementation takes

$$
\boxed{O(|V|^2+|E|)}=O(|V|^2)
$$

for a simple graph.

With adjacency lists and a binary min-heap, the algorithm performs $|V|$ extract-min operations and at most $|E|$ decrease-key operations. Therefore its worst-case running time is

$$
\boxed{O((|V|+|E|)\log |V|)}.
$$

For a connected graph, this is $O(|E|\log |V|)$.
