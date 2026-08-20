---
sidebar_label: 2023年8月実施 専門 第3問
tags:
  - Tokyo-University
  - Computer-Science.Dynamic-Programming.Maximum-Subarray-Sum
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2023年8月実施 専門 第3問

## **Author**
[adj-matrix](https://github.com/adj-matrix), 祭音Myyura

## **Description**

Let $A$ be an array of length $n$ ($n \ge 1$) and the elements of this array be integers. The maximum element sum of possible continuous subarrays in a given array is called the maximum subsequence sum. Consider the algorithm MSS1 that finds the maximum subsequence sum of possible subarrays with length $k$ ($1 \le k \le n$) in the array $A$. The array indices are assumed to start from $0$.

```text
MSS1(A, n, k):
  sumV = 0
  for j = 0 to k-1 do
    sumV = sumV + A[j]
  maxV = sumV
  for i = 1 to n-k do
   +-----------------------+
   |sumV = 0               |
   |for j = i to i+k-1 do  |  (P)
   |  sumV = sumV + A[j]   |
   +-----------------------+
    maxV = max(sumV, maxV)
  return maxV
```

Assume $A = \langle -1, 2, -3, 3, -2, 5, 3, -3, -2, 3 \rangle$.
Answer the following questions.

(1) Apply MSS1 with $n = 10$ and $k = 3$. During the execution of this algorithm, show the transition of the values of i, sumV, and maxV just before evaluating max(sumV, maxV). Also, describe the time complexity of this algorithm in the Big O notation.

(2) Modify the pseudo code in the box shown by (P) so that time complexity of MSS1 is $O(n)$.

(3) MSS2 is an algorithm that takes $A$ and $n$ and returns the maximum subsequence sum of possible subarrays <u>with length 1 or more</u> in the time complexity of $O(n)$. Design MSS2 based on MSS1 and write its pseudo code. You must not define any new arrays. Also, write down the subarray corresponding to the maximum subsequence sum.

(4) Write a pseudo code for MSS3 that takes $A$, $n$, and $k$ and returns the maximum subsequence sum of possible subarrays <u>with length $k$ or more</u> in the time complexity of $O(n)$. You may use newly defined two arrays $B$ and $C$ by the following code. Also, write down the subarray corresponding to the maximum subsequence sum when $k = 5$.

```text
B[0] = A[0]
C[0] = min(B[0], 0)
for i = 1 to n-1 do
  B[i] = B[i-1] + A[i]
  C[i] = min(B[i], C[i-1])
```

(5) Explain how to realize an algorithm to determine in the time complexity of $O(n)$ whether there exists a subsequence of length $k$ or more whose elements have mean value $L$ or more.

### 题目描述

设 $A$ 是长度为 $n$（$n\ge1$）的整数数组。数组所有连续子数组中最大的元素和称为最大子段和。算法 `MSS1` 求 $A$ 中所有长度恰为 $k$（$1\le k\le n$）的连续子数组的最大元素和，数组下标从 $0$ 开始。

```text
MSS1(A, n, k):
  sumV = 0
  for j = 0 to k-1 do
    sumV = sumV + A[j]
  maxV = sumV
  for i = 1 to n-k do
   +-----------------------+
   |sumV = 0               |
   |for j = i to i+k-1 do  |  (P)
   |  sumV = sumV + A[j]   |
   +-----------------------+
    maxV = max(sumV, maxV)
  return maxV
```

给定

$$
A=\langle-1,2,-3,3,-2,5,3,-3,-2,3\rangle,
$$

回答下列问题。

(1) 取 $n=10,k=3$ 执行 `MSS1`。列出每次计算 `max(sumV,maxV)` 之前 `i`、`sumV`、`maxV` 的变化，并用大 $O$ 记号说明算法的时间复杂度。

(2) 修改方框 (P) 内的伪代码，使 `MSS1` 的时间复杂度变为 $O(n)$。

(3) 设计算法 `MSS2(A,n)`，在 $O(n)$ 时间内返回 $A$ 的所有长度不小于 $1$ 的连续子数组中的最大子段和。应以 `MSS1` 为基础，不得定义新数组；还要写出给定 $A$ 中取得该最大和的子数组。

(4) 写出算法 `MSS3(A,n,k)` 的伪代码，使其在 $O(n)$ 时间内返回长度不小于 $k$ 的连续子数组的最大子段和。允许使用由下列代码定义的两个新数组 $B,C$；并写出 $k=5$ 时给定 $A$ 中取得最大和的子数组。

```text
B[0] = A[0]
C[0] = min(B[0], 0)
for i = 1 to n-1 do
  B[i] = B[i-1] + A[i]
  C[i] = min(B[i], C[i-1])
```

(5) 说明如何在 $O(n)$ 时间内判断：是否存在一个长度不小于 $k$、且元素平均值不小于 $L$ 的连续子数组。

## **Kai**
### (1)

| i | sumV | maxV |
| :--- | :--- | :--- |
| 1 | 2 | -2 |
| 2 | -2 | 2 |
| 3 | 6 | 2 |
| 4 | 6 | 6 |
| 5 | 5 | 6 |
| 6 | -2 | 6 |
| 7 | -2 | 6 |

Time Complexity: $O(k+(n-k)k)=O(k(n-k+1))$, hence $O(nk)$.

Reason: Outerloop $n-k$, inner loop $k$

### (2)

`(P): sumV = sumV + A[i+k-1] - A[i-1]`

### (3) 

```text
MSS2 (A, n):
  sumV = A[0]
  maxV = sumV
  for i=1 to n-1 do
    sumV = max(sumV + A[i], A[i])
    maxV = max(sumV, maxV)
  return maxV
```

According to the question, Subarray: `< 3, -2, 5, 3 >`

### (4)

```text
MSS3 (A, n, k):
  B = 0
  for j = 0 to k-1 do
    B = B + A[j]
  sumV = B
  maxV = sumV
  for i = k to n-1 do
    B = B + A[i] - A[i-k]
    sumV = max(sumV + A[i], B)
    maxV = max(sumV, maxV)
  return maxV
```

Instead of using arrays B and C, I implemented an optimized algorithm using sliding window and dynamic programming with O(1) space complexity.

Subarray: `< 2, -3, 3, -2, 5, 3 >`

### (5)
replace `B = B + A[j]` (line 3) with `B = B + A[j] - L`
and replace `sumV = max(sumV + A[i], B)` (line 8) with `sumV = max(sumV + A[i] - L, B)`
and replace `return maxV` (line 10) with `return maxV >= 0`
