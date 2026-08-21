---
sidebar_label: "2013年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2013年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$x>0$ に対し、次の関数 (function) の微分 (derivative) を求めよ.

$$
f(x) = \left(1 + \frac{1}{x}\right)^x
$$

### 题目描述

设 $x>0$。求函数

$$
f(x)=\left(1+\frac{1}{x}\right)^x
$$

的导数。

## **Kai**

Let $y = f(x) = (1 + \frac{1}{x})^x$ . Then, take the natural logarithm of both sides:

$$
\ln y = \ln \left( \left(1 + \frac{1}{x}\right)^x \right) = x \ln \left(1 + \frac{1}{x}\right)
$$

Now, differentiate both sides with respect to $x$ :

$$
\frac{1}{y} \frac{dy}{dx} = \ln \left(1 + \frac{1}{x}\right) + x \cdot \frac{1}{1 + \frac{1}{x}} \cdot \left(-\frac{1}{x^2}\right)
$$

$$
\frac{1}{y} \frac{dy}{dx} = \ln \left(1 + \frac{1}{x}\right) + x \cdot \frac{x}{x+1} \cdot \left(-\frac{1}{x^2}\right)
$$

$$
\frac{1}{y} \frac{dy}{dx} = \ln \left(1 + \frac{1}{x}\right) - \frac{x}{x+1} \cdot \frac{1}{x}
$$

$$
\frac{1}{y} \frac{dy}{dx} = \ln \left(1 + \frac{1}{x}\right) - \frac{1}{x+1}
$$

Now, multiply both sides by $y$ to find $\frac{dy}{dx}$ :

$$
\frac{dy}{dx} = y \left[\ln \left(1 + \frac{1}{x}\right) - \frac{1}{x+1}\right]
$$

Substitute back the expression for $y$ :

$$
\frac{dy}{dx} = \left(1 + \frac{1}{x}\right)^x \left[\ln \left(1 + \frac{1}{x}\right) - \frac{1}{x+1}\right]
$$

So, the derivative is:

$$
f'(x) = \left(1 + \frac{1}{x}\right)^x \left[\ln \left(1 + \frac{1}{x}\right) - \frac{1}{x+1}\right]
$$
