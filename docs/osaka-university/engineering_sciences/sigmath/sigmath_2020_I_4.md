---
sidebar_label: "2020年度 数理科学 I [4]"
sidebar_position: 2
tags:
  - Osaka-University
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2020年度 数理科学 I \[4\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (1)
まず、 $y(0)=0$ から $C_0=0$ がわかる。
よって、

$$
  \begin{aligned}
  y(x) &= \sum_{k=1}^\infty C_k x^k
  \\
  \frac{dy(x)}{dx} &= \sum_{k=1}^\infty k C_k x^{k-1}
  \end{aligned}
$$

となる。
これを与えられた微分方程式に代入すると、

$$
  \begin{align}
  \sum_{k=1}^\infty k C_k x^{k-1}
  + \sum_{k=1}^\infty (-2 C_k) x^{k+1}
  = 2x^3
  \tag{A} \label{A}
  \end{align}
$$

となる。

($\ref{A}$)式の定数項に注目すると、 $1 C_1 = 0$ であるから、
$C_1=0$ がわかる。

($\ref{A}$)式の $x$ の項に注目すると、 $2C_2=0$ であるから、
$C_2=0$ がわかる。

($\ref{A}$)式の $x^2$ の項に注目すると、 $3C_3-2C_1=0$ であるから、
$C_1=0$ より $C_3=0$ がわかる。

($\ref{A}$)式の $x^3$ の項に注目すると、 $4C_4-2C_2=2$ であるから、
$C_2=0$ より $C_4=1/2$ がわかる。

### (2)
$j$ を非負の整数とする。
($\ref{A}$)式の $x^{2j+2}$ の項に注目すると、

$$
  \begin{aligned}
  (2j+3) C_{2j+3} - 2 C_{2j+1} &= 0
  \end{aligned}
  \begin{aligned}
  \therefore \ \ 
  C_{2j+3} &= \frac{2}{2j+3} C_{2j+1}
  \end{aligned}
$$

がわかる。
さらに $C_1=0$ であるから、

$$
  \begin{aligned}
  C_{2j+1} &= 0
  \end{aligned}
$$

がわかる。

### (3)
$j$ を $2$ 以上の整数とする。
($\ref{A}$)式の $x^{2j+1}$ の項に注目すると、

$$
  \begin{aligned}
  (2j+2) C_{2j+2} - 2 C_{2j} &= 0
  \end{aligned}
  \begin{aligned}
  \therefore \ \ 
  C_{2j+2} &= \frac{1}{j+1} C_{2j}
  \end{aligned}
$$

がわかる。
さらに $C_4=1/2$ であるから、

$$
  \begin{aligned}
  C_{2j} &= \frac{1}{j!}
  \end{aligned}
$$

がわかる。

### (4)
(1), (2), (3) より、

$$
  \begin{aligned}
  y(x)
  &=
  \sum_{j=2}^\infty \frac{1}{j!} x^{2j}
  \\
  &=
  \sum_{j=0}^\infty \frac{1}{j!} \left( x^2 \right)^j
  - \left( 1 + x^2 \right)
  \\
  &=
  \exp \left( x^2 \right) - x^2 - 1
  \end{aligned}
$$

を得る。
これが与えられた微分方程式と条件を満たすことも確かめられる。