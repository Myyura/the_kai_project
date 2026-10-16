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

弾性棒 AB、CD（いずれも縦弾性係数 $E$、断面積 $A$）を、固定壁の点 A、D にピン結合し、点 B、C で剛体棒 BC にピン結合する。各弾性棒の伸びは、その長さに比べて十分小さい。

1. 水平方向の座標が A、B、C、D の順に $0,a,2a,3a$ で、A、B、C は一直線上にある。AB、BC は右下がりで鉛直線となす角が $60^\circ$、CD は右上がりで鉛直線となす角が $45^\circ$ である。C に右向きの荷重 $P$ を加えるとき、荷重方向の変位 $\delta_{CH}$ を求めよ。
2. 次に A、B、C、D を同一水平線上に間隔 $a$ ずつ並べる。C に鉛直下向きの荷重 $P$ を加える。荷重方向の変位を $\delta_{CV}$、AB、CD の伸びを $\lambda_{AB},\lambda_{CD}$ とする。変形後の形状を考慮し、これら三量の間に成り立つ関係を求めよ。
3. (2) の $\delta_{CV}$ を求めよ。

#### 题目描述

两根弹性杆 AB、CD 具有相同的 $E,A$，A、D 与固定壁铰接，B、C 与刚杆 BC 铰接。弹性杆伸长远小于杆长。① 各点水平坐标依次为 $0,a,2a,3a$，A、B、C 共线并向右下倾斜，与竖直线夹角 $60^\circ$；CD 向右上倾斜，与竖直线夹角 $45^\circ$。C 受水平向右力 $P$，求水平位移。② 改为四点在同一水平线上、相邻间距均为 $a$，C 受竖直向下力 $P$，考虑变形后的几何关系，求 C 的向下位移与两弹性杆伸长的关系。③ 求该位移。

## **Kai**

### (1)

AB と BC は無載荷の節点 B を共有する二力部材であり、軸力は等しい。引張を正に取ると C のつり合いは

$$
-\frac{\sqrt3}{2}N_{AB}+\frac1{\sqrt2}N_{CD}+P=0,\qquad
\frac12N_{AB}+\frac1{\sqrt2}N_{CD}=0.
$$

したがって $N_{AB}=(\sqrt3-1)P$、$N_{CD}=-(\sqrt3-1)P/\sqrt2$。部材長は $\ell_{AB}=2a/\sqrt3$、$\ell_{CD}=\sqrt2a$ なので

$$
U=\frac{N_{AB}^2\ell_{AB}+N_{CD}^2\ell_{CD}}{2EA}.
$$

Castigliano の定理から

$$
\boxed{\delta_{CH}=\frac{\partial U}{\partial P}
=\frac{8\sqrt3+6\sqrt2-3\sqrt6-12}{3}\frac{Pa}{EA}}.
$$

### (2)

$\delta=\delta_{CV}$ とする。変形後も B には外力がないため A、B、C は一直線となる。C の水平変位を $u$ とすれば、AC の長さは $2a+\lambda_{AB}$、CD の長さは $a+\lambda_{CD}$ なので

$$
2a+\lambda_{AB}=\sqrt{(2a+u)^2+\delta^2},\qquad
a+\lambda_{CD}=\sqrt{(a-u)^2+\delta^2}.
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
