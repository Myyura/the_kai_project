---
sidebar_label: 2018年8月実施 アルゴリズム基礎
tags:
  - Kyoto-University
  - Discrete-Mathematics.Graph-Theory.Articulation-Point
  - Discrete-Mathematics.Graph-Algorithms.Depth-First-Search
---
# 京都大学 情報学研究科 数理工学専攻 2018年8月実施 アルゴリズム基礎

## **Author**
祭音Myyura

## **Description**
Let $G=(V,E)$ be a connected simple undirected graph with a set $V$ of $n\ge 2$ vertices and a set $E$ of edges, let $T=(V,F)$ be a spanning tree of $G$ rooted at a vertex $s\in V$, and let $\ell:V\to \{1,2,\ldots,n\}$ be a numbering on $V$, where we assume that the following conditions (a) and (b) hold.

(a) For each edge $uv\in E$, vertex $u$ is either an ancestor or a descendant of $v$ in $T$.

(b) For each vertex $v\in V\setminus\{s\}$ and the parent $u$ of $v$ in $T$, $\ell(u)<\ell(v)$.

Let $L$ denote the set of leaves in $T$. For each vertex $v\in V$, let $N(v)$ denote the set of neighbors of $v$ in $G$, and let $D(v)$ denote the set consisting of vertex $v$ and the descendants of $v$ in $T$. Define a function

$$
\operatorname{lowpt}: V\setminus (L\cup\{s\}) \to \{1,2,\ldots,n\}
$$

such that

$$
\operatorname{lowpt}(v)
=
\min\left\{
\ell(y)\mid y\in \bigcup_{x\in D(v)}N(x)
\right\},
\ 
v\in V\setminus (L\cup\{s\}).
$$

Answer the following questions.

(i) Prove that no leaf $u\in L$ is a cut-vertex in $G$.

(ii) Prove that a necessary and sufficient condition for the root $s$ to be a cut-vertex in $G$ is that $s$ has at least two children in $T$.

(iii) Prove that a necessary and sufficient condition for a vertex $u\in V\setminus(L\cup\{s\})$ to be a cut-vertex in $G$ is that $u$ has a child $v$ in $T$ such that

$$
\operatorname{lowpt}(v)\ge \ell(u).
$$

### 题目描述

设 $G=(V,E)$ 是含 $n\ge2$ 个顶点的连通简单无向图，$T=(V,F)$ 是以 $s\in V$ 为根的生成树，$\ell:V\to\{1,2,\ldots,n\}$ 是顶点编号，并满足：

1. 对每条边 $uv\in E$，$u$ 在 $T$ 中是 $v$ 的祖先或后代；
2. 对每个非根顶点 $v$ 及其父顶点 $u$，有 $\ell(u)<\ell(v)$。

令 $L$ 为 $T$ 的叶集，$N(v)$ 为 $v$ 在 $G$ 中的邻接点集合，$D(v)$ 为 $v$ 及其在 $T$ 中所有后代组成的集合。对
$v\in V\setminus(L\cup\{s\})$ 定义

$$
\operatorname{lowpt}(v)=
\min\left\{\ell(y)\ \middle|
y\in\bigcup_{x\in D(v)}N(x)\right\}.
$$

回答：

1. 证明任一叶顶点 $u\in L$ 都不是 $G$ 的割点。
2. 证明根 $s$ 是割点的充要条件是 $s$ 在 $T$ 中至少有两个子顶点。
3. 证明非叶、非根顶点
   $u\in V\setminus(L\cup\{s\})$ 是割点的充要条件是：$u$ 在 $T$ 中存在子顶点 $v$ 满足
   $\operatorname{lowpt}(v)\ge\ell(u)$。

#### 考点

- **深度优先搜索树与 lowpoint**：利用树边、回边的祖先—后代结构刻画子树是否能绕过父顶点连接到更高祖先。
- **割点判定**：分别证明 DFS 树中叶、根和一般内部顶点成为割点的充要条件。

## **Kai**
### (1)
Let $u \in L$, i.e., $u$ is a leaf of $T$.

Sinc $T$ is a spanning tree of $G$, $T$ is connected.

After removing the vertex $u$ from $T$, the remaining graph $T - u$ is still connected and spans all the vertices $V \setminus \{u\}$.

Note that $T - u$ is a subgraph of $G - u$, hence $G - u$ is connected, which implies that $u$ is not a cut-vertex.

### (2)
**(Necessity)** Assume that $s$ is a cut-vertex.

If $s$ has only one child in $T$, i.e., $s$ is a leaf vertex of $T$, then by the same argument of (1), we know that $G - s$ is still connected.

This contradicts the assumption taht $s$ is a cut-vertex.

**(Sufficiency)** Assume that $s$ has at least two children in $T$. Let two of them be $v_1$ and $v_2$.

Consider the two subtrees $D(v_1)$ and $D(v_2)$.
Since $v_1$ and $v_2$ are different children of the root $s$, the vertices in $D(v_1)$ and $D(v_2)$ are not in an ancestor-descendant relationship with each other.

By condition (a), there cannot be any edge between a vertex in $D(v_1)$ and a vertex in $D(v_2)$.

After deleting $s$, the two subtrees $D(v_1)$ and $D(v_2)$ cannot be connected to each other.
Hence $G - s$ is disconnected, which implies that $s$ is a cut-vertex.

### (3)
**(Necessity)** Assume that $u$ is a cut-vertex.

We prove that there must exist a child $v$ of $u$ such that $\text{lowpt}(v) \ge l(u)$ by contradiction.

Suppose that every child $v$ of $u$ satisfies $\text{lowpt}(v) < l(u)$.
Then for each child $v$ of $u$, there exist some vertex $x \in D(v)$ and some neighbor $y \in N(x)$ such that $l(y) < l(u)$.

Since $x \in D(v)$, the vertex $x$ is a descendant of $u$. By condition (b), every descendant of $u$ has numbering greater than $l(u)$.

Therefore, the vertex $y$ of $l(y) < l(u)$ is not in $D(v)$.

By condition (a), since $x$ is a descendant of $u$, and y has numbering smaller than $l(u)$, the vertex $y$ must be a proper ancestor of $u$.

Thus every child subtree $D(v)$ of $u$ has an edge to some proper ancestor of $u$, i.e., after deleting $u$, every child subtree $D(v)$ can still connect to the part above $u$ through an edge to a proper ancestor of $u$.

Therefore, $G - u$ remains connected, which contradicts the assumption that $u$ is a cut-vertex.

**(Sufficiency)** Assume that $u$ has a child $v$ satisfying $\text{lowpt}(v) \ge l(u)$.

Note that $v$ is a neighbor of $u$, i.e., $uv \in E$, when computing $\text{lowpt}(v)$, the vertex $u$ can be reached from $v$ by one graph edge.

Hence $\text{lowpt}(v) \le l(u)$, together with the assumption we have

$$
\text{lowpt}(v) = l(u)
$$

This means that the subtree $D(v)$ cannot reach any proper ancestor of $u$ through a graph edge. The smallest numbered vertex reachable from $D(v)$ is exactly $u$.

Equivalently, $D(v)$ has no edge to any proper ancestor of $u$.

After deleting $u$, the subtree $D(v)$ is disconnected from the part of the graph above $u$. Therefore $G - u$ is disconnected.

Hence $u$ is a cut-vertex.
