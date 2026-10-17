---
sidebar_label: "2013年8月実施 問1（数学）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Laplace-Transform
---

# 九州大学 工学府 機械系専攻 2013年8月実施 数学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の各問いに答えよ。（50点）

(1) 以下の微分方程式の一般解を求めよ。

$$
(1+x^2)y^3+(1-y^2)x^3\frac{dy}{dx}=0.
$$

(2) ラプラス変換を用いて以下の連立微分方程式を解け。

$$
\begin{cases}
\dfrac{d^2x}{dt^2}-2\dfrac{dx}{dt}+\dfrac{d^2y}{dt^2}-4y=0,\\[5pt]
\dfrac{d^2x}{dt^2}-4x+\dfrac{d^2y}{dt^2}-2\dfrac{dy}{dt}=-4t.
\end{cases}
$$

ただし、

$$
\begin{gathered}
x(t)\big|_{t=0}=y(t)\big|_{t=0}=0,\\
\left.\frac{dx}{dt}\right|_{t=0}=\left.\frac{dy}{dt}\right|_{t=0}=0
\end{gathered}
$$

であるとする。また、ラプラス変換は $\mathcal L\{f(t)\}=F(s)=\displaystyle\int_0^\infty e^{-st}f(t)\,dt$ で与えられる。

#### 题目描述

回答以下各问。（50分）

(1) 求下列微分方程的通解。

$$
(1+x^2)y^3+(1-y^2)x^3\frac{dy}{dx}=0.
$$

(2) 用拉普拉斯变换求解下列联立微分方程。

$$
\begin{cases}
\dfrac{d^2x}{dt^2}-2\dfrac{dx}{dt}+\dfrac{d^2y}{dt^2}-4y=0,\\[5pt]
\dfrac{d^2x}{dt^2}-4x+\dfrac{d^2y}{dt^2}-2\dfrac{dy}{dt}=-4t.
\end{cases}
$$

初始条件为

$$
\begin{gathered}
x(t)\big|_{t=0}=y(t)\big|_{t=0}=0,\\
\left.\frac{dx}{dt}\right|_{t=0}=\left.\frac{dy}{dt}\right|_{t=0}=0
\end{gathered}.
$$

拉普拉斯变换的定义为 $\mathcal L\{f(t)\}=F(s)=\displaystyle\int_0^\infty e^{-st}f(t)\,dt$。

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
\begin{gathered}
X=\frac{s+2}{s^2(s-2)(s+1)}(-1)\\
=\frac1{s^2}-\frac1{3(s-2)}+\frac1{3(s+1)},
\end{gathered}
$$

$$
\begin{gathered}
Y=\frac1{s(s-2)(s+1)}\\
=-\frac1{2s}+\frac1{6(s-2)}+\frac1{3(s+1)}.
\end{gathered}
$$

逆変換により

$$
\boxed{\begin{gathered}
x(t)=t-\frac13e^{2t}+\frac13e^{-t},\\
y(t)=\frac16e^{2t}+\frac13e^{-t}-\frac12
\end{gathered}}.
$$
