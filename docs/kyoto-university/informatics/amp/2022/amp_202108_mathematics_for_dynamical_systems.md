---
sidebar_label: "2021年8月実施 力学系数学"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Polynomial-Solutions-of-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Wronskian
---
# 京都大学 情報学研究科 数理工学専攻 2021年8月実施 力学系数学

## **Author**
Casablanca, 祭音Myyura

## **Description**
### 日本語版
$a(t), b(t)$ を $t$ のある有理式として次の実微分方程式を考える．

$$
\frac{d^2 x}{dt} + a(t) \frac{dx}{dt} + b(t)x = 0
$$

以下の問いに答えよ．

(i) $k \geqq 1$ をある整数として，$x = t^k$ が式 (1) の解であるための $a(t), b(t)$ に関する必要十分条件を求めよ．

以下では，ある整数 $k \geqq 1$ に対して (i) で求めた条件が成り立つものとし，$\phi(t)$ を $t^k$ と線形独立な解として，

$$
p(t) = t\frac{d \phi}{dt} (t) - k \phi(t)
$$

とおく．

(ii) $a(t), b(t)$ を $p(t)$ を用いて表わせ．

(iii) $p(t) = t$ のとき $a(t), b(t)$ を定めよ．

(iv) 式 (1) のすべての解が定数でない多項式のとき，$a(t), b(t)$ は多項式でないことを示せ．

### English Version


### 题目描述

设 $a(t),b(t)$ 为关于 $t$ 的有理函数，考虑实微分方程

$$
\frac{d^2x}{dt^2}+a(t)\frac{dx}{dt}+b(t)x=0. \tag{1}
$$

回答：

1. 对给定整数 $k\ge1$，求 $x=t^k$ 为 (1) 的解时 $a(t),b(t)$ 所满足的充要条件。

以下假设该条件对某个 $k\ge1$ 成立。令 $\phi(t)$ 为与 $t^k$ 线性无关的另一解，并定义

$$
p(t)=t\frac{d\phi}{dt}(t)-k\phi(t).
$$

继续回答：

2. 用 $p(t)$ 表示 $a(t),b(t)$。
3. 当 $p(t)=t$ 时确定 $a(t),b(t)$。
4. 若 (1) 的每一个解都是非常值多项式，证明 $a(t),b(t)$ 不是多项式。

## **Kai**
### (i)
Substitution of $x=t^k$ gives the necessary and sufficient condition

$$
k(k-1)+kt\,a(t)+t^2b(t)=0.
$$

For $k=1$, this reduces to $a(t)+tb(t)=0$.

### (ii)
Let $\phi(t)=u(t)t^k$, where $u$ is not constant. Then

$$
\phi'(t) = kt^{k-1}u(t) + t^ku'(t)
$$

$$
\phi''(t) = t^ku''(t) + 2kt^{k-1}u'(t) + k(k-1)t^{k-2}u(t)
$$

then

$$
p(t)=t\phi'(t)-k\phi(t)=t^{k+1}u'(t).
$$

Substitution gives

$$
t u''(t) + (2k + a(t)t)u'(t) = 0
$$

Therefore

$$
a(t)=-\frac{u''(t)}{u'(t)}-\frac{2k}{t}
=\frac{1-k}{t}-\frac{p'(t)}{p(t)},
$$

$$
b(t)=-\frac{k(k-1)}{t^2}-\frac{k}{t}a(t)
=\frac{kp'(t)}{tp(t)}.
$$

### (iii)

$$
a(t)=-\frac{k}{t},\qquad b(t)=\frac{k}{t^2}.
$$

### (iv)
Let $x_1$, $x_2$ be 2 independent particular solutions, then

$$
x_1'' = -a(t)x_1' - b(t)x_1 , x_2'' = -a(t)x_2' - b(t)x_2
$$

and we have

$$
\begin{aligned}
    (x_1'x_2 - x_1 x_2')' &= x_1''x_2 - x_1 x_2''\\
&= -a(t)x_1'x_2 + a(t)x_1x_2'\\
&= -a(t)(x_1'x_2 - x_1 x_2')
\end{aligned}
$$

so we get

$$
x_1'x_2-x_1x_2'=Ce^{-\int a(t)dt},\qquad C\ne0.
$$

If $a(t)$ is a polynomial, then

$$
a(t)=-\frac{(x_1'x_2-x_1x_2')'}{x_1'x_2-x_1x_2'}
$$

is both a polynomial and the logarithmic derivative of a nonzero polynomial. Comparing degrees gives $a(t)\equiv0$.

Then, consider

$$
\frac{d^2x}{dt^2} + b(t)x = 0
$$

If $b(t)$ were also a nonzero polynomial and $x$ were a nonzero polynomial solution of degree $m$, then $\deg(bx)\ge m$ while $\deg(x'')\le m-2$, which is impossible. Thus $b(t)\equiv0$. But then $x''=0$ has the constant solution $x=1$, contrary to the hypothesis. Hence $a(t)$ and $b(t)$ cannot both be polynomials.
