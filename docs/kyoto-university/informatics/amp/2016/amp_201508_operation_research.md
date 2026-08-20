---
sidebar_label: "2015年8月実施 オペレーションズ・リサーチ"
tags:
  - Kyoto-University
  - Operations-Research.Convex-Optimization.Karush-Kuhn-Tucker-Conditions
  - Operations-Research.Optimization-Basics.Penalty-Method
---
# 京都大学 情報学研究科 数理工学専攻 2015年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca, 祭音Myyura

## **Description**
### 日本語版
関数 $f : \mathbb{R}^n \rightarrow \mathbb{R}$ は2回連続的微分可能な関数とし、 $\boldsymbol{a}$ は $\boldsymbol{0}$ でない $n$ 次元ベクトルとする。

次の非線形計画問題を考える。

$$
\begin{aligned}
\text{P}: \ &\text{Minimize} &f(\boldsymbol{x}) \\
&\text{subject to} &\boldsymbol{a}^{\top} \boldsymbol{x} = 0
\end{aligned}
$$

ただし、 $\top$ はベクトルの転置を表す。 $x^*$ は問題 P の大域的最適解とする。

さらに、次の非線形計画問題を考える。

$$
\begin{aligned}
\text{P}(k): \ &\text{Minimize} &f_k(\boldsymbol{x}) \\
&\text{subject to} &(\boldsymbol{x} - \boldsymbol{x}^*)^{\top} (\boldsymbol{x} - \boldsymbol{x}^*) \leqq 1
\end{aligned}
$$

ただし、 $k$ は非負の整数であり、 $f_k : \mathbb{R}^n \rightarrow \mathbb{R}$ は以下に定義された関数である。

$$
f_k(\boldsymbol{x}) = f(\boldsymbol{x}) + \frac{k}{2} (\boldsymbol{a}^{\top} \boldsymbol{x})^2 + \frac{1}{2}(\boldsymbol{x} - \boldsymbol{x}^*)^{\top} (\boldsymbol{x} - \boldsymbol{x}^*)
$$

問題 $\text{P}(k)$ の大域的最適解を $\boldsymbol{x}^k$ とする。さらに、 $\lim_{k \to \infty} \boldsymbol{x}^k = \bar{\boldsymbol{x}}$ , $\lim_{k \to \infty} k(\boldsymbol{a}^{\top} \boldsymbol{x}^k) = \bar{\lambda}$ と仮定する。

以下の問いに答えよ。

(i) 任意の非負の整数 $k$ に対して $f_k(\boldsymbol{x}^k) \leqq f(\boldsymbol{x}^*)$ が成り立つことを示せ。

(ii) $\boldsymbol{a}^{\top} \bar{\boldsymbol{x}} = 0$ , $\bar{\boldsymbol{x}} = \boldsymbol{x}^*$ となることを示せ。

(iii) 問題 $\text{P}(k)$ のカルーシュ・キューン・タッカー (Karush-Kuhn-Tucker) 条件を書け。

(iv) 十分大きな $k$ に対して、 $\nabla f_k(\boldsymbol{x}^k) = \boldsymbol{0}$ となることを示せ。

(v) $\nabla f(\boldsymbol{x}^*) + \bar{\lambda} \boldsymbol{a} = \boldsymbol{0}$ となることを示せ。

### English Version

### 题目描述

设 $f:\mathbb R^n\to\mathbb R$ 二阶连续可微，$\boldsymbol a\neq\boldsymbol0$ 是 $n$ 维向量。考虑非线性规划

$$
\begin{aligned}
\mathrm P:\quad \min_{\boldsymbol x}\quad &f(\boldsymbol x)\\
\text{s.t.}\quad &\boldsymbol a^\top\boldsymbol x=0,
\end{aligned}
$$

其中上标 $\top$ 表示转置，$\boldsymbol x^*$ 是问题 $\mathrm P$ 的全局最优解。对每个非负整数 $k$，定义

$$
f_k(\boldsymbol x)
=f(\boldsymbol x)
+\frac{k}{2}(\boldsymbol a^\top\boldsymbol x)^2
+\frac12(\boldsymbol x-\boldsymbol x^*)^\top
(\boldsymbol x-\boldsymbol x^*),
$$

