---
sidebar_label: "2022年8月実施 共通問題 [2]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Open-and-Closed-Sets
  - Mathematics.Topology.Compactness-and-Connectedness
  - Mathematics.Topology.Continuity-and-Homeomorphisms
  - Mathematics.Topology.Hausdorff-Space
---

# 東北大学 理学研究科 数学専攻 2022年8月実施 共通問題 \[2\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#01d8630d-bd12-4463-baab-6199ea17ac2e) refined with GPT 6 Astra)

## **Description**

問題は $4$ 題ある。全問に解答すること。

$\mathbb R$ の部分集合族 $\mathcal O_1$ を

$$
\mathcal O_1=\{(a,\infty)\mid a\in\mathbb R\}\cup\{\mathbb R,\varnothing\}
$$

と定める。$\mathcal O_1$ が $\mathbb R$ 上の位相（開集合系）となることは認めてよい。以下の問いに答えよ。

(1) 位相空間 $(\mathbb R,\mathcal O_1)$ はハウスドルフか、連結か、それぞれ答えよ。根拠も述べること。

(2) $\mathcal O_2$ を $\mathbb R$ 上の通常のユークリッド距離位相とし、$\mathcal O$ を $(\mathbb R,\mathcal O_1)$ と $(\mathbb R,\mathcal O_2)$ の直積位相とする。ただし、$\mathbb R^2=\mathbb R\times\mathbb R$ の第 $1$ 成分の $\mathbb R$ の位相が $\mathcal O_1$、第 $2$ 成分の $\mathbb R$ の位相が $\mathcal O_2$ として直積位相を考える。$A=\{(x,y)\in\mathbb R^2\mid x-y>1\}$、$B=\{(x,y)\in\mathbb R^2\mid x^2+y^2\le1\}$ とおく。$A$ は $(\mathbb R^2,\mathcal O)$ の開集合であるか、また、$B$ は $(\mathbb R^2,\mathcal O)$ の閉集合であるか、それぞれ答えよ。根拠も述べること。

(3) $B$ は $(\mathbb R^2,\mathcal O)$ のコンパクト集合であるか答えよ。根拠も述べること。

### 题目描述

试卷共 $4$ 道题，全部作答。

定义 $\mathbb R$ 的子集族

$$
\mathcal O_1=\{(a,\infty)\mid a\in\mathbb R\}\cup\{\mathbb R,\varnothing\}.
$$

可以直接使用 $\mathcal O_1$ 构成 $\mathbb R$ 上的拓扑（开集族）这一事实。回答下列问题。

(1) 分别判断 $(\mathbb R,\mathcal O_1)$ 是否为豪斯多夫空间、是否连通，并说明理由。

(2) 令 $\mathcal O_2$ 为 $\mathbb R$ 上通常的欧几里得距离拓扑，$\mathcal O$ 为 $(\mathbb R,\mathcal O_1)$ 与 $(\mathbb R,\mathcal O_2)$ 的积拓扑，即 $\mathbb R^2=\mathbb R\times\mathbb R$ 的第一坐标使用 $\mathcal O_1$，第二坐标使用 $\mathcal O_2$。令

$$
A=\{(x,y)\in\mathbb R^2\mid x-y>1\},\qquad
B=\{(x,y)\in\mathbb R^2\mid x^2+y^2\le1\}.
$$

分别判断 $A$ 是否为 $(\mathbb R^2,\mathcal O)$ 的开集、$B$ 是否为其闭集，并说明理由。

(3) 判断 $B$ 是否为 $(\mathbb R^2,\mathcal O)$ 的紧集，并说明理由。

## **Kai**

### (1)

ハウスドルフではなく、連結である。実際、$\mathcal O_1$ の任意の二つの非空開集合は互いに交わる。よって異なる二点を互いに交わらない開近傍で分離できず、また空でない二つの開集合による空間の分離も存在しない。

### (2)

$A$ は開集合である。$(x,y)\in A$ とし、$\varepsilon=(x-y-1)/3>0$ とおくと

$$
(x,y)\in(x-\varepsilon,\infty)\times(y-\varepsilon,y+\varepsilon)\subset A.
$$

右辺の長方形は積位相 $\mathcal O$ の開集合である。最後の包含は、その点 $(u,v)$ に対し $u-v>x-y-2\varepsilon>1$ となることによる。

$B$ は閉集合ではない。$(-2,0)\notin B$ だが、この点を含む任意の基本開集合 $U\times V$ は $(0,0)\in B$ を含む。実際、$-2\in U\in\mathcal O_1$ なら $0\in U$ であり、$0\in V$ である。したがって $B$ の補集合は開集合ではない。

### (3)

$B$ はコンパクトである。$\mathcal O_1$ の各元は通常の実数直線でも開いているので、$\mathcal O$ は $\mathbb R^2$ の通常の位相より粗い。従って恒等写像

$$
(\mathbb R^2,\text{通常の位相})\longrightarrow(\mathbb R^2,\mathcal O)
$$

は連続である。閉単位円板 $B$ は通常の位相でコンパクトなので、その連続像である $B\subset(\mathbb R^2,\mathcal O)$ もコンパクトである。

## **Reference**

- [東北大学公式問題（2023年度・共通問題、PDF 2ページ）](https://www.math.tohoku.ac.jp/exam/questions/2023_R5_kyotsu.pdf#page=2)
- [L^2：2023年度の解答](https://note.com/normalmath/n/n89152917de11#01d8630d-bd12-4463-baab-6199ea17ac2e)
