---
sidebar_label: 2014年8月実施 基礎科目 問題3 情報基礎1
tags:
  - Tohoku-University
  - Electrical-Electronic.Digital-Logic.Boolean-Function-Minimization
---

# 東北大学 工学研究科 電気・情報系 2014年8月実施 基礎科目 問題3 情報基礎1

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

$\land$ は論理積演算，$\lor$ は論理和演算，$\oplus$ は排他的論理和演算，$\overline{\phantom{x}}$ は否定演算を表すとする。$x_1,x_2,\ldots,x_n,y\in\{0,1\}$ とする。$f(x_1,x_2,\ldots,x_n)=\overline{f(\bar x_1,\bar x_2,\ldots,\bar x_n)}$ であるとき，論理関数 $f$ は自己双対関数であるという。以下の問に答えよ。

(1) $(\bar x_1\land\bar x_2\land x_3)\lor(\bar x_1\land x_2)\lor(x_1\land x_2\land x_3)$ が自己双対関数であることを示せ。

(2) 論理関数 $f_0(x_1,x_2,\ldots,x_n)$ を考える。次の命題それぞれについて，真か偽かを判定せよ。ただし，判定の根拠となる証明も与えよ。

- (a) $(y\land f_0(x_1,x_2,\ldots,x_n))\lor(\bar y\land\overline{f_0(\bar x_1,\bar x_2,\ldots,\bar x_n)})$ は自己双対関数である。
- (b) $f_0$ が自己双対関数ならば，$f_0(x_1\oplus y,x_2\oplus y,\ldots,x_n\oplus y)=f_0(x_1,x_2,\ldots,x_n)\oplus y$ である。

(3) 論理関数 $f_1$ と $f_2$ が自己双対関数であるとき，$f_1\oplus f_2$ は自己双対関数ではないことを証明せよ。

(4) $n$ 変数自己双対関数の個数は全部で $2^{2^{n-1}}$ であることを証明せよ。

### 题目描述

记 $\land,\lor,\oplus,\bar{\phantom{x}}$ 分别为与、或、异或、非。布尔函数 $f$ 自对偶的定义为 $f(\boldsymbol x)=\overline{f(\bar{\boldsymbol x})}$。

1. 证明 $(\bar x_1\land\bar x_2\land x_3)\lor(\bar x_1\land x_2)\lor(x_1\land x_2\land x_3)$ 自对偶。
2. 对任意布尔函数 $f_0$，判断下列命题并证明：(a) $h(\boldsymbol x,y)=[y\land f_0(\boldsymbol x)]\lor[\bar y\land\overline{f_0(\bar{\boldsymbol x})}]$ 自对偶；(b) 若 $f_0$ 自对偶，则 $f_0(x_1\oplus y,\ldots,x_n\oplus y)=f_0(\boldsymbol x)\oplus y$。
3. 若 $f_1,f_2$ 均自对偶，证明 $f_1\oplus f_2$ 不自对偶。
4. 证明 $n$ 变量自对偶布尔函数共有 $2^{2^{n-1}}$ 个。

## **Kai**

### (1)

原函数化为

$$
f=\bar x_1x_2\lor\bar x_1x_3\lor x_2x_3,
$$

即 $\bar x_1,x_2,x_3$ 的多数函数。将所有原变量取反时，这三个输入均取反，多数值也取反，故 $f$ 自对偶。

### (2)

(a) **真。** $y=1$ 时 $h(\boldsymbol x,1)=f_0(\boldsymbol x)$，而 $h(\bar{\boldsymbol x},0)=\overline{f_0(\boldsymbol x)}$；$y=0$ 同理。

(b) **真。** $y=0$ 时恒等；$y=1$ 时，左边为 $f_0(\bar{\boldsymbol x})=\overline{f_0(\boldsymbol x)}$，等于右边。

### (3)

令 $h=f_1\oplus f_2$，则

$$
h(\bar{\boldsymbol x})=\overline{f_1(\boldsymbol x)}\oplus\overline{f_2(\boldsymbol x)}=h(\boldsymbol x).
$$

它不可能同时等于 $\overline{h(\boldsymbol x)}$，故不自对偶。

### (4)

$2^n$ 个输入分成 $2^{n-1}$ 对 $\{\boldsymbol x,\bar{\boldsymbol x}\}$。每对的一个输出可任取 $0$ 或 $1$，另一个必须取反。各对独立，故总数为 $\boxed{2^{2^{n-1}}}$。
