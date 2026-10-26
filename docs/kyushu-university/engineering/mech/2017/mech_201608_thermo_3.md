---
sidebar_label: "2016年8月実施 問3（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Heat-Exchangers-and-Thermal-Resistance
---

# 九州大学 工学府 機械系専攻 2016年8月実施 熱工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$35^\circ\mathrm C$ の油で，$65^\circ\mathrm C$ の過熱蒸気を冷却して飽和温度 $50^\circ\mathrm C$ の湿り蒸気にする有限長さの二重管式熱交換器がある。湿り蒸気の出口乾き度は1以下で，油の出口温度は $50^\circ\mathrm C$ になる。両流体の流量，過熱蒸気と油の定圧比熱，過熱蒸気区間と湿り蒸気区間の熱通過率はそれぞれ一定で，過熱蒸気の熱容量流量（質量流量×定圧比熱）は油の熱容量流量の $1/3$，また過熱蒸気区間の熱通過率は湿り蒸気区間の熱通過率の $1/6$ である。熱交換器内で流動による圧力損失はない。この熱交換器について，以下の問いに答えよ。（40点）

**(1)** この熱交換器は並流型か向流型か。理由を付して答えよ。

**(2)** 熱交換器全体の交換熱量に対する過熱蒸気区間の交換熱量の比率を求めよ。

**(3)** 両流体温度の流れ方向変化を，特徴を反映させて，図に描け。図の横軸は高温流体入口からの交換熱量で，$Q_{total}$ は全交換熱量である。

![原題の温度分布解答座標](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_thermo-3-original.png)

**(4)** 高温流体と低温流体の温度差が最も小さくなる位置での両流体の温度差は何 $^\circ\mathrm C$ かを求めよ。

**(5)** 熱交換器全体に占める過熱蒸気区間の伝熱面積の比率を求めよ。

### 题目描述

一台长度有限的套管式换热器用 $35^\circ\mathrm C$ 的油，将 $65^\circ\mathrm C$ 的过热蒸汽冷却为饱和温度为 $50^\circ\mathrm C$ 的湿蒸汽。湿蒸汽出口干度不超过1，油出口温度为 $50^\circ\mathrm C$。两流体的流量、过热蒸汽和油的定压比热、过热蒸汽区间和湿蒸汽区间的总传热系数各自为常数。过热蒸汽的热容量流率（质量流量×定压比热）为油的 $1/3$；过热蒸汽区间的总传热系数为湿蒸汽区间的 $1/6$。换热器内不存在流动引起的压力损失。回答下列问题。（40分）

**(1)** 该换热器是顺流型还是逆流型？说明理由。

**(2)** 求过热蒸汽区间交换热量占整台换热器交换热量的比例。

**(3)** 在图中画出两流体沿流动方向的温度变化，并体现各自特点。横轴是从高温流体入口开始的累计交换热量，$Q_{total}$ 为总交换热量。

**(4)** 求两流体温差最小位置处的温差，单位为 $^\circ\mathrm C$。

**(5)** 求过热蒸汽区间传热面积占整台换热器传热面积的比例。

## **Kai**

### (1)

$\boxed{\text{向流型}}$。並流で両出口を等温にするには無限の伝熱面積が必要となる。向流では同じ出口温度でも両出口の位置が異なり、有限の面積で成立する。

### (2)

油の熱容量流量を $C_o$ とすると、蒸気側の過熱区間は $C_s=C_o/3$。よって

$$
\begin{gathered}
Q_{\mathrm{total}}=C_o(50-35)=15C_o,\\
Q_s=C_s(65-50)=5C_o,\\
\boxed{Q_s/Q_{\mathrm{total}}=\frac13.}
\end{gathered}
$$

### (3)

$z=Q/Q_{\mathrm{total}}$ とする。累積交換熱量を横軸にとるため、一定比熱の区間は直線となる。

$$
\begin{gathered}
T_s(z)=\begin{cases}65-45z,&0\le z\le1/3,\\50,&1/3\le z\le1,\end{cases}\\
T_o(z)=50-15z.
\end{gathered}
$$

![累積交換熱量に対する蒸気と油の温度](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_thermo-3-profiles.svg)

### (4)

過熱蒸気が飽和に達する $z=1/3$ で、油は $45^\circ\mathrm C$。この位置で温度差が最小となり

$$
\boxed{\Delta T_{\min}=50-45=5^\circ\mathrm C.}
$$

### (5)

過熱区間の両端温度差は $15,5\ \mathrm K$、湿り区間では $5,15\ \mathrm K$。両区間の対数平均温度差は等しく

$$
\Delta T_{\mathrm{lm}}=\frac{15-5}{\ln(15/5)}=\frac{10}{\ln3}.
$$

$U_s=U_w/6$、$Q_s:Q_w=1:2$ だから

$$
\frac{A_s}{A_w}=\frac{Q_s/U_s}{Q_w/U_w}=3,
\qquad\boxed{\frac{A_s}{A_s+A_w}=\frac34.}
$$
