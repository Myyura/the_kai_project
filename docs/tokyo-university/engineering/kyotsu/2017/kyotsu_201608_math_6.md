---
sidebar_label: '2016年8月実施 数学 第6問'
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Basics.Bayes-Theorem
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Bayesian-Statistics.Independent-Replication-and-Posterior-Odds
---

# 東京大学 工学系研究科 2016年8月実施 数学 第6問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

工場は製品Iと製品IIを製造する。製品Iには部品Aが必要で、製品IIには部品Aと部品Bの両方が必要である。A、Bが規格内である確率はそれぞれ $a,b$ で、品質は互いに独立である。部品の受入検査は行わない。

![部品と製品の対応関係](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2017/tokyo-kyotsu-201608-products.svg)

出荷前に製品検査を行う。規格内製品が1回の検査に合格する確率は $x$、規格外製品が合格する確率は $y$ である。製品の実際の品質を条件としたとき、各回の検査は独立である。

I. 製品Iを無作為に1個選び、1回検査する。Aが規格内なら製品Iが規格内となる確率は $c$、Aが規格外なら製品Iも必ず規格外となる。

1. 製品Iが検査に合格する確率を求めよ。
2. 検査に合格した製品Iが実際に規格内である条件付き確率を求めよ。

II. 製品IIを無作為に1個選び、$n$ 回検査する。A、Bがともに規格内なら製品IIが規格内となる確率は $c$、一方だけが規格内ならその確率は $d$、両方とも規格外なら製品IIも必ず規格外となる。

1. 製品IIが実際に規格内である確率を求めよ。
2. $n$ 回の検査にすべて合格した製品IIが、実際に規格内である条件付き確率を求めよ。

#### 题目描述

工厂生产产品 I 和产品 II：产品 I 需要零件 A，产品 II 同时需要零件 A、B。零件 A、B 合格的概率分别为 $a,b$，其质量相互独立，入厂时不检验零件。


产品出厂前进行质量检验。合格产品通过一次检验的概率为 $x$，不合格产品通过一次检验的概率为 $y$；对给定产品的真实质量，各次检验相互独立。

I. 随机选取一件产品 I，检验一次。若 A 合格，产品 I 合格的概率为 $c$；若 A 不合格，产品 I 必不合格。

1. 求产品 I 通过检验的概率。
2. 已知该产品通过检验，求其实际合格的概率。

II. 随机选取一件产品 II，检验 $n$ 次。若 A、B 都合格，产品 II 合格的概率为 $c$；若只有一种零件合格，该概率为 $d$；若两种零件都不合格，产品 II 必不合格。

1. 求产品 II 实际合格的概率。
2. 已知该产品连续 $n$ 次均通过检验，求其实际合格的概率。

## **Kai**

### I.1

事象 $G$ を「製品が実際に規格内」、$T$ を「検査に合格」とする。全確率の公式より $P(G)=ac$ なので、

$$
\boxed{P(T)=acx+(1-ac)y.}
$$

### I.2

ベイズの定理から、

$$
\boxed{P(G\mid T)=\frac{acx}{acx+(1-ac)y}.}
$$

### II.1

A、Bがともに規格内である確率は $ab$、一方だけが規格内である確率は $a(1-b)+(1-a)b$。したがって製品IIが規格内である確率は

$$
\boxed{q=abc+d\{a(1-b)+(1-a)b\}=abc+d(a+b-2ab).}
$$

### II.2

事象 $T_n$ を「$n$ 回の検査にすべて合格」とする。実際の品質を条件とすれば各検査は独立なので、

$$
P(T_n\mid G)=x^n,\qquad P(T_n\mid G^c)=y^n.
$$

再びベイズの定理を用いると、

$$
\boxed{P(G\mid T_n)=\frac{qx^n}{qx^n+(1-q)y^n},
\qquad q=abc+d(a+b-2ab).}
$$

上記の条件付き確率は、いずれも分母が正である場合に定義される。
