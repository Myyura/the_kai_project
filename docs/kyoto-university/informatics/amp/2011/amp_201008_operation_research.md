---
sidebar_label: "2010年8月実施 オペレーションズ・リサーチ"
tags:
  - Kyoto-University
  - Operations-Research.Convex-Optimization.Karush-Kuhn-Tucker-Conditions
  - Operations-Research.Linear-Programming.Linear-Programming-Problem
---
# 京都大学 情報学研究科 数理工学専攻 2010年8月実施 オペレーションズ・リサーチ

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/innshi/kakomon/h23/h23_senmon3.pdf)

$$
\mathbb{R}^n_{+}  = \{ x \in \mathbb{R}^n \mid x_i \ge 0 \ (i=1,\ldots,n) \}, \quad
\mathbb{R}^n_{++} = \{ x \in \mathbb{R}^n \mid x_i > 0 \ (i=1,\ldots,n) \}.
$$

関数 $\psi : \mathbb{R}^n_{+} \rightarrow \mathbb{R}$ を

$$
\psi(x) = \sum_{i=1}^n x_i \ln x_i
$$

と定義する。ただし、 $\ln$ は自然対数を表し、 $0\ln 0 = 0$ とする。さらに、関数 $B_\psi: \mathbb{R}^n_{+} \times \mathbb{R}^n_{++} \rightarrow \mathbb{R}$ を次のように定義する。

$$
B_\psi(x, y) = \psi(x) - \psi(y) - \nabla \psi(y)^T (x - y)
$$

ただし、 $T$ は転置記号である。

次に、パラメータ $t \in R$ を含む非線形計画問題 $P(t)$ を考える。

$$
P(t) \quad \text{minimize} \quad tc^T x + B_\psi(x, y)
$$

$$
\text{subject to} \quad \sum_{i=1}^n x_i = 1
$$

$$
x_i \geq 0 \quad (i = 1,...,n)
$$

ここで、決定変数は $x$ であり、 $c \in R^n$ と $y \in R^n_{++}$ は定数ベクトルである。問題 $P(t)$ には唯一の解 $x(t)$ が存在し、 $x_i(t) > 0 \quad (i = 1,...,n)$ が成り立つことが知られている。以下の問 (i)-(iv) に答えよ。

(i) 任意の $x, y \in R^n_{++}$ に対して、 $B_\psi(x, y) \geq 0$ となることを示せ。

(ii) 問題 $P(t)$ のカルーシュ・キューン・タッカー条件 (Karush-Kuhn-Tucker 条件) を書け。

(iii) $x(t)$ を求めよ。

(iv) ベクトル $c$ の成分 $c_1, c_2, ..., c_n$ に対して $c_1 > c_2 > ... > c_n$ が成り立つとする。

$$
\lim_{t \rightarrow \infty} x(t) = (0, ..., 0, 1)^T
$$

となることを示せ。

### 题目描述

记

$$
\mathbb R_+^n=\{x\in\mathbb R^n\mid x_i\geq0\ (i=1,\ldots,n)\},\qquad
\mathbb R_{++}^n=\{x\in\mathbb R^n\mid x_i>0\ (i=1,\ldots,n)\}.
$$

在 $\mathbb R_{+}^n$ 上定义

$$
\psi(x)=\sum_{i=1}^n x_i\ln x_i,
$$

其中 $\ln$ 为自然对数，并约定 $0\ln0=0$。对 $x\in\mathbb R_{+}^n$、$y\in\mathbb R_{++}^n$，定义

$$
B_\psi(x,y)
=\psi(x)-\psi(y)-\nabla\psi(y)^T(x-y),
$$

其中上标 $T$ 表示转置。

给定参数 $t\in\mathbb R$，考虑以 $x$ 为决策变量的非线性规划问题

$$
\begin{aligned}
P(t):\quad \min_x\quad &tc^Tx+B_\psi(x,y)\\
\text{s.t.}\quad &\sum_{i=1}^n x_i=1,\\
&x_i\geq0\qquad(i=1,\ldots,n),
\end{aligned}
$$

其中 $c\in\mathbb R^n$、$y\in\mathbb R_{++}^n$ 为给定常向量。已知 $P(t)$ 存在唯一解 $x(t)$，且其每个分量都严格为正，即 $x_i(t)>0\ (i=1,\ldots,n)$。

