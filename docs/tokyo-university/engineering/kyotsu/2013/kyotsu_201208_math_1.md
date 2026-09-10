---
sidebar_label: '2012年8月実施 数学 第1問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Cauchy-Euler-Equation
  - Mathematics.Calculus.Improper-Integral
---

# 東京大学 工学系研究科 2012年8月実施 数学 第1問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. 次の微分方程式の一般解をそれぞれ求めよ。

1. $y''+4y'+4y=4e^{2x}$。
2. $x^3y^{(3)}-3x^2y''+6xy'-6y=2x^4e^x$。

II. $\displaystyle\int_0^{\pi/2}\cos(2\theta)\log(\cos\theta)\,d\theta$ を計算せよ。

#### 题目描述

I. 分别求下列微分方程的通解：

1. $y''+4y'+4y=4e^{2x}$。
2. $x^3y^{(3)}-3x^2y''+6xy'-6y=2x^4e^x$。

II. 计算 $\displaystyle\int_0^{\pi/2}\cos(2\theta)\log(\cos\theta)\,d\theta$。

## **Kai**

### I

1. 特性方程式は $(\lambda+2)^2=0$。特解を $Ae^{2x}$ とおくと $16A=4$ なので、

$$
\boxed{y=(C_1+C_2x)e^{-2x}+\frac14e^{2x}}.
$$

2. $x\ne0$ の区間で $y=xu$ とおくと左辺は $x^4u^{(3)}$ となる。従って $u^{(3)}=2e^x$ を三回積分して、

$$
\boxed{y=C_1x+C_2x^2+C_3x^3+2xe^x}.
$$

### II

$\sin2\theta\log\cos\theta\to0$（$\theta\uparrow\pi/2$）を用い、部分積分すると、

$$
I=\left[\frac12\sin2\theta\log\cos\theta\right]_0^{\pi/2}
+\frac12\int_0^{\pi/2}\sin2\theta\tan\theta\,d\theta
=\int_0^{\pi/2}\sin^2\theta\,d\theta
=\boxed{\frac\pi4}.
$$

