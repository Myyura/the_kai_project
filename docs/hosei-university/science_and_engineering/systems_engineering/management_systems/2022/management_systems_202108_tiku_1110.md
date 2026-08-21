---
sidebar_label: "2021年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2021年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

ATM が 1 台設置されている. ここを訪れる利用者は 1 時間当たり平均 12 人のポアソン分布に従い, 各利用者が入出金や振込等のために要する時間 (利用時間) は平均 3 分の指数分布に従う. 利用者の到着や利用時間は全て互いに独立で, 利用し終えたらその ATM を立ち去る. このとき, 以下の問いに答えよ.

(1) 利用者が ATM を訪れる時間間隔が従う確率分布の名称を明記し, この時間間隔の平均を示せ. なお, この問題は導出過程を明記する必要はなく, 結果のみで良い.

(2) ある ATM 利用者が立ち去った瞬間から次の利用者が ATM の利用を完了するまでの時間の分布 (確率密度関数) を求めよ.

(3) ある利用者が ATM を立ち去ってから既に 1 分経過している. この時点から 5 分以内に次の利用者が ATM を利用し終えていない確率を求めよ. なお, 指数関数の値は計算しなくて良い.

### 题目描述

某处设有一台 ATM。到访用户人数服从每小时平均 12 人的 Poisson 分布，每位用户办理存取款、转账等业务所需的使用时间服从均值为 3 分钟的指数分布。所有用户的到达过程与使用时间均相互独立，用户使用结束后即离开 ATM。回答下列问题。

（1）写出相邻两位用户到访 ATM 的时间间隔所服从的概率分布名称，并给出该时间间隔的均值。本问无需写推导过程，只写结果即可。

（2）求从某位 ATM 用户离开的瞬间起，到下一位用户使用完 ATM 为止所经历时间的分布，即其概率密度函数。

（3）某位用户离开 ATM 后已经过了 1 分钟。求从此时起 5 分钟内下一位用户仍未使用完 ATM 的概率。指数函数的值无需计算为小数。

## **Kai**

(1) 利用者の到着は 1 時間当たり平均 $12$ 人のポアソン分布に従うので，到着間隔は
強度 $\lambda=12\ \mathrm{[回/時間]}$ のポアソン過程の待ち時間であり，指数分布に従う．
したがって，利用者が ATM を訪れる時間間隔 $X$ は平均

$$
E[X]=\frac1\lambda=\frac1{12}\ \text{[時間]}=5\ \text{[分]}
$$

の指数分布である．

(2) ある利用者が立ち去ってから次の利用者が ATM の利用を完了するまでの時間を $T$ とする．

次の利用者が到着するまでの時間 $X$ は (1) より平均 $5$ 分の指数分布：

$$
  X\sim \operatorname{Exp}\!\left(\frac1{5}\right),
$$

次の利用者の利用時間 $Y$ は平均 $3$ 分の指数分布：

$$
  Y\sim \operatorname{Exp}\!\left(\frac1{3}\right),
$$

とし， $X$ と $Y$ は独立である．

したがって

$$
T=X+Y
$$

の確率密度関数は畳み込みにより

$$
f_T(t)
=\int_0^t \frac15 e^{-x/5}\,\frac13 e^{-(t-x)/3}\,dx
=\frac12\left(e^{-t/5}-e^{-t/3}\right),\qquad t\ge0.
$$

(3) すでに利用者が立ち去ってから $1$ 分経過しているとする．
この時点から $5$ 分以内に次の利用者が ATM を利用し終えていない確率は

$$
P(T>6\mid T>1)
=\frac{P(T>6)}{P(T>1)}.
$$

(2) の密度から生存関数

$$
P(T>t)=\int_t^\infty f_T(u)\,du
=\frac12\left(5e^{-t/5}-3e^{-t/3}\right),\qquad t\ge0
$$

なので，

$$
P(T>6\mid T>1)
=\frac{\frac12\left(5e^{-6/5}-3e^{-2}\right)}
       {\frac12\left(5e^{-1/5}-3e^{-1/3}\right)}
=\frac{5e^{-6/5}-3e^{-2}}{5e^{-1/5}-3e^{-1/3}}.
$$

指数関数の値は計算しなくてよい．
