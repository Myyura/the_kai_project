---
sidebar_label: "2024年2月実施 専門基礎A [A-1]"
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 通信情報システム専攻 2024年2月実施 専門基礎A \[A-1\]

## **Author**
祭音Myyura

## **Description**
### (1)
Find the limit

$$
\lim_{x \to 0} \frac{\sinh x}{x}
$$

### (2)
Evaluate the integral

$$
D = \{(x,y) \mid 0 \leq x+y \leq 1, 0 \leq x-y \leq 1\}
$$

$$
I = \iint_D x^2 \ dxdy
$$

### (3)
Given the matrix:

$$
A = \begin{pmatrix} a & b \\ 0 & d \end{pmatrix}
$$

(i) Find the eigenvalues and corresponding eigenvectors of $A$, assuming it has distinct eigenvalues.

(ii) Using the eigenvalues and eigenvectors from (i), find $A^n$, where $n$ is a positive integer.

(iii) If the eigenvalues are the same, find $A^n$ for a positive integer $n$.

## **Kai**
### (1)
We know the Maclaurin series for $\sinh x$ is:

$$
\sinh x = x + \frac{x^3}{6} + O(x^5)
$$

Thus,

$$
\frac{\sinh x}{x} = 1 + \frac{x^2}{6} + O(x^4)
$$

As $x \to 0$, the limit is:

$$
\lim_{x \to 0} \frac{\sinh x}{x} = 1
$$

### (2)
We express $x$ and $y$ in terms of $u$ and $v$: $x=\frac{u+v}{2}$, $y=\frac{u-v}{2}$. The integrand $x^{2}$ becomes $(\frac{u+v}{2})^{2}$. The Jacobian of the transformation is calculated as $|J|=\frac{1}{2}$.

The integral in the $uv$-coordinate system is given by:

$$
\iint _{D}x^{2}\,dA=\int _{0}^{1}\int _{0}^{1}\frac{(u+v)^{2}}{4}\cdot \frac{1}{2}\,du\,dv=\int _{0}^{1}\int _{0}^{1}\frac{(u+v)^{2}}{8}\,du\,dv
$$

We integrate with respect to $u$ first, then $v$:

$$
\int _{0}^{1}\frac{1}{8}\left[\frac{(u+v)^{3}}{3}\right]_{0}^{1}\,dv=\int _{0}^{1}\frac{1}{24}[(1+v)^{3}-v^{3}]\,dv=\int _{0}^{1}\frac{1+3v+3v^{2}}{24}\,dv
$$

Evaluating the final integral:

$$
\frac{1}{24}\left[v+\frac{3v^{2}}{2}+v^{3}\right]_{0}^{1}=\frac{1}{24}\left(1+\frac{3}{2}+1\right)=\frac{1}{24}\left(\frac{7}{2}\right)=\frac{7}{48}
$$

### (3)
#### (i)
The characteristic equation is:

$$
\text{det}(A - \lambda I) = 0
$$

$$
\begin{pmatrix} a - \lambda & b \\ 0 & d - \lambda \end{pmatrix}
$$

The determinant is:

$$
(a - \lambda)(d - \lambda) = 0
$$

Thus, the eigenvalues are $\lambda_1 = a$ and $\lambda_2 = d$.

The corresponding eigenvectors are:

* For $\lambda_1 = a$, the eigenvector is $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$.
* For $\lambda_2 = d$, the eigenvector is $\begin{pmatrix} \frac{b}{d-a} \\ 1 \end{pmatrix}$.

### (ii)
If $A$ has distinct eigenvalues, it is diagonalizable. We can write $A=PDP^{-1}$, where $D$ is the diagonal matrix of eigenvalues and $P$ is the matrix whose columns are the corresponding eigenvectors:

$$
P=\left(\begin{matrix}1&\frac{b}{d-a}\\ 0&1\end{matrix}\right),\quad D=\left(\begin{matrix}a&0\\ 0&d\end{matrix}\right)
$$

The inverse of $P$ is $P^{-1}=\left(\begin{matrix}1&-\frac{b}{d-a}\\ 0&1\end{matrix}\right)$.Then $A^{n}=PD^{n}P^{-1}$:

$$
A^{n}=\left(\begin{matrix}1&\frac{b}{d-a}\\ 0&1\end{matrix}\right)\left(\begin{matrix}a^{n}&0\\ 0&d^{n}\end{matrix}\right)\left(\begin{matrix}1&-\frac{b}{d-a}\\ 0&1\end{matrix}\right)
$$

$$
A^{n}=\left(\begin{matrix}a^{n}&\frac{bd^{n}}{d-a}\\ 0&d^{n}\end{matrix}\right)\left(\begin{matrix}1&-\frac{b}{d-a}\\ 0&1\end{matrix}\right)=\left(\begin{matrix}a^{n}&-\frac{ba^{n}}{d-a}+\frac{bd^{n}}{d-a}\\ 0&d^{n}\end{matrix}\right)
$$

$$
A^{n}=\left(\begin{matrix}a^{n}&b\frac{d^{n}-a^{n}}{d-a}\\ 0&d^{n}\end{matrix}\right)
$$

### (iii)
If $a = d$, then $A$ is not diagonalizable, and we use the Jordan form to find $A^n$:

$$
A^n = \begin{pmatrix} a & b \\ 0 & a \end{pmatrix}^n = \begin{pmatrix} a^n & nba^{n-1} \\ 0 & a^n \end{pmatrix}
$$
