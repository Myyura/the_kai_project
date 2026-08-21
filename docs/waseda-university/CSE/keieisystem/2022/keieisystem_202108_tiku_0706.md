---
sidebar_label: "2021年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Matrix-Rank
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の行列(matrix) $A$ の階数(rank)を求めよ。

$$
A = \begin{pmatrix} 1 & a & a \\ a & 1 & a \\ a & a & 1 \end{pmatrix}
$$

### 题目描述

求含参数 $a$ 的矩阵

$$
A=\begin{pmatrix}
1&a&a\\
a&1&a\\
a&a&1
\end{pmatrix}
$$

的秩，并按 $a$ 的取值分类。

## **Kai**

首先，计算矩阵 $A$ 的行列式：

$$
\begin{aligned} |A| &= 1(1 - a^2) - a(a - a^2) + a(a^2 - a) \\ &= 1 - a^2 - a^2 + a^3 + a^3 - a^2 \\ &= 1 - 3a^2 + 2a^3 \\ &= (1 - a)^2(1 + 2a) \end{aligned}
$$

若 $|A| \neq 0$ ，即 $a \neq 1$ 且 $a \neq -\frac{1}{2}$ ，则 rank $(A) = 3$ 。

当 $a = 1$ 时，

$$
A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}
$$

此时，rank $(A) = 1$ 。

当 $a = -\frac{1}{2}$ 时，

$$
A = \begin{pmatrix} 1 & -\frac{1}{2} & -\frac{1}{2} \\ -\frac{1}{2} & 1 & -\frac{1}{2} \\ -\frac{1}{2} & -\frac{1}{2} & 1 \end{pmatrix}
$$

进行初等变换，可以得到

$$
\begin{pmatrix} 1 & -\frac{1}{2} & -\frac{1}{2} \\ 0 & \frac{3}{4} & -\frac{3}{4} \\ 0 & -\frac{3}{4} & \frac{3}{4} \end{pmatrix} \to \begin{pmatrix} 1 & -\frac{1}{2} & -\frac{1}{2} \\ 0 & \frac{3}{4} & -\frac{3}{4} \\ 0 & 0 & 0 \end{pmatrix}
$$

此时，rank $(A) = 2$ 。

综上所述：

rank $(A) = \begin{cases} 3, & a \neq 1, a \neq -\frac{1}{2} \\ 1, & a = 1 \\ 2, & a = -\frac{1}{2} \end{cases}$
