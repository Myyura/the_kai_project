---
sidebar_label: "2019年度 基礎科目 問題3"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.Systems-of-ODEs
  - Mathematics.Differential-Equations.Initial-Value-Problem
---

# 京都大学 理学研究科 数学・数理解析専攻 2019年度 基礎科目 問題3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$(x_0,y_0)\in\mathbb R^2\setminus\{(0,0)\}$ に対して、$\mathbb R$ 上の連立常微分方程式

$$
\begin{cases}
\dfrac{dx}{dt}=-x^2y-y^3,\\
\dfrac{dy}{dt}=x^3+xy^2,
\end{cases}
\qquad
\begin{cases}x(0)=x_0,\\y(0)=y_0\end{cases}
$$

の解 $(x(t),y(t))$ は周期をもつことを示し、最小の周期を求めよ。ただし正の実数 $T$ が周期であるとは、任意の $t\in\mathbb R$ に対して

$$
(x(t+T),y(t+T))=(x(t),y(t))
$$

が成り立つことである。

#### 题目描述

给定 $(x_0,y_0)\ne(0,0)$，考虑初值问题

$$
x'=-x^2y-y^3,\qquad y'=x^3+xy^2,
\qquad x(0)=x_0,\quad y(0)=y_0.
$$

证明定义在 $\mathbb R$ 上的解 $(x(t),y(t))$ 是周期解，并求最小正周期。这里 $T>0$ 为周期是指对所有 $t\in\mathbb R$，都有 $(x(t+T),y(t+T))=(x(t),y(t))$。

## **Kai**

微分方程式より

$$
\frac{d}{dt}(x^2+y^2)=2x[-y(x^2+y^2)]+2y[x(x^2+y^2)]=0.
$$

したがって $\rho=x_0^2+y_0^2>0$ と置けば $x^2+y^2=\rho$ であり、方程式は $x'=-\rho y,\ y'=\rho x$ となる。初期条件を満たす解は

$$
\begin{aligned}
x(t)&=x_0\cos(\rho t)-y_0\sin(\rho t),\\
y(t)&=x_0\sin(\rho t)+y_0\cos(\rho t).
\end{aligned}
$$

この式はすべての実数 $t$ で元の方程式と初期条件を満たす。さらに

$$
x(t)+iy(t)=(x_0+iy_0)e^{i\rho t}
$$

かつ $x_0+iy_0\ne0$ なので、$T>0$ が周期であるための必要十分条件は $e^{i\rho T}=1$ である。よって最小の周期は

$$
\boxed{T_{\min}=\frac{2\pi}{x_0^2+y_0^2}}.
$$

## **Reference**

- [京都大学公式問題（2019年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2018math_kiso.pdf)
- [照合用参考解答（H31-basic.pdf、PDF 3ページ）](https://drive.google.com/file/d/1IriDJsz9XGidy2KdL3U1GBksFntQzNIh/view)
