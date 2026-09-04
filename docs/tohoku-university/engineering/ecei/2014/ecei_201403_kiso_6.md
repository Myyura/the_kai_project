---
sidebar_label: 2014年3月実施 基礎科目 問題6 物理基礎2
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 東北大学 工学研究科 電気・情報系 2014年3月実施 基礎科目 問題6 物理基礎2

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

行列

$$
A=\begin{pmatrix}3&0&0\\0&\frac12&\frac{\sqrt3}6\\0&\frac{\sqrt3}6&\frac56\end{pmatrix},\qquad B=\begin{pmatrix}\frac34&\frac14&0\\\frac14&\frac34&0\\0&0&2\end{pmatrix}
$$

について考える。以下の問に答えよ。

(1) $A$ の固有値 $\lambda_1,\lambda_2,\lambda_3$（$\lambda_1<\lambda_2<\lambda_3$）に対応する正規化された固有ベクトル $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$，および $B$ の固有値 $\mu_1,\mu_2,\mu_3$（$\mu_1<\mu_2<\mu_3$）に対応する正規化された固有ベクトル $\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\beta_3$ を求めよ。

(2) $(A^3-\frac{13}3A^2+\frac{13}3A)(B^3-\frac72B^2-\frac12B-E)$ を求めよ。ただし $E$ は単位行列である。

(3) ベクトル $\boldsymbol x=(x_1,x_2,x_3)^T$ を固有ベクトル $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ の線形結合で表せ。

(4) $A^n\boldsymbol x$ を固有ベクトル $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ の線形結合で表せ。ただし，$n$ は自然数である。

(5) 以下の連立方程式を満たすベクトル $\boldsymbol x,\boldsymbol y$ を全て求めよ。

$$
\boldsymbol y=\lim_{n\to\infty}\{(A^n+B^n)\boldsymbol x\},\qquad |\boldsymbol y|=1
$$

ただし $|\boldsymbol y|$ はベクトル $\boldsymbol y$ の長さである。

### 题目描述

设

$$
A=\begin{pmatrix}3&0&0\\0&\frac12&\frac{\sqrt3}6\\0&\frac{\sqrt3}6&\frac56\end{pmatrix},\qquad
B=\begin{pmatrix}\frac34&\frac14&0\\\frac14&\frac34&0\\0&0&2\end{pmatrix}.
$$

1. 求 $A$ 的特征值 $\lambda_1<\lambda_2<\lambda_3$ 与单位特征向量 $\alpha_i$，以及 $B$ 的特征值 $\mu_1<\mu_2<\mu_3$ 与单位特征向量 $\beta_i$。
2. 求 $(A^3-\frac{13}3A^2+\frac{13}3A)(B^3-\frac72B^2-\frac12B-E)$，$E$ 为单位矩阵。
3. 将 $\boldsymbol{x}=(x_1,x_2,x_3)^T$ 表为 $\alpha_1,\alpha_2,\alpha_3$ 的线性组合。
4. 将 $A^n\boldsymbol{x}$ 表为上述特征向量的线性组合。
5. 求所有满足 $\boldsymbol y=\lim_{n\to\infty}(A^n+B^n)\boldsymbol x$、$\lVert\boldsymbol y\rVert=1$ 的 $\boldsymbol x,\boldsymbol y$。

## **Kai**

### (1)

$$
\begin{array}{c|c|c}
i&\lambda_i&\alpha_i\\\hline
1&1/3&(0,-\sqrt3/2,1/2)^T\\
2&1&(0,1/2,\sqrt3/2)^T\\
3&3&(1,0,0)^T
\end{array}\qquad
\begin{array}{c|c|c}
i&\mu_i&\beta_i\\\hline
1&1/2&(1,-1,0)^T/\sqrt2\\
2&1&(1,1,0)^T/\sqrt2\\
3&2&(0,0,1)^T
\end{array}
$$

### (2)

特征多项式分别为

$$
p_A(t)=t^3-\frac{13}3t^2+\frac{13}3t-1,\quad
p_B(t)=t^3-\frac72t^2+\frac72t-1.
$$

由 Cayley–Hamilton 定理，所求为

$$
E(-4B)=\boxed{\begin{pmatrix}-3&-1&0\\-1&-3&0\\0&0&-8\end{pmatrix}}.
$$

### (3)、(4)

令 $c_1=(-\sqrt3x_2+x_3)/2$，$c_2=(x_2+\sqrt3x_3)/2$，$c_3=x_1$。由于 $\alpha_i$ 构成标准正交基，

$$
\boldsymbol x=c_1\alpha_1+c_2\alpha_2+c_3\alpha_3,
$$

$$
\boxed{A^n\boldsymbol x=3^{-n}c_1\alpha_1+c_2\alpha_2+3^nc_3\alpha_3}.
$$

### (5)

$3^n$ 项先迫使 $x_1=0$，随后 $2^n$ 项迫使 $x_3=0$。令 $\boldsymbol x=(0,t,0)^T$，则

$$
\boldsymbol y=(\alpha_2\alpha_2^T+\beta_2\beta_2^T)\boldsymbol x
=t\begin{pmatrix}1/2\\3/4\\\sqrt3/4\end{pmatrix},\qquad \lVert\boldsymbol y\rVert=|t|.
$$

故全部解为

$$
\boxed{\boldsymbol x=\pm(0,1,0)^T,\qquad
\boldsymbol y=\pm(1/2,3/4,\sqrt3/4)^T}
$$

（两处符号一致）。
