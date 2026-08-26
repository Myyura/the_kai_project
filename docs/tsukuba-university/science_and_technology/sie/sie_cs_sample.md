---
sidebar_label: "情報理工学位プログラム 問題例 プログラミング基礎"
tags:
  - Tsukuba-University
  - Computer-Science.Algorithm-Design.Selection-Sort
---
# 筑波大学 理工情報生命学術院 システム情報工学研究群 情報理工学位プログラム 問題例 プログラミング基礎

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

以下の Python 言語で書かれた関数は、長さ $n$ の整数のリスト `a[0]`～`a[n-1]` を小さい順（昇順）に整列するプログラムである。

```python
def selection_sort(n, a):
    for i in range(0, n-1):
        for t in range(0, n):
            print(" %d " % a[t], end='')
        print()
        m = a[i]; k = i;
        for j in range(i+1, n):
            if a[j] < m:
                m = a[j]; k = j;
        a[k] = a[i]; a[i] = m;
```

長さ 5 の整数のリスト `a` に対して `selection_sort(5, a)` を呼び出したとき、出力は次のようになった。黒塗りの部分は隠されている。(a)～(d) に入る値を求めよ。

| | 1 | 2 | 3 | 4 | 5 |
|---|---:|---:|---:|---:|---:|
| 1 | 3 | 5 | 2 | 1 | 4 |
| 2 | (a) | (b) | 2 | ■ | 4 |
| 3 | ■ | ■ | ■ | (c) | 4 |
| 4 | ■ | ■ | ■ | (d) | ■ |

### 题目描述

上述函数用选择排序将长度为 $n$ 的整数列表升序排列。对某长度为 5 的列表调用 `selection_sort(5, a)` 后得到上表输出，求 (a)～(d)。

## **Kai**

各轮开始时输出列表，再将未排序部分的最小值与第 $i$ 个元素交换。因而输出为

```text
3 5 2 1 4
1 5 2 3 4
1 2 5 3 4
1 2 3 5 4
```

したがって、

$$
\boxed{(a)=1,\quad (b)=5,\quad (c)=3,\quad (d)=5}.
$$

## **Reference**

[筑波大学 情報理工学位プログラム 入試問題例](https://www.cs.tsukuba.ac.jp/admission/problem.pdf)
