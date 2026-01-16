---
sidebar_label: '2007年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
  - Computer-Architecture
  - Operating-System
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2007年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Synchronization operation among processing elements in a multi-computer is essential to realize mutual exclusion, producer-consumer synchronization. Answer the following questions on realization of synchronization in a multi-computer:

(1) When the multi-computer has a shared memory, describe a method to realize mutual exclusion, then write a pseudo-program to implement the operation.

(2) Atomic operations of memory-read and memory-write are necessary to implement synchronization for mutual exclusion (\*1). “Test and set” or “compare and swap” realizes an atomic operation necessary to implement the synchronization. Describe the reason why an atomic operation of memory-read and memory-write is necessary to implement the synchronization (\*2).

(3) In a distributed-memory multi-computer, synchronization can be realized by message communication. Show that synchronization functions realized by message communication and semaphore are equivalent.

(4) Synchronization methods used in Q1 to Q3 can perform a constant number of synchronization, e.g. number of mutual exclusion operations in a unit time. It is not scalable to the number of processors in the system. Describe the method to realize scalable synchronization where the number of synchronization in a unit time is proportional to the number of processors in the system.
+ (\*1) Implementation of synchronization without atomic operations exists. However, this method is not used for practical purposes.
+ (\*2) If synchronization method to be considered does not use atomic operation, show the outline of synchronization method instead of necessity of atomic operation.