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

問題1（解答用紙：赤）

図1のように、端面 A から端面 B にかけて断面積が線形に変化する長さ $L$ の丸棒 AB を、端面 A で固定支持した。この丸棒の端面 A における断面積を $A_0$、端面 B における断面積を $A_1$ とする。丸棒のヤング率を $E$、線膨張係数を $\alpha$ とし、端面 A から端面 B に向かう距離を $x$ として以下の問いに答えなさい。

(1) 丸棒全体を加熱し、その温度上昇分が $T_0$ で十分に長い時間保持した。このとき、自由端 B での伸び $u_B$ を求めなさい。

加熱前の温度に戻して十分に長い時間保持した後、図2のように端面 B も固定した。このとき、以下の問いに答えなさい。

(2) 再び加熱し、温度上昇分が $T_0$ で十分に長い時間保持した。このとき、端面 B に生じる支持反力 $R_B$ と、丸棒に生じる熱応力 $\sigma(x)$ を求めなさい。

(3) 加熱後の温度上昇分が一様な $T_0$ ではなく、2次関数の分布 $T(x)=T_0x^2/L^2$ となった。このとき、支持反力 $R_B$ は小問 (2) の場合の何倍になるか答えなさい。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2014/mech_201308_materials_1_original_figure_1.png)

![原題の図2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2014/mech_201308_materials_1_original_figure_2.png)

### 题目描述

问题1（使用红色答题纸）

如图1，将长为 $L$、截面积从端面 A 到端面 B 线性变化的圆杆 AB 固定支承于 A 端。A、B 两端的截面积分别为 $A_0$、$A_1$。圆杆的杨氏模量为 $E$，线膨胀系数为 $\alpha$；用 $x$ 表示从 A 端朝 B 端量取的距离。回答下列问题。

(1) 对整根圆杆加热，使其温升为 $T_0$，并保持足够长的时间。求自由端 B 的伸长量 $u_B$。

将温度恢复到加热前的温度并保持足够长的时间后，如图2所示将 B 端也固定。回答下列问题。

(2) 再次加热，使温升为 $T_0$ 并保持足够长的时间。求端面 B 的支座反力 $R_B$ 和圆杆中的热应力 $\sigma(x)$。

(3) 加热后的温升不再是均匀的 $T_0$，而按二次函数 $T(x)=T_0x^2/L^2$ 分布。此时支座反力 $R_B$ 是 (2) 中结果的几倍？

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
