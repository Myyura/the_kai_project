---
sidebar_label: '2022年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Computer-Science.Data-Structures.Hash-Table
  - Computer-Science.Operating-Systems.Processes-and-Threads
  - Computer-Science.Networks.Carrier-Sense-Multiple-Access-with-Collision-Detection
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Data-Science-Artificial-Intelligence.Machine-Learning.Random-Forest
  - Computer-Science.Programming.Functional-Programming-Language-Features
  - Electrical-Electronic.Digital-Logic.Flip-Flop
  - Engineering.Robotics.Simultaneous-Localization-and-Mapping
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2022年8月実施 筆記試験 第3問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines. If necessary, use examples, figures or equations.

1) **Hash table**
2) **Process and Thread**
3) **CSMA/CD**
4) **Routh-Hurwitz stability criterion**
5) **Random forest**
6) **Functional programming**
7) **Flip-flop**
8) **SLAM (Simultaneous localization and mapping)**
  
### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例、图或公式。

1. 哈希表。
2. 进程与线程。
3. CSMA/CD。
4. Routh–Hurwitz 稳定判据。
5. 随机森林。
6. 函数式编程。
7. 触发器。
8. SLAM（同步定位与地图构建）。

#### 考点

- **哈希表**：说明哈希函数、桶、冲突处理及平均常数时间查找。
- **进程与线程**：比较资源隔离、地址空间、调度与通信开销。
- **CSMA/CD**：说明共享以太网的载波侦听、冲突检测、停止发送和退避。
- **Routh–Hurwitz 判据**：由特征多项式系数构造表格，在不显式求根时判断连续系统稳定性。
- **随机森林**：说明对自助样本训练多棵随机特征决策树并集成预测。
- **函数式编程**：说明纯函数、不可变数据、高阶函数和引用透明性。
- **触发器**：说明时钟或控制信号作用下存储一位状态的时序元件。
- **SLAM**：说明机器人利用传感观测同时估计自身轨迹和环境地图。

## **Kai**

#### Process and Thread
A process is an activity of running of a program about a set of data, and is also a container for the OS to allocate resources and protect. It has its independent virtual memory space from other processes, and cannot visit other processes’ memory unless by inter-process communication, so it is robust.

A thread is a sequential flow of instructions that performs some task. Each thread has a PC and process registers, and can access the shared memory. Each processor (core) provides a number of hardware threads to execute, but in reality there can be a large number of software threads (spawned by many programs) and the processor multiplexes (execute in turn) the software threads distributing them into hardware threads. Many threads in one process may interfere with each other which is not too stable.

#### CSMA/CD


#### Flip-flop
A Flip-flop is a digital circuit storing / memorizing one bit information. It is also called a register. Common types of flip-flops are SR Latch, D Flip-flops, etc. In a D Flip-flop, the output is Q (always same as the internal value), and there is a CLK signal and a D signal. When CLK jumps from 0 to 1, a DFF updates its value same as D as the input; otherwise, it holds its one bit value regardless of whether D is. Logically, the D can be computed from a combinational circuit from Q as the input, and D becomes the next state, and Q becomes the current state.
