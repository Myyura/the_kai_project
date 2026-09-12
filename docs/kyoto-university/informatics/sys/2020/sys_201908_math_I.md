---
sidebar_label: "2019年8月実施 数学 I"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 京都大学 情報学研究科 システム科学専攻 2019年8月実施 数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語版

#### 問1

$\mathbb{R}^3$ から $\mathbb{R}^3$ への線形写像 $f$ の表現行列が $A$ であるとして, 以下の設問に答えよ。 ただし, $a$ は実数とする。

$$
A = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 0 \\ 1 & 0 & a \end{pmatrix}
$$

(i) 行列 $A$ の階数(ランク)が最小になる $a$ の値を求めよ。また, このときの行列 $A$ の階数を求めよ。

(ii) 行列 $A$ の階数が最小になるとき, 線形写像 $f$ の核(カーネル)を求めよ。また, このとき, $f$ の像の正規直交基底を求めよ。

(iii) 行列 $A$ が対角化できなくなる $a$ の値を求めよ。

(iv) $a=3$ のとき, 行列 $A$ は行列 $B$ と相似であることを示せ。

$$
B = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}
$$

#### 問2

以下の設問に答えよ。ただし, $\det$ は行列式, $T$ は転置, 行列の右上の $-1$ は逆行列を意味するものとし, 問題文中の行列およびベクトルの成分, スカラーはすべて実数とする。また, $n, m, l$ は正の整数とする。さらに, $m \times m$ 行列 $S$ , $m \times l$ 行列 $T$ , $l \times m$ 行列 $U$ , $l \times l$ 正則行列 $V$ について, $(m+l) \times (m+l)$ 行列 $\begin{bmatrix} S & T \\ U & V \end{bmatrix}$ と $S-TV^{-1}U$ が正則であれば,

$$
\begin{bmatrix} S & T \\ U & V \end{bmatrix}^{-1} =
\begin{bmatrix}
(S-TV^{-1}U)^{-1} & -(S-TV^{-1}U)^{-1}TV^{-1} \\
-V^{-1}U(S-TV^{-1}U)^{-1} & V^{-1} + V^{-1}U(S-TV^{-1}U)^{-1}TV^{-1}
\end{bmatrix}
$$

となる。

(i) 正則な $n \times n$ 行列 $A$ , $n$ 次元列ベクトル $b, c$ , スカラー $d$ について, 以下が成り立つことを示せ。

$$
\det \begin{bmatrix} A & b \\ c^T & d \end{bmatrix} = (\det A) \times (d - c^T A^{-1} b)
$$

(ii) $n \geq 2$ とする。 $A$ を $n \times n$ 正定値対称行列とする。このとき, $A^{-1}$ も $n \times n$ 正定値対称行列となり, スカラー $\alpha > 0$ , $(n-1)$ 次元列ベクトル $\beta$ , $(n-1) \times (n-1)$ 行列 $\Delta$ を用いて,

$$
A^{-1} = \begin{bmatrix} \alpha & \beta^T \\ \beta & \Delta \end{bmatrix}
$$

と表すことができる。 $\tilde{A}$ を行列 $A$ から最初の行と列を除いた $(n-1) \times (n-1)$ 小行列とするとき,

$$
\tilde{A}^{-1} = \Delta - \frac{\beta\beta^T}{\alpha}
$$

となることを示せ。

(iii) 設問 (ii) の条件に加えて, $x = [x_1, x_2, \dots, x_n]^T$ , また, $x$ の $(n-1)$ 次元部分ベクトルを $\tilde{x} = [x_2, x_3, \dots, x_n]^T$ とする。このとき, 二次形式 $x^T A^{-1} x$ は $x_1$ について二次式となるが, その二次式の $x_1$ に関する最小値は $\tilde{x}^T \tilde{A}^{-1} \tilde{x}$ となることを示せ。

(iv) 正方行列 $A_n$ を以下のように定義する。

$$
A_1 = [a_0], \quad A_2 = \begin{bmatrix} a_0 & a_1 \\ a_1 & a_0 \end{bmatrix}, \quad \dots, \quad A_{n+1} = \begin{bmatrix} a_0 & a_1 & a_2 & \cdots & a_n \\ a_1 & a_0 & a_1 & \cdots & a_{n-1} \\ a_2 & a_1 & a_0 & \cdots & a_{n-2} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ a_n & a_{n-1} & a_{n-2} & \cdots & a_0 \end{bmatrix}
$$

いま, すべての $n$ について $A_n$ を正定値対称行列とするとき, $n \geq 2$ について,

