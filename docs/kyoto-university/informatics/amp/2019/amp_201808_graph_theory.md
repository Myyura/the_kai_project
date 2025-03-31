---
sidebar_label: "2018年8月実施 グラフ理論"
tags:
  - Kyoto-University
  - Graph-Theory
  - Shortest-Path-Problem
---
# 京都大学 情報学研究科 数理工学専攻 2018年8月実施 グラフ理論

## **Author**
祭音Myyura

## **Description**
### 日本語版
$G = (V, E)$ を節点集合 $V$、枝集合 $E$ から成る単純強連結有向グラフ、$N = [G, w]$ を $G$ の各枝 $e \in E$ に実数値の重み $w(e)$ を与えて得られるネットワークとする。
節点 $u$ から節点 $v$ への有向枝は $(u, v)$ と書き、その枝重みは $w(u,v)$ とも書く。
節点 $u$ から節点 $v$ への距離 $\text{dist}(u,v)$ を $N$ における $u$ から $v$ への単純路上の枝重みの和の最小値と定める。
枝重み和が負である有向閉路を負閉路と呼ぶ。以下の問いに答えよ。

(i) 次の条件を満たす節点の実数値重み $p(v)$, $v \in V$ が存在するとき、$N$ に負閉路が存在しないことを証明せよ。

$$
w(u, v) + p(u) - p(v) \geqq 0, \quad \forall (u, v) \in E.
$$

(ii) 次を満たす節点 $s \in V$ と枝 $(u,v) \in E$ の組が存在するとき、$N$ に負閉路が存在することを証明せよ。

$$
\text{dist}(s, u) + w(u, v) < \text{dist}(s, v)
$$

(iii) 各枝の重みが非負であると仮定する。
ある部分集合 $S \subseteq V$ と節点 $s \in S$ に対して、$S$ から $V \setminus S$ へ向かう枝 $(u, v) \in E$ の中で $\text{dist}(s, u) + w(u,v)$ の値が最小とする枝を $(u^*, v^*)$ とする。
このとき、$\text{dist}(s, v^*) = \text{dist}(s, u^*) + w(u^*, v^*)$ が成り立つことを証明せよ。

### English Version
Let $G = (V, E)$ denote a simple, strongly connected digraph with a vertex set $V$ and an edge set $E$, and let $N= [G, w]$ denote a network obtained from $G$ by assigning a real value $w(e)$ ot each edge $e \in E$ as its weight.
A directed edge from a vertex $u$ to a vertex $v$ is denoted by $(u, v)$ and its weight is writen as $w(u, v)$.
Define the distance $\text{dist}(u, v)$ from a vertex $u$ to a vertex $v$ to be the minimum summation of weights of edges in a simple path from $u$ to $v$ in $N$.
A directed cycle is called a negative cycle if the sum of edge weights in the cycle is negative.
Answer the following questions.

(i) Prove that $N$ has no negative cycle if there is a set of real weights $p(v), v \in V$ such that

$$
w(u, v) + p(u) - p(v) \geqq 0, \quad \forall (u, v) \in E.
$$

(ii) Prove that $N$ has a negative cycle if there is a pair of a vertex $s \in V$ and an edge $(u, v) \in E$ such that

$$
\text{dist}(s, u) + w(u, v) < \text{dist}(s, v)
$$

(iii) Assume that the weight of each edge is non-negative.
For a subset $S \subseteq V$ and a vertex $s \in S$, let $(u^*, v^*)$ be an edge that minimizes $\text{dist}(s, u) + w(u,v)$ among all edges $(u, v) \in E$ directed from $S$ to $V \setminus S$.
Prove that $\text{dist}(s, v^*) = \text{dist}(s, u^*) + w(u^*, v^*)$.

## **Kai**
### (i)
Please refer to [京都大学 情報学研究科 数理工学専攻 2023年8月実施 グラフ理論](https://runjp.com/kakomonn/kyoto_university/informatics/amp_202308_graph_theory).

### (ii)
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

### (iii)
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
