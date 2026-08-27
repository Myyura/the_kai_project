---
sidebar_label: 2024年8月実施 選択問題 アルゴリズムとデータ構造
tags:
  - University-of-Electro-Communications
  - Computer-Science.Data-Structures.Binary-Search-Tree
  - Computer-Science.Data-Structures.Inorder-Tree-Traversal
  - Computer-Science.Data-Structures.Preorder-Tree-Traversal
  - Computer-Science.Data-Structures.Postorder-Tree-Traversal
  - Computer-Science.Data-Structures.Stack
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
  - Computer-Science.Dynamic-Programming.Optimal-Binary-Search-Tree
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2024年8月実施 選択問題 アルゴリズムとデータ構造

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

二分木の再帰的な深さ優先走査について、中順走査の出力位置を答え、スタックを用いる非再帰版を書け。また、$10,15,3,2,7,4,12$ を順に挿入した二分探索木を描き、最悪時の計算量を説明せよ。

最後に、キー $11,12,13,14,15$ の探索頻度がそれぞれ $4,2,1,3,3$ のとき、探索コストが最小となる二分探索木を求めよ。

### 题目描述

回答二叉树中序遍历的输出位置，写出基于栈的非递归中序遍历；构造指定插入序列的二叉搜索树并说明最坏复杂度；再按给定查找频率求最优二叉搜索树。

## **Kai**

### (1)

中順走査では左部分木を走査した直後に根を出力する。したがって、

$$
\boxed{\text{（イ）}}
$$

である。

### (2)

~~~text
InOrder(root)
    S <- empty stack
    p <- root
    while p != NULL or S is not empty
        while p != NULL
            push(p, S)
            p <- left[p]
        p <- pop(S)
        output key[p]
        p <- right[p]
~~~

### (3)

挿入後の二分探索木 $T2$ は次のとおりである。

~~~mermaid
flowchart TD
  n10["10  root[T2]"] --> n3["3"]
  n10 --> n15["15"]
  n3 --> n2["2"]
  n3 --> n7["7"]
  n7 --> n4["4"]
  n15 --> n12["12"]
~~~

### (4)

昇順または降順に近い順序で挿入すると、木が片側だけに伸び、高さが $n-1$ となり得る。このとき探索・挿入・削除には根から最大 $n$ 個の頂点を調べる必要がある。したがって、

$$
\boxed{\text{最悪計算量は }O(n)}
$$

となり、平衡な場合の $O(\log n)$ より悪化する。

### (5)

区間 $i,\ldots,j$ の最小コストを $C(i,j)$、頻度を $q_k$ とすると、

$$
C(i,j)=
\min_{i\le r\le j}
\left\{
C(i,r-1)+C(r+1,j)+\sum_{k=i}^{j}q_k
\right\},
\qquad C(i,i-1)=0.
$$

この漸化式を計算すると最小値は $27$ で、根は $14$ となる。

~~~mermaid
flowchart TD
  n14["14  root[T3]"] --> n11["11"]
  n14 --> n15["15"]
  n11 --> n12["12"]
  n12 --> n13["13"]
~~~

実際、探索コストは

$$
3\cdot1+4\cdot2+3\cdot2+2\cdot3+1\cdot4
=\boxed{27}.
$$
