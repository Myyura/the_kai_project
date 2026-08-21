---
sidebar_label: "2020年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Integration
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2020年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(1) $t$ を正の実数とする。累次積分 $\int_{0}^{t} \left( \int_{0}^{p} f(p, q) dq \right) dp$ の積分順序を交換せよ。

(2) 累次積分 $I = \int_{0}^{\frac{\pi}{2}} \left( \int_{y}^{\frac{\pi}{2}} \cos(x^2) dx \right) dy$ の値を求めよ。

### 题目描述

（1）设 $t$ 为正实数，交换累次积分

$$
\int_0^t\left(\int_0^p f(p,q)\,dq\right)dp
$$

的积分次序。

（2）求累次积分

$$
I=\int_0^{\frac{\pi}{2}}
\left(\int_y^{\frac{\pi}{2}}\cos(x^2)\,dx\right)dy
$$

的值。

## **Kai**

(1) 積分領域は $0 \leq p \leq t$ , $0 \leq q \leq p$ であり, これは $0 \leq q \leq t$ , $q \leq p \leq t$ と書き換えられる。よって, 積分順序を交換すると

$$
\int_{0}^{t} \left( \int_{0}^{p} f(p, q) dq \right) dp = \int_{0}^{t} \left( \int_{q}^{t} f(p, q) dp \right) dq
$$

(2) $I = \int_{0}^{\frac{\pi}{2}} \left( \int_{y}^{\frac{\pi}{2}} \cos(x^2) dx \right) dy$ の積分順序を交換する。積分領域は $0 \leq y \leq \frac{\pi}{2}$ , $y \leq x \leq \frac{\pi}{2}$ であるから, これは $0 \leq x \leq \frac{\pi}{2}$ , $0 \leq y \leq x$ と書き換えられる。よって

$$
\begin{aligned} I &= \int_{0}^{\frac{\pi}{2}} \left( \int_{0}^{x} \cos(x^2) dy \right) dx \\ &= \int_{0}^{\frac{\pi}{2}} \cos(x^2) \left[ y \right]_{0}^{x} dx \\ &= \int_{0}^{\frac{\pi}{2}} x \cos(x^2) dx \\ &= \frac{1}{2} \int_{0}^{\frac{\pi}{2}} 2x \cos(x^2) dx \\ &= \frac{1}{2} \left[ \sin(x^2) \right]_{0}^{\frac{\pi}{2}} \\ &= \frac{1}{2} \sin\left(\frac{\pi^2}{4}\right) \end{aligned}
$$

したがって， $I = \frac{1}{2} \sin\left(\frac{\pi^2}{4}\right)$
