---
sidebar_label: 2026年8月実施 1. 【必須問題】アルゴリズムとプログラミング
sidebar_position: 1
tags:
  - Osaka-University
  - Computer-Science.Algorithm-Design.Merge-Sort
  - Computer-Science.Algorithm-Design.Insertion-Sort
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
  - Computer-Science.Programming.Recursion
  - Computer-Science.Programming.Pointers-and-Arrays
---
# 大阪大学 情報科学研究科 情報工学 2026年8月実施 1. 【必須問題】アルゴリズムとプログラミング

## **Author**

[xxxuuu](https://github.com/xxxuuu)

## **Description**

配点：(1-1) 10，(1-2) 20，(1-3) 15，(1-4) 15，(2-1) 25，(2-2) 40

図1に示す ANSI C で記述されたプログラム（program）は，ファイル `data.txt` から入力データ（input data）を読み込み，要素を昇順（ascending order）に整列（sort）して出力する。ファイル `data.txt` には，1行目に整列する要素の個数 $n$（$n\geq1$）が，2行目以降には $n$ 個の整数（integer）の要素が各行に一つずつ，それぞれ記述されている。図1に示すプログラムに関して，以下の各問に答えよ。

```c
 1  #include <stdio.h>
 2  #include <stdlib.h>
 3
 4  void sortInternal(int arr[], int tmp[], int left, int mid, int right) {
 5      int i = left, j = mid + 1, k = 0;
 6      while (i <= mid && j <= right) {
 7          if (arr[i] < arr[j])
 8              tmp[k++] = arr[i++];
 9          else
10              tmp[k++] = arr[j++];
11      }
12      while (i <= mid)    tmp[k++] = arr[i++];
13      while (j <= right)  tmp[k++] = arr[j++];
14      for (i = 0; i < k; i++)
15          arr[left + i] = tmp[i];
16  }
17
18  void sort(int arr[], int tmp[], int left, int right) {
19      if (left < right) {
20          int mid = (left + right) / 2;
21          sort(arr, tmp, left, mid);
22          sort(arr, tmp, mid + 1, right);
23          sortInternal(arr, tmp, left, mid, right);
24      }
25  }
26
27  int main(void) {
28      int *arr, *tmp, n, i;
29      FILE *fp = fopen("data.txt", "r");
30      fscanf(fp, "%d", &n);
31      arr = (int *)malloc(sizeof(int) * n);
32      tmp = (int *)malloc(sizeof(int) * n);
33      for (i = 0; i < n; i++) fscanf(fp, "%d", &arr[i]);
34      fclose(fp);
35
36      sort(arr, tmp, 0, n - 1);
37      for (i = 0; i < n; i++) printf("%d\\n", arr[i]);
38
39      free(arr); free(tmp);
40      return 0;
41  }
```

<div align="center">図1　プログラム</div>

```text
1  6
2  60
3  50
4  20
5  30
6  40
7  10
```

<div align="center">図2　<code>data.txt</code></div>

```c
 1  void insertionSort(int arr[], int start, int end) {
 2      int i, j, key;
 3      for (i = start + 1; i <= end; i++) {
 4          key = arr[i];
 5          j = i - 1;
 6          while (j >= start && arr[j] > key) {
 7              arr[j + 1] = arr[j];
 8              j--;
 9          }
10          arr[j + 1] = key;
11      }
12  }
```

<div align="center">図3　挿入ソートのプログラム</div>

### (1)

以下の各小問に答えよ。

#### (1-1)

関数（function）`sort` で実現される整列アルゴリズム（sorting algorithm）の一般的な名称を答えよ。

#### (1-2)

`data.txt` の内容が図2に示す内容である場合，23行目の関数 `sortInternal` の呼び出しが3回実行された直後の配列（array）`arr` の内容を記述せよ。

#### (1-3)

関数 `sort` が呼び出される総回数を要素の個数 $n$ を用いて答えよ。

#### (1-4)

関数 `sort` による整列処理は，整列前の同値の要素の並び順が整列後に維持されない。同値の要素の並び順が維持されるよう，修正すべき行番号と修正後の行の内容を示せ。ただし修正は1行のみとし，新たな文（statement）を追加してはならない。

### (2)

関数 `sort` を改変し，部分配列（subarray）の要素数が少ない場合に挿入ソート（insertion sort）に切り替えて要素を整列することを考える。ただし部分配列とは，関数 `sort` において引数 `left` と引数 `right` で指定された配列 `arr` の一部のことである。また同じ `data.txt` に対するプログラムの出力結果は改変の前後で同一とし，挿入ソートには図3に示す関数 `insertionSort` を用いるものとする。以下の各小問に答えよ。

#### (2-1)

上記の改変を実現するために，図1の18行目と19行目の間に以下に示す条件文を加える。空欄（A）～（C）を適切な式（expression）で埋めてプログラムを完成させよ。ただし部分配列の要素数が32以下の場合に挿入ソートに切り替えることとする。

```c
if ((A) <= 32) {
  insertionSort(arr, (B), (C));
  return;
}
```

#### (2-2)

小問（2-1）で完成させた関数 `sort` の最悪時間計算量（worst-case time complexity）を答えよ。以下の文章の空欄（D）～（K）に当てはまる最も適切なものを，選択肢（1）～（20）からそれぞれ一つ選び，数字で答えよ。同じ選択肢を複数回用いても良い。ただし配列 `arr` の要素数を $n$ とし，部分配列の要素数が $m$ 以下の場合に挿入ソートに切り替えることとする。また，$a$ と $b$ を十分大きい正の整数とし，$n=2^a$，$m=2^b$，かつ $n>m$ を満たすとする。なお小問（2-1）の改変による行番号の変更は考えなくて良い。

> 関数 `sort` が再帰的に（recursively）呼び出される様子は，呼び出し元の関数を親（parent）とし，21行目と22行目で呼び出される関数をそれぞれ左の子（child）と右の子とした二分木（binary tree）として表現できる。36行目で呼び出される関数を二分木の根（root）とし，その深さ（depth）を0とする。
>
> ここで，$n$ 個の全要素の整列処理に要する関数 `sort` の最悪時間計算量を，関数 `sortInternal` と関数 `insertionSort` の二つに分けて考える。
>
> - 二分木の葉（leaf）以外の節点（node）で関数 `sortInternal` が呼び出される。二分木の最大の深さを $d_{\max}$ としたとき，深さ $d$（$0\leq d<d_{\max}$）において，各節点で呼び出される関数 `sortInternal` の最悪時間計算量は $O(\boxed{(D)})$ である。また深さ $d$ における節点の数は $\boxed{(E)}$ 個である。よって，深さ $d$ における関数 `sortInternal` の最悪時間計算量の合計は $O(\boxed{(F)})$ である。二分木の最大の深さ $d_{\max}$ は $\boxed{(G)}$ である。したがって，$n$ 個の全要素の整列処理に要する関数 `sortInternal` の最悪時間計算量は $O(\boxed{(H)})$ である。
>
> - 二分木の葉で関数 `insertionSort` が呼び出される。要素数 $m$ の配列に対する関数 `insertionSort` の最悪時間計算量は $O(\boxed{(I)})$ である。二分木の中で関数 `insertionSort` は計 $\boxed{(J)}$ 回呼び出される。したがって，$n$ 個の全要素の整列処理に要する関数 `insertionSort` の最悪時間計算量は $O(\boxed{(K)})$ である。
>
> 以上より，関数 `sort` の最悪時間計算量は $O(\boxed{(H)}+\boxed{(K)})$ となる。

$$
\begin{array}{llll}
(1)\ d & (2)\ nd & (3)\ n/d & (4)\ n/2^d \\
(5)\ 2^d & (6)\ n & (7)\ m & (8)\ nm \\
(9)\ n^2 & (10)\ m^2 & (11)\ n/m & (12)\ m/n \\
(13)\ \log_2(n) & (14)\ \log_2(nm) & (15)\ \log_2(n/m) \\
(16)\ m\log_2(n) & (17)\ n\log_2(n) & (18)\ n\log_2(m) \\
(19)\ n\log_2(nm) & (20)\ n\log_2(n/m)
\end{array}
$$
