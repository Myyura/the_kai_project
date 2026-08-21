---
sidebar_label: "2013年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2013年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の行列の固有値と固有ベクトルをすべて求めよ.

$$
\begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 2 & 1 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 1 \end{pmatrix}
$$

### 题目描述

求矩阵

$$
\begin{pmatrix}
1&1&0&0\\
0&2&1&0\\
0&0&2&1\\
0&0&0&1
\end{pmatrix}
$$

的全部特征值及其对应的全部特征向量。

## **Kai**

Let $A = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 2 & 1 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ .
To find the eigenvalues, we solve the characteristic equation $\det(A - \lambda I) = 0$ .

$$
A - \lambda I = \begin{pmatrix} 1-\lambda & 1 & 0 & 0 \\ 0 & 2-\lambda & 1 & 0 \\ 0 & 0 & 2-\lambda & 1 \\ 0 & 0 & 0 & 1-\lambda \end{pmatrix}
$$

$$
\det(A - \lambda I) = (1-\lambda)(2-\lambda)(2-\lambda)(1-\lambda) = (1-\lambda)^2(2-\lambda)^2 = 0
$$

So the eigenvalues are $\lambda_1 = 1$ (with multiplicity 2) and $\lambda_2 = 2$ (with multiplicity 2).

For $\lambda_1 = 1$ :

$$
A - I = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}
$$

Solving $(A - I)v = 0$ , we get:
$v_2 = 0$
$v_2 + v_3 = 0$ , so $v_3 = 0$
$v_3 + v_4 = 0$ , so $v_4 = 0$
Thus $v = \begin{pmatrix} v_1 \\ 0 \\ 0 \\ 0 \end{pmatrix} = v_1 \begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix}$ .
Eigenvector for $\lambda_1 = 1$ is $v_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix}$ .

Let's find a generalized eigenvector.  We need to solve $(A-I)^2 w = 0$ . We want to find $w$ such that $(A-I)w = v_1$ .

$$
(A - I) w = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} w_1 \\ w_2 \\ w_3 \\ w_4 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix}
$$

$w_2 = 1$
$w_2 + w_3 = 0$ , so $w_3 = -1$
$w_3 + w_4 = 0$ , so $w_4 = 1$
Thus $w = \begin{pmatrix} w_1 \\ 1 \\ -1 \\ 1 \end{pmatrix}$ .  Choosing $w_1 = 0$ , we get $w = \begin{pmatrix} 0 \\ 1 \\ -1 \\ 1 \end{pmatrix}$ .  This is a generalized eigenvector.

For $\lambda_2 = 2$ :

$$
A - 2I = \begin{pmatrix} -1 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & -1 \end{pmatrix}
$$

Solving $(A - 2I)v = 0$ , we get:
$-v_1 + v_2 = 0$ , so $v_1 = v_2$
$v_3 = 0$
$v_4 = 0$
$-v_4 = 0$
Thus $v = \begin{pmatrix} v_2 \\ v_2 \\ 0 \\ 0 \end{pmatrix} = v_2 \begin{pmatrix} 1 \\ 1 \\ 0 \\ 0 \end{pmatrix}$ .
Eigenvector for $\lambda_2 = 2$ is $v_2 = \begin{pmatrix} 1 \\ 1 \\ 0 \\ 0 \end{pmatrix}$ .

Let's find a generalized eigenvector.  We need to solve $(A-2I)^2 w = 0$ .  We want to find $w$ such that $(A-2I)w = v_2$ .

$$
(A - 2I) w = \begin{pmatrix} -1 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & -1 \end{pmatrix} \begin{pmatrix} w_1 \\ w_2 \\ w_3 \\ w_4 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 0 \\ 0 \end{pmatrix}
$$

$-w_1 + w_2 = 1$
$w_3 = 1$
$w_4 = 0$
$-w_4 = 0$
Thus $w = \begin{pmatrix} w_1 \\ w_1 + 1 \\ 1 \\ 0 \end{pmatrix}$ . Choosing $w_1 = 0$ , we have $w = \begin{pmatrix} 0 \\ 1 \\ 1 \\ 0 \end{pmatrix}$ .

Therefore, the eigenvalues are $1$ and $2$ , each with algebraic multiplicity $2$ , and all corresponding eigenvectors are

$$
\ker(A-I)=\operatorname{span}\left\{
\begin{pmatrix}1\\0\\0\\0\end{pmatrix}
\right\},
\qquad
\ker(A-2I)=\operatorname{span}\left\{
\begin{pmatrix}1\\1\\0\\0\end{pmatrix}
\right\}.
$$

All eigenvectors are the nonzero vectors in these two eigenspaces.
The vectors $\begin{pmatrix}0\\1\\-1\\1\end{pmatrix}$ and
$\begin{pmatrix}0\\1\\1\\0\end{pmatrix}$ found above are generalized eigenvectors, not eigenvectors.
