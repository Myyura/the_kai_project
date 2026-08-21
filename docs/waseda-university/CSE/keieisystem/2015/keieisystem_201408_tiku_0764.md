---
sidebar_label: "2014年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Inverse
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2014年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

正則行列(nonsingular matrix) $A$ に対して、 $XA=E$ または $AY = E$ となる行列 $X$ , $Y$ は $A$ の逆行列(inverse)であることを示せ。ここに、 $E$ は単位行列(identity matrix)を示すものとする。

### 题目描述

设 $A$ 为可逆矩阵，$E$ 为单位矩阵。证明：若矩阵 $X$ 满足 $XA=E$，则 $X$ 是 $A$ 的逆矩阵；若矩阵 $Y$ 满足 $AY=E$，则 $Y$ 是 $A$ 的逆矩阵。

## **Kai**

证明:

若 $XA = E$ , 则 $X = A^{-1}$ .
两边同时乘以 $A^{-1}$ , 有 $XAA^{-1} = EA^{-1}$ ，
因为 $AA^{-1} = E$ , 所以 $XE = A^{-1}$ ，
因此 $X = A^{-1}$ .

若 $AY = E$ , 则 $Y = A^{-1}$ .
两边同时乘以 $A^{-1}$ , 有 $A^{-1}AY = A^{-1}E$ ,
因为 $A^{-1}A = E$ , 所以 $EY = A^{-1}$ ,
因此 $Y = A^{-1}$ .

所以，若 $XA = E$ 或 $AY = E$ , 则 $X$ 或 $Y$ 是 $A$ 的逆矩阵。
