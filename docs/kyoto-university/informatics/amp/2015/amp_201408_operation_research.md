---
sidebar_label: "2014年8月実施 オペレーションズ・リサーチ"
tags:
  - Kyoto-University
  - Operations-Research.Nonlinear-Optimization.Quadratic-Programming
  - Operations-Research.Convex-Optimization.Karush-Kuhn-Tucker-Conditions
  - Operations-Research.Convex-Optimization.Projected-Gradient-Method
---
# 京都大学 情報学研究科 数理工学専攻 2014年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca, 祭音Myyura

## **Description**
### 日本語版
関数 $f: \mathbb{R}^n \to \mathbb{R}$ を連続的微分可能な凸関数とし、 $S = \{\boldsymbol{x} \in \mathbb{R}^n \mid \boldsymbol{a}^{\top} \boldsymbol{x} = b \}$ とする。
ただし， $\boldsymbol{a}$ は $\boldsymbol{0}$ でない $n$ 次元ベクトル、 $b$ はスカラーであり、 $\top$ はベクトルの転置を表す。

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

(ii) $\boldsymbol{x} \in S$ かつ $\bar{\boldsymbol{y}}(\boldsymbol{x}) = \boldsymbol{x}$ であるとき、 $\boldsymbol{x}$ は問題 (P) の最適解であることを示せ。

(iii) $\boldsymbol{x} \in S$ かつ $\bar{\boldsymbol{y}}(\boldsymbol{x}) \neq \boldsymbol{x}$ であるとき，

$$
\nabla f(\boldsymbol{x})^{\top} (\bar{\boldsymbol{y}}(\boldsymbol{x}) - \boldsymbol{x}) < 0, \quad \boldsymbol{a}^{\top} (\bar{\boldsymbol{y}}(\boldsymbol{x}) - \boldsymbol{x}) = 0
$$

であることを示せ。

(iv) $\bar{\boldsymbol{y}}(\boldsymbol{x}) \neq \boldsymbol{x}$ であるとき， $\boldsymbol{x}$ は問題 (P) の最適解でないことを示せ。

### English Version

### 题目描述

设 $f:\mathbb R^n\to\mathbb R$ 是连续可微凸函数，并定义仿射集合

$$
S=\{\boldsymbol x\in\mathbb R^n\mid\boldsymbol a^\top\boldsymbol x=b\},
$$

其中 $\boldsymbol a\neq\boldsymbol0$ 是 $n$ 维向量，$b$ 是标量，上标 $\top$ 表示转置。考虑凸规划

$$
\begin{aligned}
(\mathrm P):\quad \min_{\boldsymbol x}\quad &f(\boldsymbol x)\\
\text{s.t.}\quad &\boldsymbol x\in S.
\end{aligned}
$$

再对参数 $\boldsymbol z\in\mathbb R^n$ 考虑以 $\boldsymbol y$ 为决策变量的凸二次规划

$$
\begin{aligned}
\mathrm P(\boldsymbol z):\quad \min_{\boldsymbol y}\quad
&\nabla f(\boldsymbol z)^\top\boldsymbol y
+\frac12(\boldsymbol y-\boldsymbol z)^\top(\boldsymbol y-\boldsymbol z)\\
\text{s.t.}\quad &\boldsymbol y\in S.
\end{aligned}
$$

已知对任意 $\boldsymbol z\in\mathbb R^n$，问题 $\mathrm P(\boldsymbol z)$ 都有唯一最优解 $\bar{\boldsymbol y}(\boldsymbol z)$。完成以下各问：

1. 设 $\boldsymbol z\in S$。利用问题 $\mathrm P(\boldsymbol z)$ 的 Karush–Kuhn–Tucker（KKT）条件求出 $\bar{\boldsymbol y}(\boldsymbol z)$。
2. 若 $\boldsymbol x\in S$ 且 $\bar{\boldsymbol y}(\boldsymbol x)=\boldsymbol x$，证明 $\boldsymbol x$ 是问题 $(\mathrm P)$ 的最优解。
3. 若 $\boldsymbol x\in S$ 且 $\bar{\boldsymbol y}(\boldsymbol x)\neq\boldsymbol x$，证明

   $$
   \nabla f(\boldsymbol x)^\top
   \bigl(\bar{\boldsymbol y}(\boldsymbol x)-\boldsymbol x\bigr)<0,
   \qquad
   \boldsymbol a^\top
   \bigl(\bar{\boldsymbol y}(\boldsymbol x)-\boldsymbol x\bigr)=0.
   $$

4. 当 $\bar{\boldsymbol y}(\boldsymbol x)\neq\boldsymbol x$ 时，证明 $\boldsymbol x$ 不是问题 $(\mathrm P)$ 的最优解。

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
L(y,\mu) = \nabla f(z)^\top y + \frac 12 (y-z)^\top(y-z) + \mu (a^\top y - b)
$$

$$
\text{ KKT-conditions} \left\{
\begin{aligned}
\nabla f(z) + (\bar{y}(z) - z) + \mu a & = \boldsymbol{0} \\
a^\top \bar{y}(z) &= b
\end{aligned}
\right.
$$

thus

$$
\mu = \frac{a^\top z-a^\top\nabla f(z)-b}{a^\top a}, \qquad
\bar{y}(z) = z-\nabla f(z)-\mu a.
$$

### (ii)
Since $\bar y(x)=x$, the KKT conditions in (i) give a scalar $\mu$ such that

$$
\nabla f(x)+\mu a=0.
$$

For every $y\in S$, convexity gives

$$
f(y)\geq f(x)+\nabla f(x)^\top(y-x)
=f(x)-\mu a^\top(y-x)=f(x).
$$

Therefore, $x$ is an optimal solution of P.

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
If $x\notin S$, it is infeasible and therefore cannot be optimal. Now assume $x\in S$.
Let $g(t) = f(x + t(\bar{y}(x) - x)), t \geq 0$.
Then $g'(0) = \nabla f(x)^\top (\bar{y}(x) - x)<0$ by (iii).

Since $g'$ is continuous, there is an $\varepsilon>0$ such that $g'(t)<0$ for $0\leq t\leq\varepsilon$. For $0<c\leq\varepsilon$, the mean value theorem gives

$$
g(c)=g(0)+g'(\theta)c<g(0),\qquad \theta\in(0,c).
$$

Moreover, $x+c(\bar y(x)-x)\in S$. Thus

$$
f(x + c(\bar{y}(x) - x)) < f(x)
$$

and $x$ is not an optimal solution.
