---
sidebar_label: "2024年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Linear-Independence
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2024年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2つのベクトル $\vec{a_1} = \begin{pmatrix} x \\ 2 \end{pmatrix}$ , $\vec{a_2} = \begin{pmatrix} 6 \\ 4 \end{pmatrix}$ (ただし $x$ は実数) が垂直であるとき, この2つのベクトルは一次独立であることを示せ。

### 题目描述

给定向量

$$
\vec a_1=\begin{pmatrix}x\\2\end{pmatrix},
\qquad
\vec a_2=\begin{pmatrix}6\\4\end{pmatrix},
$$

其中 $x$ 为实数。若这两个向量互相垂直，证明它们线性无关。

## **Kai**

二つのベクトル $\vec{a_1}$ と $\vec{a_2}$ が垂直であるとき、内積が0となる。つまり、 $\vec{a_1} \cdot \vec{a_2} = 0$ 。

$\vec{a_1} \cdot \vec{a_2} = x \cdot 6 + 2 \cdot 4 = 6x + 8 = 0$

$6x = -8$

$x = -\frac{8}{6} = -\frac{4}{3}$

したがって、 $\vec{a_1} = \begin{pmatrix} -\frac{4}{3} \\ 2 \end{pmatrix}$ ， $\vec{a_2} = \begin{pmatrix} 6 \\ 4 \end{pmatrix}$ である。

次に、一次独立性を示す。もし、c1 $\vec{a_1}$ + c2 $\vec{a_2}$ = $\vec{0}$ と仮定したとき、c1 = c2 = 0であることを示す。

c1 $\begin{pmatrix} -\frac{4}{3} \\ 2 \end{pmatrix}$ + c2 $\begin{pmatrix} 6 \\ 4 \end{pmatrix}$ = $\begin{pmatrix} 0 \\ 0 \end{pmatrix}$

これは以下の連立方程式に変換できる。

$\begin{cases} -\frac{4}{3}c_1 + 6c_2 = 0 \\ 2c_1 + 4c_2 = 0 \end{cases}$

第一式に3/4を掛けると:
-c1 + (9/2)c2 = 0

$\begin{cases} -c_1 + \frac{9}{2}c_2 = 0 \\ 2c_1 + 4c_2 = 0 \end{cases}$
第一式を2倍すると：
-2c1 + 9c2 = 0

$\begin{cases} -2c_1 + 9c_2 = 0 \\ 2c_1 + 4c_2 = 0 \end{cases}$

上記の二つの式を足すと：
13c2 = 0
c2 = 0

そして、 2c1 + 4c2 = 0にc2 = 0を代入すると、2c1 = 0, c1 = 0

したがって、c1 = c2 = 0なので、 $\vec{a_1}$ と $\vec{a_2}$ は一次独立である。
