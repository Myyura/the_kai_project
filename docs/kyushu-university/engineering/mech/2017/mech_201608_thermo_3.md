---
sidebar_label: "2017年度 問3（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Heat-Exchangers-and-Thermal-Resistance
---

# 九州大学 工学府 機械系専攻 2017年度 熱工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$35^\circ\mathrm C$ の油で $65^\circ\mathrm C$ の過熱蒸気を冷却し、飽和温度 $50^\circ\mathrm C$ の湿り蒸気にする有限長の二重管式熱交換器がある。湿り蒸気の出口乾き度は 1 以下、油の出口温度は $50^\circ\mathrm C$ となる。

両流量、過熱蒸気・油の定圧比熱、過熱蒸気区間・湿り蒸気区間の熱通過率はそれぞれ一定とする。過熱蒸気の熱容量流量は油の $1/3$、過熱蒸気区間の熱通過率は湿り蒸気区間の $1/6$ であり、流動による圧力損失はない。（40 点）

1. 並流型か向流型か、理由とともに答えよ。
2. 全交換熱量に対する過熱蒸気区間の交換熱量の比を求めよ。
3. 横軸を高温流体入口からの累積交換熱量、全量を $Q_{\mathrm{total}}$ として、両温度の変化を図示せよ。
4. 両流体の温度差の最小値を求めよ。
5. 全体の伝熱面積に対する過熱蒸気区間の面積比を求めよ。

![温度分布の解答座標（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2017/thermo-3-original.png)

#### 题目描述

65℃ 过热蒸汽被入口 35℃ 的油冷却，成为饱和温度 50℃、干度不超过 1 的湿蒸汽，油出口为 50℃。蒸汽过热段热容量流率为油的三分之一，过热段传热系数为凝结段的六分之一；各物性、流量、分段传热系数恒定，无压力损失。判断流向，求过热段换热量比例、以累计热量为横轴的温度曲线、最小温差和过热段面积比例。

## **Kai**

### (1)

$\boxed{\text{向流型}}$。並流で両出口を等温にするには無限の伝熱面積が必要となる。向流では同じ出口温度でも両出口の位置が異なり、有限の面積で成立する。

### (2)

油の熱容量流量を $C_o$ とすると、蒸気側の過熱区間は $C_s=C_o/3$。よって

$$
Q_{\mathrm{total}}=C_o(50-35)=15C_o,\qquad
Q_s=C_s(65-50)=5C_o,
\qquad\boxed{Q_s/Q_{\mathrm{total}}=\frac13.}
$$

### (3)

$z=Q/Q_{\mathrm{total}}$ とする。累積交換熱量を横軸にとるため、一定比熱の区間は直線となる。

$$
T_s(z)=\begin{cases}65-45z,&0\le z\le1/3,\\50,&1/3\le z\le1,\end{cases}
\qquad T_o(z)=50-15z.
$$

![累積交換熱量に対する蒸気と油の温度](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2017/thermo-3-profiles.svg)

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
