---
sidebar_label: "2015年8月実施 問3（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2015年8月実施 材料力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の問いに答えよ。（40点）

図の構造において、丸棒の B 点にねじりモーメント $T$ を加えるとき、B 点でのねじれ角 $\phi_B$ を求めよ。丸棒は、C、F、J で剛体円板に溶接されている。$a,b,c$ は $\phi d$ に比べて十分大きく、F 点と J 点の変位量は $\phi d$ に比べて十分に小さいものとする。

図中、AC、DF、HJ は弾性体丸棒、$\phi d$ は丸棒の直径 $d$、$E$ はヤング率、$\nu$ はポアソン比である。AB の長さは $a$、BC の長さは $b$、CF と CJ の長さはそれぞれ $c$ であり、A、D、H は壁に固定されている。

![原題の三本の丸棒と剛体円板](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_material-3-original.png)

### 题目描述

回答以下问题。（40分）

对于图示结构，在圆杆的 B 点施加扭矩 $T$ 时，求 B 点的扭转角 $\phi_B$。圆杆在 C、F、J 三点焊接于刚性圆盘。$a,b,c$ 相对于圆杆直径 $d$ 充分大，F、J 两点的位移量相对于 $d$ 充分小。

图中 AC、DF、HJ 为弹性圆杆，$\phi d$ 表示直径 $d$，$E$ 为杨氏模量，$\nu$ 为泊松比。AB 长 $a$，BC 长 $b$，CF、CJ 各长 $c$；A、D、H 固定于墙壁。

## **Kai**

$L=a+b$、$I=\pi d^4/64$、$I_p=2I$、$G=E/[2(1+\nu)]$ とする。円板の回転角を $\varphi_C$ とする。

### 円板を支える二本の丸棒の回転剛性

円板が軸まわりに $\varphi_C$ だけ回ると、F、J は互いに反対方向に $c\varphi_C$ だけ横移動する。円板の法線方向は変わらないので、溶接された各棒の端部の曲げによる傾きはゼロである。よって、各棒の横方向の剛性は

$$
k_b=\frac{12EI}{L^3}
$$

となる。このことは、固定端を $x=0$ とするたわみ

$$
\begin{gathered}
v(x)=\delta\left[3\left(\frac{x}{L}\right)^2
-2\left(\frac{x}{L}\right)^3\right],\\
v(L)=\delta,\\
v'(L)=0
\end{gathered}
$$

からも確かめられる。二本の横力が円板中心に及ぼす合計モーメントは $2k_bc^2\varphi_C$。

さらに、各棒の端断面は円板とともに軸まわりに回転するため、二本の棒自身にもねじりが生じ、合計 $2GI_p\varphi_C/L$ のモーメントを支持する。したがって円板の回転剛性は

$$
\boxed{K_C=\frac{24EIc^2}{L^3}+\frac{2GI_p}{L}}.
$$

### 中央棒との適合条件

AB、BC が支持するねじりモーメントをそれぞれ $T_A,T_C$ とすると

$$
\begin{gathered}
T_A=\frac{GI_p}{a}\varphi_B,\\
T_C=\frac{GI_p}{b}(\varphi_B-\varphi_C)
=K_C\varphi_C,\\
T_A+T_C=T.
\end{gathered}
$$

$\varphi_C$ を消去して

$$
\boxed{\varphi_B=
\frac{T}{\displaystyle\frac{GI_p}{a}
+\frac{GI_pK_C}{GI_p+bK_C}}}.
$$

無次元量

$$
\kappa=\frac{K_CL}{GI_p}
=2+24(1+\nu)\frac{c^2}{L^2}
$$

を用いれば、同じ答えを

$$
\boxed{\varphi_B=\frac{Ta}{GI_p}
\frac{L+\kappa b}{L(1+\kappa)}}
$$

と書ける。溶接条件のため、外側棒を回転自由な片持ちはり端として扱ったり、外側棒のねじりを省いたりすることはできない。
