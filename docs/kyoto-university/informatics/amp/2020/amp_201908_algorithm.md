---
sidebar_label: 2019年8月実施 アルゴリズム基礎
tags:
  - Kyoto-University
  - Mathematics.Graph-Theory.Bipartite-Graph
  - Mathematics.Graph-Theory.Shortest-Path-Problem
  - Mathematics.Graph-Theory.Breadth-First-Search
  - Computer-Science.Data-Structures-Algorithms
---
# 京都大学 情報学研究科 数理工学専攻 2019年8月実施 アルゴリズム基礎

## **Author**
祭音Myyura

## **Description**
### 日本語版
$G=(V,E)$ を節点集合 $V$，枝集合 $E$ から成る連結な単純無向グラフとし，$G$ は隣接リストにより貯えられているとする．
二点 $u, v \in V$ 間の路の最短の長さを $\text{dist}(u,v)$ と記す．
以下の問いに答えよ．

(1) 任意の点 $s \in V$ を選ぶ．$\text{dist}(s, u) = \text{dist}(s, v)$ を満たす枝 $uv \in E$ が存在すれば，枝 $uv$ は長さ奇数の単純閉路に含まれることを証明せよ．

(2) $G$ が二部グラフであるかどうかを $O(|V| + |E|)$ 時間で判定する方法を示せ．

(3) 異なる二点 $s, t \in V$ に対して，$s, t$ 間の最短路が唯一であるかどうかを $O(|V| + |E|)$ 時間で判定する方法を示せ．

### English Version
Let $G=(V,E)$ denote a simple connected undirected graph with a vertex set $V$ and
an edge set $E$.
Assume that $G$ is stored in adjacency lists.
For two vertices $u, v \in V$, let $\text{dist}(u,v)$ denote the shortest length of a path between them.
Answer the following questions.

(1) Let $s \in V$ be an arbitrary vertex. Prove that if there is an edge $uv \in E$ such that $\text{dist}(s, u) = \text{dist}(s, v)$ then edge $uv$ is contained in a simple cycle of an odd length.

(2) Show how to test whether $G$ is a bipartite graph or not in $O(|V| + |E|)$ time.

(3) Let $s, t \in V$ be two distinct vertices. Show how to test whether $G$ has only one shortest path between $s$ and $t$ or not in $O(|V| + |E|)$.

## **Kai**
Let $|P|$ denote the length of a path $P$.

### (1)
Let $P_u$ be a shortest path from $s$ to $u$, and let $P_v$ be a shortest path from $s$ to $v$.

Since both paths start at $s$, they have at least one common vertex. Let $z$ be the last common vertex of $P_u$ and $P_v$.

Denote by $P_u[z,u]$ the subpath of $P_u$ from $z$ to $u$, and by $P_v[z,v]$ the subpath of $P_v$ from $z$ to $v$. Since $z$ is the last common vertex of $P_u$ and $P_v$, these two subpaths have no common vertices except $z$.

Let

$$
\ell_u = |P_u[z,u]|,\qquad \ell_v = |P_v[z,v]|.
$$

We show that $\ell_u=\ell_v$.

Since $P_u$ and $P_v$ are shortest paths, by assumption,

$$
|P_u|=d(s,u)=|P_v|=d(s,v).
$$

Also,

$$
|P_u|=|P_u[s,z]|+\ell_u,
$$

and

$$
|P_v|=|P_v[s,z]|+\ell_v.
$$

Since **every subpath of a shortest path is also a shortest path**, both
$P_u[s,z]$ and $P_v[s,z]$ are shortest paths from $s$ to $z$.
Therefore,

$$
|P_u[s,z]|=|P_v[s,z]|=d(s,z).
$$

Combining these equalities, we obtain

$$
\ell_u=\ell_v.
$$

Now consider the cycle formed by the path $P_u[z,u]$, the edge $(u,v)$, and the reverse of the path $P_v[z,v]$.

Because $z$ is the last common vertex of $P_u$ and $P_v$, the two paths $P_u[z,u]$ and $P_v[z,v]$ have no common vertices except $z$. Therefore, the above closed walk is a simple cycle.

The length of this cycle is

$$
\ell_u+1+\ell_v.
$$

Since $\ell_u=\ell_v$, this length is

$$
2\ell_u+1,
$$

which is odd.

### (2)
The algorithm can be established from the following statement and (1):

- A simple undirected graph $G=(V,E)$ is bipartite iff it contains no odd
length cycle.

($\Rightarrow$) When $G$ is bipartite, let $X_1, X_2 \subseteq V$ denote the partition of $G$.

Assume that there exists a cycle $C = (u_1, u_2, \ldots, u_{2k+1}, u_{2k+2}=u_1)$ in $G$ of odd length.

W.l.o.g we assume that $u_1 \in X_1$.
Then we know that vertices $u_{2i}, (i=1,2, \ldots)$ are in vertex set $X_2$, which implies that vertex $u_{2k+2}=u_1$ is in vertex set $X_2$, a contradiction.

Therefore, if $G$ is bipartite, there is no odd length cycle in $G$.

($\Leftarrow$) Run BFS from arbitrary $s$. Color each vertex according to the parity of $\text{dist}(s,v)$.

For every edge $uv$, if $u$ and $v$ have the same color, then since adjacent vertices in an unweighted graph have BFS distances differing by at most $1$, they must satisfy $\text{dist}(s,u)=\text{dist}(s,v)$.

By (1), this edge lies on an odd cycle, so G is not bipartite. If no such edge exists, all edges go between the two color classes, hence the graph is bipartite.

#### Algorithm
Let $s \in V$ be an arbitrary vertex.
We use BFS to color vertices according to the parity of their distances from $s$, and then check whether there exists an edge whose endpoints have the same color.

```text
algorithm IsBipartite(G):
    for each v in V:
        color[v] <- null

    choose an arbitrary vertex s
    color[s] <- RED
    Q <- create an empty queue
    Q.enqueue(s)

    while Q is not empty:
        n1 <- Q.dequeue()
        for each n2 in n1.Adj():
            if color[n2] = null:
                if color[n1] = RED:
                    color[n2] <- BLUE
                else:
                    color[n2] <- RED
                Q.enqueue(n2)
            else:
                if color[n2] = color[n1]:
                    return "Graph is not bipartite"

    return "Graph is bipartite"
```

Since BFS scans each vertex and each edge a constant number of times, the running time is $O(|V|+|E|)$.

### (3)
Let $\text{dist}[v]$ be the distance from $s$ to $v$, and let $\text{cnt}[v]$ denote the number of shortest paths from $s$ to $v$, truncated at $2$. Thus, $\text{cnt}[v]=2$ means that there are at least two shortest paths from $s$ to $v$.

```text
for each v in V:
    dist[v] = INF
    cnt[v] = 0

dist[s] = 0
cnt[s] = 1
Q.push(s)

while Q is not empty:
    u = Q.pop()
    for each v in Adj[u]:
        if dist[v] == INF:
            dist[v] = dist[u] + 1
            cnt[v] = cnt[u]
            Q.push(v)
        else if dist[v] == dist[u] + 1:
            cnt[v] = min(2, cnt[v] + cnt[u])

if cnt[t] == 1:
    return "unique"
else:
    return "not unique"
```
