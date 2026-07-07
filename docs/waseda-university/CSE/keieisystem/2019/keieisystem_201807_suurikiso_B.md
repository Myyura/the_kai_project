---
sidebar_label: "2018年7月実施 数理基礎 B"
tags:
  - Waseda-University
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Double-Integral
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2018年7月実施 数理基礎 B

## **Author**
祭音Myyura

## **Description**

1. $a>0$ とする。$\displaystyle\int_0^{a/2}\frac{dx}{\sqrt{a^2-x^2}}$ を求めよ。
2. $\displaystyle\int_0^1\frac{dx}{2+e^x}$ を求めよ。
3. $D_n=\{(x,y)\mid x^2+y^2\leq n^2\}$ とし、

   $$
   S_n=\iint_{D_n}\frac{dx\,dy}{(x^2+y^2+3)^2}
   $$

   を計算せよ。また $\lim_{n\to\infty}S_n$ を求めよ。

## **Kai**

### [小問 1]

$$
\int\frac{dx}{\sqrt{a^2-x^2}}=\arcsin\frac xa
$$

なので

$$
\boxed{
\int_0^{a/2}\frac{dx}{\sqrt{a^2-x^2}}
=\arcsin\frac12-\arcsin0=\frac\pi6
}.
$$

### [小問 2]

$u=e^x$ とおくと $dx=du/u$ であり、積分区間は $1\leq u\leq e$ となる。

$$
\begin{aligned}
\int_0^1\frac{dx}{2+e^x}
&=\int_1^e\frac{du}{u(u+2)}\\
&=\frac12\left[\log u-\log(u+2)\right]_1^e\\
&=\boxed{\frac12\log\frac{3e}{e+2}}.
\end{aligned}
$$

### [小問 3]

極座標 $x=r\cos\theta$、$y=r\sin\theta$ を用いると

$$
\begin{aligned}
S_n
&=\int_0^{2\pi}\int_0^n\frac{r}{(r^2+3)^2}\,dr\,d\theta\\
&=2\pi\left[-\frac{1}{2(r^2+3)}\right]_0^n\\
&=\boxed{\pi\left(\frac13-\frac1{n^2+3}\right)
=\frac{\pi n^2}{3(n^2+3)}}.
\end{aligned}
$$

よって

$$
\boxed{\lim_{n\to\infty}S_n=\frac\pi3}.
$$
