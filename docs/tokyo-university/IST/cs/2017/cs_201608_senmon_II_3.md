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
