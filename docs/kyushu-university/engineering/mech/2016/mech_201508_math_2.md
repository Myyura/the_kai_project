---
sidebar_label: "2016年度 問2（数学）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Matrix-Limit
---

# 九州大学 工学府 機械系専攻 2016年度 数学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

行列 $A=\begin{pmatrix}a&-1\\0&1\end{pmatrix}$ について、以下の問いに答えよ。ただし、$a$ は $0<a<1$ を満たす実数とする。（50点）

1. $A$ の固有値、およびそれぞれの固有値に対応する固有ベクトルを求めよ。
2. $n$ を $n>1$ を満たす自然数とする。$A^n$ を求めよ。
3. (2) で求めた $A^n$ について、$B=\lim_{n\to\infty}A^n$ とするとき、$B$ を $n$ を用いずに表せ。
4. (3) で求めた $B$ について、$xy$ 平面上の任意の点 $\boldsymbol x=[x,y]^{\mathsf T}$ の $B$ による $XY$ 平面への写像を $\boldsymbol X=[X,Y]^{\mathsf T}$ とするとき、$\boldsymbol X$ は $XY$ 平面上でどのような図形を描くか。式および図で示せ。

#### 题目描述

求上三角矩阵的特征值、特征向量、幂和极限，再给出极限矩阵将整个平面映成的图形与方程。

## **Kai**

### (1)

固有値は $a,1$ で、対応する固有ベクトルは

$$
\boxed{\lambda=a:\ c\binom10,\qquad
\lambda=1:\ d\binom1{a-1}}\quad(c,d\ne0).
$$

### (2)

右上成分は $-(1+a+\cdots+a^{n-1})$ なので

$$
\boxed{A^n=\begin{pmatrix}a^n&\dfrac{1-a^n}{a-1}\\0&1\end{pmatrix}}.
$$

### (3)

$0<a<1$ より $a^n\to0$。従って

$$
\boxed{B=\begin{pmatrix}0&\dfrac1{a-1}\\0&1\end{pmatrix}}.
$$

### (4)

$X=y/(a-1)$、$Y=y$ より、像は原点を通り傾き $a-1\in(-1,0)$ の直線

$$
\boxed{Y=(a-1)X}
$$

全体である。

![像となる直線](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2016/math-2-image.svg)
