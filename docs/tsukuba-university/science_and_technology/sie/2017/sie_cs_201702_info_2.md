---
sidebar_label: 情報理工学位プログラム 2017年2月実施 基礎科目 情報2
tags:
  - Tsukuba-University
  - Computer-Science.Data-Structures.Trie
  - Computer-Science.Data-Structures.Queue
---
# 筑波大学 理工情報生命学術院 システム情報工学研究群 情報理工学位プログラム 2017年2月実施 基礎科目 情報2

## **Author**
祭音Myyura

## **Description**
### 情報2 (1)
木構造を用いてキー (key) と値 (value) のペアを格納する連想配列をC言語で実装することを考える．
ただし，キーは a～z の英小文字からなる文字列，値は正の整数とする．

ここで用いる木構造は以下の図のような根付き木である．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tsukuba_university/science_and_technology/sie_cs_201702_info_2_p1.png" width="400" alt=""/>
</figure>

上図の例では，以下の表の5つのペアを格納した根付き木を表している．

| キー | 値 |
| --- | -- |
| mile | 20 |
| milk | 15 |
| pea | 10 |
| peach | 30 |
| pie | 25 |

上図の木のノードを表現するために，以下の構造体nodeを用いる．

```text
struct node {
    struct node *c[26];
    int isEnd;
    int value;
}
```

配列 c には，a～z の各文字に対する子ノードへのポインタが格納される．
なお，子ノードがない場合には NULL が格納される．
また，isEnd には，そのノードがキーの最後の文字に対するノードである場合には TRUE を，そうでない場合には FALSE を格納する．
isEnd に TRUE が格納される場合には，value にそのキーとペアになる値が格納される．

この構造体を用いて以下の関数を実装することを考える．

- `struct node *new_node()`, 新たなノードを作成して初期化し，そのノードへのポインタを返す．
- `void insert(struct node *root, char *key, int value)`,  root が指すノードを根とする根付き木に対して，キー key と値 value のペアを追加する．キー key が根付き木にすでに存在している場合，古い値をvalue でおきかえる．
- `int search(struct node *root, char *key)`, root が指すノードを根とする根付き木に key をキーとするペアがあるかを探し，あればそのペアの
値を返す．なければ −1 を返す．

(a) 以下のプログラムは構造体 node を用いて関数 new_node，insert，search を実装したものである．
空欄 \[ (A) \] ~ \[ (F) \] を埋めてこのプログラムを完成させなさい．

```text
#define TRUE 1
#define FALSE 0

struct node *new_node()
{
    int i;
    struct node *n = (struct node *) malloc(sizeof(struct node));

    for (i = 0; i < 26; i++){
        n->c[i] = NULL;
    }
    n->isEnd = FALSE;
    return n;
}

void insert (struct node *root, char *key, int value)
{
    int l;
    int len = strlen(key);
    struct node *n = root;

    for (l = 0; l < len; l++)
    {
        int i = key[l] - 'a';
        if (空欄 [ (A) ]) {
            n->c[i] = new_node();
        }
        n = 空欄 [ (B) ];
    }
    n->isEnd = 空欄 [ (C) ];
    空欄 [ (D) ];
}

int search (struct node *root, char *key)
{
    int l;
    int len = strlen(key);
    struct node *n = root;

    for (l = 0; l < len; l++)
    {
        int i = key[l] - 'a';

        if (n->c[i] == NULL)
            return -1;
        
        n = 空欄 [ (E) ];
    }
    if (空欄 [ (F) ]) {
        return n->value;
    } else {
        return -1;
    }
}
```

(b) n 個のペアが格納されている root が指すノードを根とする根付き木に対して，長さ k の文字列を key として関数 search を呼び出したときの最悪の場合の漸近的な時間計算量を示し，その理由も示しなさい．

### 情報2 (2)
次の C 言語で記述されたプログラムリストについての以下の設問に答えなさい．

