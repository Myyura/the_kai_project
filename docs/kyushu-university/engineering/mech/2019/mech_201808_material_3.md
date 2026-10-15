---
sidebar_label: "2019年度 問3（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Castiglianos-Theorem
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2019年度 材料力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図の構造体 OABCD は点 O で剛体壁に固定されている。点 D はナイフエッジに接して $z$ 方向への移動が拘束されており、初期状態の反力はゼロである。点 C に $z$ 方向荷重 $P$ を作用させる。

OA と CD はヤング率 $E$、ポアソン比 $\nu$、直径 $d$ の弾性丸棒で、L 字型部材 ABC は剛体である。各弾性棒は A、C で剛体部材に溶接されている。ナイフエッジと CD の間に摩擦はない。OA $=a$、AB $=b$、BC $=c$、CD $=e$ で、$a,b,c,e\gg d$ とする。OA、AB、CD は $x$ 方向、BC は $y$ 方向に配置されている。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2019/material-3-original.png)

1. 点 D でナイフエッジから受ける反力を $Q$ とする。$Q$ を用いて、点 A に作用するせん断力 $F_A$、曲げモーメント $M_A$、ねじりモーメント $T_A$ を表せ。
2. $Q$ を求めよ。

#### 题目描述

空间结构 OABCD 在 O 固定，D 与无摩擦刀口支承接触并被限制沿 $z$ 方向移动，初始反力为零。C 点受到沿 $+z$ 的力 $P$。OA、CD 是直径 $d$、杨氏模量 $E$、泊松比 $\nu$ 的弹性圆杆；L 形 ABC 为刚体，与两弹性杆分别在 A、C 焊接。OA、AB、BC、CD 长度分别为 $a,b,c,e$，均远大于 $d$，方向如图。设 D 点向上的支反力为 $Q$，求 A 点传递的剪力、弯矩与扭矩，并求 $Q$。

## **Kai**

### (1)

$Q$ を $-z$ 方向の反力の大きさとする。部材 ABCD が OA の端 A に伝える力・モーメントについて、$F_A$ は $+z$、$M_A$ は $+y$、$T_A$ は $+x$ を正に取る。力とモーメントのつり合いから

$$
\boxed{F_A=P-Q},\qquad
\boxed{M_A=Qe-(P-Q)b},\qquad
\boxed{T_A=(P-Q)c}.
$$

### (2)

$I=\pi d^4/64$、$J=2I$、$G=E/[2(1+\nu)]$ とする。OA 上で O からの距離を $s$、CD 上で C からの距離を $r$ とすれば、曲げモーメントは

$$
M_{OA}(s)=-P(a+b-s)+Q(a+b+e-s),
\qquad M_{CD}(r)=Q(e-r).
$$

OA のねじりモーメントは一定で $(P-Q)c$。したがって、曲げとねじりのひずみエネルギーは

$$
U=\frac1{2EI}\int_0^a M_{OA}(s)^2\,ds
+\frac{a(P-Q)^2c^2}{2GJ}
+\frac1{2EI}\int_0^e Q^2(e-r)^2\,dr.
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
