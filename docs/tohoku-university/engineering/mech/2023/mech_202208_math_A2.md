---
sidebar_label: "2022年8月実施 数学A 2"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Trace
  - Mathematics.Linear-Algebra.Matrix-Power
  - Discrete-Mathematics.Graph-Theory.Adjacency-Spectrum-of-Path-and-Complete-Graphs
---
# 東北大学 工学研究科 機械系 2022年8月実施 数学A 2

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

$n$ 個の点 $P_1,P_2,\ldots,P_n$ が与えられており，そのいくつかが線分で結ばれている場合を考える．これに対応する $n\times n$ 行列の成分 $a_{ij}$ を

$$
a_{ij}=\begin{cases}
0&i=j\\
1&i\ne j\text{ で }P_i\text{ と }P_j\text{ が結ばれている場合}\\
0&i\ne j\text{ で }P_i\text{ と }P_j\text{ が結ばれていない場合}
\end{cases}
$$

により決める．たとえば，図1，図2の場合，対応する行列 $B,C$ がそれぞれ

$$
B=\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix},\qquad
C=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}
$$

のように決まる．以下の問いに答えよ．

(1) $B$ および $C$ の固有値を求めよ．

(2) $C^3$ の対角成分の和を求めよ．

(3) 図3に対応する行列 $D$ について $D^3$ の対角成分の和を求めよ．

![図1・図2・図3](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2023/mech_202208_math_A2_figure_1.png)

### 题目描述

给定 $n$ 个点 $P_1,P_2,\ldots,P_n$，其中某些点之间用线段连接。与之对应的 $n\times n$ 矩阵元素定义为

$$
a_{ij}=\begin{cases}
0&i=j\\
1&i\ne j\text{ 且 }P_i\text{ 与 }P_j\text{ 相连}\\
0&i\ne j\text{ 且 }P_i\text{ 与 }P_j\text{ 不相连}.
\end{cases}
$$

例如，上方图1、图2对应的矩阵分别为

$$
B=\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix},\qquad
C=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}.
$$

回答下列问题。

**(1)** 求 $B$ 和 $C$ 的特征值。

**(2)** 求 $C^3$ 的对角元素之和。

**(3)** 对于上方图3对应的矩阵 $D$，求 $D^3$ 的对角元素之和。

## **Kai**
### (1)
$B$ の固有値を $b$ とすると、

$$
\begin{aligned}
0
&= \det \begin{pmatrix} -b & 1 & 0 \\ 1 & -b & 1 \\ 0 & 1 & -b \end{pmatrix}
\\
&= -b^3 + 2b
\\
&= -b (b^2 - 2)
\\
\therefore \ \
b &= 0, \pm \sqrt{2}
\end{aligned}
$$

である。

$C$ の固有値を $c$ とすると、

$$
\begin{aligned}
0
&= \det \begin{pmatrix} -c & 1 & 1 \\ 1 & -c & 1 \\ 1 & 1 & -c \end{pmatrix}
\\
&= -c^3 + 2 + 3c
\\
&= - (c+1)^2(c-2)
\\
\therefore \ \
c &= -1, 2
\end{aligned}
$$

である。

### (2)
$C$ は実対称行列なので、適当な直交行列 $P$ とその逆行列 $P^{-1}$ を使って、

$$
\begin{aligned}
C = P \tilde{C} P^{-1}
, \ \ \ \
\tilde{C}
= \begin{pmatrix} -1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 2 \end{pmatrix}
\end{aligned}
$$

と書ける。

行列の対角成分の和を $\mathrm{tr}$ と書くと、

$$
\begin{aligned}
\mathrm{tr} \left( C^3 \right)
&= \mathrm{tr} \left( P \tilde{C}^3 P^{-1} \right)
\\
&= \mathrm{tr} \left( \tilde{C}^3 \right)
\\
&= \mathrm{tr} \begin{pmatrix} -1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 8 \end{pmatrix}
\\
&= 6
\end{aligned}
$$

である。

### (3)

$$
\begin{aligned}
D
&= \begin{pmatrix}
0 & 1 & 1 & 1 & 1 & 1 \\
1 & 0 & 1 & 1 & 1 & 1 \\
1 & 1 & 0 & 1 & 1 & 1 \\
1 & 1 & 1 & 0 & 1 & 1 \\
1 & 1 & 1 & 1 & 0 & 1 \\
1 & 1 & 1 & 1 & 1 & 0 \\
\end{pmatrix}
\end{aligned}
$$

