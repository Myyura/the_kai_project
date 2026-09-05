---
sidebar_label: "2021年8月実施 线性代数"
tags:
  - Meiji-University
  - Mathematics.Calculus.Limit
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2021年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列

$$
A = \begin{pmatrix} 2 & 1 & 1  \\ 1 & 2 & 1  \\ 1 & 1 & 2 \end{pmatrix}
$$

について次の問に答えよ。

(1) 行列 $A$ の固有値を求めよ。

(2) 正則行列 $P$ で $P^{-1}AP$ が対角行列になるものを1つ求めよ。

(3) $\mathbb{R}^3$ のベクトル $v_n, n = 1, 2, \dots$ を

$$
v_{n+1} = \frac{1}{4} A v_n, \quad v_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}
$$

によって定める。このとき

$$
\lim_{n \to \infty} v_n
$$

を求めよ。

### 题目描述

对于矩阵

$$
A=\begin{pmatrix}
2&1&1\\
1&2&1\\
1&1&2
\end{pmatrix},
$$

回答下列问题。

(1) 求矩阵 $A$ 的特征值。

(2) 求一个可逆矩阵 $P$，使 $P^{-1}AP$ 为对角矩阵。

(3) 由下式定义 $\mathbb{R}^3$ 中的向量 $v_n$（$n=1,2,\dots$）：

$$
v_{n+1}=\frac14Av_n,\qquad
v_1=\begin{pmatrix}1\\0\\0\end{pmatrix}.
$$

求

$$
\lim_{n\to\infty}v_n.
$$

## **Kai**

(1) 首先求矩阵A的特征多项式：

$$
\begin{aligned}
det(A - \lambda I) &= \begin{vmatrix} 2-\lambda & 1 & 1  \\ 1 & 2-\lambda & 1   \\ 1 & 1 & 2-\lambda \end{vmatrix} \\
&= (2-\lambda) \begin{vmatrix} 2-\lambda & 1  \\ 1 & 2-\lambda \end{vmatrix} - \begin{vmatrix} 1 & 1  \\ 1 & 2-\lambda \end{vmatrix} + \begin{vmatrix} 1 & 2-\lambda  \\ 1 & 1 \end{vmatrix} \\
&= (2-\lambda)((2-\lambda)^2 - 1) - (2-\lambda - 1) + (1 - (2-\lambda)) \\
&= (2-\lambda)(\lambda^2 - 4\lambda + 3) - (1-\lambda) + (\lambda - 1) \\
&= (2-\lambda)(\lambda - 1)(\lambda - 3) + 2(\lambda - 1) \\
&= (\lambda - 1)((2-\lambda)(\lambda - 3) + 2) \\
&= (\lambda - 1)(-\lambda^2 + 5\lambda - 6 + 2) \\
&= (\lambda - 1)(-\lambda^2 + 5\lambda - 4) \\
&= -(\lambda - 1)^2(\lambda - 4)
\end{aligned}
$$

特征值为 $\lambda_1 = 1$ , $\lambda_2 = 4$ .

(2) 对于特征值 $\lambda_1 = 1$ :
$(A - I)v = 0 \Rightarrow \begin{pmatrix} 1 & 1 & 1  \\ 1 & 1 & 1  \\ 1 & 1 & 1 \end{pmatrix} v = 0$ .  解得特征向量为 $w_1 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$ , $w_2 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$ .

对于特征值 $\lambda_2 = 4$ :
$(A - 4I)v = 0 \Rightarrow \begin{pmatrix} -2 & 1 & 1  \\ 1 & -2 & 1  \\ 1 & 1 & -2 \end{pmatrix} v = 0$ . 解得特征向量为 $w_3 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ .

故可取 $P = \begin{pmatrix} 1 & 1 & 1  \\ -1 & 0 & 1  \\ 0 & -1 & 1 \end{pmatrix}$ .

(3) 由 $v_{n+1} = \frac{1}{4} A v_n$ , 有 $v_n = (\frac{1}{4}A)^{n-1}v_1$ .
将 $v_1$ 表示为特征向量的线性组合:
$v_1 = c_1 w_1 + c_2 w_2 + c_3 w_3$ 即 $\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = c_1 \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} + c_2 \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} + c_3 \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ .
解得 $c_1=c_2=c_3=\frac13$ .
所以
$v_n = (\frac{1}{4}A)^{n-1} (\frac{1}{3} w_1 + \frac{1}{3} w_2 + \frac{1}{3} w_3) = \frac{1}{3} (\frac{1}{4})^{n-1} w_1 + \frac{1}{3} (\frac{1}{4})^{n-1} w_2 + \frac{1}{3} (\frac{4}{4})^{n-1} w_3$ .
$\lim_{n \to \infty} v_n = \frac{1}{3} w_3 = \frac{1}{3} \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 1/3 \\ 1/3 \\ 1/3 \end{pmatrix}$ .
