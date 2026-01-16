---
sidebar_label: '2008年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Binary-Search
  - Hash-Table
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2008年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (English)**
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