---
sidebar_label: 2021年8月実施 アルゴリズムとプログラミング
tags:
  - Osaka-University
  - Computer-Science.Algorithm-Design.Quick-Sort
  - Computer-Science.Programming
---
# 大阪大学 情報科学研究科 情報工学 2021年8月実施 アルゴリズムとプログラミング

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


### 题目描述

图 1 的 ANSI C 程序读取若干 `(id, score)` 记录，以 `score` 为键按降序排序并输出。`sort` 每次选择区间最右记录为枢轴，扫描并交换比枢轴分数高的记录，再递归处理两侧。示例输入见上文。

1. 写出 `sort` 实现的通用排序算法名称。
2. 对示例数据，求 `swap` 第三次执行后 `D[0].score` 至 `D[4].score` 的值。
3. 稳定排序会保持相同键记录原有的相对次序。本实现不稳定。把示例输入第 2 行的分数 `60` 改为哪个值，可使最终输出直接体现这一不稳定性？
4. 只重排示例中的五条记录，使 `swap` 调用次数最大；给出一种这样的 `data.txt` 和最大调用次数。
5. 用 $n$ 表示该算法的最坏时间复杂度，并说明造成最坏划分的原因。

#### 考点

- **快速排序**：理解 Lomuto 式划分、枢轴归位和递归区间。
- **排序执行追踪**：逐次记录扫描和交换后的数组状态。
- **稳定性**：分析非相邻交换如何改变相等键记录的相对顺序。
- **最坏情况复杂度**：极端不平衡划分导致递推 $T(n)=T(n-1)+O(n)$。

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
