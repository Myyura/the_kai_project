---
sidebar_label: '2022年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Explanation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2022年8月実施 筆記試験 第3問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines. If necessary, use examples, figures or equations.

1) **Hash table**
2) **Process and Thread**
3) **CSMA/CD**
4) **Routh-Hurwitz stability criterion**
5) **Random forest**
6) **Functional programming**
7) **Flip-flop**
8) **SLAM (Simultaneous localization and mapping)**
  
## **Kai**

#### Process and Thread
A process is an activity of running of a program about a set of data, and is also a container for the OS to allocate resources and protect. It has its independent virtual memory space from other processes, and cannot visit other processes’ memory unless by inter-process communication, so it is robust.

A thread is a sequential flow of instructions that performs some task. Each thread has a PC and process registers, and can access the shared memory. Each processor (core) provides a number of hardware threads to execute, but in reality there can be a large number of software threads (spawned by many programs) and the processor multiplexes (execute in turn) the software threads distributing them into hardware threads. Many threads in one process may interfere with each other which is not too stable.

#### CSMA/CD


#### Flip-flop
A Flip-flop is a digital circuit storing / memorizing one bit information. It is also called a register. Common types of flip-flops are SR Latch, D Flip-flops, etc. In a D Flip-flop, the output is Q (always same as the internal value), and there is a CLK signal and a D signal. When CLK jumps from 0 to 1, a DFF updates its value same as D as the input; otherwise, it holds its one bit value regardless of whether D is. Logically, the D can be computed from a combinational circuit from Q as the input, and D becomes the next state, and Q becomes the current state.