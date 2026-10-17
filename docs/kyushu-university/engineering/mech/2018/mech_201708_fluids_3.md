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

図に示すように，直径 $d$ の無限に長い軸が無限に広い空間を満たす非圧縮性流体（粘性係数 $\mu$）の中に設置されている。軸の回転による流体の温度や粘性係数の変化はないものとして，以下の問いに答えよ。（50点）

**(1)** 軸を角速度 $\omega$ で回転させるのに必要な軸単位長さあたりのトルク $T$ に関する無次元数を次元解析により求めよ。

**(2)** 軸の直径を5倍にして，同一の角速度 $\omega$ で回転させたとき，必要なトルクは何倍になるか。なおレイノルズ数が十分に大きく，流れのレイノルズ数に対する依存性は無視できるものとする。

![原題の図：非圧縮性流体中で回転する軸](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_fluids-3-original.png)

#### 题目描述

如图所示，在充满无限广空间的不可压缩流体中，放置一根直径为 $d$、无限长的轴，流体的动力黏度为 $\mu$。假设轴的转动不会引起流体温度和黏度的变化，回答下列问题。（50分）

**(1)** 用量纲分析求与驱动该轴以角速度 $\omega$ 转动所需的单位轴长转矩 $T$ 有关的无量纲数。

**(2)** 将轴的直径增大为原来的5倍，并以相同角速度 $\omega$ 转动，所需转矩变为原来的多少倍？设雷诺数足够大，流动对雷诺数的依赖可以忽略。

## **Kai**

### (1)

流体密度を $\rho$ とおく。$T$ は単位長さ当たりのトルクなので、質量・長さ・時間の次元を $\mathsf M,\mathsf L,\mathsf T$ とすると

$$
\begin{gathered}
[T]=\mathsf M\mathsf L\mathsf T^{-2},\\
[\rho]=\mathsf M\mathsf L^{-3},\\
[\mu]=\mathsf M\mathsf L^{-1}\mathsf T^{-1},\\
[\omega]=\mathsf T^{-1},\\
[d]=\mathsf L.
\end{gathered}
$$

$T\rho^a\omega^bd^c$ を無次元にする条件は

$$
\begin{gathered}
1+a=0,\\
1-3a+c=0,\\
-2-b=0.
\end{gathered}
$$

したがって、一組の独立な無次元数は

$$
\begin{gathered}
\boxed{C_T=\frac{T}{\rho\omega^2d^4},\qquad
\mathrm{Re}_\omega=\frac{\rho\omega d^2}{\mu}},\\
C_T=f(\mathrm{Re}_\omega).
\end{gathered}
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
