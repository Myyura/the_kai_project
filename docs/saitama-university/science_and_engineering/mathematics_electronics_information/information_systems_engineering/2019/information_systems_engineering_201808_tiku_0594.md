---
sidebar_label: "2018年8月実施 線形代数"
tags:
  - Saitama-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2018年8月実施 線形代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

1. 次の対称行列 $A$ について考える. [Consider the following symmetric matrix $A$ .]

$$
A = \begin{pmatrix} 3 & 0 & -1 \\ 0 & 3 & -1 \\ -1 & -1 & 4 \end{pmatrix}
$$

以下の問に答えよ. [Solve the following problems.]

(a) 対称行列 $A$ の逆行列を求めよ. [Find the inverse matrix of the symmetric matrix $A$ .]

(b) 対称行列 $A$ の固有値と固有ベクトルを求めよ. [Find the eigenvalues and eigenvectors of the symmetric matrix $A$ .]

(c) 対称行列 $A$ を対角化するための直交行列 $U$ を求めよ. また $A$ を $U$ で対角化したときの対角行列 $D$ を求めよ. [Find an orthogonal matrix $U$ for diagonalizing the symmetric matrix $A$ . Find a diagonal matrix $D$ by diagonalizing $A$ with $U$ .]

(d) 正の整数 $n$ に対して、 $A^n$ を求めよ. [Find $A^n$ for a positive integer $n$ .]

(e) 変数 $x, y, z$ が $x^2 + y^2 + z^2 = 1$ を満たすとき、2次形式 $f(x,y,z) = 3x^2 + 3y^2 + 4z^2 - 2yz - 2zx$ の最大値と最小値を求めよ. [Find the maximum and minimum of the quadratic form $f(x,y,z) = 3x^2 + 3y^2 + 4z^2 - 2yz - 2zx$ , if the variables $x, y$ , and $z$ satisfy $x^2 + y^2 + z^2 = 1$ .]

### 题目描述

1. 考虑对称矩阵

$$
A=\begin{pmatrix}
3&0&-1\\
0&3&-1\\
-1&-1&4
\end{pmatrix}.
$$

回答下列问题。

(a) 求对称矩阵 $A$ 的逆矩阵。

(b) 求对称矩阵 $A$ 的特征值与特征向量。

(c) 求一个将对称矩阵 $A$ 对角化的正交矩阵 $U$，并求用 $U$ 对角化 $A$ 所得的对角矩阵 $D$。

(d) 对正整数 $n$，求 $A^n$。

(e) 当变量 $x,y,z$ 满足

$$
x^2+y^2+z^2=1
$$

时，求二次型

$$
f(x,y,z)=3x^2+3y^2+4z^2-2yz-2zx
$$

的最大值与最小值。

## **Kai**

(a)

$$
A = \begin{pmatrix} 3 & 0 & -1 \\ 0 & 3 & -1 \\ -1 & -1 & 4 \end{pmatrix}
$$

$\det(A) = 3(12-1) - 0 + (-1)(0+3) = 33 - 3 = 30$

$$
C = \begin{pmatrix} 11 & 1 & 3 \\ 1 & 11 & 3 \\ 3 & 3 & 9 \end{pmatrix}
$$

$$
C^T = \begin{pmatrix} 11 & 1 & 3 \\ 1 & 11 & 3 \\ 3 & 3 & 9 \end{pmatrix}
$$

$$
A^{-1} = \frac{1}{30} \begin{pmatrix} 11 & 1 & 3 \\ 1 & 11 & 3 \\ 3 & 3 & 9 \end{pmatrix}
$$

(b)

$$
\det(A - \lambda I) = (3-\lambda)((3-\lambda)(4-\lambda) - 1) + (-1)(0 + (3-\lambda)) = (3-\lambda)(12 - 7\lambda + \lambda^2 - 1) - 3 + \lambda = (3-\lambda)(\lambda^2 - 7\lambda + 11) - 3 + \lambda = 3\lambda^2 - 21\lambda + 33 - \lambda^3 + 7\lambda^2 - 11\lambda - 3 + \lambda = -\lambda^3 + 10\lambda^2 - 31\lambda + 30 = -(\lambda - 2)(\lambda - 3)(\lambda - 5)
$$

So the eigenvalues are $\lambda = 2, 3, 5$ .

For $\lambda = 2$ : $(A - 2I)v = 0 \Rightarrow \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \\ -1 & -1 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
$x = z, y = z$ . Let $z = 1$ , then $v_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ .

For $\lambda = 3$ : $(A - 3I)v = 0 \Rightarrow \begin{pmatrix} 0 & 0 & -1 \\ 0 & 0 & -1 \\ -1 & -1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
$z = 0, x = -y$ . Let $y = 1$ , then $x = -1$ , so $v_2 = \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}$ .

For $\lambda = 5$ : $(A - 5I)v = 0 \Rightarrow \begin{pmatrix} -2 & 0 & -1 \\ 0 & -2 & -1 \\ -1 & -1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
$-2x = z, -2y = z, x + y + z = 0 \Rightarrow x + y - 2x = 0 \Rightarrow y = x$ . $-2x = z, x = y$ . Let $x = 1$ , then $y = 1, z = -2$ , so $v_3 = \begin{pmatrix} 1 \\ 1 \\ -2 \end{pmatrix}$ .

(c)
Since A is symmetric, the eigenvectors corresponding to distinct eigenvalues are orthogonal. Thus, $U = \begin{pmatrix} \frac{1}{\sqrt{3}} & -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} \\ \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} \\ \frac{1}{\sqrt{3}} & 0 & -\frac{2}{\sqrt{6}} \end{pmatrix}$ and $D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 5 \end{pmatrix}$ .

(d)
Since $A = U D U^T$ , $A^n = U D^n U^T$ , where $D^n = \begin{pmatrix} 2^n & 0 & 0 \\ 0 & 3^n & 0 \\ 0 & 0 & 5^n \end{pmatrix}$ .

$A^n = \begin{pmatrix} \frac{1}{\sqrt{3}} & -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} \\ \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} \\ \frac{1}{\sqrt{3}} & 0 & -\frac{2}{\sqrt{6}} \end{pmatrix} \begin{pmatrix} 2^n & 0 & 0 \\ 0 & 3^n & 0 \\ 0 & 0 & 5^n \end{pmatrix} \begin{pmatrix} \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} \\ -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\ \frac{1}{\sqrt{6}} & \frac{1}{\sqrt{6}} & -\frac{2}{\sqrt{6}} \end{pmatrix}$

(e)
Let $x = \frac{1}{\sqrt{3}} x' - \frac{1}{\sqrt{2}} y' + \frac{1}{\sqrt{6}} z'$ , $y = \frac{1}{\sqrt{3}} x' + \frac{1}{\sqrt{2}} y' + \frac{1}{\sqrt{6}} z'$ , $z = \frac{1}{\sqrt{3}} x' - \frac{2}{\sqrt{6}} z'$ . Then $3x^2 + 3y^2 + 4z^2 - 2yz - 2zx = 2x'^2 + 3y'^2 + 5z'^2$ .
Since $x^2 + y^2 + z^2 = 1$ , $x'^2 + y'^2 + z'^2 = 1$ .
Then $2x'^2 + 3y'^2 + 5z'^2 = 2(x'^2 + y'^2 + z'^2) + y'^2 + 3z'^2 = 2 + y'^2 + 3z'^2$ .
The minimum is 2 (when $y' = z' = 0$ ) and the maximum is 5 (when $x' = y' = 0$ ).
