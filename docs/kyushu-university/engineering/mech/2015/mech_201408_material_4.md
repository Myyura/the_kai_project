---
sidebar_label: "2014年8月実施 問4（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Thin-Walled-Pressure-Vessels
  - Engineering.Mechanics-of-Materials.Stress-Transformation
  - Engineering.Mechanics-of-Materials.Torsion
---

# 九州大学 工学府 機械系専攻 2014年8月実施 材料力学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図4の両端が閉じた薄肉円筒は内圧 $q_0$ を受けている。外直径は $D$、肉厚は $h$、長さは $\ell$、材料定数は $E,\nu$ とし、$\ell\gg a>D\gg h$ とする。両端に図の軸方向引張力 $P$ と、長さ $2a$ の腕に作用する一対の荷重 $Q$ を加えられる。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_material-4-original.png)

1. 中央表面 A で軸方向応力 $\sigma_x$ と円周方向応力 $\sigma_y$ が等しくなる $P$ を $q_0$ の関数として求めよ。
2. その $P$ に加えて図の $Q$ を作用させる。$xy$ 軸から $\theta$ だけ傾いた $\xi\eta$ 軸方向の垂直ひずみが $\varepsilon_\xi=-\nu\varepsilon_\eta$ を満たすとき、$Q$ を $q_0$ の関数として求めよ。

必要なら

$$
\sigma_\xi=\sigma_x\cos^2\theta+\sigma_y\sin^2\theta
+2\tau_{xy}\cos\theta\sin\theta
$$

を用いてよい。

#### 题目描述

图示封闭薄壁圆筒受内压 $q_0$，外径 $D$、壁厚 $h$、长 $\ell$、材料参数 $E,\nu$，且 $\ell\gg a>D\gg h$。求使中部轴向和环向正应力相等的端部拉力 $P$；再加图示力偶 $Q$ 后，若倾斜 $\theta$ 的两正交方向应变满足 $\varepsilon_\xi=-\nu\varepsilon_\eta$，求 $Q$。

## **Kai**

### (1)

$$
\sigma_x=\frac{q_0D}{4h}+\frac{P}{\pi Dh},\qquad
\sigma_y=\frac{q_0D}{2h}.
$$

$\sigma_x=\sigma_y$ とおいて

$$
\boxed{P=\frac{\pi D^2q_0}{4}}.
$$

以下、共通の正応力を $\sigma_0=q_0D/(2h)$ とする。

### (2)

回転した座標でも平面応力の Hooke の法則が成り立つので

$$
\varepsilon_\xi+\nu\varepsilon_\eta
=\frac{1-\nu^2}{E}\sigma_\xi.
$$

したがって与えられたひずみ条件は $\sigma_\xi=0$ を意味する。図の力偶の向きでは A における剪断応力は負であり

$$
\tau_{xy}=-\frac{2(2aQ)}{\pi D^2h}
=-\frac{4aQ}{\pi D^2h}.
$$

応力変換式から

$$
0=\sigma_\xi=\sigma_0+\tau_{xy}\sin2\theta
=\frac{q_0D}{2h}-\frac{4aQ}{\pi D^2h}\sin2\theta.
$$

よって

$$
\boxed{Q=\frac{\pi D^3q_0}{8a\sin2\theta}
=\frac{\pi D^3q_0}{16a\cos\theta\sin\theta}}.
$$

図の $0<\theta<\pi/2$ では $Q>0$ である。
