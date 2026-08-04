---
sidebar_label: 2015年8月実施 グラフ理論
tags:
  - Kyoto-University
  - Operations-Research.Combinatorial-Optimization.Minimum-Spanning-Tree
---
# 京都大学 情報学研究科 数理工学専攻 2015年8月実施 グラフ理論

## **Author**
祭音Myyura

## **Description**
$G = (V, E)$ を節点集合 $V$，枝集合 $E$ から成る連結な単純無向グラフとし，各枝 $e \in E$ に実数値の重み $w(e)$ を与える．枝の部分集合 $F \subseteq E$ は，グラフ $(V, E - F)$ が非連結であり，この性質の下で極小であるとき $G$ のカットセットと呼ばれる．以下の (i)-(iv) の各命題について，真であれば証明を，偽であれば反例を与えよ．

(i) $K$ を $G$ の一つのカットセットとし，$a$ を $K$ の中で枝重みが最小である枝とする．このとき，$G$ の任意の最小木は枝 $a$ を含む．

(ii) $K$ を $G$ の一つのカットセットとし，$a$ を $K$ の中で枝重みが最小である枝とする．このとき，$G$ には枝 $a$ を含む最小木が存在する．

(iii) $K$ を $G$ の一つのカットセットとし，$b$ を $K$ の中で枝重みが最大である枝とする．このとき，$G$ には枝 $b$ を含まない最小木が存在する．

(iv) $C$ を $G$ の一つの閉路とし，$a$ を $C$ の中で枝重みが最小である枝とする．このとき，$G$ には枝 $a$ を含まぬ最小木が存在する．

### 题目描述

设 $G=(V,E)$ 为带实数边权 $w(e)$ 的连通简单无向图。若 $F\subseteq E$ 使 $(V,E-F)$ 不连通，且在这一性质下按包含关系极小，则称 $F$ 为 $G$ 的割集。对以下每个命题，若为真则证明，若为假则给出反例：

1. 设 $K$ 是一个割集，$a$ 是 $K$ 中权重最小的边，则 $G$ 的每一棵最小生成树都包含 $a$。
2. 设 $K$ 是一个割集，$a$ 是 $K$ 中权重最小的边，则 $G$ 至少存在一棵包含 $a$ 的最小生成树。
3. 设 $K$ 是一个割集，$b$ 是 $K$ 中权重最大的边，则 $G$ 至少存在一棵不包含 $b$ 的最小生成树。
4. 设 $C$ 是 $G$ 的一个回路，$a$ 是 $C$ 中权重最小的边，则 $G$ 至少存在一棵不包含 $a$ 的最小生成树。

## **Kai**
### (i)
Counterexample:

$$
V = \{A, B, C\}, E = \{AB, BC, AC\}
$$

$$
w(AB) = w(BC) = w(AC) = 1
$$

### (ii)
Let $T^*$ denote a minimum spanning tree of $G$ s.t. $a \notin T$. Since $K$ is a cut-set contains $a$, there exists an edge $b \in K \neq a$ s.t. $b$ is an edge of $T$, otherwise $T$ is not connected.

Let $T' = T - \{a\} + \{b\}$. Note that $a$ is an edge of $K$ of minimum weight, i.e.

$$
w(a) \leq w(b)
$$

which implies that $w(T') \leq w(T^*)$, i.e., $T'$ is also a minimum spanning tree and $a \in T'$.

Therefore, $G$ has a minimum spanning tree which contains edge $a$.

### (iii)
Counterexample:

$$
V = \{A, B\}, E = \{AB\}
$$

$$
w(AB) = 1
$$

### (iv)
Counterexample:

$$
V = \{A, B, C, D\}, E = \{AB, AC, BC, AD, BD, CD\}
$$

$$
w(AB) = w(AC) = w(AD) = 1, w(BC) = w(BD) = w(CD) = 2
$$

$$
C = \{BC, BD, CD\}
$$
