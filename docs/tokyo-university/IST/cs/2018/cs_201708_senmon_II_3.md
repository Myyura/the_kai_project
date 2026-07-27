---
sidebar_label: "2017年8月実施 専門科目II 問題3"
tags:
  - Tokyo-University
  - Computer-Science.Data-Structures.Minimum-Nodes-in-Height-Balanced-Binary-Tree
  - Discrete-Mathematics.Combinatorics.Fibonacci-Recurrence
  - Computer-Science.Data-Structures.Heap-Order-Assignment-by-Linear-Time-Construction
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2017年8月実施 専門科目II 問題3

## **Author**
[kainoj](https://github.com/kainoj/utokyo-cs), [Zephyr](https://inshi-notes.zephyr-zdz.space/Solutions/IS_CS/2018S/IS_CS-2018S2-03)

## **Description**
Let $L(v)$ denote the set of leaves in the descendants of node $v$ in a tree, and let $p(v, w)$ denote the number of edges of the simple path from node $v$ to node $w$. For a non-leaf node $v$, $\max_{w \in L(v)} p(v, w)$ is called the height of $v$. Let the height of a leaf be $0$. The height of the root of a tree is called the height of the tree.

Here, we have a binary tree $T_n$ with height $n \geq 0$, in which each node $v$ must have one of the following properties:

- $v$ is a leaf.
- $v$ has only one child, and the height of $v$ is $1$.
- $v$ has two children, and the heights of the two children of $v$ differ by $1$.

Let $N_n$ denote the number of nodes in $T_n$ for $n \geq 0$. Let $r = \frac{1 + \sqrt{5}}{2}$.

Answer the following questions:

(1) Calculate $N_5$.

(2) Express $N_n$ in terms of $N_{n-1}$ and $N_{n-2}$ for $n \geq 2$.

(3) Prove that $N_n \geq r^n$ for every $n \geq 0$.

(4) Prove that $N_n \leq r^{n+2}$ for every $n \geq 0$.

(5) Consider the problem of assigning each of the given $N_n$ integers to a distinct node of $T_n$. The integer assigned to each node $v$ must be no smaller than any of the integers assigned to $v$'s children. Show an $O(r^n)$ algorithm that computes such an assignment, with a proof that the algorithm runs indeed in $O(r^n)$ time. Note that the $N_n$ integers may not be sorted in the input.

### 题目描述

在一棵树中，记 $L(v)$ 为结点 $v$ 的后代叶结点集合，$p(v,w)$ 为从
$v$ 到 $w$ 的简单路径所含边数。非叶结点 $v$ 的高度定义为
$\max_{w\in L(v)}p(v,w)$，叶结点的高度为 $0$，树根的高度称为树的高度。

给定高度为 $n\ge0$ 的二叉树 $T_n$，其中每个结点 $v$ 必须满足以下三种情形之一：

- $v$ 是叶结点；
- $v$ 只有一个子结点，且 $v$ 的高度为 $1$；
- $v$ 有两个子结点，且两个子结点的高度相差 $1$。

令 $N_n$ 表示 $T_n$ 的结点数，并令
$r=(1+\sqrt5)/2$。回答下列问题。

（1）计算 $N_5$。

（2）对 $n\ge2$，用 $N_{n-1}$ 和 $N_{n-2}$ 表示 $N_n$。

（3）证明对每个 $n\ge0$，都有 $N_n\ge r^n$。

（4）证明对每个 $n\ge0$，都有 $N_n\le r^{n+2}$。

（5）现有 $N_n$ 个未必已排序的整数，需要将它们一一分配给 $T_n$ 的不同结点，并使每个结点上的整数都不小于其任一子结点上的整数。给出完成该分配的
$O(r^n)$ 算法，并证明其运行时间确为 $O(r^n)$。

#### 考点

- **高度平衡二叉树的最少结点数**：由两个子树高度相差一建立结点数递推。
- **斐波那契型递推与黄金比界**：利用 $r^2=r+1$ 和归纳法证明 $N_n$ 的上下界。
- **线性时间建堆**：在树结构上构造满足父结点不小于子结点的赋值，并结合 $N_n=\Theta(r^n)$ 证明复杂度。

## **Kai**
Setting: $T_n$ stands for AVL tree of height $n$.
Denote $N_n$ for number of nodes in $T_n$.

### (1)
$20$

### (2)

$$
N_n = N_{n-1} + N_{n-2} + 1 
$$

Bonus: note that $N_n = \text{Fib}_{n+3} - 1$  where $\text{Fib}_0 = 0$.

Proof goes by induction:

$$
N(0) = 1 = 2 - 1 = \text{Fib}_3 - 1,
$$

$$
N(1) = 2 = 3 - 1 = \text{Fib}_4 - 1.
$$

Inductive step:

$$
N_n = N_{n-1} + N_{n-2} + 1 = (\text{Fib}_{n+2} - 1) + (\text{Fib}_{n+1} - 1) + 1 = \text{Fib}_{n+3}-1    
$$

### (3)
Note that $r^n = r^{n-1} + r^{n-2}$.
To see that start with:

$$
 r^2 = \left(\frac{1+\sqrt{5}}{2}\right)^2 = \frac{1+\sqrt{5}}{2} + 1 = r+1   
$$

and multiply it by $r^{n-2}$ both sides.

The rest goes by induction. 

Base case: $N_0 = 1 \geq r^0$, $N_1 = 2 > r^1$.

Inductive step:

$$
N_n = N_{n-1} + N_{n-2} + 1 \geq r^{n-1} + r^{n-2} = r^n
$$

### (4)
Again, by induction.

Base: tree of height $0$ has $1< r^2$ nodes.

Induction:

$$
N_n = 1 + N_{n-1} + N_{n-2} \leq 1 + r^{n+1} + r^{n} = r^{n+2} + 1
$$

### (5)
We are tasked with constructing an AVL tree of height $n$ while assigning integers to each node such that the AVL properties are preserved. By precomputing subtree sizes using dynamic programming, the assignment process can be streamlined.

Algorithm Steps:

**Precompute Subtree Sizes**: Use dynamic programming to calculate the sizes of all subtrees up to height $n$. Define $\text{size}[h]$ to store the size of a tree of height $h$:

$$
\text{size}[h] = \begin{cases}
  1, &\text{if } h = 0,\\
  1 + \text{size}[h-1] + \text{size}[h-2], &\text{if } h > 0.
\end{cases}
$$

This step runs in $O(n)$ time.

**Main Function `fillTree(arr, h)`:**

- Base case: if $h=0$, return a tree with a single node containing the first element of `arr`.
- Calculate the sizes for left and right subtrees using the precomputed $\text{size}[h]$:

$$
\text{leftSize} = \text{size}[h-1], \quad \text{rightSize} = \text{size}[h-2]
$$

- Use `quickSelect` to find the `(leftSize+1)th` smallest element in `arr` to be the root.
- Recursively fill the left subtree with the smallest `leftSize` elements, and the right subtree with the largest `rightSize` elements.
- Return the tree.

**QuickSelect**: This algorithm finds the kth smallest element in an array in average $O(n)$ time. It uses a pivot to partition the array and recursively selects the kth element from the appropriate partition.

To rigorously analyze the time complexity of constructing the AVL tree, we use the **Akra-Bazzi Theorem**, which is a generalization of the Master Theorem and is more suitable for handling recurrences with multiple recursive branches and non-uniform problem sizes.

The time complexity $T(N_n)$ for constructing an AVL tree of height $n$ satisfies the following recurrence relation:

$$
T(N_n) = T\left(\frac{N_n}{r} \right) + T \left(\frac{N_n}{r^2} \right) + O(N_n)
$$

Determine $p$ for the Akra-Bazzi Theorem:

$$
\left(\frac{1}{r}\right)^p + \left(\frac{1}{r^2}\right)^p = 1 \Rightarrow p = 1
$$

Hence we have

$$
T(N_n) = O(N_n) = O(r^n)
$$
