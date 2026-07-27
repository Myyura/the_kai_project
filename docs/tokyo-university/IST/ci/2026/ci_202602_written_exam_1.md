---
sidebar_label: 2026年2月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Computer-Science.Computer-Architecture.Number-Representation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2026年2月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

### Memorized version (English)

Consider an 8-bit binary number (e.g., `0b10110111`, where underscores `_` can be freely added as separators without affecting the meaning).
*   **[7:4]** (Bits 7, 6, 5, 4): represent the exponent **E**.
*   **[3:0]** (Bits 3, 2, 1, 0): represent the mantissa **M**.

The floating-point value represented by this binary number is calculated using the formula: $\text{Value} = \left(1 + \frac{M}{16}\right) \times 2^{(E-7)} $
This is called **EM notation**.

Answer the following questions.

(1) How is 1.0 represented in EM notation?

(2) What is the decimal value of the binary number `0b1000_1000`?

(3) What are the decimal values of the largest and the second largest numbers that can be represented?

We define functions as follows:
*   **$R(x)$**: Input a decimal number $x$; output the largest decimal number **strictly less than** $x$ that can be **exactly represented** in EM notation.
*   **$F(y)$**: Input a binary EM representation $y$; output the corresponding decimal value.
*   **$I(z)$**: Input a decimal number $z$; output the EM representation (binary) of the largest number **strictly less than** $z$ that can be **exactly represented** in EM notation.

(4) Prove: For two binary numbers $X_1$ and $X_2$, if $X_1 > X_2$, then $F(X_1) > F(X_2)$.

(5) Prove: Among all numbers representable in EM notation, no two numbers have the same EM representation (i.e., the mapping is unique).

(6) Calculate the value of $R(1.1) + R(1.1)$.

(7) Calculate the value of $R( F(\text{0b0111\_1000}) + F(\text{0b0001\_1000}) )$.

(8) Let $e$ and $h$ be numbers that can be exactly represented in EM notation, with $e \le 15$. Let $L(e)$ be the integer part of the decimal value of $e$. Find a value for $h$ (provide the decimal value) such that the lower 4 bits (the Mantissa part, $[3:0]$) of $I(e+h)$ correspond to the value $L(e)$ for every $e$.

### 题目描述

本页原文标为“英文回忆版”。考虑 8 位二进制数（如 `0b10110111`，可任意加入下划线作分隔，不影响数值）：高 4 位 `[7:4]` 表示指数 \(E\)，低 4 位 `[3:0]` 表示尾数 \(M\)。其浮点值定义为
\[
\left(1+\frac M{16}\right)2^{E-7},
\]
称为 EM 表示。

1. 数值 1.0 的 EM 二进制表示是什么？
2. `0b1000_1000` 的十进制值是多少？
3. 可表示的最大数与第二大数分别是多少？

定义：

- \(R(x)\)：对十进制数 \(x\)，返回严格小于 \(x\) 的、可被 EM 精确表示的最大十进制数；
- \(F(y)\)：把 EM 二进制表示 \(y\) 转成对应十进制值；
- \(I(z)\)：对十进制数 \(z\)，返回严格小于 \(z\) 的最大可精确表示数之 EM 二进制表示。

4. 证明对两个 8 位二进制编码 \(X_1>X_2\)，有 \(F(X_1)>F(X_2)\)。
5. 证明 EM 表示具有唯一性，即不会有两个数对应同一个 EM 表示。
6. 计算 \(R(1.1)+R(1.1)\)。
7. 计算
   \[
   R\!\left(F(\texttt{0b0111\_1000})+F(\texttt{0b0001\_1000})\right).
   \]
8. \(e,h\) 均可由 EM 精确表示，且 \(e\le15\)。令 \(L(e)\) 为 \(e\) 十进制值的整数部分。求一个 \(h\)（给十进制值），使对每个这样的 \(e\)，\(I(e+h)\) 的低 4 位尾数字段 `[3:0]` 所表示的值都等于 \(L(e)\)。

#### 考点

- **自定义浮点数编码**：由 4 位指数、4 位尾数和偏置 7 完成编码、解码及极值计算。
- **编码单调性与唯一性**：分析跨指数边界时相邻编码的数值顺序，证明二进制编码与表示值的关系。
- **向下舍入到可表示数**：按“严格小于”规则计算 \(R,I\)，处理精度间隔与尾数字段构造。
