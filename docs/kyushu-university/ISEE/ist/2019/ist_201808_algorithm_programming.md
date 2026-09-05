---
sidebar_label: 2018年8月実施 アルゴリズム・プログラミング
tags:
  - Kyushu-University
  - Computer-Science.Algorithm-Design.Divide-and-Conquer
  - Computer-Science.Data-Structures.Binary-Heap
  - Computer-Science.Algorithm-Design.Heap-Sort
  - Computer-Science.Programming
---
# 九州大学 システム情報科学府 情報理工学専攻 2018年8月実施 アルゴリズム・プログラミング

## **Author**
祭音Myyura

## **Description**

出典：[公式問題（保存版、29–30頁）](https://web.archive.org/web/20190715211433id_/http://www.isee.kyushu-u.ac.jp:80/script/wordpress/wp-content/uploads/H31infait.pdf#page=29)。
以下では `largest` の初期値を `i` とする。

### 【問 1】
与えられた数列 $a_1, a_2, \ldots, a_n$ のうち, $i<j$ かつ $a_i>a_j \ (1 \le i,j \le n)$ であるとき, $(a_i, a_j)$ を反転と呼ぶ.    

(1) 数列 $1, 6, 3, 5, 2, 4, 7$ の反転の個数を求めよ.   

(2) 与えられた数列 $a_1, a_2, \ldots, a_n$ の反転の個数を数える効率の良いアルゴリズムを与えよ. 

### 【問 2】
図１に **max-heap** を扱うアルゴリズムを示す. 配列 A\[1..A.length\] が, **max-heap** 条件を満たすとは, 配列 A が次の条件を満たすときである（ただし, A.length は配列 A が含む要素数）. 

$$
\text{A}[\text{Parent}(i)] \ge \text{A}[i] \ \ \ \ \ \  (2 \le i \le \text{A.length})
$$

すなわち, 根（A\[1\]）以外の節点 $i$ の値が, その節点 $i$ の親 $\text{Parent}(i)$ の値以下の時である. このとき, 次の各問いに答えよ（ただし, floor($i$) は床関数 $\lfloor i \rfloor$ を表す）. 

```text
Parent(i)
    return floor(i/2)

Left(i)
    return 2*i

Right(i)
    return 2*i + 1

MaxHeapify(A, i)
    l = Left(i)
    r = Right(i)
    largest = i
    if l <= A.heapSize && A[l] > A[i]
        largest = l
    if r <= A.heapSize && A[r] > A[largest]
        largest = r
    if largest != i
        exchange A[i] with A[largest]
        MaxHeapify(A, largest)

BuildMaxHeap(A)
    A.heapSize = A.length
    for i = floor(A.length / 2) downto 1
        MaxHeapify(A, i)
```

(1) 配列 $\text{A}=\{25, 18, 14, 6, 13, 10, 2, 5, 7, 11\}$ は, **max-heap** を満たすか, 理由を述べよ.  

(2) 配列 $\text{A}=\{27, 15, 5, 18, 14, 10, 3, 12, 7, 11, 4, 8, 6, 1\}$ に対する MaxHeapify(A, 3) の動作を示せ.  

(3) 図１のアルゴリズムの記法ならい, 配列 A をヒープソートでソートする手続き HeapSort(A) を記述せよ. HeapSort(A) 記述する際, 図１の手続き MaxHeapify と手続き BuildMaxHeap を用いること.

### 题目描述

【问题 1】对于给定数列 $a_1,a_2,\ldots,a_n$，若 $i<j$ 且
$a_i>a_j$（$1\le i,j\le n$），则称 $(a_i,a_j)$ 为一个逆序对。

1. 求数列 $1,6,3,5,2,4,7$ 的逆序对个数。
2. 给出一种能高效统计任意数列 $a_1,a_2,\ldots,a_n$ 中逆序对个数的算法。

【问题 2】下列算法处理最大堆。数组 `A[1..A.length]` 满足最大堆性质，是指

$$
\mathrm{A}[\mathrm{Parent}(i)]\ge \mathrm{A}[i]\qquad(2\le i\le \mathrm{A.length}),
$$

即除根节点 `A[1]` 外，每个节点 $i$ 的值均不大于其父节点
$\mathrm{Parent}(i)$ 的值；`A.length` 为数组元素个数，`floor(i)` 表示下取整 $\lfloor i\rfloor$。所用伪代码如下：

```text
Parent(i)
    return floor(i/2)

Left(i)
    return 2*i

Right(i)
    return 2*i + 1

MaxHeapify(A, i)
    l = Left(i)
    r = Right(i)
    largest = i
    if l <= A.heapSize && A[l] > A[i]
        largest = l
    if r <= A.heapSize && A[r] > A[largest]
        largest = r
    if largest != i
        exchange A[i] with A[largest]
        MaxHeapify(A, largest)

BuildMaxHeap(A)
    A.heapSize = A.length
    for i = floor(A.length / 2) downto 1
        MaxHeapify(A, i)
```

回答：

1. 判断数组 $\mathrm{A}=\{25,18,14,6,13,10,2,5,7,11\}$ 是否满足最大堆性质，并说明理由。
2. 展示对数组
   $\mathrm{A}=\{27,15,5,18,14,10,3,12,7,11,4,8,6,1\}$
   执行 `MaxHeapify(A, 3)` 的过程。
3. 沿用上述算法的记法，写出使用 `MaxHeapify` 与 `BuildMaxHeap` 对数组 `A` 排序的过程 `HeapSort(A)`。

## **Kai**
### 【問 1】
#### (1)
反転の個数は $7$ である。($(6, 3), (6, 5), (6, 2), (6, 4), (3, 2), (5, 2), (5, 4)$)

#### (2)
ヒント：マージソートを考える.

与えられた数列を A とし, その数列を B と C に分割する。
B, C をそれぞれソート済みとすると, A の反転数は B の反転数と C の反転数を足し, さらに B と C との間にまたがって存在する $i < j$ かつ $a_i > a_j$ となるような組の数を足したものとなる.

```text
def merge_count(a):
    n = len(a)
    if n <= 1:
        return 0
    
    count = 0
    b = a[:n//2]
    c = a[n//2:]
    count += merge_count(b)
    count += merge_count(c)
    
    ai = 0
    bi = 0
    ci = 0
    while ai < n:
        if (bi < len(b) and (ci == len(c) or b[bi] <= c[ci])):
            a[ai] = b[bi]
            ai += 1
            bi += 1
        else:
            count += n // 2 - bi
            a[ai] = c[ci]
            ai += 1
            ci += 1
    
    return count
```

計算量は $O(n \log n)$ である。

### 【問 2】
#### (1)
$\text{A}[4] = 6 < \text{A}[9] = 7$ より、配列 $\text{A}$ は **max-heap** を満たされていないことがわかる。

#### (2)
```
{27, 15, 5, 18, 14, 10, 3, 12, 7, 11, 4, 8, 6, 1}

{27, 15, 10, 18, 14, 5, 3, 12, 7, 11, 4, 8, 6, 1}

{27, 15, 10, 18, 14, 8, 3, 12, 7, 11, 4, 5, 6, 1}
```

#### (3)
```text
HeapSort(A)
    BuildMaxHeap(A)

    for i = A.length downto 2
        tmp = A[1]
        A[1] = A[i]
        A[i] = tmp
        A.heapSize = A.heapSize - 1
        MaxHeapify(A, 1)
```
