---
sidebar_label: 2019年8月実施 専門科目II 問題4
tags:
  - Tokyo-University
  - Operations-Research.Combinatorial-Optimization.Minimum-Spanning-Tree
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目II 問題4

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/), 祭音Myyura

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

## **Kai**
### (1)

Let $C$ be an arbitrary cycle in $G$, and let $e$ be the edge in $C$ with the maximum weight. We need to prove that there exists a minimum spanning tree (MST) that does not contain $e$.

#### Proof

- Step 1: Let $T$ be an MST. If $e\notin T$, the claim already holds.
- Step 2: If $e\in T$, removing $e$ splits $T$ into two components. The path $C-e$ connects the two endpoints of $e$, so it contains an edge $f$ crossing these components.
- Step 3: Then $T'=T-e+f$ is a spanning tree. Since $e$ has maximum weight on $C$, $w(f)\le w(e)$, hence $w(T')\le w(T)$.
- Step 4: By minimality of $T$, equality holds. Thus $T'$ is an MST and does not contain $e$.

Therefore, there exists a minimum spanning tree that does not contain the edge $e$.

### (2)

Consider an arbitrary vertex subset $V'$ of $V$ ($V' \neq V, V' \neq \emptyset$). Let $e$ be the edge with the minimum weight among the edges $(u, v) \in E$ such that $u \in V'$ and $v \in V - V'$. We need to prove that there is a minimum spanning tree that contains $e$.

#### Proof

- Step 1: Let $T$ be an MST. If $e\in T$, the claim already holds.
- Step 2: Otherwise, adding $e$ to $T$ creates a cycle. This cycle crosses the cut $(V',V-V')$ through $e$ and at least one other edge $f\in T$.
- Step 3: Since $e$ is a minimum-weight crossing edge, $w(e)\le w(f)$. Thus $T'=T-f+e$ is a spanning tree with $w(T')\le w(T)$, so equality holds and $T'$ is an MST containing $e$.

Thus, there is a minimum spanning tree that contains the edge $e$.

### (3)

Describe an $O(|E|)$-time algorithm that finds an arbitrary path between two nodes $u, v \in V$ on graph $G = (V, E)$.

#### Algorithm

1. **Initialization:** Initialize a stack (or queue), mark all vertices as unvisited, and initialize a predecessor array `parent`.
2. **Depth-First Search (DFS):**
   - Push the starting vertex $u$ onto the stack and mark it as visited.
   - While the stack is not empty:
     - Pop a vertex $w$ from the stack.
     - If $w = v$, follow `parent` pointers from $v$ to $u$ and reverse them to return the path.
     - For each adjacent unvisited vertex $x$ of $w$, set `parent[x] = w`, push $x$, and mark it as visited.
3. **Termination:** If the search ends without finding $v$, return "No Path".

DFS takes $O(|V|+|E|)=O(|E|)$ because $G$ is connected, and path reconstruction takes $O(|V|)$.

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

- **Step 1:** Adding $e$ to $T$ creates the unique cycle $C$, and $T'=T+e-f$ is a spanning tree. Since $f$ is a maximum-weight edge of $C$, $w(e)\le w(f)$ and $w(T')\le w(T)$.
- **Step 2:** Let $S$ be any spanning tree of $G'$. If $e\notin S$, then $S$ is a spanning tree of $G$, so $w(S)\ge w(T)\ge w(T')$.
- **Step 3:** If $e\in S$, removing $e$ defines a cut. The $u$--$v$ path $C-e$ in $T$ contains an edge $g$ crossing this cut. Then $S-e+g$ is a spanning tree of $G$, and $w(g)\le w(f)$.
- **Step 4:** Hence $w(T)\le w(S)-w(e)+w(g)\le w(S)-w(e)+w(f)$, so $w(T')=w(T)+w(e)-w(f)\le w(S)$. Thus $T'$ is an MST of $G'$.

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
