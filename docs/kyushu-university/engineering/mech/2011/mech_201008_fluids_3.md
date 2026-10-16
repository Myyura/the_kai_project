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

大気中において、鉛直面から角度 $\theta$ だけ傾いた斜面を、密度 $\rho$、粘度 $\mu$ の水が厚さ $h$ を保った十分発達した層流として自然流下する。図のように $x$ を斜面下向き、$y$ を斜面から外向きにとり、二次元流れとする。重力加速度は $g$ である。（50点）

1. 流下方向の断面平均速度 $u_m$ を代表速度として、現象を支配する無次元数をすべて求めよ。
2. 水膜内 $0<y<h$ の圧力分布 $p(y)$ をゲージ圧で求めよ。
3. $x$ 方向流速を $u(y)$ として、$x$ 方向の力の釣り合い式を導出せよ。
4. $u(y)$ を求めよ。大気の粘度は水の粘度より十分小さい。
5. $\theta$ を (1) の無次元数で表せ。

![原題の図（九州大学 2011年度 流体工学 問3）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2011/mech_201008_fluids-3-original.png)

#### 题目描述

密度 $\rho$、黏度 $\mu$ 的水沿与竖直成角 $\theta$ 的斜面，以厚度 $h$ 的充分发展二维层流自然下落。$x$ 沿斜面向下，$y$ 沿壁面法向向外。以平均流速 $u_m$ 为代表速度，求无量纲数、表压分布、流向力平衡方程、速度分布，以及倾角与无量纲数的关系；忽略空气黏度。

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
\frac{dp}{dy}=-\rho g\sin\theta,\qquad p(h)=0,
\qquad \boxed{p(y)=\rho g\sin\theta\,(h-y)}.
$$

### (3)

十分発達した流れでは $\partial p/\partial x=0$ である。微小要素の流下方向の釣り合いから

$$
\frac{d\tau}{dy}+\rho g\cos\theta=0,\qquad
\tau=\mu\frac{du}{dy},\qquad
\boxed{\mu\frac{d^2u}{dy^2}+\rho g\cos\theta=0}.
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
\boxed{\cos\theta=\frac{3\mathrm{Fr}^2}{\mathrm{Re}}
=\frac{3\Pi_1}{\Pi_2},\qquad
\theta=\arccos\!\left(\frac{3\mathrm{Fr}^2}{\mathrm{Re}}\right)}.
$$

自然流下の範囲では $0\le3\mathrm{Fr}^2/\mathrm{Re}\le1$ である。
