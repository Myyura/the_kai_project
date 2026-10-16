---
sidebar_label: "2015年8月実施 問2（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Pipe-Networks
  - Engineering.Fluid-Mechanics.Pipe-Friction
  - Engineering.Fluid-Mechanics.Minor-Losses
---

# 九州大学 工学府 機械系専攻 2015年8月実施 流体工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

十分に大きな開放容器A、Bに、それぞれ密度 $\rho,2\rho$ の非圧縮性液体がある。液体は内径 $d$、長さ $l$ の各水平管を流れ、合流部で速やかに完全混合した後、長さ $2l$ の鉛直管を流下して大気に定常流出する。混合による体積変化はない。B側の水平管には十分に短い流量調整弁がある。両容器の液面高さは水平管から $H$ である。

レイノルズ数は十分に大きく、管摩擦係数 $\lambda$ と入口損失係数 $\zeta_{\rm in}$ は流体状態によらず一定とする。合流部の損失を無視し、出口で縮流は起こらない。二種類の液体の質量混合割合が等しくなるよう弁を操作するとき、弁の損失係数 $\zeta_v$ と混合液の質量流量 $G$ を求めよ。重力加速度は $g$ とする。（50点）

![原題の図（九州大学 2016年度 流体工学 問2）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_fluids-2-original.png)

#### 题目描述

两个大开口容器分别装有密度 $\rho$ 和 $2\rho$ 的液体，各经内径 $d$、长 $l$ 的水平管汇合，再经长 $2l$ 的竖直管流向大气。两液面高于水平管 $H$，B支路有短阀门。液体完全混合且体积不变；摩擦系数 $\lambda$、入口损失系数 $\zeta_{\rm in}$ 不随液体状态改变，忽略汇合损失与出口缩流。调节阀门使两种液体的质量流量相等，求阀门损失系数与混合物总质量流量。

## **Kai**

### 流量と混合密度

管断面積を $A=\pi d^2/4$、B側の平均速度を $v$ とする。等質量混合と連続の式から

$$
V_A=2v,\qquad V_B=v,\qquad V_C=3v,\qquad
\rho_m=\frac{\rho(2v)+2\rho v}{3v}=\frac{4\rho}{3}.
$$

以下、$a=\lambda l/d$、$K=1+\zeta_{\rm in}+a$、合流点のゲージ圧を $p$ とおく。

### エネルギー式

Aの自由表面から合流点まで、および鉛直管の入口から出口までの式は

$$
H=\frac{p}{\rho g}+K\frac{(2v)^2}{2g},\qquad
\frac{p}{\rho_m g}+2l=2a\frac{(3v)^2}{2g}.
$$

鉛直管では入口・出口の速度水頭が相殺される。これらから

$$
p=\frac{4\rho}{3}(9av^2-2gl),\qquad
\boxed{v^2=\frac{g(H+8l/3)}{2+2\zeta_{\rm in}+14a}}.
$$

### 弁の損失係数と質量流量

B側のエネルギー式は

$$
H=\frac{p}{2\rho g}+(K+\zeta_v)\frac{v^2}{2g}.
$$

A側の式を用いて $p$ を消去すると

$$
\boxed{\zeta_v=K+\frac{gH}{v^2}
=1+\zeta_{\rm in}+\frac{\lambda l}{d}
+\frac{H(2+2\zeta_{\rm in}+14\lambda l/d)}{H+8l/3}}.
$$

総質量流量は

$$
\boxed{G=\rho_m A(3v)
=\pi\rho d^2\sqrt{\frac{g(H+8l/3)}{2+2\zeta_{\rm in}+14\lambda l/d}}}.
$$
