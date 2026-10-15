---
sidebar_label: "2017年度 電磁気学1"
tags:
  - institute-of-science-tokyo
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Capacitance-and-Electrostatic-Energy
  - Electrical-Electronic.Circuits.Resistor-Capacitor-Charging-and-Discharging
---

# 東京工業大学 工学院 電気電子系 2017年度（2016年8月実施）電磁気学1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1.1のように、半径 $a,b$（$a<b$）の半球形完全導体容器を同心に配置し、その間を誘電率 $\varepsilon$、導電率 $\sigma$ の媒質で満たす。外側導体を接地し、内側導体には $t=0$ で初期電荷 $q_0$ がある。$t>0$ で導体間に電流が流れ、内側の電荷量 $q(t)$ が減少する。導体の厚さ、端部効果、および媒質内の電荷が生む電界は無視する。

![半球形導体容器と媒質（図1.1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo-tech-ee/2016/em1-original.png)

図：東京工業大学 電気電子系 2016年実施問題、図1.1（原図）。

1. 中心から距離 $r$（$a<r<b$）での電界強度 $E(t)$ を $q(t)$ で表せ。外向きを正とする。
2. 内側導体の電位 $V(t)$ を $q(t)$ で表せ。
3. 距離 $r$ での電流密度を $j(t)$ とするとき、全電流 $I(t)$ を $j(t)$ で表せ。
4. 電荷保存則から $q(t)$ の微分方程式を立てよ。
5. $I(t)$ を $\varepsilon,\sigma,q_0$ で表せ。
6. 図1.1の構造を抵抗とコンデンサによる回路で示し、抵抗値 $R$ と容量 $C$ を用いて $I(t)$ を表せ。

#### 题目描述

两个半径为 $a<b$ 的同心半球导体之间填充介电常数 $\varepsilon$、电导率 $\sigma$ 的介质，外导体接地，内导体初始带电 $q_0$，之后经介质放电。忽略导体厚度、边缘效应和介质内部电荷形成的电场。1) 用 $q(t)$ 求半径 $r$ 处径向电场，向外为正；2) 求内导体电势；3) 用电流密度求总电流；4) 建立电荷衰减方程；5) 求电流；6) 画出等效 RC 电路并用 $R,C$ 表示电流。

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

![半球形構造の漏れ抵抗と容量による等価回路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo-tech-ee/2016/em1-rc-equivalent.svg)

$$
\boxed{I(t)=\frac{q_0}{RC}e^{-t/(RC)}}.
$$
