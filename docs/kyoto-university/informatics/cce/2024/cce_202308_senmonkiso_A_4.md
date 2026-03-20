---
sidebar_label: "2023年8月実施 専門基礎A [A-4]"
tags:
  - Kyoto-University
  - Computer-Architecture
  - Number-Representation
  - IEEE-754
  - Pipeline
  - Branch-Prediction
  - Control-Hazard
---
# 京都大学 情報学研究科 通信情報システム専攻 2023年8月実施 専門基礎A \[A-4\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e), 祭音Myyura (assisted by ChatGPT 5.4 Thinking)

## **Description**
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

### (c) Another prediction scheme + its penalty
**Example:** **BTFNT (Backward Taken, Forward Not Taken)**.

This is a **static branch prediction** scheme. It predicts a branch as **taken** if the branch target is at a lower address (a backward branch), and **not taken** if the branch target is at a higher address (a forward branch). Since a loop-closing branch is typically a **backward branch**, this scheme predicts the loop branch as **taken** every time.

Therefore, for a loop branch that is taken $n$ times and then not taken once:

- The first $n$ executions are predicted correctly.
- The final execution (loop exit) is mispredicted as taken, while it is actually not taken.

Thus, only one misprediction occurs, of type (**T**, **N**), whose penalty is 3 cycles.

$$
P_{\mathrm{BTFNT}}(n) = 3
$$

So, for this loop, BTFNT has the same penalty as scheme B (always taken).