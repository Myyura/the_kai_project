---
sidebar_label: "2022年8月実施 専門科目 問題2"
tags:
  - Tokyo-University
  - Operations-Research.Combinatorial-Optimization.Minimax-Number-Partitioning-Approximation
  - Computer-Science.Data-Structures.Priority-Queue
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2022年8月実施 専門科目 問題2

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/), 祭音Myyura

## **Description**
We consider a division of a set of mutually distinct $n$ positive integers $P = \{x_1, x_2, \ldots, x_n\}$ into $m$ sets $P_1, P_2, \ldots, P_m$ $(1 < m < n, P = P_1 \cup P_2 \cup \ldots \cup P_m, \forall i, j (i \neq j) P_i \cap P_j = \emptyset)$, where $\emptyset$ denotes an empty set. The set sequence $Q = [P_1, P_2, \ldots, P_m]$ is called a division of $P$. We denote by $\|\mathbf{S}\|$ the summation of all the integers in $S$ if $S$ is a set of integers or a stack consisting of integers. Note that $\|\mathbf{S}\| = 0$ in case $S$ is an empty set or an empty stack.

Let $\mathrm{maxsum}(Q) = \max_i \|\mathbf{P}_i\|$ for a division $Q = [P_1, P_2, \ldots, P_m]$ of $P$. Let $\mathrm{minmaxsum}(P, m)$ denote the minimum value of $\mathrm{maxsum}(Q)$ among all the possible divisions $Q$ of $P$ into $m$ sets.

The following pseudo code shows an algorithm that computes an approximation of $\mathrm{minmaxsum}(P, m)$. Below, $\mathrm{push}(S, x)$ pushes $x$ onto the stack $S$, $\mathrm{pop}(S)$ pops the top element of the stack $S$ and returns the popped element, and $\mathrm{top}(S)$ returns the top element of the stack $S$. Note that $\mathrm{top}(S)$ and $\mathrm{pop}(S)$ return the same value for the same stack $S$, but $\mathrm{top}(S)$ does not modify the stack.

$$
\begin{array}{l}
\textbf{approx-minmaxsum}(\text{integer set } P, \text{integer } m) \\
1: \quad Q = [P_1, P_2, \ldots, P_m] \leftarrow \text{An arbitrary division of } P \text{ into } m \text{ sets}; \\
2: \quad \textbf{for } (1 \leq i \leq m) \\
3: \quad \quad S_i \leftarrow \text{an empty stack}; \\
4: \quad \quad \textbf{foreach } (x \in P_i) \text{ push}(S_i, x); \\
5: \quad \textbf{while}(1) \\
6: \quad \quad j \leftarrow \arg\max_i \|\mathbf{S}_i\|; \quad \text{/* } j \leftarrow \text{one of the } i \text{'s that maximize } \|\mathbf{S}_i\| \text{ */}; \\
7: \quad \quad k \leftarrow \arg\min_i \|\mathbf{S}_i\|; \quad \text{/* } k \leftarrow \text{one of the } i \text{'s that minimize } \|\mathbf{S}_i\| \text{ */}; \\
8: \quad \quad \textbf{if } (\text{top}(S_j) + \|\mathbf{S}_k\| \geq \|\mathbf{S}_j\|) \textbf{ break}; \\
9: \quad \quad \text{push}(S_k, \text{pop}(S_j)); \\
10: \quad \textbf{return } \|\mathbf{S}_j\|;
\end{array}
$$

Answer the following questions.

(1) Calculate $\mathrm{minmaxsum}(\{3, 4, 5, 6\}, 2)$.

(2) Show $\mathrm{minmaxsum}(P, m) \geq \|\mathbf{P}\| / m$.

(3) Show that $\mathrm{approx\text{-}minmaxsum}(P, m) \leq 2 \cdot \mathrm{minmaxsum}(P, m)$ holds, regardless of whatever division $Q$ is chosen in line 2 of the above code.

(4) Show that the while loop in the above code will be repeated at most $n$ times, regardless of whatever division $Q$ is chosen in line 2.

(5) Describe data structures needed to make the above algorithm run in $O(n \log m)$ time, and explain how to use them.

---

以下是中文翻译：

我们考虑将一组相互不同的 $n$ 个正整数 $P = \{x_1, x_2, \ldots, x_n\}$ 划分为 $m$ 个集合 $P_1, P_2, \ldots, P_m$ $(1 < m < n, P = P_1 \cup P_2 \cup \ldots \cup P_m, \forall i, j (i \neq j) P_i \cap P_j = \emptyset)$，其中 $\emptyset$ 表示空集。集合序列 $Q = [P_1, P_2, \ldots, P_m]$ 称为 $P$ 的划分。我们用 $\|\mathbf{S}\|$ 表示 $S$ 中所有整数的和，如果 $S$ 是一个整数集合或由整数组成的堆栈。注意，若 $S$ 是空集合或空堆栈，则 $\|\mathbf{S}\| = 0$。

