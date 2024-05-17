---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2021年実施 基礎科目 アルゴリズム基礎
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2021年実施 基礎科目 アルゴリズム基礎

## **Author**
祭音Myyura

## **Description**
### 日本語版
$G=(V,E)$ を点集合 $V$ ，枝集合 $E$ から成る単純有向グラフとする．
$R(u; G)$ を $G$ において点 $u$ から有向路で到達できる点の集合と定め，$\text{dist}(u, v,; G)$ を点 $u$ から点 $v$ へ至る $G$ の有向路の最短の長さとする．
$v \notin R(u; G)$ のときは $\text{dist}(u, v,; G) \triangleq |V|$ と定める．
有向グラフ $G$ から有向枝 $e \in E$ を削除した有向グラフを $G - e$ と記す．
$s, t$ を $V$ の二点とする．
$G$ は隣接リストにより貯えられているとする．以下の問いに答えよ．

(i) $t \in R(s; G)$ と仮定する． 点 $s$ から点 $t$ へ至る有向路で最短のものを求める $O(|V| + |E|)$ 時間アルゴリズムを与えよ．

(ii) $\text{dist}(s, t; G - e) > \text{dist}(s, t; G)$ を満たす有向枝 $e \in E$ が存在するかどうかを判定する $O(|V| + |E|)$ 時間アルゴリズムを与えよ．

(iii) $\text{dist}(s, t; G) = \text{dist}(t, s; G) = 3 < \text{dist}(s, t; G - e) = \text{dist}(t, s; G - e)$ である二点 $s, t \in V$ 有向枝 $e \in E$ をもつ有向グラフ $G=(V, E)$ の例を作成せよ．

### English Version
Let $G=(V,E)$  be a simple directed graph with a vertex set $V$ and an edge set $E$.
Let $R(u; G)$ denote the set of vertices reachable from a vertex $u$ by a directed path in $G$ and $\text{dist}(u, v; G)$ denote the shortest length of a path from a vertex $u$ to a vertex $v$ in $G$, where we set $\text{dist}(u, v,; G) \triangleq |V|$ if $v \notin R(u; G)$.
Let $G − e$ denote the directed graph obtained from $G$ by removing a directed edge $e \in E$. Let $s$ and $t$ be two vertices in $V$.
Assume that $G$ is stored in adjacency lists. Answer the following questions.

(i) Assume that $t \in R(s; G)$. Give an $O(|V | + |E|)$-time algorithm that computes a directed path with the shortest length from $s$ to $t$.

(ii) Give an $O(|V |+|E|)$-time algorithm that tests whether there exists a directed edge $e \in E$ such that $\text{dist}(s, t; G − e) > \text{dist}(s, t; G)$.

(iii) Construct an example of a directed graph $G = (V, E)$ that contains two vertices $s, t \in V$ and a directed edge $e ∈ E$ such that $\text{dist}(s, t; G) = \text{dist}(t, s; G) = 3 < \text{dist}(s, t; G − e) = \text{dist}(t, s; G − e)$.

## **Kai**
### (i)
We use BFS to compute shortest paths in an unweighted graph.

```text
BFS(s, G=(V, E)):
    for each v in V set dist(s, v; G) = |V|
    for each v in V set visited(v) = 0
    for each v in V set pred(v) = -1
    dist(s) = 0
    visited(s) = 1
    set Q to be the empty queue
    Q.enqueue(s)
    while Q is not empty do:
        u = Q.dequeue()
        for each neighbor v of u do:
            if visited(v) = 0 then:
                visited(v) = 1
                Q.enqueue(v)
                dist(s, v; G) = dist(s, u; G) + 1
                pred(v) = u
```

The time complexity of BFS is $O(|V| + |E|)$ when $G$ is stored in adjacency lists.

### (ii)
The idea is to find "bridges" in the graph that consists of all the edges of shortest paths from $s$ to $t$.

Let $E_{s,t}$ denote the edge set of all the edges of shortest paths from $s$ to $t$.
To find $E_{s,t}$, we do the following steps:

- use BFS to compute $\text{dist}(s, u; G), \forall u \in V$ 
- let $G^T$ denote the reversed graph of $G$ (i.e. the same vertex set but all of the edges reversed), use BFS to compute $\text{dist}(t, u; G^T), \forall u \in V$
- $E_{s,t} = \{(u, v) \mid \text{dist}(s, u; G) + \text{dist}(t, v; G^T) = \text{dist}(s, t; G)\}$

Obviously, it takes $O(|V| + |E|)$-time to find the edge set $E_{s,t}$.

Then, we can use [Tarjan' algorithm](https://en.wikipedia.org/wiki/Biconnected_component) to find bridges

```
GetArticulationPoints(i, d)
    visited[i] := true
    depth[i] := d
    low[i] := d
    childCount := 0
    isArticulation := false

    for each ni in adj[i] do
        if not visited[ni] then
            parent[ni] := i
            GetArticulationPoints(ni, d + 1)
            childCount := childCount + 1
            if low[ni] ≥ depth[i] then
                isArticulation := true
            low[i] := Min (low[i], low[ni])
        else if ni ≠ parent[i] then
            low[i] := Min (low[i], depth[ni])
    if (parent[i] ≠ null and isArticulation) or (parent[i] = null and childCount > 1) then
        Output i as articulation point
```

The time complexity of [Tarjan' algorithm](https://en.wikipedia.org/wiki/Biconnected_component) is also $O(|V| + |E|)$

If there exists a articulation point $a$ in graph $G_{s,t} = (V(E_{s,t}), E_{s,t})$, i.e., there exists a bridge $e$ (adjacent to $a$) in $E_{s,t}$, then the removal of $e$ disconnects $G_{s,t}$, which implies that there is no path of length $\text{dist}(s, t; G)$ in $G - e$, i.e. $\text{dist}(s, t; G − e) > \text{dist}(s, t; G)$

### (iii)

$$
\begin{aligned}
V &= \{s, t, v_1, v_2, v_3, v_4\} \\
E &= \{(s, v_2), (t, v_2), (v_2, v_1), (v_1, s), (v_1, t), (v_2, v_3), (v_3, v_4), (v_4, s), (v_4, t)\} \\
e &= (v_2, v_1) \\
G &= (V, E)
\end{aligned}
$$