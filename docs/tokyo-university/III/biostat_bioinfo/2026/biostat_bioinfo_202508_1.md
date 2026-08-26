---
sidebar_label: "2025年8月実施 専門科目 第1問"
tags:
  - Tokyo-University
  - Probability-Statistics.Descriptive-Statistics-and-Sampling.Mean-Median-and-Quartiles
  - Probability-Statistics.Descriptive-Statistics-and-Sampling.Standard-Error-of-Sample-Mean
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Random-Variable-Transformation
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Combinatorial-Probability
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Standardization-and-Tail-Probability
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Weibull-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Odds-Ratio-and-Confidence-Interval
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Statistical-Power
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Sample-Size-for-Target-Power
---

# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2025年8月実施 専門科目 第1問

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語題意

次の15問について正しい選択肢を一つ選ぶ。

1. 得点 $9,1,10,5,2,7,3,8,4,8$ の平均・中央値・最頻値を求める。
2. 最低点・最高点・平均値・標準偏差・受験者数から計算できる指標を選ぶ。
3. 独立な標本 $x_1,\ldots,x_n$ から平均の標準誤差を求める式を選ぶ。
4. $\Pr(X=1)=p$, $\Pr(X=2)=q$, $\Pr(X=3)=1-p-q$ のとき $V(X)$ を求める。
5. $\exp(1-x^3)$ を微分する。
6. $f_X(x)=\frac59(x^3-1)$（$-3\le x\le3$）、$Y=X/3$ として、変数変換後の式を選ぶ。
7. 赤玉は数字1が2個、2が3個、3が1個、白玉は数字1が1個、2が0個、3が3個ある。各確率記述の正誤を判定する。
8. 独立な $X,Y$ が $E[X]=\mu$, $V(X)=\sigma^2$, $E[Y]=3\mu$, $V(Y)=2\sigma^2$ を満たすとき、$X-2Y$ の期待値と分散を求める。
9. 1から10の番号を持つ10個の球を5個ずつ2群に分ける。群Aの最大番号が8以上となる分け方を数える。
10. $\sigma_X=6$, $\sigma_Y=7$, $\rho=0.5$ から共分散を求める。
11. $T\sim N(1.96,1)$ と近似できるとき、$T$ から作る両側95%信頼区間の下限が0を上回る確率を求める。
12. 前向き研究の $2\times2$ 表（疾患あり：曝露あり45、なし15；疾患なし：曝露あり3850、なし2310）からオッズ比を求める。
13. 2群の割合差が0より大きいかを片側有意水準 $\alpha$ で検定するときの検出力関数を選ぶ。
14. 密度 $f(t)=\lambda\gamma(\lambda t)^{\gamma-1}e^{-(\lambda t)^\gamma}$ のワイブル分布について $\Pr(T>t)$ を求める。
15. 2群ランダム化試験の必要標本数計算で、ある設定値を半分にすると必要人数が4倍になった。その設定値を選ぶ。

### 题目描述

本题含15道单选题，依次考查：均值、中位数和众数；由汇总统计量可计算的变异系数；样本均值的标准误；三点分布的方差；指数复合函数求导；随机变量缩放后的密度；离散条件概率；独立随机变量线性组合的矩；组合计数；协方差；正态分布下置信区间下限为正的概率；队列研究的比值比；两样本比例差检验的功效；Weibull 生存函数；效应量与样本量的平方反比关系。

## **Kai**

### (1-1)

昇順に並べると $1,2,3,4,5,7,8,8,9,10$ であり、

$$
\bar x=5.7,\qquad \operatorname{median}(x)=6,\qquad
\operatorname{mode}(x)=8.
$$

$$
\boxed{\text{ウ}}
$$

### (1-2)

平均値と標準偏差から

$$
\mathrm{CV}=\frac{\text{標準偏差}}{\text{平均値}}
$$

を計算できる。

$$
\boxed{\text{ウ}.\ \text{変動係数}}
$$

### (1-3)

標本標準偏差を

$$
s=\sqrt{\frac1{n-1}\sum_{i=1}^n(x_i-\bar x)^2}
$$

とすると、平均の標準誤差は $s/\sqrt n$ である。

$$
\boxed{\text{エ}}
$$

### (1-4)

$$
E[X]=3-2p-q,\qquad E[X^2]=9-8p-5q.
$$

したがって、

$$
V(X)=-4p^2-q^2-4pq+4p+q.
$$

$$
\boxed{\text{イ}}
$$

### (1-5)

$$
\frac{d}{dx}e^{1-x^3}=-3x^2e^{1-x^3}.
$$

$$
\boxed{\text{オ}}
$$

### (1-6)

$x=3y$、$|dx/dy|=3$ より、

$$
f_Y(y)=3f_X(3y)=45y^3-\frac53,\qquad -1\le y\le1,
$$

となり、選択肢は $\boxed{\text{オ}}$ である。

### (1-7)

数字3の玉は4個、そのうち白玉は3個なので、

$$
\Pr(\text{白}\mid\text{数字3})=\frac34.
$$

$$
\boxed{\text{ウ}}
$$

### (1-8)

$$
E[X-2Y]=\mu-6\mu=-5\mu,\qquad
V(X-2Y)=\sigma^2+4\cdot2\sigma^2=9\sigma^2.
$$

$$
\boxed{\text{イ}}
$$

### (1-9)

全分け方から群Aが $\{1,\ldots,7\}$ のみで構成される場合を除く。

$$
\binom{10}{5}-\binom75=252-21=231.
$$

$$
\boxed{\text{ウ}}
$$

### (1-10)

$$
\operatorname{Cov}(X,Y)=\rho\sigma_X\sigma_Y
=0.5\cdot6\cdot7=21.
$$

$$
\boxed{\text{イ}}
$$

### (1-11)

信頼区間の下限は $T-1.96$ である。よって、

$$
\Pr(T-1.96>0)=\Pr(T>E[T])=\frac12.
$$

$$
\boxed{\text{ウ}.\ 50\%}
$$

### (1-12)

$$
\mathrm{OR}=\frac{45/3850}{15/2310}
=\frac95=1.8.
$$

$$
\boxed{\text{エ}.\ 1.8}
$$

### (1-13)

$$
\delta=\frac{p_1-p_2}
{\sqrt{p_1(1-p_1)/n_1+p_2(1-p_2)/n_2}}
$$

とおけば、

$$
\operatorname{power}(p_1,p_2)
=1-\Phi(z_\alpha-\delta).
$$

$$
\boxed{\text{エ}}
$$

### (1-14)

$$
\Pr(T>t)=\exp\left[-(\lambda t)^\gamma\right].
$$

$$
\boxed{\text{エ}}
$$

### (1-15)

必要標本数は期待する群間差 $\Delta$ に対して $n\propto\Delta^{-2}$ である。したがって $\Delta$ を半分にすると $n$ は4倍になる。

$$
\boxed{\text{ウ}.\ \text{期待する群間差}}
$$

## **Reference**

- [東京大学大学院 情報学環・学際情報学府 修士課程 過去の入学試験問題](https://www.iii.u-tokyo.ac.jp/admissions/master-pastexams)
- [2026年度 専門科目（生物統計情報学コース）公式問題 PDF](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2026/05/2026smtoukei.pdf)
