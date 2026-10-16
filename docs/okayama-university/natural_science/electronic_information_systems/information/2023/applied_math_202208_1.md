---
sidebar_label: "2022年8月実施 応用数学 問題1"
tags:
  - Okayama-University
  - Mathematics.Linear-Algebra.Basis-and-Dimension
  - Mathematics.Linear-Algebra.Gram-Schmidt-Orthogonalization
  - Mathematics.Linear-Algebra.Projection-Operator
---

# 岡山大学 自然科学研究科 電子情報システム工学専攻 情報系 2022年8月実施 応用数学 問題1

## **Author**

祭音Myyura (Based on [miyake's answer](https://miyake.github.io/exams/%E5%B2%A1%E5%B1%B1%E5%A4%A7%E5%AD%A6/%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E9%9B%BB%E5%AD%90%E6%83%85%E5%A0%B1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%83%85%E5%A0%B1%E7%B3%BB/2023%E5%B9%B4%E5%BA%A6_%E5%BF%9C%E7%94%A8%E6%95%B0%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

ベクトル

$$
a_1=(1,-2,3,-3)^T,\qquad a_2=(2,3,-1,1)^T,\qquad a_3=(3,2,1,-1)^T
$$

によって張られるベクトル空間を $V$ とする。以下の問いに答えよ。

1. $V$ の基底を求めよ。
2. $V$ の直交基底を求めよ。
3. ベクトル $b=(2,0,2,3)^T$ の $V$ 上への射影を求めよ。すなわち、ユークリッドノルム $\|b-x\|$ を最小にする $x\in V$ を求めよ。

#### 题目描述

令 $V$ 为上述向量 $a_1,a_2,a_3$ 张成的空间。求 $V$ 的一组基、一组正交基，以及 $b=(2,0,2,3)^T$ 在 $V$ 上的正交投影，即使欧氏距离 $\|b-x\|$ 最小的 $x\in V$。

## **Kai**

### (1)

$a_1,a_2$ 互いに定数倍でないので一次独立である。また、直接計算により

$$
a_3=\frac57a_1+\frac87a_2
$$

となる。したがって $\boxed{\{a_1,a_2\}}$ が $V$ の基底である。

### (2)

$a_1^Ta_1=23$、$a_1^Ta_2=-10$ なので、Gram–Schmidt 法より

$$
a_2-\frac{a_1^Ta_2}{a_1^Ta_1}a_1
=a_2+\frac{10}{23}a_1
=\frac7{23}\begin{pmatrix}8\\7\\1\\-1\end{pmatrix}.
$$

よって、非零の実数倍を調整した

$$
\boxed{\left\{\begin{pmatrix}1\\-2\\3\\-3\end{pmatrix},\quad
w=\begin{pmatrix}8\\7\\1\\-1\end{pmatrix}\right\}}
$$

が直交基底である。実際、$a_1^Tw=8-14+3+3=0$ である。

### (3)

直交基底への射影公式を用いる。$a_1^Tb=-1$、$w^Tb=15$、$w^Tw=115$ より

$$
\begin{aligned}
x_*&=\frac{a_1^Tb}{a_1^Ta_1}a_1+\frac{w^Tb}{w^Tw}w\\
&=-\frac1{23}a_1+\frac3{23}w
=\boxed{\begin{pmatrix}1\\1\\0\\0\end{pmatrix}}.
\end{aligned}
$$

残差 $b-x_*=(1,-1,2,3)^T$ は $a_1,w$ の両方に直交する。任意の $x\in V$ に対し

$$
\|b-x\|^2=\|b-x_*\|^2+\|x_*-x\|^2
$$

であるから、$x=x_*$ が唯一の最小点である。

## **Reference**

- [大学公式問題（2022年8月実施、PDF 2ページ）](https://www.gnst.okayama-u.ac.jp/ja/wp-content/uploads/2022/11/04ko_joho_202208.pdf)
- [miyake：対応する解答](https://miyake.github.io/exams/%E5%B2%A1%E5%B1%B1%E5%A4%A7%E5%AD%A6/%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E9%9B%BB%E5%AD%90%E6%83%85%E5%A0%B1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%83%85%E5%A0%B1%E7%B3%BB/2023%E5%B9%B4%E5%BA%A6_%E5%BF%9C%E7%94%A8%E6%95%B0%E5%AD%A6.html)
