---
sidebar_label: "2016年8月実施 電磁気学1"
tags:
  - institute-of-science-tokyo
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Capacitance-and-Electrostatic-Energy
  - Electrical-Electronic.Circuits.Resistor-Capacitor-Charging-and-Discharging
---

# 東京工業大学 工学院 電気電子系 2016年8月実施 電磁気学1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1.1の断面図に示すように、半径 $a$ と $b$ の半球形完全導体容器を中心が一致するように配置し、その間を誘電率 $\varepsilon$、導電率 $\sigma$ の媒質で満たす。外側導体容器を接地し、内側導体容器には $t=0$ で初期電荷 $q_0$ があるとする。$t>0$ で導体容器間に電流が流れ、内側導体容器の電荷量は減少する。時刻 $t$ における内側導体容器の電荷量を $q(t)$ とするとき、以下の問に答えよ。ただし、導体の厚さ、および端部効果は無視する。また、媒質内の電荷による電界の発生は無視する。

![半球形導体容器と媒質（図1.1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2017/ee_201608_em1-original.png)

1) 時刻 $t$ において、内側導体容器の中心から距離 $r$ の位置における電界強度 $E(t)$ を、$q(t)$ を用いて表せ。ただし中心から外側に向かう向きを正とする。また、$a<r<b$ とする。

2) 時刻 $t$ における内側導体容器の電位 $V(t)$ を、$q(t)$ を用いて表せ。

3) 距離 $r$ の位置における電流密度を $j(t)$ とするとき、導体容器間を流れる全電流 $I(t)$ を、$j(t)$ を用いて表せ。ただし、$a<r<b$ とする。

4) 電荷保存則から、$q(t)$ に関する微分方程式をたてよ。

5) $I(t)$ を $\varepsilon,\sigma$ および $q_0$ を用いて表せ。

6) 図1.1の構造を、抵抗とコンデンサを用いた回路で示し、抵抗値 $R$ と容量 $C$ を用いて、$I(t)$ を表せ。

### 题目描述

如图1.1的剖面图，将半径为 $a,b$ 的半球形理想导体容器同心放置，间隙中充满介电常数为 $\varepsilon$、电导率为 $\sigma$ 的介质。外侧导体容器接地，内侧导体容器在 $t=0$ 时带有初始电荷 $q_0$。在 $t>0$ 时两导体容器间有电流流动，内侧容器的电荷量逐渐减少。设时刻 $t$ 内侧容器的电荷量为 $q(t)$，回答以下问题。忽略导体厚度和边缘效应，也忽略介质内电荷产生的电场。

1) 用 $q(t)$ 表示时刻 $t$ 距内侧容器中心 $r$ 处的电场强度 $E(t)$。规定从中心向外为正，且 $a<r<b$。

2) 用 $q(t)$ 表示时刻 $t$ 内侧导体容器的电势 $V(t)$。

3) 设距中心 $r$ 处的电流密度为 $j(t)$，用 $j(t)$ 表示导体容器间流过的总电流 $I(t)$，其中 $a<r<b$。

4) 根据电荷守恒定律建立关于 $q(t)$ 的微分方程。

5) 用 $\varepsilon,\sigma,q_0$ 表示 $I(t)$。

6) 用电阻和电容组成的电路表示图1.1的结构，并用电阻值 $R$ 和电容 $C$ 表示 $I(t)$。

## **Kai**

### 1)

半球面の面積は $2\pi r^2$ なので、ガウスの法則より

$$
2\pi r^2\varepsilon E(t)=q(t),
\qquad \boxed{E(t)=\frac{q(t)}{2\pi\varepsilon r^2}}.
$$

### 2)

外側導体の電位が $0$ であるから

$$
\boxed{V(t)=\int_a^b E(t)\,dr
=\frac{q(t)}{2\pi\varepsilon}\left(\frac1a-\frac1b\right)}.
$$

### 3)

$$
\boxed{I(t)=2\pi r^2j(t)}.
$$

### 4)

局所的なオームの法則 $j=\sigma E$ より $I=(\sigma/\varepsilon)q$。電荷保存則 $q'=-I$ から

$$
\boxed{\frac{dq}{dt}+\frac\sigma\varepsilon q=0,\quad q(0)=q_0}.
$$

### 5)

$$
q(t)=q_0e^{-\sigma t/\varepsilon},
\qquad
\boxed{I(t)=\frac{\sigma q_0}{\varepsilon}e^{-\sigma t/\varepsilon}}.
$$

### 6)

同じ二つの導体間に漏れ抵抗と容量があるので、等価回路は $R,C$ の並列接続である。初期電荷を持つ $C$ が $R$ を通して放電する。

$$
R=\int_a^b\frac{dr}{2\pi\sigma r^2}
=\frac{b-a}{2\pi\sigma ab},
\qquad C=\frac{q}{V}=\frac{2\pi\varepsilon ab}{b-a},
\qquad RC=\frac\varepsilon\sigma.
$$

![半球形構造の漏れ抵抗と容量による等価回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2017/ee_201608_em1-rc-equivalent.svg)

$$
\boxed{I(t)=\frac{q_0}{RC}e^{-t/(RC)}}.
$$
