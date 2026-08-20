---
sidebar_label: '2018年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Engineering.Robotics.Forward-and-Inverse-Kinematics-of-Serial-Manipulator
  - Data-Science-Artificial-Intelligence.Machine-Learning.Hidden-Markov-Model
  - Data-Science-Artificial-Intelligence.Artificial-Intelligence.Minimax-Algorithm
  - Computer-Science.Formal-Languages.Nondeterministic-Polynomial-Time-Completeness
  - Computer-Science.Graphics.Ray-Tracing
  - Computer-Science.Computer-Architecture.Single-Instruction-Multiple-Data-Architecture
  - Computer-Science.Programming.Call-by-Value-and-Call-by-Reference
  - Computer-Science.Security.Public-Key-Cryptography
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2018年8月実施 筆記試験 第3問

## **Author**
[tomfluff](https://github.com/tomfluff), [itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**
Select **four items** out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines of text. If necessary, use examples or figures.

1. **Inverse kinematics**
2. **Hidden Markov model**
3. **MinMax algorithm**
4. **NP complete problem**
5. **Ray tracing**
6. **SIMD (Single Instruction Multiple Data)**
7. **Call by value and call by reference**
8. **Public-key cryptography**

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。

1. 逆运动学。
2. 隐马尔可夫模型。
3. Minimax 算法。
4. NP 完全问题。
5. 光线追踪。
6. SIMD（单指令多数据）。
7. 值调用与引用调用。
8. 公钥密码。

## **Kai**
**Inverse kinematics**

Inverse kinematics uses kinematic equations to determine the joint variables of a robot that reach a desired end-effector pose. If forward kinematics is $x=f(q)$, it solves $f(q)=x_d$ subject to joint constraints. Kinematics itself studies motion independently of its causes, such as forces and torques. Applications include picking items from an assembly line. A target may have no, one, or multiple solutions, and numerical Jacobian methods must handle singularities.

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

A decision problem is NP-complete iff it belongs to NP and every problem in NP has a polynomial-time many-one reduction to it. Thus a polynomial-time algorithm for one NP-complete problem would imply $P=NP$.

**SIMD (Single Instruction Multiple Data)**

SIMD is a technology for a processor to execute the same operation for multiple pieces of data via very wide vector registers (such as 128,256,512 bit registers) in a single thread. For example, SIMD can add 8 groups of float point numbers for two 256-bit vector registers together simultaneously. There are Intel’s SSE for 128-bit XMM registers, AVX and AVX-512 for 256/512-bit YMM/ZMM registers. In C or C++ we use intrinsics to call these instructions.
