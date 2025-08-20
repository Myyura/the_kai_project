---
sidebar_label: "2024年2・3月実施 基礎科目 問題2 電気回路"
tags:
  - Tohoku-University
  - Electrical-Circuit
---
# 東北大学 工学研究科 電気・情報系 2024年2・3月実施 基礎科目 問題2 電気回路

## **Author**
[蛋黄猫物理 (xhs: 94162357270)](https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7?xsec_token=YBaJbvO4qazzvNUB-8gkqSwFa4usRBcKTQe93j6tfxtPw=)

## **Description**
(1) Fig.2(a) の回路において、交流電源の電圧は $E$[V],端子 a-b 間, b-c 間の電圧はそれぞれ $V_1,V_2$[V]である。電流 $I_1$[A] は並列回路により電流 $I_2,I_3$[A] に分流される。電流 $I_2$ の実効値は $1$ A である。電流 $I_2$ をフェーザの基準とする。交流電源の角周波数は $100$ rad/s, 抵抗は $R = 1 \Omega$, キャパシタンスは $C$[F],インピーダンスは $L$[H] である。以下の問に答えよ。

- (a) $C = 1/100$ F,$L = 1/100$ H のとき, $I_1,I_2,I_3,V_1,V_2,E$ のに力率 $\cos\theta$ を求めよ。
  
- (b) $C = 1/25$ F のとき, 回路が誘導性となる $L$ の値の範囲を求めよ。
  
(2) Fig.2(b) の回路において、交流電源の電圧は $E$[V], 角周波数は $\omega$ rad/s, 自己インダクタンスは $L_1,L_2$[H], 相互インダクタンスは $M$[H] である。端子 c-d 間の電圧は $V_2$[V], 端子 a,c を図中の矢印の向きに流れる電流はそれぞれ $I_1,I_2$[A] である。$M^2 < L_1L_2$ を満たすとし, 以下の問に答えよ。

- (a) Fig.2(b) の回路は Fig.2(c) の回路と等価であることを示せ。
  
- (b) Fig.2(b) の回路の端子 c-d 間を短絡したとき, 端子 a-b 間から見た入力インピーダンス $Z_{ab} = E/I_1$ を, $\omega,L_1,L_2,M$ を用いて表せ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_202403_kiso_2_electrical_circuit.png" width="500"/>
</figure>

## **Kai**
### (1)
#### (a)

$$
\omega L = 1
$$

$$
\omega C = 1
$$

$$
R = 1
$$

$$
I_2 = I_1 \cdot \frac{j\omega L}{R + j\omega L} = I_1 \cdot \frac{j}{1 + j}
$$

$$
I_1 = (1 - j) \cdot I_2
$$

$$
I_1 = \sqrt{2}\angle -\frac{\pi}{4}
$$

$$
I_3 = I_1 \cdot \frac{R}{R + j\omega L}
$$

$$
I_3 = (1 - j) \cdot \frac{1}{1 + j} \cdot I_2
$$

$$
I_3 = 1\angle - \frac{\pi}{2}
$$

$$
V_1 = \frac{1}{j\omega C} \cdot I_1 = \frac{(1 - j)}{j} \cdot I_2 = - (1 + j)I_2
$$

$$
V_1 = \sqrt{2}\angle \frac{5\pi}{4}
$$

$$
V_2 = I_2 \cdot R = 1
$$

$$
V_2 = 1 \angle 0
$$

$$
E = V_1 + V_2 = -jI_2
$$

$$
E = 1\angle - \frac{\pi}{2}
$$

$$
E = -j
$$

$$
I_1 = 1 - j
$$

$$
P_e = jP_r = E^* \cdot I_1 = j \cdot (1 - j) = 1+ j
$$

$$
P_e = P_r = 1
$$

$$
\cos\theta = \frac{P_e}{\sqrt{P_e^2 + P_r^2}} = \frac{\sqrt{2}}{2}
$$

#### (b)

$$
Z = \frac{1}{j\omega C} + \frac{j\omega LR}{R + j\omega L} = \frac{1}{4j} + \frac{100j L}{1 + 100j L}
$$

$$
Im(Z) = \frac{100L}{10^4L^2 + 1} - \frac{1}{4} > 0
$$

$$
10^4L^2 - 400L + 1 < 0
$$

$$
L_{1,2} = \frac{400 \pm \sqrt{160000 - 40000}}{20000} = \frac{1}{50} \pm \frac{\sqrt{3}}{100}
$$

### (2)
#### (a)
可以把两个电路都转成T型等效

T型阻抗解耦合是万能的，可以推出变压器，同异名串并联等5种连接的等效阻抗形式，其他不常见的任意组合一般也能等效成T型阻抗。

#### (b)
在T型等效电路下求解:

$$
\begin{aligned}
Z_{ab} &= -j\omega M + \frac{j \omega(L_1 + M) \cdot j\omega(L_2 + M)}{j\omega(L_2 + M + L_2 + M)} \\
&= j\omega \cdot \bigg(\frac{L_1L_2 + M^2 + (L_1 + L_2)M - M \cdot (L_1 + L_2 + 2M)}{L_1 + L_2 + 2M}\bigg) \\
&= j\omega \cdot \frac{L_1L_2 - M^2}{L_1 + L_2 + 2M}
\end{aligned}
$$

这正是异名并联的阻抗。