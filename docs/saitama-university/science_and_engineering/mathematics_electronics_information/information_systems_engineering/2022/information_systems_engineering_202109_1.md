---
sidebar_label: "2021年9月実施 専門基礎科目 第1問"
tags:
  - Saitama-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報工学PG 2021年9月実施 専門基礎科目 第1問

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問に答えよ。[ Solve the following problems. ]

$$
A = \begin{pmatrix}
1 & 1 & 1 \\
2 & -2 & 2 \\
1 & 3 & -1
\end{pmatrix}
$$

(a) 行列 $A$ の行列式を求めよ。[ Find the determinant of the matrix A. ]

(b) 行列 $A$ の逆行列を求めよ。[ Find the inverse matrix of the matrix A. ]

(c) 行列 $A$ の固有値を求めよ。[ Find the eigenvalues of the matrix A. ]

(d) 行列 $A$ の固有ベクトルを求めよ。[ Find the eigenvectors of the matrix A. ]

### 题目描述

对矩阵

$$
A=\begin{pmatrix}
1&1&1\\
2&-2&2\\
1&3&-1
\end{pmatrix},
$$

回答下列问题。

(a) 求矩阵 $A$ 的行列式。

(b) 求矩阵 $A$ 的逆矩阵。

(c) 求矩阵 $A$ 的特征值。

(d) 求矩阵 $A$ 的特征向量。

## **Kai**

(a)  Find the determinant of matrix A.

$$
\begin{aligned}
det(A) &= \begin{vmatrix} 1 & 1 & 1 \\ 2 & -2 & 2 \\ 1 & 3 & -1 \end{vmatrix} \\
&= 1 \cdot \begin{vmatrix} -2 & 2 \\ 3 & -1 \end{vmatrix} - 1 \cdot \begin{vmatrix} 2 & 2 \\ 1 & -1 \end{vmatrix} + 1 \cdot \begin{vmatrix} 2 & -2 \\ 1 & 3 \end{vmatrix} \\
&= 1 \cdot ((-2)(-1) - (2)(3)) - 1 \cdot ((2)(-1) - (2)(1)) + 1 \cdot ((2)(3) - (-2)(1)) \\
&= (2 - 6) - (-2 - 2) + (6 + 2) \\
&= -4 - (-4) + 8 \\
&= -4 + 4 + 8 \\
&= 8\end{aligned}
$$

So, $\det(A) = 8$ .

(b) Find the inverse matrix of matrix A.
First, find the matrix of cofactors:

$$
C = \begin{pmatrix} \begin{vmatrix} -2 & 2 \\ 3 & -1 \end{vmatrix} & -\begin{vmatrix} 2 & 2 \\ 1 & -1 \end{vmatrix} & \begin{vmatrix} 2 & -2 \\ 1 & 3 \end{vmatrix} \\ -\begin{vmatrix} 1 & 1 \\ 3 & -1 \end{vmatrix} & \begin{vmatrix} 1 & 1 \\ 1 & -1 \end{vmatrix} & -\begin{vmatrix} 1 & 1 \\ 1 & 3 \end{vmatrix} \\ \begin{vmatrix} 1 & 1 \\ -2 & 2 \end{vmatrix} & -\begin{vmatrix} 1 & 1 \\ 2 & 2 \end{vmatrix} & \begin{vmatrix} 1 & 1 \\ 2 & -2 \end{vmatrix} \end{pmatrix} = \begin{pmatrix} -4 & 4 & 8 \\ 4 & -2 & -2 \\ 4 & 0 & -4 \end{pmatrix}
$$

Then, find the adjugate matrix:

$$
adj(A) = C^T = \begin{pmatrix} -4 & 4 & 4 \\ 4 & -2 & 0 \\ 8 & -2 & -4 \end{pmatrix}
$$

Finally, find the inverse matrix:

$$
A^{-1} = \frac{1}{\det(A)} adj(A) = \frac{1}{8} \begin{pmatrix} -4 & 4 & 4 \\ 4 & -2 & 0 \\ 8 & -2 & -4 \end{pmatrix} = \begin{pmatrix} -\frac{1}{2} & \frac{1}{2} & \frac{1}{2} \\ \frac{1}{2} & -\frac{1}{4} & 0 \\ 1 & -\frac{1}{4} & -\frac{1}{2} \end{pmatrix}
$$

(c) Find the eigenvalues of matrix A.
To find eigenvalues, solve $\det(A - \lambda I) = 0$ .

$$
\begin{aligned}
A - \lambda I &= \begin{pmatrix} 1-\lambda & 1 & 1 \\ 2 & -2-\lambda & 2 \\ 1 & 3 & -1-\lambda \end{pmatrix} \\
\det(A - \lambda I) &= (1-\lambda)((-2-\lambda)(-1-\lambda) - 6) - 1(2(-1-\lambda) - 2) + 1(6 - (-2-\lambda)) \\
&= (1-\lambda)(2 + 2\lambda + \lambda + \lambda^2 - 6) - (-2 - 2\lambda - 2) + (6 + 2 + \lambda) \\
&= (1-\lambda)(\lambda^2 + 3\lambda - 4) + 4 + 2\lambda + 8 + \lambda \\
&= \lambda^2 + 3\lambda - 4 - \lambda^3 - 3\lambda^2 + 4\lambda + 12 + 3\lambda \\
&= -\lambda^3 - 2\lambda^2 + 10\lambda + 8 \\
&=-(\lambda+4)(\lambda^2-2\lambda-2).
\end{aligned}
$$

Therefore, the eigenvalues are

$$
\boxed{\lambda=-4,\quad 1-\sqrt3,\quad 1+\sqrt3}.
$$

(d) For $\lambda=-4$ , we may take

$$
v_1=\begin{pmatrix}0\\-1\\1\end{pmatrix}.
$$

For a root $\lambda$ of $\lambda^2-2\lambda-2=0$ , a corresponding eigenvector is

$$
v(\lambda)=
\begin{pmatrix}
\lambda+4\\
2\lambda\\
3\lambda-2
\end{pmatrix}.
$$

Thus, for $\lambda=1-\sqrt3$ and $\lambda=1+\sqrt3$ , respectively, we may take

$$
v_2=
\begin{pmatrix}
5-\sqrt3\\
2-2\sqrt3\\
1-3\sqrt3
\end{pmatrix},
\qquad
v_3=
\begin{pmatrix}
5+\sqrt3\\
2+2\sqrt3\\
1+3\sqrt3
\end{pmatrix}.
$$

Each eigenspace is the span of the corresponding vector.
