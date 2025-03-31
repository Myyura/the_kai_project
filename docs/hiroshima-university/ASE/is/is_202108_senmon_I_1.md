---
sidebar_label: "2021年8月実施 専門科目I 問題1"
sidebar_position: 19
tags:
  - Hiroshima-University
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2021年8月実施 専門科目I 問題1


## **Author**
samparker, 祭音Myyura

## **Description**
(1) $A = \begin{bmatrix} 0 & -\alpha \\ \alpha & 0 \end{bmatrix}$ のすべての固有値と固有ベクトルを求めよ。ただし、$\alpha \neq 0$ は実数とする。

(2) $A^k$ を求めよ。ただし、$k$ は正の整数とする。

(3) 実正方行列 $X$ に対して、行列の指数関数を

$$
\exp(X) = \sum_{k=0}^{\infty} \frac{1}{k!} X^k = E + X + \frac{1}{2!} X^2 + \cdots
$$

で定義する。これは、すべての行列 $X$ に対して収束することが知られている。ただし、$E$ は単位行列である。

$$
\exp(A) = \begin{bmatrix} \cos \alpha & -\sin \alpha \\ \sin \alpha & \cos \alpha \end{bmatrix}
$$

となることを示せ。

--------------------------------------------------------

(1) Find all the eigenvalues of a matrix $A = \begin{bmatrix} 0 & -\alpha \\ \alpha & 0 \end{bmatrix}$ and the corresponding eigenvectors. Here $\alpha \neq 0$ is a real number.

(2) Find $A^k$. Here $k$ is a positive integer.

(3) For real square matrix $X$, exponential function is defined as

$$
\exp(X) = \sum_{k=0}^{\infty} \frac{1}{k!} X^k = E + X + \frac{1}{2!} X^2 + \cdots
$$

It is known that this function converges for all matrices $X$. Here $E$ is the identity matrix.
Show that

$$
\exp(A) = \begin{bmatrix} \cos \alpha & -\sin \alpha \\ \sin \alpha & \cos \alpha \end{bmatrix}
$$

## **Kai**
### (1)
Eigenvalues

$$
\begin{bmatrix}
    -\lambda & -\alpha \\
    \alpha & \lambda
\end{bmatrix}
= 0
\Rightarrow
\lambda^2 + \alpha^2 = 0
\Rightarrow
\begin{cases}
    \lambda_1 = i\alpha \\
    \lambda_2 = -i \alpha
\end{cases}
$$

the corresponding eigenvectors

$$
\begin{cases}
    v_1 = (i, 1) \\
    v_2 = (-i, 1)
\end{cases}
$$

### (2)

$$
u_1 = \frac{1}{\sqrt{2}} \begin{pmatrix}
    i \\ 1
\end{pmatrix},
u_2 = \frac{1}{\sqrt{2}} \begin{pmatrix}
    -i \\ 1
\end{pmatrix},
$$

$$
U = \frac{1}{\sqrt{2}} \begin{pmatrix}
    i & -i \\ 1 & 1
\end{pmatrix},
U^{-1} = \frac{1}{\sqrt{2}} \begin{pmatrix}
    -i & 1 \\ i & 1
\end{pmatrix},
$$

Then,

$$
\begin{aligned}
    A^k &= \frac{1}{2} \begin{pmatrix}
    i & -i \\ 1 & 1
\end{pmatrix}
\begin{pmatrix}
    (i\alpha)^k & 0 \\ 0 & (-i\alpha)^k
\end{pmatrix}
\begin{pmatrix}
    -i & 1 \\ i & 1
\end{pmatrix} \\
&= \frac{1}{2}\begin{pmatrix}
    (-i\alpha)^k + (i\alpha)^k & i(i\alpha)^k - i(-i\alpha)^k \\
    i(-i\alpha)^k -i(i\alpha)^k & (-i\alpha)^k + (i\alpha)^k 
\end{pmatrix}
\end{aligned}
$$

### (3)
The [Cayley-Hamilton Theorem](https://en.wikipedia.org/wiki/Cayley%E2%80%93Hamilton_theorem#:~:text=In%20linear%20algebra%2C%20the%20Cayley,satisfies%20its%20own%20characteristic%20equation.) guarantees that

$$
A^2 + \alpha^2 E = 0
$$

so that $A^2 = -\alpha^2 E$. Higher powers of $A$ are $A^3 = -\alpha^2 A$, $A^4 = -\alpha^2 A^2 = \alpha^4 E$, and so on.
Substituting these into the power series for $\exp(A)$ and grouping together the terms involving $E$ and $A$ produces

$$
\begin{aligned}
    \exp(A) &= E + A + \frac{1}{2!} A^2 + \frac{1}{3!}A^3 + \cdots \\
    &= E + A - \frac{\alpha^2}{2!}E - \frac{\alpha^2}{3!}A + \frac{\alpha^4}{4!}E + \frac{\alpha^4}{5!}A + \cdots \\
    &= \left(1 - \frac{\alpha^2}{2!} + \frac{\alpha^4}{4!} - \cdots \right)E + \left(1 - \frac{\alpha^2}{3!} + \frac{\alpha^4}{5!} - \cdots \right)A \\
    &= (\cos \alpha) E + \frac{\sin \alpha}{\alpha} A \\
    &= \begin{bmatrix} \cos \alpha & -\sin \alpha \\ \sin \alpha & \cos \alpha \end{bmatrix}
\end{aligned}
$$