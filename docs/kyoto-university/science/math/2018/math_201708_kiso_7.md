---
sidebar_label: "2017年8月実施 基礎科目 [7]"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Kernel-and-Image
  - Mathematics.Linear-Algebra.Matrix-Rank
---

# 京都大学 理学研究科 数学・数理解析専攻 2017年8月実施 基礎科目 [7]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$A$ を実正方行列、$k$ を正の整数とし、

$$
\operatorname{rk}(A^{k+1})=\operatorname{rk}(A^k)
$$

が成り立つとする。このとき、任意の整数 $m\ge k$ に対し、

$$
\operatorname{rk}(A^m)=\operatorname{rk}(A^k)
$$

であることを証明せよ。ここで、行列 $X$ に対し $\operatorname{rk}(X)$ は $X$ の階数を表す。

#### 题目描述

设 $A$ 为实方阵，$k$ 为正整数，且 $\operatorname{rank}(A^{k+1})=\operatorname{rank}(A^k)$。证明对任意整数 $m\ge k$，都有

$$
\operatorname{rank}(A^m)=\operatorname{rank}(A^k).
$$

## **Kai**

$A$ を $\mathbb R^n$ 上の線形写像とみなすと、

$$
\operatorname{Im}(A^{k+1})\subset\operatorname{Im}(A^k)
$$

である。仮定により両空間の次元は等しいので、

$$
\operatorname{Im}(A^{k+1})=\operatorname{Im}(A^k).
$$

この等式の両辺に $A^{m-k}$ を作用させれば、$m\ge k$ に対して

$$
\operatorname{Im}(A^{m+1})=\operatorname{Im}(A^m)
$$

が得られる。したがって帰納的に $\operatorname{Im}(A^m)=\operatorname{Im}(A^k)$ であり、

$$
\boxed{\operatorname{rk}(A^m)=\operatorname{rk}(A^k)\qquad(m\ge k)}
$$

となる。

## **Reference**

- [京都大学公式問題（2018年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2017math_kiso.pdf)
- [照合用参考解答（H30-basic.pdf、PDF 11ページ）](https://drive.google.com/file/d/1cdRh94F0dh7hFNtDQU6I4yFQcgsSAyYB/view)
