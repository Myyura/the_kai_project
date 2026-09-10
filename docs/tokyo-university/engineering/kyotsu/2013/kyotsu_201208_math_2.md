---
sidebar_label: '2012年8月実施 数学 第2問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
---

# 東京大学 工学系研究科 2012年8月実施 数学 第2問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

実対称行列 $A=\begin{pmatrix}2&-1&0\\-1&3&-1\\0&-1&2\end{pmatrix}$ を考える。

I. すべての固有値と対応する固有ベクトルを求めよ。

II. 自然数 $n$ に対し $A^n$ を求めよ。

III. 実数 $\lambda$ が $\det(\lambda I-A)\ne0$ を満たすとする。
$\boldsymbol b=(3,-1,1)^T$ に対し $(\lambda I-A)\boldsymbol x=\boldsymbol b$ を解き、次式を示せ。

$$
\boldsymbol x^T\boldsymbol x=\frac3{(\lambda-1)^2}+\frac2{(\lambda-2)^2}+\frac6{(\lambda-4)^2}.
$$

#### 题目描述

设 $A=\begin{pmatrix}2&-1&0\\-1&3&-1\\0&-1&2\end{pmatrix}$。

I. 求全部特征值及对应特征向量。

II. 求 $A^n$，$n$ 为自然数。

III. 设实数 $\lambda$ 满足 $\det(\lambda I-A)\ne0$，$\boldsymbol b=(3,-1,1)^T$。
求 $(\lambda I-A)\boldsymbol x=\boldsymbol b$ 的解，并证明

$$
\boldsymbol x^T\boldsymbol x
=\frac3{(\lambda-1)^2}+\frac2{(\lambda-2)^2}+\frac6{(\lambda-4)^2}.
$$

## **Kai**

### I

$\det(\lambda I-A)=(\lambda-1)(\lambda-2)(\lambda-4)$。
対応する正規直交固有ベクトルは次のように取れる。

$$
\boxed{\lambda_1=1,\ \boldsymbol u_1=\frac1{\sqrt3}(1,1,1)^T;\quad
\lambda_2=2,\ \boldsymbol u_2=\frac1{\sqrt2}(1,0,-1)^T;\quad
\lambda_3=4,\ \boldsymbol u_3=\frac1{\sqrt6}(1,-2,1)^T}.
$$

各固有空間は対応するベクトルの定数倍全体である。

### II

スペクトル分解 $A^n=\sum_j\lambda_j^n\boldsymbol u_j\boldsymbol u_j^T$ より、

$$
\boxed{A^n=\frac13\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}
+\frac{2^n}2\begin{pmatrix}1&0&-1\\0&0&0\\-1&0&1\end{pmatrix}
+\frac{4^n}6\begin{pmatrix}1&-2&1\\-2&4&-2\\1&-2&1\end{pmatrix}}.
$$

### III

$\boldsymbol b\cdot\boldsymbol u_1=\sqrt3$、$\boldsymbol b\cdot\boldsymbol u_2=\sqrt2$、
$\boldsymbol b\cdot\boldsymbol u_3=\sqrt6$ なので、

$$
\boxed{\boldsymbol x=\frac{(1,1,1)^T}{\lambda-1}
+\frac{(1,0,-1)^T}{\lambda-2}
+\frac{(1,-2,1)^T}{\lambda-4}}.
$$

三つのベクトルは互いに直交し、ノルムの二乗はそれぞれ $3,2,6$ であるから、題意の等式を得る。
