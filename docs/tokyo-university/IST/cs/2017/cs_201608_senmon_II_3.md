---
sidebar_label: 2016年8月実施 専門科目II 問題3
tags:
  - Tokyo-University
  - Computer-Science.Dynamic-Programming.Longest-Increasing-Subsequence
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2016年8月実施 専門科目II 問題3

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
Given a sequence $A:a_1,a_2,\ldots,a_n$ of pairwise distinct numbers, a sequence $a_{c_1},a_{c_2},\ldots,a_{c_k}$ with $1\le c_1<c_2<\cdots<c_k\le n$ is called a *subsequence* of $A$. A subsequence $a_{c_1},a_{c_2},\ldots,a_{c_k}$ is called an *increasing subsequence* if $a_{c_i}<a_{c_j}$ holds for all $i,j$ such that $i<j$. Similarly, it is called a *decreasing subsequence* if $a_{c_i}>a_{c_j}$ holds for all $i,j$ such that $i<j$.

Answer the following question.

(1) For the sequence

$$
A_0:\ 5,2,3,9,6,8
$$

show its longest increasing subsequence.

Given a sequence $A:a_1,a_2,\ldots,a_n$ of pairwise distinct numbers and an integer $i$ such that $1\le i\le n$, consider the set $S_i$ of increasing subsequences of $A$ whose last element is $a_i$, and let $\ell_i$ denote the length of a longest element of $S_i$. For example, for the sequence $A_0$ in Question (1) we have $S_4=\{(9),(5,9),(2,9),(3,9),(2,3,9)\}$ and $\ell_4=3$.

Answer the following questions.

(2) For the sequence $A_0$ in Question (1), compute $\ell_1,\ell_2,\ell_3$ and $\ell_5,\ell_6$.

(3) Given a sequence $A:a_1,a_2,\ldots,a_n$ of pairwise distinct numbers, let $\ell$ denote the length of a longest increasing subsequence. Using $\ell_i$ that is defined above, we let $d_m$ denote the number of $i$'s such that $\ell_i=m$. Show that there exists $m$ such that $d_m\ge n/\ell$.

(4) In the setting of Question (3), the length of a longest decreasing subsequence of $A$ is not smaller than $n/\ell$. Show this fact.

(5) Every sequence of pairwise distinct numbers of length $n$ has, either: an increasing subsequence of length not smaller than $\sqrt n$; or a decreasing subsequence of length not smaller than $\sqrt n$. Show this fact.

### 题目描述

给定两两不同的数列 $A=(a_1,\ldots,a_n)$。保持下标递增而抽取的序列称为子列；其值严格递增或严格递减时，分别称为递增子列或递减子列。

（1）求 $A_0=(5,2,3,9,6,8)$ 的一个最长递增子列。

对每个 $i$，令 $S_i$ 为以 $a_i$ 结尾的所有递增子列之集，$\ell_i$ 为其中最长者的长度。

（2）对 $A_0$ 求 $\ell_1,\ell_2,\ell_3,\ell_5,\ell_6$。

（3）对一般的 $A$，设最长递增子列长度为 $\ell$；对 $m=1,\ldots,\ell$，令
$d_m=|\{i\mid\ell_i=m\}|$。证明存在 $m$ 使 $d_m\ge n/\ell$。

（4）证明 $A$ 的最长递减子列长度不少于 $n/\ell$。

（5）证明：任意长度为 $n$ 且元素两两不同的数列，必有长度不少于 $\sqrt n$ 的递增子列，或长度不少于 $\sqrt n$ 的递减子列。

## **Kai**
### (1)
一个最长递增子列为

$$
(2,3,6,8).
$$

其长度为 $4$。

### (2)
逐项使用递推式

$$
\ell_i=1+\max\{\ell_j\mid j<i,\ a_j<a_i\},
$$

空集的最大值按 $0$ 计。得到

$$
(\ell_1,\ell_2,\ell_3,\ell_4,\ell_5,\ell_6)=(1,1,2,3,3,4).
$$

故所求为 $\ell_1=1,\ell_2=1,\ell_3=2,\ell_5=3,\ell_6=4$。

### (3)
每个 $\ell_i$ 恰为 $1,\ldots,\ell$ 中的一个值，故

$$
\sum_{m=1}^{\ell}d_m=n.
$$

由平均值原理，至少存在一个 $m$ 满足 $d_m\ge n/\ell$。

### (4)
固定（3）中这样的 $m$，按下标递增排列所有满足 $\ell_i=m$ 的项。若其中 $i<j$ 且 $a_i<a_j$，则可把 $a_j$ 接在以 $a_i$ 结尾、长度为 $m$ 的递增子列之后，从而 $\ell_j\ge m+1$，矛盾。

各项两两不同，故必有 $a_i>a_j$。因此这些项按原顺序构成长度

$$
d_m\ge\frac n\ell
$$

的递减子列。

### (5)
若 $\ell\ge\sqrt n$，最长递增子列已经满足要求。若 $\ell<\sqrt n$，由（4），最长递减子列长度至少为

$$
\frac n\ell>\sqrt n.
$$

故两者至少有一个长度不小于 $\sqrt n$。
