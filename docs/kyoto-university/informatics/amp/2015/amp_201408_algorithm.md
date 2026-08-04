---
sidebar_label: 2014年8月実施 アルゴリズム基礎
tags:
  - Kyoto-University
  - Operations-Research.Combinatorial-Optimization.Shortest-Path-Problem
---
# 京都大学 情報学研究科 数理工学専攻 2014年8月実施 アルゴリズム基礎

## **Author**
祭音Myyura

## **Description**
$G = (V, E)$ を節点集合 $V$、枝集合 $E$ から成る連結な単純無向グラフとし、節点 $u$ の隣接の集合を $N(u)$ と書く。
$G$ の部分グラフ $H$ における節点 $u$ から節点 $v$ への最短路内の枝数を $\text{dist}_H(u,v)$ と書き、$H$ における節点 $u$ から節点 $v$ への最短路の総数を $\sigma_H (u,v)$ と書く。
始点 $s \in V$ を選び、$T$ を $s$ からの幅優先探索により得られた $G$ の全域木とする。
以下の問いに答えよ。

(i) $T$ を用いて、$d_{\max} = \max \{\text{dist}_G(s,u) \mid u \in V\}$ および $V_i = \{u \in V \mid \text{dist}_G(s, u)=i\}$, $i=0,1,\ldots, d_{\max}$ を $O(|V|)$ 時間で計算する方法を示せ。

(ii) $\{\sigma_G(s, u) \mid u \in V\}$ 内のすべての値を $O(|E|)$ 時間で計算する方法を示せ。

(iii) ある節点 $t \in V - \{s\}$ と節点の部分集合 $A \subseteq V - \{s,t\}$ に対して、$G$ における $s$ から $t$ への最短路のうち、$A$ の節点を１個は通過するものの個数を $O(|E|)$ 時間で計算する方法を示せ。

(iv) ある節点 $t \in V - \{s\}$ と節点の部分集合 $A \subseteq V - \{s,t\}$ に対して、$G$ における $s$ から $t$ への最短路のうち、$A$ の節点を少なくとも２個通過するものが存在するかどうかの判定を $O(|E|)$ 時間で計算する方法を示せ。

### 题目描述

设 $G=(V,E)$ 为由顶点集 $V$ 和边集 $E$ 构成的连通简单无向图，$N(u)$ 表示顶点 $u$ 的邻接点集合。对 $G$ 的子图 $H$，以 $\operatorname{dist}_H(u,v)$ 表示 $H$ 中从 $u$ 到 $v$ 的最短路边数，以 $\sigma_H(u,v)$ 表示这类最短路的总条数。选定起点 $s\in V$，令 $T$ 为从 $s$ 进行广度优先搜索得到的 $G$ 的生成树。回答：

1. 利用 $T$，在 $O(|V|)$ 时间内计算
   $$
   d_{\max}=\max\{\operatorname{dist}_G(s,u)\mid u\in V\}
   $$
   以及每一层
   $$
   V_i=\{u\in V\mid\operatorname{dist}_G(s,u)=i\},
   \quad i=0,1,\ldots,d_{\max}.
   $$
2. 给出在 $O(|E|)$ 时间内计算所有 $\{\sigma_G(s,u)\mid u\in V\}$ 的方法。
3. 对给定的 $t\in V\setminus\{s\}$ 和 $A\subseteq V\setminus\{s,t\}$，在 $O(|E|)$ 时间内计算从 $s$ 到 $t$ 且至少经过一个 $A$ 中顶点的最短路条数。
4. 对同样的 $t,A$，在 $O(|E|)$ 时间内判定是否存在从 $s$ 到 $t$ 且至少经过两个 $A$ 中顶点的最短路。

## **Kai**
Almost the same as [京都大学 情報学研究科 数理工学専攻 2024年8月実施 グラフ理論](../2025/amp_202408_graph_theory.md), please check it.
