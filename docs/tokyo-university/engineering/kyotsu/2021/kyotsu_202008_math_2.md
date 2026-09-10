---
sidebar_label: '2020年8月実施 数学2'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Cayley-Hamilton-Theorem
  - Mathematics.Linear-Algebra.Matrix-Exponential
  - Mathematics.Linear-Algebra.Linear-Independence
  - Probability-Statistics.Stochastic-Processes.Markov-Chain
---

# 東京大学 工学系研究科 2020年8月実施 数学2

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

[公式原題](https://www.t.u-tokyo.ac.jp/hubfs/pdf/2021_M_2.pdf)

### I.

$$
A=\begin{pmatrix}0&3&0\\-3&0&4\\0&-4&0\end{pmatrix}
$$

について、(1) 全固有値、(2) $A^3+aA^2+bA+cI=O$ の係数、(3) $A^{2n+1}$（$n\ge0$ は整数）、(4) $\exp(tA)=pA^2+qA+rI$ の実数表示の係数を求める。$t\in\mathbb R$。

### II.
二状態 A、B の離散時間系で、AからBへの遷移確率を $\alpha$、BからAを $\beta$ とし、$0<\alpha<1$、$0<\beta<1$ とする。

![二状态转移图](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2021/kyotsu_202008_math_2_markov.svg)

1. $\boldsymbol P(n)=(P_A(n),P_B(n))^T$ に対し $\boldsymbol P(n+1)=M\boldsymbol P(n)$ の $M$ を求める。
2. $M$ の全固有値と対応する固有ベクトルを求める。
3. $n\to\infty$ の各状態の確率を求める。
4. $R_A(n)=P_A(n)-\lim_{k\to\infty}P_A(k)$ とおき、$R_A(n+1)$ を $R_A(n)$ で表す。

### III.
$m\ge3$ とし、$\boldsymbol a_1,\ldots,\boldsymbol a_m$ は一次独立とする。循環的な和 $\boldsymbol a_1+\boldsymbol a_2,\ldots,\boldsymbol a_m+\boldsymbol a_1$ が一次独立となる $m$ の条件を求める。

#### 题目描述

I. 对 $A=\begin{pmatrix}0&3&0\\-3&0&4\\0&-4&0\end{pmatrix}$，依次求全部特征值；满足 $A^3+aA^2+bA+cI=0$ 的系数；$A^{2n+1}$（整数 $n\ge0$）；以及 $e^{tA}=pA^2+qA+rI$ 的实系数 $p,q,r$（$t\in\mathbb R$）。

II. 两状态系统每步从 A 到 B 的概率为 $\alpha$、从 B 到 A 为 $\beta$，$0<\alpha,\beta<1$。
(1) 求使 $\boldsymbol P(n+1)=M\boldsymbol P(n)$ 的转移矩阵，其中 $\boldsymbol P(n)=(P_A(n),P_B(n))^T$。
(2) 求全部特征值与对应特征向量。
(3) 求两状态的极限概率。
(4) 令 $R_A(n)=P_A(n)-P_A(\infty)$，用 $R_A(n)$ 表示 $R_A(n+1)$。

III. $m\ge3$ 个向量 $\boldsymbol a_1,\ldots,\boldsymbol a_m$ 线性无关。求循环相邻和 $\boldsymbol a_1+\boldsymbol a_2,\ldots,\boldsymbol a_m+\boldsymbol a_1$ 仍线性无关的充要条件。

## **Kai**

### I

#### 1–2

$$
\det(\lambda I-A)=\lambda(\lambda^2+25),
$$

固有値は $\boxed{0,5i,-5i}$。Cayley–Hamilton の定理より、
$A^3+25A=O$ だから $\boxed{a=0,b=25,c=0}$ である。
三つの固有値は互いに異なるため、最小多項式もこの三次多項式であり、係数は一意である。

#### 3–4

$A^3=-25A$ から帰納的に、

$$
\boxed{A^{2n+1}=(-25)^nA}\qquad(n\ge0).
$$

行列指数の級数で奇数次と偶数次の項をそれぞれ足し合わせると、

$$
\boxed{e^{tA}=I+\frac{\sin5t}{5}A+\frac{1-\cos5t}{25}A^2}.
$$

従って $\boxed{p=(1-\cos5t)/25,\ q=\sin5t/5,\ r=1}$ である。

### II

#### 1–2

全確率の公式より、

$$
\boxed{M=\begin{pmatrix}1-\alpha&\beta\\\alpha&1-\beta\end{pmatrix}}.
$$

すべての固有値と対応する固有ベクトルは次のように取れる。

$$
\boxed{\lambda_1=1,\ \boldsymbol v_1=\binom\beta\alpha;\qquad
\lambda_2=1-\alpha-\beta,\ \boldsymbol v_2=\binom1{-1}}.
$$

#### 3–4

$|1-\alpha-\beta|<1$ かつ $P_A(n)+P_B(n)=1$ より、

$$
\boldsymbol P(n)=\frac1{\alpha+\beta}\binom\beta\alpha
+c(1-\alpha-\beta)^n\binom1{-1}.
$$

従って、

$$
\boxed{P_A(\infty)=\frac\beta{\alpha+\beta},\qquad
P_B(\infty)=\frac\alpha{\alpha+\beta}},
\qquad
\boxed{R_A(n+1)=(1-\alpha-\beta)R_A(n)}.
$$

### III

$\sum_{j=1}^m c_j(\boldsymbol a_j+\boldsymbol a_{j+1})=0$ とする。添字は法 $m$ で解釈する。
$\boldsymbol a_j$ の一次独立性より $c_j+c_{j-1}=0$ だから、
$c_j=(-1)^{j-1}c_1$ かつ $(1+(-1)^{m-1})c_1=0$ である。

$m$ が奇数なら零解のみであり、偶数なら $c_j=(-1)^{j-1}$ が非零の一次関係を与える。
従って必要十分条件は $\boxed{m\text{ が奇数}}$ である。
