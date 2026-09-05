---
sidebar_label: '2019年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Computer-Science.Operating-Systems.Semaphore
  - Discrete-Mathematics.Graph-Algorithms.A-Star-Shortest-Path-Search
  - Electrical-Electronic.Digital-Logic.Field-Programmable-Gate-Array
  - Computer-Science.Security.Buffer-Overflow
  - Computer-Science.Formal-Languages.Left-to-Right-Rightmost-Derivation-Parsing
  - Computer-Science.Networks.Internet-Protocol-Version-4-and-Version-6
  - Electrical-Electronic.Control-Theory.Stepping-Motor
  - Data-Science-Artificial-Intelligence.Machine-Learning.Perceptron
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2019年8月実施 筆記試験 第3問

## **Author**
[tomfluff](https://github.com/tomfluff), [itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**

[原題](https://www.i.u-tokyo.ac.jp/edu/course/ci/2019-8-exam.pdf)
Select four items out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines of text.
If necessary, use examples or figures.

1. **Semaphore**
2. **A\* search algorithm**
3. **FPGA**
4. **Buffer overflow**
5. **LR parsing**
6. **IPv4 and IPv6**
7. **Stepping motor**
8. **Perceptron**

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。

1. 信号量。
2. A* 搜索算法。
3. FPGA。
4. 缓冲区溢出。
5. LR 语法分析。
6. IPv4 与 IPv6。
7. 步进电机。
8. 感知机。

## **Kai**
#### Semaphore
Semaphore is an important **synchronization primitive** for coordinating access by different threads to shared resources and preventing race conditions.

It is implemented as a counter with two atomic operations: P (wait) and V (signal). It has an initial count $n$ representing how many resource units are available. When a thread executes P, a positive count is decremented and the thread continues; if the count is zero, the thread blocks. A thread executes V to release a unit, incrementing the count and waking one waiting thread if necessary.

Unlike a mutex, a semaphore need not have an owner: one thread may signal a unit awaited by another. A count initialized to one can provide mutual exclusion when its wait/signal protocol is followed.

#### A* search algorithm
A* searches for a least-cost path using $f(u)=g(u)+h(u)$: $g(u)$ is the cost of the best path to $u$ found so far, and $h(u)$ estimates the remaining cost. Thus $g(u)$ need not yet equal the true shortest distance. A minimum-$f$ frontier state is expanded and its outgoing edges are relaxed. On a finite graph with nonnegative edge costs, an admissible heuristic $0\le h(u)\le h^*(u)$ gives an optimal path when the goal is removed from the priority queue, provided improved paths can reopen states. If $h(u)\le c(u,v)+h(v)$ on each edge, the heuristic is consistent and reopening is unnecessary. With $h=0$, A* becomes Dijkstra's algorithm; informative heuristics can reduce expansions, while evaluation costs and tie-breaking also affect runtime.

#### FPGA
FPGA stands for field programmable gate array, it's an integrated circuit which allow to design custom digital logic. The FPGA is built from logic cells which are like lego bricks, it also gives access to RAM and clock signals. Cells are often grouped to blocks. Using an FPGA it is possible to develop a processor using the cells, which can be used for any specific task.

#### Buffer overflow

Buffer overflow occurs when a program writes beyond an allocated buffer and overwrites adjacent memory. In unsafe native code it may corrupt control data, crash the process, or permit execution of malicious code. Bounds checking prevents the write; stack canaries, ASLR, and non-executable memory make exploitation harder.

#### LR Parsing

LR parsing reads input from left to right and constructs a rightmost derivation in reverse. It is a bottom-up shift/reduce method: a stack holds grammar symbols and parser states, an ACTION table chooses shift, reduce, accept, or error, and a GOTO table determines the state after a reduction. Reducing $A\to\beta$ replaces the recognized right-hand side with $A$. LR($k$) uses $k$ lookahead tokens; canonical LR(1), SLR, and LALR differ in their state construction and conflict handling. For a fixed conflict-free LR grammar, parsing takes linear time in the input length.

#### IPv4 and IPv6

IPv4 and IPv6 are Internet-layer protocols and address formats. An IP address identifies a network interface for routing but need not be global: private and link-local addresses have limited scope. IPv4 uses 32-bit addresses; address scarcity motivated IPv6, which uses 128-bit addresses. The two protocols coexist through mechanisms such as dual stack and translation.

#### Stepping motor

Related to robotics, a stepping motor advances by a fixed angular step when its windings are energized in sequence, allowing open-loop position control if no steps are missed. Half-stepping alternates one-phase and two-phase excitation; microstepping controls phase currents more finely.

#### Perceptron

In machine learning, a perceptron is a linear binary classifier. It sums the inputs multiplied by their allocated weights and compares the result with a threshold.

$$
f=\begin{cases}
0 & \sum x_iw_i \leq b\\
1 & \sum x_iw_i > b
\end{cases}
$$
