---
sidebar_label: "2022年度 アルゴリズムとプログラミング"
sidebar_position: 7
tags:
  - Osaka-University
  - Sorting-Algorithm
  - Quick-Sort
---
# 大阪大学 情報科学研究科 情報工学 2022年度 アルゴリズムとプログラミング

## **Author**
祭音Myyura

## **Description**
図 1 に示す ANSI-C 準拠である C 言語のプログラム (program) は、識別子 (id) と得点 (score) を対 (pair) とするデータ (data) を一つ以上読み込んで、得点をキーとして降順 (descending order) に整列 (sort) して出力 (output) するプログラムである。
入力 (input) するデータはファイル data.txt から読み込まれる。data.txt の 1 行目には整列するデータの個数 ($n \ge 1$)、2 行目から $n+1$ 行目には整列するデータが各行 (each line) に記述されている。以下の各問に答えよ。

(1) 関数 (function) sort で実現されている整列アルゴリズム (sorting algorithm) は一般的に何と呼ばれているか名称を答えよ。

(2) 図 2 の data.txt からデータを読み込んでプログラムを実行した場合に、関数 swap が 3 回目に実行された直後の D\[0\].score, D\[1\].score, D\[2\].score, D\[3\].score, D\[4\].score の値をそれぞれ求めよ。

(3) キーの値が等しいデータに対して、整列前のデータの並び順の前後関係が整列後も維持される整列アルゴリズムを、安定な (stable) 整列アルゴリズムという。
関数 sort で実現されている整列アルゴリズムは安定な整列アルゴリズムではない。
関数 sort が安定な整列アルゴリズムではないことが分かる出力を得た場合、図 2 の data.txt の 2 行目の得点を 60 からいくつに書き換えれば所望の出力が得られるか数値を答えよ。

(4) 図 2 における 2 行目 ~ 6 行目の順番を入れ替えた data.txt からデータを読み込んでプログラムを実行することを考える。
関数 swap が呼び出される回数が最大となるような data.txt を示せ。
また、その際に関数 swap が呼び出される回数を示せ。

(5) 関数 sort で実現されている整列アルゴリズムの最悪時間計算量 (worst case time complexity) を、整列するデータの個数 $n$ を用いてオーダ表記 (order notation) で理由と共に示せ。

```text
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id;
    int score;
} user_t;

void swap (user_t *A, user_t *B) {
    user_t tmp = *A;
    *A = *B;
    *B = tmp;
}

void sort (user_t D[], int left, int right) {
    if (left < right) {
        int j, i = left;
        user_t pivot = D[right];
        for (j = left; j < right; j++) {
            if (D[j].score > pivot.score) {
                swap(&D[i], &D[j]);
                i++;
            }
        }
        swap(&D[i], &D[right]);
        sort(D, left, i - 1);
        sort(D, i + 1, right);
    }
}

int main() {
    int i, N;
    user_t *D;
    FILE *fp = fopen("data.txt", "r");
    fscanf(fp, "%d", &N);
    D = (user_t*) malloc(sizeof(user_t) * N);
    for (i = 0; i < N; i++) {
        fscanf(fp, "%d %d", &D[i].id, &D[i].score);
    }
    fclose(fp);
    sort(D, 0, N - 1);
    for (i = 0; i < N; i++) {
        printf("%d %d\n", D[i].id, D[i].score);
    }
    free(D);
    return 0;
}
```
#### <center> 図1 プログラム

```text
5
1 60
2 90
3 50
4 70
5 100
```
#### <center> 図2 data.txt


## **Kai**
### (1)
クイックソート (Quick Sort)

### (2)
| D\[0\].score | D\[1\].score | D\[2\].score | D\[3\].score | D\[4\].score |
| - | - | - | - | - |
|100|90|70|50|60|

### (3)
100

### (4)
#### 関数 swap が呼び出される回数が最大となる data.txt の例
```text
5
50
40
30
20
10
```

関数 swap が呼び出される回数: 14

### (5)
最悪の場合、ピボットはいつも最小値が選択される。

このとき、ピボットによる左右分割が、常に片方が 0 個でもう片方にすべて偏った場合になるので、計算量 $T(n)$ のオーダーは

$$
\begin{aligned}
T(n) &= n - 1 + T_{n-1}\ \ \ \ \ (n \ge 2) \\
&= n - 1 + n - 2 + \cdots + 1 \\
&= \frac{n(n-1)}{2} \rightarrow O(n^2) \\
\end{aligned}
$$

と求まります。