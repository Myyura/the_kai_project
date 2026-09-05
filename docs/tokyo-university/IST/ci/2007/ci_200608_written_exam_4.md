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

出典：[大学公式問題冊子の保存版](https://web.archive.org/web/20151118065647id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2006_8_ci_istmajor_all.pdf)。

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

RISC (reduced instruction set computer) conventionally emphasizes simple instruction formats and a load/store organization: arithmetic mainly operates on registers, while separate instructions access memory. Complex operations may be expressed as sequences of simpler instructions. RISC-V and Arm are examples. The distinction concerns instruction-set design; it does not imply that every modern RISC ISA contains only a few instructions or that every instruction takes one clock cycle.

CISC, i.e. **complex** instruction set computer processor, uses a complex set of instructions to cover various operations. The x86/x86-64 instruction-set architecture is an example.

**Branch-and-bound algorithm**

Branch-and-bound algorithm is a classic algorithm in Operation Research (Numerical Optimization), typically to solve an integer programming problem. It repeats, for example, in an integer programming problem:
1. Solving the relaxed problem (into real-valued), e.g. relaxing an IP into an LP;
2. Bounding: Find the lower and upper bounds of the current problem. Take a minimizing problem as an example, the lower bound is the optimal value for the relaxed problem and the upper bound is the value of the best feasible integer solution found so far (the incumbent);
3. Branching, based on the solution, e.g. for a solution $(\tilde x_1,\tilde x_2,\dots)$ of the relaxation $\tilde A$ of $A$ with a nonintegral value $\tilde x_1$ for an integer-constrained variable, take $x_1$ as the branching variable, break the original IP $A$ into $A_1$ and $A_2$ where $A_1$ is $A$ plus a new constraint $x_1\le \lfloor \tilde x_1\rfloor$ and $A_2$ is $A$ plus $x_1\ge \lceil \tilde x_1\rceil$.
4. Repeat solving, bounding and branching. Prune a node if its relaxation is infeasible or its lower bound is no better than the incumbent; if the relaxation optimum is integral, update the incumbent and prune the node.

For example, minimize $x$ subject to $2x\ge3$ and $x\in\mathbb Z_{\ge0}$. The LP relaxation has optimum $x=1.5$, a lower bound of $1.5$. Branching gives $x\le1$, which is infeasible, and $x\ge2$, whose relaxation optimum $x=2$ is integral. Thus the incumbent becomes $2$, all nodes are closed, and the integer optimum is proved to be $2$.

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

Functions are first-class values and may be passed to or returned from higher-order functions. Pure functions and immutable data give referential transparency; recursion commonly replaces mutable loops. For example, the Python expression `list(map(lambda x: x*x, [1,2,3]))` applies one function independently to every element, producing `[1,4,9]`. Functional languages differ in whether they enforce purity; first-class functions alone do not exclude side effects.


**The sampling theorem**

If a continuous signal is bandlimited to $|f|\le B$, uniform samples at $f_s>2B$ determine it uniquely under the ideal sampling model. Writing $T_s=1/f_s$ and $\operatorname{sinc}u=\sin(\pi u)/(\pi u)$, reconstruction is

$$x(t)=\sum_{n\in\mathbb Z}x(nT_s)\operatorname{sinc}\!\left(\frac{t-nT_s}{T_s}\right).$$

Sampling replicates the spectrum at multiples of $f_s$; the inequality prevents overlap. Otherwise distinct frequencies can have the same samples, which is aliasing. For example, a $900$ Hz cosine sampled at $1000$ Hz has the same samples as a $100$ Hz cosine. An analog low-pass filter before sampling limits out-of-band components. The strict inequality avoids endpoint counterexamples such as a sine exactly at $f_s/2$ whose samples all vanish.

**TCP and UDP**

Both protocols use port numbers to distinguish application endpoints above IP. TCP establishes a connection and supplies a reliable, ordered byte stream through sequence numbers, acknowledgments and retransmission; it also supports flow and congestion control. TCP preserves byte order rather than application message boundaries, so an application must frame its own messages. UDP supplies individual datagrams and preserves their boundaries, but does not by itself ensure delivery, order or duplicate suppression. It has no connection establishment handshake and lets applications decide how to handle loss and timing. For example, a file-transfer application may use TCP, whereas a real-time media application may use UDP with its own recovery or loss-tolerance scheme. These services are specified by [RFC 9293](https://www.rfc-editor.org/rfc/rfc9293.html) and [RFC 768](https://www.rfc-editor.org/rfc/rfc768.html).

**Morpheme in natural languages**

A morpheme is a minimal unit carrying a lexical meaning or grammatical function. The English word `cats`, for example, contains the lexical morpheme `cat` and the plural morpheme `-s`. Likewise, `unhelpful` can be analyzed as `un-`, `help` and `-ful`. A morpheme that can occur alone is free, whereas an affix that must attach to another form is bound. A morpheme need not coincide with a syllable or a written character. Morphological analysis segments a sentence into such units and determines information such as part of speech and inflection, with context often needed to resolve ambiguity.

**Homogeneous coordinates**

A point $(x,y,z)$ in three-dimensional Euclidean space is represented by $(x,y,z,1)^{\mathsf T}$, or any nonzero scalar multiple of that vector. More generally, $(X,Y,Z,W)^{\mathsf T}$ with $W\ne0$ represents $(X/W,Y/W,Z/W)$. Translation and a linear transformation can then be combined into a single matrix:

$$
\begin{pmatrix}R&t\\0&1\end{pmatrix}
\begin{pmatrix}x\\y\\z\\1\end{pmatrix}
=\begin{pmatrix}R(x,y,z)^{\mathsf T}+t\\1\end{pmatrix}.
$$

Successive affine transformations are composed by matrix multiplication. Nonzero homogeneous vectors with $W=0$ represent points at infinity, which encode directions in projective space. Perspective projection is also represented by a homogeneous matrix, followed by division by the final coordinate. The all-zero vector represents no projective point.
