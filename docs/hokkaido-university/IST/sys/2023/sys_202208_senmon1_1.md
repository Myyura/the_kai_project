---
sidebar_label: "2022年8月実施 専門科目1 問1 (応用数学I)"
tags:
  - Hokkaido-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Rayleigh-Quotient
  - Mathematics.Linear-Algebra.Quadratic-Form
---
# 北海道大学 情報科学院 情報科学専攻 システム情報科学コース 2022年8月実施 専門科目1 問1 (応用数学I)

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

題意の要約。出典：[大学公開原卷の保存版（PDF 3ページ）](https://web.archive.org/web/20230627090750id_/https://www.ist.hokudai.ac.jp/examinfo/files/sys01.pdf)。

### 1-1)
$\boldsymbol x=(x_1,x_2,x_3)^T$ および二次形式

$$
Q=2x_1^2+5x_2^2+2x_3^2-2x_1x_2-2x_2x_3+4x_3x_1
$$

について、次を求める。

(a) $Q=\boldsymbol x^TA\boldsymbol x$ を満たす対称行列 $A$。

(b) $A$ の全固有値と、それぞれに属する単位固有ベクトル。

(c) $\boldsymbol x^T\boldsymbol x=1$ の下での $Q$ の最大値と、その理由。

### 1-2)
定数 $a,b,c$ に対し、デカルト座標の単位ベクトルを $\boldsymbol i,\boldsymbol j,\boldsymbol k$ として
$\boldsymbol B=ax\boldsymbol i+by\boldsymbol j+cz\boldsymbol k$ を考える。

(a) $\operatorname{div}\boldsymbol B$ と $\operatorname{curl}\boldsymbol B$ を求める。

(b) 原点中心・半径 $r$ の上半球面 $S$（$z\ge0$、底面を含まない）について、原点側を内側とした外向き単位法線を点 $(x,y,z)$ で表す。

(c) (b) の面 $S$ に対する通量 $\iint_S\boldsymbol B\cdot\boldsymbol n\,dA$ を求める。$dA$ は面積要素である。

### 题目描述

**1-1. 二次型与特征值**：令 $\boldsymbol x=(x_1,x_2,x_3)^\top$，考虑

$$
Q=2x_1^2+5x_2^2+2x_3^2-2x_1x_2-2x_2x_3+4x_3x_1.
$$

1. 求满足 $Q=\boldsymbol x^\top A\boldsymbol x$ 的对称矩阵 $A$。
2. 求 $A$ 的全部特征值和相应单位特征向量。
3. 在 $\boldsymbol x^\top\boldsymbol x=1$ 的条件下求 $Q$ 的最大值，并说明理由。

**1-2. 向量分析**：给定常数 $a,b,c$，令 $\boldsymbol B=(ax,by,cz)$。

1. 求 $\operatorname{div}\boldsymbol B$ 和 $\operatorname{curl}\boldsymbol B$。
2. 对以原点为球心、半径为 $r$ 的上半球面 $S$（$z\ge0$，不含底面），写出点 $(x,y,z)$ 处的外向单位法向量。
3. 求穿过该半球面的通量 $\iint_S\boldsymbol B\cdot\boldsymbol n\,dA$。

## **Kai**
### 1-1)
#### (a)

$$
  \begin{align}
  A = \begin{pmatrix} 2 & -1 & 2 \\ -1 & 5 & -1 \\ 2 & -1 & 2 \end{pmatrix}
  \end{align}
$$

#### (b)
$A$ の固有値を $a$ とすると、

$$
\begin{align}
0
&= \det
\begin{pmatrix} 2-a & -1 & 2 \\ -1 & 5-a & -1 \\ 2 & -1 & 2-a \end{pmatrix}
\\
&= -a^3 + 9a^2 - 18a
\\
&= -a(a-3)(a-6)
\\
\therefore \ \ 
a &= 0, 3, 6
\end{align}
$$

である。
固有値 $a=0,3,6$ に属する大きさ $1$ の固有ベクトルは、それぞれ、

$$
\begin{align}
\frac{1}{\sqrt{2}}
\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}
, \ \ 
\frac{1}{\sqrt{3}}
\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}
, \ \ 
\frac{1}{\sqrt{6}}
\begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}
\end{align}
$$

である。

#### (c)
$A$ の最大の固有値は $6$ であるから、
$\boldsymbol{x}^T\boldsymbol{x}=1$ のときの $Q$ の最大値は $6$ である。実際、上記の正規直交固有ベクトルを $\boldsymbol u_0,\boldsymbol u_3,\boldsymbol u_6$ として $\boldsymbol x=\sum_\lambda d_\lambda\boldsymbol u_\lambda$ と書けば、$\sum_\lambda d_\lambda^2=1$ であり、$Q=3d_3^2+6d_6^2\le6$ となる。$\boldsymbol x=\pm\boldsymbol u_6$ で等号が成立する。

### 1-2)

#### (a)

$$
\operatorname{div}\boldsymbol B=a+b+c,\qquad
\operatorname{curl}\boldsymbol B=\boldsymbol0.
$$

#### (b)

球面上では $x^2+y^2+z^2=r^2$ なので、

$$
\boldsymbol n=\frac1r(x,y,z).
$$

#### (c)

上半球内部を $V$ とし、赤道の円板 $D$ を加えて閉曲面を作る。$D$ 上では $z=0$ であり、下向き法線に対する通量は $-cz=0$ である。発散定理より、

$$
\iint_S\boldsymbol B\cdot\boldsymbol n\,dA
=\iiint_V(a+b+c)\,dV
=\boxed{\frac{2\pi r^3}{3}(a+b+c)}.
$$
