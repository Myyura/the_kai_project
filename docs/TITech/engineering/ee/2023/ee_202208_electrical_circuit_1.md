---
sidebar_label: 2022年8月実施 電気回路1
tags:
  - TITech
  - Electrical-Electronic.Circuits.Metal-Oxide-Semiconductor-Field-Effect-Transistor-Bias-and-Small-Signal-Analysis
---
# 東京工業大学 工学院 電気電子系 2022年8月実施 電気回路1


## **Author**
Zero

## **Description**
図 $1.1$ に示すソース接地回路について以下の問に答えよ。図中の MOSFET は，飽和領域において，ゲート・ソース間電圧 $V_{GS}$ としきい値電圧 $V_T$ の差 $V_{GS} - V_T$ が $1$ V のときに，ドレイン電流 $I_{D0}$ が流れるとする。チャネル長変調効果は無視できる。また図中の $V_{IN}$ は大信号入力電圧，$V_{OUT}$ は大信号出力電圧，$v_{in}$ は小信号入力電圧，$v_{out}$ は小信号出力電圧，$V_{DD}$ は電源電圧，$R$ は負荷抵抗である。

(1) MOSFET にドレイン電流が流れるために必要な $V_{IN}$ の条件を示せ。 

(2) 飽和領域で動作している MOSFET のドレイン電流 $I_D$ を $I_{D0}$ を用いて示せ。

(3) (1)の条件を満たすとき，MOSFET が飽和領域で動作するために必要な $V_{DD}$ の条件を $I_{D0}$ を用いた式で示せ。なお答の式からは，$V_{OUT}$ は消去すること。

(4) (2)で求めた式を用いて，飽和領域での $g_m$ を $I_{D0}$ を用いて示せ。

(5) 図 $1.1$ の回路の小信号等価回路を描け。

(6) 小信号入力電圧 $v_{in}$ に対する小信号出力電圧 $v_{out}$ を求めよ。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202208_electrical_circuit_1_p1.png" width="500" alt=""/>
</figure>

### 题目描述

对原 Description 图 1.1 所示共源电路回答下列问题。图中 MOSFET 在饱和区内，当过驱动电压

$$
V_{GS}-V_T=1\ \mathrm V
$$

时，漏极电流为 $I_{D0}$；忽略沟道长度调制。$V_{\mathrm{IN}}$、$V_{\mathrm{OUT}}$ 分别为大信号输入、输出电压，$v_{\mathrm{in}}$、$v_{\mathrm{out}}$ 分别为小信号输入、输出电压，$V_{DD}$ 为电源电压，$R$ 为负载电阻。接线与电压极性以图 1.1 为准。

1. 给出 MOSFET 有漏极电流流过所需的 $V_{\mathrm{IN}}$ 条件。
2. 用 $I_{D0}$ 表示 MOSFET 在饱和区工作时的漏极电流 $I_D$。
3. 在第 1 问条件成立时，用含 $I_{D0}$ 的式子给出 MOSFET 保持饱和区工作所需的 $V_{DD}$ 条件；最终式中消去 $V_{\mathrm{OUT}}$。
4. 使用第 2 问的电流式，用 $I_{D0}$ 表示饱和区的跨导 $g_m$。
5. 画出图 1.1 电路的小信号等效电路。
6. 求小信号输入 $v_{\mathrm{in}}$ 对应的小信号输出 $v_{\mathrm{out}}$。

#### 考点

- MOSFET 大信号偏置：用阈值条件、平方律漏极电流和 $V_{DS}\geq V_{GS}-V_T$ 判断导通与饱和区边界。
- MOSFET 跨导：对饱和区 $I_D$ 关于 $V_{GS}$ 求导，并用标定电流 $I_{D0}$ 表示。
- 共源放大器小信号分析：在忽略沟道长度调制时建立受控电流源模型，求带电阻负载的反相电压增益。

## **Kai**
### (1)
ドレイン電流が流れるのは、$V_{GS} > V_T$ のときであるので、$V_{IN} > V_{GS}$ より、

$$
V_{GS} > V_T
$$

### (2)
$V_{GS} - V_T = 1$ のとき、$I_{D0} = \frac{1}{2}\mu C_ox\frac{W}{L}$ として、

$$
I_D = I_{D0}(V_{GS} - V_T)^2
$$

### (3)

$$
\begin{aligned}
V_{D0} &= RI_D + V_{DS} \\
&= RI_{D0}(V_{GS} - V_T)^2 + V_{DS} \\
\end{aligned}
$$

飽和領域は、$V_{DS} > V_{GS} - V_T$ より、

$$
\begin{aligned}
V_{DD} &> RI_{D0}(V_{GS} - V_T)^2 + (V_{GS} - V_T) \\
&= (V_{GS} - V_T)[RI_{D0}(V_{GS} - V_T) + 1]
\end{aligned}
$$

### (4)

$$
g_m = \frac{\partial I_D}{\partial V_{GS}} = 2I_{D0}(V_{GS} - V_T)
$$

### (5)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202208_electrical_circuit_1_p2.png" width="400" alt=""/>
</figure>

### (6)

$$
v_{out} = -g_mRv_{gs} = -g_mRv_{in}
$$
