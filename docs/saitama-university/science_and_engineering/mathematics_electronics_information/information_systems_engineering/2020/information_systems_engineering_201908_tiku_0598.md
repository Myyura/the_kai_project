---
sidebar_label: "2019年8月実施 线性代数"
tags:
  - Saitama-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Basis-and-Dimension
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2019年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

1. 以下の問に答えよ. [Solve the following problems.]

(a) 次の行列 A について考える. $m = 1, 2, 3, ...$ のとき, $A^m$ を求めよ. ここで, $B$ は $n \times n$ 正方行列, $I$ は $n \times n$ 単位行列とする. [Let us consider the following matrix A. Obtain $A^m$ for $m = 1, 2, 3, ...$ , where $B$ is an $n \times n$ square matrix, $I$ is the $n \times n$ identity matrix.]

$$
A = \begin{pmatrix} I - B & B \\ -B & I + B \end{pmatrix}
$$

(b) 次の行列 C について考える. [Let us consider the following matrix C.]

$$
C = \begin{pmatrix} 1 & 1 & 0 \\ 1 & -1 & 2 \\ 0 & 2 & -2 \end{pmatrix}
$$

(1) 行列 C の固有値と対応する固有ベクトルをすべて求めよ. [Obtain all eigenvalues and corresponding eigenvectors of the matrix C.]

(2) 集合 $\{Cx | x \in \mathbb{R}^3\}$ は平面であることを示せ. ここで, $\mathbb{R}^3$ は 3 次元ユークリッド空間を表し, $x$ は 3 次元列ベクトルを表す. [Show the set $\{Cx | x \in \mathbb{R}^3\}$ is a plane, where $\mathbb{R}^3$ denotes the three-dimensional Euclidean space and $x$ denotes the three-dimensional column vector.]

(3) 上の (2) で示した平面と点 $p = (1, 1, 1)^T$ の距離を求めよ. ここで, 上付添字 $T$ はベクトルの転置を表す. [Obtain the distance between the plane shown in (2) and the point $p = (1, 1, 1)^T$ , where the superscript $T$ denotes the transposition of a vector.]

### 题目描述

1. 回答下列问题。

(a) 考虑分块矩阵

$$
A=\begin{pmatrix}
I-B&B\\
-B&I+B
\end{pmatrix},
$$

其中 $B$ 为 $n\times n$ 方阵，$I$ 为 $n\times n$ 单位矩阵。对

$$
m=1,2,3,\dots,
$$

求 $A^m$。

(b) 考虑矩阵

$$
C=\begin{pmatrix}
1&1&0\\
1&-1&2\\
0&2&-2
\end{pmatrix}.
$$

(1) 求矩阵 $C$ 的全部特征值及对应的特征向量。

(2) 证明集合

$$
\left\{Cx\,\middle|\,x\in\mathbb{R}^3\right\}
$$

是一个平面，其中 $\mathbb{R}^3$ 表示三维欧几里得空间，$x$ 表示三维列向量。

(3) 求 (2) 中平面与点

$$
p=(1,1,1)^T
$$

之间的距离，其中上标 $T$ 表示向量的转置。

## **Kai**

(a) Let $A = \begin{pmatrix} I - B & B \\ -B & I + B \end{pmatrix}$ .  Then

$A^2 = \begin{pmatrix} I - B & B \\ -B & I + B \end{pmatrix} \begin{pmatrix} I - B & B \\ -B & I + B \end{pmatrix} = \begin{pmatrix} (I - B)^2 - B^2 & (I - B)B + B(I + B) \\ -B(I - B) - (I + B)B & -B^2 + (I + B)^2 \end{pmatrix} = \begin{pmatrix} I - 2B + B^2 - B^2 & B - B^2 + B + B^2 \\ -B + B^2 - B - B^2 & -B^2 + I + 2B + B^2 \end{pmatrix} = \begin{pmatrix} I - 2B & 2B \\ -2B & I + 2B \end{pmatrix}$

In general, we can prove by induction that

$A^m = \begin{pmatrix} I - mB & mB \\ -mB & I + mB \end{pmatrix}$ .

Base case: $m = 1$ , it is correct.

