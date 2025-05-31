---
sidebar_label: "2016年8月実施 線形代数"
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2016年8月実施 線形代数

## **Author**
Zero

## **Description**
$1$ 次独立な $n$ 次元ベクトルの組 $\{v_1,v_2,\dots,v_k\} \subseteq R^n$ が張る部分空間 $K$ に対し，写像 $f:K \rightarrow R^k$ を次のように定義する．任意の $x = \sum_{i = 1}^k \alpha_iv_i \in K$ に対し，$f(x) = \begin{pmatrix}\alpha_1 \\ \vdots \\ \alpha_k \\ \end{pmatrix}$.

以下の各問に答えよ．

(1) 任意の $x,y \in K$ に対し，$f(x + y) = f(x) + f(y)$ が成り立つことを示せ．

(2) 任意の $x \in K$, 任意の実数 $c$ に対し，$f(cx) = cf(x)$ が成り立つことを示せ．

(3) $\{x_1,x_2,\dots,x_l\} \subseteq K$ が $1$ 次独立のとき，$\{f(x_1),f(x_2),\dots,f(x_l)\}$ も $1$ 次独立であることを示せ．

## **Kai** 
### (1)
$y = \sum_{i = 1}^K\beta_iv_i \in K$ とする、

$$
\begin{aligned}
x + y &= \sum_{i = 1}^K\alpha_iv_i + \sum_{i = 1}^K\beta_iv_i \\
&= \sum_{i = 1}^K(\alpha_i + \beta_i)v_i
\end{aligned}
$$

$$
\begin{aligned}
f(x + y) = \begin{pmatrix}
\alpha_1 + \beta_1 \\
\vdots \\
\alpha_K + \beta_K
\end{pmatrix} &= \begin{pmatrix}
\alpha_1 \\
\vdots \\
\alpha_K
\end{pmatrix} + \begin{pmatrix}
\beta_1 \\
\vdots \\
\beta_K
\end{pmatrix} \\
&= f(x) + f(y)
\end{aligned}
$$

### (2)

$$
cx = c\sum_{i = 1}^K\alpha_iv_i = \sum_{i = 1}^Kc\alpha_ic_i
$$

$$
f(cx) = \begin{pmatrix}
c\alpha_1 \\
\vdots \\
c\alpha_K
\end{pmatrix} = c\begin{pmatrix}
\alpha_1 \\
\vdots \\
\alpha_K
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
x\sum_{i = 0}^K 0 \cdot v_i = 0
$$

よって、

$$
c_1x_1 + c_2x_2 + \cdots +c_lx_l = 0
$$

$\{x_1,x_2,\dots,x_l\} \subseteq K$ は一次独立であるから、

$$
c_1 = c_2 = \cdots = c_l = 0
$$

よって、$\{f(x_1),f(x_2),\dots,f(x_l)\}$ も一次独立
