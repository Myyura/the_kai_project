---
sidebar_label: "2012年8月実施 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2012年8月実施 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1の構造において，次の問に答えよ。（35点）

三角形の剛体板（単位面積当りの重量 $q$，板厚 $=1$）を3つの同じばね（ばね定数 $k$，長さ $s$）で支えるとき，三角形剛体板の重心の垂直方向変位 $\delta_V$ を求めよ。

![原題の図1：三つのばねで支持された三角形剛体板](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_material-1-original.png)

図中，直角三角形の底辺は $AC=b$，高さは $h$，ばね支持点BはACの中点である。

### 题目描述

对于图1的结构，回答下列问题。（35分）

用3根相同弹簧（弹簧常数 $k$，长度 $s$）支承单位面积重量为 $q$、板厚为1的三角形刚性板。求三角形板重心的竖直位移 $\delta_V$。

图中直角三角形底边 $AC=b$，高度为 $h$，弹簧支承点B位于AC中点。

## **Kai**

全重量と、A から測った重心の水平位置は

$$
W=\frac12qbh,\qquad x_G=\frac{2b}{3}.
$$

ばねの上向き反力を $F_A,F_B,F_C$、縮みを $v_A,v_B,v_C$ とする。板が剛体なので一次の変位分布は直線であり

$$
v_A+v_C=2v_B,
\qquad F_A+F_C=2F_B.
$$

鉛直力および B まわりのモーメントのつり合いは

$$
\begin{gathered}
F_A+F_B+F_C=W,\\
\frac b2(F_C-F_A)=\frac b6W.
\end{gathered}
$$

これらを解くと

$$
F_A=\frac W6,\qquad F_B=\frac W3,\qquad F_C=\frac W2.
$$

重心の鉛直変位は底辺上の $x=x_G$ と同じ一次変位であり

$$
\begin{gathered}
\delta_V=v_A+\frac{2}{3}(v_C-v_A)\\
=\frac{W}{6k}+\frac23\frac{W}{3k}\\
=\frac{7W}{18k}.
\end{gathered}
$$

よって

$$
\boxed{\delta_V=\frac{7qbh}{36k}\quad\text{（下向き）}}.
$$

$q$ は質量密度ではなく単位面積当たりの**重量**なので、さらに重力加速度を掛ける必要はない。
