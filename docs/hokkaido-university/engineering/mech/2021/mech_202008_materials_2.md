---
sidebar_label: "2020年8月実施 材料力学 問2"
tags:
  - Hokkaido-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Bending-Stress
---

# 北海道大学 工学院 機械・宇宙航空工学系 2020年8月実施 材料力学 問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

断面が一様なはりのたわみに関する次の問いに答えなさい。ただし，せん断力による変形，ならびに部材の質量は無視してよい。

(1) 長さ $L$，断面二次モーメント $I$，縦弾性率 $E$ の片持ちはりについて，以下の問いに答えなさい。

![図2 片持ちはり先端への集中荷重およびモーメント荷重](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/hokkaido-university/engineering/mech/2021/mech_202008_materials_2_original_figure_1.png)

(1–1) 図2（上）に示すように，先端に下向きの集中荷重 $P$ が作用するとき，先端のたわみを求めなさい。

(1–2) 図2（下）に示すように，先端に反時計回り向きのモーメント荷重 $M$ が作用するとき，先端のたわみを求めなさい。

(2) 図3に示すように，長さ $2L$，断面二次モーメント $I$，縦弾性率 $E$ の片持ちはりの中央に，L 字型の剛体を固定した。剛体の先端に下向きの集中荷重 $P_A$，はりの先端に上向きの集中荷重 $P_B$ が作用するとき，以下の問いに答えなさい。

![図3 中央にL字型剛体を固定した片持ちはり](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/hokkaido-university/engineering/mech/2021/mech_202008_materials_2_original_figure_2.png)

(2–1) $P_B$ を取り除いたとき（$P_B=0$），はりの先端のたわみを求めなさい。

(2–2) はりの先端のたわみが $0$ となるように $P_B$ を作用させたとき，$P_A$ と $P_B$ の比（$P_A/P_B$）を求めなさい。

(2–3) はりの断面形状を高さ $h$，幅 $b$ の長方形として，(2–2) のときにはりに生じる曲げ応力の最大値を $P_B,L,h,b$ で表しなさい。

#### 题目描述

回答关于等截面梁挠度的下列问题。可以忽略剪力引起的变形以及构件质量。

(1) 对长度为 $L$、截面二次矩为 $I$、杨氏模量为 $E$ 的悬臂梁，回答下列问题。

(1–1) 如图2上图，在自由端施加竖直向下的集中载荷 $P$ 时，求自由端挠度。

(1–2) 如图2下图，在自由端施加逆时针方向的力矩载荷 $M$ 时，求自由端挠度。

(2) 如图3，在长度为 $2L$、截面二次矩为 $I$、杨氏模量为 $E$ 的悬臂梁中点固定一个 L 形刚体。刚体末端受到向下的集中载荷 $P_A$，梁的自由端受到向上的集中载荷 $P_B$。回答下列问题。

(2–1) 移去 $P_B$（$P_B=0$）时，求梁自由端的挠度。

(2–2) 施加 $P_B$ 使梁自由端挠度为 $0$ 时，求 $P_A$ 与 $P_B$ 之比 $P_A/P_B$。

(2–3) 梁的截面为高 $h$、宽 $b$ 的矩形。在 (2–2) 的条件下，用 $P_B,L,h,b$ 表示梁中弯曲应力的最大值。

## **Kai**

### (1-1), (1-2)

下向き変位を正とすると、集中荷重に対し $EIv''=P(L-x)$。$v(0)=v'(0)=0$ より

$$
v(x)=\frac{P}{6EI}(3Lx^2-x^3),\qquad
\boxed{v(L)=\frac{PL^3}{3EI}\quad\text{（下向き）}}.
$$

反時計回りの端モーメントでは曲率が一定で、先端を上げるので

$$
\boxed{|v(L)|=\frac{ML^2}{2EI}\quad\text{（上向き）}}.
$$

### (2-1)

剛体は $x=L$ に下向き力 $P_A$ と時計回りモーメント $P_AL$ を伝える。下向きのたわみと時計回りの傾きを正とすれば

$$
\begin{gathered}
v(L)=\frac{P_AL^3}{3EI}+\frac{P_AL^3}{2EI}
=\frac{5P_AL^3}{6EI},\\
v'(L)=\frac{P_AL^2}{2EI}+\frac{P_AL^2}{EI}
=\frac{3P_AL^2}{2EI}.
\end{gathered}
$$

右半分の曲率はゼロだから

$$
\boxed{v(2L)=v(L)+Lv'(L)=\frac{7P_AL^3}{3EI}\quad\text{（下向き）}}.
$$

### (2-2)

$P_B$ のみの上向きたわみは $P_B(2L)^3/(3EI)$。重ね合わせより

$$
7P_A=8P_B,\qquad\boxed{\frac{P_A}{P_B}=\frac87}.
$$

### (2-3)

下側引張りを正とする曲げモーメントは

$$
M(x)=\begin{cases}
-\dfrac{P_B}{7}(2L-x),&0\le x<L,\\
P_B(2L-x),&L<x\le2L.
\end{cases}
$$

固定端の絶対値 $2P_BL/7$ よりも、$x=L$ の右側の $P_BL$ が大きい。断面係数 $Z=bh^2/6$ から

$$
\boxed{\sigma_{\max}=\frac{6P_BL}{bh^2}}.
$$

## **Reference**

- [北海道大学公式原題の保存版：令和3年度、令和2年8月25日実施、PDF 3ページ](https://web.archive.org/web/20220302172425id_/https://www.eng.hokudai.ac.jp/commonfile/files/graduate/examinfo/gr03/exam2021c1.pdf)
