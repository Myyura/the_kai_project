---
sidebar_label: "2021年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Linear-Independence
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

ベクトル $\mathbf{e}_1$ , $\mathbf{e}_2$ が線形独立 (linearly independent) で、ベクトル $\mathbf{a}_1$ , $\mathbf{a}_2$ が次のように表されるとする。

$$
\mathbf{a}_1 = 5\mathbf{e}_1 + 3\mathbf{e}_2
$$

$$
\mathbf{a}_2 = 2\mathbf{e}_1 + \mathbf{e}_2
$$

このとき、 $\mathbf{a}_1$ , $\mathbf{a}_2$ も線形独立であることを示せ。

### 题目描述

设向量 $\mathbf e_1,\mathbf e_2$ 线性无关，并定义

$$
\mathbf a_1=5\mathbf e_1+3\mathbf e_2,
\qquad
\mathbf a_2=2\mathbf e_1+\mathbf e_2.
$$

证明 $\mathbf a_1,\mathbf a_2$ 也线性无关。

## **Kai**

線形独立を示すためには、 $c_1 \mathbf{a}_1 + c_2 \mathbf{a}_2 = \mathbf{0}$ が成り立つとき、 $c_1 = c_2 = 0$ であることを示せばよい。

$c_1 \mathbf{a}_1 + c_2 \mathbf{a}_2 = \mathbf{0}$ より、

$$
c_1(5\mathbf{e}_1 + 3\mathbf{e}_2) + c_2(2\mathbf{e}_1 + \mathbf{e}_2) = \mathbf{0}
$$

$$
(5c_1 + 2c_2)\mathbf{e}_1 + (3c_1 + c_2)\mathbf{e}_2 = \mathbf{0}
$$

$\mathbf{e}_1$ と $\mathbf{e}_2$ は線形独立なので、

$$
5c_1 + 2c_2 = 0
$$

$$
3c_1 + c_2 = 0
$$

この連立方程式を解く。
2番目の式より、 $c_2 = -3c_1$ 。これを1番目の式に代入すると、

$$
5c_1 + 2(-3c_1) = 0
$$

$$
5c_1 - 6c_1 = 0
$$

$$
-c_1 = 0
$$

$$
c_1 = 0
$$

$c_1 = 0$ を $c_2 = -3c_1$ に代入すると、 $c_2 = -3(0) = 0$ 。

したがって、 $c_1 = c_2 = 0$ となるため、 $\mathbf{a}_1$ と $\mathbf{a}_2$ は線形独立である。
