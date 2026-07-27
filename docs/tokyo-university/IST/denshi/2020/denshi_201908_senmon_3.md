---
sidebar_label: 2019年8月実施 専門 第3問
tags:
  - Tokyo-University
  - Computer-Science.String-Algorithms.Minimum-Window-Substring
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2019年8月実施 専門 第3問

## **Author**
[adj-matrix](https://github.com/adj-matrix)

## **Description**

Let $A$ be an $N$-element array that contains each of the non-negative integers less than $M$ ($M \ge 2$) at least once. Among the subarrays of $A$, $A_i^j := A[i \dots j-1]$ ($0 \le i < j \le N$), that contain each of the non-negative integers less than $M$ at least once, you want to find the shortest one. If there are more than one such subarrays, you obtain the one with the largest start position. For example, given $N = 4$, $M = 2$, and $A = \langle 1, 1, 0, 1 \rangle$, you obtain $A_2^4 = \langle 0, 1 \rangle$. Answer the following questions.

(1) Consider an algorithm, FIND-SNIPPET, that checks for each subarray of $A$ whether it contains each of the non-negative integer less than $M$ at least once, and then returns the shortest subarray with the largest start position that satisfies the condition.

```text
FIND-SNIPPET(N, M, A):
    start = 0
    end = N
    for i = 0 to N - 1 do
        for j = i + 1 to N do
            +-------------------+
            |                   |
            |        (P)        |
            |                   |
            +-------------------+   
    return A_start^end
```

Fill in `(P)` to complete this pseudocode. Here, you must not exit from `for` loops using `break` statements. You can use a function `CONTAIN-INTEGERS(M, A, i, j)` that checks whether a subarray $A_i^j$ ($0 \le i < j \le N$) contains each of the non-negative integers less than $M$ at least once, and then returns the result as a truth value.

(2) Show the transition of values of `i`, `j`, $A_{start}^{end}$, `start`, and `end` when the algorithm in (1) is applied to $N = 4$, $M = 2$, and $A = \langle 1, 1, 0, 1 \rangle$.

Since FIND-SNIPPET considers all the subarrays of $A$, it requires the time complexity of $O(N^2)$ and becomes inefficient for large $N$.

(3) Improve FIND-SNIPPET so that it runs in $O(N)$ and show its pseudocode. Here, you can use CONTAIN-INTEGERS with the assumption that it runs in $O(1)$.

(4) Explain how to realize CONTAIN-INTEGERS that runs in $O(1)$ for the algorithm in (3).

### 题目描述

设长度为 $N$ 的数组 $A$ 至少各包含一次所有小于 $M$ 的非负整数，其中 $M\ge2$。对半开子数组

$$
A_i^j:=A[i\dots j-1]\qquad(0\le i<j\le N),
$$

希望在至少各包含一次 $0,1,\ldots,M-1$ 的子数组中找出最短者；若最短者不止一个，取起始位置最大的一个。例如 $N=4$、$M=2$、$A=\langle1,1,0,1\rangle$ 时，应得到 $A_2^4=\langle0,1\rangle$。

(1) 算法 `FIND-SNIPPET` 检查 $A$ 的每个子数组是否包含全部小于 $M$ 的非负整数，并返回满足条件、长度最短且起点最大的子数组。填写框中 `(P)`，且不得用 `break` 跳出 `for` 循环。可以调用 `CONTAIN-INTEGERS(M,A,i,j)`，该函数判断 $A_i^j$ 是否至少各包含一次 $0,\ldots,M-1$ 并返回布尔值。

```text
FIND-SNIPPET(N, M, A):
    start = 0
    end = N
    for i = 0 to N - 1 do
        for j = i + 1 to N do
            +-------------------+
            |                   |
            |        (P)        |
            |                   |
            +-------------------+
    return A_start^end
```

(2) 对 $N=4$、$M=2$、$A=\langle1,1,0,1\rangle$ 执行 (1) 的算法，按执行过程给出 `i`、`j`、$A_{start}^{end}$、`start`、`end` 的值如何变化。

上述算法枚举所有子数组，时间复杂度为 $O(N^2)$，当 $N$ 很大时效率不足。

(3) 改进 `FIND-SNIPPET`，使其在假定 `CONTAIN-INTEGERS` 为 $O(1)$ 的条件下以 $O(N)$ 时间运行，并写出伪代码。

(4) 说明如何为 (3) 的算法实现一个每次调用耗时 $O(1)$ 的 `CONTAIN-INTEGERS`。

#### 考点

- 最小覆盖窗口：要求维护同时覆盖 $0$ 至 $M-1$ 的滑动窗口，并按“最短、起点最大”的规则处理并列答案。
- 线性时间窗口计数：要求用每个整数的出现次数和窗口内不同值计数，使左右端移动及完整性判断均为常数时间。

## **Kai**
### (1)

**(P):**
```text
if (j - i) <= (end - start) and CONTAIN-INTEGERS(M, A, i, j) then
    start = i
    end = j
```

### (2)

$N = 4, M = 2, A = \langle 1, 1, 0, 1 \rangle$
| i | j | $A_{start}^{end}$ | start | end |
| :---: | :---: | :---: | :---: | :---: |
| 0 | 1 | <1 1 0 1> | 0 | 4 |
| 0 | 2 | <1 1 0 1> | 0 | 4 |
| 0 | 3 | <1 1 0> | 0 | 3 |
| 0 | 4 | <1 1 0> | 0 | 3 |
| 1 | 2 | <1 1 0> | 0 | 3 |
| 1 | 3 | <1 0> | 1 | 3 |
| 1 | 4 | <1 0> | 1 | 3 |
| 2 | 3 | <1 0> | 1 | 3 |
| 2 | 4 | <0 1> | 2 | 4 |
| 3 | 4 | <0 1> | 2 | 4 |

### (3)

```text
FIND-SNIPPET(N, M, A):
    start = 0
    end = N
    min_len = N + 1    // or infinite
    j = 0
    for i = 0 to N - 1 do
        while (j < N and not Contain-Integers(M, A, i, j)) do:
            j = j + 1

        if Contain-Integers(M, A, i, j) then:
            if j - i <= min_len then:
                min_len = j - i
                start = i
                end = j
    return A_start^end
```

### (4)

**Use distinct-count:**
- Maintain an array `count` of size $M$ and an integer `distinct_count`.
- When expanding right (increasing j, let `x = A[j]`), if `count[x] == 0`, increment `distinct_count`, increment `count[x]`.
- When shrinking left (increasing i,  let `y = A[i]`), decrement `count[y]`, if `count[y] == 0`, decrement `distinct_count`.

Check `contain-integers` return `distinct_count == M`.
