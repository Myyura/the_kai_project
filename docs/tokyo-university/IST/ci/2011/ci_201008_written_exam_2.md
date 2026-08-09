---
sidebar_label: 2010年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
  - Computer-Science.Computer-Architecture.Assembly-Language
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2010年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
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

### 题目描述

1. 处理器指令格式设计需要决定双输入算术运算的操作数个数以及访存方式。
   1. 比较双操作数格式 `ADD operand1, operand2` 与三操作数格式 `ADD operand1, operand2, operand3` 的优缺点。
   2. 比较两种体系：一种允许算术指令直接带内存操作数，如 `ADD r, 内存地址操作数`；另一种算术指令只操作寄存器，必须用 `LOAD r, 内存地址操作数` 和 `STORE r, 内存地址操作数` 访问内存，再用含两个或三个寄存器操作数的 `ADD` 运算。说明二者的优缺点，其中 $r$ 表示寄存器操作数。
2. 考虑一个计算 100 个 16 位整数中最大值与最小值的程序。为指令宽度和数据宽度均为 16 位的处理器设计足以编写该程序的指令格式（即一条指令各位如何划分）与指令集；每条指令用一至两行简述。指令集必须支持子程序调用和返回。
3. 使用第 2 问设计的指令集，编写求这 100 个 16 位整数最大、最小值的程序。
4. 画出实现该指令集的处理器框图，图中应包含 ALU、寄存器等功能模块；再从取指前开始，说明一条算术指令经过取指、译码、取操作数、运算直至执行结束的全过程。
