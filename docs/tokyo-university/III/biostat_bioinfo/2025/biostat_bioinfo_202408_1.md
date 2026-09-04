---
sidebar_label: "2024年8月実施 専門科目 第1問"
tags:
  - Tokyo-University
  - Probability-Statistics.Descriptive-Statistics-and-Sampling.Mean-Median-and-Quartiles
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Random-Variable-Transformation
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Correlation-Coefficient
  - Probability-Statistics.Probability-Basics.Combinatorial-Probability
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
---

# 東京大学 学際情報学府 学際情報学専攻 生物統計情報学コース 2024年8月実施 専門科目 第1問

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語題意

次の15問について正しい選択肢を一つ選ぶ。

1. 次の5名の身長データについて、平均・中央値・歪みを判定する。

   | | Aさん | Bさん | Cさん | Dさん | Eさん |
   |---|---:|---:|---:|---:|---:|
   | 身長 (cm) | 171 | 172 | 173 | 175 | 180 |

2. 標準偏差15点の試験で偏差値の差が4のとき、得点差を求める。
3. 標準偏差と標準誤差に関する4記述から正しい組合せを選ぶ。
4. 次の確率関数を持つ $X$ の分散 $V(X)$ を求める。

   | | $x=0$ | $x=0.5$ |
   |---|---:|---:|
   | $\Pr(X=x)$ | $1-p$ | $p$ |

5. $f_X(x)=\frac58(1-x^4)$（$-1\le x\le1$）、$Y=2X$ の密度を求める。
6. $\log(1+x^2)$ を微分する。
7. 次の同時分布から $\Pr(Y=3\mid X\ge2)$ を求める。

   $$
   \begin{array}{c|ccc}
   &Y=1&Y=2&Y=3\\ \hline
   X=1&1/10&3/20&3/20\\
   X=2&1/10&0&1/5\\
   X=3&0&1/5&1/10
   \end{array}
   $$

8. 独立な $X,Y$ が $E[X]=\mu$, $V(X)=\sigma^2$, $E[Y]=2\mu$, $V(Y)=3\sigma^2$ を満たすとき、$2X-3Y$ の期待値と分散を求める。
9. 異なる10本のくじを5本ずつ2群に分ける。3本が当たりのとき、群間の当たり本数の差が1本以上となる分け方を数える。
10. 次の同時分布から $\operatorname{Cov}(X,Y)$ を求める。

    $$
    \begin{array}{c|ccc|c}
    &Y=1&Y=2&Y=3&\text{合計}\\ \hline
    X=1&1/4&1/12&1/12&5/12\\
    X=2&0&1/12&1/6&1/4\\
    X=3&1/12&1/6&1/12&1/3\\ \hline
    \text{合計}&1/3&1/3&1/3&1
    \end{array}
    $$

11. $\operatorname{Corr}(X,Y)=\rho$ のとき $\operatorname{Corr}(2X,2Y)$ を求める。
12. 次の前向き観察研究の表から、曝露なしに対する曝露ありの疾患発生率比を求める。

    | | 曝露あり | 曝露なし | 合計 |
    |---|---:|---:|---:|
    | 疾患あり | 45人 | 15人 | 60人 |
    | 疾患なし | 2,755人 | 5,585人 | 8,340人 |
    | 合計 | 2,800人 | 5,600人 | 8,400人 |
    | 観測人年 | 28,014人年 | 13,970人年 | 41,984人年 |

13. 独立な $X_1,\ldots,X_{10}\sim N(5,100)$ の標本平均の分布を求める。
14. 2群比較の $t$ 検定で平均差5、両側 $p=0.05$ のとき、平均差の両側95%信頼区間を選ぶ。
15. 仮説検定に関する記述から最も適切なものを選ぶ。

### 题目描述

