---
sidebar_label: "2013年8月実施 問3（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Conduction-with-Heat-Generation
  - Engineering.Heat-Transfer.Thermal-Radiation
---

# 九州大学 工学府 機械系専攻 2013年8月実施 熱工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

厚さ $2\delta_h\,(\mathrm m)$ の一様に発熱するヒータが空気流にさらされている。ヒータの単位体積当たりの発熱量が $\dot q_v\,(\mathrm{W/m^3})$，空気の温度が $T_a\,(\mathrm K)$，ヒータ表面から空気への熱伝達率が $h\,(\mathrm{W/(m^2\cdot K)})$ の時，以下の問いに答えよ。ただし，ヒータの熱伝導率 $k_h\,(\mathrm{W/(m\cdot K)})$ は温度に依らず一定とする。（45点）

**(1)** ヒータ表面からの熱流束 $q\,(\mathrm{W/m^2})$ はいくらか。

**(2)** 厚さ $\mathrm dx$ の微小検査体積の熱収支よりヒータ内の一次元定常熱伝導方程式を導け。

**(3)** ヒータの中心温度 $T_0\,(\mathrm K)$ は空気温度 $T_a$ よりどのくらい高くなるか。

**(4)** ヒータの両面に厚さ $\delta_p\,(\mathrm m)$，熱伝導率 $k_p\,(\mathrm{W/(m\cdot K)})$ の平板を接触させた（図参照）。ヒータの中心温度は上がるか下がるか。また，その程度は何度か。ただし，平板表面から空気への熱伝達率は $h$ のままで変わらないものとする。また，界面での接触熱抵抗は無視でき，$k_p$ は一定とする。

**(5)** ヒータおよび平板内温度分布の概略を図中に示せ。ただし，$k_h<k_p$ とする。なお，図中にはヒータ中心温度 $T_0$ と平板表面温度 $T_p$ を示してある。

![原題のヒータ・平板と温度分布解答欄](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_thermo-3-original.png)

**(6)** 両側より低温の面を近づけたところ，ふく射の影響で平板表面の温度が下がった。ふく射熱流束が表面熱流束の8分の1である場合，平板表面温度は何度下がるか。ただし，熱伝達率は変わらないものとする。

### 题目描述

厚度为 $2\delta_h\,(\mathrm m)$、均匀发热的加热器暴露于空气流中。其单位体积发热量为 $\dot q_v\,(\mathrm{W/m^3})$，空气温度为 $T_a\,(\mathrm K)$，加热器表面与空气之间的换热系数为 $h\,(\mathrm{W/(m^2\cdot K)})$。回答下列问题。加热器的导热系数 $k_h\,(\mathrm{W/(m\cdot K)})$ 不随温度变化，为常数。（45分）

**(1)** 求加热器表面向外的热流密度 $q\,(\mathrm{W/m^2})$。

**(2)** 根据厚度为 $\mathrm dx$ 的微小控制体的热量收支，推导加热器内部的一维稳态导热方程。

**(3)** 加热器中心温度 $T_0\,(\mathrm K)$ 比空气温度 $T_a$ 高多少？

**(4)** 在加热器两面分别贴合厚度为 $\delta_p\,(\mathrm m)$、导热系数为 $k_p\,(\mathrm{W/(m\cdot K)})$ 的平板，如图所示。加热器中心温度会上升还是下降？变化多少度？平板表面与空气之间的换热系数仍为 $h$；界面接触热阻可忽略，$k_p$ 为常数。

**(5)** 在图中画出加热器及平板内部温度分布的示意图。设 $k_h<k_p$。图中已经标出加热器中心温度 $T_0$ 和平板表面温度 $T_p$。

**(6)** 从两侧移近低温表面，辐射使平板表面温度下降。若辐射热流密度为表面热流密度的八分之一，平板表面温度下降多少度？换热系数保持不变。

## **Kai**

ヒータ中心を $x=0$ とし、左右対称な一次元定常状態を考える。

### (1) 表面熱流束

単位表面積当たりの総発熱量 $2\delta_h\dot q_v$ が両面から等しく放出されるので

$$
\boxed{q=\dot q_v\delta_h}.
$$

### (2) 定常熱伝導方程式

$+x$ 方向の熱流束を $q_x=-k_h\,dT/dx$ とする。断面積1、厚さ $dx$ の微小検査体積では

$$
q_x(x)-q_x(x+dx)+\dot q_v\,dx=0.
$$

$dx$ で割り極限を取れば

$$
\begin{gathered}
\boxed{\frac{d}{dx}\left(k_h\frac{dT}{dx}\right)+\dot q_v=0},\\
\boxed{\frac{d^2T}{dx^2}=-\frac{\dot q_v}{k_h}}.
\end{gathered}
$$

### (3) 平板を付ける前の中心温度

対称条件 $T'(0)=0$ より、ヒータ内は

$$
T(x)=T_0-\frac{\dot q_v}{2k_h}x^2.
$$

表面 $x=\delta_h$ の対流条件は $h[T(\delta_h)-T_a]=q$。したがって

$$
\boxed{T_0-T_a=\frac{\dot q_v\delta_h^2}{2k_h}
+\frac{\dot q_v\delta_h}{h}}.
$$

### (4) 平板を付けたときの中心温度変化

発熱量と両外表面の熱伝達率が変わらないので、外表面温度は

$$
T_p=T_a+\frac{q}{h}
$$

のままである。各平板に新たに $q\delta_p/k_p$ の温度差が生じ、ヒータ内の温度分布全体がその分だけ上昇する。

$$
\boxed{\Delta T_0=\frac{q\delta_p}{k_p}
=\frac{\dot q_v\delta_h\delta_p}{k_p}>0}.
$$

### (5) 温度分布

平板を取り付けた後の分布は

$$
T(x)=
\begin{cases}
T_p+\dfrac{q\delta_p}{k_p}
+\dfrac{\dot q_v}{2k_h}(\delta_h^2-x^2),
& |x|\le\delta_h,\\[6pt]
T_p+\dfrac{q}{k_p}(\delta_h+\delta_p-|x|),
& \delta_h\le |x|\le\delta_h+\delta_p.
\end{cases}
$$

ヒータ内は中心で勾配が零の放物線、発熱しない平板内は直線となる。界面では温度と熱流束が連続する一方、$k_h<k_p$ よりヒータ側の温度勾配の絶対値 $q/k_h$ は平板側の $q/k_p$ より大きい。

![ヒータ内は放物線、平板内は直線となる温度分布](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_thermo-3-answer.svg)

### (6) ふく射による表面温度の低下

定常状態では総発熱量が一定なので、表面から出る総熱流束は引き続き $q$。ふく射が $q/8$ を担うと、対流分は $7q/8$ となる。新しい表面温度を $T_p'$ とすれば

$$
h(T_p'-T_a)=\frac78q,\qquad h(T_p-T_a)=q.
$$

従って、表面温度の低下量は

$$
\boxed{T_p-T_p'=\frac{q}{8h}
=\frac{\dot q_v\delta_h}{8h}}.
$$
