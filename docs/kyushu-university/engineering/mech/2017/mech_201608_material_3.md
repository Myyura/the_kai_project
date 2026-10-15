---
sidebar_label: "2017年度 問3（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2017年度 材料力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図の弾性丸棒 AB、BC と剛体棒 CD、DF からなる構造物が A で壁に固定されている。弾性棒のヤング率は $E$、ポアソン比は $\nu$、直径は $d$ である。AB は $x$ 方向に長さ $a$、BC は $y$ 方向に長さ $b$、CD は $x$ 方向に長さ $c$、DF は $z$ 方向に長さ $e$ を持ち、$a,b,c,e\gg d$ とする。F に $+y$ 方向の荷重 $P$ を加える。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2017/material-3-original.png)

1. 丸棒の断面二次モーメント $I$、断面二次極モーメント $I_p$、横弾性係数 $G$ を記述せよ。
2. AB のせん断力線図（SFD）と曲げモーメント線図（BMD）を描け。
3. B の $x,y,z$ 方向変位を求めよ。
4. C の $x,y,z$ 方向変位を求めよ。
5. F の $x,y,z$ 方向変位を求めよ。

#### 题目描述

图示空间折杆由弹性杆 AB、BC 和刚臂 CD、DF 组成，A 固定。AB 沿 $x$ 轴长 $a$，BC 沿 $y$ 轴长 $b$，CD 沿 $x$ 轴长 $c$，DF 沿 $z$ 轴长 $e$。弹性杆参数为 $E,\nu,d$，且各段长度远大于直径。F 受沿 $+y$ 的力 $P$。求 $I,I_p,G$，画 AB 的剪力与弯矩图，并求 B、C、F 三点各自的三方向位移。

## **Kai**

### (1)

$$
\boxed{I=\frac{\pi d^4}{64},\qquad
I_p=\frac{\pi d^4}{32}=2I,\qquad
G=\frac{E}{2(1+\nu)}}.
$$

以下 $A_0=\pi d^2/4$ とし、曲げ・ねじりによる一次の変位を求める。BC の軸伸び $Pb/(EA_0)$ も併記する。

### (2)

AB 上で A からの距離を $s$ とすると、断面の先に作用する荷重の合力は $P\boldsymbol e_y$、その力のモーメントは

$$
\boldsymbol M(s)=-Pe\boldsymbol e_x+P(a+c-s)\boldsymbol e_z.
$$

したがって、断面の先の荷重を正に取る符号規約では

$$
\boxed{V_y(s)=P,\qquad M_z(s)=P(a+c-s)}
\quad(0<s<a).
$$

SFD は高さ $P$ の一定値、BMD は A の $P(a+c)$ から B の $Pc$ へ直線的に減少する。ねじりモーメントは別に $T_x=-Pe$ で一定である。

![AB のせん断力線図と曲げモーメント線図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2017/material-3-sfd-bmd.svg)

### (3)

AB は $y$ 方向の端力 $P$ と $z$ 軸まわりの端偶力 $Pc$ を受けるので

$$
\boxed{\delta_{Bx}=0,\qquad
\delta_{By}=\frac{P}{EI}\left(\frac{a^3}{3}+\frac{ca^2}{2}\right),\qquad
\delta_{Bz}=0}.
$$

B の回転ベクトルは

$$
\boldsymbol\varphi_B=
\left(-\frac{Pea}{GI_p},\ 0,
\frac{P}{EI}\left(\frac{a^2}{2}+ac\right)\right).
$$

ねじりによる断面回転だけでは中心線上の B に $z$ 方向変位は生じない。たわみとねじれ角の積は二次の微小量なので、線形理論には含めない。

### (4)

B の回転による C の変位は $\boldsymbol\varphi_B\times(b\boldsymbol e_y)$。さらに BC は軸力 $P$、一定曲げモーメント $(-Pe,0,Pc)$ を受ける。したがって

$$
\boxed{\delta_{Cx}=-\frac{P}{EI}
\left(\frac{a^2b}{2}+abc+\frac{cb^2}{2}\right)},
$$

$$
\boxed{\delta_{Cy}=\frac{P}{EI}
\left(\frac{a^3}{3}+\frac{ca^2}{2}\right)+\frac{Pb}{EA_0}},
$$

$$
\boxed{\delta_{Cz}=-\frac{Peab}{GI_p}-\frac{Peb^2}{2EI}
=-\frac{Peb}{2EI}\{2(1+\nu)a+b\}}.
$$

BC の軸伸びを無視する近似では、$\delta_{Cy}$ の最後の項を省く。

### (5)

C の回転は

$$
\boldsymbol\varphi_C=
\left(-\frac{Pea}{GI_p}-\frac{Peb}{EI},\ 0,
\frac{P}{EI}\left(\frac{a^2}{2}+ac+bc\right)\right).
$$

CD、DF は剛体だから

$$
\boldsymbol\delta_F=
\boldsymbol\delta_C+\boldsymbol\varphi_C\times
(c\boldsymbol e_x+e\boldsymbol e_z).
$$

よって

$$
\boxed{\delta_{Fx}=\delta_{Cx},\qquad \delta_{Fz}=\delta_{Cz}},
$$

$$
\boxed{\delta_{Fy}=
\frac{P}{EI}\left[
\frac{a^3}{3}+a^2c+ac^2+bc^2+be^2+(1+\nu)ae^2
\right]+\frac{Pb}{EA_0}}.
$$

最後の軸伸びの項は細長い棒で省略できる。上式は、弾性部 AB、BC のひずみエネルギーを荷重 $P$ で微分しても得られる。
