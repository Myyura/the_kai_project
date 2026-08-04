---
sidebar_label: 2023年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Weighted-Least-Squares
  - Probability-Statistics.Probability-Basics.Copula
---
# 京都大学 情報学研究科 システム科学専攻 2023年8月実施 専門科目 確率統計

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/explore/6886b945000000001d00cb62?xsec_token=ABXXWhvejfYWQlWP3FzACDNuYFWnkRrhjR8xpcEhZ6HU0=)

## **Description**
以下の問題において， $P(A)$ は事象 $A$ の確率を表し， $E(X)$ と $V(X)$ は確率変数 $X$ の期待値と分散を表す．また， $e$ はネイピア数（自然対数の底）を表す．

### 問題1
ある日の，店 $i\ (i=1,\ldots,n)$ の来客数 $Y_i$ は，独立にポアソン分布 $Po(\lambda_i)$ にしたがう確率変数とする．ただし， $\lambda_i>0$ は未知パラメータである．なお，パラメータ $\lambda>0$ のポアソン分布 $Po(\lambda)$ の確率関数は

$$
f(y;\lambda)=\frac{\lambda^{y} e^{-\lambda}}{y!},\quad y=0,1,\ldots
$$

である．以下の設問に答えなさい．

(1) $Y_1,\ldots,Y_n$ を用いて， $\lambda_1,\ldots,\lambda_n$ の最尤推定量 $\hat\lambda_1,\ldots,\hat\lambda_n$ を求めよ．

(2) ポアソン分布 $Po(\lambda)$ にしたがう確率変数 $Y$ の期待値 $E(Y)$ と分散 $V(Y)$ を求めよ．

広い店ほど来客数が多い傾向があり，店 $i$ の広さを定数 $x_i>0$ で表すと $\lambda_i=\theta x_i\ (i=1,\ldots,n)$ となることがわかった．ただし， $\theta>0$ は未知パラメータである．

(3) 最尤法で $\theta$ を推定したい． $Y_1,\ldots,Y_n$ を用いて， $\theta$ の最尤推定量 $\hat\theta$ を求めよ．

(4) 設問 (3) の $\hat\theta$ の期待値 $E(\hat\theta)$ と分散 $V(\hat\theta)$ を求めよ．

(5) 重み付き最小二乗法で $\theta$ を推定したい

$$
\sum_{i=1}^n w_i\,(Y_i-\theta x_i)^2
$$

を最小にする $\theta$ の値を $\hat\theta_w$ とする．ただし， $w_1,\ldots,w_n$ は正の定数である． $\hat\theta_w$ を求めよ．

(6) 設問 (5) の $\hat\theta_w$ の期待値 $E(\hat\theta_w)$ と分散 $V(\hat\theta_w)$ を求めよ．

(7) 設問 (5) の $\hat\theta_w$ に対して， $E\!\left((\hat\theta_w-\theta)^2\right)$ を最小にする $w_1,\ldots,w_n$ の値を求めよ．また，そのときの $\hat\theta_w$ を求めよ．

---

### 問題2
$X,Y$ を実数値確率変数とし，その累積分布関数をそれぞれ $F_X(x)=P(X\le x)$ ， $F_Y(y)=P(Y\le y)$ ，確率密度関数を $f_X(x), f_Y(y)$ とする．ただし実数 $a<b$ に対して $F_X(a)<F_X(b)$ および $F_Y(a)<F_Y(b)$ とする．また， $X$ と $Y$ の同時累積分布関数を $F(x,y)=P(X\le x,\ Y\le y)$ ，同時確率密度関数を $f(x,y)$ とする．以下の設問に答えなさい．

(1) $X$ をそれ自身の累積分布関数に代入して得られる $U=F_X(X)$ を考える． $U$ は $[0,1]$ の範囲で定められる一様分布にしたがう確率変数であることを示せ．

(2) $U$ および $V$ を $[0,1]$ の範囲の一様分布にしたがう確率変数とする．確率変数 $U,V$ の同時累積分布関数を $C(u,v)\ (0\le u\le 1,\ 0\le v\le 1)$ とする．対応する同時密度関数を

$$
c(u,v)=\frac{\partial^2 C(u,v)}{\partial u\,\partial v}
$$

とする．確率変数 $X$ と $Y$ に対して，ある $C$ が存在して

$$
F(x,y)=C\!\big(F_X(x),\,F_Y(y)\big)
$$

と表せることが知られている．このとき $C$ を $(X,Y)$ の**コピュラ**と呼び，対応する同時密度関数 $c$ をコピュラ密度関数と呼ぶ．
上式を用いて $X$ と $Y$ の同時確率密度関数 $f(x,y)$ を， $(X,Y)$ のコピュラ $C$ に対応するコピュラ密度関数 $c$ ，および $F_X(x),F_Y(y),f_X(x),f_Y(y)$ を用いて表せ．

