---
sidebar_label: "2014年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Affine-Solution-Space-of-Linear-System
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2014年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

つぎの (1), (2)に答えよ.

(1) 連立1次方程式の解を求める Cramer の公式 (Cramer formula) を示せ.

(2) 次の連立1次方程式 (simultaneous linear equation) の解を求めよ.

$$
x + 2y - z = 1
$$

$$
3x - 2y - z = 2
$$

$$
2x - y - 2z = 3
$$

### 题目描述

回答下列问题。

1. 写出求解线性方程组的克拉默公式。
2. 求解线性方程组

   $$
   \begin{cases}
   x+2y-z=1,\\
   3x-2y-z=2,\\
   2x-y-2z=3.
   \end{cases}
   $$

## **Kai**

(1) クラーメルの公式 (Cramer's Rule):

与えられた連立一次方程式を以下のように表す。

$$
A\mathbf{x} = \mathbf{b}
$$

ここで、 $A$ は係数行列、 $\mathbf{x}$ は変数のベクトル、 $\mathbf{b}$ は定数ベクトルである。

$\mathbf{x} = (x_1, x_2, ..., x_n)^T$ とし、 $A = (\mathbf{a_1}, \mathbf{a_2}, ..., \mathbf{a_n})$ とする。
ただし $\det(A)\neq0$ とする。

このとき、 $x_i$ は以下の式で与えられる。

$$
x_i = \frac{\det(A_i)}{\det(A)}
$$

ここで、 $A_i$ は行列 $A$ の $i$ 番目の列を $\mathbf{b}$ で置き換えた行列である。

実際， $\mathbf b=A\mathbf x=\sum_{j=1}^n x_j\mathbf a_j$ を
$A_i$ の第 $i$ 列に代入し，行列式の多重線形性を用いると，
$j\neq i$ の項は同じ列を2本持つため $0$ となる。したがって

$$
\det(A_i)=x_i\det(A)
$$

であり， $\det(A)\neq0$ より上の公式を得る。

(2) 与えられた連立一次方程式を解く。

$$
x + 2y - z = 1 \quad (1)
$$

$$
3x - 2y - z = 2 \quad (2)
$$

$$
2x - y - 2z = 3 \quad (3)
$$

(1) + (2) より、

$$
4x - 2z = 3 \quad (4)
$$

2*(1) - (3) より、

$$
2(x + 2y - z) - (2x - y - 2z) = 2(1) - 3
$$

$$
2x + 4y - 2z - 2x + y + 2z = -1
$$

$$
5y = -1
$$

$$
y = -\frac{1}{5}
$$

$y = -\frac{1}{5}$ を(1), (2), (3) に代入する

$$
x - \frac{2}{5} - z = 1 \implies x - z = \frac{7}{5} \quad (5)
$$

$$
3x + \frac{2}{5} - z = 2 \implies 3x - z = \frac{8}{5} \quad (6)
$$

$$
2x + \frac{1}{5} - 2z = 3 \implies 2x - 2z = \frac{14}{5} \quad (7)
$$

(6) - (5) より、

$$
2x = \frac{1}{5}
$$

$$
x = \frac{1}{10}
$$

$x = \frac{1}{10}$ を(5)に代入する。

$$
\frac{1}{10} - z = \frac{7}{5}
$$

$$
z = \frac{1}{10} - \frac{14}{10}
$$

$$
z = -\frac{13}{10}
$$

よって、 $x = \frac{1}{10}, y = -\frac{1}{5}, z = -\frac{13}{10}$
