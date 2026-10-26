---
sidebar_label: "2017年8月実施 専門科目 [7]（コンパクト作用素の有限階数近似）"
tags:
  - Kyoto-University
  - Mathematics.Functional-Analysis.Compact-Operators-and-Finite-Rank-Approximation
---

# 京都大学 理学研究科 数学・数理解析専攻 2017年8月実施 専門科目 問題7

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$H$ を可分な無限次元実Hilbert空間とし，その内積を $(\ ,\ )$ で表す。$\{e_n\}_{n=1}^\infty$，$\{f_n\}_{n=1}^\infty$ をそれぞれ $H$ の正規直交基底とする。$T$ を $H$ 上のコンパクト作用素とし，正の整数 $n$ について $H$ 上の作用素 $T_n$ を

$$
T_nx=(Tx,e_n)f_n\qquad(x\in H)
$$

と定義する。このとき，$\sum_{n=1}^\infty T_n$ は作用素ノルムに関して収束することを示せ。

### 题目描述

设 $H$ 为可分的无限维实Hilbert空间，其内积记为 $(\ ,\ )$。设 $\{e_n\}_{n=1}^\infty$、$\{f_n\}_{n=1}^\infty$ 分别为 $H$ 的标准正交基，$T$ 为 $H$ 上的紧算子。对正整数 $n$，定义 $H$ 上的算子 $T_n$ 为

$$
T_nx=(Tx,e_n)f_n\qquad(x\in H).
$$

证明 $\sum_{n=1}^\infty T_n$ 按算子范数收敛。

## **Kai**

$Ue_n=f_n$ で定まる直交作用素を $U$ とし、$P_N$ を $\operatorname{span}\{e_1,\ldots,e_N\}$ への直交射影とする。このとき

$$
\begin{gathered}
\sum_{n=1}^N T_n=UP_NT,\\
\left\|UT-\sum_{n=1}^NT_n\right\|=\|(I-P_N)T\|.
\end{gathered}
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
