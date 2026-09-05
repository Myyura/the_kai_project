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

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2024_sys.pdf)
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

(2) $n$ 次の実正方行列 $D$ の $(i,j)$ 成分 $a_{ij}$ が、すべての $i,j$ について、 $a_{ij} + a_{ji} = 0$ を満たしている。 $n$ が奇数のとき、 $D$ の行列式を求めよ。導出過程を示せ。

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
### 問題1
#### (1)

$A=\begin{pmatrix}A_{11}&0\\A_{21}&A_{22}\end{pmatrix}$ と分割すると、

$$
A_{11}=\begin{pmatrix}7&1\\x&-7\end{pmatrix},\qquad
A_{22}=\begin{pmatrix}0&2&3\\10&0&5\\-15&5&0\end{pmatrix}.
$$

$A_{11}^2=(49+x)I_2$ だから、$A^5=0$ なら $x=-49$ が必要である。この値を取れば $A_{11}^2=0$ となる。また、直接計算によって $A_{22}^3=0$ である。$A^5$ の左下ブロックは

$$
\sum_{k=0}^4 A_{22}^{4-k}A_{21}A_{11}^k
$$

であり、各項は $k\ge2$ または $4-k\ge3$ によって零になる。対角ブロックも零だから $A^5=0$ である。従って $\boxed{x=-49}$ が答えとなる。

#### (2)

$B$ の右下 $3\times3$ ブロックの行列式は $0$ なので $\det B=0$、従って $\operatorname{rank}B\le4$ である。一方、最初の4行・4列からなる小行列の行列式は $3240\ne0$ だから、$\operatorname{rank}B=4$ である。階数・退化次数定理より

$$
\boxed{\dim\ker T=5-4=1}.
$$

#### (3)

部分空間は零ベクトルを含むため、$c=0$ が必要である。逆に $c=0$ なら零ベクトルを含み、$u,v\in W(0)$ と実数 $\alpha,\beta$ に対して

$$
\sum_{i=1}^{10}(\alpha u_i+\beta v_i)
=\alpha\sum_i u_i+\beta\sum_i v_i=0.
$$

従って線形結合で閉じており、$W(0)$ は部分空間である。答えは $\boxed{c=0}$ のみである。

### 問題2
#### (1)

行列式を展開すると

$$
\boxed{\det C=(af-be+cd)^2\ge0}.
$$

#### (2)

$D^{\mathrm T}=-D$ だから、奇数 $n$ について

$$
\det D=\det D^{\mathrm T}=\det(-D)=(-1)^n\det D=-\det D.
$$

従って $\boxed{\det D=0}$ である。
