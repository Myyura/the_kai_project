---
sidebar_label: "2014年度 問4（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Heat-Exchangers-and-Thermal-Resistance
---

# 九州大学 工学府 機械系専攻 2014年度 熱工学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$120^\circ\mathrm C$ の燃焼ガスによって、飽和温度 $20^\circ\mathrm C$ の湿り蒸気を $40^\circ\mathrm C$ の過熱蒸気まで加熱する向流式熱交換器がある。燃焼ガスの出口温度は $40^\circ\mathrm C$ である。湿り蒸気が乾き飽和蒸気になる位置は熱交換器の中間位置で、その位置の燃焼ガス温度は $100^\circ\mathrm C$ である。燃焼ガスと過熱蒸気の定圧比熱はそれぞれ一定とする。（30点）

![公式原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2014/thermo-4-original.png)

(1) 燃焼ガスと蒸気の流れ方向に沿う温度分布の概略を、流れ方向を示す矢印を付けて図中に示せ。湿り蒸気区間と過熱蒸気区間の温度差・温度変化の違いが分かるようにせよ。図には $20^\circ\mathrm C$ と $120^\circ\mathrm C$ の線がある。

(2) 過熱蒸気区間の燃焼ガスと蒸気の熱容量流量（質量流量と定圧比熱の積）の比率を求めよ。

(3) 湿り蒸気区間の熱通過率は、過熱蒸気区間の何倍か。

#### 题目描述

逆流换热器用 $120^\circ\mathrm C$ 的燃气将饱和温度为 $20^\circ\mathrm C$ 的湿蒸汽加热成 $40^\circ\mathrm C$ 的过热蒸汽，燃气出口为 $40^\circ\mathrm C$。蒸汽在换热器中点刚好完全汽化，此处燃气为 $100^\circ\mathrm C$。画温度分布并标出流向，求过热区两流体热容量流量之比，以及湿蒸汽区与过热区的总传热系数之比。

## **Kai**

燃焼ガス入口を $x=0$、出口を $x=L$ とする。蒸気は逆向きに流れる。以下では、単位長さ当たりの伝熱面積が一様で、各区間の熱通過率が一定という通常の一次元モデルを用いる。中間位置で区切られた両区間の伝熱面積は等しい。

### (1) 温度分布

燃焼ガスは $x$ の増加とともに $120\to100\to40^\circ\mathrm C$ と冷却される。蒸気は $x=L$ から $L/2$ まで $20^\circ\mathrm C$ のまま蒸発し、その後 $x=0$ に向かって $40^\circ\mathrm C$ まで加熱される。

過熱蒸気区間 $0\le x\le L/2$ では両端の温度差がともに $80\,\mathrm K$ で、(2)に示すように熱容量流量も等しい。したがって両温度線は平行な直線となる。湿り蒸気区間では蒸気温度が一定で、燃焼ガスとの温度差は $80\,\mathrm K$ から $20\,\mathrm K$ に減少するため、燃焼ガスの温度勾配の絶対値も出口に向かって小さくなる。

![向流熱交換器の温度分布と流れ方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2014/thermo-4-answer.svg)

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
\Delta T_{\mathrm{lm},w}
=\frac{(100-20)-(40-20)}{\ln[(100-20)/(40-20)]}
=\frac{60}{\ln4}\,\mathrm K.
$$

$\dot Q=UA\Delta T_{\mathrm{lm}}$、$A_s=A_w$ を用いて

$$
\boxed{\frac{U_w}{U_s}
=\frac{\dot Q_w}{\dot Q_s}
\frac{\Delta T_{\mathrm{lm},s}}{\Delta T_{\mathrm{lm},w}}
=3\frac{80\ln4}{60}
=8\ln2\simeq5.55}.
$$

このモデルで図を式にすると、$\xi=x/L$ に対して

$$
T_g(\xi)=
\begin{cases}
120-40\xi,&0\le\xi\le\tfrac12,\\
20+80\,4^{1-2\xi},&\tfrac12\le\xi\le1,
\end{cases}
\qquad
T_s(\xi)=
\begin{cases}
40-40\xi,&0\le\xi\le\tfrac12,\\
20,&\tfrac12\le\xi\le1,
\end{cases}
$$

となる（温度の数値は $^\circ\mathrm C$）。中間位置では蒸気の相変化状態と熱通過率が変わるため、燃焼ガスの温度勾配は不連続になる。
