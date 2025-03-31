---
sidebar_label: "2024年度 アルゴリズムとプログラミング"
sidebar_position: 2
tags:
  - Osaka-University
---
# 大阪大学 情報科学研究科 情報工学 2024年度 アルゴリズムとプログラミング

## **Author**
祭音Myyura

## **Description**
ANSI-C 準拠である C 言語のプログラム 1, 2 は、データを読み込んで、要素を昇順に整列して出力する。
入力するデータは、1 行目に整列する要素の個数 $n (n \ge 1)$ が、また 2 行目から $n+1$ 行目までに整列する要素として整数が各行に並べられた構造を持つ。
データは、ファイル data.txt に記述されている。
以下の各問に答えよ。

(1) 図 1 に示すプログラム 1 に関して、以下の各小問に答えよ。

- (1-1) 図 2 の data.txt からデータを読み込んでプログラム 1 を実行した場合に、プログラム 1 の 20 行目が 3 回目に実行された直後の array\[0\], array\[1\], array\[2\], array\[3\], array\[4\] の値をそれぞれ示せ。
- (1-2) 図 2 data.txt の 2 ~ 6 行目を並べ替え、プログラム 1 の 18 行目の実行回数が最大となる data.txt を示せ。
- (1-3) 整列する要素の個数を $n$ とするとき、プログラム 1 の 最悪時間計算量のオーダー表記として最も適しているものを下記選択肢から一つ選び、簡潔に理由も示せ。

> $O(1)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$O(\log n)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$O(n)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$O(n \log n)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$O(n^2)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$O(n^2 \log n)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$O(n^3)$

(2) プログラム 1 を部分的に改変しプログラム 2 を作成したい。
以下の各小問に答えよ。ただし、data.txt は図 2 に限らないものとする。

- (2-1) 探索を高速化させるため、プログラム 1 の 5~15 行目のみを図 3 の通り変更したプログラム 2 を作成する。空欄 \[ (A) \] ~ \[ (C) \] を適切な式で埋めて、プログラム 2 を完成させよ。
- (2-2) 整列する要素の個数を $n$ とする。完成したプログラム 2 の最悪時間計算量のオーダー表記として最も適しているものを下記選択肢から一つ選び、簡潔に理由も示せ。

> $O(1)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$O(\log n)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$O(n)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$O(n \log n)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$O(n^2)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$O(n^2 \log n)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$O(n^3)$

- (2-3) 完成したプログラム 2 の実行を開始してから終了するまでの間に、図 3 の 10 行目が実行される回数を $c$ とする。$c$ は整列する要素の個数 $n$ と並び順に依存する。整列する要素がすべて異なるとき、$c$ が最小となる要素の並び順が満たす要件を一つ示せ。
- (2-4) (2-3) において、$c$ の最小値を $n$ の式で示せ。導出過程も示すこと。

```text
#include <stdio.h>
#include <stdlib.h>

void sort (int array[], int n) {
    int i, j, key, target;

    for (i = 1; i < n; i++) {
        key = array[i];

        for (j = 0; j < i; j++) {
            if (array[j] > key) {
                break;
            }
        }
        target = j;

        for (j = i - 1; j >= target; j--) {
            array[j + 1] = array[j];
        }
        array[target] = key;
    }
}

int main (void) {
    int N, i;
    FILE *fp;
    int *data;

    fp = fopen("data.txt", "r");
    fscanf(fp, "%d", &N);
    data = (int*) malloc(sizeof(int) * N);
    for (i = 0; i < N; i++) {
        fscanf(fp, "%d", &data[i]);
    }
    fclose(fp);

    sort(data, N);

    for (i = 0; i < N; i++) {
        printf("%d\n", data[i]);
    }
    free(data);
    return 0;
}
```
#### <center> 図 1 プログラム 1

```text
5
8
4
5
1
2
```
#### <center> 図 2 data.txt

```text
    int i, j, key, left, right, mid, target;

    for (i = 1; i < n; i++) {
        key = array[i];
        left = 0;
        right = i - 1;

        while (left <= right) {
            mid = (left + right) / 2;
            if (array[mid] > key) {
                right = 空欄[ (A) ];
            } else {
                left = 空欄[ (B) ];
            }
        }
        target = 空欄[ (C) ];
```
#### <center> 図 3 プログラム 2 の一部

## **Kai**
### (1)
#### (1-1)
```text
1回目: 4 8 5 1 2 
2回目: 4 5 8 1 2 
3回目: 1 4 5 8 2 
4回目: 1 2 4 5 8 
```

#### (1-2)
```
5
5
4
3
2
1
```

#### (1-3)
$O(n^2)$

- Inner loop 1: $O(\text{target})$
- Inner loop 2: $O(i - \text{target})$
- $\Rightarrow$ Inner loop: $O(i)$ 

Therefore, the time complexity is $O(1) + O(2) + \cdots + O(n-1) = O(n^2)$

### (2)
#### (2-1)
- 空欄\[ (A) \]: mid - 1
- 空欄\[ (B) \]: mid + 1
- 空欄\[ (C) \]: left

#### (2-2)
$O(n^2)$

The worst case time complexity of inner loop 2 is $O(i)$.

#### (2-3)
```text
N = 5
data[5] = {2, 4, 1, 5, 3}
```

the value of $c$ is $6$.

#### (2-4)
(Hint: consider the number of comparisons to insert an element into a binary search tree.)

The minimum number of comparisons to find the position of array\[$i$\] ($i \ge 2$) is $\lfloor \log_2 (i-1) \rfloor + 1$.

Therefore we have

$$
\begin{aligned}
c &= 1 + \sum_{i=2}^{n-1} (\lfloor \log_2 (i-1) \rfloor + 1)
\end{aligned}
$$

<!-- $$
\begin{aligned}
c = 2 \cdot 1 + 4 \cdot 2 + 8 \cdot 3 + \cdots + 2^{\lfloor \log_2 n\rfloor} \cdot \lfloor \log_2 n\rfloor
\end{aligned}
$$ -->