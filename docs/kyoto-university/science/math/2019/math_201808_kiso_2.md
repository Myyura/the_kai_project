---
sidebar_label: "2019年度 基礎科目 問題2"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Matrix-Rank
---

# 京都大学 理学研究科 数学・数理解析専攻 2019年度 基礎科目 問題2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

複素数 $\alpha$ に対し、$3$ 次複素正方行列 $A(\alpha)$ を次のように定める。

$$
A(\alpha)=\begin{pmatrix}
\alpha-4&\alpha+4&-2\alpha+1\\
-2&2\alpha+1&-2\alpha+2\\
-1&\alpha&-\alpha+2
\end{pmatrix}.
$$

1. $A(\alpha)$ の行列式を求めよ。
2. $A(\alpha)$ の階数を求めよ。

#### 题目描述

对复数 $\alpha$，定义矩阵

$$
A(\alpha)=\begin{pmatrix}
\alpha-4&\alpha+4&-2\alpha+1\\
-2&2\alpha+1&-2\alpha+2\\
-1&\alpha&-\alpha+2
\end{pmatrix}.
$$

1. 求 $A(\alpha)$ 的行列式。
2. 求 $A(\alpha)$ 的秩。

## **Kai**

### (1)

第 $2$ 行から第 $3$ 行の $2$ 倍を引くと、

$$
\begin{aligned}
\det A(\alpha)
&=\begin{vmatrix}
\alpha-4&\alpha+4&-2\alpha+1\\
0&1&-2\\
-1&\alpha&-\alpha+2
\end{vmatrix}\\
&=(\alpha-4)(\alpha+2)+2(\alpha+4)-2\alpha+1\\
&=\boxed{(\alpha-1)^2}.
\end{aligned}
$$

### (2)

$\alpha\ne1$ なら行列式が零でないから階数は $3$ である。一方、任意の $\alpha$ に対し、

$$
\begin{vmatrix}-2&2\alpha+1\\-1&\alpha\end{vmatrix}=1
$$

なので階数は少なくとも $2$ である。よって

$$
\boxed{\operatorname{rank}A(\alpha)=
\begin{cases}3&\alpha\ne1,\\2&\alpha=1.\end{cases}}
$$

## **Reference**

- [京都大学公式問題（2019年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2018math_kiso.pdf)
- [照合用参考解答（H31-basic.pdf、PDF 2ページ）](https://drive.google.com/file/d/1IriDJsz9XGidy2KdL3U1GBksFntQzNIh/view)
