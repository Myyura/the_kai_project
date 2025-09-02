---
sidebar_label: "2018年3月実施 基礎科目 問題4 情報基礎2"
tags:
  - Tohoku-University
  - Graph-Theory
---
# 東北大学 工学研究科 電気・情報系 2018年3月実施 基礎科目 問題4 情報基礎2

## **Author**
祭音Myyura (assisted by GPT-5)

## **Description**
### 日本語版
本間では、グラフとは有限無向グラフであり、自己ループ辺および多重辺が存在することは許すものとする。また、次の用語と記号を定義する。

- 任意のグラフ $G$ について、$G$ の点の数を $n(G)$、辺の数を $m(G)$ でそれぞれ表す。
- 任意のグラフ $G$ とその点がについて、$G$ における $x$ の次数を $\text{deg}(G, x)$ で表す。
- グラフ $G$ 上の任意の歩道 $C$ について、$C$ の長さ $l(C)$ は $C$ が通る辺の延べ総数である。
- $C$ をグラフ $G$ 上の閉じた歩道とするとき、$C$ が $1$-回路(またはオイラー回路)であるとは、$C$ が $G$ の各々の辺をちょうど $1$ 回ずつ通ることを言い、$C$ が $2$ 回路であるとは、$C$ が $G$ の各々の辺 を $1$ 回または $2$ 回通ることを言う。
- グラフ $G$ の部分グラフ $H$ がパリティ部分グラフであるとは、$H$ が $G$ の全ての点を含み、かつ $G$ 上の任意の点 $x$ について、$\text{deg}(G,x)$ と $\text{deg}(H,x)$ の偶奇が一致することを言う。$G$ のパリティ部分グラフ $H$ で辺の数 $m(H)$ が最も少ないものを最小パリティ部分グラフと言う。

このとき、次の問に答えよ、ただし、必要ならば次の事実 (A)，(B) を証明なしに用いてもよい。

- (A) 連結グラフ $G$ が $1$-回路を持つためには、 $G$ の全ての点の次数が偶数であることが必要十分である.
- (B) 任意の自然数 $n$ について、$n$ 個の点から成る木は $n-1$ 本の辺を持つ。

(1) $G$ を連結グラフとする。

- (a) $H$ を $G$ の任意のパリティ部分グラフとするとき、$G$ は $l(C)=m(G)+m(H)$ となる $2$-回路 $C$ を持つことを示せ。
- (b) $C$ を $G$ 上の任意の $2$-回路とするとき，$G$ は $m(H)= l(C) - m(G)$ となるパリティ部分グラフ$H$ を持つことを示せ。

(2) $G$ を連結グラフ、$H$ をその最小パリティ部分グラフとする。

- (a) $H$ は閉路を持たないことを示せ。
- (b) $G$ 上の最も短い $2$-回路の長さを $\mu_2(G)$ とするとき、$H$ は $m(G)+n(G)-\mu_2(G)$ 個の連結成分から成ることを示せ。

### English Version
In this question, any graph is a finite undirected graph which may have self-loops and multiple edges. Define the folowing terms and symbols:

- For any graph $G$, let $n(G)$ and $m(G)$ denote the number of vertices and edges in $G$, respectively.
- For any graph $G$ and any vertex $x$ in $G$, $\text{deg}(G, x)$ denotes the degree of $x$ in $G$.
- For any graph $G$ and any walk $C$ on $G$, the length $l(C)$ of $C$ is the total number of edges that $C$ passes.
- For a graph $G$ and a closed walk $C$ on $G$, $C$ is a 1-circuit (or an Euler circuit) if $C$ passes each edge of $G$ exactly once, and $C$ is a 2-circuit if $C$ passes each edge of $G$ once or twice.
- A subgraph $H$ of a graph $G$ is a parity subgraph if $H$ contains all vertices of $G$ and for any vertex $x$ in $G$, $\text{deg}(G, x)$ and $\text{deg}(H, x)$ have the same odd-even parity. A parity subgraph $H$ of $G$ is a minimum parity subgraph if the number $m(H)$ of edges in $H$ is minimum among all parity subgraphs of $G$.

Answer the folowing questions. If necessary, the following facts (A) and (B) can be applied without proof.

- (A) A connected graph $G$ has a 1-circuit if and only if every vertex of $G$ is of even degree.
- (B) For any natural number $n$, any tree of $n$ vertices has $n-1$ edges.

