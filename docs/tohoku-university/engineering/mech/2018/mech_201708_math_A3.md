---
sidebar_label: "2017年秋季 数学A 第3問"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Permutation-Matrix
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 東北大学 工学研究科 機械・知能系 2017年秋季 数学A 第3問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

$n\times n$ 行列を

$$
A=\begin{pmatrix}
a_1&a_2&a_3&\cdots&a_n\\
a_n&a_1&a_2&\cdots&a_{n-1}\\
a_{n-1}&a_n&a_1&\cdots&a_{n-2}\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
a_2&a_3&a_4&\cdots&a_1
\end{pmatrix},\qquad
J=\begin{pmatrix}
0&1&0&\cdots&0\\0&0&1&\cdots&0\\
\vdots&\vdots&\ddots&\ddots&\vdots\\0&0&\cdots&0&1\\1&0&\cdots&0&0
\end{pmatrix}
$$

とする。$a_i\ne0$（$i=1,\ldots,n$）、$I$ は $n$ 次単位行列とする。

1. $n=4$ のとき $J^2,J^3$ を求めよ。
2. $a_1I+a_2J+\cdots+a_nJ^{n-1}$ を $A$ で表せ。
3. 行列式 $|J-\omega I|$ を求めよ。
4. $J$ の固有値を $\omega_k$ とするとき、$A$ の固有値が $\lambda_k=a_1+a_2\omega_k+\cdots+a_n\omega_k^{n-1}$（$k=1,\ldots,n$）となることを示せ。

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

给定上列循环矩阵 $A$ 和循环移位矩阵 $J$，各 $a_i\ne0$，$I$ 为单位矩阵。（1）在 $n=4$ 时求 $J^2,J^3$。（2）用 $A$ 表示 $a_1I+a_2J+\cdots+a_nJ^{n-1}$。（3）求 $\det(J-\omega I)$。（4）证明若 $J$ 的特征值为 $\omega_k$，则 $A$ 的全部特征值为 $\lambda_k=\sum_{j=1}^na_j\omega_k^{j-1}$。

## **Kai**

### (1)

$J$ は各成分を一つ巡回移動させるので

$$
\boxed{J^2=\begin{pmatrix}0&0&1&0\\0&0&0&1\\1&0&0&0\\0&1&0&0\end{pmatrix},\qquad
J^3=\begin{pmatrix}0&0&0&1\\1&0&0&0\\0&1&0&0\\0&0&1&0\end{pmatrix}}.
$$

### (2)

$J^j$ の第 $i$ 行では、第 $i+j$ 列（添字は $n$ を法とする）だけが1である。従って各成分を比較して

$$
\boxed{a_1I+a_2J+\cdots+a_nJ^{n-1}=A}.
$$

### (3)

第1列で余因子展開すると、対角成分からの寄与が $(-\omega)^n$、左下の1からの寄与が $(-1)^{n+1}$ である。よって

$$
\boxed{|J-\omega I|=(-1)^n(\omega^n-1)}.
$$

### (4)

固有値は $\omega_k=e^{2\pi ik/n}$（$k=1,\ldots,n$）。
$v_k=(1,\omega_k,\ldots,\omega_k^{n-1})^T$ とすれば $\omega_k^n=1$ より $Jv_k=\omega_kv_k$。従って

$$
Av_k=\sum_{j=1}^na_jJ^{j-1}v_k
=\left(\sum_{j=1}^na_j\omega_k^{j-1}\right)v_k.
$$

さらに相異なる $\omega_k$ からなるヴァンデルモンド行列 $(v_1\ \cdots\ v_n)$ は正則なので、これらは固有ベクトルの基底を作る。ゆえに重複度を含む全固有値は

$$
\boxed{\lambda_k=a_1+a_2\omega_k+\cdots+a_n\omega_k^{n-1}\quad(k=1,\ldots,n)}.
$$

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 4ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
