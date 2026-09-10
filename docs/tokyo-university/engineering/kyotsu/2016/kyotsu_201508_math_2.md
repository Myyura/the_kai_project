---
sidebar_label: '2015年8月実施 数学 第2問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Systems-of-Linear-Equations
  - Mathematics.Linear-Algebra.Singular-Value-Decomposition
  - Mathematics.Linear-Algebra.Least-Squares-and-Minimum-Norm-Solutions
---

# 東京大学 工学系研究科 2015年8月実施 数学 第2問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

次の列ベクトルを考える。

$$
\boldsymbol a_1=(0,1,1)^T,\quad\boldsymbol a_2=(1,0,1)^T,\quad
\boldsymbol a_3=(1,1,0)^T,\quad\boldsymbol b=(1,2,4)^T.
$$

I. $A=(\boldsymbol a_1\ \boldsymbol a_2\ \boldsymbol a_3)$ とおき、$A\boldsymbol x=\boldsymbol b$ を解け。

II. 任意の $m\times n$ 実行列 $B$ の特異値分解を $B=U\Sigma V^T$ とする。$U,V$ は直交行列、$\Sigma$ の最初の $r=\operatorname{rank}B$ 個の対角成分は正の特異値で、他の成分は $0$ である。$BB^T$ と $B^TB$ を $U,V,\Sigma$ とその転置で表せ。

以下では $B=(\boldsymbol a_1\ \boldsymbol a_2)$ とする。

III. $BB^T$ の固有値と対応する固有ベクトルを求めよ。

IV. $B$ の特異値と、特異値分解における直交行列 $U,V$ の一組を求めよ。

V. $\|B\boldsymbol x-\boldsymbol b\|^2$ を最小にする2次元列ベクトル $\boldsymbol x$ を求めよ。

#### 题目描述

给定列向量

$$
\boldsymbol a_1=(0,1,1)^T,\quad\boldsymbol a_2=(1,0,1)^T,\quad
\boldsymbol a_3=(1,1,0)^T,\quad\boldsymbol b=(1,2,4)^T.
$$

I. 令 $A=(\boldsymbol a_1\ \boldsymbol a_2\ \boldsymbol a_3)$，解 $A\boldsymbol x=\boldsymbol b$。

II. 任意 $m\times n$ 实矩阵 $B$ 的奇异值分解为 $B=U\Sigma V^T$，其中 $U,V$ 为正交矩阵，$\Sigma$ 的前 $r=\operatorname{rank}B$ 个对角元素为正奇异值，其余元素为 $0$。用 $U,V,\Sigma$ 及其转置表示 $BB^T$ 和 $B^TB$。

以下令 $B=(\boldsymbol a_1\ \boldsymbol a_2)$。

III. 求 $BB^T$ 的特征值和相应特征向量。

IV. 求 $B$ 的奇异值以及一个奇异值分解中的正交矩阵 $U,V$。

V. 求使 $\|B\boldsymbol x-\boldsymbol b\|^2$ 最小的二维列向量 $\boldsymbol x$。

## **Kai**

### I

連立方程式は $x_2+x_3=1$、$x_1+x_3=2$、$x_1+x_2=4$ なので、

$$
\boxed{\boldsymbol x=(5/2,3/2,-1/2)^T.}
$$

### II

$U^TU=I,V^TV=I$ より、

$$
\boxed{BB^T=U\Sigma\Sigma^TU^T,\qquad
B^TB=V\Sigma^T\Sigma V^T.}
$$

### III

$$
BB^T=\begin{pmatrix}1&0&1\\0&1&1\\1&1&2\end{pmatrix},\qquad
\det(\lambda I-BB^T)=\lambda(\lambda-1)(\lambda-3).
$$

対応する単位固有ベクトルを次のように取れる。

$$
\boxed{
\begin{array}{c|c}
\lambda&\text{単位固有ベクトル}\\\hline
3&(1,1,2)^T/\sqrt6\\
1&(1,-1,0)^T/\sqrt2\\
0&(1,1,-1)^T/\sqrt3
\end{array}}
$$

各固有空間は、表の対応するベクトルで張られる。

### IV

特異値は $\boxed{\sqrt3,1}$。III のベクトルを固有値 $3,1,0$ の順に列に並べて $U$ とすると、

$$
\boxed{
U=\begin{pmatrix}
1/\sqrt6&1/\sqrt2&1/\sqrt3\\
1/\sqrt6&-1/\sqrt2&1/\sqrt3\\
2/\sqrt6&0&-1/\sqrt3
\end{pmatrix},\quad
\Sigma=\begin{pmatrix}\sqrt3&0\\0&1\\0&0\end{pmatrix},\quad
V=\frac1{\sqrt2}\begin{pmatrix}1&-1\\1&1\end{pmatrix}.}
$$

$B\boldsymbol v_j=\sigma_j\boldsymbol u_j$ より、$B=U\Sigma V^T$ が成り立つ。

### V

$B$ は列フルランクなので、最小二乗解は正規方程式で一意に定まる。

$$
\begin{pmatrix}2&1\\1&2\end{pmatrix}\boldsymbol x
=B^T\boldsymbol b=\begin{pmatrix}6\\5\end{pmatrix}.
$$

したがって

$$
\boxed{\boldsymbol x=(7/3,4/3)^T,\qquad
\min\|B\boldsymbol x-\boldsymbol b\|^2=\frac13.}
$$

