---
sidebar_label: 2024年8月実施 筆記試験 第3問
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Radix-Sort
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2024年8月実施 筆記試験 第3問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines. If necessary, use examples, figures or equations.

1. **Radix sort**
2. **L-value and R-value in programming languages**
3. **Model checking**
4. **Quasi-Newton method**
5. **Bayesian networks**
6. **Marching cubes method**
7. **Types of optical distance sensors (at least two) and their principles**
8. **Cryptographic hash function**

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例、图或公式。

1. 基数排序。
2. 程序语言中的左值与右值。
3. 模型检测。
4. 拟牛顿法。
5. 贝叶斯网络。
6. Marching Cubes 方法。
7. 至少两类光学测距传感器及其原理。
8. 密码学哈希函数。

## **Kai**
**Radix Sort**
A sorting algorithm that sorts strings or numbers from lower to higher digit places. In the $i$-th step in the loop, the algorithm calls a stable counting sort distributing $i$-th digit into ordered buckets. The time complexity is $O(d(n+k))$ and auxiliary space is $O(n+k)$, where $n$ is the array length, $d$ is the number of digits of the maximum number, and $k$ is the base or the length of symbols.

**L-value and R-value**
An l-value denotes an identifiable storage location and can appear on the left of an assignment; for example, an array element or a dereferenced pointer. An r-value denotes a value used in an expression and is often temporary. In `x = y + 1`, `x` is an l-value and `y + 1` is an r-value. Language rules determine conversions, references, and whether an expression is assignable.

**Model checking**
A finite-state system and a temporal-logic property are given as input. The checker explores reachable states, explicitly or symbolically, and decides whether every execution satisfies the property. If not, it returns a counterexample trace. State explosion is mitigated by BDD/SAT methods, abstraction, partial-order reduction, and bounded model checking.

**Cryptographic hash function**
A deterministic function maps an arbitrary-length message to a fixed-length digest. It should resist preimage, second-preimage, and collision attacks, and small input changes should unpredictably alter the digest. Hashes support integrity checks, digital signatures, commitments, and password constructions with salts and slow KDFs. SHA-256 is a standard example; obsolete MD5 and SHA-1 are not collision resistant.