$$
\det A_{n+1} \leq \frac{(\det A_n)^2}{\det A_{n-1}}
$$

となることを示せ。

#### 题目描述

#### 問1

设从 $\mathbb{R}^3$ 到 $\mathbb{R}^3$ 的线性映射 $f$ 在标准基下的表示矩阵为

$$
A=
\begin{pmatrix}
1&2&-1\\
0&1&0\\
1&0&a
\end{pmatrix},
$$

其中 $a$ 为实数。回答：

1. 求使 $\operatorname{rank}A$ 最小的 $a$，并求此时的最小秩。
2. 在 $A$ 的秩最小时，求线性映射 $f$ 的核，并求
   $\operatorname{im}f$ 的一组标准正交基。
3. 求所有使 $A$ 在实数域上不可对角化的 $a$。
4. 当 $a=3$ 时，证明 $A$ 与矩阵

$$
B=
\begin{pmatrix}
1&0&0\\
0&2&1\\
0&0&2
\end{pmatrix}
$$

相似。

#### 問2

以下 $\det$ 表示行列式，记号 $A^{\mathrm T}$ 表示矩阵 $A$ 的转置，
$A^{-1}$ 表示其逆矩阵；题中所有矩阵、向量和标量的分量均为实数，
$n,m,l$ 均为正整数。

可以使用如下分块逆矩阵公式：设
$S$ 为 $m\times m$ 矩阵，$T$ 为 $m\times l$ 矩阵，
$U$ 为 $l\times m$ 矩阵，$V$ 为可逆的 $l\times l$ 矩阵。若

$$
\begin{bmatrix}
S&T\\
U&V
\end{bmatrix}
\quad\text{和}\quad
S-TV^{-1}U
$$

均可逆，则

$$
\begin{bmatrix}
S&T\\
U&V
\end{bmatrix}^{-1}
=
\begin{bmatrix}
(S-TV^{-1}U)^{-1}
&
-(S-TV^{-1}U)^{-1}TV^{-1}
\\[1mm]
-V^{-1}U(S-TV^{-1}U)^{-1}
&
V^{-1}
+V^{-1}U(S-TV^{-1}U)^{-1}TV^{-1}
\end{bmatrix}.
$$

回答下列问题。

1. 设 $A$ 是可逆的 $n\times n$ 矩阵，
   $\boldsymbol{b},\boldsymbol{c}$ 是 $n$ 维列向量，$d$ 是标量。证明

$$
\det
\begin{bmatrix}
A&\boldsymbol{b}\\
\boldsymbol{c}^{\mathrm T}&d
\end{bmatrix}
=
(\det A)
\left(
d-\boldsymbol{c}^{\mathrm T}A^{-1}\boldsymbol{b}
\right).
$$

2. 设 $n\geq2$，$A$ 是 $n\times n$ 正定实对称矩阵。于是
   $A^{-1}$ 也是正定实对称矩阵，并可写为

$$
A^{-1}
=
\begin{bmatrix}
\alpha&\boldsymbol{\beta}^{\mathrm T}\\
\boldsymbol{\beta}&\Delta
\end{bmatrix},
$$

其中 $\alpha>0$ 是标量，
$\boldsymbol{\beta}$ 是 $(n-1)$ 维列向量，
$\Delta$ 是 $(n-1)\times(n-1)$ 矩阵。令
$\widetilde{A}$ 为从 $A$ 删除第一行和第一列所得的
$(n-1)\times(n-1)$ 主子矩阵。证明

$$
\widetilde{A}^{-1}
=
\Delta
-\frac{\boldsymbol{\beta}\boldsymbol{\beta}^{\mathrm T}}{\alpha}.
$$

3. 在上一小问的条件下，令

$$
\boldsymbol{x}
=
[x_1,x_2,\ldots,x_n]^{\mathrm T},
\qquad
\widetilde{\boldsymbol{x}}
=
[x_2,x_3,\ldots,x_n]^{\mathrm T}.
$$

把二次型
$\boldsymbol{x}^{\mathrm T}A^{-1}\boldsymbol{x}$
视为关于 $x_1$ 的二次函数，并保持
$\widetilde{\boldsymbol{x}}$ 固定。证明它关于 $x_1$ 的最小值为

$$
\widetilde{\boldsymbol{x}}^{\mathrm T}
\widetilde{A}^{-1}
\widetilde{\boldsymbol{x}}.
$$

4. 定义实对称 Toeplitz 方阵序列

