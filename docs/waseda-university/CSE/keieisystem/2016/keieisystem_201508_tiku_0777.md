---
sidebar_label: "2015年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Basis-and-Dimension
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2015年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

与えられたn次元ベクトル $a,b,c$ が一次独立(linearly independent) であるとする. ベクトル $p,q,r$ をそれぞれ $p=a+b+c$ , $q=a+\alpha b$ , $r=b+\beta c$ としたとき, これらのベクトル $p,q,r$ が一次独立であるために $\alpha, \beta$ が満たすべき条件を示すとともに, その理由を示せ.

### 题目描述

设给定的 $n$ 维向量 $a,b,c$ 线性无关，并定义

$$
p=a+b+c,\qquad q=a+\alpha b,\qquad r=b+\beta c.
$$

求参数 $\alpha,\beta$ 应满足什么条件，向量 $p,q,r$ 才线性无关，并说明理由。

## **Kai**

为了使向量 $p,q,r$ 线性无关，需要证明对于任意的 $x,y,z \in \mathbb{R}$ ，等式 $xp + yq + zr = 0$ 仅在 $x=y=z=0$ 时成立。

$xp + yq + zr = x(a+b+c) + y(a+\alpha b) + z(b+\beta c) = (x+y)a + (x+y\alpha+z)b + (x+z\beta)c = 0$

由于 $a,b,c$ 线性无关，因此它们的线性组合为零向量当且仅当所有系数均为零。因此，我们有：

$\begin{cases} x+y = 0 \\ x+y\alpha+z = 0 \\ x+z\beta = 0 \end{cases}$

将第一个方程代入第二个方程，得到 $x+\alpha(-x)+z = 0$ , 即 $x(1-\alpha) + z = 0$ , 可以写成 $z = x(\alpha-1)$ .
将此结果代入第三个方程，得到 $x+x(\alpha-1)\beta = 0$ , 即 $x(1+(\alpha-1)\beta) = 0$ .

为了使等式 $xp + yq + zr = 0$ 仅在 $x=y=z=0$ 时成立，需要 $1+(\alpha-1)\beta \neq 0$ 。如果 $1+(\alpha-1)\beta \neq 0$ 那么 $x = 0$ ,进而 $y = 0$ , $z = 0$ .

因此, $\alpha$ 和 $\beta$ 必须满足的必要充分条件是

$$
1+(\alpha-1)\beta\neq0,
$$

即

$$
\boxed{\beta(1-\alpha)\neq1}.
$$

特别地， $\alpha=1$ 时左边为 $0$ ，对任意 $\beta$ 都满足该条件，不应将 $\alpha=1$ 排除。
