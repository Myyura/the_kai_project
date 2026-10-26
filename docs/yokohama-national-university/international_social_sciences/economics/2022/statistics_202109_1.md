---
sidebar_label: "2021年9月実施 統計学 問1"
tags:
  - Yokohama-National-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Uniform-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
---

# 横浜国立大学 国際社会科学府 経済学専攻 2021年9月実施 一般入試 統計学 問1

## **Author**

祭音Myyura (Based on [miyake's answer](https://miyake.github.io/exams/%E6%A8%AA%E6%B5%9C%E5%9B%BD%E7%AB%8B%E5%A4%A7%E5%AD%A6/%E5%9B%BD%E9%9A%9B%E7%A4%BE%E4%BC%9A%E7%A7%91%E5%AD%A6%E5%BA%9C_%E7%B5%8C%E6%B8%88%E5%AD%A6%E5%B0%82%E6%94%BB/2022%E5%B9%B4%E5%BA%A6_1_%E7%B5%B1%E8%A8%88%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

正整数 $n$ に対して確率変数 $X_n$ は次の確率関数を持つものとする。

$$
P\left(X_n=\frac{k}{2^n}\right)=\frac1{2^n},\qquad k=1,2,3,\ldots,2^n.
$$

また確率変数 $X$ は $[0,1]$ 上の一様確率変数とする。ここで $[0,1]$ 上の一様確率変数とは、以下の密度関数をもつ確率変数のことである。

$$
f(x)=\begin{cases}1&0\le x\le1,\\0&\text{それ以外}.\end{cases}
$$

以下の問いに答えよ。

(a) 期待値 $E(X_n)$ と $E(X)$ を求め、$\displaystyle\lim_{n\to\infty}E(X_n)=E(X)$ を示せ。

(b) 分散 $\operatorname{Var}(X_n)$ と期待値 $\operatorname{Var}(X)$ を求め、$\displaystyle\lim_{n\to\infty}\operatorname{Var}(X_n)=\operatorname{Var}(X)$ を示せ。

(c) 実数 $t$ に対し、$X_n$ のモーメント母関数 $m_{X_n}(t)=E(e^{tX_n})$ と $X$ のモーメント母関数 $m_X(t)=E(e^{tX})$ を求め、$\displaystyle\lim_{n\to\infty}m_{X_n}(t)=m_X(t)$ を示せ。


### 题目描述


对于正整数 $n$，设随机变量 $X_n$ 的概率质量函数为

$$
P\left(X_n=\frac{k}{2^n}\right)=\frac1{2^n},\qquad k=1,2,3,\ldots,2^n.
$$

随机变量 $X$ 为 $[0,1]$ 上的均匀随机变量。这里，$[0,1]$ 上的均匀随机变量是指具有下列密度函数的随机变量：

$$
f(x)=\begin{cases}1&0\le x\le1,\\0&\text{其他情况}.\end{cases}
$$

回答以下问题。

(a) 求期望 $E(X_n)$ 和 $E(X)$，并证明 $\displaystyle\lim_{n\to\infty}E(X_n)=E(X)$。

(b) 求方差 $\operatorname{Var}(X_n)$ 和 $\operatorname{Var}(X)$，并证明 $\displaystyle\lim_{n\to\infty}\operatorname{Var}(X_n)=\operatorname{Var}(X)$。原题在 $\operatorname{Var}(X)$ 前写作“期待値”，按方差符号理解。

(c) 对于实数 $t$，求 $X_n$ 的矩母函数 $m_{X_n}(t)=E(e^{tX_n})$ 和 $X$ 的矩母函数 $m_X(t)=E(e^{tX})$，并证明 $\displaystyle\lim_{n\to\infty}m_{X_n}(t)=m_X(t)$。

## **Kai**

計算を簡潔にするため $N=2^n$ とおく。

### (a)

整数の和の公式より

$$
\begin{gathered}
E(X_n)=\frac1{N^2}\sum_{k=1}^Nk\\
=\frac{N(N+1)}{2N^2}\\
=\boxed{\frac12+\frac1{2^{n+1}}}.
\end{gathered}
$$

一方、

$$
\boxed{E(X)=\int_0^1x\,dx=\frac12}.
$$

したがって $\lim_{n\to\infty}E(X_n)=1/2=E(X)$ である。

### (b)

二乗和の公式より

$$
E(X_n^2)=\frac1{N^3}\sum_{k=1}^Nk^2
=\frac{(N+1)(2N+1)}{6N^2}.
$$

よって

$$
\begin{aligned}
\operatorname{Var}(X_n)
&=\frac{(N+1)(2N+1)}{6N^2}-\left(\frac{N+1}{2N}\right)^2\\
&=\frac{N^2-1}{12N^2}=\boxed{\frac{1-2^{-2n}}{12}}.
\end{aligned}
$$

また、$E(X^2)=\int_0^1x^2\,dx=1/3$ より

$$
\boxed{\operatorname{Var}(X)=\frac13-\frac14=\frac1{12}}.
$$

したがって $\lim_{n\to\infty}\operatorname{Var}(X_n)=1/12=\operatorname{Var}(X)$ となる。

### (c)

$t\ne0$ では等比数列の和を用いて

$$
\begin{aligned}
m_{X_n}(t)
&=\frac1N\sum_{k=1}^Ne^{tk/N}\\
&=\frac{e^{t/N}(e^t-1)}{N(e^{t/N}-1)}.
\end{aligned}
$$

$t=0$ では定義から $m_{X_n}(0)=1$ である。したがって

$$
\boxed{m_{X_n}(t)=\begin{cases}
\dfrac{e^{t/2^n}(e^t-1)}{2^n(e^{t/2^n}-1)}&(t\ne0),\\
1&(t=0).
\end{cases}}
$$

連続一様分布については

$$
\boxed{\begin{gathered}
m_X(t)=\int_0^1e^{tx}\,dx\\
=\begin{cases}\dfrac{e^t-1}{t}&(t\ne0),\\1&(t=0).\end{cases}
\end{gathered}}
$$

固定した $t\ne0$ に対し、$N(e^{t/N}-1)\to t$、$e^{t/N}\to1$ なので

$$
\lim_{n\to\infty}m_{X_n}(t)=\frac{e^t-1}t=m_X(t).
$$

$t=0$ でも両辺が常に $1$ であるから、すべての実数 $t$ について所望の収束が成り立つ。

## **Reference**

- [大学公式問題の保存版（2022年度、PDF 12ページ、冊子10ページ）](https://web.archive.org/web/20220928165023id_/https://www.economics.ynu.ac.jp/admissions/graduate_program/ma/pdf/2022_01_MA.pdf)
- [大学公式の大学院入試案内](https://www.economics.ynu.ac.jp/admissions/graduate_program/ma/index.html)
- [miyake：対応する解答](https://miyake.github.io/exams/%E6%A8%AA%E6%B5%9C%E5%9B%BD%E7%AB%8B%E5%A4%A7%E5%AD%A6/%E5%9B%BD%E9%9A%9B%E7%A4%BE%E4%BC%9A%E7%A7%91%E5%AD%A6%E5%BA%9C_%E7%B5%8C%E6%B8%88%E5%AD%A6%E5%B0%82%E6%94%BB/2022%E5%B9%B4%E5%BA%A6_1_%E7%B5%B1%E8%A8%88%E5%AD%A6.html)
