---
sidebar_label: 2015年2月実施 プログラミング
tags:
  - Tokyo-University
  - Computer-Science.Programming.Linear-Congruential-Generator
  - Computer-Science.Programming.Recursion
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2015年2月実施 プログラミング

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
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

### 题目描述

1. 对非负整数 $n$，定义常用作简单伪随机数发生器的递推函数

   $$
   f(n)=
   \begin{cases}
   1,&n<1,\\
   (161f(n-1)+2457)\bmod2^{24},&n\ge1.
   \end{cases}
   $$

   其中 $\bmod$ 表示取余。编写程序计算给定 $n$ 的 $f(n)$，并输出 $f(100)$。
2. 统计满足 $i<100$ 且 $f(i)$ 为偶数的 $i$ 的个数。
3. 统计满足 $i<100$、$i$ 为奇数且 $f(i)$ 为偶数的 $i$ 的个数。
4. 编写程序输出 $f(1000000)$。
5. 对非负整数 $n$，定义

   $$
   g(n)=
   \begin{cases}
   1,&n<1,\\
   (1103515245g(n-1)+12345)\bmod2^{26},&n\ge1.
   \end{cases}
   $$

   编写程序计算 $g$，并运行输出 $g(2)$ 与 $g(3)$。
6. 编写程序求最小正整数 $k$，使对任意非负整数 $n$ 均有 $g(n+k)=g(n)$。
7. 定义

   $$
   h(n)=g(n)\bmod2^{10}.
   $$

   编写程序求使任意非负整数 $n$ 均满足 $h(n+k)=h(n)$ 的最小正整数 $k$，并在答题纸上说明程序为何能正确求得该 $k$。
