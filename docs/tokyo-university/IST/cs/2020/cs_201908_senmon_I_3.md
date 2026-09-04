---
sidebar_label: "2019年8月実施 専門科目I 問題3"
tags:
  - Tokyo-University
  - Computer-Science.String-Algorithms.Rabin-Karp-Rolling-Hash
  - Computer-Science.String-Algorithms.Hash-Collision-Verification-and-Worst-Case
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目I 問題3

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
In this problem, the length of a string $s$ is written $l(s)$, and the $i$-th character of $s$ is written $s[i]$, where the first character is $s[0]$. The string obtained by removing the first $i$ characters from $s$ is written $s + i$. We assume $0 \leq i < l(s)$ in $s[i]$ and $s + i$. For example, if $s = \text{PROBLEM}$, then $s[0] = \text{P}$ and $s + 3 = \text{BLEM}$. The set of characters consists of $N$ characters, where $N$ is an integer constant no less than 2, and for each character $c$ a distinct positive integer $\text{numval}(c) \leq N$ is defined. Suppose that the computation of $s + i$ for given $s$ and $i$, and that of $\text{numval}(c)$ for given $c$, take $O(1)$ time. Also suppose that each of integer addition, multiplication and remainder takes $O(1)$ time, and that overflow will never occur in integer operations.

We consider the following problem FIND: For given strings $p$ and $s$, find the first position $i$ at which $s$ matches $p$. In other words, $i$ is the least non-negative integer that satisfies

$$
\forall j \in \{0, 1, \dots, l(p) - 1\}. \, s[i + j] = p[j].
$$

In case there is no such $i$, we define $i = -1$. In the following, we assume $l(s) > l(p) > 0$.

For strings $r$ and $p$ with $0 < l(p) \leq l(r)$, let function $\text{eq}(r, p)$ return 1 if the first $l(p)$ characters of $r$ equal $p$, and return 0 otherwise. Suppose that the time complexity of $\text{eq}(r, p)$ is $O(l(p))$. The following algorithm $S$ solves the problem FIND:

```text
for (i = 0; i <= l(s) - l(p); i++)
  if (eq(s + i, p) == 1)
    return i;
return -1;
```

Answer the following questions.

(1) Express the order of the worst-case time complexity of algorithm $S$ in terms of $l(s)$ and $l(p)$.

In the following, the hash value $h(s, m)$ of the first $m$ characters of string $s$ is defined by

$$
h(s, m) = \left(\sum_{i=0}^{m-1} \text{numval}(s[i]) \cdot d^{m-i-1}\right) \mod q,
$$

where $d$ and $q$ are positive integer constants, and $0 < m \leq l(s)$ is assumed.

(2) Assume that $i < l(s) - m$ holds, and that $h' = h(s + i, m)$ and $d_m = d^{m-1}$ have been precomputed. Show an algorithm or an expression to compute $h(s + i + 1, m)$ in $O(1)$ time.

(3) Give an algorithm $H_0$ that finds the least non-negative integer $i$ that satisfies $h(p, l(p)) = h(s + i, l(p))$ (but answers $-1$ if no such $i$ exists) in time $O(l(s) + l(p))$. Also, answer in what condition the algorithm $H_0$ outputs a value which is **not** the solution of problem FIND.

(4) Give an algorithm $H$ that satisfies all of the following conditions: (a) it always answers the solution of problem FIND, (b) it searches for the answer by using hash $h(s, m)$ and function $\text{eq}(r, p)$, and ($c$) if we assume that the number of integers $i$ that satisfy $h(p, l(p)) = h(s + i, l(p))$ for given $s$ and $p$ is $O(1)$ independently of $s$ and $p$, then the algorithm $H$ runs in time $O(l(s) + l(p))$.
In addition, show in what condition the time complexity of the algorithm $H$ is larger than $O(l(s) + l(p))$. Also, answer the order of the worst-case time complexity of the algorithm $H$ in terms of $l(s)$ and $l(p)$.

### 题目描述

字符串 $s$ 的长度记为 $l(s)$，从 $0$ 开始编号的第 $i$ 个字符记为
$s[i]$，删去前 $i$ 个字符所得后缀记为 $s+i$，并在这些记号中假设
$0\le i<l(s)$。例如 $s=\text{PROBLEM}$ 时，
$s[0]=\text P$、$s+3=\text{BLEM}$。字符集含常数 $N\ge2$ 个字符，每个字符
$c$ 对应互不相同的正整数 $\operatorname{numval}(c)\le N$。假设计算
$s+i$、$\operatorname{numval}(c)$、整数加法、乘法和取余均为 $O(1)$，且整数运算不会溢出。

