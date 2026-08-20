---
sidebar_label: 2009年8月実施 プログラミング
tags:
  - Nagoya-University
  - Computer-Science.Algorithm-Design.Binary-Search
  - Computer-Science.Programming
---
# 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2009年8月実施 プログラミング

## **Author**
祭音Myyura

## **Description**
最小値 $N$, 最大値 $M$ の $n$ 個 ($n$ > 0) の整数を昇順に整列して格納した一次元配列がある. 
$N \le k \le M$ を満たす整数 $k$ がこの配列の中に存在するかどうかを探索する C 言語の関数 search を以下のように書いた. 
この関数は $k$ が存在する場合は $1$,そうでない場合は $0$ を返す. 
また, そのテストのための main 関数を以下のように書いた. 
なお左端の番号は行番号を示すものでプログラムの一部ではない. 

```text
#include <stdio.h>

int search([ 空欄 (a) ] n, [ 空欄 (b) ], [ 空欄 (c) ] k) {
    int i, j, p;
    i = [ 空欄 (d) ];
    j = [ 空欄 (b) ];
    while (i <= j) {
        p = (i + j) / 2;
        if (b[p] <= k) {
            i = p + 1;
        } else {
            j = p - 1;
        }
    }
    if ([ 空欄 (f) ]) {
        return 1;
    } else {
        return 0;
    }
}

int main() {
    int a[] = {3, 6, 7, 10, 13, 15, 19};
    if (search(7, a, 14)) {
        printf("14 is found in array a[].\n");
    } else {
        printf("14 is not found in array a[].\n");
    }
    return 0;
}
```

このプログラムについて以下の問いに答えよ. 

(1) \[ 空欄 (a) \] から \[ 空欄 (f) \] を埋めてプログラムを完成せよ. 

(2) この探索法はどのような名前で呼ばれるか. 

(3) このプログラムの実行において, 行番号８は複数回実行される. それぞれ実行した後の i, j, p はどのような値になるか示せ. 

(4) 行番号７の while 文の b, i, j, k に関するループ不変式 (loop invariants) を示せ.（ヒント：最小値 $N$ の左隣に $-\infty$, 最大値 $M$ の右隣に $+\infty$ が存在するものと考える. ） 

(5) $k$ が配列要素中の最小値から最大値の間の値であるという前提がない場合にはどのような問題が生じるか. また,それに対処するには \[ 空欄 (f) \] をどのように変更すれば良いかを示せ. 

(6) この探索法の計算量のオーダーを示せ. 

(7) 高速な探索法としてハッシュ探索がある. これはどのようなものか 300 文字以内 (or in 100 English words) で説明せよ. 

### 题目描述

给定一个含 $n>0$ 个整数、按升序排列的一维数组，其最小值为 $N$、最大值为 $M$。对满足 $N\le k\le M$ 的整数 $k$，原题给出 C 函数 `search`：若数组中存在 $k$ 则返回 `1`，否则返回 `0`；同时给出了测试用的 `main` 函数。完整程序见上文。

回答下列问题。

1. 填写程序中的空格 (a) 至 (f)，使程序完整。
2. 写出该搜索方法的名称。
3. 对示例数组 `{3, 6, 7, 10, 13, 15, 19}` 搜索 `14` 时，第 8 行会执行多次；写出每次执行后变量 `i`、`j`、`p` 的值。
4. 写出第 7 行 `while` 循环关于 `b`、`i`、`j`、`k` 的循环不变式。可设想在最小值 $N$ 左侧存在 $-\infty$，在最大值 $M$ 右侧存在 $+\infty$。
5. 若取消“$k$ 位于数组最小值与最大值之间”的前提，会出现什么问题？说明应如何修改空格 (f) 处的条件以处理该情况。
6. 给出该搜索算法的渐近时间复杂度。
7. 用不超过 300 个日文字符或 100 个英文单词说明哈希查找的基本思想。

## **Kai**
### (1)
- \[ 空欄 (a) \]: int
- \[ 空欄 (b) \]: int b\[\]
- \[ 空欄 (\(c\)) \]: int
- \[ 空欄 (d) \]: 0
- \[ 空欄 (e) \]: n - 1
- \[ 空欄 (f) \]: b\[j\] == k, (Hint: consider the following example, find 14 in array \[3, 6, 7, 10, 13, 14, 19\])

### (2)
二分探索法 (Binary Search)

### (3)
- i=0, j=6, p=3
- i=4, j=6, p=5
- i=4, j=4, p=4

### (4)
With sentinels $b[-1]=-\infty$ and $b[n]=+\infty$, the loop invariant is

$$
0\le i\le j+1\le n,\qquad b[i-1]\le k<b[j+1].
$$

### (5)
The operation b\[j\] that accesses j-th element of array b may access out of bound memory.

- \[ 空欄 (f) \]: j >= 0 && j < n && b[j] == k

### (6)
$O(\log n)$

### (7)
A hash map uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.
During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.
