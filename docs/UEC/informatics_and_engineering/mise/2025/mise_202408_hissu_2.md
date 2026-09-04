---
sidebar_label: 2024年8月実施 必須問題（数学）問2
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Matrix-Rank
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2024年8月実施 必須問題（数学）問2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

1. 次の行列 $A$ の逆行列を求めよ。

$$
A=\begin{pmatrix}3&1&2\\5&1&3\\2&3&2\end{pmatrix}.
$$

2. 自然数 $k$ に対し、次の行列 $B$ の階数が $4$ 未満となる $k$ を求めよ。

$$
B=\begin{pmatrix}
1&0&3&0\\
3&1&k&0\\
-1&1&-2&1\\
1&-1&2&-2
\end{pmatrix}.
$$

3. 対称行列

$$
C=\begin{pmatrix}1&a&-1\\a&a&a\\-1&a&1\end{pmatrix}
$$

が固有値 $-2,2$ をもつとき、自然数 $a$、すべての固有ベクトルを求めよ。固有ベクトルの直交性を確かめ、正規化した固有ベクトルから直交行列を作れ。

### 题目描述

计算三阶矩阵的逆矩阵、使四阶矩阵降秩的自然数参数，并对带参数的实对称矩阵求参数、特征向量和正交对角化矩阵。

## **Kai**

### (1)

$\det A=1$ であり、掃き出し法より

$$
\boxed{
A^{-1}=\begin{pmatrix}
-7&4&1\\
-4&2&1\\
13&-7&-2
\end{pmatrix}}
$$

を得る。

### (2)

$$
\det B=k-10.
$$

したがって、$\operatorname{rank}B<4$ となるのは

$$
\boxed{k=10}
$$

である。

### (3)

任意の $a$ に対して $(1,0,-1)^T$ は固有値 $2$ の固有ベクトルである。また、残りの固有値は $2a,-a$ であるから、固有値 $-2$ をもつためには

$$
\boxed{a=2}
$$

でなければならない。このとき、固有値と対応する固有ベクトルは

$$
\begin{array}{c|c}
\lambda&\text{固有ベクトル}\\ \hline
-2&(1,-1,1)^T\\
2&(1,0,-1)^T\\
4&(1,2,1)^T
\end{array}
$$

であり、各固有空間の固有ベクトルは表のベクトルの非零定数倍である。表の異なる二つのベクトルの内積はすべて $0$ である。よって、例えば

$$
\boxed{
Q=\begin{pmatrix}
\frac1{\sqrt3}&\frac1{\sqrt2}&\frac1{\sqrt6}\\
-\frac1{\sqrt3}&0&\frac2{\sqrt6}\\
\frac1{\sqrt3}&-\frac1{\sqrt2}&\frac1{\sqrt6}
\end{pmatrix}}
$$

は直交行列であり、

$$
Q^TCQ=\operatorname{diag}(-2,2,4)
$$

となる。
