---
sidebar_label: "2025年2月実施 問題IV（点集合の三角形分割）"
tags:
  - Chuo-University
  - Mathematics.Geometry.Point-Set-Triangulation
  - Discrete-Mathematics.Graph-Theory.Planar-Graph
  - Mathematics.Linear-Algebra.Matrix-Determinant
---

# 中央大学 理工学研究科 情報工学専攻 2025年2月実施 一般入試（春季）問題IV

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

問題 I は必答。問題 II～V のうち、2 問を選んで解答すること。

**問題 IV**

$P$ を平面上の点集合とする。ただし、$P$ は三つ以上の点を含み、$P$ の任意の 3 点は同一直線上にないものとする。三角形の集合 $\{t_1,t_2,\ldots,t_l\}$（$l$ は三角形の個数）は、以下の条件を全て満たすとき $P$ の三角形分割と呼ばれる。

- 各三角形は $P$ の相異なる 3 点を頂点とする。
- $P$ の各点は、少なくとも一つの三角形の頂点として使用される。
- 任意の二つの三角形 $t_i,t_j$ について $(i\ne j)$、$t_i$ の内部と $t_j$ の内部は交差しない。
- 全ての三角形（内部だけでなく境界も含む）$t_1,t_2,\ldots,t_l$ の和集合は $P$ の凸包と一致する。

また、三角形分割を構成する各三角形を面と呼ぶ。点集合の三角形分割について、以下の設問に答えよ。

1. $Q$ を 6 点からなる点集合とする。$Q$ の各点の座標は

   $$
   \begin{gathered}
   (0,0),\ (6,0),\ (3,2),\\
   (2,6),\ (0,8),\ (4,8)
   \end{gathered}
   $$

   である。$Q$ の三角形分割を全て求め、図示せよ。答のみ書けばよい。

2. $R$ を $n$ 個の点からなる点集合とする。ただし、$n\geq3$ とし、$R$ の任意の 3 点は同一直線上にないものとする。また、$R$ の凸包は $k$ 角形だとする。$T$ を $R$ の任意の三角形分割とする。$T$ の面数を $n$ と $k$ を用いて表せ。結果だけでなく、導出過程も記述すること。

3. 三角形 $abc$ の三つの頂点の座標をそれぞれ $(x_a,y_a),(x_b,y_b),(x_c,y_c)$ とする。3 頂点 $a,b,c$ は反時計回りに並んでおり、同一直線上にないものとする。また、関数 $f$ を以下のように定める。

   $$
   f(x,y)=\det\begin{pmatrix}
   x&x_a&x_b&x_c\\
   y&y_a&y_b&y_c\\
   x^2+y^2&x_a^2+y_a^2&x_b^2+y_b^2&x_c^2+y_c^2\\
   1&1&1&1
   \end{pmatrix}
   $$

   なお、$\det A$ は行列 $A$ の行列式を表す。$f(x,y)=0$ を満たす点 $(x,y)$ の集合はどのような図形になるか答えよ。さらに、$f(x,y)<0$ を満たす点 $(x,y)$ の集合はどのような図形になるか答えよ。それぞれ、結果だけでなく根拠も示すこと。

4. 設問 1 の $Q$ の三角形分割のうち、三角形の内接円の半径の和（三角形分割に $l$ 個の面が含まれる場合、$l$ 個の内接円の半径の和）が最も大きいものを図示せよ。答えのみ書けばよい。内接円の半径の和の値を書く必要はなく、三角形分割を図示するだけでよい。

### 题目描述

问题 I 为必答题；从问题 II～V 中选择 2 题作答。

**问题 IV**

设 $P$ 是平面点集，至少包含三个点，且任意三点不共线。当三角形集合 $\{t_1,t_2,\ldots,t_l\}$（$l$ 为三角形数量）满足以下全部条件时，称其为 $P$ 的三角剖分：

- 每个三角形的顶点均为 $P$ 中三个互异的点。
- $P$ 的每个点至少作为一个三角形的顶点出现。
- 对任意 $i\ne j$，三角形 $t_i,t_j$ 的内部不相交。
- 所有三角形（包含内部及边界）的并集恰为 $P$ 的凸包。

构成剖分的各个三角形称为面。回答以下问题。

1. 点集 $Q$ 包含六个点，坐标分别为

   $$
   \begin{gathered}
   (0,0),\ (6,0),\ (3,2),\\
   (2,6),\ (0,8),\ (4,8)
   \end{gathered}.
   $$

   求出 $Q$ 的全部三角剖分并画图，只需给出答案。

2. 点集 $R$ 包含 $n\geq3$ 个点，任意三点不共线，其凸包为 $k$ 边形。设 $T$ 是 $R$ 的任意三角剖分。用 $n,k$ 表示 $T$ 的面数，并写出推导过程。

