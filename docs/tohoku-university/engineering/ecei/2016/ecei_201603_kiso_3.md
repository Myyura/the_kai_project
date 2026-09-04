---
sidebar_label: 2016年3月実施 基礎科目 問題3 情報基礎1
tags:
  - Tohoku-University
  - Electrical-Electronic.Digital-Logic.Karnaugh-Map-Minimization
---

# 東北大学 工学研究科 電気・情報系 2016年3月実施 基礎科目 問題3 情報基礎1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

$x_1,x_2,\ldots,x_n\in\{0,1\}$ とする。$n$ 変数論理関数 $f(x_1,x_2,\ldots,x_n)$ を $n+1$ 個の実数 $(w_1,w_2,\ldots,w_n,\theta)$ に対して
$$
f(x_1,x_2,\ldots,x_n)=\begin{cases}1&\text{if }w_1x_1+w_2x_2+\cdots+w_nx_n\ge\theta\\0&\text{otherwise}\end{cases}
$$
と書けるとき，$f(x_1,x_2,\ldots,x_n)$ をしきい値関数という。以下の問に答えよ。なお $\land$ は論理積演算，$\lor$ は論理和演算，$\bar{\phantom x}$ を否定演算とする。

(1) $2$ 変数論理関数 $\operatorname{NAND}(x,y)=\overline{x\land y}$ がしきい値関数であることを示せ。

(2) $2$ 変数論理関数 $\operatorname{EXOR}(x,y)=(x\land\bar y)\lor(\bar x\land y)$ がしきい値関数でないことを示せ。

(3) 問 (2) で定義された $\operatorname{EXOR}(x,y)$ に対し，$\operatorname{EXOR}(x,y)=f(g(x,y),h(x,y))$ となる $3$ つの $2$ 変数しきい値関数 $f,g,h$ が存在するか判定し，その根拠を示せ。

(4) $w_1=7,w_2=-3,w_3=-2,w_4=-1,\theta=0$ である $4$ 変数しきい値関数のカルノー図を示し，その最簡積和形を書け。

### 题目描述

若存在实数 $w_1,\ldots,w_n,\theta$ 使

$$
f(x_1,\ldots,x_n)=\begin{cases}1,&\sum_iw_ix_i\ge\theta,\\0,&\text{其他},\end{cases}\qquad x_i\in\{0,1\},
$$

则称 $f$ 为阈值函数。

1. 证明 $\operatorname{NAND}(x,y)=\overline{xy}$ 为阈值函数。
2. 证明 $\operatorname{EXOR}(x,y)=x\bar y+\bar xy$ 不是阈值函数。
3. 判断是否存在三个二元阈值函数 $f,g,h$，使 $\operatorname{EXOR}(x,y)=f(g(x,y),h(x,y))$；说明理由。
4. 对 $w_1=7,w_2=-3,w_3=-2,w_4=-1,\theta=0$，画出四元阈值函数的卡诺图，并求最简与或式。

## **Kai**

### (1)

取 $w_x=w_y=-1,\theta=-1$，则 $-x-y\ge-1$ 恰好在 $(x,y)\ne(1,1)$ 时成立。

### (2)

若异或为阈值函数，则从输入 $00,10,01,11$ 分别得到

$$
0<\theta,\quad w_x\ge\theta,\quad w_y\ge\theta,\quad w_x+w_y<\theta.
$$

但前面三个条件推出 $w_x+w_y\ge2\theta>\theta$，矛盾。

### (3)

存在。取 $g(x,y)=x\lor y$、$h(x,y)=\operatorname{NAND}(x,y)$、$f(u,v)=u\land v$，则

$$
f(g,h)=(x+y)\overline{xy}=x\bar y+\bar xy.
$$

三者均为阈值函数：OR、AND 的权重均可取 $(1,1)$，阈值分别为 $1,2$；NAND 见 (1)。

### (4)

按格雷码排列，卡诺图为：

| $x_1x_2\backslash x_3x_4$ | 00 | 01 | 11 | 10 |
|---|---:|---:|---:|---:|
| 00 | 1 | 0 | 0 | 0 |
| 01 | 0 | 0 | 0 | 0 |
| 11 | 1 | 1 | 1 | 1 |
| 10 | 1 | 1 | 1 | 1 |

其中 $x_1=1$ 时加权和至少为 $7-3-2-1=1>0$；$x_1=0$ 时，须有 $x_2=x_3=x_4=0$。故

$$
\boxed{f=x_1+\bar x_2\bar x_3\bar x_4.}
$$
