---
sidebar_label: "2022年8月実施 プログラミング"
tags:
  - Nagoya-University
  - Computer-Science.Algorithm-Design.Binary-Search
  - Computer-Science.Programming.Recursion
  - Computer-Science.Programming.Fibonacci-Numbers
  - Computer-Science.Programming.Base-Conversion
  - Computer-Science.Computer-Architecture.Floating-Point-Representation
---
# 名古屋大学 情報学研究科 知能システム学専攻 2022年8月実施 プログラミング

## **Author**
祭音Myyura

## **Description**

出典：[名古屋大学・令和5年度知能システム学専攻入試問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2022/09/0c8cfd0a7f9c85180fb8c16d9c008ae0.pdf)。

### \[1\]
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
```text showLineNumbers
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
```text showLineNumbers=100
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

#### ソースコード 3: repdec.c
```text showLineNumbers
#include <stdio.h>
#include <stdlib.h>
#define MAX 1000

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

#### ソースコード 4: sum.c
```text showLineNumbers
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

### 题目描述

本题完整 C 代码与给定输出见上文，所有回答均假设不做编译优化且不发生溢出。

**[1] 二分查找与 Fibonacci 递归**：

1. 补全 `binsearch.c` 的 A—C，使 `binsearch(x,i,j)` 递归判断升序数组 `a[i]...a[j]` 是否含 `x`；补全 D—F，使 `binsearch_loop` 用循环完成同一二分查找。
2. 对 `function.c`：
   - 写出执行 `main()` 的输出；
   - 补全 G，使任意非负整数 `n` 上 `f2(n,0,1)` 与 `f1(n)` 返回值相同；
   - 分别统计执行 `f1(7)` 时 `f1` 的调用次数，以及改成 `f2(7,0,1)` 后 `f2` 的调用次数；
   - 补全 H—K，使 `f_loop` 不用递归而返回与 `f2` 相同的结果。
3. 在中文 50 字或英文 30 词内解释为什么循环版本通常比递归版本执行更快。

**[2] 循环小数、进位制与浮点数**：`repdec(n,d,base)` 按 `base` 进制输出 $n/d$，循环节用 `{}` 括起，且 $d<\texttt{MAX}$；数组 `p` 的调试输出规则见完整代码。

1. 把调用改为 `repdec(22,7,10)`，写出全部输出。
2. 已知 `repdec(1,10,10)` 的输出如上，改为 `repdec(1,10,2)` 后写出二进制结果。
3. 在规定字数内解释 `p[n]=k` 表示什么。
4. 在规定字数内解释为何代码第 22 行的条件足以退出循环。
5. `sum.c` 把单精度浮点数 `0.1` 累加 100 次却不精确等于 10；在规定字数内解释原因。

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

#### (c)
f1 が呼び出される回数: 41

f2 が呼び出される回数: 7

#### (d)
- \[ 空欄 H \]: z
- \[ 空欄 I \]: x - 1
- \[ 空欄 J \]: z
- \[ 空欄 K \]: tmp + z

### (3)

再帰の引数・戻り番地の保存と復元など、関数呼出しの負担を省けるため。

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

p[n]=k>0は余りnの初出が第k桁の計算前であること、0は未出現を表す。

### 4.

余りが再出現すると以後の桁列も繰り返す。有限小数では余り0が続くため同じ条件で停止する。余りはd種類なので必ず再出現する。

### 5.

0.1は2進数で有限桁に表せず、表現時の丸めと加算時の丸めによる誤差が蓄積するため。
