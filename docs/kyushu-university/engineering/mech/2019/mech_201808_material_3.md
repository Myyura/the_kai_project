---
sidebar_label: "2018年8月実施 問3（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Castiglianos-Theorem
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2018年8月実施 材料力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、構造体 OABCD が点 O で剛体壁に固定されている。構造体は点 D でナイフエッジに接し $z$ 方向への移動が拘束されており、初期状態での反力はゼロである。点 C に $z$ 方向に荷重 $P$ を作用させるとき、次の各問に答えよ。ただし、OA と CD はヤング率 $E$、ポアソン比 $\nu$、直径 $d$ の弾性丸棒であり、L 字型部材 ABC は剛体である。弾性棒 OA と弾性棒 CD は、それぞれ点 A と点 C で L 字型部材 ABC に溶接されている。ナイフエッジと弾性棒 CD の間に摩擦はないものとする。また、$a,b,c,e\gg d$ である。（40点）

**(1)** 点 D で構造体がナイフエッジから受ける反力を $Q$（未知）とする。$Q$ を用いて点 A に作用するせん断力 $F_A$、曲げモーメント $M_A$ およびねじりモーメント $T_A$ を表せ。

**(2)** $Q$ を求めよ。

図中、OA、AB、BC、CD の長さはそれぞれ $a,b,c,e$ であり、OA、AB、CD は $x$ 方向、BC は $y$ 方向に配置されている。$+z$ は図の下向きである。

![原題の空間構造とナイフエッジ支持](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_material-3-original.png)

#### 题目描述

如图，结构 OABCD 在 O 点固定于刚性墙壁，在 D 点与刀口支承接触，沿 $z$ 方向的位移受到约束，初始状态的反力为零。在 C 点施加沿 $z$ 方向的载荷 $P$ 时，回答下列问题。OA、CD 为杨氏模量 $E$、泊松比 $\nu$、直径 $d$ 的弹性圆杆，L 形构件 ABC 为刚体。弹性杆 OA、CD 分别在 A、C 点焊接于 L 形构件 ABC。刀口与弹性杆 CD 之间无摩擦，且 $a,b,c,e\gg d$。（40分）

**(1)** 设结构在 D 点受到的刀口反力为未知量 $Q$。用 $Q$ 表示作用在 A 点的剪力 $F_A$、弯矩 $M_A$ 和扭矩 $T_A$。

**(2)** 求 $Q$。

图中 OA、AB、BC、CD 的长度依次为 $a,b,c,e$；OA、AB、CD 沿 $x$ 方向，BC 沿 $y$ 方向。$+z$ 为图示向下方向。

## **Kai**

### (1)

$Q$ を $-z$ 方向の反力の大きさとする。部材 ABCD が OA の端 A に伝える力・モーメントについて、$F_A$ は $+z$、$M_A$ は $+y$、$T_A$ は $+x$ を正に取る。力とモーメントのつり合いから

$$
\begin{gathered}
\boxed{F_A=P-Q},\\
\boxed{M_A=Qe-(P-Q)b},\\
\boxed{T_A=(P-Q)c}.
\end{gathered}
$$

### (2)

$I=\pi d^4/64$、$J=2I$、$G=E/[2(1+\nu)]$ とする。OA 上で O からの距離を $s$、CD 上で C からの距離を $r$ とすれば、曲げモーメントは

$$
\begin{gathered}
M_{OA}(s)=-P(a+b-s)+Q(a+b+e-s),\\
M_{CD}(r)=Q(e-r).
\end{gathered}
$$

OA のねじりモーメントは一定で $(P-Q)c$。したがって、曲げとねじりのひずみエネルギーは

$$
\begin{aligned}
U&=\frac1{2EI}\int_0^a M_{OA}(s)^2\,ds\\
&\quad+\frac{a(P-Q)^2c^2}{2GJ}\\
&\quad+\frac1{2EI}\int_0^e Q^2(e-r)^2\,dr.
\end{aligned}
$$

D の $z$ 方向変位がゼロであるため、Castigliano の定理による適合条件は $\partial U/\partial Q=0$ である。積分すると

$$
Q\left[\frac{a^3}{3}+a^2(b+e)+a(b+e)^2
+(1+\nu)ac^2+\frac{e^3}{3}\right]
$$

$$
=P\left[\frac{a^3}{3}+\frac{a^2(2b+e)}2
+ab(b+e)+(1+\nu)ac^2\right].
$$

よって

$$
\boxed{
Q=P\,
\frac{\dfrac{a^3}{3}+\dfrac{a^2(2b+e)}2+ab(b+e)+(1+\nu)ac^2}
{\dfrac{a^3}{3}+a^2(b+e)+a(b+e)^2+(1+\nu)ac^2+\dfrac{e^3}{3}}
}.
$$

分母と分子の差は $a^2e/2+ae(b+e)+e^3/3>0$ であり、$0<Q<P$。したがって、ナイフエッジとの接触条件も満たす。
