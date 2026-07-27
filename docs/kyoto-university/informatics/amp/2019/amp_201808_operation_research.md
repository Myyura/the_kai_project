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
Casablanca

## **Description**
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
(P): &\text{Minimize} \quad f(\boldsymbol{x}) \\
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
&\text{Minimize} \quad \sum_{i = 1}^m f(\boldsymbol{b^i})\alpha_i \\
&\text{subject to} \quad \sum_{i = 1}^m \alpha_i = 1 \\
&\qquad \qquad \quad \alpha_i \geqq 0 (i = 1,\dots,m)
\end{aligned}
$$

ただし, 決定変数は $\alpha_i (i = 1,\dots,m)$ である。

(iv) 問題 $(P)$ の最適解の集合を $X^*$ とする。このとき, $X^* \cap \Delta \neq \emptyset$ となることを示せ。

### English Version

### 题目描述

设 $h:\mathbb R^n\to\mathbb R$ 为凸函数，并定义

$$
g(t)=2^t,\qquad f(\boldsymbol x)=g(h(\boldsymbol x)).
$$

给定向量 $\boldsymbol b^i\in\mathbb R^n$（$i=1,\ldots,m$），定义

$$
\begin{aligned}
\Delta&=\{\boldsymbol b^1,\boldsymbol b^2,\ldots,\boldsymbol b^m\},\\
\Gamma&=\left\{\boldsymbol\alpha\in\mathbb R^m\ \middle|\
\sum_{i=1}^m\alpha_i=1,\ \alpha_i\geqq0\right\},\\
\Omega&=\left\{\boldsymbol x\in\mathbb R^n\ \middle|\
\boldsymbol x=\sum_{i=1}^m\alpha_i\boldsymbol b^i,\
\boldsymbol\alpha\in\Gamma\right\}.
\end{aligned}
$$

考虑

$$
(\mathrm P):\qquad
\min_{\boldsymbol x\in\Omega}f(\boldsymbol x).
$$

回答：

1. 证明对任意 $\boldsymbol\alpha\in\Gamma$，
   $$
   h\left(\sum_{i=1}^m\alpha_i\boldsymbol b^i\right)
   \leqq\sum_{i=1}^m\alpha_i h(\boldsymbol b^i).
   $$
2. 证明 $g$ 与 $f$ 都是凸函数。
3. 写出下列以 $\alpha_i$ 为变量的线性规划的 KKT 条件：
   $$
   \begin{aligned}
   &\text{最小化}\quad\sum_{i=1}^m f(\boldsymbol b^i)\alpha_i\\
   &\text{满足}\quad\sum_{i=1}^m\alpha_i=1,\qquad
   \alpha_i\geqq0\ (i=1,\ldots,m).
   \end{aligned}
   $$
4. 令 $X^*$ 为 P 的最优解集合，证明
   $X^*\cap\Delta\ne\varnothing$，即至少有一个给定点 $\boldsymbol b^i$ 本身是最优解。

#### 考点

- **Jensen 不等式与凸组合**：把凸包内任意点表示成给定点的凸组合，并估计 $h$ 及复合函数的值。
- **凸函数的单调复合**：利用 $2^t$ 的凸性与单调递增性证明 $f=2^h$ 凸。
- **单纯形线性规划的 KKT 条件**：分析凸组合权重上的线性目标，进而证明原凸包优化至少在一个生成点处达到最优。

## **Kai**
### (i)

use mathematical introction:

when $m=1$, since $h$ is convex, $h(\alpha_1 b^1 + \alpha_2 b^2) \leq \alpha_1 h(b^1) + \alpha_2 h(b^2)$

when $m = k$ make an assumption that, 

$$
h(\sum_{i=1}^{k} \alpha_i b^i) \leq \sum_{i=1}^{n}\alpha_i h(b^i)
$$

when $m = k+1$,

$$
\begin{aligned}
\sum_{i=1}^{k+1} \alpha_i h(b^i) &= \sum_{i=1}^{k}\alpha_i h(b^i) + \alpha_{k+1}h(b^{k+1}) \\
&= (\sum_{i=1}^{k}\alpha_i) h(\sum_{i=1}^{k}\frac{\alpha_i}{\sum_{j = 1}^{k} \alpha_j} b^i )+ \alpha_{k+1}h(b^{k+1})\\
& \geq h(\sum_{i=1}^{k+1} \alpha_i b^i)
\end{aligned}
$$

according to introdction principle, for any $\alpha \in \Gamma$,

$$
h(\sum_{i=1}^{m}\alpha_i b^i) \leq \sum_{j=1}^{m}\alpha_ih(b^i)
$$

### (ii)
for $g: g''(t) = ((\ln2)^2)2^t > 0$, $g$ is convex.

for $f$:

$$
\begin{aligned}
    f(x_1) + (1-\theta)f(x_2) &= \theta g(h(x_1)) + (1-\theta)g(h(x_2)) \\
    &\geq g(\theta h(x_1) + (1-\theta)h(x_2)) \\
    &\geq g(h(\theta x_1 + (1-\theta)x_2))
\end{aligned}
$$

### (iii)
Lagrangian

$$
L(\alpha , \mu) = -\sum_{i=1}^{m}f(b^i)\alpha_i + \mu(\boldsymbol{1}^\top \alpha - 1)
$$

$$
\text{ KKT-conditions} \left\{
\begin{aligned}
-f(b^i) + \mu_i & = 0 \\
\alpha  & \succeq \boldsymbol{0} \\
 \boldsymbol{1}^\top \alpha &= 1
\end{aligned}
\right.
$$

### (iv)
$\Omega$ is a polyhedron with vertexes $\{ b^1, b^2, \ldots, b^m\}$

$x^*$ maimiaze $f(x) \Rightarrow$ $x^*$ maximize $h(x)$

conversely, we assume that

$$
\forall \hat{x} \in X^*, x \notin \Delta
$$

then we have

$$
h(b^i) < h(\hat{x}), i = 1, 2 \ldots, m
$$

since

$$
h(b^i) > \triangledown h(\hat{x})(b^i - \hat{x}) + h(\hat{x})
$$

then

$$
\triangledown h(\hat{x})(b^i - \hat{x}) < 0
$$

there exist  $\theta_i \in [0,1]$, such that $\sum_{i=1}^{m}\theta_i b^i = \hat{x}$,
thus 

$$
\sum_{i=1}^{m}\theta_I h(\hat{x})(b^i - \hat{x}) < 0
$$

but we also get

$$
\sum_{i=1}^{m}\theta_i h(\hat{x})(b^i - \hat{x}) = h(\hat{x})\sum_{i=1}^{m}(\theta_i x_i - \theta_i \hat{x}) = 0
$$

these two are conflict with each other.
Therefore $X^* \cap \Delta \neq \emptyset$.
