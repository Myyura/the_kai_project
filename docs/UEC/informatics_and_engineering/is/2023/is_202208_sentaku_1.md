---
sidebar_label: 2022年8月実施 選択問題 アルゴリズムとデータ構造
tags:
  - University-of-Electro-Communications
  - Computer-Science.Data-Structures.Binary-Search-Tree
  - Computer-Science.Data-Structures.Binary-Search-Tree-Insertion-and-Deletion
  - Computer-Science.Data-Structures.Preorder-Tree-Traversal
  - Computer-Science.Data-Structures.Inorder-Tree-Traversal
  - Computer-Science.Data-Structures.Balanced-Binary-Search-Tree
  - Computer-Science.Data-Structures.Balanced-Binary-Search-Tree-Height-Bounds
---

# 電気通信大学 情報理工学研究科 情報学専攻 2022年8月実施 選択問題 アルゴリズムとデータ構造

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

二分探索木への通常の挿入関数 $\mathrm{insertA}$、四種類の回転
$\mathrm{rot1},\ldots,\mathrm{rot4}$、および平衡を保つ挿入関数
$\mathrm{insertB}$ を考える。

1. 配列
   $$
   C_1=(4,6,2,3,5,1,7),\qquad
   C_2=(1,7,2,6,3,5,4)
   $$
   を順に挿入した木と高さを示せ。
2. 各木の前順・中順走査の出力を示せ。
3. $1,2,3,4$ の全順列について、高さ $2$ と高さ $3$ の木になる順列数を求めよ。
4. $N$ 要素からなる二分探索木の最良・最悪の高さのオーダを答えよ。
5. 指定された二本の木に単回転・二重回転を施した結果を示せ。
6. $\mathrm{insertB}$ の四つの空欄を回転関数で埋めよ。

### 题目描述

本题考查二叉搜索树的插入、树高、先序与中序遍历、插入顺序计数，以及通过单旋转和双旋转维持平衡。

## **Kai**

### 1.

$C_1$ から得られる木は

~~~text
        4
      /   \
     2     6
    / \   / \
   1   3 5   7
~~~

であり、

$$
\boxed{h(C_1)=2}.
$$

$C_2$ から得られる木は

~~~text
1
 \
  7
 /
2
 \
  6
 /
3
 \
  5
 /
4
~~~

であり、

$$
\boxed{h(C_2)=6}.
$$

### 2.

前順走査は根・左・右、中順走査は左・根・右の順である。したがって、

$$
\begin{array}{c|l|l}
&\text{前順}&\text{中順}\\ \hline
C_1&4,2,1,3,6,5,7&1,2,3,4,5,6,7\\
C_2&1,7,2,6,3,5,4&1,2,3,4,5,6,7
\end{array}
$$

### 3.

全 $4!=24$ 通りを分類すると、

$$
\boxed{\text{高さ }2:\ 16\text{ 通り}},\qquad
\boxed{\text{高さ }3:\ 8\text{ 通り}}.
$$

### 4.

最良の場合は高さが対数的、最悪の場合は一直線の木となる。よって、

$$
\boxed{h_{\min}=O(\log N)},\qquad
\boxed{h_{\max}=O(N)}.
$$

### 5.

$D_1=(4,3,2,1)$ の木に $\mathrm{rot1}$ を施すと、

~~~text
    3
   / \
  2   4
 /
1
~~~

となる。また、$D_2=(4,1,3,2)$ の木に $\mathrm{rot2}$ を施すと、

~~~text
    3
   / \
  1   4
   \
    2
~~~

となる。

### 6.

右部分木が高い場合、右の子も右寄りなら左単回転、左寄りなら右左二重回転を行う。左部分木が高い場合は対称である。したがって、

$$
\boxed{
\begin{aligned}
\text{(A)}&:\ \mathrm{rot3}(p),&
\text{(B)}&:\ \mathrm{rot4}(p),\\
\text{(C)}&:\ \mathrm{rot1}(p),&
\text{(D)}&:\ \mathrm{rot2}(p).
\end{aligned}}
$$
