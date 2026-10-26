---
sidebar_label: "2014年8月実施 材料力学 問題2"
tags:
  - Osaka-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 大阪大学 工学研究科 機械工学専攻 2014年8月実施 材料力学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題2（解答用紙：白）

図1に示すような装置を考える。剛体の床に固定された剛体円柱に剛体円筒がすき間なくはめ込まれており、剛体円筒は剛体円柱に沿って $z$ 方向に滑らかに移動できる。剛体円筒には断面形状が一様の長さ $L$ のはりの一端が固定されており、はりの他端（自由端）には先端の鋭い剛体の針が取り付けられている。以下の問いに答えなさい。

(1) 図2に示すように、針の下方に剛体を設置し、針がこの剛体に接触するまで剛体円筒を下方（$z$ 方向）に移動させた。その後、剛体円筒に $z$ 方向の力 $F$ を与えたところ、剛体円筒は $z$ 方向に距離 $U_0$ だけ移動した。このはりの曲げ剛性 $E_0I_0$ を求めなさい。

つぎに、この装置を用いて図3に示すような L 字型片持ちはり ABC の弾性特性を求めることを考える。断面形状は円形で ABC にわたって一様であり、断面二次モーメントは $I$、断面二次極モーメントは $I_p$ である。無負荷時には、A 点（固定端）、B 点、および C 点（自由端）はいずれも水平面（$x$-$y$ 平面）内に存在し、AB 間と BC 間の長さはともに $a$ であり、AB と BC のなす角は $90^\circ$ である。

(2) 図3に示すように、針の先端を B 点に接触させた。その後、剛体円筒に $z$ 方向の力 $P$ を与えたところ、剛体円筒は $z$ 方向に距離 $U_B$ だけ移動した。つぎに、図4に示すように、針の先端を C 点に接触させた。その後、同様に剛体円筒に $z$ 方向の力 $P$ を与えたところ、剛体円筒は $z$ 方向に距離 $U_C$ だけ移動した。この L 字型片持ちはり ABC の素材の縦弾性係数 $E$ および横弾性係数 $G$ を求めなさい。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_materials_2_original_figure_1.png)

![原題の図2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_materials_2_original_figure_2.png)

![原題の図3](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_materials_2_original_figure_3.png)

![原題の図4](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_materials_2_original_figure_4.png)

### 题目描述

问题2（使用白色答题纸）

考虑图1所示装置。固定于刚性地面的刚性圆柱外无间隙地套着一个刚性圆筒，圆筒可沿圆柱在 $z$ 方向光滑移动。一根长为 $L$、截面形状均匀的梁的一端固定于圆筒，梁的另一端（自由端）装有尖锐的刚性针。回答下列问题。

(1) 如图2，在针的下方放置刚体，将圆筒向下（$z$ 方向）移动，直至针与刚体接触。随后在圆筒上施加沿 $z$ 方向的力 $F$，圆筒沿 $z$ 方向移动了距离 $U_0$。求该梁的弯曲刚度 $E_0I_0$。

接着，考虑用此装置测定图3所示 L 形悬臂梁 ABC 的弹性性质。梁 ABC 全长均具有相同的圆形截面，其截面二次矩为 $I$，截面极二次矩为 $I_p$。无载荷时，A 点（固定端）、B 点及 C 点（自由端）均位于水平面（$x$-$y$ 平面）内。AB、BC 的长度均为 $a$，两段夹角为 $90^\circ$。

(2) 如图3，将针尖与 B 点接触，随后对圆筒施加沿 $z$ 方向的力 $P$，圆筒沿 $z$ 方向移动了距离 $U_B$。再如图4，将针尖与 C 点接触，同样施加沿 $z$ 方向的力 $P$，圆筒沿 $z$ 方向移动了距离 $U_C$。求 L 形悬臂梁 ABC 材料的杨氏模量 $E$ 和剪切模量 $G$。

## **Kai**

### (1)

針の接触点は力を伝えるが曲げモーメントを伝えない。円筒に作用する力のつり合いより、測定用はりの自由端に作用する力の大きさは $F$ である。自由端と固定端の相対変位は $FL^3/(3E_0I_0)$ であり、剛体上の針先は動かないので

$$
U_0=\frac{FL^3}{3E_0I_0}.
$$

したがって

$$
\boxed{E_0I_0=\frac{FL^3}{3U_0}}.
$$

測定用はりの柔度を

$$
c_0=\frac{L^3}{3E_0I_0}=\frac{U_0}{F}
$$

とおく。

### (2)

円筒の移動量は、被測定物の接触点の変位と測定用はりの相対たわみ $Pc_0$ の和である。

B に荷重を加える場合、AB のみが曲げ変形するので

$$
U_B=\frac{Pa^3}{3EI}+Pc_0.
$$

よって

$$
\boxed{E=\frac{Pa^3}{3I\left(U_B-PU_0/F\right)}}.
$$

C に荷重を加える場合、AB と BC の曲げ、および AB のねじりが生じる。そのひずみエネルギーは

$$
\mathcal U_C=
2\frac{P^2a^3}{6EI}+\frac{(Pa)^2a}{2GI_p}.
$$

したがって C の下向き変位は

$$
u_C=\frac{\partial\mathcal U_C}{\partial P}
=\frac{2Pa^3}{3EI}+\frac{Pa^3}{GI_p},
$$

測定される円筒の変位は

$$
U_C=\frac{2Pa^3}{3EI}+\frac{Pa^3}{GI_p}+Pc_0.
$$

$U_C-2U_B+Pc_0$ を作って曲げ項を消去すると

$$
\boxed{G=\frac{Pa^3}{I_p\left(U_C-2U_B+PU_0/F\right)}}.
$$

正の弾性係数が得られる測定値では、上の 2 つの分母はともに正となる。
