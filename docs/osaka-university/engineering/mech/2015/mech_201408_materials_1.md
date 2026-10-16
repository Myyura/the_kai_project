---
sidebar_label: "2014年8月実施 材料力学 問題1"
tags:
  - Osaka-University
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 大阪大学 工学研究科 機械工学専攻 2014年8月実施 材料力学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、長さ $L$、直径 $d$ の一様な丸棒 AD の左端 A を壁に固定し、水平に設置する。$AB=BC=CD=L/3$ とし、B、C に同じ向きのねじりモーメント $T$ を加える。右端 D の水平直径の両端 E、F に、ばね定数 $k$ の鉛直ばねをそれぞれ取り付け、他端を固定する。棒の横弾性係数を $G$ とし、自重を無視する。

1. 棒の断面二次極モーメント $I_p$ を求めよ。
2. $k=0$ のとき、ねじりモーメント図を描き、B、C、D のねじれ角および棒に生じる最大せん断応力を求めよ。
3. $k\ne0$ のとき、D のねじれ角は微小として、各ばねに生じる力の大きさ $P$ を求めよ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_materials_1-question-fig1.png)

#### 题目描述

如图，均匀圆杆 AD 长 $L$、直径 $d$，水平放置，A 端固定于墙。$AB=BC=CD=L/3$，B、C 处施加同方向的扭矩 $T$。D 端水平直径两端 E、F 各连接一根竖直弹簧，刚度均为 $k$，弹簧另一端固定。杆的剪切模量为 $G$，忽略自重。

1. 求截面极二次矩 $I_p$。
2. $k=0$ 时，画扭矩图，求 B、C、D 的扭转角及杆内最大剪应力。
3. $k\ne0$ 且 D 端转角很小时，求各弹簧力的大小 $P$。

## **Kai**

### (1)

$$
\boxed{I_p=\frac{\pi d^4}{32}}.
$$

### (2)

作用モーメント $T$ の向きを正とし、A からの軸方向座標を $x$ とする。内部ねじりモーメントは

$$
T_{\mathrm{int}}(x)=
\begin{cases}
2T,&0<x<L/3,\\
T,&L/3<x<2L/3,\\
0,&2L/3<x<L.
\end{cases}
$$

![ねじりモーメント図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_materials_1-solution-torque.svg)

$\phi(0)=0$、$d\phi/dx=T_{\mathrm{int}}/(GI_p)$ より

$$
\boxed{\phi_B=\frac{2TL}{3GI_p}},\qquad
\boxed{\phi_C=\phi_D=\frac{TL}{GI_p}}.
$$

最大せん断応力は AB 区間の外周に生じ、

$$
\boxed{\tau_{\max}=\frac{2T(d/2)}{I_p}
=\frac{32T}{\pi d^3}}.
$$

### (3)

D が $\phi_D$ だけ回転すると、各ばねの伸縮量の大きさは $(d/2)\phi_D$ である。したがって

$$
P=k\frac d2\phi_D.
$$

2 本のばねによる復元ねじりモーメントは $Pd$ なので、各区間の内部モーメントは順に $2T-Pd$、$T-Pd$、$-Pd$ となる。ゆえに

$$
\phi_D=\frac{L}{3GI_p}\left[(2T-Pd)+(T-Pd)-Pd\right]
=\frac{(T-Pd)L}{GI_p}.
$$

両式を連立すると

$$
\boxed{P=\frac{kdTL}{2GI_p+kd^2L}
=\frac{16kTL}{d(\pi Gd^2+16kL)}}.
$$

$k\to0$ では $P\to0$、$k\to\infty$ では $Pd\to T$ となり、D の回転が抑えられる。
