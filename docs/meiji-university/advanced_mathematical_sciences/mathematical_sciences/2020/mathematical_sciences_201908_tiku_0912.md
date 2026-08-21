---
sidebar_label: "2019年8月実施 线性代数"
tags:
  - Meiji-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Orthogonal-Matrix
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2019年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列 $A$ を

$$
A = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & -1 \\ 1 & -1 & 0 \end{pmatrix}
$$

で定めるとき、以下の問いに答えよ。

(1) $A$ の固有値をすべて求めよ。

(2) $A$ を実直交行列によって対角化せよ。

(3) 条件 $x^2 + y^2 + z^2 = 1$ の下で関数 $2(xy - yz + zx)$ の最大値と最小値を求めよ。

### 题目描述

定义矩阵

$$
A=\begin{pmatrix}
0&1&1\\
1&0&-1\\
1&-1&0
\end{pmatrix}.
$$

回答下列问题。

(1) 求 $A$ 的全部特征值。

(2) 用实正交矩阵将 $A$ 对角化。

(3) 在约束

$$
x^2+y^2+z^2=1
$$

下，求函数

$$
2(xy-yz+zx)
$$

的最大值和最小值。

## **Kai**

解答:
(1) 固有方程式 $|A - \lambda I| = 0$ より,

$$
\begin{vmatrix} -\lambda & 1 & 1 \\ 1 & -\lambda & -1 \\ 1 & -1 & -\lambda \end{vmatrix} = 0
$$

$$
- \lambda(\lambda^2 - 1) - (-\lambda + 1) + (-1 + \lambda) = 0
$$

$$
- \lambda^3 + \lambda + \lambda - 1 - 1 + \lambda = 0
$$

$$
- \lambda^3 + 3\lambda - 2 = 0
$$

$$
\lambda^3 - 3\lambda + 2 = 0
$$

$$
(\lambda - 1)(\lambda^2 + \lambda - 2) = 0
$$

$$
(\lambda - 1)(\lambda - 1)(\lambda + 2) = 0
$$

$$
\lambda = 1, 1, -2
$$

したがって、固有値は $\lambda_1 = 1$ , $\lambda_2 = 1$ , $\lambda_3 = -2$ .

(2) $\lambda = 1$ のとき,

$$
(A - I) \mathbf{x} = \mathbf{0}
$$

$$
\begin{pmatrix} -1 & 1 & 1 \\ 1 & -1 & -1 \\ 1 & -1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$$
-x + y + z = 0
$$

$x = y + z$
固有ベクトルは $\mathbf{x} = \begin{pmatrix} y+z \\ y \\ z \end{pmatrix} = y \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + z \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$
$\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ , $\mathbf{v}_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$
$\mathbf{w}_1 = \mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$
$\mathbf{w}_2 = \mathbf{v}_2 - \frac{\mathbf{v}_2 \cdot \mathbf{w}_1}{\mathbf{w}_1 \cdot \mathbf{w}_1} \mathbf{w}_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} - \frac{1}{2} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix}$
$\mathbf{u}_1 = \frac{\mathbf{w}_1}{\|\mathbf{w}_1\|} = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$
$\mathbf{u}_2 = \frac{\mathbf{w}_2}{\|\mathbf{w}_2\|} = \frac{1}{\sqrt{6}/2} \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix} = \frac{1}{\sqrt{6}} \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}$

$\lambda = -2$ のとき,

$$
(A + 2I) \mathbf{x} = \mathbf{0}
$$

$$
\begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & -1 \\ 1 & -1 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$2x + y + z = 0$
$x + 2y - z = 0$
$x - y + 2z = 0$
$x=-z,\ y=z$ となるので，
$\mathbf{v}_3 = \begin{pmatrix} -1 \\ 1 \\ 1 \end{pmatrix}$ と取れる。
したがって
$\mathbf{u}_3 = \frac{\mathbf{v}_3}{\|\mathbf{v}_3\|} = \frac{1}{\sqrt{3}} \begin{pmatrix} -1 \\ 1 \\ 1 \end{pmatrix}$ である。

したがって、実直交行列は

$$
P = \begin{pmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} & -\frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{6}} & \frac{1}{\sqrt{3}} \\ 0 & \frac{2}{\sqrt{6}} & \frac{1}{\sqrt{3}} \end{pmatrix}
$$

$$
P^T A P = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -2 \end{pmatrix}
$$

(3)

$$
2(xy-yz+zx)
=
\begin{pmatrix}x&y&z\end{pmatrix}
A
\begin{pmatrix}x\\y\\z\end{pmatrix}.
$$

$A$ は実対称行列であり，単位球面上の二次形式の最大値と最小値は
それぞれ最大固有値と最小固有値に等しい。したがって

$$
\boxed{\max 2(xy-yz+zx)=1,\qquad
\min 2(xy-yz+zx)=-2}.
$$

最大値は固有値 $1$ の単位固有ベクトルで，最小値は例えば
$\frac1{\sqrt3}(-1,1,1)^T$ で達成される。
