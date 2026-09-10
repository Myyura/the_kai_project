---
sidebar_label: '2013年8月実施 数学 第2問'
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
  - Mathematics.Linear-Algebra.Least-Squares-and-Minimum-Norm-Solutions
---

# 東京大学 工学系研究科 2013年8月実施 数学 第2問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$m>n$ を正の整数とし、階数 $n$ の実行列 $A\in\mathbb R^{m\times n}$ を考える。

I. $A^TA$ が対称行列であることを示せ。

II. 非零の実列ベクトル $\boldsymbol x$ に対し常に $\boldsymbol x^TC\boldsymbol x>0$ となる実対称行列 $C$ を正定値行列と呼ぶ。$A^TA$ が正定値であることを示せ。

III. 正定値行列の固有値がすべて正であることを示し、これを用いて逆行列が存在することを示せ。

IV. $\boldsymbol b\in\mathbb R^m$ が与えられたとき、$\|A\boldsymbol x'-\boldsymbol b\|^2$ を最小にする $\boldsymbol x'$ を $A,\boldsymbol b$ で表せ。

#### 题目描述

设 $m>n$ 为正整数，实矩阵 $A\in\mathbb R^{m\times n}$ 的秩为 $n$。

I. 证明 $A^TA$ 为对称矩阵。

II. 实对称矩阵 $C$ 若对所有非零实列向量 $\boldsymbol x$ 满足 $\boldsymbol x^TC\boldsymbol x>0$，则称为正定矩阵。证明 $A^TA$ 正定。

III. 证明正定矩阵的所有特征值均为正，并由此证明其可逆。

IV. 给定 $\boldsymbol b\in\mathbb R^m$，求使 $\|A\boldsymbol x'-\boldsymbol b\|^2$ 最小的 $\boldsymbol x'$，用 $A,\boldsymbol b$ 表示。

## **Kai**

### I–II

$(A^TA)^T=A^TA$。また $A$ は列フルランクなので、$\boldsymbol x\ne0$ なら $A\boldsymbol x\ne0$ であり、

$$
\boldsymbol x^TA^TA\boldsymbol x=\|A\boldsymbol x\|^2>0.
$$

従って $A^TA$ は実対称正定値行列である。

### III

実対称行列は直交対角化できる。実固有ベクトル $\boldsymbol v\ne0$ に対し $C\boldsymbol v=\lambda\boldsymbol v$ なら、

$$
\lambda=\frac{\boldsymbol v^TC\boldsymbol v}{\boldsymbol v^T\boldsymbol v}>0.
$$

すべての固有値が非零で $\det C>0$ となるから、$C$ は可逆である。

### IV

二乗誤差の勾配を零とおくと、正規方程式
$A^TA\boldsymbol x'=A^T\boldsymbol b$ を得る。II–III より、唯一の解は

$$
\boxed{\boldsymbol x'=(A^TA)^{-1}A^T\boldsymbol b}.
$$

この解を $\boldsymbol x_*$ とし、$A^T(A\boldsymbol x_*-\boldsymbol b)=0$ を用いると、

$$
\|A(\boldsymbol x_*+\boldsymbol h)-\boldsymbol b\|^2
=\|A\boldsymbol x_*-\boldsymbol b\|^2+\|A\boldsymbol h\|^2.
$$

最後の項が零となるのは $\boldsymbol h=0$ の場合に限るので、確かに唯一の大域的最小点である。
