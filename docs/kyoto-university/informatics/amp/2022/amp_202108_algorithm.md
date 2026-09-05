---
sidebar_label: 2021年8月実施 アルゴリズム基礎
tags:
  - Kyoto-University
  - Operations-Research.Combinatorial-Optimization.Shortest-Path-Problem
  - Discrete-Mathematics.Graph-Algorithms.Breadth-First-Search
---
# 京都大学 情報学研究科 数理工学専攻 2021年8月実施 アルゴリズム基礎

## **Author**
祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_amp.pdf)
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

### 题目描述

设 $G=(V,E)$ 为以邻接表存储的简单有向图。令 $R(u;G)$ 为从 $u$ 出发沿有向路可达的顶点集合，$\operatorname{dist}(u,v;G)$ 为从 $u$ 到 $v$ 的最短有向路长度；若 $v\notin R(u;G)$，约定
$\operatorname{dist}(u,v;G)=|V|$。以 $G-e$ 表示删去有向边 $e\in E$ 后的图，$s,t\in V$。回答：

1. 假设 $t\in R(s;G)$，给出在 $O(|V|+|E|)$ 时间内求一条从 $s$ 到 $t$ 的最短有向路的算法。
2. 给出在 $O(|V|+|E|)$ 时间内判定是否存在边 $e\in E$ 使
   $\operatorname{dist}(s,t;G-e)>\operatorname{dist}(s,t;G)$ 的算法。
3. 构造一个含顶点 $s,t$ 和边 $e$ 的有向图，使

   $$
   \operatorname{dist}(s,t;G)=\operatorname{dist}(t,s;G)=3
   <\operatorname{dist}(s,t;G-e)
   =\operatorname{dist}(t,s;G-e).
   $$

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
Starting at $t$, follow `pred` until $s$ and reverse the resulting sequence; this outputs a shortest directed path.

### (ii)
The idea is to find an edge used by every shortest path from $s$ to $t$. Let $E_{s,t}$ denote the set of all arcs lying on shortest $s$-$t$ paths. To find $E_{s,t}$, do the following:

- Use BFS in $G$ to compute $\operatorname{dist}(s,u;G)$ for every $u\in V$.
- Let $G^T$ be obtained by reversing every arc of $G$. Use BFS from $t$ in $G^T$ to compute $\operatorname{dist}(t,v;G^T)=\operatorname{dist}(v,t;G)$ for every $v\in V$.
- Scan every arc $(u,v)$ and put it in $E_{s,t}$ exactly when

  $$
  \operatorname{dist}(s,u;G)+1+\operatorname{dist}(t,v;G^T)
  =\operatorname{dist}(s,t;G).
  $$

The two BFS runs and this scan take $O(|V|+|E|)$ time. For brevity, write

$$
d_s(u)=\operatorname{dist}(s,u;G),\quad
d_t(v)=\operatorname{dist}(v,t;G),\quad D=d_s(t).
$$

If $D=|V|$ or $D=0$, return false. Otherwise initialize $c_0,\ldots,c_{D-1}$ to zero and scan every arc $(u,v)$. Whenever

$$
d_s(u)+1+d_t(v)=D,
$$

increment $c_{d_s(u)}$. Return true exactly when some $c_i=1$.

Indeed, the tested arcs are precisely the arcs lying on shortest $s$-$t$ paths. Every shortest path uses exactly one such arc from layer $i$ to layer $i+1$. Hence an arc lies on every shortest path exactly when it is the unique tested arc between some consecutive layers. Deleting that arc, and only then, strictly increases the distance. The two BFS runs and the edge scan take $O(|V|+|E|)$ time.

### (iii)

$$
\begin{aligned}
V &= \{s, t, v_1, v_2, v_3, v_4\} \\
E &= \{(s, v_2), (t, v_2), (v_2, v_1), (v_1, s), (v_1, t), (v_2, v_3), (v_3, v_4), (v_4, s), (v_4, t)\} \\
e &= (v_2, v_1) \\
G &= (V, E)
\end{aligned}
$$
