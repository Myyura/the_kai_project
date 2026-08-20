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
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

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

## **Kai**

#### Process and Thread
A process is an activity of running of a program about a set of data, and is also a container for the OS to allocate resources and protect. It has its independent virtual memory space from other processes, and cannot visit other processes’ memory unless by inter-process communication, so it is robust.

A thread is a sequential flow of instructions that performs some task. Each thread has its own PC, registers, and stack, while threads in one process share its address space and resources. The OS schedules many software threads on the available logical processors; a core may provide multiple logical processors via simultaneous multithreading. Shared-memory access requires synchronization to prevent races.

#### CSMA/CD
In classic shared Ethernet, a station first senses the carrier and transmits only when the medium is idle. While transmitting it detects collisions; after a collision it sends a jam signal, stops, and retries after a random binary-exponential-backoff interval. This limits repeated collisions. Switched full-duplex Ethernet has no shared collision domain and therefore does not use CSMA/CD.

#### Hash table
A hash table maps a key to an array index using a hash function. Collisions are resolved, for example, by separate chaining or open addressing. With a suitable hash function and bounded load factor, search, insertion, and deletion take expected $O(1)$ time, although the worst case is $O(n)$. Resizing and rehashing maintain the load factor.

#### Flip-flop
A flip-flop is a digital circuit storing one bit; a register is commonly built from several flip-flops. Common storage elements include SR latches and edge-triggered D flip-flops. A positive-edge-triggered D flip-flop copies input $D$ to output $Q$ at the rising clock edge and otherwise holds its value. In a synchronous sequential circuit, combinational logic computes the next-state input $D$ from the current state $Q$ and external inputs.
