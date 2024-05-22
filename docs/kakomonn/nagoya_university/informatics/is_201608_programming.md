---
comments: false
title: 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2016年8月実施 プログラミング
tags:
  - Nagoya-University
---
# 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2016年8月実施 プログラミング

## **Author**
祭音Myyura

## **Description**
プログラム P は, 与えられた整数の配列 $\text{numbers}$ ($s$ 個の要素を持つ) を $\text{numbers}[0] \le \text{numbers}[1] \le \cdots \le \text{numbers}[s-1]$ となるようなソートするC言語プログラムである. 
プログラム P に対して以下の問いに答えよ. 

(1) 11, 14 行目の空欄 A, B, C, D にあてはまる式を答えよ.

(2) 29, 30 行目の空欄 E, F, G にあてはまる式を答えよ. 

(3) 2 行目の定数 N の定義は 36 行目の配列宣言 numbers\[6\] の添え字に応じて変更しなければならない場合がある. 36 行目の numbers の配列宣言の添え字を m とし, N が最低いくらでなければならないか m を使って答えよ.

(4) プログラム P の実行結果として標準出力に表示される結果を答えよ. 

(5) プログラム P の 18 行目のコメント開始記号 "/\*" とコメント終了記号 "\*/" を削除したときのプログラムをプログラム P' とする. P' において, 18 行目がはじめて実行されたときに標準出力に出力される実行結果を書け.

(6) プログラム P の 22 行目のコメント開始記号 "/\*" とコメント終了記号 "\*/" を削除したときのプログラムをプログラム P'' とする. P'' において, 22 行目が 3 回目に実行されたときに標準出力に出力される実行結果を書け. 

プログラム P (行頭の数字は行番号を表す)

```text
#include <stdio.h>
#define N 10
void func1(int* numbers, int start, int size) {
    int h, i, j, k, tmp[N] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0};

    h = size / 2;
    i = start;
    j = start + h;
    for (k = 0; k < size; k++) {
        if ((j == start + size) || (i < start + h) && (numbers[i] <= numbers[j])) {
            [ 空欄 A ] = [ 空欄 B ];
            i++;
        } else {
            [ 空欄 C ] = [ 空欄 D ];
            j++;
        }
    }
    /* printf("%d, %d, %d, %d, %d, %d\n", tmp[0], tmp[1], tmp[2], tmp[3], tmp[4], tmp[5]); */
    for (k = 0; k < size; k++) {
        numbers[start + k] = tmp[k];
    }
    /* printf("%d, %d, %d, %d, %d, %d\n", numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]); */
}
void func2(int* numbers, int start, int size) {
    int h;
    printf("%d, %d\n", start, size);
    if (size > 1) {
        h = size / 2;
        func2(numbers, start, [ 空欄 E ]);
        func2(numbers, [ 空欄 F ], [ 空欄 G ]);
        func1(numbers, start, size);
    }
}

void main(int argc, char** argv) {
    int numbers[6] = {3, 2, 5, 4, 6, 1};

    func2(numbers, 0, 6);
}
```

## **Kai**
### (1)
- \[ 空欄 A \]: tmp\[k\]
- \[ 空欄 B \]: numbers\[i\]
- \[ 空欄 C \]: tmp\[k\]
- \[ 空欄 D \]: numbers\[j\]

### (2)
- \[ 空欄 E \]: h
- \[ 空欄 F \]: start + h
- \[ 空欄 G \]: size - h

### (3)
m

### (4)
Output:

```text
0, 6
0, 3
0, 1
1, 2
1, 1
2, 1
3, 3
3, 1
4, 2
4, 1
5, 1
```

### (5)
Output (Line 18):

```text
2, 5, 0, 0, 0, 0
2, 3, 5, 0, 0, 0
1, 6, 0, 0, 0, 0
1, 4, 6, 0, 0, 0
1, 2, 3, 4, 5, 6
```

### (6)
Output (Line 22)：

```text
3, 2, 5, 4, 6, 1
2, 3, 5, 4, 6, 1
2, 3, 5, 4, 1, 6
2, 3, 5, 1, 4, 6
1, 2, 3, 4, 5, 6
```