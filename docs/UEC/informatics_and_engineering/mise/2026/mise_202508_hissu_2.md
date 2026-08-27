---
sidebar_label: 2025年8月実施 必須問題（数学）問2
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Systems-of-Linear-Equations
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
---
# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2025年8月実施 必須問題（数学）問2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

次の問いに答えよ。

1. 連立方程式
   $$
   \begin{cases}
   x+2y+3z=4,\\
   x+3y+6z=10,\\
   x+4y+9z=c
   \end{cases}
   $$
   が解をもつための $c$ と一般解を求めよ。
2. 行列
   $$
   A=\begin{pmatrix}3&-1&-2\\2&0&-4\\-1&1&4\end{pmatrix}
   $$
   を対角化せよ。
3. 点 $P$ を通り単位方向ベクトルが $e$ である直線と、点 $Q$ を通りその直線に垂直な平面との交点を求めよ。

### 题目描述

求带参数线性方程组的可解条件与通解；对给定三阶矩阵作对角化；并用向量表示直线与其垂直平面的交点。

## **Kai**

### (1)

拡大係数行列を行基本変形すると

$$
\left(\begin{array}{ccc|c}
1&2&3&4\\1&3&6&10\\1&4&9&c
\end{array}\right)
\sim
\left(\begin{array}{ccc|c}
1&0&-3&-8\\0&1&3&6\\0&0&0&c-16
\end{array}\right).
$$

したがって $c=16$ である。$z=t$ とおけば

$$
\boxed{(x,y,z)=(3t-8,-3t+6,t)\quad(t\in\mathbb R)}.
$$

### (2)

$$
\det(A-\lambda I)=(3-\lambda)(2-\lambda)^2
$$

より、固有値は $2,3$ である。対応する固有空間は

$$
E_2=\operatorname{span}\left\{
\begin{pmatrix}1\\1\\0\end{pmatrix},
\begin{pmatrix}2\\0\\1\end{pmatrix}
\right\},
\qquad
E_3=\operatorname{span}\left\{
\begin{pmatrix}-1\\-2\\1\end{pmatrix}
\right\}.
$$

よって

$$
P=\begin{pmatrix}1&2&-1\\1&0&-2\\0&1&1\end{pmatrix}
$$

とおけば $\det P\ne0$ であり、

$$
\boxed{P^{-1}AP=\begin{pmatrix}2&0&0\\0&2&0\\0&0&3\end{pmatrix}}.
$$

### (3)

交点を $R=P+te$ とおく。平面の法線ベクトルは $e$ なので

$$
(R-Q)\mathbin{\cdot}e=0.
$$

$e\mathbin{\cdot}e=1$ より $t=(Q-P)\mathbin{\cdot}e$ となる。したがって

$$
\boxed{R=P+\{(Q-P)\mathbin{\cdot}e\}e}.
$$
