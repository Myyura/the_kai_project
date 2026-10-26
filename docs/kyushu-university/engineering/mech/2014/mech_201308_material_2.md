---
sidebar_label: "2013年8月実施 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2013年8月実施 材料力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図2の構造において，次の問に答えよ。（40点）

**1)** AB間のせん断力線図（SFD），曲げモーメント線図（BMD）を描け。

**2)** 点Oの垂直方向変位 $\delta_{OV}$ を求めよ。

![原題の図2：等分布荷重を受ける門形構造](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_material-2-original.png)

図中，$q$ は分布力（$\mathrm{N/m}$），$E$ はヤング率，$I$ は断面二次モーメントを表す。$AO=OB=AC=BD=\ell$ で，C，D端は固定され，AB全体に下向きの等分布荷重 $q$ が作用している。

### 题目描述

对于图2的结构，回答下列问题。（40分）

**1)** 画出AB段的剪力图（SFD）和弯矩图（BMD）。

**2)** 求O点的竖直位移 $\delta_{OV}$。

图中 $q$ 为分布载荷（$\mathrm{N/m}$），$E$ 为杨氏模量，$I$ 为截面二次矩。$AO=OB=AC=BD=\ell$，C、D端固定，AB全段承受向下的均布载荷 $q$。

## **Kai**

軸方向変形を無視する通常の曲げ理論で求める。対称性より A、B の鉛直変位は 0、節点の水平変位も 0 とする。

### (1)

AB の両端の負曲げモーメントの大きさを $m$、A の回転角の大きさを $\alpha$ とする。横梁から

$$
\alpha=\frac{q\ell^3}{3EI}-\frac{m\ell}{EI}.
$$

柱は両端の横変位が 0 で、下端固定だから、上端の回転剛性は $4EI/\ell$。節点のモーメントのつり合いより

$$
m=\frac{4EI}{\ell}\alpha.
$$

したがって

$$
\boxed{m=\frac{4q\ell^2}{15}}.
$$

O を原点として右向きに $x$ をとり、正曲げを下側引張りと定めると、$-\ell<x<\ell$ で

$$
\boxed{V(x)=-qx,\qquad
M(x)=\frac{7q\ell^2}{30}-\frac{qx^2}{2}}.
$$

SFD は $V(-\ell)=q\ell$ から $V(\ell)=-q\ell$ への直線、BMD は両端 $-4q\ell^2/15$、中央 $7q\ell^2/30$ の放物線である。反曲点は $x=\pm\ell\sqrt{7/15}$。

![AB の SFD と BMD](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_material-2-diagrams.svg)

### (2)

長さ $2\ell$ の単純支持梁の中央たわみから、両端モーメントによる上向き変位を差し引くと

$$
\begin{gathered}
\delta_{OV}=\frac{5q(2\ell)^4}{384EI}
-\frac{m(2\ell)^2}{8EI}\\
=\left(\frac5{24}-\frac2{15}\right)\frac{q\ell^4}{EI}.
\end{gathered}
$$

よって

$$
\boxed{\delta_{OV}=\frac{3q\ell^4}{40EI}\quad\text{（下向き）}}.
$$
