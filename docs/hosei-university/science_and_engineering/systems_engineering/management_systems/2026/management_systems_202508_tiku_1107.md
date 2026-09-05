---
sidebar_label: "2025年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2025年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura


## **Description**

確率変数 $X, Y, Z$ について、 $0 < Var[X] < \infty$ , $0 < Var[Y] < \infty$ , $0 < Var[Z] < \infty$ である.
このとき, $X+Y$ と $X-Z$ の共分散を $X$ の分散, $X$ と $Z$ の共分散, $X$ と $Y$ の共分散, 及び $Y$ と $Z$ の共分散を用いて表せ.

### 题目描述

随机变量 $X,Y,Z$ 满足

$$
0<\operatorname{Var}[X]<\infty,\qquad
0<\operatorname{Var}[Y]<\infty,\qquad
0<\operatorname{Var}[Z]<\infty.
$$

用 $X$ 的方差、$X$ 与 $Z$ 的协方差、$X$ 与 $Y$ 的协方差，以及 $Y$ 与 $Z$ 的协方差，表示 $X+Y$ 与 $X-Z$ 的协方差。

## **Kai**

まず、共分散の定義を確認します。
$Cov(A, B) = E[(A - E[A])(B - E[B])] = E[AB] - E[A]E[B]$
また、 $Var[X] = Cov(X, X)$ です。
$Cov(X+Y, X-Z) = E[(X+Y)(X-Z)] - E[X+Y]E[X-Z]$
$= E[X^2 - XZ + YX - YZ] - (E[X]+E[Y])(E[X]-E[Z])$
$= E[X^2] - E[XZ] + E[YX] - E[YZ] - (E[X]^2 - E[X]E[Z] + E[Y]E[X] - E[Y]E[Z])$
$= E[X^2] - E[XZ] + E[XY] - E[YZ] - E[X]^2 + E[X]E[Z] - E[Y]E[X] + E[Y]E[Z]$
$= (E[X^2] - E[X]^2) - (E[XZ] - E[X]E[Z]) + (E[XY] - E[X]E[Y]) - (E[YZ] - E[Y]E[Z])$
$= Var[X] - Cov(X, Z) + Cov(X, Y) - Cov(Y, Z)$

したがって、
$Cov(X+Y, X-Z) = Var[X] + Cov(X, Y) - Cov(X, Z) - Cov(Y, Z)$
