---
sidebar_label: '2017年8月実施 専門基礎B [B-7]'
tags:
  - Kyoto-University
  - Computer-Science.Algorithm-Design.Divide-and-Conquer
  - Computer-Science.Dynamic-Programming.Maximum-Subarray-Sum
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

### 题目描述

最大连续子数组和问题：给定 $n$ 个整数 $a_1,\ldots,a_n$，记

$$
S(s,t)=\sum_{i=s}^t a_i,
$$

求使 $S(s,t)$ 最大的整数 $s,t$，其中 $1\le s\le t\le n$。假设对所有 $s\le t$，都有
$|S(s,t)|\le C$，其中常数 $C$ 与 $n$ 无关。回答：

1. 对 $n=11$ 及下表输入，求使 $S(s,t)$ 最大的 $s,t$：

   $$
   \begin{array}{c|rrrrrrrrrrr}
   i&1&2&3&4&5&6&7&8&9&10&11\\\hline
   a_i&9&-11&31&-23&21&27&-12&-11&29&-5&3
   \end{array}
   $$

2. 给定任意 $k\in\{2,\ldots,n-1\}$，给出 $O(n)$ 时间算法，求使 $S(s,t)$ 最大的
   $s\in\{1,\ldots,k-1\}$ 与
   $t\in\{k+1,\ldots,n\}$。
3. 利用分治法及第 2 问算法，给出 $O(n\log n)$ 时间的最大连续子数组和算法。
4. 对 $i=1,\ldots,n$，令
   $M_i=\max_{1\le s\le i}S(s,i)$。证明对 $i=1,\ldots,n-1$，

   $$
   M_{i+1}=\max(M_i+a_{i+1},a_{i+1}),
   $$

   并据此给出 $O(n)$ 时间的最大连续子数组和算法。

## **Kai**
### (1)

$$
s = 3, t = 9, S(3, 9) = 62
$$

### (2)
The idea is to find the maximum sum ending at $k-1$ and starting somewhere to its left, then the maximum sum starting at $k+1$ and ending somewhere to its right. Since

$$
S(s,t)=S(s,k-1)+a_k+S(k+1,t),
$$

the two endpoints can be optimized independently, and the fixed term $a_k$ is added afterward.

```python
def max_crossing_sum(A, n, k):       # A is indexed from 1
    current_sum = 0
    max_left_sum = -float("inf")
    for i in range(k - 1, 0, -1):
        current_sum += A[i]
        if current_sum > max_left_sum:
            max_left_sum = current_sum
            s = i

    current_sum = 0
    max_right_sum = -float("inf")
    for j in range(k + 1, n + 1):
        current_sum += A[j]
        if current_sum > max_right_sum:
            max_right_sum = current_sum
            t = j

    return s, t, max_left_sum + A[k] + max_right_sum
```

Both scans are linear, so the running time is $O(n)$.

### (3)
The algorithm can be described as follows:

- Divide the interval at an interior midpoint $k$.
- Recursively find the maximum subarray wholly in $[l,k-1]$ and wholly in $[k+1,r]$.
- Use the two scans from (2) to find a maximum suffix $S(s,k-1)$ and a maximum prefix $S(k+1,t)$.
- Return the best of the two recursive answers and the four possibilities containing $a_k$:

$$
(k,k),\quad(s,k),\quad(k,t),\quad(s,t).
$$

Here $(s,k)$ has sum $S(s,k-1)+a_k$, $(k,t)$ has sum $a_k+S(k+1,t)$, and $(s,t)$ has sum $S(s,k-1)+a_k+S(k+1,t)$. For an interval of length at most two, inspect all its subarrays directly.

```python
def max_subarray(A, l, r):
    if r - l + 1 <= 2:
        candidates = [(l, l, A[l])]
        if l < r:
            candidates += [(r, r, A[r]), (l, r, A[l] + A[r])]
        return max(candidates, key=lambda z: z[2])

    k = (l + r) // 2
    left_answer = max_subarray(A, l, k - 1)
    right_answer = max_subarray(A, k + 1, r)

    current_sum = 0
    left_sum = -float("inf")
    for i in range(k - 1, l - 1, -1):
        current_sum += A[i]
        if current_sum > left_sum:
            left_sum, s = current_sum, i

    current_sum = 0
    right_sum = -float("inf")
    for j in range(k + 1, r + 1):
        current_sum += A[j]
        if current_sum > right_sum:
            right_sum, t = current_sum, j

    candidates = [
        left_answer,
        right_answer,
        (k, k, A[k]),
        (s, k, left_sum + A[k]),
        (k, t, A[k] + right_sum),
        (s, t, left_sum + A[k] + right_sum),
    ]
    return max(candidates, key=lambda z: z[2])
```

Thus

$$
T(n)=T(\lfloor(n-1)/2\rfloor)+T(\lceil(n-1)/2\rceil)+O(n)
=O(n\log n).
$$

### (4)
$M_{i+1}$ is the largest sum of a subarray ending at $i+1$. Its calculation has two cases.

If the maximum sum $M_i$ of a subarray ending at $i$ is negative, retaining it can only decrease the sum, so the best subarray ending at $i+1$ starts at $i+1$ and has sum $a_{i+1}$. If $M_i$ is nonnegative, appending $a_{i+1}$ to a subarray attaining $M_i$ gives the maximum. Therefore

$$
M_{i+1} = \max (M_i + a_{i+1}, a_{i+1})
$$

Every nonempty subarray ends at some $i$, so the required maximum is $\max_i M_i$.

```python
def max_subarray_sum(A, n):          # A is indexed from 0
    dp = [0] * n
    start = [0] * n
    dp[0] = A[0]
    start[0] = 0
    best_sum = dp[0]
    best_s = best_t = 0

    for i in range(1, n):
        if A[i] > dp[i - 1] + A[i]:
            dp[i] = A[i]
            start[i] = i
        else:
            dp[i] = dp[i - 1] + A[i]
            start[i] = start[i - 1]

        if dp[i] > best_sum:
            best_sum = dp[i]
            best_s = start[i]
            best_t = i

    return best_s + 1, best_t + 1, best_sum  # endpoints use the problem's 1-based indexing
```

The loop is executed once for each element, so the running time is $O(n)$.
