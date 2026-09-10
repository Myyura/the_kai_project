---
sidebar_label: '2012年8月実施 数学 第3問'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Laurent-Series
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
---

# 東京大学 工学系研究科 2012年8月実施 数学 第3問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. $f(z)=1/[(z-1)z(z+2)]$ とする。
(1) $1<|z-1|<3$ におけるローラン展開を求めよ。
(2) $|z-1|=2$ を反時計回りに二周する経路 $C$ に沿う積分 $\oint_C f(z)\,dz$ を求めよ。

II. $g(z)=z^2/(z^4+1)$ とする。
(1) 上半平面にある極をすべて求めよ。
(2) 留数定理により $\int_{-\infty}^\infty x^2/(x^4+1)\,dx$ を計算せよ。

#### 题目描述

I. 设 $f(z)=1/[(z-1)z(z+2)]$。
(1) 求 $1<|z-1|<3$ 上的 Laurent 展开；(2) 对沿 $|z-1|=2$ 逆时针绕行两周的闭路 $C$，求 $\oint_C f(z)\,dz$。

II. 设 $g(z)=z^2/(z^4+1)$。(1) 求上半平面的全部极点；(2) 用留数定理计算 $\int_{-\infty}^\infty x^2/(x^4+1)\,dx$。

## **Kai**

### I

$w=z-1$ とおき、部分分数に分解すると、

$$
f(z)=\frac1{3w}-\frac1{2(w+1)}+\frac1{6(w+3)}.
$$

$1<|w|<3$ でそれぞれ展開して、

$$
\boxed{f(z)=\frac1{3w}-\frac12\sum_{n=0}^\infty\frac{(-1)^n}{w^{n+1}}
+\frac1{18}\sum_{n=0}^\infty\frac{(-1)^nw^n}{3^n}}.
$$

$w^{-1}$ の係数は $1/3-1/2=-1/6$ である。経路は二周するから、

$$
\boxed{\oint_C f(z)\,dz=4\pi i\left(-\frac16\right)=-\frac{2\pi i}3}.
$$

### II

上半平面の極は $\boxed{z_1=e^{i\pi/4},\ z_2=e^{3i\pi/4}}$ で、いずれも一位の極であり、
$\operatorname{Res}_{z_j}g=1/(4z_j)$。
上半円弧の積分は $O(R^{-1})\to0$ なので、

$$
\boxed{\int_{-\infty}^\infty\frac{x^2}{x^4+1}\,dx
=2\pi i\left(\frac1{4z_1}+\frac1{4z_2}\right)=\frac\pi{\sqrt2}}.
$$

