---
comments: false
description: 京都大学 大学院 情報学研究科 数理工学専攻 2022年実施 専門科目 グラフ理論
keywords: Kyoto-University, 2022
---

## **Source**
京都大学 大学院 情報学研究科 数理工学専攻 2022年実施 専門科目 グラフ理論

By: Myyura

## **Description**
### 日本語版
非負実数全体の集合を $\mathbb{R}_+$ で表す．$N=[G, c]$ を点集合 $V$ 枝集合 $E$ をもつ単純有向グラフ $G=(V, E)$ および容量関数 $c: E \rightarrow \mathbb{R}_+$ からなるネットワークとする．
点の部分集合 $X, Y \subseteq V$ に対し，$X$ 内の点から $Y$ 内の点へ向かう枝の集合を $E(X, Y)$ と記す．
指定された二点 $s, t \in V$ に対し，次を満たす関数 $f: E \rightarrow \mathbb{R}_+$ を $(s, t)$-フローと呼ぶ．

$$
\begin{aligned}
&\text{流量保存則: } \sum_{e\in E(\{v\}, V\setminus \{v\})} f(e) - \sum_{e \in E(V \setminus \{v\}, \{v\})} f(e) = 0, \forall v \in V \setminus \{s, t\}, \\
&\text{容量制約: } f(e) \le c(e), \forall e \in E.
\end{aligned}
$$

$(s, t)$-フロー $f$ の流量 $\text{val}(f)$ を

$$
\text{val}(f) \coloneqq \sum_{e\in E(\{s\}, V \setminus \{s\})} f(e) - \sum_{e\in E(V \setminus \{s\}, \{s\})} f(e)
$$

で定める．また $s \in X, t \in V \setminus X$ を満たす点の部分集合 $X \subseteq V$ を $(s, t)$-カットと呼び，その容量 $\text{cap}(X)$ を

$$
\text{cap}(X) \coloneqq \sum_{e \in E(X, V \setminus X)} c(e)
$$

で定める．以下の問いに答えよ．

(i) 任意の $(s, t)$-フロー $f$ と $(s, t)$-カット $X$ に対し以下が成り立つことを証明せよ．

$$
\text{val}(f) = \sum_{e \in E(X, V \setminus X)}f(e) - \sum_{e \in E(V\setminus X, X)} f(e) \le \text{cap}(X).
$$

(ii) 与えられた$(s, t)$-フローf に対して定められる残余ネットワーク $N_f = [G_f = (V, E_f ), c_f]$ の作り方を説明せよ．

(iii) 残余ネットワーク $N_f$ が $s$ から $t$ へ至る有向路を持たないような $(s, t)$-フロー $f$ に対し，$S$ を $N_f$ において $s$ から到達可能な点の集合とする．このとき $N$ において $\text{val}(f) = \text{cap}(S)$ が成り立つことを証明せよ．

(iv) $X$ を $N$ において容量 $\text{cap}(X)$ を最小にする任意の $(s, t)$-カットとする．このとき (iii) の残余ネットワーク $N_f$ において $s$ から $V \setminus X$ のどの点へも到達できないことを証明せよ．

### English Version
Let $\mathbb{R}_+$ denote the set of nonnegative reals. 
Let $N=[G, c]$ be a network that consists of a simple directed graph $G=(V, E)$ with a vertex set $V$ and an edge set $E$ and a capacity function $c: E \rightarrow \mathbb{R}_+$.
For vertex subsets $X, Y \subseteq V$, let $E(X, Y)$ denote the set of edges that leave a vertex in $X$ and enter a vertex in $Y$.
For two designated vertices $s, t \in V$ , an $(s, t)$-flow is defined to be a function $f: E \rightarrow \mathbb{R}_+$ which satisfies the following:

$$
\begin{aligned}
&\text{Flow conservation law: } \sum_{e\in E(\{v\}, V\setminus \{v\})} f(e) - \sum_{e \in E(V \setminus \{v\}, \{v\})} f(e) = 0, \forall v \in V \setminus \{s, t\}, \\
&\text{Capacity constraint: } f(e) \le c(e), \forall e \in E.
\end{aligned}
$$

The flow value $\text{val}(f)$ of an $(s, t)$-flow f is defined to be

$$
\text{val}(f) \coloneqq \sum_{e\in E(\{s\}, V \setminus \{s\})} f(e) - \sum_{e\in E(V \setminus \{s\}, \{s\})} f(e)
$$

An $(s, t)$-cut is defined to be a vertex subset $X \subseteq V$ such that $s \in X$ and $t \in V \setminus X$, and its capacity $\text{cap}(X)$ is defined to be

$$
\text{cap}(X) \coloneqq \sum_{e \in E(X, V \setminus X)} c(e)
$$

Answer the following questions.

(i) Prove that for any $(s, t)$-flow $f$ and any $(s, t)$-cut $X$

$$
\text{val}(f) = \sum_{e \in E(X, V \setminus X)}f(e) - \sum_{e \in E(V\setminus X, X)} f(e) \le \text{cap}(X).
$$

holds.

(ii) For a given $(s, t)$-flow $f$, show how to construct its residual network $N_f = [G_f = (V, E_f ), c_f]$.

