---
sidebar_label: '2024年8月実施 数学 第2問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Matrix-Exponential
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Rayleigh-Quotient
  - Mathematics.Linear-Algebra.Quadratic-Form
---

# 東京大学 工学系研究科 2024年8月実施 数学 第2問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

正方行列 $A$ に対し、$e^A=I+\sum_{k=1}^{\infty}A^k/k!$ と定義する。

I. 三次正方行列 $A$ が正則行列 $P$ によって $A=PDP^{-1}$ と対角化され、$D=\operatorname{diag}(\lambda_1,\lambda_2,\lambda_3)$、$\lambda_j\in\mathbb C$ とする。次を示せ。

$$
e^A=P\operatorname{diag}(e^{\lambda_1},e^{\lambda_2},e^{\lambda_3})P^{-1}.
$$

II. 行列

$$
A=\begin{pmatrix}-1&4&4\\-5&8&10\\3&-3&-5\end{pmatrix}
$$

について、以下の問いに答えよ。

1. $A=PDP^{-1}$ を満たす正則行列 $P$ と対角行列 $D$ を求めよ。
2. $e^A$ を計算せよ。

III. $x$ を実数とし、

$$
A=\begin{pmatrix}0&-x&0\\x&0&0\\0&0&1\end{pmatrix},\qquad B=\operatorname{diag}(1,-1,1),\qquad\boldsymbol a=(1,1,e)^T
$$

とする。

1. $e^A$ の固有値の和を $e,x$ で表せ。
2. $C=Be^A$ とする。非零実ベクトル $\boldsymbol y$ に対する $\boldsymbol y^TC\boldsymbol y/(\boldsymbol y^T\boldsymbol y)$ の最大値と最小値を求めよ。
3. $f(\boldsymbol z)=\frac12\boldsymbol z^TC\boldsymbol z-\boldsymbol a^T\boldsymbol z$ とする。$\partial f/\partial z_1=\partial f/\partial z_2=\partial f/\partial z_3=0$ を満たす実ベクトル $\boldsymbol z$ に対し、$\sqrt{z_1^2+z_2^2+z_3^2}$ を求めよ。

#### 题目描述

对方阵 $A$，定义 $e^A=I+\sum_{k=1}^{\infty}A^k/k!$。

I. 设三阶矩阵 $A=PDP^{-1}$，其中 $P$ 可逆且 $D=\operatorname{diag}(\lambda_1,\lambda_2,\lambda_3)$、$\lambda_j\in\mathbb C$。证明

$$
e^A=P\operatorname{diag}(e^{\lambda_1},e^{\lambda_2},e^{\lambda_3})P^{-1}.
$$

II. 设

$$
A=\begin{pmatrix}-1&4&4\\-5&8&10\\3&-3&-5\end{pmatrix}.
$$

1. 求 $A=PDP^{-1}$ 中的可逆矩阵 $P$ 和对角矩阵 $D$。
2. 计算 $e^A$。

III. 对实数 $x$，设

$$
A=\begin{pmatrix}0&-x&0\\x&0&0\\0&0&1\end{pmatrix},\qquad
B=\operatorname{diag}(1,-1,1),\qquad\boldsymbol a=(1,1,e)^T.
$$

1. 用 $e,x$ 表示 $e^A$ 的特征值之和。
2. 令 $C=Be^A$，求非零实向量 $\boldsymbol y$ 的商 $\boldsymbol y^TC\boldsymbol y/(\boldsymbol y^T\boldsymbol y)$ 的最大值和最小值。
3. 令 $f(\boldsymbol z)=\frac12\boldsymbol z^TC\boldsymbol z-\boldsymbol a^T\boldsymbol z$。对满足 $\partial f/\partial z_1=\partial f/\partial z_2=\partial f/\partial z_3=0$ 的实向量 $\boldsymbol z$，求 $\sqrt{z_1^2+z_2^2+z_3^2}$。

## **Kai**

### I

$A^k=PD^kP^{-1}$ と行列のべき級数の絶対収束性より、

$$
e^A=\sum_{k=0}^{\infty}\frac{PD^kP^{-1}}{k!}
=P\left(\sum_{k=0}^{\infty}\frac{D^k}{k!}\right)P^{-1}
=P\operatorname{diag}(e^{\lambda_1},e^{\lambda_2},e^{\lambda_3})P^{-1}.
$$

### II

$$
\det(\lambda I-A)=(\lambda-3)(\lambda-1)(\lambda+2).
$$

対応する固有ベクトルはそれぞれ $(1,1,0)^T,(2,0,1)^T,(0,-1,1)^T$ と取れる。したがって

$$
\boxed{P=\begin{pmatrix}1&2&0\\1&0&-1\\0&1&1\end{pmatrix},\qquad D=\operatorname{diag}(3,1,-2)}.
$$

I より、

$$
\boxed{e^A=\begin{pmatrix}
-e^3+2e&2e^3-2e&2e^3-2e\\
-e^3+e^{-2}&2e^3-e^{-2}&2e^3-2e^{-2}\\
e-e^{-2}&-e+e^{-2}&-e+2e^{-2}
\end{pmatrix}}.
$$

### III.1

$$
e^A=\begin{pmatrix}\cos x&-\sin x&0\\\sin x&\cos x&0\\0&0&e\end{pmatrix}.
$$

固有値は $e^{ix},e^{-ix},e$ なので、その和は

$$
\boxed{e+2\cos x}.
$$

### III.2

$$
C=\begin{pmatrix}\cos x&-\sin x&0\\-\sin x&-\cos x&0\\0&0&e\end{pmatrix}
$$

は実対称行列である。左上の2次ブロックの平方は単位行列で、固有値は $1,-1$ である。よって $C$ の固有値は $-1,1,e$ であり、Rayleigh 商の極値は

$$
\boxed{\max=e,\qquad\min=-1}.
$$

### III.3

対称性から $\nabla f=C\boldsymbol z-\boldsymbol a$ なので、停留点は $C\boldsymbol z=\boldsymbol a$ を満たす。左上の2次ブロックは自身を逆行列として持つため、

$$
\boldsymbol z=(\cos x-\sin x,-\sin x-\cos x,1)^T.
$$

したがって

$$
\boxed{\|\boldsymbol z\|=\sqrt{(\cos x-\sin x)^2+(\sin x+\cos x)^2+1}=\sqrt3}.
$$

