---
sidebar_label: "2013年度 材料力学 問題1"
tags:
  - Osaka-University
  - Engineering.Mechanics-of-Materials.Bending-Stress
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Castiglianos-Theorem
---

# 大阪大学 工学研究科 機械工学専攻 2013年度 材料力学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、直径 $d$ の一様な円形断面をもつ棒を T 字形に結合し、端 D を壁に固定する。A、B、C、D は同一水平面内にあり、AB と CD は C で直交する。長さは $AC=4L$、$CB=2L$、$CD=L$ である。A、B にそれぞれ鉛直下向きの集中荷重 $P$、$Q$ が作用する。棒の縦弾性係数を $E$、横弾性係数を $G$ とし、自重を無視する。

1. $Q=0$ のとき、固定端 D に生じる最大垂直応力を求めよ。
2. $Q=0$ のとき、A および B の鉛直方向変位を求めよ。
3. A の鉛直方向変位を $0$ にするために必要な荷重 $Q$ を求めよ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka-university/engineering/mech/2013/mech_201208_materials_1-question-fig1.png)

#### 题目描述

如图，直径为 $d$ 的均匀圆截面杆组成 T 形，在 D 端固定。A、B、C、D 位于同一水平面，AB 与 CD 在 C 处垂直，且 $AC=4L$、$CB=2L$、$CD=L$。A、B 处分别作用竖直向下的集中力 $P$、$Q$。纵向弹性模量为 $E$，剪切模量为 $G$，忽略自重。

1. $Q=0$ 时，求固定端 D 的最大正应力。
2. $Q=0$ 时，求 A、B 的竖直位移。
3. 求使 A 的竖直位移为零所需的 $Q$。

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