3. 三角形 $abc$ 的顶点依次为 $(x_a,y_a),(x_b,y_b),(x_c,y_c)$，三点按逆时针排列且不共线。定义

   $$
   f(x,y)=\det\begin{pmatrix}
   x&x_a&x_b&x_c\\
   y&y_a&y_b&y_c\\
   x^2+y^2&x_a^2+y_a^2&x_b^2+y_b^2&x_c^2+y_c^2\\
   1&1&1&1
   \end{pmatrix}.
   $$

   其中 $\det A$ 表示矩阵 $A$ 的行列式。说明满足 $f(x,y)=0$ 的点集是什么图形，并说明满足 $f(x,y)<0$ 的点集是什么图形。两问均须给出依据。

4. 在第 1 问的全部三角剖分中，画出所有三角形内切圆半径之和最大的一种。若剖分包含 $l$ 个面，则计算的是 $l$ 个内切圆半径的总和。只需画出剖分，无须写出半径和的数值。

## **Kai**

### 1. 全ての三角形分割

与えられた順に

$$
\begin{gathered}
A=(0,0),\ B=(6,0),\ C=(3,2),\\
D=(2,6),\ E=(0,8),\ F=(4,8)
\end{gathered}
$$

と名付ける。凸包は四角形 $ABFE$ で、$C,D$ はその内部にある。三角形分割は次の **6 通り**である。図は全て同じ座標・縮尺で描いている。

![三角形分割T1（作図：祭音Myyura）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/chuo-university/science_and_engineering/information_engineering/2025/ie_202502_senmon_IV_T1.svg)

![三角形分割T2（作図：祭音Myyura）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/chuo-university/science_and_engineering/information_engineering/2025/ie_202502_senmon_IV_T2.svg)

![三角形分割T3（作図：祭音Myyura）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/chuo-university/science_and_engineering/information_engineering/2025/ie_202502_senmon_IV_T3.svg)

![三角形分割T4（作図：祭音Myyura）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/chuo-university/science_and_engineering/information_engineering/2025/ie_202502_senmon_IV_T4.svg)

![三角形分割T5（作図：祭音Myyura）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/chuo-university/science_and_engineering/information_engineering/2025/ie_202502_senmon_IV_T5.svg)

![三角形分割T6（作図：祭音Myyura）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/chuo-university/science_and_engineering/information_engineering/2025/ie_202502_senmon_IV_T6.svg)

### 2. 面数

辺数を $e$、三角形の面数を $f$ とする。外側の面も数えたオイラーの公式から、

$$
n-e+(f+1)=2,\qquad e=n+f-1.
$$

各三角形の辺を数えると、内部の辺は 2 回、凸包上の $k$ 辺は 1 回ずつ数えられるので、

$$
3f=2(e-k)+k=2e-k.
$$

代入して $3f=2n+2f-2-k$ となり、

$$
\boxed{f=2n-k-2}.
$$

設問 1 では $n=6,k=4$ より、どの分割も 6 面を持つ。

### 3. 行列式で表される図形

$$
D=\det\begin{pmatrix}x_a&x_b&x_c\\y_a&y_b&y_c\\1&1&1\end{pmatrix}
$$

とおく。$a,b,c$ が反時計回りなので $D$ は三角形の面積の 2 倍であり、$D>0$。

$f$ を第 1 列で展開すると、$x^2+y^2$ の係数は $D$ で、残りは $x,y$ の一次式と定数になる。また $(x,y)$ が $a,b,c$ のいずれかなら 2 列が一致し、$f=0$。従って、外心を $(u,v)$、外接円の半径を $r$ とすれば、

$$
f(x,y)=D\bigl((x-u)^2+(y-v)^2-r^2\bigr).
$$

三つの非共線点を通る円は一意に定まり、$D>0$ だから、

$\boxed{f(x,y)=0}$ を満たす点の集合は $\triangle abc$ の外接円である。

$\boxed{f(x,y)<0}$ を満たす点の集合は、その外接円の内部（円周を含まない）である。

### 4. 内接円の半径の和が最大の分割

求める分割は $\boxed{T_3}$ である。

![内接円半径和が最大の分割T3（作図：祭音Myyura）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/chuo-university/science_and_engineering/information_engineering/2025/ie_202502_senmon_IV_T3.svg)

その 6 面は $ABC,ACD,ADE,BCF,CDF,DEF$ である。確認には、各三角形の面積を $S$、半周長を $s$ として内接円半径 $r=S/s$ を用いればよい。$T_1,\ldots,T_6$ の半径和は順に約 5.08547、5.42885、5.54812、4.93133、5.24959、5.36887 となる。

## **Reference**

- [中央大学公式問題（2025年度、冊子 p.86／PDF 第87頁；選答方法：冊子 p.82）](https://www.chuo-u.ac.jp/uploads/2025/09/admission_gschool_exam_science_10_01.pdf#page=87)
