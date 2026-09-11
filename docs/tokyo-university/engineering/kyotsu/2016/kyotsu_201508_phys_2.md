---
sidebar_label: '2015年8月実施 物理学 第2問'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Conduction-and-Displacement-Current
  - Physics.Electromagnetism.Capacitance-and-Electrostatic-Energy
  - Physics.Electromagnetism.Ampere-Law
---

# 東京大学 工学系研究科 2015年8月実施 物理学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

導電率 $\sigma$、誘電率 $\varepsilon$ の物質からなる半径 $a$、高さ $h\ (h\gg a)$ の円柱を真空中に置き、上下の端面に電極を取り付ける。図のように、円柱の中心軸に沿って電極から導線を延ばし、十分遠方の電流源とスイッチに接続する。電流源、スイッチおよび遠方の配線が作る場と、電極・配線の抵抗は無視する。端効果を無視し、電場は円柱内部で軸に平行な一様な場とする。真空の誘電率を $\varepsilon_0$、円柱と真空の透磁率を $\mu_0$ とする。電流は上部電極から下部電極へ流れる。

![導電性誘電体の円柱と電極・電流源](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2016/kyotsu_201508_phys_2_cylinder_audited.svg)

### I

一定電流 $I_0$ が流れ、上下の電極にはそれぞれ一様に $+Q_0,-Q_0$ が帯電している。

1. 電極間の抵抗 $R$ を求めよ。
2. 電流密度 $\boldsymbol j$ と円柱内部の電場 $\boldsymbol E$ の関係を書け。
3. Gauss の法則を用いて $I_0$ と $Q_0$ の関係を導け。
4. 電極間の静電容量 $C$ を求めよ。
5. 中心軸からの距離を $r$ として、磁束密度を円柱内 $r\le a$ と円柱外 $r>a$ に分けて求めよ。

### II

$t=0$ にスイッチを開くと、円柱内の伝導電流は

$$
I(t)=I_0\exp\left(-\frac{t}{RC}\right)
$$

と減衰する。電流密度は断面内で一様とする。

1. 円柱内の変位電流を時間の関数として求めよ。
2. 変位電流は上向きか下向きか。理由とともに答えよ。
3. 磁束密度を $r\le a$ と $r>a$ に分けて求めよ。

#### 题目描述

将由导电率 $\sigma$、介电常数 $\varepsilon$ 的材料制成的圆柱置于真空中，半径为 $a$，高度为 $h\gg a$，上下端面装有电极。导线沿圆柱中心轴从两电极引出，在远处连接电流源和开关。忽略电流源、开关和远处导线产生的场，以及电极和导线的电阻。忽略边缘效应，电场仅在圆柱内部存在，且沿轴向均匀分布。真空介电常数为 $\varepsilon_0$，圆柱和真空的磁导率均为 $\mu_0$。电流从上电极流向下电极。

I. 恒定电流 $I_0$ 流过圆柱，上下电极分别均匀带电 $+Q_0,-Q_0$。

1. 求电极间电阻 $R$。
2. 写出电流密度 $\boldsymbol j$ 与圆柱内电场 $\boldsymbol E$ 的关系。
3. 用 Gauss 定律推导 $I_0,Q_0$ 的关系。
4. 求电极间电容 $C$。
5. 以到中心轴的距离为 $r$，分别求圆柱内 $r\le a$ 和圆柱外 $r>a$ 的磁感应强度。

II. $t=0$ 时断开开关，圆柱内的传导电流按

$$
I(t)=I_0\exp\left(-\frac{t}{RC}\right)
$$

衰减，且电流密度在横截面上均匀。

1. 求圆柱内的位移电流随时间的变化。
2. 判断位移电流向上还是向下，并说明理由。
3. 分别求 $r\le a$ 和 $r>a$ 的磁感应强度。

## **Kai**

### I

断面積を $A=\pi a^2$、下向きの単位ベクトルを $\boldsymbol e_z$ とする。

1. 電圧 $V=Eh$、電流 $I_0=\sigma EA$ より、

$$
\boxed{R=\frac{h}{\sigma\pi a^2}}.
$$

2. 局所的な Ohm の法則は

$$
\boxed{\boldsymbol j=\sigma\boldsymbol E}.
$$

3. 電極を囲む Gauss 面を取ると $\varepsilon EA=Q_0$。したがって、

$$
\boxed{Q_0=\frac{\varepsilon}{\sigma}I_0}.
$$

4. $C=Q_0/V$ より、

$$
\boxed{C=\frac{\varepsilon\pi a^2}{h}},\qquad RC=\frac{\varepsilon}{\sigma}.
$$

5. 下向き電流に対する右ねじ方向を $\boldsymbol e_\varphi$ とする。Ampère の法則 $2\pi rB=\mu_0I_{\rm enc}$ から、

$$
\boxed{\boldsymbol B(r)=
\begin{cases}
\dfrac{\mu_0 I_0r}{2\pi a^2}\boldsymbol e_\varphi,&0\le r\le a,\\[4pt]
\dfrac{\mu_0 I_0}{2\pi r}\boldsymbol e_\varphi,&r>a.
\end{cases}}
$$

### II

1. 下向きを正とする変位電流は

$$
I_D=A\frac{dD}{dt}
=\frac{\varepsilon}{\sigma}\frac{dI}{dt}
=\boxed{-I_0e^{-t/(RC)}}.
$$

2. $\boldsymbol D$ は下向きで、その大きさが減少するので、$\partial\boldsymbol D/\partial t$ は**上向き**である。

3. 各点で伝導電流密度と変位電流密度が打ち消し合う。

$$
\boldsymbol j+\frac{\partial\boldsymbol D}{\partial t}=\boldsymbol0.
$$

よって Ampère–Maxwell の法則より、

$$
\boxed{\boldsymbol B(r,t)=\boldsymbol0\qquad(r\le a\text{ および }r>a)}.
$$

