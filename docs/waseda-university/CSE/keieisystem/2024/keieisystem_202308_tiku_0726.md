---
sidebar_label: "2023年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Gaussian-Integral
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Integration
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2023年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の定積分(definite integral)を計算せよ。

$$
I = \int_{-\infty}^{\infty} e^{-x^2} dx
$$

### 题目描述

计算高斯反常积分

$$
I=\int_{-\infty}^{\infty}e^{-x^2}\,dx.
$$

## **Kai**

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
