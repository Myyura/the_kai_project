---
sidebar_label: "2019年8月実施 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Castiglianos-Theorem
---

# 九州大学 工学府 機械系専攻 2019年8月実施 材料力学 問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

次の問いに答えよ。各弾性棒の伸びは、その長さに比べて十分に小さいものとする。（50点）

**(1)** 図1のように、弾性棒 AB と CD がそれぞれ点 A と点 D で剛体壁にピン結合され、点 B と点 C で剛体棒 BC にピン結合されている。荷重 $P$ が作用する点 C における荷重負荷方向の変位 $\delta_{CH}$ を求めよ。

![図1：傾斜した弾性棒と剛体棒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/mech_201908_material_1_figure_1.png)

**(2)** 図2のように、弾性棒 AB と CD がそれぞれ点 A と点 D で剛体壁にピン結合され、点 B と点 C で剛体棒 BC にピン結合されている。点 C に荷重 $P$ が作用した際の荷重負荷方向の変位を $\delta_{CV}$、弾性棒 AB の伸びを $\lambda_{AB}$、弾性棒 CD の伸びを $\lambda_{CD}$ とするとき、荷重負荷による変形を考慮して $\delta_{CV},\lambda_{AB},\lambda_{CD}$ の間に成り立つ関係を求めよ。

![図2：水平に配置した弾性棒と剛体棒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/mech_201908_material_1_figure_2.png)

**(3)** (2) における $\delta_{CV}$ を求めよ。

図中、$E$ はヤング率、$A$ は断面積、丸印はピン結合を表す。水平投影された隣接点間の距離は各 $a$、角度と荷重方向は図示のとおりである。

#### 题目描述

回答下列问题。各弹性杆的伸长与其自身长度相比充分小。（50分）

**(1)** 如图1，弹性杆 AB、CD 分别在 A、D 两点与刚性墙壁铰接，并在 B、C 两点与刚杆 BC 铰接。求载荷 $P$ 作用点 C 沿加载方向的位移 $\delta_{CH}$。

**(2)** 如图2，弹性杆 AB、CD 分别在 A、D 两点与刚性墙壁铰接，并在 B、C 两点与刚杆 BC 铰接。设在 C 点施加载荷 $P$ 后，沿加载方向的位移为 $\delta_{CV}$，弹性杆 AB、CD 的伸长分别为 $\lambda_{AB},\lambda_{CD}$。考虑加载后的几何变形，求 $\delta_{CV},\lambda_{AB},\lambda_{CD}$ 之间成立的关系。

**(3)** 求 (2) 中的 $\delta_{CV}$。

图中 $E$ 为杨氏模量，$A$ 为截面积，圆圈表示铰接。相邻各点间的水平投影距离均为 $a$，角度与荷载方向如图所示。

## **Kai**

### (1)

AB と BC は無載荷の節点 B を共有する二力部材であり、軸力は等しい。引張を正に取ると C のつり合いは

$$
\begin{gathered}
-\frac{\sqrt3}{2}N_{AB}+\frac1{\sqrt2}N_{CD}+P=0,\\
\frac12N_{AB}+\frac1{\sqrt2}N_{CD}=0.
\end{gathered}
$$

したがって $N_{AB}=(\sqrt3-1)P$、$N_{CD}=-(\sqrt3-1)P/\sqrt2$。部材長は $\ell_{AB}=2a/\sqrt3$、$\ell_{CD}=\sqrt2a$ なので

$$
U=\frac{N_{AB}^2\ell_{AB}+N_{CD}^2\ell_{CD}}{2EA}.
$$

Castigliano の定理から

$$
\boxed{\begin{gathered}
\delta_{CH}=\frac{\partial U}{\partial P}\\
=\frac{8\sqrt3+6\sqrt2-3\sqrt6-12}{3}\frac{Pa}{EA}
\end{gathered}}.
$$

### (2)

$\delta=\delta_{CV}$ とする。変形後も B には外力がないため A、B、C は一直線となる。C の水平変位を $u$ とすれば、AC の長さは $2a+\lambda_{AB}$、CD の長さは $a+\lambda_{CD}$ なので

$$
\begin{gathered}
2a+\lambda_{AB}=\sqrt{(2a+u)^2+\delta^2},\\
a+\lambda_{CD}=\sqrt{(a-u)^2+\delta^2}.
\end{gathered}
$$

$u=O(\delta^2/a)$ として支配的な二次項まで展開すると

$$
\lambda_{AB}=u+\frac{\delta^2}{4a},\qquad
\lambda_{CD}=-u+\frac{\delta^2}{2a}.
$$

よって

$$
\boxed{\lambda_{AB}+\lambda_{CD}\simeq\frac{3\delta_{CV}^2}{4a}}.
$$

### (3)

水平方向のつり合いから、先頭次数では両弾性棒の軸力は等しく $N$。長さと $EA$ も等しいため

$$
\lambda_{AB}\simeq\lambda_{CD}\simeq\frac{3\delta^2}{8a},\qquad
N\simeq\frac{EA}{a}\frac{3\delta^2}{8a}.
$$

C から見た左側の傾きは $\delta/(2a)$、右側は $\delta/a$ なので、鉛直方向のつり合いより

$$
P\simeq N\left(\frac{\delta}{2a}+\frac\delta a\right)
=\frac{9EA}{16a^3}\delta^3.
$$

したがって、小変形の支配項として

$$
\boxed{\delta_{CV}\simeq a\left(\frac{16P}{9EA}\right)^{1/3}}.
$$

一次の変形だけでは鉛直剛性がゼロになるため、幾何学的な二次の伸びを残す必要がある。

## **Reference**

- [九州大学 2020年度 材料力学 公式問題（PDF 1ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-material.pdf)
