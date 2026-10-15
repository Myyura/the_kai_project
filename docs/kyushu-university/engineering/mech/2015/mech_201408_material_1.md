---
sidebar_label: "2015年度 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2015年度 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1の各弾性棒の軸剛性は $EA$ で、丸印はピン継手を表す。AB、ED の長さは $\ell$、斜材の角度は $45^\circ$。BC は水平、EF は鉛直である。A、C、D、F は固定されている。座標は右向きを $x$、上向きを $y$ とする。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2015/material-1-original.png)

1. AB、BC からなる構造の B に、下向き荷重 $P$ と右向き荷重 $Q$ を加えたときの $u_y,u_x$ を求めよ。
2. B と E の間には水平方向の隙間がなく、鉛直方向に微小な隙間 $\delta_y$ がある。(1) の荷重によって両点がちょうど接したところでピン結合し、外力を取り除いた。このとき AB に作用する力を求めよ。

#### 题目描述

图示四杆的轴向刚度均为 $EA$，斜杆 AB、ED 长 $\ell$、倾角为 $45^\circ$，BC 水平、EF 竖直。A、C、D、F 固定，B、E 初始竖直错开微小间隙 $\delta_y$。先求只对上部杆系 B 加向下力 $P$、向右力 $Q$ 时的水平与竖直位移。再在加载使 B、E 恰好重合时将其铰接，卸载后求 AB 的残余轴力。

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
\boxed{u_y=-\frac{\partial U}{\partial P}
=\frac{\ell}{\sqrt2EA}\{Q-(1+2\sqrt2)P\}}.
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
