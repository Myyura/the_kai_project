---
sidebar_label: "2020年8月実施 専門基礎科目 第1問"
tags:
  - Saitama-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2020年8月実施 専門基礎科目 第1問

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

1. 以下の問に答えよ. [Solve the following problems.]

(a) 次の行列式を求めよ. [Find the following determinant.]

$$
\begin{vmatrix}
1 & 2 & -1 & 2 \\
-4 & -2 & 1 & 2 \\
0 & 1 & 2 & -1 \\
2 & 1 & 2 & 3
\end{vmatrix}
$$

(b) 行列Aの逆行列を求めよ. [Find the inverse matrix of the matrix A.]

$$
A = \begin{pmatrix}
2 & 6 & 4 \\
-1 & 6 & 3 \\
4 & 2 & 3
\end{pmatrix}
$$

(c) 行列Bの固有値を全て求めよ. [Obtain all eigenvalues of the matrix B.]

$$
B = \begin{pmatrix}
4 & 2 \\
1 & 3
\end{pmatrix}
$$

(d) 問(c)の行列Bを対角化した行列Cを1つ求めよ. [Obtain one of the diagonalized matrices C of the matrix B in Question (c).]

(e) 問(c)の行列Bと整数 $n$ ( $n \geq 1$ ) に対し、 $B^n$ を求めよ. [Obtain $B^n$ for the matrix B in Question (c) and an integer $n$ ( $n \geq 1$ ).]

### 题目描述

1. 回答下列问题。

(a) 计算行列式

$$
\begin{vmatrix}
1&2&-1&2\\
-4&-2&1&2\\
0&1&2&-1\\
2&1&2&3
\end{vmatrix}.
$$

(b) 求矩阵

$$
A=\begin{pmatrix}
2&6&4\\
-1&6&3\\
4&2&3
\end{pmatrix}
$$

的逆矩阵。

(c) 求矩阵

$$
B=\begin{pmatrix}
4&2\\
1&3
\end{pmatrix}
$$

的全部特征值。

(d) 求一个由 (c) 中矩阵 $B$ 对角化得到的对角矩阵 $C$。

(e) 对 (c) 中的矩阵 $B$ 和满足 $n\geq1$ 的整数 $n$，求 $B^n$。

## **Kai**

(a)

$$
\begin{vmatrix}
1 & 2 & -1 & 2 \\
-4 & -2 & 1 & 2 \\
0 & 1 & 2 & -1 \\
2 & 1 & 2 & 3
\end{vmatrix} = 1 \begin{vmatrix}-2 & 1 & 2\\1 & 2 & -1\\1 & 2 & 3\end{vmatrix} - 2 \begin{vmatrix}-4 & 1 & 2\\0 & 2 & -1\\2 & 2 & 3\end{vmatrix} -1 \begin{vmatrix}-4 & -2 & 2\\0 & 1 & -1\\2 & 1 & 3\end{vmatrix} -2 \begin{vmatrix}-4 & -2 & 1\\0 & 1 & 2\\2 & 1 & 2\end{vmatrix}
$$

$$
= 1(-2(6+2) - 1(3+1) + 2(2-2)) - 2(-4(6+2)-1(0+2)+2(0-4)) -1(-4(3+1) + 2(0+2) + 2(0-2)) - 2(-4(2-2) + 2(0-4) + 1(0-2))
$$

$$
= 1(-16 - 4 + 0) - 2(-32 - 2 - 8) - 1(-16 + 4 -4) - 2(0 - 8 - 2)
$$

$$
= -20 - 2(-42) - 1(-16) - 2(-10) = -20 + 84 + 16 + 20 = 100
$$

(b)

$$
A = \begin{pmatrix}
2 & 6 & 4 \\
-1 & 6 & 3 \\
4 & 2 & 3
\end{pmatrix}
$$

$$
det(A) = 2(18-6) - 6(-3-12) + 4(-2-24) = 2(12) - 6(-15) + 4(-26) = 24 + 90 - 104 = 10
$$

$$
C = \begin{pmatrix}
12 & 15 & -26 \\
-10 & -10 & 20 \\
-6 & -10 & 18
\end{pmatrix}
$$

$$
C^T = \begin{pmatrix}
12 & -10 & -6 \\
15 & -10 & -10 \\
-26 & 20 & 18
\end{pmatrix}
$$

$$
A^{-1} = \frac{1}{det(A)} C^T = \frac{1}{10} \begin{pmatrix}
12 & -10 & -6 \\
15 & -10 & -10 \\
-26 & 20 & 18
\end{pmatrix} = \begin{pmatrix}
\frac{6}{5} & -1 & -\frac{3}{5} \\
\frac{3}{2} & -1 & -1 \\
-\frac{13}{5} & 2 & \frac{9}{5}
\end{pmatrix}
$$

(c)

$$
B = \begin{pmatrix}
4 & 2 \\
1 & 3
\end{pmatrix}
$$

$$
det(B - \lambda I) = (4 - \lambda)(3 - \lambda) - 2 = 12 - 7\lambda + \lambda^2 - 2 = \lambda^2 - 7\lambda + 10 = (\lambda - 2)(\lambda - 5) = 0
$$

$$
\lambda_1 = 2, \lambda_2 = 5
$$

(d) For $\lambda_1 = 2$ , $(B - \lambda_1 I)v_1 = 0$ $\Rightarrow$ $\begin{pmatrix} 2 & 2 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$ $\Rightarrow$ $x = -y$ . So $v_1 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$ .

For $\lambda_2 = 5$ , $(B - \lambda_2 I)v_2 = 0$ $\Rightarrow$ $\begin{pmatrix} -1 & 2 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$ $\Rightarrow$ $x = 2y$ . So $v_2 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ .

Then $P = \begin{pmatrix} 1 & 2 \\ -1 & 1 \end{pmatrix}$ and $C = P^{-1}BP = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}$ . Also, $P^{-1} = \frac{1}{3} \begin{pmatrix} 1 & -2 \\ 1 & 1 \end{pmatrix}$ . Therefore, the diagonalized matrix is $C = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}$ .

(e)

$$
B^n = P D^n P^{-1} = \begin{pmatrix} 1 & 2 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} 2^n & 0 \\ 0 & 5^n \end{pmatrix} \frac{1}{3} \begin{pmatrix} 1 & -2 \\ 1 & 1 \end{pmatrix} = \frac{1}{3} \begin{pmatrix} 2^n & 2 \cdot 5^n \\ -2^n & 5^n \end{pmatrix} \begin{pmatrix} 1 & -2 \\ 1 & 1 \end{pmatrix}
$$

$$
= \frac{1}{3} \begin{pmatrix} 2^n + 2 \cdot 5^n & -2 \cdot 2^n + 2 \cdot 5^n \\ -2^n + 5^n & 2 \cdot 2^n + 5^n \end{pmatrix}
$$