完成以下各问：

1. 证明对任意 $x,y\in\mathbb R_{++}^n$，都有

   $$
   B_\psi(x,y)\geq0.
   $$

2. 写出问题 $P(t)$ 的 Karush–Kuhn–Tucker（KKT）条件。
3. 求出唯一最优解 $x(t)$。
4. 若 $c_1>c_2>\cdots>c_n$，证明

   $$
   \lim_{t\to\infty}x(t)=(0,\ldots,0,1)^T.
   $$

## **Kai**

(i) $\nabla\psi(y)=(\log y_1+1,\ldots,\log y_n+1)^T$ なので

$$
B_\psi(x,y)
=\sum_{i=1}^n\left[
x_i\log\frac{x_i}{y_i}-x_i+y_i
\right].
$$

$r>0$ に対して $\phi(r)=r\log r-r+1$ とおくと

$$
\phi'(r)=\log r,\qquad \phi''(r)=\frac1r>0.
$$

従って $\phi$ は $r=1$ で唯一の最小値 $\phi(1)=0$ を取る。各項は

$$
x_i\log\frac{x_i}{y_i}-x_i+y_i
=y_i\phi\left(\frac{x_i}{y_i}\right)\geq0
$$

であるから

$$
\boxed{B_\psi(x,y)\geq0}.
$$

この証明は、一般の $x,y\in\mathbb R_{++}^n$ に対して成り立ち、成分和が1であることを仮定しない。

(ii) 問題文で最適解の全成分が正であると与えられているので、その内点での微分を用いる。等式制約の乗数 $\lambda$ は符号自由である。

Lagrangian:

$$
L(x, \lambda, \mu) = tc^Tx + \psi(x) - \psi(y) - \nabla \psi(y)^T(x - y) - \lambda(\sum_{i=1}^n x_i - 1) - \sum_{i=1}^n \mu_i x_i
$$

KKT Conditions:

$$
\frac{\partial L}{\partial x_i} = tc_i + \ln x_i + 1 - (\ln y_i + 1) - \lambda - \mu_i = 0
$$

$$
\sum_{i=1}^n x_i = 1
$$

$$
x_i \geq 0, \mu_i \geq 0, \mu_i x_i = 0
$$

$$
\implies tc_i + \ln x_i - \ln y_i - \lambda - \mu_i = 0
$$

(iii) From the KKT conditions:

$$
\ln x_i = \ln y_i - tc_i + \lambda + \mu_i
$$

$$
x_i = y_i e^{-tc_i + \lambda + \mu_i}
$$

If $x_i > 0$ , then $\mu_i = 0$ .

$$
x_i = y_i e^{-tc_i + \lambda}
$$

$$
\sum_{i=1}^n x_i = \sum_{i=1}^n y_i e^{-tc_i + \lambda} = 1
$$

$$
e^{\lambda} = \frac{1}{\sum_{i=1}^n y_i e^{-tc_i}}
$$

$$
x_i = \frac{y_i e^{-tc_i}}{\sum_{j=1}^n y_j e^{-tc_j}}
$$

(iv) Since $c_1 > c_2 > ... > c_n$ ,

$$
\lim_{t \rightarrow \infty} x_i(t) = \lim_{t \rightarrow \infty} \frac{y_i e^{-tc_i}}{\sum_{j=1}^n y_j e^{-tc_j}}
$$

$$
= \lim_{t \rightarrow \infty} \frac{y_i e^{-t(c_i - c_n)}}{\sum_{j=1}^n y_j e^{-t(c_j - c_n)}}
$$

For $i < n, c_i - c_n > 0$ , so $\lim_{t \rightarrow \infty} e^{-t(c_i - c_n)} = 0$ .
For $i = n, c_n - c_n = 0$ , so $\lim_{t \rightarrow \infty} e^{-t(c_n - c_n)} = 1$ .

$$
\lim_{t \rightarrow \infty} x_i(t) = \frac{0}{y_n} = 0
$$

$$
\lim_{t \rightarrow \infty} x_n(t) = \frac{y_n}{\sum_{j=1}^n y_j e^{-t(c_j - c_n)}} = \frac{y_n}{y_n} = 1
$$

Thus, $\lim_{t \rightarrow \infty} x(t) = (0, ..., 0, 1)^T$ .
