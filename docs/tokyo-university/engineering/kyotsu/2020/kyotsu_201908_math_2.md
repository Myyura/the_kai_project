---
sidebar_label: '数学 第2問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Matrix-Trace
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
  - Mathematics.Linear-Algebra.Rayleigh-Quotient
  - Mathematics.Linear-Algebra.Quadratic-Form
---

# 東京大学 工学系研究科 2020年度 数学 第2問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

### 問題

$\alpha$ を実数とし、次の行列を考える。

$$
A=\begin{pmatrix}1&-2&-1\\-2&1&1\\-1&1&\alpha\end{pmatrix}.
$$

I. 三つの固有値の和が $7$ となる $\alpha$ を求めよ。

II. 三つの固有値の積が $-16$ となる $\alpha$ を求めよ。

III. $\|A\|=\max_{\boldsymbol x^T\boldsymbol x=1}\boldsymbol x^TA\boldsymbol x$ と定める。$\|A\|=4$ となる $\alpha$ を求めよ。

IV. 以下では $\alpha=4$ とする。

1. すべての固有値と、それぞれに対応する単位固有ベクトルを求めよ。
2. $\boldsymbol y^T\boldsymbol y=1$、$y_1-y_2-2y_3=0$ のとき、$\boldsymbol y^TA\boldsymbol y$ の値域を求めよ。
3. $\boldsymbol z^T\boldsymbol z=1$、$z_1+z_2+z_3=0$ のとき、$\boldsymbol z^TA\boldsymbol z$ の値域を求めよ。

#### 题目描述

设 $\alpha$ 为实数，

$$
A=\begin{pmatrix}1&-2&-1\\-2&1&1\\-1&1&\alpha\end{pmatrix}.
$$

I. 若三个特征值之和为 $7$，求 $\alpha$。

II. 若三个特征值之积为 $-16$，求 $\alpha$。

III. 定义 $\|A\|=\max_{\boldsymbol x^T\boldsymbol x=1}\boldsymbol x^TA\boldsymbol x$。若 $\|A\|=4$，求 $\alpha$。

IV. 以下取 $\alpha=4$。

1. 求全部特征值及相应的单位特征向量。
2. 当 $\boldsymbol y^T\boldsymbol y=1$、$y_1-y_2-2y_3=0$ 时，求 $\boldsymbol y^TA\boldsymbol y$ 的值域。
3. 当 $\boldsymbol z^T\boldsymbol z=1$、$z_1+z_2+z_3=0$ 时，求 $\boldsymbol z^TA\boldsymbol z$ 的值域。

## **Kai**

### I–II.

固有値の和はトレース、積は行列式に等しい。したがって

$$
\operatorname{tr}A=2+\alpha=7\ \Longrightarrow\ \boxed{\alpha=5},
$$

$$
\det A=2-3\alpha=-16\ \Longrightarrow\ \boxed{\alpha=6}.
$$

### III.

$A$ は実対称行列なので、指定された最大値は最大固有値に等しい。よって

$$
\det(A-4I)=5\alpha-10=0.
$$

$\alpha=2$ のとき固有値は $-1,1,4$ となり、条件を満たす。したがって $\boxed{\alpha=2}$ である。

### IV.

1. 固有値は $-1,2,5$ であり、対応する単位固有ベクトルは例えば

$$
\boxed{v_1=\frac1{\sqrt2}\begin{pmatrix}1\\1\\0\end{pmatrix},\quad
v_2=\frac1{\sqrt3}\begin{pmatrix}1\\-1\\1\end{pmatrix},\quad
v_3=\frac1{\sqrt6}\begin{pmatrix}-1\\1\\2\end{pmatrix}}.
$$

2. 制約平面は $v_3^\perp=\operatorname{span}(v_1,v_2)$ なので、

$$
\boxed{-1\le\boldsymbol y^TA\boldsymbol y\le2}.
$$

3. $z_3=-z_1-z_2$ を代入して

$$
\boldsymbol z^T\boldsymbol z=2(z_1^2+z_1z_2+z_2^2),\qquad
\boldsymbol z^TA\boldsymbol z=7z_1^2+4z_1z_2+3z_2^2.
$$

極値は、次の一般化固有値方程式の2根である。

$$
\det\left[\begin{pmatrix}7&2\\2&3\end{pmatrix}
-\lambda\begin{pmatrix}2&1\\1&2\end{pmatrix}\right]
=3\lambda^2-16\lambda+17=0
$$

したがって、値域は

$$
\boxed{\frac{8-\sqrt{13}}3\le\boldsymbol z^TA\boldsymbol z\le\frac{8+\sqrt{13}}3}.
$$

