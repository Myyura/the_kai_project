---
sidebar_label: "2022年8月実施 専門 第2問"
tags:
  - Tokyo-University
  - Electrical-Electronic.Digital-Logic.Ripple-Carry-Adder
  - Electrical-Electronic.Digital-Logic.Signed-Addition-Subtraction-and-Overflow-Detection
  - Computer-Science.Computer-Architecture.Number-Representation
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2022年8月実施 専門 第2問


## **Author**
[Josuke](https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f?xhsshare=QQ&appuid=5de61ebb0000000001004b64&apptime=1718276766)

## **Description**
Let us design a circuit that adds a 4-bit signed integer $A(A_{3:0})$ and a 3-bit signed integer $B(B_{2:0})$ and outputs a 4-bit signed integer $Y(Y_{3:0})$.
Two's complement is used to represent signed integers. Let $A_3,B_2$, and $Y_3$ be the MSB(Most Significant Bit). Answer the following questions.

(1) Show the ranges of possible values of $A$ and $B$ in decimal notation.

(2) Show the truth table for the 1-bit full adder shown on the left side of the figure below.
Let $a$ and $b$ be operands, $C_{in}$ be the input carry, $y$ be the output, and $C_{out}$ be the output carry.

(3) Show the circuit that computes $Y = A + B$ by combining the full-adder symbols used in (2).
Also, show the input/output signal lines. You can use supply voltage V$_{\text{DD}}$ and ground GND if necessary.

(4) Let us add an overflow detection function to the circuit in (3).
The additional circuit takes a 1-bit signal $D$ as output, with $D = 1$ when an overflow occurs and $D = 0$ otherwise.
Show the truth table of the circuit to output $D$ by using necessary signals.
Also, show the circuit that generates $D$ by combining necessary signals and gates from $A_{3:0}, B_{2:0}, C_{3:0}$, AND, OR, and NOT shown on the right side of the figure below.
The number of gates and inputs can be increased, but the circuit should be simple.

(5) Let us design a circuit to compute $Y = A - B$ instead of adding $A$ and $B$.
Show the circuit by combining full-adders, AND, OR, and NOT gates.
Similar to (3), input/output signal lines should also be shown.
You can use V$_{\text{DD}}$ and GND if necessary.

(6) Let us add an overflow detection function to the circuit in (5) as in (4).
The additional circuit takes a 1-bit signal $D$ as output, with $D = 1$ when an overflow occurs and $D = 0$ otherwise.
Show the truth table of the circuit to output $D$ by using necessary signals.
Also, show the circuit that genrates $D$ by combining necessary signals and gates from $A_{3:0},B_{2:0},Y_{3:0}$, AND, OR, and NOT shown on the right side of the figure below. The number of gates and inputs can be increased, but the circuit should be simple.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2023_2_p1.png" width="486" height="239" alt=""/>
</figure>

### 题目描述

设计一个把 $4$ 位有符号整数 $A(A_{3:0})$ 与 $3$ 位有符号整数 $B(B_{2:0})$ 相加，并输出 $4$ 位有符号整数 $Y(Y_{3:0})$ 的电路。有符号数采用二进制补码表示，$A_3,B_2,Y_3$ 分别为最高有效位。题目所用全加器和逻辑门符号见上图。

(1) 用十进制写出 $A$、$B$ 的取值范围。

(2) 写出上图左侧一位全加器的真值表，其中 $a,b$ 为操作数，$C_{in}$ 为输入进位，$y$ 为和位输出，$C_{out}$ 为输出进位。

(3) 组合 (2) 的全加器符号，画出计算 $Y=A+B$ 的电路，并标明输入、输出信号线；必要时可使用电源 $V_{\mathrm{DD}}$ 和地 GND。

(4) 为 (3) 增加溢出检测功能，输出一位信号 $D$：溢出时 $D=1$，否则 $D=0$。使用必要信号写出 $D$ 的真值表；再利用 $A_{3:0},B_{2:0},C_{3:0}$ 中所需信号以及上图右侧所示的 AND、OR、NOT 门画出生成 $D$ 的电路。门和门输入数可以增加，但电路应尽量简单。

(5) 改为设计计算 $Y=A-B$ 的电路，组合全加器以及 AND、OR、NOT 门，并像 (3) 一样标明输入、输出信号线；必要时可使用 $V_{\mathrm{DD}}$ 和 GND。

(6) 像 (4) 一样为 (5) 增加一位溢出信号 $D$。使用必要信号写出真值表，并利用 $A_{3:0},B_{2:0},Y_{3:0}$ 中所需信号以及 AND、OR、NOT 门画出尽量简单的 $D$ 生成电路；门和输入数可以增加。

## **Kai**
### (1)
$A:[-8,7],\quad B:[-4,3]$

### (2)
|$a$|$b$|$C_{in}$|$y$|$C_{out}$|
|-|-|-|-|-|
|0|0|0|0|0|
|0|0|1|1|0|
|0|1|0|1|0|
|0|1|1|0|1|
|1|0|0|1|0|
|1|0|1|0|1|
|1|1|0|0|1|
|1|1|1|1|1|

### (3)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2023_2_p2.png" width="480" height="700" alt=""/>
</figure>

### (4)
|$A_3$|$B_2$|$Y_3$|D|
|-|-|-|-|
|0|0|0|0|
|0|0|1|1|
|0|1|0|0|
|0|1|1|0|
|1|0|0|0|
|1|0|1|0|
|1|1|0|1|
|1|1|1|0|

$$
D = A_3B_2\overline{Y}_3 + \overline{A}_3\overline{B}_2Y_3
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2023_2_p3.png" width="700" height="440" alt=""/>
</figure>

### (5)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2023_2_p4.png" width="450" height="700" alt=""/>
</figure>

### (6)
|$A_3$|$B_2$|$Y_3$|D|
|-|-|-|-|
|0|0|0|0|
|0|0|1|0|
|0|1|0|0|
|0|1|1|1|
|1|0|0|1|
|1|0|1|0|
|1|1|0|0|
|1|1|1|0|

$$
D = A_3\overline{B}_2\overline{Y}_3 + \overline{A}_3B_2Y_3
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2023_2_p5.png" width="700" height="440" alt=""/>
</figure>
