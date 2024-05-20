---
comments: false
title: 名古屋大学 環境学研究科 地球環境科学専攻 大気水圏科学系 2023年度 数学
tags:
  - Nagoya-University
---
# 名古屋大学 環境学研究科 地球環境科学専攻 大気水圏科学系 2023年度 数学

## **Author**
Miyake

## **Description**
問題１ 次の問１～３に答えなさい。 

- 問1 次の不定積分を計算する手順を述べなさい。 

$$
\int xe^{-ax}\ dx
$$

- 問２ 問１の不定積分を計算しなさい。 
- 問３ 問２の結果を利用し、 $a > 0$ のとき次の定積分を求めなさい。 

$$
\int_0^{\infty} xe^{-ax}\ dx
$$

問題２ 次の問１～３に答えなさい。 

- 問１ ある関数 $f(x)$ が線形であるとはどういうことかを説明しなさい。 
- 問２ ベクトルの直交の定義のアナロジーとして、二つの関数が直交することの定義を示しなさい。 
- 問３ ある関数の集合が直交関数系であるとはどういうことかを説明しなさい。

## **Kai**
### 問題 1
#### 問 1
部分積分

#### 問 2

$$
  \begin{aligned}
  \int x e^{-ax} dx
  &= - \frac{1}{a} x e^{-ax} + \frac{1}{a} \int e^{-ax} dx
  \\
  &= - \frac{1}{a} x e^{-ax} - \frac{1}{a^2} e^{-ax} + C
  \ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
  \end{aligned}
$$

#### 問 3

$$
  \begin{aligned}
  \int_0^\infty x e^{-ax} dx
  &= \left[ - \frac{1}{a} x e^{-ax} - \frac{1}{a^2} e^{-ax} \right]_0^\infty
  \\
  &= \frac{1}{a^2}
  \end{aligned}
$$

### 問題 2
#### 問 1

$$
  \begin{aligned}
  f(ax+by) = a f(x) + b f(y)
  \end{aligned}
$$

#### 問 2
2つの関数 $f(x), g(x)$ が直交するとは、

$$
\begin{aligned}
\int_{- \infty}^\infty f(x) g(x) dx = 0
\end{aligned}
$$

が成り立つことである。

#### 問 3
関数の集合 $f_1(x), f_2(x), \cdots$ が直交関数系であるとは、
任意の $f_i(x), f_j(x) \ (i \ne j)$ が直交することである。