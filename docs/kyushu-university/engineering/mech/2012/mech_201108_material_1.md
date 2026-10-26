---
sidebar_label: "2011年8月実施 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Thin-Walled-Pressure-Vessels
---

# 九州大学 工学府 機械系専攻 2011年8月実施 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の問に答えよ。（35点）

内圧 $p$ をうける薄肉円筒について，図1のように上端を固定し，下端に質量 $M$ のおもりをぶら下げる。軸方向の中央付近における直径方向変形量 $\Delta d$ を求めよ。ただし，ヤング率は $E$，ポアソン比は $\nu$ とし，薄肉円筒の自重の影響は無視する。重力加速度を $g$ とする。

![原題の図1：内圧とおもりを受ける薄肉円筒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_material-1-original.png)

図中の円筒長さ，直径，肉厚をそれぞれ $L,d,h$ とし，$L\gg d\gg h$ である。

### 题目描述

回答下列问题。（35分）

承受内压 $p$ 的薄壁圆筒如图1，上端固定，下端悬挂质量为 $M$ 的重物。求轴向中央附近的直径变化量 $\Delta d$。杨氏模量为 $E$，泊松比为 $\nu$，忽略圆筒自重，重力加速度为 $g$。

图中圆筒长度、直径、壁厚分别为 $L,d,h$，满足 $L\gg d\gg h$。

## **Kai**

軸方向を $x$、円周方向を $y$ とする。内圧による端面力におもりの重力が加わるので、軸方向応力は

$$
\begin{gathered}
\sigma_x\pi dh=p\frac{\pi d^2}{4}+Mg,\\
\sigma_x=\frac{pd}{4h}+\frac{Mg}{\pi dh}.
\end{gathered}
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
