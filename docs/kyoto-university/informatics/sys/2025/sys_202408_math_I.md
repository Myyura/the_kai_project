---
sidebar_label: 2024年8月実施 数学【I】
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Nilpotent-Matrix
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Vector-Space-and-Subspace
  - Mathematics.Linear-Algebra.Skew-Symmetric-Matrix
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 京都大学 情報学研究科 システム科学専攻 2024年8月実施 数学【I】

## **Author**
[AKIRA (小红书:94184092292)](http://xhslink.com/m/8bKqJGibBtz), 祭音Myyura

## **Description**
$\mathbb{R}$ を実数全体からなる集合とする。

### 問題1
以下の問いに答えよ。

(1) つぎの行列 $A$ を考える。ただし、 $x$ は実数である。 $A^5$ が零行列となる $x$ をひとつ求めよ。そのような $x$ が存在しない場合は「存在しない」と答えよ。

$$
A =
\begin{pmatrix}
7 & 1 & 0 & 0 & 0 \\
x & -7 & 0 & 0 & 0 \\
-2 & 19 & 0 & 2 & 3 \\
13 & -14 & 10 & 0 & 5 \\
8 & 9 & -15 & 5 & 0
\end{pmatrix}
$$

------------------------

(2) 設問 (1) の行列 $A$ を考える。 $x = 113$ としたときの行列 $A$ を $B$ と表す。 $5$ 次元実ベクトル空間において、行列 $B$ から定まる線形写像 $T(y) = By$ の零空間（核）の次元を求めよ。ただし、 $y$ は 5 次元実ベクトル空間の元である。

------------------------

(3) 実数 $c$ に対して集合 $W(c)$ を

$$
W(c) =
\left\{
\begin{pmatrix}
x_1 \\
x_2 \\
\vdots \\
x_{10}
\end{pmatrix}
\in \mathbb{R}^{10}
\mid
x_1 + x_2 + \cdots + x_{10} = c
\right\}
$$

と定義する。 $W(c)$ が $10$ 次元実ベクトル空間の部分空間（線形部分空間）になるような実数 $c$ をすべて列挙せよ。
そのような $c$ が存在しない場合は「存在しない」と答えよ。また、実ベクトル空間における部分空間の定義に従って、求めた答えが正しいことを証明せよ。

### 問題2
(1) 以下の実正方行列 $C$ の行列式は、すべての実数 $a,b,c,d,e,f$ に対して非負となることを示せ。

$$
C = \begin{pmatrix}
  0 & -a & -b & -c \\
  a & 0 &-d & -e \\
  b & d & 0 & -f \\
  c & e & f & 0
\end{pmatrix}
$$

$n$ 次の実正方行列 $D$ の $(i,j)$ 成分 $a_{ij}$ が、すべての $i,j$ について、 $a_{ij} + a_{ji} = 0$ を満たしている。 $n$ が奇数のとき、 $D$ の行列式を求めよ。導出過程を示せ。

### 题目描述

以下 $\mathbb{R}$ 表示实数集。回答以下两题。

1. 完成下列各问。

   1. 对实参数 $x$，考虑

$$
A=
\begin{pmatrix}
7&1&0&0&0\\
x&-7&0&0&0\\
-2&19&0&2&3\\
13&-14&10&0&5\\
8&9&-15&5&0
\end{pmatrix}.
$$

求一个使 $A^5$ 等于零矩阵的 $x$；若不存在这样的实数，则回答“不存在”。

   2. 在上一小问的矩阵中令 $x=113$，所得矩阵记为 $B$。在五维实向量空间上考虑线性映射

$$
T(\boldsymbol{y})=B\boldsymbol{y},
\qquad
\boldsymbol{y}\in\mathbb{R}^5.
$$

求 $T$ 的零空间（核）的维数。

   3. 对实数 $c$ 定义

$$
W(c)
=
\left\{
\begin{pmatrix}
x_1\\x_2\\\vdots\\x_{10}
\end{pmatrix}
\in\mathbb{R}^{10}
\ \middle|\
x_1+x_2+\cdots+x_{10}=c
\right\}.
$$

列出使 $W(c)$ 成为十维实向量空间 $\mathbb{R}^{10}$ 的线性子空间的全部实数
$c$；若一个也没有，则回答“不存在”。还要依据实向量空间中子空间的定义，证明所列答案正确。

2. 完成下列各问。

   1. 证明对任意实数 $a,b,c,d,e,f$，实方阵

$$
C=
\begin{pmatrix}
0&-a&-b&-c\\
a&0&-d&-e\\
b&d&0&-f\\
c&e&f&0
\end{pmatrix}
$$

的行列式总是非负。
   2. 设 $D=(a_{ij})$ 是 $n$ 阶实方阵，并且对所有
      $i,j$ 都有

$$
a_{ij}+a_{ji}=0.
$$

当 $n$ 为奇数时，求 $\det D$，并写出推导过程。

## **Kai**

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_math_I.jpg" width="700" alt=""/>
</figure>

### 問題1 (2) の訂正

$\det B=0$ より $\operatorname{rank}B\leq4$ である。一方、第 $1,2,3,4$ 行と第 $1,2,3,4$ 列からなる小行列の行列式は $3240\ne0$ なので、$\operatorname{rank}B=4$。したがって

$$
\dim\ker T=5-\operatorname{rank}B=1.
$$
