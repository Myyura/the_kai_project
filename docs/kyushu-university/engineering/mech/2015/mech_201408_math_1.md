---
sidebar_label: "2015年度 問1（数学）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Cauchy-Euler-Equation
---

# 九州大学 工学府 機械系専攻 2015年度 数学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$y$ は $x$ の関数とする。$x=e^t$ とおくとき、次の各問いに答えよ。（50点）

1. $dy/dx=e^{-t}dy/dt$ となることを示せ。
2. $d^2y/dx^2=e^{-2t}(d^2y/dt^2-dy/dt)$ となることを示せ。
3. $x^2y''-2xy'+2y=0$ の一般解 $y(x)$ を求めよ。
4. $x^2y''-2xy'+2y=x$ の一般解 $y(x)$ を求めよ。

#### 题目描述

在 $x=e^t$ 代换下证明一、二阶导数的变换式，并分别求齐次和非齐次 Euler 方程的通解。

## **Kai**

### (1)

連鎖律と $dx/dt=e^t$ より

$$
\boxed{\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=e^{-t}\frac{dy}{dt}}.
$$

### (2)

$$
\boxed{\frac{d^2y}{dx^2}=e^{-t}\frac d{dt}\left(e^{-t}\frac{dy}{dt}\right)
=e^{-2t}\left(\frac{d^2y}{dt^2}-\frac{dy}{dt}\right)}.
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
