---
sidebar_label: "2021年8月実施 基礎科目 問題2 電気回路"
tags:
  - Tohoku-University
  - Electrical-Circuit
---
# 東北大学 工学研究科 電気・情報系 2021年8月実施 基礎科目 問題2 電気回路

## **Author**
[蛋黄猫物理 (xhs: 94162357270)](https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7?xsec_token=YBaJbvO4qazzvNUB-8gkqSwFa4usRBcKTQe93j6tfxtPw=)

## **Description**
(1) Fig.2(a) に示す回路について、以下の問に答えよ。電源電圧の実効値は $E = 100$ V, 電源の角周波数は $\omega = 100\pi$ rad/s, 回路に流れる電流は $I = |I|e^{j\theta} (-\pi/2 \leqq \theta \leqq \pi/2)$ , インダクタンスは $L = 1/(10\pi)$ H, 抵抗は $R = 8\Omega$ , キャパシタンスは $C = 1/(200\pi)$ F である。

- (a) 電流 $I$ について、$|I|$, $\theta$ を求めよ。

- (b) 回路全体における有効電力 $P_e$ と無効電力 $P_r$ , ならびに力率 $\cos\theta$ を求めよ。

- (c) 力率 $\cos\theta = 1$ とするために、Fig.2(b) に示すように。Fig.2(a) の a-b 間にキャパシタ $C_S$ を求めよ。

- (d) 問(c) において、Fig.2(b) に示す回路全体の抵抗成分で消費される電力を求めよ。また、Fig.2(b) に示す回路に流れる電流を $I_S$ とする。電圧 $E$ (基準として), ならびに問(a)で求めた電流 $I$ と $I_S$ のフェーザ図を描け。ただし、フェーザ図には、$|E|,|I|,|I_S|,\theta$ の値を明記し、電流 $I$ と $I_S$ の関係性が明確になるように記載すること。 

(2) Fig.2(c) に示すブリッジ回路について、以下の問に答えよ。自己インダクタンスは $L_3 = 24 \mu$ H, $L_4 = 30\mu$ H, 抵抗は $R_1 = R_2 = R_3 = R_4 = 50\Omega , R = 100
\Omega$ である。a-b 間の電位差がゼロであるとき、相互インダクタンス $M$ の値を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_202108_kiso_2_electrical_circuit.png" width="500"/>
</figure>

## **Kai** 
### (1)
#### (a)

$$
I = \frac{V}{R + j\omega L + 1/j\omega C} = \frac{100}{8 + 10j - 2j} = \frac{25}{2} \cdot \frac{1 - j}{2}
$$

$$
|I| = \frac{25}{4}\sqrt{2}
$$

$$
\theta = -\frac{\pi}{4}
$$

#### (b)

$$
\phi = \arg(\frac{V}{I}) = \frac{\pi}{4}
$$

$$
P_e = V_eI_e \cdot \frac{\sqrt{2}}{2} = \frac{2500}{4}\sqrt{2} \cdot \frac{\sqrt{2}}{2} = 625
$$

$$
P_r = V_eI_e \cdot \frac{\sqrt{2}}{2} = 625
$$

$$
\cos\phi = \frac{\sqrt{2}}{2}
$$

#### (c)
导纳为实数来推导：

$$
Y = \frac{1}{8 + 8j} + j\omega C = \frac{8 - 8j}{128} + j\omega C
$$

$$
\omega C = \frac{8}{128} = \frac{1}{16}
$$

$$
C = \frac{1}{1600\pi}
$$

#### (d)

$$
Y = \frac{1}{16}
$$

$$
I_S = V \cdot Y = \frac{25}{4}
$$

### (2)
用T型等效的电桥平衡：

$$
R_1 \cdot (R_4 + j\omega(L_4 - M)) = R_2 \cdot (R_3 + j\omega(L_3 + M))
$$

代入化简条件：

$$
L_4 - M = L_3 + M
$$

$$
M = \frac{L_4 - L_3}{2} = 3\mu H
$$
