---
sidebar_label: 2026年1月実施 専門 第3問
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Binary-Search
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2026年1月実施 専門 第3問

## **Author**
[瑞穂](https://github.com/LiRunyi2001)

## **Description**
(1) Write the pseudo code of binary search, with no recursion. 

(2) Calculate the result of $\sqrt{2}$ using (1)'s pseudo code, with $\delta$ (error) less than 0.01. 

(3) Write the pseudo code of binary search, with recursion. 

Given formular $\sqrt{2}=1+\frac{1}{1+\frac{1}{1+...}}$, and series $r_n=1+\frac{1}{1+r_{n-1}}$, 

(4) Prove (a) $r_{2n} \leq \sqrt{2} \leq r_{2n+1}$, and (b) $\frac{r_{n+2}-r_{n+1}}{r_{n+1}-r_{n}}=\frac{-1}{2r_{n}+3}$. Also calculate $\sqrt{2}$ with $\delta < 0.001$. 

(5) Given function $y=x^2-2$, calculate $\sqrt{2}$ via Newton method, and the initial point is $x=2$, $\delta<0.0001$. 

### 题目描述

(1) 写出非递归二分查找的伪代码。

(2) 使用 (1) 的伪代码计算 $\sqrt2$，使误差 $\delta<0.01$。原 Description 没有给出二分的初始区间，也没有定义 $\delta$ 采用绝对误差、区间宽度还是其他判据，因此这些边界不作补定。

(3) 写出递归二分查找的伪代码。

给定连分式与递推式

$$
\sqrt2=1+\frac1{1+\frac1{1+\cdots}},\qquad
r_n=1+\frac1{1+r_{n-1}}.
$$

(4) 证明：

$$
\text{(a)}\quad r_{2n}\le\sqrt2\le r_{2n+1},
$$

以及

$$
\text{(b)}\quad
\frac{r_{n+2}-r_{n+1}}{r_{n+1}-r_n}
=\frac{-1}{2r_n+3}.
$$

并计算满足 $\delta<0.001$ 的 $\sqrt2$。原 Description 未给出递推初值、$n$ 的起始范围，也未定义此处的 $\delta$，故无法唯一确定数列的具体迭代边界；此处不臆造。

(5) 对函数 $y=x^2-2$ 使用牛顿法计算 $\sqrt2$，初始点为 $x=2$，要求 $\delta<0.0001$。原 Description 同样没有定义 $\delta$ 的具体误差判据。

#### 考点

- 二分查找：要求分别写出迭代与递归实现，并把区间折半思想用于在给定误差条件下逼近平方根。
