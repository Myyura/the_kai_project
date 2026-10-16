---
sidebar_label: "2017年8月実施 問3（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Dimensional-Analysis
  - Engineering.Fluid-Mechanics.Viscosity-and-Reynolds-Number
---

# 九州大学 工学府 機械系専攻 2017年8月実施 流体工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

直径 $d$ の無限に長い軸が、無限に広い空間を満たす非圧縮性流体（粘性係数 $\mu$）の中に置かれている。軸の回転による流体温度や粘性係数の変化はないものとする。（50点）

1. 軸を角速度 $\omega$ で回転させるために必要な、軸の単位長さ当たりのトルク $T$ に関する無次元数を、次元解析により求めよ。
2. 軸の直径を5倍にして同じ角速度 $\omega$ で回転させると、必要なトルクは何倍になるか。レイノルズ数は十分大きく、流れのレイノルズ数に対する依存性は無視できるとする。

![原題の図（九州大学 2018年度 流体工学 問3）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_fluids-3-original.png)

#### 题目描述

无限长圆轴直径为 $d$，置于无限广的不可压缩流体中，动力黏度为 $\mu$。回转不改变流体温度与黏度。① 通过量纲分析求使轴以角速度 $\omega$ 旋转所需的每单位轴长转矩 $T$ 的无量纲数。② 直径增为5倍而角速度不变时，所需转矩变为几倍？假定雷诺数足够大，流动对雷诺数的依赖可以忽略。

## **Kai**

### (1)

流体密度を $\rho$ とおく。$T$ は単位長さ当たりのトルクなので、質量・長さ・時間の次元を $\mathsf M,\mathsf L,\mathsf T$ とすると

$$
[T]=\mathsf M\mathsf L\mathsf T^{-2},\quad
[\rho]=\mathsf M\mathsf L^{-3},\quad
[\mu]=\mathsf M\mathsf L^{-1}\mathsf T^{-1},\quad
[\omega]=\mathsf T^{-1},\quad[d]=\mathsf L.
$$

$T\rho^a\omega^bd^c$ を無次元にする条件は

$$
1+a=0,\qquad 1-3a+c=0,\qquad -2-b=0.
$$

したがって、一組の独立な無次元数は

$$
\boxed{C_T=\frac{T}{\rho\omega^2d^4},\qquad
\mathrm{Re}_\omega=\frac{\rho\omega d^2}{\mu}},
\qquad C_T=f(\mathrm{Re}_\omega).
$$

粘性を基準とした等価な無次元トルクは

$$
\frac{T}{\mu\omega d^2}
=\mathrm{Re}_\omega f(\mathrm{Re}_\omega)
$$

である。

### (2)

十分大きいレイノルズ数でその依存性を無視すると、$C_T$ は一定であり

$$
T=C_T\rho\omega^2d^4.
$$

密度と角速度が同じなので

$$
\boxed{\frac{T(5d)}{T(d)}=5^4=625}.
$$
