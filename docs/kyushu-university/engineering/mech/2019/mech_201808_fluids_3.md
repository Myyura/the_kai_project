---
sidebar_label: "2019年度 問3（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Hydrostatics
  - Physics.Mechanics.Newtons-Laws-of-Motion
---

# 九州大学 工学府 機械系専攻 2019年度 流体工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

水平面と $\pi/4$ の角をなす側面を持つ開放形の二次元容器がある。側面の幅 $2R$ の開口部を、半径 $R$、単位長さ当たりの質量 $M$ の円柱が塞いでいる。円柱をこの位置で支える厚さの無視できるナイフエッジが容器内部にあり、図のように水域を仕切らない。

密度 $\rho$ の水をゆっくり注入すると、開口部の上端より高いある水位で円柱が外へ飛び出した。円柱は均質で、素材の比重は1より十分大きい。円柱と開口部端面との摩擦はなく、円柱が開口部を塞ぐ間は漏水もない。重力加速度を $g$ とする。（50点）

1. 右向きを $x$、上向きを $y$ とする。円柱が飛び出していないときの、開口部中心（円柱中心軸）から測った水面高さを $b>R/\sqrt2$ として、圧力による円柱への力の成分 $F_x,F_y$ を求めよ。
2. 円柱が飛び出さないための最大水面高さ $b_{\max}$ を求めよ。

![原題の図（九州大学 2019年度 流体工学 問3）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2019/fluids-3-original.png)

#### 题目描述

二维开口容器的斜壁与水平面成 $\pi/4$，宽 $2R$ 的开口由半径 $R$、每单位轴长质量 $M$ 的均质圆柱堵住。容器内的薄刀口支撑圆柱但不隔开水域。缓慢注入密度 $\rho$ 的水，水位高于开口上缘后，圆柱可能向容器外脱出。圆柱材料比重大于1且足够大，接触无摩擦，未脱出时不漏水。取向右 $x$、向上 $y$，水面相对圆心高 $b>R/\sqrt2$，求每单位轴长的压力合力 $F_x,F_y$ 以及不脱出的最大水位 $b_{\max}$。

## **Kai**

### (1)

円柱中心から測る偏角を $\theta$ とすると、水に接する半円は $-3\pi/4\le\theta\le\pi/4$ である。大気圧を差し引いた圧力は

$$
p(\theta)=\rho g(b-R\sin\theta).
$$

単位軸長について、圧力は円柱の内向きに作用するので

$$
\begin{aligned}
F_x&=-\rho gR\int_{-3\pi/4}^{\pi/4}
(b-R\sin\theta)\cos\theta\,d\theta
=\boxed{-\sqrt2\rho gRb},\\
F_y&=-\rho gR\int_{-3\pi/4}^{\pi/4}
(b-R\sin\theta)\sin\theta\,d\theta
=\boxed{\sqrt2\rho gRb+\frac\pi2\rho gR^2}.
\end{aligned}
$$

### (2)

容器外向きの法線は $\boldsymbol n=(-1,1)/\sqrt2$。円柱が離れる限界では、ナイフエッジの反力が0になり、この方向の力が釣り合う。

$$
\frac{-F_x+F_y}{\sqrt2}=\frac{Mg}{\sqrt2}.
$$

ゆえに

$$
2\sqrt2\rho gRb_{\max}+\frac\pi2\rho gR^2=Mg,
$$

$$
\boxed{b_{\max}=\frac{M}{2\sqrt2\rho R}-\frac{\pi R}{4\sqrt2}}.
$$

問題の「上端より高い位置で離脱する」という条件は、この値が $R/\sqrt2$ より大きい範囲に対応する。
