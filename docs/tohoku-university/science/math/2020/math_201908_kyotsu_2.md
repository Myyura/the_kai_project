---
sidebar_label: "2019年8月実施 共通問題 [2]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Open-and-Closed-Sets
  - Mathematics.Topology.Hausdorff-Space
  - Mathematics.Topology.Compactness-and-Connectedness
---

# 東北大学 理学研究科 数学専攻 2019年8月実施 共通問題 \[2\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#33b2ab11-e506-42b7-ab76-4b6ea5325fa7) refined with GPT 6 Astra)

## **Description**

問題は $4$ 題ある。全問に解答すること。$\mathbb R$ は実数全体のなす集合を表す。

$I$ と $J$ をそれぞれ $\mathbb R$ の閉区間 $[-1,1]$ と開区間 $(-1,1)$ とする。$I$ の部分集合からなる集合 $T$ を次のように定める。

$$
T=\{U\subset I\mid 0\notin U\}\cup\{U\subset I\mid J\subset U\}.
$$

以下の問いに答えよ。

(1) $T$ は $I$ の位相であることを示せ。

(2) 位相空間 $(I,T)$ はハウスドルフ空間でないことを示せ。

(3) 位相空間 $(I,T)$ はコンパクトであることを示せ。

### 题目描述

试卷共 $4$ 道题，全部作答。$\mathbb R$ 表示实数集。

令 $I$、$J$ 分别为 $\mathbb R$ 中的闭区间 $[-1,1]$ 和开区间 $(-1,1)$。定义由 $I$ 的子集组成的集合族

$$
T=\{U\subset I\mid 0\notin U\}\cup\{U\subset I\mid J\subset U\}.
$$

回答下列问题。

(1) 证明 $T$ 是 $I$ 上的拓扑。

(2) 证明拓扑空间 $(I,T)$ 不是豪斯多夫空间。

(3) 证明拓扑空间 $(I,T)$ 是紧致的。

## **Kai**

### (1)

$\varnothing\in T$、$I\in T$ は明らかである。$T$ の元の任意の和が $0$ を含まなければ、その和は $T$ に属する。$0$ を含むなら、和を構成する少なくとも一つの集合が $0$ を含むので、その集合、従って和全体が $J$ を含み、やはり $T$ に属する。

有限個の共通部分についても、$0$ を含まなければ $T$ に属する。$0$ を含むなら構成する全ての集合が $J$ を含むので、その共通部分も $J$ を含み、$T$ に属する。従って $T$ は位相である。

### (2)

ハウスドルフではない。$0$ の任意の開近傍は $J$ を含むので、特に $1/2$ を含む。そのため $0$ と $1/2$ の開近傍は必ず交わり、この二点を分離できない。

### (3)

$I$ の任意の開被覆を取る。$0$ を含む被覆の元を一つ選ぶと、その元は $J$ を含む。残りは高々二点 $-1,1$ だけであるから、それぞれを含む被覆の元を加えれば、高々三個の元で $I$ を覆える。従って $(I,T)$ はコンパクトである。

## **Reference**

- [東北大学原問題の公開保存版（2020年度・共通問題、kyotsu2020(R2).pdf、PDF 2ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2020年度の解答](https://note.com/normalmath/n/n89152917de11#33b2ab11-e506-42b7-ab76-4b6ea5325fa7)
