---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2016年8月実施 オペレーションズ・リサーチ
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2016年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版
$\boldsymbol{A}$ を $n \times n$ の正定値対称行列とする。
さらに、関数 $f: \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}$, $g: \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}$, $h: \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}$ を以下のように定義する。

$$
\begin{aligned}
f(\boldsymbol{x}, \boldsymbol{z}) &= - \boldsymbol{x}^{\top} \boldsymbol{x} + \boldsymbol{z}^{\top} \boldsymbol{A} \boldsymbol{x} \\
g(\boldsymbol{x}, \boldsymbol{z}) &=  \boldsymbol{x}^{\top} \boldsymbol{x} + \boldsymbol{z}^{\top} \boldsymbol{A} \boldsymbol{x} + \boldsymbol{z}^{\top} \boldsymbol{z} \\
h(\boldsymbol{x}, \boldsymbol{y}) &= \boldsymbol{x}^{\top} \boldsymbol{x} + \boldsymbol{y}^{\top} \boldsymbol{y}
\end{aligned}
$$

ただし、$\top$ は転置記号である。

$\boldsymbol{z} \in \mathbb{R}^n$ をパラメータにもつ次の非線形計画問題を考える。

$$
\begin{aligned}
\text{P1}(\boldsymbol{z}): &\text{Maximize} &f(\boldsymbol{x}, \boldsymbol{z}) \\
&\text{subject to} &\boldsymbol{x}^{\top} \boldsymbol{x} \leqq 1
\end{aligned}
$$

$$
\begin{aligned}
\text{P2}(\boldsymbol{z}): &\text{Minimize} &g(\boldsymbol{x}, \boldsymbol{z}) \\
&\text{subject to} &\boldsymbol{x} \in \mathbb{R}^n
\end{aligned}
$$

$$
\begin{aligned}
\text{P3}(\boldsymbol{z}): &\text{Minimize} &h(\boldsymbol{x}, \boldsymbol{y}) \\
&\text{subject to} &\boldsymbol{x} + \boldsymbol{y} = \boldsymbol{z}
\end{aligned}
$$

ただし、$\text{P1}(\boldsymbol{z})$ と $\text{P2}(\boldsymbol{z})$ の決定変数は $\boldsymbol{x} \in \mathbb{R}^n$ であり、$\text{P3}(\boldsymbol{z})$ の決定変数は $(\boldsymbol{x}, \boldsymbol{y}) \in \mathbb{R}^n \times \mathbb{R}^n$ である。

任意のパラメータ $\boldsymbol{z} \in \mathbb{R}^n$ に対して $\text{P1}(\boldsymbol{z})$, $\text{P2}(\boldsymbol{z})$, $\text{P3}(\boldsymbol{z})$ は唯一の最適解をもつ。
$\text{P1}(\boldsymbol{z})$, $\text{P2}(\boldsymbol{z})$, $\text{P3}(\boldsymbol{z})$ の最適解をそれぞれ $\boldsymbol{x}^1(\boldsymbol{z})$, $\boldsymbol{x}^2(\boldsymbol{z})$, $(\boldsymbol{x}^3(\boldsymbol{z}), \boldsymbol{y}^3(\boldsymbol{z}))$ とする。

以下の問いに答えよ。

(i) $\boldsymbol{z}^\top \boldsymbol{A}^{\top} \boldsymbol{A} \boldsymbol{z} \leqq 4$ とする。
カルーシュ・キューン・タッカー (Karush-Kuhn-Tucker) 条件を用いて $\text{P1}(\boldsymbol{z})$ の最適解 $\boldsymbol{x}^1(\boldsymbol{z})$ を求めよ。($\text{P1}(\boldsymbol{z})$ が最大化問題であることに注意すること。)

(ii) カルーシュ・キューン・タッカー条件を用いて $\text{P3}(\boldsymbol{z})$ の最適解 $(\boldsymbol{x}^3(\boldsymbol{z}), \boldsymbol{y}^3(\boldsymbol{z}))$ を求めよ。

(iii) 次の命題について、真であれば証明をし、偽であれば反例を与えよ。

- (a) 関数 $p : \mathbb{R}^n \rightarrow \mathbb{R}$ を $p(\boldsymbol{z}) = f(\boldsymbol{x}^1(\boldsymbol{z}), \boldsymbol{z})$ としたとき、関数 $p$ は凸関数である。
- (b) 関数 $q : \mathbb{R}^n \rightarrow \mathbb{R}$ を $q(\boldsymbol{z}) = g(\boldsymbol{x}^2(\boldsymbol{z}), \boldsymbol{z})$ としたとき、関数 $q$ は凸関数である。
- $(c)$  関数 $r : \mathbb{R}^n \rightarrow \mathbb{R}$ を $r(\boldsymbol{z}) = h(\boldsymbol{x}^3(\boldsymbol{z}), \boldsymbol{y}^3(\boldsymbol{z}))$ としたとき、関数 $r$ は凸関数である。

### English Version

## **Kai**
### (i)

$$
\begin{aligned}
\text{P1}(z) &\text{Minimize} &x^\top x - z^\top Ax\\
&\text{subject to} &x^\top x \leq 1\\
\end{aligned}
$$

Lagrantian:

$$
L(x, \lambda) = x^\top x - z^\top Ax - \lambda (x^\top x  -1)
$$

$$
\text{KKT-conditions: } \left\{
\begin{aligned}
(z+2\lambda)x^* -z^\top A &= 0 \\
\lambda   \succeq \boldsymbol{0}, \nu &\succeq \boldsymbol{0} \\
 \lambda \geq 0, (x^*)^2 - 1 &\leq 0 \\
\lambda ((x^*)^2 - 1) &= 0
\end{aligned}
\right.
$$

easy to see $x^{*\top} = \frac{z^\top A}{2}, \lambda = 0$ satisfies KKT-conditions.

$$
x^1(z) = \frac{A^\top z}{2}
$$

### (ii)

$$
\begin{aligned}
\text{P3}(z) &\text{Minimize} &x^\top x + y^\top y\\
&\text{subject to}  &x+y-z =0\\
\end{aligned}
$$

Lagrangian:

$$
L(x,y,\mu) = x^\top x + y^\top y + \mu (x+y - z)
$$

$$
\text{KKT-conditions: } \left\{
\begin{aligned}
2x^* + \mu & = \boldsymbol{0} \\
2y^* + \mu &=  \boldsymbol{0} \\
x^* + y^* - z &= \boldsymbol{0} \\
\end{aligned}
\right.
$$

$x^* = y^* = \frac{1}{2} z , \mu = -\frac{1}{2} z$ satisfies KKT-conditions, and we get minimum $\frac{1}{2} z^\top z$

### (iii)
#### (a)
Let $n = 1$ , then easy to see that the function is not conves.

#### (b)
Easy to see $x_2(z) = -\frac{1}{2} A^\top z$. Then

$$
g(x_2(z),z) = -\frac{1}{4} z^\top AA^\top z + z^\top z
$$

when $-\frac{1}{4} A^\top A + I \prec \boldsymbol{0}$, $q$ is not convex.

#### $(c)$
$h = \frac{1}{2} z^\top z$, obviously, it's convex
