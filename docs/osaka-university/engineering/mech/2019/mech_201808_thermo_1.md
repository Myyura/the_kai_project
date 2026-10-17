---
sidebar_label: "2018年8月実施 問題1（熱工学）"
tags:
  - Osaka-University
  - Physics.Thermodynamics.Exergy-and-Maximum-Useful-Work
---

# 大阪大学 工学研究科 機械工学専攻 2018年8月実施 熱工学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題1（解答用紙：赤）

高温熱源と低温熱源の間で作動する熱機関について、以下の問いに答えなさい。

(1) 質量 $M\,[\mathrm{kg}]$、定圧比熱 $c\,[\mathrm{kJ/(kg\cdot K)}]$ がともに一定で等しい2つの熱源がある。両熱源の初期の温度をそれぞれ $T_1\,[\mathrm K]$、$T_2\,[\mathrm K]$（$T_1>T_2$）とする。両熱源間で可逆熱機関を作動させる場合を考える。その際に、2つの熱源と外部との間の熱の移動はないものとする。両熱源がある同じ温度となるまでに、この可逆熱機関で取り出される仕事 $W\,[\mathrm{kJ}]$ を求めなさい。ただし、両熱源の体積は一定で変化しないものとする。

(2) 大気圧下におかれた初期の温度 $T_i\,[\mathrm K]$、質量 $M\,[\mathrm{kg}]$ の氷を低温熱源とし、温度が $T_a\,[\mathrm K]$ の無限量の水を高温熱源として動作する熱機関を考える。この熱機関が理論最大熱効率で動作するとき、高温熱源と低温熱源の両者が平衡状態に達するまで、すなわち、低温熱源が温度 $T_a\,[\mathrm K]$ の水になるまで、この熱機関を作動させる場合に取り出される仕事 $W\,[\mathrm{kJ}]$ を求めなさい。ただし、大気圧下の氷の融解温度を $T_m\,[\mathrm K]$（$T_i<T_m<T_a$）、氷の定圧比熱を $c_i\,[\mathrm{kJ/(kg\cdot K)}]$、氷の融解潜熱を $h_i\,[\mathrm{kJ/kg}]$、水の定圧比熱を $c_w\,[\mathrm{kJ/(kg\cdot K)}]$ とし、それぞれ一定値であるとする。ただし、氷および水の体積は一定で変化しないものとする。

#### 题目描述

问题1（使用红色答题纸）

针对在高温热源和低温热源之间工作的热机，回答下列问题。

(1) 两个热源的质量均为 $M\,[\mathrm{kg}]$，定压比热均为 $c\,[\mathrm{kJ/(kg\cdot K)}]$，二者均保持不变。初始温度分别为 $T_1\,[\mathrm K]$、$T_2\,[\mathrm K]$，且 $T_1>T_2$。在两热源之间运行可逆热机，两个热源均不与外界交换热量。求两热源达到相同温度前，该可逆热机能够输出的功 $W\,[\mathrm{kJ}]$。两热源的体积均保持不变。

(2) 以大气压下初始温度为 $T_i\,[\mathrm K]$、质量为 $M\,[\mathrm{kg}]$ 的冰为低温热源，以温度为 $T_a\,[\mathrm K]$ 的无限量水为高温热源，运行一台热机。热机以理论最大热效率运行，直至高、低温热源达到平衡，即低温热源变成温度为 $T_a\,[\mathrm K]$ 的水。求在此过程中输出的功 $W\,[\mathrm{kJ}]$。大气压下冰的熔点为 $T_m\,[\mathrm K]$（$T_i<T_m<T_a$），冰的定压比热为 $c_i\,[\mathrm{kJ/(kg\cdot K)}]$，熔化潜热为 $h_i\,[\mathrm{kJ/kg}]$，水的定压比热为 $c_w\,[\mathrm{kJ/(kg\cdot K)}]$，这些量均为常数。冰和水的体积均保持不变。

## **Kai**

### (1)

終温度を $T_f$ とする。可逆かつ外界と断熱なので全エントロピー変化は零である。

$$
Mc\log\frac{T_f}{T_1}+Mc\log\frac{T_f}{T_2}=0
\quad\Longrightarrow\quad T_f=\sqrt{T_1T_2}.
$$

外部への仕事は両熱源のエネルギー減少に等しいから

$$
\boxed{W=Mc\left(T_1+T_2-2\sqrt{T_1T_2}\right)
=Mc\left(\sqrt{T_1}-\sqrt{T_2}\right)^2\ [\mathrm{kJ}]}.
$$

### (2)

低温熱源の温度が $T$ のとき、これに流入する熱を $\delta Q_L$ とする。可逆熱機関では $\delta Q_H/T_a=\delta Q_L/T$ なので

$$
\delta W=\left(\frac{T_a}{T}-1\right)\delta Q_L.
$$

氷の昇温、融解、水の昇温の三段階を足し合わせると

$$
\begin{aligned}
W&=Mc_i\int_{T_i}^{T_m}\left(\frac{T_a}{T}-1\right)dT\\
&\quad+Mh_i\left(\frac{T_a}{T_m}-1\right)\\
&\quad+Mc_w\int_{T_m}^{T_a}\left(\frac{T_a}{T}-1\right)dT.
\end{aligned}
$$

したがって

$$
\boxed{\begin{aligned}
W=M\bigg\{&c_i\left[T_a\log\frac{T_m}{T_i}-(T_m-T_i)\right]
+h_i\left(\frac{T_a}{T_m}-1\right)\\
&+c_w\left[T_a\log\frac{T_a}{T_m}-(T_a-T_m)\right]\bigg\}\ [\mathrm{kJ}].
\end{aligned}}
$$
