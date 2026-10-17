---
sidebar_label: "2018年8月実施 基礎科目 問題7"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
---

# 京都大学 理学研究科 数学・数理解析専攻 2018年8月実施 基礎科目 問題7

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$2$ 以上の整数 $n$ に対し、$(i,j)$ 成分が $|i-j|$ となる $n$ 次正方行列を $A_n$ とする。すなわち、

$$
A_n=\begin{pmatrix}
0&1&2&\cdots&n-1\\
1&0&1&\cdots&n-2\\
2&1&0&\cdots&n-3\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
n-1&n-2&n-3&\cdots&0
\end{pmatrix}.
$$

$A_n$ の行列式を求めよ。

#### 题目描述

对不小于 $2$ 的整数 $n$，设 $A_n$ 为第 $(i,j)$ 个元素等于 $|i-j|$ 的 $n$ 阶方阵，即

$$
A_n=\begin{pmatrix}
0&1&2&\cdots&n-1\\
1&0&1&\cdots&n-2\\
2&1&0&\cdots&n-3\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
n-1&n-2&n-3&\cdots&0
\end{pmatrix}.
$$

求 $A_n$ 的行列式。

## **Kai**

対角成分が $1$、第 $1$ 下副対角成分が $-1$、それ以外が $0$ の行列を $D$ とする。$\det D=1$ であり、左右からの乗算は隣り合う行・列の差を取る操作に対応する。成分を計算すると

$$
\begin{gathered}
DA_nD^{\mathsf T}=
\begin{pmatrix}
0&\boldsymbol 1^{\mathsf T}\\
\boldsymbol 1&-2I_{n-1}
\end{pmatrix},\\
\boldsymbol 1=(1,\ldots,1)^{\mathsf T}\in\mathbb R^{n-1}.
\end{gathered}
$$

実際、$i,j\ge2$ の成分は

$$
|i-j|-|i-1-j|-|i-j+1|+|i-j|=-2\delta_{ij}
$$

であり、第 $1$ 行・列の対角以外の成分は $1$ である。Schur 補行列を用いると

$$
\begin{aligned}
\det A_n
&=\det(-2I_{n-1})\left(0-\boldsymbol1^{\mathsf T}(-2I_{n-1})^{-1}\boldsymbol1\right)\\
&=(-2)^{n-1}\frac{n-1}{2}\\
&=\boxed{(-1)^{n-1}(n-1)2^{n-2}}.
\end{aligned}
$$

## **Reference**

- [京都大学公式問題（2019年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2018math_kiso.pdf)
- [照合用参考解答（H31-basic.pdf、PDF 11ページ）](https://drive.google.com/file/d/1IriDJsz9XGidy2KdL3U1GBksFntQzNIh/view)
