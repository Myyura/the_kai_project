---
sidebar_label: "2014年8月実施 オペレーションズ・リサーチ"
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2014年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版
関数 $f: \mathbb{R}^n \to \mathbb{R}$ を連続的微分可能な凸関数とし、$S = \{\boldsymbol{x} \in \mathbb{R}^n \mid \boldsymbol{a}^{\top} \boldsymbol{x} = b \}$ とする。
ただし，$\boldsymbol{a}$ は $\boldsymbol{0}$ でない $n$ 次元ベクトル、$b$ はスカラーであり、$\top$ はベクトルの転置を表す。

次の凸計画問題を考える。

$$
\begin{aligned}
\text{(P)}: \text{Minimize } \ &f(\boldsymbol{x}) \\
\text{subject to } \ &\boldsymbol{x} \in S
\end{aligned}
$$

さらにパラメータ $\boldsymbol{z} \in \mathbb{R}^n$ を含む次の凸 2 次計画問題を考える。

$$
\begin{aligned}
\text{P}(\boldsymbol{z}): \text{Minimize } \ &\nabla f(\boldsymbol{z})^{\top} \boldsymbol{y} + \frac{1}{2} (\boldsymbol{y} - \boldsymbol{z})^{\top} (\boldsymbol{y} - \boldsymbol{z}) \\
\text{subject to } \ &\boldsymbol{y} \in S
\end{aligned}
$$

ここで、決定変数は $\boldsymbol{y}$ である。
任意の $\boldsymbol{z} \in \mathbb{R}^n$ に対して問題 $\text{P}(\boldsymbol{z})$ は唯一の最適解 $\bar{\boldsymbol{y}}(\boldsymbol{z})$ をもつ.

以下の問いに答えよ。

(i) $\boldsymbol{z} \in S$ とする。問題 $\text{P}(\boldsymbol{z})$ のカルーシュ・キューン・タッカー (Karush-Kuhn-Tucker) 条件を用いて $\bar{\boldsymbol{y}}(\boldsymbol{z})$ を求めよ。

(ii) $\boldsymbol{x} \in S$ かつ $\bar{\boldsymbol{y}}(\boldsymbol{x}) = \boldsymbol{x}$ であるとき、$\boldsymbol{x}$ は問題 (P) の最適解であることを示せ。

(iii) $\boldsymbol{x} \in S$ かつ $\bar{\boldsymbol{y}}(\boldsymbol{x}) \neq \boldsymbol{x}$ であるとき，

$$
\nabla f(\boldsymbol{x})^{\top} (\bar{\boldsymbol{y}}(\boldsymbol{x}) - \boldsymbol{x}) < 0, \quad \boldsymbol{a}^{\top} (\bar{\boldsymbol{y}}(\boldsymbol{x}) - \boldsymbol{x}) = 0
$$

であることを示せ。

(iv) $\bar{\boldsymbol{y}}(\boldsymbol{x}) \neq \boldsymbol{x}$ であるとき，$\boldsymbol{x}$ は問題 (P) の最適解でないことを示せ。

### English Version

## **Kai**
### (i)

$$
\begin{aligned}
    \text{P}(z): & \text{Minimize} \quad \nabla f(z)^\top y + \frac 12 (y-z)^\top (y-z) \\
    &\text{Subject to} \quad a^\top y = b
\end{aligned}
$$

Lagrangian:

$$
L(y,\mu) = \nabla f(z)^\top y + \frac 12 (y-z)^\top(y-z) + \mu (a^\top - b)
$$

$$
\text{ KKT-conditions} \left\{
\begin{aligned}
\nabla f(x) + (\bar{y}(z) - z) + \mu a & = \boldsymbol{0} \\
a^\top \bar{y}(z) &= b
\end{aligned}
\right.
$$

thus

$$
\mu = \frac{-b - \nabla f(z)^\top a + a^\top z}{a^\top a}, \quad \bar{y}(z) = \frac{b}{a^\top a}a
$$

### (ii)
From (i) we know that $\frac{b}{a^\top a} a$ minimizes $P(\frac{b}{a^\top a}a)$.

$$
S = \{x | a^\top (x - \frac{b}{a^\top a}) = 0 \} = \{\frac{b}{a^\top a} + td|a^\top d = 0, t\in R \}
$$

Let $g(t) = \nabla f(\frac{b}{a^\top a}a) (\frac{b}{a^\top a}a + td) + \frac 12 t^2 d^\top d$.
Since

$$
\text{argmin } g(t) = 0
$$

then

$$
\nabla f(\frac{b}{a^\top a}a)^\top d = 0
$$

thus

$$
\forall y \in S, f(y) - f(\frac{b}{a^\top a}a) \geq \nabla f(\frac{b}{a^\top a }a)^\top (y - \frac{b}{a^\top a}a) = 0
$$

Therefore $\frac{b}{a^\top a}a$ minnimize $f(x)$.

### (iii)
Since

$$
a^\top \bar{y}(x) = b, a^\top x = b
$$

we obtain

$$
a^\top (\bar{y}(x) - x) = 0
$$

$$
x = \bar{y}(x) + td , a^\top d = 0, t\in R, t\neq 0
$$

$$
\nabla f(x)^\top \bar{y}(x) + \frac 12 (\bar{y}(x) - x)^\top(\bar{y}(x) - x) \leq \nabla f(x)^\top x
$$

Then

$$
\nabla f(x)^\top (\bar{y}(x) - x) < 0
$$

### (iv)
Let $g(t) = f(x + t(\bar{y}(x) - x)), t \geq 0$.
$g'(0) = \nabla f(x)^\top (\bar{y}(x) - x)$.

$f$ is continuously differentiable, and so is $g$.

$f(c) = g(0) + g'(\theta)c, \ \theta \in (0,c)$,
thus

$$
g(c) < g(0)
$$

then

$$
f(x + c(\bar{y}(x) - x)) < f(x)
$$

thus $x$ is not an optimal solution.
