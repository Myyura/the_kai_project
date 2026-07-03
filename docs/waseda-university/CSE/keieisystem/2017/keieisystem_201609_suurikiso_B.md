---
sidebar_label: "2016年9月実施 数理基礎 B"
tags:
  - Waseda-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Improper-Integral
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2016年9月実施 数理基礎 B

## **Author**
祭音Myyura

## **Description**

### [小問 B1]

$D=\{(x,y)\mid 1\leq x^2+y^2\leq4\}$ とするとき、

$$
S=\iint_D(4-x^2-y^2)^{1/2}\,dxdy
$$

を計算せよ。

### [小問 B2]

$n$ を自然数とし、

$$
I_n=\int_0^\infty(x^2+4)^{-n}\,dx
$$

とする。

1. $I_1$ を求めよ。
2. $I_n$ と $I_{n+1}$ の関係を示し、$I_3$ を求めよ。

## **Kai**

### [小問 B1]

極座標 $x=r\cos\theta, y=r\sin\theta$ を用いると、

$$
\begin{aligned}
S
&=\int_0^{2\pi}\int_1^2 r\sqrt{4-r^2}\,drd\theta\\
&=2\pi\left[-\frac13(4-r^2)^{3/2}\right]_1^2\\
&=\boxed{2\pi\sqrt3}.
\end{aligned}
$$

### [小問 B2]

$x=2\tan\theta$ とおくと

$$
I_n=2^{1-2n}\int_0^{\pi/2}\cos^{2n-2}\theta\,d\theta.
$$

よって

$$
\boxed{I_1=\frac\pi4}.
$$

$J_m=\int_0^{\pi/2}\cos^m\theta\,d\theta$ とおけば、部分積分から

$$
J_m=\frac{m-1}{m}J_{m-2}
$$

である。したがって

$$
\boxed{I_{n+1}=\frac{2n-1}{8n}I_n}.
$$

これを2回用いると

$$
I_2=\frac18I_1=\frac\pi{32},\qquad
I_3=\frac3{16}I_2
=\boxed{\frac{3\pi}{512}}.
$$
