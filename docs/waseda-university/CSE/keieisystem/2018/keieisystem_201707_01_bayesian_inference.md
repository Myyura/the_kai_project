---
sidebar_label: "2017年7月実施 情報数理応用 問題1"
tags:
  - Waseda-University
  - Probability-Statistics.Statistical-Inference.Bayesian-Inference
  - Probability-Statistics.Statistical-Inference.Beta-Bernoulli-Model
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2017年7月実施 情報数理応用 問題1

## **Author**
祭音Myyura

## **Description**

独立同分布な2値確率変数 $X_i\in\{0,1\}$ が

$$
P(X_i=1\mid\theta)=\theta,\qquad
P(X_i=0\mid\theta)=1-\theta
$$

に従う。$\theta$ の事前密度は

$$
p(\theta)=\frac{\Gamma(5)}{\Gamma(3)\Gamma(2)}
\theta^2(1-\theta),\qquad 0\leq\theta\leq1
$$

である。

1. 事前分布の平均値と最頻値を求めよ。
2. データ $x^{10}=1101111001$ を観測した後の事後密度を求めよ。
3. 事後密度の概形を、極値を明示して描け。
4. 二乗誤差損失のもとで $\theta$ のベイズ推定量を求めよ。
5. 0--1損失のもとで $X_{11}$ のベイズ最適予測を求めよ。

## **Kai**

### [小問 1]

事前分布は $\operatorname{Beta}(3,2)$ である。したがって

$$
E[\theta]=\frac{3}{3+2}=\boxed{\frac35},
$$

また $3,2>1$ なので最頻値は

$$
\frac{3-1}{3+2-2}=\boxed{\frac23}.
$$

### [小問 2]

観測列には1が7個、0が3個ある。ベータ分布とベルヌーイ分布の共役性より

$$
\theta\mid x^{10}\sim\operatorname{Beta}(3+7,2+3)
=\operatorname{Beta}(10,5).
$$

よって事後密度は

$$
\boxed{
p(\theta\mid x^{10})
=\frac{\Gamma(15)}{\Gamma(10)\Gamma(5)}
\theta^9(1-\theta)^4
=10010\theta^9(1-\theta)^4
}
$$

である。

### [小問 3]

対数微分は

$$
\frac{d}{d\theta}\log p(\theta\mid x^{10})
=\frac9\theta-\frac4{1-\theta}
$$

であり、内部の停留点は

$$
\theta=\frac9{13}.
$$

端点では $p(0\mid x^{10})=p(1\mid x^{10})=0$、区間内部では正で、$9/13$ まで増加し、その後減少する。したがって唯一の極大点は

$$
\boxed{\theta_{\mathrm{mode}}=\frac9{13}}
$$

である。

### [小問 4]

二乗誤差損失に対するベイズ推定量は事後平均なので

$$
\boxed{\hat\theta_B=E[\theta\mid x^{10}]
=\frac{10}{10+5}=\frac23}.
$$

### [小問 5]

事後予測確率は

$$
P(X_{11}=1\mid x^{10})
=E[\theta\mid x^{10}]=\frac23,\qquad
P(X_{11}=0\mid x^{10})=\frac13.
$$

0--1損失では事後予測確率の大きい値を選ぶので

$$
\boxed{\hat X_{11}=1}.
$$
