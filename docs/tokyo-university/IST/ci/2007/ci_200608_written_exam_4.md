---
sidebar_label: '2006年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Explanation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2006年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を5～10行程度で説明せよ。必要に応じて例や図を用いてよい。

1) 標本化定理（サンプリング定理）
2) RISC 型と CISC 型プロセッサ
3) インターネット・トランスポート層プロトコルの TCP と UDP
4) ヒープソートのデータ構造（図で例を挙げて説明のこと）
5) 関数型プログラミング言語の特徴
6) 分枝限定法（例を用いて説明のこと）
7) 自然言語の形態素（具体例を挙げて説明のこと）
8) 同次座標系

## **Description (English)**
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

## **Kai**

**RISC and CISC processors**

RISC, i.e. reduced instruction set computer, is a type of processors keeping a minimal set of instruction. Complex operations here can be formed by smaller instructions. An example is RISC-V by UC Berkeley or ARM (Advanced RISC Machine) for Mac computers. Dominant architecture for embedded devices. 

CISC, i.e. **complex** instruction set computer processor uses a complex set of instructions to cover various operations. An example is Windows x86/x64.

**Branch-and-bound algorithm**

Branch-and-bound algorithm is a classic algorithm in Operation Research (Numerical Optimization), typically to solve an integer programming problem. It repeats, for example, in an integer programming problem:
1. Solving the relaxed problem (into real-valued), e.g. relaxing an IP into an LP;
2. Bounding: Find the lower and upper bounds of the current problem. Take a minimizing problem as an example, the lower bound is the optimal value for the relaxed problem and the upper bound can be any objective value in the original problem;
3. Branching, based on the solution, e.g. for a solution $(\tilde x_1,\tilde x_2,\dots)$ of the relaxation $\tilde A$ of $A$ with $x_1$ integer constraint, take (for example) $x_1$ as the branching variable, break the original IP $A$ into $A_1$ and $A_2$ where $A_1$ is $A$ plus a new constraint $x_1\le \lfloor \tilde x_1\rfloor$ and $A_2$ is $A$ plus $x_1\ge \lceil \tilde x_1\rceil$.
4. Repeat solving (e.g. relaxed $\tilde A_1,\tilde A_2$), bounding and branching and end a subtree when a lower bound is also feasible for the original problem.