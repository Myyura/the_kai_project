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

関数 $A(\omega),B(\omega),\alpha(\omega)$、および $\beta(\omega)$ が、任意の正の実数 $\omega$ および $t$ について下記の2つの式を満たすとする。

$$
\begin{aligned}
&A(\omega)\sin(\omega t-\alpha(\omega))\\
&\quad=\int_0^\infty e^{-\eta\tau}\sin(\omega(t-\tau))\,d\tau,
\end{aligned}
$$

$$
\begin{aligned}
&B(\omega)\sin(\omega t-\beta(\omega))\\
&\quad=\int_0^\infty e^{-\eta\tau}A(\omega)\\
&\qquad\times\sin(\omega(t-\tau)-\alpha(\omega))\,d\tau.
\end{aligned}
$$

ここで、$\eta$ は正の定数である。以下の問いに答えよ。なお、任意の正の実数 $a,b$ および任意の実数 $c$ について下式が成立するという事実を用いてよい。（50点）

$$
\int_0^\infty e^{-at}\sin(bt+c)\,dt
=\frac{a\sin c+b\cos c}{a^2+b^2}.
$$

(1) $A(\omega),\sin(\alpha(\omega))$、および $\cos(\alpha(\omega))$ を求めよ。

(2) $B(\omega)$ および $\beta(\omega)$ を求めよ。ここで、$A(\omega)$ および $\alpha(\omega)$ のうち必要なものを用いてよい。

### 题目描述

设函数 $A(\omega),B(\omega),\alpha(\omega),\beta(\omega)$ 对任意正实数 $\omega,t$ 满足下列两式。

$$
\begin{aligned}
&A(\omega)\sin(\omega t-\alpha(\omega))\\
&\quad=\int_0^\infty e^{-\eta\tau}\sin(\omega(t-\tau))\,d\tau,
\end{aligned}
$$

$$
\begin{aligned}
&B(\omega)\sin(\omega t-\beta(\omega))\\
&\quad=\int_0^\infty e^{-\eta\tau}A(\omega)\\
&\qquad\times\sin(\omega(t-\tau)-\alpha(\omega))\,d\tau.
\end{aligned}
$$

其中 $\eta$ 为正常数。回答以下各问。可以使用下式对任意正实数 $a,b$ 和任意实数 $c$ 成立这一事实。（50分）

$$
\int_0^\infty e^{-at}\sin(bt+c)\,dt
=\frac{a\sin c+b\cos c}{a^2+b^2}.
$$

(1) 求 $A(\omega),\sin(\alpha(\omega)),\cos(\alpha(\omega))$。

(2) 求 $B(\omega)$ 和 $\beta(\omega)$。可以使用 $A(\omega)$、$\alpha(\omega)$ 中所需的量。

## **Kai**

振幅を $A,B>0$ と取る通常の表示を用いる。位相は $2\pi$ の整数倍を除いて定まる。

### (1)

積分を計算して $\sin\omega t$、$\cos\omega t$ の係数を比較すると

$$
\int_0^\infty e^{-\eta\tau}\sin\{\omega(t-\tau)\}\,d\tau
=\frac{\eta\sin\omega t-\omega\cos\omega t}{\eta^2+\omega^2},
$$

$$
\begin{gathered}
A\cos\alpha=\frac{\eta}{\eta^2+\omega^2},\\
A\sin\alpha=\frac{\omega}{\eta^2+\omega^2}.
\end{gathered}
$$

よって

$$
\boxed{\begin{gathered}
A=\frac1{\sqrt{\eta^2+\omega^2}},\\
\sin\alpha=\frac{\omega}{\sqrt{\eta^2+\omega^2}},\\
\cos\alpha=\frac{\eta}{\sqrt{\eta^2+\omega^2}}
\end{gathered}}.
$$

$0<\alpha<\pi/2$ と選べば $\alpha=\arctan(\omega/\eta)$。

### (2)

(1) の計算は位相をずらしても同様である。2回目の積分により、振幅はさらに $A$ 倍、位相遅れはさらに $\alpha$ 増える。従って

$$
\boxed{\begin{gathered}
B=A^2=\frac1{\eta^2+\omega^2},\\
\beta=2\alpha\pmod{2\pi}
\end{gathered}}.
$$
