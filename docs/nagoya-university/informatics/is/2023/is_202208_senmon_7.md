---
sidebar_label: 2022年8月実施 専門 問7
tags:
  - Nagoya-University
  - Computer-Science.Algorithm-Design.Binary-Search
  - Discrete-Mathematics.Combinatorics.Fibonacci-Recurrence
---
# 名古屋大学 情報学研究科 情報システム学専攻 2022年8月実施 専門 問7

## **Author**
祭音Myyura

## **Description**

出典：[名古屋大学公表問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2022/09/02e75abcc32acb88cd7505bad377f983.pdf)。

以下の全ての問いに答えよ。ただし、コンパイル時の最適化は行われないものとし、オーバーフローエラーが起こらない範囲での実行のみを考えることとする。

(1) ソースコード 1 に掲げた C 言語のプログラム binsearch.c について、以下の全ての問いに答えよ。

- (a) binsearch(x, i, j) が「昇順にソートされた配列 a\[i\], ..., a\[j\] に対し、値 x の存在を二分探索によって判定する」関数になるように、ソースコード 1 の \[ 空欄 A \] ~ \[ 空欄 C \] を埋めよ。
- (b) binsearch_loop が、binsearch と同じ二分探索を再帰呼出しを用いずに記述したものになるように、ソースコード 1 の \[ 空欄 D \] ~ \[ 空欄 F \] を埋めよ。

(2) ソースコード 2 に掲げた C 言語のプログラム function.c について、以下の全ての問いに答えよ。

- (a) main() を実行した時、標準出力に出力される実行結果を書け。
- (b) 任意の非負整数 n に対して、f2(n, 0, 1) の返り値が、f1(n) の返り値と常に同じになるように、ソースコード 2 の \[ 空欄 G \] を埋めよ。
- (c) 以下の回数をそれぞれ答えよ。
  - i. main() を実行したとき、f1 が呼び出される回数。
  - ii. 137 行目の f1(7) を、f2(7, 0, 1) に置き換えて main() を実行したとき、f2 が呼び出される回数。
- (d) f_loop が、f2 と同じ結果を返す関数を再帰呼出しを用いずに記述したものになるように、ソースコード 2 の \[ 空欄 H \] ~ \[ 空欄 K \] を埋めよ。

(3) binsearch や f1, f2 のような再帰呼出しを含むプログラムよりも、binsearch_loop や f_loop のように再帰呼出しを用いない方が、多くの場合、実行時間が短くなる。この理由を、50 字以内 (英語の場合、30 words 以内) で説明せよ。

#### ソースコード 1: binsearch.c
```c showLineNumbers
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

#### ソースコード 2: function.c
```c showLineNumbers=100
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

### 题目描述

在不进行编译优化且不会发生溢出的前提下，回答下列 C 语言程序问题。

1. 源代码 1 `binsearch.c` 对升序数组
   `{1, 4, 6, 10, 11, 13, 15, 20, 30, 32}` 进行二分查找。
   - 填写 A 至 C，使递归函数 `binsearch(x,i,j)` 判断 `a[i]` 至 `a[j]` 中是否存在 `x`；
   - 填写 D 至 F，使 `binsearch_loop` 在不使用递归的情况下实现相同查找。
2. 源代码 2 `function.c` 中，`f1` 用两个递归分支计算数列值，`f2` 用带状态参数的尾递归计算相同结果，`f_loop` 是待补全的循环版本。
   - 写出执行 `main` 的标准输出；
   - 填写 G，使任意非负整数 $n$ 都满足 `f2(n,0,1) == f1(n)`；
   - 分别求原 `main` 执行时 `f1` 的调用次数，以及将 `f1(7)` 换为 `f2(7,0,1)` 后 `f2` 的调用次数；
   - 填写 H 至 K，使 `f_loop` 不使用递归而返回与 `f2` 相同的结果。
3. 用不超过 50 个日文字符或 30 个英文单词解释：为何在许多情况下，循环版 `binsearch_loop`、`f_loop` 比相应递归版运行得更快。

完整源代码见上文。

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

#### (c)
f1 が呼び出される回数: 41

f2 が呼び出される回数: 7

#### (d)
- \[ 空欄 H \]: z
- \[ 空欄 I \]: x - 1
- \[ 空欄 J \]: z
- \[ 空欄 K \]: tmp + z

### (3)
関数呼出しと復帰、引数受渡し、スタック管理のオーバーヘッドを省けるため。


## **Knowledge**
Binary-Search, Fibonacci-Sequence, Dynamic-Programming
