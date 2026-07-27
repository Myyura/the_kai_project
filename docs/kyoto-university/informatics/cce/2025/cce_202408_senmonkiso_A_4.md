---
sidebar_label: '2024年8月実施 専門基礎A [A-4]'
tags:
  - Kyoto-University
  - Computer-Science.Computer-Architecture.Number-Representation
  - Computer-Science.Computer-Architecture.Branch-Prediction
  - Computer-Science.Computer-Architecture.Control-Hazard
---
# 京都大学 情報学研究科 通信情報システム専攻 2024年8月実施 専門基礎A \[A-4\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e), 祭音Myyura (assisted by ChatGPT 5.4 Thinking)

## **Description**
# English text in the image

Answer all the following questions.

### (1)

Answer the following questions on the number representation on a computer.

(a) Give the decimal representations of the maximum number and the minimum number that can be represented by the 5-bit two’s complement binary number system.

(b) Show the results of the following additions in the 5-bit two’s complement binary number system. If the result overflows the range of the system, just write “Overflow”.

1. `01001 + 01101`
2. `11110 + 11001`

(c) When the 4 Byte data `ABCD1234` represented by hexadecimal numbers are stored in the memory system based on the byte order of the little-endian method, show the order of each byte data in the memory.

### (2)

Consider the case of executing a part of a C language program (Code segment) shown in Fig. 1, on a processor with a branch prediction mechanism. In this question, when a branch is taken, the body of “for” statement or “if” statement (code enclosed in `{}`) is executed. Arrays `A` and `B` are declared with sufficient size, and each element is initialized with random integers. Also, during code execution, no exceptions or interrupts occur, and loop optimization is not performed.

#### Fig. 1 Code segment

```c
int i;
for(i=0; i<N; i++){          /* L1 */
                             /* Taken path for L1 */
    if(i%7 == 0){            /* L2 */
        A[i] = B[i] + 1;     /* Taken path for L2 */
    }
    if(i%7 == 1){            /* L3 */
        A[i] = B[i] - 1;     /* Taken path for L3 */
    }
    if(i%7 > 4){             /* L4 */
        B[i] = B[i] * B[i];  /* Taken path for L4 */
    }
}
```

(a) Consider executing the Code segment shown in Fig. 1 on a processor that adopts a dynamic branch predictor that predicts “whether a branch will be taken is the same as the result when the branch was last executed (it predicts not taken when the branch is executed for the first time)”. The branch histories of L1, L2, L3, and L4 are managed individually. Assuming that N is sufficiently large and can be considered infinite, calculate the branch prediction accuracy of L3 and L4, respectively.

(b) Consider executing the Code segment shown in Fig. 1 on a processor that adopts a 2-bit branch predictor. The 2-bit branch predictor uses a counter that follows the state transition diagram shown in Fig. 2 based on the branch result, remembers the branch history, and predicts “not taken” for states `00` and `01`, and “taken” for states `10` and `11`. Counters for managing the branch histories of L1, L2, L3, and L4 are prepared individually and the branch histories are managed individually. Also, the initial state of the 2-bit branch predictor is all `00`. Assuming that N is sufficiently large and can be considered infinite, calculate the branch prediction accuracy of L3 and L4, respectively.

(c) In the case of previous question (b), if the branch histories of L2, L3, and L4 are managed with one counter without distinction (for example, when predicting the branch of L3 at i=M, the branch history of L2 at i=M and L4 at i=M-1 is used), calculate the branch prediction accuracy of L2, L3, and L4, respectively. Note that the initial state of the 2-bit branch predictor is `00`.

### 题目描述

回答全部问题。

1. 关于计算机数值表示：
   1. 给出 5 位补码能表示的最大值与最小值的十进制表示。
   2. 在 5 位补码体系中计算；若溢出只写“Overflow”：
      1. `01001 + 01101`
      2. `11110 + 11001`
   3. 十六进制 4 字节数据 `ABCD1234` 以小端字节序存入内存时，写出各字节在内存中的排列顺序。
