---
sidebar_label: "2012年8月実施 材料力学 問題1"
tags:
  - Osaka-University
  - Engineering.Mechanics-of-Materials.Bending-Stress
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Castiglianos-Theorem
---

# 大阪大学 工学研究科 機械工学専攻 2012年8月実施 材料力学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題1（解答用紙：赤）

図のように、直径 $d$ の円形断面を有する部材を考える。点 A、B、C、D は同一の水平面上にあり、点 D は壁に固定されている。直線部 AB と直線部 CD は点 C で直角に結合されており、AC 間、CB 間、CD 間の長さは、それぞれ $4L$、$2L$、$L$ である。点 A、点 B に作用する鉛直方向の力を、それぞれ $P$、$Q$ とするとき、以下の問いに答えなさい。ただし、部材のヤング率、せん断弾性係数を、それぞれ $E$、$G$ とする。また自重は無視できるものとする。

(1) $Q=0$ で、力 $P$ のみが作用するとき、固定端 D に生じる垂直応力の最大値を求めなさい。

(2) $Q=0$ で、力 $P$ のみが作用するとき、点 A および点 B の鉛直方向変位をそれぞれ求めなさい。

(3) 力 $P$ が作用するとき、点 A の鉛直方向変位が $0$ になるために必要な力 $Q$ を求めなさい。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2013/mech_201208_materials_1_original_figure_1.png)

### 题目描述

问题1（使用红色答题纸）

考虑图示直径为 $d$、截面为圆形的构件。A、B、C、D 四点位于同一水平面内，D 点固定于墙。直杆段 AB 与 CD 在 C 点垂直连接，AC、CB、CD 的长度分别为 $4L$、$2L$、$L$。A、B 两点所受竖直力分别为 $P$、$Q$。构件的杨氏模量和剪切模量分别为 $E$、$G$，忽略自重。回答下列问题。

(1) 当 $Q=0$、仅有力 $P$ 作用时，求固定端 D 产生的最大正应力。

(2) 当 $Q=0$、仅有力 $P$ 作用时，分别求 A、B 两点的竖直位移。

(3) 在力 $P$ 作用时，求使 A 点竖直位移为 $0$ 所需的力 $Q$。

## **Kai**

円形断面の断面二次モーメントと断面二次極モーメントを

$$
I=\frac{\pi d^4}{64},\qquad J=\frac{\pi d^4}{32}
$$

とする。鉛直下向きの変位を正にとる。

### (1)

$Q=0$ のとき、CD の固定端における曲げモーメントの大きさは $PL$、ねじりモーメントは $4PL$ である。ねじりはせん断応力を生じるが、棒軸方向の垂直応力には寄与しない。よって

$$
\boxed{\sigma_{\max}=\frac{PL(d/2)}{I}=\frac{32PL}{\pi d^3}}.
$$

反対側の外周には同じ大きさの圧縮応力が生じる。

### (2)

一般の $P,Q$ に対し、CD の曲げ、CA と CB の曲げ、CD のねじりによるひずみエネルギーを加えると

$$
U=\frac{(P+Q)^2L^3}{6EI}
+\frac{P^2(4L)^3}{6EI}
+\frac{Q^2(2L)^3}{6EI}
+\frac{(4PL-2QL)^2L}{2GJ}.
$$

Castigliano の定理より

$$
\begin{aligned}
u_A&=\frac{\partial U}{\partial P}
=\frac{(65P+Q)L^3}{3EI}+\frac{(16P-8Q)L^3}{GJ},\\
u_B&=\frac{\partial U}{\partial Q}
=\frac{(P+9Q)L^3}{3EI}+\frac{(-8P+4Q)L^3}{GJ}.
\end{aligned}
$$

したがって $Q=0$ のとき

$$
\boxed{u_A=\frac{65PL^3}{3EI}+\frac{16PL^3}{GJ}
=\frac{4160PL^3}{3\pi Ed^4}+\frac{512PL^3}{\pi Gd^4}},
$$

$$
\boxed{u_B=\frac{PL^3}{3EI}-\frac{8PL^3}{GJ}
=\frac{64PL^3}{3\pi Ed^4}-\frac{256PL^3}{\pi Gd^4}}.
$$

$u_B$ が負なら B は上向きに移動する。

### (3)

$u_A=0$ と $J=2I$ より

$$
(65G+24E)P+(G-12E)Q=0.
$$

ゆえに

$$
\boxed{Q=\frac{24E+65G}{12E-G}\,P}.
$$

ここで $12E\ne G$ とする。$12E>G$ なら図の下向き、$12E<G$ なら上向きの力が必要である。$12E=G$ では $Q$ による A の変位が $0$ となるため、$P\ne0$ に対して条件を満たす有限の $Q$ は存在しない。
