---
sidebar_label: "2019年8月実施 問2（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Pipe-Friction
  - Engineering.Fluid-Mechanics.Minor-Losses
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
---

# 九州大学 工学府 機械系専攻 2019年8月実施 流体工学 問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

長さ $L$、内径 $d$ の細い注射針が、内径 $D\gg d$ のシリンダ底面中央に付いた、手のひらサイズの注射器を考える。ピストンの質量は無視する。針の管摩擦係数を一定値 $\lambda$ とし、シリンダ内の流体管摩擦、液漏れ、ピストンの摩擦は無視する。大気圧を $P_a$、重力加速度を $g$ とする。

1. 密度 $\rho$ の液を入れた十分大きい容器に、針を下向きにして先端から長さ $l<L$ だけ浸し、ピストンを一定速度 $V$ で上方に引く。流れを定常とし、ピストンが底面から高さ $H$ の位置にあるとき、必要な上向き力 $F_1$ を求めよ。針入口の損失係数は $\zeta_{\mathrm{in}1}$。針からシリンダへの流出時に縮流はなく、注射器内は液で満たされる。
2. (1) で $V$ を増しても吸い込める体積流量には限界がある。最大体積流量 $Q_{\max}$ を求めよ。液の飽和蒸気圧は大気圧に比べて十分小さい。
3. 容器から取り出して針を鉛直上向きに立て、ピストンを速度 $V$ で押して液を大気中に放出する。底面からピストンまでの距離を $H$ として必要な力 $F_2$ を求めよ。針付け根の入口損失係数は $\zeta_{\mathrm{in}2}$、大気への流出時に縮流はない。流れは定常とする。
4. (3) の液が針先から上方に到達する高さ $h$ を求めよ。液と空気との摩擦は無視する。

#### 题目描述

注射器针长 $L$、内径 $d$，筒内径 $D\gg d$，活塞无质量、无摩擦和泄漏；针内沿程阻力系数为常数 $\lambda$，忽略筒内沿程摩擦。大气压 $P_a$、重力加速度 $g$。① 针朝下并浸入密度 $\rho$ 的大容器液体中 $l<L$，活塞以 $V$ 向上拉，距筒底 $H$，针入口损失系数为 $\zeta_{\mathrm{in}1}$，针向筒内流出不缩流，求拉力。② 将饱和蒸气压近似为零，求最大吸入体积流量。③ 取出后针朝上，以速度 $V$ 推动活塞，距筒底 $H$，针入口损失系数为 $\zeta_{\mathrm{in}2}$，出口不缩流，求推力。④ 求液流从针尖向上的最大高度。

## **Kai**

針内流速を $v$、面積を $A_d=\pi d^2/4$、$A_D=\pi D^2/4$ とする。連続の式より

$$
v=V\left(\frac Dd\right)^2,\qquad Q=A_dv=A_DV.
$$

### (1)

容器の自由表面からピストン下面までの高さは $L+H-l$。入口、管摩擦、急拡大の損失水頭を加える。ピストン下面の絶対圧力を $p_C$ とすると

$$
\frac{P_a-p_C}{\rho g}=L+H-l+
\frac{V^2}{2g}+\left(\zeta_{\mathrm{in}1}+\lambda\frac Ld\right)\frac{v^2}{2g}
+\frac{(v-V)^2}{2g}.
$$

$F_1=A_D(P_a-p_C)$ より

$$
\boxed{F_1=A_D\left\{\rho g(L+H-l)+\frac\rho2
\left[V^2+\left(\zeta_{\mathrm{in}1}+\lambda\frac Ld\right)v^2+(v-V)^2\right]\right\}}.
$$

### (2)

$\varepsilon=(d/D)^2=V/v$、$K=1+\zeta_{\mathrm{in}1}+\lambda L/d$ とおく。針出口の拡大直前の圧力 $p_B$ と、ピストン下面圧力 $p_C$ は

$$
p_B=P_a-\rho g(L-l)-\frac\rho2Kv^2,
$$

$$
p_C=P_a-\rho g(L+H-l)-\frac\rho2(K-2\varepsilon+2\varepsilon^2)v^2.
$$

針内では上流から圧力が低下し、シリンダ内でも高さとともに低下するため、最低圧点の候補はこの二点である。両圧力を非負に保つ条件から、有限な $D/d$ まで残すと

$$
\boxed{Q_{\max}=A_d\min\left\{
\sqrt{\frac{2[P_a-\rho g(L-l)]}{\rho K}},
\sqrt{\frac{2[P_a-\rho g(L+H-l)]}{\rho(K-2\varepsilon+2\varepsilon^2)}}
\right\}}.
$$

両平方根の分子が正であることを仮定した。原題の $D\gg d$ に基づいて $\varepsilon$ を無視し、$H>0$ とすればピストン下面が最低圧点となり、通常の近似解は

$$
\boxed{Q_{\max}\simeq\frac{\pi d^2}{4}
\sqrt{\frac{2[P_a-\rho g(L+H-l)]}
{\rho(1+\zeta_{\mathrm{in}1}+\lambda L/d)}}}.
$$

有限な径比では $p_C-p_B=\rho\{v^2\varepsilon(1-\varepsilon)-gH\}$ なので、常にピストン側が低圧とは限らない。

### (3)

ピストンから針先までの上昇高さは $L+H$。ピストン面の速度 $V$ と出口速度 $v$ を含めてエネルギー式を書くと

$$
\boxed{F_2=A_D\left\{\rho g(L+H)+\frac\rho2
\left[\left(1+\zeta_{\mathrm{in}2}+\lambda\frac Ld\right)v^2-V^2\right]\right\}}.
$$

### (4)

出口速度 $v$ の運動エネルギーが位置エネルギーに変わるため

$$
\boxed{h=\frac{v^2}{2g}=\frac{V^2}{2g}\left(\frac Dd\right)^4}.
$$

## **Reference**

- [九州大学 2020年度 流体工学 公式問題（PDF 2ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-fluids.pdf)
