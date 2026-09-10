---
sidebar_label: '数学 第3問'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Complex-Roots
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
  - Mathematics.Complex-Analysis.Contour-Integration
---

# 東京大学 工学系研究科 2020年度 数学 第3問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I.
整数 $n\ge2$ に対して $f_n(z)=1/(z^n-1)$ とする。

1. $n=3$ のとき、すべての特異点を求めよ。
2. 任意の特異点 $p_0$ における留数を求め、$n,p_0$ を用いて簡潔に表せ。
3. $C$ を反時計回りの円周 $|z|=2$ とする。$\displaystyle\oint_Cf_n(z)\,dz$ を求めよ。

### II–IV.
次の三つの極限をそれぞれ求めよ。

$$
\lim_{\varepsilon\to0^+}\left[
\int_{-\infty}^{1-\varepsilon}\frac{dx}{x^3-1}
+\int_{1+\varepsilon}^\infty\frac{dx}{x^3-1}\right],
$$

$$
\lim_{\varepsilon\to0^+}\left[
\int_0^{1-\varepsilon}\frac{\cos x}{x^4-1}\,dx
+\int_{1+\varepsilon}^\infty\frac{\cos x}{x^4-1}\,dx\right],
$$

$$
\lim_{\varepsilon\to0^+}\left[
\int_0^{1-\varepsilon}\frac{\sin(x^2-\pi/4)}{x^4-1}\,dx
+\int_{1+\varepsilon}^\infty\frac{\sin(x^2-\pi/4)}{x^4-1}\,dx\right].
$$

#### 题目描述

##### I.
设 $f_n(z)=1/(z^n-1)$，$n\ge2$ 为整数。

1. 当 $n=3$ 时，求全部奇点。
2. 求任一奇点 $p_0$ 处的留数，用 $n,p_0$ 简洁表示。
3. $C$ 为逆时针圆周 $|z|=2$，求 $\displaystyle\oint_Cf_n(z)\,dz$。

##### II–IV.
分别求下列极限：

$$
\lim_{\varepsilon\to0^+}\left[
\int_{-\infty}^{1-\varepsilon}\frac{dx}{x^3-1}
+\int_{1+\varepsilon}^\infty\frac{dx}{x^3-1}\right],
$$

$$
\lim_{\varepsilon\to0^+}\left[
\int_0^{1-\varepsilon}\frac{\cos x}{x^4-1}\,dx
+\int_{1+\varepsilon}^\infty\frac{\cos x}{x^4-1}\,dx\right],
$$

$$
\lim_{\varepsilon\to0^+}\left[
\int_0^{1-\varepsilon}\frac{\sin(x^2-\pi/4)}{x^4-1}\,dx
+\int_{1+\varepsilon}^\infty\frac{\sin(x^2-\pi/4)}{x^4-1}\,dx\right].
$$

## **Kai**

### I.

1. 特異点は $\boxed{1,\ (-1+i\sqrt3)/2,\ (-1-i\sqrt3)/2}$ であり、すべて1位の極である。

2. $p_0^n=1$ より

$$
\boxed{\operatorname{Res}_{p_0}f_n=\frac1{np_0^{n-1}}=\frac{p_0}{n}}.
$$

3. 円内には $n$ 乗根がすべて含まれ、それらの和は零である。したがって

$$
\boxed{\oint_Cf_n(z)\,dz=\frac{2\pi i}{n}\sum_{k=0}^{n-1}e^{2\pi ik/n}=0}.
$$

### II.

上半平面で経路を閉じ、時計回りの上半小円で $z=1$ を避ける。大円弧の積分は零に、小円弧の積分は $-i\pi/3$ に収束する。$\omega=(-1+i\sqrt3)/2$ とおけば

$$
\operatorname{PV}\int_{-\infty}^\infty\frac{dx}{x^3-1}
-\frac{i\pi}{3}=2\pi i\frac\omega3.
$$

よって極限は $\boxed{-\pi/\sqrt3}$ である。

### III.

$F(z)=e^{iz}/(z^4-1)$ に対して上半平面で経路を閉じ、実軸上の極 $\pm1$ を上側から避ける。留数は

$$
\operatorname{Res}_iF=\frac{ie^{-1}}4,\qquad
\operatorname{Res}_1F+\operatorname{Res}_{-1}F
=\frac{e^i-e^{-i}}4=\frac{i\sin1}{2}.
$$

よって

$$
\operatorname{PV}\int_{-\infty}^\infty F(x)\,dx
=2\pi i\operatorname{Res}_iF+i\pi(\operatorname{Res}_1F+\operatorname{Res}_{-1}F)
=-\frac\pi2(e^{-1}+\sin1).
$$

実部をとり、偶関数であることを用いると

$$
\boxed{-\frac\pi4(e^{-1}+\sin1)}.
$$

### IV.

$H(z)=e^{iz^2-i\pi/4}/(z^4-1)$ とおき、$0\le\arg z\le\pi/4$ の扇形内で経路を閉じ、$z=1$ を上側から避ける。扇形内部には極がなく、大円弧の積分は零に収束する。一方、回転した半直線上では

$$
H(e^{i\pi/4}t)e^{i\pi/4}\,dt=-\frac{e^{-t^2}}{t^4+1}\,dt
$$

は実数となる。したがって

$$
\operatorname{PV}\int_0^\infty H(x)\,dx
=i\pi\frac{e^{i(1-\pi/4)}}4-\int_0^\infty\frac{e^{-t^2}}{t^4+1}\,dt.
$$

虚部をとると

$$
\boxed{\frac\pi4\cos\left(1-\frac\pi4\right)
=\frac\pi{4\sqrt2}(\cos1+\sin1)}.
$$