$$
A_1=[a_0],
\qquad
A_2=
\begin{bmatrix}
a_0&a_1\\
a_1&a_0
\end{bmatrix},
$$

以及一般的

$$
A_{n+1}
=
\begin{bmatrix}
a_0&a_1&a_2&\cdots&a_n\\
a_1&a_0&a_1&\cdots&a_{n-1}\\
a_2&a_1&a_0&\cdots&a_{n-2}\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
a_n&a_{n-1}&a_{n-2}&\cdots&a_0
\end{bmatrix}.
$$

假设对每个 $n$，$A_n$ 都是正定对称矩阵。证明对所有 $n\geq2$，

$$
\det A_{n+1}
\leq
\frac{(\det A_n)^2}{\det A_{n-1}}.
$$


## **Kai**

### 問1

(i) $\det A=a+1$ であり、左上の $2\times2$ 小行列式は常に $1$ である。したがって $a=-1$ のときに最小階数 $2$ をとる。

(ii) $a=-1$ とすると、$Ax=0$ は $x_2=0,\ x_1=x_3$ と同値である。よって

$$
\ker f=\operatorname{span}\left\{\begin{pmatrix}1\\0\\1\end{pmatrix}\right\}.
$$

第1、2列を Gram–Schmidt 法で直交化すると、像の正規直交基底は

$$
\left\{\frac1{\sqrt2}\begin{pmatrix}1\\0\\1\end{pmatrix},\quad
\frac1{\sqrt3}\begin{pmatrix}1\\1\\-1\end{pmatrix}\right\}.
$$

(iii) 実数体上で考える。特性多項式は

$$
\det(\lambda I-A)=(\lambda-1)\{\lambda^2-(a+1)\lambda+a+1\}.
$$

二次因子は $\lambda=1$ を根にもたず、判別式は $(a+1)(a-3)$ である。$a<-1$ または $a>3$ なら相異なる3実固有値をもつ。$-1<a<3$ なら非実固有値が存在する。また $a=-1,3$ ではそれぞれ重根 $0,2$ の固有空間が1次元なので対角化できない。したがって答えは

$$
\boxed{-1\le a\le3}.
$$

(iv) $a=3$ とし、

$$
P=\begin{pmatrix}-4&1&-1\\1&0&0\\2&-1&0\end{pmatrix}
$$

とおく。$\det P=1\ne0$ であり、直接計算で $AP=PB$ が成り立つ。よって $P^{-1}AP=B$。

### 問2

(i) ブロック消去により

$$
\begin{pmatrix}I&0\\-c^TA^{-1}&1\end{pmatrix}
\begin{pmatrix}A&b\\c^T&d\end{pmatrix}
=\begin{pmatrix}A&b\\0&d-c^TA^{-1}b\end{pmatrix}.
$$

左端の行列式は $1$ なので、両辺の行列式から所望の等式を得る。

(ii) $A=\begin{pmatrix}a&b^T\\b&\widetilde A\end{pmatrix}$ とおく。$AA^{-1}=I$ の下段より

$$
\alpha b+\widetilde A\beta=0,\qquad b\beta^T+\widetilde A\Delta=I.
$$

第1式の $b=-\widetilde A\beta/\alpha$ を第2式に代入して

$$
\widetilde A^{-1}=\Delta-\frac{\beta\beta^T}{\alpha}.
$$

(iii) 平方完成すると

$$
x^TA^{-1}x
=\alpha\left(x_1+\frac{\beta^T\widetilde x}{\alpha}\right)^2
+\widetilde x^T\left(\Delta-\frac{\beta\beta^T}{\alpha}\right)\widetilde x.
$$

$\alpha>0$ と (ii) より、$x_1=-\beta^T\widetilde x/\alpha$ で最小値 $\widetilde x^T\widetilde A^{-1}\widetilde x$ をとる。

(iv) $D_n=\det A_n>0$ とおく。$A_{n+1}^{-1}$ を (ii) のように分割すると、余因子公式と行列の反転対称性より

$$
\alpha=(A_{n+1}^{-1})_{11}=(A_{n+1}^{-1})_{n+1,n+1}
=\frac{D_n}{D_{n+1}}.
$$

(ii) の右下成分から

$$
\frac{D_{n-1}}{D_n}=(A_n^{-1})_{nn}
=\alpha-\frac{\beta_n^2}{\alpha}\le\alpha=\frac{D_n}{D_{n+1}}.
$$

よって $D_{n+1}\le D_n^2/D_{n-1}$ が従う。

