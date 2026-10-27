---
sidebar_label: "2020年8月実施 共通問題 問題3（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Real-Analysis.Uniform-Continuity
  - Mathematics.Calculus.Mean-Value-Theorem
  - Mathematics.Calculus.Improper-Integral
---

# 東北大学 大学院理学研究科 数学専攻 2020年8月実施 共通問題 問題3

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は4題ある．全問に解答すること．

関数 $f:\mathbb{R}\to\mathbb{R}$ は以下の条件 (a) と (b) を満たすとする．

(a) $f$ は $\mathbb{R}$ で微分可能であり，$f'$ は $\mathbb{R}$ で有界である．

(b) 広義積分 $\displaystyle\int_{-\infty}^\infty|f(t)|\,dt$ は収束する．

以下の問いに答えよ．

(1) 一般に「関数 $g:\mathbb{R}\to\mathbb{R}$ が $\mathbb{R}$ で一様連続である」という定義を書け．

(2) $f$ は $\mathbb{R}$ で一様連続であることを示せ．

(3) $f(t)$ は $t\to\infty$ とするとき $0$ に収束することを示せ．

### 题目描述

本卷共有4题，全部作答。

设函数 $f:\mathbb{R}\to\mathbb{R}$ 满足下列条件 (a) 和 (b)。

(a) $f$ 在 $\mathbb{R}$ 上可微，且导函数 $f'$ 在 $\mathbb{R}$ 上有界。

(b) 广义积分 $\displaystyle\int_{-\infty}^\infty|f(t)|\,dt$ 收敛。

回答下列问题。

(1) 写出一般的函数 $g:\mathbb{R}\to\mathbb{R}$ 在 $\mathbb{R}$ 上一致连续的定义。

(2) 证明 $f$ 在 $\mathbb{R}$ 上一致连续。

(3) 证明当 $t\to\infty$ 时，$f(t)\to0$。

## **Kai**

### (1)

任意の $\varepsilon>0$ に対して，ある $\delta>0$ が存在し，すべての $x,y\in\mathbb{R}$ について

$$
|x-y|<\delta\quad\Longrightarrow\quad |g(x)-g(y)|<\varepsilon
$$

が成り立つことである．ここで $\delta$ は $x,y$ に依存しない．

### (2)

$|f'(t)|\le M$（$t\in\mathbb{R}$）となる $M>0$ をとる．平均値の定理から，任意の $x,y$ について

$$
|f(x)-f(y)|\le M|x-y|.
$$

任意の $\varepsilon>0$ に対し $\delta=\varepsilon/M$ とすれば (1) の条件を満たすので，$f$ は一様連続である．

### (3)

$f(t)\to0$（$t\to\infty$）でないとすると，ある $\varepsilon>0$ と $t_n\to\infty$ が存在して $|f(t_n)|\ge\varepsilon$．$\delta=\varepsilon/(2M)$ とすれば，(2) の評価から $|t-t_n|\le\delta$ で

$$
|f(t)|\ge|f(t_n)|-M|t-t_n|\ge\frac\varepsilon2.
$$

部分列を選ぶことにより $t_{n+1}-t_n>2\delta$ とできる．区間 $[t_n-\delta,t_n+\delta]$ は互いに交わらないので，任意の $N$ に対して

$$
\int_{-\infty}^\infty|f(t)|\,dt
\ge\sum_{n=1}^N\int_{t_n-\delta}^{t_n+\delta}|f(t)|\,dt
\ge N\varepsilon\delta.
$$

$N\to\infty$ とすると (b) に矛盾する．ゆえに $f(t)\to0$ である．

## **Reference**

- [東北大学公式問題の保存版（2021年度・共通問題，2021(R3)kyotsu.pdf 第3ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2021年度 共通問題・微積分 1](https://note.com/normalmath/n/n89152917de11#2846d6ce-4568-4c0f-bb66-1cb20e205daa)
