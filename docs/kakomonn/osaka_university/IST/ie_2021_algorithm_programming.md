---
comments: false
title: 大阪大学 情報科学研究科 情報工学 2021年度 アルゴリズムとプログラミング
tags:
  - Osaka-University
---
# 大阪大学 情報科学研究科 情報工学 2021年度 アルゴリズムとプログラミング

## **Author**
祭音Myyura

## **Description**
図 1 に示す ANSI-C 準拠である C 言語のプログラム (program) A は、先入れ先出しキュー (first-in first-out queue) のプログラムである。
プログラムに対する入力は図 2 に示すような形式 (format) のファイル qdata.txt で与えられ、1 行目に操作の回数、2 行目以降の各行はキューに対する操作を表す。
操作として 0 が与えられた場合はキューから一つデータを取り出し、正の整数 (positive integer) が与えられた場合はその数をデータとしてキューに格納する。
以下の各問に答えよ。

(1) プログラム A を図 2 に示す qdata.txt を与えて実行することを考える。プログラムAが動作開始してから終了するまでに出力する内容を答えよ。

(2) 図 1 の 13 ~ 18 行目で定義されている関数 enqueue を以下の図で示すように変更して、図 1 に示すプログラム A を優先度つきキュー (priority queue) のプログラム B としたい。
プログラム B では、要素をキューに挿入する際、関数 enqueue でキューに用いる配列の要素を優先度 (priority) の高い順に整列する。
なお、優先度付きキューに挿入される数字自体が与えられ、値が大きいほど優先度が高いとする。以下の各問に答えよ。

```text
void enqueue (int d) {
    int i;
    if ((qtail + 1) % NMAX != qhead) {
        for (i = qtail; i != qhead && [ 空欄(A) ] < [ 空欄(B) ]; i = (i - 1 + NMAX) % NMAX) {
            qd[i] = [ 空欄(C) ];
        }
        [ 空欄(D) ] = d;
        qtail = (qtail + 1) % NMAX;
    } else exit(1);
}
```

- (2-1) 上記図中の関数 enqueue による 空欄\[ (A) \] ~ \[ (D) \]を適切な式で埋めて、プログラム B を完成させよ。
- (2-2) プログラム B で実現される優先度付きキューが保持できるデータ数は、最大でいくつか書け。
- (2-3) プログラム B を図 2 に示す qdata.txt を与えて実行することを考える。プログラム B が動作開始してから終了するまでに出力する内容を答えよ。
- (2-4) 図 2 の qdata.txt における 2 行目以降を並び変えたデータを入力としてプログラム B を実行することを考える。上記図中における「qd\[i\] = \[ 空欄(C) \];」で示す行の実行回数が最大となるような qdata.txt を示せ。
- (2-5) プログラム B の入力に与える操作の回数を N とする（ただし N > NMAX とする）。上記図中における「qd\[i\] = \[ 空欄(C) \];」で示す行の実行回数が最大になる時は、入力 qdata.txt がどのようなデータとなっている場合か、説明せよ。

```text
#include <stdio.h>
#include <stdlib.h>
#define NMAX 256

int qd[NMAX], qhead, qtail;

void printqueue (void) {
    int i;
    for (i = qhead; i != qtail; i = (i + 1) % NMAX)
        printf("p %d\n", qd[i]);
}

void enqueue (int d) {
    if ((qtail + 1) % NMAX != qhead) {
        qd[qtail] = d;
        qtail = (qtail + 1) % NMAX;
    } else exit(1);
}

void dequeue (void) {
    int i;
    if (qhead != qtail) {
        printf("d %d\n", qd[qhead]);
        qhead = (qhead + 1) % NMAX;
    } else exit(1);
}

int main (void) {
    FILE *fp;
    int n, i, d;

    qhead = 0;
    qtail = 0;
    fp = fopen("qdata.txt", "r");
    fscanf(fp, "%d\n", &n);
    for (i = 0; i < n; i++) {
        fscanf(fp, "%d\n", &d);
        if (d == 0) dequeue();
        else if (d > 0) enqueue(d);
    }
    fclose(fp);
    printqueue();
    return 0;
}
```
#### <center> 図1 プログラムA

```text
7
4
0
2
3
0
5
1
```
#### <center > 図2 qdata.txt

## **Kai**
### (1)
```text
d 4
d 2
p 3
p 5
p 1
```

### (2)
#### (2-1)
- 空欄\[ (A) \]: qd\[(i - 1 + NMAX) % NMAX\]
- 空欄\[ (B) \]: d
- 空欄\[ (C) \]: qd\[(i - 1 + NMAX) % NMAX\]
- 空欄\[ (D) \]: qd\[i\]

#### (2-2)
NMAX - 1

#### (2-3)
```text
d 4
d 3
p 5
p 2
p 1
```

#### (2-4)
```text
7
1
2
3
4
5
6
7
```

#### (2-5)
要素を優先度が昇順にエンキューする場合。
