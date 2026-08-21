---
sidebar_label: "2013年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Integration-by-Parts
  - Mathematics.Calculus.Integration
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2013年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の定積分 (definite integral) を計算せよ.

$$
I = \int_0^1 (\log_e x)^2 dx
$$

ただし、 $ \log_e x$ は自然対数 (natural logarithm) 関数である.

### 题目描述

计算定积分

$$
I=\int_0^1(\log_e x)^2\,dx,
$$

其中 $\log_e x$ 表示自然对数函数。

## **Kai**

We want to calculate $\int_0^1 (\log_e x)^2 dx$ .  Let $u = (\log_e x)^2$ , $dv = dx$ .  Then $du = 2(\log_e x)\frac{1}{x} dx$ , $v = x$ .  Using integration by parts, we have

$\int_0^1 (\log_e x)^2 dx = x(\log_e x)^2 \Big|_0^1 - \int_0^1 x \cdot 2(\log_e x)\frac{1}{x} dx = x(\log_e x)^2 \Big|_0^1 - 2 \int_0^1 \log_e x dx$ .

Now, $\lim_{x \to 0^+} x(\log_e x)^2 = 0$ .  So, $x(\log_e x)^2 \Big|_0^1 = 1(\log_e 1)^2 - 0 = 0$ .

$\int_0^1 \log_e x dx$ .  Let $u = \log_e x$ , $dv = dx$ .  Then $du = \frac{1}{x} dx$ , $v = x$ .  So, $\int_0^1 \log_e x dx = x \log_e x \Big|_0^1 - \int_0^1 x \frac{1}{x} dx = x \log_e x \Big|_0^1 - \int_0^1 dx = x \log_e x \Big|_0^1 - x \Big|_0^1$ .
$\lim_{x \to 0^+} x \log_e x = 0$ .  So, $x \log_e x \Big|_0^1 = 1 \log_e 1 - 0 = 0$ .
Therefore, $\int_0^1 \log_e x dx = 0 - (1 - 0) = -1$ .

Thus, $I = 0 - 2(-1) = 2$ .

Therefore, $\int_0^1 (\log_e x)^2 dx = 2$ .
