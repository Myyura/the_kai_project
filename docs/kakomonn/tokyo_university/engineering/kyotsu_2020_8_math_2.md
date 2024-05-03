---
comments: false
description: 東京大学 大学院 工学系研究科 2020年度 数学 第2問
keywords: Tokyo-University, 2020-8
---

## Source
[東京大学 大学院 工学系研究科 2020年度 数学 第2問](https://www.t.u-tokyo.ac.jp/soe/admission/general-past)

## Description

## Kai
### I.
固有値の和はトレースに等しいので、$\alpha = 5$

### II.
固有値の積は行列式に等しいので、

$$
\begin{align}
-16
&= (\alpha + 2 + 2) - (1 + 1 + 4 \alpha)
\\
&= - 3 \alpha + 2
\\
\therefore \ \ 
\alpha &= 6
\end{align}
$$

### III.
$||A||=4$ ということは、 $A$ の最大固有値が $4$ ということである。

$A$ が固有値 $4$ を持つという条件は、

$$
\begin{align}
0
&= \det \begin{pmatrix}
1-4 & -2 & -1 \\ -2 & 1-4 & 1 \\ -1 & 1 & \alpha-4
\end{pmatrix}
\\
&= 5 \alpha - 10
\\
\therefore \ \ 
\alpha &= 2
\end{align}
$$

である。

$\alpha=2$ のとき、 $A$ の固有値は $-1, 1, 4$ であるから、
これが求める条件であることがわかる。

### IV.
#### 1.
固有値は $-1, 2, 5$ であり、
それぞれに対応する規格化された固有ベクトルは、

$$
\begin{align}
\boldsymbol{v}_1
= \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}
, \ \ 
\boldsymbol{v}_2
= \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}
, \ \ 
\boldsymbol{v}_3
= \frac{1}{\sqrt{6}} \begin{pmatrix} -1 \\ 1 \\ 2 \end{pmatrix}
\end{align}
$$

である。（ $-1$ 倍の不定性がある。）

#### 2.
与えられたベクトル $\boldsymbol{y}$ は
$\boldsymbol{v}_1, \boldsymbol{v}_2$ が張る平面上にあるので、
$\boldsymbol{y}^T A \boldsymbol{y}$ の値域は
$-1$ 以上 $2$ 以下の実数である。

#### 3.