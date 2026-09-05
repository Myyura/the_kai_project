---
sidebar_label: "2014年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Basis-and-Dimension
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2014年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$n$ 次元ベクトル $\vec{a}, \vec{b}, \vec{c}$ が一次独立 (linearly independent) のとき、ベクトル $\vec{a} + \vec{b}, \vec{a} - \vec{b}, \vec{a} - 2\vec{b} + \vec{c}$ は一次独立か。答は Yes, No だけでなく、理由を説明せよ。

### 题目描述

设 $n$ 维向量 $\vec a,\vec b,\vec c$ 线性无关。判断下列三个向量是否线性无关，并说明理由；答案不能只有 “Yes” 或 “No”：

$$
\vec a+\vec b,\qquad
\vec a-\vec b,\qquad
\vec a-2\vec b+\vec c.
$$

## **Kai**

Yes. \\
Let $x(\vec{a} + \vec{b}) + y(\vec{a} - \vec{b}) + z(\vec{a} - 2\vec{b} + \vec{c}) = \vec{0}$ . Then,

$$
(x+y+z)\vec{a} + (x-y-2z)\vec{b} + z\vec{c} = \vec{0}
$$

Since $\vec{a}, \vec{b}, \vec{c}$ are linearly independent, we have

$$
\begin{cases} x+y+z = 0 \\ x-y-2z = 0 \\ z = 0 \end{cases}
$$

Substituting $z=0$ into the first two equations gives

$$
\begin{cases} x+y = 0 \\ x-y = 0 \end{cases}
$$

Solving this system gives $x=0$ and $y=0$ . Thus $x=y=z=0$ .
Therefore, $\vec a+\vec b,\ \vec a-\vec b,\ \vec a-2\vec b+\vec c$ are linearly independent.
