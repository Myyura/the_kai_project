---
sidebar_label: "2013年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Integration
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2013年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

領域(domain) $D$ を $1 \leq x^2 + y^2 \leq 4$ をみたすものとする。このとき、次の二重積分(double integral)の値を求めよ。

$$
I = \iint_D (x^2 + y^2) dxdy
$$

### 题目描述

设区域 $D$ 由

$$
1\leq x^2+y^2\leq 4
$$

确定。求二重积分

$$
I=\iint_D(x^2+y^2)\,dx\,dy
$$

的值。

## **Kai**

We transform to polar coordinates.
$x = r\cos\theta$ , $y = r\sin\theta$ , $x^2 + y^2 = r^2$ , and $dxdy = rdrd\theta$ .
The region $D$ is defined by $1 \leq r^2 \leq 4$ , which means $1 \leq r \leq 2$ . Also, $0 \leq \theta \leq 2\pi$ .
Then,

$$
\begin{aligned} I &= \iint_D (x^2 + y^2) dxdy \\ &= \int_0^{2\pi} \int_1^2 r^2 \cdot r dr d\theta \\ &= \int_0^{2\pi} \int_1^2 r^3 dr d\theta \\ &= \int_0^{2\pi} \left[ \frac{1}{4} r^4 \right]_1^2 d\theta \\ &= \int_0^{2\pi} \frac{1}{4} (2^4 - 1^4) d\theta \\ &= \int_0^{2\pi} \frac{1}{4} (16 - 1) d\theta \\ &= \int_0^{2\pi} \frac{15}{4} d\theta \\ &= \frac{15}{4} \left[ \theta \right]_0^{2\pi} \\ &= \frac{15}{4} (2\pi - 0) \\ &= \frac{15\pi}{2} \end{aligned}
$$

Therefore, the value of the double integral is $\frac{15\pi}{2}$ .
