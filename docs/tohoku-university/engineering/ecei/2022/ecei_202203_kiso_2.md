---
sidebar_label: "2022年2・3月実施 基礎科目 問題2 電気回路"
tags:
  - Tohoku-University
  - Electrical-Circuit
---
# 東北大学 工学研究科 電気・情報系 2022年2・3月実施 基礎科目 問題2 電気回路

## **Author**
[蛋黄猫物理 (xhs: 94162357270)](https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7?xsec_token=YBaJbvO4qazzvNUB-8gkqSwFa4usRBcKTQe93j6tfxtPw=)

## **Description**
Fig.2 に示す回路について、以下の問に答えよ。交流電源の電圧は $E$ \[V\] , 電源の角周波数は $\omega$ \[rad/s\] , 抵抗は $R_1,R_2 [\Omega]$ , 自己インダクタンスは $L_1,L_2$ \[H\] , 相互インダクタンスは $M$ \[H\] , インピーダンスの素子は $Z \ [\Omega]$ である。また、端子 c-d 間の電圧は $V_2$ \[V\] であり、 $1$ 次回路側, $2$ 次回路側を流れる電流をそれぞれ $I_1,I_2$ \[A\] とする。

(1) $T$ 形等価回路を示せ。

(2) $2$ 次回路側の端子 c-d 間の短絡したとき、電流 $I_1$ に対する電流 $I_2$ 電流比 $|I_2|/|I_1|$ を $\omega,L_2,M,R_2$ で表わせ。また、$\omega = 0$ \[rad/s\] のときの $|I_2|/|I_1|$ の値を求めよ。

(3) $2$ 次回路側の端子 c-d 間について、$Z$ を取り除いて開放したとき、電源電圧 $E$ に対する開放電圧 $V_2$ の電圧比 $|V_2|/|E|$ を求めよ。ただし、$R_1 = 10 \ [\Omega]$, $R_2 = 5\ [\Omega]$, $L_1 = 10 \ [\text{mH}]$, $L_2 = 5 \ [\text{mH}]$, $M = 5\ [\text{mH}]$, $\omega = 1000\ [\text{rad/s}]$ である。

(4) 端子 a-b 間から見た入力インピーダンス $Z_{ab} = E/I_1$ を $\omega,L_1,L_2,M,R_1,R_2,Z$ で表わせ。

(5) $2$ 次回路側の $Z$ が理想的なキャパシタ $C$ \[F\] であり, $1$ 次回路側の交流電源の角周波数が $\omega_0 - 1\sqrt{L_2C}$ \[rad/s\] であるとき、
$Z_{ab}$ を $\omega_0,L_1,M,R_1,R_2$ で表わせ。ならびに、$I_1$ と $I_2$ の位相差が $\pi/2$ \[rad/s\] であることを導け。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_202203_kiso_2_electrical_circuit.png" width="500"/>
</figure>

## **Kai** 
### (1)
略

### (2)
并联分流：

$$
I_2 = -I_1 \cdot \frac{j\omega M}{j\omega L_2 + R_2}
$$

$$
\frac{|I_2|}{|I_1|} = \bigg|\frac{j\omega M}{R_2 + j\omega L_2}\bigg| = \frac{\omega M}{\sqrt{R_2^2 + \omega^2L_2^2}}
$$

$$
\omega = 0: \frac{|I_2|}{|I_1|} = 0
$$

### (3)

$$
V_2 = E \cdot \frac{j\omega M}{R_1 + j\omega L_1}
$$

$$
\frac{|V_2|}{|E|} = \frac{\omega M}{\sqrt{R_1^2 + \omega^2L_1^2}} = \frac{5}{10\sqrt{2}} = \frac{\sqrt{2}}{4}
$$

### (4)

$$
\begin{aligned}
Z_{ab} &= R_1 + j\omega(L_1 - M) + \frac{j\omega M [j\omega(L_2 - M) + R_2 + Z]}{j\omega L_2 + R_2 + Z} \\
&= R_1 + j\omega L_1 + \frac{\omega^2 M^2}{j\omega L_2 + R_2 + Z}
\end{aligned}
$$

### (5)

$$
\begin{aligned}
Z_{ab} &= R_1 + j\omega L_1 + \frac{\omega^2M^2}{j\omega L_2 + R_2 + \frac{1}{j\omega C}} \\
&= \frac{\omega^2(M^2 - L_1L_2) + R_1R_2 + \frac{L_1}{C} + j\omega(R_1L_2 + R_2L_1) + \frac{R_1}{j\omega C}}{j\omega L_2 + R_2 + \frac{1}{j\omega C}}
\end{aligned}
$$

代入：$\omega = \frac{1}{\sqrt{L_2C}}$

$$
Z_{ab} = \frac{\omega^2(M^2 - L_1L_2) + R_1R_2 + \frac{L_1}{C} + j\omega R_2L_1}{R_2}
$$

$$
I_2 = -I_1 \cdot \frac{j\omega M}{j\omega L_2 + R_2 + \frac{1}{j\omega C}} = -j\frac{\omega M}{R_2} \cdot I_1
$$

$$
\arg3({\frac{I_2}{I_1}}) = \arg(-j) = -\frac{\pi}{2}
$$

得证