---
sidebar_label: "2018年度 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Beam-Deflection
---

# 九州大学 工学府 機械系専攻 2018年度 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

ヤング率 $E$、直径 $d$、長さ $\ell$ の棒で図の二つの構造物を作製した。丸印はピン結合を意味し、棒 AC は点 C で床に直角に完全に固定されている。$\ell\gg d$ とする。構造物 I-1 の B、D に、構造物 I-2 の B に、それぞれ鉛直下向きの荷重 $P$ を加える。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2018/material-1-original.png)

構造物 I-1 について、次を求めよ。

1. 棒 AB、BC、AC に作用する力。
2. 点 A の鉛直方向変位と水平方向変位。
3. 点 B の鉛直方向変位と水平方向変位。

構造物 I-2 について、次を求めよ。

4. 点 A の鉛直方向変位と水平方向変位。

#### 题目描述

用杨氏模量 $E$、直径 $d$、长度均为 $\ell$ 的杆组成图示结构；圆点为铰，AC 在 C 点与地面垂直固接，且 $\ell\gg d$。结构 I-1 的 B、D 均受向下载荷 $P$，结构 I-2 只有 B 受向下载荷 $P$。求 I-1 中 AB、BC、AC 的内力及 A、B 的水平与竖直位移，并求 I-2 中 A 的两方向位移。

## **Kai**

断面積と断面二次モーメントを

$$
A_0=\frac{\pi d^2}{4},\qquad I=\frac{\pi d^4}{64}
$$

とし、右向き・上向きをそれぞれ $x,y$ の正方向に取る。ABC、ACD は正三角形なので、斜材は水平となす角が $30^\circ$ である。

### (1)

B の水平・鉛直方向のつり合いより、AB は引張力 $P$、BC は圧縮力 $P$ を受ける。A では左右の水平成分が打ち消し合い、斜材から下向きに $2P\sin30^\circ=P$ が作用する。したがって

$$
\boxed{N_{AB}=P,\qquad N_{BC}=-P,\qquad N_{AC}=-P}
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
-\frac{\sqrt3}{2}u_{Bx}-\frac12(u_{By}+s)=s,
\qquad
-\frac{\sqrt3}{2}u_{Bx}+\frac12u_{By}=-s.
$$

これを解くと

$$
\boxed{u_{Bx}=-\frac{s}{2\sqrt3}
=-\frac{2P\ell}{\sqrt3\pi Ed^2},\qquad
u_{By}=-\frac{5s}{2}
=-\frac{10P\ell}{\pi Ed^2}}.
$$

すなわち B は左向き・下向きに変位する。

### (4)

B のつり合いは変わらないので、AB の引張力は $P$ である。AB が A に及ぼす力は左向きに $\sqrt3P/2$、下向きに $P/2$。AC を片持ちはりとして扱えば

$$
\boxed{u_{Ay}=-\frac{P\ell}{2EA_0}
=-\frac{2P\ell}{\pi Ed^2}},
$$

$$
\boxed{u_{Ax}=-\frac{(\sqrt3P/2)\ell^3}{3EI}
=-\frac{\sqrt3P\ell^3}{6EI}
=-\frac{32\sqrt3P\ell^3}{3\pi Ed^4}}.
$$

構造物 I-2 の AC には曲げも生じるため、これを軸力だけを伝える部材とは扱わない。