本题含15道单选题，依次考查：均值、中位数与偏态；偏差值与原始分数的换算；标准差和标准误；二点分布的方差；随机变量线性变换后的密度；求导；离散联合分布的条件概率；独立随机变量线性组合的期望与方差；组合计数；协方差；相关系数在线性缩放下的不变性；队列研究的发病率比；正态样本均值分布；双侧检验与95%置信区间；第一类错误概率与显著性水平等检验概念。

## **Kai**

### (1-1)

$$
\bar x=\frac{871}{5}=174.2>173=\operatorname{median}(x).
$$

右に裾を引くので、

$$
\boxed{\text{ウ}}.
$$

### (1-2)

偏差値 $T=50+10(x-\bar x)/15$ より、

$$
\Delta x=15\frac{\Delta T}{10}=15\frac4{10}=6.
$$

$$
\boxed{\text{ウ}.\ 6}
$$

### (1-3)

標準偏差は個人間のばらつき、標準誤差は統計量の標本間のばらつきを表す。正しいのは (a), (c) なので、

$$
\boxed{\text{イ}}.
$$

### (1-4)

$$
V(X)=\frac14p-\left(\frac12p\right)^2
=\frac14p(1-p).
$$

$$
\boxed{\text{エ}}
$$

### (1-5)

$x=y/2$、$|dx/dy|=1/2$ より、

$$
f_Y(y)=\frac{5}{16}\left[1-\left(\frac y2\right)^4\right],
\qquad -2\le y\le2.
$$

$$
\boxed{\text{オ}}
$$

### (1-6)

$$
\frac{d}{dx}\log(1+x^2)=\frac{2x}{1+x^2}.
$$

$$
\boxed{\text{オ}}
$$

### (1-7)

$$
\Pr(Y=3\mid X\ge2)
=\frac{1/5+1/10}{(1/10+1/5)+(1/5+1/10)}
=\frac12.
$$

$$
\boxed{\text{エ}}
$$

### (1-8)

$$
E[2X-3Y]=-4\mu,\qquad
V(2X-3Y)=4\sigma^2+9\cdot3\sigma^2=31\sigma^2.
$$

$$
\boxed{\text{エ}}
$$

### (1-9)

当たり3本は2群に同数ずつ入らない。群Aの5本を選べば分割が定まるので、

$$
\binom{10}{5}=252.
$$

$$
\boxed{\text{エ}}
$$

### (1-10)

表から

$$
E[X]=\frac{23}{12},\qquad E[Y]=2,
\qquad E[XY]=4.
$$

したがって、

$$
\operatorname{Cov}(X,Y)=4-\frac{23}{12}\cdot2
=\frac16.
$$

$$
\boxed{\text{オ}}
$$

### (1-11)

正の定数倍では相関係数は変わらないから、

$$
\operatorname{Corr}(2X,2Y)=\rho.
$$

$$
\boxed{\text{エ}}
$$

### (1-12)

$$
\frac{45/28014}{15/13970}=1.496\ldots\approx1.5.
$$

$$
\boxed{\text{エ}.\ 1.5}
$$

### (1-13)

$$
\bar X\sim N\left(5,\frac{100}{10}\right)=N(5,10).
$$

$$
\boxed{\text{オ}}
$$

### (1-14)

両側 $p=0.05$ なので0は95%信頼区間の端点となる。区間は平均差5を中心に対称だから、

$$
\boxed{[0,10]}.
$$

したがって $\boxed{\text{ア}}$。

### (1-15)

第一種過誤確率は、離散検定などでは名目有意水準と一致せず、それ以下となることがある。

$$
\boxed{\text{エ}}
$$

## **Reference**

- [東京大学大学院 情報学環・学際情報学府 修士課程 過去の入学試験問題](https://www.iii.u-tokyo.ac.jp/admissions/master-pastexams)
- [2025年度 専門科目（生物統計情報学コース）公式問題 PDF](https://www.iii.u-tokyo.ac.jp/manage/wp-content/uploads/2025/03/2025toukei.pdf)
