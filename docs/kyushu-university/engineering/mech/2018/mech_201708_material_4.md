---
sidebar_label: "2018年度 問4（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Thin-Walled-Pressure-Vessels
  - Engineering.Mechanics-of-Materials.Stress-Transformation
  - Engineering.Mechanics-of-Materials.Torsion
---

# 九州大学 工学府 機械系専攻 2018年度 材料力学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図の両端が閉じた薄肉円筒容器は、未知の内圧 $q$、軸方向荷重 $P$、長さ $2a$ の腕に作用する一対の荷重 $Q$ を受ける。容器の外直径は $d$、肉厚は $h$、長さは $\ell$、ヤング率は $E$、ポアソン比は $\nu$ で、$\ell\gg a$、$d\gg h$ とする。

容器中央外表面の A を原点とし、軸方向を $x$、円周方向を $y$ とする。$xy$ 座標系を $\theta=\pi/4$ 回転した座標を $\xi\eta$ とする。測定された垂直ひずみは $\varepsilon_x=\varepsilon_y=\varepsilon_0$、$\varepsilon_\xi=2\varepsilon_0$ であった。ひずみ変換式は

$$
\varepsilon_\xi=\varepsilon_x\cos^2\theta
+\varepsilon_y\sin^2\theta+\gamma_{xy}\cos\theta\sin\theta
$$

である。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2018/material-4-original.png)

1. $\sigma_x>\sigma_y$、$\sigma_x=\sigma_y$、$\sigma_x<\sigma_y$ のうち正しい関係を選べ。
2. A の $\sigma_x,\sigma_y,\tau_{xy}$ を $\varepsilon_0$ を用いて表せ。
3. $q,P,Q$ を $\varepsilon_0$ を用いて表せ。

#### 题目描述

图示两端封闭的薄壁圆筒受未知内压 $q$、轴向拉力 $P$，以及力臂长 $2a$ 上的一对力 $Q$。外径为 $d$、壁厚为 $h$、长为 $\ell$，材料参数为 $E,\nu$，且 $\ell\gg a$、$d\gg h$。外表面 A 处轴向、周向应变均为 $\varepsilon_0$，沿与轴线成 $45^\circ$ 方向的应变为 $2\varepsilon_0$。比较两方向正应力，求正应力与剪应力，再求 $q,P,Q$。

## **Kai**

### (1)

外表面は平面応力状態なので

$$
\varepsilon_x=\frac{\sigma_x-\nu\sigma_y}{E},\qquad
\varepsilon_y=\frac{\sigma_y-\nu\sigma_x}{E}.
$$

両式を引き、$\varepsilon_x=\varepsilon_y$ を用いると

$$
0=\frac{1+\nu}{E}(\sigma_x-\sigma_y),
\qquad \boxed{\sigma_x=\sigma_y}.
$$

### (2)

垂直ひずみの式と $45^\circ$ のひずみ変換式から

$$
\boxed{\sigma_x=\sigma_y=\frac{E\varepsilon_0}{1-\nu}},
\qquad
2\varepsilon_0=\varepsilon_0+\frac{\gamma_{xy}}2.
$$

したがって $\gamma_{xy}=2\varepsilon_0$、$G=E/[2(1+\nu)]$ より

$$
\boxed{\tau_{xy}=G\gamma_{xy}
=\frac{E\varepsilon_0}{1+\nu}}.
$$

### (3)

薄肉近似での円周応力と軸応力は

$$
\sigma_y=\frac{qd}{2h},\qquad
\sigma_x=\frac{qd}{4h}+\frac{P}{\pi dh}.
$$

(2) を代入して

$$
\boxed{q=\frac{2Eh\varepsilon_0}{d(1-\nu)},\qquad
P=\frac{\pi Edh\varepsilon_0}{2(1-\nu)}}.
$$

一対の荷重によるトルクは $2aQ$。薄肉円筒のねじりトルクは $\tau_{xy}(\pi dh)(d/2)$ なので

$$
2aQ=\frac{\pi d^2h}{2}\tau_{xy}.
$$

よって

$$
\boxed{Q=\frac{\pi Ed^2h\varepsilon_0}{4a(1+\nu)}}.
$$
