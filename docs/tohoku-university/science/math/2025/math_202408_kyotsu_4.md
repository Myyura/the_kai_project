---
sidebar_label: "2024年8月実施 共通問題 問題4（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Continuity-and-Differentiability
  - Mathematics.Calculus.Mean-Value-Theorem
---

# 東北大学 大学院理学研究科 数学専攻 2024年8月実施 共通問題 問題4

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は4題ある．全問に解答すること．

実数 $a,b$ は $a<b$ を満たすとする．関数 $f:[a,b]\to\mathbb{R}$ について，$f$ が半開区間 $[a,b)$ で右微分可能であるとは，すべての $x\in[a,b)$ において，右極限

$$
f'_+(x)=\lim_{\substack{\delta>0\\\delta\to0}}
\frac{f(x+\delta)-f(x)}{\delta}
$$

が実数の値として存在することを意味する．$f$ が半開区間 $(a,b]$ で左微分可能であるとは，すべての $x\in(a,b]$ において，左極限

$$
f'_-(x)=\lim_{\substack{\delta<0\\\delta\to0}}
\frac{f(x+\delta)-f(x)}{\delta}
$$

が実数の値として存在することを意味する．以下の問いに答えよ．

(1) 関数 $f:[a,b]\to\mathbb{R}$ は連続であり，半開区間 $[a,b)$ 上で右微分可能とする．ある実数 $m,M$ が存在し，任意の $x\in[a,b)$ に対して $m\le f'_+(x)\le M$ が成り立つとする．さらに，関数 $h:[a,b]\to\mathbb{R}$ を次で定義する．

$$
h(x)=\begin{cases}
\dfrac{f(x)-f(a)}{x-a}&(x\ne a),\\
f'_+(a)&(x=a).
\end{cases}
$$

任意の正の実数 $\varepsilon$ をとり，

$$
A=\{x\in[a,b]\mid\text{任意の }y\in[a,x]\text{ に対して }m-\varepsilon\le h(y)\le M+\varepsilon\}
$$

とおく．$\sup A>a$ を示せ．

(2) (1) の $A$ に対して，$\sup A=b$ を示せ．

(3) 関数 $g:[0,1]\to\mathbb{R}$ は連続であり，半開区間 $[0,1)$ 上で右微分可能とする．また導関数 $g'_+$ は半開区間 $[0,1)$ で有界であり，点 $x_0\in(0,1)$ で連続とする．このとき，$g$ は $x_0$ で微分可能であることを示せ．

### 题目描述

本卷共有4题，全部作答。

设实数 $a<b$。对函数 $f:[a,b]\to\mathbb{R}$，称 $f$ 在半开区间 $[a,b)$ 上右可微，是指对每个 $x\in[a,b)$，右极限

$$
f'_+(x)=\lim_{\substack{\delta>0\\\delta\to0}}
\frac{f(x+\delta)-f(x)}{\delta}
$$

存在且为实数。称 $f$ 在半开区间 $(a,b]$ 上左可微，是指对每个 $x\in(a,b]$，左极限

$$
f'_-(x)=\lim_{\substack{\delta<0\\\delta\to0}}
\frac{f(x+\delta)-f(x)}{\delta}
$$

存在且为实数。回答下列问题。

(1) 设 $f:[a,b]\to\mathbb{R}$ 连续，并在 $[a,b)$ 上右可微。存在实数 $m,M$，使每个 $x\in[a,b)$ 都满足 $m\le f'_+(x)\le M$。定义 $h:[a,b]\to\mathbb{R}$ 为

$$
h(x)=\begin{cases}
\dfrac{f(x)-f(a)}{x-a}&(x\ne a),\\
f'_+(a)&(x=a).
\end{cases}
$$

任取 $\varepsilon>0$，令

$$
A=\{x\in[a,b]\mid\text{对任意 }y\in[a,x],\ m-\varepsilon\le h(y)\le M+\varepsilon\}.
$$

证明 $\sup A>a$。

(2) 对第 (1) 问中的集合 $A$，证明 $\sup A=b$。

(3) 设 $g:[0,1]\to\mathbb{R}$ 连续，在 $[0,1)$ 上右可微，且右导函数 $g'_+$ 在 $[0,1)$ 上有界，在 $x_0\in(0,1)$ 处连续。证明 $g$ 在 $x_0$ 处可微。

## **Kai**

### (1)

右微分の定義から $\lim_{x\downarrow a}h(x)=f'_+(a)=h(a)$ であり，$h$ は $[a,b]$ 上で連続である．また $m\le h(a)\le M$．したがって，ある $\eta\in(0,b-a)$ をとれば $a\le y\le a+\eta$ で

$$
m-\varepsilon<h(y)<M+\varepsilon.
$$

よって $a+\eta\in A$ であり，$\sup A>a$ となる．

### (2)

$c=\sup A$ とおく．任意の $y<c$ に対して，$y<x\le c$ を満たす $x\in A$ があるので $m-\varepsilon\le h(y)\le M+\varepsilon$．$h$ の連続性から同じ不等式は $y=c$ でも成り立ち，$c\in A$ である．

$c<b$ と仮定する．$f$ の $c$ における右微分可能性と $m\le f'_+(c)\le M$ より，ある $\eta\in(0,b-c)$ が存在し，$c<y\le c+\eta$ で

$$
m-\frac{\varepsilon}{2}
\le \frac{f(y)-f(c)}{y-c}
\le M+\frac{\varepsilon}{2}.
$$

一方，$c>a$ なので

$$
h(y)=\frac{y-c}{y-a}\frac{f(y)-f(c)}{y-c}
     +\frac{c-a}{y-a}h(c).
$$

これは二つの差商の凸結合であり，両方が $[m-\varepsilon,M+\varepsilon]$ に属するから，$h(y)$ も同区間に属する．したがって $c+\eta\in A$ となり，$c=\sup A$ に矛盾する．ゆえに $\sup A=b$．

さらに $h$ の連続性から $b\in A$ である．$\varepsilon\downarrow0$ として

$$
m\le\frac{f(b)-f(a)}{b-a}\le M
\tag{*}
$$

も得られる．この不等式は通常の微分可能性を仮定せずに成り立つ．

### (3)

$L=g'_+(x_0)$ とおく．任意の $\varepsilon>0$ に対し，$g'_+$ の $x_0$ での連続性より，ある $0<\eta<\min(x_0,1-x_0)$ が存在して

$$
L-\varepsilon\le g'_+(t)\le L+\varepsilon
\qquad(x_0-\eta<t<x_0).
$$

$x_0-\eta<x<x_0$ に対し，区間 $[x,x_0]$ で (*) を適用すると

$$
L-\varepsilon\le\frac{g(x_0)-g(x)}{x_0-x}\le L+\varepsilon.
$$

よって $g'_-(x_0)$ が存在して $L$ に等しい．右微分係数も $L$ なので，$g$ は $x_0$ で微分可能で，$g'(x_0)=L$ である．

## **Reference**

- [東北大学公式問題（2025年度・共通問題，第3ページ）](https://www.math.tohoku.ac.jp/exam/questions/2025_R7_kyotsu.pdf)
- [L^2：2025年度 共通問題・微積分 2](https://note.com/normalmath/n/n89152917de11#dbf668ae-9ffd-4d77-9a4a-63bce70f72d2)
