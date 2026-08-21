---
sidebar_label: "2024年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Affine-Solution-Space-of-Linear-System
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2024年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の連立一次方程式を、掃き出し法を用いて解け。

$$
\begin{cases} x + y + 2z = 5 \\ 2x + 3y + z = 3 \\ -x - 3y + 4z = 9 \end{cases}
$$

### 题目描述

使用高斯–若尔当消元法求解线性方程组

$$
\begin{cases}
x+y+2z=5,\\
2x+3y+z=3,\\
-x-3y+4z=9.
\end{cases}
$$

## **Kai**

解法： 掃き出し法 (Gaussian Elimination)

1.  まず、拡大係数行列を作成します。

$$
\begin{bmatrix} 1 & 1 & 2 & 5 \\ 2 & 3 & 1 & 3 \\ -1 & -3 & 4 & 9 \end{bmatrix}
$$

2.  2行目から1行目の2倍を引きます。($R_2 \to R_2-2R_1$)

$$
\begin{bmatrix} 1 & 1 & 2 & 5 \\ 0 & 1 & -3 & -7 \\ -1 & -3 & 4 & 9 \end{bmatrix}
$$

3.  3行目に1行目を加えます。($R_3 \to R_3+R_1$)

$$
\begin{bmatrix} 1 & 1 & 2 & 5 \\ 0 & 1 & -3 & -7 \\ 0 & -2 & 6 & 14 \end{bmatrix}
$$

4. 3行目に2行目の2倍を加えます。($R_3 \to R_3+2R_2$)

$$
\begin{bmatrix} 1 & 1 & 2 & 5 \\ 0 & 1 & -3 & -7 \\ 0 & 0 & 0 & 0 \end{bmatrix}
$$

5. 1行目から2行目を引きます。($R_1 \to R_1-R_2$)

$$
\begin{bmatrix} 1 & 0 & 5 & 12 \\ 0 & 1 & -3 & -7 \\ 0 & 0 & 0 & 0 \end{bmatrix}
$$

これにより、以下の方程式系が得られます。

$$
\begin{cases} x + 5z = 12 \\ y - 3z = -7 \end{cases}
$$

zをパラメータtとすると、

$$
z = t
$$

$$
x = 12 - 5t
$$

$$
y = -7 + 3t
$$

したがって、解は次のようになります。

$$
\begin{cases} x = 12 - 5t \\ y = -7 + 3t \\ z = t \end{cases}
$$
