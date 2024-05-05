---
comments: false
description: 東京大学 大学院 工学系研究科 2022年度 数学1
keywords: Tokyo-University, 2022
---

## **Source**
[東京大学 大学院 工学系研究科 2022年度 数学1 (主に「微分積分および微分方程式」と「級数・フーリエ解析および積分変換」)](https://www.t.u-tokyo.ac.jp/soe/admission/general-past)

## **Description**

## **Kai**
### I.
#### 1.
与えられた楕円の方程式を $x$ で微分して、

$$
\begin{align}
\frac{2x}{a^2} + \frac{2y}{b^2} \frac{dy}{dx} = 0
\end{align}
$$

$$
\begin{align}
\therefore \ \ 
\frac{dy}{dx} = - \frac{b^2 x}{a^2 y}
\end{align}
$$

なので、楕円上の点 $(X,Y)$ における接線の方程式は、

$$
\begin{align}
y-Y = - \frac{b^2 X}{a^2 Y} (x-X)
\end{align}
$$

である。

#### 2.
上で求めた接線とx,y軸との交点をそれぞれ $(p,0),(0,q)$ とすると、

$$
\begin{align}
p &= X + \frac{a^2 Y^2}{b^2 X} = \frac{a^2}{X}
\\
q &= Y + \frac{b^2 X^2}{a^2 Y} = \frac{b^2}{Y}
\end{align}
$$

であり、この2点を結ぶ線分の長さを $d$ とすると、

$$
\begin{align}
d^2
&= p^2 + q^2
\\
&= \frac{a^4}{X^2} + \frac{b^4}{Y^2}
\end{align}
$$

である。

この $d^2$ を最小にする $(X,Y)$ を求めるために、
ラグランジュの未定乗数 $\lambda$ を導入して、関数

$$
\begin{align}
L(X,Y)
&= \frac{a^4}{X^2} + \frac{b^4}{Y^2}
- \lambda \left( \frac{X^2}{a^2} + \frac{Y^2}{b^2} \right)
\end{align}
$$

を最小化する。

$$
\begin{align}
0
&= \frac{\partial L}{\partial X}
= - \frac{2a^4}{X^3} - \frac{2 \lambda X}{a^2}
= - \frac{2}{a^2 X^3} \left( a^6 + \lambda X^4 \right)
\\
0
&= \frac{\partial L}{\partial Y}
= - \frac{2b^4}{Y^3} - \frac{2 \lambda Y}{b^2}
= - \frac{2}{b^2 Y^3} \left( b^6 + \lambda Y^4 \right)
\end{align}
$$

より、

$$
\begin{align}
X^4 &= -\frac{a^6}{\lambda}
, \ \ 
Y^4 = -\frac{b^6}{\lambda}
\\
\therefore \ \ 
X^2 &= \frac{a^3}{\sqrt{-\lambda}}
, \ \ 
Y^2 = \frac{b^3}{\sqrt{-\lambda}}
\end{align}
$$

となるので、これらを楕円の方程式に代入して整理すると、

$$
\begin{align}
\lambda = -(a+b)^2
\end{align}
$$

したがって、

$$
\begin{align}
X^2 = \frac{a^3}{a+b}
, \ \ 
Y^2 = \frac{b^3}{a+b}
\end{align}
$$

であり、このとき、

$$
\begin{align}
d^2 = (a+b)^2
\end{align}
$$

である。

まとめると、線分の長さが最小になるのは、接点の座標が

$$
\begin{align}
\left( \sqrt{\frac{a^3}{a+b}}, \sqrt{\frac{b^3}{a+b}} \right)
\end{align}
$$

のときであり、このとき、線分の長さは $a+b$ である。

### II.
#### 1.

$$
\begin{align}
\mathcal{L} \left[ f'(t) \right]
&= \int_0^\infty e^{-st} f'(t) dt
\\
&= \left[ e^{-st} f(t) \right]_0^\infty + s \int_0^\infty e^{-st} f(t) dt
\\
&= -f(0) + s \mathcal{L} \left[ f(t) \right]
\\
\mathcal{L} \left[ f''(t) \right]
&= \int_0^\infty e^{-st} f''(t) dt
\\
&= \left[ e^{-st} f'(t) \right]_0^\infty + s \int_0^\infty e^{-st} f'(t) dt
\\
&= -f'(0) - s f(0) + s^2 \mathcal{L} \left[ f(t) \right]
\end{align}
$$

#### 2.

$$
\begin{align}
\mathcal{L} \left[ g(t) \right]
&= \int_0^\infty e^{-(s+a)t} \cos (\omega t) dt
\\
&= \frac{1}{\omega} \left[ e^{-(s+a)t} \sin (\omega t) \right]_0^\infty
+ \frac{s+a}{\omega} \int_0^\infty e^{-(s+a)t} \sin (\omega t) dt
\\
&= \frac{s+a}{\omega} \mathcal{L} \left[ h(t) \right]
\\
\mathcal{L} \left[ h(t) \right]
&= \int_0^\infty e^{-(s+a)t} \sin (\omega t) dt
\\
&= - \frac{1}{\omega} \left[ e^{-(s+a)t} \cos (\omega t) \right]_0^\infty
- \frac{s+a}{\omega} \int_0^\infty e^{-(s+a)t} \cos (\omega t) dt
\\
&= \frac{1}{\omega} - \frac{s+a}{\omega} \mathcal{L} \left[ g(t) \right]
\end{align}
$$

より、

$$
\begin{align}
\mathcal{L} \left[ g(t) \right]
&= \frac{s+a}{(s+a)^2 + \omega^2}
\\
\mathcal{L} \left[ h(t) \right]
&= \frac{\omega}{(s+a)^2 + \omega^2}
\end{align}
$$

#### 3.
与えられた微分方程式をラプラス変換して、上の 1. で得た式を使うと、

$$
\begin{align}
\left( -f'(0) - s f(0) + s^2 \mathcal{L} \left[ f(t) \right] \right)
+ 6 \left( -f(0) + s \mathcal{L} \left[ f(t) \right] \right)
+ 13 \mathcal{L} \left[ f(t) \right]
= 0
\end{align}
$$

$$
\begin{align}
\therefore \ \ 
-f'(0) - (s+6) f(0) + (s^2+6s+13) \mathcal{L} \left[ f(t) \right] = 0
\end{align}
$$

さらに、初期値 $f(0)=5, f'(0)=-11$ を代入して整理すると、

$$
\begin{align}
(s^2+6s+13) \mathcal{L} \left[ f(t) \right] = 5s+19
\end{align}
$$

$$
\begin{align}
\therefore \ \ 
\mathcal{L} \left[ f(t) \right]
&= \frac{5s+19}{s^2+6s+13}
\\
&= 2 \cdot \frac{2}{(s+3)^2+2^2} + 5 \cdot \frac{s+3}{(s+3)^2+2^2}
\end{align}
$$

となる。これは、上の 2. で $a=3, \omega=2$ の場合に相当するので、

$$
\begin{align}
f(t)
&= 2 e^{-3t} \sin (2t) + 5 e^{-3t} \cos (2t)
\\
&= e^{-3t} \left( 2 \sin (2t) + 5 \cos (2t) \right)
\end{align}
$$

がわかる。