---
sidebar_label: 2012年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
  - Electrical-Electronic.Digital-Logic.Counter-Circuit
  - Electrical-Electronic.Digital-Logic.Comparator-Circuit
  - Electrical-Electronic.Digital-Logic.Pulse-Width-Modulation
  - Electrical-Electronic.Digital-Logic.D-Flip-Flop
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2012年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Design a logic circuit to light an LED satisfying the following conditions. Figure 1 shows the connection diagram of the circuit, input signals and an output signal to the LED.

Condition 1: Inputs of the circuit to design are `LEDSTR` and `CLOCK INPUT` ($100\text{ kHz}$ clock input signal). The output of the circuit to design is `LEDOUT`. `LEDOUT` is directly connected to the LED driver and lights the LED. When `LEDOUT` is `H`, LED is on, and when `LEDOUT` is `L`, LED is off.

Condition 2: `LEDSTR` (`INPUT 0, INPUT1, INPUT2`) specifies the strength of the LED lighting. When `LEDSTR` is `0`, the LED is completely turned off. When `LEDSTR` is `5`, the LED is continuously turned on. When `1 <= LEDSTR <= 4`, the strength of the light from the LED is proportional to the value of `LEDSTR`. When `LEDSTR` is more than or equal to `6`, any behavior of the circuit is allowed.

Condition 3: When the LED turns on and off repeatedly at more than $100\text{Hz}$, the strength of the LED light is seen as an average value of the time periods when the LED is turned on.

Condition 4: The logic circuit is designed using AND, OR, XOR, NOT and D-type Flip-Flops.

Design the circuit following the questions below.

1) Design a 3-bit counter that count from 0 to 4 repeatedly such as $0\rightarrow1\rightarrow2\rightarrow3\rightarrow4\rightarrow0\rightarrow1\dots\dots$

2) Design a circuit that compares two 3-bit numbers.

3) Design a circuit to turn on the LED for 1 clock period when `LEDSTR` is 1, 2 clock periods when `LEDSTR` is 2, ......., 5 clock periods (i.e. always on) when `LEDSTR` is 5. Figure 2 is an example of the output waveform.

4) Using the logic circuit designed in (3), design a logic circuit that turns on and turns off the LED once for more than a second with the strength of the light specified by `LEDSTR`.


<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201208_2_p1.png" width="450" alt=""/>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201208_2_p2.png" width="450" alt=""/>
</figure>

### 题目描述

设计一个控制 LED 亮度的逻辑电路，连接与波形见原文图 1、2，并满足：

- 输入为三位 `LEDSTR`（`INPUT0, INPUT1, INPUT2`）和频率 \(100\,\mathrm{kHz}\) 的 `CLOCK INPUT`，输出为直接连接 LED 驱动器的 `LEDOUT`；`LEDOUT=H` 时点亮，`LEDOUT=L` 时熄灭。
- `LEDSTR` 指定亮度：为 0 时完全熄灭，为 5 时持续点亮；在 \(1\le\texttt{LEDSTR}\le4\) 时，感知亮度与其数值成正比；大于等于 6 时电路行为不限。
- LED 以高于 \(100\,\mathrm{Hz}\) 的频率反复开关时，人眼感知亮度等于其点亮时间占比对应的平均值。
- 只能使用 AND、OR、XOR、NOT 门和 D 触发器。

按以下步骤设计：

1. 设计一个循环计数的 3 位计数器：
   \[
   0\to1\to2\to3\to4\to0\to1\to\cdots.
   \]
2. 设计比较两个 3 位数的电路。
3. 设计 LED PWM 电路：`LEDSTR` 为 1 时每 5 个时钟点亮 1 个时钟周期，为 2 时点亮 2 个周期，依此类推；为 5 时点亮 5 个周期，即始终点亮。
4. 利用第 3 问电路，再设计一个电路，使 LED 以 `LEDSTR` 指定的亮度点亮一次、熄灭一次，且每次点亮与熄灭均持续一秒以上。
