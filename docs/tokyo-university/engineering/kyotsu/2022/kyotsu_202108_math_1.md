---
sidebar_label: '2021年8月実施 数学1'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2021年8月実施 数学1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

[公式原題](https://www.t.u-tokyo.ac.jp/hubfs/graduate/2022/kakomon/2022_M_1.pdf)

### I.
$a>b>0$ とし、楕円 $x^2/a^2+y^2/b^2=1$ を考える。

1. 第一象限の接点 $(X,Y)$ における接線を求める。
2. この接線と両座標軸の交点を結ぶ線分が最短となる $(X,Y)$ と最小長を求める。
3. 2.の線分と座標軸で囲む三角形を **$x$ 軸** のまわりに回転して円錐 $C_1$ を作る。底面を含む表面積が $C_1$ と等しい円錐のうち、体積最大のものを $C_2$ とする。底面積の比 $S_2/S_1$ を求める。

### II.
$t\ge0$ の実数値関数 $f$ に対し、収束する範囲で $F(s)=\int_0^\infty e^{-st}f(t)dt$ とする（$\operatorname{Re}s>0$）。

1. $e^{-st}f(t),e^{-st}f'(t)\to0$（$t\to\infty$）の条件から $\mathcal L[f'']=-f'(0)-sf(0)+s^2F(s)$ を導く。
2. $a,\omega>0$ に対し $e^{-at}\cos\omega t$ と $e^{-at}\sin\omega t$ の変換を定義から求める。
3. $f''+6f'+13f=0$、$f(0)=5,f'(0)=-11$ を解く。

### 题目描述

1. 第一部分考察椭圆

   $$
   \frac{x^2}{a^2}+\frac{y^2}{b^2}=1.
   $$

   其中 $a>b>0$，接点 $(X,Y)$ 位于第一象限。先求切线；再令切线与两坐标轴交于 $(p,0),(0,q)$，求线段长度 $\sqrt{p^2+q^2}$ 最小时的接点和最小长度。最短情形满足
   $X^2=a^3/(a+b)$、$Y^2=b^3/(a+b)$；最后将该线段与坐标轴围成的三角形绕 $x$ 轴旋转得到圆锥 $C_1$。在底面也计入的总表面积相同的圆锥中，令最大体积者为 $C_2$，求底面积之比 $S_2/S_1$。
2. 第二部分取 $t\ge0$，$F(s)=\int_0^\infty e^{-st}f(t)\,dt$ 在所用范围内收敛，$\operatorname{Re}s>0$，并假定 $e^{-st}f(t),e^{-st}f\prime(t)\to0$。先从定义推导 $\mathcal L[f']$ 和 $\mathcal L[f'']$；再求
   $e^{-at}\cos\omega t$ 与 $e^{-at}\sin\omega t$ 的拉普拉斯变换；最后用这些公式求初值问题

   $$
   f''+6f'+13f=0,\qquad f(0)=5,\quad f'(0)=-11.
   $$

## **Kai**
### I.
#### 1.
与えられた楕円の方程式を $x$ で微分して、

$$
\begin{aligned}
\frac{2x}{a^2} + \frac{2y}{b^2} \frac{dy}{dx} = 0
\end{aligned}
$$

$$
\begin{aligned}
\therefore \ \ 
\frac{dy}{dx} = - \frac{b^2 x}{a^2 y}
\end{aligned}
$$

なので、楕円上の点 $(X,Y)$ における接線の方程式は、

$$
\begin{aligned}
y-Y = - \frac{b^2 X}{a^2 Y} (x-X)
\end{aligned}
$$

である。

#### 2.
上で求めた接線とx,y軸との交点をそれぞれ $(p,0),(0,q)$ とすると、

$$
\begin{aligned}
p &= X + \frac{a^2 Y^2}{b^2 X} = \frac{a^2}{X}
\\
q &= Y + \frac{b^2 X^2}{a^2 Y} = \frac{b^2}{Y}
\end{aligned}
$$

であり、この2点を結ぶ線分の長さを $d$ とすると、

$$
\begin{aligned}
d^2
&= p^2 + q^2
\\
&= \frac{a^4}{X^2} + \frac{b^4}{Y^2}
\end{aligned}
$$

である。

この $d^2$ を最小にする $(X,Y)$ を求めるために、
ラグランジュの未定乗数 $\lambda$ を導入して、関数

$$
\begin{aligned}
L(X,Y)
&= \frac{a^4}{X^2} + \frac{b^4}{Y^2}
- \lambda \left( \frac{X^2}{a^2} + \frac{Y^2}{b^2} \right)
\end{aligned}
$$

を最小化する。

$$
\begin{aligned}
0
&= \frac{\partial L}{\partial X}
= - \frac{2a^4}{X^3} - \frac{2 \lambda X}{a^2}
= - \frac{2}{a^2 X^3} \left( a^6 + \lambda X^4 \right)
\\
0
&= \frac{\partial L}{\partial Y}
= - \frac{2b^4}{Y^3} - \frac{2 \lambda Y}{b^2}
= - \frac{2}{b^2 Y^3} \left( b^6 + \lambda Y^4 \right)
\end{aligned}
$$

より、

$$
\begin{aligned}
X^4 &= -\frac{a^6}{\lambda}
, \ \ 
Y^4 = -\frac{b^6}{\lambda}
\\
\therefore \ \ 
X^2 &= \frac{a^3}{\sqrt{-\lambda}}
, \ \ 
Y^2 = \frac{b^3}{\sqrt{-\lambda}}
\end{aligned}
$$

となるので、これらを楕円の方程式に代入して整理すると、

$$
\begin{aligned}
\lambda = -(a+b)^2
\end{aligned}
$$

したがって、

$$
\begin{aligned}
X^2 = \frac{a^3}{a+b}
, \ \ 
Y^2 = \frac{b^3}{a+b}
\end{aligned}
$$

であり、このとき、

$$
\begin{aligned}
d^2 = (a+b)^2
\end{aligned}
$$

である。

まとめると、線分の長さが最小になるのは、接点の座標が

$$
\begin{aligned}
\left( \sqrt{\frac{a^3}{a+b}}, \sqrt{\frac{b^3}{a+b}} \right)
\end{aligned}
$$

のときであり、このとき、線分の長さは $a+b$ である。

#### 3.
円錐 $C_1$ の高さと底面半径をそれぞれ $p,q$ とすると、問 I.2 より

$$
p=\sqrt{a(a+b)},\qquad q=\sqrt{b(a+b)},\qquad \sqrt{p^2+q^2}=a+b.
$$

半径 $r$、母線 $l$ の円錐の表面積と体積は

$$
S=\pi r(r+l),\qquad V=\frac{\pi r^2\sqrt{l^2-r^2}}{3}.
$$

$s=l/r\ge1$ とおくと、$S$ を固定したとき

$$
V=\frac{S^{3/2}}{3\sqrt\pi}\frac{\sqrt{s-1}}{s+1}
$$

であり、これは $s=3$ で最大となる。したがって $C_2$ の底面積は表面積の $1/4$ なので、

$$
\boxed{
\frac{S_2}{S_1}
=\frac{q+(a+b)}{4q}
=\frac14\left(1+\sqrt{\frac{a+b}{b}}\right)
}.
$$

### II.
#### 1.

$$
\begin{aligned}
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
\end{aligned}
$$

#### 2.

$$
\begin{aligned}
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
\end{aligned}
$$

より、

$$
\begin{aligned}
\mathcal{L} \left[ g(t) \right]
&= \frac{s+a}{(s+a)^2 + \omega^2}
\\
\mathcal{L} \left[ h(t) \right]
&= \frac{\omega}{(s+a)^2 + \omega^2}
\end{aligned}
$$

#### 3.
与えられた微分方程式をラプラス変換して、上の 1. で得た式を使うと、

$$
\begin{aligned}
\left( -f'(0) - s f(0) + s^2 \mathcal{L} \left[ f(t) \right] \right)
+ 6 \left( -f(0) + s \mathcal{L} \left[ f(t) \right] \right)
+ 13 \mathcal{L} \left[ f(t) \right]
= 0
\end{aligned}
$$

$$
\begin{aligned}
\therefore \ \ 
-f'(0) - (s+6) f(0) + (s^2+6s+13) \mathcal{L} \left[ f(t) \right] = 0
\end{aligned}
$$

さらに、初期値 $f(0)=5, f'(0)=-11$ を代入して整理すると、

$$
\begin{aligned}
(s^2+6s+13) \mathcal{L} \left[ f(t) \right] = 5s+19
\end{aligned}
$$

$$
\begin{aligned}
\therefore \ \ 
\mathcal{L} \left[ f(t) \right]
&= \frac{5s+19}{s^2+6s+13}
\\
&= 2 \cdot \frac{2}{(s+3)^2+2^2} + 5 \cdot \frac{s+3}{(s+3)^2+2^2}
\end{aligned}
$$

となる。これは、上の 2. で $a=3, \omega=2$ の場合に相当するので、

$$
\begin{aligned}
f(t)
&= 2 e^{-3t} \sin (2t) + 5 e^{-3t} \cos (2t)
\\
&= e^{-3t} \left( 2 \sin (2t) + 5 \cos (2t) \right)
\end{aligned}
$$

がわかる。
