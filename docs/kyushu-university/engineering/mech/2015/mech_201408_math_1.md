---
sidebar_label: "2014年8月実施 問1（数学）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Cauchy-Euler-Equation
---

# 九州大学 工学府 機械系専攻 2014年8月実施 数学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$y$ は $x$ の関数とする。$x=e^t$ とおくとき、次の各問いに答えよ。（50点）

(1) $\dfrac{dy}{dx}=e^{-t}\dfrac{dy}{dt}$ となることを示せ。

(2) $\dfrac{d^2y}{dx^2}=e^{-2t}\left(\dfrac{d^2y}{dt^2}-\dfrac{dy}{dt}\right)$ となることを示せ。

(3) $x^2\dfrac{d^2y}{dx^2}-2x\dfrac{dy}{dx}+2y=0$ の一般解 $y(x)$ を求めよ。

(4) $x^2\dfrac{d^2y}{dx^2}-2x\dfrac{dy}{dx}+2y=x$ の一般解 $y(x)$ を求めよ。

#### 题目描述

设 $y$ 是 $x$ 的函数。令 $x=e^t$，回答以下各问。（50分）

(1) 证明 $\dfrac{dy}{dx}=e^{-t}\dfrac{dy}{dt}$。

(2) 证明 $\dfrac{d^2y}{dx^2}=e^{-2t}\left(\dfrac{d^2y}{dt^2}-\dfrac{dy}{dt}\right)$。

(3) 求 $x^2\dfrac{d^2y}{dx^2}-2x\dfrac{dy}{dx}+2y=0$ 的通解 $y(x)$。

(4) 求 $x^2\dfrac{d^2y}{dx^2}-2x\dfrac{dy}{dx}+2y=x$ 的通解 $y(x)$。

## **Kai**

### (1)

連鎖律と $dx/dt=e^t$ より

$$
\boxed{\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=e^{-t}\frac{dy}{dt}}.
$$

### (2)

$$
\boxed{\begin{gathered}
\frac{d^2y}{dx^2}=e^{-t}\frac d{dt}\left(e^{-t}\frac{dy}{dt}\right)\\
=e^{-2t}\left(\frac{d^2y}{dt^2}-\frac{dy}{dt}\right)
\end{gathered}}.
$$

### (3)

(1)(2) を代入すると $y_{tt}-3y_t+2y=0$。特性根は1、2なので、$x>0$ で

$$
\boxed{y=C_1x+C_2x^2}.
$$

### (4)

変換後は $y_{tt}-3y_t+2y=e^t$。特解 $y_p=ate^t$ を代入すると $-ae^t=e^t$ より $a=-1$。したがって

$$
\boxed{y=C_1x+C_2x^2-x\log x}\qquad(x>0).
$$

$x<0$ の区間も含めて書く場合は $-x\log|x|$ を用いる。
