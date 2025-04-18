---
sidebar_label: "2021年8月実施 数学 問1"
tags:
  - Kyushu-University
---
# 九州大学 工学府 機械系専攻 2021年8月実施 数学 問1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
次の行列 $A \in \mathbb{R}^{3 \times 3}$ について，以下の問いに答えよ．ただし $x$ は実数とする．

(1) $T^{\top} A T$ が対角行列となる直交行列 $T \in \mathbb{R}^{3 \times 3}$ を求めよ．

(2) 任意のベクトル $y \in \mathbb{R}^3$ について，$y^{\top} A y \ge 0$ となるための $x$ の範囲を求めよ．

(3) (2) で求めた $x$ の範囲を満たす最小値を $x$ に代入した行列 $A$ を $A_m$ とするとき，行列 $\{A_m\}^6 \in \mathbb{R}^{3 \times 3}$ を求めよ.

## **Kai**
### (1)
$A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
&= \det \begin{pmatrix}
x - \lambda & 1 & 0 \\ 1 & x - \lambda & 1 \\ 0 & 1 & x - \lambda
\end{pmatrix}
\\
&= (x - \lambda)^3 - 2(x - \lambda)
\\
&= - (\lambda - x) (\lambda - (x - \sqrt{2})) (\lambda - (x + \sqrt{2}))
\\
\therefore \ \ 
\lambda &= x , x \pm \sqrt{2}
\end{aligned}
$$

である。

固有値 $x$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}
\begin{pmatrix} u \\ v \\ w \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、 $u+w=0, v=0$ を得る。

固有値 $x-\sqrt{2}$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{pmatrix}
\sqrt{2} & 1 & 0 \\ 1 & \sqrt{2} & 1 \\ 0 & 1 & \sqrt{2}
\end{pmatrix}
\begin{pmatrix} u \\ v \\ w \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、 $u=w, v=-\sqrt{2}u$ を得る。

固有値 $x+\sqrt{2}$ に属する固有ベクトルを求めるため

$$
\begin{aligned}
\begin{pmatrix}
-\sqrt{2} & 1 & 0 \\ 1 & -\sqrt{2} & 1 \\ 0 & 1 & -\sqrt{2}
\end{pmatrix}
\begin{pmatrix} u \\ v \\ w \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、 $u=w, v=\sqrt{2}u$ を得る。

よって、

$$
\begin{aligned}
T = \frac{1}{2}
\begin{pmatrix}
\sqrt{2} & 1 & 1 \\ 0 & -\sqrt{2} & \sqrt{2} \\ -\sqrt{2} & 1 & 1
\end{pmatrix}
\end{aligned}
$$

とおくと、

$$
\begin{aligned}
T^\mathrm{T} A T =
\begin{pmatrix}
x & 0 & 0 \\ 0 & x-\sqrt{2} & 0 \\ 0 & 0 & x+\sqrt{2}
\end{pmatrix}
\end{aligned}
$$

が成り立つ。

### (2)
任意の $y \in \mathbb{R}^3$ について $y^\mathrm{T} A y \geq 0$
が成り立つための必要十分条件は、
$A$ の固有値がすべて $0$ 以上であることである。
よって、求める範囲は $x - \sqrt{2} \geq 0$ すなわち
$x \geq \sqrt{2}$ である。

### (3)

$$
  \begin{aligned}
  A_m &= \begin{pmatrix}
  \sqrt{2} & 1 & 0 \\ 1 & \sqrt{2} & 1 \\ 0 & 1 & \sqrt{2}
  \end{pmatrix}
  \end{aligned}
$$

であり、

$$
  \begin{aligned}
  \left\{ A_m \right\}^6
  &= T \begin{pmatrix}
  \sqrt{2} & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 2 \sqrt{2}
  \end{pmatrix}^6 T^\mathrm{T}
  \\
  &= T \begin{pmatrix}
  8 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 512
  \end{pmatrix} T^\mathrm{T}
  \\
  &= \begin{pmatrix}
  132 & 128 \sqrt{2} & 124 \\
  128 \sqrt{2} & 256 & 128 \sqrt{2} \\
  124 & 128 \sqrt{2} & 132
  \end{pmatrix}
  \end{aligned}
$$

である。