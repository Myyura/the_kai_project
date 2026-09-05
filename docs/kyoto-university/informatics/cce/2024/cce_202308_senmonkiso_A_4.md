---
sidebar_label: '2023年8月実施 専門基礎A [A-4]'
tags:
  - Kyoto-University
  - Computer-Science.Computer-Architecture.Number-Representation
  - Computer-Science.Computer-Architecture.IEEE-Standard-754-Floating-Point-Arithmetic
  - Computer-Science.Computer-Architecture.Pipelining
  - Computer-Science.Computer-Architecture.Branch-Prediction
  - Computer-Science.Computer-Architecture.Control-Hazard
---
# 京都大学 情報学研究科 通信情報システム専攻 2023年8月実施 専門基礎A \[A-4\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e), 祭音Myyura (assisted by ChatGPT 5.4 Thinking)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2023_cce.pdf)
Answer all the following questions.

### (1)

Consider an 8-bit binary floating-point format called FP8, which has the similar representation as IEEE 754 base-2 floating-point numbers. The bit fields of FP8 consist of, from MSB to LSB, a 1-bit sign bit, a 3-bit exponent using a biased representation of 3, and a 4-bit significand with implicit 1. The representation of infinity and denormalized numbers is also defined in the same way as IEEE 754. For example, if the sign bit is 0, the exponent is 7, and the significand is 0, it represents positive infinity. If the exponent is 0, it represents a denormalized number. In the following questions, the subscript in parentheses denotes the base of the number. Additionally, when rounding is necessary, use the round-to-nearest (ties to even) method.

(a) Express the number `00010110` represented in FP8 format in decimal.

(b) Provide the bit sequence in FP8 format that represents the number $-3.375_{(10)}$.

(c) Express the negative number closest to zero among the numbers representable by FP8, excluding negative zero, in decimal.

(d) Express the largest number among the numbers representable by FP8, excluding infinity, in decimal.

### (2)
Answer the following questions about pipelined processors.

(a) Explain what a control hazard is in pipeline processing.

(b) Consider the following three schemes for branch prediction of branch instructions.

**A:** A scheme that predicts that the branch will always be not taken.

**B:** A scheme that predicts that the branch will always be taken.

**C:** A scheme that predicts that whether the branch will be taken or not is the same as the result of the last time the branch instruction was executed. (It predicts that the branch will be not taken the first time the branch instruction is executed.)

In either scheme, assume that there is no penalty if the prediction is correct, one cycle is incurred as penalty if the branch is predicted to be not taken and it actually is taken, and three cycles are incurred if the branch is predicted to be taken and it actually is not taken.

Suppose that there is a branch controlling a loop, and this branch is taken $n$ consecutive times and then not taken once (where $n$ is a non-negative integer).

For each of the three schemes A, B, and C, express the penalty for branch prediction incurred when this loop is first executed in terms of $n$, and indicate which of the three schemes is superior in this case.

(c) Show a branch prediction scheme other than the three schemes shown in (b), describe its characteristics, and evaluate its penalty in the same loop as in (b). Assume that the penalty for branch prediction is the same as that was assumed for the three schemes A, B, and C in (b).

### 题目描述

回答全部问题。

1. 定义 8 位二进制浮点格式 FP8，其字段从最高位到最低位为：1 位符号、3 位偏置指数（偏置为 3）、4 位带隐含首位 1 的尾数。无穷与非规格化数按 IEEE 754 同样方式定义：例如符号为 0、指数为 7、尾数为 0 表示正无穷；指数为 0 表示非规格化数。需要舍入时采用就近舍入、正中时取偶数。
   1. 将 FP8 位串 `00010110` 的值写成十进制。
   2. 给出表示十进制 $-3.375$ 的 FP8 位串。
   3. 写出 FP8 中除负零外最接近零的负数的十进制值。
   4. 写出 FP8 中除无穷外最大可表示数的十进制值。
2. 关于流水线处理器：
   1. 说明什么是控制冒险。
   2. 比较三种分支预测：
      - A：总预测不采用；
      - B：总预测采用；
      - C：预测结果与该分支上次执行结果相同，首次预测不采用。

      预测正确无罚时；预测不采用而实际采用罚 1 周期；预测采用而实际不采用罚 3 周期。某循环控制分支连续采用 $n$ 次后不采用 1 次（$n\ge0$）。分别用 $n$ 表示该循环首次执行时 A、B、C 的总罚时，并判断哪种方案更优。
   3. 提出一种不同于 A、B、C 的分支预测方案，说明其特点，并在同一循环和罚时假设下评估其罚时。

