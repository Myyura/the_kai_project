---
sidebar_label: "2018年度 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2018年度 材料力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図の構造 ABCD は A で剛体壁に固定されている。D は $x$ 方向には自由に移動できるが、$y$ 方向には移動できず、反力を支持する。C に $y$ 方向の荷重 $P$ を作用させる。AB $=a$、BC $=c$、CD $=b$、丸棒の直径は $d$、ヤング率は $E$ とし、$a,b,c\gg d$ とする。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2018/material-2-original.png)

1. 点 D の反力 $Q$ を求めよ。
2. 着力点 C の $y$ 方向変位を求めよ。
3. 点 D の $x$ 方向変位を求めよ。

#### 题目描述

图示折杆 ABCD 在 A 固定，D 可沿 $x$ 方向移动，但不能沿 $y$ 方向移动。C 受沿 $+y$ 的力 $P$。AB、BC、CD 的长度分别为 $a,c,b$，圆杆直径为 $d$，杨氏模量为 $E$，且 $a,b,c\gg d$。求 D 的支反力、C 的 $y$ 方向位移和 D 的 $x$ 方向位移。

## **Kai**

$A_0=\pi d^2/4$、$I=\pi d^4/64$ とする。図のように右向きを $+x$、下向きを $+y$ とし、D の上向き反力の大きさを $Q$ と定義する。まず軸伸びも残して計算し、最後に細長い棒での主要項を示す。

### (1)

AB 上で A からの距離を $s$、CD 上で C からの距離を $r$ とする。曲げモーメントは、符号を統一して

$$
M_{AB}=P(a-s)-Q(a+b-s),\quad
M_{BC}=-Qb,\quad M_{CD}=-Q(b-r).
$$

BC の軸力は $P-Q$ なので、ひずみエネルギーは

$$
U=\frac1{2EI}\left[
\int_0^a\{P(a-s)-Q(a+b-s)\}^2\,ds
+cQ^2b^2+\frac{Q^2b^3}{3}\right]
+\frac{c(P-Q)^2}{2EA_0}.
$$

D の鉛直変位がゼロという条件 $\partial U/\partial Q=0$ から、

$$
N=\frac{a^3}{3}+\frac{a^2b}{2}+\frac{cI}{A_0},\qquad
D_0=\frac{(a+b)^3}{3}+cb^2+\frac{cI}{A_0}
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
\delta_{Cy}=\frac{\partial U}{\partial P}
=\frac1{EI}\left[
\frac{Pa^3}{3}-Q\left(\frac{a^3}{3}+\frac{a^2b}{2}\right)\right]
+\frac{c(P-Q)}{EA_0}.
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
\begin{aligned}
\delta_{Dx}
&=\frac1{EI}\left[
-c\int_0^a\{P(a-s)-Q(a+b-s)\}\,ds
+Qb\int_0^c(c-y)\,dy\right]\\
&=\boxed{\frac{c}{2EI}\left[-Pa^2+Q(a^2+2ab+bc)\right]}.
\end{aligned}
$$

ここで $Q$ には採用する近似に対応した (1) の値を用いる。
