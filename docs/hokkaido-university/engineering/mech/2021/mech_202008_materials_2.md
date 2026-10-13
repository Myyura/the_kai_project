---
sidebar_label: "2021年度 材料力学 問2"
tags:
  - Hokkaido-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Bending-Stress
---

# 北海道大学 工学院 機械・宇宙航空工学系 2021年度 材料力学 問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

一様断面のはりを考え、せん断変形と部材の質量は無視する。

(1) 長さ $L$、断面二次モーメント $I$、縦弾性係数 $E$ の左端固定の片持ちはりについて、(1-1) 先端に下向きの集中荷重 $P$ が作用するとき、(1-2) 先端に反時計回りのモーメント $M$ が作用するとき、それぞれの先端たわみを求めよ。

(2) 長さ $2L$、断面二次モーメント $I$、縦弾性係数 $E$ の左端固定の片持ちはりの中央 $x=L$ にL字型剛体を固定する。剛体はそこから下へ延び、さらに右へ $L$ 延びており、剛体先端の鉛直線ははり先端 $x=2L$ を通る。剛体先端に下向きの力 $P_A$、はり先端に上向きの力 $P_B$ を加える。

(2-1) $P_B=0$ のときのはり先端たわみを求めよ。(2-2) はり先端のたわみをゼロにする $P_A/P_B$ を求めよ。(2-3) 断面が高さ $h$、幅 $b$ の長方形のとき、(2-2) の条件における最大曲げ応力を $P_B,L,h,b$ で表せ。

#### 题目描述

忽略梁的剪切变形和质量。(1) 对长 $L$、弯曲刚度 $EI$ 的左端固定悬臂梁，分别求末端向下集中力 $P$、末端逆时针力矩 $M$ 引起的末端挠度。(2) 另一悬臂梁长 $2L$，中点固定一个先向下再向右伸出 $L$ 的L形刚体，其端点与梁自由端在同一竖直线上。刚体末端受向下的 $P_A$，梁自由端受向上的 $P_B$。求 $P_B=0$ 时自由端挠度、使自由端挠度为零的荷载比；截面高 $h$、宽 $b$ 时求该荷载比下的最大弯曲应力。

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
v(L)=\frac{P_AL^3}{3EI}+\frac{P_AL^3}{2EI}
=\frac{5P_AL^3}{6EI},\qquad
v'(L)=\frac{P_AL^2}{2EI}+\frac{P_AL^2}{EI}
=\frac{3P_AL^2}{2EI}.
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
