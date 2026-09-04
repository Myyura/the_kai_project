---
sidebar_label: "2019年8月実施 数理科学 I [2]"
tags:
  - Osaka-University
  - Mathematics.Linear-Algebra
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 I \[2\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$$
A=\begin{pmatrix}1&-2&2\\-3&0&-2\\-3&-3&1\end{pmatrix},\qquad
f(x)=x^5-x^4-6x^3-x^2+2x+4,\quad B=f(A)
$$

とする。(1) $B$ を求めよ。(2) $B$ が正則であることを示し、$B^{-1}=g(A)$ となる多項式 $g(x)$ を一つ求めよ。

## **Kai**

### (1)
特性多項式は

$$
p(x)=\det(xI-A)=x^3-2x^2-5x+6.
$$

$f(x)$ を $p(x)$ で割った余りは $x-2$ なので、Cayley–Hamilton の定理より

$$
\boxed{B=A-2I=\begin{pmatrix}-1&-2&2\\-3&-2&-2\\-3&-3&-1\end{pmatrix}}.
$$

### (2)

$$
(x-2)(x^2-5)=p(x)+4
$$

より $(A-2I)(A^2-5I)=4I$。したがって $B$ は正則で、

$$
\boxed{g(x)=\frac{x^2-5}{4}}.
$$
