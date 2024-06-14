---
comments: false
title: 名古屋大学 情報学研究科 情報システム学専攻 2023年8月実施 問6 プログラミング
tags:
  - Nagoya-University
  - Dynamic-Programming
---
# 名古屋大学 情報学研究科 情報システム学専攻 2023年8月実施 問6 プログラミング

## **Author**
祭音Myyura

## **Description**
ソースコード 1, 2 はどちらもフィボナッチ数を計算するC言語プログラムである。
ソースコード 1 の fib1 はフィボナッチ数を再帰的に計算し、ソースコード 2 の fib2 にはメモ化が導入されている。
本問では 32 ビットの符号付き整数でオーバーフローが発生しない範囲として、40 番目までのフィボナッチ数のみを扱うこととする。
以下の全ての問いに答えよ。

(1) ソースコード 1 の \[ 空欄 A \] に 7 を埋めて main 関数を実行したときに標準出力に印字される実行結果を書け。

(2) ソースコード 2 の \[ 空欄 B \] に 10 を埋めて main 関数を実行したときに標準出力に印字される実行結果を書け。

(3) ソースコード 2 の \[ 空欄 B \] に整数 $m$ ($1 < m \le 40$) を埋めて main 関数を実行したときに 23 行目の printf 文を実行する時に cntr が保持する値を $m$ の式で表せ。

(4) ソースコード 1 の \[ 空欄 A \] とソースコード 2 の \[ 空欄 B \] に同じ整数を埋めたとき、一般にソースコード 2 の main 関数の実行はソースコード 1 の main 関数の実行よりも効率的である。その理由を150字以内（英語の場合、100 words以内）で説明せよ。

(5) ソースコード 2 の 22 行目の配列 memo の初期化は 44 行目の fib2(n) の計算において参照されることがない要素も含めて初期化している。\[ 空欄 B \] に与えた整数 $m$ について適切にフィボナッチ数を計算するために必要な要素のみを -1 で初期化するように 22 行目を変更せよ。解答では 22 行目に記述するコードを記すこと。

#### <center> ソースコード１: フィボナッチ数を再帰的に計算するＣ言語プログラム
```text
#include <stdio.h>

int cntr=0;

int fib1(int n) {
    int z;
    cntr++;
    if (n<=0)
        z=0;
    else if (n==1)
        z=1;
    else
        z=fib1(n-1)+fib1(n-2);
    return z;
}

int main() {
    int n=[ 空欄 A ];
    printf("%d,%d",fib1(n),cntr);
    return 0;
}
```

#### <center> ソースコード２: メモ化を用いてフィボナッチ数を計算するＣ言語プログラム
```text
#include <stdio.h>

int cntr=0;
int memo[41];

int fib2(int n) {
    int z;
    if(memo[n]>=0) return memo[n];
    cntr++;
    if(n<=0)
        z=0;
    else if(n==1)
        z=1;
    else
        z=fib2(n-1)+fib2(n-2);
    memo[n]=z;
    return z;
}

int main() {
    int i, n=[ 空欄 B ];
    for(i=0; i<41; i++) memo[i]=-1;
    printf("%d,%d",fib2(n),cntr);
    return 0;
}
```

(6) 関数呼び出しを用いずにフィボナッチ数を計算する関数 fib3 を, 下記の関数定義の中の [ 空欄 (ア) ], [ 空欄 (イ) ], [ 空欄 (ウ) ] を埋めて完成せよ.
ただし, 任意の整数 $m\ (0 \le m \le 40)$ について, fib3(m) の返り値が fib1(m) の帰り値と一致すること。

```text
int fib3(int n) {
    int i, p=0, q=1, tmp;
    for(i=0; i<n; i++) {
        tmp=[ 空欄 (ア) ];
        p=[ 空欄 (イ) ];
        q=[ 空欄 (ウ) ];
    }
    return p;
}
```

## **Kai**
Note: The order of the evaluation of the arguments to any function in C is not defined by C standard (undefined behaviour),
a compiler may choose to evaluate either from left-to-right or right-to-left,
which means that the program provided by ソースコード1 and ソースコード2 is somehow "wrong".

In the following Kais, we assume that arguments of `printf` are evaluated from left-to-right.

### (1)
13, 41

### (2)
55, 11

### (3)
cntr = m + 1

### (4)
再帰的にフィボナッチ数を計算する場合、同じフィボナッチ数を何度も計算する必要があります。
たとえば、fib1(5) を計算する際には、fib1(4) と fib1(3) を計算し、さらにfib1(4) を計算するために fib1(3) と fib1(2) を計算します。
メモ化を用いる場合、一度計算したフィボナッチ数を保存しておき、再度同じ値を計算する必要がなくなります。

In the recursive calculation, a large number of overlapping subproblems are computed multiple times, resulting in an exponential time complexity of $O(2^n)$.
In contrast, memoization eliminates the redundant calculations by storing the results of subproblems, reducing the time complexity to $O(n)$. 

### (5)
```text
for(i=0; i<n+1; i++) memo[i]=-1;
```

### (6)
- \[ 空欄 (ア) \]: p+q
- \[ 空欄 (イ) \]: q
- \[ 空欄 (ウ) \]: tmp