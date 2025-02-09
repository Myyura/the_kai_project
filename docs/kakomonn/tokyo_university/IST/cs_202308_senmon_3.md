---
comments: false
title: 東京大学 情報理工学系研究科 コンピュータ科学専攻 2023年8月実施 専門科目 問題3
tags:
  - Tokyo-University
  - Graph-Theory
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2023年8月実施 専門科目 問題3

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Let $G = (V, E)$ be an undirected graph with no self-loops (edges joining the same vertex) nor multi-edges (two or more edges joining the same two vertices), with $|V| = n$, $|E| = m$. If there is a vertex $v$ in a connected graph $G$ such that after deleting $v$, the resulting graph is not connected, we call $v$ a cut vertex of $G$.

Answer the following questions:

(1) Describe an algorithm to check whether or not $G$ is connected. Estimate the time complexity of the algorithm.

(2) Describe a $O(m)$ time algorithm to find a spanning tree $T$, given a connected graph $G$.

(3) Let $T$ be a spanning tree of a connected graph $G$, and assume that $v$ is a non-leaf node of $T$ (i.e., the degree of $v$ in $T$ is at least two) and that $v$ is not a cut vertex of $G$. Let $e$ be an edge of $T$ that is incident with $v$. Prove that one can obtain another spanning tree of $G$ from $T$ by replacing $e$ with another edge $f \neq e$ of $G$.

(4) Describe a $o(mn)$ time algorithm, given a connected graph $G$, to find all cut vertices of $G$.

---

设 $G = (V, E)$ 为一个无向图，该图没有自环（连接到同一顶点的边）也没有重边（连接同一对顶点的两个或更多边），且 $|V| = n$，$|E| = m$。如果在一个连通图 $G$ 中有一个顶点 $v$，使得删除 $v$ 后所得的图不再连通，我们称 $v$ 为 $G$ 的割点。

回答以下问题：

(1) 描述一个算法来检查 $G$ 是否连通。估计该算法的时间复杂度。

(2) 描述一个 $O(m)$ 时间的算法，给定一个连通图 $G$，找到一棵生成树 $T$。

(3) 设 $T$ 为连通图 $G$ 的一棵生成树，并假设 $v$ 是 $T$ 的一个非叶节点（即 $v$ 在 $T$ 中的度数至少为二），并且 $v$ 不是 $G$ 的割点。令 $e$ 为 $T$ 中与 $v$ 相邻的一条边。证明通过用 $G$ 的另一条边 $f \neq e$ 替换 $e$，可以得到 $G$ 的另一棵生成树。

(4) 描述一个 $o(mn)$ 时间的算法，给定一个连通图 $G$，找到 $G$ 的所有割点。

## **Kai**
### (1)

#### Algorithm

To check whether the graph $G = (V, E)$ is connected, you can perform a Depth-First Search (DFS) or Breadth-First Search (BFS) starting from any vertex $v \in V$. The algorithm proceeds as follows:

1. Start from an arbitrary vertex $v_0$ and perform DFS or BFS.
2. Mark all visited vertices during the search.
3. After the search is complete, check if all vertices have been visited.

If all vertices are visited, then the graph is connected; otherwise, it is not.

#### Time Complexity

- The time complexity of both DFS and BFS is $O(n + m)$, where $n = |V|$ and $m = |E|$. This is because, in the worst case, you will visit every vertex and every edge exactly once.

### (2)

#### Algorithm

To find a spanning tree $T$ for a connected graph $G$, you can use a Depth-First Search (DFS) or Breadth-First Search (BFS):

1. Start from an arbitrary vertex $v_0$ and initialize $T$ as an empty set of edges.
2. Perform DFS or BFS, adding each edge traversed to $T$ until all vertices are visited.
3. The resulting set of edges $T$ forms a spanning tree.

#### Time Complexity

- The time complexity of this algorithm is $O(m)$ because each edge is considered exactly once.

### (3)

#### Proof

Let $T$ be a spanning tree of $G$ and $v$ be a non-leaf node in $T$. Suppose $v$ is not a cut vertex of $G$ and $e$ is an edge incident to $v$ in $T$.

1. Since $v$ is not a cut vertex, removing $v$ from $G$ does not disconnect the graph. Therefore, there exists another path in $G \setminus \{v\}$ that connects the components formed by the removal of $v$.
2. Let $f$ be an edge in $G$ that connects two components of $T \setminus \{e\}$.
3. Adding edge $f$ to $T$ will create a cycle because $T$ is a spanning tree.
4. Remove $e$ from the cycle, and you will obtain a new spanning tree $T'$. The edge $f$ replaces $e$, forming $T'$, which is also a spanning tree.

Thus, replacing edge $e$ with $f$ gives another spanning tree.

### (4)

#### Algorithm

To find all cut vertices of $G$ efficiently, we can use a Depth-First Search (DFS) based algorithm, known as Tarjan's algorithm:

1. Perform a DFS traversal of $G$, numbering the vertices in the order they are visited.
2. For each vertex $v$, maintain two values:
   - **DFS number**: The order in which the vertex was visited.
   - **Low number**: The lowest DFS number reachable from $v$ using back edges.
3. A vertex $v$ is a cut vertex if:
   - It is the root of the DFS tree and has more than one child.
   - It is not the root, and there is a child $u$ such that no vertex in the subtree rooted at $u$ can reach a vertex higher up in the DFS tree than $v$.

#### Time Complexity

- The time complexity of Tarjan's algorithm is $O(n + m)$, which is much more efficient than $o(mn)$.

## **Knowledge**

DFS 图论 连通性 生成树 割点 切点

### 解题技巧和信息

1. **图的连通性检查**: DFS 和 BFS 是检查图的连通性的基本工具。
2. **生成树构造**: DFS 或 BFS 都可以用来构造图的生成树，时间复杂度为 $O(m)$。
3. **割点的寻找**: Tarjan 算法是寻找割点的经典算法，其时间复杂度为 $O(n + m)$，适合大规模图的处理。

### 重点词汇

- Cut vertex: 割点
- Spanning tree: 生成树
- Depth-First Search (DFS): 深度优先搜索
- Connected graph: 连通图

### 参考资料

1. Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein. "Introduction to Algorithms." MIT Press, Chapter 22, "Elementary Graph Algorithms".
2. Robert Tarjan, "Depth-First Search and Linear Graph Algorithms", SIAM Journal on Computing, 1972.
