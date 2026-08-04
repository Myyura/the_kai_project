---
sidebar_label: 2009年8月実施 筆記試験 第3問
tags:
  - Tokyo-University
  - Electrical-Electronic.Digital-Logic.Half-and-Full-Adders
  - Electrical-Electronic.Digital-Logic.Combinatorial-Circuit
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2009年8月実施 筆記試験 第3問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Design a multiplier whose inputs are two 3-bit numbers and the output is a 6-bit number according to the following steps.

(1) Show the truth-table of the full adder and the half adder shown in Figure 1. Then construct them using AND, OR and NOT gates.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200908_3_p1.png" width="500" alt=""/>
</figure>

(2) Design the 4-bit adder shown in Figure 2 using the adders designed in question (1) with additional AND, OR and NOT gates.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200908_3_p2.png" width="500" alt=""/>
</figure>

(3) Design a 3-bit by 3-bit multiplier that produces 6-bit output using adders from (1) and (2) with additional AND, OR and NOT gates. Inputs for the multiplier are two unsigned 3-bit integers and the output is an unsigned 6-bit integer as shown in Figure 3.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200908_3_p3.png" width="500" alt=""/>
</figure>

(4) Design a 3-bit by 3-bit multiplier that produces 6-bit output using adders from (1) and (2) with additional AND, OR and NOT gates. The inputs of the multiplier are two signed 3-bit integers and the output is a signed 6-bit integer as shown in Figure 4. Two's complement numbers are used both in inputs and the output numbers.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200908_3_p4.png" width="500" alt=""/>
</figure>

(5) Describe the construction of an $N$-bit by $N$-bit multiplier whose computation time is $O(\log N)$.

### 题目描述

按以下步骤设计一个输入为两个 3 位数、输出为 6 位数的乘法器，所需结构图沿用原文图 1～4。

1. 写出图 1 中全加器与半加器的真值表，并仅用与门、或门、非门实现二者。
2. 使用第 1 问设计的加法器，并可增加与门、或门、非门，设计图 2 所示的 4 位加法器。
3. 使用第 1、2 问的加法器并可增加上述逻辑门，设计 3 位乘 3 位、输出 6 位的无符号乘法器；两个输入均为无符号 3 位整数，输出为无符号 6 位整数，如图 3。
4. 同样设计 3 位乘 3 位、输出 6 位的有符号乘法器；输入为有符号 3 位整数，输出为有符号 6 位整数，输入和输出均采用二进制补码表示，如图 4。
5. 说明如何构造计算时间为 \(O(\log N)\) 的 \(N\) 位乘 \(N\) 位乘法器。

