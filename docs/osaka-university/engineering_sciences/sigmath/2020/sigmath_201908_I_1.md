---
sidebar_label: "2019年8月実施 数理科学 I [1]"
tags:
  - Osaka-University
  - Mathematics.Calculus
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 I \[1\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

(1) 各 $n\in\mathbb N$ に対して $I_n(x)=\int_0^x(1+r^2)^{-n}\,dr$ とおく。漸化式

$$
I_{n+1}(x)=\frac1{2n}\left\{\frac{x}{(1+x^2)^n}+(2n-1)I_n(x)\right\}
$$

が成り立つことを示せ。

(2) $D=\{(x,y,z)\in\mathbb R^3\mid x,y,z\ge0,\ x^2+y^2+z^2\le1\}$ とする。積分

$$
\iiint_D\frac{dx\,dy\,dz}{(1+x^2+y^2+z^2)^3}
$$

を計算せよ。

## **Kai**

### (1)

$$
\frac d{dr}\frac{r}{(1+r^2)^n}
=\frac{2n}{(1+r^2)^{n+1}}-\frac{2n-1}{(1+r^2)^n}.
$$

両辺を $0$ から $x$ まで積分し、整理すればよい。

### (2)
球座標を用いると、求める積分は

$$
\frac\pi2\int_0^1\frac{r^2}{(1+r^2)^3}\,dr
=\frac\pi2\{I_2(1)-I_3(1)\}.
$$

$I_1(1)=\pi/4$ と (1) より

$$
I_2(1)=\frac14+\frac\pi8,\qquad I_3(1)=\frac14+\frac{3\pi}{32}.
$$

したがって答えは $\boxed{\pi^2/64}$。
