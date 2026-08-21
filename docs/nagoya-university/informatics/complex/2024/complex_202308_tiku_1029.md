---
sidebar_label: "2023年8月実施 线性代数"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2023年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$X = X^T$ となる行列 $X$ を対称行列と呼ぶ。行列 $X$ が正定値かつ対称であるとき, その固有値は常に正の実数であることを証明せよ。なお、対称行列の固有値・固有ベクトルがそれぞれ実数・実ベクトルであることは既知としてよい。

### 题目描述

满足 $X=X^{\mathsf T}$ 的矩阵 $X$ 称为对称矩阵。证明：若矩阵 $X$ 同时为正定矩阵和对称矩阵，则 $X$ 的每个特征值都是正实数。

可以直接使用以下已知事实：实对称矩阵的特征值均为实数，并且可取相应的实特征向量。

## **Kai**

【証明】

$X$ を正定値対称行列とする。このとき、 $X$ の固有値を $\lambda$ 、対応する固有ベクトルを $v$ とすると、

$$
Xv = \lambda v
$$

$X$ が対称行列であることと、既知の事実から、 $v$ は実ベクトルである。また、 $v \neq 0$ である。

両辺に $v^T$ を左から掛けると、

$$
v^T Xv = \lambda v^T v
$$

したがって、

$$
\lambda = \frac{v^T Xv}{v^T v}
$$

ここで、 $v^T v = ||v||^2 > 0$ である（ $v \neq 0$ より）。

また、 $X$ が正定値行列であることから、 $x^T Xx > 0$ for all $x \neq 0$ . 特に $v \neq 0$ なので、 $v^T Xv > 0$ である。

したがって、

$$
\lambda = \frac{v^T Xv}{v^T v} > 0
$$

よって、 $X$ の固有値 $\lambda$ は常に正の実数である。

（証明終わり）
