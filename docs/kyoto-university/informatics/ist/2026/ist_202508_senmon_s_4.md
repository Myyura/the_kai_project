---
sidebar_label: 2025年8月実施 専門科目 S-4
tags:
  - Kyoto-University
  - Electrical-Electronic.Signal-Processing.Z-Transform
  - Electrical-Electronic.Signal-Processing.Wiener-Filter
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Mean-Squared-Error
---
# 京都大学 情報学研究科 知能情報学専攻 2025年8月実施 専門科目 S-4

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
In the questions below, $(\cdot)^*$, $(\cdot)^{\mathrm{T}}$, and $E[\cdot]$ denote the complex conjugate, the transpose, and the expectation, respectively. $\mathbb{R}$ and $\mathbb{Z}$ denote the set of all real numbers and the set of all integers, respectively.

### Q.1
Let $x(n)$ be a discrete-time signal with the index of $n \in \mathbb{Z}$, and define the $z$-transform of $x(n)$ as

$$
X(z) = \sum_{n=-\infty}^{\infty} x(n)z^{-n}, \quad\quad (*)
$$

where $z$ is a complex variable. Moreover, define the region of convergence of the $z$-transform $X(z)$ as a set of $z$ such that the series in the right-hand side of Eq. $(*)$ is absolutely convergent. Answer the following questions.

(1) Derive the $z$-transform and its region of convergence of a discrete-time signal

$$ 
x_1(n) = \begin{cases} a^n & n \geq 0 \\ 0 & n < 0 \end{cases}, 
$$

where $a \in \mathbb{R}$ and $a^0 = 1$.

(2) Derive the discrete-time signal $x_2(n)$, whose $z$-transform is given by

$$ 
X_2(z) = \frac{1}{\left(1 - \frac{1}{4}z^{-1}\right) \left(1 - \frac{1}{2}z^{-1}\right)}, 
$$

where the region of convergence is $\frac{1}{4} < |z| < \frac{1}{2}$.

(3) Assume that the $z$-transform and its region of convergence of a discrete-time signal $x_3(n)$ are given by $X_3(z)$ and $\mathcal{R}_3$, respectively. Express the $z$-transform of a discrete-time signal $x_3^*(n - k)$ for some $k \in \mathbb{Z}$ using $X_3(z)$. Moreover, answer whether the region of convergence of the $z$-transform of $x_3^*(n - k)$ is identical to $\mathcal{R}_3$ or not with reasons.

### Q.2
Consider a filter of $N$ taps, whose output signal with the index of $n \in \mathbb{Z}$ is given by

$$
y(n) = \boldsymbol{x}^{\mathrm{T}}(n)\boldsymbol{h}, 
$$

where

$$
\boldsymbol{x}(n) = [x(n) \ x(n - 1) \ \dots \ x(n - N + 1)]^{\mathrm{T}} \in \mathbb{R}^N,\\
\boldsymbol{h} = [h(0) \ h(1) \ \dots \ h(N - 1)]^{\mathrm{T}} \in \mathbb{R}^N 
$$

are the input signal vector and the filter coefficient vector, respectively. Let the input signal $x(n)$ and the desired signal $d(n)$ be real-valued wide-sense stationary discrete-time random processes. We assume that $E[\boldsymbol{x}(n)\boldsymbol{x}^{\mathrm{T}}(n)]$, $E[d(n)\boldsymbol{x}(n)]$, and $E[d^2(n)]$ can be expressed as $\boldsymbol{R} = E[\boldsymbol{x}(n)\boldsymbol{x}^{\mathrm{T}}(n)]$, $\boldsymbol{p} = E[d(n)\boldsymbol{x}(n)]$, and $\sigma^2 = E[d^2(n)]$, respectively.

Moreover, we define the mean-squared error between $y(n)$ and $d(n)$ as

$$ 
J(\boldsymbol{h}) = E \left[ \{d(n) - y(n)\}^2 \right]. 
$$

Answer the following questions.

