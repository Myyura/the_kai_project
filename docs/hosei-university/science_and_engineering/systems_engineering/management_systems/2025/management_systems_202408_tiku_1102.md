---
sidebar_label: "2024年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2024年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

ある確率分布のパラメータ $\theta$ に対する二種類の不偏推定量 $D_1, D_2$ は互いに独立で、それぞれの分散が

$$
Var[D_i] = \sigma_i^2 > 0 \quad (i=1,2)
$$

で与えられている。この不偏推定量により構成される推定量 $\tilde{D}$ ,

$$
\tilde{D} = \alpha D_1 + (1 - \alpha) D_2
$$

を考える。このとき、以下の問いに答えよ。

(1) $\tilde{D}$ が不偏推定量となることを示せ。

(2) $\tilde{D}$ の分散を最小とする $\alpha$ を必要な文字を用いて表せ。

(3) (2)で求めた $\alpha$ が $\alpha > 1/2$ を満たすとき、 $\sigma_1^2$ と $\sigma_2^2$ の関係を示せ。

### 题目描述

对某概率分布的参数 $\theta$，有两种相互独立的无偏估计量 $D_1,D_2$，其方差分别为

$$
\operatorname{Var}[D_i]=\sigma_i^2>0\qquad(i=1,2).
$$

考虑由它们构成的估计量

$$
\widetilde D=\alpha D_1+(1-\alpha)D_2.
$$

回答下列问题。

（1）证明 $\widetilde D$ 是 $\theta$ 的无偏估计量。

（2）用必要的已知量表示使 $\operatorname{Var}[\widetilde D]$ 最小的 $\alpha$。

（3）若（2）求得的 $\alpha$ 满足 $\alpha>\frac12$，说明 $\sigma_1^2$ 与 $\sigma_2^2$ 的大小关系。

## **Kai**

(1) $D_1$ と $D_2$ は $\theta$ の不偏推定量なので， $E[D_1] = \theta$ かつ $E[D_2] = \theta$ である。

$$
E[\tilde{D}] = E[\alpha D_1 + (1 - \alpha)D_2] = \alpha E[D_1] + (1 - \alpha)E[D_2] = \alpha \theta + (1 - \alpha)\theta = \theta
$$

したがって、 $\tilde{D}$ は $\theta$ の不偏推定量である。

(2) $\tilde{D}$ の分散を計算する。

$$
Var[\tilde{D}] = Var[\alpha D_1 + (1 - \alpha)D_2]
$$

$D_1$ と $D_2$ は独立なので、

$$
Var[\tilde{D}] = \alpha^2 Var[D_1] + (1 - \alpha)^2 Var[D_2] = \alpha^2 \sigma_1^2 + (1 - \alpha)^2 \sigma_2^2
$$

$Var[\tilde{D}]$ を最小にする $\alpha$ を求めるために、 $\alpha$ について微分して 0 とおく。

$$
\frac{d}{d\alpha} Var[\tilde{D}] = 2\alpha \sigma_1^2 - 2(1 - \alpha)\sigma_2^2 = 0
$$

$$
\alpha \sigma_1^2 - (1 - \alpha)\sigma_2^2 = 0
$$

$$
\alpha(\sigma_1^2 + \sigma_2^2) = \sigma_2^2
$$

$$
\alpha = \frac{\sigma_2^2}{\sigma_1^2 + \sigma_2^2}
$$

(3) $\alpha > \frac{1}{2}$ のとき、

$$
\frac{\sigma_2^2}{\sigma_1^2 + \sigma_2^2} > \frac{1}{2}
$$

$$
2\sigma_2^2 > \sigma_1^2 + \sigma_2^2
$$

$$
\sigma_2^2 > \sigma_1^2
$$

したがって、 $\sigma_2^2 > \sigma_1^2$ である。
