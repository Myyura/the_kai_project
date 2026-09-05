---
sidebar_label: "2025年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Integration-by-Parts
  - Mathematics.Calculus.Integration
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2025年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura


## **Description**

(1) 次の累次積分の順序を交換せよ。

$$
\int_0^1 \left\{ \int_x^1 x \log(1 + y^3) dy \right\} dx
$$

(2) (1) の積分の値を求めよ。

### 题目描述

（1）交换下列累次积分的积分次序：

$$
\int_0^1
\left\{\int_x^1x\log(1+y^3)\,dy\right\}dx.
$$

（2）求（1）中积分的值。

## **Kai**

(1) まず積分範囲を考えます。積分範囲は $0 \leq x \leq 1$ かつ $x \leq y \leq 1$ なので、 $0 \leq y \leq 1$ かつ $0 \leq x \leq y$ となります。
よって積分順序を交換すると、

$$
\int_0^1 \int_0^y x \log(1 + y^3) dx dy
$$

(2) (1)の積分を計算します。

$$
\int_0^1 \int_0^y x \log(1 + y^3) dx dy = \int_0^1 \log(1+y^3) \left[ \frac{x^2}{2} \right]_0^y dy = \int_0^1 \frac{y^2}{2} \log(1+y^3) dy
$$

$t = 1 + y^3$ と置換すると $dt = 3y^2 dy$ となるので、 $y^2 dy = \frac{1}{3} dt$ 。
積分範囲は $y: 0 \to 1$ に対して $t: 1 \to 2$ となります。
よって、

$$
\int_0^1 \frac{y^2}{2} \log(1+y^3) dy = \frac{1}{2} \int_1^2 \log(t) \frac{1}{3} dt = \frac{1}{6} \int_1^2 \log(t) dt
$$

部分積分 $\int \log(t) dt = t \log(t) - t$ を用いると、

$$
\frac{1}{6} \int_1^2 \log(t) dt = \frac{1}{6} [t \log(t) - t]_1^2 = \frac{1}{6} [(2 \log(2) - 2) - (1 \log(1) - 1)] = \frac{1}{6} (2 \log(2) - 2 + 1) = \frac{1}{6} (2 \log(2) - 1) = \frac{1}{3} \log(2) - \frac{1}{6}
$$

したがって、

$$
\int_0^1 \left\{ \int_x^1 x \log(1 + y^3) dy \right\} dx = \frac{1}{3} \log(2) - \frac{1}{6}
$$
