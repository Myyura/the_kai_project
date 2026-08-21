---
sidebar_label: "2018年2月実施 线性代数"
tags:
  - Saitama-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2018年2月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

1. 次の2次形式について考える。[ Consider the following quadratic form. ]

$$
f(x, y, z) = 3x^2 + 3y^2 + 3z^2 + 2xy + 2yz + 2zx
$$

以下の問に答えよ. [Solve the following problems. ]

(a) ベクトル $x = (x, y, z)^T$ と対称行列 $A$ を用いて、2次形式 $f(x,y,z) = x^T Ax$ と表すとき、 $A$ を求めよ. ここで上付添字 $^T$ は転置を表す. [ Find a symmetric matrix $A$ when the quadratic form is described as $f(x, y, z) = x^T Ax$ using a vector $x = (x, y, z)^T$ and the symmetric matrix $A$ . The superscript $^T$ denotes transposition. ]

(b) 前問 (a) で求めた対称行列 $A$ の固有値と固有ベクトルを求めよ. [ Find the eigenvalues and eigenvectors of the symmetric matrix $A$ obtained in the problem (a). ]

(c) 直交行列を用いて,前問 (a)で求めた対称行列 $A$ を対角化せよ. [Diagonalize the symmetric matrix $A$ obtained in the problem (a) using an orthogonal matrix. ]

(d) 変数 $x, y, z$ が $x^2 + y^2 + z^2 = 1$ を満たすとき、2次形式 $f(x,y,z)$ の最大値と最小値を求めよ. [ Find the maximum and minimum of the quadratic form $f(x, y, z)$ , if the variables $x, y$ , and $z$ satisfy $x^2 + y^2 + z^2 = 1$ . ]

(e) 前問 (d) で求めた $f(x,y,z)$ の最大値および最小値を与える $x,y,z$ の値を一組ずつ求めよ. [ Find the values of $x, y$ , and $z$ for the maximum and minimum of $f (x, y, z)$ obtained in the problem (d), respectively. ]

### 题目描述

1. 考虑二次型

$$
f(x,y,z)=3x^2+3y^2+3z^2+2xy+2yz+2zx.
$$

回答下列问题。

(a) 使用向量

$$
\mathbf{x}=(x,y,z)^T
$$

与对称矩阵 $A$，将二次型表示为

$$
f(x,y,z)=\mathbf{x}^TA\mathbf{x}.
$$

求 $A$。这里上标 $T$ 表示转置。

(b) 求 (a) 中对称矩阵 $A$ 的特征值与特征向量。

(c) 使用正交矩阵将 (a) 中的对称矩阵 $A$ 对角化。

(d) 当变量 $x,y,z$ 满足

$$
x^2+y^2+z^2=1
$$

时，求二次型 $f(x,y,z)$ 的最大值与最小值。

(e) 对 (d) 中的最大值与最小值，分别求一组使 $f(x,y,z)$ 取得该值的 $x,y,z$。

## **Kai**

### (a) Solution:
Let $x = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ . Then $f(x, y, z) = 3x^2 + 3y^2 + 3z^2 + 2xy + 2yz + 2zx = x^T A x$ , where $A$ is a symmetric matrix.

$$
x^T A x = \begin{pmatrix} x & y & z \end{pmatrix} \begin{pmatrix} a & b & c \\ b & d & e \\ c & e & f \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix}
$$

$$
= ax^2 + dy^2 + fz^2 + 2bxy + 2cxz + 2eyz
$$

Comparing the coefficients, we have:
$a = 3, d = 3, f = 3, b = 1, c = 1, e = 1$
Thus, the matrix $A$ is:

$$
A = \begin{pmatrix} 3 & 1 & 1 \\ 1 & 3 & 1 \\ 1 & 1 & 3 \end{pmatrix}
$$

### (b) Solution:
To find the eigenvalues of $A$ , we need to solve the characteristic equation $|A - \lambda I| = 0$ .

$$
|A - \lambda I| = \begin{vmatrix} 3-\lambda & 1 & 1 \\ 1 & 3-\lambda & 1 \\ 1 & 1 & 3-\lambda \end{vmatrix} = (3-\lambda)[(3-\lambda)^2 - 1] - 1[(3-\lambda)-1] + 1[1-(3-\lambda)] = 0
$$

$$
(3-\lambda)((3-\lambda)^2 - 1) - (2-\lambda) - (2-\lambda) = 0
$$

$$
(3-\lambda)(9 - 6\lambda + \lambda^2 - 1) - 4 + 2\lambda = 0
$$

$$
(3-\lambda)(\lambda^2 - 6\lambda + 8) - 4 + 2\lambda = 0
$$

$$
3\lambda^2 - 18\lambda + 24 - \lambda^3 + 6\lambda^2 - 8\lambda - 4 + 2\lambda = 0
$$

$$
-\lambda^3 + 9\lambda^2 - 24\lambda + 20 = 0
$$

$$
\lambda^3 - 9\lambda^2 + 24\lambda - 20 = 0
$$

$$
(\lambda - 2)(\lambda^2 - 7\lambda + 10) = 0
$$

$$
(\lambda - 2)(\lambda - 2)(\lambda - 5) = 0
$$

So, the eigenvalues are $\lambda_1 = 2, \lambda_2 = 2, \lambda_3 = 5$ .

