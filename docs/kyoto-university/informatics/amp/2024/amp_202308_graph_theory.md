---
sidebar_label: 2023年8月実施 グラフ理論
tags:
  - Kyoto-University
  - Operations-Research.Combinatorial-Optimization.Shortest-Path-Problem
  - Discrete-Mathematics.Graph-Algorithms.Bellman-Ford-Algorithm
---
# 京都大学 情報学研究科 数理工学専攻 2023年8月実施 グラフ理論

## **Author**
祭音Myyura

## **Description**
### 日本語版
$G=(V, E)$ を節点集合 $V$、 枝集合 $E$ から成る単純強連結有向グラフとし、$V$ に属する節点の個数を $n$、$E$に属する枝の本数を $m$ とする。
$G$ の各枝 $e \in E$ に実数値重み $w(e)$ を与えて得られるネッタワークを $N=[G, w]$ とする。
節点 $u$ から節点 $v$ への有向枝は $(u,v)$ と書き、その枝重みは $w(u,v)$ とも書く。
節点 $v_1, v_2, \ldots, v_k$ をこの順に訪ねる路 $P= (v_1, v_2, \ldots, v_k)$ について、枝の本数を $\mu(P) \triangleq k-1$、枝重みの和を $\omega(P) \triangleq \sum_{i=1}^{k-1} w(v_i, v_{i+1})$ と書く。

節点 $s\in V$ が与えられたものとする。各節点 $v\in V$ について、$s$ から $v$ への路 $P$ で $\mu(P) \le n-1$ を満たすものにおける $\omega(P)$ のうち、最小値を $d(v)$ と定める。
また $s$ から $v$ への単純路 $S$ における $\omega(S)$ のうち、最小値を $d^*(v)$ と定める。
$\omega(C) < 0$ を満たす閉路 $C$ を負閉路と呼ぶ。以下の問いに答えよ。 

(i) $N$ に負閉路が存在しないとき、かつその時に限り、

$$
d(u) + w(u, v) \ge d(v), \ \ \forall (u,v)\in E
$$

が成り立つことを示せ。

(ii) $N$ に負閉路が存在するかどうかを判定し、もし存在しない場合には全ての $v \in V$ に対して $d^*(v)$ を出力する、$O(mn)$ 時間のアルゴリズムを与えよ。

### English Version
Let $G=(V, E)$ denote a simple, strongly connected digraph with a vertex set $V$ and an edge set $E$, let $n$ denote the number of vertices in $V$, and let $m$ denote the number of
edges in $E$.
Let $N=[G, w]$ denote a network obtained from $G$ by assigning a real value $w(e)$ to each edge $e \in E$ as its weight.
A directed edge from a vertex $u$ to a vertex $v$ is denoted by $(u,v)$ and its weight is written as $w(u,v)$.
When a path $P= (v_1, v_2, \ldots, v_k)$ visits vertices $v_1, v_2, \ldots, v_k$ in this order, let $\mu(P) \triangleq k-1$  denote the number of edges in $P$ and let $\omega(P) \triangleq \sum_{i=1}^{k-1} w(v_i, v_{i+1})$ denote the summation of weights of edges in $P$


Suppose that a vertex $s\in V$ is given. For each vertex $v\in V$, we define $d(v)$ to be the minimum of $\omega(P)$ among all paths $P$ from $s$ to $v$ such that $\mu(P) \le n-1$.
We define $d^*(v)$ to be the minimum of $\omega(S)$ among all simple paths $S$ from $s$ to $v$.
A cycle $C$ is called a negative cycle if $\omega(C) < 0$.
Answer the following questions.

(i) Prove that there is no negative cycle in $N$ if and only if

$$
d(u) + w(u, v) \ge d(v), \ \ \forall (u,v)\in E
$$

(ii) Show an $O(mn)$-time algorithm that determines whether or not there exists a negative cycle in $N$ and that outputs $d^*(v)$ for all $v \in V$ if no negative cycle exists.

### 题目描述

设 $G=(V,E)$ 为简单强连通有向图，$|V|=n$、$|E|=m$。网络 $N=[G,w]$ 给每条边 $e$ 赋实权 $w(e)$。对依次经过
$v_1,\ldots,v_k$ 的有向路 $P=(v_1,\ldots,v_k)$，定义

$$
\mu(P)=k-1,\qquad
\omega(P)=\sum_{i=1}^{k-1}w(v_i,v_{i+1}).
$$

给定 $s\in V$。对每个 $v\in V$，令 $d(v)$ 为所有从 $s$ 到 $v$ 且边数不超过 $n-1$ 的路的最小权重和；令 $d^*(v)$ 为从 $s$ 到 $v$ 的所有简单路的最小权重和。若回路 $C$ 满足 $\omega(C)<0$，称其为负环。回答：

