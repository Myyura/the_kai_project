---
sidebar_label: "2018年8月実施 オペレーションズ・リサーチ"
tags:
  - Kyoto-University
  - Operations-Research.Convex-Optimization.Jensen-Inequality
  - Operations-Research.Convex-Optimization.Karush-Kuhn-Tucker-Conditions
  - Operations-Research.Convex-Optimization.Optimization-over-Convex-Hull
  - Mathematics.Linear-Algebra.Convex-Combination
---
# 京都大学 情報学研究科 数理工学専攻 2018年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca, 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/pukiwiki/amptest-e/index.php?file=h31_exam.pdf&pcmd=open&plugin=attach&refer=Entrance+Examination+Information)
### 日本語版
関数 $h:\mathbb{R}^n \rightarrow \mathbb{R}$ を凸関数とする。さらに, 関数 $g:\mathbb{R} \rightarrow \mathbb{R}$ と $f:\mathbb{R}^n \rightarrow \mathbb{R}$ を以下のように定義する。

$$
g(t) = 2^t,f(x) = g(h(x))
$$

ベクトル $\boldsymbol{b^i} \in \mathbb{R}^n(i = 1,\dots,m)$ が与えられとき, 集合 $\Delta \subseteq \mathbb{R}^n , \Gamma \subseteq \mathbb{R}^m , \Omega \subseteq \mathbb{R}^n$ を以下のように定義する。

$$
\begin{aligned}
\Delta &= \{\boldsymbol{b^1},\boldsymbol{b^2},\dots,\boldsymbol{b^m}\} \\
\Gamma &= \bigg\{\alpha \in \mathbb{R}^m \bigg|\sum_{i=1}^m \alpha_i = 1,\alpha_i \geqq 0 (i = 1,\dots,m)\bigg\} \\
\Omega &= \bigg\{\boldsymbol{x} \in \mathbb{R}^n \bigg| \boldsymbol{x} = \sum_{i = 1}^m \alpha_i \boldsymbol{b}^i , \alpha \in \Gamma\bigg\}
\end{aligned}
$$

次の非線形計画問題 $(P)$ を考える。

$$
\begin{aligned}
(P): &\text{Maximize} \quad f(\boldsymbol{x}) \\
&\text{subject to} \quad \boldsymbol{x} \in \Omega \\
\end{aligned}
$$

以下の問いに答えよ。

(i) 任意の $\alpha \in \Gamma$ に対して, 次の不等式が成り立つことを示せ。

$$
h\bigg(\sum_{i = 1}^m\alpha_i\boldsymbol{b^i}\bigg) \leqq \sum_{i = 1}^m\alpha_i h(\boldsymbol{b^i})
$$

(ii) 関数 $g$ と $f$ が凸関数であることを示せ。

(iii) 次の線形計画問題のカルーシュ $\cdot$ タッカー (Karush-Kuhn-Tucker) 条件を書け。

$$
\begin{aligned}
&\text{Maximize} \quad \sum_{i = 1}^m f(\boldsymbol{b^i})\alpha_i \\
&\text{subject to} \quad \sum_{i = 1}^m \alpha_i = 1 \\
&\qquad \qquad \quad \alpha_i \geqq 0 (i = 1,\dots,m)
\end{aligned}
$$

ただし, 決定変数は $\alpha_i (i = 1,\dots,m)$ である。

(iv) 問題 $(P)$ の最適解の集合を $X^*$ とする。このとき, $X^* \cap \Delta \neq \emptyset$ となることを示せ。

### English Version

### 题目描述

设 $h:\mathbb{R}^n\to\mathbb{R}$ 为凸函数，并定义

$$
g(t)=2^t,\qquad
f(\boldsymbol{x})=g\!\left(h(\boldsymbol{x})\right).
$$

给定向量 $\boldsymbol{b}^i\in\mathbb{R}^n$（$i=1,\ldots,m$），定义

