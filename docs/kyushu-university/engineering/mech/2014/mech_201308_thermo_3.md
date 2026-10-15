---
sidebar_label: "2014年度 問3（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Conduction-with-Heat-Generation
  - Engineering.Heat-Transfer.Thermal-Radiation
---

# 九州大学 工学府 機械系専攻 2014年度 熱工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

厚さ $2\delta_h\,\mathrm{m}$ の一様に発熱するヒータが空気流にさらされている。単位体積当たりの発熱量は $\dot q_v\,\mathrm{W/m^3}$、空気温度は $T_a\,\mathrm K$、ヒータ表面から空気への熱伝達率は $h\,\mathrm{W/(m^2\,K)}$ である。ヒータの熱伝導率 $k_h\,\mathrm{W/(m\,K)}$ は一定とする。（45点）

(1) ヒータ表面からの熱流束 $q\,\mathrm{W/m^2}$ を求めよ。

(2) 厚さ $dx$ の微小検査体積の熱収支から、ヒータ内の一次元定常熱伝導方程式を導け。

(3) ヒータ中心温度 $T_0$ は空気温度 $T_a$ より何度高くなるか。

(4) ヒータの両面に厚さ $\delta_p$、熱伝導率 $k_p$ の平板を接触させる。ヒータ中心温度は上がるか下がるか。その変化量も求めよ。平板表面の熱伝達率は $h$ のままで、界面の接触熱抵抗は無視でき、$k_p$ は一定とする。

(5) $k_h<k_p$ のとき、ヒータおよび平板内の温度分布の概略を図中に示せ。図にはヒータ中心温度 $T_0$ と平板表面温度 $T_p$ を示してある。

![公式原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2014/thermo-3-original.png)

(6) 両側から低温の面を近づけると、ふく射の影響で平板表面温度が下がった。ふく射熱流束が表面熱流束の $1/8$ である場合、平板表面温度は何度下がるか。熱伝達率は変わらないものとする。

#### 题目描述

均匀发热板厚 $2\delta_h$，两面对相同空气对流散热。求单侧表面热流密度、稳态导热方程和中心温升；在两面加装厚度 $\delta_p$、导热率 $k_p$ 的平板后，求中心温度变化并画出温度分布（$k_h<k_p$，忽略接触热阻）。最后，当辐射承担表面总热流的 $1/8$ 时，求外表面温度的下降量。

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
\boxed{\frac{d}{dx}\left(k_h\frac{dT}{dx}\right)+\dot q_v=0},
\qquad
\boxed{\frac{d^2T}{dx^2}=-\frac{\dot q_v}{k_h}}.
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

![ヒータ内は放物線、平板内は直線となる温度分布](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2014/thermo-3-answer.svg)

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
