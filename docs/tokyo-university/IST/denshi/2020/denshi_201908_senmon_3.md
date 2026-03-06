---
sidebar_label: "2019年8月実施 専門 第3問"
tags:
  - Tokyo-University
  - Data-Structure-And-Algorithms
  - Minimum-Window-Substring
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
