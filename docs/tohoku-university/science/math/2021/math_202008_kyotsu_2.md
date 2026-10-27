---
sidebar_label: "2020年8月実施 共通問題 [2]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Compactness-and-Connectedness
  - Mathematics.Topology.Hausdorff-Space
---

# 東北大学 理学研究科 数学専攻 2020年8月実施 共通問題 \[2\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#263f018e-18e6-4b62-a287-040c196e44d1) refined with GPT 6 Astra)

## **Description**

問題は $4$ 題ある。全問に解答すること。$\mathbb Q$、$\mathbb R$ はそれぞれ有理数全体、実数全体のなす集合を表す。

実数全体のなす集合 $\mathbb R$ にユークリッド距離位相を入れておく。$\mathbb R$ の同値関係 $\sim$ を二つの実数 $x,y$ に対して

$$
x\sim y\Longleftrightarrow x-y\text{ が有理数}
$$

と定義し、商集合 $\mathbb R/\sim$ を $X$ とおく。$X$ に自然な射影 $\pi:\mathbb R\to X$ から定まる商位相を入れる。以下の問いに答えよ。

(1) 位相空間 $X$ は連結かどうか、理由とともに答えよ。

(2) 位相空間 $X$ はコンパクトかどうか、理由とともに答えよ。

(3) 位相空間 $X$ はハウスドルフかどうか、理由とともに答えよ。

### 题目描述

试卷共 $4$ 道题，全部作答。$\mathbb Q$、$\mathbb R$ 分别表示有理数集和实数集。

在实数集 $\mathbb R$ 上赋予欧几里得距离拓扑。对于实数 $x,y$，定义等价关系

$$
x\sim y\Longleftrightarrow x-y\text{ 是有理数}.
$$

令 $X=\mathbb R/\sim$，并在 $X$ 上赋予由自然投影 $\pi:\mathbb R\to X$ 所确定的商拓扑。回答下列问题，并说明理由。

(1) 拓扑空间 $X$ 是否连通？

(2) 拓扑空间 $X$ 是否紧致？

(3) 拓扑空间 $X$ 是否为豪斯多夫空间？

## **Kai**

### (1)

標準的射影 $\pi:\mathbb R\to X$ は連続な全射であり、$\mathbb R$ は連結なので、その像 $X$ も連結である。

### (2)

任意の実数 $x$ に対し整数 $k$ を選んで $x-k\in[0,1]$ とできる。整数は有理数であるから $[x]=[x-k]$ となり、$\pi([0,1])=X$ である。従って $X$ はコンパクト集合 $[0,1]$ の連続像であり、コンパクトである。

### (3)

ハウスドルフではない。もしハウスドルフなら一点集合 $\{[0]\}$ は閉集合となる。$\pi$ の連続性より、その逆像

$$
\pi^{-1}(\{[0]\})=\mathbb Q
$$

も $\mathbb R$ の閉集合になるはずだが、$\mathbb Q$ は閉集合ではない。従って矛盾する。

## **Reference**

- [東北大学原問題の公開保存版（2021年度・共通問題、2021(R3)kyotsu.pdf、PDF 2ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2021年度の解答](https://note.com/normalmath/n/n89152917de11#263f018e-18e6-4b62-a287-040c196e44d1)