## **Kai**
### (1)

For a normalized number (exponent $e \neq 0, 7$):

$$
V = (-1)^s \times (1.f)_2 \times 2^{(e-3)}
$$

For a denormalized number (exponent $e = 0$):

$$
V = (-1)^s \times (0.f)_2 \times 2^{(1-3)} = (-1)^s \times (0.f)_2 \times 2^{-2}
$$

Exponent $e = 7$ with fraction $0$ is infinity.

#### (a)
`0 | 001 | 0110`
*   Sign $s=0$.
*   Exponent $e=1 \Rightarrow e-3=-2$.
*   Fraction $f=0110 \Rightarrow (1.0110)_2 = 1 + 0.25 + 0.125 = 1.375$.

$$
V = 1.375 \times 2^{-2} = 0.34375
$$

**Answer:** 0.34375

#### (b)

$$
-3.375_{10} = - (11.011)_2 = - (1.1011)_2 \times 2^1 
$$

*   Sign $s=1$.
*   Unbiased exponent $= 1 \Rightarrow e = 1 + 3 = 4 \Rightarrow 100_2$.
*   Fraction $= 1011$.

**Answer:** `11001011`

#### (c) 
Smallest magnitude nonzero is denormal with minimal fraction: `1 | 000 | 0001`.

$$
(0.0001)_2 = 1/16
$$

$$
V = - \frac{1}{16} \times 2^{-2} = - \frac{1}{64} = -0.015625
$$

**Answer:** -0.015625

#### (d) 
Max finite uses largest normal exponent $e=6$ (`110`) and max fraction `1111`: `0 | 110 | 1111`.
*   Unbiased exponent $= 6-3 = 3$.
*   $(1.1111)_2 = 1 + 15/16 = 1.9375$.

$$
V = 1.9375 \times 2^3 = 15.5
$$

**Answer:** 15.5


### (2) 
#### (a) 
A control hazard occurs when the next program counter (next instruction address) is uncertain due to a control-flow instruction (e.g., branch/jump). The pipeline may fetch along the wrong path, and if the branch outcome differs, it must stall and/or flush incorrectly fetched instructions, causing a performance penalty.

#### (b) 

**Scheme A** (always not taken): first $n$ are taken $\rightarrow n$ mispredicts of type (N, T). Last is not taken $\rightarrow$ correct.

$$
P_A(n) = n
$$

**Scheme B** (always taken): first $n$ correct, last mispredict of type (T, N).

$$
P_B(n) = 3
$$

**Scheme C** (predict same as last time; first time predicts not taken):
*   If $n=0$: only one execution (not taken), predicted not taken $\rightarrow$ 0 penalty.
*   If $n \ge 1$: first taken mispredicted (1), last not-taken mispredicted as taken (3).
$$
P_C(n) = \begin{cases}
0 & (n=0) \\
4 & (n \ge 1)
\end{cases}
$$

**Best scheme:**
*   $n=0$: A or C (0 penalty).
*   $n=1, 2$: A (1 or 2 penalty).
*   $n=3$: A and B tie (3 penalty).
*   $n \ge 4$: B (3 penalty).

### (c) Two-bit saturating-counter prediction

Use a two-bit state $s\in\{0,1,2,3\}$, initially $s=0$. Predict not taken in states $0,1$ and taken in states $2,3$. After an actual taken branch, set $s\leftarrow\min(s+1,3)$; after an actual not-taken branch, set $s\leftarrow\max(s-1,0)$.

The extra state bit provides hysteresis: one contrary outcome does not change the prediction when the counter starts in a strongly biased state. For the first execution of the specified loop:

- If $n=0$, the only branch is correctly predicted not taken: penalty $0$.
- If $n=1$, the taken branch costs $1$ cycle and moves the state to $1$; the final not-taken branch is predicted correctly.
- If $n\geq2$, the first two taken branches each cost $1$ cycle. The prediction is then taken, so the final not-taken branch costs $3$ cycles.

Thus, with the explicitly specified initial state,

$$
P_{\mathrm{2bit}}(n)=
\begin{cases}
0,&n=0,\\
1,&n=1,\\
5,&n\geq2.
\end{cases}
$$
