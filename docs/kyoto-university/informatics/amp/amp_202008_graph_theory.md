---
sidebar_label: "2020年8月実施 グラフ理論"
sidebar_position: 15
tags:
  - Kyoto-University
  - Graph-Theory
  - Max-Flow
---
# 京都大学 情報学研究科 数理工学専攻 2020年8月実施 グラフ理論

## **Author**
祭音Myyura

## **Description**
### 日本語版
$G = (V, E)$ を節点集合 $V$, 枝集合 $E$ から成る単純有向グラフとし，$N = [G, c]$ を $G$ の各枝 $e \in E$ に実数値の容量 $c(e) > 0$ を与えて得られるネットワークとする．
節点の部分集合 $X, Y \subseteq V$ に対し，$X$ 内の点から $Y$ 内の点へ向かう枝の集合を $E(X, Y)$ と記す．
非負実数全体の集合を $\mathbb{R}_+$ で表す．
指定された二点 $s, t \in V$ に対し，流量保存則 $\sum_{e\in E(\{v\}, V \setminus \{v\})} f(e) - \sum_{e \in E(V \setminus \{v\}, \{v\})} f(e) = 0, \forall v \in V \setminus \{s, t\}$ および容量制約 $f(e) \le c(e), \forall e \in E$ を満たす関数 $f: E \rightarrow \mathbb{R}_+$ を $(s, t)$  フローと呼び，その流量 $\text{val}(f)$ を

$$
\sum_{e\in E(\{s\}, V \setminus \{s\})} f(e) - \sum_{e \in E(V \setminus \{s\}, \{s\})} f(e)
$$

で定める．また，$s \in X, t \in V \setminus X$ を満たす節点の部分集合 $X \subseteq V$ を $(s, t)$ カットと呼び，その容量 $\text{cap}(X)$ を

$$
\sum_{e \in E(X, V \setminus X)} c(e)
$$

で定める．以下の問いに答えよ．

(i) 任意の $(s, t)$ フロー $f$ と $(s, t)$ カット $X$ に対し，等式

$$
\text{val}(f) = \sum_{e \in E(X, V \setminus X)} f(e) - \sum_{e \in E(V \setminus X, X)} f(e)
$$

が成り立つことを証明せよ．

(ii) 与えられた $(s, t)$ フロー $f$ に対して定められる残余ネットワーク $N_f = [G_f = (V, E_f), c_f]$ の作り方を説明せよ．

(iii) 残余ネットワーク $N_f$ において，$s$ から $t$ への有向路が存在するとき，そのひとつを $P$ とする．$P$ 上の枝の $N_f$ における容量の最小値を $\Delta$ とするとき，$N$ には流量が $\text{val}(f) + \Delta$ である $(s, t)$ フローが存在することを証明せよ．

(iv) 残余ネットワーク $N_f$ が $s$ から $t$ への有向路をもたないとき，$N_f$ において $s$ から到達可能な節点の集合を $S$ とする．このとき，$s \in A$ である任意の集合 $A \subsetneq S$ に対し $\text{cap}(A) > \text{cap}(S)$ が成り立つことを証明せよ．

### English Version
Let $G = (V, E)$ be a simple directed graph with a vertex set $V$ and an edge set $E$, and let
$N = [G, c]$ be a network obtained from $G$ by assigning a real value $c(e) > 0$ to each edge $e \in E$ as its capacity.
For vertex subsets $X, Y \subseteq V$, let $E(X, Y)$ denote the set of edges that leave a vertex in $X$ and enter a vertex in $Y$. Let $\mathbb{R}_+$ denote the set of nonnegative reals.
For two designated vertices $s, t \in V$ , an $(s, t)$-flow is defined to be a mapping
$f : E → \mathbb{R}_+$ which satisfies $\sum_{e\in E(\{v\}, V \setminus \{v\})} f(e) - \sum_{e \in E(V \setminus \{v\}, \{v\})} f(e) = 0, \forall v \in V \setminus \{s, t\}$ (flow conservation law) and $f(e) \le c(e), \forall e \in E$ (capacity constraint), and its flow value $\text{val}(f)$ is defined to be

$$
\sum_{e\in E(\{s\}, V \setminus \{s\})} f(e) - \sum_{e \in E(V \setminus \{s\}, \{s\})} f(e)
$$

