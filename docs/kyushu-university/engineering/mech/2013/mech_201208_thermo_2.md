---
sidebar_label: "2012年8月実施 問2（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Conduction-with-Heat-Generation
  - Engineering.Heat-Transfer.Thermal-Resistance-Networks
---

# 九州大学 工学府 機械系専攻 2012年8月実施 熱工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図に示すように，断面積と長さが同じ銅棒1本と真ちゅう棒6本を，交点AとBで銅棒を挟むように連結させた物体がある。銅棒は，熱伝導率が真ちゅう棒の3倍の $400\,\mathrm{W/(m\cdot K)}$ で，単位時間単位体積あたり一様な $H=4800\,\mathrm{W/m^3}$ の内部発熱を有す。他の6本の真ちゅう棒は，熱伝導率が同じで，内部発熱はない。各真ちゅう棒の端の温度 $T_1\sim T_6$ が図示された値に保たれるとき，交点AとBの温度はそれぞれいくらか。また，そのとき，銅棒から交点AとBにそれぞれ流出する熱量の比率はいくらか。求めよ。ただし，熱は各棒を通ってのみ流れ，棒表面と外部との熱の出入りはない。（50点）

![原題の銅棒・真ちゅう棒と端点温度](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_thermo-2-original.png)

各棒の長さは $1\,\mathrm{m}$，端点温度は $T_1=60^\circ\mathrm C$，$T_2=80^\circ\mathrm C$，$T_3=40^\circ\mathrm C$，$T_4=50^\circ\mathrm C$，$T_5=10^\circ\mathrm C$，$T_6=30^\circ\mathrm C$ である。

なお，内部に一様な発熱 $H$ を有し，両端の温度が $T_i$ と $T_j$ で，熱が断面内を軸方向にのみ流れる棒内の温度 $T$ 分布は，次式で表される。式中，$k$ は熱伝導率，$\ell$ は棒の長さ，$x$ は温度 $T_i$ 端を0として温度 $T_j$ 端に向かう座標である。本式を参考にして良い。

$$
\begin{aligned}T&=\frac{H\ell^2}{2k}\left[\frac{x}{\ell}-\left(\frac{x}{\ell}\right)^2\right]\\&\quad +(T_j-T_i)\frac{x}{\ell}+T_i\end{aligned}
$$

#### 题目描述

如图，将截面积和长度均相同的1根铜棒与6根黄铜棒连接，铜棒位于交点A与B之间。铜棒的导热系数为 $400\,\mathrm{W/(m\cdot K)}$，是黄铜棒的3倍，内部具有每单位时间、单位体积均匀产生的热源 $H=4800\,\mathrm{W/m^3}$。其余6根黄铜棒的导热系数相同，均无内部热源。当各黄铜棒端点温度 $T_1\sim T_6$ 保持图示值时，分别求交点A、B的温度，以及铜棒分别向A、B流出的热量之比。热量只沿各棒流动，棒表面与外界之间没有热交换。（50分）

每根棒长 $1\,\mathrm m$，各端点温度依次为 $T_1=60^\circ\mathrm C$、$T_2=80^\circ\mathrm C$、$T_3=40^\circ\mathrm C$、$T_4=50^\circ\mathrm C$、$T_5=10^\circ\mathrm C$、$T_6=30^\circ\mathrm C$。

对于内部有均匀热源 $H$、两端温度分别为 $T_i,T_j$、热量仅沿轴向流动的棒，其内部温度分布可用下式表示。$k$ 为导热系数，$\ell$ 为棒长，$x$ 是以温度为 $T_i$ 的端点为原点、指向温度为 $T_j$ 端点的坐标。可以参考使用此式。

$$
\begin{aligned}T&=\frac{H\ell^2}{2k}\left[\frac{x}{\ell}-\left(\frac{x}{\ell}\right)^2\right]\\&\quad +(T_j-T_i)\frac{x}{\ell}+T_i\end{aligned}.
$$

## **Kai**

棒の断面積を $S$、銅棒の熱伝導率を $k=400\,\mathrm{W/(m\,K)}$、長さを $\ell=1\,\mathrm m$ とする。銅棒内でAを $x=0$、Bを $x=\ell$ と取る。

### 接点の熱収支

銅棒から外向きを正とした熱量は、与式を微分して

$$
\begin{gathered}
Q_A=\frac{HS\ell}{2}+\frac{kS}{\ell}(T_B-T_A),\\
Q_B=\frac{HS\ell}{2}+\frac{kS}{\ell}(T_A-T_B).
\end{gathered}
$$

真ちゅう棒の熱伝導率は $k/3$。各節点から3本の棒へ流れる熱量との釣り合いは

$$
\begin{gathered}
Q_A=\frac{kS}{3\ell}\{(T_A-60)+(T_A-80)+(T_A-40)\}\\
=\frac{kS}{\ell}(T_A-60),
\end{gathered}
$$

$$
\begin{gathered}
Q_B=\frac{kS}{3\ell}\{(T_B-50)+(T_B-10)+(T_B-30)\}\\
=\frac{kS}{\ell}(T_B-30).
\end{gathered}
$$

従って

$$
\begin{gathered}
2T_A-T_B=60+\frac{H\ell^2}{2k}=66,\\
2T_B-T_A=30+\frac{H\ell^2}{2k}=36.
\end{gathered}
$$

これを解くと

$$
\boxed{T_A=56^\circ\mathrm C,\qquad T_B=46^\circ\mathrm C}.
$$

### 熱量の比率

$$
\begin{gathered}
\frac{Q_A}{S}=400(56-60)=-1600\,\mathrm{W/m^2},\\
\frac{Q_B}{S}=400(46-30)=6400\,\mathrm{W/m^2}.
\end{gathered}
$$

したがって、銅棒からの流出を正とした比は

$$
\boxed{Q_A:Q_B=-1:4}.
$$

A端では実際には銅棒へ熱が流入し、B端では銅棒から流出する。大きさだけの比は $1:4$ である。$Q_A+Q_B=4800S=HS\ell$ となり、全発熱量との収支も一致する。
