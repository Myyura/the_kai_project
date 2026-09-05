---
sidebar_label: 2018年1月実施 専門科目I 問題1
tags:
  - Hiroshima-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2018年1月実施 専門科目I 問題1


## **Author**
samparker, 祭音Myyura

## **Description**
$n \times n$ 次実対称行列 $M$ に対して、その全ての固有値が正であれば、$M$ は正定値行列と呼ばれる。

(1) $A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$ とするとき、$A$ は正定値行列であるか？

(2) $B = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$ とするとき、$B$ が正定値行列であるための必要十分条件は $a > 0$ かつ $ac > b^2$ であることを示せ。

An $n \times n$ real symmetric matrix $M$ is called positive definite if all its eigenvalues are positive.

(1) Let $A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$. Is the matrix $A$ positive definite?

(2) Let $B = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$. Show that $B$ is positive definite if and only if $a > 0$ and $ac > b^2$.

### 题目描述

若一个 $n\times n$ 实对称矩阵 $M$ 的全部特征值均为正，则称 $M$ 为正定矩阵。

1. 对

   $$
   A=\begin{pmatrix}1&1&1\\1&2&1\\1&1&2\end{pmatrix},
   $$

   判断 $A$ 是否为正定矩阵。
2. 对实对称矩阵

   $$
   B=\begin{pmatrix}a&b\\b&c\end{pmatrix},
   $$

   证明 $B$ 为正定矩阵的充要条件是 $a>0$ 且 $ac>b^2$。

## **Kai**
### (1)

$$
\begin{aligned}
&\det (A - \lambda I) = \begin{vmatrix}
    1 - \lambda & 1 & 1 \\
    1 & 2 - \lambda & 1 \\
    1 & 1 & 2 - \lambda
\end{vmatrix} = 0 \\
&\Leftrightarrow -\lambda^3 + 5\lambda^2 - 5\lambda + 1 = 0 \\
&\Leftrightarrow \lambda_1 = 1, \lambda_2 = 2 - \sqrt{3}, \lambda_3 = 2+\sqrt{3}
\end{aligned}
$$

All eigenvalues are positive, hence $A$ is positive definite.

### (2)

$$
\begin{aligned}
&\det (B - \lambda I) = 
\begin{vmatrix}
    a - \lambda & b \\ b & c - \lambda
\end{vmatrix} = 0 \\
&\Leftrightarrow
(a - \lambda)(c - \lambda) - b^2 = 0 \\
&\Leftrightarrow \lambda_1 = \frac{a + c + \sqrt{(a - c)^2 + 4b^2}}{2}, \lambda_2 = \frac{a + c - \sqrt{(a - c)^2 + 4b^2}}{2}
\end{aligned}
$$

The two real eigenvalues satisfy

$$
\lambda_1+\lambda_2=a+c,\qquad
\lambda_1\lambda_2=ac-b^2.
$$

If $B$ is positive definite, then $a=(1,0)B(1,0)^T>0$ and
$ac-b^2=\lambda_1\lambda_2>0$.

Conversely, suppose $a>0$ and $ac>b^2$. Then
$c>b^2/a\geq0$, so $\lambda_1+\lambda_2=a+c>0$ and
$\lambda_1\lambda_2=ac-b^2>0$. Hence both eigenvalues are positive.