An $(s, t)$-cut is defined to be a vertex subset $X \subseteq V$ such that $s \in X$ and $t \in V \setminus X$, and its capacity $\text{cap}(X)$ is defined to be

$$
\sum_{e \in E(X, V \setminus X)} c(e)
$$

Answer the following questions.

(i) Prove that for any $(s, t)$-flow $f$ and any $(s, t)$-cut $X$

$$
\text{val}(f) = \sum_{e \in E(X, V \setminus X)} f(e) - \sum_{e \in E(V \setminus X, X)} f(e)
$$

holds.

(ii) For a given $(s, t)$-flow $f$, show how to construct its residual network $N_f = [G_f = (V, E_f), c_f]$.

(iii) For an $(s, t)$-flow $f$ in $N$, assume that there is a directed path $P$ from $s$ to $t$ in the residual network $N_f$ . Let $\Delta$ denote the minimum capacity of an edge in $P$ in $N_f$. Prove that $N$ has an $(s, t)$-flow whose flow value is $\text{val}(f) + \Delta$.

(iv) For an $(s, t)$-flow $f$ in $N$, assume that there is no directed path from $s$ to $t$ in the residual network $N_f$. Let $S$ denote the set of vertices that are reachable from $s$ in $N_f$. Prove that $\text{cap}(A) > \text{cap}(S)$ holds for any set $A \subsetneq S$ with $s \in A$.

## **Kai**
### (i)
We can rewrite the flow conservation law for any node $u \in V \setminus \{s, t\}$ as

$$
\sum_{v \in V}f(u, v) - \sum_{v \in V} f(v, u) = 0
$$

then we have

$$
\begin{aligned}
\text{val}(f) &= \sum_{e\in E(\{s\}, V \setminus \{s\})} f(e) - \sum_{e\in E(V \setminus \{s\}, \{s\})} f(e) \\
&= \sum_{v \in V} f(s, v) - \sum_{v \in V} f(v, s) + \sum_{u \in X - \{s\}} \Big(\sum_{v \in V} f(u, v) - \sum_{v \in v} f(v, u) \Big)
\end{aligned}
$$

Expanding the right-hand summation and regrouping terms yields

$$
\begin{aligned}
\text{val}(f) &= \sum_{v \in V} f(s, v) - \sum_{v \in V}f(v,s) + \sum_{u \in X \setminus \{s\}} \sum_{v \in V} f(u, v) - \sum_{u \in X \setminus \{s\}} \sum_{v \in V} f(v,u) \\
&= \sum_{v \in V} \Big(f(s,v) + \sum_{u \in X \setminus \{s\}}f(u,v) \Big) - \sum_{v \in V} \Big(f(v,s) + \sum_{u\in X \setminus \{s\}} f(v, u) \Big) \\
&= \sum_{v \in V} \sum_{u\in X} f(u, v) - \sum_{v \in V}\sum_{u \in X} f(v, u) \\
&= \sum_{v \in X} \sum_{u\in X} f(u, v) + \sum_{v \in V \setminus X} \sum_{u\in X} f(u, v) - \sum_{v \in X} \sum_{u \in X} f(v, u) - \sum_{v \in V \setminus X} \sum_{u \in X} f(v, u)
\end{aligned}
$$

The two summations $\sum_{v \in X} \sum_{u\in X} f(u, v)$ and $\sum_{v \in X} \sum_{u \in X} f(v, u)$ are actually the same, since for all vertices $x, y \in V$ , the term $f(x,y)$ appears once in each summation. therefore

$$
\begin{aligned}
\text{val}(f) &= \sum_{v \in V \setminus X} \sum_{u\in X} f(u, v) - \sum_{v \in V \setminus X} \sum_{u \in X} f(v, u) \\
&= \sum_{e \in E(X, V \setminus X)}f(e) - \sum_{e \in E(V\setminus X, X)} f(e)
\end{aligned}
$$

### (ii)
We define the residual capacity $c_f (u, v)$ by

