---
comments: false
title: 北海道大学 理学院 物性物理学専攻・宇宙理学専攻 2021年度 問題 V
tags:
  - Hokkaido-University
---
# 北海道大学 理学院 物性物理学専攻・宇宙理学専攻 2021年度 問題 V

## **Author**
Miyake

## **Description**

## **Kai**
### 問1
#### 1-1.
掃き出し法により、次のように求められる：

$$
  \begin{aligned}
  &
  \begin{pmatrix}
  1 & 3 & 2 & 1 & 0 & 0 \\
  2 & 5 & 4 & 0 & 1 & 0 \\
  3 & 6 & 5 & 0 & 0 & 1
  \end{pmatrix}
  \\
  &
  \begin{pmatrix}
  1 &  3 &  2 &  1 & 0 & 0 \\
  0 & -1 &  0 & -2 & 1 & 0 \\
  0 & -3 & -1 & -3 & 0 & 1
  \end{pmatrix}
  \\
  &
  \begin{pmatrix}
  1 & 0 &  2 & -5 &  3 & 0 \\
  0 & 1 &  0 &  2 & -1 & 0 \\
  0 & 0 & -1 &  3 & -3 & 1
  \end{pmatrix}
  \\
  &
  \begin{pmatrix}
  1 & 0 & 0 &  1 & -3 &  2 \\
  0 & 1 & 0 &  2 & -1 &  4 \\
  0 & 0 & 1 & -3 &  3 & -1
  \end{pmatrix}
  \end{aligned}
$$

$$
  \begin{aligned}
  \therefore \ \ 
  \begin{pmatrix}
  1 & 3 & 2 \\
  2 & 5 & 4 \\
  3 & 6 & 5
  \end{pmatrix}^{-1}
  =
  \begin{pmatrix}
   1 & -3 &  2 \\
   2 & -1 &  4 \\
  -3 &  3 & -1
  \end{pmatrix}
  \end{aligned}
$$

<p>
[参考]
<a href="https://www.amazon.co.jp/dp/490381419X/ref=nosim?tag=msscee0a-22">
千葉逸人「工学部で学ぶ数学」
</a>
</p>

#### 1-2.
与えられた微分方程式の右辺を $0$ とおいた式に
$y=e^{\lambda x}$ （ $\lambda$ は $x$ によらない定数）
を代入すると $\lambda = \pm \sqrt{3}$ を得るので、
この微分方程式の一般解は、積分定数を $A,B$ として、

$$
\begin{aligned}
y = A e^{\sqrt{3} x} + B e^{- \sqrt{3} x}
\end{aligned}
$$

である。
また、与えられた微分方程式に $y = C \sin x + D \cos x$
（ $C,D$ は $x$ によらない定数）を代入すると
$C=1,D=0$ を得るので $y = \sin x$ が特殊解であることがわかる。
以上より、与えられた微分方程式の一般解は、積分定数を $A,B$ として、

$$
\begin{aligned}
y = A e^{\sqrt{3} x} + B e^{- \sqrt{3} x} + \sin x
\end{aligned}
$$

であることがわかる。

#### 1-3.

<ul>
  <li>
  <a href="https://www.amazon.co.jp/dp/490381419X/ref=nosim?tag=msscee0a-22">
    千葉逸人「工学部で学ぶ数学」 例 4.18
  </a>
  </li>
  <li>
  <a href="https://www.amazon.co.jp/dp/4785310898/ref=nosim?tag=msscee0a-22">
    矢野・石原「複素解析」 4.3.IV
  </a>
  </li>
  <li>
  <a href="https://www.amazon.co.jp/dp/4320031423/ref=nosim?tag=msscee0a-22">
    後藤・山本・神吉「詳解 物理応用数学 演習」 4 [42]
  </a>
  </li>
</ul>

### 問2
まず、 $r^2 = x^2 + y^2 + z^2$ より、

$$
\begin{aligned}
\frac{\partial r}{\partial x} = \frac{x}{r}
, \ \ 
\frac{\partial r}{\partial y} = \frac{y}{r}
, \ \ 
\frac{\partial r}{\partial z} = \frac{z}{r}
\end{aligned}
$$

であり、また、 $r$ の関数 $f(r)$ について

$$
\begin{aligned}
\frac{\partial f}{\partial x} = \frac{x}{r} \frac{df}{dr}
, \ \ 
\frac{\partial f}{\partial y} = \frac{y}{r} \frac{df}{dr}
, \ \ 
\frac{\partial f}{\partial z} = \frac{z}{r} \frac{df}{dr}
\end{aligned}
$$

である。

#### 2-1.

