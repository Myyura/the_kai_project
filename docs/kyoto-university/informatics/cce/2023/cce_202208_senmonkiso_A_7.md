---
sidebar_label: "2022年8月実施 専門基礎A [A-7]"
tags:
  - Kyoto-University
  - Computer-Architecture
  - Binary-Representation
  - Floating-Point-Representation
  - IEEE-754
  - Addressing-Modes
  - Pipeline
---
# 京都大学 情報学研究科 通信情報システム専攻 2022年8月実施 専門基礎A \[A-7\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e)

## **Description**
Answer all the following questions.

### (1)
Answer the following questions on binary number representations.

(a) Express the following decimal numbers in 8-bit two’s complement representation.

- (i) +45  
- (ii) -90

(b) Convert the following 8-bit two’s complement binary numbers into 8-bit sign-and-magnitude binary representation.

- (i) 11110000  
- (ii) 00001111

(c) Show the results of the following addition and subtraction in the 8-bit sign-and-magnitude binary number system.

- (i) 11110000 + 11110000  
- (ii) 11110000 - 00001111

(d) Show the results of the following addition and subtraction in the 8-bit two’s complement binary number system.

- (i) 11110000 + 11110000  
- (ii) 11110000 - 00001111

### (2)
Answer the following questions on floating-point numbers represented in IEEE754 half-precision basic format (with 1-bit sign, 5-bit exponent (bias=15) and 10-bit significand).

(a) Show the values of the following floating-point numbers represented in IEEE754 half-precision basic format by the binary scientific notation (e.g., $+1.0101010101 \times 2^{-3}$).

- (i) 0100 0001 0101 0101  
- (ii) 1000 0001 0101 0101

(b) Represent -9.625 in IEEE754 half-precision basic format.

### (3)
Explain ‘addressing modes’ in an instruction set architecture of a computer.

### (4)
Consider a processor with load/store architecture which has a 5-stage instruction pipeline and operates with a 2 GHz clock. Assume that the processor is stalled for one clock cycle when the result of a load instruction is used by the next instruction, when a ‘branch’ is taken, or when a ‘jump’ is done, and there is no other pipeline hazard. Calculate the execution time of a program by assuming that the number of executed instructions is 1,000,000, the instruction-mix is ALU: 50%, load: 20%, store: 15%, branch: 10%, and jump: 5%, and the ratio of load-use stalls is 40% and the ratio of branches taken is 50%. (Calculate also the derivation process of your answer.)

## **Kai**
### (1)
#### (a)

- (i) (+45) = (00101101) 
- (ii) (-80) = (10100110) 

#### (b)

- (i) (10010000) 
- (ii) (00001111) 

#### (c)

- (i) Overflow 
- (ii) (11111111) 

#### (d)

- (i) (11100000) 
- (ii) (11100001) 

### (2)
#### (a)

(i) Sign bit: 0 
  Exponent: 10000 (Real value = 16 - 15 = 1) 
  Mantissa: 01010101 
  => $+1.01010101 \times 2^1$ 

(ii) Sign bit: 1 
  Exponent: All zero -> This is not a normalized number. 
  Mantissa: Not zero 
  => $-0.01010101 \times 2^{-14}$ 

#### (b)
Sign bit: 1, -8.625 in scientific notation: $-1.00011 \times 2^3$ 
  Exponent: 10010, Mantissa: 00110000 
  => 1100 1000 1110 0000 
 
### (3)
① **Immediate Addressing**: The operand is specified directly within the instruction itself.

② **Register Addressing**: The operand is held in a specific CPU register, and the instruction identifies that register.

③ **Direct Addressing**: The instruction contains the absolute memory address where the operand is stored.

④ **Indirect Addressing**: The instruction specifies a register or memory location that contains the effective address of the operand.

⑤ **Displacement Addressing**: The effective address is calculated by adding an offset (displacement) to the contents of a base register.
 
### (4)
Clock cycle $\approx 5 \times 10^{-10}$ s 
Load-use stalls: $1 \times 10^6 \times 0.2 \times 0.4 = 0.08 \times 10^6$ clock cycles 
Control hazard stalls: $1 \times 10^6 \times (0.2 \times 0.5 + 0.05) = 0.15 \times 10^6$ clock cycles 
 
Total Time = $1.23 \times 10^6 \times 5 \times 10^{-10}$ s 
= $6.15 \times 10^{-4}$ s 
