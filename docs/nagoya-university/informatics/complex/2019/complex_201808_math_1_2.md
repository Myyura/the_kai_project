---
sidebar_label: "2018年8月実施 数1 [2]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Linear-Transformation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2018年8月実施 数1 [2]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

3次元ベクトル空間から2次元ベクトル空間への写像

$$
p: \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} \rightarrow \begin{pmatrix} x_1 + x_2 + x_3 \\ x_1 + 2x_2 - x_3 \end{pmatrix}
$$

について,次の小問に答えよ。

1) $p$ が線形写像であることを示せ。

2) $p = 0$ を満たす3次元ベクトル全体の集合 $V$ を求めよ。

3) $V$ のすべての要素と直交し, $\begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ を通る平面の方程式を示せ。

4) この平面と原点 $\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$ との距離を求めよ。

### 题目描述

给定从三维向量空间到二维向量空间的映射

$$
p:
\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
\longmapsto
\begin{pmatrix}
x_1+x_2+x_3\\
x_1+2x_2-x_3
\end{pmatrix}.
$$

1. 证明 $p$ 是线性映射；
2. 求所有满足 $p(\boldsymbol x)=\boldsymbol0$ 的三维向量组成的集合 $V$；
3. 求一个与 $V$ 中所有向量正交、且经过点

   $$
   \begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
   =
   \begin{pmatrix}1\\2\\3\end{pmatrix}
   $$

   的平面方程；
4. 求该平面到原点

   $$
   \begin{pmatrix}0\\0\\0\end{pmatrix}
   $$

   的距离。

## **Kai**

### 1. 线性性

令

$$
M=
\begin{pmatrix}
1&1&1\\
1&2&-1
\end{pmatrix}.
$$

则 $p(x)=Mx$ 。对任意向量 $x,y$ 和标量 $c$ ，

$$
p(x+y)=M(x+y)=p(x)+p(y),
$$

$$
p(cx)=M(cx)=cp(x).
$$

因此 $p$ 是线性映射。

### 2. 核空间 $V$

$p(x)=0$ 等价于

$$
\begin{cases}
x_1+x_2+x_3=0,\\
x_1+2x_2-x_3=0.
\end{cases}
$$

第二式减第一式得 $x_2=2x_3$ ，再代回得 $x_1=-3x_3$ 。令 $x_3=t$ ，则

$$
\boxed{
V=
\left\{
t\begin{pmatrix}-3\\2\\1\end{pmatrix}
\mathrel{}\middle|\mathrel{}
t\in\mathbb R
\right\}.
}
$$

### 3. 所求平面

$V$ 由向量 $n=(-3,2,1)^T$ 张成。一个平面与 $V$ 的所有向量正交，等价于 $n$ 是该平面的法向量。又因平面经过 $(1,2,3)$ ，其方程为

$$
-3(x_1-1)+2(x_2-2)+(x_3-3)=0.
$$

化简得

$$
\boxed{-3x_1+2x_2+x_3-4=0}.
$$

### 4. 原点到平面的距离

点到平面的距离公式给出

$$
d=
\frac{|-4|}
{\sqrt{(-3)^2+2^2+1^2}}
=\boxed{\frac4{\sqrt{14}}}.
$$
