---
sidebar_label: 2017年8月実施 電気回路1
tags:
  - institute-of-science-tokyo
  - Electrical-Electronic.Circuits.Operational-Amplifier
  - Electrical-Electronic.Circuits.Phasor-and-Impedance-Analysis
---
# 東京工業大学 工学院 電気電子系 2017年8月実施 電気回路1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1.1〜図1.3の回路について以下の問に答えよ。オペアンプの電圧利得は十分に高いこととする。さらに、オペアンプの入力インピーダンスは十分に高く、出力インピーダンスは十分に低いこととする。また、以下では電圧振幅のみを考える。$v_A,v_B,v_C$ は電圧振幅、$j$ は虚数単位である。

1) 図1.1の非反転増幅回路の電圧利得 $G=v_B/v_A$ を抵抗値 $R_1,R_2$ を使って示せ。

2) 図1.2のフィルタ回路について、以下の問に答えよ。ただし、抵抗値とキャパシタンスをそれぞれ $R,C$ とする。

① 伝達関数 $H(\omega)=v_C/v_B$ を計算し、以下の四角枠部（ア）と（イ）を埋めよ。ただし、角周波数を $\omega$ とする。

$$
H(\omega)=\frac1{\boxed{\text{ア}}+j\left(\omega RC+\boxed{\text{イ}}\right)}
$$

② $H(\omega)$ の位相が $0$ となる角周波数 $\omega_0$ を求めよ。

③ $\omega=\omega_0$ のときの $H(\omega_0)$ の利得 $|H(\omega_0)|$ を示せ。

3) 図1.3の回路の X から Y への伝達関数を $W(\omega)$ とする。$\omega=\omega_0$ のときの $W(\omega_0)$ を示せ。

4) 図1.3の回路でオペアンプ入力端子 X とフィルタ出力端子 Y を接続したときに、発振するための $R_1$ と $R_2$ の条件を示せ。

![図1.1 非反転増幅回路、図1.2 RCフィルタ、図1.3 両者の接続](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2018/ee_201708_electrical_circuit_1_original_fig1-1_1-3.png)

#### 题目描述

对于图1.1～图1.3的电路，回答以下问题。设运算放大器的电压增益足够高、输入阻抗足够高、输出阻抗足够低。以下只考虑电压振幅；$v_A,v_B,v_C$ 为电压振幅，$j$ 为虚数单位。

1) 用电阻值 $R_1,R_2$ 表示图1.1中同相放大电路的电压增益 $G=v_B/v_A$。

2) 对图1.2的滤波电路回答下列问题，设电阻值、电容分别为 $R,C$。

① 计算传递函数 $H(\omega)=v_C/v_B$，填写下式方框（ア）、（イ），其中 $\omega$ 为角频率：

$$
H(\omega)=\frac1{\boxed{\text{ア}}+j\left(\omega RC+\boxed{\text{イ}}\right)}.
$$

② 求 $H(\omega)$ 的相位为 $0$ 时的角频率 $\omega_0$。

③ 给出 $\omega=\omega_0$ 时的增益 $|H(\omega_0)|$。

3) 设图1.3电路从 X 到 Y 的传递函数为 $W(\omega)$，给出 $\omega=\omega_0$ 时的 $W(\omega_0)$。

4) 将图1.3的运放输入端 X 与滤波器输出端 Y 连接时，给出产生振荡所需的 $R_1,R_2$ 条件。

## **Kai**

### (1)

入力電流を無視すると、反転入力端子の電圧は抵抗分圧により $R_2v_B/(R_1+R_2)$ である。仮想短絡からこれが $v_A$ に等しいので、

$$
\boxed{G=1+\frac{R_1}{R_2}}.
$$

### (2)

#### ①

直列 RC 部分と並列 RC 部分のインピーダンスをそれぞれ $Z_1,Z_2$ とすると、

$$
Z_1=R+\frac{1}{j\omega C},\qquad
Z_2=\frac{R}{1+j\omega RC}.
$$

分圧則より、

$$
H(\omega)=\frac{Z_2}{Z_1+Z_2}
=\frac{1}{3+j\left(\omega RC-\dfrac{1}{\omega RC}\right)}.
$$

したがって、

$$
\boxed{\text{ア}=3,\qquad \text{イ}=-\frac{1}{\omega RC}}.
$$

#### ②

分母の実部は正であるから、位相が $0$ となる条件は $\omega_0RC-1/(\omega_0RC)=0$。よって、

$$
\boxed{\omega_0=\frac{1}{RC}}.
$$

#### ③

$$
\boxed{|H(\omega_0)|=\frac13}.
$$

### (3)

オペアンプの低い出力インピーダンスと高い入力インピーダンスにより、

$$
\boxed{W(\omega_0)=GH(\omega_0)=\frac{R_1+R_2}{3R_2}}.
$$

### (4)

$\omega_0$ では一巡位相が $0$ となる。一巡利得が $1$ 以上となる条件は

$$
\frac{R_1+R_2}{3R_2}\ge1
\quad\Longleftrightarrow\quad
\boxed{R_1\ge2R_2}.
$$

厳密には、理想線形回路で一定振幅の正弦波振動を持続する境界は $R_1=2R_2$ であり、微小な雑音から振幅を成長させる起動条件は $R_1>2R_2$ である。
