---
sidebar_label: "2021年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Integration-by-Substitution
  - Mathematics.Calculus.Integration
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

実数空間 (real space)で連続(continuous)である関数 (function) $f(x)$ の定積分 (definite integral) における次の式を示せ。

$$
\int_0^{\frac{\pi}{2}} f(\cos\theta) d\theta = \int_0^{\frac{\pi}{2}} f(\sin\theta) d\theta
$$

### 题目描述

设 $f(x)$ 是实数域上的连续函数。证明定积分恒等式

$$
\int_0^{\frac{\pi}{2}}f(\cos\theta)\,d\theta
=\int_0^{\frac{\pi}{2}}f(\sin\theta)\,d\theta.
$$

## **Kai**

Let's prove the identity:

$$
\int_0^{\frac{\pi}{2}} f(\cos\theta) d\theta = \int_0^{\frac{\pi}{2}} f(\sin\theta) d\theta
$$

We can use the substitution $u = \frac{\pi}{2} - \theta$ , then $du = -d\theta$ .  When $\theta = 0$ , $u = \frac{\pi}{2}$ , and when $\theta = \frac{\pi}{2}$ , $u = 0$ .
Thus,

$$
\int_0^{\frac{\pi}{2}} f(\cos\theta) d\theta = \int_{\frac{\pi}{2}}^0 f(\cos(\frac{\pi}{2}-u)) (-du) = \int_0^{\frac{\pi}{2}} f(\cos(\frac{\pi}{2}-u)) du
$$

Since $\cos(\frac{\pi}{2} - u) = \sin u$ , we have

$$
\int_0^{\frac{\pi}{2}} f(\cos(\frac{\pi}{2}-u)) du = \int_0^{\frac{\pi}{2}} f(\sin u) du
$$

Replacing $u$ with $\theta$ , we get

$$
\int_0^{\frac{\pi}{2}} f(\sin u) du = \int_0^{\frac{\pi}{2}} f(\sin \theta) d\theta
$$

Therefore,

$$
\int_0^{\frac{\pi}{2}} f(\cos\theta) d\theta = \int_0^{\frac{\pi}{2}} f(\sin\theta) d\theta
$$

Thus, the identity is proved.
