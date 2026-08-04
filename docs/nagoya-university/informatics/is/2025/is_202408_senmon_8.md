---
sidebar_label: 2024年8月実施 専門 問8
tags:
  - Nagoya-University
  - Computer-Science.Algorithm-Design.Merge-Sort
---
# 名古屋大学 情報学研究科 情報システム学専攻 2024年8月実施 専門 問8

## **Author**
[井盖（xhs: 94364626233）](https://www.xiaohongshu.com/user/profile/68b9ab53000000001a020887?xsec_token=YBV6i8PU8veqPxaihC5Kib-qfq-CRRWgL-pXNq_zSff9c%3D), 祭音Myyura

## **Description**
プログラム１は，配列 `a` に格納された `32` ビット符号付き整数を昇順に並べる C 言語プログラムである。以下の全ての問いに答えよ。

(1) プログラム１の \[  A  \] と \[  B  \] に単一の式を埋めよ。

(2) 配列 `a` に格納された整数を降順に並べるようプログラム１を $1$ 箇所だけ変更する。プログラム１の何行目をどのように変更すれば良いか答えよ。

(3) プログラム１の `sort` 関数では再帰呼出しを使用している。再帰呼出しを使用せずに同じ処理を実現する sort 関数をプログラム２のように実装した。プログラム１の sort 関数をプログラム２で置き換えた上で main 関数を実行したときに，プログラム２の `10` 行目で標準出力に印字される実行結果を答えよ。

(4) (3) を踏まえて，プログラム２の `merge` 関数に関する冗長な関数呼出しを指摘し，改善方法を説明せよ。

(5) プログラム１の `merge` 関数では，配列 `a` と同じサイズの配列 `b` に処理結果を格納している。プログラム１の `5` 行目を削除した上で，配列 a を直接操作する `merge` 関数をプログラム３のように実装した。プログラム３の \[ C \] と \[ D \] に単一の式を埋めよ。

(6) (5) のようにプログラムを実装することの利点と欠点を 1 つずつ答えよ。

### プログラム１

```text
#include <stdio.h>
#define max 9

int a[max+1] = {10, -14, 19, -26, 27, 31, 33, 35, 42, 44};
int b[max+1];

void merge(int low, int mid, int high) {
    int low1=low, low2=mid+1, i=low;
    while (low1<=mid && low2<=high) {
        if(a[low1] <= a[low2]) b[i++] = a[low1++];
        else [  A  ];
    }
    while(low1 <= mid) b[i++] = a[low1++];
    while(low2 <= high) b[i++] = a[low2++];
    for(i = low; i <= high; i++) [  B  ];
}

void sort(int low, int high) {
    int mid;
    if(low < high) {
        mid = (low + high) / 2;
        sort(low, mid);
        sort(mid + 1, high);
        merge(low, mid, high);
    }
}

int main() {
    int i;
    for(i = 0; i <= max; i++) printf("%d ", a[i]);
    printf("\n");
    sort(0, max);
    for(i = 0; i <= max; i++) printf("%d ", a[i]);
    printf("\n");
}
```

### プログラム２

```text
void sort(int low, int high) {
    int size, low2, mid, high2;

    for (size = 1; size <= (high - low); size = size*2) {
        for (low2 = low; low2 < high; low2 += size*2) {
            if ((low2 + size - 1) < high) mid = low2 + size - 1;
            else mid = high;
            if ((low2 + 2 * size - 1) < high) high2 = low2 + 2 * size - 1;
            else high2 = high;
            printf("(%d,%d,%d)", low2, mid, high2);        // 10 行目
            merge(low2, mid, high2);
        }
    }
}
```

### プログラム３

```text
void merge(int low, int mid, int high) {
    int i, tmp, low1 = low, low2 = mid + 1, mid1 = mid;
    if ([  C  ]) return;
    while (low1 <= mid1 && low2 <= high) {
        if (a[low1] > a[low2]) {
            tmp = a[low2];
            for (i = low2; low1 < i; i--) a[i] = a[i-1];
            [  D  ];
            low2++;
            mid1++;
        }
        low1++;
    }
}
```

### 题目描述

程序 1 使用归并排序将数组 `a` 中的 32 位有符号整数按升序排列。`merge` 先把两个相邻有序区间合并到辅助数组 `b`，再复制回 `a`；递归函数 `sort` 不断二分区间。程序 2 用自底向上的循环替代递归，程序 3 则不使用辅助数组、直接在 `a` 中移动元素完成原地合并。完整代码见上文。

回答下列问题。

1. 分别用一个表达式填写程序 1 的 A、B，使归并过程完整。
2. 只修改程序 1 的一处，使数组按降序排列；指出行号和修改内容。
3. 用程序 2 的非递归 `sort` 替换程序 1 的递归版本后执行 `main`，写出程序 2 第 10 行打印的完整结果。
4. 根据第 3 问，指出程序 2 对 `merge` 的冗余调用并说明改进方法。
5. 删除程序 1 的辅助数组 `b`，使用程序 3 的原地 `merge`；分别用一个表达式填写 C、D。
6. 各说明一个原地合并实现的优点与缺点。

## **Kai**
### (1)

```text
// [ A ]
b[i++] = a[low2++];

// [ B ]
a[i] = b[i];
```

### (2)

```text
// origin
if (a[low1] <= a[low2]) b[i++] = a[low1++];

// new
if (a[low1] >= a[low2]) b[i++] = a[low1++];
```

### (3)

```text
(0,0,1)
(2,2,3)
(4,4,5)
(6,6,7)
(8,8,9)
(0,1,3)
(4,5,7)
(8,9,9)
(0,3,7)
(8,9,9)
(0,7,9)
```

### (4)
上の出力を見ると，たとえば `(8,8,9)` という組が複数回出ている。
このときの意味は，左の区間：`[low2, mid] = [8, 9]`，右の区間：`[mid+1, high2] = [10, 9]`（空区間）となり，右側の部分列が空で，すでに一方だけが整列済みである。
この状態で `merge(8,9,9)` を呼び出しても実質何もせず，無駄な関数呼び出しになっている。

#### **改善方法の例**
右側の部分列が空のときは `merge` を呼ばないようにすればよい。例えば：

```text
if (mid < high2) {
    merge(low2, mid, high2);
}
```

のような条件を入れ，`mid == high2` のとき（右側が空のとき）は `merge` をスキップする。

### (5)
```text
// [ C ]
a[mid] <= a[mid + 1]

// [ D ]
a[low1] = tmp;
```

（`[ C ]` に `low >= high` を入れるのはダメではないけれど，`merge` が呼ばれるときは必ず `low < high` であるから（再帰版 `sort` を見ればわかる）、この問題の意図からすると不適切だと思う。 By 祭音Myyura）

### (6)
**利点**

補助配列 `b` が不要になり，ソートに必要な追加メモリがほぼ定数（$O(1)$）になる。

**欠点**

要素を挿入するたびに

```text
for (i = low2; low1 < i; i--) a[i] = a[i-1];
```

のようなシフト処理を行うため，最悪の場合，$1$ 回のマージで $O(n^2)$ の時間がかかる。

その結果，元の「補助配列ありのマージソート」（常に $O(n \log n)$）と比べて，計算時間が大きく増加し，性能が悪化する。
