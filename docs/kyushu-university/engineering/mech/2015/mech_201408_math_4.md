---
sidebar_label: "2014年8月実施 問4（数学）"
tags:
  - Kyushu-University
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Gamma-Function
---

# 九州大学 工学府 機械系専攻 2014年8月実施 数学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

関数 $f(x)$ は、以下のように定義される。

$$
f(x)=\int_0^\infty e^{-t}t^{x-1}\,dt.
$$

このとき、次の各問いに答えよ。（50点）

1. $f(1)$ を求めよ。
2. $f(x+1)=xf(x)$ を示せ。
3. $f(n+1)$ を求めよ。ただし $n$ は自然数とする。
4. $f(1/2)$ を求めよ。
5. $f(n+1/2)$ を求めよ。ただし $n$ は自然数とする。

#### 题目描述

由 Gamma 积分定义求 $f(1)$，证明递推关系，再求正整数和半整数处的值。

## **Kai**

積分は $x>0$ で収束する。この範囲で以下を計算する。

### (1)

$$
\boxed{f(1)=\int_0^\infty e^{-t}dt=1}.
$$

### (2)

$x>0$ では端点項が消えるので、部分積分により

$$
f(x+1)=\left[-e^{-t}t^x\right]_0^\infty+x\int_0^\infty e^{-t}t^{x-1}dt
=\boxed{xf(x)}.
$$

### (3)

$$
\boxed{f(n+1)=n(n-1)\cdots1\cdot f(1)=n!}.
$$

### (4)

$t=u^2$ と変換すると $f(1/2)=2\int_0^\infty e^{-u^2}du$。$J=\int_0^\infty e^{-u^2}du$ とおけば、極座標変換から

$$
J^2=\int_0^{\pi/2}\int_0^\infty e^{-\rho^2}\rho\,d\rho\,d\theta=\frac\pi4.
$$

$J>0$ より $\boxed{f(1/2)=\sqrt\pi}$。

### (5)

(2) を繰り返すと

$$
\boxed{f\left(n+\frac12\right)
=\frac{(2n-1)(2n-3)\cdots1}{2^n}\sqrt\pi
=\frac{(2n)!}{4^nn!}\sqrt\pi}.
$$
