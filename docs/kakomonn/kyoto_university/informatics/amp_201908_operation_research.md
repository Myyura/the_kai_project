---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2019年8月実施 オペレーションズ・リサーチ
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2019年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版
以下の問 (i)、(ii) に答えよ。

(i) 次の非線形計画問題を考える。
 
$$
\begin{aligned}
\text{(P) } &\text{Maximize } \ \theta(\boldsymbol{x}) \\
&\text{subject to } \ \boldsymbol{x} \in X
\end{aligned}
$$

ただし、(P) の決定変数は $x \in \mathbb{R}^n$ であり、$\theta : \mathbb{R}^n \rightarrow \mathbb{R}$ と $X \subseteq \mathbb{R}^n$ は以下のように定義された目的関数と実行可能領域である。

$$
\theta(\boldsymbol{x}) = \left( \prod_{i=1}^{n} x_i \right)^{\frac{1}{n}}, \quad X = \left\{ \boldsymbol{x} \in \mathbb{R}^n \middle| \sum_{i=1}^{n} x_i = 1, \, x_i \geqq 0 \ (i = 1, \ldots, n) \right\}
$$

問題 (P) は唯一の最適解 $\boldsymbol{x}^*$ を持ち、関数 $\theta$ は $\mathbb{R}_{++}^n$ 上で凹関数（すなわち、$-\theta$ は凸関数）であることが知られている。
ただし、$\mathbb{R}_{++}^n = \{ \boldsymbol{x} \in \mathbb{R}^n \mid x_i > 0 \ (i = 1, \ldots, n) \}$ である。

以下の (a), (b), $(c)$ に答えよ。

(a) 問題 (P) のカルーシュ・キューン・タッカー条件 (Karush-Kuhn-Tucker 条件) を書け。(問題 (P) が最大化問題であることに注意すること。)

(b) 問題 (P) の最適解 $\boldsymbol{x}^*$ を求めよ。

$(c)$ $\gamma_i \in \mathbb{R}, \, \gamma_i \geqq 0 \ (i = 1, \ldots, n)$ とする。問題 (P) の最適解 $\boldsymbol{x}^*$ を利用して、以下の算術幾何平均の不等式が成り立つことを示せ。

$$
\frac{1}{n} \sum_{i=1}^{n} \gamma_i \geqq \left( \prod_{i=1}^{n} \gamma_i \right)^{\frac{1}{n}}
$$

(ii) 正の整数 $n$ に対して、$\mathcal{F}_n$ を $\mathbb{R}^n$ から $\mathbb{R}$ への非負の凸関数の集合とする。以下の (A), (B) に答えよ。

(A) $f \in \mathcal{F}_n$ が与えられたとき、関数 $g_f : \mathbb{R}^n \rightarrow \mathbb{R}$ を $g_f(\boldsymbol{x}) = f(\boldsymbol{x})^2 \ (\boldsymbol{x} \in \mathbb{R}^n)$ と定義する。そのとき、任意の $f \in \bigcup_{n=1}^{\infty} \mathcal{F}_n$ に対して、$g_f$ が凸関数であることを示せ。

(B) 正の数 $\alpha \in \mathbb{R}$ と $f \in \mathcal{F}_n$ が与えられたとき、関数 $h_{f,\alpha} : \mathbb{R}^n \rightarrow \mathbb{R}$ を $h_{f,\alpha}(\boldsymbol{x}) = f(\boldsymbol{x})^{\alpha} \ (\boldsymbol{x} \in \mathbb{R}^n)$ と定義する。
そのとき、すべての $\alpha \geqq \alpha^*$ と $f \in \bigcup_{n=1}^{\infty} \mathcal{F}_n$ に対して、$h_{f,\alpha}$ が凸関数であるような最小な $\alpha^* \in \mathbb{R}$ を求めよ。その際、$\alpha^*$ が最小であることを示せ。


### English Version

## **Kai**
### (i)
#### (a)

$$
\begin{aligned}
\text{(P)}: \text{Minimize } \ &-\theta (x) \\
\text{subject to } \ &\boldsymbol{1}^\top x = 1 \\
&x \succeq \boldsymbol{0}
\end{aligned}
$$

Lagrangian:

$$
L(x, \mu) = -\theta (x) + \mu (1^\top x - 1)
$$

$$
\text{KKT-conditions } \left\{
\begin{aligned}
&-\frac 1n (\Pi_{j\neq i}^{n} x_j)^{\frac 1n - 1} - \mu = 0, i = 1, 2, \ldots, n \\
&1^\top x = 1, x\succeq 0 \\
\end{aligned}
\right.
$$

#### (b)
$x^*$, $\mu ^*$ satisfied KKT-conditions if $x^* = [\frac 1n, \frac 1n, \ldots , \frac 1n]^\top$, $\mu = -\frac 1n$

#### $(c)$

$$
(\prod_{i=1}^{n} \gamma_i )^{\frac 1n} = (\prod_{i=1}^{n} \gamma_i )^{\frac 1n} \frac{\sum \gamma_i}{\sum \gamma_i}  = (\frac{\prod_{i=1}^{n} \gamma_i}{(\sum_{i=1}^{n}\gamma_i)^n})^{\frac 1n} (\sum_{i=1}^{n} \gamma_i) \leq \frac 1n \sum_{i=1}^{n}\gamma_i
$$

### (ii)
#### (A)
For any $f \in \bigcup_{n=1}^{\infty} \mathcal{F}_n$, w.l.o.g, let $f : \mathbb{R}^k \rightarrow \mathbb{R}$ be an nonnegative function.
Then

$$
\theta g_f( x_1) + (1-\theta)g_f(x_2) = \theta f( x_1)^2 + (1-\theta) f( x_2)^2
$$

$$
g_f(\theta x_1 + (1-\theta)x_2) = f(\theta x_1 + (1-\theta)x_2) ^ 2 \leq (\theta f( x_1) + (1-\theta) f( x_2)) ^2
$$

and consider $\phi(\theta) =g_f(\theta x_1 + (1-\theta)x_2) - \theta g_f( x_1) - (1-\theta)g_f(x_2)$,
by calculating $\Delta$ , easily we see:

$$g_f(\theta x_1 + (1-\theta)x_2) \leq \theta g_f( x_1) + (1-\theta)g_f(x_2) $$

#### (B)

$$
\alpha ^* = 1
$$

for $\alpha \geq 1$:
$$\theta f(x_1)^{\alpha} + (1-\theta)f(x_2) ^{\alpha} \geq (\theta f(x_1) + (1-\theta)f(x_2))^{\alpha}$$
since $\theta f(x_1) + (1-\theta)f(x_2) \geq f(\theta x_1 + (1-\theta)x_2)$, and $t^{\alpha}$ increases for $t>0$
then
$$(\theta f(x_1) + (1-\theta)f(x_2))^{\alpha} \geq (f(\theta x_1 + (1-\theta)x_2))^{\alpha } = h(\theta x_1 + (1-\theta)x_2)$$
thus $h$ is convex for $\alpha \geq 1$.

If $\alpha < 1$, let $f(x) = x_1^{\alpha}$, easy to see $h$ is not convex.
hence $\alpha^* = 1$
