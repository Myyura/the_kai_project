---
sidebar_label: 2019年8月実施 アルゴリズムとプログラミング
tags:
  - Osaka-University
  - Computer-Science.Data-Structures.Binary-Heap
  - Computer-Science.Algorithm-Design.Heap-Sort
  - Computer-Science.Programming
---
# 大阪大学 情報科学研究科 情報工学 2019年8月実施 アルゴリズムとプログラミング

## **Author**
祭音Myyura

## **Description**
図１に示すANSI-C準拠であるC言語のプログラムは、複数の整数のデータを、二分木を利用して昇順に整列して出力するプログラムである。
図１のプログラムでは、配列の添え字が二分木の節点番号に対応している。
ただし、二分木の根の節点番号を $0$ とし、節点番号が $i$ の節点に子がある場合、左の子の節点番号を $2i+1$、右の子の節点番号を $2i+2$ とする。
また、配列に格納されたデータは、二分木の対応する節点のデータを示している。

整列するデータは図２に示すような形式のファイル data.txt で与えられ、1 行目には整列するデータの個数 $n\ (n \ge 1)$、2 行目以降の $n$ 行には整列するデータの値が書かれている。
図３は、図２の data.txt を与えて図１のプログラムを実行した場合の、28 行目が実行される直前の配列 d に対応する二分木であり、丸が節点、丸の左側の数字が節点番号、丸の中の数字がデータの値、線分が枝を示している。
図１のプログラムに関する以下の各問に答えよ。

(1) 40 行目で呼び出されている関数 sort で実現されている整列アルゴリズムは、一般に何と呼ばれているか名称を答えよ。

(2) 図２の data.txt を与えてプログラムを実行した場合の、28 行目が実行された直後の配列 d に対応する二分木を図示せよ。ただし、図３にならい、丸で節点、丸の左側の数字が節点番号、丸の中の数字がデータの値、線分が枝を示すこと。

(3) 11 行目および 12 行目が実行されることより、節点番号が current の節点のデータとその子のデータの間に成立する関係を説明せよ。

(4) 関数 sort で実現されている整列アルゴリズムの最悪時間計算量を、整列するデータの個数 $n$ 用いて理由と共にオーダー表記で示せ。

(5) 関数 sort において、28 行目の実行時に関数 swap が呼び出される回数を $T(n)$ とする。$n$ は整列するデータの個数である。28 行目を変更し、28 行目の for ループの繰り返し回数と $T(n)$ の最大値をできる限り削減 (28 行目の実行に要する最悪時間計算量を削減)することを考える。以下の各小間に答えよ.

- (5-1) 下記の(あ)~(え)を埋めて変更後の 28 行目を完成させよ.

```text
for (i = (あ); 0 <= i; i--) downh( (い), (う), (え) );
```

- (5-2) 変更後のプログラムにおける $T(n)$ の $n$ に関するオーダ表記を理由と共に示せ. $\sum_{j=0}^{h} \frac{j}{2^j} = 2 - \frac{2 + h}{2^h}$ を用いてよい.

(6) 下線 (ア)~(エ)で示す条件式を必要に応じて変更し、データを降順 (descending order) に整列して出力することを考える。変更後のプログラムにおける下線(ア)~(エ)の条件式をそれぞれ答えよ。


```text
#include <stdio.h>
#include <stdlib.h>
void swap(int d[], int p, int q) {
    int tmp;
    tmp = d[p]; d[p] = d[q]; d[q] = tmp;
}
void downh(int d[], int n, int k) {
    int child, current = k;
    while (current < n / 2) {
        child = current * 2 + 1;
        if ((child + 1 < n) && (d[child] < d[child] + 1)) child++;  // (ア) child + 1 < n, (イ) d[child] < d[child] + 1
        if (d[current] < d[child]) swap(d, current, child);  // (ウ) d[current] < d[child]
        else break;
        current = child;
    }
}
void uph(int d[], int k) {
    int parent, current = k;
    while (0 < current) {
        parent = (current - 1) / 2;
        if (d[parent] < d[current]) swap(d, parent, current);  // (エ) d[parent] < d[current]
        else break;
        current = parent;
    }
}
void sort(int d[], int n) {
    int i;
    for (i = 1; i < n; i++) uph(d, i);
    for (i = n - 1; 0 < i; i--) { swap(d, 0, i); downh(d, i, 0) };
}
int main() {
    int i, N, *D;
    FILE *fp;
    fp = fopen("data.txt", "r");
    fscanf(fp, "%d", &N);
    D = (int*) malloc(sizeof(int) * N);
    for (i = 0; i < N; i++) fscanf(fp, "%d", &D[i]);
    fclose(fp);

    sort(D, N);

    for (i = 0; i < N; i++) printf("%d ", D[i]);
    printf("\n");
    free(D);
    return 0;
}
```
#### <center> 図１</center>

