---
sidebar_label: 2024年8月実施 基礎専門科目 問題2 電気回路
tags:
  - Tohoku-University
  - Electrical-Electronic.Circuits.Phasor-and-Impedance-Analysis
  - Electrical-Electronic.Circuits.Resistor-Inductor-Capacitor-Resonance
  - Electrical-Electronic.Circuits.Mutual-Inductance
  - Electrical-Electronic.Circuits.Transformer-Equivalent-Circuit
  - Electrical-Electronic.Circuits.Circuit-Transient-Response
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---
# 東北大学 工学研究科 電気・情報系 2024年8月実施 基礎専門科目 問題2 電気回路

## **Author**
[蛋黄猫物理 (xhs: 94162357270)](https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7?xsec_token=YBaJbvO4qazzvNUB-8gkqSwFa4usRBcKTQe93j6tfxtPw=)

## **Description**
(1) 抵抗 $R[\Omega]$, インダクタンス $L$ [H], キャパシタンス $C$ [F], 変圧器, 角周波数 $\omega$ [rad/s] の交流電圧源 $V$ [V] からなる Fig.2(a) および Fig.2(b) の回路を考える。変圧器の一次側自己インダクタンス, 二次側自己インダクタンスはそれぞれ $L_1$ [H], $L_2$ [H] であり、相互インダクタンスは $M$ [H] である。虚数単位を $j$ とし, 以下の問に答えよ。

- (a) Fig.2(a) の端子 a-b 間から見た入力インピーダンスを求めよ。
  
- (b) Fig.2(a) の回路に流れる電流 $I$ [A] のフェーザの大きさが最大となる角周波数 $\omega_0$ [rad/s] を求めよ。また、$\omega = \omega_0$ のときインダクタンス $L$ とキャパシタンス $C$ に発生する電圧 $V_L$ [V] と $V_C$ [V] を $R,L,C,V$ を用いてそれぞれ表せ。

- (c) Fig.2(b) の回路が Fig.2(c) の回路と等価であるとき, インピーダンス $Z[\Omega]$ を求めよ。
  
- (d) $\omega = \omega_0$ かつ $R = 0$ のとき, Fig.2(b) の端子 c-d 間からみた入力インピーダンスが $0$ となるための, 変圧器の結合係数を求めよ。ここで、$\omega_0$ は問(1)(b) で求めた角周波数である。

(2) インダクタンス $L$ [H], キャパシタンス $C$ [F], 直流電圧源 $E$ [V] からなる Fig.2(d) の回路において、時刻 $t = 0$ でスイッチ $S$ を閉じた場合を考える。回路に流れる電流を $i(t)$ [A], キャパシタンスに蓄えられる電荷を $q(t)$ [C] とし, $t = 0$ における電流と電荷の初期値はそれぞれ $i(0) = 0,q(0) = 0$ とする。以下の問に答えよ。

- (a) $t > 0$ における $i(t)$ および $q(t)$ を求めよ。
  
- (b) キャパシタンス $C$ に発生する電圧の最大値 $V_{\max}$ [V] と, その電圧が最大となる時刻のうち最小の値 $t_m$ [s] を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_2024_8_kisosenmon_2_electrical_circuit.png" width="500"/>
</figure>

### 题目描述

1. 图 2(a)、2(b) 由电阻 $R$、电感 $L$、电容 $C$、变压器及角频率为 $\omega$ 的交流电压源 $V$ 构成。变压器一次、二次自感为 $L_1,L_2$，互感为 $M$。
   1. 求图 2(a) 从 a–b 看入的输入阻抗；
   2. 求使图 2(a) 电流相量幅值最大的角频率 $\omega_0$；当 $\omega=\omega_0$ 时，用 $R,L,C,V$ 表示电感、电容电压 $V_L,V_C$；
   3. 若图 2(b) 与图 2(c) 等效，求图 2(c) 中的阻抗 $Z$；
   4. 当 $\omega=\omega_0$ 且 $R=0$ 时，求使图 2(b) 从 c–d 看入的阻抗为零所需的变压器耦合系数。
2. 图 2(d) 是由 $L,C$ 和直流源 $E$ 构成的理想 LC 电路。$t=0$ 闭合开关，电流与电容电荷初值为
   $$i(0)=0,\qquad q(0)=0.$$
   1. 求 $t>0$ 时的 $i(t),q(t)$；
   2. 求电容电压的最大值 $V_{\max}$，以及第一次达到最大值的时刻 $t_m$。

