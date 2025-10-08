---
sidebar_label: "2020年8月実施 専門科目 確率統計"
tags:
  - Kyoto-University
  - Probability-And-Statistics
---
# 京都大学 情報学研究科 システム科学専攻 2020年8月実施 専門科目 確率統計

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/explore/6875d3410000000012017c0d?xsec_token=ABH-3QKy295U0QA4TRmU6eScR1Xpag2dMEXtGdrbeYRJ4=)

## **Description**
### 問題1
確率変数 $X_{ij}, \ i = 1, \ldots, m, \ j = 1, \ldots, n$ は独立に正規分布に従い、$X_{ij} \sim N(\mu_i, 1)$ とする。
ただし、$N(\mu, \sigma^2)$ は平均 $\mu$、分散 $\sigma^2$ の正規分布を表す。
ここで $n, m$ は正の整数、$\mu_i$ は未知パラメータである。
また、$X \sim N(0, 1)$ の分布関数 $P(X \le x) = \Phi(x)$ で表す。
以下の設問に答えなさい。その導出過程も示すこと。

(1) $X_{i1}, \ldots, X_{in}$ をすべて用いて $\mu_i$ の最尤推定量 $\hat{\mu}_i$ を求めよ。

(2) $\hat{\mu}_i$ が $\mu_i$ の不偏推定量であることを示せ。

(3) 各 $i = 1, \ldots, m$ において、帰無仮説 $H_0: \mu_i = 0$、
対立仮説 $H_1: \mu_i > 0$ の仮説検定を有意水準 $\alpha\ (0 < \alpha < 1)$ で行いたい。
そのために定数 $d_i > 0$ を定めておき、$\hat{\mu}_i > d_i$ のとき帰無仮説を棄却する。定数 $d_i$ を求めよ。

(4) 各 $i = 1, \ldots, m$ において、ある定数 $c_i > 0$ を用いて
$\mu_i$ の信頼区間

$$
S_i = [\hat{\mu}_i - c_i, \hat{\mu}_i + c_i]
$$

を定める。これが $P(\mu_i \in S_i) = 1 - \alpha \ (0 < \alpha < 1)$ を満たすようにしたい。定数 $c_i$ を求めよ。

(5) 上記の $S_i$ が

$$
P(\mu_i \in S_i, \ i = 1, \ldots, m) = 1 - \alpha
$$

を満たすようにしたい。
$c_i = c,\ i = 1, \ldots, m$ として、定数 $c > 0$ を求めよ。

### 問題2
$X_1, X_2, \ldots, X_n$ を互いに独立で、同一の確率密度関数に従う実数値確率変数とし、対応する確率密度関数・確率分布関数をそれぞれ $f_X(x), F_X(x)$ とする。
また、

$$
Y = \max { X_1, X_2, \ldots, X_n }
$$

とする。以下の設問に答えなさい。

(1) $Y$ の確率分布関数 $F_Y(y)$ および確率密度関数 $f_Y(y)$ を $f_X, F_X, n$ を用いて表せ。


以下の設問では、$X_i$ は区間 $[0, \theta], \theta > 0$ 上の一様分布に従うものとする。

(2) $\hat{\theta} = aY$ が $\theta$ の不偏推定量となるように、$a$ を $n$ を用いて表せ。

(3) $\theta$ の最尤推定量 $\hat{\theta}^{ML}$ を求めよ。

(4) $\hat{\theta}$ および $\hat{\theta}^{ML}$ の平均二乗誤差を求め、
どちらの推定量のほうが小さい平均二乗誤差を与えるか答えよ。
ただし、$\hat{\theta}$ は (2) で求めた不偏推定量である。

(5) $\theta$ の信頼区間として

$$
S = [Y, bY], \quad b > 1
$$

の形を考える。$0 < \alpha < 1$ に対して、$P(\theta \in S) = 1 - \alpha$ となるように $b$ を設定せよ。


## **Kai**
### 問題1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202008_prob_stat_p1_s1.jpg" width="700" alt=""/>
</figure>

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202008_prob_stat_p1_s2.jpg" width="700" alt=""/>
</figure>

### 問題2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202008_prob_stat_p2_s.jpg" width="700" alt=""/>
</figure>
