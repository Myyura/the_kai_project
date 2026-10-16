---
sidebar_label: 2017年8月実施 電気回路2
tags:
  - institute-of-science-tokyo
  - Electrical-Electronic.Circuits.Phasor-and-Impedance-Analysis
  - Electrical-Electronic.Circuits.Alternating-Current-Power-and-Power-Factor
  - Electrical-Electronic.Circuits.Maximum-Power-Transfer
---
# 東京工業大学 工学院 電気電子系 2017年8月実施 電気回路2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図 2.1 に交流電圧源とインダクタ、コンデンサ、抵抗器で構成した回路を示す。ただし、インダクタンスを $L$、キャパシタンスを $C$、抵抗をそれぞれ $R_S,R_L$ とする。また、交流電圧源の電圧フェーザを $\dot E$ とし、その角周波数 $\omega$ は任意に調整できるものとする。以下の問に答えよ。

1. 端子 1–2 から見たインピーダンス $\dot Z_{1-2}$ を求めよ。
2. インピーダンス $\dot Z_{1-2}$ の抵抗分とリアクタンス分を求めよ。
3. 交流電源の角周波数 $\omega$ を調整して交流電源の力率を $1$ にしたい。力率が $1$ となる角周波数 $\omega$ を求めよ。
4. 交流電源の力率を $1$ にできる抵抗 $R_L$ の条件を示せ。
5. 交流電源の角周波数を $\omega=\omega_0$ 一定とし、抵抗 $R_L$ を調整して $R_L$ で消費される電力を最大にしたい。電力が最大となる抵抗 $R_L$ を求めよ。

![図2.1 直列の抵抗・インダクタと並列のコンデンサ・負荷抵抗](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2018/ee_201708_electrical_circuit_2_original_fig2-1.png)

図の出典：東京工業大学 電気電子系 2017年実施問題（原図）。

#### 题目描述

原图 2.1 中，交流电压源经串联的电阻 $R_S$ 与电感 $L$，连接并联的电容 $C$ 与负载电阻 $R_L$。电源电压相量为 $\dot E$，角频率 $\omega$ 可任意调节。

1. 求从端子 1–2 看入的阻抗 $\dot Z_{1-2}$。
2. 分别求该阻抗的电阻分量和电抗分量。
3. 调节电源角频率，求使电源功率因数为 $1$ 的 $\omega$。
4. 求能够使功率因数为 $1$ 的负载电阻 $R_L$ 应满足的条件。
5. 固定角频率 $\omega=\omega_0$，调节 $R_L$，求使负载消耗功率最大的 $R_L$。

## **Kai**

### (1)

コンデンサと負荷の並列インピーダンスは $R_L/(1+j\omega CR_L)$ であるから、

$$
\boxed{\dot Z_{1-2}=R_S+j\omega L+\frac{R_L}{1+j\omega CR_L}}.
$$

### (2)

分母を実数化すると、

$$
\dot Z_{1-2}
=R_S+\frac{R_L}{1+\omega^2C^2R_L^2}
+j\left(\omega L-\frac{\omega CR_L^2}{1+\omega^2C^2R_L^2}\right).
$$

したがって、抵抗分 $R_{\mathrm{in}}$ とリアクタンス分 $X_{\mathrm{in}}$ は

$$
\boxed{R_{\mathrm{in}}=R_S+\frac{R_L}{1+\omega^2C^2R_L^2}},
\qquad
\boxed{X_{\mathrm{in}}=\omega L-\frac{\omega CR_L^2}{1+\omega^2C^2R_L^2}}.
$$

### (3)

交流の角周波数 $\omega>0$ に対し、力率が $1$ となる条件は $X_{\mathrm{in}}=0$ である。よって、

$$
L(1+\omega^2C^2R_L^2)=CR_L^2,
$$

$$
\boxed{\omega=\sqrt{\frac{1}{LC}-\frac{1}{C^2R_L^2}}}.
$$

### (4)

正の実数の角周波数が存在するためには、

$$
\frac{1}{LC}-\frac{1}{C^2R_L^2}>0
\quad\Longleftrightarrow\quad
\boxed{R_L>\sqrt{\frac{L}{C}}}.
$$

等号の場合は $\omega=0$ となり、交流の条件には含まれない。

### (5)

負荷 $R_L$ を取り外し、電圧源を短絡したときの負荷端子から見たテブナンインピーダンスは

$$
Z_{\mathrm{th}}
=\left(R_S+j\omega_0L\right)\parallel\frac{1}{j\omega_0C}
=\frac{R_S+j\omega_0L}{1-\omega_0^2LC+j\omega_0CR_S}
=R_{\mathrm{th}}+jX_{\mathrm{th}}.
$$

テブナン電圧の実効値フェーザを $V_{\mathrm{th}}$ とすると、負荷電力は

$$
P_L=\frac{|V_{\mathrm{th}}|^2R_L}
{(R_L+R_{\mathrm{th}})^2+X_{\mathrm{th}}^2}.
$$

$R_L$ による微分は

$$
\frac{\mathrm dP_L}{\mathrm dR_L}
=\frac{|V_{\mathrm{th}}|^2\left(R_{\mathrm{th}}^2+X_{\mathrm{th}}^2-R_L^2\right)}
{\left[(R_L+R_{\mathrm{th}})^2+X_{\mathrm{th}}^2\right]^2}.
$$

したがって、正の抵抗 $R_S,L,C$ に対して電力を最大にする純抵抗負荷は

$$
\boxed{R_L=|Z_{\mathrm{th}}|
=\sqrt{\frac{R_S^2+\omega_0^2L^2}
{(1-\omega_0^2LC)^2+\omega_0^2C^2R_S^2}}}.
$$

調整するのは実数の抵抗値のみなので、複素共役整合ではなく $R_L=|Z_{\mathrm{th}}|$ を用いる。
