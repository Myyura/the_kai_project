---
sidebar_label: 2019年8月実施 プログラミング
tags:
  - Nagoya-University
  - Computer-Science.Data-Structures.Hash-Table
  - Computer-Science.Programming
---
# 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2019年8月実施 プログラミング

## **Author**
祭音Myyura

## **Description**
プログラム A は, ハッシュ表を用いて正整数の集合を操作するためのC言語プログラムである。
ハッシュ値ごとの正整数のリスト構造を、３つの配列 element, next, hfirst を用いて実現している。
element 配列は、正整数の集合を格納するための配列である。
next 配列は、リストの次の要素が格納されている element 配列の添え字を格納するための配列である。
hfirst 配列はハッシュ表のための配列であり、hfirst\[h\] はハッシュ値 h を持つ正整数のリストの先頭の要素が格納されている element 配列の添え字を表す。
ここで、hfirst\[h\] が -1 のときは、ハッシュ値 h を持つ正整数のリストが空であることを表す。

hashfunc 関数は、ハッシュ関数を表す。
search 関数、insert 関数、delete 関数は、それぞれ element 配列に対する正整数の探索、挿入、削除を行う関数である。
initarrays 関数は、hfirst 配列、element 配列、next 配列をそれぞれ初期化する関数である。
outputarrays 関数は、hfirst 配列、element 配列、next 配列をそれぞれ標準出力に出力する関数である。

プログラム A について、以下の問いに答えよ。

(1) プログラム A を実行した際に、74 行目の outputarrays 関数の呼び出しにより標準出力に出力される文字列を書け。

(2) プログラム A の 65 行目の int data[] = {1,2,3,5,7}; を int data[] = {1,2,18,19,20}; に置き換えて実行した際に、74行目の outputarrays 関数の呼び出しにより標準出力に出力される文字列を書け。

(3) data 配列に格納される正整数の集合がどのような特徴を持つときに、search 関数の実行時間が集合のサイズに対して長くなるか答えよ。

(4) (ア) と (イ) を適切な式で埋めて、delete 関数を完成させよ。

(5) プログラム A を実行した際に、78 行目の outputarrays 関数の呼び出しにより標準出力に出力される文字列を書け。ただし、プログラム A は (2) の置き換えを行っていないものとする。

#### <center> プログラム A
```text
#include <stdio.h>
#define MAXSIZE     1000
#define P           17
#define SENTINEL    -1
#define NOTFOUND    -2
int hfirst[P];
int element[MAXSIZE];
int next[MAXSIZE];
int avail = -1;
int maxnode = 0;
int hashfunc(int data) {
    return data % P;
}
int search(int h, int data) {
    int pred = -1;
    if (hfirst[h] == -1) return NOTFOUND;
    if (element[hfirst[h]] == data) return pred;
    pred = hfirst[h];
    while (next[pred] != SENTINEL) {
        if (element[next[pred]] == data) return pred;
        pred = next[pred];
    }
    return NOTFOUND;
}
void insert(int h, int data) {
    int u;
    if (avail != -1) {
        u = avail;
        avail = next[avail];
    } else {
        u = maxnode;
        maxnode = maxnode + 1;
    }
    element[u] = data;
    next[u] = hfirst[h];
    hfirst[h] = u;
}
void delete(int h, int pred) {
    int u;
    if (pred != -1) {
        u = next[pred];
        next[pred] = [ 空欄 (ア) ];
    } else {
        u = hfirst[h];
        hfirst[h] = [ 空欄 (イ) ];
    }
    next[u] = avail; avail = u;
}
void initarrays() {
    int i;
    for (i = 0; i < P; i++) { hfirst[i] = -1; }
    for (i = 0; i < MAXSIZE; i++) { element[i] =0; }
    for (i = 0; i < MAXSIZE; i++) { next[i] = SENTINEL; }
}
void outputarrays(int maxnode) {
    int i;
    for (i = 0; i < P; i++) { printf("%d,", hfirst[i]); }
    printf("\n");
    for (i = 0; i < maxnode; i++) { printf("%d,", element[i]); }
    printf("\n");
    for (i = 0; i < maxnode; i++) { printf("%d,", next[i]); }
    printf("\n");
}
int main() {
    int data[] = {1, 2, 3, 5, 7};
    int h;
    int i;
    int pred;
    initarrays();
    for (i = 0; i < 5; i++) {
        h = hashfunc(data[i]);
        if (search(h, data[i]) == NOTFOUND) insert(h, data[i]);
    }
    outputarrays(maxnode);
    h = hashfunc(1);
    pred = search(h, 1);
    if (pred != NOTFOUND) delete(h, pred);
    outputarrays(maxnode);
    return 0;
}
```

### 题目描述

程序 A 使用哈希表管理正整数集合。各哈希值对应的链式列表由三个数组实现：`element` 保存整数，`next` 保存同一链中下一元素在 `element` 中的下标，`hfirst[h]` 保存哈希值为 $h$ 的链首下标；值 `-1` 表示链为空。哈希函数为 `data % 17`。`search`、`insert`、`delete` 分别完成查找、插入、删除，`avail` 管理可复用槽位，`outputarrays` 输出三个数组。完整程序见上文。

回答下列问题。

1. 使用初始数据 `{1, 2, 3, 5, 7}` 执行程序，写出第 74 行调用 `outputarrays` 时的标准输出。
2. 将数据改为 `{1, 2, 18, 19, 20}` 后执行，写出第 74 行调用 `outputarrays` 时的标准输出。
3. 说明 `data` 中的整数具有什么特征时，`search` 的运行时间会随集合规模显著增长。
4. 填写 `delete` 中的空格 (ア)、(イ)，正确地将待删节点从链中摘除，并把槽位加入空闲链。
5. 不进行第 2 问的数据替换，写出删除整数 `1` 后第 78 行调用 `outputarrays` 的标准输出。

#### 考点

- **哈希表与链地址法**：理解哈希桶、冲突链以及元素在数组中的链接方式。
- **哈希冲突与性能退化**：分析大量键映射到同一哈希值时线性查找的代价。
- **数组模拟链表**：使用下标而非指针维护链首、前驱和后继。
- **删除操作**：分别处理删除链首和非链首节点，并维护空闲槽位链。
- **程序状态追踪**：推导插入、删除后 `hfirst`、`element`、`next` 的具体内容。

## **Kai**
### (1)
```text
-1,0,1,2,-1,3,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,
1,2,3,5,7,
-1,-1,-1,-1,-1,
```

### (2)
```text
-1,2,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
1,2,18,19,20,
-1,-1,0,1,-1,
```

### (3)
When hash value of all elements in array "data" are same, the time complexity of function "search" is linear to the size of array "data".

### (4)
- \[ 空欄 (ア) \]: next[u]
- \[ 空欄 (イ) \]: next[u]

### (5)
```text
-1,-1,1,2,-1,3,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,
1,2,3,5,7,
-1,-1,-1,-1,-1,
```
