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

水平から角度 $\theta$ 傾いた無限に広い平板が、板に平行に一定速度 $U$ で左上方へ動いている。平板上に密度 $\rho$、粘性係数 $\mu$ の水が、一定だが未知の厚さ $h$ で、十分発達した層流状態で流れる。水の上方と平板の下方は大気であり、空気の粘性は水に比べて無視できる。平板を動かす動力（板の流れ方向単位長さ、紙面垂直方向単位幅当たり）は $L$。

水層が十分薄いという仮定は用いない。流れは定常で、紙面垂直方向に一様。$x$ 軸を斜面下向き、$y$ 軸を板に垂直な上向きにとり、重力加速度を $g$ とする。（50点）

1. 水の微小検査体積の $y$ 方向運動方程式から、$\partial p/\partial x=0$ を示せ。
2. $x$ 方向の運動方程式を示せ。
3. $x$ 方向流速 $u(y)$ を $y,\theta,U,\rho,\mu,h,g$ で表せ。
4. 厚さ $h$ を $\theta,U,\rho,L,g$ で表せ。
5. 水がすべて斜面上方（$x$ の負方向）に流れるために必要な板速度の下限 $U_{\min}$ を $\theta,\rho,\mu,L,g$ で表せ。

![原題の図（九州大学 2017年度 流体工学 問3）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_fluids-3-original.png)

#### 题目描述

倾角 $\theta$ 的无限平板以速率 $U$ 沿斜面向左上方运动，其上有密度 $\rho$、动力黏度 $\mu$、恒定未知厚度 $h$ 的充分发展定常层流水层。上方和板下方均为空气，空气黏性忽略；不采用薄膜近似，垂直纸面方向均匀。驱动功率按板长和宽各单位长度计为 $L$。取 $x$ 沿斜面向下，$y$ 垂直板向上。证明压力沿 $x$ 无梯度，写出 $x$ 向运动方程，求速度分布、厚度 $h$，以及使全水层向上流动的最小板速。

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
U^3\ge\frac{L^2}{2\mu\rho g\sin\theta},\qquad
\boxed{U_{\min}=\left(\frac{L^2}{2\mu\rho g\sin\theta}\right)^{1/3}}.
$$

等号では自由表面だけが静止する。自由表面も含め厳密に上向きなら $U>U_{\min}$ とする。
