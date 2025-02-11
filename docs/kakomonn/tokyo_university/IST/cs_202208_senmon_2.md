---
comments: false
title: 東京大学 情報理工学系研究科 コンピュータ科学専攻 2022年8月実施 専門科目 問題2
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2022年8月実施 専門科目 問題2

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

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

## **Kai**
### (1)

To find $\mathrm{minmaxsum}(\{3, 4, 5, 6\}, 2)$, we need to find the optimal way to divide the set $\{3, 4, 5, 6\}$ into two subsets such that the maximum subset sum is minimized.

The total sum of the set $P$ is:

$$
\|\mathbf{P}\| = 3 + 4 + 5 + 6 = 18
$$

We need to divide this into two subsets such that the maximum sum is as small as possible. We can consider the following possible divisions:

- $P_1 = \{3, 6\}, P_2 = \{4, 5\}$:
  - $\|\mathbf{P}_1\| = 3 + 6 = 9$
  - $\|\mathbf{P}_2\| = 4 + 5 = 9$
  - Maximum sum = 9

- $P_1 = \{3, 5\}, P_2 = \{4, 6\}$:
  - $\|\mathbf{P}_1\| = 3 + 5 = 8$
  - $\|\mathbf{P}_2\| = 4 + 6 = 10$
  - Maximum sum = 10

- $P_1 = \{3, 4\}, P_2 = \{5, 6\}$:
  - $\|\mathbf{P}_1\| = 3 + 4 = 7$
  - $\|\mathbf{P}_2\| = 5 + 6 = 11$
  - Maximum sum = 11

The minimum maximum sum among these divisions is 9. Therefore:

$$
\mathrm{minmaxsum}(\{3, 4, 5, 6\}, 2) = 9
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

The algorithm attempts to balance the largest and smallest subset sums by moving the top element from the stack with the largest sum to the stack with the smallest sum until no improvement can be made.

Let $M = \mathrm{minmaxsum}(P, m)$. Initially, each subset in the division $Q$ has a sum less than or equal to $M$.

When the algorithm moves an element from the subset with the largest sum to the subset with the smallest sum, the maximum possible increase in the smallest sum is bounded by the value of the largest element moved. This adjustment ensures that the final maximum sum $M_f$ in the approximate solution satisfies:

$$
M_f \leq M + M \leq 2M
$$

Thus:

$$
\mathrm{approx\text{-}minmaxsum}(P, m) \leq 2 \cdot \mathrm{minmaxsum}(P, m)
$$

### (4)

Each iteration of the while loop in the pseudo-code moves an element from the stack $S_j$ (which has the maximum sum) to the stack $S_k$ (which has the minimum sum). Since the total number of elements in all stacks is $n$, and each move reduces the number of elements in $S_j$ by one, the maximum number of iterations cannot exceed $n$. After $n$ moves, the stacks have been exhausted of elements that can be moved:

$$
\text{Number of while loop iterations } \leq n
$$

### (5)

To achieve an $O(n \log m)$ runtime, we can use a priority queue (or a binary heap) for efficiently finding and updating the stacks with the maximum and minimum sums. The steps are as follows:

1. **Initialize**: Use two priority queues, one for the stack with the maximum sum and one for the stack with the minimum sum.
   - Insert each stack's sum along with its identifier into the respective priority queues. Both insertion and deletion in a priority queue take $O(\log m)$ time.

2. **Update**: During each iteration of the while loop:
   - Extract the maximum from the "max" priority queue and the minimum from the "min" priority queue.
   - Perform the pop operation from the stack with the maximum sum and push the element onto the stack with the minimum sum.
   - Update the priority queues with the new sums. This step also takes $O(\log m)$ time.

Since each operation inside the while loop is $O(\log m)$, and the loop runs at most $n$ times, the total time complexity of the algorithm is $O(n \log m)$.

## **Knowledge**

贪心算法 集合划分 复杂度分析

### 重点词汇

- **division**: 划分
- **priority queue**: 优先队列
- **minmax**: 最小最大化

### 参考资料

1. Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press. Chapter 16: Greedy Algorithms.
2. Kleinberg, J., & Tardos, É. (2005). *Algorithm Design*. Pearson. Chapter 6: Greedy Algorithms.