```text
6
40
30
50
10
60
20
```
#### <center> 図２ data.txt</center>

```text
                                 0(40)
                             /          \
                          1(30)        2(50)
                        /      \      /
                    3(10)    4(60)  5(20)
```
#### <center> 図３ 二分木の例</center>

### 题目描述

图 1 的 ANSI C 程序利用数组表示完全二叉树并对整数排序。根下标为 0，节点 $i$ 的左右孩子下标分别为 $2i+1$、$2i+2$。`uph` 向上调整，`downh` 向下调整，`sort` 先建堆再不断交换根与末尾元素。输入文件格式、示例数组和树见上文。

1. 写出 `sort` 所实现的排序算法名称。
2. 对示例输入，画出第 28 行执行后数组 `d` 对应的二叉树，标明节点编号和数据。
3. 说明执行 `downh` 中第 11、12 行后，节点 `current` 与其孩子的数据满足什么关系。
4. 用 $n$ 表示该排序算法的最坏时间复杂度，并说明理由。
5. 原程序通过逐个调用 `uph` 建堆。把第 28 行改为自底向上调用 `downh`：
   1. 填写循环初值及 `downh` 的三个实参 (あ) 至 (え)；
   2. 设建堆阶段 `swap` 的调用次数为 $T(n)$，给出修改后 $T(n)$ 的渐近阶并说明。可使用题给有限和公式。
6. 修改下划线 (ア) 至 (エ) 的比较条件，使程序按降序输出。完整代码中个别排版把 `d[child+1]` 误写成 `d[child]+1`，应按右孩子比较理解。

## **Kai**
### (1)
Heap Sort

### (2)
```text
                                 0(60)
                             /          \
                          1(50)        2(40)
                        /      \      /
                    3(10)    4(30)  5(20)
```

### (3)
存在する子について、d\[current\] >= d\[2 * current + 1\], d\[current\] >= d\[2 * current + 2\] が成り立つ。

### (4)
The number of iterations in function uph(d, k) is bounded by the height of the tree, which is $\lfloor \log_2 n \rfloor = O(\log n)$.
Hence wrost case time complexity of line 28 is $O(n \log n)$.

Similarly, the number of iterations in function downh(d, n, k) is also bounded by the height of the tree, hence worst case time complexity of line 29 is $O(n \log n)$.

Therefore, the worst case time complexity of the sort is $O(n \log n)$.

### (5)
#### (5-1)
- (あ) n / 2 - 1
- (い) d
- (う) n
- (え) i

### (5-2)
Note that

- At most $\left\lceil\frac{n}{2}\right\rceil$ elements are pushed down at most $0$ steps.
- At most $\left\lceil\frac{n}{4}\right\rceil$ elements are pushed down at most $1$ step.
- At most $\left\lceil\frac{n}{8}\right\rceil$ elements are pushed down at most $2$ steps.
- $\cdots$

Therefore,

$$
\begin{aligned}
T(n) &\le \sum_{j=0}^{\lfloor\log_2 n\rfloor}
\left\lceil\frac{n}{2^{j+1}}\right\rceil j \\
&\le \frac{n}{2}\sum_{j=0}^{\lfloor\log_2 n\rfloor}\frac{j}{2^j}
   +\sum_{j=0}^{\lfloor\log_2 n\rfloor}j \\
&\le n+O((\log n)^2)=O(n).
\end{aligned}
$$

したがって、$T(n)=O(n)$ である。

### (6)
- (ア) child + 1 < n
- (イ) d\[child\] > d\[child + 1\]
- (ウ) d\[current\] > d\[child\]
- (エ) d\[parent\] > d\[current\]
