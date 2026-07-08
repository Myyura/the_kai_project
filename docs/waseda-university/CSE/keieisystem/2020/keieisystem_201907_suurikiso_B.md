---
sidebar_label: "2019年7月実施 数理基礎 B"
tags:
  - Waseda-University
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Double-Integral
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2019年7月実施 数理基礎 B

## **Author**
祭音Myyura

## **Description**

1. 自然数 $m,n$ に対して $\displaystyle\int_0^{2\pi}\cos(mx)\cos(nx)\,dx$ を求めよ。
2. ガウス積分を用いて

   $$
   \int_0^\infty\exp\left(-\frac{(\log x)^2}{4}\right)dx
   $$

   を求めよ。
3. $D=\{(x,y)\mid(x-1/2)^2+y^2\leq1/4\}$ とする。$\displaystyle\iint_D\sqrt{x^2+y^2}\,dx\,dy$ を求めよ。

## **Kai**

### [小問 1]

積和公式

$$
2\cos(mx)\cos(nx)=\cos((m-n)x)+\cos((m+n)x)
$$

を用いる。$m\neq n$ なら両項の $0$ から $2\pi$ までの積分は0である。$m=n$ なら

$$
\int_0^{2\pi}\cos^2(mx)\,dx=\pi.
$$

よって

$$
\boxed{
\int_0^{2\pi}\cos(mx)\cos(nx)\,dx
=\begin{cases}
\pi,&m=n,\\
0,&m\neq n.
\end{cases}}
$$

### [小問 2]

$t=\log x$ とおくと $x=e^t$、$dx=e^t dt$ なので

$$
\begin{aligned}
I
&=\int_{-\infty}^{\infty}\exp\left(-\frac{t^2}{4}+t\right)dt\\
&=e\int_{-\infty}^{\infty}\exp\left(-\frac{(t-2)^2}{4}\right)dt.
\end{aligned}
$$

$u=(t-2)/2$ とおけば $dt=2du$ であるから

$$
\boxed{I=2e\int_{-\infty}^{\infty}e^{-u^2}du=2e\sqrt\pi}.
$$

### [小問 3]

極座標を用いると領域条件は

$$
(r\cos\theta-1/2)^2+r^2\sin^2\theta\leq1/4
$$

すなわち $0\leq r\leq\cos\theta$、$-\pi/2\leq\theta\leq\pi/2$ となる。被積分関数は $r$、Jacobian も $r$ なので

$$
\begin{aligned}
\iint_D\sqrt{x^2+y^2}\,dx\,dy
&=\int_{-\pi/2}^{\pi/2}\int_0^{\cos\theta}r^2\,dr\,d\theta\\
&=\frac13\int_{-\pi/2}^{\pi/2}\cos^3\theta\,d\theta\\
&=\boxed{\frac49}.
\end{aligned}
$$
