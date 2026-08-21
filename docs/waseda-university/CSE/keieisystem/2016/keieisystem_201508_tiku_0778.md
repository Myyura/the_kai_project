---
sidebar_label: "2015年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2015年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$A, B$ が $n$ 次正方行列 (square matrix) のとき, 次の等式を証明せよ。

$$
\begin{vmatrix} A & B  \\ B & A \end{vmatrix} = |A - B| \cdot |A + B|
$$

### 题目描述

设 $A,B$ 均为 $n$ 阶方阵。证明分块行列式恒等式

$$
\begin{vmatrix}
A&B\\
B&A
\end{vmatrix}
=|A-B|\,|A+B|.
$$

## **Kai**

Let $M = \begin{pmatrix} A & B  \\ B & A \end{pmatrix}$ . Then

$$
\begin{aligned} |M| &= \begin{vmatrix} A & B  \\ B & A \end{vmatrix} \\ &= \begin{vmatrix} A - B & B  \\ B - A & A \end{vmatrix} \qquad (C_1 \rightarrow C_1 - C_2) \\ &= \begin{vmatrix} A - B & B  \\ 0 & A+B \end{vmatrix} \qquad (R_2 \rightarrow R_2 + R_1)  \\ &= |A - B| \cdot |A + B| \end{aligned}
$$
