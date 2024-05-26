---
comments: false
title: 九州大学 数理学府 数理学コース 2024年度 基礎科目 [1]
tags:
  - Kyushu-University
---
# 九州大学 数理学府 数理学コース 2024年度 基礎科目 \[1\]

## **Author**
Miyake

## **Description**
$a \in \mathbb{R}$ とし $A = \begin{pmatrix} a & a & 1 \\ a & 1 & a \\ 1 & a & a  \end{pmatrix}$ とする．このとき，以下の問に答えよ．

(1) $A$ の固有値をすべて求めよ．

(2) Aの固有値が $3, −3, −3$ となるような $a$ を選ぶ．このとき，直交行列を用いて $A$ を対角化せよ．

## **Kai**
### (1)
$A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
&= \det \begin{pmatrix}
a - \lambda & a & 1 \\ a & 1 - \lambda & a \\ 1 & a & a - \lambda
\end{pmatrix}
\\
&= - (\lambda - a + 1)(\lambda + a - 1)(\lambda - 2a - 1)
\\
\therefore \ \ 
\lambda &= a-1, -a+1, 2a+1
\end{aligned}
$$

である。

### (2)
$a-1=3$ とすると $a=4$ であり $2a+1=9$ となって条件を満たさない。

$-a+1=3$ とすると $a=-2$ であり $a-1=2a+1=-3$ となって条件を満たす。

$2a+1=3$ とすると $a=1$ であり $a-1=0$ となって条件を満たさない。

よって、条件を満たすのは $a=-2$ のときのみである。

$a=-2$ のとき、

$$
\begin{aligned}
A
&= \begin{pmatrix} -2 & -2 & 1 \\ -2 & 1 & -2 \\ 1 & -2 & -2 \end{pmatrix}
\end{aligned}
$$

である。

固有値 $3$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{pmatrix} -5 & -2 & 1 \\ -2 & -2 & -2 \\ 1 & -2 & -5 \end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、 $y=-2x, z=x$ を得るので、規格化された固有ベクトルとして

$$
\begin{aligned}
\boldsymbol{v}_1 = \frac{1}{\sqrt{6}}
\begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}
\end{aligned}
$$

がある。

固有値 $-3$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{pmatrix} 1 & -2 & 1 \\ -2 & 4 & -2 \\ 1 & -2 & 1 \end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、 $x-2y+z=0$ を得る。
1次独立な2つの固有ベクトルとして

$$
\begin{aligned}
\boldsymbol{u}_2 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}
, \ \ 
\boldsymbol{u}_3 = \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}
\end{aligned}
$$

があるが、これらは直交していない。
そこで、

$$
\begin{aligned}
\boldsymbol{u}'_3
&= \boldsymbol{u}_3 - \frac{
\left( \boldsymbol{u}_3 \cdot \boldsymbol{u}_2 \right) \boldsymbol{u}_2
}{\left| \boldsymbol{u}_2 \right|^2}
\\
&= \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}
\end{aligned}
$$

とおくと、これは $\boldsymbol{u}_2$ と直交する固有ベクトルである。
さらに、規格化して、

$$
\begin{aligned}
\boldsymbol{v}_2
= \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}
, \ \ 
\boldsymbol{v}_3 
= \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}
\end{aligned}
$$

とする。

以上より、

$$
\begin{aligned}
P
&= \begin{pmatrix}
\boldsymbol{v}_1 & \boldsymbol{v}_2 & \boldsymbol{v}_3
\end{pmatrix}
\\
&= \begin{pmatrix}
\frac{1}{\sqrt{6}} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{3}} \\
- \frac{2}{\sqrt{6}} & 0 & \frac{1}{\sqrt{3}} \\
\frac{1}{\sqrt{6}} & - \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{3}}
\end{pmatrix}
\end{aligned}
$$

が求める直交行列であり、

$$
\begin{aligned}
P^{-1} A P
&= \begin{pmatrix} 3 & 0 & 0 \\ 0 & -3 & 0 \\ 0 & 0 & -3 \end{pmatrix}
\end{aligned}
$$

が成り立つ。