---
sidebar_label: "2022年度 統計学 問1"
tags:
  - Yokohama-National-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Uniform-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
---

# 横浜国立大学 国際社会科学府 経済学専攻 2022年度 一般入試 統計学 問1

## **Author**

祭音Myyura (Based on [miyake's answer](https://miyake.github.io/exams/%E6%A8%AA%E6%B5%9C%E5%9B%BD%E7%AB%8B%E5%A4%A7%E5%AD%A6/%E5%9B%BD%E9%9A%9B%E7%A4%BE%E4%BC%9A%E7%A7%91%E5%AD%A6%E5%BA%9C_%E7%B5%8C%E6%B8%88%E5%AD%A6%E5%B0%82%E6%94%BB/2022%E5%B9%B4%E5%BA%A6_1_%E7%B5%B1%E8%A8%88%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

正整数 $n$ に対して、確率変数 $X_n$ は次の確率関数をもつとする。

$$
\Pr\left(X_n=\frac{k}{2^n}\right)=\frac1{2^n},\qquad k=1,2,\ldots,2^n.
$$

また、確率変数 $X$ は $[0,1]$ 上の一様確率変数とする。すなわち、その密度関数は

$$
f(x)=\begin{cases}1&(0\le x\le1),\\0&\text{それ以外}\end{cases}
$$

である。以下の問いに答えよ。

(a) 期待値 $E(X_n)$ と $E(X)$ を求め、$\lim_{n\to\infty}E(X_n)=E(X)$ を示せ。

(b) 分散 $\operatorname{Var}(X_n)$ と $\operatorname{Var}(X)$ を求め、$\lim_{n\to\infty}\operatorname{Var}(X_n)=\operatorname{Var}(X)$ を示せ。

(c) 実数 $t$ に対し、$X_n$ と $X$ のモーメント母関数 $m_{X_n}(t)=E(e^{tX_n})$、$m_X(t)=E(e^{tX})$ を求め、$\lim_{n\to\infty}m_{X_n}(t)=m_X(t)$ を示せ。

#### 题目描述

对正整数 $n$，随机变量 $X_n$ 在 $k/2^n$（$k=1,\ldots,2^n$）各点取值的概率均为 $2^{-n}$。随机变量 $X$ 服从 $[0,1]$ 上的均匀分布，即该区间上密度为 $1$，其余地方为 $0$。

(a) 求 $E(X_n)$ 与 $E(X)$，并证明前者随 $n\to\infty$ 收敛到后者。

(b) 求 $\operatorname{Var}(X_n)$ 与 $\operatorname{Var}(X)$，并证明方差也具有同样的收敛关系。

(c) 对任意实数 $t$，求二者的矩母函数 $m_{X_n}(t)$ 和 $m_X(t)$，并证明 $m_{X_n}(t)\to m_X(t)$。

## **Kai**

計算を簡潔にするため $N=2^n$ とおく。

### (a)

整数の和の公式より

$$
E(X_n)=\frac1{N^2}\sum_{k=1}^Nk
=\frac{N(N+1)}{2N^2}
=\boxed{\frac12+\frac1{2^{n+1}}}.
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
\boxed{m_X(t)=\int_0^1e^{tx}\,dx
=\begin{cases}\dfrac{e^t-1}{t}&(t\ne0),\\1&(t=0).\end{cases}}
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
