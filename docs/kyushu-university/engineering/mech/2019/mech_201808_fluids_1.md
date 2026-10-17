---
sidebar_label: "2018年8月実施 問1（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
  - Engineering.Fluid-Mechanics.Jet-Propulsion
---

# 九州大学 工学府 機械系専攻 2018年8月実施 流体工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図に示すとおり，非圧縮性流体（密度 $\rho$）の主流中に平行におかれた二次元対称翼を，主流に対して垂直方向に振動させたところ，翼には推力（流れの上流方向に向かう力）が発生した。このとき，主流の流速は $U$ で一様であり，翼の下流断面で全圧分布を計測したところ，図に示すとおりの時間平均の全圧分布 $p_t(y)$ が得られた。ただし，$p_\infty$ は遠方の静圧であり，翼の振動中心から主流に垂直な方向に $y$ 軸を取っている。また，下流断面において，静圧は一様で $p_\infty$ と等しく，流速は主流方向の成分しか持たなかった。流れは変動しているものの，時間平均流れの状態で流れが定常とみなせると仮定して，以下の問に答えよ。（50点）

図中の全圧分布は

$$
\begin{aligned}
&p_t(y)\\
&=\begin{cases}
p_\infty+\rho U^2/2,&\sqrt2a<|y|,\\
p_\infty+2\rho U^2(a/y)^4,&a<|y|\le\sqrt2a,\\
p_\infty+2\rho U^2,&|y|\le a
\end{cases}
\end{aligned}
$$

であり，$a$ は正の定数である。

**(1)** 断面Iにおける，主流方向の速度の分布 $u(y)$ を求めよ。

**(2)** 振動翼に作用する単位奥行き当たりの推力 $T$ を求めよ。

**(3)** 振動翼により流体が得る単位奥行き当たりの動力 $P$ を求めよ。

![原題の図：振動翼と下流断面Iの全圧分布](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_fluids-1-original.png)

#### 题目描述

如图所示，在密度为 $\rho$ 的不可压缩流体主流中，平行放置一个二维对称翼，使其沿垂直于主流的方向振动，翼上便产生指向上游的推力。主流速度均匀且为 $U$。测量翼下游截面的总压分布，得到图示的时间平均总压分布 $p_t(y)$。其中 $p_\infty$ 为远处静压，$y$ 轴从翼的振动中心出发，垂直于主流方向。在下游截面，静压均匀并等于 $p_\infty$，流速仅具有主流方向的分量。虽然流动随时间波动，但假设其时间平均状态可视为定常流动，回答下列问题。（50分）

图中的总压分布为

$$
\begin{aligned}
&p_t(y)\\
&=\begin{cases}
p_\infty+\rho U^2/2,&\sqrt2a<|y|,\\
p_\infty+2\rho U^2(a/y)^4,&a<|y|\le\sqrt2a,\\
p_\infty+2\rho U^2,&|y|\le a,
\end{cases}
\end{aligned}
$$

其中 $a$ 为正常量。

**(1)** 求截面I上主流方向的速度分布 $u(y)$。

**(2)** 求作用于振动翼的单位进深推力 $T$。

**(3)** 求流体从振动翼获得的单位进深功率 $P$。

## **Kai**

### (1)

全圧と静圧の差は動圧なので、$u=\sqrt{2(p_t-p_\infty)/\rho}$ より

$$
\boxed{u(y)=
\begin{cases}
2U,&|y|\le a,\\
2U(a/y)^2,&a<|y|\le\sqrt2a,\\
U,&|y|>\sqrt2a.
\end{cases}}
$$

### (2)

下流の幅 $dy$ を通る流量は $u(y)\,dy$ である。同じ流管の上流幅を $dy_0$ とすると、連続の式から $U\,dy_0=u\,dy$。静圧力が相殺する流管について運動量収支を取れば、上流向き推力の大きさは

$$
T=\rho\int_{-\infty}^{\infty}u(u-U)\,dy.
$$

したがって

$$
\begin{aligned}
T&=2\rho U^2\left[
\int_0^a2\,dy+
\int_a^{\sqrt2a}\left(\frac{4a^4}{y^4}-\frac{2a^2}{y^2}\right)dy
\right]\\
&=\boxed{\frac43(2+\sqrt2)\rho U^2a}.
\end{aligned}
$$

### (3)

同じ質量流量の流体について運動エネルギーの増加を計算する。

$$
P=\frac\rho2\int_{-\infty}^{\infty}u(u^2-U^2)\,dy.
$$

よって

$$
\begin{aligned}
P&=\rho U^3\left[
\int_0^a6\,dy+
\int_a^{\sqrt2a}\left(\frac{8a^6}{y^6}-\frac{2a^2}{y^2}\right)dy
\right]\\
&=\boxed{\frac45(7+\sqrt2)\rho U^3a}.
\end{aligned}
$$
