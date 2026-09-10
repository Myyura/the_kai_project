---
sidebar_label: '2024年8月実施 数学 第1問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Bernoulli-Equation
  - Mathematics.Differential-Equations.Method-of-Undetermined-Coefficients
  - Mathematics.Vector-Calculus.Polar-Coordinates
  - Mathematics.Calculus.Parametric-Differentiation
---

# 東京大学 工学系研究科 2024年8月実施 数学 第1問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. 次の微分方程式の一般解 $y(x)$ を求めよ。

1. $\displaystyle y'+\frac yx=\left(\frac yx\right)^3$。
2. $y''-5y'+6[y+\cos(3x)]=0$。

II. 原点を極、$x$ 軸の正の部分を始線とする極座標系で、曲線 $C$ を

$$
r=2+\cos\theta,\qquad0\le\theta<2\pi
$$

とする。

1. $C$ が囲む領域の面積を求めよ。
2. $C$ 上の点 $(r,\theta)=((4+\sqrt2)/2,\pi/4)$ における接線の、$xy$ 直交座標系での傾きを求めよ。

#### 题目描述

I. 求下列微分方程的一般解 $y(x)$。

1. $\displaystyle y'+\frac yx=\left(\frac yx\right)^3$。
2. $y''-5y'+6[y+\cos(3x)]=0$。

II. 在以原点为极点、$x$ 轴正半轴为始边的极坐标系中，曲线 $C$ 为

$$
r=2+\cos\theta,\qquad0\le\theta<2\pi.
$$

1. 求 $C$ 所围区域的面积。
2. 求 $C$ 上点 $(r,\theta)=((4+\sqrt2)/2,\pi/4)$ 处切线在 $xy$ 坐标系中的斜率。

## **Kai**

### I.1

$x\ne0$ の区間で考える。$y=0$ は解である。$y\ne0$ に対して $v=y^{-2}$ とおくと、

$$
v'-\frac2xv=-\frac2{x^3},\qquad
\left(\frac v{x^2}\right)'=-\frac2{x^5}.
$$

積分して $v=Cx^2+1/(2x^2)$ を得る。定数を取り直すと、

$$
\boxed{y=0\quad\text{または}\quad y=\pm\frac{\sqrt2\,x}{\sqrt{1+Cx^4}}}.
$$

実数解は $x\ne0$ かつ $1+Cx^4>0$ の区間で符号を固定して考える。$C=0$ は $y=\pm\sqrt2 x$ を含む。

### I.2

同次方程式の特性方程式は $(\lambda-2)(\lambda-3)=0$ である。特解を $A\cos3x+B\sin3x$ として係数を比較すると、

$$
-3A-15B=-6,\qquad15A-3B=0.
$$

よって

$$
\boxed{y=C_1e^{2x}+C_2e^{3x}+\frac{\cos3x+5\sin3x}{13}}.
$$

### II.1

$r\ge1$ なので、囲まれる領域の面積は

$$
\boxed{S=\frac12\int_0^{2\pi}(2+\cos\theta)^2\,d\theta=\frac{9\pi}{2}}.
$$

### II.2

$x=r\cos\theta,y=r\sin\theta,r'=-\sin\theta$ より、

$$
\frac{dy}{dx}=\frac{r'\sin\theta+r\cos\theta}{r'\cos\theta-r\sin\theta}.
$$

$\theta=\pi/4$ では $x'=-1-\sqrt2,y'=\sqrt2$ なので、

$$
\boxed{\frac{dy}{dx}=\frac{\sqrt2}{-1-\sqrt2}=\sqrt2-2}.
$$

