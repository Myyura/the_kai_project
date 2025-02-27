---
comments: false
title: 東京大学 情報理工学系研究科 コンピュータ科学専攻 2020年8月実施 専門科目 問題1
tags:
  - Tokyo-University
  - Graph-Theory
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2020年8月実施 専門科目 問題1

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

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

## **Kai**
### (1)

**$\mathbf{K}_3$:**
The complete graph $\mathbf{K}_3$ consists of 3 vertices and 3 edges, forming a triangle. Since there are no multi-edges in $\mathbf{K}_3$, the $\mathbf{B}$-operation does not apply. To apply the $\mathbf{C}$-operation, we need a vertex $\mathbf{v}$ with exactly two incident edges, connecting to vertices $\mathbf{u}$ and $\mathbf{w}$. In $\mathbf{K}_3$, each vertex is connected to two others, so we can apply the $\mathbf{C}$-operation to any vertex, forming an edge between the remaining two vertices, and applying the $\mathbf{C}$-operation again will reduce the graph to a single edge. Therefore, $\mathbf{K}_3$ is an $\mathbf{A}$-graph.

**$\mathbf{K}_4$:**
The complete graph $\mathbf{K}_4$ consists of 4 vertices and 6 edges, forming a tetrahedron. Similar to $\mathbf{K}_3$, there are no multi-edges, so the $\mathbf{B}$-operation does not apply. For the $\mathbf{C}$-operation, we need a vertex with exactly two incident edges. In $\mathbf{K}_4$, each vertex is connected to three others, so we cannot directly apply the $\mathbf{C}$-operation. Hence, $\mathbf{K}_4$ is not an $\mathbf{A}$-graph.

### (2)

Planar graphs are graphs that can be embedded in the plane without edge crossings.

Every $\mathbf{A}$-graph is planar. This can be shown by considering the operations allowed on $\mathbf{A}$-graphs:

- The $\mathbf{B}$-operation simplifies the graph by removing multi-edges, which does not affect planarity.
- The $\mathbf{C}$-operation reduces the number of vertices while maintaining planarity because it replaces a vertex of degree 2 with a single edge, which is a planar transformation.

Since a single edge is trivially planar and the operations preserve planarity, every $\mathbf{A}$-graph must be planar.

### (3)

The maximum number of edges in an $\mathbf{A}$-graph with $\mathbf{n}$ vertices without multi-edges is $\mathbf{n-1}$.

**Proof:**
- In an $\mathbf{A}$-graph, the $\mathbf{B}$-operation reduces multi-edges to a single edge, and there are no multi-edges in the final graph.
- The $\mathbf{C}$-operation reduces the number of vertices by 1 while maintaining the number of edges. Therefore, the number of edges in the final graph is $\mathbf{n-1}$.

### (4)

To determine if a given undirected graph with $\mathbf{n}$ vertices and $\mathbf{m}$ edges is an $\mathbf{A}$-graph, we can use the following algorithm:

1. **Graph Representation:** Use an adjacency list to store the graph. This allows efficient traversal and modification.
2. **Initialize:** Mark all vertices as unvisited.
3. **Identify and Apply $\mathbf{B}$-operation:**
   - For each pair of vertices, check for multi-edges.
   - If multi-edges exist, replace them with a single edge.
4. **Identify and Apply $\mathbf{C}$-operation:**
   - Traverse the graph to identify vertices of degree 2.
   - For each vertex $\mathbf{v}$ with degree 2 connecting vertices $\mathbf{u}$ and $\mathbf{w}$, remove $\mathbf{v}$ and replace edges $\mathbf{(u,v)}$ and $\mathbf{(v,w)}$ with a single edge $\mathbf{(u,w)}$.
5. **Repeat Steps 3 and 4** until no more $\mathbf{B}$ or $\mathbf{C}$ operations can be applied.
6. **Check Result:** If the graph reduces to a single edge, it is an $\mathbf{A}$-graph. Otherwise, it is not.

**Graph Data Structures:**
- **Adjacency List:** Efficiently stores the graph and allows for quick traversal and edge modification.
- **Degree List:** Maintains the degree of each vertex for quick identification of vertices suitable for the $\mathbf{C}$-operation.

The algorithm runs in $\mathbf{O(m + n)}$ time since each edge and vertex is processed a constant number of times.

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

