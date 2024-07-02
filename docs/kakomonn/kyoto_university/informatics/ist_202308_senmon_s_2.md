---
comments: false
title: 京都大学 情報学研究科 知能情報学専攻 2023年8月実施 専門科目 S-2
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2023年8月実施 専門科目 S-2

## **Author**
[Isidore](https://github.com/heacsing)

## **Description**
### 設問1
$X_1, X_2, \cdots, X_n$ を平均 $\mu$ の母集団からの大きさ $n$ の無作為標本とする。
$X_i$ の加重和 $\sum_{i=1}^n w_i X_i$ が $\mu$ の不偏推定量であるための必要十分条件を示せ。

### 設問2
$X_1, X_2, \cdots, X_n$ を平均 $\mu$, 分散 $\sigma^2$ の正規母集団からの大きさ $n$ の無作為標本とする。

(1) $\mu$ と $\sigma^2$ の対数尤度関数 $L(\mu, \sigma^2)$ を導出せよ。

(2) $L(\mu, \sigma^2)$ を用いて、$\mu$ と $\sigma^2$ の最尤推定量を求めよ。

### 設問3
確率変数 $X$ と $Y$ の平均がいずれも $1$、分散がいずれも $2$ であるとする。
$S = X + 2Y$, $T = X - 2Y$ のとき、 $S$ と $T$ の共分散を求めよ。

### 設問4
薬 A と薬 B の効果に差がないという帰無仮説のもとで、以下の分割表についてフィッシャーの正確検定を行うことを考える。

|       | 効果あり | 効果なし | 計  |
|-------|----------|----------|----|
| 薬 A  |    3     |    1     | 4  |
| 薬 B  |    2     |    3     | 5  |
| 計    |    5     |    4     | 9  |

(1) 帰無仮説のもとでこの表が得られる確率は、計 9 人から無作為に 5 人を「効果あり」として選んだときに、そのうち薬 A 群が 3 人、薬 B 群が 2 人となる確率として計算できる。この確率を求めよ。

(2) フィッシャーの正確検定の $p$ 値（両側検定）は、周辺度数を固定したときに、観察された分割表と同じか低い確率をもつ表の合計確率として定義される。上の表が観察されたときの $p$ 値を求めよ。


## **Kai**
### 設問1

$$
E[\sum^{n}_{i=1}w_iX_i] = \sum^n_{i=1}w_iE[X_i] = \sum^n_{i=1}w_i\mu \Rightarrow \sum^n_{i=1}w_i = 1
$$

vice versa

### 設問2
#### (1)

$$
L(\mu, \sigma^2) = n \log \frac{1}{\sqrt{2\pi}\sigma} + \frac{1}{2\sigma^2}\sum^n_{i=1}(X_i - \mu)^2
$$

#### (2)

$$
\mu = \frac{1}{n}\sum^n_{i=1}X_i = \bar{X}, \sigma^2 = \frac{1}{n}\sum^n_{i=1}(X_i - \bar{X})^2
$$

### 設問3

$$
Cov(S,T) = -6
$$

### 設問4
#### (1)
It's equivalent to assume that picking 2 from Group Drug A and 3 from Group Drug B, given 5 people is selected as Effective. So the answer is

$$
C_5^3(\frac{5}{9})^2(\frac{4}{9})^3
$$

#### (2)

$$
p = \frac{C_4^3C_5^2}{C_9^5} = \frac{4*5}{126}\approx 0.1587
$$