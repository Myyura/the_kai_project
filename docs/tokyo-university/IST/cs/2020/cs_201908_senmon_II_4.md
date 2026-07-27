---
sidebar_label: 2019年8月実施 専門科目II 問題4
tags:
  - Tokyo-University
  - Operations-Research.Combinatorial-Optimization.Minimum-Spanning-Tree
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目II 問題4

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Consider a connected undirected graph $G = (V, E)$ with positive edge weights. A subgraph $G' = (V, E')$ of $G$ obtained by removing some of the edges in $G$ is called a spanning tree of $G$, if $G'$ is a tree. The summation of weights of all the edges in a spanning tree is called the weight of the spanning tree. A minimum spanning tree of $G$ is a spanning tree of $G$ whose weight is minimum. You can assume appropriate data representation for graphs and trees in the questions below.

Answer the following questions.

(1) Let $e$ be the edge (or arbitrary one of the edges if there are multiple such edges) with the maximum weight in some arbitrary cycle $C$ in $G$. Prove that there is a minimum spanning tree of $G$ that does not contain $e$.

(2) Consider an arbitrary vertex subset $V'$ of $V$ ($V' \neq V, V' \neq \emptyset$) for $G = (V, E)$. Let $e$ be the edge (or arbitrary one of the edges if there are multiple such edges) with the minimum weight among the edges $(u, v) \in E$ such that $u \in V'$ and $v \in V - V'$. Prove that there is a minimum spanning tree that contains $e$. Note that $\emptyset$ denotes an empty set.

(3) Describe an $O(|E|)$-time algorithm that finds an arbitrary path between two nodes $u, v \in V$ on graph $G = (V, E)$.

(4) Assume that we are given a graph $G = (V, E)$ and its minimum spanning tree $T$. Let $G'$ be the graph obtained by adding to $G$ a new edge $e = (u, v) \not\in E$ $(u, v \in V)$ with weight $w > 0$. Describe an $O(|V|)$-time algorithm that finds a minimum spanning tree of $G'$.

(5) Prove the correctness of the algorithm described in question (4).

---

考虑一个具有正边权的连通无向图 $G = (V, E)$。如果 $G$ 的一个子图 $G' = (V, E')$ 是一个树，则称其为 $G$ 的生成树。生成树中所有边的权重之和称为生成树的权重。$G$ 的最小生成树是 $G$ 的一个生成树，其权重最小。你可以在以下问题中假设图和树的适当数据表示。

回答以下问题。

(1) 设 $e$ 是在 $G$ 的某个任意循环 $C$ 中具有最大权重的边（如果有多条这样的边，则任意选取一条）。证明存在一个不包含 $e$ 的 $G$ 的最小生成树。

(2) 对于 $G = (V, E)$ 的任意顶点子集 $V'$ ($V' \neq V, V' \neq \emptyset$)，设 $e$ 是权重最小的边（如果有多条这样的边，则任意选取一条），该边位于 $V'$ 和 $V - V'$ 的顶点之间，即 $(u, v) \in E$ 使得 $u \in V'$ 且 $v \in V - V'$。证明存在一个包含 $e$ 的最小生成树。注意，$\emptyset$ 表示空集。

(3) 描述一个 $O(|E|)$ 时间的算法，用于找到图 $G = (V, E)$ 上的两个节点 $u, v \in V$ 之间的任意路径。

(4) 假设我们给定一个图 $G = (V, E)$ 及其最小生成树 $T$。设 $G'$ 是通过向 $G$ 中添加一条新边 $e = (u, v) \not\in E$ $(u, v \in V)$，且权重 $w > 0$ 得到的图。描述一个 $O(|V|)$ 时间的算法，以找到 $G'$ 的一个最小生成树。

(5) 证明问题 (4) 中描述的算法的正确性。

### 题目描述

给定边权均为正的连通无向图 $G=(V,E)$。若删除 $G$ 的若干边得到的子图
$G'=(V,E')$ 是一棵树，则称其为 $G$ 的生成树；生成树的权重是其中全部边权之和，权重最小的生成树称为最小生成树。可自行采用合适的图和树数据结构。回答下列问题。

（1）在 $G$ 的任意一个环 $C$ 中，取一条权重最大的边 $e$；若并列则任选其一。证明存在一棵不含 $e$ 的最小生成树。

（2）任取非空真子集 $V'\subset V$，在所有一端位于 $V'$、另一端位于
$V\setminus V'$ 的边中，取一条权重最小的边 $e$；若并列则任选其一。证明存在一棵包含 $e$ 的最小生成树。

（3）描述一个 $O(|E|)$ 时间算法，在 $G$ 中找出任意两点
$u,v\in V$ 之间的一条路径。

（4）已知 $G$ 及其一棵最小生成树 $T$。向 $G$ 加入一条原来不存在的正权边
$e=(u,v)$，得到 $G'$。描述一个 $O(|V|)$ 时间算法，求 $G'$ 的一棵最小生成树。

（5）证明第（4）问算法的正确性。

#### 考点

