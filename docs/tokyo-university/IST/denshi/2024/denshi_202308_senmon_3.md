---
sidebar_label: "2023年8月実施 専門 第3問"
tags:
  - Tokyo-University
  - Algorithm
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2023年8月実施 専門 第3問

## **Author**
[adj-matrix](https://github.com/adj-matrix)

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

## **Kai**

**Solution**

**(1)**
| i | sumV | maxV |
| :--- | :--- | :--- |
| 1 | 2 | -2 |
| 2 | -2 | 2 |
| 3 | 6 | 2 |
| 4 | 6 | 6 |
| 5 | 5 | 6 |
| 6 | -2 | 6 |
| 7 | -2 | 6 |

Time Complexity: $O(k(n-k))$ or $O(kn-k^2)$, which simplifies to $O(nk)$.
Reason: Outerloop $n-k$, inner loop $k$

**(2)**
`(P): sumV = sumV + A[i+k-1] - A[i-1]`

**(3) MSS2 (A, n):**
```text
sumV = A[0]
maxV = sumV
for i=1 to n-1 do
  sumV = max(sumV + A[i], A[i])
  maxV = max(sumV, maxV)
return maxV
```
According to the question, Subarray: `< 3, -2, 5, 3 >`

**(4) MSS3 (A, n, k):**
```text
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

**(5)**
replace `B = B + A[j]` (line 3) with `B = B + A[j] - L`
and replace `sumV = max(sumV + A[i], B)` (line 8) with `sumV = max(sumV + A[i] - L, B)`
and replace `return maxV` (line 10) with `return maxV >= 0`
