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

2017年10月・2018年4月入学対象、2017年8月実施。

車輪付き水槽の右壁の横穴から密度 $\rho$ の水が水平に噴き出し、その反作用で水槽が水平面上を左向きに一定加速度 $\alpha$ で移動する。重力加速度 $g$ は下向き、水面は右上がりに角度 $\theta$ 傾く。横穴の断面積は $A$、右壁に沿って鉛直に測った水面からの深さは $H$、水槽から見た一定噴出速度は $U$。水槽は十分大きく、水槽と内部の水の合計質量 $M$、水面の形と高さの時間変化を無視できる。周囲は大気圧とし、粘性と移動の摩擦を無視する。

1. 水槽から見て、放出水が持ち出す単位時間当たりの運動量を求めよ。
2. $\alpha$ を $\rho,A,U,M$ で表せ。
3. $\theta$ を $\alpha,g$ で表せ。
4. $U$ を求めよ。

![左に加速する水槽と右向き噴流](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/tohoku201708_fluid2.svg)

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

带轮水槽向右水平喷出密度 $\rho$ 的水，因反作用向左以恒加速度 $\alpha$ 运动。重力向下、大小为 $g$，液面向右升高，倾角为 $\theta$。右壁孔面积为 $A$，孔沿右壁竖直方向距液面的深度为 $H$，相对水槽的喷速为恒定 $U$。水槽足够大，总质量 $M$、液面形状和高度的时间变化均可忽略；周围大气压，忽略黏性与滚动摩擦。求相对槽体的喷流动量流率、加速度、液面角度和喷速。

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
