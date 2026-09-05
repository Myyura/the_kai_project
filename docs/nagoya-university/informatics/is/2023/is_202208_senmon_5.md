---
sidebar_label: 2022年8月実施 専門 問5
tags:
  - Nagoya-University
  - Computer-Science.Data-Structures.Binary-Heap
---
# 名古屋大学 情報学研究科 情報システム学専攻 2022年8月実施 専門 問5

## **Author**
祭音Myyura

## **Description**

出典：[名古屋大学公表問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2022/09/02e75abcc32acb88cd7505bad377f983.pdf)。

配列を利用してヒープを実現し，優先度付きキューとして使用することを考える．
取り扱うデータは整数であると仮定し，データの値そのものをヒープのキーとして使用する．
ヒープは，最下層のみに節点の欠落を許す完全2分木として構成し，最下層の節点は左側から詰めて配置する．
ヒープの根節点を節点 1，節点 i の左右の子をそれぞれ節点 2i, 節点 2i+1 と呼ぶ．
内部節点 i のキーの値は，その子 2i および 2i+1 のキーの値以上となっている必要があり，これをヒープ条件という．

十分大きなサイズを持つ配列 A の存在を仮定し，ヒープにおける節点 i のデータを配列要素 A\[i\] に格納する．
また，配列 A の中に格納されているデータ数（ヒープの節点数）を変数A.size に代入して記録する（したがって，ヒープのデータは A\[1\], ..., A\[A.size\]に格納されている）．
疑似コード1の Heapify は節点 i で局所的に崩れたヒープ条件を修復する操作，疑似コード 2 の Build-Heap は全ての節点でヒープ条件が成り立つようデータを移動する操作である．
なお，$\lfloor x \rfloor$ は $x$ 以下の最大整数を表す．

(1) 配列 A の中に，図 1 に示すようなデータが格納されている．この図に対応する配列要素 A\[1\], ..., A\[10\] の値を示せ．

(2) 問 (1) の配列 A に対し Build-Heap(A) を実行した後のヒープを，図 1 のような2分木として示せ．

上記のように実現したヒープを利用し，優先度付きキューを構成する．
優先度付きキューから最大のデータを取り出す Pull 操作，優先度付きキューにデータ（キー）を挿入する Push 操作は，疑似コード 3,4 のように実現される．

(3) 疑似コード 3 で (X) となっている箇所に記載すべき操作を，1 行の疑似コードとして示せ．
複数の疑似コードが考えられる場合は，できるだけ効率の良いものを解答すること．

(4) 図 2 のヒープが配列 A に格納されているとする．このとき，Push(A,15) を実行した後のヒープを2分木として示せ．

#### 疑似コード 1: Heapify(A, i)

```text showLineNumbers
l = 2i
r = 2i + 1
largest = i
if l ≤ A.size and A[l] > A[largest] then
    largest = l
if r ≤ A.size and A[r] > A[largest] then
    largest = r
if largest ≠ i then
    swap A[i], A[largest]
    Heapify(A, largest)
```

#### 疑似コード 2: Build-Heap(A)

```text showLineNumbers
for i = floor(A.size / 2) down to 1 do
    Heapify(A, i)
```

![図1：ヒープ構成前の初期データ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/is/2023/nagoya-is2023-heap1.svg)

#### 疑似コード 3: Pull(A)

```text showLineNumbers
if A.size < 1 then
    error "underflow"
max = A[1]
A[1] = A[A.size]
A.size = A.size - 1
(X)
return max
```

#### 疑似コード 4: Push(A, key)

```text showLineNumbers
A.size = A.size + 1
A[A.size] = key
i = A.size
p = floor(i / 2)
while i > 1 and A[p] < A[i] do
    swap A[p], A[i]
    i = p
    p = floor(i / 2)
```

優先度付きキューに格納されているデータ数（ヒープの節点数）を n とする．

(5) Push の最悪時間計算量を n に関するオーダー記法で示せ．また，その計算量となる理由を説明せよ．

(6) Build-Heap の最悪時間計算量を　n　に関するオーダー記法で示せ．また，その計算量となる理由を説明せよ．

![図2：Push 操作前のヒープ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/is/2023/nagoya-is2023-heap2.svg)

### 题目描述

使用数组实现最大堆，并将其作为优先队列。堆是一棵仅允许最底层缺少节点、且该层节点从左向右排列的完全二叉树。根为节点 1，节点 $i$ 的左右孩子分别为 $2i$、$2i+1$；每个内部节点的键值必须不小于其孩子的键值。节点 $i$ 的数据存于 `A[i]`，节点数记为 `A.size`。

原题给出了 `Heapify`、`Build-Heap`、取出最大元素的 `Pull` 和插入元素的 `Push` 四段伪代码，以及图 1、图 2 中的具体树。`Heapify` 修复以某节点为根处局部破坏的堆条件，`Build-Heap` 使整个数组满足堆条件。完整伪代码和图示见上文。

回答下列问题。

1. 将图 1 的树按数组表示，写出 `A[1]` 至 `A[10]` 的值。
2. 对第 1 问的数组执行 `Build-Heap(A)`，以二叉树形式画出结果。
3. 在 `Pull` 的伪代码 3 中，用一行尽可能高效的伪代码补全位置 (X)。
4. 假设图 2 的堆存于数组 `A`，执行 `Push(A,15)` 后画出所得二叉树。
5. 设堆中有 $n$ 个数据，给出 `Push` 的最坏时间复杂度并说明原因。
6. 给出 `Build-Heap` 的最坏时间复杂度并说明原因。

## **Kai**
### (1)

```text
A[1..10] = [14, 8, 4, 11, 7, 12, 6, 2, 13, 1]
```

### (2)

```text
                             14
                        /          \
                       13           12
                    /      \      /    \
                  11        7    4      6
                /    \     /
               2      8   1
```

### (3)
Heapify(A, 1)

### (4)

```text
                             16
                        /          \
                       15           10
                    /      \      /    \
                  12        14   8      6
                /    \     /   \
               1      7   2     5
```

### (5)

新しい節点から根まで上がる回数は高々 $\lfloor\log_2(n+1)\rfloor$ であり、各反復は定数時間である。既存の全キーより大きいキーを挿入すると根まで上がるので、最悪時間計算量は $\Theta(\log n)$ である。

### (6)

節点 $i$ の部分木の高さを $h_i$ とすると、Heapify の時間は $O(1+h_i)$ である。高さが $h$ 以上となる節点は、左端の深さ $h$ の子孫の添字が $2^hi\le n$ を満たす節点なので、その数は $\lfloor n/2^h\rfloor$ である。従って、全節点の高さの総和は

$$
\sum_{i=1}^{n}h_i
=\sum_{h=1}^{\lfloor\log_2n\rfloor}\left\lfloor\frac{n}{2^h}\right\rfloor
\le n\sum_{h=1}^{\infty}2^{-h}=n.
$$

Build-Heap は $\lfloor n/2\rfloor$ 個の内部節点に対して Heapify を呼ぶため、全体で $O(n)$ 時間となる。この呼出し自体に $\Omega(n)$ 時間を要するので、最悪時間計算量は $\Theta(n)$ である。
