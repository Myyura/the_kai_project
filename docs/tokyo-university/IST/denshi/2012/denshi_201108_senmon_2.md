---
sidebar_label: 2011年8月実施 専門 第2問
tags:
  - Tokyo-University
  - Computer-Science.Computer-Architecture.Parallelism
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2011年8月実施 専門 第2問

## **Author**
[adj-matrix](https://github.com/adj-matrix), 祭音Myyura

## **Description**

Answer the following questions on data dependency and instruction-level parallelism.

(1) Data dependencies that influence instruction-level parallelism are categorized into four types, i.e., flow, anti, input, and output dependencies. Explain these four types of dependencies.

(2) Indicate all the types of dependencies that cause precedence constraint among the four types in (1).

(3) Data dependencies are also categorized into true ones and false ones. True dependency represents data transfer between instructions, whereas false one doesn't. Answer if each of the dependencies in (2) is true one or false one.

The code below is assembly code of a processor. In this code, `L1` to `L4` indicate labels. And, `r0` to `r2` indicate registers, and the register in the left-hand side of each assignment operator “=” indicates destination and the registers in the right-hand side indicate sources. `L1:ld` is a load instruction, which accesses the main memory with the contents of `r0` as the target address. `L2:sla` and `L3:sla` are shift-left-arithmetic instructions.

```text
L1: ld  r1 = *r0 ;
L2: sla r2 = r1 << 1 ;
L3: sla r1 = r1 << 2 ;
L4: add r1 = r1 + r2 ;
```

(4) Answer all the pairs of instructions with flow dependencies in the code. Also answer all the pairs of instructions with anti dependencies.

(5) Answer a method to solve false dependencies.
Then, explain how the instruction-level parallelism of the code above is improved when the method is applied.

### 题目描述

回答下列关于数据相关与指令级并行的问题。

(1) 影响指令级并行的数据相关分为流相关（flow）、反相关（anti）、输入相关（input）和输出相关（output）四类。解释这四类相关。

(2) 从 (1) 的四类相关中，指出所有会在指令之间造成执行先后约束的类型。

(3) 数据相关还可分为真相关与假相关：真相关表示指令之间确有数据传递，假相关则没有。判断 (2) 中各类相关分别属于真相关还是假相关。

给定下列处理器汇编代码。`L1` 至 `L4` 是指令标签，`r0` 至 `r2` 是寄存器；赋值号左侧寄存器为目的操作数，右侧寄存器为源操作数。`L1:ld` 是装载指令，以 `r0` 的内容为主存访问地址；`L2:sla` 与 `L3:sla` 是算术左移指令。

```text
L1: ld  r1 = *r0 ;
L2: sla r2 = r1 << 1 ;
L3: sla r1 = r1 << 2 ;
L4: add r1 = r1 + r2 ;
```

(4) 列出代码中所有具有流相关的指令对，以及所有具有反相关的指令对。

(5) 给出消除假相关的一种方法，并说明将其用于上述代码后，代码的指令级并行性如何得到改善。

## **Kai**
### (1)

- Flow dependency: Read after write (RAW); a later instruction reads a value written by an earlier instruction.
- Anti dependency: Write after read (WAR); a later instruction writes a location read by an earlier instruction.
- Input dependency: Read after read (RAR); both instructions read the same location.
- Output dependency: Write after write (WAW); both instructions write the same location.

### (2)

The following dependencies that cause precedence constraints (hazards) are:

Flow dependency (RAW), Anti dependency (WAR), Output dependency (WAW)

### (3)

- True dependency: Flow dependency (RAW)
- False dependency: Anti-dependency and Output dependency (WAR and WAW)

### (4)

- Flow dependencies: (L1, L2), (L1, L3), (L2, L4), (L3, L4)
- Anti dependencies: (L2, L3), (L2, L4), (L3, L4)

### (5)

Using register renaming:

```text
L1:   ld  r1 = *r0 ;
L2:   sla r2 = r1 << 1 ;
L3:   sla r1 = r1 << 2 ;
L4:   add r1 = r1 + r2 ;
```

To solve WAR (2,3), (2,4), (3,4) and WAW (1,3), (1,4), (3,4):

First, solve WAR (2,3)
```text
L1:   ld  r1 = *r0 ;
L2:   sla r2 = r1 << 1 ;
L3:   sla r3 = r1 << 2 ;
L4:   add r3 = r3 + r2 ;
```

And we find WAR (2,4) WAR (3,4) WAW (1,3) solved, then solve WAW (3,4) :
```text
L1:   ld  r1 = *r0 ;
L2:   sla r2 = r1 << 1 ;
L3:   sla r3 = r1 << 2 ;
L4:   add r4 = r3 + r2 ;
```

Finally, all false dependencies are solved.
Here `r4` is the renamed destination corresponding to the architectural register `r1`. After `L1`, `L2` and `L3` can execute in parallel; `L4` waits for both.
