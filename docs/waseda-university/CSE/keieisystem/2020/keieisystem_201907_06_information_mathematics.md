---
sidebar_label: "2019年7月実施 情報数理応用 問題6"
tags:
  - Waseda-University
  - Probability-Statistics.Statistical-Inference.Bayesian-Inference
  - Probability-Statistics.Statistical-Inference.Beta-Bernoulli-Model
  - Computer-Science.Information-Theory.Typical-Sequence
  - Data-Science-Artificial-Intelligence.Machine-Learning.Random-Forest
  - Data-Science-Artificial-Intelligence.Machine-Learning.Curse-of-Dimensionality
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2019年7月実施 情報数理応用 問題6

## **Author**
祭音Myyura

## **Description**

1. ベルヌーイ情報源のパラメータ $\theta$ の事前分布が $\operatorname{Beta}(\alpha,\beta)$ である。長さ $n$ のデータで1が $y$ 回観測されたとき、事後密度、平均、最頻値を求めよ。
2. 定常無記憶情報源 $X$ の十分長い標準系列について、各系列の生起確率と本数をエントロピー $H(X)$ で示し、標準系列を説明せよ。
3. 独立な $X_i\sim N(\mu,\sigma^2)$ に対し、$\sum_i\alpha_i=1$ を満たす推定量 $\bar X_\alpha=\sum_i\alpha_iX_i$ の分散を最小化する $\alpha_i$ を求めよ。
4. ランダムフォレストの概要と特徴を説明せよ。
5. 次元の呪いにより、特徴空間の次元が増えると生じる現象を説明せよ。

## **Kai**

### [小問 1]

尤度は $\theta^y(1-\theta)^{n-y}$ に比例する。ベータ分布との共役性から

$$
\theta\mid x^n\sim\operatorname{Beta}(\alpha+y,\beta+n-y).
$$

したがって事後密度は

$$
\boxed{
p(\theta\mid x^n)=
\frac{\Gamma(\alpha+\beta+n)}
{\Gamma(\alpha+y)\Gamma(\beta+n-y)}
\theta^{\alpha+y-1}(1-\theta)^{\beta+n-y-1}
}.
$$

平均は

$$
\boxed{E[\theta\mid x^n]=\frac{\alpha+y}{\alpha+\beta+n}}.
$$

$\alpha+y>1$ かつ $\beta+n-y>1$ なら最頻値は

$$
\boxed{
\theta_{\mathrm{mode}}
=\frac{\alpha+y-1}{\alpha+\beta+n-2}
}.
$$

これらの条件を満たさない場合、最頻値は対応する端点となる。

### [小問 2]

対数の底を2とする。十分大きい $n$ に対し、標準系列では各記号 $a_i$ の出現頻度が $p_i$ に近く、各系列の確率は

$$
\boxed{P(x^n)\approx2^{-nH(X)}}
$$

でほぼ等しい。標準系列全体の確率は1に近いため、その本数は

$$
\boxed{|T_\varepsilon^{(n)}|\approx2^{nH(X)}}
$$

となる。すなわち、全 $M^n$ 系列のうち比較的少数の標準系列が確率のほとんどを担い、1記号当たり約 $H(X)$ bit まで圧縮できる。

### [小問 3]

独立性より

$$
\operatorname{Var}(\bar X_\alpha)=\sigma^2\sum_{i=1}^n\alpha_i^2.
$$

Cauchy--Schwarz の不等式から

$$
1=\left(\sum_i\alpha_i\right)^2
\leq n\sum_i\alpha_i^2,
$$

したがって $\sum_i\alpha_i^2\geq1/n$ である。等号は全係数が等しいときに限るため

$$
\boxed{\alpha_1=\cdots=\alpha_n=\frac1n}.
$$

このとき推定量は通常の標本平均で、最小分散は $\sigma^2/n$ である。

### [小問 4]

ランダムフォレストは、訓練データのブートストラップ標本ごとに決定木を学習し、各分岐でも候補特徴量をランダムに制限して多数の木を作る。分類では多数決、回帰では平均により予測する。

木同士の相関を下げて平均化するため、単一の決定木より分散と過学習を抑えやすい。非線形関係・特徴間相互作用を扱え、尺度変換にも比較的頑健で、特徴量重要度も得られる。一方、モデルが大きくなり、単一木より解釈しにくく、非常に疎で高次元な問題では計算負荷が大きくなる。

### [小問 5]

次元 $d$ が増えると、一定密度で空間を覆うために必要な標本数が指数的に増える。有限標本は空間内で疎になり、局所密度推定や近傍探索が不安定になる。また最近点と遠方点の距離が相対的に似通い、距離の識別力が低下する。不要な特徴が増えるほど推定分散と過学習の危険も増すため、次元削減・特徴選択・正則化が重要となる。
