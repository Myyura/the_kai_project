---
sidebar_label: "2024年度 数理科学 [II-5]"
tags:
  - Osaka-University
  - Mathematics.Real-Analysis.Interchange-of-Limit-Derivative-and-Integral
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [II-5]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

ルベーグ測度に関して可積分な非負関数 $f:(0,\infty)\to[0,\infty)$ に対して、各自然数 $n$ ごとに

$$
f_n(x,y)=\frac{f(x)^n}{f(x)^n+(e^{x+y}-1)y^n}\qquad(x,y>0)
$$

とする。以下の集合はすべて $(0,\infty)^2$ 内で定め、$A=\{(x,y):y<f(x)\}$, $B=\{(x,y):y=f(x)\}$, $C=\{(x,y):y>f(x)\}$ とおく。

(1) $f_n$ の極限が、$A$ 上で1、$B$ 上で $e^{-(x+y)}$、$C$ 上で0となることを示せ。

(2) $g=1$（$A$ 上）、$g=e^{-(x+y)}$（$B\cup C$ 上）とするとき、$0\le f_n\le g$ を示せ。

(3) $\lim_{n\to\infty}\int_0^\infty\int_0^\infty f_n(x,y)\,dx\,dy=\int_0^\infty f(x)\,dx$ を示せ。

## **Kai**

### (1)

$f(x)>0$ のとき

$$
f_n(x,y)=\frac1{1+(e^{x+y}-1)(y/f(x))^n}.
$$

比 $y/f(x)$ が1未満、1、1より大きい場合に分ければ、順に1、$e^{-(x+y)}$、0に収束する。$f(x)=0$ のときは $y>0$ なので $C$ に属し、$f_n=0$ である。

### (2)

$A$ 上では $0\le f_n\le1$。$B\cup C$ では $f(x)=0$ の場合を除き $(y/f(x))^n\ge1$ より

$$
f_n\le\frac1{1+(e^{x+y}-1)}=e^{-(x+y)}.
$$

### (3)

トネリの定理より

$$
\iint 1_A(x,y)\,dx\,dy=\int_0^\infty f(x)\,dx<\infty.
$$

また $g\le1_A+e^{-(x+y)}$ なので $\iint g\le\int f+1<\infty$。各 $x$ における $B$ の縦断面は高々1点であるから、再びトネリの定理により $B$ の平面測度は0。従って $f_n\to1_A$ はほとんど至る所で成立し、優収束定理から

$$
\boxed{\lim_{n\to\infty}\iint f_n=\iint1_A=\int_0^\infty f(x)\,dx}.
$$
