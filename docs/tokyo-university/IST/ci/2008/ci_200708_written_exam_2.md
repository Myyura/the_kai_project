---
sidebar_label: 2007年8月実施 筆記試験 第2問
tags:
  - Tokyo-University
  - Computer-Science.Computer-Architecture
  - Computer-Science.Operating-Systems.Process-Synchronization
  - Computer-Science.Operating-Systems.Atomic-Operations
  - Computer-Science.Operating-Systems.Message-Passing-Synchronization
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2007年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Synchronization operation among processing elements in a multi-computer is essential to realize mutual exclusion, producer-consumer synchronization. Answer the following questions on realization of synchronization in a multi-computer:

(1) When the multi-computer has a shared memory, describe a method to realize mutual exclusion, then write a pseudo-program to implement the operation.

(2) Atomic operations of memory-read and memory-write are necessary to implement synchronization for mutual exclusion (\*1). “Test and set” or “compare and swap” realizes an atomic operation necessary to implement the synchronization. Describe the reason why an atomic operation of memory-read and memory-write is necessary to implement the synchronization (\*2).

(3) In a distributed-memory multi-computer, synchronization can be realized by message communication. Show that synchronization functions realized by message communication and semaphore are equivalent.

(4) Synchronization methods used in Q1 to Q3 can perform a constant number of synchronization, e.g. number of mutual exclusion operations in a unit time. It is not scalable to the number of processors in the system. Describe the method to realize scalable synchronization where the number of synchronization in a unit time is proportional to the number of processors in the system.
+ (\*1) Implementation of synchronization without atomic operations exists. However, this method is not used for practical purposes.
+ (\*2) If synchronization method to be considered does not use atomic operation, show the outline of synchronization method instead of necessity of atomic operation.

### 题目描述

多计算机系统中的处理单元必须进行同步，才能实现互斥以及生产者—消费者同步。回答以下关于多计算机同步实现的问题。

1. 当多计算机具有共享内存时，说明一种实现互斥的方法，并写出实现该操作的伪程序。
2. 实现互斥同步通常需要把内存读、写组成原子操作，例如“测试并置位”（test-and-set）或“比较并交换”（compare-and-swap）。说明为什么实现同步需要这种原子性的读写操作。题目同时说明：虽然存在不使用原子操作的同步实现，但实践中通常不采用；若你的同步方法不使用原子操作，则改为概述该方法。
3. 在分布式内存多计算机中可通过消息通信实现同步。证明用消息通信实现的同步功能与信号量实现的同步功能等价。
4. 第 1～3 问的方法在单位时间内只能完成常数数量的同步（例如互斥操作次数），因而不能随处理器数量扩展。说明一种可扩展的同步方法，使单位时间内可完成的同步数量与系统处理器数成正比。

#### 考点

- **共享内存互斥与进程同步**：用锁或信号量组织临界区，并以伪代码保证同一时刻只有一个处理单元进入。
- **原子操作**：解释普通读—改—写被并发穿插时产生的竞争，以及 test-and-set、compare-and-swap 如何不可分割地更新锁状态。
- **消息传递同步**：通过请求、授权或令牌消息模拟信号量，并反向说明信号量可实现消息通信所需的等待与唤醒。
- **可扩展同步**：采用分层锁、树形屏障或分布式锁等结构，避免所有处理器争用同一个串行热点。
