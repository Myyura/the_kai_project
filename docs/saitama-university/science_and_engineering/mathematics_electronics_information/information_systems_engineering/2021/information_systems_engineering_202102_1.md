---
sidebar_label: "2021年2月実施 専門基礎科目 第1問"
tags:
  - Saitama-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2021年2月実施 専門基礎科目 第1問

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

1. 以下の問に答えよ。 [Solve the following problems.]

(a) 次の行列式を求めよ。 [Find the following determinant.]

$$
\begin{vmatrix}
1 & 2 & 3 & 4 \\
2 & -1 & 2 & 1 \\
5 & 2 & 1 & -1 \\
4 & -2 & 1 & 2
\end{vmatrix}
$$

(b) 行列 A の逆行列を求めよ。 [Find the inverse matrix of the matrix A.]

$$
A = \begin{pmatrix}
4 & 3 & 1 \\
2 & 5 & 4 \\
1 & 2 & 4
\end{pmatrix}
$$

(c) 行列 B の固有値を全て求めよ。 [Obtain all eigenvalues of the matrix B.]

$$
B = \begin{pmatrix}
3 & -2 \\
1 & 6
\end{pmatrix}
$$

(d) 問 (c) の行列 B を対角化した行列 C を 1 つ求めよ。 [Obtain a diagonalized matrix C of the matrix B in Question (c).]

(e) 問 (c) の行列 B と整数 $n$ ( $n \geq 1$ ) に対し、 $B^n$ を求めよ。 [Obtain $B^n$ for the matrix B in Question (c) and an integer $n$ ( $n \geq 1$ ).]

### 题目描述

1. 回答下列问题。

(a) 计算行列式

$$
\begin{vmatrix}
1&2&3&4\\
2&-1&2&1\\
5&2&1&-1\\
4&-2&1&2
\end{vmatrix}.
$$

(b) 求矩阵

$$
A=\begin{pmatrix}
4&3&1\\
2&5&4\\
1&2&4
\end{pmatrix}
$$

的逆矩阵。

(c) 求矩阵

$$
B=\begin{pmatrix}
3&-2\\
1&6
\end{pmatrix}
$$

的全部特征值。

(d) 求一个由 (c) 中矩阵 $B$ 对角化得到的对角矩阵 $C$。

(e) 对 (c) 中的矩阵 $B$ 和满足 $n\geq1$ 的整数 $n$，求 $B^n$。

## **Kai**

(a)  We can compute the determinant of the given matrix.

$$
\begin{vmatrix}
1 & 2 & 3 & 4 \\
2 & -1 & 2 & 1 \\
5 & 2 & 1 & -1 \\
4 & -2 & 1 & 2
\end{vmatrix} = 1 \begin{vmatrix}-1 & 2 & 1 \\ 2 & 1 & -1 \\ -2 & 1 & 2\end{vmatrix} - 2 \begin{vmatrix}2 & 2 & 1 \\ 5 & 1 & -1 \\ 4 & 1 & 2\end{vmatrix} + 3 \begin{vmatrix}2 & -1 & 1 \\ 5 & 2 & -1 \\ 4 & -2 & 2\end{vmatrix} - 4 \begin{vmatrix}2 & -1 & 2 \\ 5 & 2 & 1 \\ 4 & -2 & 1\end{vmatrix}
$$

$$
\begin{vmatrix}-1 & 2 & 1 \\ 2 & 1 & -1 \\ -2 & 1 & 2\end{vmatrix} = -1(2+1) - 2(4-2) + 1(2+2) = -3 - 4 + 4 = -3
$$

$$
\begin{vmatrix}2 & 2 & 1 \\ 5 & 1 & -1 \\ 4 & 1 & 2\end{vmatrix} = 2(2+1) - 2(10+4) + 1(5-4) = 6 - 28 + 1 = -21
$$

$$
\begin{vmatrix}2 & -1 & 1 \\ 5 & 2 & -1 \\ 4 & -2 & 2\end{vmatrix} = 2(4-2) - (-1)(10+4) + 1(-10-8) = 4 + 14 - 18 = 0
$$

$$
\begin{vmatrix}2 & -1 & 2 \\ 5 & 2 & 1 \\ 4 & -2 & 1\end{vmatrix} = 2(2+2) - (-1)(5-4) + 2(-10-8) = 8 + 1 - 36 = -27
$$

