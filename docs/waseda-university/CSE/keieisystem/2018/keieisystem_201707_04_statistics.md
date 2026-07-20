---
sidebar_label: "2017年7月実施 統計科学 問題4"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Gamma-Distribution
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Analysis-of-Variance
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Split-Plot-Design
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2017年7月実施 統計科学 問題4

## **Author**
祭音Myyura

## **Description**

1. 確率変数 $X$ は形状母数 $\alpha$、尺度母数 $\sigma$ のガンマ分布

   $$
   f(x)=\frac{1}{\Gamma(\alpha)\sigma^\alpha}
   x^{\alpha-1}e^{-x/\sigma},\qquad x>0
   $$

   に従う。$\alpha=4$ とする。
   1. $E[X]$ と $\operatorname{Var}(X)$ を求めよ。
   2. $\hat\sigma(k)=kX$ の平均二乗誤差を最小にする $k$ を求めよ。
2. 因子 A、B が各2水準、各セルの反復数が2の二元配置実験について分散分析表を作成せよ。観測値は次のとおりである。

   |  | B1 | B2 |
   | --- | --- | --- |
   | A1 | 1, 2 | 5, 4 |
   | A2 | 0, 1 | 3, 4 |

3. 分割区法を説明せよ。

## **Kai**

### [小問 1-1]

尺度母数表示のガンマ分布では

$$
E[X]=\alpha\sigma,\qquad
\operatorname{Var}(X)=\alpha\sigma^2.
$$

したがって

$$
\boxed{E[X]=4\sigma,\qquad \operatorname{Var}(X)=4\sigma^2}.
$$

### [小問 1-2]

分散とバイアスに分けると

$$
\begin{aligned}
\operatorname{MSE}[kX]
&=k^2\operatorname{Var}(X)+(kE[X]-\sigma)^2\\
&=\sigma^2\{4k^2+(4k-1)^2\}\\
&=\sigma^2(20k^2-8k+1).
\end{aligned}
$$

$k$ で微分すると $40k-8=0$ なので

$$
\boxed{k=\frac15}.
$$

### [小問 2]

総平均は $\bar y_{...}=2.5$、A の水準平均は $(3,2)$、B の水準平均は $(1,4)$、セル平均は

$$
\begin{pmatrix}1.5&4.5\\0.5&3.5\end{pmatrix}
$$

である。各平方和は

$$
SS_A=2,\qquad SS_B=18,\qquad
SS_{AB}=0,\qquad SS_E=2,\qquad SS_T=22.
$$

よって分散分析表は次のとおりである。

| 変動因 | 自由度 | 平方和 | 平均平方 | $F$ 値 |
| --- | ---: | ---: | ---: | ---: |
| A | 1 | 2 | 2 | 4 |
| B | 1 | 18 | 18 | 36 |
| A $\times$ B | 1 | 0 | 0 | 0 |
| 誤差 | 4 | 2 | $1/2$ |  |
| 合計 | 7 | 22 |  |  |

### [小問 3]

分割区法は、実験区を大きな主区と、その内部の副区に分けて因子を割り付ける実験計画である。変更しにくい因子を主区因子として主区へ無作為化し、変更しやすい因子を副区因子として各主区内で改めて無作為化する。

無作為化が2段階なので誤差も主区誤差と副区誤差の2層に分かれる。したがって主区因子は主区誤差、副区因子と交互作用は副区誤差を用いて検定しなければならず、通常、主区因子の推定精度は副区因子より低い。
