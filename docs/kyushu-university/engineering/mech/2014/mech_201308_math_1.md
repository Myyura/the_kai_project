---
sidebar_label: "2014年度 問1（数学）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Laplace-Transform
---

# 九州大学 工学府 機械系専攻 2014年度 数学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の各問いに答えよ。（50点）

1. 以下の微分方程式の一般解を求めよ。

$$
(1+x^2)y^3+(1-y^2)x^3\frac{dy}{dx}=0.
$$

2. ラプラス変換を用いて以下の連立微分方程式を解け。

$$
\begin{cases}
x''-2x'+y''-4y=0,\\
x''-4x+y''-2y'=-4t.
\end{cases}
\qquad x(0)=y(0)=x'(0)=y'(0)=0.
$$

ただし、ラプラス変換は $\mathcal L\{f(t)\}=F(s)=\int_0^\infty e^{-st}f(t)\,dt$ で与えられる。

#### 题目描述

求一阶非线性方程的通解；用 Laplace 变换求给定零初值的二阶联立微分方程。

## **Kai**

### (1)

$x\ne0$、$y\ne0$ の区間で変数分離すると

$$
\left(\frac1{y^3}-\frac1y\right)dy
=-\left(\frac1{x^3}+\frac1x\right)dx.
$$

積分して、非零解を陰関数表示すると

$$
\boxed{-\frac1{2y^2}-\log|y|=\frac1{2x^2}-\log|x|+C}.
$$

分離時に除いた $\boxed{y\equiv0}$ も解である。$y=\pm1$ は定数解ではない。上の表示は元の方程式を満たす微分可能な枝について用いる。

### (2)

$X(s)=\mathcal L\{x\}$、$Y(s)=\mathcal L\{y\}$ とする。初期条件を代入すると

$$
\begin{pmatrix}s^2-2s&s^2-4\\s^2-4&s^2-2s\end{pmatrix}
\begin{pmatrix}X\\Y\end{pmatrix}
=\begin{pmatrix}0\\-4/s^2\end{pmatrix}.
$$

これを解いて部分分数分解する。

$$
X=\frac{s+2}{s^2(s-2)(s+1)}(-1)
=\frac1{s^2}-\frac1{3(s-2)}+\frac1{3(s+1)},
$$

$$
Y=\frac1{s(s-2)(s+1)}
=-\frac1{2s}+\frac1{6(s-2)}+\frac1{3(s+1)}.
$$

逆変換により

$$
\boxed{x(t)=t-\frac13e^{2t}+\frac13e^{-t},\qquad
 y(t)=\frac16e^{2t}+\frac13e^{-t}-\frac12}.
$$