$$
c_f(u,v) = \left\{
    \begin{aligned}
    &c(u,v) - f(u, v) &\text{if } (u, v) \in E \\
    &f(v, u)  &\text{if } (v, u) \in E \\
    &0 &\text{otherwise.}
    \end{aligned}
\right.
$$

and the edge set $E_f$ by

$$
E_f = \{(u,v) \in V \times V \ \mid \  c_f(u,v) > 0\}
$$

### (iii)
Let $f': E \rightarrow \mathbb{R}_+$ be defined as follows:

$$
f'(u, v) = \left\{
    \begin{aligned}
    &f(u, v) + \Delta &\text{ if } (u, v) \in P \text{ and } (u, v) \in E \\
    &f(u, v) - \Delta &\text{ if } (v, u) \in P \text{ and } (u, v) \in E \\
    &f(u, v) &\text{otherwise.}
    \end{aligned}
 \right.
$$

We prove that $f'$ is a flow and $\text{val}(f') = \text{val}(f) + \Delta$

First we verify that $f'$ obeys that capacity constraint.

For an edge $(u, v) \in P \text{ and } (u, v) \in E$, we have

$$
\begin{aligned}
f'(u, v) &= f(u, v) + \Delta \\
&\le f(u, v) + c_f(u, v) \\
&= f(u, v) + c(u, v) - f(u,v) \\
&= c(u, v)
\end{aligned}
$$

For an edge $(v, u) \in P \text{ and } (u, v) \in E$, we have

$$
f'(u, v) = f(u, v) - \Delta \le c(u, v)
$$

$$
\begin{aligned}
f'(u, v) &= f(u, v) - \Delta \\
&\ge f(u, v) - c_f(v, u) \\
&= f(u, v) - f(u, v) \\
&= 0
\end{aligned}
$$

Hence the capacity constraint holds.

Next we prove the flow conservation constraint.
For a vertex $u \in V \setminus \{s, t\}$, obviously the flow conservation constraint holds if $u \notin V(P)$.
Hence we focus on the case that $u \in V(P)$.

For a vertex $u \in V(P) \setminus \{s, t\}$, since $P$ is a simple path, there are exactly two edges $(u_1, u)$ and $(u, u_2)$ in $P$ that adjacent to $u$.

if $(u_1, u) \in E$ and $(u, u_2) \in E$, then we have

$$
\begin{aligned}
\sum_{v \in V} f'(u, v) &= \Big(\sum_{v \in V \setminus \{ u_2\}} f(u, v)\Big) + f'(u, u_2) \\
&= \Big(\sum_{v \in V \setminus \{ u_2\}} f(u, v)\Big) + f(u, u_2) + \Delta \\
&= \Big(\sum_{v \in V} f(u, v)\Big) + \Delta
\end{aligned}
$$

$$
\begin{aligned}
\sum_{v \in V} f'(v, u) &= \Big(\sum_{v \in V \setminus \{ u_1\}} f(v, u)\Big) + f'(u_1, u) \\
&= \Big(\sum_{v \in V \setminus \{ u_1\}} f(v, u)\Big) + f(u_1, u) + \Delta \\
&= \Big(\sum_{v \in V} f(v, u)\Big) + \Delta
\end{aligned}
$$

if $(u_1, u) \in E$ and $(u_2, u) \in E$, then we have

$$
\sum_{v \in V} f'(u, v) = \sum_{v \in V} f(u, v)
$$

$$
\begin{aligned}
\sum_{v \in V} f'(v, u) &= \Big(\sum_{v \in V \setminus \{ u_1, u_2\}} f(v, u)\Big) + f'(u_1, u) + f'(u_2, u) \\
&= \Big(\sum_{v \in V \setminus \{ u_1, u_2\}} f(v, u)\Big) + f(u_1, u) + \Delta + f(u_2, u) - \Delta \\
&= \sum_{v \in V} f(v, u)
\end{aligned}
$$

Similarly for the case $(u, u_1) \in E, (u, u_2) \in E$ and the case $(u, u_1) \in E, (u_2, u) \in E$.
Hence the flow conservation constraint holds.

Finlly, we compute the value $\text{val}(f')$.
Same as the proof of flow conservation constraint, there are two cases for the edge in $N$ corresponds to the edge adjacent to $s$ in $P$ of $N_f$.

It is easy to compute that in both cases we have

$$
\text{val}(f') = \text{val}(f) + \Delta
$$

Therefore, $N$ has an $(s, t)$-flow whose flow value is $\text{val}(f) + \Delta$.

### (iv)
By [京都大学 大学院 情報学研究科 数理工学専攻 2022年実施 グラフ理論](amp_202208_graph_theory.md) (i) and (iii) we know that $S$ is actually a minimum $s,t$-cut.

Hence for any any set $A \subsetneq S$ with $s \in A$, we have $\text{cap}(A) > \text{cap}(S)$.