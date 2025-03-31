---
sidebar_label: "2017年8月実施 アルゴリズム基礎"
tags:
  - Kyoto-University
  - Graph-Theory
  - Bipartite-Graph
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
\text{dist}(s, v) = \text{dist}(s, u) + \text{dist}(u, v) = j + 1
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

According to question (ii), there is no edge between $V_j$ and $V_k$ if $j$ and $k$ are both even or odd.
Also, according to the statement of question (iii), no $V_i$ contains a pair of adjacent vertices.
Hence no two vertices within the same set are adjacent, which implies that $G$ is a bipartite graph.

### (iv)
We prove the statement by contradiction.

Assume that $G$ is bipartite.
Suppose that there exists two adjacent vertices $u_i$ and $v_i$ in a $V_i \ (i \geq 1)$.

Then there must exists two vertices $u_{i-1}, v_{i-1} \in V_{i-1}$ adjacent to $u_i$ and $v_i$, respectively.
If $u_{i-1} = v_{i-1}$, then a contradiction to the definition of bipartite graph.
Hence we assume that $u_{i-1} \neq v_{i-1}$.
Repeat the above construction and finally we will be in the situation that $u_{0} = v_{0} = s$, which leads to a contradiction.

Therefore, if some $V_i$ contains a pair of adjacent vertices then $G$ is not a bipartite graph.
