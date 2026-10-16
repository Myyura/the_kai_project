---
sidebar_label: "2023年度 計量経済学 [2]"
tags:
  - Osaka-Metropolitan-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Mean-Squared-Error
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Chi-Square-Distribution
---

# 大阪公立大学 経済学研究科 2023年度 計量経済学 [2]

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%A4%A7%E9%98%AA%E5%85%AC%E7%AB%8B%E5%A4%A7%E5%AD%A6/%E7%B5%8C%E6%B8%88%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91/2023%E5%B9%B4%E5%BA%A6_4_%E8%A8%88%E9%87%8F%E7%B5%8C%E6%B8%88%E5%AD%A6_2.html) refined with GPT 6 Astra)

## **Description**

$X_i$ は平均 $\mu$、分散 $\sigma^2$ の正規分布に従い、互いに独立である。$\bar X=n^{-1}\sum_iX_i$ とし、$\sum_i\{(X_i-\bar X)/\sigma\}^2$ の期待値が $n-1$、分散が $2(n-1)$ であることを用いて答えよ。

(2-1) $\sum_i(X_i-\bar X)^2$ の期待値を求めよ。

(2-2) 同じ量の分散を求めよ。

(2-3) 確率変数 $W_i$ と定数 $a$ に対して、$W_i-a=(W_i-E[W_i])+(E[W_i]-a)$ の分解を利用し、

$$
E[(W_i-a)^2]=V[W_i]+(E[W_i]-a)^2
$$

を証明せよ。

(2-4) 定数 $c$ に対して $E[\{c\sum_i(X_i-\bar X)^2-\sigma^2\}^2]$ を求めよ。

(2-5) $n\ge2$ のとき、(2-4) の値を最小にする $c$ を求めよ。

#### 题目描述

$X_1,\ldots,X_n$ 独立同分布于 $N(\mu,\sigma^2)$，样本均值为 $\bar X$。已知 $\sum_i((X_i-\bar X)/\sigma)^2$ 的期望为 $n-1$、方差为 $2(n-1)$。

1. 求离差平方和 $Q=\sum_i(X_i-\bar X)^2$ 的期望。
2. 求 $Q$ 的方差。
3. 将 $W-a$ 分成中心化随机项和常数偏差项，证明 $E[(W-a)^2]=\operatorname{Var}(W)+(E[W]-a)^2$。
4. 求 $E[(cQ-\sigma^2)^2]$。
5. $n\ge2$ 时求使上述均方误差最小的常数 $c$。

## **Kai**

### (2-1)–(2-2)

$Q=\sum_i(X_i-\bar X)^2=\sigma^2 Z$ とおくと、題意より $E[Z]=n-1$、$V[Z]=2(n-1)$ である。したがって

$$
\boxed{E[Q]=(n-1)\sigma^2,\qquad V[Q]=2(n-1)\sigma^4}.
$$

### (2-3)

$m=E[W_i]$ とおいて平方を展開すると、

$$
\begin{aligned}
E[(W_i-a)^2]
&=E[(W_i-m)^2]+2(m-a)E[W_i-m]+(m-a)^2\\
&=\boxed{V[W_i]+(E[W_i]-a)^2}.
\end{aligned}
$$

中央の項は $E[W_i-m]=0$ により消える。

### (2-4)

(2-3) を $W_i=cQ$、$a=\sigma^2$ に適用すると、

$$
\begin{aligned}
E[(cQ-\sigma^2)^2]
&=c^2V[Q]+(cE[Q]-\sigma^2)^2\\
&=\boxed{\sigma^4\{2c^2(n-1)+(c(n-1)-1)^2\}}.
\end{aligned}
$$

### (2-5)

括弧内を平方完成すると、

$$
(n^2-1)c^2-2(n-1)c+1
=(n^2-1)\left(c-\frac1{n+1}\right)^2+\frac2{n+1}.
$$

$n\ge2$ より二次係数は正であり、

$$
\boxed{c=\frac1{n+1}}
$$

で最小となる。最小均方誤差は $2\sigma^4/(n+1)$。この目的は不偏性ではなく均方誤差の最小化であるため、不偏分散の係数 $1/(n-1)$ とは異なる。

## **Reference**

- [大学公式問題（7ページ（公式PDFの保存版））](https://web.archive.org/web/20230101id_/https://www.omu.ac.jp/econ/assets/2023hakasezenki_nyushi.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E5%A4%A7%E9%98%AA%E5%85%AC%E7%AB%8B%E5%A4%A7%E5%AD%A6/%E7%B5%8C%E6%B8%88%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91/2023%E5%B9%B4%E5%BA%A6_4_%E8%A8%88%E9%87%8F%E7%B5%8C%E6%B8%88%E5%AD%A6_2.html)
