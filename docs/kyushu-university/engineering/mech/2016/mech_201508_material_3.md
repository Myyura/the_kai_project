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

図の構造において、中央の丸棒 AC の B にねじりモーメント $T$ を加える。AB $=a$、BC $=b$ であり、平行な丸棒 DF、HJ の長さはともに $a+b$、円板中心 C から F、J までの距離はそれぞれ $c$ である。A、D、H は壁に固定され、各丸棒は C、F、J で剛体円板に溶接されている。

各丸棒の直径を $d$、ヤング率を $E$、ポアソン比を $\nu$ とする。$a,b,c\gg d$、F、J の変位は $d$ に比べて十分小さいものとする。B におけるねじれ角 $\varphi_B$ を求めよ。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_material-3-original.png)

#### 题目描述

三根同截面平行圆杆 AC、DF、HJ 的左端固接在墙上，右端在 C、F、J 与刚性圆盘焊接。中央杆 AB 长 $a$、BC 长 $b$，上下杆均长 $a+b$，F、J 距圆盘中心 C 均为 $c$。各杆直径 $d$、杨氏模量 $E$、泊松比 $\nu$，且 $a,b,c\gg d$，端部位移很小。在 B 施加扭矩 $T$，求 B 的转角。

## **Kai**

$L=a+b$、$I=\pi d^4/64$、$I_p=2I$、$G=E/[2(1+\nu)]$ とする。円板の回転角を $\varphi_C$ とする。

### 円板を支える二本の丸棒の回転剛性

円板が軸まわりに $\varphi_C$ だけ回ると、F、J は互いに反対方向に $c\varphi_C$ だけ横移動する。円板の法線方向は変わらないので、溶接された各棒の端部の曲げによる傾きはゼロである。よって、各棒の横方向の剛性は

$$
k_b=\frac{12EI}{L^3}
$$

となる。このことは、固定端を $x=0$ とするたわみ

$$
v(x)=\delta\left[3\left(\frac{x}{L}\right)^2
-2\left(\frac{x}{L}\right)^3\right],\qquad
v(L)=\delta,\quad v'(L)=0
$$

からも確かめられる。二本の横力が円板中心に及ぼす合計モーメントは $2k_bc^2\varphi_C$。

さらに、各棒の端断面は円板とともに軸まわりに回転するため、二本の棒自身にもねじりが生じ、合計 $2GI_p\varphi_C/L$ のモーメントを支持する。したがって円板の回転剛性は

$$
\boxed{K_C=\frac{24EIc^2}{L^3}+\frac{2GI_p}{L}}.
$$

### 中央棒との適合条件

AB、BC が支持するねじりモーメントをそれぞれ $T_A,T_C$ とすると

$$
T_A=\frac{GI_p}{a}\varphi_B,
\qquad T_C=\frac{GI_p}{b}(\varphi_B-\varphi_C)
=K_C\varphi_C,
\qquad T_A+T_C=T.
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
