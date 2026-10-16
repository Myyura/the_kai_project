---
sidebar_label: "2018年8月実施 問3（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Heat-Exchangers-and-Thermal-Resistance
---

# 九州大学 工学府 機械系専攻 2018年8月実施 熱工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

内管・外管の直径がそれぞれ一定の有限長二重管式熱交換器を考える。高温流体の比熱は $4\ \mathrm{kJ/(kg\,K)}$、質量流量は $0.1\ \mathrm{kg/s}$、高温・低温流体の入口温度はそれぞれ $80^\circ\mathrm C,20^\circ\mathrm C$ であり、両流体の出口温度はともに $40^\circ\mathrm C$ であった。熱通過率は $0.2\ \mathrm{kW/(m^2\,K)}$、物性値は一定、周囲への熱損失はない。必要なら $\ln2,\ln3,\ln5$ を使ってよい。（40 点）

1. 並流型か向流型か、理由とともに答えよ。
2. 高温流体と低温流体の温度差の分布を下図 (A)–(E) から選び、理由を述べよ。

![温度差分布の選択肢（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_thermo-3-choices.png)

3. 交換熱量を kW で求めよ。
4. 低温流体の熱容量流量（質量流量×比熱）を kW/K で求めよ。
5. 熱通過面積を m² で求めよ。
6. 低温流体の質量流量だけを変え、高温側と熱容量流量を等しくした。両流体の温度分布を下の座標に図示し、新しい出口温度を求めよ。熱通過率は変わらず、ここでは $\ln2=0.7,\ln3=1.1,\ln5=1.6$ とする。

![温度分布の解答欄（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_thermo-3-axes.png)

#### 题目描述

有限长双管换热器的热流体比热为 $4\ \mathrm{kJ/(kg\,K)}$、流量 $0.1\ \mathrm{kg/s}$；冷热入口分别为 80℃、20℃，出口均为 40℃。总传热系数 $0.2\ \mathrm{kW/(m^2\,K)}$，无热损失、物性恒定。判断顺逆流并选择温差分布，求换热功率、冷侧热容量流率及面积。然后仅调整冷侧流量使两侧热容量流率相等，画温度分布并求新出口温度，此问取 $\ln2=0.7$。

## **Kai**

### (1)

$\boxed{\text{向流型}}$ である。並流では温度差が流れ方向に指数関数的に減少するが、有限の面積でゼロにはならない。向流では二つの出口は異なる位置にあるので、同じ温度をとり得る。

### (2)

高温側入口での温度差は $80-40=40\ \mathrm K$、高温側出口では $40-20=20\ \mathrm K$。高温側の流れ方向に面積座標 $a$ をとると

$$
\frac{d(T_h-T_c)}{da}
=-U\left(\frac1{C_h}-\frac1{C_c}\right)(T_h-T_c).
$$

ここで $C_h=0.4\ \mathrm{kW/K}$、熱収支から $C_c=0.8\ \mathrm{kW/K}$ である。温度差は下に凸の指数関数として減少するので $\boxed{\mathrm{(C)}}$。

### (3)

$$
\boxed{\dot Q=C_h(80-40)=0.1\times4\times40=16\ \mathrm{kW}.}
$$

### (4)

$$
\boxed{C_c=\frac{16}{40-20}=0.8\ \mathrm{kW/K}.}
$$

### (5)

対数平均温度差は

$$
\Delta T_{\mathrm{lm}}=\frac{40-20}{\ln(40/20)}=\frac{20}{\ln2}\ \mathrm K.
$$

よって

$$
\boxed{A=\frac{\dot Q}{U\Delta T_{\mathrm{lm}}}=4\ln2\ \mathrm{m^2}.}
$$

### (6)

$C_h=C_c=C=0.4\ \mathrm{kW/K}$ では両流体間の温度差が全長で一定となる。$UA=0.8\ln2=0.56\ \mathrm{kW/K}$ より

$$
\dot Q'=UA\left(60-\frac{\dot Q'}C\right),
\qquad\dot Q'=\frac{UA\times60}{1+UA/C}=14\ \mathrm{kW}.
$$

したがって

$$
\boxed{T_{h,\mathrm{out}}=80-\frac{14}{0.4}=45^\circ\mathrm C,\qquad
T_{c,\mathrm{out}}=20+\frac{14}{0.4}=55^\circ\mathrm C.}
$$

高温側入口から出口へ向かって、高温側は $80\to45^\circ\mathrm C$、低温側は $55\to20^\circ\mathrm C$ と直線的に下がり、差は常に $25\ \mathrm K$ である。

![熱容量流量が等しい場合の温度分布](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_thermo-3-profiles.svg)
