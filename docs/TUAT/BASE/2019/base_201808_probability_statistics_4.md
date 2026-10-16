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

1から12までの整数が一つずつ記された12個のボールが箱に入っている。無作為に1個を取り出し、その数字を記録して戻す試行を $n$ 回行う。(2)–(7) では導出過程も示せ。

(1) 記録した整数の積が3の倍数となる事象を A とする。A は、少なくとも1回は（ア）のいずれかのボールを取り出した場合である。（ア）に入る整数をすべて答えよ。

(2) A の余事象 $\bar A$ は、全試行で（イ）のいずれかを取り出した場合である。（イ）に入る整数をすべて答えよ。

(3) $P(\bar A)$ を求めよ。

(4) $P(\bar A)$ を用いて $P(A)$ を求めよ。

(5) 積が5の倍数となる事象を B とする。$P(\bar B)$ を用いて $P(B)$ を求めよ。

(6) A でも B でもない確率 $P(\bar A\cap\bar B)$ を求めよ。

(7) 積が15の倍数となる確率 $P(A\cap B)$ を、(4)–(6) の結果を用いて $n$ の式で表せ。

#### 题目描述

箱中有标着1至12的12个球，每次随机抽一个，记录后放回，重复 $n$ 次。A 表示所抽数字的乘积为3的倍数，B 表示乘积为5的倍数。

1. 列出至少抽到一次就能使 A 发生的所有球号（ア）。
2. 列出当每次都从中抽取时使 A 不发生的全部球号（イ）。
3. 求 $P(\bar A)$。
4. 利用补事件求 $P(A)$。
5. 利用补事件求 $P(B)$。
6. 求 $P(\bar A\cap\bar B)$。
7. 利用前述结果求乘积为15的倍数的概率 $P(A\cap B)$。第2至7问写出推导。

## **Kai**

### (1)–(2)

3が素数であるため、積が3の倍数になることと、少なくとも一つの因子が3の倍数であることは同値である。よって

$$
\boxed{(\text{ア})=3,6,9,12},\qquad
\boxed{(\text{イ})=1,2,4,5,7,8,10,11}.
$$

### (3)–(4)

各試行で3の倍数を避ける確率は $8/12=2/3$。復元抽出による独立性から、

$$
\boxed{P(\bar A)=\left(\frac23\right)^n,\qquad P(A)=1-\left(\frac23\right)^n}.
$$

### (5)

5の倍数は5と10の2個。したがって

$$
P(\bar B)=\left(\frac{10}{12}\right)^n,\qquad
\boxed{P(B)=1-\left(\frac56\right)^n}.
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
