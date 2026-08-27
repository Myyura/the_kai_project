---
sidebar_label: 2021年8月実施 選択問題 応用数学
tags:
  - University-of-Electro-Communications
  - Mathematics.Complex-Analysis.Contour-Integration
  - Mathematics.Complex-Analysis.Laurent-Series
  - Mathematics.Complex-Analysis.Conformal-Mapping
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2021年8月実施 選択問題 応用数学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

1. $b>0$ に対して
   $$
   I(a,b)=\frac1{2\pi i}\int_{-\infty}^{\infty}
   \frac{e^{iax}}{x-ib}\,dx
   $$
   を $a>0,a=0,a<0$ に分けて求め、$\theta(a)=\lim_{b\to0+}I(a,b)$ とその導関数を考察せよ。
2. $z=e^{i\theta}$ を用い、
   $$
   \exp\left\{\frac{\alpha}{2}\left(z-\frac1z\right)\right\}
   =\sum_{n=-\infty}^{\infty}J_n(\alpha)z^n
   $$
   から $J_n(\alpha)$ の実積分表示を導け。
3. Joukowski 変換 $w=z+a^2/z$ が円を楕円へ、原点を端点とする半直線を双曲線へ写すことを示せ。

### 题目描述

用围道积分导出阶跃函数及其广义导数；由 Laurent 系数得到 Bessel 函数的积分表示；最后研究 Joukowski 变换下圆和射线的像。

## **Kai**

### 問1

#### (1)

$a>0$ では上半平面に閉じると極 $z=ib$ を囲むので、

$$
I(a,b)=\operatorname*{Res}_{z=ib}
\frac{e^{iaz}}{z-ib}=e^{-ab}.
$$

$a<0$ では下半平面に閉じ、極を囲まないので $I(a,b)=0$ である。
$a=0$ では対称積分の定義より、

$$
\frac1{2\pi i}\lim_{R\to\infty}
\int_{-R}^{R}\frac{dx}{x-ib}
=\frac12.
$$

したがって、

$$
\boxed{
I(a,b)=
\begin{cases}
e^{-ab},&a>0,\\
\frac12,&a=0,\\
0,&a<0.
\end{cases}}
$$

#### (2)

$$
\boxed{
\theta(a)=
\begin{cases}
1,&a>0,\\
\frac12,&a=0,\\
0,&a<0
\end{cases}}
$$

であり、Heaviside の階段関数である。通常の意味では $a=0$ で微分不可能であり、超関数の意味では

$$
\boxed{\theta'(a)=\delta(a)}
$$

となる。

### 問2

#### (1)

$z=e^{i\theta}$ ならば $\bar z=e^{-i\theta}$ であるから、

$$
\boxed{\sin\theta=\frac{z-\bar z}{2i}}.
$$

#### (2)

Laurent 係数の公式と $z=e^{i\theta}$ より、

$$
\begin{aligned}
J_n(\alpha)
&=\frac1{2\pi i}\oint_{|z|=1}
\exp\left\{\frac{\alpha}{2}\left(z-\frac1z\right)\right\}
\frac{dz}{z^{n+1}}\\
&=\frac1{2\pi}\int_0^{2\pi}
e^{i(\alpha\sin\theta-n\theta)}\,d\theta.
\end{aligned}
$$

$\theta$ と $2\pi-\theta$ の項を組にすると虚部が消える。したがって、

$$
\boxed{
J_n(\alpha)=\frac1\pi\int_0^\pi
\cos(n\theta-\alpha\sin\theta)\,d\theta}.
$$

### 問3

#### (1)

$z=ce^{i\theta}$ $(c>a)$ とおくと、

$$
w=\left(c+\frac{a^2}{c}\right)\cos\theta
+i\left(c-\frac{a^2}{c}\right)\sin\theta.
$$

$w=u+iv$ と書けば、

$$
\boxed{
\frac{u^2}{(c+a^2/c)^2}
+\frac{v^2}{(c-a^2/c)^2}=1},
$$

ゆえに像は楕円である。

#### (2)

$z=re^{i\theta_0}$ $(r>0)$ とおくと、

$$
u=\left(r+\frac{a^2}{r}\right)\cos\theta_0,\qquad
v=\left(r-\frac{a^2}{r}\right)\sin\theta_0.
$$

$\sin\theta_0\cos\theta_0\ne0$ のとき消去して、

$$
\boxed{
\frac{u^2}{\cos^2\theta_0}
-\frac{v^2}{\sin^2\theta_0}=4a^2},
$$

すなわち双曲線を得る。$\sin\theta_0=0$ または $\cos\theta_0=0$ では、それぞれ実軸または虚軸上の退化した場合となる。
