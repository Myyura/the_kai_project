---
sidebar_label: '2014年8月実施 数学 第6問'
tags:
  - Tokyo-University
  - Probability-Statistics.Stochastic-Processes.Exponential-Spacings-and-Poisson-Counting-Process
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Gamma-Distribution
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---

# 東京大学 工学系研究科 2014年8月実施 数学 第6問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

客は必ず1人ずつレストランに来店する。$n_0$ 番目の客が時刻 $t_0$ に来店したとし、$n_0+n$ 番目の客が時刻 $t_0+t$ に来店する確率密度を $f_n(t)$（$t>0$）とする。来店間隔は独立で、$n_0,t_0$ によらず次の密度に従う。

$$
f_1(t)=\lambda e^{-\lambda t},\qquad\lambda>0.
$$

I. $n_0+1$ 番目の客の来店時刻の期待値を求めよ。

II. 次の関係を示せ。

$$
f_2(t)=\lambda^2te^{-\lambda t},\quad
f_3(t)=\frac12\lambda^3t^2e^{-\lambda t},\quad
f_4(t)=\frac16\lambda^4t^3e^{-\lambda t}.
$$

III. $f_n$ の一般形を推測し、数学的帰納法で証明せよ。

IV. 時間区間 $(t_0,t_0+T]$（$T>0$）に新しく来店する客数 $M$ が

$$
P(M=m)=\frac{(\lambda T)^m}{m!}e^{-\lambda T},\qquad m=0,1,\ldots.
$$

に従うとする。$E[M]$ を求めよ。$e^a=\sum_{k=0}^\infty a^k/k!$ を用いてよい。

#### 题目描述

顾客逐一到达餐厅。第 $n_0$ 位顾客在时刻 $t_0$ 到达，记第 $n_0+n$ 位顾客在 $t_0+t$ 到达的概率密度为 $f_n(t)$（$t>0$）。相邻到达间隔独立，且不依赖 $n_0,t_0$，满足

$$
f_1(t)=\lambda e^{-\lambda t},\qquad\lambda>0.
$$

I. 求第 $n_0+1$ 位顾客到达时刻的期望。

II. 证明

$$
f_2(t)=\lambda^2te^{-\lambda t},\quad
f_3(t)=\frac12\lambda^3t^2e^{-\lambda t},\quad
f_4(t)=\frac16\lambda^4t^3e^{-\lambda t}.
$$

III. 猜测 $f_n$ 的一般式，并用数学归纳法证明。

IV. 已知区间 $(t_0,t_0+T]$（$T>0$）内新到顾客数 $M$ 服从

$$
P(M=m)=\frac{(\lambda T)^m}{m!}e^{-\lambda T},\qquad m=0,1,\ldots.
$$

求 $E[M]$。可使用 $e^a=\sum_{k=0}^\infty a^k/k!$。

## **Kai**

### I

$$
\boxed{E[t_0+T_1]=t_0+\int_0^\infty t\lambda e^{-\lambda t}\,\mathrm dt
=t_0+\frac1\lambda.}
$$

### II

独立な来店間隔の和の密度は、次の畳み込みの漸化式を満たす。

$$
f_{n+1}(t)=\int_0^t f_n(u)f_1(t-u)\,\mathrm du.
$$

順に計算すると、

$$
\begin{aligned}
f_2(t)&=\lambda^2e^{-\lambda t}\int_0^t\mathrm du=\lambda^2te^{-\lambda t},\\
f_3(t)&=\lambda^3e^{-\lambda t}\int_0^tu\,\mathrm du=\frac{\lambda^3t^2}{2}e^{-\lambda t},\\
f_4(t)&=\frac{\lambda^4e^{-\lambda t}}2\int_0^tu^2\,\mathrm du
=\frac{\lambda^4t^3}{6}e^{-\lambda t}.
\end{aligned}
$$

### III

一般形は

$$
\boxed{f_n(t)=\frac{\lambda^nt^{n-1}}{(n-1)!}e^{-\lambda t},\qquad t>0.}
$$

$n=1$ では成立する。$n=k$ のとき成立すると仮定すれば、

$$
f_{k+1}(t)=\frac{\lambda^{k+1}e^{-\lambda t}}{(k-1)!}
\int_0^tu^{k-1}\,\mathrm du
=\frac{\lambda^{k+1}t^k}{k!}e^{-\lambda t}.
$$

よって数学的帰納法により、すべての $n\ge1$ に対して成立する。

### IV

$$
\boxed{E[M]=e^{-\lambda T}\sum_{m=1}^\infty\frac{m(\lambda T)^m}{m!}
=\lambda T e^{-\lambda T}\sum_{k=0}^\infty\frac{(\lambda T)^k}{k!}
=\lambda T.}
$$

