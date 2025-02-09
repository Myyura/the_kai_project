---
comments: false
title: 東京大学 情報理工学系研究科 コンピュータ科学専攻 2023年8月実施 専門科目 問題4
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2023年8月実施 専門科目 問題4

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Let us consider the following function $f$ described in a C-like programming language with the call-by-value evaluation strategy. We assume that, unlike in the C language, there is no bound on integer data, and no overflow occurs.

```c
int f(int x)
{
    if (x <= 0) return x + 1;
    else return f(f(x - 2));
}
```

For example, $f(1)$ is evaluated as follows, where the return value is 1 and the number of calls of the function $f$ during the evaluation is 3.

$$
f(1) \rightarrow f(f(-1)) \rightarrow f(0) \rightarrow 1.
$$

Answer the following questions:

(1) Give the number of calls of the function $f$ during the evaluation of $f(2)$.

(2) Show that the return value of $f(n)$ is 1 for every non-negative integer $n$.

(3) Let $n$ be a non-negative integer. Express the number of calls of the function $f$ during the evaluation of $f(n)$ in terms of $n$.

(4) Let $n$ be a non-negative integer. Express the number of calls of the function $f$ when $f(n)$ is evaluated by using the call-by-name strategy instead of the call-by-value strategy, in terms of $n$.

(5) Give an example of a program that does not terminate with the call-by-value strategy but terminates with the call-by-name strategy.

---

让我们考虑以下在类似 C 的编程语言中描述的函数 $f$，该语言采用值传递（call-by-value）求值策略。我们假设，与 C 语言不同，整数数据没有限制，也不会发生溢出。

```c
int f(int x)
{
    if (x <= 0) return x + 1;
    else return f(f(x - 2));
}
```

例如，$f(1)$ 的计算过程如下，返回值为 1，并且在计算过程中函数 $f$ 被调用了 3 次。

$$
f(1) \rightarrow f(f(-1)) \rightarrow f(0) \rightarrow 1.
$$

回答以下问题：

(1) 计算 $f(2)$ 在求值过程中函数 $f$ 被调用的次数。

(2) 证明对于每一个非负整数 $n$，$f(n)$ 的返回值都是 1。

(3) 设 $n$ 是一个非负整数。表达 $f(n)$ 在求值过程中函数 $f$ 被调用次数的公式，使用 $n$ 表示。

(4) 设 $n$ 是一个非负整数。表达 $f(n)$ 在使用按名调用策略（call-by-name）而非按值调用策略（call-by-value）时，函数 $f$ 被调用次数的公式，使用 $n$ 表示。

(5) 给出一个程序的例子，该程序在按值调用策略下不终止，但在按名调用策略下终止。

## **Kai**
### (1)

First, let's evaluate $f(2)$ step by step:

$$

f(2) \rightarrow f(f(0)) \rightarrow f(1) \rightarrow f(f(-1)) \rightarrow f(0) \rightarrow 1

$$

To summarize:

- $f(2)$ calls $f(0)$,
- $f(0)$ directly returns $1$,
- $f(f(0))$ is equivalent to $f(1)$ which involves 3 calls as shown in the question statement.

Thus, the total number of calls during the evaluation of $f(2)$ is **5**.

### (2)

Let's prove this statement by induction on $n$.

**Base Case:**
For $n = 0$, we have:

$$
f(0) = 0 + 1 = 1
$$

So, $f(0) = 1$.

**Inductive Step:**
Assume that $f(k) = 1$ for all $k < n$ where $n$ is some positive integer. Consider $f(n)$:

$$
f(n) \rightarrow f(f(n-2))
$$

By the inductive hypothesis, $f(n-2) = 1$ (since $n-2 \geq 0$). Hence,

$$
f(f(n-2)) = f(1) = 1
$$

Therefore, by induction, $f(n) = 1$ for all non-negative integers $n$.

### (3)

To determine the number of calls during $f(n)$, observe the recursive pattern:

$$
f(n) = 1 + \text{number of calls of } f(n-2)
$$

Let $C(n)$ represent the number of calls for $f(n)$. We have:

$$
C(n) = 1 + C(n-2)
$$

Starting with the base cases:

$$
C(0) = 1, \quad C(1) = 3
$$

So for even $n = 2k$:

$$
C(2k) = 1 + C(2k-2) = 1 + (1 + C(2k-4)) = \ldots = 1 + k
$$

Thus,

$$
C(n) = 2^{(n/2+1)} - 1 \quad \text{for } n \text{ even}
$$

For odd $n$:

$$
C(2k+1) = C(2k) + C(0)
$$

So we can express it as:

$$
C(n) = 3 \cdot 2^{(n-1)/2} - 2 \quad \text{for } n \text{ odd}
$$

### (4)

When using call-by-name, the function argument is not evaluated at the moment of the function call, but instead, every occurrence of the argument in the function body is replaced by the original expression.

For the function $f$, this results in exponential growth in calls because each nested call of $f$ introduces additional nested calls. Specifically:

$$
f(n) \rightarrow f(f(n-2)) \rightarrow f(f(f(n-4)))
$$

Each $f(k)$ introduces an entirely new evaluation of $f(k-2)$. This results in a number of function calls that grows exponentially with $n$. This is much larger than the linear or polynomial number of calls observed with the call-by-value strategy.

### (5)

Consider the following function:

```c
int first(int x, int y)
{
    return x;
}

int inf(int x)
{
	return inf(x+1)
}
```

If we call this with:

```c
first(2, inf(1))
```

Here, `inf(x)` has an infinite depth of recursion. the program will not terminate under call-by-value, because `inf(1)` will be evaluated before entering `first`. However, under call-by-name, `inf(1)` will be skipped, since `inf` is actually never used in the function body, leading to termination.

## **Knowledge**

递归函数 编程语言 调用策略 值调用 名调用

### 难点思路

在解决这道题目时，主要的难点在于理解不同调用策略如何影响递归函数的计算次数和返回值。尤其是对于 call-by-name 策略，理解参数传递的延迟计算（lazy evaluation）如何导致不同的函数行为。

### 解题技巧和信息

- 对于递归函数，可以利用归纳法证明递归终止条件和返回值的一致性。
- 需要熟悉 call-by-value 和 call-by-name 两种调用策略的差异，尤其是它们如何影响函数调用的次数和执行顺序。

### 重点词汇

- **Call-by-Value**: 值调用
- **Call-by-Name**: 名调用
- **Recursion**: 递归
- **Evaluation Strategy**: 计算策略

### 参考资料

1. Programming Languages: Concepts and Constructs (Chapter on Evaluation Strategies)
2. Types and Programming Languages, Benjamin C. Pierce (Chapter on Operational Semantics)
