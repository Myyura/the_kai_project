---
sidebar_label: "2024年1月実施 線形代数"
tags:
  - Kyushu-University
  - Linear-Algebra
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2024年1月実施 線形代数

## **Author**
祭音Myyura (assisted by ChatGPT 5.4 Thinking)

## **Description**
Let $A$ be an $n \times n$ real matrix and $\mathbf{x}$ be an $n$-dimensional nonzero real column vector. Define

$$
R_A(\mathbf{x})=\frac{\mathbf{x}^T A\mathbf{x}}{\|\mathbf{x}\|^2},
$$

where $\mathbf{x}^T$ is the transpose of a vector $\mathbf{x}$. Answer the following questions.

(1) For

$$
B=
\begin{bmatrix}
2 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 2
\end{bmatrix}
\quad \text{and} \quad
\mathbf{z}=
\begin{bmatrix}
1 \\
1 \\
0
\end{bmatrix},
$$

find $R_B(\mathbf{z})$.

(2) Find all the eigenvalues of $B$. For each eigenvalue of $B$, find its eigenspace.

(3) Suppose that $A$ is a symmetric matrix. Show

$$
\max_{\mathbf{x} \neq 0} R_A(\mathbf{x})=\lambda_{\max},
$$

where $\lambda_{\max}$ is the largest eigenvalue of $A$. Use the fact that the symmetric matrix $A$ has eigenvectors $\mathbf{q}_1,\dots,\mathbf{q}_n \in \mathbb{R}^n$ that form an orthonormal basis of $\mathbb{R}^n$.

## **Kai**
### (1)
We are given

$$
B=
\begin{bmatrix}
2 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 2
\end{bmatrix},
\qquad
\mathbf{z}=
\begin{bmatrix}
1 \\
1 \\
0
\end{bmatrix}.
$$

By definition,

$$
R_B(\mathbf{z})
=
\frac{\mathbf{z}^T B\mathbf{z}}{\|\mathbf{z}\|^2}.
$$

First compute $B\mathbf{z}$:

$$
B\mathbf{z}
=
\begin{bmatrix}
2 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 2
\end{bmatrix}
\begin{bmatrix}
1 \\
1 \\
0
\end{bmatrix}
=
\begin{bmatrix}
2 \\
1 \\
1
\end{bmatrix}.
$$

Then

$$
\mathbf{z}^T B\mathbf{z}
=
\begin{bmatrix}
1 & 1 & 0
\end{bmatrix}
\begin{bmatrix}
2 \\
1 \\
1
\end{bmatrix}
=
3.
$$

Also,

$$
\|\mathbf{z}\|^2
=
1^2+1^2+0^2
=
2.
$$

Therefore,

$$
R_B(\mathbf{z})
=
\frac{3}{2}.
$$

Hence,

$$
\boxed{R_B(\mathbf{z})=\frac{3}{2}}.
$$

### (2)
To find the eigenvalues, solve

$$
\det(B-\lambda I)=0.
$$

We have

$$
B-\lambda I
=
\begin{bmatrix}
2-\lambda & 0 & 1 \\
0 & 1-\lambda & 0 \\
1 & 0 & 2-\lambda
\end{bmatrix}.
$$

Thus,

$$
\det(B-\lambda I)
=
(1-\lambda)
\det
\begin{bmatrix}
2-\lambda & 1 \\
1 & 2-\lambda
\end{bmatrix}.
$$

Now compute the $2\times 2$ determinant:

$$
\det(B-\lambda I)
=
(1-\lambda)\left((2-\lambda)^2-1\right).
$$

Since

$$
(2-\lambda)^2-1
=
(2-\lambda-1)(2-\lambda+1)
=
(1-\lambda)(3-\lambda),
$$

we get

$$
\det(B-\lambda I)
=
(1-\lambda)^2(3-\lambda).
$$

Therefore,

$$
(1-\lambda)^2(3-\lambda)=0.
$$

So the eigenvalues are

$$
\boxed{\lambda=1,3}.
$$

The eigenvalue $\lambda=1$ has algebraic multiplicity $2$, and the eigenvalue $\lambda=3$ has algebraic multiplicity $1$.

