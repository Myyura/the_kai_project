---
sidebar_label: "2022年度 基礎科目 [2]"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Matrix-Rank
---

# 京都大学 理学研究科 数学・数理解析専攻 2022年度 基礎科目 問題2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$V$ を実ベクトル空間とし、$v_1,v_2,v_3,v_4$ を $V$ の1次独立なベクトルとする。$a\in\mathbb R$ に対し

$$
\begin{aligned}
w_1&=v_1-v_2+v_3,\\
w_2&=v_1+(a-1)v_2+v_3-av_4,\\
w_3&=2v_1-2v_2+(a+2)v_3,\\
w_4&=v_1-v_2+v_3+(a+1)v_4
\end{aligned}
$$

とおく。

1. $w_1,w_2,w_3,w_4$ が1次独立となるような $a$ の条件を求めよ。
2. $w_1,w_2,w_3,w_4$ が1次従属となる $a$ に対し、これらで生成される部分空間 $\langle w_1,w_2,w_3,w_4\rangle$ の次元を求めよ。

#### 题目描述

设 $v_1,v_2,v_3,v_4$ 是实向量空间 $V$ 中的线性无关向量。对 $a\in\mathbb R$，定义

$$
\begin{aligned}
w_1&=v_1-v_2+v_3,&w_2&=v_1+(a-1)v_2+v_3-av_4,\\
w_3&=2v_1-2v_2+(a+2)v_3,&w_4&=v_1-v_2+v_3+(a+1)v_4.
\end{aligned}
$$

1. 求 $w_1,w_2,w_3,w_4$ 线性无关的条件。
2. 在它们线性相关时，求其张成子空间的维数。

## **Kai**

### (1)

次の列操作は張る空間および1次独立性を変えない。

$$
(w_1,w_2,w_3,w_4)\longmapsto
(w_1,w_2-w_1,w_3-2w_1,w_4-w_1)
=(v_1-v_2+v_3,\ a(v_2-v_4),\ av_3,\ (a+1)v_4).
$$

基底 $(v_1,v_2,v_3,v_4)$ に関するこの4列の行列式は $a^2(a+1)$ である。したがって

$$
\boxed{a\ne0,-1}.
$$

### (2)

$a=0$ では張る空間は $\langle v_1-v_2+v_3,v_4\rangle$ であり、次元は $2$ である。

$a=-1$ では $v_1-v_2+v_3$, $-v_2+v_4$, $-v_3$ が1次独立なので、次元は $3$ である。よって

$$
\boxed{\dim\langle w_1,w_2,w_3,w_4\rangle=
\begin{cases}2,&a=0,\\3,&a=-1.\end{cases}}
$$

## **Reference**

- [京都大学公式問題（2022年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2021math_kiso_for2022_honshi.pdf)
- [照合用参考解答（R4-basic.pdf、PDF 2ページ）](https://drive.google.com/file/d/1wvo88HT16YKnB_J202zUhdYmK_hCK1pn/view)
