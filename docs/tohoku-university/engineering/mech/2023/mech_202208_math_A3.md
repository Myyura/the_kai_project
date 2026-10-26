---
sidebar_label: "2022年8月実施 数学A 3"
tags:
  - Tohoku-University
  - Mathematics.Vector-Calculus.Gradient-Divergence-and-Curl
  - Mathematics.Vector-Calculus.Divergence-Theorem
  - Mathematics.Vector-Calculus.Stokes-Theorem
  - Mathematics.Vector-Calculus.Surface-Integral
---
# 東北大学 工学研究科 機械系 2022年8月実施 数学A 3

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

デカルト座標系 $(x,y,z)$ において，ベクトル場 $\boldsymbol A$ が

$$
\boldsymbol A=(x+yz)\boldsymbol i+(x+x^2+y^2+xz)\boldsymbol j+(z+xy)\boldsymbol k
$$

により与えられる．ただし，$x,y,z$ 方向の基本ベクトルをそれぞれ $\boldsymbol i,\boldsymbol j,\boldsymbol k$ とする．また，領域 $V$ が

$$
V:\quad 0\le z\le 1-x^2,\quad 0\le y\le1
$$

により与えられる．以下の問いに答えよ．

(1) $\nabla\times\boldsymbol A$ および $\nabla\cdot\boldsymbol A$ を求めよ．

(2) $V$ の表面を $S$ とするとき，次の面積分を求めよ．ただし，$\boldsymbol n$ は $S$ の外向き単位法線ベクトルである．

$$
\int_S\boldsymbol A\cdot\boldsymbol n\,dS
$$

(3) $V$ の表面の一部 $S'$ が

$$
S':\quad z=1-x^2,\quad0\le y\le1,\quad z\ge0
$$

により与えられる．次の線積分を求めよ．ただし，$\partial S'$ は $S'$ の境界，$\boldsymbol r$ は $\partial S'$ の位置ベクトルであり，線積分の向きは $+z$ 方向に進む右ねじの回転方向とする．

$$
\int_{\partial S'}\boldsymbol A\cdot d\boldsymbol r
$$

### 题目描述

在笛卡尔坐标系 $(x,y,z)$ 中，向量场为

$$
\boldsymbol A=(x+yz)\boldsymbol i+(x+x^2+y^2+xz)\boldsymbol j+(z+xy)\boldsymbol k,
$$

其中 $\boldsymbol i,\boldsymbol j,\boldsymbol k$ 分别为 $x,y,z$ 方向的基向量。区域 $V$ 由

$$
V:\quad0\le z\le1-x^2,\quad0\le y\le1
$$

给出。回答下列问题。

**(1)** 求 $\nabla\times\boldsymbol A$ 和 $\nabla\cdot\boldsymbol A$。

**(2)** 将 $V$ 的表面记作 $S$，求面积分

$$
\int_S\boldsymbol A\cdot\boldsymbol n\,dS,
$$

其中 $\boldsymbol n$ 为 $S$ 的外向单位法向量。

**(3)** $V$ 的部分表面 $S'$ 由

$$
S':\quad z=1-x^2,\quad0\le y\le1,\quad z\ge0
$$

给出。求线积分

$$
\int_{\partial S'}\boldsymbol A\cdot d\boldsymbol r.
$$

其中 $\partial S'$ 是 $S'$ 的边界，$\boldsymbol r$ 是 $\partial S'$ 的位置向量；积分方向为向 $+z$ 方向前进的右旋螺钉的旋转方向。

## **Kai**
### (1)

$$
\begin{aligned}
\boldsymbol{\nabla} \times \boldsymbol{A}
&= (1+2x) \boldsymbol{k}
,\\
\boldsymbol{\nabla} \cdot \boldsymbol{A}
&= 2y+2
\end{aligned}
$$

### (2)
ガウスの発散定理より、

$$
\begin{aligned}
\int_S \boldsymbol{A} \cdot \boldsymbol{n} dS
&= \int_V \boldsymbol{\nabla} \cdot \boldsymbol{A} dV
\\
&= \int_{-1}^1 dx \int_0^{1-x^2} dz \int_0^1 dy \ (2y+2)
\\
&= \int_{-1}^1 dx \left( 1-x^2 \right) \left[ y^2 + 2y \right]_{y=0}^{y=1}
\\
&= 6 \int_0^1 dx \left( 1-x^2 \right)
\\
&= 6 \left[ x - \frac{x^3}{3} \right]_{x=0}^{x=1}
\\
&= 4
\end{aligned}
$$

である。

### (3)
表面を $\boldsymbol r=(x,y,1-x^2)$ と置くと、上向きの面素ベクトルは

$$
\boldsymbol r_x\times\boldsymbol r_y=(2x,0,1).
$$

Stokes の定理より

$$
\begin{aligned}
\oint_{\partial S'}\boldsymbol A\cdot d\boldsymbol r
&=\iint_{S'}(\nabla\times\boldsymbol A)\cdot\boldsymbol n\,dS\\
&=\int_{-1}^1\int_0^1(0,0,1+2x)\cdot(2x,0,1)\,dy\,dx\\
&=\int_{-1}^1(1+2x)\,dx=\boxed{2}.
\end{aligned}
$$

原解の $8/3$ は $\boldsymbol A$ 自身の上面を通る通量であり、設問の線積分ではない。また、旋度には $A_y$ 中の $x$ を微分した定数項 $1$ が必要である。

## **Reference**

- [東北大学 機械系 2022年度実施試験（数学A）](https://www.mech.tohoku.ac.jp/wp/wp-content/themes/tumech/img/examination/past-collection/Problem_2022_j.pdf)
