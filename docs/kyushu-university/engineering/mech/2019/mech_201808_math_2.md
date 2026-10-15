---
sidebar_label: "2019年度 問2（数学）"
tags:
  - Kyushu-University
  - Discrete-Mathematics.Combinatorics.Recurrence-Relation
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Power
---

# 九州大学 工学府 機械系専攻 2019年度 数学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

連立漸化式

$$
\begin{cases}
x_{n+1}=x_n+2y_n-2,\\
y_{n+1}=3x_n+2y_n-4
\end{cases}
$$

について、以下の問いに答えよ。ただし、$n$ を自然数とする。（50点）

1. $\boldsymbol a_n=[x_n,y_n]^{\mathsf T}$ として、この連立漸化式を $\boldsymbol a_{n+1}=A\boldsymbol a_n+\boldsymbol b$ の形で表せ。ここで、$A$ は定数行列、$\boldsymbol b$ は定数ベクトルである。
2. 行列 $A$ の固有値と固有ベクトルを求めよ。
3. $A^n$ を計算せよ。
4. $[x_0,y_0]^{\mathsf T}=[1,2]^{\mathsf T}$ のとき、$\boldsymbol a_n=[x_n,y_n]^{\mathsf T}$ を求めよ。

#### 题目描述

对递推关系 $x_{n+1}=x_n+2y_n-2$、$y_{n+1}=3x_n+2y_n-4$：① 写成向量形式 $\boldsymbol a_{n+1}=A\boldsymbol a_n+\boldsymbol b$；② 求 $A$ 的特征值与特征向量；③ 求 $A^n$；④ 在初值 $(x_0,y_0)=(1,2)$ 下求通项。

## **Kai**

### (1)

$$
\boxed{A=\begin{pmatrix}1&2\\3&2\end{pmatrix},\qquad
\boldsymbol b=\binom{-2}{-4}}.
$$

### (2)

$$
\det(\lambda I-A)=\lambda^2-3\lambda-4=(\lambda+1)(\lambda-4).
$$

したがって固有値と対応する固有ベクトルは

$$
\boxed{\lambda=-1:\ c\binom1{-1},\qquad
\lambda=4:\ d\binom23}\qquad(c,d\ne0).
$$

### (3)

$$
P=\begin{pmatrix}1&2\\-1&3\end{pmatrix},\qquad
P^{-1}=\frac15\begin{pmatrix}3&-2\\1&1\end{pmatrix}
$$

とおけば $A=P\operatorname{diag}(-1,4)P^{-1}$。よって

$$
\boxed{A^n=\frac15
\begin{pmatrix}
3(-1)^n+2\cdot4^n&-2(-1)^n+2\cdot4^n\\
-3(-1)^n+3\cdot4^n&2(-1)^n+3\cdot4^n
\end{pmatrix}}.
$$

### (4)

$\boldsymbol a_*=A\boldsymbol a_*+\boldsymbol b$ を満たす定常解は $\boldsymbol a_*=(1,1)^{\mathsf T}$。したがって

$$
\boldsymbol a_n-\boldsymbol a_*=A^n(\boldsymbol a_0-\boldsymbol a_*)
=A^n\binom01.
$$

(3) より

$$
\boxed{
\boldsymbol a_n=\frac15
\binom{-2(-1)^n+2\cdot4^n+5}{2(-1)^n+3\cdot4^n+5}
}.
$$
