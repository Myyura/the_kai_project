---
sidebar_label: 2019年8月実施 専門科目II 問題4
tags:
  - Tokyo-University
  - Operations-Research.Combinatorial-Optimization.Minimum-Spanning-Tree
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目II 問題4

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
Consider a connected undirected graph $G = (V, E)$ with positive edge weights. A subgraph $G' = (V, E')$ of $G$ obtained by removing some of the edges in $G$ is called a spanning tree of $G$, if $G'$ is a tree. The summation of weights of all the edges in a spanning tree is called the weight of the spanning tree. A minimum spanning tree of $G$ is a spanning tree of $G$ whose weight is minimum. You can assume appropriate data representation for graphs and trees in the questions below.

Answer the following questions.

(1) Let $e$ be the edge (or arbitrary one of the edges if there are multiple such edges) with the maximum weight in some arbitrary cycle $C$ in $G$. Prove that there is a minimum spanning tree of $G$ that does not contain $e$.

(2) Consider an arbitrary vertex subset $V'$ of $V$ ($V' \neq V, V' \neq \emptyset$) for $G = (V, E)$. Let $e$ be the edge (or arbitrary one of the edges if there are multiple such edges) with the minimum weight among the edges $(u, v) \in E$ such that $u \in V'$ and $v \in V - V'$. Prove that there is a minimum spanning tree that contains $e$. Note that $\emptyset$ denotes an empty set.

(3) Describe an $O(|E|)$-time algorithm that finds an arbitrary path between two nodes $u, v \in V$ on graph $G = (V, E)$.

(4) Assume that we are given a graph $G = (V, E)$ and its minimum spanning tree $T$. Let $G'$ be the graph obtained by adding to $G$ a new edge $e = (u, v) \not\in E$ $(u, v \in V)$ with weight $w > 0$. Describe an $O(|V|)$-time algorithm that finds a minimum spanning tree of $G'$.

(5) Prove the correctness of the algorithm described in question (4).


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

取任意最小生成树 $T$。若 $e\notin T$ 即得结论。否则删除 $e$ 将 $T$ 分成两部分，路径 $C-e$ 必含跨越这两部分的边 $f$。由于 $w(f)\le w(e)$，$T-e+f$ 是权重不大于 $T$ 的生成树，因此也是最小生成树，且不含 $e$。

### (2)

取最小生成树 $T$。若 $e\in T$ 即得结论。否则 $T+e$ 产生唯一环，该环除 $e$ 外还含另一条跨越割 $(V',V\setminus V')$ 的边 $f$。由 $w(e)\le w(f)$，$T-f+e$ 也是最小生成树，且包含 $e$。

### (3)

用邻接表存图，从 $u$ 做 DFS 或 BFS；首次访问顶点时记录其前驱。到达 $v$ 后沿前驱回溯即可恢复路径。时间为 $O(|V|+|E|)$；连通且至少两个顶点时 $|E|\ge |V|-1$，故为 $O(|E|)$。若 $u=v$，直接返回该顶点。

### (4)

在 $T$ 上搜索唯一的 $u$–$v$ 路径 $P$。取 $P\cup\{e\}$ 中最大权边 $f$，输出

$$
T'=T+e-f.
$$

若 $f=e$，输出原树即可。搜索仅遍历含 $|V|-1$ 条边的树，找最大边和修改均为 $O(|V|)$。

### (5)

$T'$ 显然是生成树。任取 $G'$ 的生成树 $S$：

- 若 $e\notin S$，则 $S$ 是 $G$ 的生成树，故 $w(S)\ge w(T)\ge w(T')$。
- 若 $e\in S$，删除 $e$ 得到一个割。$P$ 上必有跨割边 $g$，且 $w(g)\le w(f)$。于是 $S-e+g$ 是 $G$ 的生成树，故

$$
w(T)\le w(S)-w(e)+w(g)\le w(S)-w(e)+w(f).
$$

因此 $w(T')=w(T)+w(e)-w(f)\le w(S)$。对所有 $S$ 均成立，故 $T'$ 是 $G'$ 的最小生成树；证明同样覆盖并列边权。
