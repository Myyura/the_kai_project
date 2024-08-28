---
comments: false
title: 広島大学 先進理工系科学研究科 情報科学プログラム 2020年8月実施 専門科目II 問題3
tags:
  - Hiroshima-University
  - Programming
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2020年8月実施 専門科目II 問題3

## **Author**
samparker, 祭音Myyura

## **Description**
図 1 は以下の 2 種類の処理を実行する C 言語のプログラムのソースコード（counting.c）である。

- 関数 c_count1, c_count2, c_count3 は、文字列 source の中の文字 target の個数を返す。
- 関数 n_count1, n_count2, n_count3 は、整数 source の中の整数 target の 1 桁目の数字の個数を返す。

図 2 はソースコード counting.c をコンパイルし、生成された実行ファイル a.out を実行したときの出力例である。
プログラムが上記の記述通りに動作するように、以下の問いに答えよ。

(1) 関数 c_count1 の空欄 <1-1> ~ <1-3> を答えよ。

(2) 関数 c_count2, c_count3 の空欄 <2-1> を答えよ。なお、c_count2 と c_count3 の空欄 <2-1> は同じものである。

(3) 関数 n_count1 の空欄 <3-1> ~ <3-2> を答えよ。

(4) 関数 n_count2 の空欄 <4-1> ~ <4-3> を答えよ。

(5) 関数 n_count3 の空欄 <5-1> ~ <5-5> を答えよ。

--------------------------------------------

Figure 1 shows the C source code of the program (counting.c) that executes the following two types of procedures.

- The functions c_count1, c_count2 and c_count3 return the number of the character target in the string source.
- The functions n_count1, n_count2 and n_count3 return the number of the first digit of integer target in the integer source.

Figure 2 shows an example of the output of the execution file a.out compiled from the source code counting.c.
Answer the following questions so that the functions work as described above.

(1) Fill in the blanks <1-1> ~ <1-3> in the function c_count1.

(2) Fill in the blanks <2-1> in the functions c_count2 and c_count3. The blanks <2-1> in the functions c_count2 and c_count3 are the same.

(3) Fill in the blanks <3-1> ~ <3-2> in the function n_count1.

(4) Fill in the blanks <4-1> ~ <4-3> in the functions n_count2.

(5) Fill in the blanks <5-1> ~ <5-5> in the function n_count3.

```text
#include <stdio.h>

int c_count1(char source[], char target) {
    int count = 0;
    for (int i = 0; source[i] <1-1> '\0'; i++)
        if ( <1-2> ) count++;
    return <1-3>;
}

int c_count2(char *source, char target) {
    int count = 0;
    if (*source == '\0') return 0;
    if (*source == target) count = 1;
    return count + c_count2( <2-1> );
}

int c_count3(char *source, char target) {
    if (*source == '\0') return 0;
    return ((*source == target) ? 1 : 0) + c_count3( <2-1> );
}

int n_count1(int source, int target) {
    int count;
    for (count = 0; <3-1> ; source /= 10)
        if (source % 10 == target % 10) count++;
    return <3-2>;
}

int n_count2(int source, int target) {
    int count = 0;
    if ( <4-1> ) return 0;
    if ( <4-2> ) count = 1;
    return count + n_count2( <4-3> );
}

int n_count3(int source, int target) {
    if ( <5-1> ) return 0;
    return ( <5-2> ? <5-3> : <5-4> ) + n_count3( <5-5> );
}

int main() {
    char c_source[100], c_target;
    int n_source, n_target;

    scanf("%s %c", c_source, &c_target);
    printf("c_count1: %d\n", c_count1(c_source, c_target));
    printf("c_count2: %d\n", c_count2(c_source, c_target));
    printf("c_count3: %d\n", c_count3(c_source, c_target));

    scanf("%s %c", n_source, &n_target);
    printf("n_count1: %d\n", n_count1(n_source, n_target));
    printf("n_count2: %d\n", n_count2(n_source, n_target));
    printf("n_count3: %d\n", n_count3(n_source, n_target));
}
```

## **Kai**
### (1)
- <1-1>: !=
- <1-2>: source\[i\] == target
- <1-3>: count

### (2)
- <2-1>: source + 1, target

### (3)
- <3-1>: source > 0
- <3-2>: count

### (4)
- <4-1>: source == 0
- <4-2>: source % 10 == target % 10
- <4-3>: source / 10, target

### (5)
- <5-1>: source == 0
- <5-2>: source % 10 == target % 10
- <5-3>: 1
- <5-4>: 0
- <5-5>: source / 10, target