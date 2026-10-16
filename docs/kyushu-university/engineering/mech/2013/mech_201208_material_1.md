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

図1の直角三角形の剛体板を、同じばね定数 $k$、長さ $s$ の三本の鉛直ばねで支える。板の底辺は $b$、高さは $h$、板厚は 1、単位面積当たりの重量は $q$。ばねは底辺の両端 A、C および中点 B に取り付ける。剛体板の重心の鉛直変位 $\delta_V$ を求めよ。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_material-1-original.png)

#### 题目描述

底边 $b$、高 $h$ 的直角三角形刚板，单位面积重量为 $q$，由底边两端 A、C 和中点 B 的三根相同竖直弹簧支承。弹簧刚度为 $k$、长 $s$，板厚为 1。求板重心的竖直位移。

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
F_A+F_B+F_C=W,\qquad
\frac b2(F_C-F_A)=\frac b6W.
$$

これらを解くと

$$
F_A=\frac W6,\qquad F_B=\frac W3,\qquad F_C=\frac W2.
$$

重心の鉛直変位は底辺上の $x=x_G$ と同じ一次変位であり

$$
\delta_V=v_A+\frac{2}{3}(v_C-v_A)
=\frac{W}{6k}+\frac23\frac{W}{3k}
=\frac{7W}{18k}.
$$

よって

$$
\boxed{\delta_V=\frac{7qbh}{36k}\quad\text{（下向き）}}.
$$

$q$ は質量密度ではなく単位面積当たりの**重量**なので、さらに重力加速度を掛ける必要はない。
