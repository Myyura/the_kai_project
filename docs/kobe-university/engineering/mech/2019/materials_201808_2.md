---
sidebar_label: "2018年8月実施 材料力学 第2問"
tags:
  - Kobe-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 神戸大学 工学研究科 機械工学専攻 2018年8月実施 材料力学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

問題[1]，[2]は，別々の答案用紙に解答すること。

**[2]** 図2-1に示すように，点 A において固定支持された，はり AB の AC 間に，線形的に変化する分布外力（点 A における値を $q_0$ とする）が作用している。以下の問いに答えなさい。ただし，はりの曲げ剛性を $EI$ とする。

![図2-1 線形分布外力を受ける片持ばり](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kobe-university/engineering/mech/2019/materials_201808_2_original_figure_1.png)

**(1)** AC 間に作用する分布外力 $q(x)$ を，点 A からの距離 $x$ を用いて表しなさい。

**(2)** 点 A における支持力 $R_A$ および支持モーメント $M_A$ を求めなさい。（図2-1に定義された方向を正として解答すること）

**(3)** AC 間に作用するせん断力 $F_{AC}$ および曲げモーメント $M_{AC}$，CB 間に作用するせん断力 $F_{CB}$ および曲げモーメント $M_{CB}$ を求めなさい。

**(4)** AC 間のたわみ角 $\theta_{AC}$ およびたわみ $v_{AC}$ を，$x$ を用いて表しなさい。

**(5)** 点 C におけるたわみ $v_C$，たわみ角 $\theta_C$ を求めなさい。

**(6)** CB 間のたわみ角 $\theta_{CB}$ およびたわみ $v_{CB}$ を，$x$ を用いて表しなさい。

**(7)** 点 B のたわみ $v_{B1}$ を求めなさい。

次に図2-2に示すように，同じはりを点 B においてバネ定数 $k$ の二つのバネで支持して，同じ分布外力を作用させたところ，点 B の鉛直下向き変位は $\delta_B$ になった。以下の問いに答えなさい。

![図2-2 二つのバネで先端を支持したはり](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kobe-university/engineering/mech/2019/materials_201808_2_original_figure_2.png)

![図2-3 上向き集中外力を受けるはり](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kobe-university/engineering/mech/2019/materials_201808_2_original_figure_3.png)

**(8)** ふたつのバネによる点 B の支持力を，上向きに作用する集中外力 $P$ で表すとき，$P$ を点 B の鉛直下向き変位 $\delta_B$ およびバネ定数 $k$ を用いて表しなさい。

**(9)** 図2-3に示すように，はり AB の点 B に，上向きの集中外力 $P$ のみが作用する時の点 B のたわみ $v_{B2}$ を求めなさい。

**(10)** 小問(7)，(8)および(9)の答えを利用して，点 B の変位 $\delta_B$ を求めなさい。

### 题目描述

问题[1]、[2]须分别在不同的答题纸上作答。

**[2]** 如图2-1，梁 AB 在 A 点固定，AC 段受到线性变化的分布外力，其在 A 点的值为 $q_0$。梁的抗弯刚度为 $EI$。回答下列问题。

**(1)** 用距 A 点的距离 $x$ 表示 AC 段的分布外力 $q(x)$。

**(2)** 求 A 点的支承力 $R_A$ 和支承力矩 $M_A$，以图2-1定义的方向为正。

**(3)** 求 AC 段的剪力 $F_{AC}$ 和弯矩 $M_{AC}$，以及 CB 段的剪力 $F_{CB}$ 和弯矩 $M_{CB}$。

**(4)** 用 $x$ 表示 AC 段的转角 $\theta_{AC}$ 和挠度 $v_{AC}$。

**(5)** 求 C 点的挠度 $v_C$ 和转角 $\theta_C$。

**(6)** 用 $x$ 表示 CB 段的转角 $\theta_{CB}$ 和挠度 $v_{CB}$。

