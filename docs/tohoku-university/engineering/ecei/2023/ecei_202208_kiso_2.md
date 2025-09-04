---
sidebar_label: "2022年8月実施 基礎科目 問題2 電気回路"
tags:
  - Tohoku-University
  - Electrical-Circuit
---
# 東北大学 工学研究科 電気・情報系 2022年8月実施 基礎科目 問題2 電気回路

## **Author**
[蛋黄猫物理 (xhs: 94162357270)](https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7?xsec_token=YBaJbvO4qazzvNUB-8gkqSwFa4usRBcKTQe93j6tfxtPw=)

## **Description**
(1) Fig.2(a) に示す回路について, 以下の問に答えよ。交流電源の電圧は $V$[V], 角周波数は $\omega$ [rad/s] であり, 電源の内部抵抗は無視する。回路を流れる電流は $I$ [A], 抵抗 $R$ は $50[\Omega]$, コイル $L$ のインダクタンスは $2$ [mH], コンデンサ $C$ のキャパシタンスは $10[\mu\text{F}]$ である。

- (a) $\omega = 10^4$ [rad/s], $V = 100$ [V] のとき, 端子 a-b 間から見た入力アドミタンス $Y_{ab}$, 電流 $I$ の位相差を求めよ。必要に応じて, 関数 $\tan^{-1}$ を用いてよい。

- (b) $\omega$ を $10^{0}$ [rad/s] まで変化させるとき, 電圧 $V$ を基準とし, 進み位相, 遅れ位相, 同相の言葉を用いて, 電流 $I$ の位相変化を説明せよ。また、共振周波数 $f_0$ を求め, 共振時に抵抗 $R$ に流れる電流を, $V,R,L,C$ のうち必要な変数な用いて表わせ。

(2) Fig.2(b) に示す回路について, 以下の問に答えよ。交流電源の電圧は $V_1$[V], 角周波数は $\omega$ [rad/s] であり, 電源の内部抵抗は無視する。$2$ つのコイルの自己インダクタンスは $L_1,L_2$ [H], 相互インダクタンスは $M$ [H], 負荷抵抗は $R[\Omega]$ である。また、$1$ 次回路側と $2$ 次回路側の, 端子 a-b 間と端子 c-d 間の電圧はそれぞれ $V_1,V_2$ [V], 流れる電流はそれぞれ $I_1,I_2$ [A] である。

- (a) 端子 a-b 間からみた入力インピーダンス $Z_{ab}$ を,$L_1,L_2,R,M,\omega$ を用いて表わせ。

- (b) コイル間の結合係数が $1$ のとき, $2$ 次回路側で消費される電力を求めよ。ただし、$V_1 = 100$ [V], $\omega = 10^6$ [rad/s], $R = 10 [\Omega]$, $L_1 = 10 [\mu\text{H}]$, $L_2 = 20[\mu\text{H}]$ である。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_202208_kiso_2_electrical_circuit.png" width="400"/>
</figure>

## **Kai** 
### (1)
#### (a)

$$
Y_{ab} = \frac{1}{R} + \frac{1}{j\omega L} + j\omega C = \frac{1}{50} - \frac{1}{20}j + 0.1j = \frac{2 - 5j + 10j}{100} = \frac{1}{50} + \frac{1}{20}j
$$

$$
I = V \cdot Y_{ab} = 100 \cdot \big(\frac{1}{50} + \frac{1}{20}j\big) = 2 + 5j
$$

$$
\arg(I) = \tan^{-\frac{5}{2}}
$$

#### (b)

$$
Y_{ab} = \frac{1}{50} + j \cdot (10^{-5}\omega - \frac{1}{2 \cdot 10^{-3}\omega})
$$

$$
\arg(\frac{1}{V}) = \arg(Y_{ab}) = \tan^{-1}50 \cdot \big(10^{-5} \omega - \frac{1}{2 \cdot 10^{-3}\omega}\big)
$$

一开始相位落后，随着角频率增大逐渐提前，到达共振后，相位开始超前。

共振的时候，同向

$$
10^{-5}\omega - \frac{1}{2 \cdot 10^{-3}\omega} = 0
$$

$$
\omega_0 = \frac{\sqrt{2}}{2} \cdot 10^4
$$

$$
f_0 = \frac{\omega_0}{2\pi} = \frac{\sqrt{2}}{4\pi} \cdot 10^4 \text{Hz}
$$

$$
I = \frac{V}{R}
$$

### (2)
#### (a)
T型等效

$$
Z_{ab} = j\omega(L_1 - M) + \frac{j\omega M \cdot (j\omega L_2 - j\omega M + R)}{j \omega L_2 + R}
$$

#### (b)
因为这个电路的特殊性，只有二次回路一侧有电阻，因此电阻消耗的功率就是二次线圈一侧消耗的电功率就是总的电功率（有功功率）：

$$
P = Re(V \cdot I^*) = Re(V \cdot \frac{V^*}{Z^*}) = |V|^2 \cdot Re(\frac{1}{Z^*})
$$

处理阻抗即可：

$$
\begin{aligned}
Z_{ab} &= j\omega(L_1 - M) + \frac{j\omega M \cdot (j\omega L_2 - j\omega M + R)}{j\omega L_2 + R} \\
&= j\omega L_1 + \frac{j\omega M \cdot (-j\omega M)}{j\omega L_2 + R} \\
&= \frac{j\omega L_1 R - \omega^2L_1L_2 + \omega^2M^2}{j\omega L_2 + R}
\end{aligned}
$$

$$
Re(\frac{1}{Z^*}) = Re\bigg(\frac{R - j\omega L_2}{\omega^2M^2 - \omega^2L_1L_2 - j\omega L_1R}\bigg)
$$

代入结合系数为1的条件进行化简：

$$
k = \frac{M}{\sqrt{L_1L_2}} = 1
$$

$$
Re(\frac{1}{Z^*}) = Re\bigg(\frac{R - j\omega L_2}{-j\omega L_1 R}\bigg) = \frac{L_2}{L_1R}
$$

$$
P = |V|^2 \cdot Re(\frac{1}{Z^*}) = |V|^2 \cdot \frac{L_2}{L_1R} = 10^4 \cdot \frac{2}{10} = 2000
$$

别解，利用理想变压器特性：

需要熟练的额外知识点：

结合系数为1就是理想变压器

理想变压器的电压比平方等于电感比（圈数比）：

$$
\frac{V_2}{V} = \sqrt\frac{L_2}{L_1} = \sqrt{2}
$$

$$
P = \frac{V_2^2}{R} = \frac{2V^2}{R} = 2000
$$