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

### 原題に基づく要約（日本語）

[公式原題](https://www.mech.tohoku.ac.jp/wp/wp-content/themes/tumech/img/examination/past-collection/Problem_2022_j.pdf)

$$\boldsymbol A=(x+yz,\ x+x^2+y^2+zx,\ z+xy),\qquad V:\ 0\le z\le1-x^2,\ 0\le y\le1.$$

1. $\nabla\times\boldsymbol A$ と $\nabla\cdot\boldsymbol A$ を計算する。
2. $V$ の全表面 $S$ を外向きに取り、$\int_S\boldsymbol A\cdot\boldsymbol n\,dS$ を求める。
3. 上面 $S':z=1-x^2$ の境界 $C$ に沿う $\oint_C\boldsymbol A\cdot d\boldsymbol r$ を求める。$C$ の向きは $S'$ の上向き法線に対応する向きとする。

### 题目描述

给定向量场和区域

$$\boldsymbol A=(x+yz,\ x+x^2+y^2+zx,\ z+xy),\qquad V:\ 0\le z\le1-x^2,\ 0\le y\le1.$$

1. 求 $\nabla\times\boldsymbol A$ 与 $\nabla\cdot\boldsymbol A$。
2. 取 $V$ 的整个边界 $S$ 的外法向，求通量 $\int_S\boldsymbol A\cdot\boldsymbol n\,dS$。
3. 上表面 $S':z=1-x^2$ 的边界记为 $C$。按与 $S'$ 向上法向对应的正向，求环流 $\oint_C\boldsymbol A\cdot d\boldsymbol r$。

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

$$\boldsymbol r_x\times\boldsymbol r_y=(2x,0,1).$$

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
