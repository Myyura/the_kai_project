---
sidebar_label: '2024年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Explanation
  - Radix-sort
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2024年8月実施 筆記試験 第3問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines. If necessary, use examples, figures or equations.

1. **Radix sort**
2. **L-value and R-value in programming languages**
3. **Model checking**
4. **Quasi-Newton method**
5. **Bayesian networks**
6. **Marching cubes method**
7. **Types of optical distance sensors (at least two) and their principles**
8. **Cryptographic hash function**

## **Kai**
**Radix Sort**
A sorting algorithm that sort strings or numbers from lower to higher digit places. In the $i$-th step in the loop, the algorithm calls a counting sort distributing $i$-th digit into ordered buckets. The time complexity is $O(d(n+k))$ where $n$ is the array length, $d$ is the number of digits of the maximum number, and $k$ is the base or the length of symbols.