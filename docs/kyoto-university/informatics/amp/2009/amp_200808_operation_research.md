---
sidebar_label: "2008年8月実施 オペレーションズ・リサーチ"
tags:
  - Kyoto-University
  - Operations-Research.Convex-Optimization.Karush-Kuhn-Tucker-Conditions
---
# 京都大学 情報学研究科 数理工学専攻 2008年8月実施 オペレーションズ・リサーチ

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/innshi/kakomon/h21/h21_senmon3.pdf)

次の凸計画問題を考える。

P : minimize $\quad - \sum_{i=1}^n \ln(x_i + c_i)$
subject to $\quad \sum_{i=1}^n x_i = 1$
$\qquad \qquad x_i \ge 0 \quad (i = 1, \dots, n)$

ただし， $c_i (i = 1, \dots, n)$ は正の定数， $\mathbf{x} = (x_1, x_2, \dots, x_n)^T \in \mathbb{R}^n$ は決定変数である。 $T$ は転置を表し， $\ln$ は自然対数を表す。

さらに，問題 P に関連して， $\lambda > 0$ をパラメータとして含む次の凸計画問題を考える。

P( $\lambda$ ) : minimize $\quad - \sum_{i=1}^n \ln(x_i + c_i) + \lambda \left( \sum_{i=1}^n x_i - 1 \right)$
subject to $\quad x_i \ge 0 \quad (i = 1, \dots, n)$

以下の問(i)-(v)に答えよ。

(i) 問題 P( $\lambda$ ) のカルーシュ・キューン・タッカー (Karush-Kuhn-Tucker) 条件を書け。

(ii) 問題 P( $\lambda$ ) の最適解を $\mathbf{x}(\lambda) = (x_1(\lambda), x_2(\lambda), \dots, x_n(\lambda))^T$ とする。このとき，

$$
x_i(\lambda) = \max \left\{ 0, \frac{1}{\lambda} - c_i \right\} \quad (i = 1, \dots, n)
$$

となることを示せ。

(iii) 問題 P と問題 P( $\lambda$ ) の目的関数の最小値をそれぞれ $\min(\text{P}), \min(\text{P}(\lambda))$ と書く。このとき，任意の $\lambda > 0$ に対して $\min(\text{P}) \ge \min(\text{P}(\lambda))$ が成り立つことを示せ。

(iv) $\mathbf{x}(\lambda)$ が問題 P の最適解であるための必要十分条件は $\sum_{i=1}^n x_i(\lambda) = 1$ であることを示せ。

(v) $n = 3, c_1 = 0.3, c_2 = 0.7, c_3 = 2$ とする。問題 P の最適解を求めよ。

### 题目描述

设 $c_i>0\ (i=1,\ldots,n)$，决策变量为
$\mathbf x=(x_1,\ldots,x_n)^T\in\mathbb R^n$。考虑凸规划

$$
\begin{aligned}
\mathrm P:\quad \text{minimize}\quad
&-\sum_{i=1}^{n}\ln(x_i+c_i),\\
\text{subject to}\quad
&\sum_{i=1}^{n}x_i=1,\\
&x_i\geq0\quad(i=1,\ldots,n).
\end{aligned}
$$

其中 $T$ 表示转置，$\ln$ 为自然对数。再对参数 $\lambda>0$ 考虑相关的凸规划

$$
\begin{aligned}
\mathrm P(\lambda):\quad \text{minimize}\quad
&-\sum_{i=1}^{n}\ln(x_i+c_i)
+\lambda\left(\sum_{i=1}^{n}x_i-1\right),\\
\text{subject to}\quad
&x_i\geq0\quad(i=1,\ldots,n).
\end{aligned}
$$

完成以下各问：

1. 写出 $\mathrm P(\lambda)$ 的 Karush–Kuhn–Tucker 条件。
2. 若 $\mathbf x(\lambda)=(x_1(\lambda),\ldots,x_n(\lambda))^T$ 为 $\mathrm P(\lambda)$ 的最优解，证明

   $$
   x_i(\lambda)=\max\left\{0,\frac1\lambda-c_i\right\}
   \quad(i=1,\ldots,n).
   $$

3. 分别以 $\min(\mathrm P)$ 和 $\min(\mathrm P(\lambda))$ 表示两个问题的最小目标值，证明对任意 $\lambda>0$，

   $$
   \min(\mathrm P)\geq\min(\mathrm P(\lambda)).
   $$

