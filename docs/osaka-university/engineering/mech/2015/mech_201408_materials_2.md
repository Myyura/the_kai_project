---
sidebar_label: "2015年度 材料力学 問題2"
tags:
  - Osaka-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 大阪大学 工学研究科 機械工学専攻 2015年度 材料力学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1の装置では、剛体床に固定された剛体円柱に剛体円筒がすき間なくはめ込まれており、円筒は円柱に沿って $z$ 方向に滑らかに移動できる。円筒には、断面形状が一様で長さ $L$ のはりの一端を固定し、他端（自由端）に先端の鋭い剛体の針を取り付ける。$z$ 方向は鉛直下向きとする。

1. 図2のように針の下に剛体を置き、針が接触するまで円筒を下げる。その後、円筒に $z$ 方向の力 $F$ を加えると、円筒が距離 $U_0$ だけ移動した。このはりの曲げ剛性 $E_0I_0$ を求めよ。

次に、図3の L 字型片持ちはり ABC の弾性特性を測定する。断面は全長にわたり一様な円形で、断面二次モーメントを $I$、断面二次極モーメントを $I_p$ とする。無負荷時、固定端 A、点 B、自由端 C はすべて水平な $xy$ 平面内にあり、$AB=BC=a$、折れ角は $90^\circ$ である。

2. 図3のように針を B に接触させ、円筒に $z$ 方向の力 $P$ を加えると、円筒が $U_B$ 移動した。次に図4のように針を C に接触させ、同じ力 $P$ を加えると、円筒が $U_C$ 移動した。ABC の縦弾性係数 $E$ と横弾性係数 $G$ を求めよ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka-university/engineering/mech/2015/mech_201408_materials_2-question-fig1.png)

#### 题目描述

图1装置中，刚性圆柱固定于刚性地面，刚性套筒无间隙套在圆柱上，能沿竖直向下的 $z$ 方向光滑移动。套筒上固定一根长度为 $L$、截面均匀的梁，梁的自由端装有尖锐的刚性针。

1. 如图2，在针下放刚体，使套筒下移至针尖接触刚体，再对套筒施加沿 $z$ 方向的力 $F$，套筒移动了 $U_0$。求测量梁的抗弯刚度 $E_0I_0$。

接着测量图3的 L 形悬臂杆 ABC。全杆为均匀圆截面，截面二次矩为 $I$，截面极二次矩为 $I_p$。无载时固定端 A、折点 B、自由端 C 共处水平 $xy$ 平面，$AB=BC=a$，折角为 $90^\circ$。

2. 图3中针尖接触 B，对套筒施加向下的力 $P$，套筒位移为 $U_B$。改为图4中针尖接触 C，同样施力 $P$，套筒位移为 $U_C$。求 ABC 的纵向弹性模量 $E$ 和剪切模量 $G$。

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
