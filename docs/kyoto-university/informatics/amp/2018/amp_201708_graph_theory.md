---
sidebar_label: 2017年8月実施 グラフ理論
tags:
  - Kyoto-University
  - Graph-Theory-Combinatorial-Optimization.Combinatorial-Optimization.Minimum-Spanning-Tree
  - Graph-Theory-Combinatorial-Optimization.Graph-Algorithms.Kruskal-Algorithm
---

# 京都大学 情報学研究科 数理工学専攻 2017年8月実施 グラフ理論

## Author
祭音Myyura

## Description
### English Version
Let $\mathbb{R}_+$ be the set of non-negative reals, and let $N=[G,w]$ be a network that consists of a simple connected graph $G=(V,E)$ and an edge weight function

$$
w:E\to \mathbb{R}_+.
$$

Let $|V|=n\ge 2$.

For a partition

$$
\pi=\{V_1,V_2,\ldots,V_p\}
$$

of $V$, let $E(\pi)$ denote the set of edges between distinct vertex subsets $V_i,V_j\in \pi$. Denote by $\Pi$ the set of all partitions of $V$.

Let

$$
T=(V,\{a_1,a_2,\ldots,a_{n-1}\})
$$

be a minimum spanning tree obtained from $N$ by Kruskal's algorithm, where $a_i$ is added to $T$ as the $i$-th tree edge.

For forests

$$
T_0=(V,\emptyset)
$$

and

$$
T_i=(V,\{a_1,a_2,\ldots,a_i\}),\quad i=1,2,\ldots,n-1,
$$

let $\pi_i\in \Pi$, $i=0,1,\ldots,n-1$, be the partition formed by the connected components of the forest $T_i$, where

$$
\pi_{n-1}=\{V\}.
$$

Choose a real value $y(\pi)$ for each partition $\pi\in\Pi$ as follows:

$$
y(\pi_0)=w(a_1),
$$

$$
y(\pi_i)=w(a_{i+1})-w(a_i),\quad i=1,2,\ldots,n-2,
$$

and

$$
y(\pi)=0,\quad \forall \pi\in \Pi-\{\pi_0,\pi_1,\ldots,\pi_{n-2}\}.
$$

Answer the following questions.

(i) Give a description of Kruskal's algorithm to find a minimum spanning tree of $N$.

(ii) Prove that each edge $e\in E$ admits an index

$$
j(e)\in \{0,1,\ldots,n-1\}
$$

which satisfies the conditions:

$$
e\in E(\pi_i),\quad \forall i\le j(e),
$$

and

$$
e\notin E(\pi_i),\quad \forall i>j(e).
$$

(iii) Prove that

$$
w(a_i)\le w(e),\quad \forall e\in E(\pi_{i-1})
$$

holds for each $i=1,2,\ldots,n-1$.

(iv) Prove that

$$
\sum_{j=0,1,\ldots,i-1}y(\pi_j)=w(a_i)
$$

holds for each $i=1,2,\ldots,n-1$.

(v) Prove that

$$
\sum_{\pi\in\Pi:e\in E(\pi)}y(\pi)\le w(e)
$$

holds for each edge $e\in E$.

## Kai
### (i)
Kruskal's algorithm sorts all edges in non-decreasing order of their weights.
Starting from the empty forest $T_0=(V,\emptyset)$, it scans the edges in this order.
Whenever the current edge connects two different connected components of the current forest, the edge is added.
If the current edge would create a cycle, it is skipped.
The algorithm stops when $n-1$ edges have been added.
The resulting graph is a minimum spanning tree.

### (ii)

Let $e=uv\in E$ be any edge.

For each $i=0,1,\ldots,n-1$, the partition $\pi_i$ is the partition of $V$ into the connected components of the forest $T_i$.

Therefore,

$$
e\in E(\pi_i)
$$

if and only if the two endpoints $u$ and $v$ of $e$ belong to different connected components of $T_i$.

As $i$ increases, the forest $T_i$ gains more edges. Hence connected components can only merge; they never split. Therefore, once $u$ and $v$ become contained in the same connected component, they remain in the same connected component for all later forests.

