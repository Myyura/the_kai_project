---
sidebar_label: "2019年2月実施 数学基礎 問題2"
tags:
  - Ochanomizu-University
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2019年2月実施 数学基礎 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### [1]

$$
A=\begin{pmatrix}
1&1&1&1\\
1&2&2&3\\
2&2&3&3
\end{pmatrix}
$$

について、次の問いに答えよ。

1. 核 $\operatorname{Ker}(A)=\{x\in\mathbb R^4\mid Ax=0\}$ を求めよ。
2. 像 $\operatorname{Im}(A)=\{y\in\mathbb R^3\mid\exists x\in\mathbb R^4,\ y=Ax\}$ を求めよ。

### [2]

$$
B=\begin{pmatrix}
3&0&-1\\
1&2&1\\
-1&0&3
\end{pmatrix}
$$

について、次の問いに答えよ。

1. $\det B$ を求めよ。
2. $B$ が正則か否かを判定し、正則ならば $B^{-1}$ を求めよ。
3. $B$ の固有値と固有ベクトルを求めよ。
4. $B$ が対角化できるか否かを判定し、できるならば適当な正則行列 $P$ を求めて対角化せよ。

### 题目描述

1. 求给定 $3\times4$ 矩阵 $A$ 的核与像。
2. 对给定方阵 $B$，求行列式和逆矩阵、特征值和特征向量，并判断它能否对角化。

## **Kai**

### [1]

行基本変形により、

$$
A\sim
\begin{pmatrix}
1&0&0&-1\\
0&1&0&1\\
0&0&1&1
\end{pmatrix}.
$$

したがって $Ax=0$ の解は

$$
x=t\begin{pmatrix}1\\-1\\-1\\1\end{pmatrix}\qquad(t\in\mathbb R)
$$

であり、

$$
\boxed{\operatorname{Ker}(A)
=\operatorname{span}\left\{\begin{pmatrix}1\\-1\\-1\\1\end{pmatrix}\right\}}.
$$

また、ピボット列は第 $1,2,3$ 列で、$\operatorname{rank}A=3$ である。よって

$$
\boxed{\operatorname{Im}(A)
=\operatorname{span}\left\{
\begin{pmatrix}1\\1\\2\end{pmatrix},
\begin{pmatrix}1\\2\\2\end{pmatrix},
\begin{pmatrix}1\\2\\3\end{pmatrix}
\right\}=\mathbb R^3}.
$$

### [2]

#### (1), (2)

余因子展開により

$$
\det B=16\ne0.
$$

したがって $B$ は正則であり、

$$
\boxed{
B^{-1}=\begin{pmatrix}
\frac38&0&\frac18\\
-\frac14&\frac12&-\frac14\\
\frac18&0&\frac38
\end{pmatrix}}
$$

である。

#### (3)

固有方程式は

$$
\det(\lambda I-B)=(\lambda-4)(\lambda-2)^2=0.
$$

$\lambda=2$ に対して

$$
\operatorname{Ker}(B-2I)
=\operatorname{span}\left\{\begin{pmatrix}0\\1\\0\end{pmatrix}\right\},
$$

$\lambda=4$ に対して

$$
\operatorname{Ker}(B-4I)
=\operatorname{span}\left\{\begin{pmatrix}-1\\0\\1\end{pmatrix}\right\}.
$$

したがって固有値は $2$（代数的重複度 $2$）と $4$（代数的重複度 $1$）であり、対応する固有ベクトルは上記各空間の零ベクトルでない元である。

#### (4)

$\lambda=2$ の固有空間は $1$ 次元である。したがって、一次独立な固有ベクトルは全部で $2$ 本しか得られず、

$$
\boxed{B\text{ は対角化できない。}}
$$
