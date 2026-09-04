---
sidebar_label: 2019年3月実施 基礎科目 問題6 数学基礎
tags:
  - Tohoku-University
  - Mathematics.Fourier-Analysis.Fourier-Transform
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 東北大学 工学研究科 電気・情報系 2019年3月実施 基礎科目 問題6 数学基礎

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原文

(1) 関数

$$
f(x)=\frac1{\sqrt{2\pi\sigma^2}}e^{-\frac1{2\sigma^2}x^2}
$$

について考える。ただし，$x$ は実数であり，$\sigma$ は $\sigma>0$ を満たす実定数である。次の問に答えよ。

(a) 関数 $f(x)$ の概形を描け。

(b) 関数 $f(x)$ のフーリエ変換 $F(w)$ を求めよ。

(c) 関数 $F(w)$ の概形を描け。

(2) 行列

$$
A=\begin{pmatrix}6&5&7&7\\7&1&7&4\\1&2&2&6\\7&4&7&1\end{pmatrix}
$$

と

$$
B=\begin{pmatrix}0&0&0&-1\\0&0&-1&0\\0&1&0&0\\1&0&0&0\end{pmatrix}
$$

について考える。次の問に答えよ。

(a) 行列 $A$ の行列式を求めよ。

(b) $A^{-1}$ を求めよ。

(c) 行列 $B$ のすべての固有値とそれらに対応する固有ベクトルを求めよ。

### 题目描述

(1) 对实数 $x$ 及常数 $\sigma>0$，令

$$
f(x)=\frac1{\sqrt{2\pi\sigma^2}}\exp\left(-\frac{x^2}{2\sigma^2}\right).
$$

(a) 画出 $f(x)$ 的概形；(b) 求 Fourier 变换 $F(w)$；(c) 画出 $F(w)$ 的概形。

(2) 给定

$$
A=\begin{pmatrix}6&5&7&7\\7&1&7&4\\1&2&2&6\\7&4&7&1\end{pmatrix},\quad B=\begin{pmatrix}0&0&0&-1\\0&0&-1&0\\0&1&0&0\\1&0&0&0\end{pmatrix}.
$$

(a) 求 $\det A$；(b) 求 $A^{-1}$；(c) 求 $B$ 的全部特征值及对应特征向量。

## **Kai**

### (1)

采用 $F(w)=\int_{-\infty}^{\infty}f(x)e^{-iwx}\,dx$。

(a) $f$ 为偶函数，在 $x=0$ 取最大值 $1/(\sqrt{2\pi}\sigma)$，两端趋零；拐点为 $x=\pm\sigma$。

(b) 由 $f'(x)=-xf(x)/\sigma^2$ 及分部积分，

$$
F'(w)=-\sigma^2wF(w),\qquad F(0)=1.
$$

故

$$
\boxed{F(w)=e^{-\sigma^2w^2/2}}.
$$

(c) $F$ 为实偶函数，最大值 $F(0)=1$，两端趋零，拐点为 $w=\pm1/\sigma$。两个图形见下图（横纵坐标均已归一化）。

![高斯函数及其傅里叶变换](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201903_kiso_6_gaussian.svg)

### (2)

(a) 交换第 $1,3$ 行，用首行消去首列，剩下的三阶行列式为

$$
\det A=-\begin{vmatrix}-13&-7&-38\\-7&-5&-29\\-10&-7&-41\end{vmatrix}=\boxed9.
$$

(b) 对增广矩阵 $(A\mid I)$ 作 Gauss–Jordan 消元，得到

$$
\boxed{A^{-1}=\frac19\begin{pmatrix}138&4&-147&-100\\21&-2&-21&-13\\-153&-3&162&111\\21&1&-21&-16\end{pmatrix}}.
$$

(c) $B^2=-I$，特征多项式为 $(\lambda^2+1)^2$，所以特征值为 $i,-i$，各重数为 $2$。相应特征向量的全体为

$$
\boxed{\lambda=i:\ (ia,ib,b,a)^T;\qquad\lambda=-i:\ (-ia,-ib,b,a)^T},
$$

其中 $a,b\in\mathbb C$，且 $(a,b)\ne(0,0)$。