Thus, the sequence of truth values of the condition $e\in E(\pi_i)$ has the following form:

$$
\text{true, true, true, }\ldots,\text{ true, false, false, }\ldots,\text{ false}.
$$

Since $T_0=(V,\emptyset)$, every edge has endpoints in different connected components of $T_0$. Hence

$$
e\in E(\pi_0).
$$

Since $T_{n-1}$ is a spanning tree, all vertices are in one connected component. Hence

$$
e\notin E(\pi_{n-1}).
$$

Therefore the following maximum

$$
j(e):=\max\{i:e\in E(\pi_i)\}.
$$

is well-defined and satisfies

$$
0 \le j(e) \le n-1
$$

Then, by the monotonicity of connected components, we have

$$
e\in E(\pi_i),\quad \forall i\le j(e),
$$

$$
e\notin E(\pi_i),\quad \forall i>j(e).
$$

### (iii)
Fix $i\in\{1,2,\ldots,n-1\}$.

At the beginning of the $i$-th step of Kruskal's algorithm, the current forest is

$$
T_{i-1}=(V,\{a_1,a_2,\ldots,a_{i-1}\}).
$$

Let $e\in E(\pi_{i-1})$.
Then the endpoints of $e$ belong to two distinct connected components of $T_{i-1}$. Hence adding $e$ to $T_{i-1}$ would not create a cycle.

Thus $e$ is an admissible edge at the $i$-th step of Kruskal's algorithm.

By Kruskal's rule, $a_i$ is chosen as a minimum-weight admissible edge at this step. Therefore,

$$
w(a_i)\le w(e).
$$

Since $e\in E(\pi_{i-1})$ was arbitrary, we have

$$
w(a_i)\le w(e),\quad \forall e\in E(\pi_{i-1}).
$$

### (iv)
When $i=1$, we have

$$
\sum_{j=0}^{0}y(\pi_j)=y(\pi_0)=w(a_1).
$$

So the claim holds.

Now suppose $i\ge 2$. By the definition of $y$,

$$
y(\pi_0)=w(a_1),
$$

and

$$
y(\pi_j)=w(a_{j+1})-w(a_j),\quad j=1,2,\ldots,i-1.
$$

Hence

$$
\begin{aligned}
\sum_{j=0}^{i-1}y(\pi_j)
&=y(\pi_0)+\sum_{j=1}^{i-1}y(\pi_j)\\
&=w(a_1)+\sum_{j=1}^{i-1}\{w(a_{j+1})-w(a_j)\}\\
&=w(a_1)+\{w(a_2)-w(a_1)\}\\
&\quad+\{w(a_3)-w(a_2)\}+\cdots+\{w(a_i)-w(a_{i-1})\}\\
&=w(a_i).
\end{aligned}
$$

### (v)
Let $e\in E$ be arbitrary.

By part (ii), there exists an index $j(e)$ such that

$$
e\in E(\pi_i),\quad \forall i\le j(e),
$$

$$
e\notin E(\pi_i),\quad \forall i>j(e).
$$

Moreover, by the definition of $y$, the only partitions that may have nonzero $y$-values are

$$
\pi_0,\pi_1,\ldots,\pi_{n-2}.
$$

Therefore,

$$
\sum_{\pi\in\Pi:e\in E(\pi)}y(\pi)
=
\sum_{i=0}^{j(e)}y(\pi_i).
$$

By part (iv), taking $i=j(e)+1$, we obtain

$$
\sum_{i=0}^{j(e)}y(\pi_i)=w(a_{j(e)+1}).
$$

Since $e\in E(\pi_{j(e)})$, part (iii), applied with $i=j(e)+1$, gives

$$
w(a_{j(e)+1})\le w(e).
$$

Therefore,

$$
\sum_{\pi\in\Pi:e\in E(\pi)}y(\pi)
=
w(a_{j(e)+1})
\le w(e).
$$

Thus,

$$
\sum_{\pi\in\Pi:e\in E(\pi)}y(\pi)\le w(e)
$$

holds for every edge $e\in E$.
