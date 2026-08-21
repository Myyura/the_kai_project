---
sidebar_label: "2020年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2020年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[1] あるビルには3台のエレベーターが設置されている。これらは異なる A,B,Cの3社のメーカーが製造しており、各メーカーのエレベーターが故障するまでの時間 $X_A, X_B, X_C$ (単位:年) は独立で、それぞれ平均 $\lambda_A^{-1}, \lambda_B^{-1}, \lambda_C^{-1}$ の指数分布に従う。これら3台のエレベーターの使用を同時に開始する。このとき、以下の問いに答えよ。なお、指数関数の値は計算しなくて良い。

(1) $\lambda_A^{-1} = 20, \lambda_B^{-1} = 25, \lambda_C^{-1} = 30$ のとき、15年以上エレベーターが1台も故障しない確率を求めよ。

(2) $\lambda_A = \lambda_B = \lambda_C = \lambda$ のとき、2台目のエレベーターが故障するまでの時間Yの確率密度関数を $\lambda$ を用いて表せ。なお、エレベーターが故障しても修理や交換は行わないものとして解答すること。

### 题目描述

某栋大楼安装了三台电梯，分别由不同的 A、B、C 三家公司制造。各电梯从投入使用到发生故障的时间 $X_A,X_B,X_C$（单位：年）相互独立，并分别服从均值为 $\lambda_A^{-1},\lambda_B^{-1},\lambda_C^{-1}$ 的指数分布。三台电梯同时开始使用。回答下列问题，指数函数的值无需计算为小数。

（1）当

$$
\lambda_A^{-1}=20,\qquad \lambda_B^{-1}=25,\qquad \lambda_C^{-1}=30
$$

时，求在 15 年内三台电梯均不发生故障的概率。

（2）当 $\lambda_A=\lambda_B=\lambda_C=\lambda$ 时，设 $Y$ 为第二台电梯发生故障所经历的时间，用 $\lambda$ 表示 $Y$ 的概率密度函数。作答时假定电梯发生故障后不进行维修或更换。

## **Kai**

(1) $X_A, X_B, X_C$ はそれぞれパラメータが $\lambda_A, \lambda_B, \lambda_C$ の指数分布に従うので、

$$
P(X_A > 15) = e^{-15\lambda_A} = e^{-\frac{15}{20}} = e^{-\frac{3}{4}}
$$

$$
P(X_B > 15) = e^{-15\lambda_B} = e^{-\frac{15}{25}} = e^{-\frac{3}{5}}
$$

$$
P(X_C > 15) = e^{-15\lambda_C} = e^{-\frac{15}{30}} = e^{-\frac{1}{2}}
$$

よって、15年以上エレベーターが1台も故障しない確率は

$$
P(X_A > 15, X_B > 15, X_C > 15) = P(X_A > 15)P(X_B > 15)P(X_C > 15) = e^{-\frac{3}{4}}e^{-\frac{3}{5}}e^{-\frac{1}{2}} = e^{-\frac{15+12+10}{20}} = e^{-\frac{37}{20}}
$$

(2) $X_A, X_B, X_C$ はそれぞれパラメータが $\lambda$ の指数分布に従う。このとき、Yは2番目の順序統計量である。
Yの確率密度関数は、$y\geq 0$ に対して

$$
f_Y(y)
= 3 \binom{3-1}{2-1} (1 - e^{-\lambda y}) e^{-\lambda y} \lambda e^{-\lambda y}
= 6\lambda (e^{-2\lambda y} - e^{-3\lambda y})
$$

$$
f_Y(y)
= 6\lambda e^{-2\lambda y} (1-e^{-\lambda y})
= 6\lambda (e^{-2\lambda y} - e^{-3\lambda y})
$$

であり、$y<0$ では $f_Y(y)=0$ である。したがって、まとめると

$$
f_Y(y)=
\begin{cases}
6\lambda\left(e^{-2\lambda y}-e^{-3\lambda y}\right),&y\geq 0,\\
0,&y<0
\end{cases}
$$

となる。
