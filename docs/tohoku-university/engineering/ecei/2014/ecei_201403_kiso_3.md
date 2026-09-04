---
sidebar_label: 2014年3月実施 基礎科目 問題3 情報基礎1
tags:
  - Tohoku-University
  - Electrical-Electronic.Digital-Logic.Majority-Gate-Logic-Synthesis
---

# 東北大学 工学研究科 電気・情報系 2014年3月実施 基礎科目 問題3 情報基礎1

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

$\land$ は論理積演算子，$\lor$ は論理和演算子，$\overline{\phantom{x}}$ は否定演算子をそれぞれ表すとする。$x_1,x_2,\ldots,x_n\in\{0,1\}$ とする。3変数論理関数 $f(x_1,x_2,x_3)$ を次のように定義する。

$$
f(x_1,x_2,x_3)=(x_1\land x_2)\lor(x_2\land x_3)\lor(x_3\land x_1)
$$

以下の問に答えよ。

(1) $f(x_1,x_2,f(\bar x_1,\bar x_2,x_3))=f(x_1,x_2,x_3)$ を示せ。

(2) $\land$ や $\lor$ を用いずに，次の論理式を関数 $f$ を用いて表せ。

- (a) $x_1\land x_2$
- (b) $x_1\lor x_2$
- (c) $(x_1\land x_2)\lor(\bar x_1\land\bar x_2)$

(3) $g(x_1,x_2,\ldots,x_n)=\overline{g(\bar x_1,\bar x_2,\ldots,\bar x_n)}$ であるとき，論理関数 $g$ は自己双対関数であるという。

$$
g(x_1,x_2,\ldots,x_9)=f\bigl(f(x_1,x_2,x_3),f(\bar x_4,\bar x_5,\bar x_6),\overline{f(x_7,x_8,x_9)}\bigr)
$$

であるとき，$g(x_1,x_2,\ldots,x_9)$ が自己双対関数であるか否かを判定し，その根拠を示せ。

### 题目描述

以 $\land,\lor,\overline{\phantom{x}}$ 分别表示与、或、非。定义三变量布尔函数

$$
f(x_1,x_2,x_3)=(x_1\land x_2)\lor(x_2\land x_3)\lor(x_3\land x_1).
$$

1. 证明 $f(x_1,x_2,f(\bar x_1,\bar x_2,x_3))=f(x_1,x_2,x_3)$。
2. 不使用与、或运算，仅用 $f$、取反及常量表示 (a) $x_1\land x_2$；(b) $x_1\lor x_2$；(c) $(x_1\land x_2)\lor(\bar x_1\land\bar x_2)$。
3. 若 $g(\boldsymbol{x})=\overline{g(\bar{\boldsymbol{x}})}$，称 $g$ 自对偶。判断

$$
g=f\bigl(f(x_1,x_2,x_3),f(\bar x_4,\bar x_5,\bar x_6),\overline{f(x_7,x_8,x_9)}\bigr)
$$

是否自对偶，并说明理由。

## **Kai**

### (1)

$f$ 是多数函数。若 $x_1=x_2$，等式两边均为 $x_1$；若 $x_1\ne x_2$，则 $f(x_1,x_2,u)=u$，且 $f(\bar x_1,\bar x_2,x_3)=x_3$，故两边相等。

### (2)

$$
\begin{aligned}
\text{(a)}\quad &f(x_1,x_2,0),\\
\text{(b)}\quad &f(x_1,x_2,1),\\
\text{(c)}\quad &f\bigl(f(x_1,x_2,0),f(\bar x_1,\bar x_2,0),1\bigr).
\end{aligned}
$$

### (3)

**自对偶。** 多数函数满足 $f(\bar a,\bar b,\bar c)=\overline{f(a,b,c)}$。将九个输入全部取反时，外层 $f$ 的三个输入分别取反，因此

$$
g(\bar{\boldsymbol{x}})=\overline{g(\boldsymbol{x})}.
$$
