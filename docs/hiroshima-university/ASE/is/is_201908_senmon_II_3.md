---
sidebar_label: "2019年8月実施 専門科目II 問題3"
sidebar_position: 8
tags:
  - Hiroshima-University
  - Programming
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2019年8月実施 専門科目II 問題3


## **Author**
samparker, 祭音Myyura

## **Description**
次ページに示す図1は、ある文字列の中である文字が最初に現れる場所を検索するプログラムのCソースコードを示している。
このプログラムは以下の仕様を満たそうとして作成したものであるが、完全ではない。

##### プログラムの仕様
- 文字列と検索したい文字はコマンドライン引数で入力される。
- 検索したい文字が2文字以上で入力された場合は、最初の1文字だけ利用する。
- このプログラムで検索する範囲は最大で文字列の最初の文字から最後の文字までのみである。

(1) 正しく `search1`、`search2` を呼び出せるように、Cソースコードの空欄(a)、(b) を埋めよ。

(2) このプログラムを `./a hiroshima io` で実行して出力される結果を答えよ (a は実行ファイル名)。

(3) このプログラムを例えば `./a hiroshima z` で実行すると上述の仕様通りの処理が行われない (a は実行ファイル名)。
(3-1) 仕様と異なる処理、(3-2) それを修正するためにソースコードの6行目 (`search1`) および12行目 (`search2`) を変更したもの、(3-3) 変更後のプログラムの実行結果を答えよ。

(4) `search1`、`search2` を検索したい文字が最後に現れる位置を出力する関数 `search1_last`、`search2_last` に変更したい。
次ページの図2、図3の空欄 (c)、(d)、(e)、(f) を埋めてソースコードを完成させよ。

-----------------------------------

Figure 1 in the next page shows the C source code of the program that searches the position of a search character
firstly appearing in a string in two ways. The program in Fig.1 is based on the following specifications but the
program is not complete.

##### The specifications of the program
- The string and the search character are given by command-line arguments.
- If the search character is more than two characters, this program searches only the first character.
- The maximum scope of search in this program is from the first character to the last character in the string.

(1) Filling the blanks (a), (b) to correctly call search1 and search2.

(2) Answer the output of this program executed with "./a hiroshima io" (a is the name of excute file).

(3) This program doesn't work according to the specifications, for example, when it is executed with "./a
hiroshima z" (a is the name of excute file).
Answer (3-1) the difference from the specificationa, (3-2) the modified source code of 6th line (search1) and 12th line (search2), and (3-3) the output of the modified program.

(4) Change search1 and search2 to search1 last and search2 last that return the last position of the search character. Fill the blanks (c), (d), (e), (f) in Figure 2 and Figure 3 in the next page.

##### <center> Figure 1. C source code
```text
#include <stdio.h>
#include <string.h>

int search1(char s[], char l) {
    int i;
    for(i = 0; ; i++)
        if(s[i] == l) break;
    return i+1;
}

int search2(char s[], char l, int i) {
    if(s[i] != l) return search2(s, l, i+1);
    else return i+1;
}

int main(int argc, char *argv[]) {
    int p;

    p = search1((a)______, (b)______);
    if(p <= strlen(argv[1]))
        printf("search1: The first position of '%c' in '%s' is %d\n", argv[2][0], argv[1], p);
    else
        printf("search1: '%c' is not included in '%s'\n", argv[2][0], argv[1]);
    
    p = search2((a)______, (b)______, 0);
    if (p <= strlen(argv[1]))
        printf("search2: The first position of '%c' in '%s' is %d\n", argv[2][0], argv[1], p);
    else
        printf("search2: '%c' is not included in '%s'\n", argv[2][0], argv[1]);
}
```

##### <center> Figure 2. search1_last
```text
int search1_last(char s[], char l) {
    int i, p;
    for(i = 0; (c)_________; i++)
        if (s[i] == l) (d)_________;
    return p;
}
```

##### <center> Figure 3. search2_last
```text
int search2_last(char s[], char l, int i, int p) {
    if(s[i] == l)
        (e)________;
    if((f)________)
        return search2_last(s, l, i+1, p);
    else return p;
}
```

## **Kai**
### (1)
- (a): argv\[1\]
- (b): argv\[2\]\[0\]

### (2)
```text
search1: The first position of 'i' in 'hiroshima' is 2
search2: The first position of 'i' in 'hiroshima' is 2
```

### (3)
- (3-1): If the given character is not in the string, then loop (recursion) never ends.
- (3-2), search1: for (i = 0; i < strlen(s); i++)
- (3-2), search2: if (i < strlen(s) && s\[i\] != l) return search2(s, l, i+1);
- (3-3): search1: 'z' is not included in 'hiroshima'
- (3-3): search2: 'z' is not included in 'hiroshima'

Note: 我们必须先判断是否越界, 因此 (3-2), search2 中 if 条件语句两个条件的顺序不能调换。

Note: We must first check for out-of-bounds, so the order of the two conditions in the if statement cannot be swapped.

### (4)
- ($c$): i < strlen(s)
- (d): p = i + 1
- (e): p = i + 1
- (f): i < strlen(s)