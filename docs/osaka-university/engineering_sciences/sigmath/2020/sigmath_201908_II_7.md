---
sidebar_label: "2019年8月実施 数理科学 II [7]"
tags:
  - Osaka-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 II \[7\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n,m$ は2以上の整数、$\mu_X,\mu_Y$ は実数とし、$X_1,\ldots,X_n$ は $N(\mu_X,\sigma^2)$、$Y_1,\ldots,Y_m$ は $N(\mu_Y,\sigma^2)$ に従い、全変数は独立とする。$\sigma^2>0$ とし、

$$
\overline X=\frac1n\sum X_i,\quad\overline Y=\frac1m\sum Y_j,\quad
S^2=\frac1n\sum(X_i-\overline X)^2,\quad T^2=\frac1m\sum(Y_j-\overline Y)^2
$$

とおく。帰無仮説 $\mu_X=\mu_Y$ の下で次を示せ。

(1) $(\overline X-\overline Y)/\sqrt{\sigma^2/n+\sigma^2/m}$ は標準正規分布に従う。

(2) $\operatorname{Cov}(X_i-\overline X,\overline X)$ を求めよ。

(3) $\overline X-\overline Y$ と $nS^2+mT^2$ は独立である。

(4) $\displaystyle\sqrt{\frac{(n+m-2)nm}{(n+m)(nS^2+mT^2)}}(\overline X-\overline Y)$ は自由度 $n+m-2$ の $t$ 分布に従う。

## **Kai**

### (1)
独立な正規変数の線形結合より

$$
\overline X-\overline Y\sim N\left(0,\sigma^2\left(\frac1n+\frac1m\right)\right).
$$

標準化すればよい。

### (2)

$$
\boxed{\operatorname{Cov}(X_i-\overline X,\overline X)=\frac{\sigma^2}{n}-\frac{\sigma^2}{n}=0}.
$$

### (3)
$\overline X$ と残差ベクトル $(X_i-\overline X)_i$ は同時正規で無相関なので独立。同様に $\overline Y$ と $(Y_j-\overline Y)_j$ も独立で、さらに両標本が独立だから、標本平均の差と残差平方和は独立である。

### (4)
標準正規ベクトルを平均方向とその直交補空間へ直交変換すると

$$
\frac{nS^2}{\sigma^2}\sim\chi^2_{n-1},\qquad\frac{mT^2}{\sigma^2}\sim\chi^2_{m-1}.
$$

両者は独立なので $U=(nS^2+mT^2)/\sigma^2\sim\chi^2_{n+m-2}$。 (1) の標準正規変数を $Z$ とすれば (3) により $Z\perp U$。指定の統計量は $Z/\sqrt{U/(n+m-2)}$ であるから結論を得る。
