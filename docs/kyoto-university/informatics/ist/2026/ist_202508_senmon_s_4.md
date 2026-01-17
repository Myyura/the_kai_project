---
sidebar_label: "2025年8月実施 専門科目 S-4"
tags:
  - Kyoto-University
  - Signal-Processing
---
# 京都大学 情報学研究科 知能情報学専攻 2025年8月実施 専門科目 S-4

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
In the questions below, $(\cdot)^*$, $(\cdot)^{\mathrm{T}}$, and $E[\cdot]$ denote the complex conjugate, the transpose, and the expectation, respectively. $\mathbb{R}$ and $\mathbb{Z}$ denote the set of all real numbers and the set of all integers, respectively.

### Q.1
Let $x(n)$ be a discrete-time signal with the index of $n \in \mathbb{Z}$, and define the $z$-transform of $x(n)$ as
$$ X(z) = \sum_{n=-\infty}^{\infty} x(n)z^{-n}, \quad\quad (*) $$
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