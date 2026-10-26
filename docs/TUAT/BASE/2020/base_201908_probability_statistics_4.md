---
sidebar_label: "2019年8月実施 4 確率及び統計"
tags:
  - Tokyo-University-of-Agriculture-and-Technology
  - Probability-Statistics.Stochastic-Processes.First-Return-Time-of-One-Dimensional-Random-Walk
---

# 東京農工大学 生物システム応用科学府 2019年8月実施 4 確率及び統計

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E7%94%9F%E7%89%A9%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%BF%9C%E7%94%A8%E7%A7%91%E5%AD%A6%E5%BA%9C/2019%E5%B9%B4%E5%AE%9F%E6%96%BD.html) refined with GPT 6 Astra)

## **Description**

1 から 20 までの整数が 1 つずつ記された 20 枚のカードが箱の中に入っている。この箱の中から 1 枚のカードを無作為に取り出し，その数字を記録してから再び箱の中に戻す試行を $n$ 回行う。このとき，記録した数字が素数の場合，図に示す $x$ 軸上を移動する動点 $A$ が正の向きに 1 目盛りだけ進み，記録した数字が素数でない場合，動点 $A$ は $x$ 軸上を負の向きに 1 目盛りだけ進むものとする。はじめ，動点 $A$ は原点（$x=0$）に位置しているものとして，以下の問いに答えよ。

![動点Aとx軸](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/TUAT/BASE/2020/base_201908_probability_statistics_4_figure.png)

(1) カードを 1 回引いたとき，動点 $A$ が $x$ 軸上を正の向きに移動する確率を求めよ。

(2) カードを 6 回引いたとき，動点 $A$ が原点に戻る確率を求めよ。

(3) カードを 6 回引いたとき，動点 $A$ が 2 回目に原点に戻り，かつ，4 回目に原点に戻り，かつ 6 回目に原点に戻る確率を求めよ。

(4) カードを 6 回引いたとき，動点 $A$ が初めて原点に戻る確率を求めよ。

### 题目描述

箱内有 20 张卡片，分别标有 1 至 20 的整数。每次从箱中随机抽取一张卡片，记录其数字后放回箱中。将这一试验重复 $n$ 次。如果记录的数字为素数，则图中沿 $x$ 轴运动的动点 $A$ 向正方向移动一个刻度；如果记录的数字不是素数，则动点 $A$ 沿 $x$ 轴向负方向移动一个刻度。初始时动点 $A$ 位于原点（$x=0$）。回答以下问题。

(1) 抽取一次卡片时，求动点 $A$ 沿 $x$ 轴向正方向移动的概率。

(2) 抽取六次卡片时，求动点 $A$ 回到原点的概率。

(3) 抽取六次卡片时，求动点 $A$ 在第二次、第四次以及第六次均回到原点的概率。

(4) 抽取六次卡片时，求动点 $A$ 首次回到原点的概率。

## **Kai**

### (1)

20以下の素数は $2,3,5,7,11,13,17,19$ の8個。よって正方向の確率は $\boxed{p=8/20=2/5}$、負方向は $q=3/5$。

### (2)

6回後に原点へ戻るには、正負方向へそれぞれ3回動けばよい。

$$
\boxed{\binom63p^3q^3=20\left(\frac25\right)^3\left(\frac35\right)^3=\frac{864}{3125}}.
$$

### (3)

各2回の組で正負が1回ずつ生じればよい。三つの組は独立なので、

$$
\boxed{(2pq)^3=\left(\frac{12}{25}\right)^3=\frac{1728}{15625}}.
$$

### (4)

途中で原点に戻らず、6回目で戻る列は

$$
\begin{gathered}
+++---,\\
++-+--,\\
---+++,\\
--+-++
\end{gathered}
$$

の4通りである。すべて正負3回ずつなので、

$$
\boxed{4p^3q^3=\frac{864}{15625}}.
$$

## **Reference**

- [大学公式問題（5ページ（公式PDFの保存版））](https://web.archive.org/web/20210101id_/https://www.tuat.ac.jp/documents/base/jp/examination/2019-1.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E7%94%9F%E7%89%A9%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%BF%9C%E7%94%A8%E7%A7%91%E5%AD%A6%E5%BA%9C/2019%E5%B9%B4%E5%AE%9F%E6%96%BD.html)
