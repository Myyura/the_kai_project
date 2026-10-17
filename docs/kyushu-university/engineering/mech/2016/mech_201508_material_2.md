---
sidebar_label: "2015年8月実施 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2015年8月実施 材料力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の問いに答えよ。（35点）

高さ $d$ の浮きを水にそっと浮かべた。次に、片持ちはり AB を浮きの上面とはりの下面がちょうど接する高さで壁に取り付けた。このとき、水面とはりの下面との距離は $c$ で、はりは水面と平行である。また、はりと浮きは、高さ $h$ の回転支点を介してつながれている。ただし、$h\ll c<d$ である。浮きは、傾かずに水面と垂直な方向に浮き沈みするものとする。また、浮きの密度は $\rho_f$、水の密度は $\rho_w$、浮きの水面に平行な断面の断面積は $S$、重力加速度は $g$ で、$\rho_f<\rho_w$ である。

**(1)** $c$ と $d$ の関係を求めよ。

**(2)** さらに、はり先端の点 A に下向きに荷重 $P$ を加えた。このときの点 A の変位を求めよ。

図中、はりの長さは $\ell$、$E$ はヤング率、$I$ は断面二次モーメントであり、B は固定端である。

![原題の浮きと片持ちはり](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_material-2-original.png)

#### 题目描述

回答下列问题。（35分）

将高度为 $d$ 的浮块轻轻放在水面上。随后将悬臂梁 AB 固定在墙上，使浮块上表面恰好与梁的下表面接触。此时水面与梁下表面的距离为 $c$，梁与水面平行。此外，梁与浮块通过高度为 $h$ 的转动支点连接，且 $h\ll c<d$。浮块不发生倾斜，仅沿垂直于水面的方向升降。浮块密度为 $\rho_f$，水的密度为 $\rho_w$，浮块平行于水面的截面积为 $S$，重力加速度为 $g$，且 $\rho_f<\rho_w$。

**(1)** 求 $c$ 与 $d$ 的关系。

**(2)** 进一步在梁端 A 点施加向下的载荷 $P$。求此时 A 点的位移。

图中梁长为 $\ell$，$E$ 为杨氏模量，$I$ 为截面二次矩，B 为固定端。

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
