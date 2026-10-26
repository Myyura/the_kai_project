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

問題1（解答用紙：赤）

図のように、長さ $L$、直径 $d$ の円形断面を有する一様な丸棒 AD に対して、その一端 A を剛体壁に固定して水平に支持し、他端 D では丸棒の水平方向の直径の両端である点 E、F に対して、それぞれ一端を固定したばね定数 $k$ のばねを鉛直方向に接続した。丸棒 AD 上の位置 B および C に図の向きにねじりモーメント $T$ を作用させるとき、以下の問いに答えなさい。ただし、丸棒のせん断弾性係数を $G$ とし、自重は無視できるものとする。

(1) 丸棒 AD の円形断面の図心を基準とした断面二次極モーメント $I_p$ を求めなさい。

(2) 丸棒 AD の E 点および F 点に取り付けられた二つのばねのばね定数は $k=0$ とする。このとき、丸棒 AD のねじりモーメント線図を描きなさい。また、位置 B、位置 C および D 端で生じるねじれ角をそれぞれ求めるとともに、丸棒 AD 内で生じる最大のせん断応力を求めなさい。

(3) つぎに、丸棒 AD の E 点および F 点に取り付けられた二つのばねのばね定数は $k\ne0$ とする。このとき、各ばねに生じる力の大きさ $P$ を求めなさい。ただし、D 端で生じるねじれ角は微小とする。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_materials_1_original_figure_1.png)

### 题目描述

问题1（使用红色答题纸）

如图，均匀圆杆 AD 长为 $L$，具有直径为 $d$ 的圆形截面。将 A 端固定于刚性墙并水平支承；另一端 D 的水平直径两端分别为 E、F，在 E、F 两点各沿竖直方向连接一根另一端固定、弹簧常数为 $k$ 的弹簧。在杆上 B、C 两处施加图示方向的扭矩 $T$。圆杆的剪切模量为 $G$，自重可以忽略。回答下列问题。

(1) 求圆杆 AD 的圆形截面对其形心的截面极二次矩 $I_p$。

(2) 设 E、F 两点所装弹簧的弹簧常数为 $k=0$。画出圆杆 AD 的扭矩图，并分别求 B、C、D 处的扭转角，以及圆杆 AD 内的最大剪应力。

(3) 接着，设两根弹簧的弹簧常数为 $k\ne0$。求每根弹簧中力的大小 $P$。假定 D 端的扭转角很小。

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
