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

[Official examination, archived Japanese PDF](https://web.archive.org/web/20151118065537id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2015-2-program.pdf).

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


## **Kai**

### (1) Iterative recurrence

Start from $x=1=f(0)$ and apply the recurrence $n$ times. After iteration $i$, $x=f(i)$, so the result is $f(n)$. This uses $O(n)$ time and $O(1)$ storage without recursion depth proportional to $n$.

$$\boxed{f(100)=7104005.}$$

### (2) and (3) Even values

Modulo 2, both constants are odd, so $f(i)\equiv f(i-1)+1\pmod2$. Since $f(0)$ is odd, $f(i)$ is even exactly when $i$ is odd. Among the non-negative indices $0\le i<100$, there are 50 odd indices. Thus both requested counts are

$$\boxed{50.}$$

The loop below counts the current value before advancing, so its indices are precisely 0 through 99.

### (4) One million updates

Apply the same constant-space loop:

$$\boxed{f(1000000)=11329.}$$

### (5) The second generator

Use 64-bit integer arithmetic for the multiplication before reducing modulo $2^{26}$. Since $0\le g(n)<2^{26}$, the largest intermediate product plus increment is less than $7.5\times10^{16}$, within 64-bit range. Computing the multiplication with a 32-bit signed integer could overflow before the modulus is taken.

$$\boxed{g(2)=41857255,\qquad g(3)=58844308.}$$

### (6) Period of $g$

The multiplier $a=1103515245$ is odd, hence invertible modulo $2^{26}$. Therefore $T(x)=ax+12345\pmod{2^{26}}$ is a permutation of the finite state space. Starting from 1, it lies on a cycle from the beginning. Iterate until the first return to 1; if it occurs after $k$ steps, determinism implies $g(n+k)=g(n)$ for every $n$. No smaller positive period is possible, since such a period would already return $g(k)$ to $g(0)=1$.

The program gives

$$\boxed{k_g=2^{26}=67108864.}$$

### (7) Period of the low ten bits

Reduction modulo $2^{10}$ commutes with multiplication, addition and reduction modulo $2^{26}$. Hence $h$ itself satisfies

$$h(0)=1,\qquad h(n+1)=(1103515245h(n)+12345)\bmod2^{10}.$$

Run the first-return algorithm directly on these 1024 states. Its transition is again a permutation, so the same proof establishes that its first return is the smallest period valid for all $n$:

$$\boxed{k_h=2^{10}=1024.}$$

The powers of two can also be derived without enumerating the cycles. For any positive integer $r$,

$$T^r(x)-x=((a-1)x+c)\sum_{j=0}^{r-1}a^j$$

before taking the modulus. Here $a\equiv1\pmod4$ and $c$ is odd, so the first factor is odd. Let $S_r=\sum_{j=0}^{r-1}a^j$. The identity $S_{2r}=S_r(1+a^r)$ shows that each doubling adds exactly one factor of 2, since $1+a^r\equiv2\pmod4$. If $r=2^j m$ with $m$ odd, $S_r/S_{2^j}$ is a sum of $m$ odd terms and is odd. Thus $S_r$ has exactly as many factors of 2 as $r$. It follows that $T^r(x)\equiv x\pmod{2^b}$ exactly when $2^b$ divides $r$, proving the periods for both $b=26$ and $b=10$.

### Complete C program

All products in this program stay within `uint64_t`. The state is reduced by a bit mask, which is the remainder modulo $2^b$ for these non-negative integers.

```c
#include <inttypes.h>
#include <stdint.h>
#include <stdio.h>

static uint64_t advance(uint64_t x, uint64_t a, uint64_t c, unsigned bits) {
    return (a*x+c) & ((UINT64_C(1)<<bits)-1);
}

static uint64_t value(uint64_t n, uint64_t a, uint64_t c, unsigned bits) {
    uint64_t x=1;
    for (uint64_t i=0; i<n; ++i) x=advance(x,a,c,bits);
    return x;
}

static uint64_t period(uint64_t a, uint64_t c, unsigned bits) {
    uint64_t x=1, k=0;
    do {
        x=advance(x,a,c,bits);
        ++k;
    } while (x!=1);
    return k;
}

int main(void) {
    uint64_t x=1, even=0, odd_index_even=0;
    for (uint64_t i=0; i<100; ++i) {
        if ((x&1)==0) {
            ++even;
            if (i&1) ++odd_index_even;
        }
        x=advance(x,161,2457,24);
    }
    printf("f(100)=%" PRIu64 "\n",x);
    printf("even=%" PRIu64 "\nodd-index-even=%" PRIu64 "\n",even,odd_index_even);
    printf("f(1000000)=%" PRIu64 "\n",value(1000000,161,2457,24));
    printf("g(2)=%" PRIu64 "\ng(3)=%" PRIu64 "\n",
           value(2,1103515245,12345,26),value(3,1103515245,12345,26));
    printf("g-period=%" PRIu64 "\n",period(1103515245,12345,26));
    printf("h-period=%" PRIu64 "\n",period(1103515245,12345,10));
    return 0;
}
```

Output:

```text
f(100)=7104005
even=50
odd-index-even=50
f(1000000)=11329
g(2)=41857255
g(3)=58844308
g-period=67108864
h-period=1024
```
