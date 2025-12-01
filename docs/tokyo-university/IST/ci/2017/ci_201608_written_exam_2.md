---
sidebar_label: '2016年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
  - Digital-Circuit
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2016年8月実施 筆記試験 第2問

## **Author**
[tomfluff](https://github.com/tomfluff)

## **Description**
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

## **Kai**
### (1)

|A|B|S|C|
|-|-|-|-|
|0|0|0|0|
|0|1|1|0|
|1|0|1|0|
|1|1|0|1|

### (2)

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

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201608_2_p3.png" width="310" alt=""/>
</figure>

### (5)
A method would be to do a bitwise addition for $A=a_0a_1a_2a_3...a_n$ and $B=b_0b_1b_2b_3...b_n$ two unsigned $n$ bit integers. And the carry of each addition would be connected to the `X` input of the following FA. Thus $FA_0$ has `a0,b0,_` as inputs, $FA_1$ has `a1,b1,c0` as inputs and so on.

### (6)
A faster method would be to build a look-ahead carry adder. This adder basically computes the values with consideration to the carries without calculating the carry and waiting for the result of each pair to calculate the next result. Since each calculation can be expanded to use parameterization without the carry, it is possible to remove internal carries. 

### (7)
Subtraction would be an addition with the negative value. So let's assume we would like to calculate `A-B`, it is the same as computing `A+(-B)`. This means that for subtraction all we need to do is compute the 2's-complement of `B` and add the two numbers together. This can be acomplished by inverting `B` and adding `1` to the `X` (carry) input of the n-bit adder.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201608_2_p4.png" width="320" alt=""/>
</figure>

*Note: Example uses 4-bit but same drawing is for n-bit.*

### (8)
A method could be to use `F` as the input to the carry of the n-bit adder. As well as XOR `F` and every bit of `B`. This way, If `F=1` meaning subtraction, `B` will be inverted and 2's complement will be implemented with the adder carry. Otherwise `B` will stay the same and addition will be implemented.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201608_2_p5.png" width="360" alt=""/>
</figure>

### (9)
A method to compute multiplication would be using full adders and half adders in the following way:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201608_2_p6.png" width="560" alt=""/>
</figure>

Notice that the Truth Table of bits `a*b` is the same as `a&b`. Avery `bi` is multiplied by the whole of `A` and the solution is added between two consecutive `bi` and `bi+1`.

This method is very similar to the multiplication algorithm that is being tought in schools.
