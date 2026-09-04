---
sidebar_label: "2024年度 数理科学 [II-9]"
tags:
  - Osaka-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Binomial-Distribution
  - Mathematics.Real-Analysis.Uniform-Convergence-by-Supremum-Error
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [II-9]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は正の整数、$0\le z\le1$ とし、$X_1,\ldots,X_n$ は独立に $\operatorname{Ber}(z)$ に従う。すなわち $P(X_i=1)=z$、$P(X_i=0)=1-z$ ($i=1,\ldots,n$) である。$f$ は $[0,1]$ 上の連続関数、$Y_n=n^{-1}\sum_iX_i$ とする。

(1) $E[f(Y_n)]$ を $z$ に関する多項式で表せ。

(2) $\delta>0$、$U_n(\delta,z)=1_{\{|Y_n-z|\ge\delta\}}$ とする。$n,z,\delta$ に依存しない $M>0$ が存在して

$$
E[|f(Y_n)-f(z)|U_n(\delta,z)]\le\frac{M}{n\delta^2}
$$

となることを示せ。

(3) $\lim_{n\to\infty}\sup_{z\in[0,1]}|E[f(Y_n)]-f(z)|=0$ を示せ。

## **Kai**

### (1)

$nY_n\sim\operatorname{Bin}(n,z)$ より

$$
\boxed{E[f(Y_n)]=\sum_{k=0}^nf\left(\frac kn\right)\binom nkz^k(1-z)^{n-k}}.
$$

### (2)

$B=\max_{[0,1]}|f|<\infty$ とする。$E[Y_n]=z$, $\operatorname{Var}(Y_n)=z(1-z)/n\le1/(4n)$ なので、チェビシェフの不等式より

$$
E[|f(Y_n)-f(z)|U_n]\le2B\,P(|Y_n-z|\ge\delta)
\le\frac{B}{2n\delta^2}.
$$

従って $\boxed{M=\max\{1,B/2\}}$ とすればよい。

### (3)

任意の $\varepsilon>0$ を取る。$f$ の一様連続性より、$|u-v|<\delta$ なら $|f(u)-f(v)|<\varepsilon/2$ となる $\delta>0$ が存在する。このとき(2)から、すべての $z\in[0,1]$ に対して

$$
|E[f(Y_n)]-f(z)|\le E|f(Y_n)-f(z)|\le\frac\varepsilon2+\frac{M}{n\delta^2}.
$$

$n>2M/(\varepsilon\delta^2)$ なら右辺は $\varepsilon$ 未満となり、所望の一様収束を得る。
