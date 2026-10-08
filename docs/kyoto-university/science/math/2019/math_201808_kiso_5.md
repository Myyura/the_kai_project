---
sidebar_label: "2019年度 基礎科目 問題5"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Jordan-Normal-Form
---

# 京都大学 理学研究科 数学・数理解析専攻 2019年度 基礎科目 問題5

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$n$ を $2$ 以上の整数、$A$ を $n$ 次複素正方行列とする。$A^{n-1}$ は対角化可能でないが、$A^n$ が対角化可能であるとき、$A^n=0$ となることを示せ。

#### 题目描述

设 $n\ge2$，$A$ 是 $n$ 阶复矩阵。若 $A^{n-1}$ 不可对角化，而 $A^n$ 可对角化，证明 $A^n=0$。

## **Kai**

$A$ の Jordan 標準形を考える。固有値 $\lambda\ne0$ に属する大きさ $r\ge2$ の Jordan 細胞 $J_r(\lambda)=\lambda I+N$ があれば、

$$
J_r(\lambda)^n=\lambda^nI+n\lambda^{n-1}N+\cdots
$$

の第 $1$ 上副対角成分は $n\lambda^{n-1}\ne0$ である。この行列の固有値は $\lambda^n$ だけなので、対角化可能なら $\lambda^nI$ でなければならず、矛盾する。したがって非零固有値に属する Jordan 細胞はすべて大きさ $1$ である。

零固有値に属する Jordan 細胞がすべて大きさ $n-1$ 以下なら、その $(n-1)$ 乗はすべて零になる。非零固有値の細胞は大きさ $1$ なので、この場合 $A^{n-1}$ は対角化可能となり、仮定に反する。

よって大きさ $n$ の零固有値の Jordan 細胞が存在する。$A$ 自身が $n$ 次であるから、その Jordan 標準形は $J_n(0)$ 一つだけであり、

$$
\boxed{A^n=0}.
$$

## **Reference**

- [京都大学公式問題（2019年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2018math_kiso.pdf)
- [照合用参考解答（H31-basic.pdf、PDF 6–8ページ）](https://drive.google.com/file/d/1IriDJsz9XGidy2KdL3U1GBksFntQzNIh/view)
