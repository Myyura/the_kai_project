---
sidebar_label: "2014年度 問4（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Thin-Walled-Pressure-Vessels
  - Engineering.Mechanics-of-Materials.Stress-Transformation
---

# 九州大学 工学府 機械系専攻 2014年度 材料力学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図4の薄肉円筒容器が未知の内圧 $p$ を受けている。外直径 $D$、肉厚 $h\ll D$、長さ $\ell\gg D$、ヤング率 $E$、ポアソン比 $\nu$ とする。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2014/material-4-original.png)

1. 中央部表面 A で、容器軸 $x$ と $45^\circ$ をなす $\xi$ 方向の垂直ひずみを測定したところ $\varepsilon_0$ であった。内圧 $p$ を求めよ。
2. A における外直径の変化量 $\delta$ を $\varepsilon_0$ の関数として求めよ。

必要なら、次の応力変換式を用いてよい。

$$
\sigma_\xi=\sigma_x\cos^2\theta+\sigma_y\sin^2\theta
+2\tau_{xy}\cos\theta\sin\theta.
$$

#### 题目描述

封闭薄壁圆筒的外径为 $D$、壁厚 $h\ll D$、长 $\ell\gg D$，材料参数为 $E,\nu$，受到未知内压 $p$。中部表面沿与轴向成 $45^\circ$ 的方向测得正应变 $\varepsilon_0$。求内压及外径改变量。

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
