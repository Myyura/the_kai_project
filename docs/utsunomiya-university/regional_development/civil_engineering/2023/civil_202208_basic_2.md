---
sidebar_label: "2023年度 第1期 土木工学基礎 問2"
tags:
  - Utsunomiya-University
  - Mathematics.Linear-Algebra.Matrix-Inverse
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---

# 宇都宮大学 地域創生科学研究科 社会デザイン科学専攻 土木工学プログラム 2023年度 第1期 土木工学基礎 問2

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%AE%87%E9%83%BD%E5%AE%AE%E5%A4%A7%E5%AD%A6/%E5%9C%B0%E5%9F%9F%E5%89%B5%E7%94%9F%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%A4%BE%E4%BC%9A%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E7%A7%91%E5%AD%A6%E5%B0%82%E6%94%BB_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6/2022%E5%B9%B48%E6%9C%88%E5%AE%9F%E6%96%BD_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6%E5%9F%BA%E7%A4%8E.html) refined with GPT 6 Astra)

## **Description**

行列

$$
A=\begin{pmatrix}0&2&2\\1&1&1\\3&-3&1\end{pmatrix}
$$

について、(1) 逆行列、(2) 固有値を求めよ。

#### 题目描述

对矩阵 $A=\begin{pmatrix}0&2&2\\1&1&1\\3&-3&1\end{pmatrix}$，(1) 求逆矩阵；(2) 求特征值。

## **Kai**

### (1)

$\det A=-8$、余因子の転置行列は

$$
\operatorname{adj}A=\begin{pmatrix}4&-8&0\\2&-6&2\\-6&6&-2\end{pmatrix}.
$$

したがって

$$
\boxed{A^{-1}=\frac14\begin{pmatrix}-2&4&0\\-1&3&-1\\3&-3&1\end{pmatrix}}.
$$

### (2)

$$
\det(\lambda I-A)=\lambda^3-2\lambda^2-4\lambda+8
=(\lambda+2)(\lambda-2)^2.
$$

よって固有値は $\boxed{-2,\ 2}$ であり、$2$ の代数的重複度は $2$。

## **Reference**

- [宇都宮大学公式問題（PDF 4頁）](https://admission.utsunomiya-u.ac.jp/docs/2023doboku.pdf)
- [Miyake：参考解答](https://miyake.github.io/exams/%E5%AE%87%E9%83%BD%E5%AE%AE%E5%A4%A7%E5%AD%A6/%E5%9C%B0%E5%9F%9F%E5%89%B5%E7%94%9F%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%A4%BE%E4%BC%9A%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E7%A7%91%E5%AD%A6%E5%B0%82%E6%94%BB_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6/2022%E5%B9%B48%E6%9C%88%E5%AE%9F%E6%96%BD_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6%E5%9F%BA%E7%A4%8E.html)
