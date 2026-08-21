---
sidebar_label: "2015年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Indefinite-Integral
  - Mathematics.Calculus.Integration-by-Parts
  - Mathematics.Calculus.Integration
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2015年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$a>1$ に対し、次の不定積分 (indefinite integral)を求めよ.

$$
I = \int x^2 a^x dx
$$

### 题目描述

设 $a>1$，求不定积分

$$
I=\int x^2a^x\,dx.
$$

## **Kai**

Let's solve the integral $I = \int x^2 a^x dx$ using integration by parts.

Recall that $\int u dv = uv - \int v du$ .

Let $u = x^2$ and $dv = a^x dx$ . Then $du = 2x dx$ and $v = \int a^x dx = \frac{a^x}{\ln a}$ .

So, $I = x^2 \frac{a^x}{\ln a} - \int \frac{a^x}{\ln a} 2x dx = \frac{x^2 a^x}{\ln a} - \frac{2}{\ln a} \int x a^x dx$ .

Now, we need to solve the integral $\int x a^x dx$ . Let $u = x$ and $dv = a^x dx$ . Then $du = dx$ and $v = \frac{a^x}{\ln a}$ .

$\int x a^x dx = x \frac{a^x}{\ln a} - \int \frac{a^x}{\ln a} dx = \frac{x a^x}{\ln a} - \frac{1}{\ln a} \int a^x dx = \frac{x a^x}{\ln a} - \frac{1}{\ln a} \frac{a^x}{\ln a} = \frac{x a^x}{\ln a} - \frac{a^x}{(\ln a)^2}$ .

Substitute this back into the expression for $I$ :

$I = \frac{x^2 a^x}{\ln a} - \frac{2}{\ln a} \left( \frac{x a^x}{\ln a} - \frac{a^x}{(\ln a)^2} \right) = \frac{x^2 a^x}{\ln a} - \frac{2x a^x}{(\ln a)^2} + \frac{2 a^x}{(\ln a)^3} + C$ .

Thus, the integral is:

$I = a^x \left( \frac{x^2}{\ln a} - \frac{2x}{(\ln a)^2} + \frac{2}{(\ln a)^3} \right) + C$ .
