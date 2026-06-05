---
sidebar_label: 2025年8月実施 グラフ理論
tags:
  - Kyoto-University
  - Mathematics.Graph-Theory.Connectivity
---
# 京都大学 情報学研究科 数理工学専攻 2025年8月実施 グラフ理論

## **Author**
祭音Myyura

## **Description**
頂点集合 $V$,枝集合Aを持つ有向グラフ $G=(V,A)$ が与えられたものとする．$V$ に属する頂点の個数を $n$, $A$ に属する枝の本数を $m$ とする．
任意の2頂点 $p,q \in V$ について，$p$から $q$ への有向路が存在するとき，$p \leadsto q$ とする．以下の問いに答えよ．

(1) $G$ に有向閉路が存在するか否かを $O(n+m)$ 時間で判定する手順を示せ．

(2) 以下の (a),(b),(c) の各条件について，$G$ がその条件を満たすか否かを $O(n+m)$ 時
間で判定する手順をそれぞれ示せ．

- (a) どの2頂点 $p,q \in V \ (p \neq q)$ についても，$p \leadsto q$ と $q \leadsto p$ の高々一方が成り立つ．
- (b) どの2頂点 $p,q \in V \ (p \neq q)$ についても，$p \leadsto q$ と $q \leadsto p$ の両方が成り立つ．
- (c) どの2頂点 $p,q \in V \ (p \neq q)$ についても，$p \leadsto q$ と $q \leadsto p$ の少なくとも一方
が成り立つ．

## **Kai**
### (i)
Use depth-first search with three colors.

Each vertex is colored as follows:

- white: not yet discovered;
- gray: discovered but not finished, so it is currently in the DFS recursion stack;
- black: finished.

The algorithm is as follows.

```text
for each vertex v in V:
    color[v] = white

for each vertex v in V:
    if color[v] = white:
        DFS(v)

DFS(u):
    color[u] = gray
    for each arc u -> v:
        if color[v] = gray:
            report "there is a directed cycle"
        if color[v] = white:
            DFS(v)
    color[u] = black
```

The running time is $O(n+m)$, since every vertex is visited once and every arc is examined once.

To prove correctness, first suppose that DFS finds an arc $u\to v$ such that $v$ is gray. Since $v$ is gray, $v$ is an ancestor of $u$ in the current DFS recursion stack. Hence there is already a directed path $v\leadsto u$.
Together with the arc $u\to v$, this gives a directed cycle.

Conversely, suppose that $G$ contains a directed cycle

$$
v_1\to v_2\to \cdots \to v_k\to v_1.
$$

Let $v_i$ be the first vertex on this cycle discovered by DFS. At that moment, all other vertices on the cycle are still white. Before $v_i$ becomes black, DFS explores all vertices reachable from $v_i$, in particular the rest of the cycle. Thus DFS eventually reaches the predecessor of $v_i$ on the cycle and then examines the arc back to $v_i$, while $v_i$ is still gray. Therefore DFS finds an arc to a gray vertex.

### (ii)
#### (a)
The condition is equivalent to the following

    The remaining directed graph has no directed cycle.

Indeed, if there is a directed cycle containing at least two distinct vertices, then any two vertices on the cycle are mutually reachable, contradicting the condition. Conversely, if two distinct vertices $p$ and $q$ are mutually reachable, then a path from $p$ to $q$ together with a path from $q$ to $p$ forms a directed cycle containing at least two distinct vertices.

Therefore, we may apply the algorithm from part (i). If the remaining graph is acyclic, condition (a) holds; otherwise it does not. The running time is $O(n+m)$.

#### (b)
[Tarjan's algorithm](https://www.geeksforgeeks.org/dsa/tarjan-algorithm-find-strongly-connected-components/)

#### (c)
Let the strongly connected components of $G$ be

$$
C_1,C_2,\dots,C_k.
$$

Contract each strongly connected component into one vertex. The resulting graph is called the condensation graph of $G$. It is always a DAG.

Algorithm:

1. Compute the strongly connected components of $G$.
2. Construct the condensation graph $D$.
3. Compute a topological ordering of $D$:

   $$
   C_1,C_2,\dots,C_k.
   $$

4. For each $i=1,2,\dots,k-1$, check whether $D$ contains the arc

   $$
   C_i\to C_{i+1}.
   $$

5. If all such arcs exist, output true. Otherwise, output false.

To implement step 4 in linear time, mark all arcs of $D$ in a hash set or Boolean table indexed by component numbers. Equivalently, when scanning all arcs of $G$, record the arcs between different components. Since each original arc is scanned only a constant number of times, the total running time remains $O(n+m)$.

Now we prove correctness.

First suppose that the algorithm outputs true. Then for every consecutive pair in the topological ordering, there is an arc

$$
C_i\to C_{i+1}.
$$

Hence for any $i<j$, there is a directed path

$$
C_i\to C_{i+1}\to \cdots \to C_j.
$$

Therefore every pair of components is comparable by reachability. Since vertices inside the same strongly connected component are mutually reachable, for any two vertices $p,q\in V$, at least one of $p\leadsto q$ and $q\leadsto p$ holds.

Conversely, suppose that $G$ satisfies the condition. Then any two strongly connected components of $G$ are comparable by reachability in the condensation graph $D$. Take a topological ordering

$$
C_1,C_2,\dots,C_k
$$

of $D$. For each consecutive pair $C_i,C_{i+1}$, the topological order forbids a path from $C_{i+1}$ to $C_i$. Hence, by the assumed condition, there must be a path from $C_i$ to $C_{i+1}$. Since $C_i$ and $C_{i+1}$ are consecutive in a topological ordering, this path cannot pass through any other component. Therefore the path must be a single arc

$$
C_i\to C_{i+1}.
$$

Thus the algorithm will output true.

The running time is $O(n+m)$, because SCC computation, condensation graph construction, topological sorting, and the final scan are all linear.