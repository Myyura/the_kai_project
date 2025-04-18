---
sidebar_label: "2014年8月実施 アルゴリズム基礎"
tags:
  - Kyoto-University
  - Graph-Theory
  - Shortest-Path-Problem
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

## **Kai**
Almost the same as [京都大学 情報学研究科 数理工学専攻 2024年8月実施 グラフ理論](../2024/amp_202408_graph_theory.md), please check it.