---
sidebar_label: "2022年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2022年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$x > 0$ において、次の関数 (function) を $x$ で微分 (derivative) せよ。

$$
f(x) = \left(\frac{1}{2x}\right)^x
$$

### 题目描述

在 $x>0$ 时，对函数

$$
f(x)=\left(\frac1{2x}\right)^x
$$

关于 $x$ 求导。

## **Kai**

To differentiate the function $f(x) = \left(\frac{1}{2x}\right)^x$ , we can use logarithmic differentiation.

Let $y = f(x) = \left(\frac{1}{2x}\right)^x$ .
Take the natural logarithm of both sides:

$$
\ln y = \ln \left(\left(\frac{1}{2x}\right)^x\right) = x \ln \left(\frac{1}{2x}\right) = x \ln (2x)^{-1} = -x \ln(2x)
$$

Now, differentiate both sides with respect to $x$ :

$$
\frac{1}{y} \frac{dy}{dx} = -\ln(2x) - x \cdot \frac{1}{2x} \cdot 2 = -\ln(2x) - 1
$$

Multiply both sides by $y$ :

$$
\frac{dy}{dx} = y(-\ln(2x) - 1) = \left(\frac{1}{2x}\right)^x(-\ln(2x) - 1)
$$

Thus,

$$
\frac{dy}{dx} = -\left(\frac{1}{2x}\right)^x(\ln(2x) + 1)
$$

So, the derivative of $f(x)$ is

$$
f'(x) = -\left(\frac{1}{2x}\right)^x(\ln(2x) + 1)
$$

Final Answer:
The final answer is $\boxed{f'(x) = -(\frac{1}{2x})^x(\ln(2x)+1)}$
