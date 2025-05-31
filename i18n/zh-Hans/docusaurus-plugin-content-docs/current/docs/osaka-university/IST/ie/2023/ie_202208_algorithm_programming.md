---
sidebar_label: "2022年8月実施 アルゴリズムとプログラミング"
tags:
  - Osaka-University
  - Hash-Table
---
# 大阪大学 情報科学研究科 情報工学 2022年8月実施 アルゴリズムとプログラミング

## **Author**
祭音Myyura

## **Description**
ハッシュ関数 (hash function) を用いてキー (key) を配列 (array) に挿入 (insert) することを考える。
キーは、非負整数 (non-negative integer) とする。
また、キーの削除 (delete) は考えないものとする。
処理が異なる二つの方式、方式 1 と方式 2 とを、図 1 に示す通り ANSI-C 準拠の C 言語で記述した。
方式 1 と方式 2 のキーの挿入処理は、それぞれ関数 (function) insert1 と insert2、キーの探索 (search) 処理はそれぞれ関数 search1 と search2 である。
ハッシュ関数は、関数 hash である。
プログラムに対する入力 (input) は、図 2 に示すようなファイル input.txt で与えられ、input.txt の 1 行目は変数 (variable) delta に設定する値、2 行目は挿入するキーの個数、3行目以降の各行は挿入するキーである。
input.txt で与えられるキーの個数は記号定数 (symbolic constant) MAX_KEYS で規定される値以下とし、与えられたキーに重複はないものとする。
方式 1 と方式 2 について、以下の各問に答えよ。
解答は全て解答用紙の大枠内に書くこと。

(1) 方式 1 について、以下の各問に答えよ。

- (1-1) input.txt が図 2 の内容であるとき、図 1 の 61 ~ 62 行目の for ループが終了した時点の配列 table1 の内容を答えよ。
- (1-2) input.txt で指定する delta の値とキーによっては、図 1 の 61 ~ 62 行目の for ループが終了しない。記号定数 TABLE1_SIZE 値の任意のキーの挿入に対してこの for ループが終了するような delta の値のうち、0 以上 10 以下のものを全て列挙せよ。

(2) 方式 2 について、以下の各問に答えよ。

- (2-1) input.txt が図 2 の内容であるとき、図 1 の 64 ~ 65 行目の for ループが終了した時点の配列 table2_1 と table2_2 の内容を答えよ。なお、排他的論理和 (exclusive or) の計算結果については表 1 の値を用いて良い。
- (2-2) input.txt が図 3 の内容であり、空欄\[ (A) \] にあるキーが指定されたとき、図 1 の 64 ~ 65 行目の for ループが終了しない。空欄\[ (A) \] に当てはまる最小のキーを答えよ。

(3) search1 と search2 を図 4 の通りに記述した。これらの関数は、例えば、図 1 の関数 main 中でキー 10 を探索する場合、それぞれ、以下のように呼び出すものとする。

```text
search1(table1, TABLE1_SIZE, delta, 10)
search2(table2_1, table2_2, TABLE2_SIZE, delta, 10)
```

以下の各小問に答えよ。

- (3-1) search2 は、指定されたキーが挿入されている場合はキーが挿入されている配列の要素のポインタを返し、キーが挿入されていない場合は NULL を返すものとする。図 4 の空欄\[ (B) \] ~ \[ (H) \] に適切な式 (expression) を埋めよ。
- table1, table2_1 および table2_2 には、それぞれ方式 1 と方式 2 で同じキーが挿入されているものとする。このときの方式 1 に対する方式 2 のキーの探索効率における利点を、二つの方式の探索時の配列への参照回数を比較しながら簡潔に説明せよ。

```text
#include <stdio.h>
#include <stdlib.h>

#define MAX_KEYS 20
#define TABLE1_SIZE 20
#define TABLE2_SIZE 10
#define EMPTY -1

int* search1(int *array, int size, int delta, int key);
int* search2(int *array1, int *array2, int size, int delta, int key);

int hash(int x, int n) { return x % n; }

void insert1(int *array, int size, int delta, int key) {
    int v = key;
    int h = hash(v, size);
    while (array[h] != EMPTY) {
        v += delta; h = hash(v, size);
    }
    array[h] = key;
}

int insert2_internal(int *array, int key, int h) {
    if (array[h] == EMPTY) {
        array[h] = key;
        return EMPTY;
    } else {
        int tmp = array[h]; array[h] = key;
        return tmp;
    }
}

void insert2(int *array1, int *array2, int size, int delta, int key) {
    int x = key;
    while (1) {
        if ((x = insert2_internal(array1, x, hash(x, size))) == EMPTY)
            return;
        if ((x = insert2_internal(array2, x, hash(x ^ delta, size))) == EMPTY)
            return;
    }
}

int main() {
    FILE *fp;
    int i; int m; int delta;
    int table1[TABLE1_SIZE];
    int table2_1[TABLE2_SIZE]; int table2_2[TABLE2_SIZE];
    int keys[MAX_KEYS];

    for (i = 0; i < TABLE1_SIZE; ++i) table1[i] = EMPTY;
    for (i = 0; i < TABLE2_SIZE; ++i) {
        table2_1[i] = EMPTY; table2_2[i] = EMPTY;
    }

    fp = fopen("input.txt", "r");
    fscanf(fp, "%d\n", &delta);
    fscanf(fp, "%d\n", &m);
    for (i = 0; i < m; ++i) fscanf(fp, "%d\n", &keys[i]);
    fclose(fp);

    for (i = 0; i < m; ++i)
        insert1(table1, TABLE1_SIZE, delta, keys[i]);

    for (i = 0; i < m; ++i)
        insert2(table2_1, table2_2, TABLE2_SIZE, delta, keys[i]);
    
    return 0;
}
```
#### <center> 図1. ハッシュ関数を用いてキーを配列に挿入するプログラム

