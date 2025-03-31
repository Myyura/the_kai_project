---
sidebar_label: "2019年8月実施 専門科目I 問題1"
tags:
  - Hiroshima-University
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2019年8月実施 専門科目I 問題1


## **Author**
samparker, 祭音Myyura

## **Description**
数列

$$
\begin{aligned}
    &a_0 = 0, a_1 = 1 \\
    &a_{n+2} = a_{n+1} + a_n \quad (n = 0, 1, 2, \ldots)
\end{aligned}
$$

の漸化式は、行列 $A = \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}$ を用いて、

$$
\begin{bmatrix}
    a_{n+2} \\ a_{n+1}
\end{bmatrix}
=
\begin{bmatrix}
    1 & 1 \\ 1 & 0
\end{bmatrix}
\begin{bmatrix}
    a_{n+1} \\ a_{n}
\end{bmatrix}
$$

と表現することができる。以下の問題を答えよ。

(1) 行列 $A$ のすべての固有値と固有ベクトルを求めよ。

(2) この数列の一般項 $a_n$ を求めよ。

--------------------------------------------------------

Let

$$
\begin{aligned}
    &a_0 = 0, a_1 = 1 \\
    &a_{n+2} = a_{n+1} + a_n \quad (n = 0, 1, 2, \ldots)
\end{aligned}
$$

be a sequence of numbers. The recurrence relation of this sequence can be represented by using matrix $A = \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}$ as

$$
\begin{bmatrix}
    a_{n+2} \\ a_{n+1}
\end{bmatrix}
=
\begin{bmatrix}
    1 & 1 \\ 1 & 0
\end{bmatrix}
\begin{bmatrix}
    a_{n+1} \\ a_{n}
\end{bmatrix}
$$

(1) Find all the eigenvalues and the corresponding eigenvectors of $A$.

(2) Find a general term $a_n$ of this sequence.

## **Kai**
### (1)
Eigenvalues

$$
\text{det}(A - \lambda E) = 0 \Rightarrow
\begin{vmatrix}
    1 - \lambda  & 1 \\ 1 & -\lambda
\end{vmatrix}
= \lambda^2 - \lambda - 1 = 0
$$

$$
\therefore \lambda_1 = \frac{1 + \sqrt{5}}{2}, \lambda_2 = \frac{1 - \sqrt{5}}{2}
$$

Eigenvectors

$$
v_1 = \left(\frac{1 + \sqrt{5}}{2}, 1 \right), v_2 = \left(\frac{1 - \sqrt{5}}{2}, 1 \right)
$$

### (2)
Let $P$ be the matrix formed by these eigenvectors, i.e.

$$
P = \begin{bmatrix}
    \frac{1 + \sqrt{5}}{2} & \frac{1 - \sqrt{5}}{2} \\
    1 & 1
\end{bmatrix}
$$

Then

$$
\text{det}(P) = \lambda_1 - \lambda_2 = \sqrt{5} 
$$

In particular,

$$
P^{-1} = \frac{1}{\sqrt{5}} \begin{bmatrix}
    1 & -\lambda_2 \\
    -1 & \lambda_1
\end{bmatrix}
$$

Then the diagonalization of $A$ is given by

$$
A = \begin{bmatrix}
    \lambda_1 & \lambda_2 \\ 
    1 & 1
\end{bmatrix}
\begin{bmatrix}
    \lambda_1 & 0 \\ 0 & \lambda_2
\end{bmatrix}
\frac{1}{\sqrt{5}} \begin{bmatrix}
    1 & -\lambda_2 \\
    -1 & \lambda_1
\end{bmatrix}
$$

The $n$th-power of $A$ is

$$
\begin{aligned}
A^n &= \begin{bmatrix}
    \lambda_1 & \lambda_2 \\ 
    1 & 1
\end{bmatrix}
\begin{bmatrix}
    \lambda_1^n & 0 \\ 0 & \lambda_2^n
\end{bmatrix}
\frac{1}{\sqrt{5}} \begin{bmatrix}
    1 & -\lambda_2 \\
    -1 & \lambda_1
\end{bmatrix} \\
&= \begin{bmatrix}
    \lambda_1^{n+1} & \lambda_2^{n+1} \\ 
    \lambda_1^n & \lambda_2^n
\end{bmatrix}
\frac{1}{\sqrt{5}} \begin{bmatrix}
    1 & -\lambda_2 \\
    -1 & \lambda_1
\end{bmatrix}
\end{aligned}
$$

Then the $(1, 2)$-entry of $A_n$ is

$$
\begin{aligned}
a_n &= \frac{1}{\sqrt{5}} (-\lambda_1^{n+1} \lambda_2 + \lambda_2^{n+1} \lambda_1) \\
&= \frac{1}{\sqrt{5}} \lambda_1 \lambda_2 (\lambda_2^n - \lambda_1^n) \\
&= \frac{1}{\sqrt{5}} (\lambda_1^n - \lambda_2^n) \\
&= \frac{1}{\sqrt{5}} \left( \left( \frac{1 + \sqrt{5}}{2} \right)^n  - \left( \frac{1 - \sqrt{5}}{2} \right)^n \right)
\end{aligned}
$$
