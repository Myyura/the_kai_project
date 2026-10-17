---
sidebar_label: "2018年8月実施 4 確率及び統計"
tags:
  - Tokyo-University-of-Agriculture-and-Technology
  - Discrete-Mathematics.Combinatorics.Inclusion-Exclusion-Principle
---

# 東京農工大学 生物システム応用科学府 2018年8月実施 4 確率及び統計

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E7%94%9F%E7%89%A9%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%BF%9C%E7%94%A8%E7%A7%91%E5%AD%A6%E5%BA%9C/2018%E5%B9%B4%E5%AE%9F%E6%96%BD.html) refined with GPT 6 Astra)

## **Description**

1 から 12 までの整数が 1 つずつ記された 12 個のボールが箱の中に入っている。この箱の中から 1 個のボールを無作為に取り出し，その数字を記録してから再び箱の中に戻す試行を $n$ 回行うとき，以下の問いに答えよ。(2)〜(7)は答えを導く過程も示せ。

(1) $n$ 回記録した整数の積が 3 の倍数となる事象を $A$ とする。事象 $A$ は，$n$ 回中少なくとも 1 回は【ア】のいずれかのボールを取り出した場合である。文章中の空欄（ア）に入る適切な整数を全て答えよ。

(2) 事象 $A$ の余事象 $\overline{A}$ は，$n$ 回中の全てで【イ】のいずれかのボールを取り出した場合である。文章中の空欄（イ）に入る適切な整数を全て答えよ。

(3) 余事象 $\overline{A}$ の起こる確率 $P(\overline{A})$ を求めよ。

(4) $P(\overline{A})$ を用いて事象 $A$ の起こる確率 $P(A)$ を求めよ。

(5) $n$ 回記録した整数の積が 5 の倍数となる事象を $B$ とする。余事象 $\overline{B}$ の起こる確率 $P(\overline{B})$ を用いて，事象 $B$ の起こる確率 $P(B)$ を求めよ。

(6) $n$ 回記録した整数の積が，事象 $A$ でなく，かつ，事象 $B$ でない確率 $P(\overline{A}\cap\overline{B})$ を求めよ。

(7) $n$ 回記録した整数の積が 15 の倍数となる確率は，事象 $A$ かつ事象 $B$ が起こる確率であり，$P(A\cap B)$ と表される。$P(A\cap B)$ を(4)，(5)，(6)の結果を用いて示し，$n$ を用いて表せ。

#### 题目描述

箱内有 12 个球，分别标有 1 至 12 的整数。每次从箱中随机取出一个球，记录其数字后放回箱中。将这一试验重复 $n$ 次，回答以下问题。第(2)至(7)问须写出推导过程。

(1) 设事件 $A$ 为记录的 $n$ 个整数之积是 3 的倍数。事件 $A$ 表示在 $n$ 次抽取中，至少有一次取出标有【ア】中某个整数的球。写出空栏（ア）应填入的所有整数。

(2) 事件 $A$ 的补事件 $\overline{A}$ 表示在 $n$ 次抽取中，每一次均取出标有【イ】中某个整数的球。写出空栏（イ）应填入的所有整数。

(3) 求补事件 $\overline{A}$ 发生的概率 $P(\overline{A})$。

(4) 利用 $P(\overline{A})$，求事件 $A$ 发生的概率 $P(A)$。

(5) 设事件 $B$ 为记录的 $n$ 个整数之积是 5 的倍数。利用补事件 $\overline{B}$ 发生的概率 $P(\overline{B})$，求事件 $B$ 发生的概率 $P(B)$。

(6) 求记录的 $n$ 个整数之积既不满足事件 $A$、也不满足事件 $B$ 的概率 $P(\overline{A}\cap\overline{B})$。

(7) 记录的 $n$ 个整数之积是 15 的倍数，等价于事件 $A$ 和事件 $B$ 同时发生，其概率记为 $P(A\cap B)$。利用第(4)、(5)、(6)问的结果给出 $P(A\cap B)$，并用 $n$ 表示。

## **Kai**

### (1)–(2)

3が素数であるため、積が3の倍数になることと、少なくとも一つの因子が3の倍数であることは同値である。よって

$$
\begin{gathered}
\boxed{(\text{ア})=3,6,9,12},\\
\boxed{(\text{イ})=1,2,4,5,7,8,10,11}.
\end{gathered}
$$

### (3)–(4)

各試行で3の倍数を避ける確率は $8/12=2/3$。復元抽出による独立性から、

$$
\boxed{\begin{gathered}
P(\bar A)=\left(\frac23\right)^n,\\
P(A)=1-\left(\frac23\right)^n
\end{gathered}}.
$$

### (5)

5の倍数は5と10の2個。したがって

$$
\begin{gathered}
P(\bar B)=\left(\frac{10}{12}\right)^n,\\
\boxed{P(B)=1-\left(\frac56\right)^n}.
\end{gathered}
$$

### (6)

3の倍数でも5の倍数でもない整数は $1,2,4,7,8,11$ の6個なので、

$$
\boxed{P(\bar A\cap\bar B)=\left(\frac12\right)^n}.
$$

### (7)

3と5は互いに素である。包除原理より、

$$
\begin{aligned}
P(A\cap B)&=1-P(\bar A\cup\bar B)\\
&=1-P(\bar A)-P(\bar B)+P(\bar A\cap\bar B)\\
&=\boxed{1-\left(\frac23\right)^n-\left(\frac56\right)^n+\left(\frac12\right)^n}.
\end{aligned}
$$

## **Reference**

- [大学公式問題（5ページ（公式PDFの保存版））](https://web.archive.org/web/20210101id_/https://www.tuat.ac.jp/documents/base/jp/examination/2018-1.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E7%94%9F%E7%89%A9%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%BF%9C%E7%94%A8%E7%A7%91%E5%AD%A6%E5%BA%9C/2018%E5%B9%B4%E5%AE%9F%E6%96%BD.html)
