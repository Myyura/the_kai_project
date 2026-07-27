---
sidebar_label: "2019年8月実施 専門 第2問"
tags:
  - Tokyo-University
  - Electrical-Electronic.Digital-Logic.Ripple-Carry-Adder
  - Electrical-Electronic.Digital-Logic.Signed-Addition-Subtraction-and-Overflow-Detection
  - Computer-Science.Computer-Architecture.Number-Representation
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2019年8月実施 専門 第2問 


## **Author**
[Josuke](https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f?xhsshare=QQ&appuid=5de61ebb0000000001004b64&apptime=1718276766), [diohabara](https://github.com/diohabara/open_inshi)

## **Description**
Let us design a circuit that obtains a 4-bit signed integer $Y_{3..0}$ by calculating 4-bit additon/subtraction of a 4-bit signed integer $A_{3..0}$ and a 2-bit signed integer $B_{1,0}$. The integers $A,B$ and $Y$ are expressed in two's complement. The types of logic gates that you can use arc NOT, AND , OR ,and , XOR , cach of which is equipped with as many inputs as the design requires. Answer the following questions.

(1) Show the maximum and minimum values of $A$ and $B$ in decimal form.

(2) Show a circuit that calculates $A + B$ to obtain $Y$ by combining logic gates. Organize the adder as a ripple carry adder. You can use signals from $A_{3..0},B_{1,0}$, supply voltage $V_{DD}$, and grounding voltage GND as inputs, The output should be $Y_{3..0}$. To simplify the diagram, use the "half-adder" blocks and the "full-adder" blocks after showing gate-level designs of both blocks.

(3) Consider adding an overflow detection mechanism to the circuit designed in (2). Show the overflow detection circuit by combining the logic gates. You can use signals from $A_{3..0},B_{1,0}$ and $Y_{3..0}$ as inputs. The output should be a 1-bit signal named $D$; it should be '1' when the overflow occured, or '0' otherwise.

(4) Show a circuit that calculates $A - B$ to obtain $Y$ by combining logic gates. Organize the adder as a ripple carry adder. You can use signals from $A_{3..0},B_{1,0},V_{DD}$ and GND as inputs. The output should be $Y_{3..0}$. Use the "half-adder" blocks and the "full-adder" blocks in (2).

(5) Show all the input patterns that cause overflows for the calculation designed in (4).

### 题目描述

设计一个电路，对 $4$ 位有符号整数 $A_{3..0}$ 与 $2$ 位有符号整数 $B_{1,0}$ 做 $4$ 位加/减运算，得到 $4$ 位有符号整数 $Y_{3..0}$。$A,B,Y$ 均用二进制补码表示。可用的门为 NOT、AND、OR、XOR，每种门的输入数可按设计需要确定。

(1) 用十进制写出 $A$、$B$ 各自的最大值和最小值。

(2) 用逻辑门组合出计算 $Y=A+B$ 的行波进位加法器。可使用 $A_{3..0}$、$B_{1,0}$、电源电压 $V_{DD}$ 和地电压 GND 作为输入，输出为 $Y_{3..0}$。先给出半加器和全加器的门级设计，随后可用二者的模块符号简化总图。

(3) 为 (2) 的电路增加溢出检测。用 $A_{3..0}$、$B_{1,0}$、$Y_{3..0}$ 中的信号组合逻辑门，输出一位信号 $D$；发生溢出时 $D=1$，否则 $D=0$。

(4) 用逻辑门组合出计算 $Y=A-B$ 的行波进位加法器。可使用 $A_{3..0}$、$B_{1,0}$、$V_{DD}$ 和 GND，输出为 $Y_{3..0}$，并使用 (2) 中的半加器、全加器模块。

(5) 列出 (4) 所设计减法运算中会造成溢出的全部输入模式。

#### 考点

- 补码数值表示：要求确定不同位宽有符号数的取值范围，并正确进行符号扩展。
- 行波进位加减器：要求由半加器、全加器构造跨位进位链，并用补码取反加一实现减法。
- 有符号溢出检测：要求根据操作数与结果符号关系设计检测逻辑，并枚举减法的全部溢出输入。

## **Kai**
### (1)

$$
\begin{aligned}
A_{\text{max}} &= 0111_{(2)} = 7 \\
A_{\text{min}} &= 1000_{(2)} = -(1000 \oplus 1111 + 1)_{(2)} = -8 \\
B_{\text{min}} &= 01_{(2)} = 1 \\
B_{\text{max}} &= 10_{(2)} = -(10 \oplus 11 + 1)_{(2)} = -2
\end{aligned}
$$

### (2)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2020_2_p1.png" width="700" height="500" alt=""/>
</figure>

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2020_2_p2.png" width="700" height="400" alt=""/>
</figure>

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2020_2_p3.png" width="460" height="600" alt=""/>
</figure>

### (3)
(2) で設計した回路がオーバーフローするとき、$A_3C_2=1$ となる。
また、(2) の回路は以下の論理式を満たす。

$$
\begin{aligned}
  C_2 &= A_2C_1 \\
  C_1 &= A_1C_0 + A_1B_1 + B_1C_0 = C_0(A_1 + B_1) + A_1B_1 \\
  C_0 &= A_0B_0
\end{aligned}
$$

これらの式を代入して

$$
\begin{aligned}
  &A_3A_2C_1 = 1 \\
  &A_2A_3(C_0(A_1 + B_1) + A_1B_1) = 1 \\
  &A_2A_3(A_0B_0(A_1 + B_1) + A_1B_1) = 1
\end{aligned}
$$

よって求めるオーバーフロー検知機構の回路は次の通り。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2020_2_overflow_detector.png" width="700" height="358" alt=""/>
</figure>

### (4)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2020_2_p5.png" width="429" height="583" alt=""/>
</figure>

### (5)
1ビットの信号 $D$ でオーバフローかどうかを出力し、オーバフロー発生時に $1$、そうでないときに $0$ を出力するとする。  
(3) と同じように考え、$D = 1$ となるのは以下の論理式を満たす場合である。

$$
\begin{aligned}
A_3 C_2 &= 1 \\
C_2 &= A_2 C_1 \\
C_1 &= C_0 (A_1 + \overline{B_1}) + A_1 \overline{B_1} \\
C_0 &= A_0 + \overline{B_0}
\end{aligned}
$$

これを解いて

$$
\begin{aligned}
&A_3 C_2 = 1 \\
&A_3 A_2 C_1 = 1 \\
&A_2 A_3 (C_0 (A_1 + \overline{B_1}) + A_1 \overline{B_1}) = 1 \\
&A_2 A_3 ((A_0 + \overline{B_0})(A_1 + \overline{B_1}) + A_1 \overline{B_1}) = 1 \\
&A_2 A_3 (A_0 A_1 + A_0 \overline{B_1} + A_1 \overline{B_0} + \overline{B_0} \overline{B_1}) = 1 \\
&A_0 A_1 A_2 A_3 + A_0 A_2 A_3 \overline{B_1} + A_1 A_2 A_3 \overline{B_0} + A_2 A_3 \overline{B_0} \overline{B_1} = 1
\end{aligned}
$$

以上からオーバフローが発生する入力パターンは以下の通り。ただし、 $*$ は $0$ でも $1$ でも良い。

|$A_0$|$A_1$|$A_2$|$A_3$|$B_0$|$B_1$|
|-|-|-|-|-|-|
|1|1|1|1|*|*|
|1|*|1|1|*|0|
|*|1|1|1|0|*|
|0|0|1|1|0|0|
|*|1|1|1|*|0|
