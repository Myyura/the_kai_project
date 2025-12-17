---
sidebar_label: "2022年8月実施 専門科目I 問題1"
tags:
  - Hiroshima-University
  - Linear-Algebra
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2022年8月実施 専門科目I 問題1

## **Author**
祭音Myyura

## **Description**
(1) Find all the eigenvalues and the corresponding eigenvectors of the 2-dimensional square matrix $A = \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}$.

(2) Let $x, y, z$ be real. Then find all the eigenvalues of the 2-dimensional real symmetric matrix: $A = \begin{bmatrix} x & y \\ y & z \end{bmatrix}$ and show that the eigenvalues are real.

(3) Let $\lambda_1, \lambda_2 , (\lambda_1 \geq \lambda_2)$ be the eigenvalues of the real symmetric matrix $A$. Then the matrix $A$ can be diagonalized by using the orthogonal matrix:

$$
   R(\theta) = \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix}
$$

where $R(\theta)^T$ denotes the transpose of the matrix $R(\theta)$. Express $\cos 2\theta$ and $\sin 2\theta$ using $x, y, z$.

## **Kai**
### (1)
For the given matrix:

$$
A = \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}
$$

To find the eigenvalues and eigenvectors, we need to solve the characteristic equation:

$$
\text{det}(A - \lambda I)  = \lambda^2 - 4\lambda - 1 = 0
$$

the eigenvalues and eigenvectors are

$$
\lambda_1 = 2+\sqrt{5},\  \lambda_2= 2- \sqrt{5}
$$

$$
v_1 = \left(\frac{1}{2}(-1 + \sqrt{5}), 1\right), \ v_2 = \left(\frac{1}{2}(-1 - \sqrt{5}), 1\right)
$$

### (2)
For this matrix, the characteristic equation is:

$$
\begin{vmatrix} x - \lambda & y \\ y & z - \lambda \end{vmatrix} = 0
$$

This results in the quadratic equation:

$$
(x - \lambda)(z - \lambda) - y^2 = 0
$$

Expanding this gives:

$$
\lambda^2 - (x+z)\lambda + (xz - y^2) = 0
$$

The eigenvalues are the roots of this equation,

$$
\lambda_1 = \frac{1}{2} (\sqrt{x^2 - 2 x z + 4 y^2 + z^2} + x + z)
$$

$$
\lambda_2 = \frac{1}{2} (-\sqrt{x^2 - 2 x z + 4 y^2 + z^2} + x + z)
$$

which are real because the discriminant is non-negative:

$$
\Delta = (x+z)^2 - 4(xz - y^2) = (x - z)^2 + y^2
$$

### (3)

$$
\begin{aligned}
R^{-1} A R &= \begin{bmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{bmatrix} \begin{bmatrix} x & y \\ y & z \end{bmatrix} \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix} \\
&= \begin{bmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end{bmatrix} \begin{bmatrix} x \cos \theta + y \sin \theta & -x \sin \theta + y \cos \theta \\ y \cos \theta + z \sin \theta & -y \sin \theta + z \cos \theta \end{bmatrix}\\
&= \begin{bmatrix} x \cos^2 \theta + 2c \cos \theta \sin \theta + z \sin^2 \theta & (z - x) \cos \theta \sin \theta + y (\cos^2 \theta - \sin^2 \theta) \\ (z - x) \cos \theta \sin \theta + y (\cos^2 \theta - \sin^2 \theta) & x \sin^2 \theta - 2c \cos \theta \sin \theta + z \cos^2 \theta \end{bmatrix} \\
&= \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix}
\end{aligned}
$$

Then we have

$$
\begin{cases}
    \lambda_1 + \lambda_2 = x + z \\
    \lambda_1 - \lambda_2 = (x - z)\cos 2\theta + 2y \sin 2\theta \\
    (z - x) \cos \theta \sin \theta + y (\cos^2 \theta - \sin^2 \theta) = 0
\end{cases}
$$

which can be simplified to

$$
\begin{cases}
    \sqrt{(x - z)^2 +4y^2} = (x - z)\cos 2\theta + 2y \sin 2\theta \\
    \tan 2\theta = \displaystyle \frac{2y}{x-z} \Rightarrow x-z = \frac{2y \cos 2\theta}{\sin 2\theta}
\end{cases}
$$

Hence we have

$$
(x-z)\cos 2\theta + 2y \sin 2\theta = 2y \frac{\cos^2 2\theta}{\sin 2\theta} +2y \sin 2\theta = \frac{2y}{\sin 2\theta}
$$

Substituting this result back into

$$
\sqrt{(x - z)^2 +4y^2} = (x - z)\cos 2\theta + 2y \sin 2\theta
$$

we find:

$$
\sin 2\theta = \frac{2y}{\sqrt{(x - z)^2 +4y^2}}
$$

similarly,

$$
\cos 2\theta = \frac{x-z}{\sqrt{(x - z)^2 +4y^2}}
$$
