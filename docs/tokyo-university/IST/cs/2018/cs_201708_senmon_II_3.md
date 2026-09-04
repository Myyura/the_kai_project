---
sidebar_label: 2017年8月実施 専門科目II 問題3
tags:
  - Tokyo-University
  - Computer-Science.Data-Structures.Minimum-Nodes-in-Height-Balanced-Binary-Tree
  - Discrete-Mathematics.Combinatorics.Fibonacci-Recurrence
  - Computer-Science.Data-Structures.Heap-Order-Assignment-by-Linear-Time-Construction
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2017年8月実施 専門科目II 問題3

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

Let $L(v)$ denote the set of leaves in the descendants of node $v$ in a tree, and $p(v,w)$ denote the number of edges of the simple path from node $v$ to node $w$. For a non-leaf node $v$, $\max_{w\in L(v)}p(v,w)$ is called the height of $v$. Let the height of a leaf be $0$. The height of the root of a tree is called the height of the tree.

Here, we have a binary tree $T_n$ with height $n\ge0$, in which each node $v$ must have one of the following properties.

- $v$ is a leaf.
- $v$ has only one child, and the height of $v$ is $1$.
- $v$ has two children, and the heights of the two children of $v$ differ by $1$.

Let $N_n$ denote the number of nodes in $T_n$ for $n\ge0$. Let $r=(1+\sqrt5)/2$.

Answer the following questions.

(1) Calculate $N_5$.

(2) Express $N_n$ in terms of $N_{n-1}$ and $N_{n-2}$ for $n\ge2$.

(3) Prove that $N_n\ge r^n$ for every $n\ge0$.

(4) Prove that $N_n\le r^{n+2}$ for every $n\ge0$.

(5) Consider the problem of assigning each of given $N_n$ integers to a distinct node of $T_n$. The integer assigned to each node $v$ must be no smaller than any of the integers assigned to $v$'s children. Show an $O(r^n)$ algorithm that computes such an assignment, with a proof that the algorithm runs indeed in $O(r^n)$ time. Note that the $N_n$ integers may not be sorted in the input.

### 题目描述

树中结点 $v$ 的高度为它到后代叶结点的最大距离，叶结点高度为 $0$。给定高度为
$n\ge0$ 的二叉树 $T_n$，每个结点满足以下一种情形：

- 是叶结点；
- 只有一个孩子，且自身高度为 $1$；
- 有两个孩子，且两棵子树的高度相差 $1$。

令 $N_n$ 为 $T_n$ 的结点数，$r=(1+\sqrt5)/2$。

（1）求 $N_5$。

（2）对 $n\ge2$，用 $N_{n-1},N_{n-2}$ 表示 $N_n$。

（3）证明 $N_n\ge r^n$。

（4）证明 $N_n\le r^{n+2}$。

（5）将给定的 $N_n$ 个未排序整数一一放到 $T_n$ 的结点上，使每个父结点的整数不小于任一孩子。给出 $O(r^n)$ 算法并证明复杂度。

## **Kai**

### （1）与（2）

$N_0=1,N_1=2$。当 $n\ge2$ 时，根的两棵子树高度分别为 $n-1,n-2$，所以

$$
N_n=N_{n-1}+N_{n-2}+1.
$$

于是

$$
N_2=4,\quad N_3=7,\quad N_4=12,\quad \boxed{N_5=20}.
$$

等价地，若 Fibonacci 数满足 $F_0=0,F_1=1$，则 $N_n=F_{n+3}-1$。

### （3）

由 $r^2=r+1$ 得 $r^n=r^{n-1}+r^{n-2}$。基例
$N_0=1=r^0$、$N_1=2>r$ 成立。若结论对 $n-1,n-2$ 成立，则

$$
N_n=N_{n-1}+N_{n-2}+1
\ge r^{n-1}+r^{n-2}=r^n.
$$

故结论由归纳法成立。

### （4）

令 $M_n=N_n+1$，则 $M_n=M_{n-1}+M_{n-2}$，且
$M_0=2\le r^2$、$M_1=3\le r^3$。若结论对前两项成立，则

$$
M_n\le r^{n+1}+r^n=r^{n+2}.
$$

因此 $N_n<M_n\le r^{n+2}$。

### （5）

先任意放置所有整数，再按后序遍历处理结点。处理结点 $v$ 时，若较大的孩子值大于
$v$ 的值，就交换二者并继续沿该孩子向下筛。此时两棵孩子子树已经分别满足最大堆序，故下筛完成后以 $v$ 为根的整棵子树也满足要求。

高度为 $n$ 的根结点下筛耗时 $O(n)$。设总耗时为 $C_n$，则

$$
C_n=C_{n-1}+C_{n-2}+O(n).
$$

按 Fibonacci 递推展开，并用 $F_k=O(r^k)$，有

$$
C_n
=O\!\left(F_n+\sum_{k=2}^n kF_{n-k+1}\right)
=O\!\left(r^n\left(1+\sum_{k=2}^n\frac{k}{r^{k-1}}\right)\right)
=O(r^n).
$$

初始放置和后序遍历也只需 $O(N_n)=O(r^n)$，故总复杂度为 $O(r^n)$。