(3) $X$ と $Y$ の同時累積分布関数が

$$
F(x,y)=\frac{1}{1+e^{-x}+e^{-y}}
$$

で与えられるとする． $(X,Y)$ のコピュラ $C$ に対応するコピュラ密度関数 $c(u,v)$ を求めよ．

### 题目描述

以下以 $P(A)$ 表示事件 $A$ 的概率，以 $E(X)$、$V(X)$ 分别表示随机变量
$X$ 的期望和方差，并以 $e$ 表示自然对数的底。回答以下两题。

1. 某一天，商店 $i$ 的顾客数
   $Y_i$（$i=1,\ldots,n$）相互独立，并服从 Poisson 分布
   $\operatorname{Po}(\lambda_i)$，其中
   $\lambda_i>0$ 是未知参数。参数 $\lambda>0$ 的 Poisson 分布概率质量函数为

$$
f(y;\lambda)
=\frac{\lambda^y e^{-\lambda}}{y!},
\qquad y=0,1,\ldots.
$$

   1. 用观测 $Y_1,\ldots,Y_n$ 求
      $\lambda_1,\ldots,\lambda_n$ 的最大似然估计量
      $\widehat{\lambda}_1,\ldots,\widehat{\lambda}_n$。
   2. 若 $Y\sim\operatorname{Po}(\lambda)$，求 $E(Y)$ 和 $V(Y)$。

已知商店越大，顾客数往往越多。以正常数 $x_i$ 表示商店 $i$ 的面积，并采用模型

$$
\lambda_i=\theta x_i,
\qquad i=1,\ldots,n,
$$

其中 $\theta>0$ 是未知参数。

   3. 用 $Y_1,\ldots,Y_n$ 求 $\theta$ 的最大似然估计量
      $\widehat{\theta}$。
   4. 求上一小问中 $\widehat{\theta}$ 的
      $E(\widehat{\theta})$ 和 $V(\widehat{\theta})$。
   5. 改用加权最小二乘法估计 $\theta$。给定正常数
      $w_1,\ldots,w_n$，令 $\widehat{\theta}_w$ 为使

$$
\sum_{i=1}^n
w_i(Y_i-\theta x_i)^2
$$

最小的 $\theta$，求 $\widehat{\theta}_w$。
   6. 求
      $E(\widehat{\theta}_w)$ 和
      $V(\widehat{\theta}_w)$。
   7. 对第 5 小问的 $\widehat{\theta}_w$，求使均方误差

$$
E\!\left[(\widehat{\theta}_w-\theta)^2\right]
$$

最小的权重 $w_1,\ldots,w_n$，并求此时的
$\widehat{\theta}_w$。

2. 设 $X,Y$ 是实值随机变量，其边缘分布函数和边缘密度分别为

$$
F_X(x)=P(X\leq x),\qquad
F_Y(y)=P(Y\leq y),
$$

以及 $f_X(x),f_Y(y)$。假设对任意实数 $a<b$ 都有

$$
F_X(a)<F_X(b),
\qquad
F_Y(a)<F_Y(b).
$$

记联合分布函数和联合密度为

$$
F(x,y)=P(X\leq x,\ Y\leq y),
\qquad
f(x,y).
$$

   1. 定义 $U=F_X(X)$。证明 $U$ 服从区间 $[0,1]$ 上的均匀分布。
   2. 设 $U,V$ 各自服从 $[0,1]$ 上的均匀分布，它们的联合分布函数为

$$
C(u,v),
\qquad 0\leq u\leq1,\quad0\leq v\leq1,
$$

相应联合密度为

$$
c(u,v)
=\frac{\partial^2C(u,v)}
{\partial u\,\partial v}.
$$

已知对 $X,Y$ 存在某个 $C$ 使

$$
F(x,y)
=C\!\left(F_X(x),F_Y(y)\right).
$$

称 $C$ 为 $(X,Y)$ 的 Copula，称 $c$ 为 Copula 密度。利用该等式，用
$c$、$F_X(x)$、$F_Y(y)$、$f_X(x)$ 和 $f_Y(y)$ 表示联合密度
$f(x,y)$。
   3. 若联合分布函数为

$$
F(x,y)
=\frac{1}{1+e^{-x}+e^{-y}},
$$

求 $(X,Y)$ 的 Copula 所对应的密度 $c(u,v)$。

## **Kai**
### 問題1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_prob_stat_p1_1.jpg" width="700" alt=""/>
</figure>

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_prob_stat_p1_2.jpg" width="700" alt=""/>
</figure>

### 問題2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202308_prob_stat_p2.jpg" width="700" alt=""/>
</figure>
