---
sidebar_label: "2023年8月実施 基礎科目 問題2 電気回路"
tags:
  - Tohoku-University
  - Electrical-Circuit
---
# 東北大学 工学研究科 電気・情報系 2023年8月実施 基礎科目 問題2 電気回路

## **Author**
[蛋黄猫物理 (xhs: 94162357270)](https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7?xsec_token=YBaJbvO4qazzvNUB-8gkqSwFa4usRBcKTQe93j6tfxtPw=)

## **Description**
(1) Fig.2(a) の回路において, 交流電流源の電流は $J$[A], 端子 a-b 間の電圧は $V$[V], インダクタンスは $Z_1 = 2\ \Omega,Z_2 = j2\ \Omega$ である。電流 $J$ は, 並列回路により電流 $I_1,I_2$[A] に分流される。電流 $J$ の実効値は $2$ A である。電流 $J$ をフェーザの基準とする。$I_1,I_2$ の
フェーザ図を示せ。また、電圧 $V$ の実効値と位相を求めよ。ただし、$j$ は虚数単位である。

(2) Fig.2(b) の回路において, 交流電流源の電流は $J$[A], 端子 a-b 間の電圧は $V$[V], 抵抗は $R[\Omega]$, インダクタンスは $L$[H], キャパシタンスは $C$[F], 交流電流源の角周波数は $\omega$ [rad/s] である。以下の問に答えよ。

- (a) 端子 a-b 間を短絡すると, 電圧 $V$ の位相が電流 $J$ の位相より $\pi/4$ rad 進む。$\omega$ を $R,L,C$ を用いて表せ。ただし, $\omega > 0$ である。

- (b) 端子 c-d 間に抵抗 $R_S[\Omega]$ の抵抗器をつなぐと, 電圧 $V$ と電流 $J$ の位相差が $0$ になる。$R_S$ を $\omega,L,C$ を用いて表せ。ただし, $0 < \omega < 1/\sqrt{LC}$ である。
 
(3) Fig.2(c) の回路において, 交流電流源の電流は $J$[A], 端子 a-b 間の電圧は $V$[V], 抵抗は $R[\Omega]$, 自己インダクタンスは $L_1,L_2$[H], 相互インダクタンスは $M$[H], キャパシタンスは $C$[F], 交流電流源の角周波数は $\omega$ [rad/s] である。電流 $J$ は, 並列回路により電流 $I_1,I_2,I_3$[A] に分流される。 $I_2 = 2I_1 (\neq 0 \ \text{A})$, $0 < M < 2L_2 - L_1$ のとき, 以下の問に答えよ。

- (a) $\omega$ を $R,L_1,L_2,M,C$ のうち必要な変数を用いて表せ。ただし、$\omega > 0$ である。

- (b) 回路の合成アドミタンス $Y(=J/V)$[S] を $R,L_1,L_2,M,\omega$ を用いて表せ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_202308_kiso_2_electrical_circuit.png" width="600"/>
</figure>

## **Kai** 
### (1)

$$
\begin{aligned}
I_1 &= J \cdot \frac{Z_2}{Z_1 + Z_2} = 2 \cdot \frac{2j}{2 + 2j} = 1 + j \\
I_2 &= J \cdot \frac{Z_1}{Z_1 + Z_2} = 2 \cdot \frac{2}{2 + 2j} = 1 - j
\end{aligned}
$$

$$
V = Z_1 \cdot I_1 = 2 + 2j
$$

转成时效值向量的幅度和相位的写法：

$$
\begin{aligned}
I_1 &= \sqrt{2}\angle\frac{\pi}{4} \\
I_2 &= \sqrt{2}\angle -\frac{\pi}{4} \\
V &= 2\sqrt{2}\angle\frac{\pi}{4}
\end{aligned}
$$

### (2)
#### (a)

$$
J = V \cdot \bigg(\frac{1}{R}+ j\omega C + \frac{1}{j\omega L}\bigg)
$$

$$
\arg(\frac{1}{V}) = \frac{\pi}{4} = \arctan\bigg(\omega RC - \frac{R}{\omega L}\bigg) = \arctan(1)
$$

只取正根

$$
\omega = \frac{1 + \sqrt{1 + 4\frac{R^2C}{L}}}{2RC} = \frac{1}{2RC} + \sqrt{\frac{1}{4R^2C^2} + \frac{1}{LC}}
$$

#### (b)

$$
J = V \cdot \bigg(\frac{1}{R} + j\omega C + \frac{1}{j\omega L + R_S}\bigg)
$$

$$
\frac{J}{V} = \frac{\frac{R_S}{R} + \frac{j\omega L}{R} + j\omega R_SC - \omega^2 LC + 1}{j\omega L + R_S}
$$

分子分母的实部虚部对应成比例：

$$
\frac{\frac{R_S}{R} - \omega^2LC + 1}{R_S} = \frac{1}{R} - \frac{\omega^2LC}{R_S} + \frac{1}{R_S} = \frac{\frac{\omega L}{R} + \omega R_SC}{\omega L} = \frac{1}{R} + \frac{R_SC}{L}
$$

$$
R_S = \sqrt{\frac{L}{C} - \omega^2L^2}
$$

这个题似乎用分母实数化的一般做法更简单，化成单项式的好处是更容易得到一个与频率无关的导纳（并不需要代入所求的关系式）：

$$
Y = \frac{1}{R} + \frac{R_SC}{L}
$$

### (3)
#### (a)
Z矩阵式容易的到：

$$
Z = \begin{bmatrix}
j\omega L_1 & j\omega M\\
j\omega M & j\omega L_2 + \frac{1}{j\omega C}
\end{bmatrix}
$$

由并联电压相等有：

$$
\frac{V_2}{V_1} = 1 = \frac{j\omega L_1I_1 + j\omega M \cdot I_2}{j\omega MI_1 + (j\omega L_2 + \frac{1}{j\omega C}) \cdot I_2} = \frac{j\omega L_1 + j\omega M \cdot \phi}{j\omega M + (j\omega L_2 + \frac{1}{j\omega C}) \cdot \phi}
$$

代入：

$$
\phi = \frac{I_2}{I_1} = 2
$$

$$
j\omega L_1 + j\omega M \cdot 2 = j\omega M + (j\omega L_2 + \frac{1}{j\omega C}) \cdot 2
$$

$$
j\omega \cdot \frac{2L_2 - L_1 - M}{2} = j \cdot \frac{1}{\omega C}
$$

$$
\omega = \sqrt{\frac{2}{(2L_2 - L_1 - M)\cdot C}}
$$

这个题用T型等效更快捷（只把两个电感T等效，再去整理四个端口对外的连接），但是要注意怎么处理T的方向（此时把上面当作T的公共端，下面当作T的顶端，注意分流体现再两个底端）

#### (b)
如果T等效出发：

$$
Y = \frac{1}{R} + \frac{1}{j\omega M + \frac{[j\omega(L_2 - M) + \frac{1}{j\omega C}] \cdot j\omega (L_1 - M)}{j\omega(L_1 + L_2 - 2M) + \frac{1}{j\omega C}}} = \frac{1}{R} + \frac{j\omega (L_1 + L_2 - 2M) + \frac{1}{j\omega C}}{\omega^2(M^2 - L_1L_2) + L_1/C}
$$