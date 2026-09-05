---
sidebar_label: 2016年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
  - Electrical-Electronic.Digital-Logic.Combinatorial-Circuit
  - Electrical-Electronic.Digital-Logic.Half-and-Full-Adders
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2016年8月実施 筆記試験 第2問

## **Author**
[tomfluff](https://github.com/tomfluff), 祭音Myyura

## **Description**

[Official examination, archived Japanese PDF](https://web.archive.org/web/20200229153159id_/https://www.i.u-tokyo.ac.jp/edu/course/ci/pdf/2016-8-exam.pdf).
(1) Show the truth table of a half-adder HA (Fig. 1) which outputs 1-bit sum $S$ and 1-bit carry $C$ from two 1-bit binary inputs $A$ and $B$.

(2) Draw a diagram of the half-adder circuit HA with devices of AND, OR, and NOT.

(3) Show the truth table of a full-adder FA (Fig. 2) which outputs 1-bit sum $S$ and 1-bit carry $C$ from two 1-bit binary inputs $A$, $B$, and 1-bit carry input $X$.

(4) Draw a diagram of the full-adder circuit FA using two half-adder HA devices. If necessary, you can use AND, OR, and NOT devices.

(5) Explain a method to build an n-bit adder for unsigned integers using full-adder FA devices.

(6) Explain a method to build a faster n-bit adder.

(7) Explain a method to execute a subtract operation with an n-bit adder through generating negative number in two's complement, and draw its circuit.

(8) Explain a method to build an n-bit adder-subtractor for unsigned integers with a single n-bit adder and an input signal $F$ to select addition or subtraction, and draw its circuit.

(9) Explain how to build a multiplier to generate a 2n-bit product $M$ from two n-bit unsigned integers $A$ and $B$.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201608_2_p1.png" width="600" alt=""/>
</figure>

### 题目描述

1. 写出半加器 HA 的真值表：输入为两个 1 位二进制数 $A,B$，输出为 1 位和 $S$ 与 1 位进位 $C$（见图 1）。
2. 仅用 AND、OR、NOT 元件画出 HA 电路。
3. 写出全加器 FA 的真值表：输入为 $A,B$ 和 1 位输入进位 $X$，输出为和 $S$ 与进位 $C$（见图 2）。
4. 用两个 HA 构成 FA；必要时可增加 AND、OR、NOT 元件，画出电路。
5. 说明如何用 FA 构造无符号整数的 $n$ 位加法器。
6. 说明如何构造速度更快的 $n$ 位加法器。
7. 说明如何用二进制补码生成负数，并借助 $n$ 位加法器执行减法；画出电路。
8. 只使用一个 $n$ 位加法器，再增加选择加、减的输入信号 $F$，构造无符号整数 $n$ 位加减器；说明方法并画图。
9. 说明如何构造乘法器，把两个 $n$ 位无符号整数 $A,B$ 相乘并输出 $2n$ 位乘积 $M$。

## **Kai**
### (1)

|A|B|S|C|
|-|-|-|-|
|0|0|0|0|
|0|1|1|0|
|1|0|1|0|
|1|1|0|1|

### (2)

Use $C=AB$ and $S=(A+B)\overline{AB}$, where $+$ denotes OR. This uses two AND gates, one OR gate and one NOT gate.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201608_2_p2.png" width="280" alt=""/>
</figure>

### (3)

|A|B|X|S|C|
|-|-|-|-|-|
|0|0|0|0|0|
|0|0|1|1|0|
|0|1|0|1|0|
|0|1|1|0|1|
|1|0|0|1|0|
|1|0|1|0|1|
|1|1|0|0|1|
|1|1|1|1|1|

### (4)

The first HA produces $p=A\oplus B$ and $c_1=AB$. The second adds $p$ and $X$, producing $S=p\oplus X$ and $c_2=pX$. Set $C=c_1+c_2$ using an OR gate.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201608_2_p3.png" width="310" alt=""/>
</figure>

### (5)
A method would be to do a bitwise addition for $A=a_{n-1}\cdots a_1a_0$ and $B=b_{n-1}\cdots b_1b_0$, two unsigned $n$-bit integers. The carry of each addition is connected to the `X` input of the following FA. Thus $FA_0$ has $a_0,b_0,0$ as inputs, $FA_1$ has $a_1,b_1,c_0$ as inputs, and so on; the last carry is the $(n+1)$-st output bit.

### (6)

Use carry lookahead. Let $p_i=a_i\oplus b_i$ and $g_i=a_ib_i$. Then

$$c_{i+1}=g_i+p_ic_i,\qquad s_i=p_i\oplus c_i.$$

For example, $c_2=g_1+p_1g_0+p_1p_0c_0$. Instead of waiting for each preceding full adder, combine blocks with group propagate/generate pairs. For a lower block $(G_L,P_L)$ followed by an upper block $(G_H,P_H)$, their combined pair is

$$(G_H+P_HG_L,\ P_HP_L).$$

This composition is associative, so a parallel prefix tree computes all carries in $O(\log n)$ gate depth with bounded-fan-in gates, compared with $O(n)$ for ripple carry. It uses more wiring and logic; the carries are computed in parallel, not omitted.

### (7)
Subtraction would be an addition with the negative value. So let's assume we would like to calculate `A-B`, it is the same as computing `A+(-B)`. This means that for subtraction all we need to do is compute the 2's-complement of `B` and add the two numbers together. This can be acomplished by inverting `B` and adding `1` to the `X` (carry) input of the n-bit adder.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201608_2_p4.png" width="320" alt=""/>
</figure>

The drawing uses 4-bit buses; the same connections apply to $n$ bits. The low $n$ sum bits give $(A-B)\bmod2^n$. For unsigned operands, the final carry is 1 exactly when $A\ge B$; a borrow is its complement.

### (8)
A method could be to use `F` as the input to the carry of the n-bit adder. As well as XOR `F` and every bit of `B`. This way, If `F=1` meaning subtraction, `B` will be inverted and 2's complement will be implemented with the adder carry. Otherwise `B` will stay the same and addition will be implemented.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201608_2_p5.png" width="360" alt=""/>
</figure>

### (9)

Generate partial products $p_{ij}=a_i b_j$ with AND gates. Their weighted sum is

$$M=\sum_{j=0}^{n-1}(A b_j)2^j=AB.$$

Zero-extend the shifted rows to $2n$ bits and add them with full-adder chains or a carry-save reduction tree followed by a final carry-propagate adder. The maximum product is $(2^n-1)^2<2^{2n}$, so $2n$ output bits suffice.
A method to compute multiplication would be using full adders and half adders in the following way:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201608_2_p6.png" width="560" alt=""/>
</figure>

Notice that the Truth Table of bits `a*b` is the same as `a&b`. Each `b_i` selects either a zero row or `A`; the row for bit `i` is shifted left by `i` bit positions before addition.

This method is very similar to the multiplication algorithm that is being taught in schools.
