---
sidebar_label: "2020年度 基礎科目 問題2"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 京都大学 理学研究科 数学・数理解析専攻 2020年度 基礎科目 問題2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$a$ を複素数とし、$3$ 次複素正方行列 $A$ を次のように定める。

$$
A=\begin{pmatrix}1&0&1\\-1&1&0\\1&a-1&a\end{pmatrix}.
$$

このとき、$A$ の固有値をすべて求めよ。また、各固有値に対する固有空間の次元を求めよ。

#### 题目描述

设 $a\in\mathbb C$，$A=\begin{pmatrix}1&0&1\\-1&1&0\\1&a-1&a\end{pmatrix}$。求 $A$ 的全部特征值，以及每个特征值对应的特征空间维数。

## **Kai**

特性多項式は

$$
\det(\lambda I-A)
=(\lambda-1)^2(\lambda-a)+(a-\lambda)
=\lambda(\lambda-2)(\lambda-a).
$$

したがって固有値は $0,2,a$ である。ただし $a=0$ のとき $0$、$a=2$ のとき $2$ の代数的重複度が $2$ となる。

一方、任意の $\lambda,a$ に対し、$A-\lambda I$ の第 $1,2$ 行、第 $1,3$ 列からなる小行列の行列式は

$$
\begin{vmatrix}1-\lambda&1\\-1&0\end{vmatrix}=1.
$$

よって $\lambda$ が固有値なら $\operatorname{rank}(A-\lambda I)=2$ であり、

$$
\boxed{\dim\ker(A-\lambda I)=1\qquad(\lambda\in\{0,2,a\})}.
$$

すなわち、重根の場合も固有空間は $1$ 次元である。実際、各固有値について

$$
\ker(A-\lambda I)=\operatorname{span}_{\mathbb C}
\left\{\begin{pmatrix}\lambda-1\\-1\\(\lambda-1)^2\end{pmatrix}\right\}.
$$

## **Reference**

- [京都大学公式問題（2020年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2019math_kiso_for2020.pdf)
- [照合用参考解答（R2-basic.pdf、PDF 2ページ）](https://drive.google.com/file/d/12Ok4g9koHUXlcNBVN2XlaIIBAhTuR546/view)