(1) Express $J(\boldsymbol{h})$ using $\boldsymbol{R}, \boldsymbol{p}, \sigma^2$, and $\boldsymbol{h}$.

(2) Derive the equation that the filter coefficient vector $\boldsymbol{h}$ satisfies to minimize $J(\boldsymbol{h})$ (Wiener-Hopf equation).

### 题目描述

以下 $(\cdot)^*$、$(\cdot)^{\mathrm T}$ 与 $E[\cdot]$ 分别表示复共轭、转置和期望；$\mathbb R$ 与 $\mathbb Z$ 分别表示实数集与整数集。

1. 设 $x(n)$ 为下标 $n\in\mathbb Z$ 的离散时间信号，其 $z$ 变换定义为

   $$
   X(z)=\sum_{n=-\infty}^{\infty}x(n)z^{-n},\tag{*}
   $$

   其中 $z$ 是复变量。$X(z)$ 的收敛域定义为使式 $(*)$ 右端级数绝对收敛的所有 $z$ 构成的集合。

   （1）求离散时间信号

   $$
   x_1(n)=
   \begin{cases}
   a^n & (n\geq0),\\
   0 & (n<0),
   \end{cases}
   $$

   的 $z$ 变换及其收敛域，其中 $a\in\mathbb R$ 且 $a^0=1$。

   （2）已知

   $$
   X_2(z)=
   \frac{1}
   {\left(1-\frac14z^{-1}\right)
    \left(1-\frac12z^{-1}\right)}
   $$

   的收敛域为

   $$
   \frac14<|z|<\frac12,
   $$

   求其对应的离散时间信号 $x_2(n)$。

   （3）设离散时间信号 $x_3(n)$ 的 $z$ 变换及其收敛域分别为 $X_3(z)$ 和 $\mathcal R_3$。对任意 $k\in\mathbb Z$，用 $X_3(z)$ 表示 $x_3^*(n-k)$ 的 $z$ 变换；并说明该变换的收敛域是否与 $\mathcal R_3$ 相同及其理由。

2. 考虑一个 $N$ 抽头滤波器，其输出为

   $$
   y(n)=\boldsymbol{x}^{\mathrm T}(n)\boldsymbol h,\qquad n\in\mathbb Z,
   $$

   其中输入信号向量和滤波器系数向量分别为

   $$
   \boldsymbol{x}(n)
   =[x(n)\ \ x(n-1)\ \ \cdots\ \ x(n-N+1)]^{\mathrm T}\in\mathbb R^N,
   $$

   $$
   \boldsymbol h
   =[h(0)\ \ h(1)\ \ \cdots\ \ h(N-1)]^{\mathrm T}\in\mathbb R^N.
   $$

   设输入信号 $x(n)$ 与期望信号 $d(n)$ 是实值广义平稳离散时间随机过程，并记

   $$
   \boldsymbol R
   =E[\boldsymbol{x}(n)\boldsymbol{x}^{\mathrm T}(n)],\qquad
   \boldsymbol p
   =E[d(n)\boldsymbol{x}(n)],\qquad
   \sigma^2=E[d^2(n)].
   $$

   输出 $y(n)$ 与期望信号 $d(n)$ 之间的均方误差定义为

   $$
   J(\boldsymbol h)
   =E\!\left[\{d(n)-y(n)\}^2\right].
   $$

   （1）用 $\boldsymbol R,\boldsymbol p,\sigma^2,\boldsymbol h$ 表示 $J(\boldsymbol h)$。

   （2）推导使 $J(\boldsymbol h)$ 最小的滤波器系数向量 $\boldsymbol h$ 所满足的方程，即 Wiener–Hopf 方程。

#### 考点

- **双边 $z$ 变换与收敛域**：根据右边、左边序列形式确定有理变换对应的环形收敛域。
- **移位与共轭性质**：推导时间移位、复共轭对 $z$ 变换表达式和收敛域的影响。
- **Wiener 滤波**：展开均方误差的二次型并对系数向量求梯度。
- **Wiener–Hopf 方程**：利用输入自相关矩阵和互相关向量刻画最小均方误差解。
