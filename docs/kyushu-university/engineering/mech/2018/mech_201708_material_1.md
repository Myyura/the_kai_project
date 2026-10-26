---
sidebar_label: "2017年8月実施 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Beam-Deflection
---

# 九州大学 工学府 機械系専攻 2017年8月実施 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、ヤング率 $E$、直径 $d$、長さ $\ell$ の棒で二つの構造物を作製した。丸印はピン結合を意味し、棒 AC は点 C で床に直角に完全に固定されている。構造 I-1 においては点 B と点 D に、構造 I-2 において点 B に、それぞれ鉛直方向に荷重 $P$ が作用している。次の各問に答えよ。（40点）

構造物 I-1 において

**(1)** 棒 AB、棒 BC、棒 AC に作用する力を求めよ。

**(2)** 点 A の鉛直方向変位と水平方向変位を求めよ。

**(3)** 点 B の鉛直方向変位と水平方向変位を求めよ。

![構造物I-1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_material_1_figure_1.png)

構造物 I-2 において

**(4)** 点 A の鉛直方向変位と水平方向変位を求めよ。

![構造物I-2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_material_1_figure_2.png)

図中、$\ell\gg d$ とする。

### 题目描述

如图，用杨氏模量为 $E$、直径为 $d$、长度为 $\ell$ 的杆制成两种结构。圆圈表示铰接，杆 AC 在 C 点垂直于地面完全固定。在结构 I-1 的 B、D 两点，以及结构 I-2 的 B 点，分别施加竖直方向的载荷 $P$。回答下列问题。（40分）

对于结构 I-1：

**(1)** 求杆 AB、BC、AC 中的力。

**(2)** 求 A 点的竖直位移和水平位移。

**(3)** 求 B 点的竖直位移和水平位移。

对于结构 I-2：

**(4)** 求 A 点的竖直位移和水平位移。

各杆、支承和载荷方向如相应图所示，且 $\ell\gg d$。

## **Kai**

断面積と断面二次モーメントを

$$
A_0=\frac{\pi d^2}{4},\qquad I=\frac{\pi d^4}{64}
$$

とし、右向き・上向きをそれぞれ $x,y$ の正方向に取る。ABC、ACD は正三角形なので、斜材は水平となす角が $30^\circ$ である。

### (1)

B の水平・鉛直方向のつり合いより、AB は引張力 $P$、BC は圧縮力 $P$ を受ける。A では左右の水平成分が打ち消し合い、斜材から下向きに $2P\sin30^\circ=P$ が作用する。したがって

$$
\boxed{\begin{gathered}
N_{AB}=P,\\
N_{BC}=-P,\\
N_{AC}=-P
\end{gathered}}
$$

となる。ただし軸力の正を引張りとした。

### (2)

対称性から AC は曲がらず、軸方向に縮むだけである。

$$
\boxed{u_{Ax}=0,\qquad u_{Ay}=-\frac{P\ell}{EA_0}
=-\frac{4P\ell}{\pi Ed^2}}.
$$

### (3)

$s=P\ell/(EA_0)$ とおくと、AB の伸びは $s$、BC の伸びは $-s$ である。各部材の軸方向への変位差の射影から

$$
\begin{gathered}
-\frac{\sqrt3}{2}u_{Bx}-\frac12(u_{By}+s)=s,\\
-\frac{\sqrt3}{2}u_{Bx}+\frac12u_{By}=-s.
\end{gathered}
$$

これを解くと

$$
\boxed{\begin{gathered}
u_{Bx}=-\frac{s}{2\sqrt3}
=-\frac{2P\ell}{\sqrt3\pi Ed^2},\\
u_{By}=-\frac{5s}{2}
=-\frac{10P\ell}{\pi Ed^2}
\end{gathered}}.
$$

すなわち B は左向き・下向きに変位する。

### (4)

B のつり合いは変わらないので、AB の引張力は $P$ である。AB が A に及ぼす力は左向きに $\sqrt3P/2$、下向きに $P/2$。AC を片持ちはりとして扱えば

$$
\boxed{u_{Ay}=-\frac{P\ell}{2EA_0}
=-\frac{2P\ell}{\pi Ed^2}},
$$

$$
\boxed{\begin{gathered}
u_{Ax}=-\frac{(\sqrt3P/2)\ell^3}{3EI}\\
=-\frac{\sqrt3P\ell^3}{6EI}\\
=-\frac{32\sqrt3P\ell^3}{3\pi Ed^4}
\end{gathered}}.
$$

構造物 I-2 の AC には曲げも生じるため、これを軸力だけを伝える部材とは扱わない。
