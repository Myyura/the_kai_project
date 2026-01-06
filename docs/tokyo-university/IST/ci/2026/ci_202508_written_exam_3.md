---
sidebar_label: '2025年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Explanation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2025年8月実施 筆記試験 第3問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately from four to eight lines. If necessary, use examples, figures or equations.

(memorized version)

1. Merge sort
2. Garbage collection
3. Transformer
4. Virtual memory
5. Program counter
6. Rounding error in floating point numbers
7. Brushless motor
8. Monte Carlo integration

## **Kai**

**Rounding error in floating point numbers**

FP rounding error is the error when performing operations for FP numbers, such as getting 0.3000…1 when performing 0.1+0.2. The reason is base conversion between binary and decimal, making finite decimals non-terminating in binary and truncating that to fit a 32-bit or 64-bit floating point type. We can avoid it by comparing by a small epsilon as the error range, or using special decimal libraries or types.