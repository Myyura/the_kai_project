---
sidebar_label: "2021年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Basis-and-Dimension
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$A$ を任意の $n$ 次正方行列 (n-dimension matrix) とし、 $B$ を $n$ 次の正則行列 (non-singular matrix) とするとき、 $A$ の固有値 (eigenvalue) と $B^{-1}AB$ の固有値は一致することを示せ。

### 题目描述

设 $A$ 为任意 $n$ 阶方阵，$B$ 为 $n$ 阶可逆矩阵。证明 $A$ 与

$$
B^{-1}AB
$$

的特征值相同。

## **Kai**

Let $\lambda$ be an eigenvalue of $A$ , and let $v$ be the corresponding eigenvector. Then $Av = \lambda v$ .
We want to show that $\lambda$ is also an eigenvalue of $B^{-1}AB$ .
Let $w = B^{-1}v$ . Since $B$ is invertible, $B^{-1}v \neq 0$ if $v\neq 0$ .  Thus $w$ is a non-zero vector.
Then

$$
(B^{-1}AB)w
=B^{-1}AB(B^{-1}v)
=B^{-1}Av
=\lambda B^{-1}v
=\lambda w.
$$

This shows that $\lambda$ is an eigenvalue of $B^{-1}AB$ .
Suppose $\lambda$ is an eigenvalue of $B^{-1}AB$ . Then there exists $v \neq 0$ such that $B^{-1}ABv = \lambda v$ .
Multiply both sides by $B$ from the left. $B(B^{-1}ABv) = B(\lambda v)$ , so $ABv = \lambda Bv$ .
Let $w = Bv$ . Since $B$ is invertible and $v \neq 0$ , $Bv \neq 0$ . Thus, $w \neq 0$ . Therefore $Aw = \lambda w$ . This means $\lambda$ is an eigenvalue of $A$ .
Therefore, the eigenvalues of $A$ and $B^{-1}AB$ are the same.
