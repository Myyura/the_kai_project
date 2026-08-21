---
sidebar_label: "2011年8月実施 オペレーションズ・リサーチ"
tags:
  - Kyoto-University
  - Operations-Research.Convex-Optimization.Karush-Kuhn-Tucker-Conditions
---
# 京都大学 情報学研究科 数理工学専攻 2011年8月実施 オペレーションズ・リサーチ

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

つぎの凸2次計画問題を考える。

P: $\text{Minimize } \frac{1}{2}x^T A x$
$\text{subject to } a^T x = b$

ただし、 $\ A$ は $n \times n$ 正定値対称行列、 $a$ は $0$ でない $n$ 次元ベクトル、 $b$ はスカラーであり、 $\ ^T$ はベクトルの転置を表す。この問題は唯一の最適解 $x^*$ をもつ。
$\mathbb{R}_+ = \{ t \in \mathbb{R} \mid t \geq 0 \}$ とする。パラメータ $\lambda \in \mathbb{R}$ と $\rho \in \mathbb{R}_+$ を含むつぎの制約なし最小化問題を考える。

P( $\lambda, \rho$ ): $\text{Minimize } \frac{1}{2}x^T A x + \lambda(a^T x - b) + \rho (a^T x - b)^2$
$\text{subject to } x \in \mathbb{R}^n$

任意の $\lambda \in \mathbb{R}$ と $\rho \in \mathbb{R}_+$ に対して問題 P( $\lambda, \rho$ ) は唯一の最適解 $\bar{x}(\lambda, \rho)$ をもつ。

以下の問いに答えよ。

(i) 問題 P のカルーシュ・キューン・タッカー (Karush-Kuhn-Tucker) 条件を用いて $x^*$ を求めよ。

(ii) $\bar{x}(\lambda, \rho)$ を求めよ。

(iii) パラメータ $\lambda^* \in \mathbb{R}$ は $A x^* + \lambda^* a = 0$ を満たすとする。このとき任意の $\rho \in \mathbb{R}_+$ に対して $\bar{x}(\lambda^*, \rho) = x^*$ となることを示せ。

(iv) 任意の $\lambda \in \mathbb{R}$ と $\rho \in \mathbb{R}_+$ に対して、次の不等式が成り立つことを示せ。

$\frac{1}{2} (x^*)^T A x^* \geq \frac{1}{2} \bar{x}(\lambda, \rho)^T A \bar{x}(\lambda, \rho) + \lambda (a^T \bar{x}(\lambda, \rho) - b) + \rho (a^T \bar{x}(\lambda, \rho) - b)^2$

(v) 任意の $\lambda \in \mathbb{R}$ に対して, $\lim_{\rho \to \infty} \bar{x}(\lambda, \rho)$ は存在することが知られている。パラメータ $\lambda$ の値に関わらず, $\lim_{\rho \to \infty} \bar{x}(\lambda, \rho) = x^*$ となることを示せ。

### 题目描述

考虑凸二次规划

$$
\begin{aligned}
P:\quad \min_x\quad &\frac12x^TAx\\
\text{s.t.}\quad &a^Tx=b,
\end{aligned}
$$

其中 $A$ 是 $n\times n$ 正定对称矩阵，$a$ 是非零的 $n$ 维向量，$b$ 是标量，上标 $T$ 表示转置。已知该问题有唯一最优解 $x^*$。

记 $\mathbb R_+=\{t\in\mathbb R\mid t\geq0\}$。对参数 $\lambda\in\mathbb R$、$\rho\in\mathbb R_+$，再考虑无约束最小化问题

$$
\begin{aligned}
P(\lambda,\rho):\quad \min_{x\in\mathbb R^n}\quad
\frac12x^TAx+\lambda(a^Tx-b)+\rho(a^Tx-b)^2.
\end{aligned}
$$

已知对任意 $\lambda\in\mathbb R$、$\rho\geq0$，$P(\lambda,\rho)$ 都有唯一最优解 $\bar x(\lambda,\rho)$。完成以下各问：

