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

直径がそれぞれ一定の内管と外管からなる有限長さの二重管式熱交換器における熱交換を考える。高温流体（比熱 $4\,\mathrm{kJ/(kg\cdot K)}$）と低温流体の入口温度がそれぞれ $80^\circ\mathrm C$ と $20^\circ\mathrm C$，高温流体の質量流量が $0.1\,\mathrm{kg/s}$ のとき，いずれの流体も出口温度が $40^\circ\mathrm C$ であった。なお，熱通過率は $0.2\,\mathrm{kW/(m^2\cdot K)}$，物性値は一定とし，周囲への熱損失もないとする。以下の問いに答えよ。ただし，必要であれば，答えに $\ln2,\ln3$ ならびに $\ln5$ を使ってもよい。（40点）

**(1)** この熱交換器は，並流型と向流型のいずれであるか，理由をつけて答えよ。

**(2)** 高温流体と低温流体の温度差の分布は，次の(A)～(E)のうちどれか記号で答えよ。また，その理由も答えよ。

![原題の温度差分布の選択肢(A)・(B)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_thermo_3_figure_1.png)

![原題の温度差分布の選択肢(C)・(D)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_thermo_3_figure_2.png)

![原題の温度差分布の選択肢(E)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_thermo_3_figure_3.png)

**(3)** この熱交換器の交換熱量（$\mathrm{kW}$）を求めよ。

**(4)** 低温流体の熱容量流量（質量流量×比熱）（$\mathrm{kW/K}$）を求めよ。

**(5)** この熱交換器の熱通過面積（$\mathrm{m^2}$）を求めよ。

**(6)** 次に低温流体の質量流量だけを変えて高温流体の熱容量流量と等しくしたところ，両流体の出口温度が $40^\circ\mathrm C$ から変わった。このときの高温流体と低温流体の温度分布の概略を図示せよ。また，この場合の高温流体と低温流体の出口温度（$^\circ\mathrm C$）を求めよ。ただし，ここでは $\ln2=0.7,\ln3=1.1,\ln5=1.6$ とする。なお，熱通過率は流量変更前と変わらないとする。

![原題の(6)温度分布概略解答欄](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_thermo-3-axes.png)

### 题目描述

考虑由直径各自恒定的内管、外管组成的有限长度套管式换热器。高温流体的比热为 $4\,\mathrm{kJ/(kg\cdot K)}$，高、低温流体入口温度分别为 $80^\circ\mathrm C$、$20^\circ\mathrm C$。高温流体质量流量为 $0.1\,\mathrm{kg/s}$ 时，两流体出口温度均为 $40^\circ\mathrm C$。总传热系数为 $0.2\,\mathrm{kW/(m^2\cdot K)}$，物性为常数，不向周围散热。回答下列问题。必要时答案可保留 $\ln2,\ln3,\ln5$。（40分）

**(1)** 该换热器是顺流型还是逆流型？说明理由。

**(2)** 高、低温流体的温差分布对应图中(A)～(E)中的哪一个？用字母作答并说明理由。

**(3)** 求换热量（$\mathrm{kW}$）。

**(4)** 求低温流体热容量流率（质量流量×比热），单位为 $\mathrm{kW/K}$。

**(5)** 求换热器传热面积（$\mathrm{m^2}$）。

**(6)** 随后只改变低温流体的质量流量，使其热容量流率与高温流体相等，两流体出口温度因此不再为 $40^\circ\mathrm C$。画出此时两流体温度分布的示意图，并求各自出口温度（$^\circ\mathrm C$）。本问采用 $\ln2=0.7,\ln3=1.1,\ln5=1.6$，总传热系数与流量改变前相同。

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
\boxed{\begin{gathered}
\dot Q=C_h(80-40)\\
=0.1\times4\times40\\
=16\ \mathrm{kW}.
\end{gathered}}
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
\begin{gathered}
\dot Q'=UA\left(60-\frac{\dot Q'}C\right),\\
\dot Q'=\frac{UA\times60}{1+UA/C}=14\ \mathrm{kW}.
\end{gathered}
$$

したがって

$$
\boxed{\begin{gathered}
T_{h,\mathrm{out}}=80-\frac{14}{0.4}=45^\circ\mathrm C,\\
T_{c,\mathrm{out}}=20+\frac{14}{0.4}=55^\circ\mathrm C.
\end{gathered}}
$$

高温側入口から出口へ向かって、高温側は $80\to45^\circ\mathrm C$、低温側は $55\to20^\circ\mathrm C$ と直線的に下がり、差は常に $25\ \mathrm K$ である。

![熱容量流量が等しい場合の温度分布](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_thermo-3-profiles.svg)
