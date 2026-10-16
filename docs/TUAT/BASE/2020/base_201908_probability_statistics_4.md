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

1から20までの整数が一つずつ記された20枚のカードが箱に入っている。無作為に1枚を取り出し、数字を記録して箱に戻す試行を繰り返す。記録した数が素数なら $x$ 軸上の動点 A を正方向へ1目盛り、素数でなければ負方向へ1目盛り動かす。初め A は原点にある。

(1) 1回の試行で正方向に移動する確率を求めよ。

(2) 6回引いたとき、A が原点に戻る確率を求めよ。

(3) 6回引いたとき、2回目、4回目、6回目のすべてで A が原点に戻る確率を求めよ。

(4) 6回引いたとき、A が初めて原点に戻る確率を求めよ。

![原点から始まる動点A](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/TUAT/BASE/2020/base_201908_probability_axis.png)

#### 题目描述

箱中有标着1至20的20张卡片。每次随机抽取一张，记录数字后放回。若为素数，数轴上的动点 A 向正方向走一格，否则向负方向走一格；初始位于原点。

1. 求一次试验向正方向移动的概率。
2. 求第6次抽取后回到原点的概率。
3. 求第2、4、6次抽取后都在原点的概率。
4. 求首次回到原点恰在第6次的概率。

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
+++---,\quad++-+--,\quad---+++,\quad--+-++
$$

の4通りである。すべて正負3回ずつなので、

$$
\boxed{4p^3q^3=\frac{864}{15625}}.
$$

## **Reference**

- [大学公式問題（5ページ（公式PDFの保存版））](https://web.archive.org/web/20210101id_/https://www.tuat.ac.jp/documents/base/jp/examination/2019-1.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E7%94%9F%E7%89%A9%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%BF%9C%E7%94%A8%E7%A7%91%E5%AD%A6%E5%BA%9C/2019%E5%B9%B4%E5%AE%9F%E6%96%BD.html)
