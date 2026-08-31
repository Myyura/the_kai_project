---
sidebar_label: "2018年2月実施 情報基礎 問題2"
tags:
  - Ochanomizu-University
  - Computer-Science.Data-Structures.Binary-Search-Tree
  - Computer-Science.Algorithm-Design.Binary-Search
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2018年2月実施 情報基礎 問題2

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

以下の構造体で表されている各ノードにより構成された二分探索木の C 言語プログラムを考える。

```c
struct node {
    char data[20];
    struct node *left, *right;
};
```

各ノードの要素データは配列 `data[]` に格納され、自分より小さな要素データを持つ子ノードへのポインタを `left`、大きな要素データを持つ子ノードへのポインタを `right` とする。

以下の $7$ つのノード `A`, `B`, `C`, `D`, `E`, `F`, `H` を持つ二分探索木 $T$ において、各ノードの要素データは以下の通りである。

```c
struct node A, B, C, D, E, F, H;
strcpy(A.data, "Apple"),      strcpy(B.data, "Banana"),
strcpy(C.data, "Coconut"),    strcpy(D.data, "Durian"),
strcpy(E.data, "Elderberry"), strcpy(F.data, "Fig"),
strcpy(H.data, "Hackberry");
```

$T$ の各ノード間の関係は以下の通りであるとする。

```c
D.left = &B, D.right = &F,
B.left = &A, B.right = &C,
F.left = &E, F.right = &H;
```

この $T$ において、要素データ `buf` の探索を行うプログラムを次に示す。このプログラムは、`buf` と同じ要素データが見つかった場合はその構造体へのポインタを返し、見つからなかった場合は `NULL` を返す。ただし `root` と `nil` はそれぞれ以下の通りである。

```c
struct node *root, nil;
```

`root` は木の根を指すポインタで、`A` から `H` のうち根となったノードを指している。一方、`nil` は木の末端であることを示す構造体で、各葉から子ノードとして指されている。

```text
 1  struct node *search(char buf[]) {
 2      struct node *ptr;
 3      int cmp;

 5      strcpy(nil.data, buf);
 6      ptr = root;
 7      while ((cmp = strcmp(buf, ptr->data)) != 0) {
 8          if (cmp < 0) ptr = ptr->left;
 9          else         ptr = ptr->right;
10      }
11      if (ptr != &nil) return ptr;
12      else             return NULL;
13  }
```

以下の問いに答えよ。

### (1)

$T$ はどのような構造となっているか、`A` から `H` のノードを用いて図示せよ。

### (2)

プログラムの $5$ 行目で、探索する要素データ `buf` を構造体 `nil` の要素データにコピーしている理由を答えよ。また、このような目的で用いられる構造体 `nil` は何と呼ばれるか答えよ。

### (3)

$T$ に対し、上記のプログラムで要素データ `Coconut` の探索を行うとプログラムはどのように動作するか。プログラム中で実行される行番号を実行順に書き下し、各行の動作を順に説明せよ。

### (4)

$T$ に対し、上記のプログラムで要素データ `Grape` の探索を行うとプログラムはどのように動作するか。プログラム中で実行される行番号を実行順に書き下し、各行の動作を順に説明せよ。

### 题目描述

给定保存字符串的二叉搜索树及使用 `nil` 末端节点的搜索程序：

1. 画出由节点 `A` 至 `H` 构成的树。
2. 说明把搜索字符串复制到 `nil.data` 的目的，并写出这种节点的名称。
3. 依次列出搜索 `Coconut` 时执行的行号和状态变化。
4. 依次列出搜索不存在的 `Grape` 时执行的行号和状态变化。

## **Kai**

### (1)

`root` は `D` を指し、木 $T$ は次の通りである。図中の全ての空の子は `nil` を指す。

```text
                         D: Durian
                       /           \
               B: Banana             F: Fig
               /       \             /    \
        A: Apple    C: Coconut  E: Elderberry  H: Hackberry
```

### (2)

探索が葉を越えて `nil` に達したとき、`nil.data` があらかじめ `buf` と等しくなっているため、$7$ 行目の `strcmp` は必ず $0$ となってループが停止する。したがってループ内で末端かどうかを毎回検査する必要がない。

この `nil` を

$$
\boxed{\text{番兵（sentinel）}}
$$

という。

### (3)

宣言行を除く実行行番号は

```text
5 -> 6 -> 7 -> 8 -> 7 -> 9 -> 7 -> 11
```

である。

| 行 | 動作 |
|---:|---|
| 5 | `nil.data` に `Coconut` を代入する。 |
| 6 | `ptr = D` とする。 |
| 7 | `Coconut < Durian` なので `cmp < 0`。 |
| 8 | 左の `B` へ移る。 |
| 7 | `Coconut > Banana` なので `cmp > 0`。 |
| 9 | 右の `C` へ移る。 |
| 7 | `Coconut == Coconut` なので `cmp = 0`、ループを抜ける。 |
| 11 | `ptr != &nil` なので `C` へのポインタを返す。 |

### (4)

宣言行を除く実行行番号は

```text
5 -> 6 -> 7 -> 9 -> 7 -> 9 -> 7 -> 8 -> 7 -> 11 -> 12
```

である。

| 行 | 動作 |
|---:|---|
| 5 | `nil.data` に `Grape` を代入する。 |
| 6 | `ptr = D` とする。 |
| 7 | `Grape > Durian` なので `cmp > 0`。 |
| 9 | 右の `F` へ移る。 |
| 7 | `Grape > Fig` なので `cmp > 0`。 |
| 9 | 右の `H` へ移る。 |
| 7 | `Grape < Hackberry` なので `cmp < 0`。 |
| 8 | 左の `nil` へ移る。 |
| 7 | `Grape == nil.data` なので `cmp = 0`、ループを抜ける。 |
| 11 | `ptr == &nil` なので `return ptr` は実行しない。 |
| 12 | `NULL` を返す。 |
