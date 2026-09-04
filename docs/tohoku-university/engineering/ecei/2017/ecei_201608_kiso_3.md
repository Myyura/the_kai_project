---
sidebar_label: 2016年8月実施 基礎科目 問題3 情報基礎1
tags:
  - Tohoku-University
  - Electrical-Electronic.Digital-Logic.Half-and-Full-Adders
  - Electrical-Electronic.Digital-Logic.Carry-Lookahead-Adder
---

# 東北大学 工学研究科 電気・情報系 2016年8月実施 基礎科目 問題3 情報基礎1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

$a_1,a_2,\ldots,a_n,b_1,b_2,\ldots,b_n,s_1,s_2,\ldots,s_{n+1}\in\{0,1\}$ に対して，$n$ 桁 $2$ 進数の加算を以下の式で表現する。
$$
[s_{n+1}s_ns_{n-1}\ldots s_1]=[a_na_{n-1}\ldots a_1]+[b_nb_{n-1}\ldots b_1]
$$
例えば，$[110]=[11]+[11]$ である。論理積，論理和，否定演算子をそれぞれ $\land,\lor,\bar{\phantom x}$ とする。以下の問に答えよ。

(1) $s_1$ の最簡積和形を書け。

(2) $s_2$ の最簡積和形を書け。

(3) $i=1,2,\ldots,n$ に対して，$a_i,b_i$ と下位ビット加算からの桁上がりを加えた際の桁上がりを $c_{i+1}\in\{0,1\}$ とし，$c_1=0$ とする。$c_{i+1}$ を $a_i,b_i,c_i$ を用いた論理式で書け。

(4) $s_{n+1}$ を $a_1,a_2,\ldots,a_n,b_1,b_2,\ldots,b_n$ を用いた論理式で書け。

### 题目描述

所有位 $a_i,b_i,s_i\in\{0,1\}$。两 $n$ 位二进制数相加满足

$$
[s_{n+1}s_n\cdots s_1]=[a_n\cdots a_1]+[b_n\cdots b_1],
$$

下标 $1$ 对应最低位。用 $\land,\lor,\bar{\phantom x}$ 表示与、或、非。

1. 写出 $s_1$ 的最简与或式。
2. 写出 $s_2$ 的最简与或式。
3. 记第 $i$ 位的输入进位为 $c_i$，$c_1=0$。用 $a_i,b_i,c_i$ 表示输出进位 $c_{i+1}$。
4. 仅用 $a_1,\ldots,a_n,b_1,\ldots,b_n$ 写出 $s_{n+1}$。

## **Kai**

### (1)

$$
\boxed{s_1=a_1\bar b_1+\bar a_1b_1.}
$$

### (2)

最低位的进位为 $c_2=a_1b_1$，所以 $s_2=a_2\oplus b_2\oplus(a_1b_1)$。展开并合并得到最简与或式

$$
\boxed{\begin{aligned}
s_2={}&\bar a_1\bar a_2b_2+\bar b_1\bar a_2b_2
+\bar a_1a_2\bar b_2+\bar b_1a_2\bar b_2\\
&+a_1b_1\bar a_2\bar b_2+a_1b_1a_2b_2.
\end{aligned}}
$$

### (3)

三个输入中至少两个为 $1$ 时产生进位，故

$$
\boxed{c_{i+1}=a_ib_i+a_ic_i+b_ic_i.}
$$

### (4)

令 $G_i=a_ib_i$、$P_i=a_i\lor b_i$，则 $c_{i+1}=G_i\lor(P_i\land c_i)$。逐层展开并用 $c_1=0$：

$$
\boxed{s_{n+1}=\bigvee_{k=1}^n\left[(a_k\land b_k)\land\bigwedge_{j=k+1}^n(a_j\lor b_j)\right].}
$$

空的合取按 $1$ 处理，最后一项就是 $a_nb_n$。
