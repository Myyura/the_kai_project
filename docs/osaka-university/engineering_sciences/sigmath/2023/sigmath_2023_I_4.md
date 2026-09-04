---
sidebar_label: "2023年度 数理科学 I [4]"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations
  - Mathematics.Calculus
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 I \[4\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

(1) $\alpha,x>0$ に対し $\int_0^xe^{-t}\sin(\alpha t)\,dt$ を求めよ。

(2) $[0,\infty)$ 上の実数値連続関数 $f$ に対する積分方程式

$$
f(x)=e^{-x}\sin x+\int_0^{\pi/2}f(t)\,dt
$$

を満たす関数を一つ求めよ。

(3) $[0,\infty)$ 上の実数値連続関数 $y$ に対する積分方程式

$$
y(x)=\cos^3x+\int_0^xy(t)\,dt
$$

を満たす関数を一つ求めよ。

## **Kai**

### (1)
部分積分を二度行うと

$$
\boxed{\int_0^xe^{-t}\sin(\alpha t)\,dt
=\frac{\alpha-e^{-x}\{\sin(\alpha x)+\alpha\cos(\alpha x)\}}{1+\alpha^2}}.
$$

### (2)
$c=\int_0^{\pi/2}f(t)\,dt$ とおくと $f(x)=e^{-x}\sin x+c$。積分して

$$
c=\frac{1-e^{-\pi/2}}2+\frac\pi2c.
$$

ゆえに

$$
\boxed{f(x)=e^{-x}\sin x+\frac{1-e^{-\pi/2}}{2-\pi}}.
$$

### (3)
積分方程式を微分すると

$$
y'-y=-\frac34(\sin x+\sin3x),\qquad y(0)=1.
$$

積分因子 $e^{-x}$ と (1) により

$$
\boxed{y(x)=\frac25e^x+\frac38(\sin x+\cos x)+\frac3{40}(\sin3x+3\cos3x)}.
$$

この微分方程式を $0$ から $x$ まで積分し、$y(0)=1$ を用いれば元の積分方程式も満たす。
