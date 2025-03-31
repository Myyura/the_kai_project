---
sidebar_label: "2022年8月実施 専門 問7"
sidebar_position: 13
tags:
  - Nagoya-University
  - Binary-Search
  - Dynamic-Programming
---
# 名古屋大学 情報学研究科 情報システム学専攻 2022年8月実施 専門 問7

## **Author**
祭音Myyura

## **Description**
以下の全ての問いに答えよ。ただし、コンパイル時の最適化は行われないものとし、オーバーフローエラーが起こらない範囲での実行のみを考えることとする。

(1) ソースコード 1 に掲げた C 言語のプログラム binsearch.c について、以下の全ての問いに答えよ。

- (a) binsearch(x, i, j) が「昇順にソートされた配列 a\[i\], ..., a\[j\] に対し、値 x の存在を二分探索によって判定する」関数になるように、ソースコード 1 の \[ 空欄 A \] ~ \[ 空欄 C \] を埋めよ。
- (b) binsearch_loop が、binsearch と同じ二分探索を再帰呼出しを用いずに記述したものになるように、ソースコード 1 の \[ 空欄 D \] ~ \[ 空欄 F \] を埋めよ。

(2) ソースコード 2 に掲げた C 言語のプログラム function.c について、以下の全ての問いに答えよ。

- (a) main() を実行した時、標準出力に出力される実行結果を書け。
- (b) 任意の非負整数 n に対して、f2(n, 0, 1) の返り値が、f1(n) の返り値と常に同じになるように、ソースコード 2 の \[ 空欄 G \] を埋めよ。
- ($c$) 以下の回数をそれぞれ答えよ。
  - i. main() を実行したとき、f1 が呼び出される回数。
  - ii. 38 行目の f1(7) を、f2(7, 0, 1) に置き換えて main() を実行したとき、f2 が呼び出される回数。
- (d) f_loop が、f2 と同じ結果を返す関数を再帰呼出しを用いずに記述したものになるように、ソースコード 2 の \[ 空欄 H \] ~ \[ 空欄 K \] を埋めよ。

(3) binsearch や f1, f2 のような再帰呼出しを含むプログラムよりも、binsearch_loop や f_loop のように再帰呼出しを用いない方が、多くの場合、実行時間が短くなる。この理由を、50 字以内 (英語の場合、30 words 以内) で説明せよ。

#### <center> ソースコード 1: binsearch.c
```text
#include <stdio.h>
#define TRUE 1
#define FALSE 0

int a[10] = { 1, 4, 6, 10, 11, 13, 15, 20, 30, 32 };

int binsearch (int x, int i, int j) {
    int k;
    if (i > j)
        return FALSE;
    else {
        k = (i + j) / 2;
        if ([ 空欄 A ])
            return binsearch(x, k + 1, j);
        else if ([ 空欄 B ])
            return binsearch([ 空欄 C ]);
        else
            return TRUE;
    }
}

int binsearch_loop (int x, int i, int j) {
    int k;
    while (1) {
        if (i > j) {
            return FALSE;
        } else {
            k = (i + j) / 2;
            if ([ 空欄 D ])
                i = k + 1;
            else if ([ 空欄 E ])
                j = [ 空欄 F ];
            else {
                return TRUE;
            }
        }
    }
}

int main (void) {
    if (binsearch(14, 0, 9)) printf("found\n");
    else printf("not found\n");

    if (binsearch_loop(14, 0, 9)) printf("found\n");
    else printf("not found\n");

    return 0;
}
```

#### <center> ソースコード 2: function.c
```text
#include <stdio.h>

int f1 (int x) {
    if (x <= 0)
        return 0;
    else if (x == 1)
        return 1;
    else
        return f1(x-2) + f1(x-1);
}

int f2 (int x, int y, int z) {
    if (x <= 0)
        return y;
    else if (x == 1)
        return z;
    else
        return f2(x-1, z, [ 空欄 G ]);
}

int f_loop (int x, int y, int z) {
    int tmp;
    while (1) {
        if (x <= 0) {
            return y;
        } else if (x == 1) {
            return [ 空欄 H ];
        } else {
            tmp = y;
            x = [ 空欄 I ];
            y = [ 空欄 J ];
            z = [ 空欄 K ];
        }
    }
}

int main (void) {
    printf("%d\n", f1(7));

    return 0;
}
```

## **Kai**
### (1)
#### (a)
- \[ 空欄 A \]: a\[k\] < x
- \[ 空欄 B \]: a\[k\] > x
- \[ 空欄 C \]: x, i, k - 1

#### (b)
- \[ 空欄 D \]: a\[k\] < x
- \[ 空欄 E \]: a\[k\] > x
- \[ 空欄 F \]: k - 1

### (2)
#### (a)
13

#### (b)
- \[ 空欄 G \]: y + z

#### ($c$)
f1 が呼び出される回数: 41

f2 が呼び出される回数: 7

#### (d)
- \[ 空欄 H \]: z
- \[ 空欄 I \]: x - 1
- \[ 空欄 J \]: z
- \[ 空欄 K \]: tmp + z

### (3)
- 一度計算したものを再び計算する（重複計算した部分がある）
- 関数呼び出しを用いること自体がオーバヘッドである


## **Knowledge**
Binary-Search, Fibonacci-Sequence, Dynamic-Programming