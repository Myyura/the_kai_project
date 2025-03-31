---
sidebar_label: "2021年8月実施 グラフ理論"
sidebar_position: 27
tags:
  - Kyoto-University
  - Graph-Theory
  - Minimum-Spanning-Tree
---
# 京都大学 情報学研究科 数理工学専攻 2021年8月実施 グラフ理論

## **Author**
祭音Myyura

## **Description**
### 日本語版
$G$ を点集合 $V$，枝集合 $E$ から成る単純連結無向グラフとし，各枝 $e\in E$ には実数値の重み $w(e)$ が付与されている．
点の部分集合 $X \subseteq V$ に対し $X$ と $V \setminus X$ の間の枝の集合を $E(X)$ と記す．
枝の部分集合 $S \subseteq E$ に対して $w(S) \triangleq \sum_{e \in S} w(e)$, $w_{\text{max}} (S) \triangleq \max_{e \in S} w(e)$ と定める．以下の問いに答えよ． 

(i) $(X, F)$, $X \neq V$ を $G$ の部分木とし，$G$ の最小木には木 $(X, F)$ を含むものが存在すると仮定する．$a_F = uv \in E(X)$ を $E(X)$ の中で重み最小の枝とする．このとき $G$ の最小木には $(X \cup \{u, v\}, F \cup \{a_F\})$ を含むものが存在することを証明せよ．

(ii) 最小木を求めるプリム法を記述し，その正当性を証明せよ．

(iii) $(V, T^*)$ を $G$ の最小木とする．このとき $G$ の任意の全域木 $(V, T)$ に対して $w_{\text{max}}(T^*) \le w_{\text{max}}(T)$ が成り立つことを証明せよ．

### English Version
Let $G$ be a simple and connected undirected graph with a vertex set $V$ and an edge set $E$ such that each edge $e\in E$ is weighted by a real value $w(e)$.
For a subset $X \subseteq V$ of vertices, let $E(X)$ denote the set of edges between $X$ and $V \setminus X$.
For a subset $S \subseteq E$ of edges, define $w(S) \triangleq \sum_{e \in S} w(e)$ and $w_{\text{max}} (S) \triangleq \max_{e \in S} w(e)$.
Answer the following questions.

(i) Let $(X, F)$, $X \neq V$ be a subtree of $G$ and assume that one of the minimum spanning trees of $G$ contains the tree $(X, F)$.
Let $a_F = uv \in E(X)$ be an edge with the minimum weight among the edges in $E(X)$.
Prove that one of the minimum spanning trees of $G$ contains $(X \cup \{u, v\}, F \cup \{a_F\})$

(ii) Describe Prim’s method for computing a minimum spanning tree and prove its correctness.

(iii) Let $(V, T^*)$ be a minimum spanning tree of $G$.
Prove that $w_{\text{max}}(T^*) \le w_{\text{max}}(T)$ holds for every spanning tree $(V, T)$ of $G$.


## **Kai**
### (i)
Let $T^* = (V, E^*)$ be one minimum spanning tree that contains the tree $(X, F)$.

From the connectivity of $T^*$, we know that there exists an edge $e_X \in E^*$ that connects $X$ and $V \setminus X$, i.e. $e_X \in E(X)$.
We substitute edge $e_X$ by edge $a_F$ and let $T'$ denote thetree after substitution, i.e. $T' = (V, E^* \setminus \{e_X\} \cup \{a_F\})$.

Since $a_F \in E(X)$ is an edge with the minimum weight among the edges in $E(X)$, we know that $w(a_F) \le w(e_X)$.

Hence

$$
w(T') = w(T^*) - w(e_X) + w(a_F) \le w(T^*).
$$

Hence $T'$ is a minimum spanning tree of $G$ contains $(X \cup \{u, v\}, F \cup \{a_F\})$

### (ii)
```text
PrimAlgorithm(G=(V, E)):
    choose an arbitrary vertex s in V
    F = {}
    X = {s}
    while X is not equal to V do:
        find an edge e = uv (u in X and v in V\X) of minimum weight among E(X)
        F = F + {e}
        X = X + {v}
    
    output F
```

We prove the correctness of Prim's algorithm by induction.

The induction hypothesis will be that after each iteration, the tree $T$ is a subgraph of some minimum spanning tree $T^*$.

This is trivially true at the start, since initially $T$ is just a single node and no edges. 

Suppose that at some point in the algorithm we have $T = (X, F)$ which a subgraph of some minimum spanning tree $T^*$.
Since the Prim's algorithm finds an edge $e = uv \in E(x)$ of minimum weight, from (i) we know that there exists a minimum spanning tree of $G$ that contains $(X \cup \{u, v\}, F \cup \{e\})$. This maintains the induction, so proves the correctness.

### (iii)
Prove by contradiction:
Assume that there exists a spanning tree $T' = (V, E')$ of $G$ such that $w_{\text{max}}(T^*) > w_{\text{max}}(E')$. Obviously $T^* \neq E'$.

Let $e^{*}_{\max}=uv$ be an edge of maximum weight in $T^*$.
The graph $T' \cup \{e^{*}_{\max}\}$ contains a cycle $C(e^{*}_{\max})$ (called the fundamental cycle of $e^{*}_{\max}$ with respect to $T'$).

Since $w_{\text{max}}(T^*) > w_{\text{max}}(E')$, for every edge $e \in C(e^{*}_{\max}), e \neq e^{*}_{\max}$ we have

$$
w(e) \le w_{\text{max}}(E') < w_{\text{max}}(T^*) = w(e^{*}_{\max})
$$

<!-- Let $T_1^*$ and $T_2^*$ be the two components of $T^* \setminus \{e^{*}_{\max}\}$. -->
Since $C(e^{*}_{\max}) \setminus \{e^{*}_{\max}\}$ is a path from $u$ to $v$ in $T'$, there exists an edge $f \in C(e^{*}_{\max})\setminus \{e^{*}_{\max}\}$ that connects $T^* \setminus \{e^{*}_{\max}\}$.

Then we have

$$
w(T^* \setminus \{e^{*}_{\max}\} + \{f\}) = w(T^*) - w(e^{*}_{\max}) + w(f) <w(T^*)
$$

i.e. the tree $T^* \setminus \{e^{*}_{\max}\} + \{f\}$ is a spanning tree of lower weight than $T^*$, a contradiction.
