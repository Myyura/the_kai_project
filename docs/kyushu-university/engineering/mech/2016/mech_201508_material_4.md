---
sidebar_label: "2015年8月実施 問4（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Thin-Walled-Pressure-Vessels
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Stress-Transformation
---

# 九州大学 工学府 機械系専攻 2015年8月実施 材料力学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように直径 $D$ の薄肉円筒 A と直径 $3D$ の薄肉円筒 B の一端を壁に、他端を同じ剛体に接続する。両円筒の肉厚は $t$、長さは $\ell$ で、$D\gg t$、$\ell\gg D$ とする。A と B の間の空間に内圧 $p$ を加える。各材料のヤング率は $E_A,E_B$、横弾性係数は $G_A,G_B$ である。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_material-4-original.png)

1. B の中央部表面に生じる長手方向と円周方向の垂直ひずみを求めよ。
2. 剛体にねじりモーメント $T$ を加えると、B の中央部表面の長手方向から $45^\circ$ の方向のひずみが $\varepsilon_0$ となった。$T$ を求めよ。

![原題のひずみ測定方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_material-4-coordinates-original.png)

直径 $d$、肉厚 $t$ の薄肉円筒の断面二次極モーメントは $I_p=\pi d^3t/4$。必要なら

$$
\varepsilon_\xi=\varepsilon_x\cos^2\theta
+\varepsilon_y\sin^2\theta+\gamma_{xy}\cos\theta\sin\theta
$$

を用いてよい。

#### 题目描述

直径为 $D$、$3D$ 的同轴薄壁圆筒 A、B，左端固定，右端连接同一刚体。两筒厚度均为 $t$、长均为 $\ell$，且 $\ell\gg D\gg t$，两筒之间施加压力 $p$。材料常数为 $E_A,G_A,E_B,G_B$。求外筒 B 的轴向和环向应变；再求使 B 表面与轴向成 $45^\circ$ 方向的应变等于 $\varepsilon_0$ 的外加扭矩 $T$。

## **Kai**

### (1)

長手方向を $x$、円周方向を $y$ とする。各材料のポアソン比は、与えられた弾性定数から

$$
\nu_A=\frac{E_A}{2G_A}-1,\qquad
\nu_B=\frac{E_B}{2G_B}-1
$$

と求められる。二材料のポアソン比が同じとは仮定しない。

A には外圧、B には内圧が作用するため

$$
\sigma_{Ay}=-\frac{pD}{2t},\qquad
\sigma_{By}=\frac{3pD}{2t}.
$$

両円筒は同じ剛体につながっているので、軸ひずみは共通の $\varepsilon_x$ であり

$$
\sigma_{Ax}=E_A\varepsilon_x+\nu_A\sigma_{Ay},\qquad
\sigma_{Bx}=E_B\varepsilon_x+\nu_B\sigma_{By}.
$$

端部の軸方向のつり合いは

$$
\pi Dt\sigma_{Ax}+3\pi Dt\sigma_{Bx}
=p\frac\pi4\{(3D)^2-D^2\}=2\pi pD^2.
$$

したがって B の軸ひずみは

$$
\boxed{\varepsilon_{Bx}=\varepsilon_x
=\frac{pD(4+\nu_A-9\nu_B)}{2t(E_A+3E_B)}}.
$$

B の円周ひずみは

$$
\boxed{\varepsilon_{By}
=\frac{3pD(1-\nu_B^2)}{2tE_B}-\nu_B\varepsilon_x}.
$$

### (2)

同じ剛体に固定されているので、両円筒のねじれ角 $\varphi$ が等しい。

$$
T=\frac{\varphi}{\ell}(G_AI_{pA}+G_BI_{pB}),\qquad
I_{pA}=\frac{\pi D^3t}{4},\quad I_{pB}=27I_{pA}.
$$

B の表面のせん断ひずみは

$$
\gamma_{Bxy}=\frac{3D}{2}\frac{\varphi}{\ell}
=\frac{6T}{\pi D^2t(G_A+27G_B)}.
$$

ここで等しいのは両筒のねじれ角であり、半径が違うため表面のせん断ひずみは $\gamma_B=3\gamma_A$ となる。

$45^\circ$ の変換式

$$
\varepsilon_0=\frac{\varepsilon_x+\varepsilon_{By}}2
+\frac{\gamma_{Bxy}}2
$$

に代入して

$$
\boxed{T=\frac{\pi D^2t(G_A+27G_B)}6
\left(2\varepsilon_0-\varepsilon_x-\varepsilon_{By}\right)}.
$$

$T$ の正方向は、図の $45^\circ$ 方向のひずみを増加させる向きに取った。
