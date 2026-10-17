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

次の問いに答えよ。（35点）

図に示す断面図のように、直径 $D$ の薄肉円筒 A と直径 $3D$ の薄肉円筒 B を組み合わせた二重薄肉円筒構造の一端を壁面に、他端を剛体に接続した後、薄肉円筒 A の外側の空間に内圧 $p$ を与えた。なお、いずれの円筒も肉厚は同じで、肉厚 $t$ は直径 $D$ に比べて十分に小さく、円筒は $D$ に比べて十分に長いものとする。

**(1)** 薄肉円筒 B の中央部表面上の長手方向および円周方向の垂直ひずみを求めよ。

**(2)** さらに、剛体にねじりモーメント $T$ を与えると、薄肉円筒 B の中央部表面において、長手方向と $45^\circ$ をなす方向のひずみは $\varepsilon_0$ となった。このときのねじりモーメント $T$ を求めよ。ただし、直径 $d$ の薄肉円筒の断面二次極モーメント $I_p$ は、$I_p=\pi d^3t/4$ である。必要に応じ、次のひずみ変換式を使用してもよい。

$$
\begin{aligned}
\varepsilon_\xi={}&\varepsilon_x\cos^2\theta+\varepsilon_y\sin^2\theta\\
&+\gamma_{xy}\cos\theta\sin\theta.
\end{aligned}
$$

図中、$E_A,E_B$ はヤング率、$G_A,G_B$ は横弾性係数、$\ell$ は円筒の長さ、$t$ は肉厚（$D\gg t$）である。

![原題の二重薄肉円筒の断面図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_material-4-original.png)

![原題のひずみ測定方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_material-4-coordinates-original.png)

#### 题目描述

回答下列问题。（35分）

如图示截面，将直径为 $D$ 的薄壁圆筒 A 与直径为 $3D$ 的薄壁圆筒 B 组合成双层薄壁圆筒结构，一端连接墙壁，另一端连接刚体，随后在圆筒 A 外侧的空间施加内压 $p$。两圆筒壁厚相同，壁厚 $t$ 相对于直径 $D$ 充分小，圆筒长度相对于 $D$ 充分大。

**(1)** 求薄壁圆筒 B 中央部表面沿轴向和圆周方向的正应变。

**(2)** 进一步向刚体施加扭矩 $T$，此时圆筒 B 中央部表面上与轴向成 $45^\circ$ 的方向的应变为 $\varepsilon_0$。求该扭矩 $T$。直径为 $d$ 的薄壁圆筒的截面极二次矩为 $I_p=\pi d^3t/4$。需要时可使用上面的应变变换式，坐标方向如图。

图中 $E_A,E_B$ 为杨氏模量，$G_A,G_B$ 为剪切模量，$\ell$ 为圆筒长度，$t$ 为壁厚（$D\gg t$）。

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
\begin{gathered}
\sigma_{Ax}=E_A\varepsilon_x+\nu_A\sigma_{Ay},\\
\sigma_{Bx}=E_B\varepsilon_x+\nu_B\sigma_{By}.
\end{gathered}
$$

端部の軸方向のつり合いは

$$
\begin{gathered}
\pi Dt\sigma_{Ax}+3\pi Dt\sigma_{Bx}
=p\frac\pi4\{(3D)^2-D^2\}\\
=2\pi pD^2.
\end{gathered}
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
\begin{gathered}
T=\frac{\varphi}{\ell}(G_AI_{pA}+G_BI_{pB}),\\
I_{pA}=\frac{\pi D^3t}{4},\\
I_{pB}=27I_{pA}.
\end{gathered}
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
