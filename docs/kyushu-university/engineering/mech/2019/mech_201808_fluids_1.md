---
sidebar_label: "2019年度 問1（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
  - Engineering.Fluid-Mechanics.Jet-Propulsion
---

# 九州大学 工学府 機械系専攻 2019年度 流体工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

密度 $\rho$ の非圧縮性流体の一様な主流（流速 $U$）に平行に置かれた二次元対称翼を、主流に垂直な方向へ振動させると、翼に上流向きの推力が発生した。翼の下流断面 I で測定した時間平均の全圧分布は、翼の振動中心から主流に垂直に測った座標 $y$ に対して

$$
p_t(y)=
\begin{cases}
p_\infty+2\rho U^2,& |y|\le a,\\
p_\infty+2\rho U^2(a/y)^4,&a<|y|\le\sqrt2a,\\
p_\infty+\rho U^2/2,&\sqrt2a<|y|
\end{cases}
$$

であった。$a>0$、$p_\infty$ は遠方の静圧である。断面 I の静圧は一様で $p_\infty$ に等しく、流速は主流方向成分のみを持つ。時間平均流れを定常とみなして、次を求めよ。（50点）

1. 断面 I の主流方向速度分布 $u(y)$。
2. 振動翼に作用する単位奥行き当たりの推力 $T$。
3. 振動翼により流体が得る単位奥行き当たりの動力 $P$。

![原題の図（九州大学 2019年度 流体工学 問1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2019/fluids-1-original.png)

#### 题目描述

密度为 $\rho$、速度为 $U$ 的均匀不可压缩主流中，二维对称翼沿垂直主流的方向振动并产生向上游的推力。下游截面 I 的平均总压为上列分段函数，$a>0$，$y$ 从翼振动中心沿横向测量，$p_\infty$ 为远处静压。截面 I 的静压处处为 $p_\infty$，速度只有主流方向分量。把时间平均流动视为定常，求该截面的速度分布、翼所受每单位进深推力，以及翼使流体获得的每单位进深功率。

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
