---
sidebar_label: '数学 第2問'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2020年度 数学 第2問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

[公式原題](https://www.t.u-tokyo.ac.jp/hubfs/pdf/%E6%95%B0%E5%AD%A62020.pdf)

実数 $\alpha$ に対し
$$A=\begin{pmatrix}1&-2&-1\\-2&1&1\\-1&1&\alpha\end{pmatrix}$$
を考える。

I. 固有値の和が $7$ となる $\alpha$ を求める。

II. 固有値の積が $-16$ となる $\alpha$ を求める。

III. $\|A\|=\max_{\boldsymbol x^T\boldsymbol x=1}\boldsymbol x^TA\boldsymbol x$ と定義する。$\|A\|=4$ となる $\alpha$ を求める。

IV. 以降は $\alpha=4$ とする。

1. 全固有値と規格化した固有ベクトルを求める。
2. $\boldsymbol y^T\boldsymbol y=1$、$y_1-y_2-2y_3=0$ のもとで $\boldsymbol y^TA\boldsymbol y$ の値域を求める。
3. $\boldsymbol z^T\boldsymbol z=1$、$z_1+z_2+z_3=0$ のもとで $\boldsymbol z^TA\boldsymbol z$ の値域を求める。

### 题目描述

原 Description 仅提供 2020 年数学原卷链接。原卷の行列は

$$
A=\begin{pmatrix}
1&-2&-1\\
-2&1&1\\
-1&1&\alpha
\end{pmatrix}.
$$

であり、$\alpha$ は実数である。各問の条件は次の通り：

1. 固有値の和が $7$ であるときの $\alpha$。
2. 固有値の積が $-16$ であるときの $\alpha$。
3. $\boldsymbol x^T\boldsymbol x=1$ における $\boldsymbol x^TA\boldsymbol x$ の最大値を $\lVert A\rVert$ と定め、$\lVert A\rVert=4$ であるときの $\alpha$。
4. $\alpha=4$ とし、固有値・規格化固有ベクトル、および指定された二つの平面上での二次形式の値域を求める。

## **Kai**
### I.
固有値の和はトレースに等しいので、$\alpha = 5$

### II.
固有値の積は行列式に等しいので、

$$
\begin{aligned}
-16
&= (\alpha + 2 + 2) - (1 + 1 + 4 \alpha)
\\
&= - 3 \alpha + 2
\\
\therefore \ \ 
\alpha &= 6
\end{aligned}
$$

### III.
$||A||=4$ ということは、 $A$ の最大固有値が $4$ ということである。

$A$ が固有値 $4$ を持つという条件は、

$$
\begin{aligned}
0
&= \det \begin{pmatrix}
1-4 & -2 & -1 \\ -2 & 1-4 & 1 \\ -1 & 1 & \alpha-4
\end{pmatrix}
\\
&= 5 \alpha - 10
\\
\therefore \ \ 
\alpha &= 2
\end{aligned}
$$

である。

$\alpha=2$ のとき、 $A$ の固有値は $-1, 1, 4$ であるから、
これが求める条件であることがわかる。

### IV.
#### 1.
固有値は $-1, 2, 5$ であり、
それぞれに対応する規格化された固有ベクトルは、

$$
\begin{aligned}
\boldsymbol{v}_1
= \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}
, \ \ 
\boldsymbol{v}_2
= \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}
, \ \ 
\boldsymbol{v}_3
= \frac{1}{\sqrt{6}} \begin{pmatrix} -1 \\ 1 \\ 2 \end{pmatrix}
\end{aligned}
$$

である。（ $-1$ 倍の不定性がある。）

#### 2.
与えられたベクトル $\boldsymbol{y}$ は
$\boldsymbol{v}_1, \boldsymbol{v}_2$ が張る平面上にあるので、
$\boldsymbol{y}^T A \boldsymbol{y}$ の値域は
$-1$ 以上 $2$ 以下の実数である。

#### 3.

$z_3=-z_1-z_2$ とおくと、

$$
\boldsymbol z^T\boldsymbol z
=2(z_1^2+z_1z_2+z_2^2),
\qquad
\boldsymbol z^TA\boldsymbol z
=7z_1^2+4z_1z_2+3z_2^2.
$$

この平面上の固有値は

$$
\det\left(
\begin{pmatrix}7&2\\2&3\end{pmatrix}
-\lambda\begin{pmatrix}2&1\\1&2\end{pmatrix}
\right)
=3\lambda^2-16\lambda+17=0
$$

の二根である。したがって、値域は

$$
\frac{8-\sqrt{13}}{3}
\le \boldsymbol z^TA\boldsymbol z
\le \frac{8+\sqrt{13}}{3}
$$

である。
