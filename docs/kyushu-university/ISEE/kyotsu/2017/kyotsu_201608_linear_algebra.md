---
sidebar_label: 2016年8月実施 線形代数
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Linear-Transformation
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Vector-Space-and-Subspace
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2016年8月実施 線形代数

## **Author**
Zero, 祭音Myyura

## **Description**

> 出典：九州大学[公式問題](https://web.archive.org/web/20211018003806id_/https://www.isee.kyushu-u.ac.jp/script/wordpress/wp-content/uploads/H29infait.pdf#page=3)。
$1$ 次独立な $n$ 次元ベクトルの組 $\{v_1,v_2,\dots,v_k\} \subseteq R^n$ が張る部分空間 $K$ に対し，写像 $f:K \rightarrow R^k$ を次のように定義する．任意の $x = \sum_{i = 1}^k \alpha_iv_i \in K$ に対し， $f(x) = \begin{pmatrix}\alpha_1 \\ \vdots \\ \alpha_k \\ \end{pmatrix}$ .

以下の各問に答えよ．

(1) 任意の $x,y \in K$ に対し， $f(x + y) = f(x) + f(y)$ が成り立つことを示せ．

(2) 任意の $x \in K$ , 任意の実数 $c$ に対し， $f(cx) = cf(x)$ が成り立つことを示せ．

(3) $\{x_1,x_2,\dots,x_l\} \subseteq K$ が $1$ 次独立のとき， $\{f(x_1),f(x_2),\dots,f(x_l)\}$ も $1$ 次独立であることを示せ．

### 题目描述

设

$$
\{v_1,v_2,\ldots,v_k\}\subseteq\mathbb R^n
$$

是一组线性无关的 $n$ 维向量，令 $K$ 为它们张成的子空间。由于线性无关，每个 $x\in K$ 都能唯一写成

$$
x=\sum_{i=1}^k\alpha_iv_i\in K,
$$

据此定义坐标映射

$$
f:K\to\mathbb R^k,\qquad
f(x)=\begin{pmatrix}\alpha_1\\ \vdots\\ \alpha_k\end{pmatrix}.
$$

回答下列问题：

1. 证明对任意 $x,y\in K$，有

   $$
   f(x+y)=f(x)+f(y).
   $$

2. 证明对任意 $x\in K$ 和任意实数 $c$，有

   $$
   f(cx)=cf(x).
   $$

3. 证明若 $\{x_1,x_2,\ldots,x_l\}\subseteq K$ 线性无关，则

   $$
   \{f(x_1),f(x_2),\ldots,f(x_l)\}
   $$

   也线性无关。

## **Kai**
### (1)
$y = \sum_{i = 1}^k\beta_iv_i \in K$ とする、

$$
\begin{aligned}
x + y &= \sum_{i = 1}^k\alpha_iv_i + \sum_{i = 1}^k\beta_iv_i \\
&= \sum_{i = 1}^k(\alpha_i + \beta_i)v_i
\end{aligned}
$$

$$
\begin{aligned}
f(x + y) = \begin{pmatrix}
\alpha_1 + \beta_1 \\
\vdots \\
\alpha_k + \beta_k
\end{pmatrix} &= \begin{pmatrix}
\alpha_1 \\
\vdots \\
\alpha_k
\end{pmatrix} + \begin{pmatrix}
\beta_1 \\
\vdots \\
\beta_k
\end{pmatrix} \\
&= f(x) + f(y)
\end{aligned}
$$

### (2)

$$
cx = c\sum_{i = 1}^k\alpha_iv_i = \sum_{i = 1}^kc\alpha_iv_i
$$

$$
f(cx) = \begin{pmatrix}
c\alpha_1 \\
\vdots \\
c\alpha_k
\end{pmatrix} = c\begin{pmatrix}
\alpha_1 \\
\vdots \\
\alpha_k
\end{pmatrix} = cf(x)
$$

### (3)

$$
c_1f(x_1) + c_2f(x_2) + \cdots + c_lf(x_l) = 0 \Leftrightarrow f(c_1x_1 + c_2x_2 + \cdots + c_lx_l) = 0
$$

$f(x) = 0$ となるには、

$$
f(x) = \begin{pmatrix}
0 \\ \vdots \\0
\end{pmatrix} \Leftrightarrow
x=\sum_{i = 1}^k 0\cdot v_i=0
$$

よって、

$$
c_1x_1 + c_2x_2 + \cdots +c_lx_l = 0
$$

$\{x_1,x_2,\dots,x_l\} \subseteq K$ は一次独立であるから、

$$
c_1 = c_2 = \cdots = c_l = 0
$$

よって、 $\{f(x_1),f(x_2),\dots,f(x_l)\}$ も一次独立
