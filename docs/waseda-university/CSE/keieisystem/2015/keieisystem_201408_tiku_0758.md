---
sidebar_label: "2014年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Indefinite-Integral
  - Mathematics.Calculus.Integration-by-Parts
  - Mathematics.Calculus.Integration
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2014年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の不定積分(indefinite integral) を計算せよ.

$$
I = \int e^x \cos x \, dx
$$

### 题目描述

计算不定积分

$$
I=\int e^x\cos x\,dx.
$$

## **Kai**

Let $I = \int e^x \cos x \, dx$ .
We can use integration by parts twice.
Let $u = \cos x$ and $dv = e^x \, dx$ . Then $du = -\sin x \, dx$ and $v = e^x$ .
So, $I = e^x \cos x - \int e^x (-\sin x) \, dx = e^x \cos x + \int e^x \sin x \, dx$ .
Now, we use integration by parts again for $\int e^x \sin x \, dx$ .
Let $u = \sin x$ and $dv = e^x \, dx$ . Then $du = \cos x \, dx$ and $v = e^x$ .
So, $\int e^x \sin x \, dx = e^x \sin x - \int e^x \cos x \, dx = e^x \sin x - I$ .
Substituting this back into the expression for $I$ , we get:
$I = e^x \cos x + e^x \sin x - I$ .
Therefore, $2I = e^x (\cos x + \sin x)$ .
So, $I = \frac{1}{2} e^x (\cos x + \sin x) + C$ , where C is the constant of integration.
