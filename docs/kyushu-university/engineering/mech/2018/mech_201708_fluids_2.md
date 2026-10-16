---
sidebar_label: "2017年8月実施 問2（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
  - Engineering.Fluid-Mechanics.Pipe-Friction
  - Engineering.Fluid-Mechanics.Pipe-Networks
---

# 九州大学 工学府 機械系専攻 2017年8月実施 流体工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

密度 $\rho$ の水を貯めた水槽 A、B、C を、各底面が同じ高さの基準面となるように置く。A は大気開放、B は質量 $M$ の物体が水面に載り、C は密閉されている。A、C の断面積は十分大きく、水位はそれぞれ $H_1,H_3$ で一定。B の断面積は有限の $S$ で、水位 $H$ は変化できる。

A–B 間、B–C 間を、それぞれ長さ $L$、内径 $d$、管摩擦係数 $\lambda$ の円管でつなぐ。A–B 間には長さを無視できる弁がある。管入口損失を無視し、管出口に縮流はない。B 内では管の入口・出口以外の流れの動圧は十分小さい。水槽壁と物体の間に漏水や摩擦はない。重力加速度を $g$ とする。（50点）

1. 弁を全開にすると、A から B、B から C の流量が等しくなった。このときの B の水位を $H_2$ とする。体積流量 $Q$ と C 水面上のゲージ圧 $P_C$ を求めよ。全開の弁損失は無視できる。
2. この状態から弁を全閉にすると B の水位がゆっくり下がった。時間 $t$ の水位 $H(t)$ に関する微分方程式を示せ。流れは準定常、C のゲージ圧は一定、$S$ は管断面積に比べて十分大きいとする。
3. $H(0)=H_2$ として微分方程式を積分し、$H(t)$ を求めよ。
4. 十分時間が経過した後の B の水位 $H_\infty$ を求めよ。

![原題の図（九州大学 2018年度 流体工学 問2）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_fluids-2-original.png)

#### 题目描述

同一水平底面的 A、B、C 水槽装密度 $\rho$ 的水。A 开放，B 水面压质量 $M$ 的物体，C 密闭。A、C 足够大，液位固定为 $H_1,H_3$；B 截面积为 $S$，液位可变。相邻槽各用长 $L$、内径 $d$、摩擦系数 $\lambda$ 的管连接，A–B 管有可忽略长度的阀。忽略入口损失，出口无缩流；B 内主体流速足够小，物体与槽壁无漏水及摩擦。全开阀时两管流量相等、B 液位 $H_2$，求流量 $Q$ 和 C 的表压 $P_C$。随后关闭阀，在 C 压力恒定、准定常流动且 $S$ 远大于管面积的条件下，建立 B 液位方程，求满足 $H(0)=H_2$ 的 $H(t)$ 及最终水位。

## **Kai**

管断面積、各管の損失係数を

$$
A=\frac{\pi d^2}{4},\qquad K=1+\lambda\frac Ld
$$

とおく。$K$ の1は管から水槽へ流入する際の出口損失である。B 水面のゲージ圧は $Mg/S$。

### (1)

A、B の自由表面間の水頭収支から

$$
H_1-H_2-\frac{M}{\rho S}
=K\frac1{2g}\left(\frac QA\right)^2.
$$

よって

$$
\boxed{Q=A\sqrt{\frac{2g}{K}
\left(H_1-H_2-\frac{M}{\rho S}\right)}}.
$$

B–C 間にも同じ流量、同じ損失があるため

$$
H_2+\frac{M}{\rho S}-H_3-\frac{P_C}{\rho g}
=H_1-H_2-\frac{M}{\rho S},
$$

$$
\boxed{P_C=\frac{2Mg}{S}+\rho g(2H_2-H_1-H_3)}.
$$

### (2)

平衡水頭に対応する水位を

$$
H_*=H_3+\frac{P_C}{\rho g}-\frac{M}{\rho S}
$$

とする。B–C の損失式と B の体積収支は

$$
H-H_*=\frac{K}{2g}\left(\frac{Q_{BC}}A\right)^2,
\qquad S\frac{dH}{dt}=-Q_{BC}.
$$

水位が低下する区間では

$$
\boxed{\frac{dH}{dt}=-\frac AS\sqrt{\frac{2g}{K}}\sqrt{H-H_*}}.
$$

### (3)

$c=(A/S)\sqrt{2g/K}$、$\Delta=H_2-H_*>0$ とおけば

$$
2\sqrt{H-H_*}=2\sqrt\Delta-ct.
$$

したがって、平衡水位が容器内にある $H_*\ge0$ の場合、

$$
\boxed{
H(t)=
\begin{cases}
H_*+\left(\sqrt\Delta-\dfrac c2t\right)^2,
&0\le t\le t_*,\\
H_*,&t\ge t_*,
\end{cases}
\qquad t_*=\frac{2\sqrt\Delta}{c}.
}
$$

二乗した式は $t_*$ までの排水過程を表す。$H_*<0$ なら水槽 B が空になる時点でこの水頭モデルの適用は終了する。

### (4)

流れが止まると B、C の水頭が等しいので、容器内で平衡する場合

$$
\boxed{H_\infty=H_*=H_3+\frac{P_C}{\rho g}-\frac{M}{\rho S}
=2H_2-H_1+\frac{M}{\rho S}}.
$$