## **Kai** 
### (1)
#### (a)

$$
Z = R + j\omega L + \frac{1}{j\omega C}
$$

#### (b)

$$
I = \frac{V}{Z} = \frac{V}{R + j(\omega L - \frac{1}{\omega 
C})}
$$

$$
|I| = \frac{|V|}{\sqrt{R^2 + (\omega L - \frac{1}{\omega C})^2}} \leq \frac{|V|}{R}
$$

$$
\omega_0 = \frac{1}{\sqrt{LC}}
$$

$$
I(\omega_0) = \frac{V}{R}
$$

$$
V_L = I \cdot j \omega L = \frac{V}{R} \cdot j \omega L 
$$

$$
V_C = I \cdot \frac{1}{j \omega
 C} = \frac{V}{R} \cdot \frac{1}{j\omega C}
$$

在 $\omega=\omega_0$ 时，直接用题目要求的参数写成相量：

$$
\boxed{V_L=j\frac VR\sqrt{\frac LC},\qquad V_C=-j\frac VR\sqrt{\frac LC}}.
$$

两者幅值相同、相位相反。若 $V$ 为有效值，相应时域电压的峰值还须乘 $\sqrt2$。

#### (c)

令二次电流 $I_2$ 流入线圈同名端，二次侧外接阻抗为 $Z_L=R+j\omega L+1/(j\omega C)$。耦合线圈方程为

$$
V=j\omega L_1I_1+j\omega MI_2,\qquad
0=j\omega MI_1+(j\omega L_2+Z_L)I_2.
$$

消去 $I_2$，得到

$$
Z_{\rm in}=j\omega L_1+\frac{\omega^2M^2}{R+j\omega(L+L_2)+1/(j\omega C)}.
$$

图 2(c) 已将 $L_1$ 单独串联，故所求方框阻抗为

$$
\boxed{Z=\frac{\omega^2M^2}{R+j\omega(L+L_2)+1/(j\omega C)}}.
$$

#### (d)

当 $R=0$、$\omega=\omega_0=1/\sqrt{LC}$ 时，二次侧外接 $L,C$ 的电抗抵消，故

$$
Z_{\rm in}=j\omega_0\left(L_1-\frac{M^2}{L_2}\right).
$$

因此零输入阻抗要求 $M^2=L_1L_2$，即

$$
\boxed{k=\frac{M}{\sqrt{L_1L_2}}=1}.
$$

这是完全耦合条件。这里计算的是输入阻抗；理想电压源驱动零阻抗时，有限电流的正弦稳态并不存在。

### (2)
#### (a)

$$
I(s) = \frac{E/s}{sL + 1/sC} = \frac{E}{L} \cdot \frac{1}{s^2 + \frac{1}{LC}} = \frac{E}{\omega L} \cdot \frac{\omega}{s^2 + \omega^2}
$$

$$
\omega = \frac{1}{\sqrt{LC}}
$$

$$
I(t) = \frac{E}{\omega L} \cdot \sin(\omega t)
$$

方法一：

$$
Q(t) = \int Idt + \text{const.} = -\frac{E}{\omega^2 L} \cdot \cos(\omega t) + \text{const.}
$$

再由$Q(0) = 0$,

$$
Q(t) = \frac{E}{\omega^2 L} \cdot (1 - \cos \omega t)
$$

方法二：

$$
Q(s) = I(s) \cdot \frac{1}{sC} \cdot C = \frac{E}{L} \cdot \frac{1}{s \cdot (s^2 + \omega^2)} = \frac{A}{s} + \frac{Bs + D}{s^2 + \omega^2}
$$

$$
A = \frac{E}{\omega^2 L}
$$

$$
Bs + D = B\omega i + D = \frac{E}{sL}\bigg|_{s = \omega i} = -\frac{E}{\omega L}i
$$

$$
Q(t) = \frac{E}{\omega^2L} \cdot (1 - \cos \omega t)
$$

#### (b)
电压：

$$
V_C(t)=\frac{Q(t)}{C} = \frac{E}{\omega^2 CL} \cdot (1 - \cos \omega t) = E \cdot (1 - \cos \omega t)
$$

$$
V_{\max} = 2E
$$

$$
\cos \omega t = -1,\omega t = \pi + 2k\pi , k = 0 ,\pm 1 , \pm 2 \dots
$$

$$
t_m = \frac{\pi}{\omega} = \pi\sqrt{LC}
$$
