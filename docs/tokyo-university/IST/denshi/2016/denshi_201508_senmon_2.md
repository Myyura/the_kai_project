---
sidebar_label: "2015年8月実施 専門 第2問"
tags:
  - Tokyo-University
  - Computer-Architecture
  - Pipelining
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2015年8月実施 専門 第2問

## **Author**
[adj-matrix](https://github.com/adj-matrix)

## **Description**

Answer the following questions.

(1) The following assembly code is a calculation part of a program which sequentially reads the elements of an array stored in the memory, obtains a sum of all elements, and stores the result in a designated memory address. In this code, `I1` to `I6` indicate labels, and `r1` to `r5` indicate registers. Assume that the values of register `r1`, `r2`, and `r5` are initialized to the number of elements in the array, the beginning address of the array, and the address for storing the result, respectively. Fill in the each boxed blank $\alpha$ to $\delta$ using an adequate register number or an immediate value.

```text
I1: LD   r3   0(r2)
I2: ADD  r4   r4   r3
I3: ADDi r2   r2   8
I4: ADDi r1   [ α ] [ β ]
I5: BNZ  [ γ ] I1:
I6: ST   [ δ ] 0(r5)
```

(2) Answer the relevant data dependency for the following instruction pairs (i) and (ii), respectively. Choose the correct answer from the following a, b, and c.

(i) instruction `I1` and instruction `I2`
(ii) instruction `I1` and instruction `I3`

a. Read After Write (Flow dependency)
b. Write After Read (Anti-dependency)
c. Write After Write (Output dependency)

(3) Consider a pipelined processor whose stage organization and processing times are given in the following table. Answer the operation frequency of this processor. Each stage is completed within a cycle. You can assume that margins such as for mitigating clock skew are already involved in the values in the table. Note that [ps] represents $10^{-12}$ seconds.

| Stage | Time |
| :--- | :--- |
| Fetch | 250 [ps] |
| Decode | 100 [ps] |
| Register read | 150 [ps] |
| Execute | 100 [ps] |
| Memory access | 300 [ps] |
| Register write | 150 [ps] |

(4) Consider that the code in (1) is executed with this pipelined processor. Here several instructions are expected to generate pipeline bubbles. Answer all of such instructions and the name of the relevant hazard type for each. Assume that the processor is single-issue and in-order. You can also assume the operand forwarding.

(5) Consider that the code in (1) is executed for an array of which number of elements is sufficiently large. Answer the cycles per instruction (CPI) of this processor for this execution. Assume that a fetch stage is stalled for three cycles to resolve the next instruction address when a branch instruction is fetched.

(6) Consider that a branch predictor which memorizes the last branch result associated with its program counter is introduced to this processor. Answer the instructions per second (IPS) of this processor for executing the code of (1) when the size of the array is sufficiently large.

## **Kai**
### (1)

$\alpha :$ `r1` $\qquad$ $\beta :$ `-1` $\qquad$ $\gamma :$ `r1` $\qquad$ $\delta :$ `r4`

### (2)

(i) a $\qquad$ (ii) b

### (3)

Since the minimum clock cycle time is determined by the stage with the longest latency.
Max Latency $= 300 \text{ ps}$ (Memory Access)
Therefore, Frequency $f = \frac{1}{300\text{ps}} = \frac{1}{300 \times 10^{-12}} \text{ Hz} \approx 3.33 \times 10^9 \text{ Hz}$

### (4)

The process could be:
```text
      1    2     3     4     5     6     7     8     9     10    11
I1    IF → ID →  Reg → Exe → Mem → WB
...        Stall                 ↘
I2               IF  → ID  → Reg → Exe → Mem → WB
I3                     IF  → ID  → Reg → Exe → Mem → WB
I4                           IF  → ID  → Reg → Exe → Mem → WB
I5                                 IF  → ID  → Reg → Exe → Mem → WB
...                                      Stall           \
...                                            Stall      \
...                                                  Stall ↓
I1 or I6                                                   IF→ ...
```
From the process, we could clearly get:
**Data (Load-use) Hazard** ($I_1 \rightarrow I_2$)
**Control Hazard** ($I_5 \rightarrow I_1 \text{ or } I_6$)

### (5)

According to (4), it is obvious to get every 5 instruction, need 9 total cycles.
i.e. $\text{CPI} = \frac{9}{5} = 1.8$

### (6)

Since predictor is used, the process in (4) will be revised to step into next IF in cycle 7.
i.e. every 5 instruction need 6 total cycles. i.e. $\text{CPI} = \frac{6}{5} = 1.2$
Since $\text{IPS} = \frac{\text{Instructions}}{\text{Time}} = \frac{1}{\text{CPI} \cdot \text{Cycle Time}} = \frac{1}{1.2 \cdot 300 \times 10^{-12}} = \frac{1}{3.6 \times 10^{-10}} = \frac{50}{18} \times 10^9$
i.e. $\text{IPS} \approx 2.78 \times 10^9 \text{ instruction/s}$
