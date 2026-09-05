---
sidebar_label: "2021年8月実施 基礎科目 問題6 数学基礎"
tags:
  - Tohoku-University
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Mathematics.Fourier-Analysis.Infinite-Series-from-Fourier-Series
---
# 東北大学 工学研究科 電気・情報系 2021年8月実施 基礎科目 問題6 数学基礎

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 題意の要約

[大学公開の原題、13 ページ](https://www.ecei.tohoku.ac.jp/ecei_web/files/admission/202108kiso.pdf#page=13)

1. 行列 $A=\begin{pmatrix}-1&1&0\\-1&2&-1\\0&1&-1\end{pmatrix}$ について、(a) 固有値と固有ベクトルを求める。(b) $P^{-1}AP$ が対角行列となる正則行列 $P$ を選び、その対角行列および $n$ 乗を計算する。(c) 自然数 $n$ に対して $A^n$ を求める。
2. $f(x)=x$（$0\le x\le2\pi$）を、$0<x<2\pi$ で
   $$f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)$$
   と展開する。係数は $a_n=\pi^{-1}\int_0^{2\pi}x\cos nx\,dx$、$b_n=\pi^{-1}\int_0^{2\pi}x\sin nx\,dx$ で定める。(a) $a_0$、(b) $n\ge1$ の $a_n,b_n$ を計算し、(c) $\sum_{n\ge1}\sin(nx)/n=(\pi-x)/2$ を導く。

### 题目描述

1. 给定矩阵
   $$A=\begin{pmatrix}-1&1&0\\-1&2&-1\\0&1&-1\end{pmatrix}.$$
   求全部特征值和特征向量；选取可逆矩阵 $P$ 将 $A$ 对角化，求对角矩阵的 $n$ 次幂，并由此求自然数 $n$ 对应的 $A^n$。
2. 将 $f(x)=x$ 在 $0<x<2\pi$ 上展开为 Fourier 级数
   $$f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx).$$
   用 $a_n=\pi^{-1}\int_0^{2\pi}x\cos nx\,dx$、$b_n=\pi^{-1}\int_0^{2\pi}x\sin nx\,dx$ 分别计算 $a_0$ 及 $n\ge1$ 时的系数，并推出 $\sum_{n\ge1}\sin(nx)/n=(\pi-x)/2$。

## **Kai**
### (1)
#### (a)

$$
\det(\lambda I-A)=\lambda(\lambda-1)(\lambda+1).
$$

可取三组特征值及特征向量为

$$
\boxed{\lambda=-1:\ (-1,0,1)^T,\qquad
\lambda=0:\ (1,1,1)^T,\qquad
\lambda=1:\ (1,2,1)^T}.
$$

各特征空间均为一维，其全部特征向量为所列向量的非零倍数。

#### (b)

$$
P=\begin{pmatrix}-1&1&1\\0&1&2\\1&1&1\end{pmatrix},\qquad
\boxed{P^{-1}AP=\operatorname{diag}(-1,0,1)}.
$$

$n\ge1$ 时，$\boxed{(P^{-1}AP)^n=\operatorname{diag}((-1)^n,0,1)}$；$n=0$ 时结果为单位矩阵。

#### (c)

令 $\epsilon=(-1)^n$。由 $A^n=P\operatorname{diag}(\epsilon,0,1)P^{-1}$，或利用 $A^3=A$，得 $n\ge1$ 时

$$
\boxed{A^n=\frac{A^2+A}{2}+\frac{\epsilon(A^2-A)}2
=\begin{pmatrix}
(\epsilon-1)/2&1&-(1+\epsilon)/2\\
-1&2&-1\\
-(1+\epsilon)/2&1&(\epsilon-1)/2
\end{pmatrix}}.
$$

$n=0$ 时 $A^0=I$。


### (2)
#### (a)

$$
\begin{aligned}
a_0
&=
\frac{1}{\pi} \int_0^{2 \pi} x dx
\\
&=
\frac{1}{\pi} \left[ \frac{x^2}{2} \right]_0^{2 \pi}
\\
&= 2 \pi
\end{aligned}
$$

#### (b)

$$
\begin{aligned}
a_n
&=
\frac{1}{\pi} \int_0^{2 \pi} x \cos nx dx
\\
&=
\frac{1}{n \pi} \left[ x \sin nx \right]_0^{2 \pi}
- \frac{1}{n \pi} \int_0^{2 \pi} \sin nx dx
\\
&= 0
\\
b_n
&=
\frac{1}{\pi} \int_0^{2 \pi} x \sin nx dx
\\
&=
- \frac{1}{n \pi} \left[ x \cos nx \right]_0^{2 \pi}
+ \frac{1}{n \pi} \int_0^{2 \pi} \cos nx dx
\\
&=
- \frac{2}{n}
\end{aligned}
$$

#### (c)
(a), (b) より、 $0 \lt x \lt 2 \pi$ のとき、

$$
\begin{aligned}
x
&= \pi + \sum_{n=1}^\infty \left( - \frac{2}{n} \right) \sin nx
\\
&= \pi - 2 \sum_{n=1}^\infty \frac{\sin nx}{n}
\end{aligned}
$$

したがって、

$$
\begin{aligned}
\sum_{n=1}^\infty \frac{\sin nx}{n}
= \frac{\pi - x}{2}
\end{aligned}
$$

が成り立つことがわかる。
