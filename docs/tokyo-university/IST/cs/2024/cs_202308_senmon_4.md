---
sidebar_label: "2023年8月実施 専門科目 問題4"
tags:
  - Tokyo-University
  - Computer-Science.Programming.Call-by-Value-vs-Call-by-Name
  - Computer-Science.Programming.Evaluation-Strategy-and-Termination
  - Computer-Science.Programming.Recursion
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2023年8月実施 専門科目 問題4

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/), 祭音Myyura

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

### 题目描述

在一种采用按值调用的类 C 语言中考虑函数

```c
int f(int x)
{
    if (x <= 0) return x + 1;
    else return f(f(x - 2));
}
```

假定整数无范围限制且不会溢出。例如

$$
f(1)\to f(f(-1))\to f(0)\to1,
$$

返回值为 $1$，求值期间共调用 $f$ 三次。回答下列问题。

（1）求计算 $f(2)$ 时调用 $f$ 的次数。

（2）证明对每个非负整数 $n$，$f(n)$ 的返回值均为 $1$。

（3）对非负整数 $n$，用 $n$ 表示按值调用求值 $f(n)$ 时的函数调用次数。

（4）若改用按名调用而非按值调用，对非负整数 $n$，用 $n$ 表示求值
$f(n)$ 时的函数调用次数。

（5）给出一个在按值调用下不终止、但在按名调用下终止的程序示例。

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

Let's prove the statement by strong induction on $n$.

**Base cases.** For $n=0$,

$$
f(0)=0+1=1.
$$

For $n=1$,

$$
f(1)=f(f(-1))=f(0)=1.
$$

**Inductive step.** Assume $f(k)=1$ for every $0\le k<n$, where $n\ge2$. Then $n-2\ge0$, so $f(n-2)=1$ by the induction hypothesis. Hence

$$
f(n)=f(f(n-2))=f(1)=1.
$$

Therefore, $f(n)=1$ for every nonnegative integer $n$.

### (3)

Let $C(n)$ be the call count under call-by-value, with $C(t)=1$ for
$t\le0$.  Since the inner call is evaluated before the outer call,

$$
C(n)=1+C(n-2)+C(f(n-2)).
$$

Thus $C(0)=1$, $C(1)=3$, and, for $n\ge2$,

$$
C(n)=C(n-2)+4.
$$

Therefore

$$
\boxed{C(n)=2n+1}\qquad(n\ge0).
$$

### (4)

Let $N(n)$ be the call count under call-by-name.  Directly,
$N(0)=1$ and $N(1)=4$.  For $n\ge2$, the unevaluated argument
$f(n-2)$ is evaluated five times: once in the first test, and twice in each of the two evaluations forced by the final nonpositive argument.  Counting the five surrounding calls gives

$$
N(n)=5N(n-2)+5.
$$

Consequently,

$$
\boxed{
N(2k)=\frac{9\cdot5^k-5}{4},\qquad
N(2k+1)=\frac{21\cdot5^k-5}{4}
}\quad(k\ge0).
$$

### (5)

Consider the following function:

```c
int first(int x, int y)
{
    return x;
}

int inf(int x)
{
	return inf(x+1);
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

在解决这道题目时，主要的难点在于理解不同调用策略如何影响递归函数的计算次数和返回值。尤其是对于 call-by-name 策略，理解参数在每次使用时重新求值（不记忆之前的求值结果）如何导致不同的函数行为。

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
