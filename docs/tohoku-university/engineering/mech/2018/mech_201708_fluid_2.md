---
sidebar_label: "2017年8月実施 流体力学 第2問"
tags:
  - Tohoku-University
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 流体力学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2. 図1に示すように，車輪の付いた水槽の横穴から密度 $\rho$ の水が水平に噴き出し，その反作用により水槽は水平な路面の上を一定の加速度 $\alpha$ で移動している。重力加速度 $g$ は鉛直下向きで，水面は水平面に対して角度 $\theta$ 傾いている。横穴の断面積は $A$，横穴は右壁に沿って水面から深さ $H$ の位置にあり，横穴から見た水の噴き出し速度は $U$ で一定である。水槽は十分に大きく，水槽と水槽内の水の合計質量 $M$，水面の形と高さの時間的な変化は無視できるものとする。また，水槽の周囲の圧力は大気圧とし，水の粘性と水槽の移動に対する摩擦抵抗は無視する。次の問いに答えよ。

**(1)** 水槽から見て，放出される水が持ち出す単位時間あたりの運動量を $\rho,A$ および $U$ で表せ。

**(2)** 加速度 $\alpha$ を $\rho,A,U$ および $M$ で表せ。

**(3)** 角度 $\theta$ を $\alpha$ と $g$ で表せ。

**(4)** 噴き出し速度 $U$ を求めよ。

![図1 車輪付き水槽の噴流と傾斜水面](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_fluid_2_original_figure_1.png)

#### 题目描述

2. 如图1，密度为 $\rho$ 的水从带轮水槽的侧孔水平喷出，其反作用使水槽在水平路面上以恒定加速度 $\alpha$ 运动。重力加速度 $g$ 竖直向下，水面相对水平面倾斜角为 $\theta$。侧孔截面积为 $A$，沿右侧壁测量，侧孔位于水面下深度 $H$ 处。相对侧孔观察，水的喷出速度为恒定值 $U$。水槽足够大，水槽及槽内水的总质量 $M$、水面的形状与高度随时间的变化均可忽略。水槽周围的压力为大气压，忽略水的黏性和对水槽运动的摩擦阻力。回答下列问题。

**(1)** 从水槽参考系观察，用 $\rho,A,U$ 表示喷出的水在单位时间内带走的动量。

**(2)** 用 $\rho,A,U,M$ 表示加速度 $\alpha$。

**(3)** 用 $\alpha,g$ 表示倾角 $\theta$。

**(4)** 求喷出速度 $U$。

图1给出了水槽的运动方向、喷流、水面倾角及侧孔深度。

## **Kai**

### (1), (2)

質量流量は $\dot m=\rho AU$ なので、右向きの運動量流束は

$$
\boxed{\dot mU=\rho AU^2}.
$$

その反作用が左向きの推力となり、$M\alpha=\rho AU^2$。従って

$$
\boxed{\alpha=\frac{\rho AU^2}{M}}.
$$

### (3)

水槽とともに動く座標を右向き $x$、上向き $z$ とする。単位質量あたりの慣性力は右向き $\alpha$ であるから、槽内の準静水圧は

$$
p_x=\rho\alpha,\qquad p_z=-\rho g.
$$

自由表面上では $dp=0$ なので $dz/dx=\alpha/g$。よって

$$
\boxed{\tan\theta=\frac\alpha g,\qquad\theta=\tan^{-1}\frac\alpha g}.
$$

### (4)

加速系での力のポテンシャルは $gz-\alpha x$。ベルヌーイ式は

$$
\frac p\rho+\frac{q^2}2+gz-\alpha x=\text{一定}.
$$

横穴の真上の水面点と出口は $x$ が同じなので慣性力の項が消える。両点は大気圧、水面速度は無視でき、高さの差が $H$ だから

$$
gH=\frac{U^2}2,\qquad\boxed{U=\sqrt{2gH}}.
$$

従って $\alpha=2\rho AgH/M$、$\tan\theta=2\rho AH/M$ でもある。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 14ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
