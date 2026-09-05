---
sidebar_label: '2025年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Merge-Sort
  - Computer-Science.Programming.Garbage-Collection
  - Data-Science-Artificial-Intelligence.Machine-Learning.Transformer
  - Computer-Science.Operating-Systems.Virtual-Memory
  - Computer-Science.Computer-Architecture.Program-Counter
  - Computer-Science.Computer-Architecture.Floating-Point-Rounding-Error
  - Electrical-Electronic.Control-Theory.Brushless-Motor
  - Probability-Statistics.Computational-Statistics.Monte-Carlo-Integration
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2025年8月実施 筆記試験 第3問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**

[Official examination paper](https://www.i.u-tokyo.ac.jp/edu/course/ci/2026/2025-8-exam.pdf)

Select **four items** out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines. If necessary, use examples, figures or equations.

1. Merge sort
2. Garbage collection
3. Program counter
4. Rounding error in floating-point arithmetic
5. Transformer in machine learning
6. Monte Carlo integration
7. Brushless DC motor
8. Virtual memory

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例、图或公式。

1. 归并排序。
2. 垃圾回收。
3. 程序计数器。
4. 浮点运算中的舍入误差。
5. 机器学习中的 Transformer。
6. 蒙特卡洛积分。
7. 无刷直流电机。
8. 虚拟内存。

## **Kai** (By GPT 5.2 thinking)
### 1) Merge sort

* A **divide-and-conquer** sorting algorithm: split the list into two halves until size 1, then merge back in sorted order.
* The merge step is linear: repeatedly pick the smaller head element from the two sorted halves.
* Time complexity is $O(n\log n)$ in best/average/worst cases.
* Recurrence: $T(n)=2T(n/2)+O(n)\Rightarrow O(n\log n)$.
* Usually needs $O(n)$ extra memory for arrays (can be lower for linked lists).
* **Stable when ties are taken from the left half first**: equal keys keep original relative order—useful for multi-key sorting.

---

### 2) Garbage collection

* **Automatic memory management**: reclaims unreachable heap objects, reducing manual deallocation errors. Objects kept reachable by unnecessary references cannot be reclaimed.
* Key concept: **reachability**—objects reachable from **roots** (stack variables, globals, registers) are “live”.
* **Mark–sweep**: (1) mark reachable objects, (2) sweep heap and reclaim unmarked ones.
* **Generational GC**: most objects die young → collect “young generation” frequently, “old” less often.
* Tradeoffs: runtime overhead and possible pauses (mitigated by incremental/concurrent collectors).
* Example: Java/C# typically GC.

---

### 3) Program counter (PC)

* A CPU register holding the **address of the next instruction** to fetch/execute (also called instruction pointer).
* Basic cycle: **fetch** instruction at PC → **decode/execute** → update PC.
* Normally PC increments by instruction length; **branches/jumps/calls/returns** overwrite PC with target address.
* Example: `if (x==0) goto L;` may set PC to label `L` when condition is true.
* PC is central to control flow; interrupts/exceptions save PC so execution can resume afterward.
* On x86 it’s `RIP`; on ARM it’s `PC` (with architecture-specific behavior).

---

### 4) Rounding error in floating point numbers

* Floating-point numbers have limited bits, so many values (e.g., 0.1) can’t be represented exactly and are stored as the nearest representable value.
* Each arithmetic operation is rounded: **fl(op) = exact(op)·(1+δ)** with $|δ|\le u$ (unit roundoff), for correctly rounded operations in round-to-nearest mode when underflow and overflow are excluded. This causes small discrepancies like **0.1 + 0.2 = 0.30000000000000004**.
* Subtracting nearly equal numbers can lose most significant digits (**catastrophic cancellation**).
Adding a tiny number to a huge number may do nothing (**absorption**), e.g. $10^{16}+1=10^{16}$ in double. Over many steps, these rounding errors can accumulate and distort results.

---

### 5) Transformer

* A neural network architecture built around **self-attention**, enabling each token to “look at” other tokens directly.
* Core equation (single head):
  
$$
\text{Attn}(Q,K,V)=\text{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
$$

* Position encodings or relative-position information distinguish token order; attention alone is permutation equivariant.
* Uses **multi-head attention** so different heads learn different relations (syntax, long-range dependency, etc.).
* Stacks blocks: attention + **feed-forward network**, with **residual connections** and **layer normalization**.
* Highly parallelizable vs RNNs, but attention cost is often $O(n^2)$ in sequence length $n$.
* Example: in translation, a pronoun can attend to its antecedent far earlier in the sentence.

---

### 6) Monte Carlo integration

* Approximates an integral using random sampling—especially useful in high dimensions where grids are infeasible.
* For $I=\int_a^b f(x)\,dx$, sample independently $x_i\sim U(a,b)$:

$$
  \hat I=(b-a)\frac{1}{N}\sum_{i=1}^N f(x_i)
$$

* If $f(X)$ has finite variance, the standard error decreases like $O(1/\sqrt{N})$ regardless of dimension (slow but dimension-robust).
* Variance matters: high-variance $f$ needs many samples; use **importance sampling** to reduce variance.
* Example: estimating area under a curve by “throwing darts” uniformly and averaging function values.
* Widely used in graphics (path tracing), finance (option pricing), Bayesian inference.

---

### 7) Brushless motor (BLDC)

* A **brushless DC motor** uses electronic commutation instead of mechanical brushes, improving efficiency and lifespan.
* Rotor has permanent magnets; stator coils are driven in phases to create a rotating magnetic field.
* Needs a **controller/inverter** (power electronics + control logic) to switch phases based on rotor position.
* Rotor position sensing can use **Hall sensors** or **sensorless** back-EMF estimation.
* Common in drones, HDD spindles, fans, EV traction—quiet, high power density, precise speed control.
* Control often uses PWM and sometimes **FOC (field-oriented control)** for smoother torque.

---

### 8) Virtual memory

* Gives each process a large **virtual address space** that is mapped to physical RAM via **page tables**.
* Memory is split into **pages** (e.g., 4 KiB); only active pages must be resident in RAM.
* Access to a non-resident page triggers a **page fault**; the OS may load it from swap or a mapped file, or supply a zero-filled page. Invalid or forbidden accesses can instead terminate the process; copy-on-write faults may allocate a private copy.
* A **TLB** caches recent virtual→physical translations to avoid slow page-table walks.
* Benefits: process isolation/security, simpler allocation, and ability to run programs larger than RAM.
* Typical layout: `[code | heap → ... ... ← stack | shared libs]` (conceptually).
