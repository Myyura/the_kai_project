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

### (1)

行列

$$
A=\begin{pmatrix}-1&1&0\\-1&2&-1\\0&1&-1\end{pmatrix}
$$

について考える．以下の問に答えよ．

(a) $A$ のすべての固有値と，それに対応する固有ベクトルを求めよ．

(b) $P^{-1}AP$ が対角行列になるような正則行列 $P$ を用いて，$P^{-1}AP$ および $(P^{-1}AP)^n$ を求めよ．ここで，$n$ は自然数である．

(c) $A^n$ を求めよ．

### (2)

$0\le x\le2\pi$ で定義される関数 $f(x)=x$ に対し，フーリエ級数展開

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^\infty(a_n\cos nx+b_n\sin nx)\quad(0<x<2\pi)
$$

を考える．ここで，$a_n$ および $b_n$ は

$$
a_n=\frac1\pi\int_0^{2\pi}f(x)\cos nx\,dx,\qquad
b_n=\frac1\pi\int_0^{2\pi}f(x)\sin nx\,dx
$$

で与えられる．以下の問に答えよ．

(a) $a_0$ を求めよ．

(b) $n\ge1$ に対して，$a_n$ および $b_n$ を求めよ．

(c) 問(a)および問(b)の結果を利用して，次式，

$$
\sum_{n=1}^\infty\frac{\sin nx}{n}=\frac{\pi-x}{2}\quad(0<x<2\pi)
$$

を導け．

### 题目描述

**(1)** 考虑矩阵

$$
A=\begin{pmatrix}-1&1&0\\-1&2&-1\\0&1&-1\end{pmatrix}.
$$

回答下列问题。

(a) 求 $A$ 的所有特征值及对应的特征向量。

(b) 利用使 $P^{-1}AP$ 为对角矩阵的可逆矩阵 $P$，求 $P^{-1}AP$ 和 $(P^{-1}AP)^n$。其中 $n$ 为自然数。

(c) 求 $A^n$。

**(2)** 对定义在 $0\le x\le2\pi$ 上的函数 $f(x)=x$，考虑傅里叶级数展开

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^\infty(a_n\cos nx+b_n\sin nx)\quad(0<x<2\pi),
$$

其中系数由下式给出：

$$
a_n=\frac1\pi\int_0^{2\pi}f(x)\cos nx\,dx,\qquad
b_n=\frac1\pi\int_0^{2\pi}f(x)\sin nx\,dx.
$$

回答下列问题。

(a) 求 $a_0$。

(b) 当 $n\ge1$ 时，求 $a_n$ 和 $b_n$。

(c) 利用(a)、(b)的结果，导出

$$
\sum_{n=1}^\infty\frac{\sin nx}{n}=\frac{\pi-x}{2}\quad(0<x<2\pi).
$$

## **Kai**
### (1)
#### (a)

$$
\det(\lambda I-A)=\lambda(\lambda-1)(\lambda+1).
$$

可取三组特征值及特征向量为

$$
\boxed{\begin{gathered}\lambda=-1:\ (-1,0,1)^T,\\
\lambda=0:\ (1,1,1)^T,\\
\lambda=1:\ (1,2,1)^T\end{gathered}}.
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
\boxed{\begin{gathered}A^n=\frac{A^2+A}{2}+\frac{\epsilon(A^2-A)}2
\\
=\begin{pmatrix}
(\epsilon-1)/2&1&-(1+\epsilon)/2\\
-1&2&-1\\
-(1+\epsilon)/2&1&(\epsilon-1)/2
\end{pmatrix}\end{gathered}}.
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

## **Reference**

- [公式問題（PDF）](https://www.ecei.tohoku.ac.jp/ecei_web/files/admission/202108kiso.pdf#page=13)
