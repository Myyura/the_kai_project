---
comments: false
title: 東北大学 工学研究科 電気・情報系 2022年3月実施 基礎科目 問題6 数学基礎
tags:
  - Tohoku-University
---
# 東北大学 工学研究科 電気・情報系 2022年3月実施 基礎科目 問題6 数学基礎

## **Author**
Miyake

## **Description**

## **Kai**
### (1)
#### (a)
$A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
&= \det \begin{pmatrix} 1-\lambda & 2 & 0 \\ -1 & -2-\lambda & 1 \\ 0 & 0 & 1-\lambda \end{pmatrix}
\\
&= - \lambda (\lambda+1)(\lambda-1)
\\
\therefore \ \ 
\lambda &= 0, \pm 1
\end{aligned}
$$

である。

固有値 $-1$ に対応する固有ベクトルを求めるために、

$$
\begin{aligned}
\begin{pmatrix} 2 & 2 & 0 \\ -1 & -1 & 1 \\ 0 & 0 & 2 \end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
\end{aligned}
$$

とおくと、 $x+y=0, z=0$ であるから、固有ベクトルは例えば、

$$
\begin{aligned}
\begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}
\end{aligned}
$$

である。

同様にして、固有値 $0,1$ に対応する固有ベクトルは、それぞれ、例えば、

$$
\begin{aligned}
\begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}
, \ \ 
\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}
\end{aligned}
$$

である。

#### (b)
(a) で求めたように、 $A$ の固有多項式は $\lambda^3 - \lambda$ であるから、
ケーリー-ハミルトンの定理より、

$$
\begin{aligned}
A^3 - A = O
\end{aligned}
$$

が成り立つ。
つまり、

$$
\begin{aligned}
a=0, b=-1, c=0
\end{aligned}
$$

である。

#### (\(c\))

$$
\begin{aligned}
A^4+A^3-A^2+4A-5E
&= (A^3-A)(A+E) + 5A - 5E
\\
&= 5A - 5E
\\
&= \begin{pmatrix} 0 & 10 & 0 \\ -5 & -15 & 5 \\ 0 & 0 & 0 \end{pmatrix}
\end{aligned}
$$

### (2)
#### (a)
$\tau = at+b$ とると、 $a \gt 0$ より $t \to \infty$ のとき $\tau \to \infty$ であるから、
次のように計算できる：

$$
\begin{aligned}
\mathcal{L} \left[ f(at+b) \right]
&= \int_0^\infty e^{-st} f(at+b) dt
\\
&= \int_b^\infty e^{-s(\tau-b)/a} f(\tau) \frac{d \tau}{a}
\\
&= \frac{e^{bs/a}}{a} \int_b^\infty e^{-s \tau /a} f(\tau) d \tau
\\
&= \frac{e^{bs/a}}{a} \left\{ \int_0^\infty e^{-s \tau /a} f(\tau) d \tau
- \int_0^b e^{-s \tau /a} f(\tau) d \tau \right\}
\\
&= \frac{e^{bs/a}}{a} \left\{ F \left( \frac{s}{a} \right)
- \int_0^b e^{-st /a} f(t) dt \right\}
\end{aligned}
$$

#### (b)
まず、

$$
\begin{aligned}
\mathcal{L} \left[ t \right]
&= \int_0^\infty e^{-st} t dt
\\
&= \int_0^\infty \left( - \frac{1}{s} e^{-st} \right)' t dt
\\
&= \left[ - \frac{1}{s} e^{-st} t \right]_0^\infty + \frac{1}{s} \int_0^\infty e^{-st} dt
\\
&= - \frac{1}{s^2} \left[ e^{-st} \right]_0^\infty
\\
&= \frac{1}{s^2}
\end{aligned}
$$

である。

よって、与えられた差分方程式をラプラス変換すると、(a)で得た式を使って、

$$
\begin{aligned}
e^{2s} \left\{ F(s) - \int_0^2 e^{-st} f(t) dt \right\}
-3e^{s} \left\{ F(s) - \int_0^1 e^{-st} f(t) dt \right\}
+ 2F(s)
= \frac{1}{s^2}
\end{aligned}
$$

さらに、 $0 \leq t \leq 2$ で $f(t)=0$ であることを使って整理すると、

$$
\begin{aligned}
\left( e^{2s} - 3 e^s + 2 \right) F(s) = \frac{1}{s^2}
\end{aligned}
$$

なので、

$$
\begin{aligned}
F(s)
&= \frac{1}{s^2 \left( e^{2s} - 3 e^s + 2 \right)}
\\
&= \frac{1}{s^2 \left( e^s -1 \right) \left( e^s -2 \right)}
\end{aligned}
$$

を得る。