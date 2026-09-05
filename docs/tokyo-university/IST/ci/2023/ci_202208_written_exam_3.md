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
A process is a running program together with its execution state and allocated resources. Processes normally have separate virtual address spaces, providing memory isolation; explicit shared-memory mappings and other inter-process communication mechanisms allow controlled exchange of data.

A thread is a sequential flow of instructions that performs some task. Each thread has its own PC, registers, and stack, while threads in one process share its address space and resources. The OS schedules many software threads on the available logical processors; a core may provide multiple logical processors via simultaneous multithreading. Shared-memory access requires synchronization to prevent races.

#### CSMA/CD
In classic shared Ethernet, a station first senses the carrier and transmits only when the medium is idle. While transmitting it detects collisions; after a collision it sends a jam signal, stops, and retries after a random binary-exponential-backoff interval. This limits repeated collisions. Switched full-duplex Ethernet has no shared collision domain and therefore does not use CSMA/CD.

#### Hash table
A hash table maps a key to an array index using a hash function. Collisions are resolved, for example, by separate chaining or open addressing. With a suitable hash function and bounded load factor, search, insertion, and deletion take expected $O(1)$ time, although the worst case is $O(n)$. Resizing and rehashing maintain the load factor.

#### Flip-flop
A flip-flop is a digital circuit storing one bit; a register is commonly built from several flip-flops. Common storage elements include SR latches and edge-triggered D flip-flops. A positive-edge-triggered D flip-flop copies input $D$ to output $Q$ at the rising clock edge and otherwise holds its value. In a synchronous sequential circuit, combinational logic computes the next-state input $D$ from the current state $Q$ and external inputs.

#### Routh–Hurwitz stability criterion

For a real characteristic polynomial with positive leading coefficient, the Routh–Hurwitz criterion determines whether every root has a strictly negative real part, without solving for the roots. Construct the Routh array from the coefficients: in the regular case, the number of first-column sign changes equals the number of roots in the right half-plane. Strict stability requires a positive first column. A zero leading entry or an entire zero row requires the corresponding limiting or auxiliary-polynomial procedure. For $s^3+a_1s^2+a_2s+a_3$, strict stability is equivalent to $a_1,a_2,a_3>0$ and $a_1a_2>a_3$.

#### Random forest

A random forest combines many decision trees using majority voting for classification or averaging for regression. Typically each tree is trained on a bootstrap sample, and each split considers a randomly selected subset of features. This produces less-correlated trees, so aggregation can reduce prediction variance compared with a single deep tree. Samples absent from a tree's bootstrap data provide out-of-bag predictions for error estimation. The method handles nonlinear relationships but does not automatically eliminate bias or overfitting.

#### Functional programming

Functional programming emphasizes constructing computations from functions and composing their results. Common techniques include first-class and higher-order functions, recursion, and immutable data. A pure function returns the same result for the same arguments and has no observable side effects; this supports substitution-based reasoning and local testing. For example, mapping a transformation over a list and folding its results express data processing without a mutable loop counter. Functional languages differ in strictness and purity, and many also support controlled state and input/output.

#### SLAM

Simultaneous localization and mapping jointly estimates a robot's trajectory and a map of its environment from sensor observations and motion information. Localization needs a map, while mapping needs poses, so their uncertainties and correlations must be handled together. Approaches include extended Kalman filters, particle filters, and optimization of pose/landmark graphs. Data association determines which observations correspond to the same feature; recognizing a previously visited place enables loop closure and can correct accumulated drift. Without an absolute reference, global position and orientation are generally determined only up to a common coordinate-frame transformation.