2. 在带分支预测的处理器上执行以下 C 代码。分支“采用”表示执行相应 `for` 或 `if` 的 `{}` 内代码；数组足够大且元素为随机整数，执行中无异常或中断，也不进行循环优化。

   ```c
   int i;
   for(i=0; i<N; i++){          /* L1 */
       if(i%7 == 0){            /* L2 */
           A[i] = B[i] + 1;
       }
       if(i%7 == 1){            /* L3 */
           A[i] = B[i] - 1;
       }
       if(i%7 > 4){             /* L4 */
           B[i] = B[i] * B[i];
       }
   }
   ```

   1. 采用一位动态预测器：预测本次结果与该分支上次执行结果相同，首次预测不采用；L1–L4 的历史分别管理。假设 $N$ 足够大可视为无穷，分别求 L3、L4 的预测准确率。
   2. 采用图 2 所示状态转移的二位计数器预测器，状态 `00`,`01` 预测不采用，`10`,`11` 预测采用；L1–L4 各有独立计数器，初态均为 `00`。在同样假设下分别求 L3、L4 的预测准确率。
   3. 在第 2 小问的二位预测器中，若 L2、L3、L4 不区分而共用一个历史计数器（例如预测 $i=M$ 的 L3 时，已包含同一轮 L2 和上一轮 L4 的结果），初态为 `00`，分别求 L2、L3、L4 的预测准确率。

#### 考点

- **补码范围、运算与溢出**：根据位宽确定有符号范围，并按同号相加的符号变化判断溢出。
- **小端字节序**：按最低有效字节存放在最低地址的规则排列多字节数据。
- **一位与二位分支预测**：从各条件随 $i\bmod7$ 的周期结果序列计算稳态预测命中率。
- **分支历史别名**：分析多个静态分支共用同一饱和计数器时，分支结果交织对预测状态与准确率的影响。

## **Kai**
### (1)
#### (a) Range of 5-bit Two's Complement
*   **Maximum number**: $2^{5-1} - 1 = 15$
*   **Minimum number**: $-2^{5-1} = -16$

#### (b) 5-bit Two's Complement Arithmetic
*   **(i)** Overflow (Cannot represent result in 5 bits)
*   **(ii)**
    *   $(11110)_2 = -2_{10}$
    *   $(11001)_2 = -7_{10}$
    *   $11110 + 11001 = 10111$ (Result is $-9$, correct)

#### (c) Hexadecimal Representation

`34 12 CD AB`

### (2)
Use **T** for Taken, **N** for Not Taken.

#### (a) Branch Prediction (1-bit Predictor)

**For L3:**

<div align="center">
<table style="width: 60%; text-align: center;">
  <thead>
    <tr>
      <th>i</th>
      <th>Prediction</th>
      <th>Reality</th>
      <th>Right/Wrong</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>0</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>1</td><td>N</td><td>T</td><td>W</td></tr>
    <tr><td>2</td><td>T</td><td>N</td><td>W</td></tr>
    <tr><td>3</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>4</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>5</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>6</td><td>N</td><td>N</td><td>R</td></tr>
  </tbody>
</table>
</div>

**Accuracy: 5/7**

**For L4:**

<div align="center">
<table style="width: 60%; text-align: center;">
  <thead>
    <tr>
      <th>i</th>
      <th>Prediction</th>
      <th>Reality</th>
      <th>Right/Wrong</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>0</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>1</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>2</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>3</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>4</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>5</td><td>N</td><td>T</td><td>W</td></tr>
    <tr><td>6</td><td>T</td><td>T</td><td>R</td></tr>
    <tr><td>7</td><td>T</td><td>N</td><td>W</td></tr>
    <tr><td>8</td><td>N</td><td>N</td><td>R</td></tr>
  </tbody>
</table>
</div>

**Accuracy: 5/7**

#### (b) Branch Prediction (2-bit Predictor)

**For L3:**

| i | i mod 7 | State | Prediction | Actual | Next State | Right/Wrong |
|---|---|---|---|---|---|---|
| 0 | 0 | 00 | N | N | 00 | R |
| 1 | 1 | 00 | N | T | 01 | W |
| 2 | 2 | 01 | N | N | 00 | R |
| 3 | 3 | 00 | N | N | 00 | R |
| 4 | 4 | 00 | N | N | 00 | R |
| 5 | 5 | 00 | N | N | 00 | R |
| 6 | 6 | 00 | N | N | 00 | R |
| 7 | 0 | 00 | N | N | 00 | R |
| 8 | 1 | 00 | N | T | 01 | W |
| 9 | 2 | 01 | N | N | 00 | R |
| 10 | 3 | 00 | N | N | 00 | R |
| 11 | 4 | 00 | N | N | 00 | R |
| 12 | 5 | 00 | N | N | 00 | R |
| 13 | 6 | 00 | N | N | 00 | R |

**Accuracy: 6/7**

**For L4:**

