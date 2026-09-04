---
sidebar_label: 2015年8月実施 基礎科目 問題3 情報基礎1
tags:
  - Tohoku-University
  - Electrical-Electronic.Digital-Logic
---

# 東北大学 工学研究科 電気・情報系 2015年8月実施 基礎科目 問題3 情報基礎1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

$x_1,x_2,\cdots,x_n\in\{0,1\}$ とし，$\bar{\phantom x}$ を否定演算とする。このとき $n$ 変数論理関数 $f(x_1,x_2,\cdots,x_n)$ に関して，
$$
f^*(x_1,x_2,\cdots,x_n)=\overline{f(\bar x_1,\bar x_2,\cdots,\bar x_n)}
$$
で定義される $f^*$ を論理関数 $f$ の双対関数という。また，$f^*(x_1,x_2,\cdots,x_n)=f(x_1,x_2,\cdots,x_n)$ が成り立つとき $f$ は自己双対であるといい，$f^*(x_1,x_2,\cdots,x_n)=\overline{f(x_1,x_2,\cdots,x_n)}$ が成り立つときには，$f$ は自己反双対であるという。双対関数に関して，以下の問に答えよ。

(1) $F(x,y)$ を $x=y$ のときに $0$，$x\ne y$ のときに $1$ となる $2$ 変数論理関数とする。このとき，$F(x,y)$ は自己反双対であることを示せ。

(2) $3$ 変数の論理関数 $M(x,y,z)$ は，$x,y,z$ のうち，$1$ の個数が $2$ 以上のときに $1$ となり，それ以外の場合には $0$ とする。このとき，$M(x,y,z)$ は自己双対であることを示せ。

(3) 自己双対である $2$ 変数論理関数をすべて挙げよ。

(4) $n$ 変数論理関数 $f_1,f_2$ が，自己反双対であるとき，$f_1\oplus f_2$ は，自己反双対であることを示せ。ただし，$\oplus$ は排他的論理和演算を表す。

### 题目描述

令 $x_i\in\{0,1\}$，$\bar x$ 表示非。$n$ 元逻辑函数 $f$ 的对偶定义为

$$
f^*(x_1,\ldots,x_n)=\overline{f(\bar x_1,\ldots,\bar x_n)}.
$$

若 $f^*=f$，称 $f$ 自对偶；若 $f^*=\bar f$，称其自反对偶。

1. 令 $F(x,y)=x\oplus y$，证明 $F$ 自反对偶。
2. $M(x,y,z)$ 在至少两个输入为 $1$ 时取 $1$，否则取 $0$。证明 $M$ 自对偶。
3. 列出全部二元自对偶逻辑函数。
4. 若 $f_1,f_2$ 均为 $n$ 元自反对偶函数，证明 $f_1\oplus f_2$ 也自反对偶。

## **Kai**

### (1)

同时反转两个输入不改变异或值，故

$$
F^*(x,y)=\overline{\bar x\oplus\bar y}=\overline{x\oplus y}=\bar F(x,y).
$$

### (2)

设三个输入中有 $k$ 个 $1$，取反后有 $3-k$ 个 $1$。$k\ge2$ 与 $3-k\ge2$ 恰有一个成立，故 $M(\bar x,\bar y,\bar z)=\bar M(x,y,z)$，即 $M^*=M$。

### (3)

自对偶要求 $f(11)=\overline{f(00)}$、$f(10)=\overline{f(01)}$，前两项可任取，共四个：

$$
\boxed{x,\quad y,\quad\bar x,\quad\bar y.}
$$

### (4)

自反对偶等价于 $f_i(\bar{\boldsymbol x})=f_i(\boldsymbol x)$。因此

$$
(f_1\oplus f_2)(\bar{\boldsymbol x})=f_1(\boldsymbol x)\oplus f_2(\boldsymbol x),
$$

所以 $f_1\oplus f_2$ 自反对偶。
