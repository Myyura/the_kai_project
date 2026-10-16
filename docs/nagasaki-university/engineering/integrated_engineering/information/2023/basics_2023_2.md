---
sidebar_label: "2023年度 基礎科目 問題2"
tags:
  - Nagasaki-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Matrix-Inverse
---

# 長崎大学 工学研究科 総合工学専攻 情報工学コース・海洋未来科学コース 2023年度 基礎科目 問題2

## **Author**

祭音Myyura (Based on [miyake's answer](https://miyake.github.io/exams/%E9%95%B7%E5%B4%8E%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%B7%8F%E5%90%88%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E5%9F%BA%E7%A4%8E%E7%A7%91%E7%9B%AE_2.html) refined with GPT 6 Astra)

## **Description**

$a,b,c$ を正の実数とする。次の行列 $A$ が逆行列をもつために $a,b,c$ が満たすべき条件を求めよ。

$$
A=\begin{pmatrix}1&a&a^3\\1&b&b^3\\1&c&c^3\end{pmatrix}.
$$

#### 题目描述

设 $a,b,c$ 均为正实数。求上述矩阵 $A$ 可逆的充要条件。

## **Kai**

第2行と第3行から第1行を引き、共通因子をくくると、

$$
\begin{aligned}
\det A
&=\begin{vmatrix}1&a&a^3\\0&b-a&b^3-a^3\\0&c-a&c^3-a^3\end{vmatrix}\\
&=(b-a)(c-a)\begin{vmatrix}1&b^2+ab+a^2\\1&c^2+ac+a^2\end{vmatrix}\\
&=(b-a)(c-a)(c-b)(a+b+c).
\end{aligned}
$$

$a,b,c>0$ だから $a+b+c>0$ である。よって $\det A\ne0$ となる必要十分条件は

$$
\boxed{a\ne b,\qquad b\ne c,\qquad c\ne a}.
$$

## **Reference**

- [大学公式問題（2023年度、PDF 2ページ）](https://www.eng.nagasaki-u.ac.jp/wp-content/uploads/2024/03/07_R5hakasezenki_joho_kiso.pdf)
- [miyake：対応する解答](https://miyake.github.io/exams/%E9%95%B7%E5%B4%8E%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%B7%8F%E5%90%88%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%83%85%E5%A0%B1%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E5%9F%BA%E7%A4%8E%E7%A7%91%E7%9B%AE_2.html)
