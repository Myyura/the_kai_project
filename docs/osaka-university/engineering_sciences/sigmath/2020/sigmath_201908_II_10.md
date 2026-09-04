---
sidebar_label: "2019年8月実施 数理科学 II [10]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 II \[10\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数、$\beta$ は実数とする。$X_1,\ldots,X_n$ は独立に $N(1,1)$ に従い、$Y_1,\ldots,Y_n$ は互いに独立な $\{0,1\}$ 値確率変数である。各 $i=1,\ldots,n$ に対して

$$
P(Y_i=1\mid X_i=x_i)=\Phi(\beta x_i)
$$

とする。$\Phi$ は標準正規分布関数である。

(1) 全変数と独立な $Z\sim N(0,1)$ に対し $P(Y_i=1)=P(Z\le\beta X_i)$ を示せ。

(2) $n^{-1}\sum_{i=1}^nY_i\xrightarrow{P}\Phi(\beta/\sqrt{1+\beta^2})$ を示せ。

(3) $Y_1,\ldots,Y_n$ を用いて $\beta$ の一致推定量を構成せよ。

## **Kai**

### (1)
条件付き期待値より

$$
P(Y_i=1)=E[\Phi(\beta X_i)]=E[P(Z\le\beta X_i\mid X_i)]=P(Z\le\beta X_i).
$$

### (2)
$\beta X_i-Z\sim N(\beta,1+\beta^2)$ より、$Y_i$ は成功確率

$$
p=\Phi\left(\frac\beta{\sqrt{1+\beta^2}}\right)
$$

の独立同分布なベルヌーイ変数である。大数の法則から $\overline Y_n\xrightarrow{P}p$。

### (3)
$a=\Phi(-1),b=\Phi(1)$ とおく。推定量を

$$
\widehat\beta_n=\begin{cases}
\dfrac{\Phi^{-1}(\overline Y_n)}{\sqrt{1-[\Phi^{-1}(\overline Y_n)]^2}}&a<\overline Y_n<b,\\
0&\text{その他}
\end{cases}
$$

と定める。真の $p$ は $(a,b)$ の内部にあり、上式の関数は $p$ の近傍で連続で、その値は $\beta$。したがって (2) と連続写像定理より $\widehat\beta_n\xrightarrow{P}\beta$。
