---
sidebar_label: '2023年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Computer-Science.Dynamic-Programming.Dynamic-Programming-Principle
  - Engineering.Robotics.Zero-Moment-Point
  - Computer-Science.Formal-Languages.Backus-Naur-Form
  - Computer-Science.Networks.Transparent-Web-Cache-in-Wide-Area-Networks
  - Engineering.Robotics.Autonomous-Vehicle-Dynamic-Map
  - Computer-Science.Computer-Architecture.Thread-Level-Speculative-Execution
  - Computer-Science.Graphics.Procedural-Modeling
  - Data-Science-Artificial-Intelligence.Machine-Learning.K-Nearest-Neighbors
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2023年8月実施 筆記試験 第3問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines. If necessary, use examples, figures or equations.

1. **Dynamic programming**
2. **Zero Moment Point (ZMP)**
3. **BNF (Backus-Naur Form or Backus Normal Form)**
4. **Transparent cache in wide area networks**
5. **Dynamic map in self-driving car system**
6. **Thread-level parallel speculative execution**
7. **Procedural modeling**
8. **k-nearest neighbor algorithm**

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例、图或公式。

1. 动态规划。
2. 零力矩点（ZMP）。
3. BNF（巴科斯范式）。
4. 广域网中的透明缓存。
5. 自动驾驶系统中的动态地图。
6. 线程级推测并行执行。
7. 程序化建模。
8. $k$ 近邻算法。

## **Kai**

**Dynamic Programming**

An algorithmic paradigm for problems with overlapping subproblems and optimal substructure. It stores each subproblem's result to avoid recomputation, using either memoized recursion or bottom-up tabulation. A solution specifies the state, base cases, transition, evaluation order, and how to recover the answer. Its complexity is usually the number of states times the transition cost.

**BNF (Backus–Naur Form)**

A notation for context-free grammars. A production has the form `nonterminal ::= expression`; alternatives use `|`, terminals are literal symbols, and nonterminals may be expanded recursively. For example, `<bit> ::= "0" | "1"` and `<bits> ::= <bit> | <bit><bits>` generate nonempty binary strings. BNF specifies syntax, not program meaning.

**Procedural modeling**

A technique that generates models from algorithms and parameters instead of storing every geometric element explicitly. Rules, grammars, noise functions, or recursive subdivision can create terrain, plants, roads, and buildings. Changing a seed or parameter efficiently produces many consistent variations. The procedure must control constraints, level of detail, and reproducibility.

**k-nearest neighbor algorithm**

A nonparametric algorithm that selects the $k$ training points nearest to a query under a chosen distance (often Euclidean). Classification uses their majority or distance-weighted vote; regression averages their targets. Feature scaling and the choice of $k$ control bias and variance. A KD-tree or ball tree can accelerate neighbor search in suitable dimensions.
