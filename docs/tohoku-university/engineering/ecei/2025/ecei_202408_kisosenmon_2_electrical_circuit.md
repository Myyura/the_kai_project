---
sidebar_label: "2024年8月実施 基礎専門科目 問題2 電気回路"
tags:
  - Tohoku-University
  - Electrical-Circuit
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

取电源电压的初始相位为参考值的情况下，可以写出电感电容上面电压的时域表达：

$$
V_L(t) = \frac{\omega VL}{R} \cdot \sin(\omega t + 90^\circ)
$$

$$
V_C(t) = \frac{V}{R\omega C} \cdot \sin(\omega t - 90^\circ)
$$

#### (c)

$$
Z = j\omega M \mathbin{//} \big(R + j\omega(L + L_2) + \frac{1}{j\omega C}\big)
$$

#### (d)

$$
Z_{in} = j\omega L_1 + j\omega M \mathbin{//} \big(R + j\omega(L + L_2) + \frac{1}{j\omega C}\big)
$$

代入一些化简得条件：

$$
Z_{in} = j\omega_0 L_1 + j\omega_0 M \mathbin{//} j\omega_0 L_2
$$

$$
Z_{in} = j\omega_0 L_1 + \frac{j\omega_0 M L_2}{(M + L_2)} = 0
$$

$$
L_1 = \frac{-ML_2}{M + L_2}
$$

可以解出互感系数：

$$
M = - \frac{L_1L_2}{L_1 + L_2}
$$

耦合系数：

$$
k = \frac{M}{\sqrt{L_1L_2}} = -\frac{\sqrt{
L_1L_2}}{L_1 + L_2}
$$

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
V - \frac{Q}{C} = \frac{E}{\omega^2 CL} \cdot (1 - \cos \omega t) = E \cdot (1 - \cos \omega t)
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