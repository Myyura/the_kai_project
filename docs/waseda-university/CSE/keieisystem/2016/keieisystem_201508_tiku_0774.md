---
sidebar_label: "2015年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Integration-by-Substitution
  - Mathematics.Calculus.Integration
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2015年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

領域(domain) $D$ を, $x \geq 0$ かつ $x^2 + y^2 \leq 4$ を満たす領域と定義する. このとき、次の二重積分(double integral)の値を求めよ.

$$
I = \iint_D \frac{y^2}{\sqrt{1 + x^2 + y^2}} dxdy
$$

### 题目描述

定义区域

$$
D=\{(x,y)\mid x\geq0,\ x^2+y^2\leq4\}.
$$

求二重积分

$$
I=\iint_D\frac{y^2}{\sqrt{1+x^2+y^2}}\,dx\,dy
$$

的值。

## **Kai**

We transform the double integral to polar coordinates:
$x = r\cos\theta, y = r\sin\theta$
Then, $x^2 + y^2 = r^2$ and $dxdy = r drd\theta$
The region $D$ is defined by $x \geq 0$ and $x^2 + y^2 \leq 4$ , which means $0 \leq r \leq 2$ and $-\frac{\pi}{2} \leq \theta \leq \frac{\pi}{2}$ . Since $x \geq 0$ , we have $-\frac{\pi}{2} \leq \theta \leq \frac{\pi}{2}$ .

$$
I = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \int_0^2 \frac{(r\sin\theta)^2}{\sqrt{1 + r^2}} r dr d\theta = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \int_0^2 \frac{r^3\sin^2\theta}{\sqrt{1 + r^2}} dr d\theta
$$

$$
I = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \sin^2\theta d\theta \int_0^2 \frac{r^3}{\sqrt{1 + r^2}} dr
$$

Let $u = 1 + r^2$ , then $r^2 = u - 1$ and $du = 2rdr$ , so $rdr = \frac{1}{2}du$ .
When $r = 0$ , $u = 1$ and when $r = 2$ , $u = 5$ .

$$
I = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \sin^2\theta d\theta \int_1^5 \frac{r^2}{\sqrt{u}} \frac{1}{2} du = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \sin^2\theta d\theta \int_1^5 \frac{u - 1}{2\sqrt{u}} du
$$

$$
I = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{1 - \cos(2\theta)}{2} d\theta \int_1^5 \frac{u - 1}{2\sqrt{u}} du = \left[\frac{\theta}{2} - \frac{\sin(2\theta)}{4}\right]_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \int_1^5 \frac{1}{2} (u^{1/2} - u^{-1/2}) du
$$

$$
I = \left[\frac{\pi}{4} - (-\frac{\pi}{4})\right] \frac{1}{2} \left[\frac{2}{3}u^{3/2} - 2u^{1/2}\right]_1^5 = \frac{\pi}{2} \frac{1}{2} \left[\frac{2}{3}5^{3/2} - 2\sqrt{5} - \frac{2}{3} + 2\right]
$$

$$
I = \frac{\pi}{4} \left[\frac{10\sqrt{5}}{3} - 2\sqrt{5} + \frac{4}{3}\right] = \frac{\pi}{4} \left[\frac{4\sqrt{5}}{3} + \frac{4}{3}\right] = \frac{\pi}{3} (\sqrt{5} + 1)
$$

Therefore, the value of the double integral is $\frac{\pi}{3}(\sqrt{5} + 1)$ .
