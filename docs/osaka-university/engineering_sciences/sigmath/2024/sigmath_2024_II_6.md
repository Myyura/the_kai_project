---
sidebar_label: "2024年度 数理科学 [II-6]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Probability-Basics.Order-Statistics
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [II-6]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ は2以上の整数、$\theta$ は実数とする。$X_1,\ldots,X_n$ は独立に密度 $f(x;\theta)=\frac12e^{-|x-\theta|}$（$x\in\mathbb R$）に従い、$X_{(1)}\le\cdots\le X_{(n)}$ を順序統計量とする。

(1) $n$ が偶数なら、任意の実数 $\theta$ に対し

$$
\sum_{j=1}^{n/2}|X_{(n-j+1)}-X_{(j)}|\le\sum_{i=1}^n|X_{(i)}-\theta|
$$

が成り立つことを示せ。

(2) $n$ が奇数のとき、$X_{((n+1)/2)}$ が $\theta$ の最尤推定量であることを示せ。

(3) $n=3$ のとき $X_{(2)}$ は不偏推定量か。理由を述べよ。

## **Kai**

### (1)

各 $j$ について三角不等式

$$
|X_{(n-j+1)}-X_{(j)}|\le|X_{(n-j+1)}-\theta|+|X_{(j)}-\theta|
$$

を加えればよい。

### (2)

$n=2m+1$ とする。尤度は $2^{-n}\exp(-\sum_i|X_i-\theta|)$ なので、絶対偏差和を最小にすればよい。(1)と同様に両端から対を作ると

$$
\sum_i|X_i-\theta|\ge\sum_{j=1}^m(X_{(n-j+1)}-X_{(j)})+|X_{(m+1)}-\theta|.
$$

$\theta=X_{(m+1)}$ は各対の区間内にあり、すべての三角不等式で等号を成立させ、最後の項も0にする。よって $\boxed{\hat\theta=X_{(m+1)}}$ は最尤推定量である。

### (3)

$Z_i=X_i-\theta$ とすれば各 $Z_i$ は原点対称であり、$(Z_1,Z_2,Z_3)$ と $(-Z_1,-Z_2,-Z_3)$ は同分布。符号反転で中央値も反転するので、$Z_{(2)}$ の分布は原点対称である。
$|Z_{(2)}|\le\sum_i|Z_i|$ より可積分だから $E[Z_{(2)}]=0$。従って $\boxed{E[X_{(2)}]=\theta}$ であり不偏である。
