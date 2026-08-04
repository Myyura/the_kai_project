---
sidebar_label: 2007年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Mathematics.Number-Theory.Divisor-Counting-Function
  - Mathematics.Number-Theory.Prime-Factorization
  - Computer-Science.Algorithm-Design.Backtracking
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2007年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Let $N$ be the number of divisors of a positive integer $J$. Let us compute the smallest $J$ for a given $N$. Note that $J$ and $1$ are included among the divisors of $J$.

(1) Calculate the smallest $J$ each for $N=5$ and $N=8$.

(2) Let $J$ be prime factorized as
$$J=\prod_{i=0}^{k-1}p_i^{a_i}$$
where $p_i$s are mutually different prime numbers and $a_i$s are positive integers for $0\le i<k$. Describe $N$ in a mathematical formula.

(3) When $N$ is odd, what kind of number is $J$?

(4) Based on (2), describe the outline of a method to compute the smallest $J$ given $N$. Moreover, describe ways to decrease computational complexity.

(5) Calculate the smallest $J$ for $N=24$.

### 题目描述

设正整数 \(J\) 的正因数个数为 \(N\)，其中 \(1\) 和 \(J\) 本身也计入。现要对给定的 \(N\) 求满足条件的最小 \(J\)。

1. 分别在 \(N=5\) 和 \(N=8\) 时求最小的 \(J\)。
2. 若
   \[
   J=\prod_{i=0}^{k-1}p_i^{a_i},
   \]
   其中 \(p_i\) 是两两不同的素数，\(a_i\) 对 \(0\le i<k\) 均为正整数，写出 \(N\) 的数学表达式。
3. 当 \(N\) 为奇数时，\(J\) 必须是哪一类数？
4. 根据第 2 问，概述由给定 \(N\) 求最小 \(J\) 的方法，并说明如何降低计算复杂度。
5. 求 \(N=24\) 时最小的 \(J\)。
