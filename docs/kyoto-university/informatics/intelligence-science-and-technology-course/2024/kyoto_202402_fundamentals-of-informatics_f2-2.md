---
sidebar_label: '2024-02 F2-2'
tags:
  - Kyoto-University
  - Informatics
  - Intelligence-Science-and-Technology-Course
  - Fundamentals-of-Informatics
  - Algorithms-and-Data-Structures
  - String-Matching
---

# Kyoto University Graduate School of Informatics  
## Intelligence Science and Technology Course  
### 2024-02 Fundamentals of Informatics F2-2

## Problem transcription

### Q1
We represent an array `P` of length `m`, whose elements are alphabet characters. We call `P` a pattern. An element of `P` can be accessed by `P[i]`, where `1 <= i <= m` is an index. `P[s:t]` denotes a contiguous subarray of `P` starting from index `s` to `t` inclusively, where `1 <= s <= t <= m`. `Ph` denotes the `h`-character prefix `P[1:h]` of `P`, while `P0` is the empty string `ε` and `Pm = P = P[1:m]`.

The prefix function for a pattern `P` returns an array `π` of length `m`, such that each element with an index `1 <= q <= m` is computed by

```text
π[q] = max{k | k < q and Pk ⊒ Pq},
```

where `Pk ⊒ Pq` denotes that `Pk` is a suffix of `Pq`. That is, `π[q]` is the length of the longest prefix of `Pq` that is also a proper suffix of `Pq`. Note that a proper suffix cannot be the whole string.

1. Compute the results of the prefix function `π[1], π[2], ..., π[11]` for the pattern `aabaacaabaa`.
2. Algorithm 1 is a pseudo-code of an algorithm for computing the results of the prefix function `π` for a pattern `P`. Fill the blanks (a), (b), and (c).

Algorithm 1 `COMPUTE-PREFIX-FUNCTION(P)`:

```text
m = P.length
let π be a new array for keeping the results of the prefix function
π[1] = 0
k = 0
for q = 2 to m do
    while k > 0 and P[k + 1] ≠ P[q] do
        (a)
    end while
    if P[k + 1] = P[q] then
        (b)
    end if
    (c)
end for
return π
```

### Q2
We represent an array `T` of length `n` and an array `P` of length `m <= n`. The elements of both `T` and `P` are alphabet characters. We call `T` a text and `P` a pattern. We say that a pattern `P` occurs with a shift `s` in a text `T` if `0 <= s <= n - m` and `T[s + 1 : s + m] = P[1 : m]`.

The string-matching problem is the problem of finding all shifts with which a given pattern `P` occurs in a given text `T`.

Algorithm 2 is a pseudo-code of an algorithm for the string-matching problem utilizing the results of the prefix function computed with Algorithm 1. Fill the blanks (d), (e), and (f).

Algorithm 2 `STRING-MATCHING(T, P)`:

```text
n = T.length
m = P.length
π = COMPUTE-PREFIX-FUNCTION(P)
q = 0
for i = 1 to n do
    while q > 0 and P[q + 1] ≠ T[i] do
        (d)
    end while
    if P[q + 1] == T[i] then
        (e)
    end if
    if q == m then
        print "Pattern occurs with shift" i - m
        (f)
    end if
end for
```

3. Fill the blanks (d), (e), and (f).
4. Show the time complexity of Algorithm 2 with reasons.

## Solutions

### Q1

#### (1) Prefix values for `P = aabaacaabaa`
Let

```text
P = a a b a a c a a b a a
    1 2 3 4 5 6 7 8 9 10 11
```

The prefix-function values are

```text
π[1..11] = 0, 1, 0, 1, 2, 0, 1, 2, 3, 4, 5.
```

A compact table is:

| q | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
|---|---|---|---|---|---|---|---|---|---|----|----|
| P[q] | a | a | b | a | a | c | a | a | b | a | a |
| π[q] | 0 | 1 | 0 | 1 | 2 | 0 | 1 | 2 | 3 | 4 | 5 |

#### (2) Fill the blanks of Algorithm 1
This is the standard prefix-function procedure.

- (a)

```text
k = π[k]
```

- (b)

```text
k = k + 1
```

- (c)

```text
π[q] = k
```

### Q2

#### (3) Fill the blanks of Algorithm 2
This is the standard KMP string-matching algorithm.

- (d)

```text
q = π[q]
```

- (e)

```text
q = q + 1
```

- (f)

```text
q = π[q]
```

#### (4) Time complexity of Algorithm 2
Once the array `π` has already been computed, Algorithm 2 runs in

```text
O(n)
```

time.

Reason:

- The outer `for` loop runs `n` times.
- Inside the loop, `q` can increase by at most `1` in each iteration.
- Every time the `while` loop executes, `q` is replaced by `π[q]`, which is strictly smaller than `q`.
- Therefore the total number of decreases of `q` over the whole execution is at most the total number of increases of `q`, which is `O(n)`.

Hence the total running time of Algorithm 2 is linear in the text length.

If the preprocessing step `COMPUTE-PREFIX-FUNCTION(P)` is also included, then the total time becomes

```text
O(m + n).
```