| i | i mod 7 | State | Prediction | Actual | Next State | Right/Wrong |
|---|---|---|---|---|---|---|
| 0 | 0 | 00 | N | N | 00 | R |
| 1 | 1 | 00 | N | N | 00 | R |
| 2 | 2 | 00 | N | N | 00 | R |
| 3 | 3 | 00 | N | N | 00 | R |
| 4 | 4 | 00 | N | N | 00 | R |
| 5 | 5 | 00 | N | T | 01 | W |
| 6 | 6 | 01 | N | T | 10 | W |
| 7 | 0 | 10 | T | N | 01 | W |
| 8 | 1 | 01 | N | N | 00 | R |
| 9 | 2 | 00 | N | N | 00 | R |
| 10 | 3 | 00 | N | N | 00 | R |
| 11 | 4 | 00 | N | N | 00 | R |
| 12 | 5 | 00 | N | T | 01 | W |
| 13 | 6 | 01 | N | T | 10 | W |

**Accuracy: 4/7**

#### (c) Branch Prediction (Detailed Trace)

<div align="center">
<table style="width: 90%; text-align: center;">
  <thead>
    <tr>
      <th>i</th>
      <th>Branch</th>
      <th>State</th>
      <th>Prediction</th>
      <th>Reality</th>
      <th>Right/Wrong</th>
    </tr>
  </thead>
  <tbody>
    <!-- i=0 -->
    <tr>
      <td rowspan="3">0</td>
      <td>L2</td><td>00</td><td>N</td><td>T</td><td>W</td>
    </tr>
    <tr><td>L3</td><td>01</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>L4</td><td>00</td><td>N</td><td>N</td><td>R</td></tr>
    <!-- i=1 -->
    <tr>
      <td rowspan="3">1</td>
      <td>L2</td><td>00</td><td>N</td><td>N</td><td>R</td>
    </tr>
    <tr><td>L3</td><td>00</td><td>N</td><td>T</td><td>W</td></tr>
    <tr><td>L4</td><td>01</td><td>N</td><td>N</td><td>R</td></tr>
    <!-- i=2 -->
    <tr>
      <td rowspan="3">2</td>
      <td>L2</td><td>00</td><td>N</td><td>N</td><td>R</td>
    </tr>
    <tr><td>L3</td><td>00</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>L4</td><td>00</td><td>N</td><td>N</td><td>R</td></tr>
    <!-- i=3, 4 -->
    <tr><td colspan="6"><strong>i = 3: Same as i = 2</strong></td></tr>
    <tr><td colspan="6"><strong>i = 4: Same as i = 2</strong></td></tr>
    <!-- i=5 -->
    <tr>
      <td rowspan="3">5</td>
      <td>L2</td><td>00</td><td>N</td><td>N</td><td>R</td>
    </tr>
    <tr><td>L3</td><td>00</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>L4</td><td>00</td><td>N</td><td>T</td><td>W</td></tr>
    <!-- i=6 -->
    <tr>
      <td rowspan="3">6</td>
      <td>L2</td><td>01</td><td>N</td><td>N</td><td>R</td>
    </tr>
    <tr><td>L3</td><td>00</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>L4</td><td>00</td><td>N</td><td>T</td><td>W</td></tr>
    <!-- i=7 -->
    <tr>
      <td rowspan="3">7</td>
      <td>L2</td><td>01</td><td>N</td><td>T</td><td>W</td>
    </tr>
    <tr><td>L3</td><td>10</td><td>T</td><td>N</td><td>W</td></tr>
    <tr><td>L4</td><td>01</td><td>N</td><td>N</td><td>R</td></tr>
    <!-- i=8 -->
    <tr>
      <td rowspan="3">8</td>
      <td>L2</td><td>00</td><td>N</td><td>N</td><td>R</td>
    </tr>
    <tr><td>L3</td><td>00</td><td>N</td><td>T</td><td>W</td></tr>
    <tr><td>L4</td><td>01</td><td>N</td><td>N</td><td>R</td></tr>
    <!-- i=9 -->
    <tr>
      <td rowspan="3">9</td>
      <td>L2</td><td>00</td><td>N</td><td>N</td><td>R</td>
    </tr>
    <tr><td>L3</td><td>00</td><td>N</td><td>N</td><td>R</td></tr>
    <tr><td>L4</td><td>00</td><td>N</td><td>N</td><td>R</td></tr>
  </tbody>
</table>
</div>

**Accuracy Summary:**
*   **L2:** 6/7
*   **L3:** 5/7
*   **L4:** 5/7
