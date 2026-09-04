---
sidebar_label: 2023年8月実施 必須問題（数学）問2
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2023年8月実施 必須問題（数学）問2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

行列

$$
A=\begin{pmatrix}9&5\\2&1\end{pmatrix},\qquad
B=\begin{pmatrix}1&-8&0\\3&-7&1\\2&2&1\end{pmatrix}
$$

の逆行列、および行列

$$
C=\begin{pmatrix}13&13&5\\-5&-5&-2\\-2&-2&-1\end{pmatrix}
$$

が定める線形写像の核と像の基底・次元を求めよ。また、$3$ 次の対称行列 $D$ の対角成分が $3$、非対角成分が $a$ であり、固有値 $1$（重解）、$7$ をもつとき、$a$ と固有ベクトルを求め、$D$ を対角化せよ。

### 题目描述

求两个矩阵的逆矩阵、给定线性映射的核与像，并由特征值确定参数后将实对称矩阵正交对角化。

## **Kai**

### (1)

直接計算して、

$$
\boxed{
A^{-1}=\begin{pmatrix}-1&5\\2&-9\end{pmatrix}},
\qquad
\boxed{
B^{-1}=
\begin{pmatrix}
9&-8&8\\
1&-1&1\\
-20&18&-17
\end{pmatrix}}.
$$

### (2)

行基本変形により、

$$
C\sim
\begin{pmatrix}
1&1&0\\
0&0&1\\
0&0&0
\end{pmatrix}.
$$

したがって、

$$
\boxed{\ker C=\operatorname{span}
\left\{\begin{pmatrix}1\\-1\\0\end{pmatrix}\right\},
\quad \dim\ker C=1}
$$

である。また、元の行列の第 1、第 3 列を取れば、

$$
\boxed{\operatorname{Im}C=\operatorname{span}
\left\{
\begin{pmatrix}13\\-5\\-2\end{pmatrix},
\begin{pmatrix}5\\-2\\-1\end{pmatrix}
\right\},
\quad \dim\operatorname{Im}C=2}.
$$

### (3)

$D$ の固有値は

$$
3-a\quad(\text{重複度 }2),\qquad 3+2a
$$

である。よって、

$$
\boxed{a=2}.
$$

$\lambda=1$ の固有空間は $x+y+z=0$、$\lambda=7$ の固有空間は
$\operatorname{span}\{(1,1,1)^{\mathsf T}\}$ である。例えば、

$$
P=
\begin{pmatrix}
\frac1{\sqrt2}&\frac1{\sqrt6}&\frac1{\sqrt3}\\
-\frac1{\sqrt2}&\frac1{\sqrt6}&\frac1{\sqrt3}\\
0&-\frac2{\sqrt6}&\frac1{\sqrt3}
\end{pmatrix}
$$

とおけば $P$ は直交行列であり、

$$
\boxed{P^{-1}DP=P^{\mathsf T}DP
=\operatorname{diag}(1,1,7)}
$$

となる。
