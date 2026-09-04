---
sidebar_label: "2023年7月実施 数理基礎 問題A"
tags:
  - Waseda-University
  - Mathematics.Calculus.Implicit-Differentiation
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Gaussian-Integral
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Integration
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2023年7月実施 数理基礎 問題A

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語

#### 小問A1

$y$ が $x$ の関数 (function) であり, $e^{-x^2} + xy + \log y = 0$ を満たすとき, $y$ を $x$ で微分 (derivative) せよ. ただし, $y$ の自然対数 (natural logarithm) を $\log y$ として表現する.

#### 小問A2

$xy$ 平面上の曲線 $x^3 + y^3 = 1$ の点 $\left( \frac{1}{\sqrt[3]{2}}, \frac{1}{\sqrt[3]{2}} \right)$ における接線(tangent line)の方程式(equation)を求めよ。

#### 小問A3

次の定積分(definite integral)を計算せよ。

$$
I = \int_{-\infty}^{\infty} e^{-x^2} dx
$$

### 题目描述

#### 小问A1

设 $y$ 是 $x$ 的函数，并满足

$$
e^{-x^2}+xy+\log y=0,
$$

其中 $\log y$ 表示 $y$ 的自然对数，因而 $y>0$。求 $\dfrac{dy}{dx}$。

#### 小问A2

求平面曲线

$$
x^3+y^3=1
$$

在点

$$
\left(\frac1{\sqrt[3]{2}},\frac1{\sqrt[3]{2}}\right)
$$

处的切线方程。

#### 小问A3

计算高斯反常积分

$$
I=\int_{-\infty}^{\infty}e^{-x^2}\,dx.
$$

## **Kai**

### 小問A1

Let $F(x, y) = e^{-x^2} + xy + \log y = 0$ . We want to find $\frac{dy}{dx}$ . Using implicit differentiation, we have:

$$
\frac{d}{dx} (e^{-x^2} + xy + \log y) = 0
$$

$$
\frac{d}{dx} e^{-x^2} + \frac{d}{dx} (xy) + \frac{d}{dx} (\log y) = 0
$$

Using the chain rule, we have $\frac{d}{dx} e^{-x^2} = e^{-x^2} \cdot (-2x) = -2xe^{-x^2}$ .  Using the product rule, we have $\frac{d}{dx} (xy) = x \frac{dy}{dx} + y \frac{dx}{dx} = x \frac{dy}{dx} + y$ . Using the chain rule, we have $\frac{d}{dx} (\log y) = \frac{1}{y} \frac{dy}{dx}$ .

Substituting these into the equation, we get:

$$
-2xe^{-x^2} + x \frac{dy}{dx} + y + \frac{1}{y} \frac{dy}{dx} = 0
$$

Now, we solve for $\frac{dy}{dx}$ :

$$
(x + \frac{1}{y}) \frac{dy}{dx} = 2xe^{-x^2} - y
$$

$$
\frac{dy}{dx} = \frac{2xe^{-x^2} - y}{x + \frac{1}{y}} = \frac{y(2xe^{-x^2} - y)}{xy + 1}
$$

Therefore, at points where $xy+1\ne0$ ,

$$
\boxed{\frac{dy}{dx}=\frac{2xye^{-x^2}-y^2}{xy+1}}.
$$

The condition is necessary: since $\log y$ requires $y>0$ , if a point on the curve satisfies $xy+1=0$ , then

$$
2xe^{-x^2}-y<0,
$$

so the differentiated equation cannot have a finite value of $dy/dx$ there. Such a point has a vertical tangent rather than a finite derivative as a graph $y(x)$ .

### 小問A2

曲線を陰関数表示された関数として、微分して接線の傾きを求める。

$$
x^3 + y^3 = 1
$$

両辺を $x$ で微分すると、

$$
3x^2 + 3y^2\frac{dy}{dx} = 0
$$

$$
\frac{dy}{dx} = -\frac{x^2}{y^2}
$$

点 $\left( \frac{1}{\sqrt[3]{2}}, \frac{1}{\sqrt[3]{2}} \right)$ における接線の傾きは、

$$
\frac{dy}{dx} = -\frac{(\frac{1}{\sqrt[3]{2}})^2}{(\frac{1}{\sqrt[3]{2}})^2} = -1
$$

したがって、接線の方程式は、

$$
y - \frac{1}{\sqrt[3]{2}} = -1 \left( x - \frac{1}{\sqrt[3]{2}} \right)
$$

$$
y = -x + \frac{2}{\sqrt[3]{2}}
$$

$$
y = -x + 2^{2/3}
$$

### 小問A3

To evaluate the Gaussian integral $I = \int_{-\infty}^{\infty} e^{-x^2} dx$ , we can use the trick of squaring the integral and converting to polar coordinates.

Let $I = \int_{-\infty}^{\infty} e^{-x^2} dx$ .
Then, $I^2 = \left(\int_{-\infty}^{\infty} e^{-x^2} dx\right) \left(\int_{-\infty}^{\infty} e^{-y^2} dy\right) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-(x^2+y^2)} dx dy$ .

Now, we convert to polar coordinates: $x = r\cos\theta$ , $y = r\sin\theta$ , and $x^2 + y^2 = r^2$ . Also, $dx dy = r dr d\theta$ .
The limits of integration become $0 \leq r < \infty$ and $0 \leq \theta \leq 2\pi$ .
So, $I^2 = \int_{0}^{2\pi} \int_{0}^{\infty} e^{-r^2} r dr d\theta$ .

We can evaluate the inner integral by using the substitution $u = r^2$ , so $du = 2r dr$ , and $r dr = \frac{1}{2} du$ .
The limits of integration for $u$ are $0$ to $\infty$ .
Thus, $\int_{0}^{\infty} e^{-r^2} r dr = \int_{0}^{\infty} e^{-u} \frac{1}{2} du = \frac{1}{2} \int_{0}^{\infty} e^{-u} du = \frac{1}{2} [-e^{-u}]_{0}^{\infty} = \frac{1}{2} [0 - (-1)] = \frac{1}{2}$ .

Therefore, $I^2 = \int_{0}^{2\pi} \frac{1}{2} d\theta = \frac{1}{2} \int_{0}^{2\pi} d\theta = \frac{1}{2} [\theta]_{0}^{2\pi} = \frac{1}{2} (2\pi - 0) = \pi$ .

Since $I^2 = \pi$ , we have $I = \sqrt{\pi}$ .

Therefore, the value of the definite integral is $\sqrt{\pi}$ .

$$
I = \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
