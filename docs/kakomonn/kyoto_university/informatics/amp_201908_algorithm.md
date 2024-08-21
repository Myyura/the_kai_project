---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2019年8月実施 アルゴリズム基礎
tags:
  - Kyoto-University
  - Graph-Theory
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
Let $P_{u, v}$ denote a $s,t$-path and $P_{u,v}^*$ denote a shortest $s,t$-path between two vertices $u \in V$ and $v \in V$, respectively.

For a path $P_{u, v} = (a_1 = u, a_2, \ldots, a_k = v)$ we define a subpath $P_{u, v, a_i, a_k}, 1 \le i \le j \le k$ of $P_{u, v}$ as $P_{u, v, a_i, a_k} = (a_i, \ldots, a_j)$.

Let $|P|$ denote the length of a path $P$.

### (1)
We first prove that for any common vertex $c$ of $P_{s, u}^*$ and $P_{s, v}^*$, i.e. $c \in V(P_{s, u}^*) \cap V(P_{s, v}^*)$, we have $|P_{s,u, s,c}^*| = |P_{s,v, s,c}^*|$.

Assume that $|P_{s,u, s,c}^*| < |P_{s,v, s,c}^*|$ for a vertex $c$.
Then the length of the path from $s$ to $v$ defined by edges $E(P_{s,u, s,c}^*) \cup E(P_{s,v,c,v}^*)$ is smaller than $|P_{s,v}^*|$, which is contradictory to the fact that $P_{s,v}^*$ is a shortest path from $s$ to $v$.

Then, let $c^*$ be the last common vertex of $P_{s, u}^*$ and $P_{s, v}^*$, the length of cycle $C = E(P_{s,u, c^*,u}^*) \cup \{u,v\} \cup E(P_{s,v, c^*,v}^*)$ is

$$
\begin{aligned}
|C| &= |P_{s, u}^*| - |P_{s,u, s,c^*}^*| + |P_{s, v}^*| - |P_{s,v, s,c^*}^*| + 1 \\
&= 2 \times |P_{s, u}^*| - 2 \times |P_{s,u, s,c^*}^*| + 1
\end{aligned}
$$

which is odd.

### (2)
The idea algorithm can be established from the following statement and (1):

- A simple undirected graph $G=(V,E)$ is bipartite iff it contains no odd
length cycle.

($\Rightarrow$) When $G$ is bipartite, let $X_1, X_2 \subseteq V$ denote the partition of $G$.

Assume that there exists a cycle $C = (u_1, u_2, \ldots, u_{2k+1}, u_{2k+2}=u_1)$ in $G$ of odd length.

W.l.o.g we assume that $u_1 \in X_1$.
Then we know that vertices $u_{2i}, (i=1,2, \ldots)$ are in vertex set $X_2$, which implies that vertex $u_{2k+2}=u_1$ is in vertex set $X_2$, a contradiction.

Therefore, if $G$ is bipartite, there is no odd length cycle in $G$.

($\Leftarrow$) Let $s \in V$ be an arbitrary vertex.
Let $X_1 = \{u \mid \text{dist}(s, u) \text{ is odd}\}$ and $X_2 = \{u \mid \text{dist}(s, u) \text{ is even}\}$ be two subsets of $V$.

Assume that there exists two vertices $u, v \in X_1$ such that $uv \in E$.

With similar statement in (1), let $c^*$ be the last common vertex of $P_{s, u}^*$ and $P_{s, v}^*$, the length of cycle $C = E(P_{s,u, c^*,u}^*) \cup \{u,v\} \cup E(P_{s,v, c^*,v}^*)$ is odd, which is a contradiction.

Therefore, if $G$ contains no odd length cycle, then $G$ is bipartite.

#### Algorithm
Let $s \in V$ be an arbitrary vertex.
We use BFS to compute all the distances from $s$ to vertices $u \in V \setminus \{s\}$ and check whether there exists two vertices of same distances are adjacent.

```text
algorithm IsBipartite(G(V, E), s):
    Q <- create an empty queue
    color[s] <- RED
    Q.enqueue(s)

    while Q is not empty:
        n1 <- Q.dequeue()
        for each n2 in n1.Adj():
            if color[n2] = null:
                if color[n1] = RED:
                    color[n2] = BLUE
                else:
                    color[n2] = RED
                Q.enqueue(n2)
            else:
                if color[n2] = color[n1]:
                    return 'Graph is not Bipartite'

    return 'Graph is Bipartite'
```

### (3)
- Use BFS to find a shortest $s, t$-path $P_{s, t}^*$ in $G = (V, E)$.
- Let $e$ denote an edge of $P_{s, t}^*$. Use BFS to find a shortest $s, t$-path $P_{s, t}^{*}$ in $G = (V, E \setminus \{e\})$ .
- If length of the two paths we found are same, then $G$ have two or more shortest paths between $s$ and $t$.
- If length of the two paths we found are not same, then $G$ has only one shortest path between $s$ and $t$.