---
sidebar_label: "2015年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2015年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の関数 (function)を $x$ について微分 (derivative)せよ。

$$
f(x) = (\cos x)^{x^2} \quad (0 < x < \frac{\pi}{2})
$$

### 题目描述

在 $0<x<\frac{\pi}{2}$ 上，对函数

$$
f(x)=(\cos x)^{x^2}
$$

关于 $x$ 求导。

## **Kai**

To find the derivative of $f(x) = (\cos x)^{x^2}$ , we can use logarithmic differentiation.

First, take the natural logarithm of both sides:

$$
\ln(f(x)) = \ln((\cos x)^{x^2}) = x^2 \ln(\cos x)
$$

Now, differentiate both sides with respect to $x$ :

$$
\frac{f'(x)}{f(x)} = \frac{d}{dx} [x^2 \ln(\cos x)]
$$

Using the product rule and the chain rule, we have:

$$
\frac{f'(x)}{f(x)} = 2x \ln(\cos x) + x^2 \cdot \frac{1}{\cos x} \cdot (-\sin x)
$$

$$
\frac{f'(x)}{f(x)} = 2x \ln(\cos x) - x^2 \tan x
$$

Now, multiply both sides by $f(x)$ to solve for $f'(x)$ :

$$
f'(x) = f(x) [2x \ln(\cos x) - x^2 \tan x]
$$

Since $f(x) = (\cos x)^{x^2}$ , we have:

$$
f'(x) = (\cos x)^{x^2} [2x \ln(\cos x) - x^2 \tan x]
$$

Therefore,

$$
f'(x) = (\cos x)^{x^2} (2x \ln(\cos x) - x^2 \tan x)
$$
