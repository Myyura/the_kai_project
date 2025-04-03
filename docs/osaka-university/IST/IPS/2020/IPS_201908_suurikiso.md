---
sidebar_label: "2019年8月実施 情報数理学 数理基礎"
tags:
  - Osaka-University
---
# 大阪大学 情報科学研究科 情報数理学専攻 2019年8月実施 情報数理学 数理基礎

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### 1.

### 2.
#### (1)

$$
\begin{aligned}
\iint_{x \gt 0, y \gt 0} e^{-2(x+2y)} dx dy
&=
\int_0^\infty e^{-2x} dx
\int_0^\infty e^{-4y} dy
\\
&=
\left[ - \frac{1}{2} e^{-2x} \right]_0^\infty
\left[ - \frac{1}{4} e^{-4y} \right]_0^\infty
\\
&=
\frac{1}{8}
\end{aligned}
$$

なので、

$$
\begin{aligned}
c = 8
\end{aligned}
$$

#### (2)
$X,Y$ のそれぞれの周辺確率密度関数を $f_X(x), f_Y(y)$ とすると、

$$
\begin{aligned}
f_X(x)
&= \int_0^\infty e^{-2(x+2y)} dy
= 2 e^{-2x}
\ \ \ \ (x \gt 0)
\\
f_Y(y)
&= \int_0^\infty e^{-2(x+2y)} dx
= 4 e^{-4y}
\ \ \ \ (y \gt 0)
\end{aligned}
$$

なので、任意の $x,y$ について

$$
\begin{aligned}
f(x,y) = f_X(x) f_Y(y)
\end{aligned}
$$

が成り立つから、 $X$ と $Y$ は独立である。

#### (3)
確率を $P$ で表すと、
求める確率は次のように計算できる：

$$
\begin{aligned}
P \left( X \geq \frac{1}{2} \text{ or } Y \geq \frac{1}{2} \right)
&=
1 -
P \left( X \lt \frac{1}{2} \text{ and } Y \lt \frac{1}{2} \right)
\\
&=
1 -
\int_0^{1/2} f_X(x) dx
\int_0^{1/2} f_Y(y) dy
\\
&=
1 - (1-e^{-1})(1-e^{-2})
\\
&=
e^{-1} + e^{-2} - e^{-3}
\\
&\approx
0.4534244
\end{aligned}
$$

よって、 45.3% である。

### 3.
#### (1)
$y_1, y_2, \cdots, y_N$ は独立で、
$y_k$ は期待値 $ax_k^2+bx_k+c$ 分散 $\sigma^2$ の正規分布
であるから、求める尤度 $L$ は、

$$
\begin{aligned}
L
&=
\prod_{k=1}^N \frac{1}{\sqrt{2 \pi \sigma^2}}
\exp \left[ - \frac{(y_k - (ax_k^2+bx_k+c))^2}{2 \sigma^2} \right]
\\
&=
\left( 2 \pi \sigma^2 \right)^{-N/2}
\exp \left[ - \frac{1}{2 \sigma^2} \sum_{k=1}^N
\left( y_k - (ax_k^2+bx_k+c) \right)^2 \right]
\end{aligned}
$$

である。

#### (2)

$$
\begin{aligned}
L
&=
\left( 2 \pi \sigma^2 \right)^{-N/2}
\exp \left[ - \frac{J}{2 \sigma^2} \right]
\end{aligned}
$$

であるから、
$J$ を最小とする $a,b,c$ は、
$L$ を最大にするので、最尤推定量である。