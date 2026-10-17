---
sidebar_label: "2017年8月実施 機械力学 第1問"
tags:
  - Tohoku-University
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
  - Physics.Mechanics.Hamilton-Principle-and-Euler-Lagrange-Equation
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 機械力学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

1. 図1に示すような，2つのばねと2つの一様な剛体棒 AB および CD からなる平面内の振動系を考える。剛体棒は点 E と点 D でピン支持されており，点 B と点 C は質量のない剛体リンクを介して連結されている。2つの剛体棒の質量および長さはそれぞれ $m$ と $L$ であり，両方のばねのばね定数は $k$ である。剛体棒は，静的釣り合い位置を中心に微小回転振動する。剛体棒 AB の釣り合い位置からの時刻 $t$ における回転角を $\theta(t)$ とする。ばねの質量と水平方向の変形は無視できるものとし，以下の問いに答えよ。

**(1)** 剛体棒 AB の点 E まわりの慣性モーメント $J_{AB}$ を求めよ。

**(2)** 剛体棒 CD の釣り合い位置からの回転角 $\varphi(t)$ を $\theta(t)$ を用いて表せ。

**(3)** 系の運動エネルギーを求めよ。

**(4)** 系のポテンシャルエネルギーを求めよ。

**(5)** 系の運動方程式を導け。

![図1 ばねと剛体棒の振動系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_dynamics_1_original_figure_1.png)

#### 题目描述

1. 考虑图1所示由两根弹簧和两根均匀刚杆 AB、CD 构成的平面内振动系统。刚杆在 E 点和 D 点铰支，B、C 两点通过无质量的刚性连杆连接。两根刚杆的质量均为 $m$、长度均为 $L$，两根弹簧的弹簧常数均为 $k$。刚杆绕静态平衡位置作微小转动振动。设刚杆 AB 在时刻 $t$ 相对平衡位置的转角为 $\theta(t)$。忽略弹簧质量及水平方向的变形，回答下列问题。

**(1)** 求刚杆 AB 绕 E 点的转动惯量 $J_{AB}$。

**(2)** 用 $\theta(t)$ 表示刚杆 CD 相对平衡位置的转角 $\varphi(t)$。

**(3)** 求系统的动能。

**(4)** 求系统的势能。

**(5)** 推导系统的运动方程。

图1给出了铰支点、弹簧及连杆的位置与长度关系。

## **Kai**

### (1), (2)

EとABの重心との距離は $L/6$。平行軸の定理より

$$
\boxed{J_{AB}=\frac{mL^2}{12}+m\left(\frac L6\right)^2=\frac{mL^2}{9}}.
$$

CDの $\varphi$ はDまわり時計回りを正と定義する。リンクによりB、Cの鉛直変位が等しく、$2L\theta/3=L\varphi$。従って

$$
\boxed{\varphi=\frac23\theta}.
$$

両棒の角を反時計回りでそろえるなら $\varphi=-2\theta/3$ である。

### (3)

$J_{CD}=mL^2/3$ なので

$$
T=\frac12J_{AB}\dot\theta^2+\frac12J_{CD}\dot\varphi^2
=\boxed{\frac7{54}mL^2\dot\theta^2}.
$$

### (4)

ばね取付点の変位はそれぞれ $L\theta/3$ と $L\varphi/2=L\theta/3$。静的平衡まわりでは重力と初期ばね力に由来する一次項が相殺される。水平な棒の重心高さの変化には二次項がないため、微小振動の二次ポテンシャルは

$$
\boxed{U=\frac12k\left(\frac{L\theta}3\right)^2+
\frac12k\left(\frac{L\varphi}2\right)^2=\frac{kL^2}{9}\theta^2}.
$$

### (5)

ラグランジュ方程式から

$$
\frac7{27}mL^2\ddot\theta+\frac29kL^2\theta=0,
\qquad\boxed{7m\ddot\theta+6k\theta=0}.
$$

固有角振動数は $\omega_n=\sqrt{6k/(7m)}$ である。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 17ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
