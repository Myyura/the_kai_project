---
sidebar_label: '2015年2月実施 プログラミング'
tags:
  - Tokyo-University
  - Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2015年2月実施 プログラミング

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
(1) The following function $f$ is a function often used as a simple random number generator.

$$
f(n) = \begin{cases} 
1 & \text{if } n < 1, \\
(161 \times f(n-1) + 2457) \mod 2^{24} & \text{otherwise}.
\end{cases}
$$

where $n$ is a non-negative integer and $mod$ denotes a modulus operator (the remainder).
Write a program that computes $f(n)$ for given $n$. Then print the value of $f(100)$ by using this program.

(2) Write a program that counts the number of $i$ such that $i < 100$ and $f(i)$ is an even number.

(3) Write a program that counts the number of $i$ such that $i$ is an odd number, $i < 100$, and $f(i)$ is an even number.

(4) Write a program that prints the value of $f(1000000)$.

(5) Write a program that computes the following function $g$ where $n$ is a non-negative integer:

$$
g(n) = \begin{cases} 
1 & \text{if } n < 1, \\
(1103515245 \times g(n-1) + 12345) \mod 2^{26} & \text{otherwise}.
\end{cases}
$$

Then run the program to print the values of $g(2)$ and $g(3)$.

(6) Write a program that computes the smallest positive integer $k$ such that $g(n + k) = g(n)$ for any non-negative integer $n$.

(7) Write a program that computes the smallest positive integer $k$ such that $h(n+k) = h(n)$ for any non-negative integer $n$. Write on the answer sheet why the program correctly computes $k$. $h$ is a function defined as follows:

$$
h(n) = g(n) \mod 2^{10}
$$