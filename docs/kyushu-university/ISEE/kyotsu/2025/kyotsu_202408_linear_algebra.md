---
sidebar_label: 2024年8月実施 線形代数
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2024年8月実施 線形代数

## **Author**
祭音Myyura (assisted by ChatGPT 5.5 Thinking)

## **Description**
(1) Find the determinants of the following matrices $A$ and $B$, respectively.

$$
A=\begin{bmatrix}2 & 0 & 2 \\4 & 0 & 9 \\1 & 1 & 2\end{bmatrix},\qquad B=\begin{bmatrix}1 & 2 & 3 & 4 \\4 & 6 & 8 & 10 \\2 & 4 & 6 & 8 \\3 & 5 & 7 & 9\end{bmatrix}.
$$

(2) For any upper triangular matrix $A=(a_{ij})$ of order $n$, show

$$
\det(A)=\prod_{i=1}^{n} a_{ii},
$$

where $\det(A)$ denotes the determinant of $A$.

## Kai
### (1)
First compute $\det(A)$.

$$
A=\begin{bmatrix}2 & 0 & 2 \\4 & 0 & 9 \\1 & 1 & 2\end{bmatrix}.
$$

Expanding along the first row, we get

$$
\det(A)=2\begin{vmatrix}0 & 9 \\1 & 2\end{vmatrix}+2\begin{vmatrix}4 & 0 \\1 & 1\end{vmatrix}.
$$

Thus,

$$
\det(A)=2(0\cdot 2-9\cdot 1)+2(4\cdot 1-0\cdot 1).
$$

Therefore,

$$
\det(A)=-18+8=-10.
$$

Hence,

$$
\boxed{\det(A)=-10}.
$$

Next compute $\det(B)$.

$$
B=\begin{bmatrix}1 & 2 & 3 & 4 \\4 & 6 & 8 & 10 \\2 & 4 & 6 & 8 \\3 & 5 & 7 & 9\end{bmatrix}.
$$

Notice that the third row is twice the first row:

$$
\begin{bmatrix}2 & 4 & 6 & 8\end{bmatrix}=2\begin{bmatrix}1 & 2 & 3 & 4\end{bmatrix}.
$$

Therefore, the rows of $B$ are linearly dependent, so

$$
\det(B)=0.
$$

Hence,

$$
\boxed{\det(B)=0}.
$$

### (2)
Let $A=(a_{ij})$ be an upper triangular matrix of order $n$.
By the Leibniz formula for determinants,

$$
\det(A)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i=1}^{n} a_{i,\sigma(i)}.
$$

Since $A$ is upper triangular, we have

$$
a_{ij}=0\qquad\text{if } i>j.
$$

Therefore, for the product

$$
\prod_{i=1}^{n} a_{i,\sigma(i)}
$$

to be nonzero, it is necessary that

$$
i\leq \sigma(i)\qquad\text{for all } i=1,2,\dots,n.
$$

However, since $\sigma$ is a permutation of $\{1,2,\dots,n\}$, we have

$$
\sum_{i=1}^{n} \sigma(i)=\sum_{i=1}^{n} i.
$$

Thus, if $\sigma(i)\geq i$ for all $i$, then we must have

$$
\sigma(i)=i\qquad\text{for all } i.
$$

Hence, the only nonzero term in the Leibniz formula comes from the identity permutation.Therefore,

$$
\det(A)=\prod_{i=1}^{n} a_{ii}.
$$

Hence,

$$
\boxed{\det(A)=\prod_{i=1}^{n} a_{ii}}.
$$
