---
sidebar_label: "2023年8月実施 共通問題 [2]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Open-and-Closed-Sets
  - Mathematics.Topology.Compactness-and-Connectedness
  - Mathematics.Topology.Continuity-and-Homeomorphisms
---

# 東北大学 理学研究科 数学専攻 2023年8月実施 共通問題 \[2\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#74213e40-dbdf-40d6-99e0-8736820e550c) refined with GPT 6 Astra)

## **Description**

$(\mathbb R,\mathcal O)$ を $\mathbb R$ 上の通常のユークリッド距離から定まる位相 $\mathcal O$ をもつ位相空間とする。また $X=\{x\in\mathbb R\mid x\notin\mathbb Q,\ x^2\le2\}$ とし、$\mathcal O_X$ を $\mathcal O$ から定まる $X$ 上の相対位相とする。以下の問いに答えよ。

(1) $X$ の部分集合 $U=\{x\in X\mid0<x<1\}$ は位相空間 $(X,\mathcal O_X)$ の開集合かつ閉集合であることを示せ。

(2) 位相空間 $(X,\mathcal O_X)$ の空でない連結な部分集合は一点からなる集合であることを示せ。

(3) 任意の連続写像 $h:(\mathbb R,\mathcal O)\to(X,\mathcal O_X)$ は定値写像であることを示せ。

(4) 位相空間 $(X,\mathcal O_X)$ はコンパクトであるか、理由とともに答えよ。

### 题目描述

设 $(\mathbb R,\mathcal O)$ 为由 $\mathbb R$ 上通常的欧几里得距离确定的拓扑空间。令

$$
X=\{x\in\mathbb R\mid x\notin\mathbb Q,\ x^2\le2\},
$$

并令 $\mathcal O_X$ 为由 $\mathcal O$ 诱导的 $X$ 上的相对拓扑。回答下列问题。

(1) 证明 $U=\{x\in X\mid0<x<1\}$ 在 $(X,\mathcal O_X)$ 中既是开集又是闭集。

(2) 证明 $(X,\mathcal O_X)$ 的任意非空连通子集都只包含一个点。

(3) 证明任意连续映射 $h:(\mathbb R,\mathcal O)\to(X,\mathcal O_X)$ 都是常值映射。

(4) 判断 $(X,\mathcal O_X)$ 是否紧致，并说明理由。

## **Kai**

### (1)

$U=X\cap(0,1)$ であるから $X$ の開集合である。また $0,1\notin X$ より

$$
X\setminus U=X\cap\bigl(({-\infty},0)\cup(1,\infty)\bigr)
$$

も開集合である。したがって $U$ は開かつ閉である。

### (2)

連結部分集合 $C\subset X$ が異なる二点 $a<b$ を含むと仮定する。有理数の稠密性から $a<r<b$ となる $r\in\mathbb Q$ を取れる。$r\notin X$ なので

$$
C=\bigl(C\cap(-\infty,r)\bigr)\cup\bigl(C\cap(r,\infty)\bigr).
$$

右辺の二集合は、$C$ の相対位相において開で、互いに交わらず、それぞれ $a,b$ を含むので非空である。これは $C$ の連結性に反する。よって非空な連結部分集合は一点からなる。

### (3)

$\mathbb R$ は連結であり、連続像 $h(\mathbb R)$ も非空かつ連結である。(2) より $h(\mathbb R)$ は一点からなる。したがって $h$ は定値写像である。

### (4)

コンパクトではない。$x_n=\sqrt2/n$ とおくと、全ての $n\ge1$ について $x_n\in X$ であり、通常の実数直線で $x_n\to0$ となる。しかし $0\notin X$ なので $X$ は $\mathbb R$ の閉集合ではない。包含写像 $X\hookrightarrow\mathbb R$ は連続であり、ハウスドルフ空間 $\mathbb R$ のコンパクト部分集合は閉集合であるから、$X$ はコンパクトではない。

## **Reference**

- [東北大学公式問題（2024年度・共通問題、PDF 2ページ）](https://www.math.tohoku.ac.jp/exam/questions/2024_R6_kyotsu.pdf#page=2)
- [L^2：2024年度の解答](https://note.com/normalmath/n/n89152917de11#74213e40-dbdf-40d6-99e0-8736820e550c)
