---
sidebar_label: '2014年2月実施 プログラミング'
tags:
  - Tokyo-University
  - Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2014年2月実施 プログラミング

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
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