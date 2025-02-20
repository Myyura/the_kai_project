---
comments: false
title: 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目I 問題3
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目I 問題3

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
In this problem, the length of a string $s$ is written $l(s)$, and the $i$-th character of $s$ is written $s[i]$, where the first character is $s[0]$. The string obtained by removing the first $i$ characters from $s$ is written $s + i$. We assume $0 \leq i < l(s)$ in $s[i]$ and $s + i$. For example, if $s = \text{PROBLEM}$, then $s[0] = \text{P}$ and $s + 3 = \text{BLEM}$. The set of characters consists of $N$ characters, where $N$ is an integer constant no less than 2, and for each character $c$ a distinct positive integer $\text{numval}(c) \leq N$ is defined. Suppose that the computation of $s + i$ for given $s$ and $i$, and that of $\text{numval}(c)$ for given $c$, take $O(1)$ time. Also suppose that each of integer addition, multiplication and remainder takes $O(1)$ time, and that overflow will never occur in integer operations.

We consider the following problem FIND: For given strings $p$ and $s$, find the first position $i$ at which $s$ matches $p$. In other words, $i$ is the least non-negative integer that satisfies

$$\forall j \in \{0, 1, \dots, l(p) - 1\}. \, s[i + j] = p[j].$$

In case there is no such $i$, we define $i = -1$. In the following, we assume $l(s) > l(p) > 0$.

For strings $r$ and $p$ with $0 < l(p) \leq l(r)$, let function $\text{eq}(r, p)$ return 1 if the first $l(p)$ characters of $r$ equal $p$, and return 0 otherwise. Suppose that the time complexity of $\text{eq}(r, p)$ is $O(l(p))$. The following algorithm $S$ solves the problem FIND:

```text
for (i = 0; i <= l(s) - l(p); i++)
  if (eq(s + i, p) == 1)
    return i;
return -1;
```

Answer the following questions.

(1) Express the order of the worst-case time complexity of algorithm $S$ in terms of $l(s)$ and $l(p)$.

In the following, the hash value $h(s, m)$ of the first $m$ characters of string $s$ is defined by

$$
h(s, m) = \left(\sum_{i=0}^{m-1} \text{numval}(s[i]) \cdot d^{m-i-1}\right) \mod q,
$$

where $d$ and $q$ are positive integer constants, and $0 < m \leq l(s)$ is assumed.

(2) Assume that $i < l(s) - m$ holds, and that $h' = h(s + i, m)$ and $d_m = d^{m-1}$ have been precomputed. Show an algorithm or an expression to compute $h(s + i + 1, m)$ in $O(1)$ time.

(3) Give an algorithm $H_0$ that finds the least non-negative integer $i$ that satisfies $h(p, l(p)) = h(s + i, l(p))$ (but answers $-1$ if no such $i$ exists) in time $O(l(s) + l(p))$. Also, answer in what condition the algorithm $H_0$ outputs a value which is **not** the solution of problem FIND.

(4) Give an algorithm $H$ that satisfies all of the following conditions: (a) it always answers the solution of problem FIND, (b) it searches for the answer by using hash $h(s, m)$ and function $\text{eq}(r, p)$, and ($c$) if we assume that the number of integers $i$ that satisfy $h(p, l(p)) = h(s + i, l(p))$ for given $s$ and $p$ is $O(1)$ independently of $s$ and $p$, then the algorithm $H$ runs in time $O(l(s) + l(p))$.
In addition, show in what condition the time complexity of the algorithm $H$ is larger than $O(l(s) + l(p))$. Also, answer the order of the worst-case time complexity of the algorithm $H$ in terms of $l(s)$ and $l(p)$.

## **Kai**
### (1)

Algorithm $S$ iterates over all possible starting positions in the string $s$ to check if the substring of $s$ starting at position $i$ matches the pattern $p$. For each starting position, the function `eq(s + i, p)` is called, which has a time complexity of $O(\ell(p))$.

Thus, the total time complexity of Algorithm $S$ is:

$$
O((\ell(s) - \ell(p) + 1) \cdot \ell(p)) = O(\ell(s) \cdot \ell(p))
$$

### (2)

To compute $h(s + i + 1, m)$ in $O(1)$ time, we can use the rolling hash technique:

$h(s + i + 1, m) = ((h' - \text{numval}(s[i]) \cdot d_m) \cdot d + \text{numval}(s[i+m])) \mod q$

Explanation:

- We remove the contribution of $s[i]$ from $h'$.
- We multiply the result by $d$ to shift all values left.
- We add the contribution of the new character $s[i+m]$.
- We take the modulo $q$ to keep the hash value in the correct range.

This computation can be done in $O(1)$ time as all operations (subtraction, multiplication, addition, and modulo) are assumed to take constant time.

### (3)

**Algorithm $H_0$**:
1. Precompute $h(p, \ell(p))$.
2. Precompute $h(s, \ell(p))$ and check if it matches $h(p, \ell(p))$. If it matches, return 0.
3. For $i = 1$ to $\ell(s) - \ell(p)$:
   - Compute $h(s + i, \ell(p))$ from $h(s + i - 1, \ell(p))$ using the formula derived in Q2.
   - If $h(s + i, \ell(p))$ matches $h(p, \ell(p))$, return $i$.

```c
int H_0(string s, string p) {
  int lp = ell(p);
  int ls = ell(s);
  int hp = h(p, lp);
  int hs = h(s, lp);

  if (hp == hs) return 0;

  for (int i = 1; i <= ls - lp; i++) {
    hs = (d * (hs - numval(s[i - 1]) * d_m) + numval(s[i + lp - 1])) % q;
    if (hp == hs) return i;
  }

  return -1;
}
```

The time complexity of $H_0$ is $O(\ell(s) + \ell(p))$ since we are computing the hash values in constant time for each position and there are $O(\ell(s))$ positions.

**Condition when $H_0$ does not give the correct solution**:
The algorithm $H_0$ only checks for hash matches. In the rare case where different strings have the same hash value (hash collision), the algorithm might mistakenly report a false match.

### (4)

**Algorithm $H$**:
1. Precompute $h(p, \ell(p))$.
2. For $i = 0$ to $\ell(s) - \ell(p)$:
   - Compute $h(s + i, \ell(p))$.
   - If $h(s + i, \ell(p)) = h(p, \ell(p))$, then check `eq(s + i, p)`. If `eq(s + i, p) == 1`, return $i$.

```c
int H(string s, string p) {
  int lp = ell(p);
  int ls = ell(s);
  int hp = h(p, lp);
  int hs = h(s, lp);

  if (hp == hs && eq(s, p) == 1) return 0;

  for (int i = 1; i <= ls - lp; i++) {
    hs = (d * (hs - numval(s[i - 1]) * d_m) + numval(s[i + lp - 1])) % q;
    if (hp == hs && eq(s + i, p) == 1) return i;
  }

  return -1;
}
```

**Time Complexity**:
- **Best Case**: $O(\ell(p))$ if the first occurrence matches.
- **Average Case**: If the number of hash matches (that require further checking with `eq`) is $O(1)$, then the average case time complexity is $O(\ell(s) + \ell(p))$.
- **Worst Case**: The worst-case complexity can be $O(\ell(s) \cdot \ell(p))$ if there are many hash collisions, causing frequent calls to `eq`.

**Condition for $O(\ell(s) + \ell(p))$**:
The time complexity will be $O(\ell(s) + \ell(p))$ if the expected number of hash collisions is $O(1)$. In other words, if the hash function has good distribution and the probability of collisions is low, the algorithm runs efficiently.

**Worst-case Complexity**: The worst-case time complexity of algorithm $H$ is $O(\ell(s) \cdot \ell(p))$ when there are many hash collisions, leading to frequent evaluations of `eq`.

## **Knowledge**

字符串匹配 哈希算法 Rabin-Karp算法 复杂度分析

### 难点思路

此题的难点在于如何高效地计算字符串的哈希值，并利用哈希值进行匹配。在应对哈希碰撞时，我们需要进行字符串的实际比较，保证算法的正确性。

### 解题技巧和信息

1. **哈希算法**: 使用适当的哈希函数和模数 $q$ 来降低哈希碰撞的概率。
2. **滚动哈希**: 是一种高效的技术,可以在 O(1) 时间内更新哈希值。
3. **字符串比较**: 当哈希值匹配时，需要使用实际的字符串比较来确认结果。
4. **复杂度分析**: 分析算法的平均情况和最坏情况的复杂度，以便选择合适的解决方案。

### 重点词汇

1. **Hash Function (哈希函数)**: A function that maps data of arbitrary size to fixed-size values.
2. **Collision (碰撞)**: When two different inputs produce the same hash output.
3. **Rabin-Karp Algorithm (Rabin-Karp 算法)**: A string matching algorithm that uses hash values for efficient searching.

- string matching 字符串匹配
- rolling hash 滚动哈希
- time complexity 时间复杂度
- worst-case scenario 最坏情况
- hash collision 哈希冲突

### 参考资料

1. T. H. Cormen, C. E. Leiserson, R. L. Rivest, C. Stein, *Introduction to Algorithms*, 3rd Edition, Chapter 32: "String Matching".