であり、 $D$ の固有値を $d$ とすると、

$$
\begin{aligned}
0
&= \det \begin{pmatrix}
-d & 1 & 1 & 1 & 1 & 1 \\
1 & -d & 1 & 1 & 1 & 1 \\
1 & 1 & -d & 1 & 1 & 1 \\
1 & 1 & 1 & -d & 1 & 1 \\
1 & 1 & 1 & 1 & -d & 1 \\
1 & 1 & 1 & 1 & 1 & -d
\end{pmatrix}
\\
&= \det \begin{pmatrix}
0 & 1-d^2 & 1+d & 1+d & 1+d & 1+d \\
1 & -d & 1 & 1 & 1 & 1 \\
0 & 1+d & -d-1 & 0 & 0 & 0 \\
0 & 1+d & 0 & -d-1 & 0 & 0 \\
0 & 1+d & 0 & 0 & -d-1 & 0 \\
0 & 1+d & 0 & 0 & 0 & -d-1
\end{pmatrix}
\\
&= - \det \begin{pmatrix}
1-d^2 & 1+d & 1+d & 1+d & 1+d \\
1+d & -d-1 & 0 & 0 & 0 \\
1+d & 0 & -d-1 & 0 & 0 \\
1+d & 0 & 0 & -d-1 & 0 \\
1+d & 0 & 0 & 0 & -d-1
\end{pmatrix}
\\
&= - (d+1)^5 \det \begin{pmatrix}
1-d & 1 & 1 & 1 & 1 \\
1 & -1 & 0 & 0 & 0 \\
1 & 0 & -1 & 0 & 0 \\
1 & 0 & 0 & -1 & 0 \\
1 & 0 & 0 & 0 & -1
\end{pmatrix}
\\
&= - (d+1)^5 \left( \det \begin{pmatrix}
1 & -1 & 0 & 0 \\
1 & 0 & -1 & 0 \\
1 & 0 & 0 & -1 \\
1 & 0 & 0 & 0
\end{pmatrix}\right.
\\
&\qquad\left. - \det \begin{pmatrix}
1-d & 1 & 1 & 1 \\
1 & -1 & 0 & 0 \\
1 & 0 & -1 & 0 \\
1 & 0 & 0 & -1
\end{pmatrix} \right)
\\
&= - (d+1)^5 \left( - \det \begin{pmatrix}
-1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & -1
\end{pmatrix}\right.
\\
&\qquad\left. + \det \begin{pmatrix}
1 & -1 & 0 \\
1 & 0 & -1 \\
1 & 0 & 0
\end{pmatrix}\right.
\\
&\qquad\left. + \det \begin{pmatrix}
1-d & 1 & 1 \\
1 & -1 & 0 \\
1 & 0 & -1
\end{pmatrix} \right)
\\
&= -(d+1)^5 \left( 1 + 1 + (1-d) + 2 \right)
\\
&= (d+1)^5 (d-5)
\\
\therefore \ \
d &= -1, 5
\end{aligned}
$$

である。
そこで、

$$
\begin{aligned}
\tilde{D}
= \begin{pmatrix}
-1 & 0 & 0 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 & 0 & 0 \\
0 & 0 & -1 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 & 0 & 0 \\
0 & 0 & 0 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 & 0 & 5
\end{pmatrix}
\end{aligned}
$$

とおいて、 (2) と同様に考えると、

$$
\begin{aligned}
\mathrm{tr} \left( D^3 \right)
&= \mathrm{tr} \left( \tilde{D}^3 \right)
\\
&= \mathrm{tr} \begin{pmatrix}
-1 & 0 & 0 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 & 0 & 0 \\
0 & 0 & -1 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 & 0 & 0 \\
0 & 0 & 0 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 & 0 & 125
\end{pmatrix}
\\
&= 120
\end{aligned}
$$

がわかる。

## **Reference**

- [東北大学 機械系 2022年度実施試験（数学A）](https://www.mech.tohoku.ac.jp/wp/wp-content/themes/tumech/img/examination/past-collection/Problem_2022_j.pdf)
