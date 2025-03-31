---
sidebar_label: "2017年8月実施 専門科目I 問題1"
tags:
  - Hiroshima-University
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2017年8月実施 専門科目I 問題1


## **Author**
samparker, 祭音Myyura

## **Description**
$A = \begin{bmatrix} 1 & 3 & 3 \\ 1 & 2 & -4 \\ -1 & 0 & 1 \end{bmatrix}$ とする。

(1) $A$ を対称行列 $S \ (S^T = S)$ と交代行列 $T \ (T^T = -T)$ の和 $(A = S + T)$ に分解せよ。ただし、$A^T$ は、行列 $A$ の転置を表す。

(2) $S$ のすべての固有値と対応する固有空間を求めよ。

(3) $T$ のすべての固有値と対応する固有空間を求めよ。

(4) 一般に、実交代行列の固有値は $0$ または純虚数であることを示せ。

---------------------------------

Let $A = \begin{bmatrix} 1 & 3 & 3 \\ 1 & 2 & -4 \\ -1 & 0 & 1 \end{bmatrix}$.

(1) Decompose $A$ into the sum $A = S + T$ of the symmetric matrix $S$ ($S^T = S$) and the alternative matrix $T$ ($T^T = -T$). Here $A^T$ denotes the transpose of the matrix $A$.

(2) Find all the eigenvalues of the symmetric matrix $S$ and a basis of the corresponding eigenspaces.

(3) Find all the eigenvalues of the alternative matrix $T$ and a basis of the corresponding eigenspaces.

(4) Show that the eigenvalues of the real alternative matrix are $0$ or purely imaginary numbers.

## **Kai**
### (1)
Let $S = \begin{bmatrix} a & b & c \\ b & d & e \\ c & e & f \end{bmatrix}$ and $T = \begin{bmatrix} 0 & g & h \\ -g & 0 & i \\ -h & -i & 0 \end{bmatrix}$. Then we have

$$
\begin{bmatrix} 1 & 3 & 3 \\ 1 & 2 & -4 \\ -1 & 0 & 1 \end{bmatrix} = \begin{bmatrix} a & b+g & c+h \\ b-g & d & e+i \\ c-h & e-i & f \end{bmatrix}
$$

Solving the equations we have

$$
a = 1, d=2, f = 1, h=2, c=1, g=1, b=2, i=-2, e=-2
$$

Hence

$$
S = \begin{bmatrix} 1 & 2 & 1 \\ 2 & 2 & -2 \\ 1 & -2 & 1 \end{bmatrix}, T = \begin{bmatrix} 0 & 1 & 2 \\ -1 & 0 & -2 \\ -2 & 2 & 0 \end{bmatrix}
$$

### (2)
Eigenvalues

$$
\lambda_1 = 2, \lambda_2 = 4, \lambda_3 = -2
$$

A basis of the corresponding eigenspaces

$$
v_1=(1,0,1), v_2=(-1,-2,1), v_3=(-1,1,1)
$$

### (3)
Eigenvalues

$$
\lambda_1 = 3i, \lambda_2 = -3i, \lambda_3 = 0
$$

A basis of the corresponding eigenspaces

$$
v_1=(1-3i,1+3i,4), v_2=(1+3i,1-3i,4), v_3=(-2,-2,1)
$$

### (4)
Let $\lambda$ be an eigenvalue of $A$ and let $\mathbf{x}$ be an eigenvector corresponding to the eigenvalue $\lambda$. That is, we have


$$
A\mathbf{x}=\lambda \mathbf{x}.
$$

Multiplying by $\bar{\mathbf{x}}^{T}$ from the left, we have

$$
\begin{align}
\bar{\mathbf{x}}^{T}A\mathbf{x}=\lambda \bar{\mathbf{x}}^{T} \mathbf{x}=\lambda ||\mathbf{x}||^2. \tag{*}
\end{align}
$$

Note that the left hand side $\bar{\mathbf{x}}^{T}A\mathbf{x}$ is the dot (inner) product of $\bar{\mathbf{x}}$ and $A\mathbf{x}$. Since the dot product is commutative, we have

$$
\begin{aligned}
&\text{The left hand side of (*)}\\
&=\bar{\mathbf{x}}^{T}A\mathbf{x}=(A\mathbf{x})^{T}\bar{\mathbf{x}}\\
&=x^{T}A^{T}\bar{\mathbf{x}}.
\end{aligned}
$$

Since $A$ is skew-symmetric, we have $A^{T}=-A$. Substituting this into the above equality, we have

$$
\begin{aligned}
&\text{The left hand side of (*)}\\
&=x^{T}A^{T}\bar{\mathbf{x}}=-\mathbf{x}^{T}A\bar{\mathbf{x}}
\end{aligned}
$$

Taking conjugate of $A\mathbf{x}=\lambda\mathbf{x}$ and use the fact that $A$ is real, we have

$$
A\bar{\mathbf{x}}=\bar{\lambda}\bar{\mathbf{x}}.
$$

Thus, we have

$$
\begin{aligned}
&\text{The left hand side of (*)}\\
&=-\mathbf{x}^{T}A\bar{\mathbf{x}}\\
&=-\mathbf{x}^{T}\bar{\lambda}\bar{\mathbf{x}}=-\bar{\lambda}||\mathbf{x}||^2.
\end{aligned}
$$

Therefore comparing the left and right hand sides of (*) yields

$$
-\bar{\lambda}||\mathbf{x}||^2=\lambda ||\mathbf{x}||^2.
$$

Since $\mathbf{x}$ is an eigenvector, it is nonzero by definition. Thus $||\mathbf{x}||\neq 0$.

Hence we have

$$
-\bar{\lambda}=\lambda,
$$

and this implies that $\lambda$ is either $0$ or purely imaginary number.