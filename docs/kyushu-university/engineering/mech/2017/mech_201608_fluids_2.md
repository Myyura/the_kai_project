---
sidebar_label: "2016年8月実施 問2（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
  - Engineering.Fluid-Mechanics.Pipe-Friction
  - Engineering.Fluid-Mechanics.Pipe-Networks
---

# 九州大学 工学府 機械系専攻 2016年8月実施 流体工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように，水を満たした十分大きな水槽に，曲がり部を持つ内径 $D$ の主管が取り付けられている。管路入口から長さ $2L$ の部分は水平であり，そこから長さ $L/2$ の部分は鉛直上向きになっている。主管の水平部分において，管路入口から $L$ 離れた位置に長さ $L$ かつ内径 $D/3$ の枝管が鉛直方向上向きに伸びている。主管の入口部付近には，長さの無視できる弁が設けられており，弁の開度を調節してその損失係数が $\zeta_v$ となったとき，主管および枝管の出口より噴出する水の高さ（水平管高さを基準として）が等しくなった。このとき，以下の問に答えよ。ただし，管摩擦係数は全ての管で等しく $\lambda$ であり，重力加速度を $g$ とする。また $D$ は $L$ よりも十分小さく，入口損失や曲がり損失，分岐損失および水と大気との間の摩擦はいずれも無視できるものとし，さらに全ての管路出口で縮流は生じないものとする。（50点）

**(1)** 水平管高さを基準として，噴出する水の高さ $h$ を求めよ。

**(2)** 水平管高さを基準として，水槽の水位 $H$ を求めよ。

![原題の図：主管・枝管から同じ高さまで噴出する水](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_fluids-2-original.png)

### 题目描述

如图所示，一个盛满水且足够大的水槽连接一根内径为 $D$、带有弯曲段的主管。从管路入口开始，长度 $2L$ 的部分水平放置，随后长度为 $L/2$ 的部分竖直向上。在主管水平部分距入口 $L$ 的位置，连接一根长度为 $L$、内径为 $D/3$、竖直向上的支管。主管入口附近装有长度可忽略的阀门。调节阀门开度，使其损失系数为 $\zeta_v$ 时，从主管和支管出口喷出的水达到相同高度，高度均以水平管为基准。回答下列问题。各管的管摩擦系数均为 $\lambda$，重力加速度为 $g$；$D$ 远小于 $L$；入口损失、弯管损失、分支损失以及水与大气之间的摩擦均可忽略，所有管路出口均不发生收缩。（50分）

**(1)** 以水平管高度为基准，求水喷出的高度 $h$。

**(2)** 以水平管高度为基准，求水槽的水位 $H$。

## **Kai**

### (1)

枝管の流速を $v_b$、分岐後の主管の流速を $v_m$ とする。噴流の放物運動から

$$
\frac{v_b^2}{2g}=h-L,\qquad
\frac{v_m^2}{2g}=h-\frac L2.
$$

分岐点から各噴流最高点までの水頭差は、それぞれの管摩擦損失に等しいので

$$
\lambda\frac{3L}{D}(h-L)
=\lambda\frac{3L}{2D}\left(h-\frac L2\right).
$$

よって

$$
\boxed{h=\frac32L},\qquad
v_b=\sqrt{gL},\quad v_m=\sqrt{2gL}.
$$

### (2)

分岐前の主管流速を $V$ とすると、連続の式から

$$
V=v_m+\frac{v_b}{9}
=\left(\sqrt2+\frac19\right)\sqrt{gL}.
$$

水槽から枝管の噴流最高点までの水頭収支を取る。

$$
H=h+\left(\zeta_v+\lambda\frac LD\right)\frac{V^2}{2g}
+\lambda\frac{3L}{D}\frac{v_b^2}{2g}.
$$

したがって

$$
\boxed{H=L\left[
\frac32+\frac12\left(\sqrt2+\frac19\right)^2
\left(\zeta_v+\lambda\frac LD\right)
+\frac32\lambda\frac LD
\right]}.
$$
