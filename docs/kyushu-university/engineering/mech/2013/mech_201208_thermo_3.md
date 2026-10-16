---
sidebar_label: "2012年8月実施 問3（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Heat-Exchangers-and-Thermal-Resistance
---

# 九州大学 工学府 機械系専攻 2012年8月実施 熱工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

工場から $90^\circ\mathrm C$ の温排水が $W_H=600\,\mathrm{kg/min}$ で流出する。これを用いて $50^\circ\mathrm C$ の油を $80^\circ\mathrm C$ まで加熱したい。温排水の比熱は $c_{pH}=4\,\mathrm{kJ/(kg\,K)}$、油は $c_{pC}=2\,\mathrm{kJ/(kg\,K)}$ とする。$\ln2=0.7,\ln3=1.1,\ln5=1.6$ を用いてよい。（40点）

1. 向流熱交換器で $W_C=400\,\mathrm{kg/min}$ の油を $T_{Co}=80^\circ\mathrm C$ まで加熱するとき、温排水出口温度 $T_{Ho}$ を求めよ。
2. 温排水側と油側の熱伝達率が $h_H=5\,\mathrm{kW/(m^2K)}$、$h_C=1.25\,\mathrm{kW/(m^2K)}$ のとき、必要伝熱面積 $A\,(\mathrm{m^2})$ を求めよ。隔壁の熱伝導抵抗は無視できる。
3. 流体の混合平均温度と隔壁温度の流れ方向分布の概略を、温度差や温度変化に注意して下図に示せ。流体温度は実線、隔壁温度は破線とする。
4. 一方の流体側だけ伝熱促進して面積を60%にしたい。最も小さい促進率で実現するには、どちらの熱伝達率を何倍にすればよいか。
5. 並流熱交換器で $80^\circ\mathrm C$ まで加熱できる油の流量の上限（極限）を求め、向流の優位性を述べよ。

![原題の温度分布解答欄](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_thermo-3-original.png)

#### 题目描述

利用热废水加热油，计算逆流换热器出口温度、面积及温度分布，选择有效的换热强化一侧，并求并流情况下油流量的极限。

## **Kai**

### (1)

熱交換量は

$$
\dot Q=\frac{400}{60}\times2(80-50)=400\,\mathrm{kW}.
$$

温排水の熱容量流量は $C_H=(600/60)\times4=40\,\mathrm{kW/K}$ なので

$$
\boxed{T_{Ho}=90-\frac{400}{40}=80^\circ\mathrm C}.
$$

### (2)

熱通過率および対数平均温度差は

$$
U=\left(\frac1{h_H}+\frac1{h_C}\right)^{-1}=1\,\mathrm{kW/(m^2K)},\qquad
\Delta T_{\mathrm{lm}}=\frac{(80-50)-(90-80)}{\ln\{(80-50)/(90-80)\}}
=\frac{20}{\ln3}\,\mathrm K.
$$

よって

$$
\boxed{A=\frac{\dot Q}{U\Delta T_{\mathrm{lm}}}=20\ln3\simeq22\,\mathrm{m^2}}.
$$

### (3)

左端を温排水入口とする。両流体温度は左から右へ低下し、端点は左で $(T_H,T_C)=(90,80)$、右で $(80,50)$ である。壁温 $T_w$ は局所熱流の連続性より

$$
h_H(T_H-T_w)=h_C(T_w-T_C)
\quad\Longrightarrow\quad T_w=\frac{h_HT_H+h_CT_C}{h_H+h_C}=0.8T_H+0.2T_C.
$$

従って壁温は左端 $88^\circ\mathrm C$、右端 $74^\circ\mathrm C$ で、温排水側に近い。

![向流熱交換器の流体温度と隔壁温度](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_thermo-3-answer.svg)

図は累積伝熱面積を全体で割った座標 $\xi$ を横軸として描いた。一定 $U$ のもとで、$T_H=95-5\,3^\xi$、$T_C=95-15\,3^\xi$、$T_w=95-7\,3^\xi$ となり、油側の温度変化は温排水側の3倍である。

### (4)

$A'=0.6A$ で同じ交換熱量・端点温度を保つには $U'=U/0.6=5/3$ が必要。温排水側だけ強化しても $U'\le h_C=1.25<5/3$ なので実現できない。油側を $\alpha$ 倍すると

$$
\frac1{U'}=\frac15+\frac1{1.25\alpha}=\frac35
\quad\Longrightarrow\quad\boxed{\alpha=2}.
$$

従って油側の熱伝達率を2倍、すなわち100%増加させる。

### (5)

並流では油の出口温度が温排水出口温度を超えられないので、極限は $T_{Ho}=T_{Co}=80^\circ\mathrm C$。熱収支より

$$
600\times4(90-80)=W_C\times2(80-50)
\quad\Longrightarrow\quad\boxed{W_{C,\sup}=400\,\mathrm{kg/min}}.
$$

並流でこの等温端点に達するには無限の伝熱面積を要し、有限面積では $W_C<400\,\mathrm{kg/min}$。向流では $400\,\mathrm{kg/min}$ を有限面積約 $22\,\mathrm{m^2}$ で処理でき、さらに大きい流量も可能である。
