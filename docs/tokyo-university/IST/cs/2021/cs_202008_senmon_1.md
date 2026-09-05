---
sidebar_label: 2020年8月実施 専門科目 問題1
tags:
  - Tokyo-University
  - Discrete-Mathematics.Graph-Theory.Planar-Graph
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2020年8月実施 専門科目 問題1

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/), 祭音Myyura

## **Description**
In undirected graphs, a self-loop is an edge connecting the same vertex, and multi-edges are multiple edges connecting the same pair of vertices. From now on, we consider undirected graphs without self-loops and possibly with multi-edges. We say that a graph $\mathbf{G}$ is an $\mathbf{A}$-graph if a graph consisting of a single edge can be obtained from $\mathbf{G}$ by repeatedly applying the following two operations.

### B-operation

When two multi-edges connect a pair of vertices, replace the multi-edges with a single edge connecting the pair of vertices.

### C-operation

When one edge connects vertices $\mathbf{u}$ and $\mathbf{v}$, another edge connects $\mathbf{v}$ and $\mathbf{w}$ (where $\mathbf{u} \neq \mathbf{w}$), and there is no other edge incident to $\mathbf{v}$, remove the vertex $\mathbf{v}$ and replace the two edges with a new edge connecting $\mathbf{u}$ and $\mathbf{w}$.

Answer the following questions.

(1) Let $\mathbf{K}_n$ be a complete graph of $\mathbf{n}$ vertices. Answer whether each of $\mathbf{K}_3$ and $\mathbf{K}_4$ is an $\mathbf{A}$-graph or not.

(2) Show that every $\mathbf{A}$-graph is planar.

(3) Give the maximum number of edges of an $\mathbf{A}$-graph with $\mathbf{n}$ vertices without multi-edges, with a proof. Also, give such an $\mathbf{A}$-graph attaining the maximum for general $\mathbf{n}$, with an explanation.

(4) Give an $\mathbf{O(m + n)}$-time algorithm which, given an undirected graph with $\mathbf{n}$ vertices and $\mathbf{m}$ edges as an input, determines whether it is an $\mathbf{A}$-graph or not. Explain also the graph data structures used in the algorithm for realizing $\mathbf{B}$-operations and $\mathbf{C}$-operations.

### 题目描述

无向图中的自环连接同一顶点，重边是连接同一对顶点的多条边。以下考虑不含自环、但可含重边的无向图。若从图 $G$ 出发反复执行下列操作，最终可以得到只含一条边的图，则称 $G$ 为 A-图：

- **B 操作**：若一对顶点间有两条重边，则将它们替换为连接该顶点对的一条边；
- **C 操作**：若边 $(u,v)$ 与 $(v,w)$ 相接，$u\ne w$，且没有其他边与
  $v$ 关联，则删除 $v$，并用一条连接 $u,w$ 的新边替换原两条边。

回答下列问题。

（1）记 $K_n$ 为 $n$ 个顶点的完全图。分别判断 $K_3$ 和 $K_4$ 是否为 A-图。

（2）证明每个 A-图都是平面图。

（3）对不含重边、具有 $n$ 个顶点的 A-图，求其最大边数并证明；同时对一般
$n$ 给出达到该上界的 A-图并作说明。

（4）给出一个 $O(m+n)$ 时间算法，输入具有 $n$ 个顶点、$m$ 条边的无向图，判断它是否为 A-图；同时说明为在线性时间内实现 B、C 操作所采用的图数据结构。

## **Kai**
### (1)

**$\mathbf{K}_3$:**
The complete graph $\mathbf{K}_3$ consists of three vertices and three edges, forming a triangle. Since there are no multi-edges, the $\mathbf{B}$-operation does not initially apply. Each vertex has degree two, so apply a $\mathbf{C}$-operation to any vertex. The two remaining vertices are then joined by two parallel edges; one $\mathbf{B}$-operation leaves a single edge. Therefore, $\mathbf{K}_3$ is an $\mathbf{A}$-graph.

**$\mathbf{K}_4$:**
The complete graph $\mathbf{K}_4$ consists of 4 vertices and 6 edges, forming a tetrahedron. Similar to $\mathbf{K}_3$, there are no multi-edges, so the $\mathbf{B}$-operation does not apply. For the $\mathbf{C}$-operation, we need a vertex with exactly two incident edges. In $\mathbf{K}_4$, each vertex is connected to three others, so we cannot directly apply the $\mathbf{C}$-operation. Hence, $\mathbf{K}_4$ is not an $\mathbf{A}$-graph.

### (2)

Read a reduction sequence backwards, starting from a planar drawing of one edge.  The inverse of a B-operation adds a parallel edge, which can be drawn beside the existing edge.  The inverse of a C-operation subdivides an edge by a degree-two vertex.  Both preserve planarity, so the original A-graph is planar.

### (3)

The maximum is

$$
\boxed{2n-3}\qquad(n\ge2).
$$

Starting from a simple graph, apply each necessary B-operation immediately after a C-operation.  Every C-operation decreases the vertex count by one and can create at most one parallel pair.  There are $n-2$ C-operations, hence at most $n-2$ B-operations.  If their number is $b$, edge counting gives

$$
m-(n-2)-b=1,
$$

so $m\le2n-3$.

The bound is attained by taking an edge $uv$ and $n-2$ further vertices, each adjacent to both $u$ and $v$.  Suppressing each such vertex and then merging the resulting parallel edge reduces the graph to $uv$; it has $1+2(n-2)=2n-3$ edges.

### (4)

1. Merge all parallel edges by $\mathbf{B}$-operations.
2. Store the resulting graph in mutable adjacency lists. Maintain the current degree of each vertex, a queue of degree-two vertices, and a hash table keyed by unordered endpoint pairs.

3. While the queue is nonempty, pop a vertex and skip it if it has already been deleted or its current degree is not two. Otherwise, remove that degree-two vertex $v$ with neighbors $u,w$. Delete $uv,vw$ and insert $uw$ unless the hash table already contains it; in the latter case the insertion and the following $\mathbf{B}$-operation cancel. Update the degrees of $u,w$ and enqueue either one when its degree becomes two.
4. Accept exactly when two vertices and one edge remain.

Each vertex is removed once and each edge is inserted or deleted $O(1)$ times.  Hash-table lookup and update take expected $O(1)$ time, so the total **expected** time is $O(m+n)$, and the space is $O(m+n)$.

## **Knowledge**

图论 平面图 算法

### 难点解题思路

识别和应用 $\mathbf{B}$ 和 $\mathbf{C}$ 操作是确定 $\mathbf{A}$-图的关键。对于复杂图的处理，可以通过维护邻接表和度列表来优化操作。

### 解题技巧和信息

对于确定图的性质问题，特别是涉及特定操作的图，可以通过模拟操作并逐步简化图结构来判断。理解操作对图结构的影响是关键。

### 重点词汇

- Self-loop 自环
- Multi-edges 多重边
- Planar 平面
- Complete graph 完全图
- Algorithm 算法

### 参考资料

1. "Introduction to Graph Theory" by Douglas B. West, Chapter 4
2. "Graph Theory" by Reinhard Diestel, Chapter 5
