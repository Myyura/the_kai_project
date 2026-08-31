---
sidebar_label: "2016年8月実施 情報基礎 問題1"
tags:
  - Ochanomizu-University
  - Computer-Science.Data-Structures.Linked-List
  - Computer-Science.Data-Structures.Linked-List-Reversal
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2016年8月実施 情報基礎 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
以下のように定義される C 言語で書かれたリストを考える。

```c
typedef struct list_t {
    int value;
    struct list_t *next;
} list_type;
```

以下は、このリストに要素を追加する関数、およびリストの要素を表示する関数である。

```c
list_type *insert (int value, list_type *next) {
    list_type *list;
    list = (list_type *) malloc (sizeof (list_type));
    list->value = value;
    list->next = next;
    return (list);
}

void print (list_type *list) {
    list_type *l;
    for (l = list; l != NULL; l = l->next) {
        printf ("%d ", l->value);
    }
    printf ("\n");
}
```

以下の各問に答えよ。

### (1)
以下のようなメイン関数を考える。

```c
int main () {
    list_type *list1, *list2;
    list1 = NULL;
    list1 = insert (1, list1);
    list1 = insert (2, list1);
    list1 = insert (3, list1);
    list1 = insert (4, list1);
    list1 = insert (5, list1);
    print (list1);
}
```

この関数を実行したとき、`print` 関数が表示する文字列を示せ。

### (2)
`list_type` で表されるリストと整数を受け取ったら、その整数がリスト中に含まれていたら 1 を、含まれていなかったら 0 を返す関数 `search` を書け。例えば、上記のメイン関数で定義される `list1` を使うと、`search(list1, 4)` は 1 を返し、`search(list1, 6)` は 0 を返す。

### (3)
以下のような関数 `f` を考える。

```c
list_type *f (list_type *list) {
    list_type *l, *prev, *tmp;

    prev = list;
    l = list->next;
    prev->next = NULL;
    while (l != NULL) {
        tmp = l;
        l = l->next;
        tmp->next = prev;
        prev = tmp;
    }
    return (prev);
}
```

この関数は、呼び出す引数によってはエラーを起こす。エラーを起こす条件とその理由を示せ。

### (4)
メイン関数の最後に以下の 3 行を付け加える。

```c
list2 = f (list1);
print (list2);
print (list1);
```

ここで `f` は (3) で定義した関数 `f` である。このメイン関数を実行したときに、付け加えた最後の 2 行が表示する文字列を示せ。

### 题目描述

给定以 C 语言单链表结构 `list_type` 表示的链表，以及在链表头部插入元素的函数 `insert` 和顺序输出链表的函数 `print`。

1. 依次将整数 1 至 5 插入链表头部，写出 `print(list1)` 的输出。
2. 编写函数 `search`：若给定整数存在于链表中则返回 1，否则返回 0。
3. 给定原地修改各节点指针的函数 `f`，说明在哪种实参条件下会出错，并解释原因。
4. 执行 `list2 = f(list1)` 后，分别写出 `print(list2)` 和 `print(list1)` 的输出。

## **Kai**

### (1)

`insert` は新しい要素をリストの先頭に追加する。したがってリストは

```text
5 -> 4 -> 3 -> 2 -> 1 -> NULL
```

となり、表示は

```text
5 4 3 2 1
```

である（末尾の空白の後に改行される）。

### (2)

```c
int search (list_type *list, int value) {
    list_type *l;
    for (l = list; l != NULL; l = l->next) {
        if (l->value == value) {
            return 1;
        }
    }
    return 0;
}
```

各要素を先頭から調べ、一致した時点で 1 を返す。末尾まで一致しなければ 0 を返す。

### (3)

引数が空リスト、すなわち

```c
list == NULL
```

のときにエラーを起こす。`l = list->next;` において `NULL` ポインタを参照するためである。要素が 1 個以上あれば、この関数はリストを逆順にする。

### (4)

`f` は各リンクを反転し、逆順リストの先頭を返す。したがって `list2` は

```text
1 -> 2 -> 3 -> 4 -> 5 -> NULL
```

を指す。一方、`list1` の値自体は更新されず、旧先頭要素 5 を指したままであり、その `next` は `f` によって `NULL` に変更される。よって表示は順に

```text
1 2 3 4 5
5
```

となる（各数値の直後には空白があり、各行の末尾で改行される）。
