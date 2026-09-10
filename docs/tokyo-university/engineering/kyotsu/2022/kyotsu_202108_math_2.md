---
sidebar_label: '2021年8月実施 数学2'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Simultaneous-Diagonalization-of-Commuting-Operators
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Calculus.Triple-Integral
---

# 東京大学 工学系研究科 2021年8月実施 数学2

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

[公式原題](https://www.t.u-tokyo.ac.jp/hubfs/graduate/2022/kakomon/2022_M_2.pdf)

### I.

$$
A=\begin{pmatrix}7&-2&1\\-2&10&-2\\1&-2&7\end{pmatrix},\qquad
B=\begin{pmatrix}5&-1&-1\\-1&5&-1\\-1&-1&5\end{pmatrix}.
$$

1. $AB$ を計算する。
2. 互いに可換な実対称行列が同時対角化できることを、各行列の固有値がすべて異なる場合について証明する。
3. $\|\boldsymbol v\|=1$、$A\boldsymbol v=a\boldsymbol v$、$B\boldsymbol v=b\boldsymbol v$ を満たす実ベクトルと固有値の組 $(\boldsymbol v,a,b)$ をすべて求める。

### II.

$$
f(x,y,z)=2(x^2+y^2+z^2)+4yz+\frac{z-y}{\sqrt2}
$$

とする。

1. $f=\boldsymbol x^TA\boldsymbol x+2\boldsymbol b^T\boldsymbol x$ の実対称行列 $A$ と $\boldsymbol b$ を求める。
2. $A=P^TDP$、$P$ は直交行列、$D=\operatorname{diag}(d_1,d_2,d_3)$、$d_1\ge d_2\ge d_3$ とする一組を求める。
3. $(X,Y,Z)^T=P(x,y,z)^T$ を使って $f$ を表す。
4. $f=0$ と平面 $y-z-\sqrt2=0$ が囲む領域を図示し、体積を求める。

#### 题目描述

I. 设 $A=\begin{pmatrix}7&-2&1\\-2&10&-2\\1&-2&7\end{pmatrix}$、$B=\begin{pmatrix}5&-1&-1\\-1&5&-1\\-1&-1&5\end{pmatrix}$。
(1) 计算 $AB$。
(2) 对各自具有互异特征值的两个可交换实对称矩阵，证明它们可同时正交对角化。
(3) 求所有实单位向量 $\boldsymbol v$ 与实数 $a,b$ 的组合，使 $A\boldsymbol v=a\boldsymbol v,B\boldsymbol v=b\boldsymbol v$。

II. 令 $f(x,y,z)=2(x^2+y^2+z^2)+4yz+(z-y)/\sqrt2$。
(1) 写成 $\boldsymbol x^TA\boldsymbol x+2\boldsymbol b^T\boldsymbol x$，求对称矩阵 $A$ 与向量 $\boldsymbol b$。
(2) 求正交矩阵 $P$ 与降序对角矩阵 $D$，使 $A=P^TDP$。
(3) 用 $(X,Y,Z)^T=P(x,y,z)^T$ 表示 $f$。
(4) 图示并求 $f=0$ 与平面 $y-z-\sqrt2=0$ 所围区域的体积。

## **Kai**

### I

#### 1

$$
\boxed{AB=\begin{pmatrix}36&-18&0\\-18&54&-18\\0&-18&36\end{pmatrix}}.
$$

#### 2

$C,D$ を可換な実対称行列とし、$C$ の固有値は互いに異なるとする。
$C\boldsymbol v_j=c_j\boldsymbol v_j$ ならば、
$C(D\boldsymbol v_j)=D(C\boldsymbol v_j)=c_jD\boldsymbol v_j$。
$c_j$ の固有空間は一次元なので $D\boldsymbol v_j=d_j\boldsymbol v_j$ と書ける。
従って $C$ の正規直交固有基底は $D$ の固有基底でもある。
これらを列に持つ直交行列により、両行列は同時に対角化される。

#### 3

ここで、

$$
\boldsymbol u_1=\frac1{\sqrt6}(1,-2,1)^T,\quad
\boldsymbol u_2=\frac1{\sqrt3}(1,1,1)^T,\quad
\boldsymbol u_3=\frac1{\sqrt2}(1,0,-1)^T.
$$

直接計算すると、これらは正規直交基底をなし、

$$
A\boldsymbol u_j=a_j\boldsymbol u_j,\quad
B\boldsymbol u_j=b_j\boldsymbol u_j,\quad
(a_1,b_1)=(12,6),\ (a_2,b_2)=(6,3),\ (a_3,b_3)=(6,6).
$$

三つの固有値の組は相異なるので、各共通固有空間は一次元である。すべての解は

$$
\boxed{(\boldsymbol v,a,b)=(\pm\boldsymbol u_1,12,6),\
(\pm\boldsymbol u_2,6,3),\ (\pm\boldsymbol u_3,6,6)}.
$$

### II

#### 1–2

二次項と一次項の係数比較により、

$$
\boxed{A=\begin{pmatrix}2&0&0\\0&2&2\\0&2&2\end{pmatrix},\qquad
\boldsymbol b=\frac1{2\sqrt2}\begin{pmatrix}0\\-1\\1\end{pmatrix}}.
$$

固有値は $4,2,0$ であり、次のように取れる。

$$
\boxed{D=\operatorname{diag}(4,2,0),\qquad
P=\begin{pmatrix}0&1/\sqrt2&1/\sqrt2\\1&0&0\\0&1/\sqrt2&-1/\sqrt2\end{pmatrix}}.
$$

このとき $PP^T=I$、$A=P^TDP$ が成り立つ。

#### 3–4

新座標は $X=(y+z)/\sqrt2,Y=x,Z=(y-z)/\sqrt2$ なので、

$$
\boxed{f=4X^2+2Y^2-Z}.
$$

平面は $Z=1$ となり、囲まれる領域は $4X^2+2Y^2\le Z\le1$ である。
高さ $Z$ の断面楕円の半軸は $\sqrt Z/2,\sqrt{Z/2}$ である。
直交変換は体積を保存するから、

$$
\boxed{V=\int_0^1\frac{\pi Z}{2\sqrt2}\,dZ=\frac\pi{4\sqrt2}}.
$$

![直交座標における楕円放物面と断面](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2022/kyotsu_202108_math_2_paraboloid.svg)