1. 证明 $N$ 不含负环，当且仅当

   $$
   d(u)+w(u,v)\ge d(v),\qquad\forall (u,v)\in E.
   $$

2. 给出一个 $O(mn)$ 时间算法：判定 $N$ 是否存在负环；若不存在，则输出所有 $v\in V$ 的 $d^*(v)$。

## **Kai**
### (i)
**($\Rightarrow$)** Suppose that $N$ has no negative cycle. Assume for contradiction that an arc $(u',v')$ satisfies

$$
d(u')+w(u',v')<d(v').
$$

Let $P_{u'}$ be a path from $s$ to $u'$ with at most $n-1$ arcs and weight $d(u')$, and append $(u',v')$ to obtain a walk $P_{u'v'}$. If $P_{u'v'}$ had at most $n-1$ arcs, then the definition of $d(v')$ would give

$$
d(v')\le \omega(P_{u'v'})=d(u')+w(u',v'),
$$

which is a contradiction. Hence $P_{u'v'}$ has a repeated vertex. Delete its repeated-vertex subcycles one at a time. Every deleted cycle has nonnegative weight, so the resulting simple $s$-$v'$ path $S$ satisfies

$$
\mu(S)\le n-1,\qquad
\omega(S)\le d(u')+w(u',v')<d(v'),
$$

again contradicting the definition of $d(v')$. Therefore

$$
d(u)+w(u,v)\ge d(v),\qquad (u,v)\in E.
$$

**($\Leftarrow$)** Conversely, suppose these inequalities hold for every arc. If

$$
C=(u_1,u_2,\ldots,u_k,u_{k+1}=u_1)
$$

is a directed cycle, then

$$
\begin{aligned}
d(u_1)+w(u_1,u_2)&\ge d(u_2),\\
d(u_2)+w(u_2,u_3)&\ge d(u_3),\\
&\ \vdots\\
d(u_k)+w(u_k,u_1)&\ge d(u_1).
\end{aligned}
$$

Summing and cancelling the $d(u_i)$ terms gives

$$
\omega(C)=\sum_{i=1}^{k}w(u_i,u_{i+1})\ge0.
$$

Thus no negative cycle exists.

### (ii)
```text
BellmanFord(V, E, s):
    for each vertex v in V:
        D[v] = infinity
        predecessor[v] = null
    D[s] = 0

    repeat n-1 times:
        Dnew = D
        predecessor_new = predecessor
        for each arc (u,v) with weight w(u,v):
            if D[u] + w(u,v) < Dnew[v]:
                Dnew[v] = D[u] + w(u,v)
                predecessor_new[v] = u
        D = Dnew
        predecessor = predecessor_new

    for each arc (u,v) with weight w(u,v):
        if D[u] + w(u,v) < D[v]:
            report "negative cycle"

    return D, predecessor
```

After the $k$th pass, $D[v]$ is the minimum weight of an $s$-$v$ path using at most $k$ arcs; this follows by induction on $k$. Hence after $n-1$ passes, $D[v]=d(v)$.

The final scan finds a relaxable arc exactly when the inequalities in (i) fail, which by (i) is equivalent to the existence of a negative cycle. If no negative cycle exists, deleting repeated-vertex cycles from any path never increases its weight. Therefore a minimum path can be chosen simple, and

$$
D[v]=d(v)=d^*(v),\qquad v\in V.
$$

Each of the $n-1$ passes scans all $m$ arcs, and the final scan takes $O(m)$ time. Thus the total running time is $O(mn)$.

#### Alternative: in-place Bellman--Ford with cycle reconstruction

The standard in-place relaxation also satisfies the required bound and can
return a negative cycle when one exists.

```text
BellmanFordInPlace(V, E, s):
    for each vertex v in V:
        D[v] = infinity
        predecessor[v] = null
    D[s] = 0

    repeat n-1 times:
        for each arc (u,v) with weight w(u,v):
            if D[u] != infinity and D[u] + w(u,v) < D[v]:
                D[v] = D[u] + w(u,v)
                predecessor[v] = u

    x = null
    for each arc (u,v) with weight w(u,v):
        if D[u] != infinity and D[u] + w(u,v) < D[v]:
            D[v] = D[u] + w(u,v)
            predecessor[v] = u
            x = v

    if x = null:
        return D, predecessor

    repeat n times:
        x = predecessor[x]
    cycle = [x]
    v = predecessor[x]
    while v != x:
        cycle.append(v)
        v = predecessor[v]
    cycle.append(x)
    reverse(cycle)
    report "negative cycle", cycle
```

All vertices are reachable from $s$ because $G$ is strongly connected. Thus
a relaxation in the extra pass occurs if and only if a negative cycle exists.
Following $n$ predecessor edges from a relaxed vertex reaches such a cycle,
and the subsequent loop reconstructs it. The algorithm scans all $m$ arcs in
$n$ passes, so its running time is $O(mn)$.
