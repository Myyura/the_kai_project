---
sidebar_label: "2016年8月実施 問3（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2016年8月実施 材料力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、ヤング率 $E$、ポアソン比 $\nu$ の弾性体棒 AB、BC と剛体棒 CD、DF が接合された構造体が点 A で壁に固定されている。いずれの弾性体棒も、直径は $d$ である。また、点 F に $y$ 方向に荷重 $P$ が作用している。次の各問いに答えよ。（40点）

**(1)** 丸棒の断面二次モーメント $I$、断面二次極モーメント $I_p$ および横弾性係数 $G$ を記述せよ。

**(2)** AB 間のせん断力線図（SFD）と曲げモーメント線図（BMD）を描け。

**(3)** 点 B の $x$ 方向変位 $\delta_{Bx}$、$y$ 方向変位 $\delta_{By}$、$z$ 方向変位 $\delta_{Bz}$ を求めよ。

**(4)** 点 C の $x$ 方向変位 $\delta_{Cx}$、$y$ 方向変位 $\delta_{Cy}$、$z$ 方向変位 $\delta_{Cz}$ を求めよ。

**(5)** 点 F の $x$ 方向変位 $\delta_{Fx}$、$y$ 方向変位 $\delta_{Fy}$、$z$ 方向変位 $\delta_{Fz}$ を求めよ。

図中、AB は $x$ 方向に長さ $a$、BC は $y$ 方向に長さ $b$、CD は $x$ 方向に長さ $c$、DF は $z$ 方向に長さ $e$ をもち、$a,b,c,e\gg d$ である。

![原題の弾性丸棒と剛体棒の三次元構造](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_material-3-original.png)

### 题目描述

如图，由杨氏模量为 $E$、泊松比为 $\nu$ 的弹性杆 AB、BC 与刚杆 CD、DF 连接成的结构，在 A 点固定于墙壁。两根弹性杆的直径均为 $d$。F 点受到沿 $y$ 方向的载荷 $P$。回答下列问题。（40分）

**(1)** 写出圆杆的截面二次矩 $I$、截面极二次矩 $I_p$ 以及剪切模量 $G$。

**(2)** 绘制 AB 段的剪力图（SFD）和弯矩图（BMD）。

**(3)** 求 B 点沿 $x,y,z$ 方向的位移 $\delta_{Bx},\delta_{By},\delta_{Bz}$。

**(4)** 求 C 点沿 $x,y,z$ 方向的位移 $\delta_{Cx},\delta_{Cy},\delta_{Cz}$。

**(5)** 求 F 点沿 $x,y,z$ 方向的位移 $\delta_{Fx},\delta_{Fy},\delta_{Fz}$。

图中 AB 沿 $x$ 方向长 $a$，BC 沿 $y$ 方向长 $b$，CD 沿 $x$ 方向长 $c$，DF 沿 $z$ 方向长 $e$，且 $a,b,c,e\gg d$。

## **Kai**

### (1)

$$
\boxed{\begin{gathered}
I=\frac{\pi d^4}{64},\\
I_p=\frac{\pi d^4}{32}=2I,\\
G=\frac{E}{2(1+\nu)}
\end{gathered}}.
$$

以下 $A_0=\pi d^2/4$ とし、曲げ・ねじりによる一次の変位を求める。BC の軸伸び $Pb/(EA_0)$ も併記する。

### (2)

AB 上で A からの距離を $s$ とすると、断面の先に作用する荷重の合力は $P\boldsymbol e_y$、その力のモーメントは

$$
\boldsymbol M(s)=-Pe\boldsymbol e_x+P(a+c-s)\boldsymbol e_z.
$$

したがって、断面の先の荷重を正に取る符号規約では

$$
\begin{gathered}
\boxed{V_y(s)=P,\qquad M_z(s)=P(a+c-s)}\\
(0<s<a).
\end{gathered}
$$

SFD は高さ $P$ の一定値、BMD は A の $P(a+c)$ から B の $Pc$ へ直線的に減少する。ねじりモーメントは別に $T_x=-Pe$ で一定である。

![AB のせん断力線図と曲げモーメント線図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_material-3-sfd-bmd.svg)

### (3)

AB は $y$ 方向の端力 $P$ と $z$ 軸まわりの端偶力 $Pc$ を受けるので

$$
\boxed{\begin{gathered}
\delta_{Bx}=0,\\
\delta_{By}=\frac{P}{EI}\left(\frac{a^3}{3}+\frac{ca^2}{2}\right),\\
\delta_{Bz}=0
\end{gathered}}.
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
\boxed{\begin{gathered}
\delta_{Cz}=-\frac{Peab}{GI_p}-\frac{Peb^2}{2EI}\\
=-\frac{Peb}{2EI}\{2(1+\nu)a+b\}
\end{gathered}}.
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
