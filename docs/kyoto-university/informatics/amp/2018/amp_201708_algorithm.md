---
sidebar_label: 2017年8月実施 アルゴリズム基礎
tags:
  - Kyoto-University
  - Discrete-Mathematics.Graph-Theory.Bipartite-Graph
  - Discrete-Mathematics.Graph-Algorithms.Breadth-First-Search
---
# 京都大学 情報学研究科 数理工学専攻 2017年8月実施 アルゴリズム基礎

## **Author**
祭音Myyura

## **Description**
連結単純無向グラフ $G=(V,E)$ と節点 $s \in V$ が与えられたとき、$s$ を始点とする幅優先探索により得られる $G$ の全域木を $T$ とし、$T$ 上で $s$ からの距離 $i$ である節点の集合を $V_i$ と記す。
以下の問いに答えよ。

(i) $s$ を始点として $G$ の全域木 $T$ を構築する幅優先探索の記述を与えよ。

(ii) $j + 2 \leq k$ である $V_j$ と $V_k$ の間には枝が存在しないことを証明せよ。

(iii) どの $V_i$ も隣接する２節点の対を含まないとき、$G$ は二部グラフであることを証明せよ。

(iv) ある $V_i$ が隣接する２節点の対を含むとき、$G$ は奇数長の閉路を持つことを証明せよ。

### 题目描述

给定连通简单无向图 $G=(V,E)$ 和顶点 $s\in V$。令 $T$ 为从 $s$ 开始进行广度优先搜索所得的 $G$ 的生成树，并以 $V_i$ 表示在 $T$ 上到 $s$ 的距离为 $i$ 的顶点集合。回答：

1. 写出从 $s$ 出发构造生成树 $T$ 的广度优先搜索过程。
2. 证明当 $j+2\le k$ 时，$V_j$ 与 $V_k$ 之间不存在边。
3. 若每个 $V_i$ 内都不存在相邻顶点对，证明 $G$ 是二分图。
4. 若某个 $V_i$ 内含有一对相邻顶点，证明 $G$ 含有奇数长度的回路。

## **Kai**
### (i)

```text
BFS-Tree(G, s):
    V_T = {s}
    E_T = {}
    Q = {}
    ENQUEUE(Q, s)

    while Q is not empty do
        u = DEQUEUE(Q)
        for each v in Adj[u] do
            if v is not in V_T then
                V_T = V_T + {v}
                E_T = E_T + {(u, v)}
                ENQUEUE(Q, v)   

    return (V_T, E_T)
```

### (ii)
If there exits an edge $(u, v)$ between $V_j$ and $V_k$ such that $j+2 \leq k$, w.l.o.g assume that $u \in V_j$ and $v \in V_k$, then the distance from $s$ to $v$ is at most

$$
\text{dist}(s, v) \le \text{dist}(s, u) + \text{dist}(u, v) = j + 1
$$

which contradicts $\text{dist}(s,v) = k \geq j + 2$.

### (iii)
Consider the following sets:

$$
\begin{aligned}
    X &= \{v \in V_i \mid i \text{ is even}\} \\
    Y &= \{v \in V_i \mid i \text{ is odd}\}
\end{aligned}
$$

We show that there is no edge between two vertices both in $X$, and also no edge between two vertices both in $Y$.

First, consider two different layers $V_j$ and $V_k$ with the same parity. If $j \neq k$, then

$$
|j-k| \ge 2
$$

according to the result of question (ii), there is no edge between $V_j$ and $V_k$.

Next, by the assumption, no $V_i$ contains a pair of adjacent vertices.
Hence no two vertices within the same set are adjacent, which implies that all edges of $G$ go between $X$ and $Y$, i.e., $G$ is a bipartite graph.

### (iv)
We prove the statement by contradiction.

Suppose that some $V_i$ contains a pair of adjacent vertices $(u,v)$.
Since $u, v \in V_i$, the paths from $s$ to $u$ and from $s$ to $v$ in the BFS tree $T$ both have length $i$.

Let $P_u$ be the unique path from $s$ to $u$ in $T$, and let $P_v$ be the unique path from $s$ to $v$ in $T$. Let $w$ be the last common vertex of these two paths. Suppose that $w \in V_l$. Then the path from $w$ to $u$ in $T$ has length

$$
i - l
$$

and the path from $w$ to $v$ in $T$ also has length

$$
i - l
$$

Moreover, these two paths have no common vertices except $w$. Therefore, by taking the path from $w$ to $u$, then the edge $(u,v)$, and then the path from $v$ back to $w$, we obtain a cycle.

The length of this cycle is

$$
(i−l)+1+(i−l)=2(i−l)+1.
$$

which is an odd number.