#### Eigenspace for $\lambda=3$

Solve

$$
(B-3I)\mathbf{x}=0.
$$

We have

$$
B-3I
=
\begin{bmatrix}
-1 & 0 & 1 \\
0 & -2 & 0 \\
1 & 0 & -1
\end{bmatrix}.
$$

Let

$$
\mathbf{x}
=
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}.
$$

Then the system is

$$
-x+z=0,
$$

$$
-2y=0,
$$

$$
x-z=0.
$$

Hence,

$$
z=x,
\qquad
y=0.
$$

Therefore,

$$
\mathbf{x}
=
\begin{bmatrix}
x \\
0 \\
x
\end{bmatrix}
=
x
\begin{bmatrix}
1 \\
0 \\
1
\end{bmatrix}.
$$

So the eigenspace corresponding to $\lambda=3$ is

$$
\boxed{
E_3=
\operatorname{span}
\left\{
\begin{bmatrix}
1 \\
0 \\
1
\end{bmatrix}
\right\}
}.
$$

#### Eigenspace for $\lambda=1$

Solve

$$
(B-I)\mathbf{x}=0.
$$

We have

$$
B-I
=
\begin{bmatrix}
1 & 0 & 1 \\
0 & 0 & 0 \\
1 & 0 & 1
\end{bmatrix}.
$$

Let

$$
\mathbf{x}
=
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}.
$$

The system gives

$$
x+z=0.
$$

Thus,

$$
z=-x.
$$

Here $x$ and $y$ are free variables. Therefore,

$$
\mathbf{x}
=
\begin{bmatrix}
x \\
y \\
-x
\end{bmatrix}
=
x
\begin{bmatrix}
1 \\
0 \\
-1
\end{bmatrix}
+
y
\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix}.
$$

So the eigenspace corresponding to $\lambda=1$ is

$$
\boxed{
E_1=
\operatorname{span}
\left\{
\begin{bmatrix}
1 \\
0 \\
-1
\end{bmatrix},
\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix}
\right\}
}.
$$

### (3)
Suppose $A$ is a symmetric matrix.

Since $A$ is symmetric, it has an orthonormal basis of eigenvectors

$$
\mathbf{q}_1,\mathbf{q}_2,\dots,\mathbf{q}_n
$$

for $\mathbb{R}^n$.

Let their corresponding eigenvalues be

$$
\lambda_1,\lambda_2,\dots,\lambda_n.
$$

That is,

$$
A\mathbf{q}_i=\lambda_i\mathbf{q}_i,
\qquad i=1,2,\dots,n.
$$

Let

$$
\lambda_{\max}
=
\max\{\lambda_1,\lambda_2,\dots,\lambda_n\}.
$$

Since $\mathbf{q}_1,\dots,\mathbf{q}_n$ form an orthonormal basis, any nonzero vector $\mathbf{x}\in\mathbb{R}^n$ can be written as

$$
\mathbf{x}
=
c_1\mathbf{q}_1+c_2\mathbf{q}_2+\cdots+c_n\mathbf{q}_n.
$$

Equivalently,

$$
\mathbf{x}
=
\sum_{i=1}^n c_i\mathbf{q}_i.
$$

Because $\mathbf{x}\neq 0$, we have

$$
\sum_{i=1}^n c_i^2>0.
$$

Now compute $A\mathbf{x}$:

$$
A\mathbf{x}
=
A\left(\sum_{i=1}^n c_i\mathbf{q}_i\right).
$$

By linearity,

$$
A\mathbf{x}
=
\sum_{i=1}^n c_i A\mathbf{q}_i.
$$

Since

$$
A\mathbf{q}_i=\lambda_i\mathbf{q}_i,
$$

we get

$$
A\mathbf{x}
=
\sum_{i=1}^n c_i\lambda_i\mathbf{q}_i.
$$

Next,

$$
\mathbf{x}^T A\mathbf{x}
=
\left(\sum_{i=1}^n c_i\mathbf{q}_i\right)^T
\left(\sum_{j=1}^n c_j\lambda_j\mathbf{q}_j\right).
$$

Expanding this expression gives

