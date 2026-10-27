---
sidebar_label: "2016年8月実施 共通問題 問題2（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Riemann-Sum
  - Mathematics.Calculus.Improper-Integral
---

# 東北大学 大学院理学研究科 数学専攻 2016年8月実施 共通問題 問題2

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は4題ある．全問に解答すること．

$C^1$ 級関数 $f:\mathbb{R}\to\mathbb{R}$ が，任意の $x\ge0$ に対して，

$$
|f(x)|\le\frac1{1+x^2}
$$

を満たすとする．以下の問いに答えよ．

(1) 任意の $N>0$ に対し，$\displaystyle\sum_{k=0}^\infty\left|f\left(\frac{k}{N}\right)\right|$ は，収束することを示せ．

(2) $\displaystyle\int_0^\infty f(x)\,dx$ は，収束することを示せ．

(3) さらに，任意の $x\ge0$ に対し，

$$
|f'(x)|\le\frac1{1+x^2}
$$

を満たすとする．このとき，

$$
\lim_{N\to\infty}\frac1N\sum_{k=0}^\infty f\left(\frac{k}{N}\right)=\int_0^\infty f(x)\,dx
$$

を示せ．

### 题目描述

本卷共有4题，全部作答。

设 $C^1$ 函数 $f:\mathbb{R}\to\mathbb{R}$ 对任意 $x\ge0$ 都满足

$$
|f(x)|\le\frac1{1+x^2}.
$$

回答下列问题。

(1) 证明对任意 $N>0$，级数 $\displaystyle\sum_{k=0}^\infty\left|f\left(\frac{k}{N}\right)\right|$ 收敛。

(2) 证明广义积分 $\displaystyle\int_0^\infty f(x)\,dx$ 收敛。

(3) 进一步假设对任意 $x\ge0$ 都有

$$
|f'(x)|\le\frac1{1+x^2}.
$$

证明

$$
\lim_{N\to\infty}\frac1N\sum_{k=0}^\infty f\left(\frac{k}{N}\right)=\int_0^\infty f(x)\,dx.
$$

## **Kai**

### (1)

$N>0$ を固定する．$k\ge1$ のとき

$$
\left|f\left(\frac{k}{N}\right)\right|
\le\frac{N^2}{N^2+k^2}\le\frac{N^2}{k^2}.
$$

$\sum_{k=1}^\infty k^{-2}<\infty$ であり，$k=0$ の項 $|f(0)|$ も有限なので，級数は収束する．

### (2)

比較判定法により

$$
\int_0^\infty|f(x)|\,dx\le\int_0^\infty\frac{dx}{1+x^2}=\frac\pi2<\infty.
$$

よって広義積分は絶対収束する．

### (3)

$h=1/N$ とおく．$f\in C^1$ なので，$kh\le x\le(k+1)h$ に対して

$$
|f(x)-f(kh)|\le\int_{kh}^x|f'(t)|\,dt
\le\int_{kh}^{(k+1)h}|f'(t)|\,dt.
$$

これを $x$ について積分すると

$$
\left|\int_{kh}^{(k+1)h}f(x)\,dx-hf(kh)\right|
\le h\int_{kh}^{(k+1)h}|f'(t)|\,dt.
$$

$k$ について加え，(1)，(2) の絶対収束を用いて上限を無限大にすれば

$$
\left|\int_0^\infty f(x)\,dx-\frac1N\sum_{k=0}^\infty f\left(\frac{k}{N}\right)\right|
\le\frac1N\int_0^\infty|f'(t)|\,dt\le\frac\pi{2N}\longrightarrow0.
$$

これが求める等式である．

## **Reference**

- [東北大学公式問題の保存版（2017年度・共通問題，kyotsu2017(H29).pdf 第2ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2017年度 共通問題・微積分 1](https://note.com/normalmath/n/n89152917de11#97148be3-708c-4f0a-a6df-65bfc2d15c1e)
