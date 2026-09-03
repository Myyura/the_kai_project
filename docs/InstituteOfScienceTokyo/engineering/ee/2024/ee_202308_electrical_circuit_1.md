---
sidebar_label: 2023年8月実施 電気回路1
tags:
  - InstituteOfScienceTokyo
  - Electrical-Electronic.Circuits.Phasor-and-Impedance-Analysis
  - Electrical-Electronic.Circuits.Resistor-Inductor-Capacitor-Resonance
  - Electrical-Electronic.Circuits.Maximum-Power-Transfer
---
# 東京工業大学 工学院 電気電子系 2023年8月実施 電気回路1


## **Author**
Zero

## **Description**
図 $1.1$ に示す回路について以下の問に答えよ。電源電圧 $V_S$ は角周波数 $\omega$ の正弦波交流の複素電圧であり，抵抗 $R_S$ を介して負荷に接続されている。負荷にかかる複素電圧を $V_{LD}$, 負荷に流れる複素電流を $V_{LD}$ とする。負荷に含まれるインダクタンス，キャパシタンス，および抵抗値を，それぞれ $L,C$, および $R$ とする。また，虚数単位を $j$ とする。

(1) 図 $1.1$ の負荷部分を図 $1.2$ のように表した場合の，負荷の合成アドミタンス $Y$ を求めよ。

(2) 負荷にかかる複素電圧 $V_{LD}$ を,$V_S,Y,R_S$ を用いて表せ。

(3) 負荷で消費される複素電力 $P_C$ を, $V_{LD},Y,R_S$ のうち必要なものを用いて表せ。絶対値記号を用いてもよい。

(4) インダクタンス $L$ が可変であるとするとき，角周波数 $\omega$ によらず $V_{LD}$ と $I_{LD}$ が同相となる $L$ の条件を求めよ。

(5) 問(4)の条件が満たされるとき，負荷の合成アドミタンス $Y$ を $\omega$ を用いずに表せ。

(6) 問(4)の条件が満たされるとき，負荷で消費される有効電力 $P$ が最大となる $R$ を $R_S$ を用いて表せ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/InstituteOfScienceTokyo/engineering/ee_202308_electrical_circuit_1_p1.png" width="500" alt=""/>
</figure>

### 题目描述

对原 Description 图 1.1 所示交流电路回答下列问题。电源复电压 $V_S$ 为角频率 $\omega$ 的正弦量，经电阻 $R_S$ 接到负载；负载复电压为 $V_{LD}$。原 Description 在定义负载复电流处重复写成了 $V_{LD}$，但第 4 问明确使用 $I_{LD}$，以下据此把负载复电流记为 $I_{LD}$。负载含电感 $L$、电容 $C$ 和电阻 $R$，$j$ 为虚数单位；具体连接见图 1.1、1.2。

1. 把图 1.1 的负载部分按图 1.2 表示，求其总导纳 $Y$。
2. 用 $V_S,Y,R_S$ 表示负载电压 $V_{LD}$。
3. 用 $V_{LD},Y,R_S$ 中必要的量表示负载消耗的复功率 $P_C$；可以使用绝对值符号。
4. 若 $L$ 可调，求使 $V_{LD}$ 与 $I_{LD}$ 对任意角频率 $\omega$ 都同相时 $L$ 应满足的条件。
5. 在第 4 问条件下，不使用 $\omega$ 表示负载总导纳 $Y$。
6. 在第 4 问条件下，用 $R_S$ 表示使负载消耗的有功功率 $P$ 最大的 $R$。

## **Kai**
### (1)

$$
Y = \frac{1}{R + j\omega L} + \frac{1}{R + \frac{1}{j\omega C}}
$$

### (2)

$$
\begin{aligned}
V_{LD} = \frac{Z}{R_S + Z}V_Ss = \frac{\frac{1}{Y}}{R_S + \frac{1}{Y}}V_S = \frac{1}{1 + YR_S}V_S
\end{aligned}
$$

### (3)

$$
\begin{aligned}
P_C = V_{LD}^* I_{LD} = V_{LD}^* Y V_{LD} = Y|V_{LD}|^2
\end{aligned}
$$

### (4)

$$
\begin{aligned}
I_{LD} &= YV_{LD} \\
Y &= \frac{R - j\omega L}{R + (\omega L)^2} + \frac{j\omega C}{1 + j\omega CR} \\
&= \frac{R - j\omega L}{R + (\omega L)^2} + \frac{j\omega C (1 - j\omega CR)}{1 + (\omega CR)^2} \\
&= \bigg[\frac{R}{R^2 + (\omega L)^2} + \frac{\omega^2C^2R}{1 + (\omega CR)^2}\bigg] + j\bigg[\frac{-\omega L}{R^2 + (\omega L)^2} + \frac{\omega C}{1 + (\omega CR)^2}\bigg]
\end{aligned}
$$

虚部 $=0$ となれば良いので、

$$
\begin{aligned}
\frac{\omega L}{R^2 + (\omega L)^2} &= \frac{C}{1 + (\omega CR)^2} \\
L[1 + (\omega CR)^2] &= C[R^2 + (\omega L)^2] \\
L + L(\omega CR)^2 &= CR^2 + CL^2 \omega^2 \\
\end{aligned}
$$

$$
\omega^2[L(CR)^2 - CL^2] + L - CR^2 = 0
$$

$\omega$ によらば $0$ をなるのは、

$$
L(CR)^2 - CL^2 = 0
$$

従って、

$$
L = CR^2
$$

### (5)
$L = CR^2$ のとき、

$$
\begin{aligned}
Y &= \frac{1}{R(1 + j\omega CR)} + \frac{j\omega C}{1 + j\omega CR} \\
&= \frac{1 + j\omega CR}{R(1 + j\omega CR)} \\
&= \frac{1}{R}
\end{aligned}
$$

### (6)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/InstituteOfScienceTokyo/engineering/ee_202308_electrical_circuit_1_p2.png" width="250" alt=""/>
</figure>

インピーダンス整合より、

$$
R = R_S
$$