设 $\mathrm{maxsum}(Q) = \max_i \|\mathbf{P}_i\|$ 为 $P$ 的划分 $Q = [P_1, P_2, \ldots, P_m]$。设 $\mathrm{minmaxsum}(P, m)$ 为在 $P$ 所有可能划分 $Q$ 中 $\mathrm{maxsum}(Q)$ 的最小值。

下面的伪代码展示了一种计算 $\mathrm{minmaxsum}(P, m)$ 近似值的算法。下面，$\mathrm{push}(S, x)$ 将 $x$ 压入堆栈 $S$，$\mathrm{pop}(S)$ 弹出堆栈 $S$ 的顶部元素并返回弹出的元素，而 $\mathrm{top}(S)$ 返回堆栈 $S$ 的顶部元素。注意，$\mathrm{top}(S)$ 和 $\mathrm{pop}(S)$ 为相同堆栈 $S$ 返回相同的值，但 $\mathrm{top}(S)$ 不会修改堆栈。

$$
\begin{array}{l}
\textbf{approx-minmaxsum}(\text{integer set } P, \text{integer } m) \\
1: \quad Q = [P_1, P_2, \ldots, P_m] \leftarrow \text{An arbitrary division of } P \text{ into } m \text{ sets}; \\
2: \quad \textbf{for } (1 \leq i \leq m) \\
3: \quad \quad S_i \leftarrow \text{an empty stack}; \\
4: \quad \quad \textbf{foreach } (x \in P_i) \text{ push}(S_i, x); \\
5: \quad \textbf{while}(1) \\
6: \quad \quad j \leftarrow \arg\max_i \|\mathbf{S}_i\|; \quad \text{/* } j \leftarrow \text{one of the } i \text{'s that maximize } \|\mathbf{S}_i\| \text{ */}; \\
7: \quad \quad k \leftarrow \arg\min_i \|\mathbf{S}_i\|; \quad \text{/* } k \leftarrow \text{one of the } i \text{'s that minimize } \|\mathbf{S}_i\| \text{ */}; \\
8: \quad \quad \textbf{if } (\text{top}(S_j) + \|\mathbf{S}_k\| \geq \|\mathbf{S}_j\|) \textbf{ break}; \\
9: \quad \quad \text{push}(S_k, \text{pop}(S_j)); \\
10: \quad \textbf{return } \|\mathbf{S}_j\|;
\end{array}
$$

回答以下问题。

(1) 计算 $\mathrm{minmaxsum}(\{3, 4, 5, 6\}, 2)$。

(2) 证明 $\mathrm{minmaxsum}(P, m) \geq \|\mathbf{P}\| / m$。

(3) 证明不论第 2 行选择何种划分 $Q$，$\mathrm{approx\text{-}minmaxsum}(P, m) \leq 2 \cdot \mathrm{minmaxsum}(P, m)$。

(4) 证明不论第 2 行选择何种划分 $Q$，上述代码中的 while 循环最多重复 $n$ 次。

(5) 描述所需的数据结构以使上述算法运行在 $O(n \log m)$ 时间内，并解释如何使用它们。

### 题目描述

将由 $n$ 个互异正整数构成的集合
$P=\{x_1,\ldots,x_n\}$ 划分为 $m$ 个两两不交、并集为 $P$ 的集合
$P_1,\ldots,P_m$，其中 $1<m<n$；记划分为
$Q=[P_1,\ldots,P_m]$。对整数集合或整数栈 $S$，以
$\|S\|$ 表示元素总和，空集合或空栈的和为 $0$。定义

$$
\operatorname{maxsum}(Q)=\max_i\|P_i\|,
$$

并以 $\operatorname{minmaxsum}(P,m)$ 表示所有 $m$ 划分中上述最大和的最小值。

题中近似算法从任意划分开始，把每个 $P_i$ 的元素压入栈 $S_i$；循环选择总和最大的栈
$S_j$ 和总和最小的栈 $S_k$。若

$$
\operatorname{top}(S_j)+\|S_k\|\ge\|S_j\|,
$$

则停止并返回 $\|S_j\|$；否则将 $S_j$ 的栈顶弹出并压入
$S_k$。回答下列问题。

