---
sidebar_label: "2014年度 問2（数学）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Cayley-Hamilton-Theorem
---

# 九州大学 工学府 機械系専攻 2014年度 数学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

4行4列の行列

$$
A=\begin{pmatrix}2&1&1&1\\1&2&1&1\\1&1&2&1\\1&1&1&2\end{pmatrix}
$$

について、次の各問いに答えよ。（50点）

1. $A$ の行列式を求めよ。
2. $A$ の逆行列を求めよ。
3. $A$ の固有方程式を求め、すべての固有値と固有ベクトルを求めよ。
4. $2A^5-16A^4+36A^3-32A^2+11A+E$ を計算せよ。ここで $E$ は4行4列の単位行列である。

#### 题目描述

求给定四阶矩阵的行列式、逆矩阵、全部特征值与特征向量，并计算其五次矩阵多项式。

## **Kai**

全成分が $1$ の行列を $J$ とすると $A=E+J$、$J^2=4J$ である。

### (1)

$J$ は $(1,1,1,1)^{\mathsf T}$ に対して固有値 $4$、その直交補空間に対して固有値 $0$ を持つ。よって $A$ の固有値は $5,1,1,1$ であり、$\boxed{\det A=5}$。

### (2)

$(E+J)(E-J/5)=E$ より

$$
\boxed{A^{-1}=\frac15\begin{pmatrix}4&-1&-1&-1\\-1&4&-1&-1\\-1&-1&4&-1\\-1&-1&-1&4\end{pmatrix}}.
$$

### (3)

固有方程式と各固有空間は

$$
\boxed{(\lambda-5)(\lambda-1)^3=0},
$$

$$
\boxed{\lambda=5:\quad v=c(1,1,1,1)^{\mathsf T},\ c\ne0},
$$

$$
\boxed{\lambda=1:\quad v=(a,b,c,-a-b-c)^{\mathsf T},\ (a,b,c)\ne(0,0,0)}.
$$

### (4)

Cayley–Hamilton の定理から $A^4-8A^3+18A^2-16A+5E=0$。したがって

$$
\begin{aligned}
2A^5-16A^4+36A^3-32A^2+11A+E
&=2A(A^4-8A^3+18A^2-16A+5E)+A+E\\
&=\boxed{\begin{pmatrix}3&1&1&1\\1&3&1&1\\1&1&3&1\\1&1&1&3\end{pmatrix}}.
\end{aligned}
$$
