---
sidebar_label: 2014年3月実施 専門科目 問題6 物理専門1
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Hermitian-Matrix
---

# 東北大学 工学研究科 電気・情報系 2014年3月実施 専門科目 問題6 物理専門1

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

関数 $f(x)$ および $g(x)$ の内積を $\langle f\mid g\rangle=\int f(x)^*g(x)\,dx$ と定義する。また $\langle f\mid g\rangle=0$ のとき，関数 $f(x)$ と $g(x)$ は直交すると呼ばれる。以下の問に答えよ。

(1) $\langle g\mid f\rangle=\langle f\mid g\rangle^*$ を示せ。

(2) 演算子 $\hat A$ に対し，$\langle\hat Af\mid g\rangle=\langle f\mid\hat A^\dagger g\rangle$ を満たすような演算子 $\hat A^\dagger$ を，$\hat A$ のエルミート共役演算子という。$(i\hat A)^\dagger=-i\hat A^\dagger$ を示せ。ここで $i$ は虚数単位である。

(3) 与えられた任意の演算子 $\hat A$ および $\hat B$ に対し，それらの積の演算子 $\hat A\hat B$ のエルミート共役演算子が $\hat B^\dagger\hat A^\dagger$ となることを示せ。

(4) $\hat A^\dagger=\hat A$ となる演算子 $\hat A$ をエルミート演算子という。エルミート演算子の固有値は実数となることを示せ。

(5) 任意の演算子 $\hat A$ に対し，$\hat A+\hat A^\dagger$ および $i(\hat A-\hat A^\dagger)$ がエルミート演算子となることを示せ。

(6) エルミート演算子 $\hat A$ に対する二つの固有値 $\lambda_1,\lambda_2$（$\lambda_1\ne\lambda_2$）とそれぞれに対する固有関数 $\psi_1,\psi_2$ を考える。$\psi_1$ と $\psi_2$ が直交することを示せ。

### 题目描述

定义函数内积 $\langle f\mid g\rangle=\int f(x)^*g(x)\,dx$。内积为零时称两函数正交。算符 $A$ 的伴随 $A^\dagger$ 由

$$
\langle Af\mid g\rangle=\langle f\mid A^\dagger g\rangle
$$

定义。证明：

1. $\langle g\mid f\rangle=\langle f\mid g\rangle^*$。
2. $(iA)^\dagger=-iA^\dagger$。
3. $(AB)^\dagger=B^\dagger A^\dagger$。
4. 厄米算符 $A=A^\dagger$ 的特征值为实数。
5. $A+A^\dagger$ 与 $i(A-A^\dagger)$ 均为厄米算符。
6. 厄米算符对应不同特征值的特征函数相互正交。

## **Kai**

### (1)

$$
\langle f\mid g\rangle^*=\int f(x)g(x)^*\,dx=\langle g\mid f\rangle.
$$

### (2)

内积对第一变量共轭线性，故

$$
\langle iAf\mid g\rangle=-i\langle Af\mid g\rangle
=\langle f\mid(-iA^\dagger)g\rangle.
$$

### (3)

$$
\langle ABf\mid g\rangle=\langle Bf\mid A^\dagger g\rangle
=\langle f\mid B^\dagger A^\dagger g\rangle.
$$

### (4)

设 $A\psi=\lambda\psi$ 且 $\psi\ne0$。则

$$
\lambda^*\lVert\psi\rVert^2=\langle A\psi\mid\psi\rangle
=\langle\psi\mid A\psi\rangle=\lambda\lVert\psi\rVert^2,
$$

故 $\lambda=\lambda^*$。

### (5)

利用 $(A^\dagger)^\dagger=A$，

$$
(A+A^\dagger)^\dagger=A^\dagger+A,
$$

$$
[i(A-A^\dagger)]^\dagger=-i(A^\dagger-A)=i(A-A^\dagger).
$$

### (6)

若 $A\psi_j=\lambda_j\psi_j$，则由 (4)

$$
(\lambda_1-\lambda_2)\langle\psi_1\mid\psi_2\rangle
=\langle A\psi_1\mid\psi_2\rangle-\langle\psi_1\mid A\psi_2\rangle=0.
$$

$\lambda_1\ne\lambda_2$，故 $\boxed{\langle\psi_1\mid\psi_2\rangle=0}$。
