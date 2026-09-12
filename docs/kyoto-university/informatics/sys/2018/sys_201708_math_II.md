---
sidebar_label: 2017年8月実施 数学 II
tags:
  - Kyoto-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Infinite-Series
  - Mathematics.Calculus.Integration-by-Substitution
  - Mathematics.Calculus.Improper-Integral
---

# 京都大学 情報学研究科 システム科学専攻 2017年8月実施 数学 II

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

$e$ を自然対数の底とし、$\exp(x)=e^x$ とする。

### 問1

正の整数 $N$ と実数 $\alpha$ を用いて $e=\alpha/N$ と表記する。

(i) $e^x$ の Maclaurin 展開を書け。

(ii) 次の不等式を示せ。

$$
(N-1)!\alpha-\sum_{n=0}^{N}\frac{N!}{n!}<1.
$$

(iii) (ii) を用いて $\alpha$ が整数でないことを示せ。

### 問2

$f(x)=\exp(-x-e^{-x})$ ($-\infty<x<\infty$) とする。

(i) $u=-e^{-t}$ を用いて $F(x)=\int_{-\infty}^{x}f(t)\,dt$ を計算せよ。

(ii) $\int_{-\infty}^{\infty}F(x)f(x)\,dx$ を計算せよ。

(iii) 実定数 $a,b$ に対し $\int_{-\infty}^{\infty}F(x-b)f(x-a)\,dx$ を計算せよ。

#### 题目描述

令 $e$ 为自然对数的底，$\exp(x)=e^x$。

**问1** 用正整数 $N$ 和实数 $\alpha$ 写成 $e=\alpha/N$。（i）写出 $e^x$ 的 Maclaurin 展开。（ii）证明

$$
(N-1)!\alpha-\sum_{n=0}^{N}\frac{N!}{n!}<1.
$$

（iii）利用（ii）证明 $\alpha$ 不是整数。

**问2** 设 $f(x)=\exp(-x-e^{-x})$，$x\in\mathbb R$。（i）用代换 $u=-e^{-t}$ 计算 $F(x)=\int_{-\infty}^{x}f(t)\,dt$。（ii）计算 $\int_{-\infty}^{\infty}F(x)f(x)\,dx$。（iii）对实常数 $a,b$，计算 $\int_{-\infty}^{\infty}F(x-b)f(x-a)\,dx$。


## **Kai**

### 問1

(i) $e^x=\sum_{n=0}^{\infty}x^n/n!$。

(ii) $e=\alpha/N$ より

$$
D:=(N-1)!\alpha-\sum_{n=0}^N\frac{N!}{n!}
=\sum_{k=1}^{\infty}\frac1{(N+1)(N+2)\cdots(N+k)}.
$$

各項は正であり、$k\ge2$ では分母が $(N+1)^k$ より大きい。よって

$$
0<D<\sum_{k=1}^{\infty}\frac1{(N+1)^k}=\frac1N\le1.
$$

(iii) $\alpha$ が整数なら $D$ も整数となるが、$0<D<1$ に矛盾する。よって $\alpha$ は整数ではない。

### 問2

(i) $u=-e^{-t}$ なら $du=e^{-t}dt$ なので

$$
F(x)=\int_{-\infty}^{-e^{-x}}e^u\,du=\boxed{e^{-e^{-x}}}.
$$

(ii) $F'=f$、$F(-\infty)=0,F(\infty)=1$ より

$$
\int_{-\infty}^{\infty}Ff\,dx=\left[\frac{F^2}{2}\right]_{-\infty}^{\infty}=\boxed{\frac12}.
$$

(iii) $t=x-a$、次いで $u=e^{-t}$ とおくと

$$
\begin{aligned}
\int_{-\infty}^{\infty}F(x-b)f(x-a)\,dx
&=\int_{-\infty}^{\infty}e^{-e^{b-a}e^{-t}}e^{-t-e^{-t}}\,dt\\
&=\int_0^\infty e^{-(1+e^{b-a})u}\,du
=\boxed{\frac1{1+e^{b-a}}}.
\end{aligned}
$$

