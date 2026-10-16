---
sidebar_label: "2018年8月実施 問2（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
  - Engineering.Fluid-Mechanics.Pipe-Friction
  - Engineering.Fluid-Mechanics.Minor-Losses
---

# 九州大学 工学府 機械系専攻 2018年8月実施 流体工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

大気に開放された十分大きな水槽に、全長 $3L$、内径 $D$ の水平な直円管を接続する。管軸は水槽底面から高さ $h$ にあり、右端は大気開放である。水槽の水位 $H_0$ は底面から測り、一定だが未知である。管摩擦係数 $\lambda$ も未知である。

水槽側壁から $L$、$2L$ 離れた位置①、②に、上端が大気開放の細い液柱計を鉛直に接続する。位置②と右端③の間には、損失係数 $\zeta$ が未知の弁がある。弁をある開度にすると、水は右端から定常に水平噴出し、水槽底面と同じ高さの水平面上で、右端から水平距離 $x_w$ の位置へ達した。①、②の液柱計水位は管軸からそれぞれ $H_1,H_2$ であり、$2H_2>H_1>H_2$ とする。

管入口損失、液柱計の分岐損失、噴流と大気との摩擦、弁の長さは無視する。管出口に縮流はない。重力加速度を $g$ として答えよ。（50点）

1. 噴出する水の体積流量 $Q$ を $x_w,h,g,D$ で表せ。
2. $\lambda$ を $x_w,h,H_1,H_2,D,L$ で表せ。
3. $H_0$ を $x_w,h,H_1,H_2$ で表せ。
4. $\zeta$ を $x_w,h,H_1,H_2$ で表せ。

![原題の図（九州大学 2019年度 流体工学 問2）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_fluids-2-original.png)

#### 题目描述

大气开放的大水槽连接长 $3L$、内径 $D$ 的水平直管，管轴距槽底 $h$，右端向大气喷出。未知恒定槽水位 $H_0$ 从槽底测量，未知管摩擦系数为 $\lambda$。离槽壁 $L$ 和 $2L$ 的①、②处装开放测压管，水柱高度从管轴量起为 $H_1,H_2$，满足 $2H_2>H_1>H_2$。②与出口③之间装未知损失系数 $\zeta$ 的阀。水平喷流落到槽底同高平面时，水平距离为 $x_w$。忽略入口与测压分支损失、空气摩擦和阀长，出口无缩流。按各问指定变量求体积流量 $Q$、管摩擦系数 $\lambda$、水槽水位 $H_0$ 和阀损失系数 $\zeta$。

## **Kai**

### (1)

管内平均流速を $v$ とする。噴流の落下時間は $\sqrt{2h/g}$ なので

$$
v=x_w\sqrt{\frac{g}{2h}},\qquad
\boxed{Q=\frac{\pi D^2x_w}{4}\sqrt{\frac{g}{2h}}}.
$$

以下、速度水頭を $K=v^2/(2g)=x_w^2/(4h)$ とおく。

### (2)

①と②の高さと流速は等しく、圧力水頭差が長さ $L$ の摩擦損失に等しい。

$$
H_1-H_2=\lambda\frac LD K.
$$

よって

$$
\boxed{\lambda=\frac{4hD(H_1-H_2)}{Lx_w^2}}.
$$

### (3)

水槽自由表面と①の間のベルヌーイ式は

$$
H_0=h+H_1+K+\lambda\frac LD K.
$$

したがって

$$
\boxed{H_0=h+2H_1-H_2+\frac{x_w^2}{4h}}.
$$

### (4)

②と③の間には、長さ $L$ の管摩擦と弁損失がある。

$$
H_2=\left(\lambda\frac LD+\zeta\right)K.
$$

(2)を使うと

$$
\boxed{\zeta=\frac{4h(2H_2-H_1)}{x_w^2}}.
$$

与えられた不等式から $\lambda>0$、$\zeta>0$ である。
