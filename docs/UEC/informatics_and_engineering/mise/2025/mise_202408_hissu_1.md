---
sidebar_label: 2024年8月実施 必須問題（数学）問1
tags:
  - University-of-Electro-Communications
  - Mathematics.Vector-Calculus.Polar-Coordinates
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2024年8月実施 必須問題（数学）問1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

1. 極方程式 $r=a(1+\cos\theta)$ $(a>0)$ で表される曲線上で、接線が $y$ 軸と平行になる点をすべて求めよ。
2. 曲面 $x^2+2y+z=1$ と平面 $x=0,y=0,z=0$ が囲む部分の体積を求めよ。
3. 次の微分方程式の一般解を求めよ。

$$
\text{(i) }\frac{dy}{dx}=2x(y-1),
\qquad
\text{(ii) }4\frac{d^2y}{dx^2}+4\frac{dy}{dx}+y=7e^{3x}+x.
$$

### 题目描述

求心形线上竖直切线对应的点、第一卦限内由曲面和平面围成的体积，以及一个可分离一阶方程和一个常系数二阶方程的通解。

## **Kai**

### (1)

$$
x=a(1+\cos\theta)\cos\theta,\qquad
y=a(1+\cos\theta)\sin\theta
$$

より、

$$
\frac{dx}{d\theta}=-a\sin\theta(1+2\cos\theta).
$$

$dx/d\theta=0$ かつ $dy/d\theta\neq0$ を満たすのは

$$
\theta=0,\quad \frac{2\pi}{3},\quad\frac{4\pi}{3}
$$

である。なお、$\theta=\pi$ の原点は尖点で、その接線は $x$ 軸である。したがって求める点は

$$
\boxed{(2a,0),\quad
\left(-\frac a4,\frac{\sqrt3a}{4}\right),\quad
\left(-\frac a4,-\frac{\sqrt3a}{4}\right)}.
$$

### (2)

領域は

$$
0\leq x\leq1,\qquad
0\leq y\leq\frac{1-x^2}{2},\qquad
0\leq z\leq1-x^2-2y
$$

である。よって

$$
\begin{aligned}
V&=\int_0^1\int_0^{(1-x^2)/2}(1-x^2-2y)\,dy\,dx\\
&=\frac14\int_0^1(1-x^2)^2\,dx
=\boxed{\frac{2}{15}}.
\end{aligned}
$$

### (3)

#### (i)

$$
\frac{dy}{y-1}=2x\,dx
$$

を積分して

$$
\boxed{y=1+C e^{x^2}}.
$$

#### (ii)

同次方程式の特性方程式は $(2\lambda+1)^2=0$ である。また、特解を

$$
y_p=Ae^{3x}+Bx+D
$$

とおくと $A=1/7,B=1,D=-4$ を得る。したがって

$$
\boxed{y=(C_1+C_2x)e^{-x/2}+\frac17e^{3x}+x-4}.
$$
