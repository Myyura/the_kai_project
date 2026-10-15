---
sidebar_label: "2011年度 問2（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
  - Engineering.Fluid-Mechanics.Lift-and-Drag
---

# 九州大学 工学府 機械系専攻 2011年度 流体工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

水平な幅 $2B$ の二次元流路の中央に柱状物体があり、密度 $\rho$ の非圧縮性流体が流れる。十分上流の断面①では一様速度 $U$、物体直後の断面②では中心軸対称の速度分布を持ち、後流半幅 $\delta$ の内側で中心のゼロから直線的に増加し、その外側で一様速度 $U_2$ となる。断面②の圧力は一様である。

十分下流の断面③では再び流れは一様となり、圧力降下 $p_1-p_3$ は断面①の動圧の $1/5$ である。壁面摩擦を無視し、後流の外側では損失がない。単位奥行き当たりを考えて次を求めよ。（50点）

1. 物体に作用する抗力 $D$ を $B,\rho,U$ で表せ。
2. $U_2/U$ を求めよ。
3. $\delta/B$ を求めよ。

![原題の図（九州大学 2011年度 流体工学 問2）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2011/fluids-2-original.png)

#### 题目描述

宽 $2B$ 的二维通道内有柱体。上游速度为 $U$，近尾流中心速度为零，在半宽 $\delta$ 内线性增至外部均匀速度 $U_2$；该截面压力均匀。远下游恢复均匀流，压力比上游下降上游动压的 $1/5$。忽略壁面摩擦，尾流外部无损失，求单位进深阻力、速度比与尾流半宽比。

## **Kai**

### (1)

断面①と③の流量・面積は等しいため、断面③の速度も $U$ である。全体の運動量式から

$$
D=2B(p_1-p_3)=2B\cdot\frac15\frac{\rho U^2}{2}
=\boxed{\frac15\rho BU^2}.
$$

### (2)

断面②で、中心からの距離を $y$ とすると後流内は $u=U_2|y|/\delta$ である。連続の式は

$$
2BU=2(B-\delta)U_2+2\int_0^\delta\frac{U_2y}{\delta}\,dy
=(2B-\delta)U_2.
$$

後流外側のベルヌーイ式より $p_1-p_2=\rho(U_2^2-U^2)/2$。断面①–②の運動量式は

$$
2B(p_1-p_2)-D
=\rho U_2^2\left(2B-\frac{4\delta}{3}\right)-2\rho BU^2.
$$

$r=U_2/U$、$s=\delta/B$ とおくと

$$
2=(2-s)r,\qquad
\frac45=r^2\left(1-\frac{4s}{3}\right).
$$

$s$ を消去すれば $25r^2-40r+12=0$、したがって $r=6/5$ または $2/5$。後者では $s<0$ になるため除外し、

$$
\boxed{\frac{U_2}{U}=\frac65}.
$$

### (3)

$$
\boxed{\frac\delta B=2-\frac2r=\frac13}.
$$
