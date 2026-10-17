---
sidebar_label: "2015年8月実施 問1（数学）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Bernoulli-Equation
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
---

# 九州大学 工学府 機械系専攻 2015年8月実施 数学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の問いに答えよ。（50点）

(1) 以下の微分方程式について、各問に答えよ。

$$
\frac{dy}{dx}+3xy=xy^a+f(x).
$$

(1.1) $f(x)=0,\ a=1$ の時、一般解 $y(x)$ を求めよ。

(1.2) $f(x)=0,\ a=2$ の時、一般解 $y(x)$ を $u(x)=\dfrac1{y(x)}$ と変数変換することにより求めよ。

(1.3) $f(x)=2x,\ a=2$ の時、一般解 $y(x)$ を求めよ。ただし、$y(x)=k$（定数）が解の1つである。

(2) 以下の微分方程式の一般解 $y(x)$ を求めよ。

$$
\frac{d^2y}{dx^2}-2\frac{dy}{dx}+2y=\cos x.
$$

#### 题目描述

回答以下问题。（50分）

(1) 对于下列微分方程，回答各问。

$$
\frac{dy}{dx}+3xy=xy^a+f(x).
$$

(1.1) 当 $f(x)=0,\ a=1$ 时，求通解 $y(x)$。

(1.2) 当 $f(x)=0,\ a=2$ 时，通过变量替换 $u(x)=\dfrac1{y(x)}$ 求通解 $y(x)$。

(1.3) 当 $f(x)=2x,\ a=2$ 时，求通解 $y(x)$。已知 $y(x)=k$（常数）是其中一个解。

(2) 求下列微分方程的通解 $y(x)$。

$$
\frac{d^2y}{dx^2}-2\frac{dy}{dx}+2y=\cos x.
$$

## **Kai**

### (1.1)

$y'=-2xy$ より $\boxed{y=Ce^{-x^2}}$。$C=0$ も含む。

### (1.2)

$y\ne0$ では $u=1/y$ とおくと $u'-3xu=-x$。積分因子 $e^{-3x^2/2}$ を掛けて積分すれば

$$
\begin{gathered}
u=\frac13+Ce^{3x^2/2},\\
\boxed{y=\frac1{1/3+Ce^{3x^2/2}}}.
\end{gathered}
$$

分母が零にならない区間で成立する。代換で除いた $\boxed{y=0}$ も解である。

### (1.3)

$y'=x(y-1)(y-2)$ より定数解は $y=1,2$。それ以外については

$$
\begin{gathered}
\int\left(-\frac1{y-1}+\frac1{y-2}\right)dy=\int x\,dx,\\
\frac{y-2}{y-1}=Ce^{x^2/2}.
\end{gathered}
$$

従って

$$
\boxed{y=\frac{2-Ce^{x^2/2}}{1-Ce^{x^2/2}}}
$$

および $\boxed{y=1}$。$y=2$ は $C=0$ に含まれる。

### (2)

特性根は $1\pm i$。特解 $y_p=A\cos x+B\sin x$ を代入すると $A-2B=1$、$2A+B=0$ より $A=1/5,B=-2/5$。したがって

$$
\boxed{y=e^x(C_1\cos x+C_2\sin x)+\frac15\cos x-\frac25\sin x}.
$$
