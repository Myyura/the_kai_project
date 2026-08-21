---
sidebar_label: "2023年8月実施 線形代数"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Affine-Solution-Space-of-Linear-System
---
# 京都大学 情報学研究科 数理工学専攻 2023年8月実施 線形代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次で与えられる3次正方行列 $A$ について考える.

$$
A = \begin{pmatrix} 1 & 2 & -1 \\ 2 & 1 & 1 \\ 2 & 0 & 2 \end{pmatrix}
$$

以下の問いに答えよ.

(i) 行列 $A$ の行列式を求めよ.

(ii) 行列 $A$ の固有値をすべて求め、各固有値に対する固有ベクトルを求めよ.

(iii) $B = P^{-1}AP$ となるような正則行列 $P$ と対角行列 $B$ を求めよ.

(iv) $x, y, z$ に関する連立一次方程式

$$
\begin{cases} x + 2y - z = 2 \\ 2x + y + z = 1 \\ x + z = 0 \end{cases}
$$

を解け.

### 题目描述

考虑矩阵

$$
A=
\begin{pmatrix}
1&2&-1\\
2&1&1\\
2&0&2
\end{pmatrix}.
$$

回答：

1. 求 $\det A$。
2. 求 $A$ 的全部特征值，并对每个特征值求相应特征向量。
3. 求一个可逆矩阵 $P$ 和一个对角矩阵 $B$，使

$$
B=P^{-1}AP.
$$

4. 解关于 $x,y,z$ 的线性方程组

$$
\begin{cases}
x+2y-z=2,\\
2x+y+z=1,\\
x+z=0.
\end{cases}
$$

## **Kai**

### (i) 行列式

第 $1$ 行で展開すると、

$$
\begin{aligned}
\det A
&=
\begin{vmatrix}1&1\\0&2\end{vmatrix}
-2\begin{vmatrix}2&1\\2&2\end{vmatrix}
-\begin{vmatrix}2&1\\2&0\end{vmatrix}\\
&=2-2(2)-(-2)=0.
\end{aligned}
$$

### (ii) 固有値と固有ベクトル

特性多項式は

$$
\det(A-\lambda I)
=-\lambda(\lambda-1)(\lambda-3).
$$

したがって固有値は $0,1,3$ である。それぞれの固有空間は

$$
\ker A
=\operatorname{Span}
\left\{
\begin{pmatrix}-1\\1\\1\end{pmatrix}
\right\},
$$

$$
\ker(A-I)
=\operatorname{Span}
\left\{
\begin{pmatrix}-1\\1\\2\end{pmatrix}
\right\},
$$

$$
\ker(A-3I)
=\operatorname{Span}
\left\{
\begin{pmatrix}1\\2\\2\end{pmatrix}
\right\}.
$$

### (iii) 対角化

上の固有ベクトルを列に並べて

$$
P=
\begin{pmatrix}
-1&-1&1\\
1&1&2\\
1&2&2
\end{pmatrix}
$$

とおく。 $\det P=3\neq0$ なので $P$ は正則であり、

$$
B=P^{-1}AP
=
\begin{pmatrix}
0&0&0\\
0&1&0\\
0&0&3
\end{pmatrix}.
$$

### (iv) 連立一次方程式

第 $3$ 式から $z=-x$ である。これを第 $1,2$ 式に代入すると、いずれも

$$
x+y=1
$$

となる。したがって $t\in\mathbb R$ を用いて、

$$
\boxed{
\begin{pmatrix}x\\y\\z\end{pmatrix}
=
\begin{pmatrix}t\\1-t\\-t\end{pmatrix}
=
\begin{pmatrix}0\\1\\0\end{pmatrix}
+t\begin{pmatrix}1\\-1\\-1\end{pmatrix}
}
$$

と表せる。
