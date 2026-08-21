---
sidebar_label: "2023年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2023年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の行列式(determinant)を計算せよ。

$$
\begin{vmatrix}
-5 & 1 & 0 & 4 \\
-2 & -2 & -2 & 0 \\
2 & -1 & -3 & -4 \\
-2 & -1 & 0 & 1
\end{vmatrix}
$$

### 题目描述

计算行列式

$$
\begin{vmatrix}
-5&1&0&4\\
-2&-2&-2&0\\
2&-1&-3&-4\\
-2&-1&0&1
\end{vmatrix}.
$$

## **Kai**

Let the determinant be $D$ . We can use elementary row operations to simplify the determinant.

$$
\begin{aligned} D &= \begin{vmatrix}
-5 & 1 & 0 & 4 \\
-2 & -2 & -2 & 0 \\
2 & -1 & -3 & -4 \\
-2 & -1 & 0 & 1
\end{vmatrix} \\
&= -2 \begin{vmatrix}
-5 & 1 & 0 & 4 \\
1 & 1 & 1 & 0 \\
2 & -1 & -3 & -4 \\
-2 & -1 & 0 & 1
\end{vmatrix}
\end{aligned}
$$

Interchange rows 1 and 2:

$$
D = 2 \begin{vmatrix}
1 & 1 & 1 & 0 \\
-5 & 1 & 0 & 4 \\
2 & -1 & -3 & -4 \\
-2 & -1 & 0 & 1
\end{vmatrix}
$$

Now, apply row operations $R_2 \to R_2 + 5R_1$ , $R_3 \to R_3 - 2R_1$ , $R_4 \to R_4 + 2R_1$ :

$$
D = 2 \begin{vmatrix}
1 & 1 & 1 & 0 \\
0 & 6 & 5 & 4 \\
0 & -3 & -5 & -4 \\
0 & 1 & 2 & 1
\end{vmatrix}
$$

$$
D = 2 \begin{vmatrix}
6 & 5 & 4 \\
-3 & -5 & -4 \\
1 & 2 & 1
\end{vmatrix}
$$

Apply row operation $R_2 \to R_2 + \frac{1}{2} R_1$ :

$$
D = 2 \begin{vmatrix}
6 & 5 & 4 \\
0 & -5/2 & -2 \\
1 & 2 & 1
\end{vmatrix}
$$

Interchange rows 1 and 3:

$$
D = -2 \begin{vmatrix}
1 & 2 & 1 \\
0 & -5/2 & -2 \\
6 & 5 & 4
\end{vmatrix}
$$

Apply $R_3 \to R_3 - 6R_1$ :

$$
D = -2 \begin{vmatrix}
1 & 2 & 1 \\
0 & -5/2 & -2 \\
0 & -7 & -2
\end{vmatrix}
$$

$$
D = -2 \begin{vmatrix}
-5/2 & -2 \\
-7 & -2
\end{vmatrix} = -2[(-5/2)(-2) - (-2)(-7)] = -2[5 - 14] = -2(-9) = 18
$$

Thus, the determinant is 18.
