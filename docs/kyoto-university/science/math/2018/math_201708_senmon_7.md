---
sidebar_label: "2018年度 専門科目 [7]（コンパクト作用素の有限階数近似）"
tags:
  - Kyoto-University
  - Mathematics.Functional-Analysis.Compact-Operators-and-Finite-Rank-Approximation
---

# 京都大学 理学研究科 数学・数理解析専攻 2018年度 専門科目 問題7

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$H$ を可分な無限次元実 Hilbert 空間とし、内積を $(\ ,\ )$ と書く。$\{e_n\}_{n\ge1},\{f_n\}_{n\ge1}$ はそれぞれ $H$ の正規直交基底であり、$T$ は $H$ 上のコンパクト作用素とする。

$$
T_nx=(Tx,e_n)f_n\qquad(x\in H)
$$

と定めるとき、$\sum_{n=1}^\infty T_n$ が作用素ノルムで収束することを示せ。

#### 题目描述

在可分无限维实 Hilbert 空间 $H$ 中，$\{e_n\}$、$\{f_n\}$ 是两组标准正交基，$T$ 是紧算子。令 $T_nx=(Tx,e_n)f_n$，证明算子级数 $\sum_{n\ge1}T_n$ 按算子范数收敛。

## **Kai**

$Ue_n=f_n$ で定まる直交作用素を $U$ とし、$P_N$ を $\operatorname{span}\{e_1,\ldots,e_N\}$ への直交射影とする。このとき

$$
\sum_{n=1}^N T_n=UP_NT,\qquad
\left\|UT-\sum_{n=1}^NT_n\right\|=\|(I-P_N)T\|.
$$

$K=\overline{T(\{x:\|x\|\le1\})}$ はコンパクトである。任意の $\varepsilon>0$ に対し、$K$ の有限 $\varepsilon$-ネット $y_1,\ldots,y_m$ を取る。
$P_Ny_j\to y_j$ だから、十分大きい $N$ ではすべての $j$ について $\|(I-P_N)y_j\|<\varepsilon$。

任意の $y\in K$ に対して $\|y-y_j\|<\varepsilon$ となる $j$ を選ぶと、$\|I-P_N\|\le1$ より

$$
\|(I-P_N)y\|\le\|y-y_j\|+\|(I-P_N)y_j\|<2\varepsilon.
$$

したがって $\|(I-P_N)T\|\to0$ であり、級数は作用素ノルムで $\boxed{UT}$ に収束する。

## **Reference**

- [京都大学公式問題（2018年度・専門科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2017math_senmon.pdf)
- [照合用参考解答（2018年度・専門科目 問題7、PDF 3ページ）](https://drive.google.com/file/d/1p45zSLvddYW09FsKE0ycCMExLWfELlhi/view?usp=sharing)
