---
sidebar_label: "2024年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2024年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数 $V, W, T$ について, 以下の問いに答えよ.

(1) 確率変数 $U$ が $(0,1)$ 上の一様分布に従うとき, $V = -\ln(U)$ で表される確率変数 $V$ の分布関数を示せ.

(2) 確率変数 $V$ が(1)で求めた確率分布に従うとき, $W = \lambda^{-1}V$ で表される確率変数の確率密度関数を示せ. ただし, $\lambda$ は非負の定数とする.

(3) 確率変数 $S$ が平均 $\mu$ の指数分布に従うとき, $T = 1 - \exp(-\mu^{-1}S)$ で表される確率変数 $T$ の期待値を求めよ.

### 题目描述

关于随机变量 $V,W,T$，回答下列问题。

（1）设随机变量 $U$ 服从区间 $(0,1)$ 上的均匀分布，且

$$
V=-\ln(U).
$$

求随机变量 $V$ 的分布函数。

（2）设随机变量 $V$ 服从（1）求得的概率分布，并定义

$$
W=\lambda^{-1}V.
$$

求 $W$ 的概率密度函数。原题称 $\lambda$ 为非负常数，但 $\lambda=0$ 时 $\lambda^{-1}V$ 无定义，因此本问有意义的参数范围为 $\lambda>0$。

（3）设随机变量 $S$ 服从均值为 $\mu$ 的指数分布，并定义

$$
T=1-\exp(-\mu^{-1}S).
$$

求 $T$ 的期望。

## **Kai**

確率変数 $V,W,T$ について，以下に答える．

(1) 確率変数 $U$ が $(0,1)$ 上の一様分布に従い，

$$
V=-\ln U
$$

と定める． $V$ の分布関数を求める．

$u\mapsto v=-\ln u$ は $(0,1)$ から $(0,\infty)$ への単調減少写像である．
$v\ge0$ に対し

$$
F_V(v)=P(V\le v)
      =P(-\ln U\le v)
      =P\bigl(U\ge e^{-v}\bigr)
      =1-P\bigl(U<e^{-v}\bigr)
      =1-e^{-v}.
$$

よって

$$
F_V(v)=
\begin{cases}
0, & v<0,\\[2pt]
1-e^{-v}, & v\ge0.
\end{cases}
$$

従って $V$ は平均 $1$ の指数分布に従う．

(2) $V$ が (1) で求めた分布（平均 $1$ の指数分布）に従い，

$$
W=\lambda^{-1}V\qquad (\lambda>0)
$$

とする． $W$ の確率密度関数を求める．
なお、問題文では $\lambda$ は非負とされているが、 $\lambda=0$ では $\lambda^{-1}V$ が定義されないため、以下では定義可能な $\lambda>0$ の場合を考える。

$v=\lambda w$ より

$$
f_W(w)
=f_V(\lambda w)\,\left|\frac{dv}{dw}\right|
=e^{-\lambda w}\cdot\lambda
=
\begin{cases}
\lambda e^{-\lambda w}, & w\ge0,\\[2pt]
0, & \text{otherwise}.
\end{cases}
$$

したがって $W$ は平均 $1/\lambda$ の指数分布に従う．

(3) 確率変数 $S$ が平均 $\mu$ の指数分布に従い，

$$
T=1-\exp(-\mu^{-1}S)
$$

と定める． $T$ の期待値を求める．

$S$ の密度は

$$
f_S(s)=\frac1{\mu}e^{-s/\mu}\qquad (s\ge0)
$$

であるから

$$
E[T]
=E\bigl[1-e^{-S/\mu}\bigr]
=1-E\bigl[e^{-S/\mu}\bigr].
$$

ここで

$$
E\bigl[e^{-S/\mu}\bigr]
=\int_{0}^{\infty} e^{-s/\mu}\cdot\frac1{\mu}e^{-s/\mu}\,ds
=\frac1{\mu}\int_{0}^{\infty} e^{-2s/\mu}\,ds
=\frac1{\mu}\cdot\frac{\mu}{2}
=\frac12.
$$

したがって

$$
E[T]=1-\frac12=\boxed{\frac12}.
$$

（ $\mu$ の値によらず一定である．）
