---
sidebar_label: "2024年8月実施 専門基礎A [A-4]"
tags:
  - Kyoto-University
  - Computer-Architecture
  - Number-Representation
  - Branch-Prediction
  - Control-Hazards
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
