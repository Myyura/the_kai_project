---
sidebar_label: "2023年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2023年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2つの確率変数(random variable) $x$ と $y$ のそれぞれの分散 (variance) が $V(x) = 2$ , $V(y) = 3$ であり,共分散(covariance) が $C(x,y) =1$ であるとき、 $C(x+y, 2x - y)$ の値を求めよ。

### 题目描述

两个随机变量 $x,y$ 满足

$$
V(x)=2,\qquad V(y)=3,\qquad C(x,y)=1.
$$

求

$$
C(x+y,\,2x-y).
$$

## **Kai**

共分散の性質より、

$C(x+y, 2x - y) = C(x, 2x-y) + C(y, 2x-y)$

$ = C(x, 2x) - C(x, y) + C(y, 2x) - C(y,y)$

$ = 2C(x, x) - C(x, y) + 2C(y, x) - C(y,y)$

ここで、 $C(x,x) = V(x)$ 、 $C(y,y) = V(y)$ 、 $C(y,x) = C(x,y)$ を用いると、

$ = 2V(x) - C(x, y) + 2C(x, y) - V(y)$

$ = 2V(x) + C(x, y) - V(y)$

与えられた値 $V(x) = 2$ , $V(y) = 3$ , $C(x,y) = 1$ を代入すると、

$ = 2(2) + 1 - 3 = 4 + 1 - 3 = 2$

したがって、 $C(x+y, 2x-y) = 2$ である。
