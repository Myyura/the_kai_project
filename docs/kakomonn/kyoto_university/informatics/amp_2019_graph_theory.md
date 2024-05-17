---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2019年実施 専門科目 グラフ理論
tags:
  - Kyoto-University
  - Minimum-Spanning-Tree
---
# 京都大学 情報学研究科 数理工学専攻 2019年実施 専門科目 グラフ理論

## **Author**
祭音Myyura

## **Description**
### 日本語版
$G =(V,E)$ を節点集合 $V$，枝集合 $E$ から成る連結な単純無向グラフとし，各枝 $e \in E$ には実数値の重み $w(e)$ が与えられているとする．
$G$ の全域木 $T \subseteq E$ に対して，補木の枝 $a \in E \setminus T$ を含む $T$ の基本閉路を $C_T(a)$，木の枝 $b \in T$ を含む $T$ の基本カットセットを $K_T(b)$ と書く．以下の問いに答えよ．

(i) $G$ の全域木 $T \subseteq E$ が最小木であるとき，次の条件(C)が成り立つことを証明せよ．

> 条件(C): 補木の任意の枝 $a \in E \setminus T$ とその基本閉路の各枝 $b \in C_T(a)$ に対して $w(a) \ge w(b)$ が成り立つ．

(ii) 条件(C)を満たす任意の全域木 $T$ は次の条件(K)を満たすことを証明せよ．

> 条件(K): 全域木 $T$ の任意の枝 $b \in T$ とその基本カットセットの各枝 $a \in K_T(b)$ に対して $w(a) \ge w(b)$ が成り立つ．

(iii) $G$ の全域木 $T \subseteq E$ に対して条件(K)が成り立つとき，$T$ は最小木であることを証明せよ．

(iv) 次の命題が真であれば証明を，偽であれば反例を与えよ．

> 「$G$ が最小木を二つ持つとき，$G$ には同じ重みを持つ枝が少なくとも２本存在する．」

### English Version
Let $G =(V,E)$ denote a simple and connected undirected graph with a vertex set $V$ and an edge set $E$ such that each edge $e \in E$ is weighted by a real value $w(e)$.
For a spanning tree $T \subseteq E$ of $G$, let $C_T(a)$ denote the fundamental cycle containing an edge $a \in E \setminus T$, and $K_T(b)$ denote the fundamental cut-set containing an edge $b \in T$.
Answer the following questions.

(i) Prove that every minimum spanning tree $T \subseteq E$ of $G$ satisfies the next condition (C).

> (C): For every edge $a \in E \setminus T$ each edge $b \in C_T(a)$ satisfies $w(a) \ge w(b)$.

(ii) Prove that any spanning tree $T$ satisfying condition (C) also satisfies the next condition (K).

> (K): For every edge $b \in T$, each edge $a \in K_T(b)$ satisfies $w(a) \ge w(b)$.

(iii) Prove that any spanning tree $T \subseteq E$ of $G$ satisfying condition (K) is a minimum spanning tree.

(iv) Prove or disprove the next proposition, giving a proof or a counterexample.

> "When $G$ has two minimum spanning trees, some two edges in $G$ have the same weight."


## **Kai**
### (i)
Assume that for an edge $a \in E \setminus T$ there exists an edge $b' \in C_T(a)$ such that $w(a) < w(b')$.

Let $T' = T \cup \{a\} \setminus \{b'\}$ be a tree constructed by substituting edge $b'$ with edge $a$. It is obviously that $T'$ is a spanning tree and

$$
w(T') = w(T) - w(b') + w(a) < w(T)
$$

which is contradictory to the fact that $T$ is a minimum spanning tree.

Therefore, for every edge $a \in E \setminus T$ each edge $b \in C_T(a)$ satisfies $w(a) \ge w(b)$.

### (ii)
Assume that for an edge $b \in T$, there exists an edge $a' \in K_T(b)$ such that $w(a') < w(b)$.

Let $T' = T \cup \{a'\} \setminus \{b\}$ be a tree constructed by substituting edge $b$ with edge $a'$.
By definition of fundamental cut-set we know that the removal of $b$ disconnects $T$ into exactly two components $T_1$ and $T_2$ and edge $a'$ connects the two components.
Thus $T'$ is a spanning tree and

$$
w(T') = w(T) - w(b) + w(a') < w(T)
$$

which is contradictory to the fact that $T$ is a minimum spanning tree.

Therefore, For every edge $b \in T$, each edge $a \in K_T(b)$ satisfies $w(a) \ge w(b)$.

### (iii)
Let $T$ denote a spanning tree of $G$ that satisfy condition (K). Let $T^*$ denote a minimum spanning tree of $G$.

Suppose that $T \neq T^*$. Then there exists an edge $b \in T \setminus T^*$.

Consider the fundamental cut-set $K_T(b)$, since $T^*$ is connected, there must exist an edge $a \in K_T(b) \cap T^*$ and $a \neq b$.

Let $T_1 = T^* \cup \{b\} \setminus \{a\}$, by condition (C) we have

$$
w(T_1) = w(T^*) - w(a) + w(b) \le w(T^*)
$$

and

$$
|T^* - T| > |T_1 - T|
$$

which means that, compared to $T^*$, $T_1$ is "closer" to $T$.

Continue the above process until we get a spanning tree $T_k = T, k > 0$, then we have

$$
w(T^*) \ge w(T_1) \ge \cdots \ge w(T_k) = w(T)
$$

that is, spanning tree $T$ is a minimum spanning tree.

### (iv)
Let $T_1$ and $T_2$ are two distinct minimum spanning trees of $G$, assume that edges' weights of $G$ are distinct.

Consider the edge $a$ of minimum weight among all the edges that are contained in exactly one of $T_1$ or $T_2$.
W.l.o.g we assume that $a \in T_1$.

Then, consider the fundamental cycle $C_{T_2}(a)$ of $T_2$, there exists an edge $b \in C_{T_2}(a)$ but $b \notin T_1$.
By assumption we know that $w(a) < w(b)$.

Note that $T = T_2 \cup \{a\} \setminus \{b\}$ is a spanning tree and we have

$$
w(T) = w(T_2) + w(a) - w(b) < w(T_2)
$$

which is contradictory to the fact that $T_2$ is a minimum spanning tree.

Therefore, when $G$ has two minimum spanning trees, some two edges in $G$ have the same weight.