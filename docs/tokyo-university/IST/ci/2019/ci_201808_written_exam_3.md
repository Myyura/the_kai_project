---
sidebar_label: '2018年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Explanation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2018年8月実施 筆記試験 第3問

## **Author**
[tomfluff](https://github.com/tomfluff), [itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Select **four items** out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines of text. If necessary, use examples or figures.

1. **Inverse kinematics**
2. **Hidden Markov model**
3. **MinMax algorithm**
4. **NP complete problem**
5. **Ray tracing**
6. **SIMD (Single Instruction Multiple Data)**
7. **Call by value and call by reference**
8. **Public-key cryptography**

## **Kai**
**Inverse kinematics**

Inverse kinematics is the usage of kinematic equasions to determine the motions of a robot in order to reach a desired position. Kinematics itself is the study of motion regardless of the cause of the motion, such as forces and torques. Use cases can include the motion of picking bins or items from the assembly line. Given a starting joint position and a desired position, inverse kinematics can determine the join movement needed to achieve that.

**Hidden Markov model**

A Hidden Markov Model (HMM) is a statistical model where the system being modeled is assumed to be a Markov process with unobservable (i.e., hidden) states that generate observable outcomes. HMMs are used in speech recognition, natural language processing, and bioinformatics. The model assumes that the current state depends only on the previous state and that the observation depends only on the current state.

**MinMax algorithm**

Minimax algorithm is a recursive algorithm in game theory or artificial intelligence, at a configuration of two agents in a zero-sum game, called MIN and MAX respectively wanting to minimize and maximize the utilities (values at leaves). 

In detail, it is implemented by DFS to

1. builds a game tree alternating the decisions of MAX and MIN: if the parent node is MAX, then it will choose the maximum of child MIN nodes; vice versa.
2. lays out utilities into every leaf;
3. backpropagates to internal nodes by maximizing and minimizing, finally a utility value will pass to the root as the returned result.

Apparently, for a branching factor $b$ and maximum depth $d$, the algorithm has exponential time $O(b^d)$ and polynomial space $O(bd)$. To alleviate the time complexity burden, Alpha-Beta pruning is used.

**NP complete problem**

Please refer to [CI 2013-4, (1)](https://runjp.com/docs/tokyo-university/IST/ci/2013/ci_201208_written_exam_4).

**SIMD (Single Instruction Multiple Data)**

SIMD is a technology for a processor to execute the same operation for multiple pieces of data via very wide vector registers (such as 128,256,512 bit registers) in a single thread. For example, SIMD can add 8 groups of float point numbers for two 256-bit vector registers together simultaneously. There are Intel’s SSE for 128-bit XMM registers, AVX and AVX-512 for 256/512-bit YMM/ZMM registers. In C or C++ we use intrinsics to call these instructions.