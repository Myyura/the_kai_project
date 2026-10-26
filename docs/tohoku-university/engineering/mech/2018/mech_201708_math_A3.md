---
sidebar_label: "2017年8月実施 数学A 第3問"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Permutation-Matrix
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 数学A 第3問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

3. $n\times n$ 行列 $A$ および $J$ が

$$
A=\begin{pmatrix}
a_1&a_2&a_3&\cdots&a_n\\
a_n&a_1&a_2&\cdots&a_{n-1}\\
a_{n-1}&a_n&a_1&\cdots&a_{n-2}\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
a_2&a_3&a_4&\cdots&a_1
\end{pmatrix},
\qquad
J=\begin{pmatrix}
0&1&0&\cdots&0&0\\
0&0&1&\cdots&0&0\\
\vdots&\vdots&\vdots&\ddots&\vdots&\vdots\\
0&0&0&\cdots&0&1\\
1&0&0&\cdots&0&0
\end{pmatrix}
$$

$(a_i\ne0,\ i=1,2,\ldots,n)$ のように与えられる。$I$ を $n$ 次の単位行列とするとき，以下の問いに答えよ。

**(1)** $n=4$ のとき，$J^2$ および $J^3$ を求めよ。

**(2)** $a_1I+a_2J+a_3J^2+\cdots+a_nJ^{n-1}$ を $A$ を用いて表せ。

**(3)** 行列式 $|J-\omega I|$ を求めよ。

**(4)** $J$ の固有値を $\omega_k\ (k=1,2,\ldots,n)$ とするとき，$A$ の固有値 $\lambda_k\ (k=1,2,\ldots,n)$ が

$$
\lambda_k=a_1+a_2\omega_k+a_3\omega_k^2+\cdots+a_n\omega_k^{n-1}
$$

となることを示せ。

### 题目描述

3. $n\times n$ 矩阵 $A$ 和 $J$ 给定如下：

$$
A=\begin{pmatrix}
a_1&a_2&a_3&\cdots&a_n\\
a_n&a_1&a_2&\cdots&a_{n-1}\\
a_{n-1}&a_n&a_1&\cdots&a_{n-2}\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
a_2&a_3&a_4&\cdots&a_1
\end{pmatrix},
\qquad
J=\begin{pmatrix}
0&1&0&\cdots&0&0\\
0&0&1&\cdots&0&0\\
\vdots&\vdots&\vdots&\ddots&\vdots&\vdots\\
0&0&0&\cdots&0&1\\
1&0&0&\cdots&0&0
\end{pmatrix},
$$

其中 $a_i\ne0\ (i=1,2,\ldots,n)$。设 $I$ 为 $n$ 阶单位矩阵，回答下列问题。

**(1)** 当 $n=4$ 时，求 $J^2$ 和 $J^3$。

**(2)** 用 $A$ 表示 $a_1I+a_2J+a_3J^2+\cdots+a_nJ^{n-1}$。

**(3)** 求行列式 $|J-\omega I|$。

**(4)** 设 $J$ 的特征值为 $\omega_k\ (k=1,2,\ldots,n)$，证明 $A$ 的特征值 $\lambda_k\ (k=1,2,\ldots,n)$ 满足

$$
\lambda_k=a_1+a_2\omega_k+a_3\omega_k^2+\cdots+a_n\omega_k^{n-1}.
$$

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