并考虑问题

$$
\begin{aligned}
\mathrm P(k):\quad \min_{\boldsymbol x}\quad &f_k(\boldsymbol x)\\
\text{s.t.}\quad
&(\boldsymbol x-\boldsymbol x^*)^\top
(\boldsymbol x-\boldsymbol x^*)\leq1.
\end{aligned}
$$

令 $\boldsymbol x^k$ 为 $\mathrm P(k)$ 的全局最优解，并假设存在极限

$$
\lim_{k\to\infty}\boldsymbol x^k=\bar{\boldsymbol x},
\qquad
\lim_{k\to\infty}k(\boldsymbol a^\top\boldsymbol x^k)=\bar\lambda.
$$

完成以下各问：

1. 证明对任意非负整数 $k$，

   $$
   f_k(\boldsymbol x^k)\leq f(\boldsymbol x^*).
   $$

2. 证明

   $$
   \boldsymbol a^\top\bar{\boldsymbol x}=0,
   \qquad
   \bar{\boldsymbol x}=\boldsymbol x^*.
   $$

3. 写出问题 $\mathrm P(k)$ 的 Karush–Kuhn–Tucker（KKT）条件。
4. 证明当 $k$ 充分大时，

   $$
   \nabla f_k(\boldsymbol x^k)=\boldsymbol0.
   $$

5. 证明

   $$
   \nabla f(\boldsymbol x^*)+\bar\lambda\boldsymbol a=\boldsymbol0.
   $$

## **Kai**
### (i)

$$
f_k(x^k) \leq f_k(x^*) = f(x^*) + \frac k2 (a^\top x^*)^2 = f(x^*)
$$

### (ii)
The assumed finite limit of $k(a^\top x^k)$ gives $a^\top x^k\to0$. Hence, by $x^k\to\bar x$,

$$
a^\top\bar x=0.
$$

Moreover, (i) and the nonnegativity of the penalty term imply

$$
f(x^k)+\frac12\|x^k-x^*\|^2\leq f_k(x^k)\leq f(x^*).
$$

Taking limits gives

$$
f(\bar{x}) + \frac 12 (\bar{x} - x^*)^\top(\bar{x} - x^*) \leq f(x^*)
$$

since $x^*$ is optimal, we have

$$
f(\bar{x}) \geq f(x^*)
$$

thus

$$
f(x^*) = f(\bar{x}), \text{and } \bar{x}=x^*
$$

### (iii)
Lagrangian

$$
L(x, \lambda_k) = f(x) + \frac k2 (a^\top x)^2 + (\frac 12 + \lambda_k)(x-x^*)^\top (x-x^*) - \lambda_k
$$

$$
\text{KKT-conditions:} \left\{
\begin{aligned}
\nabla f(x^k) + k(a^\top x^k)a + (1+2\lambda_k)(x^k-x^*) & = \boldsymbol{0}, \\
\lambda_k &\geq 0, \\
\|x^k-x^*\|^2-1 &\leq 0, \\
\lambda_k(\|x^k-x^*\|^2-1)&=0.
\end{aligned}
\right.
$$

### (iv)

$$
\nabla f(x^k)+k(a^\top x^k)a+(1+2\lambda_k)(x^k-x^*)=0
$$

and

$$
\lambda_k \geq 0,\qquad \lambda_k(\|x^k-x^*\|^2-1) = 0.
$$

when $k$ is sufficiently large, we have

$$
(x^k - x^*)^\top (x^k - x^*)<1
$$

then

$$
\lambda_k = 0
$$

thus

$$
\nabla f_k(x^k)=\nabla f(x^k)+k(a^\top x^k)a+x^k-x^*=0.
$$

### (v)

$$
\lim_{k \to \infty}x^k = x^*
$$

From (iv),

$$
\nabla f(x^k)+k(a^\top x^k)a+x^k-x^*=0.
$$

let $k \to \infty$ , we get

$$
\nabla f(x^*) + a \bar{\lambda} = 0
$$
