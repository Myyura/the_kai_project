---
sidebar_label: "2022年2月実施 线性代数"
tags:
  - Saitama-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2022年2月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

1. 次の行列 $A$ について考える. [Consider the following matrix $A$ .]

$$
A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ a & 1 & 5 \end{pmatrix}
$$

以下の問に答えよ. [Solve the following problems.]

(a) 行列 $A$ が相異なる3つの実数の固有値を持つための $a$ の条件を求めよ. [Find the condition of $a$ so that matrix $A$ has three distinct real eigenvalues.]

(b) $a = 12$ のとき、行列 $A$ の3つの固有値と、それぞれに対応する固有ベクトルを求めよ. [Find the three eigenvalues and their corresponding eigenvectors of matrix $A$ when $a = 12$ .]

(c) $a = 12$ のとき、 $A^3$ を求めよ. なお、Cayley-Hamilton の定理を用いてもよい. [Find $A^3$ when $a = 12$ . The Cayley-Hamilton theorem can be applied.]

(d) $a = 12$ のとき、 $A^{-1}$ を求めよ. なお、Cayley-Hamilton の定理を用いてもよい. [Find $A^{-1}$ when $a = 12$ . The Cayley-Hamilton theorem can be applied.]

(e) $a = 12$ のとき、 $A^n$ ( $n = 1, 2, \dots$ ) を求めよ. [Find $A^n$ ( $n = 1, 2, \dots$ ) when $a = 12$ .]

### 题目描述

1. 考虑矩阵

$$
A=\begin{pmatrix}
1&0&1\\
0&2&0\\
a&1&5
\end{pmatrix}.
$$

回答下列问题。

(a) 求使矩阵 $A$ 具有三个互不相同的实特征值时，参数 $a$ 应满足的条件。

(b) 当 $a=12$ 时，求矩阵 $A$ 的三个特征值及分别对应的特征向量。

(c) 当 $a=12$ 时，求 $A^3$。可以使用 Cayley–Hamilton 定理。

(d) 当 $a=12$ 时，求 $A^{-1}$。可以使用 Cayley–Hamilton 定理。

(e) 当 $a=12$ 时，对

$$
n=1,2,\dots,
$$

求 $A^n$。

## **Kai**

(a)
The characteristic polynomial of $A$ is given by

$$
\begin{aligned}
det(A - \lambda I) &= \begin{vmatrix} 1 - \lambda & 0 & 1 \\ 0 & 2 - \lambda & 0 \\ a & 1 & 5 - \lambda \end{vmatrix} \\
&= (2 - \lambda) \begin{vmatrix} 1 - \lambda & 1 \\ a & 5 - \lambda \end{vmatrix} \\
&= (2 - \lambda) [(1 - \lambda)(5 - \lambda) - a] \\
&= (2 - \lambda) [\lambda^2 - 6\lambda + 5 - a]
\end{aligned}
$$

For three distinct real eigenvalues, we need $\lambda = 2$ and $\lambda^2 - 6\lambda + 5 - a = 0$ to have two distinct real roots that are different from 2.
So, $\lambda^2 - 6\lambda + 5 - a = 0$ must have discriminant greater than 0, and $\lambda = 2$ cannot be a root.
So, $(-6)^2 - 4(1)(5 - a) > 0$ and $2^2 - 6(2) + 5 - a \neq 0$ .
$36 - 20 + 4a > 0 \implies 16 + 4a > 0 \implies a > -4$ .
$4 - 12 + 5 - a \neq 0 \implies -3 - a \neq 0 \implies a \neq -3$ .
Therefore, the condition is $a > -4$ and $a \neq -3$ .

(b) When $a = 12$ , the characteristic polynomial is
$(2 - \lambda)(\lambda^2 - 6\lambda + 5 - 12) = (2 - \lambda)(\lambda^2 - 6\lambda - 7) = (2 - \lambda)(\lambda - 7)(\lambda + 1)$ .
So the eigenvalues are $\lambda_1 = -1, \lambda_2 = 2, \lambda_3 = 7$ .

