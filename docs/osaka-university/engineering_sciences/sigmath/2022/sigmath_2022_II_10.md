---
sidebar_label: "2022年度 数理科学 II [10]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 II \[10\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数、$\theta$ は実数とする。独立な実数値確率変数 $X_1,\ldots,X_n$ は $N(\theta,1)$ に従う。$\overline X_n=n^{-1}\sum_iX_i$ とし、$|\alpha|<1$ を満たす実数 $\alpha$ に対して

$$
\widetilde\theta_n(x_1,\ldots,x_n)=\begin{cases}\overline x_n&|\overline x_n|>n^{-1/4},\\
\alpha\overline x_n&|\overline x_n|\le n^{-1/4}\end{cases},\qquad\overline x_n=\frac1n\sum_ix_i
$$

と定める。

(1) $x>0$ に対し $P(\sqrt n(\overline X_n-\theta)\ge x)\le e^{-x^2/2}$ を示せ。

(2) $\theta=0$ のとき $E[\{\sqrt n(\widetilde\theta_n-\theta)\}^2]\to\alpha^2$ を示せ。

(3) $\theta\ne0$ のとき同期待値が $1$ に収束することを示せ。

## **Kai**

### (1)
$Z_n=\sqrt n(\overline X_n-\theta)\sim N(0,1)$。$t>0$ に対し Markov の不等式より

$$
P(Z_n\ge x)\le e^{-tx}E[e^{tZ_n}]=e^{-tx+t^2/2}.
$$

$t=x$ とすればよい。

### (2)
$\theta=0$ の場合、$Z\sim N(0,1)$ を用いて

$$
nE[\widetilde\theta_n^2]
=\alpha^2E[Z^2]+(1-\alpha^2)E[Z^2 1_{\{|Z|>n^{1/4}\}}]\longrightarrow\alpha^2.
$$

最後の項が $0$ になることは $E[Z^2]<\infty$ と優収束定理による。

### (3)
$A_n=\{|\overline X_n|\le n^{-1/4}\}$ とおく。十分大きい $n$ で $n^{-1/4}<|\theta|/2$ だから、(1) と正規分布の対称性より

$$
P(A_n)\le2e^{-n\theta^2/8}.
$$

$A_n$ 上では $|\overline X_n|\le1$ として、ある $\theta,\alpha$ のみに依存する定数 $C$ により

$$
\left|nE[(\widetilde\theta_n-\theta)^2]-nE[(\overline X_n-\theta)^2]\right|
\le CnP(A_n)\longrightarrow0.
$$

後者の期待値は常に $1$ なので、極限は $1$。
