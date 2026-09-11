---
sidebar_label: '2011年8月実施 物理学 第2問'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Coaxial-Capacitor-and-Line
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Space-Charge-and-Ion-Drift
---

# 東京大学 工学系研究科 2011年8月実施 物理学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

十分に長い円筒導体 A、B が、誘電率 $\varepsilon$ の気体中に同軸配置されている。A の外半径は $a$、B の内半径は $b$ とする。A を電源に接続し、B を接地する。中心軸からの距離を $r$ とする。

![同軸円筒導体と半径方向のイオン流](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2012/kyotsu_201108_phys_2_coaxial_audited.svg)

必要なら円筒座標の公式

$$
\nabla\cdot\boldsymbol A=\frac1r\frac{\partial(rA_r)}{\partial r}
+\frac1r\frac{\partial A_\varphi}{\partial\varphi}+\frac{\partial A_z}{\partial z},
\qquad
\nabla^2f=\frac1r\frac\partial{\partial r}\left(r\frac{\partial f}{\partial r}\right)
+\frac1{r^2}\frac{\partial^2f}{\partial\varphi^2}+\frac{\partial^2f}{\partial z^2}
$$

を用いてよい。

### I

A に電圧 $V_0\ge0$ を加える。

1. $a<r<b$ の電位と電場の大きさを求めよ。
2. A の単位面積当たりにかかる力の大きさと向きを求めよ。

### II

A の電圧を上げると、ある閾値を超えて表面で気体が電離し、定常的にイオンが発生するようになった。イオンは電場に比例する速度 $\boldsymbol v=\mu\boldsymbol E$（$\mu$ は定数）で B へ移動し、電流が流れる。このとき A 表面の電場の大きさを $E_i$、軸方向単位長さ当たりの電流を $I$ とする。

1. $a<r<b$ のイオン電荷密度 $\rho(r)$ を電場の大きさ $E(r)$ で表せ。
2. $E(r)$ が満たす微分方程式を求めよ。
3. 微分方程式を解いて $E(r)$ を求めよ。$G(r)=E(r)^2$ と置くとよい。
4. 一般に $E_i$ は印加電圧によらず一定とみなせる。イオン流の発生によって電場分布が静電場分布からどう変化するか、簡潔に説明せよ。

#### 题目描述

足够长的同轴圆筒导体 A、B 之间充满介电常数 $\varepsilon$ 的气体。A 的外半径为 $a$，B 的内半径为 $b$，A 接电源，B 接地，距轴线的距离为 $r$。可使用题给圆柱坐标散度和拉普拉斯算符公式。

I. 对 A 施加电压 $V_0\ge0$。

1. 求 $a<r<b$ 中的电势和电场大小。
2. 求 A 表面单位面积所受力的大小与方向。

II. 增大 A 的电压，超过阈值后气体在 A 表面电离并持续产生离子。离子以 $\boldsymbol v=\mu\boldsymbol E$ 的速度向 B 漂移，形成稳恒电流，$\mu$ 为常数。此时 A 表面电场大小为 $E_i$，单位轴向长度的径向电流为 $I$。

1. 用 $E(r)$ 表示离子电荷密度 $\rho(r)$。
2. 推导 $E(r)$ 的微分方程。
3. 解方程，求 $E(r)$；可以令 $G(r)=E(r)^2$。
4. 一般可认为 $E_i$ 不随印加电压变化。简述产生离子流后，电场分布相对于无离子流的静电分布如何改变。

圆柱坐标中，

$$
\nabla\cdot\boldsymbol A=\frac1r\partial_r(rA_r)+\frac1r\partial_\varphi A_\varphi+\partial_zA_z,
\qquad
\nabla^2f=\frac1r\partial_r(r\partial_rf)+\frac1{r^2}\partial_\varphi^2f+\partial_z^2f.
$$

## **Kai**

### I

#### I.1

円筒対称なラプラス方程式 $(rV')'=0$ を $V(a)=V_0$、$V(b)=0$ のもとで解くと、

$$
\boxed{V(r)=V_0\frac{\log(b/r)}{\log(b/a)}},
\qquad
\boxed{E(r)=-V'(r)=\frac{V_0}{r\log(b/a)}}.
$$

#### I.2

導体表面の電気的圧力は $\varepsilon E(a)^2/2$ なので、

$$
\boxed{\frac FA=\frac{\varepsilon V_0^2}{2a^2\log^2(b/a)}}.
$$

向きは表面に垂直な外向き（半径が増す方向）である。

### II

#### II.1

単位軸長の円筒面を横切る定常電流は $I=2\pi r\rho(r)\mu E(r)$ だから、

$$
\boxed{\rho(r)=\frac{I}{2\pi\mu rE(r)}}.
$$

#### II.2

ガウスの法則 $r^{-1}(rE)'=\rho/\varepsilon$ に代入して

$$
\boxed{\frac{dE}{dr}+\frac Er=\frac{I}{2\pi\mu\varepsilon rE}}.
$$

#### II.3

$G=E^2$ とすると

$$
G'+\frac{2G}{r}=\frac{I}{\pi\mu\varepsilon r},
\qquad
(r^2G)'=\frac{I}{\pi\mu\varepsilon}r.
$$

境界条件 $E(a)=E_i$ を使って

$$
\boxed{E(r)=\sqrt{\frac{a^2E_i^2}{r^2}
+\frac{I}{2\pi\mu\varepsilon}\left(1-\frac{a^2}{r^2}\right)}}.
$$

#### II.4

無電流時の $E=aE_i/r$ に対し、正の空間電荷が外側の電場を強める。印加電圧を増しても A 表面の電場は $E_i$ に保たれ、電流増加に伴って外側の電場が増す。そのため、A 付近に集中した電場分布は緩和される。

