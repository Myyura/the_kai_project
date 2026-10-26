---
sidebar_label: "2012年8月実施 問1（数学）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---

# 九州大学 工学府 機械系専攻 2012年8月実施 数学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の各問いに答えよ。（50点）

(1) 以下の連立微分方程式の一般解を実数値関数として求めよ。

$$
\begin{cases}
\dfrac{dx}{dt}-2y=0,\\[4pt]
\dfrac{dy}{dt}+2x=0.
\end{cases}
$$

(2) (1)で求めた解は $xy$ 平面上にどのような図形を描くか図示せよ。

### 题目描述

回答以下各问。（50分）

(1) 求下列联立微分方程的实值函数通解。

$$
\begin{cases}
\dfrac{dx}{dt}-2y=0,\\[4pt]
\dfrac{dy}{dt}+2x=0.
\end{cases}
$$

(2) 将(1)所得的解在 $xy$ 平面上描绘出的图形画出来。

## **Kai**

### (1)

$x'=2y$ を微分し、$y'=-2x$ を代入すると $x''+4x=0$。したがって

$$
\boxed{\begin{gathered}
x(t)=A\cos2t+B\sin2t,\\
y(t)=-A\sin2t+B\cos2t,\\
A,B\in\mathbb R
\end{gathered}}.
$$

### (2)

$$
x(t)^2+y(t)^2=A^2+B^2.
$$

よって $R=\sqrt{A^2+B^2}>0$ なら、軌跡は原点を中心とする半径 $R$ の円である。$(R,0)$ における速度が $(0,-2R)$ なので、時間の増加とともに時計回りに進む。$A=B=0$ の場合は原点に静止する。

![解の円軌道](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_math-1-orbit.svg)
