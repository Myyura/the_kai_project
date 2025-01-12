---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2018年8月実施 グラフ理論
tags:
  - Kyoto-University
  - Graph-Theory
  - Shortest-Path-Problem
---
# 京都大学 情報学研究科 数理工学専攻 2018年8月実施 グラフ理論

## **Author**
祭音Myyura

## **Description**
$G = (V, E)$ を節点集合 $V$，枝集合 $E$ から成る単純強連結有向グラフ，$N = [G, w]$ を $G$ の各枝 $e \in E$ に実数値の重み $w(e)$ を与えて得られるネットワークとする．
節点 $u$ から節点 $v$ への有向枝は $(u, v)$ と書き，その枝重みは $w(u, v)$ とも書く．
節点 $u$ から節点 $v$ への距離 $\text{dist}(u, v)$ を $N$ における $u$ から $v$ への単純路上の枝重みの和の最小値と定める．
枝重みの和が負である有向閉路を負閉路と呼ぶ．
以下の問いに答えよ．

(1) 次の条件を満たす節点の実数値重み $p(v)$，$v \in V$ が存在するとき，$N$ に負閉路が存在しないことを証明せよ．

$$
w(u, v) + p(u) - p(v) \geq 0, \quad \forall (u, v) \in E.
$$

(2) 次を満たす節点 $s \in V$ と枝 $(u, v) \in E$ の組が存在するとき，$N$ に負閉路が存在することを証明せよ．

$$
\text{dist}(s, u) + w(u, v) < \text{dist}(s, v).
$$

(3) 各枝の重みが非負であると仮定する．
ある部分集合 $S \subseteq V$ と節点 $s \in S$ に対して，$S$ から $V \setminus S$ へ向かう枝 $(u, v) \in E$ の中で $\text{dist}(s, u) + w(u, v)$ の値を最小とする枝を $(u^*, v^*)$ とする．
このとき，

$$
\text{dist}(s, v^*) = \text{dist}(s, u^*) + w(u^*, v^*)
$$

が成り立つことを証明せよ．

## **Kai**
### (1)
Please refer to [京都大学 情報学研究科 数理工学専攻 2023年8月実施 グラフ理論](amp_202308_graph_theory).

### (2)
Let $P_{s,u}$ denote a simple path from $s$ to $u$ of distance $\text{dist}(s, u)$.
Let $P'_{s, v}$ denote the path by concatenating $P_{s,u}$ and edge $(u,v)$.

If $\text{dist}(s, u) + w(u, v) < \text{dist}(s, v)$, then by the definition of "distance" we know that $P'_{s, v}$ is not a simple path otherwise $\text{dist}(s, u) + w(u, v) \geq \text{dist}(s, v)$.

Since $P_{s,u}$ is a simple path but $P'_{s, v}$ is not, we have $v \in V(P_{s,u})$.
Hence there exists a cycle $C$ in $P'_{s, v}$ which can be written as $(v, \ldots, u, v)$.

Let $P_{s,u}^v$ denote the subpath of $P_{s,u}$ ends at $v$ (note that $P_{s,u}^v$ is also a simple path).
If $C$ is not a negative cycle, i.e., $w(C) \geq 0$, then we have

$$
w(P_{s,u}^v) = w(P_{s,u}) - w(C) \leq \text{dist}(s,u) - w(c) < \text{dist}(s,v)
$$

which contradicts the definition of $\text{dist}(s,v)$. Therefore, $C$ is a negative cycle.

### (3)
(Note: this question is actually asking a proof of correctness of Dijkstra's algorithm)

Since the weight of each edge is non-negative, there does not exist negative cycle.
Hence by the definition of $\text{dist}(s,v^*)$ and question (2) we know that

$$
\text{dist}(s,v^*) \leq \text{dist}(s,u^*) + w(u^*,v^*)
$$

Any path from $s$ to $v^*$ must go through an edge from $S$ to $V \setminus S$.
Hence, let $P_{s, v^*} = \{s, \ldots, u', v', \ldots, v^*\}$ denote a shortest simple path from $s$ to $v$.
W.l.o.g. we assume that $u' \in S, v' \in V \setminus S$ and let $P_1 = \{s, \ldots, u'\}$ and $P_2 = \{v', \ldots, v^*\}$ denote the subpaths of $P_{s, v^*}$.
Then,

$$
\begin{aligned}
    \text{dist}(s,v^*) &= w(P_{s, v^*}) = w(P_1) + w(u',v') + w(P_2) \\
    &\geq w(P_1) + w(u', v') \ \ (\text{the weight of each edge is non-negative}) \\
    &\geq \text{dist}(s,u^*) + w(u^*,v^*) \ \ (\text{definition of }(u^*,v^*))
\end{aligned}
$$

Therefore,

$$
\text{dist}(s,v^*) = \text{dist}(s,u^*) + w(u^*,v^*)
$$
