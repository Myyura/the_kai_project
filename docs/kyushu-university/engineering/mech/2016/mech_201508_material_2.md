---
sidebar_label: "2016年度 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2016年度 材料力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

高さ $d$ の浮きを水に浮かべ、図のように片持ちはり AB の先端 A と浮きを高さ $h$ の回転支点で結ぶ。はりは長さ $\ell$、曲げ剛性 $EI$ であり、B で壁に固定され、初期状態で水面と平行である。水面からはり下面までの距離を $c$ とし、$h\ll c<d$ とする。浮きは傾かず鉛直方向にだけ動く。浮きの密度を $\rho_f$、水の密度を $\rho_w$、水平断面積を $S$、重力加速度を $g$ とし、$\rho_f<\rho_w$ とする。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2016/material-2-original.png)

1. $c$ と $d$ の関係を求めよ。
2. A に下向き荷重 $P$ を加えたとき、A の変位を求めよ。

#### 题目描述

高 $d$、水平截面积 $S$、密度 $\rho_f$ 的浮块漂浮在密度 $\rho_w$ 的水中，并经高 $h$ 的铰支点与悬臂梁端 A 相连。梁长 $\ell$、弯曲刚度 $EI$，B 固定，初始水平，梁底高出水面 $c$，且 $h\ll c<d$。浮块只做竖直运动。求 $c,d$ 的关系，以及在 A 向下施加力 $P$ 后的位移。

## **Kai**

### (1)

図の寸法を保てば、浮きの水面上の高さは $c-h$、水中にある高さは $d-c+h$ である。初期の浮力と重力のつり合いより

$$
\rho_wgS(d-c+h)=\rho_fgSd.
$$

したがって

$$
\boxed{c=h+\left(1-\frac{\rho_f}{\rho_w}\right)d}.
$$

$h\ll c$ として支点高さを省略すれば、$c\simeq(1-\rho_f/\rho_w)d$ となる。

### (2)

A の下向き変位を $\delta$ とする。浮きが部分的に水面上にある範囲では、追加浮力は $\rho_wgS\delta$。これは A に上向きに作用するので、はりが受ける正味の下向き端力は $P-\rho_wgS\delta$ である。

$$
\delta=\frac{(P-\rho_wgS\delta)\ell^3}{3EI}.
$$

よって

$$
\boxed{\delta=\frac{P\ell^3}{3EI+\rho_wgS\ell^3}}.
$$

はりの先端ばね定数 $3EI/\ell^3$ と浮力によるばね定数 $\rho_wgS$ が加算される。

この式の適用範囲は $0\leq\delta<c-h$ である。完全に水没するまで大きな荷重を加える場合、浮力の増分は $(\rho_w-\rho_f)gSd$ で飽和するため、同じはりモデルのもとでは

$$
\delta=\frac{\{P-(\rho_w-\rho_f)gSd\}\ell^3}{3EI}
$$

に切り替わる。両式は $\delta=c-h$ で連続である。
