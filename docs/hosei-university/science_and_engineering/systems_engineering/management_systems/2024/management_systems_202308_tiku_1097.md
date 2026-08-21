---
sidebar_label: "2023年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2023年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数 $U$ は区間 $(0,1)$ 上の一様分布に従う。以下の問いに答えよ。なお、指数関数の値は計算しなくて良い。

(1) $1-U$ も一様分布に従うことを示せ。

(2) $E[e^U]$ を求めよ。

(3) $Var[e^U]$ を求めよ。

(4) $Cov[e^U, e^{1-U}]$ を求めよ。

(5) 区間 $(0,1)$ 上の一様分布に従う独立な二つの確率変数 $U_i$ ( $i=1, 2$ )に対し、

$$
Var\left[\frac{e^{U_1} + e^{U_2}}{2}\right] > Var\left[\frac{e^{U} + e^{1-U}}{2}\right]
$$

が成り立つことを示せ。なお、必要なら $e \approx 2.7$ を使用すること。

### 题目描述

随机变量 $U$ 服从区间 $(0,1)$ 上的均匀分布。回答下列问题，指数函数的值无需计算为小数。

（1）证明 $1-U$ 也服从区间 $(0,1)$ 上的均匀分布。

（2）求 $E[e^U]$。

（3）求 $\operatorname{Var}[e^U]$。

（4）求 $\operatorname{Cov}[e^U,e^{1-U}]$。

（5）设 $U_i\ (i=1,2)$ 是两个相互独立且均服从区间 $(0,1)$ 上均匀分布的随机变量，证明

$$
\operatorname{Var}\left[\frac{e^{U_1}+e^{U_2}}{2}\right]
>
\operatorname{Var}\left[\frac{e^U+e^{1-U}}{2}\right].
$$

如有需要，可使用 $e\approx2.7$。

## **Kai**

(1) $U$ が $(0,1)$ の一様分布に従うとき、確率密度関数は $f_U(u) = 1$ (for $0 < u < 1$ ) であり、それ以外では $0$ である。 $V = 1 - U$ とすると、 $0 < V < 1$ である。 $V$ の累積分布関数は $F_V(v) = P(V \le v) = P(1 - U \le v) = P(U \ge 1 - v) = 1 - P(U < 1 - v) = 1 - (1 - v) = v$ である。 したがって、 $V$ の確率密度関数は $f_V(v) = \frac{d}{dv} F_V(v) = 1$ (for $0 < v < 1$ ) であり、それ以外では $0$ である。 したがって、 $1 - U$ も $(0,1)$ の一様分布に従う。

(2) $E[e^U] = \int_0^1 e^u f_U(u) du = \int_0^1 e^u du = [e^u]_0^1 = e^1 - e^0 = e - 1 \approx 2.7 - 1 = 1.7$

(3) $E[e^{2U}] = \int_0^1 (e^u)^2 f_U(u) du = \int_0^1 e^{2u} du = \left[\frac{1}{2} e^{2u}\right]_0^1 = \frac{1}{2} (e^2 - 1) \approx \frac{1}{2} (2.7^2 - 1) = \frac{1}{2} (7.29 - 1) = \frac{6.29}{2} = 3.145$
$Var[e^U] = E[e^{2U}] - (E[e^U])^2 = \frac{e^2 - 1}{2} - (e-1)^2 = \frac{e^2 - 1 - 2(e^2 - 2e + 1)}{2} = \frac{-e^2 + 4e - 3}{2} \approx \frac{-7.29 + 4(2.7) - 3}{2} = \frac{-7.29 + 10.8 - 3}{2} = \frac{0.51}{2} = 0.255$

(4) $Cov[e^U, e^{1-U}] = E[e^U e^{1-U}] - E[e^U]E[e^{1-U}] = E[e] - E[e^U]E[e^{1-U}] = e - (e-1)^2 = e - (e^2 - 2e + 1) = -e^2 + 3e - 1 \approx -7.29 + 3(2.7) - 1 = -7.29 + 8.1 - 1 = -0.19$

(5)  $Var\left[\frac{e^{U_1} + e^{U_2}}{2}\right] = \frac{1}{4} (Var[e^{U_1}] + Var[e^{U_2}]) = \frac{1}{4} (2 Var[e^U]) = \frac{1}{2} Var[e^U] = \frac{1}{2} \frac{-e^2 + 4e - 3}{2} = \frac{-e^2 + 4e - 3}{4}$
$Var\left[\frac{e^{U} + e^{1-U}}{2}\right] = \frac{1}{4} Var[e^U + e^{1-U}] = \frac{1}{4} (Var[e^U] + Var[e^{1-U}] + 2Cov[e^U, e^{1-U}])$ . Since $1-U$ has the same distribution as $U$ , $Var[e^{1-U}] = Var[e^U]$ .
Therefore, $Var\left[\frac{e^{U} + e^{1-U}}{2}\right] = \frac{1}{4} (2 Var[e^U] + 2Cov[e^U, e^{1-U}]) = \frac{1}{2} (Var[e^U] + Cov[e^U, e^{1-U}]) = \frac{1}{2} (\frac{-e^2 + 4e - 3}{2} + (-e^2 + 3e - 1)) = \frac{-3e^2 + 10e - 5}{4}$ .
Then, we need to show $\frac{-e^2 + 4e - 3}{4} > \frac{-3e^2 + 10e - 5}{4}$ , which is equivalent to $2e^2 - 6e + 2 > 0$ , or $e^2 - 3e + 1 > 0$ . Using $e \approx 2.7$ , we have $(2.7)^2 - 3(2.7) + 1 = 7.29 - 8.1 + 1 = 0.19 > 0$ .
