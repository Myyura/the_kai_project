---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2018年8月実施 オペレーションズ・リサーチ
tags:
  - Kyoto-University
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
