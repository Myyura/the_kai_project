---
sidebar_label: "2022年8月実施 大気水圏科学系 数学"
tags:
  - Nagoya-University
  - Mathematics.Calculus.Integration-by-Parts
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Linear-Algebra.Linear-Transformation
  - Mathematics.Fourier-Analysis.Orthogonal-Function-Systems
---
# 名古屋大学 環境学研究科 地球環境科学専攻 大気水圏科学系 2022年8月実施 数学

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
### 問題1
次の問１～３に答えなさい。 

- 問1 次の不定積分を計算する手順を述べなさい。 

$$
\int xe^{-ax}\ dx
$$

- 問２ 問１の不定積分を計算しなさい。 
- 問３ 問２の結果を利用し、 $a > 0$ のとき次の定積分を求めなさい。 

$$
\int_0^{\infty} xe^{-ax}\ dx
$$

### 問題2
次の問１～３に答えなさい。 

- 問１ ある関数 $f(x)$ が線形であるとはどういうことかを説明しなさい。 
- 問２ ベクトルの直交の定義のアナロジーとして、二つの関数が直交することの定義を示しなさい。 
- 問３ ある関数の集合が直交関数系であるとはどういうことかを説明しなさい。

### 题目描述

**问题 1**：

1. 说明计算不定积分
   $$
   \int xe^{-ax}\,dx
   $$
   的步骤。
2. 实际计算该不定积分。
3. 利用第 2 问的结果，在 $a>0$ 时计算广义积分
   $$
   \int_0^\infty xe^{-ax}\,dx.
   $$

**问题 2**：

1. 说明函数 $f(x)$ 为线性函数（线性映射）的含义。
2. 类比向量正交的定义，给出两个函数正交的定义。
3. 说明一组函数构成正交函数系的含义。

## **Kai**
### 問題1
#### 問1
部分積分

#### 問2

$$
  \begin{aligned}
  \int x e^{-ax} dx
  &= - \frac{1}{a} x e^{-ax} + \frac{1}{a} \int e^{-ax} dx
  \\
  &= - \frac{1}{a} x e^{-ax} - \frac{1}{a^2} e^{-ax} + C
  \ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
  \end{aligned}
$$

#### 問3

$$
  \begin{aligned}
  \int_0^\infty x e^{-ax} dx
  &= \left[ - \frac{1}{a} x e^{-ax} - \frac{1}{a^2} e^{-ax} \right]_0^\infty
  \\
  &= \frac{1}{a^2}
  \end{aligned}
$$

### 問題2
#### 問1

$$
  \begin{aligned}
  f(ax+by) = a f(x) + b f(y)
  \end{aligned}
$$

#### 問2
2つの関数 $f(x), g(x)$ が直交するとは、

$$
\begin{aligned}
\int_{- \infty}^\infty f(x) g(x) dx = 0
\end{aligned}
$$

が成り立つことである。

#### 問3
関数の集合 $f_1(x), f_2(x), \cdots$ が直交関数系であるとは、
任意の $f_i(x), f_j(x) \ (i \ne j)$ が直交することである。
