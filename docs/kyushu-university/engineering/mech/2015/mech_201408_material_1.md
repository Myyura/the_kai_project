---
sidebar_label: "2014年8月実施 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2014年8月実施 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1の構造において、次の各問に答えよ。（35点）

**(1)** 棒 AB、棒 BC からなる構造体の点 B に垂直方向の荷重 $P$、水平方向の荷重 $Q$ を加えたときの、点 B の垂直方向変位 $u_y$ および水平方向変位 $u_x$ を求めよ。

**(2)** 点 B と点 E の間には微小な隙間（水平方向 $\delta_x=0$、垂直方向 $\delta_y\ne0$）がある。(1) の荷重 $P,Q$ によって点 B と点 E がちょうど接したとする。この時、点 B と点 E をピン結合した後、外力を取り除いた。その時、棒 AB に作用する力を求めよ。

図中、$E$ はヤング率、$A$ は断面積、丸印はピン継手を表す。AB、ED の長さは $\ell$、斜材の角度は $45^\circ$。座標は右向きを $x$、上向きを $y$ とする。

![図1：隙間をもつ二つの棒構造](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_material-1-original.png)

#### 题目描述

对于图1所示结构，回答下列问题。（35分）

**(1)** 在由杆 AB、BC 构成的结构的 B 点，施加图示竖直方向载荷 $P$ 和水平方向载荷 $Q$。求 B 点的竖直位移 $u_y$ 和水平位移 $u_x$。

**(2)** B 点与 E 点之间存在微小间隙，水平方向 $\delta_x=0$，竖直方向 $\delta_y\ne0$。假设在 (1) 的载荷 $P,Q$ 作用下，B 点与 E 点恰好接触。此时将两点铰接，再撤去外力。求此时杆 AB 中的力。

图中 $E$ 为杨氏模量，$A$ 为截面积，圆圈表示铰接。AB、ED 长度为 $\ell$，斜杆与相应水平或竖直方向的夹角为 $45^\circ$。$x$ 轴向右，$y$ 轴向上，支承与载荷方向如图。

## **Kai**

### (1)

B のつり合いから、引張りを正とする軸力は

$$
N_{AB}=\sqrt2P,\qquad N_{BC}=Q-P.
$$

$L_{BC}=\ell/\sqrt2$ なので、ひずみエネルギーは

$$
U=\frac{(\sqrt2P)^2\ell}{2EA}
+\frac{(Q-P)^2\ell}{2\sqrt2EA}.
$$

荷重 $P$ は $-y$ 方向に作用することに注意して

$$
\boxed{u_x=\frac{\partial U}{\partial Q}
=\frac{\ell}{\sqrt2EA}(Q-P)},
$$

$$
\boxed{\begin{gathered}
u_y=-\frac{\partial U}{\partial P}\\
=\frac{\ell}{\sqrt2EA}\{Q-(1+2\sqrt2)P\}
\end{gathered}}.
$$

### (2)

以下、初期の E が B より下にある隙間の大きさを $g=\delta_y>0$ とする。接合後に上側杆系がピンから受ける力を $(q,-p)$ とすれば、下側杆系が受ける力は $(-q,p)$。$k=\ell/(\sqrt2EA)$ とおくと、(1) と下側杆系の対称な関係から

$$
\begin{aligned}
u_{Bx}&=k(q-p),&u_{By}&=k\{q-(1+2\sqrt2)p\},\\
u_{Ex}&=k\{p-(1+2\sqrt2)q\},&u_{Ey}&=k(p-q).
\end{aligned}
$$

各変位は接合前の無応力位置から測る。ピンで結ばれた両点の変形適合条件は

$$
u_{Bx}=u_{Ex},\qquad u_{Ey}-u_{By}=g.
$$

第1式より $q=(\sqrt2-1)p$。第2式に代入すると $4kp=g$ だから

$$
p=\frac{EAg}{2\sqrt2\ell}.
$$

AB の軸力は $\sqrt2p$ となり、

$$
\boxed{N_{AB}=\frac{EA\delta_y}{2\ell}\quad\text{（引張り）}}.
$$

なお接合前の E が動かない状態で $u_x=0$ とするには $Q=P$ が必要であり、この場合 $\delta_y=2P\ell/(EA)$、残留軸力は元の外力の大きさ $P$ に等しい。
