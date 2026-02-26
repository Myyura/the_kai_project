---
sidebar_label: "2020年8月実施 専門基礎A [A-7]"
tags:
  - Kyoto-University
  - Computer-Architecture
---
# 京都大学 情報学研究科 通信情報システム専攻 2020年8月実施 専門基礎A \[A-7\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e)

## **Description**
Answer all the following questions.

(1) Answer the following questions on the binary number representation.  
&nbsp;&nbsp;(a) Express the following decimal numbers in the 8-bit two’s complement representation.  
&nbsp;&nbsp;&nbsp;&nbsp;(i) +88  &nbsp;&nbsp;&nbsp;&nbsp;(ii) −72  

&nbsp;&nbsp;(b) Convert the following 8-bit two’s complement binary numbers into the 8-bit sign-and-magnitude binary representation.  
&nbsp;&nbsp;&nbsp;&nbsp;(i) 10101010  &nbsp;&nbsp;&nbsp;&nbsp;(ii) 11010101  

&nbsp;&nbsp;(c) Show the results of the following additions and subtractions in the 8-bit sign-and-magnitude binary number system.  
&nbsp;&nbsp;&nbsp;&nbsp;(i) 00101010 + 10101011  &nbsp;&nbsp;&nbsp;&nbsp;(ii) 10101010 + 10101010  
&nbsp;&nbsp;&nbsp;&nbsp;(iii) 11010101 − 01010101  &nbsp;&nbsp;&nbsp;&nbsp;(iv) 10101011 − 10101010  

&nbsp;&nbsp;(d) Show the result of the following multiplication of 8-bit two’s complement binary numbers in the 16-bit two’s complement binary representation.  
&nbsp;&nbsp;&nbsp;&nbsp;01110111 × 10001000  

(2) Explain the procedure of addition of floating-point numbers

(3) Explain ‘data addressing modes’ in processors.

## **Kai**
### (1) 
#### (a) 
- **(i) +88**: $88 = 64 + 16 + 8 \rightarrow$ 01011000
- **(ii) −72**: $72 = 01001000$. Two’s complement: invert $\rightarrow$ 10110111, add 1 $\rightarrow$ 10111000

#### (b) 
- **(i) 10101010**: Negative. Magnitude: invert $\rightarrow$ 01010101, add 1 $\rightarrow$ 01010110 (86). Sign-and-magnitude $\rightarrow$ 11010110
- **(ii) 11010101**: Negative. Magnitude: invert $\rightarrow$ 00101010, add 1 $\rightarrow$ 00101011 (43). Sign-and-magnitude $\rightarrow$ 10101011

#### (c) 
- **(i) 00101010 + 10101011**: $+42 + (-43) = -1 \rightarrow$ 10000001
- **(ii) 10101010 + 10101010**: $-42 + (-42) = -84 \rightarrow$ 11010100
- **(iii) 11010101 − 01010101**: $-85 - (+85) = -170$. Since $|-170| > 127$, it results in **overflow**.
- **(iv) 10101011 − 10101010**: $-43 - (-42) = -1 \rightarrow$ 10000001

#### (d) 
Multiply 01110111 (+119) and 10001000 (-120):
- Product: $119 \times (-120) = -14280$
- Magnitude: $14280 = 0011011111001000$
- Two’s complement for -14280: invert $\rightarrow$ 1100100000110111, add 1 $\rightarrow$ 1100100000111000

**Result: 1100100000111000**

### (2) 
1. **Unpack**: Extract sign, exponent, and significand.
2. **Align**: Shift significand of the smaller-exponent number until exponents match.
3. **Add/Subtract**: Perform operation on significands based on signs.
4. **Normalize**: Shift result to standard form and adjust exponent.
5. **Round**: Round the significand to the available precision.
6. **Check**: Verify exceptions (overflow, underflow, zero).

### (3) 
Addressing modes define how instructions locate operands:

- **Immediate/Implied**: Operand is constant within the instruction or implied by the opcode.
- **Register**: Operand is stored in a CPU register.
- **Direct/Indirect**: Address is directly in instruction, or instruction points to a pointer in memory.
- **Register Indirect**: A register holds the memory address (pointer).
- **Indexed/Offset**: Effective address = Base + Index or Base + Constant offset (common for arrays/stacks).
- **PC-relative**: Address is an offset from the Program Counter (used for branches).
- **Auto-inc/dec**: Register indirect with automatic address update before/after access.
