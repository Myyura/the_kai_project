---
sidebar_label: "2013年8月実施 問4（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Thin-Walled-Pressure-Vessels
  - Engineering.Mechanics-of-Materials.Stress-Transformation
---

# 九州大学 工学府 機械系専攻 2013年8月実施 材料力学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図4のように，薄肉円筒容器が内圧 $p$（未知）を受けている。このとき，次の問に答えよ。（35点）

**1)** 容器中央部表面（A点）において容器軸方向（$x$ 方向）と $45^\circ$ をなす方向の垂直ひずみを測定したところ $\varepsilon_0$ であった。このとき，内圧 $p$ を求めよ。

**2)** A点における外直径の変化量 $\delta$ を $\varepsilon_0$ の関数として求めよ。

ただし，容器の外直径を $D$，肉厚を $h$ とし，$h\ll D$ とする。また，ヤング率を $E$，ポアソン比を $\nu$ とする。必要に応じて下記の応力変換式を使用してもよい。

$$
\begin{aligned}
\sigma_\xi={}&\sigma_x\cos^2\theta+\sigma_y\sin^2\theta\\
&+2\tau_{xy}\cos\theta\sin\theta
\end{aligned}
$$

![原題の図4：薄肉円筒容器と座標](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_material-4-original.png)

図中，容器長さ $\ell$ は $\ell\gg D$ を満たす。

### 题目描述

如图4，薄壁圆筒容器承受未知内压 $p$。回答下列问题。（35分）

**1)** 在容器中央表面的A点，测得与容器轴向（$x$ 方向）成 $45^\circ$ 的方向上的正应变为 $\varepsilon_0$。求内压 $p$。

**2)** 求A点处外直径变化量 $\delta$ 关于 $\varepsilon_0$ 的函数。

容器外直径为 $D$，壁厚为 $h$，且 $h\ll D$。杨氏模量为 $E$，泊松比为 $\nu$。需要时可以使用以下应力变换式：

$$
\begin{aligned}
\sigma_\xi={}&\sigma_x\cos^2\theta+\sigma_y\sin^2\theta\\
&+2\tau_{xy}\cos\theta\sin\theta.
\end{aligned}
$$

图中容器长度为 $\ell$，满足 $\ell\gg D$；坐标及角度定义如图。

## **Kai**

### (1)

薄肉近似での軸方向応力、円周方向応力は

$$
\sigma_x=\frac{pD}{4h},\qquad
\sigma_y=\frac{pD}{2h},\qquad \tau_{xy}=0.
$$

$45^\circ$ 回転した座標では

$$
\sigma_\xi=\sigma_\eta=\frac{\sigma_x+\sigma_y}{2}
=\frac{3pD}{8h}.
$$

したがって

$$
\varepsilon_0=\frac{\sigma_\xi-\nu\sigma_\eta}{E}
=\frac{3pD(1-\nu)}{8Eh},
$$

$$
\boxed{p=\frac{8Eh\varepsilon_0}{3D(1-\nu)}}.
$$

### (2)

円周方向ひずみは

$$
\varepsilon_y=\frac{\sigma_y-\nu\sigma_x}{E}
=\frac{pD(2-\nu)}{4Eh}.
$$

直径の変化率も $\varepsilon_y$ なので

$$
\delta=D\varepsilon_y=\frac{pD^2(2-\nu)}{4Eh}.
$$

(1) の $p$ を代入して

$$
\boxed{\delta=\frac{2D(2-\nu)}{3(1-\nu)}\varepsilon_0}.
$$
