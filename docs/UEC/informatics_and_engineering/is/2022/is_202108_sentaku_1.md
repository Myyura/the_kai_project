---
sidebar_label: 2021年8月実施 選択問題 アルゴリズムとデータ構造
tags:
  - University-of-Electro-Communications
  - Computer-Science.Data-Structures.Binary-Heap
  - Computer-Science.Algorithm-Design.Max-Heapify
  - Computer-Science.Algorithm-Design.Heap-Sort
---

# 電気通信大学 情報理工学研究科 情報学専攻 2021年8月実施 選択問題 アルゴリズムとデータ構造

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

完全二分木の最大ヒープを、根から幅優先順に配列へ格納する。添字は $0$ から始まり、以下の `n` は末尾の添字、`swap` は二要素の交換を表す。

~~~c
void algo(int a[], int parent, int n) {
    int child = parent * 2 + 1;
    if (child <= n) {
        int r_child = child + 1;
        if (r_child <= n && a[r_child] > a[child]) child = r_child;
        if (a[parent] < a[child]) {
            swap(&a[parent], &a[child]); /* (S) */
            algo(a, child, n);
        }
    }
}
void algo1(int a[], int n) {
    while (n > 0) {
        swap(&a[0], &a[n]);
        n--;
        algo(a, 0, n);
    }
}
void algo2(int b[], int p, int n) {
    if (p >= 0) {
        algo(b, p, n);
        p--;
        algo2(b, p, n);
    }
}
void algo3(int a[], int k, int n) {
    int c;
    for (c = k; c <= n; c++)
        if (a[0] /* (1) */ a[c]) {
            swap(&a[0], &a[c]);
            algo(/* (2) */);
        }
}
~~~

使用する配列は

$$
\begin{aligned}
A&=(30,28,23,20,25,19,21,8,6,15,11,4,9,12,2),\\
B&=(20,19,16,15,18,14,8),\\
X&=(35,15,40,20,55,5,65,25,45,70,30,45,50,10,60)
\end{aligned}
$$

である。

1. $A[6]$ の左の子、$A[10]$ の親の値、および葉の個数を答えよ。
2. $A[0]=10$ として `algo(A,0,14)` を実行した後の配列と (S) の実行回数を答えよ。
3. `algo1(B,6)` において、$n=5,4,\ldots,0$ の各回の `algo` 実行後の配列と、その回の (S) の実行回数を答えよ。
4. `algo2(X,6,14)` の実行後の配列とヒープ構成法を説明せよ。
5. ヒープ配列の先頭 $k$ 要素を用い、第 $k$ 小要素を根へ格納する `algo3` の空欄を埋めよ。$1\le k\le n+1$ とし、配列に重複要素はない。

### 题目描述

追踪最大堆的下滤、堆排序和自底向上建堆过程，并补全利用大小为 $k$ 的最大堆求第 $k$ 小元素的程序。

## **Kai**

### 1.

0 始まりの添字より、

$$
\boxed{\text{(a) }12,\qquad
\text{(b) }25,\qquad
\text{(c) }8\text{ 個}}.
$$

### 2.

根を $10$ にして下向き調整すると、交換は

$$
10\leftrightarrow28,\qquad
10\leftrightarrow25,\qquad
10\leftrightarrow15
$$

の 3 回である。したがって、

$$
\boxed{
A=(28,25,23,20,15,19,21,8,6,10,11,4,9,12,2)}
$$

であり、(S) の実行回数は $\boxed{3}$ 回である。

### 3.

各回の `algo` 実行後は次のとおりである。

| $n$ | (S) の回数 | 配列 $B$ |
|---:|---:|:---|
| 5 | 2 | $(19,18,16,15,8,14,20)$ |
| 4 | 2 | $(18,15,16,14,8,19,20)$ |
| 3 | 1 | $(16,15,8,14,18,19,20)$ |
| 2 | 1 | $(15,14,8,16,18,19,20)$ |
| 1 | 1 | $(14,8,15,16,18,19,20)$ |
| 0 | 0 | $(8,14,15,16,18,19,20)$ |

よって最終的に昇順に整列される。

### 4.

$$
\boxed{
X=(70,55,65,45,35,50,60,25,20,15,30,45,5,10,40)}
$$

となる。`algo2` は、葉でない節点を添字の大きい順に下向き調整するため、配列をボトムアップに最大ヒープへ変換する。

### 5.

先頭 $k$ 要素を最大ヒープとして保つ。根より小さい要素を見つけたときだけ根と交換し、先頭 $k$ 要素を再びヒープ化すれば、走査後の根は第 $k$ 小要素となる。したがって、

$$
\boxed{\text{(1) }>,\qquad
\text{(2) }a,\,0,\,k-1}.
$$