Inductive step: Assume $A^k = \begin{pmatrix} I - kB & kB \\ -kB & I + kB \end{pmatrix}$ .  Then

$A^{k+1} = A^k A = \begin{pmatrix} I - kB & kB \\ -kB & I + kB \end{pmatrix} \begin{pmatrix} I - B & B \\ -B & I + B \end{pmatrix} = \begin{pmatrix} (I - kB)(I - B) - kB^2 & (I - kB)B + kB(I + B) \\ -kB(I - B) - (I + kB)B & -kB^2 + (I + kB)(I + B) \end{pmatrix} = \begin{pmatrix} I - B - kB + kB^2 - kB^2 & B - kB^2 + kB + kB^2 \\ -kB + kB^2 - B - kB^2 & -kB^2 + I + B + kB + kB^2 \end{pmatrix} = \begin{pmatrix} I - (k+1)B & (k+1)B \\ -(k+1)B & I + (k+1)B \end{pmatrix}$

(b) (1) To find eigenvalues, we compute the determinant of $C - \lambda I$ :

$$
det(C - \lambda I) = det \begin{pmatrix} 1-\lambda & 1 & 0 \\ 1 & -1-\lambda & 2 \\ 0 & 2 & -2-\lambda \end{pmatrix} = (1-\lambda)[(-1-\lambda)(-2-\lambda) - 4] - 1[1(-2-\lambda) - 0] + 0 = (1-\lambda)(\lambda^2 + 3\lambda + 2 - 4) - (-2 - \lambda) = (1-\lambda)(\lambda^2 + 3\lambda - 2) + 2 + \lambda = \lambda^2 + 3\lambda - 2 - \lambda^3 - 3\lambda^2 + 2\lambda + 2 + \lambda = -\lambda^3 - 2\lambda^2 + 6\lambda = -\lambda(\lambda^2 + 2\lambda - 6)
$$

Therefore, the eigenvalues are $\lambda_1 = 0$ , $\lambda_{2,3} = \frac{-2 \pm \sqrt{4 - 4(-6)}}{2} = -1 \pm \sqrt{7}$ .
For $\lambda_1 = 0$ , we have to solve $Cx = 0$ , i.e.

$$
\begin{pmatrix} 1 & 1 & 0 \\ 1 & -1 & 2 \\ 0 & 2 & -2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$x_1 + x_2 = 0$ , $x_1 - x_2 + 2x_3 = 0$ , $2x_2 - 2x_3 = 0$ . Thus, $x_2 = x_3$ and $x_1 = -x_2$ .
The eigenvector corresponding to $\lambda_1 = 0$ is $v_1 = \begin{pmatrix} -1 \\ 1 \\ 1 \end{pmatrix}$ .

For $\lambda_2=-1+\sqrt7$ , a corresponding eigenvector is

$$
v_2=\begin{pmatrix}3+\sqrt7\\1+\sqrt7\\2\end{pmatrix}.
$$

For $\lambda_3=-1-\sqrt7$ , a corresponding eigenvector is

$$
v_3=\begin{pmatrix}3-\sqrt7\\1-\sqrt7\\2\end{pmatrix}.
$$

Therefore, the corresponding eigenspaces are
$\operatorname{span}\{v_1\}$ , $\operatorname{span}\{v_2\}$ , and
$\operatorname{span}\{v_3\}$ , respectively.

(2) Since the eigenvalue 0 exists, $C$ is not invertible. Then, the column space of $C$ is of dimension at most 2. We observe that the first two columns of $C$ are linearly independent. Hence, the column space is of dimension 2. Thus $\{Cx | x \in \mathbb{R}^3\}$ is a plane.

(3) Let $v_1 = \begin{pmatrix} -1 \\ 1 \\ 1 \end{pmatrix}$ be the normal vector of the plane. The plane is given by $v_1 \cdot x = 0$ . i.e. $-x_1 + x_2 + x_3 = 0$ . The distance from the point $p = (1, 1, 1)$ to the plane is given by

$$
\frac{|-1 + 1 + 1|}{\sqrt{(-1)^2 + 1^2 + 1^2}} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}
$$

.
