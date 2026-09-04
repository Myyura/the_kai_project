---
sidebar_label: "2023年度 数理科学 II [6]"
tags:
  - Osaka-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 II \[6\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ を正の整数、$k$ を $1\le k\le n$ なる整数とする。独立同分布な実数値確率変数 $X_1,\ldots,X_n$ の分布関数 $F$ は微分可能で、密度 $f=F'$ をもつ。順序統計量を $X_{(1)}\le\cdots\le X_{(n)}$ とし、$X_{(k)}$ の確率密度関数を $f_{X_{(k)}}$ とする。$x\in\mathbb R$ に対し

$$
\varphi_k(x)=\frac{n!}{(k-1)!(n-k)!}(1-F(x))^{n-k}F(x)^{k-1}f(x)
$$

と定める。

(1) $f$ の連続点で $f_{X_{(n)}}=\varphi_n$ を示せ。

(2) 任意の $k=1,\ldots,n$ について、$f$ の連続点で $f_{X_{(k)}}=\varphi_k$ を示せ。

(3) $f$ は点 $a\in\mathbb R$ を除いて連続で、$x\le a$ で $f(x)=0$、$x>a$ で $f(x)>0$ とする。開区間 $(a,\infty)$ 上で $F$ は逆関数 $F^{-1}:(0,1)\to(a,\infty)$ をもつ。このとき

$$
E[X_{(k)}]=\int_0^1F^{-1}(y)\frac{n!}{(k-1)!(n-k)!}(1-y)^{n-k}y^{k-1}\,dy
$$

を示せ。

(4) $f(x)=x^{-2}$ ($x>1$)、$f(x)=0$ ($x\le1$) のとき、$p\in(0,1)$ に対し $\lim_{n\to\infty}E[X_{(\lfloor np\rfloor)}]$ を求めよ。

ここで、$\lfloor x\rfloor$ は実数 $x$ 以下の最大の整数を表す。また、2つの正の整数 $l,m$ に対して

$$
\int_0^1(1-y)^{l-1}y^{m-1}\,dy=\frac{(l-1)!(m-1)!}{(l+m-1)!}
$$

が成り立つことを用いてもよい。

## **Kai**

### (1)
独立性より $P(X_{(n)}\le x)=F(x)^n$。微分すると $nF(x)^{n-1}f(x)=\varphi_n(x)$。

### (2)
$X_{(k)}\le x$ とは $n$ 個中少なくとも $k$ 個が $x$ 以下となることである。よって

$$
P(X_{(k)}\le x)=\sum_{j=k}^n\binom njF(x)^j(1-F(x))^{n-j}.
$$

微分し、$j\binom nj=n\binom{n-1}{j-1}$、$(n-j)\binom nj=n\binom{n-1}j$ を用いると隣接項が相殺され、$\varphi_k(x)$ が残る。

### (3)
(2) の密度を用いた期待値の積分に $y=F(x)$、$dy=f(x)\,dx$ を代入すればよい。$X_{(k)}>a$ なので期待値は拡張実数としても定義され、発散する場合は両辺とも $+\infty$ と解する。

### (4)
$F(x)=1-1/x$ ($x>1$) なので $F^{-1}(y)=1/(1-y)$。$1\le k<n$ ならベータ積分から

$$
E[X_{(k)}]=\frac{n!}{(k-1)!(n-k)!}\int_0^1y^{k-1}(1-y)^{n-k-1}\,dy
=\frac n{n-k}.
$$

十分大きな $n$ で $1\le\lfloor np\rfloor<n$ となるから

$$
\boxed{\lim_{n\to\infty}E[X_{(\lfloor np\rfloor)}]=\frac1{1-p}}.
$$
