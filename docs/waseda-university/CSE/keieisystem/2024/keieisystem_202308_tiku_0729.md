---
sidebar_label: "2023年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Linear-Independence
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2023年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$V$ を定義域 (domain) と値域 (range) が実数集合 $\mathbb{R}$ (set of real numbers) である実関数 (real functions) 全体から成る集合とする。任意の $f, g \in V$ , $x, a \in \mathbb{R}$ に対し、和 (sum) を $(f + g)(x) = f(x) + g(x)$ , スカラー倍 (scalar multiple) を $(af)(x) = a(f(x))$ と定義すると $V$ は線形空間 (linear space) となる。 $n = 0, 1, 2, \dots$ に対して $V$ の元 (element) $f_n$ を $f_n(x) = x^n$ と定義する。このとき任意の正の整数 (positive integer) $m$ に対して、 $f_1, f_2, \dots, f_m$ は線形独立 (linearly independent) であることを示せ。

### 题目描述

设 $V$ 是所有定义域和值域均为实数集 $\mathbb R$ 的实函数组成的集合。对任意 $f,g\in V$ 以及 $x,a\in\mathbb R$，定义

$$
(f+g)(x)=f(x)+g(x),\qquad
(af)(x)=a\,f(x),
$$

则 $V$ 为线性空间。对 $n=0,1,2,\ldots$，定义 $V$ 中的元素

$$
f_n(x)=x^n.
$$

证明：对任意正整数 $m$，函数 $f_1,f_2,\ldots,f_m$ 线性无关。

## **Kai**

証明：
$c_1f_1(x) + c_2f_2(x) + \dots + c_mf_m(x) = 0$ がすべての $x$ に対して成り立つとする。つまり、

$$
c_1x + c_2x^2 + \dots + c_mx^m = 0
$$

がすべての $x$ に対して成り立つ。
この式は $x$ の多項式であり、恒等的に $0$ であるためには、すべての係数が $0$ でなければならない。したがって、 $c_1 = c_2 = \dots = c_m = 0$ である。
したがって、 $f_1, f_2, \dots, f_m$ は線形独立である。
