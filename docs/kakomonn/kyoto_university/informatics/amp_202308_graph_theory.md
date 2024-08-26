---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2023年8月実施 グラフ理論
tags:
  - Kyoto-University
  - Shortest-Path-Problem
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

## **Kai**
### (i)

(a) $\Rightarrow$ (If there is no negative cycle, then $d(u) + w(u, v) \ge d(v), \forall (u,v)\in E$)

Prove by contradiction:
Assume that there exists an edge $(u', v') \in E$ such that $d(u') + w(u', v') < d(v')$.

Let $P_{u'} = (s, u_1, u_2, \ldots, u')$ denote a path from $s$ to $u'$ of weights $\omega(P_{u'}) = d(u')$ and $P_{v'} = (s, v_1, v_2, \ldots, v')$ denote a path from $s$ to $v'$ of weights $\omega(P_{v'}) = d(v')$.

Let $P_{u'v'} = (s, u_1, u_2, \ldots, u', v')$.
Since $d(v') > d(u') + w(u', v')$, by the definition of $d(v')$ we know that $\mu(P_{u'v'}) > n - 1$, i.e., $P_{u'v'}$ is not a simple path.

W.l.o.g we assume that $P_{u'v'} = (s, u_1, u_2, \ldots, u_k, u_{k+1}, \ldots, u_{k+i}, u_k, \ldots, u', v')$ only contains $1$ sub-cycle $C' = (u_k, u_{k+1}, \ldots, u_{k+i}, u_k)$.

Assume that $\omega(C') \ge 0$, let $P_{v'}^{'} = (s, u_1, u_2, \ldots, u_k, \ldots, u', v')$ denote the path obtained by remove the sub-cycle $C'$ of $P_{u'v'}$, we have

$$
\begin{aligned}
\omega(P_{v'}^{'}) &= \omega(P_{u'v'}) - \omega(C') \\
&= d(u') + w(u', v') - \omega(C') \\
&< d(v') - \omega(C')
\end{aligned}
$$

and $\mu(P_{v'}^{'}) \le n - 1$, which is contradictory to the definition of $d(v')$.

Hence $\omega(C') < 0$, which is contradictory to the condition "there is no negative cycle".

Therefore, if there is no negative cycle, then $d(u) + w(u, v) \ge d(v), \forall (u,v)\in E$.

------------------------------------------------

(b) $\Leftarrow$ (If $d(u) + w(u, v) \ge d(v), \forall (u,v)\in E$, then there is no negative cycle)

Prove by contradiction:
Assume that there exists a negative cycle

$$
C' = (u_1, u_2, \ldots, u_k, u_{k+1}=u_1), \ \ \ \omega(C') < 0.
$$

From the condition we know that $\forall (u_i, u_{i+1}) \in C', d(u_i) + w(u_i, u_{i+1}) \ge d(u_{i+1})$,

Hence

$$
\begin{aligned}
d(u_1) + w(u_1, u_2) &\ge d(u_2) \\
d(u_2) + w(u_2, u_3) &\ge d(u_3) \\
\cdots \\
d(u_k) + w(u_k, u_1) &\ge d(u_1)
\end{aligned}
$$

sum over all the equations,

$$
w(u_1, u_2) + w(u_2, u_3) + \cdots + w(u_k, u_1) \ge 0
$$

which is contradictory to the fact that 

$$
\omega(C') = w(u_1, u_2) + w(u_2, u_3) + \cdots + w(u_k, u_1) < 0.
$$

Therefore, if $d(u) + w(u, v) \ge d(v), \forall (u,v)\in E$, then there is no negative cycle.

### (ii)
Bellman-Ford algorithm [(Wiki)](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm)

```text
function BellmanFord(list vertices, list edges, vertex source) is

    // This implementation takes in a graph, represented as
    // lists of vertices (represented as integers [0..n-1]) and edges,
    // and fills two arrays (distance and predecessor) holding
    // the shortest path from the source to each vertex

    distance := list of size n
    predecessor := list of size n

    // Step 1: initialize graph
    for each vertex v in vertices do
        // Initialize the distance to all vertices to infinity
        distance[v] := inf
        // And having a null predecessor
        predecessor[v] := null
    
    // The distance from the source to itself is, of course, zero
    distance[source] := 0

    // Step 2: relax edges repeatedly
    repeat |V|−1 times:
        for each edge (u, v) with weight w in edges do
            if distance[u] + w < distance[v] then
                distance[v] := distance[u] + w
                predecessor[v] := u

    // Step 3: check for negative-weight cycles
    for each edge (u, v) with weight w in edges do
        if distance[u] + w < distance[v] then
            predecessor[v] := u
            // A negative cycle exists; find a vertex on the cycle 
            visited := list of size n initialized with false
            visited[v] := true
            while not visited[u] do
                visited[u] := true
                u := predecessor[u]
            // u is a vertex in a negative cycle, find the cycle itself
            ncycle := [u]
            v := predecessor[u]
            while v != u do
                ncycle := concatenate([v], ncycle)
                v := predecessor[v]
            error "Graph contains a negative-weight cycle", ncycle
    return distance, predecessor
```
