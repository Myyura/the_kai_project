---
sidebar_label: "2018年8月実施 概率统计"
tags:
  - Saitama-University
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2018年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(a) $C_1, C_2$ を定数とする。確率変数 $X$ は以下の累積分布関数をもつ。

$$
F(x) = \begin{cases}
0 & (x < 0), \\
C_1(x+1)^2 + C_2 & (0 \leq x \leq 2), \\
1 & (2 < x).
\end{cases}
$$

(1) 定数 $C_1, C_2$ を定めよ.

(2) $X$ の確率密度関数を求めよ.

(3) 確率 $Pr(0 \leq X \leq 1)$ を計算せよ.

(b) $X$ と $Y$ は、ともに離散確率変数であるとする. $E[\cdot]$ は期待値を表す。

(1) $X$ と $Y$ の共分散は $Cov(X, Y) = E[(X - E[X])(Y - E[Y])]$ と定義される。
$Cov(X, Y) = E[XY] - E[X]E[Y]$ を示せ。

(2) 条件付き期待値 $E[X|Y]$ は離散確率変数 $Y$ の関数であり, $Y = y$ における値が $E[X|Y = y]$ となる. $E[X] = E[E[X|Y]]$ を示せ。

(c) 10回コイン投げをおこない、2回表が出た、有意水準を5\%として、コインが公正であるかどうかについて統計的検定を実施せよ。

### 题目描述

(a) 设 $C_1,C_2$ 为常数。随机变量 $X$ 的累积分布函数为

$$
F(x)=
\begin{cases}
0,&x<0,\\
C_1(x+1)^2+C_2,&0\leq x\leq2,\\
1,&2<x.
\end{cases}
$$

(1) 确定常数 $C_1,C_2$。

(2) 求 $X$ 的概率密度函数。

(3) 计算概率

$$
\Pr(0\leq X\leq1).
$$

(b) 设 $X,Y$ 均为离散随机变量，$E[\cdot]$ 表示期望。

(1) $X,Y$ 的协方差定义为

$$
\operatorname{Cov}(X,Y)
=E[(X-E[X])(Y-E[Y])].
$$

证明

$$
\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y].
$$

(2) 条件期望 $E[X\mid Y]$ 是离散随机变量 $Y$ 的函数，其在 $Y=y$ 时的值为 $E[X\mid Y=y]$。证明

$$
E[X]=E[E[X\mid Y]].
$$

(c) 投掷一枚硬币 $10$ 次，观察到其中 $2$ 次为正面。取显著性水平为 $5\%$，对该硬币是否公平进行统计检验。

## **Kai**

(a) (1) 一般に累積分布関数は右連続であるが、連続とは限らない。 $x=2$ での右連続性から

$$
9C_1+C_2=1
$$

を得る。また、 $[0,2]$ で単調非減少であるためには $C_1\geq0$ が必要であり、 $x=0$ での跳びの大きさは

$$
F(0)-F(0-)=C_1+C_2=1-8C_1
$$

なので、これも非負でなければならない。したがって、問題文の条件だけでは定数は一意に定まらず、

$$
0\leq C_1\leq\frac18,\qquad C_2=1-9C_1
$$

のすべてが累積分布関数を与える。

問題が $F$ の連続性（または $X$ が確率密度関数を持つこと）を意図しているならば、さらに $F(0)=F(0-)=0$ であるから、

$$
C_1+C_2=0,\qquad 9C_1+C_2=1
$$

となり、

$$
C_1=\frac18,\qquad C_2=-\frac18
$$

を得る。以下ではこの意図された追加条件の下で答える。

(2)

$$
f(x)=\begin{cases}
\frac14(x+1) & (0<x<2),\\
0 & \text{(otherwise)}.
\end{cases}
$$

なお、追加条件を置かない一般の場合は、 $x=0$ に確率質量 $1-8C_1$ があり、連続部分の密度は $2C_1(x+1)$ $(0<x<2)$ である。

(3) 意図された追加条件の下では、

$$
\Pr(0\leq X\leq1)=F(1)=\frac38.
$$

追加条件を置かない一般の場合は $\Pr(0\leq X\leq1)=F(1)=1-5C_1$ である。

(b) (1) $Cov(X, Y) = E[(X - E[X])(Y - E[Y])]$
$= E[XY - XE[Y] - YE[X] + E[X]E[Y]]$
$= E[XY] - E[XE[Y]] - E[YE[X]] + E[E[X]E[Y]]$
$= E[XY] - E[X]E[Y] - E[Y]E[X] + E[X]E[Y]$
$= E[XY] - E[X]E[Y]$

(2) $E[X] = \sum_y E[X|Y=y]P(Y=y) = E[E[X|Y]]$

(c) 帰無仮説: コインは公正である ( $p=0.5$ )
対立仮説: コインは公正でない ( $p \neq 0.5$ )

$X$ は表の出た回数。 $X \sim Bin(10, 0.5)$
$P(X=2) = \binom{10}{2} (0.5)^2 (0.5)^8 = \frac{10 \times 9}{2} (0.5)^{10} = 45 \times (0.5)^{10} \approx 0.0439$
両側検定なので、 $P(X \leq 2) = P(X=0) + P(X=1) + P(X=2)$
$= \binom{10}{0} (0.5)^{10} + \binom{10}{1} (0.5)^{10} + \binom{10}{2} (0.5)^{10}$
$= (1 + 10 + 45)(0.5)^{10} = 56 (0.5)^{10} \approx 0.0547$
$2 \times P(X \leq 2) = 2 \times 0.0547 = 0.1094 > 0.05$ であるから、帰無仮説は棄却されない。
結論: コインが公正であるとは否定できない。
