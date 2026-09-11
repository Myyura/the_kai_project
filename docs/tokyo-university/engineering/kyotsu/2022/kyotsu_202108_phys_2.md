---
sidebar_label: '2021年8月実施 物理学2'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Coaxial-Capacitor-and-Line
  - Physics.Electromagnetism.Ampere-Law
  - Physics.Electromagnetism.Dielectrics-and-Boundary-Conditions
  - Physics.Electromagnetism.Capacitance-and-Electrostatic-Energy
---

# 東京大学 工学系研究科 2021年8月実施 物理学2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

長さ $L$、厚さを無視できる二つの一様な円筒導体 A、B が、同じ中心軸を持って真空中に置かれている。半径をそれぞれ $a,b$（$a<b$）とし、$L\gg a,b$ とする。真空の誘電率を $\varepsilon_0$ とする。

I. A に上向き、B に下向きの大きさ $I$ の直流電流を中心軸方向に流す。中心軸から距離 $r$ での磁界の大きさと向きを求めよ。

II. 初め両導体は接地も帯電もしていない。A に電荷 $Q_1>0$ を与え、その後 B を接地する。接地の前後それぞれについて、中心軸から距離 $r$ における電界の大きさ $E$ を求め、$E$ と $r$ の関係をグラフに示せ。

III. 導体間を誘電率 $\varepsilon>\varepsilon_0$、電気伝導率 $\sigma$ の物質で満たす。A は接地せず、B は接地する。

1. A、B 間の電気抵抗を求めよ。
2. $t=0$ に A に電荷 $Q_2>0$ を与える。その後の A の電荷の時間変化を求め、グラフを描いて説明せよ。

IV. 導体間を半径 $x$（$a<x<b$）の円筒面で分け、内側を媒質 1（誘電率 $\varepsilon_1$、電気伝導率 $\sigma_1$）、外側を媒質 2（$\varepsilon_2,\sigma_2$）で満たす。導体間に電圧を印加し、十分な時間が経過して定常電流 $I>0$ が流れる。媒質界面に蓄積する面電荷密度を求めよ。

V. IV の二媒質の抵抗率が十分高く、いずれも絶縁体とみなせる場合を考える。A、B にそれぞれ $+Q_3,-Q_3$（$Q_3>0$）を与える。

1. 系の静電エネルギーを求めよ。
2. $\varepsilon_1>\varepsilon_2$ として、媒質界面に働く単位面積あたりの力の大きさを求めよ。
![同軸円筒導体と二層媒質](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2022/kyotsu_202108_phys_2_coaxial_audited.svg)

![接地前後の電界と電荷の緩和](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2022/kyotsu_202108_phys_2_graphs_audited.svg)

#### 题目描述

两个同轴薄圆筒导体 A、B 位于真空中，长度均为 $L$，半径分别为 $a,b$（$a<b$），且 $L\gg a,b$。真空介电常数为 $\varepsilon_0$。

I. A 中通向上的直流电流 $I$，B 中通等大的向下电流。求距轴 $r$ 处磁场强度的大小和方向。

II. 两导体最初均不接地、不带电。给 A 电荷 $Q_1>0$，随后将 B 接地。分别求接地前后的电场大小 $E(r)$，并画图。

III. 导体间充满介电常数 $\varepsilon>\varepsilon_0$、电导率 $\sigma$ 的物质。A 不接地，B 接地。

1. 求 A、B 间的电阻。
2. 在 $t=0$ 给 A 电荷 $Q_2>0$，求之后 A 的电荷随时间变化的规律，画图并说明。

IV. 以半径 $x$（$a<x<b$）的圆柱面为界，内层介质 1 的介电常数、电导率为 $\varepsilon_1,\sigma_1$，外层介质 2 为 $\varepsilon_2,\sigma_2$。在导体间施加电压，充分长时间后形成大小为 $I>0$ 的稳恒电流。求界面累积的面电荷密度。

V. 两种介质电阻率足够高，可视为绝缘体。A、B 分别带 $+Q_3,-Q_3$（$Q_3>0$）。

1. 求系统静电能。
2. 若 $\varepsilon_1>\varepsilon_2$，求介质界面所受单位面积力的大小。

## **Kai**

### I.

中心軸を囲む円周に Ampère の法則を適用すると

$$
\boxed{\boldsymbol H(r)=\begin{cases}
\dfrac{I}{2\pi r}\boldsymbol e_\varphi,&a<r<b,\\
0,&r<a\ \text{または}\ r>b.
\end{cases}}
$$

$\boldsymbol e_\varphi$ は A の上向き電流に右ねじを進める向きである。

### II.

Gauss の法則 $2\pi rL\varepsilon_0 E=Q_{\rm enc}$ を用いる。接地前は B の全電荷が零なので

$$
\boxed{E_{\rm before}(r)=\begin{cases}0,&r<a,\\
\dfrac{Q_1}{2\pi\varepsilon_0Lr},&r>a.
\end{cases}}
$$

接地後は B の内面に $-Q_1$、外面に零の電荷が分布するため

$$
\boxed{E_{\rm after}(r)=\begin{cases}
\dfrac{Q_1}{2\pi\varepsilon_0Lr},&a<r<b,\\
0,&r<a\ \text{または}\ r>b.
\end{cases}}
$$

いずれも電場は径方向外向き。図のとおり、接地後は $r>b$ の電場が零になる。

### III.

1. 半径 $r$、厚さ $dr$ の層の抵抗は $dR=dr/(2\pi rL\sigma)$。よって

$$
\boxed{R_{AB}=\frac{\log(b/a)}{2\pi L\sigma}}.
$$

2. 静電容量は $C_{AB}=2\pi L\varepsilon/\log(b/a)$。$\dot Q=-Q/(R_{AB}C_{AB})$ から

$$
\boxed{Q(t)=Q_2e^{-\sigma t/\varepsilon}}.
$$

図のように $Q_2$ から零へ単調に減衰し、時定数は $\tau=\varepsilon/\sigma$ である。

### IV.

電流の向きを A から B へとる。電荷保存より $j_r=I/(2\pi rL)$、したがって各層で $E_i=j_r/\sigma_i$。界面での自由面電荷密度は電束密度の跳びに等しいので

$$
\boxed{\sigma_s=D_{2r}(x)-D_{1r}(x)
=\frac{I}{2\pi xL}\left(\frac{\varepsilon_2}{\sigma_2}-\frac{\varepsilon_1}{\sigma_1}\right)}.
$$

電流を逆向きに流せば $\sigma_s$ の符号も逆になる。

### V.

1. 各層で $D_r=Q_3/(2\pi rL)$。エネルギー密度 $D_r^2/(2\varepsilon_i)$ を積分して

$$
\boxed{U=\frac{Q_3^2}{4\pi L}
\left(\frac1{\varepsilon_1}\log\frac{x}{a}
+\frac1{\varepsilon_2}\log\frac{b}{x}\right)}.
$$

2. 電荷を一定に保って界面半径を $dx$ だけ増やす。仮想仕事より $f\,2\pi xL\,dx=-dU$ だから

$$
\boxed{f=\frac{Q_3^2}{8\pi^2L^2x^2}
\left(\frac1{\varepsilon_2}-\frac1{\varepsilon_1}\right)}.
$$

$\varepsilon_1>\varepsilon_2$ なので力は径方向外向きである。

