---
sidebar_label: '2012年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
  - Digital-Circuit
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2012年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
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