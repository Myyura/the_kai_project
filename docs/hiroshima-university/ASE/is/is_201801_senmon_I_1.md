---
sidebar_label: "2018年1月実施 専門科目I 問題1"
sidebar_position: 21
tags:
  - Hiroshima-University
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2018年1月実施 専門科目I 問題1


## **Author**
samparker

## **Description**
$n \times n$ 次実対称行列 $M$ に対して、その全ての固有値が正であれば、$M$ は正定値行列と呼ばれる。

(1) $A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$ とするとき、$A$ は正定値行列であるか？

(2) $B = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ とするとき、$B$ が正定値行列であるための必要十分条件は $a > 0$ かつ $ac > b^2$ であることを示せ。

An $n \times n$ real symmetric matrix $M$ is called positive definite if all its eigenvalues are positive.

(1) Let $A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$. Is the matrix $A$ positive definite?

(2) Let $B = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$. Show that $B$ is positive definite if and only if $a > 0$ and $ac > b^2$.

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

To ensure that $\lambda_1 > 0$, we have

$$
a + c + \sqrt{(a - c)^2 + 4b^2} > 0 \Leftrightarrow a + c + |a-c| > 0
$$

which is $a > 0$ or $a < 0, c > 0$.

To ensure that $\lambda_2 > 0$, we have

$$
a + c > \sqrt{(a - c)^2 + 4b^2} \geq 0
$$

Hence we have

$$
(a+c)^2 > (a-c)^2 + 4b^2
$$

$$
ac > b^2
$$

Since $b^2 \geq 0$, we know that the case $a < 0, c > 0$ is invalid.
Therefore we have

$$
a > 0 \text{ and } ac > b^2
$$
