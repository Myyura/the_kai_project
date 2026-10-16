---
sidebar_label: "2017年8月実施 問4（数学）"
tags:
  - Kyushu-University
  - Mathematics.Calculus.Improper-Integral
---

# 九州大学 工学府 機械系専攻 2017年8月実施 数学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

関数 $A(\omega),B(\omega),\alpha(\omega),\beta(\omega)$ が、任意の正の実数 $\omega,t$ について下記の2つの式を満たすとする。

$$
A(\omega)\sin\{\omega t-\alpha(\omega)\}
=\int_0^\infty e^{-\eta\tau}\sin\{\omega(t-\tau)\}\,d\tau,
$$

$$
B(\omega)\sin\{\omega t-\beta(\omega)\}
=\int_0^\infty e^{-\eta\tau}A(\omega)\sin\{\omega(t-\tau)-\alpha(\omega)\}\,d\tau.
$$

ここで、$\eta$ は正の定数である。以下の問いに答えよ。なお、任意の正の実数 $a,b$ および任意の実数 $c$ について下式が成立するという事実を用いてよい。（50点）

$$
\int_0^\infty e^{-at}\sin(bt+c)dt=\frac{a\sin c+b\cos c}{a^2+b^2}.
$$

1. $A(\omega),\sin\alpha(\omega),\cos\alpha(\omega)$ を求めよ。
2. $B(\omega),\beta(\omega)$ を求めよ。ここで、$A(\omega),\alpha(\omega)$ のうち必要なものを用いてよい。

#### 题目描述

两个依次进行的指数核卷积，将正弦信号变成有振幅与相位滞后的正弦信号。求第一次的振幅和相位正余弦，以及第二次的振幅与相位。

## **Kai**

振幅を $A,B>0$ と取る通常の表示を用いる。位相は $2\pi$ の整数倍を除いて定まる。

### (1)

積分を計算して $\sin\omega t$、$\cos\omega t$ の係数を比較すると

$$
\int_0^\infty e^{-\eta\tau}\sin\{\omega(t-\tau)\}\,d\tau
=\frac{\eta\sin\omega t-\omega\cos\omega t}{\eta^2+\omega^2},
$$

$$
A\cos\alpha=\frac{\eta}{\eta^2+\omega^2},\qquad
A\sin\alpha=\frac{\omega}{\eta^2+\omega^2}.
$$

よって

$$
\boxed{A=\frac1{\sqrt{\eta^2+\omega^2}},\quad
\sin\alpha=\frac{\omega}{\sqrt{\eta^2+\omega^2}},\quad
\cos\alpha=\frac{\eta}{\sqrt{\eta^2+\omega^2}}}.
$$

$0<\alpha<\pi/2$ と選べば $\alpha=\arctan(\omega/\eta)$。

### (2)

(1) の計算は位相をずらしても同様である。2回目の積分により、振幅はさらに $A$ 倍、位相遅れはさらに $\alpha$ 増える。従って

$$
\boxed{B=A^2=\frac1{\eta^2+\omega^2},\qquad
\beta=2\alpha\pmod{2\pi}}.
$$
