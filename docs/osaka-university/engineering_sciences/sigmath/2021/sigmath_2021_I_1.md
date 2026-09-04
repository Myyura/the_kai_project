---
sidebar_label: "2021年度 数理科学 I [1]"
tags:
  - Osaka-University
  - Mathematics.Calculus
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 I \[1\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$f(s)=(1+e^{-s})^{-1}$ ($s\in\mathbb R$) とする。$\alpha>0$ とし、

$$
D=\{(x,y)\mid0\le y\le(2x+3y)^2,\ 0\le2x+3y\le1\},\qquad
I_\alpha=\iint_Df(2\alpha x+3\alpha y)\,dx\,dy
$$

とおく。

(1) $X=2x+3y,Y=y$ のヤコビアン $\partial(x,y)/\partial(X,Y)$ を求めよ。

(2) $Y\ge0$ に対し $\int_{\sqrt Y}^1(1+e^{-\alpha X})^{-1}\,dX$ を求めよ。

(3) $\lim_{\alpha\to\infty}I_\alpha$ を求めよ。

## **Kai**

### (1)
$x=(X-3Y)/2,y=Y$ より

$$
\boxed{\frac{\partial(x,y)}{\partial(X,Y)}=\det\begin{pmatrix}1/2&-3/2\\0&1\end{pmatrix}=\frac12}.
$$

### (2)

$$
\boxed{\frac1\alpha\log\frac{1+e^\alpha}{1+e^{\alpha\sqrt Y}}}
$$

である。$\alpha^{-1}\log(1+e^{\alpha X})$ を微分すれば確認できる。

### (3)
変換後の領域は $0\le X\le1,0\le Y\le X^2$ なので

$$
I_\alpha=\frac12\int_0^1\frac{X^2}{1+e^{-\alpha X}}\,dX.
$$

被積分関数は $X^2$ で支配され、$X>0$ では $X^2$ に収束する。優収束定理より

$$
\boxed{\lim_{\alpha\to\infty}I_\alpha=\frac12\int_0^1X^2\,dX=\frac16}.
$$
