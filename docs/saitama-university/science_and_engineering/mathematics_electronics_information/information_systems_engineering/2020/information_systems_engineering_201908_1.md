---
sidebar_label: "2019年8月実施 専門基礎科目 第1問"
tags:
  - Saitama-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2019年8月実施 専門基礎科目 第1問

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

1. 以下の問に答えよ. [Solve the following problems.]

(a) 行列 $A$ の逆行列を求めよ. [Find the inverse matrix of the matrix $A$ .]

$$
A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 1 \\ 3 & 1 & 2 \end{pmatrix}
$$

(b) 次の行列式を求めよ. [Find the following determinant.]

$$
\begin{vmatrix} 2 & 3 & 3 \\ 8 & 4 & 1 \\ -4 & 1 & 2 \end{vmatrix}
$$

(c) 行列 $B$ の固有値を全て求めよ. [Obtain all eigenvalues of the matrix $B$ .]

$$
B = \begin{pmatrix} 5 & 1 & -1 \\ -4 & 1 & 2 \\ 2 & 1 & 2 \end{pmatrix}
$$

(d) 行列 $B$ の固有値に対応する固有ベクトルを求めよ. [Obtain eigenvectors corresponding to the eigenvalues of the matrix $B$ .]

### 题目描述

1. 回答下列问题。

(a) 求矩阵

$$
A=\begin{pmatrix}
1&2&3\\
2&3&1\\
3&1&2
\end{pmatrix}
$$

的逆矩阵。

(b) 计算行列式

$$
\begin{vmatrix}
2&3&3\\
8&4&1\\
-4&1&2
\end{vmatrix}.
$$

(c) 求矩阵

$$
B=\begin{pmatrix}
5&1&-1\\
-4&1&2\\
2&1&2
\end{pmatrix}
$$

的全部特征值。

(d) 求与矩阵 $B$ 的各特征值对应的特征向量。

## **Kai**

(a)  To find the inverse of $A$ , we first find the determinant of $A$ :

$$
\det(A) = 1(3\cdot2 - 1\cdot1) - 2(2\cdot2 - 1\cdot3) + 3(2\cdot1 - 3\cdot3) = 1(6-1) - 2(4-3) + 3(2-9) = 5 - 2 - 21 = -18
$$

Now, we find the adjugate matrix of $A$ :

$$
\text{adj}(A) = \begin{pmatrix} 5 & -1 & -7 \\ -1 & -7 & 5 \\ -7 & 5 & -1 \end{pmatrix}
$$

So the inverse of $A$ is:

$$
A^{-1} = \frac{1}{\det(A)} \text{adj}(A) = \frac{1}{-18} \begin{pmatrix} 5 & -1 & -7 \\ -1 & -7 & 5 \\ -7 & 5 & -1 \end{pmatrix} = \begin{pmatrix} -5/18 & 1/18 & 7/18 \\ 1/18 & 7/18 & -5/18 \\ 7/18 & -5/18 & 1/18 \end{pmatrix}
$$

(b)  The determinant is:

$$
\begin{vmatrix} 2 & 3 & 3 \\ 8 & 4 & 1 \\ -4 & 1 & 2 \end{vmatrix} = 2(4\cdot2 - 1\cdot1) - 3(8\cdot2 - 1\cdot(-4)) + 3(8\cdot1 - 4\cdot(-4)) = 2(8-1) - 3(16+4) + 3(8+16) = 14 - 60 + 72 = 26
$$

(c)  To find the eigenvalues of $B$ , we solve for $\det(B - \lambda I) = 0$ :

$$
B - \lambda I = \begin{pmatrix} 5-\lambda & 1 & -1 \\ -4 & 1-\lambda & 2 \\ 2 & 1 & 2-\lambda \end{pmatrix}
$$

$$
\det(B - \lambda I) = (5-\lambda)((1-\lambda)(2-\lambda) - 2) - ( -4(2-\lambda) - 4) - ( -4 - 2(1-\lambda)) = (5-\lambda)(2 - 3\lambda + \lambda^2 - 2) - (-8 + 4\lambda - 4) - (-4 - 2 + 2\lambda) = (5-\lambda)(\lambda^2 - 3\lambda) - (-12 + 4\lambda) - (-6 + 2\lambda) = 5\lambda^2 - 15\lambda - \lambda^3 + 3\lambda^2 + 12 - 4\lambda + 6 - 2\lambda = -\lambda^3 + 8\lambda^2 - 21\lambda + 18
$$

We are looking for the roots of $-\lambda^3 + 8\lambda^2 - 21\lambda + 18 = 0$ , or equivalently, $\lambda^3 - 8\lambda^2 + 21\lambda - 18 = 0$ .
By trying small integer values, we find that $\lambda = 3$ is a root: $3^3 - 8(3^2) + 21(3) - 18 = 27 - 72 + 63 - 18 = 0$ .
Performing polynomial division, we get $(\lambda - 3)(\lambda^2 - 5\lambda + 6) = 0$ .
Factoring the quadratic gives $(\lambda - 3)(\lambda - 2)(\lambda - 3) = 0$ .
Thus, the eigenvalues are $\lambda = 2, 3, 3$ .

(d)  For $\lambda = 2$ , we have:

$$
(B - 2I)v = \begin{pmatrix} 3 & 1 & -1 \\ -4 & -1 & 2 \\ 2 & 1 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

From the third equation, $2x + y = 0$ , so $y = -2x$ .
From the first equation, $3x + y - z = 0$ , so $3x - 2x - z = 0$ , $x = z$ .
So, the eigenvector is $v = \begin{pmatrix} x \\ -2x \\ x \end{pmatrix} = x \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$ .

For $\lambda = 3$ , we have:

$$
(B - 3I)v = \begin{pmatrix} 2 & 1 & -1 \\ -4 & -2 & 2 \\ 2 & 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

From all three equations, we have $2x + y - z = 0$ , so $z = 2x + y$ .
So, the eigenvector is $v = \begin{pmatrix} x \\ y \\ 2x+y \end{pmatrix} = x \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + y \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$ .

Here the eigenvector for $\lambda=2$ requires $x\ne0$, and that for $\lambda=3$ requires $(x,y)\ne(0,0)$.
