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

図Aに示すように，長さ $L$ の細い注射針（内径 $d$ の円管）が底面中央に取り付けられた内径 $D\ (\gg d)$ のシリンダと質量の無視できるピストンからなる手のひらサイズの注射器を考える。注射針の管摩擦係数を $\lambda$（一定とする）とし，シリンダ内の流体管摩擦は無視できるものとする。大気圧を $P_a$，重力加速度を $g$ とし，シリンダとピストン間の漏れがなく，シリンダとピストン間に作用する摩擦力も無視できるものとして，以下の問に答えよ。（50点）

**(1)** 図Bに示すように，密度 $\rho$ の注射液が貯められた十分大きな容器に，注射針がその先端より長さ $l\ (<L)$ までつかるように注射器を鉛直に突き刺し，ピストンを移動速度 $V$ で上方に引っ張ることにより注射液を注射器内に吸入する。流れは定常であるものとし，ピストンのシリンダ底面からの変位が $H$ のときにピストンを引っ張るために必要な力 $F_1$ を求めよ。ただし，注射針先端部の入口損失係数を $\zeta_{in1}$ とし，注射針からシリンダ内への液の流出時に縮流は生じないものとする。また，注射器内は液で満たされているものとする。

**(2)** (1)において，ピストンの移動速度を増加させてもシリンダ内に吸入できる注射液の体積流量には限界がある。最大体積流量 $Q_{\max}$ を求めよ。ただし，液の飽和蒸気圧は大気圧に比べて十分に小さいものとみなしてよい。

**(3)** 次に，図Cに示すように，注射器を容器から完全に取り出し，注射針の先端を鉛直上向きに向けた上で，ピストンを移動速度 $V$ で押すことにより，注射液を大気中に放出させる。流れは定常であるものとし，ピストンのシリンダ底面からの変位が $H$ のときにピストンを押すために必要な力 $F_2$ を求めよ。ただし，注射針付け根部の入口損失係数を $\zeta_{in2}$ とし，液の大気への流出時に縮流は生じないものとする。

**(4)** (3)のとき，注射針先端から流出した注射液が鉛直方向に到達する距離 $h$ を求めよ。ただし，液と大気の間の摩擦は無視できるものとする。

![原題の図A–C：注射器の構造・吸入・放出](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/mech_201908_fluids_2_figure_1.png)

### 题目描述

考虑图A所示的手掌大小的注射器，由内径为 $D\ (\gg d)$ 的针筒和质量可忽略的活塞构成；针筒底面中央连接一根长度为 $L$、内径为 $d$ 的细圆管针头。针头的管摩擦系数为常量 $\lambda$，针筒内流体的管摩擦可忽略。大气压为 $P_a$，重力加速度为 $g$，针筒与活塞之间无泄漏，二者之间的摩擦力也可忽略。回答下列问题。（50分）

**(1)** 如图B所示，将注射器竖直插入盛有密度为 $\rho$ 的注射液的足够大容器，使针头从尖端起浸入长度 $l\ (<L)$。将活塞以速度 $V$ 向上拉，使注射液吸入针筒。设流动为定常流动，活塞距针筒底面的位移为 $H$，求拉动活塞所需的力 $F_1$。针头尖端的入口损失系数为 $\zeta_{in1}$，液体从针头进入针筒时不发生收缩，且注射器内充满液体。

**(2)** 在(1)中，即使继续增加活塞速度，能够吸入针筒的液体体积流量仍存在上限。求最大体积流量 $Q_{\max}$。可认为液体饱和蒸气压相对于大气压足够小。

**(3)** 接着如图C所示，将注射器完全取出容器，使针尖竖直向上，并以速度 $V$ 推动活塞，将注射液排入大气。设流动为定常流动，活塞距针筒底面的位移为 $H$，求推动活塞所需的力 $F_2$。针头根部的入口损失系数为 $\zeta_{in2}$，液体排入大气时不发生收缩。

**(4)** 在(3)的情况下，求从针尖流出的注射液在竖直方向上达到的距离 $h$。忽略液体与大气之间的摩擦。

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
\boxed{F_1=A_D\left\{\begin{gathered}
\rho g(L+H-l)+\frac\rho2\\
\left[V^2+\left(\zeta_{\mathrm{in}1}+\lambda\frac Ld\right)v^2+(v-V)^2\right]
\end{gathered}\right\}}.
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
\boxed{Q_{\max}=A_d\min\left\{\begin{gathered}
\sqrt{\frac{2[P_a-\rho g(L-l)]}{\rho K}},\\
\sqrt{\frac{2[P_a-\rho g(L+H-l)]}{\rho(K-2\varepsilon+2\varepsilon^2)}}
\end{gathered}\right\}}.
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