```text
#define BUFSIZE 24

struct buffer {
    char store[BUFSIZE];
    int head, tail;
};

int put_str(struct buffer *buf, char *str) {
    int i = buf->tail;

    while (i - buf->head < BUFSIZE) {
        buf->store[i++ % BUFSIZE] = *str;
        if (*str == '\0') {
            buf->tail = i;
            return 1;
        } else {
            str++;
        }
    }

    return 0;
}

int get_str(struct buffer *buf, char *dest) {
    int i = buf->head;

    if (i == 空欄 [ (A) ]) return 0;

    do {
        *dest = 空欄 [ (B) ];
    } while (空欄 [ (C) ] != '\0');

    空欄 [ (D) ] = i;
    return 1;
}
```

(a). このプログラムは，固定長の配列を用いて，可変長の文字列のバッファを実現する．
プログラムリストの 8 行目から 22 行目で定義されている関数は，与えられた文字列をバッファへ格納する．
いま，head と tail が共に 12 にセットされ，配列 store の中身がすべて '\0' (NULL 文字) で初期化されている struct buffer 型の構造体 buf があると仮定する．
以下に示す順序でこの関数を実行した後の buf.store の内容を答えよ．

```text
put_str(&buf, "ten");
put_str(&buf, "six");
put_str(&buf, "three");
put_str(&buf, "four");
put_str(&buf, "seven");
put_str(&buf, "two");
put_str(&buf, "eight");
```

(b). プログラムリストの 24 行目から 35 行目は，バッファに格納された文字列を1つ取り出す関数である．
この関数は，バッファに何も格納されていない場合は 0 を返す．
それ以外の場合は，head から始まる文字列を dest の指すメモリ領域にコピーし，1 を返す．
(A) から (D) の空欄を埋めてプログラムを完成させよ．
なお，空欄の中では関数呼び出しは用いないこと．

($c$). このプログラムで実現されているデータ構造は，FIFO (First-In,First-Out) と LIFO (Last-In, First Out) のどちらであるか?

(d). このプログラムは，head や tail の値の桁あふれによって誤動作を起こすかもしれない．
それを防ぐために，33 行目と 34 行目の間に以下の 3 行を追加することを考える．
(E) の空欄を埋めて桁あふれを防止せよ．
なお，空欄の中では関数呼び出しは用いないこと．

```text
i = 空欄 [ (E) ];
buf->head -= i;
buf->tail -= i;
```

### 题目描述

### 信息 2（1）

考虑用树结构在 C 语言中实现一个保存键（key）—值（value）对的关联数组。键是仅由英文字母 `a`～`z` 组成的字符串，值是正整数。所用结构是一棵如下图所示的有根树。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tsukuba_university/science_and_technology/sie_cs_201702_info_2_p1.png" width="400" alt=""/>
</figure>

图中的有根树保存了下表所列五个键值对。

| 键 | 值 |
| --- | -- |
| mile | 20 |
| milk | 15 |
| pea | 10 |
| peach | 30 |
| pie | 25 |

使用下面的结构体 `node` 表示树节点。

```text
struct node {
    struct node *c[26];
    int isEnd;
    int value;
}
```

数组 `c` 保存与字母 `a`～`z` 分别对应的子节点指针；不存在相应子节点时存入 `NULL`。若某节点对应一个键的最后一个字符，则其 `isEnd` 存入 `TRUE`，否则存入 `FALSE`。当 `isEnd` 为 `TRUE` 时，`value` 保存与该键配对的值。

使用该结构体实现下列函数。

- `struct node *new_node()`：新建并初始化节点，返回指向该节点的指针。
- `void insert(struct node *root, char *key, int value)`：向以 `root` 所指节点为根的树中加入键 `key` 与值 `value` 的组合；若 `key` 已存在，则用 `value` 替换旧值。
- `int search(struct node *root, char *key)`：在以 `root` 所指节点为根的树中查找键 `key`；若存在，则返回与其配对的值，否则返回 $-1$。

(a) 以下程序使用结构体 `node` 实现 `new_node`、`insert` 和 `search`。填写 \[(A)\]～\[(F)\]，完成程序。

