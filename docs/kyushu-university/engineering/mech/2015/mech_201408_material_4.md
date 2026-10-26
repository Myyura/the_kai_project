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

図4のように、薄肉円筒が内圧 $q_0$ を受けている。次の各問に答えよ。（35点）

**(1)** 容器中央部表面（点 A）において、$\sigma_x=\sigma_y$ となるようにさらに荷重 $P$ を作用させる。このときの $P$ を $q_0$ の関数として求めよ。

**(2)** (1) で求めた $P$ に加え、$Q$ も作用させた。点 A の $x$-$y$ 平面において、$x$-$y$ 軸から $\theta$ だけ傾いた軸である $\xi$-$\eta$ 軸において垂直ひずみを測定すると、$\varepsilon_\xi=-\nu\varepsilon_\eta$ であった。このときの $Q$ を $q_0$ の関数として求めよ。必要に応じて下記の応力変換式を使用してもよい。

$$
\begin{aligned}
\sigma_\xi={}&\sigma_x\cos^2\theta+\sigma_y\sin^2\theta\\
&+2\tau_{xy}\cos\theta\sin\theta.
\end{aligned}
$$

図中、$D$ は外直径、$\ell$ は容器長さ、$h$ は肉厚、$E$ はヤング率、$\nu$ はポアソン比であり、$\ell\gg a>D\gg h$。各端の腕の長さは中心からそれぞれ $a$ で、荷重の向きは図示のとおりである。

![図4：内圧・軸荷重・ねじりを受ける薄肉円筒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_material-4-original.png)

### 题目描述

如图4，薄壁圆筒承受内压 $q_0$。回答下列问题。（35分）

**(1)** 进一步施加载荷 $P$，使容器中央表面的 A 点满足 $\sigma_x=\sigma_y$。将此时的 $P$ 表示为 $q_0$ 的函数。

**(2)** 在 (1) 求得的 $P$ 之外，再施加图示载荷 $Q$。在 A 点的 $x$-$y$ 平面内，沿相对 $x$-$y$ 轴转过角度 $\theta$ 的 $\xi$-$\eta$ 轴测量正应变，得到 $\varepsilon_\xi=-\nu\varepsilon_\eta$。将此时的 $Q$ 表示为 $q_0$ 的函数。需要时可使用上面的应力变换式。

图中 $D$ 为外径，$\ell$ 为容器长度，$h$ 为壁厚，$E$ 为杨氏模量，$\nu$ 为泊松比，且 $\ell\gg a>D\gg h$。两端各力臂从中心向两侧的长度均为 $a$，载荷方向如图所示。

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
\begin{gathered}
0=\sigma_\xi\\
=\sigma_0+\tau_{xy}\sin2\theta\\
=\frac{q_0D}{2h}-\frac{4aQ}{\pi D^2h}\sin2\theta.
\end{gathered}
$$

よって

$$
\boxed{Q=\frac{\pi D^3q_0}{8a\sin2\theta}
=\frac{\pi D^3q_0}{16a\cos\theta\sin\theta}}.
$$

図の $0<\theta<\pi/2$ では $Q>0$ である。
