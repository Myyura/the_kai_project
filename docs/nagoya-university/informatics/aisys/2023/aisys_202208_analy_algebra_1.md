---
sidebar_label: "2022年8月実施 解析・線形代数 [1]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Basis-and-Dimension
---
# 名古屋大学 情報学研究科 知能システム学専攻 2022年8月実施 解析・線形代数 [1]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列 $M = \begin{bmatrix} 8 & 1 & -6 \\ 1 & 8 & -6 \\ 3 & 3 & -3 \end{bmatrix}$ について、次の問いに答えよ.

(a) $M$ の固有値をすべて求めよ。また、各固有値に対応する単位固有ベクトルをそれぞれ求めよ.

(b) $M$ の異なる二つの単位固有ベクトルを基底とする平面を $P$ とする. $P$ の単位法線ベクトル $\vec{n}$ を求めよ。

(c) $\vec{n}$ を用いて $P$ の方程式を求めよ。

(d) $P$ 上の3点 $A(0,a, z_a), B(b, 0, z_b), C(0,0,z_c)$ を頂点とする三角形の面積を $a,b$ で表せ.

### 题目描述

给定矩阵

$$
M=
\begin{bmatrix}
8&1&-6\\
1&8&-6\\
3&3&-3
\end{bmatrix}.
$$

1. 求 $M$ 的全部特征值，并分别求每个特征值对应的单位特征向量；
2. 以 $M$ 的两个不同单位特征向量为一组基底张成平面 $P$，求 $P$ 的单位法向量 $\vec n$；
3. 用 $\vec n$ 写出平面 $P$ 的方程；
4. 平面 $P$ 上有三点

   $$
   A(0,a,z_a),\qquad B(b,0,z_b),\qquad C(0,0,z_c).
   $$

   以它们为顶点构成三角形，用 $a,b$ 表示该三角形的面积。

## **Kai**

(a) 特性多項式は

$$
\det(\lambda I-M)=(\lambda-7)(\lambda-3)^2
$$

である。各固有空間は

$$
\ker(M-7I)=\operatorname{span}\left\{
\begin{pmatrix}-1\\1\\0\end{pmatrix}\right\},
\qquad
\ker(M-3I)=\operatorname{span}\left\{
\begin{pmatrix}1\\1\\1\end{pmatrix}\right\}.
$$

したがって，単位固有ベクトルは例えば

$$
u_7=\frac1{\sqrt2}\begin{pmatrix}-1\\1\\0\end{pmatrix},
\qquad
u_3=\frac1{\sqrt3}\begin{pmatrix}1\\1\\1\end{pmatrix}
$$

である。

(b) $P=\operatorname{span}\{u_7,u_3\}$ であり，両ベクトルは直交する。
したがって単位法線ベクトルは，符号を除いて

$$
\boxed{
\vec n=\frac1{\sqrt6}
\begin{pmatrix}-1\\-1\\2\end{pmatrix}
}.
$$

(c) $P$ は原点を通るので，その方程式は

$$
\boxed{-x-y+2z=0}.
$$

(d) 平面の方程式から

$$
z_a=\frac a2,\qquad z_b=\frac b2,\qquad z_c=0.
$$

$C$ を基準にした辺ベクトルは

$$
\overrightarrow{CA}=\begin{pmatrix}0\\a\\a/2\end{pmatrix},
\qquad
\overrightarrow{CB}=\begin{pmatrix}b\\0\\b/2\end{pmatrix}.
$$

よって三角形の面積は

$$
\boxed{
\frac12\left\lVert\overrightarrow{CA}\times\overrightarrow{CB}\right\rVert
=\frac{\sqrt6}{4}|ab|
}.
$$
