---
comments: false
title: 広島大学 先進理工系科学研究科 情報科学プログラム 2022年1月実施 専門科目II 問題3
tags:
  - Hiroshima-University
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2022年1月実施 専門科目II 問題3


## **Author**
samparker, 祭音Myyura

## **Description** 
図 1 の C プログラムは配列 numbers 内の数値をソートし、その途中経過を含めて結果を出力するものである。

(1) 4~8 行目の関数 print は引数として受け取った配列 array の要素を添え字順に出力する。
空欄 (1-1)、(1-2) の部分を埋めて、関数を完成させよ。

(2) 29 行目の実行後において、配列 numbers の要素の順序を答えよ。

(3) 本プログラムを実行したときの出力を答えよ。

(4) 関数 sort によるソート結果が図 1 のプログラムとは逆順になるように、10~25 行目の関数 sort 最も少ない変更で実現したい。行番号を明記して変更内容を答えるともに、その理由を答えよ。

(5) 関数 sort で実装されているアルゴリズムとバブルソートと比較して、計算量や比較回数、交換回数について違いを述べよ。

The C program shown in Figure 1 sorts the numbers in the array `numbers` and outputs the results, including the intermediate steps.

(1) The function `print` in lines 4 to 8 prints the elements of the array `array` received as arguments in subscript order. Fill in the blanks (1-1), (1-2) to complete the function.

(2) After executing line 29, what is the order of the elements in the array `numbers`?

(3) Answer the result that is output when this program is executed.

(4) Implement the function `sort` in lines 10-25 with the fewest changes so that the sort results from the function sort are in reverse order from the program in Figure 1. Indicate the line number and answer the reason for the change.

(5) Compare the algorithm implemented in function `sort` with bubble sort and describe the differences in terms of time complexity, number of comparisons, and number of swaps.

```text
#include <stdio.h>
#define N 4

void print(int *array, int size) {
    for (int i = 0; [空欄 (1-1)]; i++)
        printf("%d ", [空欄 (1-2)]);
    printf("\n");
}

void sort(int *array, int n) {
    int i, j, k, x;
    for (i = 0; i < n - 1; i++) {
        print(array, n);
        k = i;
        x = array[i];
        for (j = i + 1; j < n; j++) {
            if (array[j] > x) {
                k = j;
                x = array[j];
            }
        }
        array[k] = array[i];
        array[i] = x;
    }
}

int main() {
    int numbers[N] = {2, 1, 4, 3};
    sort(numbers, N);
    print(numbers, N);
    return 0;
}
```

## **Kai**
### (1)
- (1-1): i < size
- (1-2): array\[i\]

### (2)
descending order (降順)

### (3)
```text
2 1 4 3 
4 1 2 3 
4 3 2 1 
4 3 2 1 
```

### (4)
Change line 17 to `if (array[j] < x)`.

After the change, the inner loop find a minimum `x` instead of maximum every time, resulting ascending order eventually.

### (5)
The function `sort` actually implements so-called `select sort` algorithm.

||Select Sort|Bubble Sort|
|-|-|-|
|time complexity|$O(n^2)$|$O(n^2)$|
|number of comparisons|$O(n^2)$|$O(n^2)$|
|number of swaps|$O(n)$|$O(n^2)$|