For $\lambda_1 = -1$ , we have
$A - \lambda_1 I = \begin{pmatrix} 2 & 0 & 1 \\ 0 & 3 & 0 \\ 12 & 1 & 6 \end{pmatrix}$ .
So, $2x + z = 0$ , $3y = 0$ , $12x + y + 6z = 0$ .  Thus, $y = 0$ and $z = -2x$ , so the eigenvector is $v_1 = \begin{pmatrix} 1 \\ 0 \\ -2 \end{pmatrix}$ .

For $\lambda_2 = 2$ , we have
$A - \lambda_2 I = \begin{pmatrix} -1 & 0 & 1 \\ 0 & 0 & 0 \\ 12 & 1 & 3 \end{pmatrix}$ .
So, $-x + z = 0$ , $12x + y + 3z = 0$ .  Thus, $x = z$ and $12x + y + 3x = 0 \implies y = -15x$ , so the eigenvector is $v_2 = \begin{pmatrix} 1 \\ -15 \\ 1 \end{pmatrix}$ .

For $\lambda_3 = 7$ , we have
$A - \lambda_3 I = \begin{pmatrix} -6 & 0 & 1 \\ 0 & -5 & 0 \\ 12 & 1 & -2 \end{pmatrix}$ .
So, $-6x + z = 0$ , $-5y = 0$ , $12x + y - 2z = 0$ .  Thus, $y = 0$ and $z = 6x$ , so $12x - 2(6x) = 0$ , which is consistent. The eigenvector is $v_3 = \begin{pmatrix} 1 \\ 0 \\ 6 \end{pmatrix}$ .

(c)  Since the characteristic polynomial is $(2 - \lambda)(\lambda - 7)(\lambda + 1) = -\lambda^3 + 8\lambda^2 - 5\lambda - 14$ , by Cayley-Hamilton theorem, $-A^3 + 8A^2 - 5A - 14I = 0$ , so $A^3 = 8A^2 - 5A - 14I$ .
$A^2 = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 12 & 1 & 5 \end{pmatrix} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 12 & 1 & 5 \end{pmatrix} = \begin{pmatrix} 13 & 1 & 6 \\ 0 & 4 & 0 \\ 72 & 7 & 37 \end{pmatrix}$ .
Then
$8A^2 - 5A - 14I = \begin{pmatrix} 85 & 8 & 43 \\ 0 & 8 & 0 \\ 516 & 51 & 257 \end{pmatrix}$ .
Thus,

$$
A^3 = \begin{pmatrix} 85 & 8 & 43 \\ 0 & 8 & 0 \\ 516 & 51 & 257 \end{pmatrix}.
$$

(d) From Cayley-Hamilton theorem, $A^3 = 8A^2 - 5A - 14I$ . Multiplying by $A^{-1}$ gives

$$
14A^{-1}=8A-5I-A^2.
$$

Therefore,

$$
A^{-1} = \frac{1}{14}
\begin{pmatrix}
-10 & -1 & 2\\
0 & 7 & 0\\
24 & 1 & -2
\end{pmatrix}.
$$

(e) Put

$$
P=\begin{pmatrix} 1 & 1 & 1 \\ 0 & -15 & 0 \\ -2 & 1 & 6 \end{pmatrix},
\qquad
D=\begin{pmatrix} -1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 7 \end{pmatrix}.
$$

Then

$$
P^{-1}=
\begin{pmatrix}
\frac34 & \frac1{24} & -\frac18\\
0 & -\frac1{15} & 0\\
\frac14 & \frac1{40} & \frac18
\end{pmatrix},
\qquad
A^n=PD^nP^{-1}.
$$

For an explicit form, let $r_n=(-1)^n,\ s_n=2^n,\ t_n=7^n$ . Then

$$
A^n=
\begin{pmatrix}
\frac{3r_n+t_n}{4}
& \frac{r_n}{24}-\frac{s_n}{15}+\frac{t_n}{40}
& \frac{-r_n+t_n}{8}\\[4pt]
0&s_n&0\\[4pt]
\frac{3(-r_n+t_n)}{2}
&-\frac{r_n}{12}-\frac{s_n}{15}+\frac{3t_n}{20}
&\frac{r_n+3t_n}{4}
\end{pmatrix}.
$$
