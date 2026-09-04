---
sidebar_label: "2021年8月実施（秋入学試験） 専門基礎科目 第1問"
tags:
  - Saitama-University
  - Mathematics.Linear-Algebra.Characteristic-Polynomial
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2021年8月実施（秋入学試験） 専門基礎科目 第1問

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

1. 以下の問に答えよ、 [Solve the following problems.]

$$
A = \begin{pmatrix} 2 & 1 & -2 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}
$$

(a) 行列Aの固有多項式 $\varphi(\lambda)$ を求めよ. [Find the characteristic polynomial $\varphi(\lambda)$ of the matrix A.]

(b) 行列Aを対角化した行列Dを求めよ. [Find the diagonalized matrix D of the matrix A.]

(c) 問 (b) の行列Dに対して $D^n$ ( $n = 1,2,\dots$ ) を求めよ. [Find $D^n$ ( $n = 1,2,\dots$ ) for the matrix D in Question (b).]

(d) $A^n$ ( $n = 1,2,\dots$ ) を求めよ. [Find $A^n$ ( $n = 1,2,\dots$ ).]

(e) 数列 ${x_k}_{k=1,2,\dots}$ が, $x_{k+3} = 2x_{k+2} + x_{k+1} - 2x_k$ ( $k = 1,2,\dots$ ), $x_1 = 1$ , $x_2 = 0$ , $x_3 = 0$ を満たすとき, $x_k$ ( $k = 1,2,\dots$ ) を求めよ. [Find $x_k$ ( $k = 1,2,\dots$ ) so that the sequence ${x_k}_{k=1,2,\dots}$ satisfies $x_{k+3} = 2x_{k+2} + x_{k+1} - 2x_k$ ( $k = 1,2,\dots$ ), $x_1 = 1$ , $x_2 = 0$ , $x_3 = 0$ .]

### 题目描述

1. 对矩阵

$$
A=\begin{pmatrix}
2&1&-2\\
1&0&0\\
0&1&0
\end{pmatrix},
$$

回答下列问题。

(a) 求矩阵 $A$ 的特征多项式 $\varphi(\lambda)$。

(b) 求将矩阵 $A$ 对角化后得到的对角矩阵 $D$。

(c) 对 (b) 中的矩阵 $D$，求

$$
D^n\qquad(n=1,2,\dots).
$$

(d) 求

$$
A^n\qquad(n=1,2,\dots).
$$

(e) 数列 $\{x_k\}_{k=1,2,\dots}$ 满足

$$
x_{k+3}=2x_{k+2}+x_{k+1}-2x_k
\qquad(k=1,2,\dots),
$$

以及初始条件

$$
x_1=1,\qquad x_2=0,\qquad x_3=0.
$$

求

$$
x_k\qquad(k=1,2,\dots).
$$

## **Kai**

(a) The characteristic polynomial $\varphi(\lambda)$ is given by $\det(A - \lambda I)$ .

$$
A - \lambda I = \begin{pmatrix} 2 - \lambda & 1 & -2 \\ 1 & -\lambda & 0 \\ 0 & 1 & -\lambda \end{pmatrix}
$$

$$
\varphi(\lambda) = \det(A - \lambda I) = (2 - \lambda)(\lambda^2) - 1(-\lambda) - 2(1) = 2\lambda^2 - \lambda^3 + \lambda - 2 = -\lambda^3 + 2\lambda^2 + \lambda - 2 = -(\lambda - 2)(\lambda + 1)(\lambda - 1)
$$

Therefore, $\varphi(\lambda) = -(\lambda - 2)(\lambda + 1)(\lambda - 1)$ .

(b) The eigenvalues are $\lambda_1 = 2$ , $\lambda_2 = 1$ , and $\lambda_3 = -1$ .  Let's find the eigenvectors.
For $\lambda_1 = 2$ , $(A - 2I)v = 0$ , $\begin{pmatrix} 0 & 1 & -2 \\ 1 & -2 & 0 \\ 0 & 1 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$ . So $y = 2z$ and $x = 2y = 4z$ .  Let $z = 1$ , then $x = 4$ and $y = 2$ . Thus $v_1 = \begin{pmatrix} 4 \\ 2 \\ 1 \end{pmatrix}$ .
For $\lambda_2 = 1$ , $(A - I)v = 0$ , $\begin{pmatrix} 1 & 1 & -2 \\ 1 & -1 & 0 \\ 0 & 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$ . So $x + y - 2z = 0$ , $x = y$ and $y = z$ . Let $x = 1$ , then $y = 1$ and $z = 1$ . Thus $v_2 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ .
For $\lambda_3 = -1$ , $(A + I)v = 0$ , $\begin{pmatrix} 3 & 1 & -2 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$ . So $y = -z$ and $x = -y = z$ . Let $z = 1$ , then $y = -1$ and $x = 1$ . Thus $v_3 = \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$ .
Let $P = \begin{pmatrix} 4 & 1 & 1 \\ 2 & 1 & -1 \\ 1 & 1 & 1 \end{pmatrix}$ .  Then $D = P^{-1}AP = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}$ .

(c) Since $D$ is diagonal, $D^n = \begin{pmatrix} 2^n & 0 & 0 \\ 0 & 1^n & 0 \\ 0 & 0 & (-1)^n \end{pmatrix} = \begin{pmatrix} 2^n & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & (-1)^n \end{pmatrix}$ .

(d) We have $A = PDP^{-1}$ , so $A^n = PD^nP^{-1}$ .

$$
P^{-1}
=
\begin{pmatrix}
\frac13 & 0 & -\frac13\\
-\frac12 & \frac12 & 1\\
\frac16 & -\frac12 & \frac13
\end{pmatrix}.
$$

Therefore,

$$
A^n
=
\begin{pmatrix} 4 & 1 & 1 \\ 2 & 1 & -1 \\ 1 & 1 & 1 \end{pmatrix}
\begin{pmatrix} 2^n & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & (-1)^n \end{pmatrix}
\begin{pmatrix}
\frac13 & 0 & -\frac13\\
-\frac12 & \frac12 & 1\\
\frac16 & -\frac12 & \frac13
\end{pmatrix}.
$$

(e) The characteristic equation is $r^3 - 2r^2 - r + 2 = 0$ .  Then $(r-2)(r-1)(r+1) = 0$ .  Thus $r_1 = 2$ , $r_2 = 1$ , and $r_3 = -1$ .  Thus $x_k = c_1(2)^k + c_2(1)^k + c_3(-1)^k = c_1 2^k + c_2 + c_3 (-1)^k$ .
We have $x_1 = 1$ , $x_2 = 0$ , $x_3 = 0$ .
$x_1 = 2c_1 + c_2 - c_3 = 1$
$x_2 = 4c_1 + c_2 + c_3 = 0$
$x_3 = 8c_1 + c_2 - c_3 = 0$
Solving these three equations gives

$$
c_1=-\frac16,\qquad c_2=1,\qquad c_3=-\frac13.
$$

Thus

$$
\boxed{x_k=1-\frac{2^k}{6}-\frac{(-1)^k}{3}}.
$$