4. 证明 $\mathbf x(\lambda)$ 同时是 $\mathrm P$ 的最优解，当且仅当
   $\sum_{i=1}^{n}x_i(\lambda)=1$。
5. 在 $n=3$、$c_1=0.3$、$c_2=0.7$、$c_3=2$ 时，求 $\mathrm P$ 的最优解。

## **Kai**

(i) The Lagrangian for problem $P(\lambda)$ is:

$$
L(x, \mu) = -\sum_{i=1}^n \ln(x_i + c_i) + \lambda \left(\sum_{i=1}^n x_i - 1 \right) - \sum_{i=1}^n \mu_i x_i
$$

KKT conditions are:

$$
\begin{aligned}
&\frac{\partial L}{\partial x_i}
  = -\frac{1}{x_i + c_i} + \lambda - \mu_i = 0,
  \quad i = 1, \ldots, n, \\
&\mu_i x_i = 0,
  \quad i = 1, \ldots, n, \\
&x_i \ge 0,
  \quad i = 1, \ldots, n, \\
&\mu_i \ge 0,
  \quad i = 1, \ldots, n.
\end{aligned}
$$

(ii) From KKT conditions, we have $\frac{1}{x_i + c_i} = \lambda - \mu_i$ . Since $\mu_i x_i = 0$ , if $x_i > 0$ , then $\mu_i = 0$ and $x_i = \frac{1}{\lambda} - c_i$ . If $x_i = 0$ , then $\mu_i = \lambda - \frac{1}{c_i}$ , and $\mu_i \geq 0$ , so $\lambda \geq \frac{1}{c_i}$ .
Therefore, $x_i(\lambda) = \max\left\{ 0, \frac{1}{\lambda} - c_i \right\}$ .

(iii) $P$ の任意の実行可能解 $x$ では $\sum_i x_i=1$ なので、 $P(\lambda)$ の目的関数は

$$
-\sum_i\log(x_i+c_i)+\lambda\left(\sum_i x_i-1\right)
=-\sum_i\log(x_i+c_i)
$$

となり、 $P$ の目的関数と一致する。 $P(\lambda)$ は等式制約を外したより広い集合 $x_i\geq0$ 上で最小化するので、

$$
\boxed{\min(P(\lambda))\leq\min(P)}
$$

である。

(iv) $\boldsymbol{x}(\lambda)$ が $P$ の最適解なら、当然 $P$ の等式制約を満たす。逆に $\sum_i x_i(\lambda)=1$ とする。このとき $\boldsymbol{x}(\lambda)$ は $P$ に実行可能であり、

$$
\min(P)\leq-\sum_i\log(x_i(\lambda)+c_i)
=\min(P(\lambda))\leq\min(P)
$$

である。従ってすべて等号となり、 $\boldsymbol{x}(\lambda)$ は $P$ の最適解である。

(v) $n = 3$ , $c_1 = 0.3$ , $c_2 = 0.7$ , $c_3 = 2$ . We want to find $x_1, x_2, x_3$ such that $x_1 + x_2 + x_3 = 1$ and $x_i \geq 0$ .
We have $x_i(\lambda) = \max\left\{ 0, \frac{1}{\lambda} - c_i \right\}$ . We need to find a $\lambda$ such that $\sum_{i=1}^3 x_i(\lambda) = 1$ .
$\sum_{i=1}^3 \max\left\{ 0, \frac{1}{\lambda} - c_i \right\} = 1$

Consider the case where $\frac{1}{\lambda} > c_1, c_2$ and $\frac{1}{\lambda} < c_3$ . Then $x_1 = \frac{1}{\lambda} - 0.3$ , $x_2 = \frac{1}{\lambda} - 0.7$ , and $x_3 = 0$ . Thus, $\frac{1}{\lambda} - 0.3 + \frac{1}{\lambda} - 0.7 = 1$ , which means $\frac{2}{\lambda} = 2$ , so $\lambda = 1$ .
In this case, $x_1 = 1 - 0.3 = 0.7$ , $x_2 = 1 - 0.7 = 0.3$ , $x_3 = 0$ . We check that $\frac{1}{\lambda} = 1 > c_1 = 0.3$ , $\frac{1}{\lambda} = 1 > c_2 = 0.7$ , and $\frac{1}{\lambda} = 1 < c_3 = 2$ , which is consistent with our assumption. Therefore, the optimal solution is $x_1 = 0.7$ , $x_2 = 0.3$ , $x_3 = 0$ .
