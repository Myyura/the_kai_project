---
sidebar_label: "2021年1月実施 専門科目I 問題1"
sidebar_position: 15
tags:
  - Hiroshima-University
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2021年1月実施 専門科目I 問題1


## **Author**
samparker, 祭音Myyura

## **Description**
2次元の回転行列 $R(\theta) = \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix}$ について以下の問いに答えよ。

(1) $R(\theta)$ のすべての固有値と対応する固有ベクトルを求めよ。

(2) $R(\theta)$ をユニタリ行列 $U$ を用いて対角化せよ。

(3) 対角化の結果を用いて、$R(\theta)^n$ を求めよ。ただし、$n$ は正の整数とする。

(4) 対角化の結果を用いて、正弦および余弦の加法定理を導出せよ。

--------------------------------------------------------

Let $R(\theta) = \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix}$ be the rotation matrix in the two-dimensional Euclidean space.

(1) Find all the eigenvalues of the matrix $R(\theta)$ and the corresponding eigenvectors.

(2) Diagonalize the matrix $R(\theta)$ by using a unitary matrix $U$.

(3) Find the $R(\theta)^n$ for the natural number $n$ by using the result of the diagonalization.

(4) Derive the sum formulas for the matrix $R(\theta)$ and cosine by using the result of the diagonalization.

## **Kai**
Let $A$ denote matrix $R(\theta)$ and $E$ denote the identity matrix.

### (1)
Eigenvalues:

$$
\begin{aligned}
    &|A - \lambda E| = 0 \\
    &\Rightarrow \begin{vmatrix}
        \cos \theta - \lambda & -\sin \theta \\
        \sin \theta & \cos \theta - \lambda
    \end{vmatrix} = 0 \\
    &\Rightarrow \lambda^2 - 2 \lambda \cos \theta + 1 = 0 \\
    &\Rightarrow \begin{cases}
        \lambda_1 = \cos \theta - i\sin \theta \\
        \lambda_2 = \cos \theta + i\sin \theta
    \end{cases}
\end{aligned}
$$

Corresponding eigenvectors:

$$
\begin{cases}
    v_1 = (-i, 1) \\
    v_2 = (i, 1)
\end{cases}
$$

### (2)

$$
U = \frac{1}{\sqrt{2}} \begin{bmatrix}
    -i & i \\ 1 & 1
\end{bmatrix}
$$

$$
U^{-1} = (U^{*})^T = \frac{1}{\sqrt{2}} \begin{bmatrix}
    i & 1 \\ -i & 1
\end{bmatrix}
$$

$$
U^{-1}AU = \begin{bmatrix}
    \cos \theta - i \sin \theta & 0 \\
    0 & \cos \theta + i \sin \theta
\end{bmatrix}
$$

### (3)
Let $D$ denote $\begin{bmatrix} \cos \theta - i \sin \theta & 0 \\ 0 & \cos \theta + i \sin \theta \end{bmatrix}$. Then

$$
\begin{aligned}
D^n &= \begin{bmatrix}
    (\cos \theta - i \sin \theta)^n & 0 \\
    0 & (\cos \theta + i \sin \theta)^n
\end{bmatrix} \\
&= \begin{bmatrix}
    (e^{-i\theta})^n & 0 \\
    0 & (e^{i\theta})^n
\end{bmatrix}
=
\begin{bmatrix}
    e^{-in\theta} & 0 \\
    0 & e^{in\theta}
\end{bmatrix} \\
&= \begin{bmatrix}
    \cos (-n\theta) + i \sin (-n\theta) & 0 \\
    0 & \cos (n\theta) + i \sin (n\theta)
\end{bmatrix} \\
&= \begin{bmatrix}
    \cos (n\theta) - i \sin (n\theta) & 0 \\
    0 & \cos (n\theta) + i \sin (n\theta)
\end{bmatrix}
\end{aligned}
$$

Hence

$$
\begin{aligned}
    A^n = UD^nU^{-1} = \begin{bmatrix}
    \cos (n\theta) & -\sin (n\theta) \\
    \sin (n\theta) & \cos (n\theta)
\end{bmatrix}
\end{aligned}
$$

### (4)

$$
\begin{aligned}
    R(\alpha) R(\beta) &= U \begin{bmatrix}
        \cos \alpha - i \sin \alpha & 0 \\
    0 & \cos \alpha + i \sin \alpha
    \end{bmatrix}
    \begin{bmatrix}
        \cos \beta - i \sin \beta & 0 \\
    0 & \cos \beta + i \sin \beta
    \end{bmatrix} U^{-1} \\
    &= U \begin{bmatrix}
        e^{-i \alpha} e^{-i \beta} & 0 \\
    0 & e^{i \alpha} e^{i \beta} 
    \end{bmatrix} U^{-1} \\
    &= U \begin{bmatrix}
        e^{-i (\alpha + \beta)} & 0 \\
    0 & e^{i (\alpha + \beta)} 
    \end{bmatrix} U^{-1} \\
    &= U \begin{bmatrix}
        \cos (\alpha + \beta) - i \sin (\alpha + \beta) & 0 \\
    0 & \cos (\alpha + \beta) + i \sin (\alpha + \beta)
    \end{bmatrix} U^{-1} \\
    &= R(\alpha + \beta)
\end{aligned}
$$

Hence, we have

$$
\begin{aligned}
    R(\alpha) R(\beta) &= \begin{bmatrix}
        \cos \alpha \cos \beta - \sin \alpha \sin \beta & -\sin \alpha \cos \beta - \cos \alpha \sin \beta \\
        \sin \alpha \cos \beta + \cos \alpha \sin \beta & \cos \alpha \cos \beta - \sin \alpha \sin \beta
    \end{bmatrix} \\
    &= R(\alpha + \beta) \\
    &= \begin{bmatrix}
        \cos (\alpha + \beta) & -\sin (\alpha + \beta) \\
        \sin (\alpha + \beta) & \cos (\alpha + \beta)
    \end{bmatrix}
\end{aligned}
$$

which implies

$$
\begin{aligned}
    \sin (\alpha + \beta) &= \sin \alpha \cos \beta + \cos \alpha \sin \beta \\
    \cos (\alpha + \beta) &= \cos \alpha \cos \beta - \sin \alpha \sin \beta
\end{aligned}
$$
