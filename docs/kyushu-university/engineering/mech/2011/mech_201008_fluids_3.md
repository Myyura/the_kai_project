---
sidebar_label: "2010年8月実施 問3（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Falling-Film
  - Engineering.Fluid-Mechanics.Dimensional-Analysis
---

# 九州大学 工学府 機械系専攻 2010年8月実施 流体工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図に示すように，大気中において鉛直面から角度 $\theta$ だけ傾いた斜面を，密度 $\rho$，粘度 $\mu$ の水が水膜厚さ $h$ を保ったまま十分に発達した層流状態で自然流下している。図のように $x$–$y$ 座標系を設定し，流れが二次元的であるとして，以下の問いに答えよ。重力加速度を $g$ とする。（50点）

**(1)** 水が流下する方向（$x$ 方向）の水の流速の断面平均速度 $u_m$ を代表速度とし，現象を支配する無次元数を全て求めよ。

**(2)** 水面に垂直な方向（$y$ 方向）の水膜内 $(0<y<h)$ の圧力分布 $p(y)$ をゲージ圧で求めよ。

**(3)** 水の $x$ 方向流速の分布を $u(y)$（ただし，$0<y<h$）として，$x$ 方向の力の釣り合い式を導出せよ。

**(4)** 水の $x$ 方向流速の分布 $u(y)$ を求めよ。なお，大気の粘度は水の粘度に比べて無視できるほど小さいものとする。

**(5)** 傾斜角 $\theta$ を(1)で求めた無次元数で表せ。

![原題の図：傾斜面上を流下する水膜と座標系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2011/mech_201008_fluids-3-original.png)

### 题目描述

如图所示，在大气中，密度为 $\rho$、动力黏度为 $\mu$ 的水沿与竖直面夹角为 $\theta$ 的斜面自然向下流动，保持水膜厚度 $h$，且处于充分发展的层流状态。按图建立 $x$–$y$ 坐标系，设流动为二维流动，回答下列问题。重力加速度为 $g$。（50分）

**(1)** 以水流下方向（$x$ 方向）的截面平均流速 $u_m$ 为特征速度，求支配该现象的全部无量纲数。

**(2)** 求沿垂直水面的方向（$y$ 方向），水膜内部 $(0<y<h)$ 的压力分布 $p(y)$，以表压表示。

**(3)** 将水在 $x$ 方向的速度分布记作 $u(y)$，其中 $0<y<h$，推导 $x$ 方向的力平衡方程。

**(4)** 求水在 $x$ 方向的速度分布 $u(y)$。设大气的黏度相对于水的黏度足够小，可以忽略。

**(5)** 用(1)求得的无量纲数表示倾斜角 $\theta$。

## **Kai**

### (1)

有次元量は $\rho,\mu,h,u_m,g$ の五つ、基本次元は $M,L,T$ の三つなので、独立な無次元群は二つである。例えば

$$
\boxed{\mathrm{Re}=\frac{\rho u_mh}{\mu},\qquad
\mathrm{Fr}=\frac{u_m}{\sqrt{gh}}}
$$

を選べる。傾斜角 $\theta$ 自身も無次元の幾何学パラメータである。逆数を用いた $\Pi_1=1/\mathrm{Re}$、$\Pi_2=1/\mathrm{Fr}^2$ も同等である。

### (2)

$\theta$ は鉛直から測るので、壁面に向かう重力成分は $g\sin\theta$。したがって

$$
\begin{gathered}
\frac{dp}{dy}=-\rho g\sin\theta,\\
p(h)=0,\\
\boxed{p(y)=\rho g\sin\theta\,(h-y)}.
\end{gathered}
$$

### (3)

十分発達した流れでは $\partial p/\partial x=0$ である。微小要素の流下方向の釣り合いから

$$
\begin{gathered}
\frac{d\tau}{dy}+\rho g\cos\theta=0,\\
\tau=\mu\frac{du}{dy},\\
\boxed{\mu\frac{d^2u}{dy^2}+\rho g\cos\theta=0}.
\end{gathered}
$$

### (4)

壁面の無滑り条件 $u(0)=0$ と自由面のせん断応力ゼロ $u'(h)=0$ を用いて二度積分すると

$$
\boxed{u(y)=\frac{\rho g\cos\theta}{\mu}\left(hy-\frac{y^2}{2}\right)}.
$$

### (5)

$$
u_m=\frac1h\int_0^h u(y)\,dy
=\frac{\rho gh^2\cos\theta}{3\mu}.
$$

ゆえに

$$
\boxed{\begin{gathered}
\cos\theta=\frac{3\mathrm{Fr}^2}{\mathrm{Re}}
=\frac{3\Pi_1}{\Pi_2},\\
\theta=\arccos\!\left(\frac{3\mathrm{Fr}^2}{\mathrm{Re}}\right)
\end{gathered}}.
$$

自然流下の範囲では $0\le3\mathrm{Fr}^2/\mathrm{Re}\le1$ である。
