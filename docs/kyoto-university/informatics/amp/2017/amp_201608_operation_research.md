---
sidebar_label: "2016年8月実施 オペレーションズ・リサーチ"
tags:
  - Kyoto-University
  - Operations-Research.Nonlinear-Optimization.Quadratic-Programming
  - Operations-Research.Convex-Optimization.Karush-Kuhn-Tucker-Conditions
  - Operations-Research.Optimization-Basics.Parametric-Optimization-and-Value-Function
---
# 京都大学 情報学研究科 数理工学専攻 2016年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca, 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/pukiwiki/amptest-e/index.php?file=h29_exam.pdf&pcmd=open&plugin=attach&refer=Entrance+Examination+Information)
### 日本語版
$\boldsymbol{A}$ を $n \times n$ の正定値対称行列とする。
さらに、関数 $f: \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}$ , $g: \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}$ , $h: \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}$ を以下のように定義する。

$$
\begin{aligned}
f(\boldsymbol{x}, \boldsymbol{z}) &= - \boldsymbol{x}^{\top} \boldsymbol{x} + \boldsymbol{z}^{\top} \boldsymbol{A} \boldsymbol{x} \\
g(\boldsymbol{x}, \boldsymbol{z}) &=  \boldsymbol{x}^{\top} \boldsymbol{x} + \boldsymbol{z}^{\top} \boldsymbol{A} \boldsymbol{x} + \boldsymbol{z}^{\top} \boldsymbol{z} \\
h(\boldsymbol{x}, \boldsymbol{y}) &= \boldsymbol{x}^{\top} \boldsymbol{x} + \boldsymbol{y}^{\top} \boldsymbol{y}
\end{aligned}
$$

ただし、 $\top$ は転置記号である。

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

ただし、 $\text{P1}(\boldsymbol{z})$ と $\text{P2}(\boldsymbol{z})$ の決定変数は $\boldsymbol{x} \in \mathbb{R}^n$ であり、 $\text{P3}(\boldsymbol{z})$ の決定変数は $(\boldsymbol{x}, \boldsymbol{y}) \in \mathbb{R}^n \times \mathbb{R}^n$ である。

任意のパラメータ $\boldsymbol{z} \in \mathbb{R}^n$ に対して $\text{P1}(\boldsymbol{z})$ , $\text{P2}(\boldsymbol{z})$ , $\text{P3}(\boldsymbol{z})$ は唯一の最適解をもつ。
$\text{P1}(\boldsymbol{z})$ , $\text{P2}(\boldsymbol{z})$ , $\text{P3}(\boldsymbol{z})$ の最適解をそれぞれ $\boldsymbol{x}^1(\boldsymbol{z})$ , $\boldsymbol{x}^2(\boldsymbol{z})$ , $(\boldsymbol{x}^3(\boldsymbol{z}), \boldsymbol{y}^3(\boldsymbol{z}))$ とする。

以下の問いに答えよ。

(i) $\boldsymbol{z}^\top \boldsymbol{A}^{\top} \boldsymbol{A} \boldsymbol{z} \leqq 4$ とする。
カルーシュ・キューン・タッカー (Karush-Kuhn-Tucker) 条件を用いて $\text{P1}(\boldsymbol{z})$ の最適解 $\boldsymbol{x}^1(\boldsymbol{z})$ を求めよ。( $\text{P1}(\boldsymbol{z})$ が最大化問題であることに注意すること。)

(ii) カルーシュ・キューン・タッカー条件を用いて $\text{P3}(\boldsymbol{z})$ の最適解 $(\boldsymbol{x}^3(\boldsymbol{z}), \boldsymbol{y}^3(\boldsymbol{z}))$ を求めよ。

(iii) 次の命題について、真であれば証明をし、偽であれば反例を与えよ。

- (a) 関数 $p : \mathbb{R}^n \rightarrow \mathbb{R}$ を $p(\boldsymbol{z}) = f(\boldsymbol{x}^1(\boldsymbol{z}), \boldsymbol{z})$ としたとき、関数 $p$ は凸関数である。
- (b) 関数 $q : \mathbb{R}^n \rightarrow \mathbb{R}$ を $q(\boldsymbol{z}) = g(\boldsymbol{x}^2(\boldsymbol{z}), \boldsymbol{z})$ としたとき、関数 $q$ は凸関数である。
- $(c)$  関数 $r : \mathbb{R}^n \rightarrow \mathbb{R}$ を $r(\boldsymbol{z}) = h(\boldsymbol{x}^3(\boldsymbol{z}), \boldsymbol{y}^3(\boldsymbol{z}))$ としたとき、関数 $r$ は凸関数である。

### English Version

### 题目描述

设 $\boldsymbol A$ 是 $n\times n$ 正定对称矩阵。定义

