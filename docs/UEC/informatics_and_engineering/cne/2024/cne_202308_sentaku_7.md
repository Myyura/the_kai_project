---
sidebar_label: 2023年8月実施 選択問題 数値計算
tags:
  - University-of-Electro-Communications
  - Mathematics.Linear-Algebra.Jacobi-Iterative-Method
  - Mathematics.Linear-Algebra.Diagonal-Dominance
  - Mathematics.Linear-Algebra.Matrix-Norm
  - Mathematics.Linear-Algebra.Stationary-Iterative-Method
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2023年8月実施 選択問題 数値計算

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

連立一次方程式 $Ax=b$（$a_{ii}\ne0$）で $A=D+L+U$ と分解する。$D$ は対角、$L,U$ はそれぞれ狭義下・上三角部分とする。ヤコビ法 $x^{(k+1)}=Mx^{(k)}+Nb$ の $M,N$ を求め、

$$
A=\begin{pmatrix}4&1\\1&2\end{pmatrix},\quad
b=\begin{pmatrix}15\\9\end{pmatrix},\quad
x^{(0)}=\begin{pmatrix}0\\0\end{pmatrix}
$$

の場合に第 3 反復まで計算せよ。ノルムを $\|x\|=\max_i|x_i|$, $\|A\|=\max_i\sum_j|a_{ij}|$ とするとき、$\|Ax\|\le\|A\|\|x\|$ を示せ。さらに、$A$ が狭義対角優位なら $\|M\|<1$ であることと、縮小写像の不動点定理によりヤコビ法が任意の初期値から解に収束することを証明せよ。

### 题目描述

求线性方程组 Jacobi 迭代法的迭代矩阵和前三步迭代；证明无穷范数不等式，并用压缩映射定理证明严格对角占优时 Jacobi 法必收敛。

## **Kai**

### 1.

#### (a)

$A=D+L+U$ より

$$
Dx=-(L+U)x+b.
$$

したがって、

$$
\boxed{M=-D^{-1}(L+U),\qquad N=D^{-1}}.
$$

#### (b)

$$
A=\begin{pmatrix}4&1\\1&2\end{pmatrix}
$$

のとき、

$$
\boxed{
M=\begin{pmatrix}0&-\dfrac14\\-\dfrac12&0\end{pmatrix},
\qquad
N=\begin{pmatrix}\dfrac14&0\\0&\dfrac12\end{pmatrix}
}.
$$

#### (c)

$b=(15,9)^{\mathsf T}$、$x^{(0)}=(0,0)^{\mathsf T}$ とすると、

$$
\boxed{
x^{(1)}=\begin{pmatrix}\dfrac{15}{4}\\\dfrac92\end{pmatrix},\qquad
x^{(2)}=\begin{pmatrix}\dfrac{21}{8}\\\dfrac{21}{8}\end{pmatrix},\qquad
x^{(3)}=\begin{pmatrix}\dfrac{99}{32}\\\dfrac{51}{16}\end{pmatrix}
}.
$$

### 2. (d)

任意の $i$ について、

$$
\left|\sum_{j=1}^{n}a_{ij}x_j\right|
\leq \sum_{j=1}^{n}|a_{ij}|\,|x_j|
\leq \left(\sum_{j=1}^{n}|a_{ij}|\right)\|x\|.
$$

両辺の $i$ に関する最大値を取れば、

$$
\boxed{\|Ax\|\leq\|A\|\,\|x\|}.
$$

### 3. (e)

$M=-D^{-1}(L+U)$ より、

$$
\|M\|
=\max_{1\leq i\leq n}
\sum_{j\ne i}\left|\frac{a_{ij}}{a_{ii}}\right|.
$$

$A$ は狭義対角優位であるから各行の和は $1$ 未満であり、

$$
\boxed{\|M\|<1}.
$$

### 4. (f)

$g(x)=Mx+Nb$ とおく。(d), (e) より、任意の $x,y\in\mathbb R^n$ に対して

$$
\|g(x)-g(y)\|=\|M(x-y)\|
\leq\|M\|\,\|x-y\|,
\qquad 0\leq\|M\|<1.
$$

よって $g$ は縮小写像であり、定理より反復列 $x^{(k+1)}=g(x^{(k)})$ は唯一の不動点 $x_*$ に収束する。不動点条件は

$$
x_*=Mx_*+Nb
\iff (D+L+U)x_*=b
\iff Ax_*=b.
$$

したがって、ヤコビ法は任意の初期値から方程式の唯一の解に収束する。
