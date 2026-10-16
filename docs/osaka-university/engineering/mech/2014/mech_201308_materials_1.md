---
sidebar_label: "2013年8月実施 材料力学 問題1"
tags:
  - Osaka-University
  - Engineering.Mechanics-of-Materials.Axial-Deformation
  - Engineering.Mechanics-of-Materials.Thermal-Deformation-Compatibility
---

# 大阪大学 工学研究科 機械工学専攻 2013年8月実施 材料力学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1のように、長さ $L$ の丸棒 AB の端 A を固定し、端 B を自由端とする。断面積は A で $A_0$、B で $A_1$ であり、A から B に向かって直線的に変化する。棒の縦弾性係数を $E$、線膨張係数を $\alpha$ とする。A を原点として棒軸に沿って B 向きに座標 $x$ をとる。

1. 棒全体の温度を一様に $T_0$ だけ上昇させ、十分長い時間保持したとき、自由端 B の変位を求めよ。
2. 温度を元に戻して十分長い時間保持した後、B も固定し、図2のように両端固定とする。棒全体の温度を一様に $T_0$ だけ上昇させ、十分長い時間保持したとき、B に生じる反力および棒内の垂直応力分布を求めよ。
3. (2) の温度上昇の代わりに、温度上昇が $T(x)=T_0x^2/L^2$ で与えられる場合、B の反力は (2) の何倍になるか。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2014/mech_201308_materials_1-question-fig1.png)

#### 题目描述

图1中长为 $L$ 的圆杆 AB，A 端固定、B 端自由。截面积从 A 端的 $A_0$ 到 B 端的 $A_1$ 沿杆轴线性变化。纵向弹性模量为 $E$，线膨胀系数为 $\alpha$。从 A 沿杆轴向 B 取坐标 $x$。

1. 全杆均匀升温 $T_0$ 并保持足够长时间时，求自由端 B 的位移。
2. 恢复原温度并保持足够长时间后将 B 端也固定，如图2。全杆均匀升温 $T_0$ 并保持足够长时间时，求 B 端反力及杆内正应力分布。
3. 若将 (2) 的温升改为 $T(x)=T_0x^2/L^2$，B 端反力是 (2) 的多少倍？

## **Kai**

断面積は

$$
A(x)=A_0+\frac{A_1-A_0}{L}x.
$$

### (1)

自由端には軸力が作用せず、全域で軸ひずみは $\alpha T_0$ である。よって B 向きを正とすると

$$
\boxed{u_B=\int_0^L\alpha T_0\,dx=\alpha T_0L}.
$$

### (2)

棒に生じる一定の軸力を $N$（引張り正）とする。全伸びが $0$ となる条件は

$$
0=\int_0^L\left(\frac{N}{EA(x)}+\alpha T_0\right)dx.
$$

$A_1\ne A_0$ のとき

$$
\int_0^L\frac{dx}{A(x)}
=\frac{L}{A_1-A_0}\log\frac{A_1}{A_0}.
$$

したがって圧縮軸力の大きさ、すなわち B の反力の大きさは

$$
\boxed{R_B=-N=\frac{E\alpha T_0(A_1-A_0)}{\log(A_1/A_0)}}.
$$

B における反力の向きは $-x$ 方向である。垂直応力は

$$
\boxed{\sigma(x)=\frac{N}{A(x)}
=-\frac{E\alpha T_0(A_1-A_0)}{\log(A_1/A_0)\left[A_0+(A_1-A_0)x/L\right]}}.
$$

$A_1=A_0$ の場合は連続極限をとり、$R_B=EA_0\alpha T_0$、$\sigma=-E\alpha T_0$ となる。

### (3)

一般の温度上昇に対して

$$
N=-E\alpha\frac{\displaystyle\int_0^L T(x)\,dx}
{\displaystyle\int_0^L dx/A(x)}.
$$

今回の自由熱伸びは

$$
\alpha\int_0^L\frac{T_0x^2}{L^2}\,dx
=\frac{\alpha T_0L}{3}
$$

で、(2) の $1/3$ である。軸方向の柔度は変わらないので

$$
\boxed{\frac{R_B^{(3)}}{R_B^{(2)}}=\frac13}.
$$
