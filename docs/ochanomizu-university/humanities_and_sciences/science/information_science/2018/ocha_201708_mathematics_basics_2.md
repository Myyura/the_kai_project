---
sidebar_label: "2017年8月実施 数学基礎 問題2"
tags:
  - Ochanomizu-University
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
  - Mathematics.Linear-Algebra.Matrix-Power
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2017年8月実施 数学基礎 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### [1]

$$
A=
\begin{pmatrix}
1&1&1&1\\
1&2&-2&3\\
1&3&-5&5
\end{pmatrix}
$$

で表現される線形変換 $f$ の核空間 $\operatorname{Ker}f$ と像空間 $\operatorname{Im}f$ の次元および基底を求めよ。

### [2]

$$
A=
\begin{pmatrix}
-7&-12&0\\
4&7&0\\
-2&-4&-1
\end{pmatrix}
$$

を対角化し、$A^n$（$n\ge1$）を求めよ。

### [3]

次の行列式を計算せよ。

$$
\begin{vmatrix}
b^2+c^2&ab&ca\\
ab&c^2+a^2&bc\\
ca&bc&a^2+b^2
\end{vmatrix}.
$$

### 题目描述

1. 求给定 $3\times4$ 矩阵所表示线性变换的核、像的维数与基。
2. 对给定 $3\times3$ 矩阵作对角化并求 $A^n$。
3. 计算一个含参数 $a,b,c$ 的三阶行列式。

## **Kai**

### [1]

行基本変形により

$$
A\sim
\begin{pmatrix}
1&0&4&-1\\
0&1&-3&2\\
0&0&0&0
\end{pmatrix}.
$$

したがって

$$
\operatorname{Ker}f
=\operatorname{span}\left\{
\begin{pmatrix}-4\\3\\1\\0\end{pmatrix},
\begin{pmatrix}1\\-2\\0\\1\end{pmatrix}
\right\},
\qquad
\boxed{\dim\operatorname{Ker}f=2}.
$$

主列は第 $1,2$ 列なので

$$
\operatorname{Im}f
=\operatorname{span}\left\{
\begin{pmatrix}1\\1\\1\end{pmatrix},
\begin{pmatrix}1\\2\\3\end{pmatrix}
\right\},
\qquad
\boxed{\dim\operatorname{Im}f=2}.
$$

### [2]

特性多項式は

$$
\det(\lambda I-A)=(\lambda-1)(\lambda+1)^2.
$$

対応する固有ベクトルとして

$$
\lambda=-1:\quad
\begin{pmatrix}-2\\1\\0\end{pmatrix},
\begin{pmatrix}0\\0\\1\end{pmatrix},
\qquad
\lambda=1:\quad
\begin{pmatrix}3\\-2\\1\end{pmatrix}
$$

をとる。よって

$$
P=
\begin{pmatrix}
-2&0&3\\
1&0&-2\\
0&1&1
\end{pmatrix},
\qquad
P^{-1}AP=\operatorname{diag}(-1,-1,1).
$$

$q=(-1)^n$ とおけば

$$
\boxed{
A^n=
\begin{pmatrix}
4q-3&6q-6&0\\
2-2q&4-3q&0\\
q-1&2q-2&q
\end{pmatrix}
}.
$$

### [3]

第 $1$ 行で展開して同類項をまとめると

$$
\begin{aligned}
&\det
\begin{pmatrix}
b^2+c^2&ab&ca\\
ab&c^2+a^2&bc\\
ca&bc&a^2+b^2
\end{pmatrix}\\
&=(b^2+c^2)(c^2+a^2)(a^2+b^2)+2a^2b^2c^2\\
&\quad -(b^2+c^2)b^2c^2-(c^2+a^2)c^2a^2-(a^2+b^2)a^2b^2\\
&=\boxed{4a^2b^2c^2}.
\end{aligned}
$$
