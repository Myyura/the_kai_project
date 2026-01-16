---
sidebar_label: '2010年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
  - Computer-Architecture
  - Assembly-Language
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2010年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
(1) Selection of the number of operands in a $2$-input arithmetic instruction and selection of the method to access memory are important in designing the format of instructions of a processor. Answer the following questions on the instruction format.

1) Describe the pros and cons of $2$-operand instruction format and $3$-operand instruction format for a $2$-input arithmetic instruction.

| | |
| :--- | :--- |
| Example of $2$-operand instruction format | ADD _operand $1$_, _operand $2$_ |
| Example of $3$-operand instruction format | ADD _operand $1$_, _operand $2$_, _operand $3$_ |

2) Describe the pros and cons of an instruction format where an arithmetic instruction has a memory operand and an instruction format where an arithmetic instruction does not have a memory operand, and instead LOAD and STORE instructions are used to access memory. Note that $r$ denotes a register operand.

| | |
| :--- | :--- |
| Example of an instruction format where an arithmetic instruction has a memory operand | ADD $r$, _operand to specify memory address_ |
| Example of an instruction format where an arithmetic instruction does not have a memory operand and instead LOAD and STORE instructions are used to access memory | LOAD $r$, _operand to specify memory address_<br>STORE $r$, _operand to specify memory address_<br>ADD _two or three register operands_ |

(2) Consider a program that calculates the maximum value and the minimum value of $100$ $16$-bit integers. The instruction set must have sufficient kinds of instructions to write this program. Design an instruction format (bit division of an instruction) and instruction set for a processor whose instruction-width is $16$-bit and the data-width is $16$-bit. Provide a short description of each instruction. The description of an instruction should be a line or two. Note that the instruction set must have subroutine call and return operations.

(3) Using the instruction set designed in (2), write a program that calculates the maximum value and the minimum value of $100$ $16$-bit integers.

(4) Draw a block-diagram of a processor that has the instruction set designed in (2). Then explain the operation of the arithmetic instruction on the processor from the beginning of the instruction execution (just before the instruction fetch from the memory) to the end of execution. Functional blocks such as ALU (Arithmetic Logic Unit) and registers should be used to draw the block-diagram.