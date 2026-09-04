---
sidebar_label: 2021年8月実施 必須問題（数学）問2
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Systems-of-Linear-Equations
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2021年8月実施 必須問題（数学）問2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$$
P=\begin{pmatrix}0&2a^2&3a^3\\0&0&2a^2\\0&0&0\end{pmatrix},
\qquad
Q=\begin{pmatrix}a&2a^2&3a^3\\0&a&2a^2\\0&0&a\end{pmatrix}
$$

について $P^n,Q^n$ $(n\ge3)$ を求めよ。さらに、連立一次方程式

$$
\begin{cases}
x-2y+z=0,\\
-4x+ay-6z=1,\\
x-3y+3z=b
\end{cases}
$$

が無数の解をもつ条件を求め、対称行列

$$
A=\begin{pmatrix}1&0&-1\\0&1&-1\\-1&-1&0\end{pmatrix}
$$

について、$P^{\mathsf T}AP=\operatorname{diag}(a,b,c)$、$a>b>c$ を満たす $a,b,c$ と直交行列 $P$ を求めよ。

### 题目描述

求两个上三角矩阵的高次幂、线性方程组有无穷多解时的参数，并将给定实对称矩阵正交对角化。

## **Kai**

### (1)

$P^3=O$ より、

$$
\boxed{P^n=O\qquad(n\ge3)}.
$$

$Q=aE+P$ かつ $P^3=O$ なので、二項定理より

$$
Q^n=a^nE+na^{n-1}P+\binom n2a^{n-2}P^2.
$$

したがって、

$$
\boxed{
Q^n=
\begin{pmatrix}
a^n&2na^{n+1}&n(2n+1)a^{n+2}\\
0&a^n&2na^{n+1}\\
0&0&a^n
\end{pmatrix}}.
$$

### (2)

第 2 式に第 1 式の $4$ 倍を加え、第 3 式から第 1 式を引くと、

$$
\begin{cases}
(a-8)y-2z=1,\\
-y+2z=b.
\end{cases}
$$

無数の解をもつには左辺が互いに反対で、右辺も反対でなければならない。よって、

$$
\boxed{a=9,\qquad b=-1}.
$$

### (3)

$A$ の固有値は $2,1,-1$ であり、対応する固有ベクトルとして

$$
\begin{array}{c|c}
\lambda&\text{固有ベクトル}\\ \hline
2&(1,1,-1)^{\mathsf T}\\
1&(1,-1,0)^{\mathsf T}\\
-1&(1,1,2)^{\mathsf T}
\end{array}
$$

を取れる。したがって $a>b>c$ は

$$
\boxed{a=2,\qquad b=1,\qquad c=-1}
$$

である。また、

$$
P=
\begin{pmatrix}
\frac1{\sqrt3}&\frac1{\sqrt2}&\frac1{\sqrt6}\\
\frac1{\sqrt3}&-\frac1{\sqrt2}&\frac1{\sqrt6}\\
-\frac1{\sqrt3}&0&\frac2{\sqrt6}
\end{pmatrix}
$$

とおけば、

$$
\boxed{P^{\mathsf T}AP=\operatorname{diag}(2,1,-1)}.
$$
