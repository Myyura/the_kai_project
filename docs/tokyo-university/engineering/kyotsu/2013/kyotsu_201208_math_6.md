---
sidebar_label: '2012年8月実施 数学 第6問'
tags:
  - Tokyo-University
  - Probability-Statistics.Stochastic-Processes.Markov-Chain
---

# 東京大学 工学系研究科 2012年8月実施 数学 第6問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

赤玉と白玉がそれぞれ $k$ 個ある（整数 $k\ge2$）。袋 A には二個、袋 B には残りの玉が入っている。
A が赤二個、赤白各一個、白二個の場合を、それぞれ $S_0,S_1,S_2$ とする。
一回の操作は、A から無作為に一個を B に移し、その後の B から無作為に一個を A に戻すことである。

I. 初期状態が $S_1$ の場合、一回後の各状態の確率を求めよ。

II. 初期状態が $S_0$ の場合、二回後の各状態の確率を求めよ。

III. $n$ 回後の確率を用いて $n+1$ 回後の各状態の確率を表せ。

IV. 十分多数回の操作後の各状態の確率を求めよ。

#### 题目描述

有红、白球各 $k$ 个（整数 $k\ge2$），袋 A 中装 2 个球，袋 B 中装余下的球。
A 中两红、一红一白、两白分别称为状态 $S_0,S_1,S_2$。
一次操作为：从 A 中等概率取一个球放入 B，再从此时的 B 中等概率取一个球放回 A。

I. 若初态为 $S_1$，求一次操作后的各状态概率。

II. 若初态为 $S_0$，求两次操作后的各状态概率。

III. 用第 $n$ 次操作后的各状态概率表示第 $n+1$ 次的概率。

IV. 求充分多次操作后的各状态概率。

## **Kai**

### I、III

$d=2k-1$ とおく。二回目の抽出時に袋 B には $d$ 個の玉がある。最初に取り出す色で場合分けすると、列ベクトルに作用する遷移行列は

$$
\boxed{\boldsymbol p_{n+1}=M\boldsymbol p_n,\qquad
M=\frac1{2d}\begin{pmatrix}
2(k-1)&k-1&0\\2k&2k&2k\\0&k-1&2(k-1)
\end{pmatrix}}.
$$

例えば $S_1$ から $S_0$ へ移るには、先に白玉を出し、次に赤玉を戻す必要があり、確率は $(1/2)(k-1)/d$ である。
従って I の答えは

$$
\boxed{\left(\frac{k-1}{2d},\frac k d,\frac{k-1}{2d}\right)}.
$$

### II

$\boldsymbol p_0=(1,0,0)^T$ を $M^2\boldsymbol p_0$ に代入すると、

$$
\boxed{\left(\frac{(k-1)(3k-2)}{2d^2},\frac k d,
\frac{k(k-1)}{2d^2}\right)}.
$$

### IV

$M$ の固有値は $1,(k-1)/d,0$ で、後二者の絶対値は $1$ より小さい。$M\boldsymbol\pi=\boldsymbol\pi$ と成分和 $1$ の条件から、

$$
\boxed{\lim_{n\to\infty}\boldsymbol p_n
=\left(\frac{k-1}{2d},\frac k d,\frac{k-1}{2d}\right)^T}.
$$

