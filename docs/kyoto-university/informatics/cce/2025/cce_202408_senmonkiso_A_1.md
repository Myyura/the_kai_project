---
sidebar_label: "2024年8月実施 専門基礎A [A-1]"
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 通信情報システム専攻 2024年8月実施 専門基礎A \[A-1\]

## **Author**
祭音Myyura

## **Description**
### (1)
(a) Evaluate the following integral:

$$
I = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-(x^2 + y^2)} dx dy, \quad x, y \in \mathbb{R}
$$

(b) Using the result of Question (a), evaluate the following integral:

$$
J = \int_{-\infty}^{\infty} e^{-x^2} dx, \quad x \in \mathbb{R}
$$

(c) Gamma function is defined as follows:

$$
\Gamma(x) = \int_0^\infty e^{-t} t^{x-1}  dt, \quad x, t \in \mathbb{R}
$$

Using the result from Question (b), find the value of $\Gamma\left(\frac{1}{2}\right)$.

### (2)
Matrix $A$ is given as:

$$
A = \begin{bmatrix} 0 & 1 & 2 \\ -2 & 3 & 2 \\ -1 & 1 & 3 \end{bmatrix}
$$

(a) Find all the eigenvalues and their corresponding eigenvectors of matrix $A$.

(b) Let $n$ be a positive integer. Find $A^n$.

## **Kai**
### (1)
#### (a)
The integral $I=\int _{-\infty }^{\infty }\int _{-\infty }^{\infty }e^{-(x^{2}+y^{2})}dxdy$ can be solved using polar coordinates, where $x^{2}+y^{2}=r^{2}$ and $dx\,dy=r\,dr\,d\theta $. The integral becomes:

$$
I=\int _{0}^{2\pi }\int _{0}^{\infty }e^{-r^{2}}r\,dr\,d\theta
$$

We use a substitution $u=r^{2}$, $du=2r\,dr$.

$$
I=\int _{0}^{2\pi }\left[\int _{0}^{\infty }e^{-u}\frac{1}{2}\,du\right]\,d\theta
$$

The inner integral evaluates to $\frac{1}{2}[-e^{-u}]_{0}^{\infty }=\frac{1}{2}(0-(-1))=\frac{1}{2}$.

$$
I=\int _{0}^{2\pi }\frac{1}{2}\,d\theta =\frac{1}{2}[\theta ]_{0}^{2\pi }=\frac{1}{2}(2\pi )=\pi
$$

#### (2)
The integral $J=\int _{-\infty }^{\infty }e^{-x^{2}}dx$ can be related to $I$ by noting that $I=J^{2}$.

$$
I=\left(\int _{-\infty }^{\infty }e^{-x^{2}}dx\right)\left(\int _{-\infty }^{\infty }e^{-y^{2}}dy\right)=J^{2}
$$

Since $I=\pi$, we have $J^{2}=\pi$. As the integrand $e^{-x^{2}}$ is positive, $J$ must be positive. $J=\sqrt{\pi}$.

#### (c)

$$
\Gamma\left(\frac{1}{2}\right)=\intop_{t=0}^{+\infty}t^{\frac{1}{2}-1}e^{-t}dt=\intop_{t=0}^{+\infty}\frac{e^{-t}}{\sqrt{t}}dt,
$$

and with $y = \sqrt{t}, dy=\frac{dt}{2\sqrt{t}}$, we get

$$
\Gamma\left(\frac{1}{2}\right)=2\intop_{y=0}^{+\infty}e^{-y^{2}}dy=\intop_{y=-\infty}^{+\infty}e^{-y^{2}}dy=\sqrt{\pi}.
$$

### (2)
#### (a)
We find the eigenvalues $\lambda $ by solving the characteristic equation $\det (A-\lambda I)=0$, which yields $\lambda ^{3}-6\lambda ^{2}+11\lambda -6=0$. The roots are $\lambda _{1}=1$, $\lambda _{2}=2$, $\lambda _{3}=3$.

We solve $(A-\lambda I)\mathbf{v}=\mathbf{0}$ for each eigenvalue to find the corresponding eigenvectors:

- For $\lambda _{1}=1$, the eigenvector is proportional to $\mathbf{v}_{1}=\left[\begin{matrix}1\\ 1\\ 0\end{matrix}\right]$.
- For $\lambda _{2}=2$, the eigenvector is proportional to $\mathbf{v}_{2}=\left[\begin{matrix}1\\ 0\\ 1\end{matrix}\right]$.
- For $\lambda _{3}=3$, the eigenvector is proportional to $\mathbf{v}_{3}=\left[\begin{matrix}1\\ 1\\ 1\end{matrix}\right]$.

#### (b)
The matrix $A$ is diagonalizable as $A=PDP^{-1}$, where $P$ is the matrix of eigenvectors and $D$ is the diagonal matrix of eigenvalues. $A^{n}=PD^{n}P^{-1}$.

$$
P=\left[\begin{matrix}1&1&1\\ 1&0&1\\ 0&1&1\end{matrix}\right],\quad D^{n}=\left[\begin{matrix}1&0&0\\ 0&2^{n}&0\\ 0&0&3^{n}\end{matrix}\right],\quad P^{-1}=\left[\begin{matrix}1&0&-1\\ 1&-1&0\\ -1&1&1\end{matrix}\right]
$$

Hence The matrix $A^{n}$ is:

$$
\mathbf{A}^{\mathbf{n}}=\left[\begin{matrix}1+2^{n}-3^{n}&-2^{n}+3^{n}&-1+3^{n}\\ 1-3^{n}&3^{n}&-1+3^{n}\\ 2^{n}-3^{n}&-2^{n}+3^{n}&3^{n}\end{matrix}\right]
$$