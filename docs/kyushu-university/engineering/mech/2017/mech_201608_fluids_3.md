---
sidebar_label: "2016年8月実施 問3（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Falling-Film
  - Engineering.Fluid-Mechanics.Navier-Stokes-Equations
---

# 九州大学 工学府 機械系専攻 2016年8月実施 流体工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように，水平から $\theta$ だけ傾いた無限に広い平板がそれと平行方向に一定速度 $U$ で左上方に動いている。この平板上に沿って，密度 $\rho$，粘性係数 $\mu$ の水が一定厚さ（厚さは未知）にて十分に発達した層流状態で流れている。水の上方および平板の下方は大気であり，大気の粘性係数は水の粘性係数に比べて無視できるほど小さいものとする。平板を動かすのに要する動力（平板の流れ方向の単位長さおよび紙面垂直方向の単位幅当たり）が $L$ であるとき，以下の問いに答えよ。ただし，水の厚さが十分に薄いとする仮定は成り立たないものとする。また，流れは定常であるとともに，紙面垂直方向に一様であるとする。なお，座標系を図中に示すとおりに設定し，重力加速度を $g$ とせよ。（50点）

**(1)** 水中の微小検査体積について $y$ 方向の運動量方程式をたてることにより，水の圧力 $p$ の $x$ 方向こう配 $\partial p/\partial x$ がゼロであることを示せ。

**(2)** 水中の微小検査体積に対する $x$ 方向の運動量方程式を示せ。

**(3)** 水の厚さを $h$ として，水の $x$ 方向速度 $u$ の $y$ 方向分布を，$y,\theta,U,\rho,\mu,h$ および $g$ で表せ。

**(4)** 水の厚さ $h$ を，$\theta,U,\rho,L$ および $g$ で表せ。

**(5)** 平板の動きに誘引されることにより水がすべて上方（$x$ の負の方向）に流れるために必要な平板速度の下限値 $U_{\min}$ を，$\theta,\rho,\mu,L$ および $g$ で表せ。

![原題の図：傾斜平板上の水と座標系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_fluids-3-original.png)

### 题目描述

如图所示，一块相对于水平面倾斜 $\theta$、无限宽广的平板，以恒定速度 $U$ 沿板面向左上方运动。密度为 $\rho$、动力黏度为 $\mu$ 的水沿平板流动，水层厚度恒定但未知，流动为充分发展的层流。水层上方和平板下方均为大气，大气的黏度相对于水可以忽略。驱动平板所需的功率，按平板沿流动方向的单位长度和垂直纸面方向的单位宽度计，为 $L$。回答下列问题。不能假设水层厚度足够薄。流动为定常流动，且沿垂直纸面的方向均匀。坐标系按图设置，重力加速度为 $g$。（50分）

**(1)** 对水中微小控制体建立 $y$ 方向动量方程，证明压力 $p$ 沿 $x$ 方向的梯度 $\partial p/\partial x$ 为零。

**(2)** 写出水中微小控制体的 $x$ 方向动量方程。

**(3)** 将水层厚度记作 $h$，用 $y,\theta,U,\rho,\mu,h,g$ 表示水的 $x$ 方向速度 $u$ 沿 $y$ 方向的分布。

**(4)** 用 $\theta,U,\rho,L,g$ 表示水层厚度 $h$。

**(5)** 为使平板运动带动的全部水均向上方（$x$ 的负方向）流动，求所需平板速度的下限 $U_{\min}$，用 $\theta,\rho,\mu,L,g$ 表示。

## **Kai**

### (1)

充分発達した流れは $\boldsymbol v=(u(y),0)$ である。$y$ 方向の釣り合いは

$$
0=-\frac{\partial p}{\partial y}-\rho g\cos\theta.
$$

自由表面 $y=h$ で $p=p_{\mathrm{atm}}$ より

$$
p=p_{\mathrm{atm}}+\rho g(h-y)\cos\theta.
$$

$h$ は一定なので $\boxed{\partial p/\partial x=0}$。

### (2)

$x$ 方向では

$$
0=-\frac{\partial p}{\partial x}+\mu\frac{d^2u}{dy^2}
+\rho g\sin\theta.
$$

したがって

$$
\boxed{\mu\frac{d^2u}{dy^2}=-\rho g\sin\theta}.
$$

### (3)

板の速度は $-U$、自由表面のせん断応力は0なので

$$
u(0)=-U,\qquad u'(h)=0.
$$

積分すると

$$
\boxed{u(y)=-U+\frac{\rho g\sin\theta}{\mu}
\left(hy-\frac{y^2}{2}\right)}.
$$

### (4)

水が板を下方に引くせん断応力の大きさは

$$
\tau_w=\mu u'(0)=\rho gh\sin\theta.
$$

動力 $L=\tau_wU$ より

$$
\boxed{h=\frac{L}{\rho gU\sin\theta}}.
$$

### (5)

$u'(y)\ge0$ より最大流速は自由表面にあり、全域で上向きに流れる条件は $u(h)\le0$。

$$
-U+\frac{\rho g\sin\theta}{2\mu}h^2\le0.
$$

(4)を代入して

$$
\begin{gathered}
U^3\ge\frac{L^2}{2\mu\rho g\sin\theta},\\
\boxed{U_{\min}=\left(\frac{L^2}{2\mu\rho g\sin\theta}\right)^{1/3}}.
\end{gathered}
$$

等号では自由表面だけが静止する。自由表面も含め厳密に上向きなら $U>U_{\min}$ とする。
