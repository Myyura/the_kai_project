---
sidebar_label: "2016年度 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2016年度 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図の棒 AD、BD はヤング率 $E$、断面積 $A$ の弾性棒であり、CD は半径 $a$ の四分円形の剛体である。A、B、C は壁にピン支持され、D もピン結合である。AD $=b$、AB $=a$、棒 BD と水平線のなす角を $\theta$ とする。D に下向き荷重 $P$ を加える。各棒の伸びは長さに比べて十分小さい。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2016/material-1-original.png)

1. 棒 AD、BD に作用する力をそれぞれ $Q,R$ として、$Q,R$ を求めよ。
2. D の水平方向変位 $\delta_{DH}$ と垂直方向変位 $\delta_{DV}$ を求めよ。

#### 题目描述

两根轴向刚度为 $EA$ 的弹性杆 AD、BD 与半径 $a$ 的四分圆刚体 CD 按图铰接。A、B、C 固定，AD 长 $b$、AB 长 $a$，BD 与水平线夹角为 $\theta$。D 受向下载荷 $P$，变形很小。求 AD、BD 的轴力和 D 的水平、竖直位移。

## **Kai**

### (1)

$Q,R$ 以引張りを正とする。C まわりの力のモーメントのつり合いから

$$
Q+R(\cos\theta+\sin\theta)=P.
$$

剛体 CD は C まわりに微小回転する。CD を結ぶ直線の水平・鉛直成分はともに $a$ なので、D の右向き変位と下向き変位は等しく、これを $v$ とする。棒の伸びは

$$
\lambda_{AD}=v,\qquad
\lambda_{BD}=v(\cos\theta+\sin\theta).
$$

$L_{BD}=b/\cos\theta$ より

$$
R=Q\cos\theta(\cos\theta+\sin\theta).
$$

したがって、

$$
K=1+\cos\theta(\cos\theta+\sin\theta)^2
=1+\cos\theta+2\sin\theta\cos^2\theta
$$

とおけば

$$
\boxed{Q=\frac{P}{K},\qquad
R=\frac{P\cos\theta(\cos\theta+\sin\theta)}{K}}.
$$

いずれも引張力である。

### (2)

AD の伸びが D の右向き変位に等しいため

$$
\boxed{\delta_{DH}=\delta_{DV}
=\frac{Qb}{EA}
=\frac{Pb}{EA\{1+\cos\theta+2\sin\theta\cos^2\theta\}}}.
$$

$\delta_{DH}$ は右向き、$\delta_{DV}$ は下向きの大きさである。
