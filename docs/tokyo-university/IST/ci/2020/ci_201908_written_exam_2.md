---
sidebar_label: 2019年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
  - Electrical-Electronic.Digital-Logic.Synchronous-Circuit
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2019年8月実施 筆記試験 第2問

## **Author**
[tomfluff](https://github.com/tomfluff)

## **Description**
Consider making a memory that can be accessed randomly, using D-FFs (Flip Flop) and 2:1 multiplexers.
Assume that the D-FF is a circuit that stores 1 bit as shown in Fig. 1. A 1-bit signal given to `d` is written to this circuit at the rise of the clock signal `clk`, and this circuit continues to output the written signal to `q`.
As shown in Fig. 2, the 2:1 multiplexer is a circuit that selects one of the two input signals `a` and `b` according to the selection signal `s` and outputs it to `c`.

(1) Give a truth table for the 2:1 multiplexer shown in Fig. 2. Assume that this multiplexer selects `a` when `s` is $0$ and selects `b` when `s` is $1$.

(2) Draw a circuit diagram of a memory that stores 4 bits and outputs 1 bit at the position specified by a 2-bit address according to the following instructions:

- Use only two kinds of components, which are the D-FF shown in Fig. 1 and the 2:1 multiplexer in Fig. 2.
- Ignore circuits related to clock and write (do not connect anything to `clk` and `d`).
- Specify the address of data stored in each D-FF in the circuit diagram.
- Specify the lower bit of the 2-bit address signal wires as `addr_low` and the upper bit of it as `addr_high` in the circuit diagram.
- Specify the output wire of the memory as `output` in the circuit diagram.

(3) In the similar way as in (2), consider a memory that stores $2^n$ bits and outputs 1 bit at the position specified by an n-bit address using the D-FF shown in Fig. 1 and the 2:1 multiplexer shown in Fig. 2. Give how many multiplexers you need to make this memory.

(4) The D-FF shown in Fig. 3 is a D-FF with write control. In this D-FF, the signal given to `d` is written only when the input to the write enable signal `we` is $1$ at the rise of the clock signal `clk`.
If `we` is $0$, a previously written signal continues to be output to `q` without updating the stored contents.
Give a circuit diagram of this D-FF in Fig. 3 using only the D-FF in Fig. 1 and the 2:1 multiplexer in Fig. 2. Assume that this multiplexer selects `a` when `s` is $0$ and selects `b` when `s` is $1$.

(5) Draw a circuit diagram of a memory that stores 4 bits according to the following instructions:

- Assume that, at the rise of the clock signal, 1 bit data is written at the position specified by a 2-bit address.
- Use only three kinds of components, which are the D-FF with write control shown in Fig. 3, the AND gate shown in Fig. 4, and the NOT gate shown in Fig. 5.
- You can use up to four AND gates and up to two NOT gates.
- Ignore circuits related to clock output (do not connect anything to `clk` and `q`).
- Specify the address of data stored in each D-FF in the circuit diagram.
- Specify the lower bit of the 2-bit address signal wires as `addr_low` and the upper bit of it as `addr_high` in the circuit diagram.
- Specify the data input wire of the memory as `input` in the circuit diagram.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201908_2_p1.png" width="550" height="130" alt=""/>
</figure>

### 题目描述

使用 D 触发器（D-FF）和 2:1 多路选择器制作可随机访问的存储器。图 1 的 D-FF 存 1 位：在时钟 `clk` 上升沿把输入 `d` 写入，随后从 `q` 持续输出。图 2 的 2:1 多路选择器根据选择信号 `s` 从输入 `a,b` 中选一个输出到 `c`。

1. 写图 2 多路选择器真值表：`s=0` 选 `a`，`s=1` 选 `b`。
2. 只用图 1 D-FF 和图 2 多路选择器，画一个存 4 位、由 2 位地址选择并输出其中 1 位的电路。忽略时钟与写入电路，不连接 `clk,d`；标明每个 D-FF 所存数据的地址；把地址低、高位线分别标为 `addr_low`、`addr_high`，存储器输出线标为 `output`。
3. 类似地，用上述元件制作存 $2^n$ 位、由 $n$ 位地址选 1 位输出的存储器，求所需多路选择器数量。
4. 图 3 是带写使能的 D-FF：只有 `clk` 上升沿时 `we=1` 才把 `d` 写入；`we=0` 时保持原内容并继续从 `q` 输出。只用图 1 普通 D-FF 和图 2 多路选择器实现图 3，画电路；多路选择器仍为 `s=0` 选 `a`、`s=1` 选 `b`。
5. 按以下要求画存 4 位的写入电路：在时钟上升沿，把 1 位输入写到 2 位地址指定位置；只用图 3 带写控 D-FF、图 4 AND 门、图 5 NOT 门；AND 最多 4 个，NOT 最多 2 个；忽略时钟和读出，不连接 `clk,q`；标明每个 D-FF 地址；地址线标 `addr_low`、`addr_high`，数据输入线标 `input`。

## **Kai**
### (1)

|a|b|s|MUX|
|-|-|-|-|
|0|0|**0**|0|
|0|0|**1**|0|
|0|1|**0**|0|
|0|1|**1**|1|
|1|0|**0**|1|
|1|0|**1**|0|
|1|1|**0**|1|
|1|1|**1**|1|

### (2)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201908_2_p2.png" width="370" height="260" alt=""/>
</figure>

### (3)
Given the circumstances, we would need:

$$
\sum_{i=1}^{n} {2^{n-i}}=2^n - 1
$$

Since we gradually divide all inputs into 2 as inputs to the MUX, so the first layer would be $2^{n-1}$ the second $2^{n-2}$ and so on, until we have $2^{n-n}$ as the final MUX which would give the correct output.

### (4)
#### itsuitsuki's solution
No need to be so complex as in tomfluff's solution.
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201908_2_p5.png" width="403" height="261" alt=""/>
</figure>

#### tomfluff's solution
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201908_2_p3.png" width="403" height="261" alt=""/>
</figure>

The top option is safer as uses a D-FF to assure the correctness of the output.

The bottom option works as well but the initial value of output is `x` (i.e. unknown)

### (5)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201908_2_p4.png" width="535" height="201" alt=""/>
</figure>
