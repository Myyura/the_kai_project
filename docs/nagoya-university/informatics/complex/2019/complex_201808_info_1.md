---
sidebar_label: "2018年8月実施 情1"
tags:
  - Nagoya-University
  - Computer-Science.Programming.Base-Conversion
  - Computer-Science.Programming.Bitwise-Operation
  - Computer-Science.Programming.Fibonacci-Numbers
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2018年8月実施 情1

## **Author**
祭音Myyura

## **Description**
### \[1\]
次のプログラムの出力結果を示せ。

```c
#include <stdio.h>

int main() {
    int a = 0X0f0f;
    printf("%d %x %x %x\n", a, a%2, a&0X2468, a<<2);
    return 0;
}
```

### \[2\]
$n$ 番目のフィボナッチ数を $a_n$ で表すと，$a_n$ は $a_0=0,a_1=1$, $n \geq 2$ では $a_n = a_{n-1} + a_{n-2}$ で定義される。以下は $n$ を標準入力から受け取り，$a_n$ を計算するプログラムである。

```c
#include <stdio.h>

int n;

int fib(int k) {
    if(k==0||k==(1)) return (2);
    else return (3);
}

int fib2(int a1, int a2, int k) {
    if(k==(4)) return a1;
    else return (5);
}

int main() {
    scanf("%d", &n);
    printf("%d %d\n", n, fib(n));
    printf("%d %d\n", n, fib2(0,1,0));
    return 0;
}
```

1) $a_n$ を再帰法で計算する関数 `fib` の空欄を適切に埋めよ。
2) `fib2` は，`fib` よりも少ない計算量で $a_n$ を計算する関数である。関数 `fib2` の空欄を適切に埋めよ。
3) $n=5$ としてこのプログラムを実行したとき，関数 `fib` と `fib2` が呼び出される回数をそれぞれ答えよ。

### \[3\]
以下の成績表を処理するプログラムを作成する。空欄を適切に埋めよ。また，プログラムの実行結果を示せ。

| 学籍番号 | 国語 |  数学 |
| ---: | -: | --: |
|    1 | 60 | 100 |
|    2 | 75 |  40 |
|    3 | 70 |  70 |
|    4 | 10 |   0 |
|    5 | 80 |  70 |

```c
#include <stdio.h>

int sum(int x[][5], int sid) {
    int i, s=(1);
    for(i=0; i<2; i++) s += x[i][(2)];
    return s;
}

float mean(int x[][5], int tid) {
    int j; float m=0.0;
    for(j=0; j<(3); j++) m += (4);
    return m/5.0;
}

int count(int x[][5], int tid) {
    int j, n=0;
    float m;
    m=mean((5), tid);
    for(j=0; j<5; j++) {(6)}
    return n;
}

int main() {
    int scores[][5]=(7);
    printf("学籍番号2の 国語 は%d点です\n", scores[(8)][(9)]);
    printf("学籍番号3の 合計 点は%d点です\n", sum(scores, 3));
    printf("国語の平均点は%.1f点です\n", mean(scores, 0));
    printf("数学の点数が平均点以上は%d名です\n", count(scores, (10)));
    return 0;
}
```

## **Kai**
### \[1\]

```text
3855 1 408 3c3c
```

### \[2\]
#### 1)

```text
(1) 1
(2) k
(3) fib(k-2)+fib(k-1)
```

#### 2)

```text
(4) n
(5) fib2(a2, a1+a2, k+1)
```

#### 3)

```text
fib : 15 次
fib2: 6 次
```

### \[3\]

```text
(1) 0
(2) sid-1
(3) 5
(4) x[tid][j]
(5) x
(6) if(x[tid][j]>=m) n++;
(7) {{60,75,70,10,80},{100,40,70,0,70}}
(8) 0
(9) 1
(10) 1
```

```text
学籍番号2の 国語 は75点です
学籍番号3の 合計 点は140点です
国語の平均点は59.0点です
数学の点数が平均点以上は3名です
```
