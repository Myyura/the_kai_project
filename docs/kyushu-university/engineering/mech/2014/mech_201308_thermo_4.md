---
sidebar_label: "2013年8月実施 問4（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Heat-Exchangers-and-Thermal-Resistance
---

# 九州大学 工学府 機械系専攻 2013年8月実施 熱工学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$120^\circ\mathrm C$ の燃焼ガスで飽和温度 $20^\circ\mathrm C$ の湿り蒸気を $40^\circ\mathrm C$ の過熱蒸気まで加熱する向流式の熱交換器がある。燃焼ガスは出口温度 $40^\circ\mathrm C$ まで低下する。湿り蒸気が蒸発し乾き飽和蒸気になる位置は熱交換器の中間位置で，そのときの燃焼ガス温度は $100^\circ\mathrm C$ である。燃焼ガスと過熱蒸気の定圧比熱をそれぞれ一定として，以下の各問いに答えよ。（30点）

**(1)** 燃焼ガスと蒸気の流れ方向の温度分布の概略を，それぞれ流れ方向がわかるように矢印を付し，湿り蒸気区間と過熱蒸気区間における温度差や温度変化の違いがわかるように注意して，図中に示せ。図には $20^\circ\mathrm C$ と $120^\circ\mathrm C$ の線を記載している。

![原題の熱交換器温度分布解答欄](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_thermo-4-original.png)

**(2)** 過熱蒸気区間の燃焼ガスと蒸気の熱容量流量（質量流量×定圧比熱）の比率はいくらか。

**(3)** 湿り蒸気区間の熱通過率は過熱蒸気区間の熱通過率の何倍か。

#### 题目描述

一台逆流换热器用 $120^\circ\mathrm C$ 的燃烧气体，将饱和温度为 $20^\circ\mathrm C$ 的湿蒸汽加热至 $40^\circ\mathrm C$ 的过热蒸汽。燃烧气体降温至出口的 $40^\circ\mathrm C$。湿蒸汽蒸发成为干饱和蒸汽的位置位于换热器中点，该处燃烧气体的温度为 $100^\circ\mathrm C$。设燃烧气体与过热蒸汽各自的定压比热为常数，回答下列问题。（30分）

**(1)** 在图中画出燃烧气体和蒸汽沿流动方向的温度分布示意图，用箭头分别标明流向，并注意体现湿蒸汽区间与过热蒸汽区间的温差及温度变化的不同。图中已标出 $20^\circ\mathrm C$ 和 $120^\circ\mathrm C$ 的水平线。

**(2)** 求过热蒸汽区间中燃烧气体与蒸汽的热容量流率（质量流量×定压比热）之比。

**(3)** 湿蒸汽区间的总传热系数是过热蒸汽区间的多少倍？

## **Kai**

燃焼ガス入口を $x=0$、出口を $x=L$ とする。蒸気は逆向きに流れる。以下では、単位長さ当たりの伝熱面積が一様で、各区間の熱通過率が一定という通常の一次元モデルを用いる。中間位置で区切られた両区間の伝熱面積は等しい。

### (1) 温度分布

燃焼ガスは $x$ の増加とともに $120\to100\to40^\circ\mathrm C$ と冷却される。蒸気は $x=L$ から $L/2$ まで $20^\circ\mathrm C$ のまま蒸発し、その後 $x=0$ に向かって $40^\circ\mathrm C$ まで加熱される。

過熱蒸気区間 $0\le x\le L/2$ では両端の温度差がともに $80\,\mathrm K$ で、(2)に示すように熱容量流量も等しい。したがって両温度線は平行な直線となる。湿り蒸気区間では蒸気温度が一定で、燃焼ガスとの温度差は $80\,\mathrm K$ から $20\,\mathrm K$ に減少するため、燃焼ガスの温度勾配の絶対値も出口に向かって小さくなる。

![向流熱交換器の温度分布と流れ方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_thermo-4-answer.svg)

### (2) 熱容量流量の比

燃焼ガスと過熱蒸気の熱容量流量を $C_g,C_s$ とする。過熱蒸気区間の熱収支より

$$
C_g(120-100)=C_s(40-20).
$$

従って

$$
\boxed{C_g:C_s=1:1}.
$$

### (3) 熱通過率の比

過熱蒸気区間と湿り蒸気区間をそれぞれ添字 $s,w$ で表す。交換熱量は

$$
\dot Q_s=20C_g,\qquad \dot Q_w=60C_g.
$$

過熱蒸気区間の温度差は一定なので、対数平均温度差は

$$
\Delta T_{\mathrm{lm},s}=80\,\mathrm K.
$$

湿り蒸気区間では

$$
\begin{gathered}
\Delta T_{\mathrm{lm},w}
=\frac{(100-20)-(40-20)}{\ln[(100-20)/(40-20)]}\\
=\frac{60}{\ln4}\,\mathrm K.
\end{gathered}
$$

$\dot Q=UA\Delta T_{\mathrm{lm}}$、$A_s=A_w$ を用いて

$$
\boxed{\begin{gathered}
\frac{U_w}{U_s}
=\frac{\dot Q_w}{\dot Q_s}
\frac{\Delta T_{\mathrm{lm},s}}{\Delta T_{\mathrm{lm},w}}\\
=3\frac{80\ln4}{60}\\
=8\ln2\simeq5.55
\end{gathered}}.
$$

このモデルで図を式にすると、$\xi=x/L$ に対して

$$
\begin{gathered}
T_g(\xi)=
\begin{cases}
120-40\xi,&0\le\xi\le\tfrac12,\\
20+80\,4^{1-2\xi},&\tfrac12\le\xi\le1,
\end{cases}\\
T_s(\xi)=
\begin{cases}
40-40\xi,&0\le\xi\le\tfrac12,\\
20,&\tfrac12\le\xi\le1,
\end{cases}
\end{gathered}
$$

となる（温度の数値は $^\circ\mathrm C$）。中間位置では蒸気の相変化状態と熱通過率が変わるため、燃焼ガスの温度勾配は不連続になる。