```text
#define TRUE 1
#define FALSE 0

struct node *new_node()
{
    int i;
    struct node *n = (struct node *) malloc(sizeof(struct node));

    for (i = 0; i < 26; i++){
        n->c[i] = NULL;
    }
    n->isEnd = FALSE;
    return n;
}

void insert (struct node *root, char *key, int value)
{
    int l;
    int len = strlen(key);
    struct node *n = root;

    for (l = 0; l < len; l++)
    {
        int i = key[l] - 'a';
        if (空欄 [ (A) ]) {
            n->c[i] = new_node();
        }
        n = 空欄 [ (B) ];
    }
    n->isEnd = 空欄 [ (C) ];
    空欄 [ (D) ];
}

int search (struct node *root, char *key)
{
    int l;
    int len = strlen(key);
    struct node *n = root;

    for (l = 0; l < len; l++)
    {
        int i = key[l] - 'a';

        if (n->c[i] == NULL)
            return -1;

        n = 空欄 [ (E) ];
    }
    if (空欄 [ (F) ]) {
        return n->value;
    } else {
        return -1;
    }
}
```

(b) 以保存了 $n$ 个键值对的有根树为对象，调用 `search` 查找长度为 $k$ 的字符串 `key`。给出最坏情况下的渐近时间复杂度，并说明理由。

### 信息 2（2）

阅读下面的 C 程序并回答各问。

```text
#define BUFSIZE 24

struct buffer {
    char store[BUFSIZE];
    int head, tail;
};

int put_str(struct buffer *buf, char *str) {
    int i = buf->tail;

    while (i - buf->head < BUFSIZE) {
        buf->store[i++ % BUFSIZE] = *str;
        if (*str == '\0') {
            buf->tail = i;
            return 1;
        } else {
            str++;
        }
    }

    return 0;
}

int get_str(struct buffer *buf, char *dest) {
    int i = buf->head;

    if (i == 空欄 [ (A) ]) return 0;

    do {
        *dest = 空欄 [ (B) ];
    } while (空欄 [ (C) ] != '\0');

    空欄 [ (D) ] = i;
    return 1;
}
```

(a) 该程序使用定长数组实现一个保存变长字符串的缓冲区。程序第 8～22 行定义的函数把给定字符串存入缓冲区。现有一个 `struct buffer` 型结构体 `buf`，其 `head` 和 `tail` 均设为 12，数组 `store` 的所有元素均初始化为 `'\0'`（空字符）。按下列顺序执行函数后，写出 `buf.store` 的内容。

```text
put_str(&buf, "ten");
put_str(&buf, "six");
put_str(&buf, "three");
put_str(&buf, "four");
put_str(&buf, "seven");
put_str(&buf, "two");
put_str(&buf, "eight");
```

(b) 程序第 24～35 行定义了从缓冲区取出一个字符串的函数。若缓冲区为空，函数返回 0；否则，把从 `head` 开始的字符串复制到 `dest` 所指内存区域并返回 1。填写 \[(A)\]～\[(D)\]，完成程序。空格中不得使用函数调用。

(c) 判断该程序实现的数据结构是 FIFO（先进先出）还是 LIFO（后进先出）。

(d) `head` 或 `tail` 的整数溢出可能导致程序误运行。为防止溢出，考虑在第 33 行与第 34 行之间加入以下三行。填写 \[(E)\]；空格中不得使用函数调用。

```text
i = 空欄 [ (E) ];
buf->head -= i;
buf->tail -= i;
```

## **Kai**
### 情報2 (1)
#### (a)
- 空欄 \[ (A) \]: n->c\[i\] == NULL
- 空欄 \[ (B) \]: n->c\[i\]
- 空欄 \[ (C) \]: TRUE
- 空欄 \[ (D) \]: n->value = value
- 空欄 \[ (E) \]: n->c\[i\]
- 空欄 \[ (F) \]: n->isEnd

#### (b)
関数 search の for 文より、最悪の場合の計算量は $O(\text{len}) = O(k)$ である。

### 情報2 (2)
#### (a)
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 |
| - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |
|'e'| '\0'| 'f'| 'o'| 'u'| 'r'| '\0'| 't'| 'w'| 'o'| '\0'| 'e'| 't'| 'e'| 'n'| '\0'| 's'| 'i'| 'x'| '\0'| 't'| 'h'| 'r'| 'e' |

#### (b)
- 空欄 \[ (A) \]: buf->tail
- 空欄 \[ (B) \]: buf->store\[i++ % BUFSIZE\]
- 空欄 \[ (C) \]: *dest++
- 空欄 \[ (D) \]: buf->head

#### ($c$)
FIFO

#### (d)
- 空欄 \[ (E) \]: i / BUFSIZE * BUFSIZE
