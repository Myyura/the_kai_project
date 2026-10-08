---
sidebar_label: "2016年8月実施 基礎科目 [6]"
tags:
  - Kyoto-University
  - Mathematics.Topology.Compactness-and-Connectedness
  - Mathematics.Topology.Open-and-Closed-Sets
---

# 京都大学 理学研究科 数学・数理解析専攻 2016年8月実施 基礎科目 [6]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$X,Y$ を位相空間とし、直積集合 $X\times Y$ を積位相によって位相空間とみなす。写像 $f:X\times Y\to Y$ を $f(x,y)=y$ で定める。

$X$ がコンパクトならば、$X\times Y$ の任意の閉集合 $Z$ に対し、$f(Z)$ は $Y$ の閉集合であることを示せ。

#### 题目描述

设 $X,Y$ 为拓扑空间，$X\times Y$ 取积拓扑，定义投影 $f:X\times Y\to Y$，$f(x,y)=y$。

证明：若 $X$ 紧致，则对任意闭集 $Z\subset X\times Y$，像 $f(Z)$ 都是 $Y$ 中的闭集。

## **Kai**

$X=\varnothing$ なら $f(Z)=\varnothing$ であり、主張は明らかである。以下 $X\ne\varnothing$ とする。

$y_0\in Y\setminus f(Z)$ を取ると、すべての $x\in X$ に対して $(x,y_0)\notin Z$ である。$Z$ は閉集合であるから、積位相の定義により、$x$ の開近傍 $U_x$ と $y_0$ の開近傍 $V_x$ を

$$
U_x\times V_x\subset (X\times Y)\setminus Z
$$

となるように選べる。$\{U_x\}_{x\in X}$ は $X$ の開被覆であり、コンパクト性によって有限部分被覆 $U_{x_1},\ldots,U_{x_r}$ が存在する。

$$
V=\bigcap_{j=1}^r V_{x_j}
$$

と置くと、$V$ は $y_0$ の開近傍である。任意の $(x,y)\in X\times V$ に対し、$x\in U_{x_j}$ となる $j$ を選べば $(x,y)\in U_{x_j}\times V_{x_j}$ なので、$(x,y)\notin Z$ である。よって

$$
V\subset Y\setminus f(Z).
$$

したがって $Y\setminus f(Z)$ は開集合、すなわち $f(Z)$ は閉集合である。

## **Reference**

- [京都大学公式問題（2017年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2016math_kiso.pdf)
- [照合用参考解答（H29-basic.pdf、PDF 8ページ）](https://drive.google.com/file/d/1RJ3cPCMYxorlM3itSeJSplPrldEYm1k3/view?usp=sharing)