（1）计算
$\operatorname{minmaxsum}(\{3,4,5,6\},2)$。

（2）证明

$$
\operatorname{minmaxsum}(P,m)\ge\frac{\|P\|}{m}.
$$

（3）证明无论初始任意划分如何选择，算法返回值均满足

$$
\operatorname{approx\text{-}minmaxsum}(P,m)
\le2\,\operatorname{minmaxsum}(P,m).
$$

（4）证明无论初始划分如何选择，`while` 循环最多重复 $n$ 次。

（5）说明使算法达到 $O(n\log m)$ 运行时间所需的数据结构及其用法。

## **Kai**
### (1)

To find $\mathrm{minmaxsum}(\{3,4,5,6\},2)$, divide the set into two subsets so that the larger subset sum is minimized. The total sum is

$$
3+4+5+6=18,
$$

so every division has maximum subset sum at least $18/2=9$. The relevant divisions include:

- $P_1=\{3,6\},P_2=\{4,5\}$, whose sums are $9,9$;
- $P_1=\{3,5\},P_2=\{4,6\}$, whose sums are $8,10$;
- $P_1=\{3,4\},P_2=\{5,6\}$, whose sums are $7,11$.

The first division attains the lower bound. Hence

$$
\mathrm{minmaxsum}(\{3,4,5,6\},2)=9.
$$

### (2)

Let $P = \{x_1, x_2, \dots, x_n\}$, and suppose we divide $P$ into $m$ subsets $P_1, P_2, \dots, P_m$. By definition:

$$
\mathrm{minmaxsum}(P, m) = \min_Q \max_i \|\mathbf{P}_i\|
$$

where $Q$ is a possible division of $P$ into $m$ subsets.

For any division $Q$, the sum of all elements in $P$ must equal the sum of the elements in all subsets:

$$
\sum_{i=1}^m \|\mathbf{P}_i\| = \|\mathbf{P}\|
$$

Let $M = \max_i \|\mathbf{P}_i\|$. Then:

$$
m \cdot M \geq \|\mathbf{P}\|
$$

because the total sum is distributed across $m$ subsets, and the largest subset sum must be at least $\|\mathbf{P}\| / m$:

$$
M \geq \frac{\|\mathbf{P}\|}{m}
$$

Since $\mathrm{minmaxsum}(P, m)$ is the minimum possible value of $M$, we have:

$$
\mathrm{minmaxsum}(P, m) \geq \frac{\|\mathbf{P}\|}{m}
$$

### (3)

Let $A=\|S_j\|$, $B=\|S_k\|$, and $x=\operatorname{top}(S_j)$ when the algorithm stops.  Then

$$
A\le x+B.
$$

For $M=\mathrm{minmaxsum}(P,m)$, every element satisfies $x\le M$, and
$B\le\|P\|/m\le M$ by (2).  Therefore

$$
\mathrm{approx\text{-}minmaxsum}(P,m)=A\le x+B\le2M.
$$

### (4)

Suppose an element $x$ is moved from a stack of sum $A$ to a minimum stack of sum $B$.  The move condition gives

$$
B+x<A,\qquad B<A-x.
$$

Hence after the move every stack sum is at least $B$; the minimum stack sum never decreases.  If $x$ ever becomes the top of its stack again, that stack has sum $B+x$, while the current minimum is at least $B$.  The stopping condition then holds, so $x$ cannot be moved again.  Each successful iteration therefore moves a distinct element, and there are at most $n$ such iterations.

### (5)

To achieve an $O(n\log m)$ running time, use indexed priority queues for the stack sums:

1. Store each stack $S_i$ normally, and store $(\|S_i\|,i)$ in both an indexed min-heap and an indexed max-heap. The minimum-sum and maximum-sum stacks can then be found in $O(1)$ time.
2. In each iteration, pop the top element from the maximum-sum stack and push it onto the minimum-sum stack. Only these two sums change, so update their keys in both heaps in $O(\log m)$ time. The stack operations themselves take $O(1)$ time.

Initialization takes $O(n+m)$ time. By (4), the loop runs at most $n$ times, and each iteration costs $O(\log m)$. Since $m<n$, the total running time is $O(n\log m)$.

## **Knowledge**

贪心算法 集合划分 复杂度分析

### 重点词汇

- **division**: 划分
- **priority queue**: 优先队列
- **minmax**: 最小最大化

### 参考资料

1. Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press. Chapter 16: Greedy Algorithms.
2. Kleinberg, J., & Tardos, É. (2005). *Algorithm Design*. Pearson. Chapter 6: Greedy Algorithms.
