---
sidebar_label: "2022年8月実施 プログラミング"
sidebar_position: 4
tags:
  - Nagoya-University
---
# 名古屋大学 情報学研究科 知能システム学専攻 2022年8月実施 プログラミング

## **Author**
祭音Myyura

## **Description**
### \[1\]
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

### \[2\]
ソースコード 3 に掲げた C 言語のプログラム repdec.c 中で定義された関数 repdec(n, d, base) は、正の整数 n, d が与えられたとき、除算 n/d の結果を表示するプログラムである。
ただし、結果が循環小数になる場合は、繰り返される数字列の部分を {} で表示する。
ここで、base は N 進法の基数 N を指定する引数であり、base = 10 のとき 10 進法で出力される。
また、d の値はプログラム 3 行目の MAX 以上にならないものとする。

37 行目から 40 行目までの記述は、プログラムの動作確認のために、変数 p の内容を表示するものである。

このプログラムを実行した結果は以下の通りである。

```text
    0.{3}
    p = [0 1 0 ]
```

このとき以下の問いに答えよ。

1.&nbsp;45 行目の引数を (22, 7, 10) に変更したときの実行結果を書け。

2.&nbsp;45 行目の引数を (1, 10, 10) に変更したときの実行結果は以下の通りである。

```text
    0.1
    p = [2 1 0 0 0 0 0 0 0 0 ]
```

この引数を (1, 10, 2) に変更して実行した場合は、同じ 1/10 の結果を２進法で出力することになる。その結果を書け。

3.&nbsp;変数 p\[n\] の値が k のとき、それは何を示しているのか、50 字以内（英語の場合、30 words 以内）で説明せよ。

4.&nbsp;22 行目はループからの脱出条件を示している。なぜこの条件で良いのか、その理由を 100 字以内（英語の場合、60 words 以内）で説明せよ。

5.&nbsp;ソースコード 4 に掲げた C 言語のプログラム sum.c は、0.1 を 100 回足した結果を出力するプログラムである。しかし、その出力結果は 10 にならない。その理由を 50 字以内（英語の場合、30 words 以内）で説明せよ。

#### <center> ソースコード 3: repdec.c
```text
#include <stdio.h>
#include <stdlib.h>
#define MAX 100

void repdec(unsigned int n, unsigned int d, unsigned int base)
{
    unsigned int i, k;
    unsigned int a[MAX + 1], p[MAX];

    for (i = 0; i < MAX; i++)
        p[i] = 0;

    a[0] = n / d;
    n = n % d;
    k = 0;

    while (1) {
        p[n] = ++k;
        n = n * base;
        a[k] = n / d;
        n = n % d;
        if (p[n] != 0)
            break;
    }

    printf("%u.", a[0]);
    for (i = 1; i < p[n]; i++)
        printf("%u", a[i]);
    if (p[n] < k || a[k] != 0) {
        printf("{");
        for (i = p[n]; i <= k; i++)
            printf("%u", a[i]);
        printf("}");
    }
    printf("\n");

    printf("p = [");
    for (i = 0; i < d; i++)
        printf("%u ", p[i]);
    printf("]\n");
}

int main (void)
{
    repdec(1, 3, 10);
    return 0;
}
```

#### <center> ソースコード 4: sum.c
```text
#include <stdio.h>
#include <stdlib.h>

int main (void)
{
    float f = 0.1, sum = 0;
    unsigned int i;

    for (i = 0; i < 100; i++)
        sum += f;
    printf("%f\n", sum);

    return 0;
}
```

## **Kai** \[1\]
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


## **Kai** \[2\]
### 1.
```text
3.{142857}
p = [0 1 3 2 5 6 4 ]
```

### 2.
```text
0.0{0011}
p = [0 1 2 0 3 0 5 0 4 0 ]
```

### 3.
base で繰り返しか掛けていき、小数部分の第 k 位の数字を計算する時、前回残った部分は n である。

### 4.
循環小数の場合、n の値も循環節のように、同じ数字の列が無限に繰り返されるので、1回目の時は `p[n] = k > 0` をセットし、2回目の時は while 文から脱出する。

循環小数ではない場合、n は最終的に 0 になり、`p[n] = p[n % d] = p[0] = k > 0` であるので、while 文から脱出する。

（良い説明ではないと思うが、少なくとも参考になれると思います）

### 5.
10進数の「0.1」を2進数に変換すると循環小数になり、どこかの桁数で丸めを行う必要があるため、誤差が生じます。