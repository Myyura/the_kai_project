---
sidebar_label: 2016年8月実施 専門科目I 問題2
tags:
  - Tokyo-University
  - Operations-Research.Combinatorial-Optimization.Minimum-Spanning-Tree
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2016年8月実施 専門科目I 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
Suppose that we are given an undirected graph $G$ where each edge is associated with a cost. A *minimum spanning tree* is a subgraph of the graph such that: it connects all the vertices; it is a tree; and it takes a minimum total cost. The following pseudo code (Algorithm A) shows an algorithm to compute a minimum spanning tree. We let the numbers of vertices and edges of $G$ be denoted by $V$ and $E$, respectively.

**Step 1.** Choose an arbitrary vertex and let $G'$ be the subtree of $G$ consisting of only that vertex.

**Step 2.** Choose an edge with a minimum cost, out of $\boxed{(a)}$, and add the edge and its end vertices to $G'$.

**Step 3.** Repeat Step 2 until $G'$ contains all the vertices of $G$.

Answer the following question.

(1) Answer an appropriate phrase that fills $\boxed{(a)}$ above.

There are multiple ways to implement Algorithm A. Specifically, computation time differs depending on how to find an edge with a minimum cost in Step 2.

Answer the following questions.

(2) Suppose that $G$ is dense ($V^2\approx E$) and given as an adjacency matrix. Explain a time-efficient implementation of Algorithm A in this case.

Answer also the time complexity of the implementation, and explain why.

(3) Suppose that $G$ is sparse ($V\approx E$) and given as adjacency lists. Explain a time-efficient implementation of Algorithm A in this case.

Answer also the time complexity of the implementation, and explain why.

(4) Show that the graph $G'$ obtained using Algorithm A is a minimum spanning tree of the graph $G$.

### 题目描述

给定带权无向图 $G$。最小生成树是连接全部顶点、无环且总权值最小的子图。记顶点数、边数分别为 $V,E$。算法 A 如下：

1. 任取一个顶点，以该点为唯一顶点的子树记为 $G'$；
2. 从空格（a）所指定的边中选择权值最小者，将该边及其端点加入 $G'$；
3. 重复步骤 2，直至 $G'$ 包含 $G$ 的全部顶点。

（1）填写（a）。

（2）若 $G$ 为稠密图（$V^2\approx E$），且以邻接矩阵给出，说明算法 A 的高效实现及其时间复杂度。

（3）若 $G$ 为稀疏图（$V\approx E$），且以邻接表给出，回答同一问题。

（4）证明算法 A 得到的 $G'$ 是 $G$ 的最小生成树。

## **Kai**
### (1)
（a）应填：**恰有一个端点属于当前 $G'$ 的边**，即割

$$
\bigl(V(G'),\,V(G)\setminus V(G')\bigr)
$$

上的边。这就是 Prim 算法。

### (2)
对每个尚未加入 $G'$ 的顶点 $v$，维护

$$
d[v]=\min\{c(u,v)\mid u\in V(G')\}
$$

及取得该最小值的父顶点。每轮线性扫描所有未选顶点，取 $d[v]$ 最小者加入；再扫描邻接矩阵中 $v$ 所在的一行以更新各 $d$。每轮耗时 $O(V)$，共 $V-1$ 轮，故时间为 $O(V^2)$，额外空间为 $O(V)$。

### (3)
仍维护 $d[v]$，但用以 $d$ 为键的最小堆保存未选顶点。取最小值后，只沿新顶点的邻接表检查相邻边，并执行减键操作。二叉堆实现的时间为

$$
O((V+E)\log V)=O(E\log V),
$$

空间为 $O(V+E)$。在 $E\approx V$ 时优于邻接矩阵实现。

### (4)
归纳证明：算法每轮后，都存在一棵包含当前 $G'$ 的最小生成树 $T$。初始时结论显然成立。

设本轮选择跨割的最轻边 $e$。若 $e\in T$，结论不变。若 $e\notin T$，把 $e$ 加入 $T$ 会形成唯一环；环上从割的一侧走到另一侧时必经过另一条跨割边 $f$。由 $e$ 的选择，$c(e)\le c(f)$。于是

$$
T'=T-f+e
$$

仍是生成树，且总权值不大于 $T$，所以也是最小生成树，并包含扩张后的 $G'$。归纳成立。算法结束时 $G'$ 本身含 $V-1$ 条边并覆盖全部顶点，故 $G'=T$，即为最小生成树。
