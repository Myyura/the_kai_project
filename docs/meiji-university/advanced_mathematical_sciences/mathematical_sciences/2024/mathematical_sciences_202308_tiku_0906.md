---
sidebar_label: "2023年8月実施 线性代数"
tags:
  - Meiji-University
  - Mathematics.Calculus.Limit
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2023年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列 $A$ を

$$
A = \begin{pmatrix}
1/2 & 0 & 0 \\
1/2 & 1/2 & 1 \\
0 & 1/2 & 0
\end{pmatrix}
$$

で定める。次の問に答えよ。

(1) 行列 $A$ の固有値をすべて求めよ。

(2) $A = PDP^{-1}$ を満たす正則行列 $P$ と対角行列 $D$ の組をひとつ求めよ。

(3) 行列 $A^{\infty}$ を

$$
A^{\infty} = \lim_{n \to \infty} A^n
$$

で定める。ベクトル

$$
x = \begin{pmatrix}
x_1 \\
x_2 \\
x_3
\end{pmatrix}
$$

が $x_1 + x_2 + x_3 = 1$ を満たすとき、 $A^{\infty}x$ を求めよ。

### 题目描述

定义矩阵

$$
A=\begin{pmatrix}
1/2&0&0\\
1/2&1/2&1\\
0&1/2&0
\end{pmatrix}.
$$

回答下列问题。

(1) 求矩阵 $A$ 的全部特征值。

(2) 求一组可逆矩阵 $P$ 与对角矩阵 $D$，使

$$
A=PDP^{-1}.
$$

(3) 定义

$$
A^\infty=\lim_{n\to\infty}A^n.
$$

若向量

$$
x=\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
$$

满足

$$
x_1+x_2+x_3=1,
$$

求 $A^\infty x$。

## **Kai**

(1) 行列 $A$ の固有値を求める。

$$
|A - \lambda I| = \begin{vmatrix}
1/2 - \lambda & 0 & 0 \\
1/2 & 1/2 - \lambda & 1 \\
0 & 1/2 & -\lambda
\end{vmatrix} = (1/2 - \lambda) \begin{vmatrix}
1/2 - \lambda & 1 \\
1/2 & -\lambda
\end{vmatrix}
$$

$$
= (1/2 - \lambda)[(1/2 - \lambda)(-\lambda) - 1/2] = (1/2 - \lambda)(\lambda^2 - \frac{1}{2}\lambda - \frac{1}{2}) = 0
$$

$\lambda_1 = 1/2, \lambda^2 - \frac{1}{2}\lambda - \frac{1}{2} = 0 \implies 2\lambda^2 - \lambda - 1 = 0 \implies (2\lambda + 1)(\lambda - 1) = 0$
$\lambda_2 = -1/2, \lambda_3 = 1$
固有値は $\lambda = 1/2, -1/2, 1$

(2) $A = PDP^{-1}$ を満たす正則行列 $P$ と対角行列 $D$ を求める。
まず、各固有値に対応する固有ベクトルを求める。
$\lambda_1 = 1/2$ のとき、 $(A - \frac{1}{2}I)v_1 = 0$

$$
\begin{pmatrix}
0 & 0 & 0 \\
1/2 & 0 & 1 \\
0 & 1/2 & -1/2
\end{pmatrix} \begin{pmatrix}
x \\
y \\
z
\end{pmatrix} = 0 \implies x/2 + z = 0, y/2 - z/2 = 0 \implies x = -2z, y = z \implies v_1 = \begin{pmatrix}
-2 \\
1 \\
1
\end{pmatrix}
$$

$\lambda_2 = -1/2$ のとき、 $(A + \frac{1}{2}I)v_2 = 0$

$$
\begin{pmatrix}
1 & 0 & 0 \\
1/2 & 1 & 1 \\
0 & 1/2 & 1/2
\end{pmatrix} \begin{pmatrix}
x \\
y \\
z
\end{pmatrix} = 0 \implies x = 0, x/2 + y + z = 0, y/2 + z/2 = 0 \implies x = 0, y = -z \implies v_2 = \begin{pmatrix}
0 \\
1 \\
-1
\end{pmatrix}
$$

$\lambda_3 = 1$ のとき、 $(A - I)v_3 = 0$

$$
\begin{pmatrix}
-1/2 & 0 & 0 \\
1/2 & -1/2 & 1 \\
0 & 1/2 & -1
\end{pmatrix} \begin{pmatrix}
x \\
y \\
z
\end{pmatrix} = 0 \implies -x/2 = 0, x/2 - y/2 + z = 0, y/2 - z = 0 \implies x = 0, y = 2z \implies v_3 = \begin{pmatrix}
0 \\
2 \\
1
\end{pmatrix}
$$

したがって、

$$
P = \begin{pmatrix}
-2 & 0 & 0 \\
1 & 1 & 2 \\
1 & -1 & 1
\end{pmatrix}, D = \begin{pmatrix}
1/2 & 0 & 0 \\
0 & -1/2 & 0 \\
0 & 0 & 1
\end{pmatrix}
$$

$\det P=-6\neq0$ であり，

$$
P^{-1}=
\begin{pmatrix}
-\frac12&0&0\\
-\frac16&\frac13&-\frac23\\
\frac13&\frac13&\frac13
\end{pmatrix}.
$$

(3) 対角化より

$$
A^\infty
=P\operatorname{diag}(0,0,1)P^{-1}
=
\begin{pmatrix}
0&0&0\\
\frac23&\frac23&\frac23\\
\frac13&\frac13&\frac13
\end{pmatrix}.
$$

したがって $x_1+x_2+x_3=1$ なら

$$
\boxed{
A^\infty x=
\begin{pmatrix}
0\\[2pt]
\frac23\\[2pt]
\frac13
\end{pmatrix}
}.
$$
