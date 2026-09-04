---
sidebar_label: "2017年8月実施 数1 [1]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2017年8月実施 数1 [1]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の小問に答えよ。

1) 行列

$$
A = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}
$$

の固有値と固有ベクトルを求めよ。

2) 1) の $A$ に対して、ある直交行列 $U$ を選べば、 $U^T A U$ が対角行列となる。このときの $U$ を示せ。ただし、 $U^T$ は $U$ の転置を表す。

3) $n$ を自然数として、 $n$ 次の正方行列 $B$ の固有値が $\lambda_1, \lambda_2, ..., \lambda_n$ であるとする。適当なユニタリ行列 $P$ を選べば $P^{-1}BP$ が上三角行列となり、かつ、対角成分が $\lambda_1, \lambda_2, ..., \lambda_n$ となることが知られている。この関係を用いて、 $B^2$ の固有値が $\lambda_1^2, \lambda_2^2, ..., \lambda_n^2$ となることを示せ。

4) $f(x)$ は $x$ に対する任意の多項式とする。3) の $B$ に対して、 $f(B)$ の固有値が $f(\lambda_1), f(\lambda_2), ..., f(\lambda_n)$ となることを示せ。

### 题目描述

回答下列问题。

1. 对矩阵

   $$
   A=\begin{pmatrix}
   0&0&1\\
   0&1&0\\
   1&0&0
   \end{pmatrix},
   $$

   求全部特征值和相应的特征向量；
2. 对第 1 问的 $A$，可以选取某个正交矩阵 $U$，使 $U^{\mathsf T}AU$ 为对角矩阵。给出一个这样的 $U$，其中 $U^{\mathsf T}$ 表示 $U$ 的转置；
3. 设 $n$ 为自然数，$n$ 阶方阵 $B$ 的特征值为 $\lambda_1,\lambda_2,\ldots,\lambda_n$。已知可选取适当的酉矩阵 $P$，使 $P^{-1}BP$ 为上三角矩阵，且其对角元依次为 $\lambda_1,\lambda_2,\ldots,\lambda_n$。利用这一关系证明 $B^2$ 的特征值为

   $$
   \lambda_1^2,\lambda_2^2,\ldots,\lambda_n^2;
   $$

4. 设 $f(x)$ 为关于 $x$ 的任意多项式。对第 3 问的矩阵 $B$，证明 $f(B)$ 的特征值为

   $$
   f(\lambda_1),f(\lambda_2),\ldots,f(\lambda_n).
   $$

## **Kai**

1) まず、行列 $A$ の固有値を求める。

$$
\det(A - \lambda I) = \begin{vmatrix} -\lambda & 0 & 1 \\ 0 & 1-\lambda & 0 \\ 1 & 0 & -\lambda \end{vmatrix} = (1-\lambda)(\lambda^2 - 1) = (1-\lambda)(\lambda - 1)(\lambda + 1) = -(\lambda - 1)^2(\lambda + 1) = 0
$$

よって、固有値は $\lambda_1 = 1$ (重複度2), $\lambda_2 = -1$ である。

次に、固有ベクトルを求める。

$\lambda = 1$ のとき、

$$
(A - I)v = \begin{pmatrix} -1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$-x + z = 0$ より、 $z = x$ 。 $y$ は任意。
固有ベクトルは $v_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$ と $v_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ で張られる。

$\lambda = -1$ のとき、

$$
(A + I)v = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$x + z = 0$ より、 $z = -x$ 。 $2y = 0$ より、 $y = 0$ 。
固有ベクトルは $v_3 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$ である。

2) $A$ を対角化する直交行列 $U$ は、固有ベクトルを正規直交化したものを並べた行列である。
$v_1' = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$ , $v_2' = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ , $v_3' = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$ である。
$v_1'$ と $v_2'$ の内積は $0$ なので、これらはすでに直交している。
$u_1 = v_1' = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$
$u_2 = v_2 - \langle v_2, u_1 \rangle u_1 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} - 0 \cdot u_1 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ 。これは既に正規化されている。
$u_3 = v_3' = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$
よって、 $U = \begin{pmatrix} \frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} \\ 0 & 1 & 0 \\ \frac{1}{\sqrt{2}} & 0 & -\frac{1}{\sqrt{2}} \end{pmatrix}$ となる。

3) $B$ の固有値が $\lambda_1, \lambda_2, ..., \lambda_n$ であるとき、Schur分解により、ユニタリ行列 $P$ が存在して、 $P^{-1}BP$ が上三角行列となる。対角成分は固有値 $\lambda_1, \lambda_2, ..., \lambda_n$ である。 $B^2 = B \cdot B$ であるから、 $P^{-1}B^2P = P^{-1}BPP^{-1}BP = (P^{-1}BP)(P^{-1}BP)$ となり、 $P^{-1}B^2P$ も上三角行列となる。対角成分は $\lambda_1^2, \lambda_2^2, ..., \lambda_n^2$ となる。従って、 $B^2$ の固有値は $\lambda_1^2, \lambda_2^2, ..., \lambda_n^2$ である。

4) 3) より、 $P^{-1}BP$ が上三角行列で、対角成分が $\lambda_1, \lambda_2, ..., \lambda_n$ である。 $f(x)$ は任意の多項式なので、 $f(B) = a_n B^n + a_{n-1} B^{n-1} + ... + a_1 B + a_0 I$ と書ける。このとき、 $P^{-1} f(B) P = a_n P^{-1}B^n P + a_{n-1} P^{-1}B^{n-1} P + ... + a_1 P^{-1}BP + a_0 P^{-1}IP = a_n (P^{-1}BP)^n + a_{n-1} (P^{-1}BP)^{n-1} + ... + a_1 (P^{-1}BP) + a_0 I$ となり、 $P^{-1}f(B)P$ も上三角行列となり、対角成分は $f(\lambda_1), f(\lambda_2), ..., f(\lambda_n)$ となる。従って、 $f(B)$ の固有値は $f(\lambda_1), f(\lambda_2), ..., f(\lambda_n)$ である。
