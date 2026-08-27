---
sidebar_label: 2025年8月実施 必須問題（数学）問1
tags:
  - University-of-Electro-Communications
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Initial-Value-Problem
---
# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2025年8月実施 必須問題（数学）問1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$R>0$ とし、

$$
D_R=\{(x,y)^{\mathsf T}\in\mathbb R^2\mid x^2+y^2\le R\}
$$

とする。次の問いに答えよ。

1. $\displaystyle\iint_{D_R}e^{-(x^2+y^2)}\,dx\,dy$ を求めよ。
2. 微分方程式 $y''+2y'+5y=5e^{-2x}$ の一般解を求めよ。
3. 第2問の解が $y(0)=0$, $y'(0)=1$ を満たすとき、$y(1)$ を求めよ。

### 题目描述

计算圆域 $x^2+y^2\le R$ 上的二重积分；求二阶常系数非齐次微分方程的通解；再利用给定初值求 $y(1)$。

## **Kai**

### (1)

$x=r\cos\theta$, $y=r\sin\theta$ とおくと、$0\le r\le\sqrt R$, $0\le\theta\le2\pi$ である。よって

$$
\begin{aligned}
\iint_{D_R}e^{-(x^2+y^2)}\,dx\,dy
&=\int_0^{2\pi}\int_0^{\sqrt R}e^{-r^2}r\,dr\,d\theta\\
&=\boxed{\pi(1-e^{-R})}.
\end{aligned}
$$

### (2)

同次方程式の特性方程式は

$$
\lambda^2+2\lambda+5=0,
$$

より $\lambda=-1\pm2i$ である。また、$y_p=ae^{-2x}$ を代入すると $5a=5$ より $a=1$ となる。したがって

$$
\boxed{y=e^{-x}(C_1\cos2x+C_2\sin2x)+e^{-2x}}.
$$

### (3)

$y(0)=0$ より $C_1=-1$、$y'(0)=1$ より $C_2=1$ である。ゆえに

$$
\boxed{y(1)=e^{-1}(-\cos2+\sin2)+e^{-2}}.
$$
