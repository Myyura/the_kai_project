---
sidebar_label: "2023年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2023年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数(random variable) $x$ と $y$ の同時確率密度関数 (joint probability density function)が次式であるとき、 $x$ と $y$ が独立(independent)になるように定数 $a$ と $b$ の値を定めよ。ただし, $0<x<1$ , $0 <y<1$ とする。

$$
f(x, y) = a(2xy + x + by + 3)
$$

### 题目描述

随机变量 $x,y$ 的联合概率密度函数在

$$
0<x<1,\qquad0<y<1
$$

上为

$$
f(x,y)=a(2xy+x+by+3).
$$

确定常数 $a,b$，使 $x$ 与 $y$ 相互独立。

## **Kai**

Since $x$ and $y$ are independent, we can write $f(x, y) = g(x)h(y)$ , where $g(x)$ is a function of $x$ only and $h(y)$ is a function of $y$ only. Thus, we need to factor $2xy + x + by + 3$ into a product of a function of $x$ and a function of $y$ .

$2xy + x + by + 3 = x(2y + 1) + by + 3$

If $x$ and $y$ are independent, then $f(x, y)$ must be separable as $g(x)h(y)$ for some functions $g$ and $h$ .
$f(x, y) = a(2xy + x + by + 3) = a(x(2y+1) + by + 3)$
$ = a(2xy+x+by+3) = a(2x+\frac{x}{y} +b + \frac{3}{y})y$
Let $f_x(x) = \int_0^1 f(x, y) dy$ and $f_y(y) = \int_0^1 f(x, y) dx$ .

For $x$ and $y$ to be independent, we must have $f(x, y) = f_x(x) f_y(y)$ .

For $f(x,y)$ to be the product of $g(x)$ and $h(y)$ , we must have

$$
2xy + x + by + 3 = (Ax + B)(Cy + D) = ACxy + ADx + BCy + BD
$$

Comparing the coefficients:
$AC = 2$ , $AD = 1$ , $BC = b$ , $BD = 3$

Then $\frac{AD}{BD} = \frac{1}{3} = \frac{A}{B}$ and $\frac{AC}{BC} = \frac{2}{b} = \frac{A}{B}$ .
Therefore, $\frac{1}{3} = \frac{2}{b} \implies b = 6$ .

So $2xy+x+6y+3=(x+3)(2y+1)$ .
Then $2xy+x+by+3 = (Ax+B)(Cy+D)$ ,
$AC=2$ , $AD=1$ , $BC=6$ , $BD=3$
If $D=1$ , then $B=3$ , $A=1$ , and $C=2$ .
$f(x, y) = a(x+3)(2y+1)$ ,
$\int_0^1 \int_0^1 f(x, y) dxdy = 1$
$\int_0^1 \int_0^1 a(x+3)(2y+1) dxdy = a \int_0^1 (x+3)dx \int_0^1 (2y+1) dy$
$= a [\frac{x^2}{2} + 3x]_0^1 [y^2+y]_0^1 = a(\frac{1}{2} + 3)(1+1) = a(\frac{7}{2})(2) = 7a = 1$
So $a = \frac{1}{7}$ .
Therefore, $a = \frac{1}{7}$ and $b = 6$ .
