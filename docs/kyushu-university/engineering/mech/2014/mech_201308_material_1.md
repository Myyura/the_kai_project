---
sidebar_label: "2013年8月実施 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2013年8月実施 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1で弾性体棒OA，OB，OCの断面積を $A$，長さを $\ell$ とする。弾性体棒OA，OCのヤング率は $E_1$，弾性体棒OBのヤング率は $E_2$ である。次の問に答えよ。（35点）

**1)** ある方向 $\theta$ に荷重 $P$ をかけると，点Oは真上（点Aの方向）に変位した。弾性体棒OA，OB，OCにかかる力を $Q,R,S$ とし，$R$ と $S$，$Q$ と $S$ の関係をそれぞれ求めよ。

**2)** $\theta$ を $E_1,E_2$ で表せ。

![原題の図1：三本の弾性棒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_material-1-original.png)

図中の○はピン継手を表す。各棒のなす角は $120^\circ$，棒OBは右向き水平線から下方に $30^\circ$，荷重 $P$ の方向 $\theta$ は同じ水平線から上方に測る。

### 题目描述

图1中，弹性杆OA、OB、OC的截面积均为 $A$，长度均为 $\ell$。OA、OC的杨氏模量为 $E_1$，OB的杨氏模量为 $E_2$。回答下列问题。（35分）

**1)** 沿某方向 $\theta$ 施加载荷 $P$ 后，O点沿正上方，即指向A的方向位移。将OA、OB、OC所受的力分别记为 $Q,R,S$，分别求 $R$ 与 $S$、$Q$ 与 $S$ 的关系。

**2)** 用 $E_1,E_2$ 表示 $\theta$。

图中圆圈表示铰接，各杆夹角为 $120^\circ$；OB与水平向右方向之间向下的夹角为 $30^\circ$，载荷方向 $\theta$ 从该水平线向上计量。

## **Kai**

### (1)

引張軸力を正とし、O の上向き変位を $v>0$ とおく。各杆の伸びは、固定端へ向かう単位ベクトルと変位の内積の負で与えられるので

$$
\Delta\ell_{OA}=-v,\qquad
\Delta\ell_{OB}=\Delta\ell_{OC}=\frac v2.
$$

したがって

$$
\begin{gathered}
Q=-\frac{E_1A}{\ell}v,\\
R=\frac{E_2A}{2\ell}v,\\
S=\frac{E_1A}{2\ell}v,
\end{gathered}
$$

すなわち

$$
\boxed{R=\frac{E_2}{E_1}S,\qquad Q=-2S}.
$$

OA は圧縮、OB と OC は引張りである。

### (2)

O の水平方向、鉛直方向のつり合いから

$$
\begin{gathered}
P\cos\theta=\frac{\sqrt3}{2}(S-R),\\
P\sin\theta=\frac{R+S}{2}-Q.
\end{gathered}
$$

(1) の関係を代入すると

$$
\begin{gathered}
P\cos\theta=\frac{\sqrt3(E_1-E_2)}{2E_1}S,\\
P\sin\theta=\frac{5E_1+E_2}{2E_1}S.
\end{gathered}
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
