---
sidebar_label: "2022年8月実施 数理基礎"
tags:
  - Waseda-University
  - Mathematics.Calculus.Logarithmic-Differentiation
  - Mathematics.Calculus.Integration-by-Parts
  - Mathematics.Linear-Algebra.Quadratic-Form
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2022年8月実施 数理基礎

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

> 题面缺失边界：本文件在此中文子树之前没有保留原始 Description。Kai 仅给出 A1、A2、A3 的解答，并只留下空的 B、C 标题；frontmatter 的三个主题标签也只对应这三问。因此，下列内容仅恢复 Kai 可唯一确定的 A 部分。B、C 的题干、条件、公式及小问均无法从现有材料确定，不作补写。

恢复出的 A 部分如下：

1. 设 $x>0$，对函数

   $$
   f(x)=\left(\frac1{2x}\right)^x
   $$

   求导。
2. 计算定积分

   $$
   \int_2^3\frac{\log x}{(x-1)^2}\,dx.
   $$

3. 求原点到曲线

   $$
   x^2+xy+y^2=3
   $$

   的最短距离与最长距离。

## **Kai**
###

$$
A
$$

####

$$
小問 A1
$$

$x \gt 0$ のとき $f(x) \gt 0$ であり、次のように計算できる：

$$
  \begin{aligned}
  f(x) &= \left( \frac{1}{2x} \right)^x
  \\
  \log f(x) &= - x \log 2x
  \\
  \frac{f'(x)}{f(x)} &= - \log 2x - 1
  \\
  \therefore \ \
  f'(x) &= - f(x) \left( \log 2x + 1 \right)
  \\
  &= - \left( \frac{1}{2x} \right)^x \left( \log 2x + 1 \right)
  \end{aligned}
$$

####

$$
小問 A2
$$

$$
  \begin{aligned}
  \int_2^3 \frac{\log x}{(x-1)^2} dx
  &= \left[ - \frac{\log x}{x-1} \right]_2^3 + \int_2^3 \frac{1}{x(x-1)} dx
  \\
  &= - \frac{\log 3}{2} + \log 2
  + \int_2^3 \left( \frac{1}{x-1} - \frac{1}{x} \right) dx
  \\
  &= - \frac{\log 3}{2} + \log 2 + \left[ \log (x-1) - \log x \right]_2^3
  \\
  &= - \frac{3}{2} \log 3 + 3 \log 2
  \end{aligned}
$$

####

$$
小問 A3
$$

極座標 $(r, \theta)$ を導入して、

$$
  \begin{aligned}
  x = r \cos \theta, \ y = r \sin \theta
  \ \ \ \ (r \geq 0, 0 \leq \theta \lt 2 \pi)
  \end{aligned}
$$

と書く。 $x^2 + xy + y^2 = 3$ は、

$$
  \begin{aligned}
  r^2 + \frac{1}{2} r^2 \sin 2 \theta &= 3
  \\
  \therefore \ \
  r^2 &= \frac{6}{\sin 2 \theta + 2}
  \end{aligned}
$$

と書けるので、求める最短距離は $\sqrt{2}$ 、最長距離は $\sqrt{6}$ である。

###

$$
B
$$

###

$$
C
$$
