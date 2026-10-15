---
sidebar_label: "2014年度 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2014年度 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1の弾性棒 OA、OB、OC はすべて断面積 $A$、長さ $\ell$ で、外端 A、B、C は固定されたピンに接続されている。OA、OC のヤング率は $E_1$、OB は $E_2$。三本のなす角は $120^\circ$ で、OA は鉛直、OB は水平から右下へ $30^\circ$ 傾く。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2014/material-1-original.png)

1. 水平右向きから角度 $\theta$ の荷重 $P$ を O に加えたところ、O は真上、すなわち A の方向に変位した。OA、OB、OC の力を $Q,R,S$ として、$R$ と $S$、$Q$ と $S$ の関係を求めよ。
2. $\theta$ を $E_1,E_2$ で表せ。

#### 题目描述

图示三根长 $\ell$、截面积 $A$ 的杆在 O 铰接，外端固定。相邻杆夹角为 $120^\circ$，OA 竖直，OB 向右下倾斜 $30^\circ$。OA、OC 的杨氏模量为 $E_1$，OB 为 $E_2$。施加方向角为 $\theta$ 的力 $P$ 后，O 恰好只向上移动。求三个轴力之间的关系及 $\theta$。

## **Kai**

### (1)

引張軸力を正とし、O の上向き変位を $v>0$ とおく。各杆の伸びは、固定端へ向かう単位ベクトルと変位の内積の負で与えられるので

$$
\Delta\ell_{OA}=-v,\qquad
\Delta\ell_{OB}=\Delta\ell_{OC}=\frac v2.
$$

したがって

$$
Q=-\frac{E_1A}{\ell}v,\qquad
R=\frac{E_2A}{2\ell}v,\qquad
S=\frac{E_1A}{2\ell}v,
$$

すなわち

$$
\boxed{R=\frac{E_2}{E_1}S,\qquad Q=-2S}.
$$

OA は圧縮、OB と OC は引張りである。

### (2)

O の水平方向、鉛直方向のつり合いから

$$
P\cos\theta=\frac{\sqrt3}{2}(S-R),\qquad
P\sin\theta=\frac{R+S}{2}-Q.
$$

(1) の関係を代入すると

$$
P\cos\theta=\frac{\sqrt3(E_1-E_2)}{2E_1}S,\qquad
P\sin\theta=\frac{5E_1+E_2}{2E_1}S.
$$

よって、角度の象限まで含めた答えは

$$
\boxed{\theta=\operatorname{atan2}\!\left(5E_1+E_2,\sqrt3(E_1-E_2)\right)}.
$$

特に図のように $E_1>E_2$ なら

$$
\boxed{\tan\theta=\frac{5E_1+E_2}{\sqrt3(E_1-E_2)},\quad 0<\theta<\frac\pi2}.
$$

$E_1=E_2$ では鉛直上向き、すなわち $\theta=\pi/2$ となる。
