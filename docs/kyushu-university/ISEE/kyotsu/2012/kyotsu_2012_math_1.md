---
sidebar_label: "2012年度入学 数学 問1（線形代数）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Power
---
# 九州大学 システム情報科学府 情報学専攻・情報知能工学専攻・電気電子工学専攻 共通 2012年度入学 数学 問1（線形代数）

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列 $A = \begin{pmatrix} 0 & x & 0 \\ x & 0 & -x \\ 0 & -x & 0 \end{pmatrix}$ について、以下の各問に答えよ。ただし $x$ は実数である。

(1) $A$ の固有値をすべて求め、それらに対応する固有ベクトルを求めよ。

(2) 任意の自然数 $n$ に対して $A^n$ を求めよ。

(3) $\sum_{n=1}^{\infty} \frac{1}{n!} A^n$ を求めよ。

### 题目描述

设 $x$ 为实数，并给定矩阵

$$
A=\begin{pmatrix}
0&x&0\\
x&0&-x\\
0&-x&0
\end{pmatrix}.
$$

回答下列问题：

1. 求 $A$ 的全部特征值及分别对应的特征向量；由于 $x$ 可以取 $0$，还需涵盖 $A$ 退化为零矩阵的情形。
2. 对任意自然数 $n$ 求 $A^n$。
3. 求矩阵级数

   $$
   \sum_{n=1}^{\infty}\frac1{n!}A^n.
   $$

## **Kai**

解答：

(1) 首先求特征值，解特征方程 $|A - \lambda E| = 0$ 。
$\begin{vmatrix} -\lambda & x & 0 \\ x & -\lambda & -x \\ 0 & -x & -\lambda \end{vmatrix} = -\lambda(\lambda^2 - x^2) - x(-x\lambda) = -\lambda(\lambda^2 - x^2) + x^2\lambda = -\lambda^3 + x^2\lambda + x^2\lambda = -\lambda(\lambda^2 - 2x^2) = 0$
所以特征值为 $\lambda_1 = 0, \lambda_2 = \sqrt{2}x, \lambda_3 = -\sqrt{2}x$ 。

接下来求特征向量。まず $x\neq 0$ とする。
当 $\lambda_1 = 0$ 时，解方程 $Ax = 0$ ，即 $\begin{pmatrix} 0 & x & 0 \\ x & 0 & -x \\ 0 & -x & 0 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
得到 $x_2 = 0$ 且 $x_1 - x_3 = 0$ ，所以特征向量为 $k_1\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$ ，其中 $k_1 \neq 0$ 。

当 $\lambda_2 = \sqrt{2}x$ 时，解方程 $(A - \sqrt{2}xE)x = 0$ ，即 $\begin{pmatrix} -\sqrt{2}x & x & 0 \\ x & -\sqrt{2}x & -x \\ 0 & -x & -\sqrt{2}x \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
得到 $-\sqrt{2}x x_1 + x x_2 = 0$ ，即 $x_2 = \sqrt{2}x_1$ 且 $x_1 - \sqrt{2}x_2 - x_3 = 0$ ，所以 $x_1 - 2x_1 - x_3 = 0$ , $x_3 = -x_1$ 。特征向量为 $k_2\begin{pmatrix} 1 \\ \sqrt{2} \\ -1 \end{pmatrix}$ ，其中 $k_2 \neq 0$ 。

当 $\lambda_3 = -\sqrt{2}x$ 时，解方程 $(A + \sqrt{2}xE)x = 0$ ，即 $\begin{pmatrix} \sqrt{2}x & x & 0 \\ x & \sqrt{2}x & -x \\ 0 & -x & \sqrt{2}x \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
得到 $\sqrt{2}x x_1 + x x_2 = 0$ ，即 $x_2 = -\sqrt{2}x_1$ 且 $x_1 + \sqrt{2}x_2 - x_3 = 0$ ，所以 $x_1 - 2x_1 - x_3 = 0$ , $x_3 = -x_1$ 。特征向量为 $k_3\begin{pmatrix} 1 \\ -\sqrt{2} \\ -1 \end{pmatrix}$ ，其中 $k_3 \neq 0$ 。

$x=0$ のときは $A$ は零行列である。したがって固有値は $0$ のみ（代数的重複度 $3$ ）であり、任意の零でないベクトルが固有ベクトルである。

(2)  当 n = 1时， $A^1 = A$
 当 n = 2时，  $A^2 = \begin{pmatrix} x^2 & 0 & -x^2 \\ 0 & 2x^2 & 0 \\ -x^2 & 0 & x^2 \end{pmatrix}$
当 n = 3时，  $A^3 = \begin{pmatrix} 0 & 2x^3 & 0 \\ 2x^3 & 0 & -2x^3 \\ 0 & -2x^3 & 0 \end{pmatrix} = 2x^2 A$
$A^{2n} = (2x^2)^{n-1}A^2$
$A^{2n+1} = (2x^2)^n A$

(3) $x\neq0$ のとき、

$\sum_{n=1}^{\infty} \frac{1}{n!} A^n = \sum_{n=1}^{\infty} \frac{1}{(2n)!} A^{2n} + \sum_{n=0}^{\infty} \frac{1}{(2n+1)!} A^{2n+1} = \sum_{n=1}^{\infty} \frac{1}{(2n)!} (2x^2)^{n-1}A^2 + \sum_{n=0}^{\infty} \frac{1}{(2n+1)!} (2x^2)^n A$
$\sum_{n=1}^{\infty} \frac{(2x^2)^{n-1}}{(2n)!} A^2 = \frac{1}{2x^2} \sum_{n=1}^{\infty} \frac{(2x^2)^n}{(2n)!} A^2 = \frac{1}{2x^2} (\cosh(\sqrt{2}x) - 1)A^2$
$\sum_{n=0}^{\infty} \frac{(2x^2)^n}{(2n+1)!} A = \frac{1}{\sqrt{2}x} \sum_{n=0}^{\infty} \frac{(\sqrt{2}x)^{2n+1}}{(2n+1)!} A = \frac{\sinh(\sqrt{2}x)}{\sqrt{2}x} A$
$\sum_{n=1}^{\infty} \frac{1}{n!} A^n =  \frac{1}{2x^2} (\cosh(\sqrt{2}x) - 1)A^2 + \frac{\sinh(\sqrt{2}x)}{\sqrt{2}x} A$

$x=0$ のときは $A=0$ なので、この級数の値は零行列である。
