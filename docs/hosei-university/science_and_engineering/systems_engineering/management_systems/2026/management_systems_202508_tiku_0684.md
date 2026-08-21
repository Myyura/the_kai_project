---
sidebar_label: "2025年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2025年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[2] 独立でない二つの事象 $A, B$ に対し、

$$
X = \begin{cases} 1 & \text{(事象Aが生起する)} \\ 0 & \text{(事象Aが生起しない)} \end{cases}, \quad Y = \begin{cases} 1 & \text{(事象Bが生起する)} \\ 0 & \text{(事象Bが生起しない)} \end{cases}
$$

なる確率変数 $X, Y$ を考える. これら二つの確率変数に対する共分散 $\text{Cov}(X, Y)$ が正である、すなわち、 $\text{Cov}(X, Y) > 0$ を満たすとき, $\Pr(Y = 1|X = 1)$ と $\Pr(Y = 1)$ の大小関係を示せ.

### 题目描述

【2】对两个不独立的事件 $A,B$，定义指示随机变量

$$
X=
\begin{cases}
1,&\text{事件 $A$ 发生},\\
0,&\text{事件 $A$ 不发生},
\end{cases}
\qquad
Y=
\begin{cases}
1,&\text{事件 $B$ 发生},\\
0,&\text{事件 $B$ 不发生}.
\end{cases}
$$

若这两个随机变量满足

$$
\operatorname{Cov}(X,Y)>0,
$$

比较 $\Pr(Y=1\mid X=1)$ 与 $\Pr(Y=1)$ 的大小。

## **Kai**

$\text{Cov}(X, Y) = E[XY] - E[X]E[Y] > 0$ . Since $X, Y$ can only be 0 or 1, we have $E[X] = P(X=1)$ and $E[Y] = P(Y=1)$ .  Also, $E[XY] = P(X=1, Y=1)$ . Thus, $P(X=1, Y=1) > P(X=1) P(Y=1)$ .

We want to compare $P(Y=1 | X=1)$ and $P(Y=1)$ .
By definition, $P(Y=1 | X=1) = \frac{P(Y=1, X=1)}{P(X=1)}$ .
So we have $\frac{P(Y=1, X=1)}{P(X=1)} > P(Y=1)$ .

Therefore, $\Pr(Y = 1|X = 1) > \Pr(Y = 1)$ .
