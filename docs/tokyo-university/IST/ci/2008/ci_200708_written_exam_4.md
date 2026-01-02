---
sidebar_label: '2007年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Explanation
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2007年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) 分割統治法 (divide and conquer algorithm)
2) B 木 (B-tree)
3) ナイキスト周波数
4) インパルス応答とステップ応答とその関係
5) ベクトル量子化
6) アウトオブオーダ (out-of-order) 実行
7) 正規文法と正規言語（必ず例を挙げて説明のこと）
8) Web システムにおける CGI (Common Gateway Interface)

## **Description (English)**
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately 4~8 lines of text.
If necessary, use examples or figures.

1) Divide and conquer algorithm
2) B-tree
3) Nyquist frequency
4) Impulse response and step response and their relationship
5) Vector quantization
6) Out-of-order execution
7) Regular grammar and regular language (Examples are mandatory.)
8) CGI (Common Gateway Interface) in Web systems

## **Kai**
**Divide and conquer algorithm**

A methodology includes three parts: dividing, conquering and merging. An divide-and-conquer algorithm first divides a problem into $a$ smaller subproblems (e.g. with $n/b$ size), then conquers them by solving them (the solution is also got by a recursive call, breaking into smallest constant-size pieces and gathering usually), and finally merges the solutions.

Some examples are Merge sort, binary search and binary tree traversal.

The time complexity for such an algorithm is $T(n)$, following this formula:
$$
T(n)=aT(n/b)+f(n)
$$

And we can solve $T(n)$ by building a tree to analyze with Master theorem.

For example, when $T(n)=T(n/2)+\Theta(n)$, there are $\Theta(1+2+\dots+n/2+n)=\Theta(n)$ calls.

**B-tree**

A data structure which is based on a $m$-ary tree, where the number of entries (keys) stored in every node is $n-1$ if it has $n$ subtrees. It satisfies that for an $m$-order B-Tree, (1) **Space Constraint:** except the root node must have ≥ 2 subtrees or zero, other internal nodes must have at most $m$ and at least $\lceil m/2\rceil$ subtrees; (2) **Ordering:** the stored keys are ordered: for a node represented by $S_0,K_1,S_1,\dots,K_n,S_n$, where $K_i$’s are keys and $S_i$’s are subtrees, $\max(S_0)<K_0<\min(S_1), \max(S_1)<K_1<\min(S_2),\dots$; (3) **Balance:** the leaves are all at the same depth.

In application, B-tree is used to store data in disk or databases. When querying data in disks, disk I/O is time-consuming (proportional to tree height) and B-tree can tackle that with a small height and wide nodes (with multiple entries, but without much cost since disk I/O uses a page with some 4KB data as an unit so an entry or multiple contiguous entries do not differ much). 

For a tree with $N$ nodes, any query, insertion or deletion takes $O(\log_m N)$ times. This makes B-tree better in disk I/O than binary tree data structures.