$$
\begin{aligned}
\Delta
&=\{\boldsymbol{b}^1,\boldsymbol{b}^2,\ldots,\boldsymbol{b}^m\},\\
\Gamma
&=\left\{\boldsymbol{\alpha}\in\mathbb{R}^m\ \middle|\
\sum_{i=1}^m\alpha_i=1,\quad
\alpha_i\geqq0\ (i=1,\ldots,m)\right\},\\
\Omega
&=\left\{\boldsymbol{x}\in\mathbb{R}^n\ \middle|\
\boldsymbol{x}=\sum_{i=1}^m\alpha_i\boldsymbol{b}^i,\quad
\boldsymbol{\alpha}\in\Gamma\right\}.
\end{aligned}
$$

在这些给定点的凸包 $\Omega$ 上考虑非线性规划

$$
\begin{aligned}
(P):\quad
&\text{最大化}\quad f(\boldsymbol{x})\\
&\text{约束于}\quad \boldsymbol{x}\in\Omega.
\end{aligned}
$$

回答下列问题：

1. 证明对任意 $\boldsymbol{\alpha}\in\Gamma$，

$$
h\!\left(\sum_{i=1}^m\alpha_i\boldsymbol{b}^i\right)
\leqq
\sum_{i=1}^m\alpha_i h(\boldsymbol{b}^i).
$$

2. 证明函数 $g$ 和 $f$ 都是凸函数。
3. 对下列以 $\alpha_i$（$i=1,\ldots,m$）为决策变量的线性规划，写出 KKT 条件：

$$
\begin{aligned}
&\text{最大化}\quad
\sum_{i=1}^m f(\boldsymbol{b}^i)\alpha_i\\
&\text{满足}\quad
\sum_{i=1}^m\alpha_i=1,\qquad
\alpha_i\geqq0\ (i=1,\ldots,m).
\end{aligned}
$$

4. 记问题 $(P)$ 的最优解集合为 $X^*$。证明
   $X^*\cap\Delta\ne\varnothing$，即至少有一个生成点
   $\boldsymbol{b}^i$ 本身是 $(P)$ 的最优解。

## **Kai**
### (i)
Use induction on $m$. The case $m=1$ is equality. For the induction step, put $\beta=\sum_{i=1}^{m-1}\alpha_i$. If $\beta=0$, the result is immediate; otherwise convexity and the induction hypothesis give

$$
\begin{aligned}
h\!\left(\sum_{i=1}^{m}\alpha_i b^i\right)
&=h\!\left(\beta\sum_{i=1}^{m-1}\frac{\alpha_i}{\beta}b^i+\alpha_m b^m\right)\\
&\le \beta h\!\left(\sum_{i=1}^{m-1}\frac{\alpha_i}{\beta}b^i\right)+\alpha_mh(b^m)\\
&\le\sum_{i=1}^{m}\alpha_i h(b^i).
\end{aligned}
$$

### (ii)
Since $g''(t)=(\ln2)^2 2^t>0$, $g$ is convex and increasing. For $0\le\theta\le1$,

$$
\begin{aligned}
\theta f(x_1)+(1-\theta)f(x_2)
&\ge g\!\left(\theta h(x_1)+(1-\theta)h(x_2)\right)\\
&\ge g\!\left(h(\theta x_1+(1-\theta)x_2)\right),
\end{aligned}
$$

so $f$ is convex.

### (iii)
Lagrangian

$$
L(\alpha,\lambda,\mu)
=-\sum_{i=1}^m f(b^i)\alpha_i
+\lambda(\boldsymbol1^\top\alpha-1)-\mu^\top\alpha.
$$

$$
\text{KKT conditions}\quad\left\{
\begin{aligned}
-f(b^i)+\lambda-\mu_i&=0 &&(i=1,\ldots,m),\\
\boldsymbol1^\top\alpha&=1,\qquad \alpha_i\ge0,\\
\mu_i&\ge0,\qquad \mu_i\alpha_i=0 &&(i=1,\ldots,m).
\end{aligned}
\right.
$$

### (iv)
For any $x=\sum_{i=1}^m\alpha_i b^i\in\Omega$, convexity of $f$ gives

$$
f(x)\le\sum_{i=1}^m\alpha_i f(b^i)
\le\max_{1\le i\le m}f(b^i).
$$

Choose $j$ attaining the last maximum. Since $b^j\in\Omega$, it is an optimal solution of $(P)$. Hence $b^j\in X^*\cap\Delta$.
