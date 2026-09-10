---
sidebar_label: '2021年8月実施 数学1'
tags:
  - Tokyo-University
  - Mathematics.Calculus.Constrained-Optimization
  - Mathematics.Differential-Equations.Laplace-Transform
  - Mathematics.Differential-Equations.Initial-Value-Problem
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

#### 题目描述

I. 设 $a>b>0$，椭圆为 $x^2/a^2+y^2/b^2=1$。
(1) 求第一象限接点 $(X,Y)$ 的切线。
(2) 求使该切线在两坐标轴之间的线段最短的接点和最短长度。
(3) 将该最短线段与坐标轴围成的三角形绕 $x$ 轴旋转成圆锥 $C_1$。在包括底面在内的总表面积与 $C_1$ 相同的圆锥中，令体积最大者为 $C_2$，求两底面积之比 $S_2/S_1$。

II. 定义 $F(s)=\int_0^\infty e^{-st}f(t)\,dt$，$\operatorname{Re}s>0$，在积分收敛的范围内考虑。
(1) 利用 $e^{-st}f(t),e^{-st}f'(t)\to0$ 推导 $\mathcal L[f'']=-f'(0)-sf(0)+s^2F(s)$。
(2) 从定义求 $e^{-at}\cos\omega t$ 与 $e^{-at}\sin\omega t$ 的变换，$a,\omega>0$。
(3) 求解 $f''+6f'+13f=0,f(0)=5,f'(0)=-11$。

## **Kai**

### I

#### 1

楕円の式を陰関数として微分し、接点が楕円上にあることを用いると、接線は

$$
\boxed{\frac{Xx}{a^2}+\frac{Yy}{b^2}=1}.
$$

#### 2

二つの切片は $p=a^2/X,q=b^2/Y$。$u=X^2/a^2\in(0,1)$ とおけば $Y^2/b^2=1-u$ なので、Cauchy–Schwarz の不等式より、

$$
p^2+q^2=\frac{a^2}u+\frac{b^2}{1-u}\ge(a+b)^2.
$$

等号は $u=a/(a+b)$ の場合に限るから、

$$
\boxed{(X,Y)=\left(\sqrt{\frac{a^3}{a+b}},\sqrt{\frac{b^3}{a+b}}\right),
\qquad d_{\min}=a+b}.
$$

#### 3

$x$ 軸のまわりに回転してできる $C_1$ の高さ、底面半径、母線はそれぞれ

$$
p=\sqrt{a(a+b)},\qquad q=\sqrt{b(a+b)},\qquad l=a+b.
$$

一般に底面半径 $r$、母線 $sr$（$s>1$）の円錐では、表面積と体積は

$$
S=\pi r^2(1+s),\qquad
V=\frac{S^{3/2}}{3\sqrt\pi}\frac{\sqrt{s-1}}{s+1}.
$$

$S$ を固定すると、

$$
\frac d{ds}\frac{s-1}{(s+1)^2}=\frac{3-s}{(s+1)^3},
$$

より体積は $s=3$ で唯一の最大値を取る。このとき底面積は $S/4$ なので、

$$
\boxed{\frac{S_2}{S_1}=\frac{\pi q(q+l)}{4\pi q^2}
=\frac14\left(1+\sqrt{\frac{a+b}{b}}\right)}.
$$

### II

#### 1

部分積分と与えられた無限遠の条件から、

$$
\mathcal L[f']=[e^{-st}f(t)]_0^\infty+sF(s)=-f(0)+sF(s),
$$

従って、

$$
\boxed{\mathcal L[f'']=-f'(0)+s\mathcal L[f']
=-f'(0)-sf(0)+s^2F(s)}.
$$

#### 2

$q=s+a$ とおく。三角関数を指数関数で表し、
$\int_0^\infty e^{-(q\mp i\omega)t}dt=(q\mp i\omega)^{-1}$ を用いると、

$$
\begin{aligned}
\mathcal L[e^{-at}\cos\omega t]
&=\frac12\left(\frac1{q-i\omega}+\frac1{q+i\omega}\right)
=\boxed{\frac{s+a}{(s+a)^2+\omega^2}},\\
\mathcal L[e^{-at}\sin\omega t]
&=\frac1{2i}\left(\frac1{q-i\omega}-\frac1{q+i\omega}\right)
=\boxed{\frac\omega{(s+a)^2+\omega^2}}.
\end{aligned}
$$

#### 3

方程式を変換して初期値を代入すると、

$$
(s^2+6s+13)F(s)=5s+19,
\qquad F(s)=5\frac{s+3}{(s+3)^2+4}+2\frac2{(s+3)^2+4}.
$$

前問の結果を逆変換して、

$$
\boxed{f(t)=e^{-3t}(5\cos2t+2\sin2t)}.
$$

