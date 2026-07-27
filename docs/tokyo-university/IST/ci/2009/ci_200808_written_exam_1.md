---
sidebar_label: 2008年8月実施 筆記試験 第1問
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Binary-Search
  - Computer-Science.Data-Structures.Hash-Table
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2008年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Given $n$ records $r_1, r_2, \dots, r_n$, each has a key $k_1, k_2, \dots, k_n$, respectively. Given a key, consider searching for the corresponding record. For a given query key $v$, if there is a key $k_j$ where $v = k_j$ ($1 \le j \le n$) then the search is successful and the record $r_j$ is returned, otherwise the search fails and the failure is returned.

Let $p_j$ be the probability where the query key $v$ is $k_j$, and $p_{\text{miss}}$ be the probability of the search failure. The computation time is almost proportional to the number of comparisons with $v$. Let us calculate the average number of comparisons $\overline{C}$ and the maximum number of comparisons $C_{\text{max}}$.

(1) Consider a sequential search that compares $v$ with keys from $k_1$ to $k_n$.
(a) Obtain $\overline{C}$ and $C_{\text{max}}$ when $p_1 = p_2 = \dots = p_n = \frac{1}{2n}, p_{\text{miss}} = \frac{1}{2}$.
(b) Prove that $\overline{C} \le 2$ when $p_1 = \frac{1}{2}, p_2 = \frac{1}{4}, \dots, p_n = \frac{1}{2^n}, p_{\text{miss}} = \frac{1}{2^n}$.

(2) Consider a binary search after sorting the keys. Let $n = 2^m - 1$ ($m$ is a natural number), and moreover, one comparison will determine whether $v < k_j, v = k_j$ or $v > k_j$.
(a) Obtain $\overline{C}$ and $C_{\text{max}}$ for each case of $m=1, 2, 3, 4$, when $p_1 = p_2 = \dots = p_n = p_{\text{miss}}$.
(b) Obtain $\overline{C}$ and $C_{\text{max}}$ as a function of $m$ when $p_1 = p_2 = \dots = p_n = p_{\text{miss}}$.

(3) Consider a search using a hash table. The records $r_1, \dots, r_8$ are inserted into the hash table of size $S = 17$ using the hash function $h(x) = x \bmod S$. Let the key values each be $k_1 = 10, k_2 = 1, k_3 = 17, k_4 = 97, k_5 = 21, k_6 = 4, k_7 = 39, k_8 = 73$.
(a) Draw the structure of the hash table by choosing an appropriate method for avoiding collision.
(b) Obtain $\overline{C}$ and $C_{\text{max}}$ when $p_1 = p_2 = \dots = p_8, p_{\text{miss}} = 0$.

(4) Describe in general the advantages and disadvantages of sequential search, binary search and search using a hash table.

### 题目描述

给定 \(n\) 条记录 \(r_1,r_2,\ldots,r_n\)，对应键为 \(k_1,k_2,\ldots,k_n\)。对查询键 \(v\)，若存在 \(v=k_j\)（\(1\le j\le n\)），则查找成功并返回 \(r_j\)；否则返回失败。记 \(v=k_j\) 的概率为 \(p_j\)，失败概率为 \(p_{\mathrm{miss}}\)。计算时间近似与同 \(v\) 比较的次数成正比，以下均要求平均比较次数 \(\overline C\) 和最大比较次数 \(C_{\max}\)。

1. 按 \(k_1\) 到 \(k_n\) 的顺序进行顺序查找。
   1. 当 \(p_1=\cdots=p_n=\frac1{2n}\)、\(p_{\mathrm{miss}}=\frac12\) 时，求 \(\overline C\) 与 \(C_{\max}\)。
   2. 当 \(p_1=\frac12,p_2=\frac14,\ldots,p_n=\frac1{2^n}\)、\(p_{\mathrm{miss}}=\frac1{2^n}\) 时，证明 \(\overline C\le2\)。
2. 将键排序后进行二分查找。令 \(n=2^m-1\)，其中 \(m\) 为自然数；一次比较即可判断 \(v<k_j\)、\(v=k_j\) 或 \(v>k_j\)。
   1. 在 \(p_1=\cdots=p_n=p_{\mathrm{miss}}\) 时，分别对 \(m=1,2,3,4\) 求 \(\overline C\) 与 \(C_{\max}\)。
   2. 在相同等概率条件下，用 \(m\) 表示 \(\overline C\) 与 \(C_{\max}\)。
3. 使用大小 \(S=17\) 的哈希表和哈希函数 \(h(x)=x\bmod S\)，依次插入键值
   \[
   k_1=10,\ k_2=1,\ k_3=17,\ k_4=97,\ k_5=21,\ k_6=4,\ k_7=39,\ k_8=73.
   \]
   1. 自选一种合适的冲突处理方法，画出哈希表结构。
   2. 当 \(p_1=\cdots=p_8\)、\(p_{\mathrm{miss}}=0\) 时，求 \(\overline C\) 与 \(C_{\max}\)。
4. 概括比较顺序查找、二分查找和哈希表查找各自的优缺点。

#### 考点

- **顺序查找与二分查找**：结合成功键和失败查询的概率，推导平均及最坏比较次数，并分析完全二叉判定结构。
- **哈希表与冲突处理**：按给定模哈希函数放置键，选择开放定址或链地址等方案处理碰撞并统计比较次数。
