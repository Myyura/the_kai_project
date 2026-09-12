---
sidebar_label: "2021年度 サンプル問題 1"
tags:
  - Tokyo-University
  - Mathematics.Vector-Calculus.Tangent-Plane
  - Mathematics.Vector-Calculus.Plane-and-Distance-in-Three-Dimensional-Euclidean-Space
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
---

# 東京大学 新領域創成科学研究科 複雑理工学専攻 2021年度 サンプル問題 1

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

以下の問に答えよ。定数、変数、関数はすべて実数とする。

### 問1

直交座標系を構成する $xyz$ 空間上の曲面 $z=ax^2+y^2+2xy-2x$ を考える。ただし $a\ne0$ とする。

(i) $(x,y,z)=(1,0,a-2)$ における接平面を $z=rx+py+s$ とする。$r,p,s$ を求めよ。

(ii) この接平面が $x$ 軸と交点を持つときの $a$ の条件を求めよ。

(iii) (ii) の条件を満たす接平面と原点との距離が $1/\sqrt5$ であるとき、$a$ を求めよ。

### 問2

次の行列とベクトルを考える。

$$
D=\begin{pmatrix}5&0&0\\0&2&0\\0&0&0\end{pmatrix},\quad
v=\begin{pmatrix}0\\3\\1\end{pmatrix},\quad
A_t=D+tvv^{\mathsf T},\quad x=\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}.
$$


$t>0$、$\mathsf T$ は転置を表す。

(i) $A_t$ のすべての要素の和を $t$ を用いて表せ。

(ii) $b_{ij}$ を $A_t^{-1}$ の第 $(i,j)$ 成分とする。$b_{11},b_{33}$ を求めよ。

(iii) $x$ を $t$ によらない定ベクトルとする。$\lim_{t\to\infty}x^{\mathsf T}A_t^{-1}x=0$ の必要十分条件を求めよ。

### 問3

$f(y)=y-y^2$ とする。

(i) $1/f(y)=A/y+B/(1-y)$（$y\ne0,1$）と部分分数分解したときの $A,B$ を求めよ。

(ii) 微分方程式 $dy/dx=f(y)$ の一般解を求めよ。任意定数として $C$ を用いること。

#### 题目描述

以下常数、变量、函数均为实数。

1. 考虑曲面 $z=ax^2+y^2+2xy-2x$，$a\ne0$。
   - 求点 $(1,0,a-2)$ 处切平面 $z=rx+py+s$ 的系数 $r,p,s$。
   - 求切平面与 $x$ 轴相交时 $a$ 的条件。
   - 在此条件下，切平面到原点的距离为 $1/\sqrt5$，求 $a$。
2. 设

$$
D=\operatorname{diag}(5,2,0),\quad v=(0,3,1)^{\mathsf T},\quad
A_t=D+tvv^{\mathsf T},\quad x=(x_1,x_2,x_3)^{\mathsf T},\quad t>0.
$$


$\mathsf T$ 表示转置。
   - 用 $t$ 表示 $A_t$ 全部元素之和。
   - 设 $b_{ij}=(A_t^{-1})_{ij}$，求 $b_{11},b_{33}$。
   - 对不依赖于 $t$ 的向量 $x$，求 $\lim_{t\to\infty}x^{\mathsf T}A_t^{-1}x=0$ 的充要条件。
3. 令 $f(y)=y-y^2$。
   - 求 $1/f(y)=A/y+B/(1-y)$（$y\ne0,1$）的系数。
   - 解 $dy/dx=f(y)$，用 $C$ 表示任意常数。

## **Kai**

### 問1

(i) $z_x=2ax+2y-2$、$z_y=2y+2x$ より、

$$
z-(a-2)=(2a-2)(x-1)+2y,\qquad
\boxed{r=2a-2,\ p=2,\ s=-a}.
$$


(ii) $y=z=0$ を代入すると $(2a-2)x=a$。$a\ne0$ に注意して、条件は $\boxed{a\ne1}$。

(iii) 距離公式より

$$
\frac{|a|}{\sqrt{(2a-2)^2+5}}=\frac1{\sqrt5}
\iff a^2+8a-9=(a-1)(a+9)=0.
$$


$a=1$ は (ii) に反するため、$\boxed{a=-9}$。

### 問2

$$
A_t=\begin{pmatrix}5&0&0\\0&2+9t&3t\\0&3t&t\end{pmatrix},\qquad
A_t^{-1}=\begin{pmatrix}1/5&0&0\\0&1/2&-3/2\\0&-3/2&9/2+1/t\end{pmatrix}.
$$


(i) 全要素の和は $\boxed{7+16t}$。

(ii) $\boxed{b_{11}=1/5,\quad b_{33}=9/2+1/t}$。

(iii)

$$
\lim_{t\to\infty}x^{\mathsf T}A_t^{-1}x
=\frac{x_1^2}{5}+\frac{(x_2-3x_3)^2}{2}.
$$


したがって必要十分条件は $\boxed{x_1=0,\ x_2=3x_3}$。

### 問3

(i) $1=A(1-y)+By$ より $\boxed{A=B=1}$。

(ii) 変数分離により $\log|y/(1-y)|=x+\text{定数}$。したがって

$$
\boxed{y(x)=\frac{Ce^x}{1+Ce^x}\quad(C\in\mathbb R),\qquad y(x)\equiv1.}
$$


分母が $0$ にならない区間で考える。$C=0$ は定数解 $y\equiv0$ を含む。
