---
sidebar_label: "2017年8月実施 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2017年8月実施 材料力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、構造 ABCD が点 A で剛体壁に固定されている。点 D は $x$ 方向の移動が自由であるが、$y$ 方向には移動できず反力を支持できる。点 C に $y$ 方向荷重 $P$ を作用させるとき、次の各問に答えよ。ただし、構造 ABCD は直径 $d$ の丸棒からなり、$a,b,c\gg d$ とする。（40点）

**(1)** 点 D の反力 $Q$ を求めよ。

**(2)** 着力点 C の $y$ 方向変位を求めよ。

**(3)** 点 D の $x$ 方向変位を求めよ。

図中、AB、CD、BC の長さはそれぞれ $a,b,c$、丸棒のヤング率は $E$ である。$+x$ は右向き、$+y$ は下向きとする。

![原題の折れ曲がり丸棒と移動支点](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_material-2-original.png)

### 题目描述

如图，结构 ABCD 在 A 点固定于刚性墙壁。D 点可自由沿 $x$ 方向移动，但不能沿 $y$ 方向移动，能够承受该方向的反力。在 C 点施加沿 $y$ 方向的载荷 $P$ 时，回答下列问题。结构 ABCD 由直径为 $d$ 的圆杆构成，且 $a,b,c\gg d$。（40分）

**(1)** 求 D 点的反力 $Q$。

**(2)** 求载荷作用点 C 的 $y$ 方向位移。

**(3)** 求 D 点的 $x$ 方向位移。

图中 AB、CD、BC 的长度依次为 $a,b,c$，圆杆的杨氏模量为 $E$。$+x$ 向右，$+y$ 向下。

## **Kai**

$A_0=\pi d^2/4$、$I=\pi d^4/64$ とする。図のように右向きを $+x$、下向きを $+y$ とし、D の上向き反力の大きさを $Q$ と定義する。まず軸伸びも残して計算し、最後に細長い棒での主要項を示す。

### (1)

AB 上で A からの距離を $s$、CD 上で C からの距離を $r$ とする。曲げモーメントは、符号を統一して

$$
\begin{gathered}
M_{AB}=P(a-s)-Q(a+b-s),\\
M_{BC}=-Qb,\\
M_{CD}=-Q(b-r).
\end{gathered}
$$

BC の軸力は $P-Q$ なので、ひずみエネルギーは

$$
\begin{gathered}
U=\frac1{2EI}\left[\begin{gathered}
\int_0^a\{P(a-s)-Q(a+b-s)\}^2\,ds\\
+cQ^2b^2+\frac{Q^2b^3}{3}
\end{gathered}\right]\\
+\frac{c(P-Q)^2}{2EA_0}.
\end{gathered}
$$

D の鉛直変位がゼロという条件 $\partial U/\partial Q=0$ から、

$$
\begin{gathered}
N=\frac{a^3}{3}+\frac{a^2b}{2}+\frac{cI}{A_0},\\
D_0=\frac{(a+b)^3}{3}+cb^2+\frac{cI}{A_0}
\end{gathered}
$$

とおけば

$$
\boxed{Q=P\frac{N}{D_0}}.
$$

特に軸伸びを省略する細長い棒の近似では

$$
\boxed{Q\simeq
\frac{Pa^2(2a+3b)}{2\{(a+b)^3+3cb^2\}}}.
$$

BC は一定曲げモーメント $-Qb$ によって回転するため、分母の $cb^2$ を落としてはならない。

### (2)

Castigliano の定理より

$$
\begin{gathered}
\delta_{Cy}=\frac{\partial U}{\partial P}\\
=\frac1{EI}\left[
\frac{Pa^3}{3}-Q\left(\frac{a^3}{3}+\frac{a^2b}{2}\right)\right]
+\frac{c(P-Q)}{EA_0}.
\end{gathered}
$$

(1) の反力を代入して

$$
\boxed{\delta_{Cy}=\frac{P}{EI}
\left(\frac{a^3}{3}+\frac{cI}{A_0}-\frac{N^2}{D_0}\right)}.
$$

曲げだけの近似値は、上式の $I/A_0$ を含む項をゼロとして得られる。

### (3)

D に仮想の水平荷重 $H$ を加える。曲げモーメントへの寄与は AB で $-cH$、BC 上の B からの距離 $y$ の断面で $-(c-y)H$ である。$H=0$ でエネルギーを微分すると

$$
\begin{gathered}
\delta_{Dx}
=\frac1{EI}\left[\begin{gathered}
-c\int_0^a\{P(a-s)-Q(a+b-s)\}\,ds\\
+Qb\int_0^c(c-y)\,dy
\end{gathered}\right]\\
=\boxed{\frac{c}{2EI}\left[-Pa^2+Q(a^2+2ab+bc)\right]}.
\end{gathered}
$$

ここで $Q$ には採用する近似に対応した (1) の値を用いる。
