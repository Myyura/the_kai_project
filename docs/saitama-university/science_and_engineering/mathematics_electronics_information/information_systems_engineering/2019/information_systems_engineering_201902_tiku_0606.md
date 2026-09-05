---
sidebar_label: "2019年2月実施 線形代数"
tags:
  - Saitama-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2019年2月実施 線形代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

1. 以下の問に答えよ. [Solve the following problems.]

(a) 次の行列Aについて考える. [Consider the following matrix A.]

$$
A = \begin{pmatrix} -5 & 6 \\ -4 & 5 \end{pmatrix}
$$

(1) Aのすべての固有値と対応する固有ベクトルを求めよ. [Obtain all eigenvalues and corresponding eigenvectors of A.]

(2) $P^{-1}AP$ が対角行列となるような非特異行列Pを求めよ。ただし、 $P^{-1}$ はPの逆行列を表す. [Obtain a non-singular matrix P so that $P^{-1}AP$ is diagonal, where $P^{-1}$ denotes the inverse matrix of P.]

(3) 整数 $n(n \geq 1)$ に対し、 $A^{2n}$ を求めよ. [Obtain $A^{2n}$ for an integer $n(n \geq 1)$ .]

(b) 要素 $b_{ij} (i = 1,2,\dots, m, j = 1,2,\dots,m)$ が次のように与えられる $m \times m$ 行列Bについて考える.ただし, $0<c<1$ とする. [Consider the $m \times m$ matrix B which components $b_{ij} (i = 1,2,..., m, j = 1,2,\dots, m)$ are given as follows, where $0 < c < 1$ .]

$$
b_{ij} = \begin{cases} 1 & (i = j) \\ c & (i \neq j) \end{cases}
$$

(1) Bの行列式を求めよ. [Obtain the determinant of B.]

(2) Bのすべての固有値と対応する固有ベクトルを求めよ. [Obtain all eigenvalues and corresponding eigenvectors of B.]

### 题目描述

1. 回答下列问题。

(a) 考虑矩阵

$$
A=\begin{pmatrix}-5&6\\-4&5\end{pmatrix}.
$$

(1) 求 $A$ 的全部特征值及对应的特征向量。

(2) 求一个非奇异矩阵 $P$，使

$$
P^{-1}AP
$$

为对角矩阵，其中 $P^{-1}$ 表示 $P$ 的逆矩阵。

(3) 对满足 $n\geq1$ 的整数 $n$，求 $A^{2n}$。

(b) 考虑 $m\times m$ 矩阵 $B=(b_{ij})$，其中

$$
i=1,2,\dots,m,\qquad j=1,2,\dots,m,
$$

且在 $0<c<1$ 的条件下定义

$$
b_{ij}=
\begin{cases}
1,&i=j,\\
c,&i\neq j.
\end{cases}
$$

(1) 求 $B$ 的行列式。

(2) 求 $B$ 的全部特征值及对应的特征向量。

## **Kai**

(a)(1) 固有方程式は $|A - \lambda I| = 0$ より

$$
\begin{vmatrix} -5-\lambda & 6 \\ -4 & 5-\lambda \end{vmatrix} = (-5-\lambda)(5-\lambda) - (6)(-4) = \lambda^2 -1 = 0
$$

よって、固有値は $\lambda = \pm 1$ 。

$\lambda = 1$ のとき、 $(A - I)v = 0$ より

$$
\begin{pmatrix} -6 & 6 \\ -4 & 4 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

$-6x + 6y = 0$ より、 $x = y$ 。よって、固有ベクトルは $v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ の非零定数倍。

$\lambda = -1$ のとき、 $(A + I)v = 0$ より

$$
\begin{pmatrix} -4 & 6 \\ -4 & 6 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

$-4x + 6y = 0$ より、 $2x = 3y$ 。よって、固有ベクトルは $v_2 = \begin{pmatrix} 3 \\ 2 \end{pmatrix}$ の非零定数倍。

(a)(2) $P^{-1}AP = D$ となるPは、固有ベクトルを並べた行列。

$$
P = \begin{pmatrix} 1 & 3 \\ 1 & 2 \end{pmatrix}
$$

$$
P^{-1} = \frac{1}{(1)(2) - (3)(1)}\begin{pmatrix} 2 & -3 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 3 \\ 1 & -1 \end{pmatrix}
$$

(a)(3) $A = PDP^{-1}$ より、 $A^{2n} = PD^{2n}P^{-1}$ 。ここで、 $D = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ より、 $D^{2n} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$ 。

$$
A^{2n} = P I P^{-1} = PP^{-1} = I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
$$

(b)(1) Bの行列式を求める。
Bは、 $b_{ij} = c$ (for $i \neq j$ ) および $b_{ii} = 1$ という成分を持つ行列です。これは、各成分がcである行列から対角成分を(c-1)減算した行列と言えます。つまり、 $B = c J + (1-c)I$ 。ここでJは全ての成分が1のm x m行列、Iはm x m単位行列。
この行列の行列式は、 $\det(B) = (1+(m-1)c)(1-c)^{m-1}$ 。

(b)(2) $m=1$ では $B=(1)$ であり、固有値は $1$ のみである。以下 $m\geq2$ とする。
固有値は $\lambda_1 = 1 + (m-1)c$ (重複度1) と $\lambda_2 = 1-c$ (重複度 m-1)。
固有ベクトルは、 $\lambda_1$ に対応する固有ベクトルは、全ての成分が等しいベクトル、 $v_1 = (1, 1, ..., 1)^T$ 。
$\lambda_2$ に対応する固有ベクトルは、成分の和が0となるm-1個の線形独立なベクトル。

$\lambda_2$ の固有空間の基底は $e_1-e_m,\ldots,e_{m-1}-e_m$ であり、対応する固有ベクトルはこの空間の非零ベクトル全体である。
