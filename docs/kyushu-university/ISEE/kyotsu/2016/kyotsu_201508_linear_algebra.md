---
sidebar_label: 2015年8月実施 線形代数
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
  - Mathematics.Linear-Algebra.Vector-Space-and-Subspace
  - Mathematics.Linear-Algebra.Linear-Independence
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2015年8月実施 線形代数

## **Author**
Zero, 祭音Myyura

## **Description**

> 出典：九州大学[公式問題](https://www.isee.kyushu-u.ac.jp/script/wordpress/wp-content/uploads/H28infait.pdf)。
任意の行列 $A$ を引数に取り行列を返す関数 $f(A) = \frac{1}{\sqrt{2}}\begin{pmatrix}A & A \\ A & -A\end{pmatrix}$ について　以下の各問に答えよ。

(1) $A$ が直交行列のとき、 $f(A)$ も直交行列となることを示せ。

(2) $A_0$ を $1 \times 1$ 行列 $A_0 = (1)$ とし,任意の整数 $n \ge 1$ に対し, 行列 $A_n$ を $A_n = f(A_{n-1})$ と定義する。このとき, 各成分が $1$ の $2^n$ 次元行ベクトル $\boldsymbol{1} = \{1,1,\dots,1\}$ と行列 $A_n$ の積 $\boldsymbol{1}A_n$ を求めよ。

(3) $\{\boldsymbol{v}_1,\boldsymbol{v}_2,\dots,\boldsymbol{v}_d\}$ を $A$ の列空間 ( $A$ の列ベクトルが張る部分空間 ) の基底とする。このとき,

$$
\bigg\{\begin{pmatrix}\boldsymbol{v}_1\\\boldsymbol{v}_1\end{pmatrix},\dots,\begin{pmatrix}\boldsymbol{v}_d\\\boldsymbol{v}_d\end{pmatrix},\begin{pmatrix}\boldsymbol{v}_1\\-\boldsymbol{v}_1\end{pmatrix},\dots,\begin{pmatrix}\boldsymbol{v}_d\\-\boldsymbol{v}_d\end{pmatrix}\bigg\}
$$

が $f(A)$ の列空間の基底となることを示せ。

### 题目描述

对任意矩阵 $A$ 定义分块矩阵函数

$$
f(A)=\frac1{\sqrt2}
\begin{pmatrix}
A&A\\
A&-A
\end{pmatrix}.
$$

回答下列问题：

1. 证明若 $A$ 是正交矩阵，则 $f(A)$ 也是正交矩阵。
2. 令 $A_0$ 为 $1\times1$ 矩阵 $(1)$，并对每个整数 $n\ge1$ 递归定义

   $$
   A_n=f(A_{n-1}).
   $$

   令 $\boldsymbol1=(1,1,\ldots,1)$ 为各分量均为 $1$ 的 $2^n$ 维行向量，求乘积 $\boldsymbol1A_n$。
3. 若 $\{\boldsymbol v_1,\boldsymbol v_2,\ldots,\boldsymbol v_d\}$ 是 $A$ 的列空间（即由 $A$ 的列向量张成的子空间）的一组基，证明下列 $2d$ 个分块列向量构成 $f(A)$ 的列空间的一组基：

$$
\left\{
\begin{pmatrix}\boldsymbol v_1\\\boldsymbol v_1\end{pmatrix},
\ldots,
\begin{pmatrix}\boldsymbol v_d\\\boldsymbol v_d\end{pmatrix},
\begin{pmatrix}\boldsymbol v_1\\-\boldsymbol v_1\end{pmatrix},
\ldots,
\begin{pmatrix}\boldsymbol v_d\\-\boldsymbol v_d\end{pmatrix}
\right\}.
$$

## **Kai**
### (1)
$A^\top A=I$ より

$$
\begin{aligned}
f(A)^\top f(A)
&=\frac12
\begin{pmatrix}A^\top&A^\top\\A^\top&-A^\top\end{pmatrix}
\begin{pmatrix}A&A\\A&-A\end{pmatrix}\\
&=\begin{pmatrix}A^\top A&0\\0&A^\top A\end{pmatrix}
=I.
\end{aligned}
$$

したがって $f(A)$ も直交行列である。

### (2)

$H=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ とおくと
$A_n=H\otimes A_{n-1}=H^{\otimes n}$ である。
$\boldsymbol{u}_n=\boldsymbol{1}_{2^n}A_n$ とおけば

$$
\boldsymbol{u}_n
=\bigl((1,1)H\bigr)\otimes\boldsymbol{u}_{n-1}
=(\sqrt2,0)\otimes\boldsymbol{u}_{n-1},
\qquad \boldsymbol{u}_0=(1).
$$

よって

$$
\boxed{\boldsymbol{1}_{2^n}A_n
=\left(2^{n/2},0,\ldots,0\right)}.
$$

### (3)
$A$ の各列を $\boldsymbol{a}_j$ とすると、$f(A)$ の列は

$$
\frac1{\sqrt2}\begin{pmatrix}\boldsymbol{a}_j\\\boldsymbol{a}_j\end{pmatrix},
\qquad
\frac1{\sqrt2}\begin{pmatrix}\boldsymbol{a}_j\\-\boldsymbol{a}_j\end{pmatrix}
$$

である。各 $\boldsymbol{a}_j$ は $\boldsymbol{v}_1,\ldots,\boldsymbol{v}_d$ の線形結合であり、逆に各 $\boldsymbol{v}_i$ は $A$ の列の線形結合なので、問題文の $2d$ 個のベクトルは $f(A)$ の列空間を張る。

さらに

$$
\sum_i\alpha_i\begin{pmatrix}\boldsymbol{v}_i\\\boldsymbol{v}_i\end{pmatrix}
+\sum_i\beta_i\begin{pmatrix}\boldsymbol{v}_i\\-\boldsymbol{v}_i\end{pmatrix}
=0
$$

ならば、上下の成分から
$\sum_i(\alpha_i+\beta_i)\boldsymbol{v}_i=0$ および
$\sum_i(\alpha_i-\beta_i)\boldsymbol{v}_i=0$ を得る。
$\boldsymbol{v}_i$ は一次独立なので全ての $\alpha_i,\beta_i$ は $0$ である。したがって問題文の集合は基底である。