问题 FIND 要求：给定字符串 $p,s$，求 $p$ 在 $s$ 中第一次匹配的起点，即满足

$$
\forall j\in\{0,\ldots,l(p)-1\},\quad s[i+j]=p[j]
$$

的最小非负整数 $i$；若不存在则返回 $-1$。以下假设
$l(s)>l(p)>0$。函数 $\operatorname{eq}(r,p)$ 在 $r$ 的前
$l(p)$ 个字符等于 $p$ 时返回 $1$，否则返回 $0$，耗时
$O(l(p))$。题中朴素算法 $S$ 从左到右对每个位置调用该函数。

（1）用 $l(s),l(p)$ 表示算法 $S$ 的最坏时间复杂度。

对满足 $0<m\le l(s)$ 的 $m$，定义前 $m$ 个字符的哈希：

$$
h(s,m)=
\left(\sum_{i=0}^{m-1}
\operatorname{numval}(s[i])d^{m-i-1}\right)\bmod q,
$$

其中 $d,q$ 为正常数。

（2）设 $i<l(s)-m$，且已预计算
$h'=h(s+i,m)$ 和 $d_m=d^{m-1}$。给出在 $O(1)$ 时间内计算
$h(s+i+1,m)$ 的算法或表达式。

（3）给出算法 $H_0$，在 $O(l(s)+l(p))$ 时间内找出满足
$h(p,l(p))=h(s+i,l(p))$ 的最小非负 $i$；若不存在则返回 $-1$。并说明在什么条件下
$H_0$ 的输出不是 FIND 的正确答案。

（4）给出算法 $H$，满足：始终正确求解 FIND；使用哈希 $h$ 和函数
`eq` 搜索；若对给定 $s,p$，哈希相等的候选位置数与输入无关地为
$O(1)$，则总耗时为 $O(l(s)+l(p))$。此外说明何种条件会使其耗时超过这一界，并用
$l(s),l(p)$ 给出最坏时间复杂度。

## **Kai**

记 $n=l(s),m=l(p)$。

### (1)

共有 $n-m+1$ 个起点，每次比较至多 $m$ 个字符，故最坏时间为

$$
O((n-m+1)m)\subseteq O(nm).
$$

若 `eq` 采用逐字符比较，取 $s=a^n,p=a^{m-1}b$ 可达到 $\Theta((n-m+1)m)$。

### (2)

令 $\operatorname{mod}_q(x)$ 为 $0,\ldots,q-1$ 中的标准余数，则

$$
\boxed{h(s+i+1,m)=\operatorname{mod}_q
\left(d(h'-\operatorname{numval}(s[i])d_m)+\operatorname{numval}(s[i+m])\right).}
$$

此式删除最左字符的贡献、将其余项乘 $d$，再加上新字符，耗时 $O(1)$。若语言的 `%` 会返回负数，使用 `((x % q) + q) % q` 实现标准余数。

### (3)

用 Horner 递推 `v = mod_q(v*d + numval(c))` 求两个初始哈希，并用 $m-1$ 次乘法求 $d_m$。

```text
hp = h(p,m); hs = h(s,m)
for i = 0,...,n-m:
    if hs == hp: return i
    if i < n-m:
        hs = mod_q(d*(hs-numval(s[i])*d_m)+numval(s[i+m]))
return -1
```

初始化为 $O(m)$，每次滚动为 $O(1)$，故共 $O(n+m)$。

$H_0$ 错误当且仅当它找到的**第一个哈希相等窗口并不等于 $p$**。若没有哈希相等窗口，则必无真正匹配，返回 $-1$ 正确。

### (4)

将上面算法的返回条件改成

```text
if hs == hp and eq(s+i,p) == 1: return i
```

便得到 $H$。真正相等的串哈希一定相等，且扫描按起点递增进行，因此总能返回首个真正匹配。

设返回前实际检查了 $c$ 个候选窗口，总时间为

$$
O(n+m+cm).
$$

若 $c=O(1)$，即为 $O(n+m)$。当大量碰撞引发长字符比较，使比较总耗时超过线性界时，算法退化。例如允许的常数 $q=1$ 使所有窗口碰撞，取 $s=a^n,p=a^{m-1}b$，逐字符 `eq` 每次都比较 $m$ 个字符。

因此最坏上界为 $O((n-m+1)m)$，逐字符比较下上述例子达到该界；常见宽松写法为 $O(nm)$。仅有许多哈希相等位置并不足以断言退化，因为算法可能很早就返回。
