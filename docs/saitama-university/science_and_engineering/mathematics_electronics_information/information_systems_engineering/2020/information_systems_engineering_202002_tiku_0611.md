---
sidebar_label: "2020年2月実施 线性代数"
tags:
  - Saitama-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2020年2月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

1. 以下の問に答えよ. [Solve the following problems.]

(a) 行列 $A$ の逆行列を求めよ. [Find the inverse matrix of the matrix $A$ .]

$$
A = \begin{pmatrix} 7 & 3 & 1 \\ 2 & 11 & 3 \\ 5 & 4 & 3 \end{pmatrix}
$$

(b) 次の行列式を求めよ. [Find the following determinant.]

$$
\begin{vmatrix} 11 & -2 & 5 \\ 4 & 5 & 6 \\ -7 & 13 & 3 \end{vmatrix}
$$

(c) 行列 $B$ の固有値を全て求めよ. [Obtain all eigenvalues of the matrix $B$ .]

$$
B = \begin{pmatrix} 12 & -6 & 10 \\ -2 & 8 & -10 \\ -6 & 6 & -8 \end{pmatrix}
$$

(d) 行列 $B$ の固有値に対応する固有ベクトルを求めよ. [Obtain eigenvectors corresponding to the eigenvalues of the matrix $B$ .]

### 题目描述

1. 回答下列问题。

(a) 求矩阵

$$
A=\begin{pmatrix}
7&3&1\\
2&11&3\\
5&4&3
\end{pmatrix}
$$

的逆矩阵。

(b) 计算行列式

$$
\begin{vmatrix}
11&-2&5\\
4&5&6\\
-7&13&3
\end{vmatrix}.
$$

(c) 求矩阵

$$
B=\begin{pmatrix}
12&-6&10\\
-2&8&-10\\
-6&6&-8
\end{pmatrix}
$$

的全部特征值。

(d) 求与矩阵 $B$ 的各特征值对应的特征向量。

## **Kai**

(a) To find the inverse of matrix $A$ , we first find the determinant of $A$ :

$$
\det(A) = 7(11\cdot3 - 3\cdot4) - 3(2\cdot3 - 3\cdot5) + 1(2\cdot4 - 11\cdot5) = 7(33 - 12) - 3(6 - 15) + (8 - 55) = 7(21) - 3(-9) + (-47) = 147 + 27 - 47 = 127
$$

Since $\det(A) = 127 \neq 0$ , the inverse of $A$ exists. Now we find the adjugate of $A$ :

$$
C = \begin{pmatrix} 21 & 9 & -47 \\ -5 & 16 & -13 \\ -2 & -19 & 71 \end{pmatrix}
$$

Then $adj(A) = C^T = \begin{pmatrix} 21 & -5 & -2 \\ 9 & 16 & -19 \\ -47 & -13 & 71 \end{pmatrix}$
Therefore, the inverse of $A$ is:

$$
A^{-1} = \frac{1}{\det(A)}adj(A) = \frac{1}{127}\begin{pmatrix} 21 & -5 & -2 \\ 9 & 16 & -19 \\ -47 & -13 & 71 \end{pmatrix}
$$

(b) To find the determinant of the given matrix, we expand along the first row:

$$
\begin{vmatrix} 11 & -2 & 5 \\ 4 & 5 & 6 \\ -7 & 13 & 3 \end{vmatrix} = 11\begin{vmatrix} 5 & 6 \\ 13 & 3 \end{vmatrix} - (-2)\begin{vmatrix} 4 & 6 \\ -7 & 3 \end{vmatrix} + 5\begin{vmatrix} 4 & 5 \\ -7 & 13 \end{vmatrix} = 11(5\cdot3 - 6\cdot13) + 2(4\cdot3 - 6\cdot(-7)) + 5(4\cdot13 - 5\cdot(-7)) = 11(15 - 78) + 2(12 + 42) + 5(52 + 35) = 11(-63) + 2(54) + 5(87) = -693 + 108 + 435 = -150
$$

(c) To find the eigenvalues of matrix $B$ , we need to solve the characteristic equation $\det(B - \lambda I) = 0$ :

$$
B - \lambda I = \begin{pmatrix} 12 - \lambda & -6 & 10 \\ -2 & 8 - \lambda & -10 \\ -6 & 6 & -8 - \lambda \end{pmatrix}
$$

$$
\begin{aligned} \det(B - \lambda I) &= (12-\lambda)((8-\lambda)(-8-\lambda) - (-10)(6)) - (-6)((-2)(-8-\lambda) - (-10)(-6)) + 10((-2)(6) - (8-\lambda)(-6)) \\ &= (12-\lambda)(\lambda^2 - 64 + 60) + 6(16+2\lambda - 60) + 10(-12 + 48 - 6\lambda) \\ &= (12-\lambda)(\lambda^2 - 4) + 6(2\lambda - 44) + 10(36 - 6\lambda) \\ &= 12\lambda^2 - 48 - \lambda^3 + 4\lambda + 12\lambda - 264 + 360 - 60\lambda \\ &= -\lambda^3 + 12\lambda^2 - 44\lambda + 48 \end{aligned}
$$

$-\lambda^3 + 12\lambda^2 - 44\lambda + 48=0$
$\lambda^3 -12\lambda^2+44\lambda-48=0$
$(\lambda-2)(\lambda^2-10\lambda+24)=0$
$(\lambda-2)(\lambda-4)(\lambda-6)=0$
So, the eigenvalues are $\lambda_1 = 2$ , $\lambda_2 = 4$ , $\lambda_3 = 6$ .

(d) Since we have the eigenvalues, we can find the corresponding eigenvectors.
For $\lambda_1 = 2$ :

$$
(B - 2I)v_1 = 0 \Rightarrow \begin{pmatrix} 10 & -6 & 10 \\ -2 & 6 & -10 \\ -6 & 6 & -10 \end{pmatrix}v_1 = 0
$$

Let $v_1 = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ . Then we have:

$$
10x - 6y + 10z = 0 \\ -2x + 6y - 10z = 0 \\ -6x + 6y - 10z = 0
$$

$5x - 3y + 5z = 0$ and $-x+3y-5z =0$ and $-3x+3y-5z = 0$ .
Solving these equations gives $x=0$ and $5z=3y$ , so we may take
$v_1 = \begin{pmatrix} 0 \\ 5 \\ 3 \end{pmatrix}$ .

Similarly, for $\lambda_2 = 4$ :

$$
(B - 4I)v_2 = 0 \Rightarrow \begin{pmatrix} 8 & -6 & 10 \\ -2 & 4 & -10 \\ -6 & 6 & -12 \end{pmatrix}v_2 = 0
$$

Solving these equations, we get $v_2 = \begin{pmatrix} 1 \\ 3 \\ 1 \end{pmatrix}$

Finally, for $\lambda_3 = 6$ :

$$
(B - 6I)v_3 = 0 \Rightarrow \begin{pmatrix} 6 & -6 & 10 \\ -2 & 2 & -10 \\ -6 & 6 & -14 \end{pmatrix}v_3 = 0
$$

Solving these equations, we get $v_3 = \begin{pmatrix} 2 \\ 2 \\ 0 \end{pmatrix}$ or $\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$