```text
3
5
8
22
25
2
18
```
#### <center> 図2. input.txt の例 1

```text
3
6
8
22
25
2
18
空欄[ (A) ]
```
#### <center> 図3. input.txt の例 2

```text
int* search1(int *array, int size, int delta, int key) {
    int v = key;
    int h = hash(v, size);
    while (array[h] != EMPTY) {
        if (array[h] == key) return &array[h];
        v += delta; h = hash(v, size);
    }
    return NULL;
}

int* search2(int *array1, int *array2, int size, int delta, int key) {
    int h = hash([ 空欄 (B) ], size);
    if ([ 空欄 (C) ])
        return [ 空欄 (D) ];
    h = hash([ 空欄 (E) ], size);
    if ([ 空欄 (F) ])
        return [ 空欄 (G) ];
    return [ 空欄 (H) ]
}
```
#### <center> 図4. 関数 search1 と search2

| y | 0 | 1 | 2 | 3 | 4 | 5| 6| 7| 8| 9| 10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|
| - |- |- |- |- |- |- |- |- |- |- |- |- |- |- |- |- |- |- |- |- |- |- |- | - |- |- |- |- |- |- | -| - |
| y ^ 3 |3|2|1|0|7|6|5|4|11|10|9|8|15|14|13|12|19|18|17|16|23|22|21|20|27|26|25|24|31|30|29|28|

#### <center> 表1. 排他的論理和の計算例

## **Kai**
### (1)
#### (1-1)
| table1\[0\] | table1\[1\] | table1\[2\] | table1\[3\] | table1\[4\] | table1\[5\] | table1\[6\] | table1\[7\] | table1\[8\] | table1\[9\] | table1\[10\] | table1\[11\] | table1\[12\] | table1\[13\] | table1\[14\] | table1\[15\] | table1\[16\] | table1\[17\] | table1\[18\] | table1\[19\] |
| - | - | - |  - |  - |  - |  - |  - |  - |  - |  - |  - |  - |  - |  - |  - |  - |  - |  - |  - |
| -1| -1| 22| -1| -1| 25| -1| -1| 8| -1| -1| 2| -1| -1| -1| -1| -1| -1| 18| -1|

#### (1-2)
(ヒント: delta と TABLE1_SIZE の最小公倍数を考える)

3, 7, 9

### (2)
#### (2-1)

| table2_1\[0\] | table2_1\[1\] | table2_1\[2\] | table2_1\[3\] | table2_1\[4\] | table2_1\[5\] | table2_1\[6\] | table2_1\[7\] | table2_1\[8\] | table2_1\[9\] |
| - | - | - |  - |  - |  - |  - |  - |  - |  - |
| -1 | -1 | 22 | -1 | -1 | 25 | -1 | -1| 8| -1|


| table2_2\[0\] | table2_2\[1\] | table2_2\[2\] | table2_2\[3\] | table2_2\[4\] | table2_2\[5\] | table2_2\[6\] | table2_2\[7\] | table2_2\[8\] | table2_2\[9\] |
| - | - | - |  - |  - |  - |  - |  - |  - |  - |
| -1 | 2 | -1 | -1 | -1 | -1 | -1 | 18| -1| -1 |

#### (2-2)
- 空欄\[ (A) \]: 28

### (3)
#### (3-1)
- 空欄\[ (B) \]: key
- 空欄\[ (C) \]: array1\[h\] == key
- 空欄\[ (D) \]: &array1\[h\]
- 空欄\[ (E) \]: key ^ delta
- 空欄\[ (F) \]: array2\[h\] == key
- 空欄\[ (G) \]: &array2\[h\]
- 空欄\[ (H) \]: NULL

#### (3-2)
一般的に、ハッシュテーブルのサイズを $n$ とおくと、方式 1 (search1) は最悪の場合、while 文が $n$ 回繰り返し、計算量は $O(n)$ である。
方式 2 (search2) は、多くても２つの if 文が実行されるから、計算量は $O(1)$ である。