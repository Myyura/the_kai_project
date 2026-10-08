---
sidebar_label: "2024年度 基礎科目 [2]"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Parameterized-Eigenvalues-and-Rank
---

# 京都大学 理学研究科 数学・数理解析専攻 2024年度 基礎科目 問題2

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/index.html) refined with GPT 6 Astra)

## **Description**

$a$ を複素数とし、複素 $3$ 次正方行列 $A$ を

$$
A=
\begin{pmatrix}
a-1 & 0 & 0 \\ 1 & -a & 1 \\ 2a & -2a & a+1
\end{pmatrix}
$$

と定める。行列 $A$ の固有値を全て求めよ。また、$A$ の階数を求めよ。

#### 题目描述

设 $a$ 为复数，定义三阶复方阵

$$
A=
\begin{pmatrix}
a-1&0&0\\
1&-a&1\\
2a&-2a&a+1
\end{pmatrix}.
$$

求矩阵 $A$ 的全部特征值，并求 $A$ 的秩。

## **Kai**

(i) $A$ の固有値を $\lambda$ とすると、

$$
\begin{aligned}
0
&= \begin{vmatrix}
a-1-\lambda & 0 & 0 \\ 1 & -a-\lambda & 1 \\ 2a & -2a & a+1-\lambda
\end{vmatrix}
\\
&= (a-1-\lambda)
\begin{vmatrix} -a-\lambda & 1 \\ -2a & a+1-\lambda \end{vmatrix}
\\
&= -(\lambda-a+1)(\lambda^2 - \lambda - a(a-1))
\\
&= -(\lambda-a+1)(\lambda - a)(\lambda + a - 1)
\\
\therefore \ \ 
\lambda &= a-1, a, -a+1
\end{aligned}
$$

である。

(ii) $A$ を列基本変形すると、次のようにできる：

$$
\begin{aligned}
\begin{pmatrix}
a-1 & 0 & 0 \\ 0 & 1 & 0 \\ a-1 & a+1 & a(a-1)
\end{pmatrix}
.
\end{aligned}
$$

これを構成する3つの列ベクトルの1次独立性に注目すると、$A$ のランクは、$a=1$ のときは $1$ , $a=0$ のときは $2$ , その他のときは $3$であることがわかる。

## **Reference**

- [京都大学公式問題（2024年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2023-08/2024math_kiso.pdf)
- [照合用参考解答（R6-basic.pdf、PDF 2ページ）](https://drive.google.com/file/d/10PXdWyO95i45OhTTc_jJrXWKXB-z1nCf/view)
