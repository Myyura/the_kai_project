---
sidebar_label: "2013年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Linear-Independence
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2013年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$a_1, a_2$ を実ベクトル空間 (real vector space) 上の線形独立 (linearly independent) なベクトル (vector) とし、 $c_1, c_2$ を $c_1c_2 \neq 0$ である実数 (real number) とする. このとき $c_1a_1, c_2a_2$ が線形独立であることを示せ.

### 题目描述

设 $a_1,a_2$ 是实向量空间中线性无关的向量，$c_1,c_2$ 是满足 $c_1c_2\neq0$ 的实数。证明 $c_1a_1,c_2a_2$ 线性无关。

## **Kai**

線形独立であることを示すには、 $k_1(c_1a_1) + k_2(c_2a_2) = 0$ が成立するとき、 $k_1 = k_2 = 0$ であることを示す必要があります。

$\qquad k_1(c_1a_1) + k_2(c_2a_2) = 0$

$\qquad (k_1c_1)a_1 + (k_2c_2)a_2 = 0$

ここで、 $a_1$ と $a_2$ は線形独立であるため、 $k_1c_1 = 0$ かつ $k_2c_2 = 0$ が成立します。
また、 $c_1 \neq 0$ と $c_2 \neq 0$ であるため、 $k_1 = 0$ かつ $k_2 = 0$ である必要があります。
したがって、 $c_1a_1$ と $c_2a_2$ は線形独立です。
