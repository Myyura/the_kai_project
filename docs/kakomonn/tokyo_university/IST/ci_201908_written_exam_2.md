---
comments: false
title: 東京大学 情報理工学系研究科 創造情報学専攻 2019年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
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

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201908_2_p3.png" width="403" height="261" alt=""/>
</figure>

The top option is safer as uses a D-FF to assure the correctness of the output.

The bottom option works as well but the initial value of output is `x` (i.e. unknown)

### (5)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201908_2_p4.png" width="535" height="201" alt=""/>
</figure>