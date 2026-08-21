---
sidebar_label: "2014年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2014年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の行列(matrix)の固有値 (eigenvalue) と固有ベクトル (eigenvector) をすべて求めよ。

$$
\begin{bmatrix}
-1 & 0 & 0 \\
1 & 2 & 0 \\
3 & -4 & 1
\end{bmatrix}
$$

### 题目描述

求矩阵

$$
\begin{bmatrix}
-1&0&0\\
1&2&0\\
3&-4&1
\end{bmatrix}
$$

的全部特征值及其对应的全部特征向量。

## **Kai**

Let

$$
A = \begin{bmatrix}
-1 & 0 & 0 \\
1 & 2 & 0 \\
3 & -4 & 1
\end{bmatrix}
$$

.

To find the eigenvalues, we need to solve the characteristic equation $|A - \lambda I| = 0$ , where $I$ is the identity matrix.

$$
A - \lambda I = \begin{bmatrix}
-1 - \lambda & 0 & 0 \\
1 & 2 - \lambda & 0 \\
3 & -4 & 1 - \lambda
\end{bmatrix}
$$

$|A - \lambda I| = (-1 - \lambda)(2 - \lambda)(1 - \lambda) = 0$

So, the eigenvalues are $\lambda_1 = -1$ , $\lambda_2 = 2$ , and $\lambda_3 = 1$ .

Now, let's find the eigenvectors for each eigenvalue.

For $\lambda_1 = -1$ :
$(A - \lambda_1 I)v_1 = 0$

$$
\begin{bmatrix}
0 & 0 & 0 \\
1 & 3 & 0 \\
3 & -4 & 2
\end{bmatrix} \begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix} = \begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
$$

$x_1 + 3x_2 = 0 \Rightarrow x_1 = -3x_2$
$3x_1 - 4x_2 + 2x_3 = 0 \Rightarrow 3(-3x_2) - 4x_2 + 2x_3 = 0 \Rightarrow -13x_2 + 2x_3 = 0 \Rightarrow x_3 = \frac{13}{2}x_2$

Let $x_2 = 2$ , then $x_1 = -6$ and $x_3 = 13$ .
So,

$$
v_1 = \begin{bmatrix}
-6 \\
2 \\
13
\end{bmatrix}
$$

For $\lambda_2 = 2$ :
$(A - \lambda_2 I)v_2 = 0$

$$
\begin{bmatrix}
-3 & 0 & 0 \\
1 & 0 & 0 \\
3 & -4 & -1
\end{bmatrix} \begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix} = \begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
$$

$-3x_1 = 0 \Rightarrow x_1 = 0$
$x_1 = 0$
$3x_1 - 4x_2 - x_3 = 0 \Rightarrow -4x_2 - x_3 = 0 \Rightarrow x_3 = -4x_2$

Let $x_2 = 1$ , then $x_3 = -4$ .
So,

$$
v_2 = \begin{bmatrix}
0 \\
1 \\
-4
\end{bmatrix}
$$

For $\lambda_3 = 1$ :
$(A - \lambda_3 I)v_3 = 0$

$$
\begin{bmatrix}
-2 & 0 & 0 \\
1 & 1 & 0 \\
3 & -4 & 0
\end{bmatrix} \begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix} = \begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
$$

$-2x_1 = 0 \Rightarrow x_1 = 0$
$x_1 + x_2 = 0 \Rightarrow x_2 = 0$
$3x_1 - 4x_2 = 0 \Rightarrow 0 = 0$

Let $x_3 = 1$ .
So,

$$
v_3 = \begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}
$$

Therefore, the eigenvalues are -1, 2, and 1, with corresponding eigenvectors

$$
\begin{bmatrix}
-6 \\
2 \\
13
\end{bmatrix}
$$

,

$$
\begin{bmatrix}
0 \\
1 \\
-4
\end{bmatrix}
$$

, and

$$
\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}
$$

.