1. 利用问题 $P$ 的 Karush–Kuhn–Tucker（KKT）条件求 $x^*$。
2. 求 $\bar x(\lambda,\rho)$。
3. 设参数 $\lambda^*\in\mathbb R$ 满足

   $$
   Ax^*+\lambda^*a=0.
   $$

   证明对任意 $\rho\in\mathbb R_+$，都有

   $$
   \bar x(\lambda^*,\rho)=x^*.
   $$

4. 证明对任意 $\lambda\in\mathbb R$、$\rho\in\mathbb R_+$，

   $$
   \frac12(x^*)^TAx^*
   \geq
   \frac12\bar x(\lambda,\rho)^TA\bar x(\lambda,\rho)
   +\lambda\bigl(a^T\bar x(\lambda,\rho)-b\bigr)
   +\rho\bigl(a^T\bar x(\lambda,\rho)-b\bigr)^2.
   $$

5. 已知对任意 $\lambda\in\mathbb R$，极限 $\lim_{\rho\to\infty}\bar x(\lambda,\rho)$ 存在。证明无论 $\lambda$ 取何值，

   $$
   \lim_{\rho\to\infty}\bar x(\lambda,\rho)=x^*.
   $$

## **Kai**

$\gamma=a^TA^{-1}a$ とおく。 $A$ は正定値で $a\ne0$ なので $\gamma>0$ である。

**(i)** ラグランジアン

$$
L(x,\lambda)=\frac12x^TAx+\lambda(a^Tx-b)
$$

の KKT 条件は

$$
Ax^*+\lambda^*a=0,\qquad a^Tx^*=b.
$$

第1式から $x^*=-\lambda^*A^{-1}a$ であり、第2式より $-\lambda^*\gamma=b$ である。従って

$$
\boxed{\lambda^*=-\frac b\gamma,\qquad
x^*=\frac b\gamma A^{-1}a}.
$$

**(ii)** $P(\lambda,\rho)$ の目的関数の Hessian は

$$
A+2\rho aa^T
$$

であり正定値なので、停留点が唯一の最適解である。停留条件は

$$
A\bar x+\lambda a+2\rho(a^T\bar x-b)a=0.
$$

$A^{-1}a$ の係数を解くと

$$
\boxed{\bar x(\lambda,\rho)
=\frac{2\rho b-\lambda}{1+2\rho\gamma}\,A^{-1}a}.
$$

実際、

$$
a^T\bar x-b=-\frac{\lambda\gamma+b}{1+2\rho\gamma}
$$

を停留条件へ代入すれば確認できる。

**(iii)** $\lambda^*=-b/\gamma$ を (ii) に代入すると

$$
\bar x(\lambda^*,\rho)
=\frac{2\rho b+b/\gamma}{1+2\rho\gamma}A^{-1}a
=\frac b\gamma A^{-1}a=x^*.
$$

これは任意の $\rho\geq0$ で成立する。

**(iv)** $x^*$ は $a^Tx^*-b=0$ を満たすので、 $P(\lambda,\rho)$ の目的関数を $F_{\lambda,\rho}$ と書けば

$$
F_{\lambda,\rho}(x^*)=\frac12(x^*)^TAx^*.
$$

$\bar x(\lambda,\rho)$ は $F_{\lambda,\rho}$ の大域的最小解であるから

$$
\boxed{
\frac12(x^*)^TAx^*
\geq
\frac12\bar x^TA\bar x
+\lambda(a^T\bar x-b)
+\rho(a^T\bar x-b)^2}.
$$

**(v)** (ii) の閉形式から、 $\lambda$ の値に関係なく

$$
\lim_{\rho\to\infty}
\frac{2\rho b-\lambda}{1+2\rho\gamma}
=\frac b\gamma.
$$

従って

$$
\boxed{\lim_{\rho\to\infty}\bar x(\lambda,\rho)
=\frac b\gamma A^{-1}a=x^*}.
$$
