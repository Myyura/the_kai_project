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

[原題（日本語）](https://www.i.u-tokyo.ac.jp/edu/course/ci/2018-8-exam.pdf)
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

For a deterministic, alternating-turn, perfect-information, two-player zero-sum game, minimax assigns each terminal position its utility for MAX. Recursively, a MAX node takes the maximum of its children's values and a MIN node takes their minimum. The resulting root value is the best utility MAX can guarantee against optimal opposition; the maximizing root move is selected. With branching factor $b$ and depth $d$, exhaustive search takes $O(b^d)$ time. Generating successors as needed in depth-first order uses $O(bd)$ space, whereas storing the entire game tree would require exponential space. Alpha-beta pruning can skip branches that cannot change the result.

**NP complete problem**

Please refer to [CI 2013-4, (1)](https://runjp.com/docs/tokyo-university/IST/ci/2013/ci_201208_written_exam_4).

A decision problem is NP-complete iff it belongs to NP and every problem in NP has a polynomial-time many-one reduction to it. Thus a polynomial-time algorithm for one NP-complete problem would imply $P=NP$.

**Ray tracing**

Ray tracing computes visibility and image appearance by intersecting rays with scene geometry. A camera ray through a pixel finds the nearest visible surface, where the material and lighting determine its contribution. Shadow rays test visibility of lights, and secondary rays can model reflection and refraction. Acceleration structures such as bounding-volume hierarchies reduce intersection work. More general path tracing samples sequences of scattering events to estimate global illumination.

**SIMD (Single Instruction Multiple Data)**

SIMD applies one instruction to several data elements in parallel. Vector-register instructions are a common implementation: for example, one 256-bit vector addition can add eight pairs of 32-bit floating-point values. SSE, AVX, and AVX-512 provide examples of vector instruction sets. SIMD benefits regular data-parallel work such as image processing; dependent operations and irregular control flow limit the useful parallelism.

**Call by value and call by reference**

Call by value initializes a local parameter from the argument's value, so assigning to that parameter does not assign to the caller's variable. Call by reference makes the parameter an alias for the caller's object, so an assignment through a non-const reference changes that object. For example, in C++, `void f(int x) { ++x; }` leaves its argument unchanged, whereas `void g(int& x) { ++x; }` increments it. A pointer passed by value is still a copied pointer: modifying the pointed-to object is possible, but replacing the local pointer does not replace the caller's pointer.

**Public-key cryptography**

Public-key cryptography uses a mathematically related public/private key pair. In an encryption scheme, anyone with the recipient's public key can encrypt a message, while the private key permits decryption. In a signature scheme, the private key signs and the public key verifies authenticity and integrity; a signature does not itself hide the message. Security relies on the difficulty of recovering secrets or forging valid outputs. Certificates can bind public keys to identities, and hybrid encryption uses public-key techniques to establish a symmetric session key.
