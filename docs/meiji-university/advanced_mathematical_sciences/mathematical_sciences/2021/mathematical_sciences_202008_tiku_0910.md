---
sidebar_label: "2020年8月実施 线性代数"
tags:
  - Meiji-University
  - Mathematics.Calculus.Limit
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Inverse
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2020年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列 $A$ を

$$
A = \frac{1}{6} \begin{pmatrix} 3 & 2 & -2 \\  1 & 2 & 0 \\  1 & 1 & 1 \end{pmatrix}
$$

で定義する. 単位行列を $E$ とし, $A^0 = E$ とする. 以下の問いに答えよ.

(a) $A$ の固有値をすべて求めよ.

(b) $A$ に逆行列が存在するかどうかを理由とともに述べよ.

(c) $S_n$ を

$$
S_n = \sum_{i=0}^{n} A^i
$$

とするとき

$$
\lim_{n \to \infty} S_n
$$

を求めよ.

### 题目描述

定义矩阵

$$
A=\frac{1}{6}
\begin{pmatrix}
3&2&-2\\
1&2&0\\
1&1&1
\end{pmatrix}.
$$

记单位矩阵为 $E$，并规定 $A^0=E$。回答下列问题。

(a) 求 $A$ 的全部特征值。

(b) 说明 $A$ 是否存在逆矩阵，并给出理由。

(c) 定义

$$
S_n=\sum_{i=0}^{n}A^i.
$$

求

$$
\lim_{n\to\infty}S_n.
$$

## **Kai**

(a) $M=6A$ とおく。直接計算すると

$$
\det(xI-M)=(x-1)(x-2)(x-3).
$$

したがって $A$ の固有値は

$$
\boxed{\frac16,\ \frac13,\ \frac12}.
$$

(b) 固有値の積より

$$
\det A=\frac16\cdot\frac13\cdot\frac12=\frac1{36}\neq0.
$$

よって $A$ は逆行列をもつ。

(c) $A$ のすべての固有値の絶対値は $1$ より小さいので
$A^{n+1}\to O$ である。有限等比和

$$
(I-A)S_n=I-A^{n+1}
$$

から

$$
\lim_{n\to\infty}S_n=(I-A)^{-1}.
$$

実際，

$$
\boxed{
(I-A)^{-1}=
\begin{pmatrix}
2&\frac45&-\frac45\\
\frac12&\frac{17}{10}&-\frac15\\
\frac12&\frac12&1
\end{pmatrix}
}.
$$
