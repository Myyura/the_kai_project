---
sidebar_label: "2025年8月実施 問題V（情報工学）"
tags:
  - Chuo-University
  - Discrete-Mathematics.Mathematical-Logic.Propositional-Logic
---

# 中央大学 理工学研究科 情報工学専攻 2025年8月実施 一般入試 問題V

## **Author**

祭音Myyura (Based on [中央大学の公式解答例](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf) refined with GPT 6 Astra)

## **Description**

問題Iは必答。問題II〜Vのうち、2問を選んで解答すること。

**問題V**

多値の論理値をとる何らかの原子論理式（atomic formulas）の集合および否定（negation）$\lnot$，論理積（conjunction）$\land$，論理和（disjunction）$\lor$ の三演算から成るブール論理系において，あるものが白馬（white horse）であるときそれは馬であることを，構文論的に（syntactically），すなわち根拠を添えつつ論理式を逐次に書き換える様式にて示せ。その際に，否定と選言から定義される含意（implication）$\to$ および論理的含意（logical implication）$\Rightarrow$ を用いてもよい。

### 题目描述

问题 I 必答。从问题 II～V 中选择两题作答。

**问题 V**

考虑一个布尔逻辑系统，它由一组取多值逻辑值的原子公式，以及否定 $\lnot$、合取（逻辑与）$\land$、析取（逻辑或）$\lor$ 三种运算组成。请从语法层面证明“某物是白马时，它就是马”，即附上依据，逐步改写逻辑公式。可以使用由否定与析取定义的蕴含 $\to$，以及逻辑蕴含 $\Rightarrow$。

## **Kai**

任意に固定した対象について、原子論理式 $h,w,p$ をそれぞれ「その対象は馬である」「その対象は白色である」「その対象は白馬である」とする。「白馬」の意味を

$$
p\ \Leftrightarrow\ h\land w
$$

で表す。ここで $\Leftrightarrow$ は論理的同値を表す。

論理積について、次のように根拠を添えて書き換えられる。

$$
\begin{aligned}
p\land h
&\Leftrightarrow(h\land w)\land h &&\text{（白馬の定義）}\\
&\Leftrightarrow(h\land h)\land w &&\text{（結合律・交換律）}\\
&\Leftrightarrow h\land w &&\text{（冪等律）}\\
&\Leftrightarrow p &&\text{（白馬の定義）}.
\end{aligned}
$$

従って、ブール代数の順序を $a\le b\iff a\land b=a$ で定めると、$p\le h$。これは $p$ から $h$ が従うこと、すなわち

$$
\boxed{p\Rightarrow h}
$$

を意味する。

含意 $a\to b:=\lnot a\lor b$ を使って同じことを確かめる場合、最大元を $\top$ と記すと

$$
\begin{aligned}
p\to h
&\Leftrightarrow\lnot p\lor h &&\text{（含意の定義）}\\
&\Leftrightarrow\lnot(h\land w)\lor h &&\text{（白馬の定義）}\\
&\Leftrightarrow(\lnot h\lor\lnot w)\lor h &&\text{（ド・モルガンの法則）}\\
&\Leftrightarrow(\lnot h\lor h)\lor\lnot w &&\text{（結合律・交換律）}\\
&\Leftrightarrow\top\lor\lnot w &&\text{（補元律）}\\
&\Leftrightarrow\top &&\text{（最大元の性質）}.
\end{aligned}
$$

ここでは論理値を二値に限定した真理値表を用いず、問題文のブール論理系の代数法則だけを用いている。特に $p,h,w$ を意味的に無関係な原子式として扱うのではなく、白馬を「馬であり、かつ白いもの」とする関係が推論の前提である。

## **Reference**

- [中央大学公式問題：2026年度 情報工学専攻、冊内 pp.3,8（PDF 第4,9頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-01.pdf#page=9)
- [中央大学公式解答例・出題の意図：問題V、冊内 p.9（PDF 第10頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf#page=10)
