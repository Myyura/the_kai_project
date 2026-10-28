---
sidebar_label: "2023年8月実施 共通問題 [1]"
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Characteristic-Polynomial
  - Mathematics.Linear-Algebra.Jordan-Normal-Form
---

# 東北大学 理学研究科 数学専攻 2023年8月実施 共通問題 \[1\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#b580b2e9-5e8f-4634-a1cd-73b2ab5a9224) refined with GPT 6 Astra)

## **Description**

複素数 $a$ に対し、$3$ 次正方行列 $A(a)$ を

$$
A(a)=\begin{pmatrix}3-2a&4&a-2\\2&2&-1\\6-2a&8&a-4\end{pmatrix}
$$

と定める。以下の問いに答えよ。

(1) $A(a)$ の固有多項式を求めよ。

(2) $A(a)$ の固有多項式が重根をもつような $a$ をすべて求めよ。

(3) (2) で求めた $a$ を一つ選び、そのときの $A(a)$ のジョルダン標準形を決定せよ。

### 题目描述

对复数 $a$，定义三阶方阵

$$
A(a)=\begin{pmatrix}3-2a&4&a-2\\2&2&-1\\6-2a&8&a-4\end{pmatrix}.
$$

回答下列问题。

(1) 求 $A(a)$ 的特征多项式。

(2) 求使 $A(a)$ 的特征多项式有重根的全部 $a$。

(3) 从第 (2) 问求得的 $a$ 中选择一个，确定此时 $A(a)$ 的若尔当标准形。

## **Kai**

### (1)

行列式を展開すると

$$
\begin{aligned}
p_a(t)&=\det(tI-A(a))\\
&=\det\begin{pmatrix}t+2a-3&-4&2-a\\-2&t-2&1\\2a-6&-8&t-a+4\end{pmatrix}\\
&=t^3+(a-1)t^2-(a+2)t-2a\\
&=(t+1)(t-2)(t+a).
\end{aligned}
$$

### (2)

$-1$ と $2$ は異なるから、重根をもつのは $-a=-1$ または $-a=2$ の場合に限る。したがって

$$
a=1,\ -2.
$$

### (3)

$a=1$ のとき $p_1(t)=(t+1)^2(t-2)$ であり、$\operatorname{rank}(A(1)+I)=2$ なので固有値 $-1$ のジョルダン細胞は大きさ $2$ である。

$$
p_1=\begin{pmatrix}1\\0\\2\end{pmatrix},\quad
p_2=\begin{pmatrix}0\\1\\3\end{pmatrix},\quad
p_3=\begin{pmatrix}4\\3\\8\end{pmatrix}
$$

と取ると、直接計算により

$$
(A(1)+I)p_1=0,\qquad (A(1)+I)p_2=p_1,\qquad (A(1)-2I)p_3=0.
$$

したがって

$$
P=\begin{pmatrix}1&0&4\\0&1&3\\2&3&8\end{pmatrix},\qquad
\det P=-9\ne0
$$

を用いて、求めるジョルダン標準形は

$$
P^{-1}A(1)P=\begin{pmatrix}-1&1&0\\0&-1&0\\0&0&2\end{pmatrix}.
$$

## **Reference**

- [東北大学公式問題（2024年度・共通問題、PDF 2ページ）](https://www.math.tohoku.ac.jp/exam/questions/2024_R6_kyotsu.pdf#page=2)
- [L^2：2024年度の解答](https://note.com/normalmath/n/n89152917de11#b580b2e9-5e8f-4634-a1cd-73b2ab5a9224)
