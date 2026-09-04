---
sidebar_label: 2018年8月実施 基礎科目 問題6 数学基礎
tags:
  - Tohoku-University
  - Mathematics.Calculus.Gamma-Function
  - Mathematics.Calculus.Beta-Function
  - Mathematics.Linear-Algebra.Matrix-Inverse
---
# 東北大学 工学研究科 電気・情報系 2018年8月実施 基礎科目 問題6 数学基礎

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原文

(1) 実数 $z>0$ に対して定積分を次式で定義する。

$$
\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}\,dt
$$

(a) 自然数 $n$ に対して、$\Gamma(n)$ を求めよ。

(b) 実数 $a,b$ に対して $\Gamma(a)\Gamma(b)=\Gamma(a+b)B(a,b)$ を示せ。ここで

$$
B(a,b)=2\int_0^{\pi/2}\sin^{2a-1}\theta\cos^{2b-1}\theta\,d\theta
$$

である。

(c) $\Gamma(1/2)$ を求めよ。

(2) 次の実数行列

$$
A=\begin{pmatrix}2&1&-1\\4&6&-1\\-2&7&1\end{pmatrix}
$$

に対して、2つの行列 $L$ と $U$ の積に分解することを考える。以下に定義されるように、行列 $L$ は対角成分が全て $1$ をとる下三角行列であり、行列 $U$ は上三角行列である。

$$
L=\begin{pmatrix}1&0&0\\L_{21}&1&0\\L_{31}&L_{32}&1\end{pmatrix},\quad
U=\begin{pmatrix}U_{11}&U_{12}&U_{13}\\0&U_{22}&U_{23}\\0&0&U_{33}\end{pmatrix}
$$

(a) $A=LU$ を満たす行列 $L$ と行列 $U$ を求めよ。

(b) 行列 $A$ の行列式を求めよ。

(c) 以下の連立方程式を満たす $x_1,x_2,x_3$ を求めよ。

$$
A\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1\\0\\0\end{pmatrix}
$$

(d) $A^{-1}$ を求めよ。

### 题目描述

(1) 对实数 $a>0$，定义

$$
\Gamma(a)=\int_0^\infty t^{a-1}e^{-t}\,dt.
$$

(a) 求正整数 $n$ 对应的 $\Gamma(n)$；(b) 对 $a,b>0$，证明

$$
\Gamma(a)\Gamma(b)=\Gamma(a+b)B(a,b),\quad B(a,b)=2\int_0^{\pi/2}\sin^{2a-1}\theta\cos^{2b-1}\theta\,d\theta;
$$

(c) 求 $\Gamma(1/2)$。

(2) 设

$$
A=\begin{pmatrix}2&1&-1\\4&6&-1\\-2&7&1\end{pmatrix}.
$$

(a) 求 $A=LU$，其中 $L$ 为对角元全为 $1$ 的下三角矩阵、$U$ 为上三角矩阵；(b) 求 $\det A$；(c) 解 $A\boldsymbol x=(1,0,0)^T$；(d) 求 $A^{-1}$。

## **Kai**

### (1)

(a) 分部积分给出 $\Gamma(a+1)=a\Gamma(a)$，又 $\Gamma(1)=1$，所以

$$
\boxed{\Gamma(n)=(n-1)!}.
$$

(b) 在乘积积分中令 $x=r\sin^2\theta,\ y=r\cos^2\theta$，其中 $r>0,0<\theta<\pi/2$，Jacobi 行列式的绝对值为 $2r\sin\theta\cos\theta$。于是

$$
\begin{aligned}
\Gamma(a)\Gamma(b)&=\int_0^\infty\!\int_0^\infty x^{a-1}y^{b-1}e^{-x-y}\,dx\,dy\\
&=\left(\int_0^\infty r^{a+b-1}e^{-r}\,dr\right)\left(2\int_0^{\pi/2}\sin^{2a-1}\theta\cos^{2b-1}\theta\,d\theta\right)\\
&=\Gamma(a+b)B(a,b).
\end{aligned}
$$

(c) 取 $a=b=1/2$，得 $\Gamma(1/2)^2=\pi$；积分为正，故

$$
\boxed{\Gamma(1/2)=\sqrt\pi}.
$$

### (2)

(a) 消元 $R_2\leftarrow R_2-2R_1,\ R_3\leftarrow R_3+R_1,\ R_3\leftarrow R_3-2R_2$，得到

$$
\boxed{L=\begin{pmatrix}1&0&0\\2&1&0\\-1&2&1\end{pmatrix},\quad U=\begin{pmatrix}2&1&-1\\0&4&1\\0&0&-2\end{pmatrix}}.
$$

(b) $\boxed{\det A=2\cdot4\cdot(-2)=-16}$。

(c) 先解 $L\boldsymbol y=\boldsymbol e_1$，得 $\boldsymbol y=(1,-2,5)^T$，再回代 $U\boldsymbol x=\boldsymbol y$：

$$
\boxed{\boldsymbol x=\left(-\frac{13}{16},\frac18,-\frac52\right)^T}.
$$

(d) 对三个单位列向量重复前代、回代，得到

$$
\boxed{A^{-1}=\frac1{16}\begin{pmatrix}-13&8&-5\\2&0&2\\-40&16&-8\end{pmatrix}}.
$$
