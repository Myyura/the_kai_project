---
sidebar_label: "2021年度 数理科学 I [3]"
tags:
  - Osaka-University
  - Mathematics.Complex-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 I \[3\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$a\in\mathbb C$、$\rho>0$ とする。領域 $D=\{z\in\mathbb C:0<|z-a|<\rho\}$ で正則な関数 $f(z)$ の $z=a$ のまわりのローラン展開とは、$D$ において $f(z)=\sum_{n=-\infty}^\infty a_n(z-a)^n$、$a_n\in\mathbb C$ と表すことである。

(1) $g(z)=\sin(1/z)$ を $z=0$ のまわりでローラン展開せよ。

(2) $h(z)=\sin(1/z)/(1-z^2)$ を $z=0$ のまわりでローラン展開せよ。

(3) 円 $|z|=1/2$ を反時計回りに一周する $C$ に沿って $\int_Ch(z)\,dz$ を求めよ。

## **Kai**

### (1)
正弦のべき級数に $1/z$ を代入して

$$
\boxed{g(z)=\sum_{k=0}^\infty\frac{(-1)^k}{(2k+1)!}z^{-(2k+1)}}\qquad(z\ne0).
$$

### (2)
$0<|z|<1$ で $1/(1-z^2)=\sum_{j=0}^\infty z^{2j}$。絶対収束する二重級数の同じ次数を集めると

$$
\boxed{h(z)=\sum_{r=0}^\infty\left(\sum_{k=r}^\infty\frac{(-1)^k}{(2k+1)!}\right)z^{-(2r+1)}
+\sin1\sum_{j=0}^\infty z^{2j+1}}.
$$

偶数次数の係数はすべて $0$ である。

### (3)
$z^{-1}$ の係数は $\sum_{k=0}^\infty(-1)^k/(2k+1)!=\sin1$。ゆえに

$$
\boxed{\int_Ch(z)\,dz=2\pi i\sin1}.
$$
