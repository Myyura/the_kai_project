---
sidebar_label: "2022年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2022年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

原点(origin)から楕円 (ellipse)

$$
x^2 + xy + y^2 = 3
$$

までの最短距離(shortest distance)と最長距離(longest distance)を求めよ。

### 题目描述

求原点到椭圆

$$
x^2+xy+y^2=3
$$

的最短距离和最长距离。

## **Kai**

Let $x = r \cos\theta$ and $y = r \sin\theta$ . Then the equation of the ellipse becomes

$$
r^2\cos^2\theta + r^2 \cos\theta \sin\theta + r^2 \sin^2\theta = 3
$$

$$
r^2(1 + \cos\theta \sin\theta) = 3
$$

$$
r^2(1 + \frac{1}{2}\sin 2\theta) = 3
$$

$$
r^2 = \frac{3}{1 + \frac{1}{2}\sin 2\theta} = \frac{6}{2 + \sin 2\theta}
$$

The distance from the origin is $r = \sqrt{\frac{6}{2 + \sin 2\theta}}$ .
The minimum value of $2 + \sin 2\theta$ is $2 - 1 = 1$ . Thus, the maximum value of $r$ is $\sqrt{\frac{6}{1}} = \sqrt{6}$ .
The maximum value of $2 + \sin 2\theta$ is $2 + 1 = 3$ . Thus, the minimum value of $r$ is $\sqrt{\frac{6}{3}} = \sqrt{2}$ .
Therefore, the shortest distance is $\sqrt{2}$ and the longest distance is $\sqrt{6}$ .
