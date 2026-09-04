---
sidebar_label: "2010年度入学 数学 問1（線形代数）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 九州大学 システム情報科学府 情報学専攻・情報知能工学専攻・電気電子工学専攻 共通 2010年度入学 数学 問1（線形代数）

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列 $A = \begin{pmatrix} x & 0 & 1 \\ 0 & x & 1 \\ 1 & 1 & x \end{pmatrix}$ について以下の問に答えよ。ただし、 $x$ は実数である。

(1) $A$ の固有値 $\lambda_1, \lambda_2, \lambda_3$ $(\lambda_1 \leq \lambda_2 \leq \lambda_3)$ と、それらに対応する固有ベクトルを求めよ。

(2) $x=0$ のとき、任意の自然数 $n$ に対して $A^n$ を求めよ。

### 题目描述

设 $x$ 为实数，并给定矩阵

$$
A=\begin{pmatrix}
x&0&1\\
0&x&1\\
1&1&x
\end{pmatrix}.
$$

回答下列问题：

1. 求 $A$ 的三个特征值 $\lambda_1,\lambda_2,\lambda_3$，按
   $\lambda_1\leq\lambda_2\leq\lambda_3$ 排列，并求出分别与它们对应的特征向量。
2. 当 $x=0$ 时，对任意自然数 $n$ 求 $A^n$。

## **Kai**

(1)  $A$ の固有方程式 $|A - \lambda I| = 0$ より、

$$
\begin{vmatrix} x-\lambda & 0 & 1 \\ 0 & x-\lambda & 1 \\ 1 & 1 & x-\lambda \end{vmatrix} = (x-\lambda)\begin{vmatrix} x-\lambda & 1 \\ 1 & x-\lambda \end{vmatrix} - 0 + 1 \begin{vmatrix} 0 & x-\lambda \\ 1 & 1 \end{vmatrix} = (x-\lambda)[(x-\lambda)^2 - 1] - (x-\lambda) = (x-\lambda)[(x-\lambda)^2 - 2] = 0
$$

よって、固有値は $\lambda = x, x+\sqrt{2}, x-\sqrt{2}$ .

$\lambda_1 = x - \sqrt{2}, \lambda_2 = x, \lambda_3 = x + \sqrt{2}$ .

(i) $\lambda_1 = x - \sqrt{2}$ のとき、固有ベクトルを $\mathbf{v}_1 = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$ とすると、 $(A - \lambda_1 I)\mathbf{v}_1 = 0$ より、

$$
\begin{pmatrix} \sqrt{2} & 0 & 1 \\ 0 & \sqrt{2} & 1 \\ 1 & 1 & \sqrt{2} \end{pmatrix} \begin{pmatrix} a \\ b \\ c \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$\sqrt{2}a + c = 0, \sqrt{2}b + c = 0, a+b+\sqrt{2}c = 0$ より、 $a = b = -\frac{c}{\sqrt{2}}$ .  $c = \sqrt{2}$ とすると、 $a = b = -1$ .  よって、固有ベクトルは $\begin{pmatrix} -1 \\ -1 \\ \sqrt{2} \end{pmatrix}$ .

(ii) $\lambda_2 = x$ のとき、固有ベクトルを $\mathbf{v}_2 = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$ とすると、 $(A - \lambda_2 I)\mathbf{v}_2 = 0$ より、

$$
\begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} \begin{pmatrix} a \\ b \\ c \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$c = 0, a+b = 0$ より、 $b = -a$ .  $a = 1$ とすると、 $b = -1$ .  よって、固有ベクトルは $\begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$ .

(iii) $\lambda_3 = x + \sqrt{2}$ のとき、固有ベクトルを $\mathbf{v}_3 = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$ とすると、 $(A - \lambda_3 I)\mathbf{v}_3 = 0$ より、

$$
\begin{pmatrix} -\sqrt{2} & 0 & 1 \\ 0 & -\sqrt{2} & 1 \\ 1 & 1 & -\sqrt{2} \end{pmatrix} \begin{pmatrix} a \\ b \\ c \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$-\sqrt{2}a + c = 0, -\sqrt{2}b + c = 0, a+b-\sqrt{2}c = 0$ より、 $a = b = \frac{c}{\sqrt{2}}$ .  $c = \sqrt{2}$ とすると、 $a = b = 1$ .  よって、固有ベクトルは $\begin{pmatrix} 1 \\ 1 \\ \sqrt{2} \end{pmatrix}$ .

(2) $x = 0$ のとき、 $A = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$ .
$A^2 = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$ .
$A^3 = \begin{pmatrix} 0 & 0 & 2 \\ 0 & 0 & 2 \\ 2 & 2 & 0 \end{pmatrix} = 2A$ .
$A^4 = 2A^2$ .
$A^{2k} = 2^{k-1} A^2 = 2^{k-1} \begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$ .
$A^{2k+1} = 2^{k} A = 2^{k} \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$ .
よって、 $n$ が偶数のとき、 $A^n = 2^{\frac{n}{2}-1} \begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$ 。
$n$ が奇数のとき、 $A^n = 2^{\frac{n-1}{2}} \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$ 。
