---
comments: false
title: 京都大学 情報学研究科 通信情報システム専攻 2017年8月実施 専門基礎B [B-7]
tags:
  - Kyoto-University
  - Dynamic-Programming
  - Divide-And-Conquer
  - Maximum-Subarray-Problem
---
# 京都大学 情報学研究科 通信情報システム専攻 2017年8月実施 専門基礎B \[B-7\]

## **Author**
祭音Myyura

## **Description**
最大連続部分和問題とは、与えられた $n$ 個の整数 $a_1, a_2, \ldots, a_n$ に対し、最大の連続部分和を求める問題である。
すなわち、$a_s$ から $a_t$ までのすべての要素の和を

$$
S(s, t) = \sum_{i=s}^{t} a_i
$$

と記したとき、$S(s, t)$ が最大となるような整数 $s$ と $t$（ただし、$1 \leq s \leq t \leq n$）を求める問題である。
本設問では、すべての $s$ と $t \geq s$ に対して、部分和 $S(s, t)$ の絶対値が $C$ で抑えられる（すなわち、$|S(s, t)| \leq C$）と仮定する。
ただし、$C$ は $n$ に依存しない定数である。以下のすべての問に答えよ。

(1) 以下の表は $n = 11$ のときの入力の例である。
この例において $S(s, t)$ が最大となるような整数 $s$ と $t$（ただし、$1 \leq s \leq t \leq n$）を求めよ。

$$
\begin{array}{c|ccccccccccc}
i & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 \\
\hline
a_i & 9 & -11 & 31 & -23 & 21 & 27 & -12 & -11 & 29 & -5 & 3 \\
\end{array}
$$

(2) 任意の整数 $k \in \{2, 3, \ldots, n-1\}$ が与えられたとき、部分和 $S(s, t)$ が最大となるような $s \in \{1, 2, \ldots, k-1\}$ と $t \in \{k+1, k+2, \ldots, n\}$ を求める問題を考える。
この問題を $O(n)$ 時間で解くアルゴリズムを与えよ。

(3) 分割統治法及び (2) のアルゴリズムを用いて、最大連続部分和問題を $O(n \log n)$ 時間で解くアルゴリズムを与えよ。

(4) 任意の $i \in \{1, 2, \ldots, n\}$ に対し、$S(s, i)$ の最大値（ただし、$1 \leq s \leq i$）を $M_i$ と表す。任意の $i \in \{1, 2, \ldots, n-1\}$ に対し、

$$
M_{i+1} = \max(M_i + a_{i+1}, a_{i+1})
$$

が成立することを示せ。この関係式に基づき、最大連続部分和問題を $O(n)$ 時間で解くアルゴリズムを与えよ。

## **Kai**
### (1)

$$
s = 3, t = 9, S(3, 9) = 62
$$

### (2)
The idea is simple, find the maximum sum starting from mid point ($k$) and ending at some point on left of mid, 
then find the maximum sum starting from mid + 1 and ending with some point on right of mid + 1.
Finally, combine the two and return the maximum among left, right and combination of both.

```python
def max_crossing_sum(A, s, t, k):
    # 1. mid to left
    current_sum = 0
    max_left_sum = -10000
    for i in range(k, s - 1, -1):  # for i = k to s:
        current_sum += A[i]
        if current_sum > max_left_sum:
            max_left_sum = current_sum
    
    # 2. mid to right
    current_sum = 0
    max_right_sum = -10000
    for i in range(k, t + 1):  # for i = k to t:
        current_sum += A[i]
        if current_sum > max_right_sum:
            max_right_sum = current_sum
    
    return max(max_left_sum + max_right_sum - A[k], max_left_sum, max_right_sum)
```

Obviously, the time complexity

### (3)
The algorithm can be described as follows:

- Divide the given array in two halves
- Return the maximum of following three
    - Maximum subarray sum in left half (Make a recursive call)
    - Maximum subarray sum in right half (Make a recursive call)
    - Maximum subarray sum such that the subarray crosses the midpoint (Algorithm in (2))

```python
def max_subarray_sum(A, s, t):
    if s > t:
        return -10000
    
    if s == t:
        return A[s]
    
    k = (s + t) // 2
    return max(max_subarray_sum(A, s, k - 1),
               max_subarray_sum(A, k + 1, t),
               max_crossing_sum(A, s, t, k))
```

The time complexity $T(n)$ is

$$
\begin{aligned}
T(n) = 2T(n/2) + O(n) = O(n \log n)
\end{aligned}
$$

### (4)
$M_{i+1}$ represents the subarray with the largest sum ending at $i+1$.

The calculation of $M_{i+1}$ can be divided into two cases.

If the sum of maximum subarray ending at $i$ is negative, then is should be discarded and hence $M_{i+1} = a_{i+1}$.

If the sum of maximum subarray ending at $i$ is positive, then it should be included in the maximum subarray ending at $i+i$ and hence $M_{i+1} = M_{i} + a_{i+1}$.

Combining the two cases we have

$$
M_{i+1} = \max (M_i + a_{i+1}, a_{i+1})
$$

and the maixmum subarray sum $S(s,t)$ is

$$
S(s, t) = \max_{i} M_i
$$

The algorithm is described as follows:

```python
def max_subarray_sum(A, n):
    dp = [0] * n
    dp[0] = A[0]
    ans = dp[0]

    for i in range(1, n):
        dp[i] = max(A[i], A[i] + dp[i-1])
        ans = max(ans, dp[i])
    
    return ans
```

Obviously, the time complexity is $O(n)$
