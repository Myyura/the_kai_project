---
sidebar_label: 2014年2月実施 プログラミング
tags:
  - Tokyo-University
  - Computer-Science.Programming.Fibonacci-Numbers
  - Computer-Science.Programming.Recursion
  - Computer-Science.Programming.Integer-Overflow
  - Computer-Science.Programming.Arbitrary-Precision-Arithmetic
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2014年2月実施 プログラミング

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Use 64bit (or less) integer arithmetic when writing the following programs.

(1) Write a program that computes $f(10)$ where $f$ is a function defined as follows:

$$
f(x) = \begin{cases} 
1 & \text{if } \quad x \le 2, \\
f(x-1) + f(x-2) & \text{otherwise},
\end{cases}
$$

where $x$ is a positive integer.

(2) Write a program that computes $f(50)$ within 10 seconds. Note that the result of $f(50)$ is not a 32bit integer. In some languages, you would have to use 64bit-integer type such as long in Java.

(3) Write a program that takes two character strings representing a positive 32-digit decimal integer and print the sum of the two integers. Test the program by giving the following inputs:

```
00123456789012345678901234567890
00987654321098765432109876543210
```

(4) Write a program that computes $f(140)$ within 10 seconds. The result can be represented by a 32-digit decimal number.

(5) Consider the following notation to represent a 32-digit decimal floating-point number:

```
12345678901234567890123456789012 02
```

It consists of 32 digits and 2 digits separated by a white space. The number above represents $1.2345678901234567890123456789012 \times 10^2$.
Write a program that takes two character strings representing a positive 32-digit decimal floating-point number and print the multiplication of the two numbers. Test the program by giving the following inputs:

```
12345678901234567890123456789012 04
98765432109876543210987654321098 09
```

(6) Write a program that computes the value of $\phi$ defined as follows:

$$
\phi = \frac{1 + \sqrt{5}}{2} \quad .
$$

Use a 32-digit decimal floating-point number to compute the value.

(7) Write a program that computes the value of $g(140)$ where:

$$
g(x) = \frac{\phi^x}{\sqrt{5}} \quad .
$$

Use a 32-digit decimal floating-point number to compute the value.

(8) Write a program that computes the maximum value of $|f(x) - g(x)|$, where $x$ is an integer such that $1 \le x \le 140$. Use a 32-digit decimal floating-point number for computing the number.

### 题目描述

编写下列程序时，除题目另行要求的高精度表示外，使用不超过 64 位的整数运算。

1. 对正整数 \(x\)，定义
   \[
   f(x)=
   \begin{cases}
   1,&x\le2,\\
   f(x-1)+f(x-2),&x>2.
   \end{cases}
   \]
   编写程序计算 \(f(10)\)。
2. 编写在 10 秒内计算 \(f(50)\) 的程序。结果超出 32 位整数；某些语言须使用 64 位整数类型，例如 Java 的 `long`。
3. 编写程序，读入两个表示正的 32 位十进制数（这里指 32 个十进制数字）的字符串并输出其和。用以下输入测试：

   ```text
   00123456789012345678901234567890
   00987654321098765432109876543210
   ```

4. 编写在 10 秒内计算 \(f(140)\) 的程序，其结果可用 32 个十进制数字表示。
5. 用“32 个有效数字 + 空格 + 2 位指数”表示 32 位十进制浮点数，例如

   ```text
   12345678901234567890123456789012 02
   ```

   表示 \(1.2345678901234567890123456789012\times10^2\)。编写程序，读入两个表示正的 32 位十进制浮点数的字符串并输出其乘积；用以下输入测试：

   ```text
   12345678901234567890123456789012 04
   98765432109876543210987654321098 09
   ```

6. 定义
   \[
   \phi=\frac{1+\sqrt5}{2}.
   \]
   用 32 位十进制浮点数计算 \(\phi\)。
7. 定义
   \[
   g(x)=\frac{\phi^x}{\sqrt5}.
   \]
   用 32 位十进制浮点数计算 \(g(140)\)。
8. 对整数 \(1\le x\le140\)，用 32 位十进制浮点数计算
   \[
   \max |f(x)-g(x)|.
   \]
