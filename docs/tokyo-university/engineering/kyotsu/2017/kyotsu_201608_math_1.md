---
sidebar_label: '2016年8月実施 数学 第1問'
tags:
  - Tokyo-University
  - Mathematics.Calculus.Integration-by-Substitution
  - Mathematics.Differential-Equations.Clairaut-Equation-and-Singular-Solution
  - Mathematics.Differential-Equations.Cauchy-Euler-Equation
  - Mathematics.Differential-Equations.Method-of-Undetermined-Coefficients
---

# 東京大学 工学系研究科 2016年8月実施 数学 第1問

## **Author**
祭音Myyura

## **Description**

出典：[公式2017年度数学試験](https://www.t.u-tokyo.ac.jp/hubfs/pdf/H29_suugaku_J.pdf)、第1問。

I、以下の定積分を求めよ。

$$
\begin{align}
I = \int_2^4 \frac{\text{d}x}{\sqrt{(x-2)(4-x)}} \tag{1}
\end{align}
$$

II、以下の微分方程式の一般解と特異解を求めよ。

$$
\begin{align}
y = x \frac{\text{d}y}{\text{d}x} + \frac{\text{d}y}{\text{d}x} + \bigg(\frac{\text{d}y}{\text{d}x} \bigg)^2 \tag{2}
\end{align}
$$

III、以下の微分方程式の一般解を求めよ。

$$
\begin{align}
x^2 \frac{\text{d}^2y}{\text{d}x^2} - x \frac{\text{d}y}{\text{d}x} - 8y = x^2 \tag{3}
\end{align}
$$

#### 题目描述

完成以下三问：

1. 计算定积分

   $$
   I=\int_2^4\frac{\mathrm dx}{\sqrt{(x-2)(4-x)}}.
   $$

2. 求微分方程

   $$
   y=x\frac{\mathrm dy}{\mathrm dx}+\frac{\mathrm dy}{\mathrm dx}
   +\left(\frac{\mathrm dy}{\mathrm dx}\right)^2
   $$

   的一般解和奇解。
3. 求欧拉型非齐次微分方程

   $$
   x^2\frac{\mathrm d^2y}{\mathrm dx^2}
   -x\frac{\mathrm dy}{\mathrm dx}-8y=x^2
   $$

   的一般解。

## **Kai**

### I

$x=3+\sin\theta$（$-\pi/2\le\theta\le\pi/2$）とおけば、

$$
\boxed{I=\int_{-\pi/2}^{\pi/2}\frac{\cos\theta}{\sqrt{1-\sin^2\theta}}\,\mathrm d\theta=\pi.}
$$

### II

$p=y'$ とおくと $y=(x+1)p+p^2$。微分して

$$
(x+1+2p)p'=0.
$$

$p=C$ のとき一般解、$p=-(x+1)/2$ のとき特異解が得られる：

$$
\boxed{y=Cx+C+C^2},\qquad
\boxed{y=-\frac{(x+1)^2}{4}}.
$$

### III

同次方程式に $y=x^r$ を代入すると、

$$
r(r-1)-r-8=(r-4)(r+2)=0.
$$

特解を $y_p=Ax^2$ とおけば $-8Ax^2=x^2$ より $A=-1/8$。したがって

$$
\boxed{y=C_1x^{-2}+C_2x^4-\frac{x^2}{8},\qquad x\ne0.}
$$

積分定数は $x>0$ と $x<0$ の各区間で独立に選べる。
