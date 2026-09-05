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

考虑 8 位二进制数（如 `0b10110111`，可任意加入下划线作分隔，不影响数值）：高 4 位 `[7:4]` 表示指数 $E$，低 4 位 `[3:0]` 表示尾数 $M$。其浮点值定义为

$$
\left(1+\frac M{16}\right)2^{E-7},
$$

称为 EM 表示。

1. 数值 1.0 的 EM 二进制表示是什么？
2. `0b1000_1000` 的十进制值是多少？
3. 可表示的最大数与第二大数分别是多少？

定义：

- $R(x)$：对十进制数 $x$，返回严格小于 $x$ 的、可被 EM 精确表示的最大十进制数；
- $F(y)$：把 EM 二进制表示 $y$ 转成对应十进制值；
- $I(z)$：对十进制数 $z$，返回严格小于 $z$ 的最大可精确表示数之 EM 二进制表示。

4. 证明对两个 8 位二进制编码 $X_1>X_2$，有 $F(X_1)>F(X_2)$。
5. 证明 EM 表示具有唯一性，即不会有两个数对应同一个 EM 表示。
6. 计算 $R(1.1)+R(1.1)$。
7. 计算

   $$
   R\!\left(F(\texttt{0b0111\_1000})+F(\texttt{0b0001\_1000})\right).
   $$

8. $e,h$ 均可由 EM 精确表示，且 $e\le15$。令 $L(e)$ 为 $e$ 十进制值的整数部分。求一个 $h$（给十进制值），使对每个这样的 $e$，$I(e+h)$ 的低 4 位尾数字段 `[3:0]` 所表示的值都等于 $L(e)$。

## **Kai**

### (1)

Taking $E=7$ and $M=0$ gives $(1+0/16)2^0=1$. Therefore the representation is `0b0111_0000`.

### (2)

Here $E=8$ and $M=8$, so the value is

$$
\left(1+\frac8{16}\right)2^{8-7}=3.
$$

### (3)

The largest exponent is $15$. Taking mantissas $15$ and $14$ gives, respectively,

$$
\frac{31}{16}2^8=496,\qquad \frac{30}{16}2^8=480.
$$

Their representations are `0b1111_1111` and `0b1111_1110`.

### (4)

Write an unsigned encoding as $X=16E+M$. At fixed $E$, increasing $M$ by one increases the value by $2^{E-11}>0$. Across an exponent boundary,

$$
F(16(E+1))-F(16E+15)
=2^{E-6}-\frac{31}{16}2^{E-7}
=2^{E-11}>0.
$$

Thus every adjacent pair of encodings has strictly increasing values. Applying this repeatedly proves $X_1>X_2\implies F(X_1)>F(X_2)$.

### (5)

Each encoding determines exactly one pair $(E,M)$ and hence one value. Conversely, (4) proves that distinct encodings give distinct values. Therefore every representable value has exactly one encoding.

### (6)

Near $1$, the spacing is $1/16$. Since

$$
\frac{17}{16}<\frac{11}{10}<\frac{18}{16},
$$

we obtain $R(1.1)=17/16$. The requested ordinary sum is

$$
R(1.1)+R(1.1)=\frac{17}{8}=2.125.
$$

### (7)

$$
F(\texttt{0b0111\_1000})=\frac32,\qquad
F(\texttt{0b0001\_1000})=\frac3{128}.
$$

Their sum is $195/128$, which lies strictly between $3/2=192/128$ and the next representable value $25/16=200/128$. Hence the answer is $3/2=1.5$.

### (8)

Under the stated **strictly less than** definition of $I$, no representable $h$ satisfies the condition.

There are only 256 candidates. Exact evaluation for $e=1$ and $e=2$ leaves just $h=17$. But for the representable value $e=1/128$, we have

$$
17<17+\frac1{128}<18,
$$

so $I(17+1/128)$ encodes $17$, with mantissa $1$, whereas $L(1/128)=0$. This eliminates the last candidate.

The following finite check uses exact rational arithmetic and includes every encoding. The predecessor of an exactly representable input is selected with `bisect_left`, as required by the strict inequality.

```python
from fractions import Fraction
from bisect import bisect_left

values = [Fraction(16 + (code & 15), 16) * Fraction(2) ** ((code >> 4) - 7)
          for code in range(256)]

def mantissa_below(z):
    code = bisect_left(values, z) - 1
    if code < 0:
        raise ValueError("No representable value is strictly below z")
    return code & 15

candidates = [h for h in values
              if all(mantissa_below(e + h) == int(e)
                     for e in [Fraction(1), Fraction(2)])]
assert candidates == [Fraction(17)]
assert mantissa_below(Fraction(17) + Fraction(1, 128)) == 1
assert [h for h in values
        if all(mantissa_below(e + h) == int(e)
               for e in values if e <= 15)] == []
```
