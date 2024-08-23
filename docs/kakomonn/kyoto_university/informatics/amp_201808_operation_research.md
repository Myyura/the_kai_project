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



### English Version

## **Kai**
### (i)

use mathematical introction:
$\boldsymbol{(1)}$ when $m=1$, since $h$ is convex, $h(\alpha_1 b^1 + \alpha_2 b^2) \leq \alpha_1 h(b^1) + \alpha_2 h(b^2)$
$\boldsymbol{(2)}$ when $m = k$ make an assumption that , 
$$h(\sum_{i=1}^{k} \alpha_i b^i) \leq \sum_{i=1}^{n}\alpha_i h(b^i)$$

$\boldsymbol{(3)}$ when $m = k+1$,
$$
\begin{aligned}
\sum_{i=1}^{k+1} \alpha_i h(b^i) &= \sum_{i=1}^{k}\alpha_i h(b^i) + \alpha_{k+1}h(b^{k+1}) \\
&= (\sum_{i=1}^{k}\alpha_i) h(\sum_{i=1}^{k}\frac{\alpha_i}{\sum_{j = 1}^{k} \alpha_j} b^i )+ \alpha_{k+1}h(b^{k+1})\\
& \geq h(\sum_{i=1}^{k+1} \alpha_i b^i)
\end{aligned}
$$

according to introdction principle, for $\alpha$ , $h(\sum_{i=1}^{m}\alpha_i b^i) \leq \sum_{j=1}^{m}\alpha_ih(b^i)$

### (ii)
for $g: g''(t) = ((\ln2)^2)2^t > 0$, $g$ is convex
for $f$:
$$
\begin{aligned}
    f(x_1) + (1-\theta)f(x_2) &= \theta g(h(x_1)) + (1-\theta)g(h(x_2)) \\
    &\geq g(\theta h(x_1) + (1-\theta)h(x_2)) \\
    &\geq g(h(\theta x_1 + (1-\theta)x_2))
\end{aligned}
$$

### (iii)
Lagrangian $L(\alpha , \mu) = -\sum_{i=1}^{m}f(b^i)\alpha_i + \mu(\boldsymbol{1}^\top \alpha - 1)$

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
conversely, we assume that $$\forall \hat{x} \in X^*, x \notin \triangle$$
then we have:
$$h(b^i) < h(\hat{x}), i = 1, 2 \ldots, m$$
since
$$h(b^i) > \triangledown h(\hat{x})(b^i - \hat{x}) + h(\hat{x})$$
then
$$\triangledown h(\hat{x})(b^i - \hat{x}) < 0$$
there is $\theta_i \in [0,1]$, such that $\sum_{i=1}^{m}\theta_i b^i = \hat{x}$
thus 
$$\sum_{i=1}^{m}\theta_I h(\hat{x})(b^i - \hat{x}) < 0$$
but we also get
$$\sum_{i=1}^{m}\theta_i h(\hat{x})(b^i - \hat{x}) = h(\hat{x})\sum_{i=1}^{m}(\theta_i x_i - \theta_i \hat{x}) = 0$$
these two are conflict with each other!
therefor $X^* \cap \triangle \neq 0$