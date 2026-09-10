---
sidebar_label: '2022年8月実施 数学 第6問'
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Memoryless-Property
  - Probability-Statistics.Stochastic-Processes.Two-State-Markov-Chain-Stationary-Reward
---

# 東京大学 工学系研究科 2022年8月実施 数学 第6問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

オフ状態 $0$ とオン状態 $1$ の間を交互に遷移するライトを考える。各回の持続時間は互いに独立であり、オフ状態とオン状態の持続時間 $T_0,T_1$ は、それぞれ確率密度

$$
f_0(t)=\lambda_0e^{-\lambda_0t},\qquad f_1(t)=\lambda_1e^{-\lambda_1t}\quad(t\ge0),\qquad\lambda_0,\lambda_1>0
$$

の指数分布に従う。例えば $\Pr(a\le T_0\le b)=\int_a^bf_0(t)\,dt$（$0\le a\le b$）である。時刻 $\tau=0$ でライトはオン状態からオフ状態に遷移したものとする。

I. $T_0$ の期待値と標準偏差を求めよ。

II. $T_0+T_1$ の期待値と標準偏差を求めよ。

III. 十分長い時間が経ち、$(\lambda_0+\lambda_1)\tau\to\infty$ と近似できる状況を考える。

1. ライトがオフ状態である確率を求めよ。
2. 現在の状態から次の状態へ遷移するまでの残り時間の期待値を求めよ。

IV. $\tau_x>0$ とする。時刻 $\tau=\tau_x$ において、ライトが $\tau=0$ 以降の最初のオン状態にある確率を求めよ。

#### 题目描述

一盏灯交替处于关灯状态 $0$ 和开灯状态 $1$。各次状态的持续时间互相独立，关灯、开灯的持续时间 $T_0,T_1$ 分别服从密度

$$
f_0(t)=\lambda_0e^{-\lambda_0t},\qquad f_1(t)=\lambda_1e^{-\lambda_1t}\quad(t\ge0),
$$

其中 $\lambda_0,\lambda_1>0$。例如 $\Pr(a\le T_0\le b)=\int_a^bf_0(t)dt$（$0\le a\le b$）。在时刻 $\tau=0$，灯从开灯状态转为关灯状态。

I. 求 $T_0$ 的期望和标准差。

II. 求 $T_0+T_1$ 的期望和标准差。

III. 经过充分长时间，可近似视为 $(\lambda_0+\lambda_1)\tau\to\infty$。

1. 求灯处于关灯状态的概率。
2. 求从现在到下一次状态转换的剩余时间的期望。

IV. 对 $\tau_x>0$，求时刻 $\tau=\tau_x$ 处于 $\tau=0$ 以后第一次开灯状态的概率。

## **Kai**

### I、II

指数分布の積分から $\mathbb E[T_j]=1/\lambda_j$、$\mathbb E[T_j^2]=2/\lambda_j^2$ である。よって

$$
\boxed{\mathbb E[T_0]=\frac1{\lambda_0},\qquad\sigma(T_0)=\frac1{\lambda_0}}.
$$

独立性より、

$$
\boxed{\mathbb E[T_0+T_1]=\frac1{\lambda_0}+\frac1{\lambda_1},\qquad
\sigma(T_0+T_1)=\sqrt{\frac1{\lambda_0^2}+\frac1{\lambda_1^2}}}.
$$

### III

定常確率を $\pi_0,\pi_1$ とすると、

$$
\lambda_0\pi_0=\lambda_1\pi_1,\qquad\pi_0+\pi_1=1.
$$

したがってオフ状態の確率は

$$
\boxed{\pi_0=\frac{\lambda_1}{\lambda_0+\lambda_1}}.
$$

指数分布の無記憶性から、現在の状態が $j$ ならば残り時間の期待値は $1/\lambda_j$ である。現在の状態について平均を取ると、

$$
\boxed{\mathbb E[T_{\mathrm{remaining}}]
=\frac{\pi_0}{\lambda_0}+\frac{\pi_1}{\lambda_1}
=\frac{\lambda_0^2+\lambda_1^2}{\lambda_0\lambda_1(\lambda_0+\lambda_1)}}.
$$

### IV

求める事象は $T_0\le\tau_x<T_0+T_1$ なので、

$$
\Pr(T_0\le\tau_x<T_0+T_1)=\int_0^{\tau_x}\lambda_0e^{-\lambda_0s}e^{-\lambda_1(\tau_x-s)}\,ds.
$$

積分すると、

$$
\boxed{\begin{cases}
\displaystyle\frac{\lambda_0}{\lambda_0-\lambda_1}\left(e^{-\lambda_1\tau_x}-e^{-\lambda_0\tau_x}\right),&\lambda_0\ne\lambda_1,\\[4pt]
\lambda\tau_xe^{-\lambda\tau_x},&\lambda_0=\lambda_1=\lambda.
\end{cases}}
$$

