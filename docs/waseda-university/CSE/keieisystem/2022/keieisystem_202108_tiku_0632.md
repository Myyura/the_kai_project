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

次の定積分について、

$$
\int_0^2 \frac{1}{\sqrt{x^2 + 1}} dx
$$

$x = \frac{1}{2}(y - \frac{1}{y}), (y > 0)$ と置換(substitute) して計算せよ。

### 题目描述

对定积分

$$
\int_0^2\frac{1}{\sqrt{x^2+1}}\,dx,
$$

使用指定代换

$$
x=\frac12\left(y-\frac1y\right),\qquad y>0,
$$

完成计算。

## **Kai**

Let $x = \frac{1}{2}(y - \frac{1}{y})$ . Then $dx = \frac{1}{2}(1 + \frac{1}{y^2}) dy = \frac{1}{2}(\frac{y^2 + 1}{y^2}) dy$ .
Also, $x^2 = \frac{1}{4}(y^2 - 2 + \frac{1}{y^2})$ .
Then, $x^2 + 1 = \frac{1}{4}(y^2 - 2 + \frac{1}{y^2}) + 1 = \frac{1}{4}(y^2 + 2 + \frac{1}{y^2}) = \frac{1}{4}(y + \frac{1}{y})^2$ .
So, $\sqrt{x^2 + 1} = \frac{1}{2}(y + \frac{1}{y})$ .
Then, $\frac{1}{\sqrt{x^2 + 1}} = \frac{2}{y + \frac{1}{y}} = \frac{2y}{y^2 + 1}$ .
So, $\frac{1}{\sqrt{x^2 + 1}} dx = \frac{2y}{y^2 + 1} \cdot \frac{1}{2} \frac{y^2 + 1}{y^2} dy = \frac{1}{y} dy$ .

Now, when $x=0$ , $\frac{1}{2}(y - \frac{1}{y}) = 0$ , which implies $y - \frac{1}{y} = 0$ , so $y^2 = 1$ . Since $y > 0$ , $y=1$ .
When $x=2$ , $\frac{1}{2}(y - \frac{1}{y}) = 2$ , which implies $y - \frac{1}{y} = 4$ , so $y^2 - 4y - 1 = 0$ . Then $y = \frac{4 \pm \sqrt{16 + 4}}{2} = \frac{4 \pm \sqrt{20}}{2} = \frac{4 \pm 2\sqrt{5}}{2} = 2 \pm \sqrt{5}$ . Since $y > 0$ , $y = 2 + \sqrt{5}$ .
Therefore, the integral becomes:

$$
\int_1^{2+\sqrt{5}} \frac{1}{y} dy = \left[ \ln y \right]_1^{2+\sqrt{5}} = \ln(2+\sqrt{5}) - \ln(1) = \ln(2+\sqrt{5})
$$

So, the answer is $\ln(2+\sqrt{5})$ .
