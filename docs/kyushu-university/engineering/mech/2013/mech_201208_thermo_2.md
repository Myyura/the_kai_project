---
sidebar_label: "2013年度 問2（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Conduction-with-Heat-Generation
  - Engineering.Heat-Transfer.Thermal-Resistance-Networks
---

# 九州大学 工学府 機械系専攻 2013年度 熱工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、断面積と長さが同じ銅棒1本と真ちゅう棒6本を交点A、Bで連結する。各棒の長さは $1\,\mathrm m$。銅棒の熱伝導率は真ちゅう棒の3倍の $400\,\mathrm{W/(m\,K)}$ で、一様な内部発熱 $H=4800\,\mathrm{W/m^3}$ を持つ。真ちゅう棒は発熱しない。各末端温度を図の値 $T_1=60^\circ\mathrm C,T_2=80^\circ\mathrm C,T_3=40^\circ\mathrm C,T_4=50^\circ\mathrm C,T_5=10^\circ\mathrm C,T_6=30^\circ\mathrm C$ に保つ。（50点）

![公式原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2013/thermo-2-original.png)

交点A、Bの温度を求めよ。また、銅棒からA、Bにそれぞれ流出する熱量の比率を求めよ。熱は棒の軸方向にのみ流れ、棒表面と外部との熱の出入りはない。

参考として、一様発熱 $H$、熱伝導率 $k$、長さ $\ell$、両端温度 $T_i,T_j$ の棒の温度分布は、$T_i$ 側を $x=0$ として

$$
T(x)=\frac{H\ell^2}{2k}\left[\frac{x}{\ell}-\left(\frac{x}{\ell}\right)^2\right]
+(T_j-T_i)\frac{x}{\ell}+T_i
$$

である。

#### 题目描述

一根发热铜棒通过两端各连接三根不发热黄铜棒。各棒等长等截面，端部温度如原图。求两个连接点温度，并求从铜棒两端流出的有符号热流之比；若某端为负，应说明实际流向。

## **Kai**

棒の断面積を $S$、銅棒の熱伝導率を $k=400\,\mathrm{W/(m\,K)}$、長さを $\ell=1\,\mathrm m$ とする。銅棒内でAを $x=0$、Bを $x=\ell$ と取る。

### 接点の熱収支

銅棒から外向きを正とした熱量は、与式を微分して

$$
Q_A=\frac{HS\ell}{2}+\frac{kS}{\ell}(T_B-T_A),\qquad
Q_B=\frac{HS\ell}{2}+\frac{kS}{\ell}(T_A-T_B).
$$

真ちゅう棒の熱伝導率は $k/3$。各節点から3本の棒へ流れる熱量との釣り合いは

$$
Q_A=\frac{kS}{3\ell}\{(T_A-60)+(T_A-80)+(T_A-40)\}
=\frac{kS}{\ell}(T_A-60),
$$

$$
Q_B=\frac{kS}{3\ell}\{(T_B-50)+(T_B-10)+(T_B-30)\}
=\frac{kS}{\ell}(T_B-30).
$$

従って

$$
2T_A-T_B=60+\frac{H\ell^2}{2k}=66,\qquad
2T_B-T_A=30+\frac{H\ell^2}{2k}=36.
$$

これを解くと

$$
\boxed{T_A=56^\circ\mathrm C,\qquad T_B=46^\circ\mathrm C}.
$$

### 熱量の比率

$$
\frac{Q_A}{S}=400(56-60)=-1600\,\mathrm{W/m^2},\qquad
\frac{Q_B}{S}=400(46-30)=6400\,\mathrm{W/m^2}.
$$

したがって、銅棒からの流出を正とした比は

$$
\boxed{Q_A:Q_B=-1:4}.
$$

A端では実際には銅棒へ熱が流入し、B端では銅棒から流出する。大きさだけの比は $1:4$ である。$Q_A+Q_B=4800S=HS\ell$ となり、全発熱量との収支も一致する。
