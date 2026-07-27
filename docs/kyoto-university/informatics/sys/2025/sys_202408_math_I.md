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
[AKIRA (小红书:94184092292)](http://xhslink.com/m/8bKqJGibBtz)

## **Description**
$\mathbb{R}$ を実数全体からなる集合とする。

### 問題1
以下の問いに答えよ。

(1) つぎの行列 $A$ を考える。ただし、$x$ は実数である。$A^5$ が零行列となる $x$ をひとつ求めよ。そのような $x$ が存在しない場合は「存在しない」と答えよ。

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

(2) 設問 (1) の行列 $A$ を考える。$x = 113$ としたときの行列 $A$ を $B$ と表す。$5$ 次元実ベクトル空間において、行列 $B$ から定まる線形写像 $T(y) = By$ の零空間（核）の次元を求めよ。ただし、$y$ は 5 次元実ベクトル空間の元である。

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

と定義する。$W(c)$ が $10$ 次元実ベクトル空間の部分空間（線形部分空間）になるような実数 $c$ をすべて列挙せよ。
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

$n$ 次の実正方行列 $D$ の $(i,j)$ 成分 $a_{ij}$ が、すべての $i,j$ について、$a_{ij} + a_{ji} = 0$ を満たしている。$n$ が奇数のとき、$D$ の行列式を求めよ。導出過程を示せ。

### 题目描述

以下 $\mathbb R$ 表示实数集。

1. 回答下列问题。

   （1）考虑矩阵

   $$
   A=
   \begin{pmatrix}
   7&1&0&0&0\\
   x&-7&0&0&0\\
   -2&19&0&2&3\\
   13&-14&10&0&5\\
   8&9&-15&5&0
   \end{pmatrix},
   $$

   其中 $x$ 为实数。求一个使 $A^5$ 为零矩阵的 $x$；若不存在，则回答“不存在”。

   （2）在第（1）问的矩阵中取 $x=113$，所得矩阵记作 $B$。在五维实向量空间中，考虑由 $B$ 定义的线性映射

   $$
   T(y)=By.
   $$

   求 $T$ 的零空间（核）的维数。

   （3）对实数 $c$ 定义

   $$
   W(c)=
   \left\{
   \begin{pmatrix}
   x_1\\x_2\\\vdots\\x_{10}
   \end{pmatrix}
   \in\mathbb R^{10}
   \ \middle|\
   x_1+x_2+\cdots+x_{10}=c
   \right\}.
   $$

   列出使 $W(c)$ 成为十维实向量空间线性子空间的所有 $c$；若不存在，则回答“不存在”。并依据实向量空间中子空间的定义证明答案正确。

2. 回答下列问题。

   （1）证明对任意实数 $a,b,c,d,e,f$，实方阵

   $$
   C=
   \begin{pmatrix}
   0&-a&-b&-c\\
   a&0&-d&-e\\
   b&d&0&-f\\
   c&e&f&0
   \end{pmatrix}
   $$

   的行列式均非负。

   （2）设 $D=(a_{ij})$ 为 $n$ 阶实方阵，且对所有 $i,j$ 都满足

   $$
   a_{ij}+a_{ji}=0.
   $$

   当 $n$ 为奇数时求 $\det D$，并写出推导过程。

#### 考点

- **幂零矩阵**：利用特征多项式、块结构或幂零必要条件确定参数。
- **核空间与秩—零度定理**：对具体线性映射求核的维数。
- **子空间判定**：检验零向量、加法封闭与数乘封闭，区分齐次与非齐次超平面。
- **实反对称矩阵**：运用转置与行列式性质证明奇数阶行列式为零。
- **Pfaffian 型恒等式**：将四阶反对称矩阵行列式表示为平方，从而证明非负性。

## **Kai**

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_math_I.jpg" width="700" alt=""/>
</figure>