(iii) For an $(s, t)$-flow $f$ such that the residual network $N_f$ has no directed path from $s$ to $t$, let $S$ denote the set of all vertices reachable from $s$ in $N_f$ . Prove that $\text{val}(f) = \text{cap}(S)$ holds in $N$.

(iv) Let $X$ be an $(s, t)$-cut with the minimum capacity $\text{cap}(X)$ in $N$. Prove that no vertex in $V \setminus X$ is reachable from $s$ in the residual network $N_f$ in (iii).

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
\text{val}(f) &= \sum_{v \in V} f(s, v) - \sum_{v \in V}f(v,s) + \sum_{u \in X \setminus \{s\}} \sum_{v \in V} f(u, v) - \sum_{u \in X \setminus \{u\}} \sum_{v \in V} f(v,u) \\
&= \sum_{v \in V} \Big(f(s,v) + \sum_{u \in X \setminus \{u\}}f(u,v) \Big) - \sum_{v \in V} \Big(f(v,s) + \sum_{u\in X \setminus \{u\}} f(v, u) \Big) \\
&= \sum_{v \in V} \sum_{u\in X} f(u, v) - \sum_{v \in V}\sum_{u \in x} f(v, u) \\
&= \sum_{v \in X} \sum_{u\in X} f(u, v) + \sum_{v \in V \setminus X} \sum_{u\in X} f(u, v) - \sum_{v \in X} \sum_{u \in X} f(v, u) - \sum_{v \in V \setminus X} \sum_{u \in X} f(v, u)
\end{aligned}
$$

The two summations $\sum_{v \in X} \sum_{u\in X} f(u, v)$ and $\sum_{v \in X} \sum_{u \in X} f(v, u)$ are actually the same, therefore

$$
\begin{aligned}
\text{val}(f) &= \sum_{v \in V \setminus X} \sum_{u\in X} f(u, v) - \sum_{v \in V \setminus X} \sum_{u \in X} f(v, u) \\
&= \sum_{e \in E(X, V \setminus X)}f(e) - \sum_{e \in E(V\setminus X, X)} f(e) \\
&\le \sum_{e \in E(X, V \setminus X)}f(e) \\
&\le \sum_{e \in E(X, V \setminus X)}c(e) \ \ \ \ \ \ \text{(capacity constraint)} \\
&= \text{cap}(X)
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
To prove $\text{val}(f) = \text{cap}(S)$, we prove the following two conditions:

(a) All outgoing edges from the cut $S$ must be fully saturated.

(b) All incoming edges to the cut $S$ must have zero flow.

Assume that there exists an outgoing edge $(u, v) \in E$, $u \in S$, $v \in V \setminus S$ such that it is not saturated, i.e. $f(u, v) < c(u, v)$.
This implies that there exists an edge $(u, v) \in E_f$, $u \in S$, $v \in V \setminus S$, therefore there exists a path from $s$ to $v$, which is contradictory to the definition of $S$.
Hence, any outgoing edge $(u, v)$ is fully saturated. 

Assume that there exists an incoming edge $(v, u) \in E$, $u \in S$, $v \in V \setminus S$ such that it carries some non-zero flow, i.e. $f(v, u) > 0$.
This implies that there exists an edge $(u, v) \in E_f$, $u \in S$, $v \in V \setminus S$, therefore there exists a path from $s$ to $v$, which is contradictory to the definition of $S$.
Hence, any incoming edge $(v, u)$ must have zero flow.

Finally, we have

$$
\begin{aligned}
\text{val}(f) &= \sum_{e \in E(S, V \setminus S)}f(e) - \sum_{e \in E(V\setminus S, S)} f(e) \\
&= \sum_{e \in E(S, V \setminus S)}c(e) - 0 \\
&= \text{Cap}(S)
\end{aligned}
$$

### (iv)
Prove by contradiction: W.l.o.g we assume that there exists only one vertex $v^* \in S \cap (V \setminus X)$, i.e. $S \setminus X = \{v^*\}$.

From the flow conservation law we have

$$
\begin{aligned}
\sum_{u \in V} f(u, v^*) &= \sum_{u \in V} f(v^*, u) \\
\sum_{u \in S \cap X} f(u, v^*) + \sum_{u \in V \setminus S} f(u, v^*) &= \sum_{u \in S \cap X} f(v^*, u) + \sum_{u \in V \setminus S} f(v^*, u)
\end{aligned}
$$

From (iii) we know that

$$
\sum_{u \in V \setminus S} f(u, v^*) = 0
$$

and

$$
\sum_{u \in V \setminus S} f(v^*, u) = \sum_{u \in V \setminus S} c(v^*, u) \ge 0
$$

Hence we have

$$
\begin{aligned}
\sum_{u \in V \setminus S} c(v^*, u) &= \sum_{u \in S \cap X} f(u, v^*) - \sum_{u \in S \cap X} f(v^*, u) \\
\sum_{u \in V \setminus S} c(v^*, u) &= 0
\end{aligned}
$$

which is contradictory to the definition of $c: E \rightarrow \mathbb{R}_+$.