---
sidebar_label: 2015年3月実施 基礎科目 問題3 情報基礎1
tags:
  - Tohoku-University
  - Electrical-Electronic.Digital-Logic.Boolean-Function-Minimization
---

# 東北大学 工学研究科 電気・情報系 2015年3月実施 基礎科目 問題3 情報基礎1

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

$\land$ は論理積演算，$\lor$ は論理和演算，$\overline{\phantom{x}}$ は否定演算を表すとする。$x_1,x_2,\ldots,x_n\in\{0,1\}$ とする。$n$ 変数論理関数 $f(x_1,x_2,\ldots,x_n)$ の変数を任意に置換しても $f$ が変化しないとき，$f$ は対称であるという。任意の $n$ 変数論理関数 $f(x_1,x_2,\ldots,x_n)$ の双対関数は $\overline{f(\bar x_1,\bar x_2,\ldots,\bar x_n)}$ で与えられる。$f(x_1,x_2,\ldots,x_n)=\overline{f(\bar x_1,\bar x_2,\ldots,\bar x_n)}$ であるとき，$f$ は自己双対であるという。以下の問に答えよ。

(1) 次の論理関数 $f_1,f_2,f_3,f_4$ それぞれについて，真理値表を示し，対称であるか否か，自己双対であるか否かを判定せよ。

$$
\begin{aligned}
\text{(a)}\quad f_1(x_1,x_2,x_3)&=\bar x_1\land\bar x_2\land\bar x_3,\\
\text{(b)}\quad f_2(x_1,x_2,x_3)&=x_1\land\bar x_2\land\bar x_3,\\
\text{(c)}\quad f_3(x_1,x_2,x_3)&=(x_1\land\bar x_2\land\bar x_3)\lor(\bar x_1\land x_2\land\bar x_3)\lor(\bar x_1\land\bar x_2\land x_3),\\
\text{(d)}\quad f_4(x_1,x_2,x_3)&=f_1(x_1,x_2,x_3)\lor f_3(x_1,x_2,x_3).
\end{aligned}
$$

(2) 次の命題それぞれについて，真か偽かを判定し，その根拠を示せ。

- (a) 論理関数 $f$ が対称であるならば，$f$ の双対関数も対称である。
- (b) 対称な $n$ 変数論理関数の個数は全部で $2^{n+1}$ である。
- (c) $n$ が奇数のとき，対称かつ自己双対な $n$ 変数論理関数の個数は全部で $2^{(n+1)/2}$ である。

### 题目描述

若交换输入变量的任意排列都不改变布尔函数 $f$，称其为对称函数。定义对偶函数 $f^d(\boldsymbol x)=\overline{f(\bar{\boldsymbol x})}$；$f=f^d$ 时称自对偶。

1. 对以下函数给出真值表，并判断其对称性及自对偶性：

$$
\begin{aligned}
f_1&=\bar x_1\bar x_2\bar x_3,\\
f_2&=x_1\bar x_2\bar x_3,\\
f_3&=x_1\bar x_2\bar x_3\lor\bar x_1x_2\bar x_3\lor\bar x_1\bar x_2x_3,\\
f_4&=f_1\lor f_3.
\end{aligned}
$$

2. 判断并证明：(a) 对称函数的对偶函数也对称；(b) $n$ 变量对称布尔函数共有 $2^{n+1}$ 个；(c) 当 $n$ 为奇数时，对称且自对偶的 $n$ 变量布尔函数共有 $2^{(n+1)/2}$ 个。

## **Kai**

### (1)

| $x_1x_2x_3$ | $f_1$ | $f_2$ | $f_3$ | $f_4$ |
|---|---|---|---|---|
|000|1|0|0|1|
|001|0|0|1|1|
|010|0|0|1|1|
|011|0|0|0|0|
|100|0|1|1|1|
|101|0|0|0|0|
|110|0|0|0|0|
|111|0|0|0|0|

$f_1,f_3,f_4$ 只依赖输入中 $1$ 的个数，故对称；$f_2(1,0,0)\ne f_2(0,1,0)$，故不对称。

$f_4$ 对每对互补输入的输出相反，故自对偶；其余三个均存在互补输入输出同时为 $0$，故不自对偶。

### (2)

(a) **真。** 若 $P$ 为任意变量置换，

$$
f^d(P\boldsymbol x)=\overline{f(\overline{P\boldsymbol x})}
=\overline{f(P\bar{\boldsymbol x})}=\overline{f(\bar{\boldsymbol x})}=f^d(\boldsymbol x).
$$

(b) **真。** 对称函数由汉明重量 $k=0,1,\ldots,n$ 上的 $n+1$ 个输出值唯一决定，每个可独立取二值，总数为 $\boxed{2^{n+1}}$。

(c) **真。** 自对偶要求重量 $k$ 与 $n-k$ 上的输出互反。奇数 $n$ 时共有 $(n+1)/2$ 对、无自配对重量，因此总数为 $\boxed{2^{(n+1)/2}}$。
