---
sidebar_label: 2024年7月実施 アルゴリズムとプログラミング
tags:
  - Osaka-University
  - Computer-Science.Data-Structures.Binary-Heap
  - Computer-Science.Algorithm-Design.Heap-Sort
  - Computer-Science.Programming
---
# 大阪大学 情報科学研究科 情報工学 2024年7月実施 アルゴリズムとプログラミング

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1)

二分ヒープを、各子の値が親の値以上となる完全二分木とする。根の節点番号を1、節点 $i$ の左の子を $2i$、右の子を $2i+1$ とする。

- 高さ $h$ の二分ヒープが持つ節点数の最小値 $(\alpha)$ と最大値 $(\beta)$ を求めよ。
- 新しい値を末尾へ追加し、親より小さい間は親と交換する手順について、空欄 (A)～(J) を次から埋めよ。

```text
(a) 右  (b) 左  (c) 大きい  (d) 小さい
(e) 最も大きい  (f) 最も小さい
(g) 根  (h) 親  (i) 子  (j) 葉
(k) 特性1（ヒープ順序）  (l) 特性2（木の形状）
```

- 節点数 $n-1$ のヒープへ値を追加するときの交換回数を $S(n)$ とする。その最大値のオーダ $O((\gamma))$ を求めよ。

### (2)

配列 `data` の `data[0]` に節点数、`data[1]` 以降に1始まりの最小ヒープを格納する。`add` は末尾へ値を追加して `up` を行い、`del` は根を末尾と交換して節点数を減らした後に `down` を行う。`build_heap` は次の入力を先頭から順に `add` する。

```text
9
17
65
60
64
39
36
8
16
39
```

- (2-1) 全要素を追加した直後の `data[0]`～`data[10]` を示せ。
- (2-2) 次の `down` の空欄 (A)～(F) を `x, y, z` で埋めよ。

```c
void down(int *data, int x) {
    int y, z;
    while (2 * x <= data[0]) {
        y = 2 * x;
        z = 2 * x + 1;
        if ((z > data[0]) || (data[(A)] < data[(B)])) {
            if (data[(C)] <= data[(D)]) break;
            swap(data, x, y); x = y;
        } else {
            if (data[(E)] <= data[(F)]) break;
            swap(data, x, z); x = z;
        }
    }
}
```

- (2-3) 節点 `index` の値を `e` に変更してヒープを修復する `replace` の空欄 (G)～(K) を、次の選択肢から埋めよ。同じ選択肢は複数回使わない。

```text
(a) 0  (b) data[0]  (c) data[index]
(d) index / 2  (e) 2 * index  (f) 2 * index + 1
(g) up(data, index)  (h) down(data, index)
(i) add(data, e)  (j) del(data)  (k) replace(data, index, e)
```

### 题目描述

本题考查数组表示的二叉最小堆：完全二叉树的节点数界、逐项插入时的上浮、删除与下沉、给定输入形成的唯一堆数组，以及任意节点改值后的方向判定。

## **Kai**

### (1)

高度为 $h$ 时，深度 $0,\ldots,h-1$ 的各层均已填满，而深度 $h$ 至少有一个节点。因此

$$
\boxed{(\alpha)=2^h},\qquad
\boxed{(\beta)=2^{h+1}-1}.
$$

各空欄は

$$
\boxed{
(A)=(l),\ (B)=(k),\ (C)=(a),\ (D)=(f),\ (E)=(b),
}
$$

$$
\boxed{
(F)=(h),\ (G)=(d),\ (H)=(h),\ (I)=(g),\ (J)=(f)
}.
$$

すなわち、形状を保つ位置へ追加し、親より小さい間だけ上へ交換するため、根には常に最小値が格納される。

交換回数 $S(n)$ は新節点の深さ以下であり、最深位置へ最小値を追加すればその上限に達する。したがって、その最大値は

$$
\boxed{S_{\max}(n)=\lfloor\log_2 n\rfloor},\qquad
\boxed{(\gamma)=\log n}.
$$

### (2)

#### (2-1)

`build_heap` は入力順に `add` を呼ぶ。したがって

$$
\boxed{
\texttt{data[0..10]}
=(10,8,9,36,16,39,65,39,60,17,64)
}.
$$

#### (2-2)

左右の子のうち小さい方と比較すればよいから

$$
\boxed{(A)=y,\ (B)=z,\ (C)=x,\ (D)=y,\ (E)=x,\ (F)=z}.
$$

完成形は次の通りである。

```c
void down(int *data, int x) {
    int y, z;
    while (2 * x <= data[0]) {
        y = 2 * x;
        z = 2 * x + 1;
        if ((z > data[0]) || (data[y] < data[z])) {
            if (data[x] <= data[y]) break;
            swap(data, x, y); x = y;
        } else {
            if (data[x] <= data[z]) break;
            swap(data, x, z); x = z;
        }
    }
}
```

#### (2-3)

範囲外を除外し、親より小さくなった場合だけ上へ、それ以外は下へ修復する。

$$
\boxed{
(G)=(b),\quad (H)=(a),\quad (I)=(d),\quad
(J)=(g),\quad (K)=(h)
}.
$$

```c
void replace(int *data, int index, int e) {
    if ((index > data[0]) || (index <= 0)) return;
    data[index] = e;
    if ((index != 1) && (data[index] < data[index / 2])) {
        up(data, index);
    } else {
        down(data, index);
    }
}
```