(1) Let $G$ be any connected graph.

- (a) Prove that for any parity subgraph $H$ of $G$, $G$ has a 2-circuit $C$ such that $l(C) = m(G) + m(H)$.
- (b) Prove that for any 2-circuit $C$ in $G$, $G$ has a parity subgraph $H$ such that $m(H) = l(C) - m(G)$.

(2) Let $G$ be any connected graph and $H$ be any minimum parity subgraph of $G$.

- (a) Prove that $H$ contains no cycle.
- (b) Let $\mu_2(G)$ denote the length of a shortest 2-circuit in $G$. Prove that $H$ consists of $m(G) +n(G) - \mu_2(G)$ connected components.

## **Kai**
### (1)
#### (a) From a parity subgraph to a 2-circuit and its length

Let $H\subseteq G$ be a parity subgraph. Form a multigraph $G^{+}$ by **adding one parallel copy of every edge of $H$** to $G$.
Then for each vertex $x$,

$$
\deg_{G^{+}}(x)=\deg_G(x)+\deg_H(x)\equiv 0\pmod 2,
$$

so every vertex of $G^{+}$ has even degree. By (A), $G^{+}$ has an Euler circuit $C^{+}$.

Read $C^{+}$ back in $G$ by forgetting which of two parallel copies it used.  
Every edge of $G\setminus H$ is used once; every edge of $H$ is used twice.  
Thus we obtain a 2-circuit $C$ in $G$ with

$$
\ell(C)=m(G\setminus H)+2m(H)=m(G)+m(H).
$$

#### (b) From a 2-circuit to a parity subgraph and its size
Let $C$ be any 2-circuit of $G$. Define $H\subseteq G$ to be the subgraph
consisting of the edges that $C$ uses **twice**.
Then

$$
\ell(C)=\underbrace{m(G)}_{\text{every edge at least once}}+\underbrace{m(H)}_{\text{edges used twice}}
$$

$$
m(H)=\ell(C)-m(G)
$$

To see $H$ is a parity subgraph, fix a vertex $x$. In the closed walk $C$, each visit to $x$ uses two incident edge-ends (enter/leave), and a loop at $x$ contributes two ends; hence the total number of used edge-ends at $x$ is even. Modulo $2$, this implies the number of incident edges used **exactly once** at $x$ is even, i.e.

$$
\deg_G(x)\equiv \deg_H(x)\pmod 2.
$$

Thus $H$ is a parity subgraph and $m(H)=\ell(C)-m(G)$.

### (2) Structure of a minimum parity subgraph

Let $H\subseteq G$ be a **minimum** parity subgraph (minimum number of edges).
Let $\mu_2(G)$ be the length of a shortest 2-circuit in $G$.

#### (a) $H$ has no cycle
If $H$ contained a cycle $Z$ (a loop counts as a 1-cycle), removing all edges of $Z$ would decrease the degree of each vertex on $Z$ by $2$, preserving parity at every vertex. The resulting subgraph would be a parity subgraph with fewer edges, contradicting the minimality of $H$. Hence $H$ is acyclic.

#### (b) Number of components of $H$
From (1a): for any parity subgraph $F$ there exists a 2-circuit $C$ with

$$
\ell(C)=m(G)+m(F)\quad\Rightarrow\quad \mu_2(G)\le m(G)+m(F).
$$

From (1b): for any 2-circuit $C$ there exists a parity subgraph $F$ with

$$
m(F)=\ell(C)-m(G)\quad\Rightarrow\quad \min_F m(F)\le \mu_2(G)-m(G).
$$

Together,

$$
\min_{F\text{ parity}} m(F)=\mu_2(G)-m(G).
$$

Since $H$ is minimum, $m(H)=\mu_2(G)-m(G)$.

Because $H$ is a forest on $n(G)$ vertices and $m(H)$ edges, its number of components is

$$
\#\text{components}(H)=n(G)-m(H)\quad\text{(by (B))}.
$$

Therefore

$$
\#\text{components}(H)
= n(G)-\bigl(\mu_2(G)-m(G)\bigr)
= m(G)+n(G)-\mu_2(G).
$$

## **Knowledge**
The Chinese Postman Problem (CPP) and T-joins could be very useful references.