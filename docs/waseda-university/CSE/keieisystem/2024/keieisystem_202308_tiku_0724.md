---
sidebar_label: "2023年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Implicit-Differentiation
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2023年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$y$ が $x$ の関数 (function) であり, $e^{-x^2} + xy + \log y = 0$ を満たすとき, $y$ を $x$ で微分 (derivative) せよ. ただし, $y$ の自然対数 (natural logarithm) を $\log y$ として表現する.

### 题目描述

设 $y$ 是 $x$ 的函数，并满足

$$
e^{-x^2}+xy+\log y=0,
$$

其中 $\log y$ 表示 $y$ 的自然对数，因而 $y>0$。求 $\dfrac{dy}{dx}$。

## **Kai**

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
