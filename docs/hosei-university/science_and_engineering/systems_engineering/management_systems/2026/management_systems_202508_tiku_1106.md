---
sidebar_label: "2025年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2025年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura


## **Description**

連続型確率変数 $X$ の確率密度関数 $f_X(x)$ が

$$
f_X(x) = \frac{1}{8}(|x| + 1) \quad (|x| < 2)
$$

で与えられている. 以下の問いに答えよ.
(1) 累積分布関数を求めよ.
(2) $Pr\{-\frac{3}{2} < X < 1 | X > -1\}$ の値 (既約分数)を求めよ.

### 题目描述

连续型随机变量 $X$ 的概率密度函数为

$$
f_X(x)=\frac18(|x|+1)\qquad(|x|<2),
$$

在 $|x|\ge2$ 时为 $0$。回答下列问题。

（1）求 $X$ 的累积分布函数。

（2）求条件概率

$$
\Pr\left\{-\frac32<X<1\,\middle|\,X>-1\right\},
$$

并将结果写成最简分数。

## **Kai**

(1) 累積分布関数を $F_X(x)$ とすると、

$x \leq -2$ のとき、 $F_X(x) = 0$

$-2 < x < 2$ のとき、

$$
F_X(x) = \int_{-\infty}^x f_X(t) dt = \int_{-2}^x \frac{1}{8}(|t| + 1) dt
$$

$-2 \leq x < 0$ のとき、

$$
\begin{aligned}
F_X(x) &= \int_{-2}^x \frac{1}{8}(-t + 1) dt \\
&= \frac{1}{8} \left[ -\frac{t^2}{2} + t \right]_{-2}^x \\
&= \frac{1}{8} \left[ -\frac{x^2}{2} + x - ( -\frac{4}{2} - 2 ) \right] \\
&= \frac{1}{8} \left[ -\frac{x^2}{2} + x + 4 \right] \\
&= -\frac{x^2}{16} + \frac{x}{8} + \frac{1}{2}
\end{aligned}
$$

$0 \leq x < 2$ のとき、

$$
\begin{aligned}
F_X(x) &= \int_{-2}^0 \frac{1}{8}(-t + 1) dt + \int_0^x \frac{1}{8}(t + 1) dt \\
&= \frac{1}{2} + \int_0^x \frac{1}{8}(t + 1) dt \\
&= \frac{1}{2} + \frac{1}{8} \left[ \frac{t^2}{2} + t \right]_0^x \\
&= \frac{1}{2} + \frac{1}{8} \left( \frac{x^2}{2} + x \right) \\
&= \frac{x^2}{16} + \frac{x}{8} + \frac{1}{2}
\end{aligned}
$$

$x \geq 2$ のとき、 $F_X(x) = 1$

したがって,

$$
F_X(x) = \begin{cases} 0 & (x \leq -2) \\ -\frac{x^2}{16} + \frac{x}{8} + \frac{1}{2} & (-2 < x < 0) \\ \frac{x^2}{16} + \frac{x}{8} + \frac{1}{2} & (0 \leq x < 2) \\ 1 & (x \geq 2) \end{cases}
$$

(2)

$$
\begin{aligned}
Pr\{-\frac{3}{2} < X < 1 | X > -1\} &= \frac{Pr\{-\frac{3}{2} < X < 1, X > -1\}}{Pr\{X > -1\}} \\
&= \frac{Pr\{-1 < X < 1\}}{Pr\{X > -1\}}
\end{aligned}
$$

$$
\begin{aligned}
Pr\{-1 < X < 1\} &= F_X(1) - F_X(-1) \\
&= (\frac{1}{16} + \frac{1}{8} + \frac{1}{2}) - ( -\frac{1}{16} - \frac{1}{8} + \frac{1}{2}) \\
&= \frac{2}{16} + \frac{2}{8} = \frac{1}{8} + \frac{1}{4} = \frac{3}{8}
\end{aligned}
$$

$$
\begin{aligned}
Pr\{X > -1\} &= 1 - Pr\{X \leq -1\} = 1 - F_X(-1) \\
&= 1 - ( -\frac{1}{16} - \frac{1}{8} + \frac{1}{2}) \\
&= 1 + \frac{1}{16} + \frac{1}{8} - \frac{1}{2} = \frac{16 + 1 + 2 - 8}{16} = \frac{11}{16}
\end{aligned}
$$

したがって、

$Pr\{-\frac{3}{2} < X < 1 | X > -1\} = \frac{3/8}{11/16} = \frac{3}{8} \times \frac{16}{11} = \frac{6}{11}$
