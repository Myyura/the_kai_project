---
sidebar_label: '2026年2月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Computer-Architecture
  - Number-Representation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2026年2月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (Memorized version, English)**
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