---
sidebar_label: "2023年8月実施 共通問題 問題3（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Functional-Analysis.Uniform-Convergence
  - Mathematics.Real-Analysis.Interchange-of-Limit-Derivative-and-Integral
---

# 東北大学 大学院理学研究科 数学専攻 2023年8月実施 共通問題 問題3

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は4題ある．全問に解答すること．

正の整数 $n$ に対し，開区間 $I=(-1,1)$ 上の関数 $f_n:I\to\mathbb{R}$ を

$$
f_n(x)=x(1-x^2)^n\qquad(x\in I)
$$

と定める．以下の問いに答えよ．

(1) 各 $x\in I$ に対して極限 $\displaystyle\lim_{n\to\infty}f_n(x)$ を求めよ．

(2) 関数列 $\{f_n\}_{n=1}^{\infty}$ は $f(x)=\displaystyle\lim_{n\to\infty}f_n(x)$ $(x\in I)$ によって定まる関数 $f:I\to\mathbb{R}$ に $I$ 上で一様収束することを示せ．

(3) 各 $x\in I$ に対して極限 $\displaystyle\lim_{n\to\infty}f'_n(x)$ を求めよ．ただし $f'_n$ は $f_n$ の導関数を表す．

(4) 関数列 $\{f'_n\}_{n=1}^{\infty}$ は $g(x)=\displaystyle\lim_{n\to\infty}f'_n(x)$ $(x\in I)$ によって定まる関数 $g:I\to\mathbb{R}$ に $I$ 上で一様収束するか，理由とともに答えよ．

### 题目描述

本卷共有4题，全部作答。

对正整数 $n$，定义开区间 $I=(-1,1)$ 上的函数 $f_n:I\to\mathbb{R}$ 为

$$
f_n(x)=x(1-x^2)^n\qquad(x\in I).
$$

回答下列问题。

(1) 求每个 $x\in I$ 对应的极限 $\displaystyle\lim_{n\to\infty}f_n(x)$。

(2) 令 $f(x)=\displaystyle\lim_{n\to\infty}f_n(x)$ $(x\in I)$。证明函数列 $\{f_n\}_{n=1}^{\infty}$ 在 $I$ 上一致收敛于函数 $f:I\to\mathbb{R}$。

(3) 求每个 $x\in I$ 对应的极限 $\displaystyle\lim_{n\to\infty}f'_n(x)$，其中 $f'_n$ 表示 $f_n$ 的导函数。

(4) 令 $g(x)=\displaystyle\lim_{n\to\infty}f'_n(x)$ $(x\in I)$。判断函数列 $\{f'_n\}_{n=1}^{\infty}$ 是否在 $I$ 上一致收敛于 $g:I\to\mathbb{R}$，并说明理由。

## **Kai**

### (1)

$x=0$ ならば $f_n(0)=0$．$0<|x|<1$ ならば $0<1-x^2<1$ だから，$f_n(x)=x(1-x^2)^n\to0$．したがって $f(x)=0$ である．

### (2)

微分すると

$$
f'_n(x)=(1-x^2)^{n-1}\{1-(2n+1)x^2\}.
$$

$|f_n|$ は $|x|=(2n+1)^{-1/2}$ で最大となり，

$$
\sup_{x\in I}|f_n(x)|
=\frac1{\sqrt{2n+1}}\left(\frac{2n}{2n+1}\right)^n
\le\frac1{\sqrt{2n+1}}\longrightarrow0.
$$

よって $f_n$ は $I$ 上で $0$ に一様収束する．

### (3)

$f'_n(0)=1$ である．固定した $x\ne0$ に対しては，$q=1-x^2\in(0,1)$ とおくと $q^{n-1}\to0$ および $nq^{n-1}\to0$ だから

$$
f'_n(x)=q^{n-1}- (2n+1)x^2q^{n-1}\longrightarrow0.
$$

したがって

$$
g(x)=\begin{cases}1&(x=0),\\0&(x\ne0).
\end{cases}
$$

### (4)

一様収束しない．実際，各 $f'_n$ は連続だが，極限関数 $g$ は $x=0$ で不連続であり，連続関数列の一様極限が連続であることに反する．

直接にも，任意の $n$ に対し $\lim_{x\to0,\,x\ne0}|f'_n(x)-g(x)|=1$ なので，$\sup_{x\in I}|f'_n(x)-g(x)|\ge1$ と分かる．

## **Reference**

- [東北大学公式問題（2024年度・共通問題，第3ページ）](https://www.math.tohoku.ac.jp/exam/questions/2024_R6_kyotsu.pdf)
- [L^2：2024年度 共通問題・微積分 1](https://note.com/normalmath/n/n89152917de11#016c9d9c-7d83-4082-9e30-cbbfb932437a)
