---
sidebar_label: "2016年8月実施 微分方程"
tags:
  - Nagoya-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2016年8月実施 微分方程

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

非線形力学系

$$
\frac{dx}{dt} = x(1-x)(1-2x) \qquad (t \geq 0)
$$

について考える。

1) 系の不動点をすべて求め、それぞれの安定性を調べよ。

2) $0 < x(0) < 1$ のとき, $t \rightarrow \infty$ での $x(\infty)$ の値を理由とともに答えよ。

3) $L(x) = x(1-x) \ (0 < x < 1)$ が時間に関する単調増加関数であることを示せ。

### 题目描述

考察非线性动力系统

$$
\frac{dx}{dt}=x(1-x)(1-2x),
\qquad t\ge0.
$$

1. 求该系统的全部不动点，并考察每个不动点的稳定性；
2. 当 $0<x(0)<1$ 时，求 $t\to\infty$ 时的 $x(\infty)$，并说明理由；
3. 证明

   $$
   L(x)=x(1-x),\qquad0<x<1,
   $$

   是关于时间的单调递增函数。

## **Kai**

1) 不動点は $\frac{dx}{dt} = 0$ を満たす点なので、 $x(1-x)(1-2x) = 0$ を解く。よって、 $x = 0, \frac{1}{2}, 1$ が不動点である。

安定性を調べるために、 $\frac{dx}{dt} = f(x) = x(1-x)(1-2x)$ とする。 $f'(x) = (1-x)(1-2x) + x(-1)(1-2x) + x(1-x)(-2) = 1 - 6x + 6x^2$ 。したがって、

$f'(0) = 1 > 0$ より、 $x = 0$ は不安定。

$f'(\frac{1}{2}) = 1 - 6(\frac{1}{2}) + 6(\frac{1}{4}) = 1 - 3 + \frac{3}{2} = -\frac{1}{2} < 0$ より、 $x = \frac{1}{2}$ は安定。

$f'(1) = 1 - 6 + 6 = 1 > 0$ より、 $x = 1$ は不安定。

2) $0 < x(0) < 1$ のとき、初期値を $1/2$ との大小で場合分けする。

$0 < x(0) < \frac{1}{2}$ の場合、 $\frac{dx}{dt} = x(1-x)(1-2x) > 0$ より、 $x(t)$ は増加関数であり、 $x(t) \rightarrow \frac{1}{2}$ as $t \rightarrow \infty$ 。

$\frac{1}{2} < x(0) < 1$ の場合、 $\frac{dx}{dt} = x(1-x)(1-2x) < 0$ より、 $x(t)$ は減少関数であり、 $x(t) \rightarrow \frac{1}{2}$ as $t \rightarrow \infty$ 。

$x(0)=\frac12$ の場合は不動点なので、 $x(t)\equiv\frac12$ である。

したがって、 $x(\infty) = \frac{1}{2}$ 。

3) $L(x) = x(1-x)$ である。 $\frac{dL}{dt} = \frac{dL}{dx} \frac{dx}{dt} = (1-2x) \frac{dx}{dt} = (1-2x) x(1-x)(1-2x) = x(1-x)(1-2x)^2$ 。

$0 < x < 1$ のとき、 $x(1-x) > 0$ であり、 $(1-2x)^2 \geq 0$ である。したがって、 $\frac{dL}{dt} = x(1-x)(1-2x)^2 \geq 0$ 。

よって、 $L(x)$ は時間に関する単調増加関数である。
