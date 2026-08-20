---
sidebar_label: '2006年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Electrical-Electronic.Signal-Processing.Sampling-Theorem-and-Aliasing
  - Computer-Science.Computer-Architecture.Reduced-Instruction-Set-Computer-and-Complex-Instruction-Set-Computer-Architectures
  - Computer-Science.Networks.Transmission-Control-Protocol-and-User-Datagram-Protocol
  - Computer-Science.Algorithm-Design.Heap-Sort
  - Computer-Science.Programming.Functional-Programming-Language-Features
  - Operations-Research.Combinatorial-Optimization.Branch-and-Bound
  - Data-Science-Artificial-Intelligence.Artificial-Intelligence.Natural-Language-Morphology-and-Morphemes
  - Computer-Science.Graphics.Homogeneous-Coordinates
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2006年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**

### 日本語

以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を5～10行程度で説明せよ。必要に応じて例や図を用いてよい。

1) 標本化定理（サンプリング定理）
2) RISC 型と CISC 型プロセッサ
3) インターネット・トランスポート層プロトコルの TCP と UDP
4) ヒープソートのデータ構造（図で例を挙げて説明のこと）
5) 関数型プログラミング言語の特徴
6) 分枝限定法（例を用いて説明のこと）
7) 自然言語の形態素（具体例を挙げて説明のこと）
8) 同次座標系

### English
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately 5~10 lines of text.
If necessary, use examples or figures.

1) The sampling theorem
2) RISC and CISC processors
3) TCP and UDP as transport-layer protocols in the Internet
4) The data structure used for heap sort (Explain with an illustrative example.)
5) Features of functional programming languages
6) Branch-and-bound algorithm (Explain with an example.)
7) Morpheme in natural languages (Explain with examples.)
8) Homogeneous coordinate system

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 5～10 行说明；必要时可使用示例或图。

1. 采样定理。
2. RISC 型与 CISC 型处理器。
3. 互联网传输层协议 TCP 与 UDP。
4. 堆排序使用的数据结构，须配图举例说明。
5. 函数式编程语言的特点。
6. 分支定界法，须结合示例说明。
7. 自然语言中的语素，须举具体例子说明。
8. 齐次坐标系。

## **Kai**

**RISC and CISC processors**

RISC, i.e. reduced instruction set computer, is a type of processors keeping a minimal set of instructions. Complex operations here can be formed by smaller instructions. An example is RISC-V by UC Berkeley or ARM (Advanced RISC Machine) for Mac computers. It is a dominant architecture for embedded devices.

CISC, i.e. **complex** instruction set computer processor, uses a complex set of instructions to cover various operations. The x86/x86-64 instruction-set architecture is an example.

**Branch-and-bound algorithm**

Branch-and-bound algorithm is a classic algorithm in Operation Research (Numerical Optimization), typically to solve an integer programming problem. It repeats, for example, in an integer programming problem:
1. Solving the relaxed problem (into real-valued), e.g. relaxing an IP into an LP;
2. Bounding: Find the lower and upper bounds of the current problem. Take a minimizing problem as an example, the lower bound is the optimal value for the relaxed problem and the upper bound is the value of the best feasible integer solution found so far (the incumbent);
3. Branching, based on the solution, e.g. for a solution $(\tilde x_1,\tilde x_2,\dots)$ of the relaxation $\tilde A$ of $A$ with $x_1$ integer constraint, take (for example) $x_1$ as the branching variable, break the original IP $A$ into $A_1$ and $A_2$ where $A_1$ is $A$ plus a new constraint $x_1\le \lfloor \tilde x_1\rfloor$ and $A_2$ is $A$ plus $x_1\ge \lceil \tilde x_1\rceil$.
4. Repeat solving, bounding and branching. Prune a node if its relaxation is infeasible or its lower bound is no better than the incumbent; if the relaxation optimum is integral, update the incumbent and prune the node.

**Heap sort data structure**

Heap sort uses a complete binary max-heap, stored for example as the array $[9,7,5,2,3]$:

```text
    9
   / \
  7   5
 / \
2   3
```

Each parent is at least as large as its children. Build the heap in $O(n)$ time; repeatedly exchange the root with the last unsorted element and restore the heap in $O(\log n)$ time. Thus sorting takes $O(n\log n)$ time and $O(1)$ auxiliary array space.

**Features of functional programming languages**

Functions are first-class values and may be passed to or returned from higher-order functions. Pure functions and immutable data give referential transparency; recursion commonly replaces mutable loops. For example, `map (lambda x: x*x) [1,2,3]` applies one function independently to every element.
