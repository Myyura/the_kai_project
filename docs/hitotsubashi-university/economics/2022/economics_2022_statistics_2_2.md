---
sidebar_label: "2022年度 統計学・計量経済学 第2題 2"
tags:
  - Hitotsubashi-University
  - Economics.Econometrics
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Multiple-Regression
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Estimator-Consistency
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Central-Limit-Theorem
---
# 一橋大学 経済学研究科 2022年度 統計学・計量経済学 第2題 2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

以下の (a) から (e) のすべてに答えよ。導出過程は省略しないこと。

$\{(Y_i,X_{1i},X_{2i})\}_{i=1}^n$ を独立同一分布に従う無作為標本とし、

$$
Y_i=\beta_1X_{1i}+\beta_2X_{2i}+u_i,
$$

$$
E[u_i\mid X_{1i},X_{2i}]=0,\qquad
E[u_i^2\mid X_{1i},X_{2i}]=\sigma^2
$$

とする。ただし $\beta_2\ne0$ とする。(b)から(e)では $n\to\infty$ とし、
大数の法則と中心極限定理に必要な条件を仮定する。

### (a)

$Y_i$ を $X_{1i},X_{2i}$ に回帰して得られる最小二乗推定量
$(\hat\beta_1,\hat\beta_2)$ を導出せよ。

### (b)

$\sqrt n(\hat\beta_1-\beta_1)$ の漸近分布を導出せよ。

### (c)

$H_0:\beta_1=0$ 対 $H_1:\beta_1\ne0$ を漸近的に有意水準 $5\%$ で
検定する手続きを説明せよ。

### (d)

$E[X_{1i}X_{2i}]=\gamma\ne0$ のとき、$X_{2i}$ を除いて回帰した
$\beta_1$ の最小二乗推定量が一致推定量でないことを示せ。

### (e)

$E[X_{1i}X_{2i}]=0$ のとき、同じ推定量が一致推定量であることを示せ。

## **Kai**

以下では、(a) の標本行列が列フルランク（$D>0$）、(b) 以降の母二次モーメント行列 $Q$ が正定値であると仮定する。(c) ではさらに $\sigma^2>0$ とする。これらは係数の識別と検定に必要である。


### (a)

$$
S_{jk}=\sum_{i=1}^nX_{ji}X_{ki},\qquad
S_{jY}=\sum_{i=1}^nX_{ji}Y_i,
$$

$$
D=S_{11}S_{22}-S_{12}^2
$$

とおく。正規方程式を解けば

$$
\begin{pmatrix}S_{11}&S_{12}\\S_{12}&S_{22}\end{pmatrix}
\begin{pmatrix}\hat\beta_1\\\hat\beta_2\end{pmatrix}
=\begin{pmatrix}S_{1Y}\\S_{2Y}\end{pmatrix}
$$

より

$$
\boxed{\hat\beta_1=\frac{S_{22}S_{1Y}-S_{12}S_{2Y}}D},\qquad
\boxed{\hat\beta_2=\frac{S_{11}S_{2Y}-S_{12}S_{1Y}}D}.
$$

### (b)

$\boldsymbol x_i=(X_{1i},X_{2i})^\mathsf T$、

$$
Q=E[\boldsymbol x_i\boldsymbol x_i^\mathsf T]
=\begin{pmatrix}a&c\\c&b\end{pmatrix}
$$

とおく。大数の法則と中心極限定理より

$$
\frac1n\sum_i\boldsymbol x_i\boldsymbol x_i^\mathsf T\xrightarrow{p}Q,
\qquad
\frac1{\sqrt n}\sum_i\boldsymbol x_iu_i
\xrightarrow{d}N(\boldsymbol0,\sigma^2Q).
$$

したがって

$$
\sqrt n(\hat{\boldsymbol\beta}-\boldsymbol\beta)
=\left(\frac1n\sum_i\boldsymbol x_i\boldsymbol x_i^\mathsf T\right)^{-1}
\frac1{\sqrt n}\sum_i\boldsymbol x_iu_i
\xrightarrow{d}N(\boldsymbol0,\sigma^2Q^{-1}).
$$

したがって

$$
\boxed{
\sqrt n(\hat\beta_1-\beta_1)
\xrightarrow{d}N\left(0,\frac{\sigma^2b}{ab-c^2}\right)}.
$$

### (c)

$\hat u_i=Y_i-\hat\beta_1X_{1i}-\hat\beta_2X_{2i}$ とし、

$$
\hat\sigma^2=\frac1{n-2}\sum_i\hat u_i^2,
\qquad
T=\frac{\hat\beta_1}{\sqrt{\hat\sigma^2S_{22}/D}}
$$

とおく。$H_0$ の下で $T\xrightarrow{d}N(0,1)$ なので、

$$
\boxed{|T|>1.96}
$$

ならば $H_0$ を棄却する。

### (d)

$X_{2i}$ を除いた推定量を $\widetilde\beta_1$ とすると

$$
\widetilde\beta_1
=\frac{\sum_iX_{1i}Y_i}{\sum_iX_{1i}^2}
=\beta_1+\beta_2\frac{\sum_iX_{1i}X_{2i}}{\sum_iX_{1i}^2}
+\frac{\sum_iX_{1i}u_i}{\sum_iX_{1i}^2}.
$$

$E[X_{1i}u_i]=E[X_{1i}E[u_i\mid X_{1i},X_{2i}]]=0$ より

$$
\operatorname{plim}\widetilde\beta_1
=\beta_1+\beta_2\frac{\gamma}{E[X_{1i}^2]}\ne\beta_1.
$$

よって一致推定量でない。

### (e)

$E[X_{1i}X_{2i}]=0$ ならば同様に

$$
\operatorname{plim}\widetilde\beta_1=\beta_1.
$$

したがって $\boxed{\widetilde\beta_1\xrightarrow{p}\beta_1}$ である。

## **Reference**

- [一橋大学 経済学研究科 過去の入試問題](https://www.econ.hit-u.ac.jp/jpn/page/examinee/graduate_admissions/past_exam.html)
- [一橋大学 2022年度修士課程入学試験「経済学」](https://www1.econ.hit-u.ac.jp/office/bosyu/kakomon/kakomon_s2022.pdf)
