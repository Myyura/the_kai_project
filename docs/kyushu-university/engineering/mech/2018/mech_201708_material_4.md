---
sidebar_label: "2017年8月実施 問4（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Thin-Walled-Pressure-Vessels
  - Engineering.Mechanics-of-Materials.Stress-Transformation
  - Engineering.Mechanics-of-Materials.Torsion
---

# 九州大学 工学府 機械系専攻 2017年8月実施 材料力学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、両端が閉じられた薄肉円筒容器を含む構造体が、内圧 $q$（未知）、荷重 $P$（未知）および $Q$（未知）を受けている。図のように、点 A を原点とし、容器軸方向を $x$ 方向とする $xy$ 直交座標系を容器中央部外側表面に定義する。また、$xy$ 直交座標系を $\theta=\pi/4$ 回転させた $\xi\eta$ 直交座標系を定義する。ここで、$\theta$ は $xy$ 平面内における座標系の回転角である。点 A における、$x,y,\xi$ 方向の垂直ひずみ $\varepsilon_x,\varepsilon_y,\varepsilon_\xi$ を測定したところ、$\varepsilon_x=\varepsilon_y=\varepsilon_0$、$\varepsilon_\xi=2\varepsilon_0$ であった。このとき、次の各問に答えよ。必要に応じて下記のひずみ変換式を使用してもよい。ここで、$\gamma_{xy}$ は $x$ 軸と $y$ 軸のせん断ひずみである。（35点）

$$
\begin{aligned}
\varepsilon_\xi={}&\varepsilon_x\cos^2\theta+\varepsilon_y\sin^2\theta\\
&+\gamma_{xy}\cos\theta\sin\theta.
\end{aligned}
$$

**(1)** $x$ 方向の垂直応力 $\sigma_x$ と $y$ 方向の垂直応力 $\sigma_y$ の関係について、括弧【 】内における正しい関係式を選べ。

垂直ひずみの測定結果より、【$\sigma_x>\sigma_y$、$\sigma_x=\sigma_y$、$\sigma_x<\sigma_y$】と推測できる。

**(2)** 点 A における $\sigma_x,\sigma_y,\tau_{xy}$ を $\varepsilon_0$ を用いて表わせ。ここで、$\tau_{xy}$ は $x$ 一定の面に作用する $y$ 方向のせん断応力である。

**(3)** $q,P,Q$ を $\varepsilon_0$ を用いて表わせ。

図中、$\ell$ は容器長さ、$d$ は外直径、$2a$ は棒の長さ、$h$ は肉厚、$E$ はヤング率、$\nu$ はポアソン比であり、$\ell\gg a$、$d\gg h$ である。

![原題の薄肉円筒・荷重・測定座標](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_material-4-original.png)

#### 题目描述

如图，包含两端封闭薄壁圆筒容器的结构承受未知内压 $q$、未知载荷 $P$ 和 $Q$。在容器中央外表面，以 A 点为原点、以容器轴向为 $x$ 方向建立 $xy$ 直角坐标系，再将该坐标系在 $xy$ 平面内旋转 $\theta=\pi/4$，建立 $\xi\eta$ 直角坐标系。测量 A 点沿 $x,y,\xi$ 方向的正应变，得到 $\varepsilon_x=\varepsilon_y=\varepsilon_0$、$\varepsilon_\xi=2\varepsilon_0$。回答下列问题。需要时可使用上面的应变变换式，其中 $\gamma_{xy}$ 为 $x$ 轴与 $y$ 轴间的剪应变。（35分）

**(1)** 关于 $x$ 方向正应力 $\sigma_x$ 与 $y$ 方向正应力 $\sigma_y$ 的关系，从括号内选择正确的关系式。

根据正应变测量结果，可推断【$\sigma_x>\sigma_y$、$\sigma_x=\sigma_y$、$\sigma_x<\sigma_y$】。

**(2)** 用 $\varepsilon_0$ 表示 A 点的 $\sigma_x,\sigma_y,\tau_{xy}$。其中 $\tau_{xy}$ 是作用在 $x$ 为常数的面上、沿 $y$ 方向的剪应力。

**(3)** 用 $\varepsilon_0$ 表示 $q,P,Q$。

图中 $\ell$ 为容器长度，$d$ 为外径，$2a$ 为杆长，$h$ 为壁厚，$E$ 为杨氏模量，$\nu$ 为泊松比，且 $\ell\gg a$、$d\gg h$。荷载方向和固定方式如图。

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