$$
\begin{aligned}
f(\boldsymbol x,\boldsymbol z)
&=-\boldsymbol x^\top\boldsymbol x+
\boldsymbol z^\top\boldsymbol A\boldsymbol x,\\
g(\boldsymbol x,\boldsymbol z)
&=\boldsymbol x^\top\boldsymbol x+
\boldsymbol z^\top\boldsymbol A\boldsymbol x+
\boldsymbol z^\top\boldsymbol z,\\
h(\boldsymbol x,\boldsymbol y)
&=\boldsymbol x^\top\boldsymbol x+\boldsymbol y^\top\boldsymbol y,
\end{aligned}
$$

其中上标 $\top$ 表示转置。对参数 $\boldsymbol z\in\mathbb R^n$，考虑三个优化问题：

$$
\begin{aligned}
\mathrm{P1}(\boldsymbol z):\quad
\max_{\boldsymbol x\in\mathbb R^n}\quad
&f(\boldsymbol x,\boldsymbol z)
&&\text{s.t.}\quad \boldsymbol x^\top\boldsymbol x\leq1,\\
\mathrm{P2}(\boldsymbol z):\quad
\min_{\boldsymbol x\in\mathbb R^n}\quad
&g(\boldsymbol x,\boldsymbol z),\\
\mathrm{P3}(\boldsymbol z):\quad
\min_{(\boldsymbol x,\boldsymbol y)\in\mathbb R^n\times\mathbb R^n}\quad
&h(\boldsymbol x,\boldsymbol y)
&&\text{s.t.}\quad \boldsymbol x+\boldsymbol y=\boldsymbol z.
\end{aligned}
$$

已知对任意 $\boldsymbol z\in\mathbb R^n$，三个问题都各有唯一最优解，依次记为

$$
\boldsymbol x^1(\boldsymbol z),\qquad
\boldsymbol x^2(\boldsymbol z),\qquad
\bigl(\boldsymbol x^3(\boldsymbol z),\boldsymbol y^3(\boldsymbol z)\bigr).
$$

完成以下各问：

1. 在

   $$
   \boldsymbol z^\top\boldsymbol A^\top\boldsymbol A\boldsymbol z\leq4
   $$

   的条件下，利用 Karush–Kuhn–Tucker（KKT）条件求 $\mathrm{P1}(\boldsymbol z)$ 的最优解 $\boldsymbol x^1(\boldsymbol z)$；注意该问题是最大化问题。
2. 利用 KKT 条件求 $\mathrm{P3}(\boldsymbol z)$ 的最优解

   $$
   \bigl(\boldsymbol x^3(\boldsymbol z),\boldsymbol y^3(\boldsymbol z)\bigr).
   $$

3. 分别判断下列命题的真伪；若为真则证明，若为假则给出反例：
   1. 令

      $$
      p(\boldsymbol z)=f\bigl(\boldsymbol x^1(\boldsymbol z),\boldsymbol z\bigr),
      $$

      则 $p:\mathbb R^n\to\mathbb R$ 是凸函数。
   2. 令

      $$
      q(\boldsymbol z)=g\bigl(\boldsymbol x^2(\boldsymbol z),\boldsymbol z\bigr),
      $$

      则 $q:\mathbb R^n\to\mathbb R$ 是凸函数。
   3. 令

      $$
      r(\boldsymbol z)
      =h\bigl(\boldsymbol x^3(\boldsymbol z),\boldsymbol y^3(\boldsymbol z)\bigr),
      $$

      则 $r:\mathbb R^n\to\mathbb R$ 是凸函数。

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
L(x, \lambda) = x^\top x - z^\top Ax + \lambda (x^\top x  -1)
$$

$$
\text{KKT-conditions: } \left\{
\begin{aligned}
2(1+\lambda)x^* -A^\top z &= 0, \\
\lambda &\geq 0, \\
(x^*)^\top x^* - 1 &\leq 0, \\
\lambda ((x^*)^\top x^* - 1) &= 0.
\end{aligned}
\right.
$$

Since $\|A^\top z\|^2=z^\top AA^\top z=z^\top A^\top Az\leq4$, $x^*=A^\top z/2$ is feasible and, with $\lambda=0$, satisfies the KKT conditions.

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
L(x,y,\mu) = x^\top x + y^\top y + \mu^\top (x+y - z)
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

$x^* = y^* = \frac{1}{2} z , \mu = -z$ satisfies the KKT conditions, and the minimum is $\frac{1}{2} z^\top z$.

### (iii)
#### (a)
The statement is true. For each feasible $x$, $-x^\top x+z^\top Ax$ is affine in $z$. Therefore,

$$
p(z)=\max_{x^\top x\leq1}\{-x^\top x+z^\top Ax\}
$$

is the pointwise supremum of affine functions and hence is convex.

#### (b)
The statement is false. We have $x^2(z) = -\frac{1}{2} A^\top z$, and hence

$$
q(z) = -\frac{1}{4} z^\top AA^\top z + z^\top z.
$$

For example, $A=3I$ is positive definite and gives $q(z)=-\frac54 z^\top z$, which is not convex.

#### $(c)$
$h = \frac{1}{2} z^\top z$ , obviously, it's convex
