---
sidebar_label: "2020年8月実施 微积分"
tags:
  - Nagoya-University
  - Mathematics.Calculus.Integration-by-Parts
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Integration
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2020年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

関数 $f(x)$ は連続として、関数 $g(x)$ を

$$
g(x) = \int_{0}^{x} f(t)(x-t)^n dt
$$

とおく。このとき、次の問に答えよ。

1) $f(x)$ の原始関数を $f_1(x)$ とする。 $g(x)$ を $f_1(x)$ を使って表せ。

2) $g(x)$ の $n+1$ 階の導関数を $f(x)$ のみで表せることを示せ。

### 题目描述

设 $f(x)$ 连续，并定义

$$
g(x)=\int_0^x f(t)(x-t)^n\,dt.
$$

1. 设 $f_1(x)$ 是 $f(x)$ 的一个原函数，用 $f_1(x)$ 表示 $g(x)$；
2. 证明 $g(x)$ 的 $n+1$ 阶导数可以只用 $f(x)$ 表示。

## **Kai**

1) $n\ge1$ とする。部分積分で $u=(x-t)^n,\ dv=f(t)\,dt$ とおくと、 $du=-n(x-t)^{n-1}dt,\ v=f_1(t)$ であるから、

$$
g(x) = \int_0^x f(t) (x-t)^n dt = \left[f_1(t) (x-t)^n\right]_0^x - \int_0^x f_1(t) (-n(x-t)^{n-1}) dt
$$

$$
= f_1(x)(x-x)^n - f_1(0)(x-0)^n + n \int_0^x f_1(t) (x-t)^{n-1} dt
$$

$$
= -f_1(0)x^n + n \int_0^x f_1(t) (x-t)^{n-1} dt.
$$

これが $f_1$ を用いた表示である。なお $n=0$ の場合は直接

$$
g(x)=\int_0^x f(t)\,dt=f_1(x)-f_1(0)
$$

となる。

2) $n\ge1$ のとき、Leibniz の公式を順に用いると、

$$
g'(x) = \frac{d}{dx} \int_0^x f(t)(x-t)^n dt = f(x)(x-x)^n + \int_0^x f(t) n(x-t)^{n-1} dt = n \int_0^x f(t)(x-t)^{n-1} dt
$$

$$
g''(x) = n(n-1) \int_0^x f(t)(x-t)^{n-2} dt
$$

Continuing this until the $n$ th derivative:

$$
g^{(n)}(x) = n! \int_0^x f(t) dt
$$

$$
g^{(n+1)}(x) = n! f(x)
$$

したがって $g^{(n+1)}(x)$ は $f(x)$ のみで表される。 $n=0$ の場合も、微積分学の基本定理から $g'(x)=f(x)$ であり、同じ結論が成り立つ。