**(7)** 求 B 点的挠度 $v_{B1}$。

接下来，如图2-2，用两根弹簧常数均为 $k$ 的弹簧在 B 点支承同一根梁，再施加同样的分布外力，B 点的竖直向下位移为 $\delta_B$。回答下列问题。

**(8)** 将两根弹簧在 B 点产生的支承力表示为向上的集中外力 $P$，用 B 点竖直向下的位移 $\delta_B$ 和弹簧常数 $k$ 表示 $P$。

**(9)** 如图2-3，仅在梁 AB 的 B 点施加向上的集中外力 $P$，求此时 B 点的挠度 $v_{B2}$。

**(10)** 利用第(7)、(8)、(9)问的结果，求 B 点的位移 $\delta_B$。

图2-1给出了分布载荷和支承反力的正方向；图2-2和图2-3分别给出了弹簧支承与向上集中力的情形。

## **Kai**

たわみ $v$ は下向き、たわみ角は $v'$、曲げモーメントは下面引張を正、せん断力は $F=M'$ とする。この規約では $EI v''=-M$。

### (1), (2)


$$
\boxed{q(x)=q_0\left(1-\frac xL\right)\quad(0\le x\le L)}.
$$


荷重の合力 $q_0L/2$ はAから $L/3$ に作用する。従って


$$
\boxed{R_A=\frac{q_0L}{2},\qquad M_A=-\frac{q_0L^2}{6}}.
$$


実際の支持モーメントは反時計回りである。

### (3)

断面の右側の荷重を積分して


$$
\boxed{F_{AC}=\int_x^Lq(\xi)d\xi=\frac{q_0(L-x)^2}{2L}},
$$



$$
\boxed{M_{AC}=-\int_x^Lq(\xi)(\xi-x)d\xi=-\frac{q_0(L-x)^3}{6L}}.
$$


CBでは $\boxed{F_{CB}=M_{CB}=0}$。

### (4)

$EI v''=q_0(L-x)^3/(6L)$ を $v(0)=v'(0)=0$ で積分して


$$
\boxed{\theta_{AC}=\frac{q_0}{24EIL}[L^4-(L-x)^4]},
$$



$$
\boxed{v_{AC}=\frac{q_0}{120EIL}[(L-x)^5+5L^4x-L^5]}.
$$


### (5)


$$
\boxed{v_C=\frac{q_0L^4}{30EI},\qquad\theta_C=\frac{q_0L^3}{24EI}}.
$$


### (6)

CBでは $v''=0$。Cでの連続条件より


$$
\begin{gathered}
\boxed{\theta_{CB}=\frac{q_0L^3}{24EI},\qquad
v_{CB}=\frac{q_0L^4}{30EI}+\frac{q_0L^3}{24EI}(x-L)}\\
(L\le x\le2L).
\end{gathered}
$$


### (7)


$$
\boxed{v_{B1}=v_C+L\theta_C=\frac{3q_0L^4}{40EI}}.
$$


### (8)

下向き変位に対し上のばねは伸び、下のばねは縮み、いずれも上向きに復元力を及ぼす。従って $\boxed{P=2k\delta_B}$。

### (9)

長さ $2L$ の片持ちはりの先端荷重によるたわみは、下向きを正として


$$
\boxed{v_{B2}=-\frac{P(2L)^3}{3EI}=-\frac{8PL^3}{3EI}}.
$$


### (10)


$$
\delta_B=v_{B1}+v_{B2}=\frac{3q_0L^4}{40EI}-\frac{16kL^3}{3EI}\delta_B.
$$


よって


$$
\boxed{\delta_B=\frac{9q_0L^4}{40(3EI+16kL^3)}}.
$$


## **Reference**

- [神戸大学公式問題の保存版：平成31年度 材料力学、PDF 2ページ](https://web.archive.org/web/20220524073520id_/http://www.mech.kobe-u.ac.jp/wp-content/uploads/2017/06/2_H31_Materials.pdf)