$$
\begin{aligned}
\frac{\partial}{\partial x} \left( f(r) x \right)
= \frac{x^2}{r} \frac{df}{dr} + f
\end{aligned}
$$

などが成り立つから、与えられた式が成り立つことがわかる。

#### 2-2.

$$
\begin{aligned}
\frac{\partial}{\partial x} \left( f(r) y \right)
= \frac{xy}{r} \frac{df}{dr}
\end{aligned}
$$

などが成り立つから、与えられた式が成り立つことがわかる。

### 問3
#### 3-1.
まず、 $m = 1, 2, \cdots$ について、

$$
\begin{aligned}
\int_{- \pi}^\pi \cos mx \ dx = 0
, \ \ 
\int_{- \pi}^\pi \sin mx \ dx = 0
\end{aligned}
$$

が成り立つから、与えられたフーリエ級数展開の式の両辺を
$x$ について $- \pi$ から $\pi$ まで積分することで

$$
\begin{aligned}
a_0 = \frac{1}{\pi} \int_{- \pi}^\pi f(x) dx
\end{aligned}
$$

がわかる。

次に、 $m,n = 1, 2, \cdots$ について、

$$
\begin{aligned}
\int_{- \pi}^\pi \cos mx \cos nx \ dx
&= \frac{1}{2} \int_{- \pi}^\pi \left[ \cos (m+n)x + \cos (m-n)x \right] dx
= \pi \delta_{m,n}
\\
\int_{- \pi}^\pi \sin mx \sin nx \ dx
&= \frac{1}{2} \int_{- \pi}^\pi \left[ - \cos (m+n)x + \cos (m-n)x \right] dx
= \pi \delta_{m,n}
\\
\int_{- \pi}^\pi \sin mx \cos nx \ dx
&= \frac{1}{2} \int_{- \pi}^\pi \left[ \sin (m+n)x + \sin (m-n)x \right] dx
= 0
\end{aligned}
$$

が成り立つ（ $\delta_{m,n}$ はクロネッカーのデルタ）から、
$n = 1, 2, \cdots$ について、与えられたフーリエ級数展開の式の両辺に、
$\cos nx$ をかけて $x$ について $- \pi$ から $\pi$ まで積分することで

$$
\begin{aligned}
a_n = \frac{1}{\pi} \int_{- \pi}^\pi f(x) \cos nx \ dx
\end{aligned}
$$

がわかり、
$\sin nx$ をかけて $x$ について $- \pi$ から $\pi$ まで積分することで

$$
\begin{aligned}
b_n = \frac{1}{\pi} \int_{- \pi}^\pi f(x) \sin nx \ dx
\end{aligned}
$$

がわかる。

以上より、題意が示された。

#### 3-2.
まず、

$$
\begin{aligned}
a_0 &= \frac{1}{\pi} \int_0^\pi x \ dx = \frac{\pi}{2}
\end{aligned}
$$

であり、次に、 $m = 1, 2, \cdots$ について

$$
\begin{aligned}
a_m
&= \frac{1}{\pi} \int_0^\pi x \cos mx \ dx
\\
&= \frac{1}{m \pi} \left[ x \sin mx \right]_0^\pi
- \frac{1}{m \pi} \int_0^\pi \sin mx \ dx
\\
&= \frac{1}{m^2 \pi} \left[ \cos mx \right]_0^\pi
\\
&= \begin{cases}
- \frac{2}{m^2 \pi} & (m = 1, 3, \cdots) \\
0                   & (m = 2, 4, \cdots) \\
\end{cases}
\\
b_m
&= \frac{1}{\pi} \int_0^\pi x \sin mx \ dx
\\
&= - \frac{1}{m \pi} \left[ x \cos mx \right]_0^\pi
+ \frac{1}{m \pi} \int_0^\pi \cos mx \ dx
\\
&= \frac{(-1)^{m+1}}{m} + \frac{1}{m^2 \pi} \left[ \sin mx \right]_0^\pi
\\
&= \frac{(-1)^{m+1}}{m}
\end{aligned}
$$

である。
よって、与えられた関数のフーリエ級数展開は、次の通りである：

$$
\begin{aligned}
f(x)
&= \frac{\pi}{4}
- \frac{2}{\pi} \sum_{k=0}^\infty \frac{1}{(2k+1)^2} \cos ((2k+1) x)
+ \sum_{m=1}^\infty \frac{(-1)^{m+1}}{m} \sin mx
\end{aligned}
$$

#### 3-3.
3-2. で得たフーリエ級数展開の式において $x=0$ とすると

$$
\begin{aligned}
0
= \frac{\pi}{4}
- \frac{2}{\pi} \left( 1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots \right)
\end{aligned}
$$

となるので、これを整理して題意の式を得る。