- **最小生成树的环性质**：用交换论证排除环上的最大权边。
- **最小生成树的割性质**：证明跨越任意割的最轻边可出现在某棵最小生成树中。
- **图搜索与动态更新**：用 DFS/BFS 在线性时间找路径，并在加入新边形成的唯一环上替换最重边。
- **算法正确性证明**：将新增边情形与环性质、交换论证结合，证明更新结果最优。

## **Kai**
### (1)

Let $C$ be an arbitrary cycle in $G$, and let $e$ be the edge in $C$ with the maximum weight. We need to prove that there exists a minimum spanning tree (MST) that does not contain $e$.

#### Proof

- Step 1: Assume $T$ is an MST that contains $e$.
- Step 2: Consider the cycle $C$ in $G$ that includes $e$. Since $T$ is a tree and contains all vertices of $G$, adding $e$ to $T$ will create a cycle.
- Step 3: In the cycle $C$, remove the edge $e$ (which has the maximum weight in $C$) to break the cycle, forming a new tree $T'$. Since we removed the edge with the maximum weight, $T'$ has a smaller or equal total weight compared to $T$.
- Step 4: Conclude that $T'$ is also an MST, but it does not contain $e$.

Therefore, there exists a minimum spanning tree that does not contain the edge $e$.

### (2)

Consider an arbitrary vertex subset $V'$ of $V$ ($V' \neq V, V' \neq \emptyset$). Let $e$ be the edge with the minimum weight among the edges $(u, v) \in E$ such that $u \in V'$ and $v \in V - V'$. We need to prove that there is a minimum spanning tree that contains $e$.

#### Proof

- Step 1: Apply the Cut Property.** According to the Cut Property, for any cut in the graph, the minimum weight edge crossing the cut must be in the MST.
- Step 2: Define the cut associated with $V'$ as the set of edges $(u, v)$ where $u \in V'$ and $v \in V - V'$.
- Step 3: Since $e$ is the minimum weight edge across this cut, by the Cut Property, $e$ must be included in every MST of $G$.

Thus, there is a minimum spanning tree that contains the edge $e$.

### (3)

Describe an $O(|E|)$-time algorithm that finds an arbitrary path between two nodes $u, v \in V$ on graph $G = (V, E)$.

#### Algorithm

1. **Initialization:** Initialize a stack (or queue) and mark all vertices as unvisited.
2. **Depth-First Search (DFS):**
   - Push the starting vertex $u$ onto the stack and mark it as visited.
   - While the stack is not empty:
     - Pop a vertex $w$ from the stack.
     - If $w = v$, return the path from $u$ to $v$.
     - For each adjacent vertex $x$ of $w$ that is not visited, push $x$ onto the stack and mark it as visited.
3. **Termination:** If the search ends without finding $v$, return "No Path".

This algorithm runs in $O(|E|)$ time because in the worst case, it visits each edge once.

### (4)

Assume that we are given a graph $G = (V, E)$ and its minimum spanning tree $T$. Let $G'$ be the graph obtained by adding to $G$ a new edge $e = (u, v) \not\in E$ $(u, v \in V)$ with weight $w > 0$. Describe an $O(|V|)$-time algorithm that finds a minimum spanning tree of $G'$.

#### Algorithm

1. **Step 1:** Add the new edge $e = (u, v)$ to the MST $T$. This will create a cycle in the tree.
2. **Step 2:** Find the maximum weight edge $f$ in this cycle.
3. **Step 3:** If $f = e$, then the original MST $T$ is still valid.
4. **Step 4:** If $f \neq e$, remove $f$ from the cycle. The resulting graph is a tree and is the new MST.

The time complexity is $O(|V|)$ because finding the cycle in a tree and identifying the maximum weight edge in the cycle can be done in linear time.

### (5)

Prove the correctness of the algorithm described in question (4).

#### Proof

- **Step 1:** Adding edge $e$ to the MST $T$ creates exactly one cycle, as $T$ was a tree.
- **Step 2:** In the cycle, removing the maximum weight edge ensures that the resulting graph is still a tree with a total weight less than or equal to the original MST.
- **Step 3:** If $f \neq e$, then $f$ must be removed to maintain the minimality of the spanning tree, as $e$ introduces a smaller weight.
- **Step 4:** This process guarantees that the resulting tree is the MST of $G'$, thus proving the algorithm's correctness.

## **Knowledge**

最小生成树 图论 DFS BFS 贪心算法

### 解题技巧和信息

- **最小生成树**的关键性质可以通过切割定理和环路定理进行理解。
- 对于图中的路径查找问题，DFS 和 BFS 都是常用的线性时间算法。
- 解决最小生成树更新问题时，可以通过引入新边后检查形成的环并删除最大边的方式实现最小生成树的维护。

### 重点词汇

- **Minimum Spanning Tree (MST)** 最小生成树
- **Cycle** 环
- **Cut Property** 切割定理
- **Depth-First Search (DFS)** 深度优先搜索
- **Breadth-First Search (BFS)** 广度优先搜索

### 参考资料

1. Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press. Chap. 23: Minimum Spanning Trees.
2. Sedgewick, R., & Wayne, K. (2011). *Algorithms* (4th ed.). Addison-Wesley. Sections on Graph Algorithms.
