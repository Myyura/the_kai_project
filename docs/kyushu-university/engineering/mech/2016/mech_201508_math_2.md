---
sidebar_label: "2015年8月実施 問2（数学）"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Matrix-Limit
---

# 九州大学 工学府 機械系専攻 2015年8月実施 数学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

行列 $A=\begin{bmatrix}a&-1\\0&1\end{bmatrix}$ について、以下の問いに答えよ。ただし、$a$ は $0<a<1$ を満たす実数とする。（50点）

(1) $A$ の固有値、およびそれぞれの固有値に対応する固有ベクトルを求めよ。

(2) $n$ を $n>1$ を満たす自然数とする。$A^n$ を求めよ。

(3) (2)で求めた $A^n$ について、$B=\displaystyle\lim_{n\to\infty}A^n$ とするとき、$B$ を $n$ を用いずに表せ。

(4) (3)で求めた $B$ について、$xy$ 平面上の任意の点 $\boldsymbol x=[x,y]^{\mathsf T}$ の $B$ による $XY$ 平面への写像を $\boldsymbol X=[X,Y]^{\mathsf T}$ とするとき、$\boldsymbol X$ は $XY$ 平面上でどのような図形を描くか。式および図で示せ。

#### 题目描述

对于矩阵 $A=\begin{bmatrix}a&-1\\0&1\end{bmatrix}$，回答以下各问。实数 $a$ 满足 $0<a<1$。（50分）

(1) 求 $A$ 的特征值，以及各特征值对应的特征向量。

(2) 设 $n$ 为满足 $n>1$ 的自然数，求 $A^n$。

(3) 对于(2)所得的 $A^n$，令 $B=\displaystyle\lim_{n\to\infty}A^n$，用不含 $n$ 的式子表示 $B$。

(4) 对于(3)所得的 $B$，将 $xy$ 平面上任意点 $\boldsymbol x=[x,y]^{\mathsf T}$ 通过 $B$ 映射到 $XY$ 平面，记其像为 $\boldsymbol X=[X,Y]^{\mathsf T}$。$\boldsymbol X$ 在 $XY$ 平面上形成什么图形？用方程和图表示。

## **Kai**

### (1)

固有値は $a,1$ で、対応する固有ベクトルは

$$
\begin{gathered}
\boxed{\lambda=a:\ c\binom10,\qquad
\lambda=1:\ d\binom1{a-1}}\\
(c,d\ne0).
\end{gathered}
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

![像となる直線](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_math-2-image.svg)
