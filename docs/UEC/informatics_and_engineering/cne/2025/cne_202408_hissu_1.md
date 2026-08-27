---
sidebar_label: 2024年8月実施 必須問題 線形代数
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Linear-Transformation
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Matrix-Rank
  - Mathematics.Linear-Algebra.Subspace-Sum-and-Intersection-Dimension
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2024年8月実施 必須問題 線形代数

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$c\in\mathbb R$ とし、

$$
A=\begin{pmatrix}
3&-5&2\\
7&-12&3\\
1&-2&-1
\end{pmatrix},
\qquad
B=\begin{pmatrix}
-2&3&1\\
0&3+c&9-c^2\\
-2&3&-8+c^2
\end{pmatrix}
$$

とする。$f(x)=Ax$, $g(x)=Bx$ に対し、$A$ の列の一次関係、$\dim\operatorname{Im}f$、$\dim\ker g\ne0$ となる $c$、および $\operatorname{Im}f\cap\ker g$ が非自明となる条件とその基底を求めよ。

### 题目描述

给定两个含参数矩阵所定义的线性映射，求矩阵列之间的线性关系、像空间维数、核非平凡的参数条件，以及像空间与核的非平凡交空间及其基。

## **Kai**

### (1)

$A$ の第 $i$ 列を $a_i$ とすると、

$$
\boxed{a_3=9a_1+5a_2}.
$$

### (2)

$a_1,a_2$ は一次独立であり、(1) より $a_3\in\operatorname{span}\{a_1,a_2\}$ である。したがって、

$$
\boxed{\dim\operatorname{Im}f=2}.
$$

また、

$$
\operatorname{Im}f
=\left\{(x,y,z)^{\mathsf T}\in\mathbb R^3
\mid -2x+y-z=0\right\}.
$$

### (3)

$$
\det B=-2(c+3)^2(c-3).
$$

よって $\ker g$ が非自明となる条件は

$$
\boxed{c=-3,\ 3}.
$$

### (4)

$c=3$ のとき、

$$
\ker g=\operatorname{span}\left\{
\begin{pmatrix}1\\0\\2\end{pmatrix}\right\}.
$$

このベクトルは $-2x+y-z=0$ を満たさないので、交わりは $\{0\}$ である。

$c=-3$ のとき、

$$
\ker g
=\left\{(x,y,z)^{\mathsf T}\mid-2x+3y+z=0\right\}.
$$

これと $\operatorname{Im}f$ の方程式を連立すると

$$
(x,y,z)=t(1,1,-1).
$$

したがって、

$$
\boxed{\dim(\operatorname{Im}f\cap\ker g)\ne0
\iff c=-3}.
$$

### (5)

$c=-3$ のとき、

$$
\boxed{
\left\{
\begin{pmatrix}1\\1\\-1\end{pmatrix}
\right\}
}
$$

が $\operatorname{Im}f\cap\ker g$ の基底である。