$$
\mathbf{x}^T A\mathbf{x}
=
\sum_{i=1}^n\sum_{j=1}^n
c_i c_j \lambda_j \mathbf{q}_i^T\mathbf{q}_j.
$$

Because the vectors $\mathbf{q}_1,\dots,\mathbf{q}_n$ are orthonormal,

$$
\mathbf{q}_i^T\mathbf{q}_j
=
\begin{cases}
1, & i=j,\\
0, & i\neq j.
\end{cases}
$$

Therefore, all cross terms vanish, and we obtain

$$
\mathbf{x}^T A\mathbf{x}
=
\sum_{i=1}^n \lambda_i c_i^2.
$$

Similarly,

$$
\|\mathbf{x}\|^2
=
\mathbf{x}^T\mathbf{x}.
$$

Thus,

$$
\|\mathbf{x}\|^2
=
\left(\sum_{i=1}^n c_i\mathbf{q}_i\right)^T
\left(\sum_{j=1}^n c_j\mathbf{q}_j\right).
$$

Using orthonormality again, we get

$$
\|\mathbf{x}\|^2
=
\sum_{i=1}^n c_i^2.
$$

Therefore,

$$
R_A(\mathbf{x})
=
\frac{\mathbf{x}^T A\mathbf{x}}{\|\mathbf{x}\|^2}
=
\frac{\sum_{i=1}^n \lambda_i c_i^2}{\sum_{i=1}^n c_i^2}.
$$

Since

$$
\lambda_i\leq \lambda_{\max}
\qquad
\text{for all } i,
$$

we have

$$
\lambda_i c_i^2
\leq
\lambda_{\max}c_i^2.
$$

Therefore,

$$
\sum_{i=1}^n \lambda_i c_i^2
\leq
\sum_{i=1}^n \lambda_{\max}c_i^2.
$$

Hence,

$$
\sum_{i=1}^n \lambda_i c_i^2
\leq
\lambda_{\max}\sum_{i=1}^n c_i^2.
$$

Since

$$
\sum_{i=1}^n c_i^2>0,
$$

we may divide both sides by $\sum_{i=1}^n c_i^2$. This gives

$$
R_A(\mathbf{x})
=
\frac{\sum_{i=1}^n \lambda_i c_i^2}{\sum_{i=1}^n c_i^2}
\leq
\lambda_{\max}.
$$

So for every nonzero vector $\mathbf{x}$,

$$
R_A(\mathbf{x})\leq \lambda_{\max}.
$$

Thus,

$$
\max_{\mathbf{x}\neq 0} R_A(\mathbf{x})
\leq
\lambda_{\max}.
$$

Now we show that this upper bound is achieved.

Let $\mathbf{q}_k$ be an eigenvector corresponding to the largest eigenvalue $\lambda_{\max}$. Then

$$
A\mathbf{q}_k=\lambda_{\max}\mathbf{q}_k.
$$

Choose

$$
\mathbf{x}=\mathbf{q}_k.
$$

Then

$$
R_A(\mathbf{q}_k)
=
\frac{\mathbf{q}_k^T A\mathbf{q}_k}{\|\mathbf{q}_k\|^2}.
$$

Using

$$
A\mathbf{q}_k=\lambda_{\max}\mathbf{q}_k,
$$

we get

$$
R_A(\mathbf{q}_k)
=
\frac{\mathbf{q}_k^T \lambda_{\max}\mathbf{q}_k}{\|\mathbf{q}_k\|^2}.
$$

Thus,

$$
R_A(\mathbf{q}_k)
=
\frac{\lambda_{\max}\mathbf{q}_k^T\mathbf{q}_k}{\|\mathbf{q}_k\|^2}.
$$

Since

$$
\mathbf{q}_k^T\mathbf{q}_k
=
\|\mathbf{q}_k\|^2,
$$

we have

$$
R_A(\mathbf{q}_k)
=
\lambda_{\max}.
$$

Therefore, the maximum value is actually attained, and we conclude that

$$
\boxed{
\max_{\mathbf{x}\neq 0} R_A(\mathbf{x})=\lambda_{\max}
}.
$$