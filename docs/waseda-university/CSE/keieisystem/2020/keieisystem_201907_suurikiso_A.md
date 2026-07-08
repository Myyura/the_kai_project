---
sidebar_label: "2019年7月実施 数理基礎 A"
tags:
  - Waseda-University
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Multivariable-Differentiation
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2019年7月実施 数理基礎 A

## **Author**
祭音Myyura

## **Description**

1. $x\to\infty$ のとき $f(x)\to\infty$ かつ $f(x)/x\to0$ となる関数を3つ挙げよ。
2. $\displaystyle y=\frac{x+2}{(x+1)^2(x+3)^2}$ を微分せよ。
3. $z=3x^3+3y^3-9xy$ の極値をすべて求めよ。

## **Kai**

### [小問 1]

例えば

$$
\boxed{f_1(x)=\sqrt{x},\qquad f_2(x)=\log x,\qquad
f_3(x)=\frac{x}{\log x}}
$$

が条件を満たす。いずれも $x\to\infty$ で無限大へ発散し、

$$
\frac{f_1(x)}x=\frac1{\sqrt x}\to0,\qquad
\frac{f_2(x)}x=\frac{\log x}{x}\to0,\qquad
\frac{f_3(x)}x=\frac1{\log x}\to0
$$

である。

### [小問 2]

$u=x+2$ とおけば $(x+1)(x+3)=u^2-1$ なので

$$
y=\frac{u}{(u^2-1)^2}.
$$

したがって

$$
\begin{aligned}
\frac{dy}{dx}
&=(u^2-1)^{-2}-4u^2(u^2-1)^{-3}\\
&=-\frac{3u^2+1}{(u^2-1)^3}.
\end{aligned}
$$

元へ戻すと

$$
\boxed{
\frac{dy}{dx}
=-\frac{3(x+2)^2+1}{(x+1)^3(x+3)^3}
}.
$$

### [小問 3]

停留条件は

$$
z_x=9x^2-9y=0,\qquad z_y=9y^2-9x=0.
$$

したがって $y=x^2$、$x=y^2$ より、停留点は $(0,0)$ と $(1,1)$ である。Hessian は

$$
H=\begin{pmatrix}18x&-9\\-9&18y\end{pmatrix}.
$$

$(0,0)$ では $\det H=-81<0$ なので鞍点である。$(1,1)$ では

$$
\det H=18^2-9^2=243>0,\qquad z_{xx}=18>0
$$

なので極小点であり、

$$
\boxed{z(1,1)=-3}
$$

である。極大値は存在しない。
