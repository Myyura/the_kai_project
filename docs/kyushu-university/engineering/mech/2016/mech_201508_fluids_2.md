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

図に示すように，二つの十分に大きな開放容器A，Bに貯められた二種類の非圧縮性液体（密度 $\rho,2\rho$）が，内径 $d$ の管路系を通して大気に定常的に流出している。二種類の液体はともにそれぞれの容器に接続された長さ $l$ の水平管路を流れ，合流部で速やかにかつ完全に混合した後，長さ $2l$ の鉛直管路を流下する。このとき，混合前後で液体の体積は変化しないものとする。開放容器B側の水平管路には流量調整のための長さが十分に短い弁が取り付けられている。二つの容器内の液面高さは，ともに水平管の取付け位置から $H$ の高さにある。管内流れのレイノルズ数は十分に大きく，管摩擦係数 $\lambda$ および管路入口損失係数 $\zeta_{in}$ は流体の状態によらず一定であるとする。また，管路合流部の損失は無視できるものとし，鉛直管路出口で縮流は起こらないものとする。混合液における二種類の液体の質量混合割合が等しくなるように弁を操作するとき，弁の損失係数 $\zeta_v$ および混合液の質量流量 $G$ を求めよ。ただし，重力加速度を $g$ とする。（50点）

![原題の図：二種類の液体の合流管路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_fluids-2-original.png)

### 题目描述

如图所示，两个足够大的敞口容器A、B分别储有密度为 $\rho$ 和 $2\rho$ 的两种不可压缩液体，液体通过内径为 $d$ 的管路系统定常地流入大气。两种液体分别流过与各容器连接、长度为 $l$ 的水平管，在汇合处迅速且完全混合后，沿长度为 $2l$ 的竖直管向下流动。设混合前后液体体积不变。容器B一侧的水平管上装有长度足够短、用于调节流量的阀门。两个容器的液面均高于水平管连接位置 $H$。管内流动的雷诺数足够大，管摩擦系数 $\lambda$ 和管路入口损失系数 $\zeta_{in}$ 不随流体状态变化，均为常量。汇合处损失可以忽略，竖直管出口不发生收缩。调节阀门使混合液中两种液体的质量比例相等时，求阀门损失系数 $\zeta_v$ 和混合液质量流量 $G$。重力加速度为 $g$。（50分）

## **Kai**

### 流量と混合密度

管断面積を $A=\pi d^2/4$、B側の平均速度を $v$ とする。等質量混合と連続の式から

$$
\begin{gathered}
V_A=2v,\\
V_B=v,\\
V_C=3v,\\
\rho_m=\frac{\rho(2v)+2\rho v}{3v}=\frac{4\rho}{3}.
\end{gathered}
$$

以下、$a=\lambda l/d$、$K=1+\zeta_{\rm in}+a$、合流点のゲージ圧を $p$ とおく。

### エネルギー式

Aの自由表面から合流点まで、および鉛直管の入口から出口までの式は

$$
\begin{gathered}
H=\frac{p}{\rho g}+K\frac{(2v)^2}{2g},\\
\frac{p}{\rho_m g}+2l=2a\frac{(3v)^2}{2g}.
\end{gathered}
$$

鉛直管では入口・出口の速度水頭が相殺される。これらから

$$
\begin{gathered}
p=\frac{4\rho}{3}(9av^2-2gl),\\
\boxed{v^2=\frac{g(H+8l/3)}{2+2\zeta_{\rm in}+14a}}.
\end{gathered}
$$

### 弁の損失係数と質量流量

B側のエネルギー式は

$$
H=\frac{p}{2\rho g}+(K+\zeta_v)\frac{v^2}{2g}.
$$

A側の式を用いて $p$ を消去すると

$$
\boxed{\begin{gathered}
\zeta_v=K+\frac{gH}{v^2}\\
=1+\zeta_{\rm in}+\frac{\lambda l}{d}
+\frac{H(2+2\zeta_{\rm in}+14\lambda l/d)}{H+8l/3}
\end{gathered}}.
$$

総質量流量は

$$
\boxed{\begin{gathered}
G=\rho_m A(3v)\\
=\pi\rho d^2\sqrt{\frac{g(H+8l/3)}{2+2\zeta_{\rm in}+14\lambda l/d}}
\end{gathered}}.
$$
