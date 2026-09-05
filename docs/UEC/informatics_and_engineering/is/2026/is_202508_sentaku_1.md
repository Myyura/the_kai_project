---
sidebar_label: 2025年8月実施 選択問題 アルゴリズムとデータ構造
tags:
  - University-of-Electro-Communications
  - Computer-Science.Data-Structures.Binary-Heap
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---
# 電気通信大学 情報理工学研究科 情報学専攻 2025年8月実施 選択問題 アルゴリズムとデータ構造

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

次の C 言語のプログラムを考える。`min_h` は大きさ $K$ の最小値ヒープであり、
`min_sz` は保持している要素数である。

```c
void min_sift_up(int i, int h[]) {
    while (i > 0) {
        int p = (i - 1) / 2;
        if (/* A */) break;
        SWAP(&h[p], &h[i]);
        i = p;
    }
}

void min_sift_down(int i, int h[], int sz) {
    while (1) {
        int l = 2*i + 1, r = 2*i + 2, j = i;
        if (l < sz && /* B */) j = l;
        if (r < sz && /* C */) j = r;
        if (j == i) break;
        SWAP(&h[i], &h[j]);
        i = j;
    }
}

int min_sz = 0;
int min_h[K];

void min_push(int x) {
    if (min_sz >= K) return;
    min_h[min_sz] = x;
    min_sift_up(min_sz++, min_h);
}

int min_pop() {
    int ret = min_h[0];
    min_h[0] = min_h[--min_sz];
    min_sift_down(0, min_h, min_sz);
    return ret;
}

void min_push_wrapper(int x) {
    if (min_sz < K) min_push(x);
    else if (x > min_h[0]) {
        /* D */
    }
}
```

1. 空欄 A〜C を埋めよ。
2. $K=8$ とし、整数列
   $A_1=(10,5,7,9,12,4,8,2)$ と
   $A_2=(11,6,9,7,12,4,2,8,13,1,3,10)$ をそれぞれ順に
   `min_push` に与えた後の `min_h` を答えよ。
3. 大きさ $K$ のヒープに対する `min_pop` の時間計算量を答えよ。
4. `min_push_wrapper` が、受け取った値のうち大きい方から $K$ 個を保持するように
   空欄 D を埋めよ。
5. $N$ は $K$ より十分大きいとする。長さ $N$ の整数列をすべて `min_push_wrapper` に与える時間計算量を答えよ。
6. $N=10^6$, $K=10^2$ のとき、全体をクイックソートする方法は
   `min_push_wrapper` を使う方法のおよそ何倍速い、または遅いか答えよ。

次に、最大値ヒープ `max_h` と最小値ヒープ `min_h` を用いる次の処理を考える。両ヒープの容量 $K$ は十分大きく、最初は `min_sz = max_sz = 0` とする。最大値ヒープにも同様の `max_push`、`max_pop` がある。

```c
void median_push(int x) {
    if (max_sz == 0 || x <= max_h[0]) {
        max_push(x);
        if (max_sz > min_sz + 1)
            min_push(max_pop());
    } else {
        min_push(x);
        if (min_sz > max_sz)
            max_push(min_pop());
    }
}

double get_median() {
    double ret;
    if ((min_sz + max_sz) % 2 == 0)
        ret = /* E */;
    else
        ret = /* F */;
    return ret;
}
```

7. $A_3=(1,5,2,4,3,6,8)$ を順に `median_push` に与えた後の
   `min_h` と `max_h` を答えよ。
8. 入力数が $2M+1$、$K>2M+1$ のとき、両ヒープの要素数を答えよ。
9. 空欄 E、F を埋めよ。

### 题目描述

程序 1 用数组实现小根堆，并用容量为 $K$ 的小根堆保留输入序列中最大的
$K$ 个数。填写维护堆结构的条件及替换操作，求给定输入后的堆数组和时间复杂度，
并与快速排序比较。程序 2 再配合大根堆在线维护中位数，要求写出给定输入后的两个堆、
堆大小以及求中位数的代码。

## **Kai**

### (1)

```c
A: h[p] < h[i]
B: h[l] < h[j]
C: h[r] < h[j]
```

### (2)

`min_push` は満杯になると以後の入力を無視する。したがって、

```text
A1: 2, 4, 5, 9, 12, 7, 8, 10
A2: 2, 7, 4, 8, 12, 9, 6, 11
```

となる。

### (3)

根へ移した要素は木の高さ以下の回数だけ下がるので、

$$
\boxed{O(\log K)}.
$$

### (4)

根にある現在の最小値を $x$ で置き換え、下方へ調整すればよい。

```c
min_h[0] = x;
min_sift_down(0, min_h, min_sz);
```

### (5)

各入力に高々 $O(\log K)$ を要するため、

$$
\boxed{O(N\log K)}.
$$

### (6)

クイックソートは平均 $O(N\log N)$ である。よって比は

$$
\frac{N\log N}{N\log K}
=\frac{\log 10^6}{\log 10^2}=3.
$$

したがって

$$
\boxed{\text{クイックソートの方が約 3 倍遅い}}
$$

となる。これは主要項の係数を同一とみなして $N\log N$ と $N\log K$ だけを比較した概算である。Big-O 表記から実測時間の比が 3 に決まるわけではない。

### (7)

```text
min_h: 5, 8, 6
max_h: 4, 3, 2, 1
```

### (8)

小さい方の $M+1$ 個を最大値ヒープに、大きい方の $M$ 個を最小値ヒープに保持するので、

$$
\boxed{\lvert\texttt{min\_h}\rvert=M,\qquad
\lvert\texttt{max\_h}\rvert=M+1}.
$$

### (9)

```c
E: ((double)min_h[0] + (double)max_h[0]) / 2.0
F: max_h[0]
```

整数の加算が先に行われてオーバフローしないよう、E では加算前に `double` へ変換する。中央値は一つ以上の入力がある場合に求める。
