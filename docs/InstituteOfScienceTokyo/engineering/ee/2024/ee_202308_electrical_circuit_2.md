---
sidebar_label: 2023年8月実施 電気回路2
tags:
  - InstituteOfScienceTokyo
  - Electrical-Electronic.Circuits.Resistor-Inductor-Capacitor-Resonance
  - Electrical-Electronic.Circuits.Metal-Oxide-Semiconductor-Field-Effect-Transistor-Bias-and-Small-Signal-Analysis
---
# 東京工業大学 工学院 電気電子系 2023年8月実施 電気回路2


## **Author**
Zero

## **Description**
図 2.1 および図 2.2 に示す回路について以下の問に答えよ。図中の $L$ はインダクタンス，$C$ はキャパシタンス，$V_{IN}$ は大信号入力電圧，$V_{OUT}$ は大信号出力電圧，$v_{in}$ は小信号入力電圧，$v_{out}$ は小信号出力電圧，$V_{DD}$ は直流電源電圧である。$N$ 型 MOSFET の小信号等価回路は図 $2.3$ に示す形で表され，$v_{gs}$ はゲート・ソース間小信号電圧，$g_m$ は伝達コンダクタンス，$r_o$ は出力抵抗である。虚数単位を $j$, 角周波数を $\omega$ とする。基板バイアス効果は無視せよ。

(1) 図 $2.1$ の回路の $ab$ 間のアドミタンス $Y$ を求めよ。 

(2) 図 $2.1$ の回路の ab 間の並列共振角周波数 $\omega_0$ を求めよ。 

(3) 図 $2.1$ の回路を負荷に用いた回路を図 $2.2$ に示す。この回路構成の名称を示せ。ただし答案用紙の空欄部を埋めるかたちで答えること。

(4) 図 $2.2$ の回路において $N$ 型 MOSFET に直流のドレイン電流 $I_D$ のみが流れるとき，$V_{OUT}$ の電圧を示せ。 

(5) 図 $2.2$ の回路の小信号等価回路を描け。

(6) 図 $2.2$ の回路に $v_{in}$ として並列共振角周波数 $\omega_0$ の信号を入力した際の小信号利得 $v_{out}/v_{in}$ を $\omega_0,L,C,g_m,r_o$ のうち必要なものを用いて示せ。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/InstituteOfScienceTokyo/engineering/ee_202308_electrical_circuit_2_p1.png" width="600" alt=""/>
</figure>

### 题目描述

对原 Description 图 2.1、2.2 所示电路回答下列问题。$L$ 为电感量，$C$ 为电容量，$V_{\mathrm{IN}},V_{\mathrm{OUT}}$ 为大信号输入、输出电压，$v_{\mathrm{in}},v_{\mathrm{out}}$ 为小信号输入、输出电压，$V_{DD}$ 为直流电源电压。N 沟道 MOSFET 的小信号模型如图 2.3，$v_{gs}$ 为栅源小信号电压，$g_m$ 为跨导，$r_o$ 为输出电阻。$j$ 为虚数单位，$\omega$ 为角频率，忽略体效应。

1. 求图 2.1 电路端子 $ab$ 间的导纳 $Y$。
2. 求图 2.1 电路端子 $ab$ 间的并联谐振角频率 $\omega_0$。
3. 图 2.2 以图 2.1 电路作为负载。填写答题纸空格，写出这一电路结构的名称。
4. 在图 2.2 中，若 N 沟道 MOSFET 中只流过直流漏极电流 $I_D$，求 $V_{\mathrm{OUT}}$。
5. 画出图 2.2 的小信号等效电路。
6. 当图 2.2 的输入 $v_{\mathrm{in}}$ 为并联谐振角频率 $\omega_0$ 的信号时，用 $\omega_0,L,C,g_m,r_o$ 中必要的量表示小信号增益

   $$
   \frac{v_{\mathrm{out}}}{v_{\mathrm{in}}}.
   $$

所有元件连接、MOSFET 端子和电压参考方向均以原 Description 的合并图为准。

## **Kai**
### (1)

$$
Y = \frac{1}{j\omega L} + j\omega C
$$

### (2)

$$
\begin{aligned}
Y = j(\omega C - \frac{1}{\omega L}) &= 0 \\
\omega_0 C - \frac{1}{\omega_0 L} &= 0 \\
\omega_0^2 = \frac{1}{LC}
\end{aligned}
$$

$$
\omega_0 = \frac{1}{\sqrt{LC}}
$$

### (3)
ドレイン接地回路

### (4)
キャパシタンスは、開放、インダクタは、短絡より、

$$
V_{out} = 0
$$

### (5)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/InstituteOfScienceTokyo/engineering/ee_202308_electrical_circuit_2_p2.png" width="400" alt=""/>
</figure>

### (6)
$\omega_0$ で $Z = \frac{1}{Y} = \infty$ より、

$$
\begin{align}
v_{in} = v_{gs} + v_{out} \tag{i}
\end{align}
$$

$$
g_m v_{gs} r_o = v_{out}
$$

$v_{gs} = \frac{v_{out}}{g_mr_o}$ を (i) 式に代入、

$$
\begin{aligned}
v_{in} &= \frac{v_{out}}{g_mr_o} + v_{out} \\
&= (\frac{1}{g_mr_o} + 1)v_{out} \\
&= \frac{1 + g_mr_o}{g_mr_o} v_{out} \\
\end{aligned}
$$

従って、

$$
\frac{v_{out}}{v_{in}} = \frac{g_mr_o}{1 + g_mr_o}
$$
