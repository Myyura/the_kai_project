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

ある工場で $90^\circ\mathrm C$ の温排水が $W_H=600\,\mathrm{kg/min}$ で流出している。これを利用して $50^\circ\mathrm C$ の油を $80^\circ\mathrm C$ まで加熱したい。以下の問に答えよ。ただし，温排水の比熱 $c_{pH}$ を $4\,\mathrm{kJ/(kg\cdot K)}$，油の比熱を $c_{pC}=2\,\mathrm{kJ/(kg\cdot K)}$ とする。また，$\ln2=0.7$，$\ln3=1.1$，$\ln5=1.6$ として計算してよい。（40点）

**(1)** 向流熱交換器を用いて $W_C=400\,\mathrm{kg/min}$ の油を $T_{Co}=80^\circ\mathrm C$ まで加熱する。このとき温排水の出口温度 $T_{Ho}$ はいくらになるか。

**(2)** 温排水側の熱伝達率が $h_H=5\,\mathrm{kW/(m^2\cdot K)}$，油側の熱伝達率が $h_C=1.25\,\mathrm{kW/(m^2\cdot K)}$ の場合に必要な伝熱面積 $A\,(\mathrm{m^2})$ を求めよ。ただし，隔壁（伝熱面）内の熱伝導抵抗は無視してよい。

**(3)** この場合の流体の混合平均温度および隔壁温度の流れ方向分布の概略を温度差や温度変化に注意して図中に示せ。温排水と油の温度は実線で，隔壁温度は破線で描くこと。

![原題の温度分布解答欄](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_thermo-3-original.png)

**(4)** 温排水側または油側どちらか一方の伝熱促進を図って伝熱面積を60%にしたい。できるだけ小さい伝熱促進率（現状に対する熱伝達率の増加割合）でこれを実現するには，どちらの熱伝達率を何倍にすればよいか。

**(5)** 並流熱交換器を用いた場合に，$80^\circ\mathrm C$ まで熱することができる油の流量（$\mathrm{kg/min}$）の上限（極限）はいくらか。この結果から向流熱交換器の優位性を述べよ。

### 题目描述

某工厂排出温度为 $90^\circ\mathrm C$、流量为 $W_H=600\,\mathrm{kg/min}$ 的热废水，拟利用它将 $50^\circ\mathrm C$ 的油加热至 $80^\circ\mathrm C$。回答下列问题。热废水比热为 $c_{pH}=4\,\mathrm{kJ/(kg\cdot K)}$，油的比热为 $c_{pC}=2\,\mathrm{kJ/(kg\cdot K)}$。计算可采用 $\ln2=0.7$、$\ln3=1.1$、$\ln5=1.6$。（40分）

**(1)** 使用逆流换热器，将流量为 $W_C=400\,\mathrm{kg/min}$ 的油加热至 $T_{Co}=80^\circ\mathrm C$。求热废水的出口温度 $T_{Ho}$。

**(2)** 热废水侧的换热系数为 $h_H=5\,\mathrm{kW/(m^2\cdot K)}$，油侧为 $h_C=1.25\,\mathrm{kW/(m^2\cdot K)}$。求所需传热面积 $A\,(\mathrm{m^2})$。可忽略隔壁（传热面）内部的导热热阻。

**(3)** 注意温差与温度的变化，在图示坐标中画出该情况下流体混合平均温度及隔壁温度沿流动方向分布的示意图。热废水和油的温度用实线，隔壁温度用虚线。

**(4)** 希望仅强化热废水侧或油侧其中一侧的传热，使所需传热面积降至原来的60%。若要以尽可能小的传热强化率（相对于当前状态的换热系数增加比例）实现，应将哪一侧的换热系数提高到原来的多少倍？

**(5)** 若使用顺流换热器，能够加热至 $80^\circ\mathrm C$ 的油流量（$\mathrm{kg/min}$）的上限（极限）是多少？根据结果说明逆流换热器的优势。

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
\begin{gathered}
U=\left(\frac1{h_H}+\frac1{h_C}\right)^{-1}=1\,\mathrm{kW/(m^2K)},\\
\Delta T_{\mathrm{lm}}=\frac{(80-50)-(90-80)}{\ln\{(80-50)/(90-80)\}}
=\frac{20}{\ln3}\,\mathrm K.
\end{gathered}
$$

よって

$$
\boxed{A=\frac{\dot Q}{U\Delta T_{\mathrm{lm}}}=20\ln3\simeq22\,\mathrm{m^2}}.
$$

### (3)

左端を温排水入口とする。両流体温度は左から右へ低下し、端点は左で $(T_H,T_C)=(90,80)$、右で $(80,50)$ である。壁温 $T_w$ は局所熱流の連続性より

$$
\begin{gathered}
h_H(T_H-T_w)=h_C(T_w-T_C)\\
\Longrightarrow\\
T_w=\frac{h_HT_H+h_CT_C}{h_H+h_C}=0.8T_H+0.2T_C.
\end{gathered}
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
\begin{gathered}
600\times4(90-80)=W_C\times2(80-50)\\
\Longrightarrow\\
\boxed{W_{C,\sup}=400\,\mathrm{kg/min}}.
\end{gathered}
$$

並流でこの等温端点に達するには無限の伝熱面積を要し、有限面積では $W_C<400\,\mathrm{kg/min}$。向流では $400\,\mathrm{kg/min}$ を有限面積約 $22\,\mathrm{m^2}$ で処理でき、さらに大きい流量も可能である。
