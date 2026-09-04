---
sidebar_label: 2018年3月実施 基礎科目 問題3 情報基礎1
tags:
  - Tohoku-University
  - Electrical-Electronic.Digital-Logic.Boolean-Function-Minimization
  - Electrical-Electronic.Digital-Logic.Majority-Gate-Logic-Synthesis
---

# 東北大学 工学研究科 電気・情報系 2018年3月実施 基礎科目 問題3 情報基礎1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

変数 $x_1,\ldots,x_n\in\{0,1\}$ を引数とする $n$-変数論理関数 $f$ が、定数関数であるかもしくは正リテラル $x_1,\ldots,x_n$ のみを用いた積和論理式で表現できるとき、$f$ を正関数と呼ぶ。また、実数 $w_1,\ldots,w_n,\theta$ があって

$$
f(x_1,\ldots,x_n)=\begin{cases}1&(w_1x_1+\cdots+w_nx_n\ge\theta\text{ のとき})\\0&(\text{そうでないとき})\end{cases}
$$

が成り立つとき、$f$ をしきい値関数と呼ぶ。以下の問に答えよ。なお、$\wedge$ は論理積演算、$\vee$ は論理和演算を表す。

(1) 次の積和論理式を、リテラルの最も少ない等価な積和論理式に直せ。

(a) $x_1\vee(x_1\wedge x_2)$

(b) $x_1\vee(x_1\wedge x_2)\vee x_2\vee(x_2\wedge x_3)$

(c) $x_1\vee(x_1\wedge x_2\wedge x_3)\vee(x_2\wedge x_3)$

(2) しきい値関数ではない $2$ 変数論理関数が存在するか否か、根拠とともに示せ。

(3) $3$ 変数正関数は全部でいくつあるか、根拠とともに示せ。

(4) しきい値関数ではない $3$ 変数正関数が存在するか否か、根拠とともに示せ。

### 题目描述

$n$ 变量布尔函数若为常函数，或可仅用正文字 $x_1,\ldots,x_n$ 的与或式表示，称为正函数。若存在实数 $w_1,\ldots,w_n,\theta$，使

$$
f(x_1,\ldots,x_n)=\begin{cases}1,&\sum_iw_ix_i\ge\theta,\\0,&\text{其他},\end{cases}
$$

则称其为阈值函数。

1. 将下式化为文字数最少的等价与或式：
   - (a) $x_1\lor(x_1\land x_2)$；
   - (b) $x_1\lor(x_1\land x_2)\lor x_2\lor(x_2\land x_3)$；
   - (c) $x_1\lor(x_1\land x_2\land x_3)\lor(x_2\land x_3)$。
2. 是否存在不是阈值函数的二变量布尔函数？说明理由。
3. 三变量正函数共有多少个？说明理由。
4. 是否存在不是阈值函数的三变量正函数？说明理由。

## **Kai**

### (1)

由吸收律 $x\lor xy=x$，分别得

$$
\boxed{\text{(a) }x_1,\qquad\text{(b) }x_1\lor x_2,\qquad\text{(c) }x_1\lor(x_2\land x_3)}.
$$

分别需要 $1,2,3$ 个文字；每式中的变量均是必要变量，故不能再减少。

### (2)

存在，例如 $x_1\oplus x_2$。若它为阈值函数，则由 $f(0,0)=0$ 得 $\theta>0$；由 $f(1,0)=f(0,1)=1$ 得 $w_1,w_2\ge\theta$，从而 $w_1+w_2\ge2\theta>\theta$，与 $f(1,1)=0$ 矛盾。

### (3)、(4)

正函数可由其极小真值输入唯一确定；对应的正合取项互不包含。枚举三元素集合上的这些反链，可得下表（$i,j,k$ 互异）。

| 类型 | 个数 | 权重与阈值 |
|---|---:|---|
| $0$ | $1$ | $(0,0,0),\theta=1$ |
| $1$ | $1$ | $(0,0,0),\theta=0$ |
| $x_i$ | $3$ | $w_i=1$，其余 $0$，$\theta=1$ |
| $x_i\lor x_j$ | $3$ | $w_i=w_j=1,w_k=0,\theta=1$ |
| $x_ix_j$ | $3$ | $w_i=w_j=1,w_k=0,\theta=2$ |
| $x_1\lor x_2\lor x_3$ | $1$ | $(1,1,1),\theta=1$ |
| $x_1x_2x_3$ | $1$ | $(1,1,1),\theta=3$ |
| $x_i\lor x_jx_k$ | $3$ | $w_i=2,w_j=w_k=1,\theta=2$ |
| $x_i(x_j\lor x_k)$ | $3$ | $w_i=2,w_j=w_k=1,\theta=3$ |
| $x_1x_2\lor x_2x_3\lor x_3x_1$ | $1$ | $(1,1,1),\theta=2$ |

总计 $\boxed{20}$ 个。表中每类均给出了阈值表示，因此 $\boxed{\text{不存在非阈值的三变量正函数}}$。