Therefore, the determinant is $1(-3) - 2(-21) + 3(0) - 4(-27) = -3 + 42 + 0 + 108 = 147$ .

(b) $A = \begin{pmatrix} 4 & 3 & 1 \\ 2 & 5 & 4 \\ 1 & 2 & 4 \end{pmatrix}$ . We can find the inverse of A by computing the adjoint matrix and the determinant of A.
$\det(A) = 4(20-8) - 3(8-4) + 1(4-5) = 48 - 12 - 1 = 35$ .
To find the adjoint, compute the cofactor matrix:
$C_{11} = 20-8 = 12, C_{12} = -(8-4) = -4, C_{13} = 4-5 = -1$
$C_{21} = -(12-2) = -10, C_{22} = 16-1 = 15, C_{23} = -(8-3) = -5$
$C_{31} = 12-5 = 7, C_{32} = -(16-2) = -14, C_{33} = 20-6 = 14$
$C = \begin{pmatrix} 12 & -4 & -1 \\ -10 & 15 & -5 \\ 7 & -14 & 14 \end{pmatrix}$
$adj(A) = C^T = \begin{pmatrix} 12 & -10 & 7 \\ -4 & 15 & -14 \\ -1 & -5 & 14 \end{pmatrix}$
$A^{-1} = \frac{1}{35} \begin{pmatrix} 12 & -10 & 7 \\ -4 & 15 & -14 \\ -1 & -5 & 14 \end{pmatrix}$

(c) To find the eigenvalues of matrix B, we solve the characteristic equation $\det(B - \lambda I) = 0$ .
$B - \lambda I = \begin{pmatrix} 3-\lambda & -2 \\ 1 & 6-\lambda \end{pmatrix}$ .
$\det(B - \lambda I) = (3-\lambda)(6-\lambda) - (-2)(1) = 18 - 9\lambda + \lambda^2 + 2 = \lambda^2 - 9\lambda + 20 = 0$ .
$(\lambda - 4)(\lambda - 5) = 0$ . Thus, the eigenvalues are $\lambda_1 = 4$ and $\lambda_2 = 5$ .

(d) For $\lambda_1 = 4$ , we solve $(B - 4I)v_1 = 0$ , where $v_1 = \begin{pmatrix} x \\ y \end{pmatrix}$ .
$B - 4I = \begin{pmatrix} -1 & -2 \\ 1 & 2 \end{pmatrix}$ .
$-x - 2y = 0$ , so $x = -2y$ . Let $y = 1$ , then $x = -2$ . Thus, $v_1 = \begin{pmatrix} -2 \\ 1 \end{pmatrix}$ .
For $\lambda_2 = 5$ , we solve $(B - 5I)v_2 = 0$ , where $v_2 = \begin{pmatrix} x \\ y \end{pmatrix}$ .
$B - 5I = \begin{pmatrix} -2 & -2 \\ 1 & 1 \end{pmatrix}$ .
$-2x - 2y = 0$ , so $x = -y$ . Let $y = 1$ , then $x = -1$ . Thus, $v_2 = \begin{pmatrix} -1 \\ 1 \end{pmatrix}$ .
Let $P = \begin{pmatrix} -2 & -1 \\ 1 & 1 \end{pmatrix}$ . Then $P^{-1}BP = D$ , where $D$ is the diagonal matrix with eigenvalues on the diagonal.
$\det(P) = -2 + 1 = -1$ . $P^{-1} = \frac{1}{-1} \begin{pmatrix} 1 & 1 \\ -1 & -2 \end{pmatrix} = \begin{pmatrix} -1 & -1 \\ 1 & 2 \end{pmatrix}$ .
So $C = D = \begin{pmatrix} 4 & 0 \\ 0 & 5 \end{pmatrix}$ .

(e) Since $B = PDP^{-1}$ , $B^n = PD^nP^{-1} = \begin{pmatrix} -2 & -1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 4^n & 0 \\ 0 & 5^n \end{pmatrix} \begin{pmatrix} -1 & -1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} -2 \cdot 4^n & -5^n \\ 4^n & 5^n \end{pmatrix} \begin{pmatrix} -1 & -1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 \cdot 4^n - 5^n & 2 \cdot 4^n - 2 \cdot 5^n \\ -4^n + 5^n & -4^n + 2 \cdot 5^n \end{pmatrix}$ .
