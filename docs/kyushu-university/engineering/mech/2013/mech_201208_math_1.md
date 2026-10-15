---
sidebar_label: "2013年度 問1（数学）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---

# 九州大学 工学府 機械系専攻 2013年度 数学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の各問いに答えよ。（50点）

1. 以下の連立微分方程式の一般解を実数値関数として求めよ。

$$
\frac{dx}{dt}-2y=0,\qquad \frac{dy}{dt}+2x=0.
$$

2. (1) で求めた解は $xy$ 平面上にどのような図形を描くか図示せよ。

#### 题目描述

求二元联立微分方程的实值通解，并画出解在平面上的轨迹。

## **Kai**

### (1)

$x'=2y$ を微分し、$y'=-2x$ を代入すると $x''+4x=0$。したがって

$$
\boxed{x(t)=A\cos2t+B\sin2t,\qquad
y(t)=-A\sin2t+B\cos2t,\quad A,B\in\mathbb R}.
$$

### (2)

$$
x(t)^2+y(t)^2=A^2+B^2.
$$

よって $R=\sqrt{A^2+B^2}>0$ なら、軌跡は原点を中心とする半径 $R$ の円である。$(R,0)$ における速度が $(0,-2R)$ なので、時間の増加とともに時計回りに進む。$A=B=0$ の場合は原点に静止する。

![解の円軌道](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2013/math-1-orbit.svg)