For $\lambda = 2$ :

$$
(A - 2I)v = 0 \Rightarrow \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$$
x + y + z = 0 \Rightarrow z = -x - y
$$

The eigenvectors are of the form $v = \begin{pmatrix} x \\ y \\ -x-y \end{pmatrix} = x\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} + y\begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$ .
Let $v_1 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$ and $v_2 = \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$ . These are linearly independent, but not orthogonal.
We use Gram-Schmidt to orthogonalize them:
$u_1 = v_1 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$
$u_2 = v_2 - \frac{v_2 \cdot u_1}{u_1 \cdot u_1} u_1 = \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix} - \frac{1}{2} \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} = \begin{pmatrix} -1/2 \\ 1 \\ -1/2 \end{pmatrix}$ . We can take $u_2 = \begin{pmatrix} -1 \\ 2 \\ -1 \end{pmatrix}$ .
So the eigenvectors corresponding to $\lambda = 2$ are $u_1 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$ and $u_2 = \begin{pmatrix} -1 \\ 2 \\ -1 \end{pmatrix}$ .

For $\lambda = 5$ :

$$
(A - 5I)v = 0 \Rightarrow \begin{pmatrix} -2 & 1 & 1 \\ 1 & -2 & 1 \\ 1 & 1 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

From the first equation, $-2x + y + z = 0$ . From the second equation, $x - 2y + z = 0$ . Subtracting the two equations gives $-3x + 3y = 0 \Rightarrow x = y$ . Substituting $x=y$ into the first equation: $-2x + x + z = 0 \Rightarrow z = x$ . So the eigenvector is of the form $v = \begin{pmatrix} x \\ x \\ x \end{pmatrix}$ . We can take $v_3 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ .

### (c) Solution:
We normalize the eigenvectors obtained in (b):
$u_1 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} \Rightarrow \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$
$u_2 = \begin{pmatrix} -1 \\ 2 \\ -1 \end{pmatrix} \Rightarrow \frac{1}{\sqrt{6}} \begin{pmatrix} -1 \\ 2 \\ -1 \end{pmatrix}$
$v_3 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} \Rightarrow \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$
The orthogonal matrix $P$ is formed by these normalized eigenvectors:

$$
P = \begin{pmatrix} \frac{1}{\sqrt{2}} & \frac{-1}{\sqrt{6}} & \frac{1}{\sqrt{3}} \\ 0 & \frac{2}{\sqrt{6}} & \frac{1}{\sqrt{3}} \\ \frac{-1}{\sqrt{2}} & \frac{-1}{\sqrt{6}} & \frac{1}{\sqrt{3}} \end{pmatrix}
$$

And $P^T A P = D$ , where $D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 5 \end{pmatrix}$ .

### (d) Solution:
Since $f(x, y, z) = x^T A x$ and we have diagonalized $A$ as $P^T A P = D$ , let $x = Py$ , where $y = \begin{pmatrix} x' \\ y' \\ z' \end{pmatrix}$ .
Then $f(x, y, z) = y^T D y = 2x'^2 + 2y'^2 + 5z'^2$ . Also, $x^2 + y^2 + z^2 = 1 \Rightarrow (Py)^T(Py) = 1 \Rightarrow y^T P^T P y = 1 \Rightarrow y^T y = 1 \Rightarrow x'^2 + y'^2 + z'^2 = 1$ .
We want to find the maximum and minimum of $2x'^2 + 2y'^2 + 5z'^2$ subject to $x'^2 + y'^2 + z'^2 = 1$ .
Since $x'^2 + y'^2 = 1 - z'^2$ , $f(x, y, z) = 2(1 - z'^2) + 5z'^2 = 2 + 3z'^2$ .
Since $0 \leq z'^2 \leq 1$ , the minimum value of $f(x, y, z)$ is $2$ (when $z' = 0$ ) and the maximum value is $2 + 3 = 5$ (when $z' = \pm 1$ ).

### (e) Solution:
From (d), the maximum value of $f(x, y, z)$ is $5$ when $z' = \pm 1$ and $x' = y' = 0$ .  Then $x = P \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{3}} \end{pmatrix}$ .  Or $x = \begin{pmatrix} -\frac{1}{\sqrt{3}} \\ -\frac{1}{\sqrt{3}} \\ -\frac{1}{\sqrt{3}} \end{pmatrix}$ .
The minimum value of $f(x, y, z)$ is $2$ when $z' = 0$ and $x'^2 + y'^2 = 1$ .  In this case, $x = P \begin{pmatrix} x' \\ y' \\ 0 \end{pmatrix} = \begin{pmatrix} \frac{x'}{\sqrt{2}} - \frac{y'}{\sqrt{6}} \\ \frac{2y'}{\sqrt{6}} \\ -\frac{x'}{\sqrt{2}} - \frac{y'}{\sqrt{6}} \end{pmatrix}$ . For example, when $x' = 1, y' = 0$ , $x = \begin{pmatrix} \frac{1}{\sqrt{2}} \\ 0 \\ -\frac{1}{\sqrt{2}} \end{pmatrix}$ . When $x'=0, y'=1$ , $x = \begin{pmatrix} -\frac{1}{\sqrt{6}} \\ \frac{2}{\sqrt{6}} \\ -\frac{1}{\sqrt{6}} \end{pmatrix}$ .
