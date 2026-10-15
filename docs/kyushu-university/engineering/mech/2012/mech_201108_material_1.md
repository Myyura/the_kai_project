---
sidebar_label: "2012年度 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Thin-Walled-Pressure-Vessels
---

# 九州大学 工学府 機械系専攻 2012年度 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

内圧 $p$ を受ける薄肉円筒の上端を固定し、下端に質量 $M$ のおもりをつるす。円筒の長さは $L$、直径は $d$、肉厚は $h$ で、$L\gg d\gg h$ とする。ヤング率を $E$、ポアソン比を $\nu$、重力加速度を $g$ とし、円筒自身の重さを無視する。軸方向の中央付近における直径の変化 $\Delta d$ を求めよ。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2012/material-1-original.png)

#### 题目描述

承受内压 $p$ 的薄壁圆筒上端固定，下端悬挂质量 $M$。圆筒长 $L$、直径 $d$、壁厚 $h$，且 $L\gg d\gg h$；材料参数为 $E,\nu$，重力加速度为 $g$，忽略圆筒自重。求中部的直径变化量 $\Delta d$。

## **Kai**

軸方向を $x$、円周方向を $y$ とする。内圧による端面力におもりの重力が加わるので、軸方向応力は

$$
\sigma_x\pi dh=p\frac{\pi d^2}{4}+Mg,
\qquad
\sigma_x=\frac{pd}{4h}+\frac{Mg}{\pi dh}.
$$

円筒の軸を含む面で切断した半円筒のつり合いから、円周方向応力は

$$
\sigma_y=\frac{pd}{2h}.
$$

薄肉近似では半径方向応力を省略できるため

$$
\varepsilon_y=\frac{\sigma_y-\nu\sigma_x}{E}.
$$

円周の変化率は直径の変化率と等しいので

$$
\boxed{\Delta d=d\varepsilon_y
=\frac{pd^2(2-\nu)}{4Eh}-\frac{\nu Mg}{\pi Eh}}.
$$

正なら直径が増え、負ならおもりによる軸方向引張りの Poisson 効果が優勢となって直径が縮む。
