---
sidebar_label: "2014年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2014年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$x > 1$ に対し、次の関数(function) の微分 (derivative)を求めよ.

$$
f(x) = (x + 2\log_e x)^x
$$

ただし、 $e$ は自然対数の底(base of the natural logarithm) とする.

### 题目描述

设 $x>1$。求函数

$$
f(x)=(x+2\log_e x)^x
$$

的导数，其中 $e$ 为自然对数的底。

## **Kai**

Let $y = f(x) = (x + 2\log_e x)^x = (x + 2\ln x)^x$ .
Take the natural logarithm of both sides:

$$
\ln y = \ln (x + 2\ln x)^x = x \ln(x + 2\ln x)
$$

Differentiate both sides with respect to $x$ using the chain rule and product rule:

$$
\frac{1}{y} \frac{dy}{dx} = \ln(x + 2\ln x) + x \cdot \frac{1}{x + 2\ln x} \cdot (1 + \frac{2}{x})
$$

$$
\frac{1}{y} \frac{dy}{dx} = \ln(x + 2\ln x) + \frac{x}{x + 2\ln x} \cdot \frac{x + 2}{x}
$$

$$
\frac{dy}{dx} = y \left[ \ln(x + 2\ln x) + \frac{x + 2}{x + 2\ln x} \right]
$$

Substitute $y = (x + 2\ln x)^x$ :

$$
f'(x) = \frac{dy}{dx} = (x + 2\ln x)^x \left[ \ln(x + 2\ln x) + \frac{x + 2}{x + 2\ln x} \right]
$$

Thus, the derivative of $f(x)$ is:

$$
f'(x) = (x + 2\ln x)^x \left( \ln(x + 2\ln x) + \frac{x+2}{x + 2\ln x} \right)
$$
