---
sidebar_label: "2023年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2023年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

平均1の指数分布に従う確率変数 $S$ を用いて表される確率変数 $X = \lambda^{-1}S + \gamma$ , 及びこの確率変数 $X$ と独立で同一の分布に従う確率変数 $W$ を用いて表される確率変数 $Y = W-c$ を考える。 $\lambda (>0), \gamma, c$ を定数として、以下の問いに答えよ。

(1) $X$ の確率密度関数を示せ。

(2) $X+Y$ の確率密度関数を示せ。

(3) $E[X+Y]$ を $\gamma, \lambda, c$ を用いて表せ。

### 题目描述

设随机变量 $S$ 服从均值为 $1$ 的指数分布，并定义

$$
X=\lambda^{-1}S+\gamma.
$$

另取与 $X$ 相互独立且同分布的随机变量 $W$，定义

$$
Y=W-c.
$$

其中 $\lambda>0$，$\gamma,c$ 为常数。回答下列问题。

（1）给出 $X$ 的概率密度函数。

（2）给出 $X+Y$ 的概率密度函数。

（3）用 $\gamma,\lambda,c$ 表示 $E[X+Y]$。

## **Kai**

(1) $X$ の確率密度関数を示せ．

$S$ は平均 $1$ の指数分布なので

$$
f_S(s)=
\begin{cases}
e^{-s}, & s>0,\\[2pt]
0, & \text{otherwise}
\end{cases}
$$

である． $X=\lambda^{-1}S+\gamma$ から $S=\lambda(X-\gamma)$ ，よって

$$
f_X(x)
=f_S\bigl(\lambda(x-\gamma)\bigr)\,\lambda
=
\begin{cases}
\lambda e^{-\lambda(x-\gamma)}, & x>\gamma,\\[2pt]
0, & \text{otherwise}.
\end{cases}
$$

(2) $X+Y$ の確率密度関数を示せ．

$W$ は $X$ と同じ分布なので

$$
f_W(w)=
\begin{cases}
\lambda e^{-\lambda(w-\gamma)}, & w>\gamma,\\[2pt]
0, & \text{otherwise}.
\end{cases}
$$

まず $X$ と $W$ の和

$$
U=X+W
$$

の分布を求める． $X' = X-\gamma,\ W'=W-\gamma$ とおくと，
$X',W'$ はともに $\operatorname{Exp}(\lambda)$ に従い独立である．
したがって

$$
V=X'+W'
$$

は形状母数 $2$ ，率 $\lambda$ のガンマ分布に従い，

$$
f_V(v)=
\begin{cases}
\lambda^{2}v e^{-\lambda v}, & v>0,\\[2pt]
0, & \text{otherwise}.
\end{cases}
$$

$U=V+2\gamma$ なので

$$
f_U(u)=
\begin{cases}
\lambda^{2}(u-2\gamma)e^{-\lambda(u-2\gamma)}, & u>2\gamma,\\[2pt]
0, & \text{otherwise}.
\end{cases}
$$

次に

$$
Z=X+Y=X+W-c=U-c
$$

とおくと，平行移動により

$$
f_{X+Y}(z)=f_Z(z)=f_U(z+c)
=
\begin{cases}
\lambda^{2}(z+c-2\gamma)e^{-\lambda(z+c-2\gamma)}, & z>2\gamma-c,\\[2pt]
0, & \text{otherwise}.
\end{cases}
$$

(3) $E[X+Y]$ を $\gamma,\lambda,c$ を用いて表せ．

$$
E[X]=E[\lambda^{-1}S+\gamma]
=\lambda^{-1}E[S]+\gamma
=\frac1\lambda+\gamma.
$$

$W$ も $X$ と同分布なので $E[W]=\frac1\lambda+\gamma$ であり，

$$
E[Y]=E[W-c]=\frac1\lambda+\gamma-c.
$$

したがって

$$
E[X+Y]=E[X]+E[Y]
=\left(\frac1\lambda+\gamma\right)
+\left(\frac1\lambda+\gamma-c\right)
=\boxed{\frac{2}{\lambda}+2\gamma-c}.
$$
