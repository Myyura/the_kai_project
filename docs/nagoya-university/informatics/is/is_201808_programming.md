---
sidebar_label: "2018年8月実施 プログラミング"
sidebar_position: 7
tags:
  - Nagoya-University
---
# 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2018年8月実施 プログラミング

## **Author**
祭音Myyura

## **Description**
プログラム P は与えられた文字列を操作するC言語プログラムである.
プログラム P で扱う文字は, 1 バイト，または，3 バイトで構成される.
1 バイトで構成される文字は最上位ビットが 0 であり, 残りのビットにより文字を指定する.
3 バイトで構成される文字は, その 1 バイト目の最上位ビットが 1 であり, 1 バイト目の残りのビットと 2 バイト目, ならびに，3 バイト目により文字を指定する.
文字列は 8 ビット長の char 型の配列に格納され, '\0' を終端とする.
16進数は, 0x41 のように先頭に 0x をつけて表す. すなわち, 0x41 は 10 進表記の 65 の 16進表記である.

プログラム P において, 27 行目の関数 concat は, ポインタ s1, ポインタ s2 がこの順で引数として与えられたとき, s1 と s2 が参照する文字列をこの順に連結し, 得られた文字列の先頭を参照するポインタを返す.
59 行目の関数 replace は, ポインタ s1, ポインタ s2, 正の整数 k がこの順で引数として与えられたとき，s1 が参照する文字列の k 文字目を s2 が参照する文字列で置き換えて得られる文字列の先頭を参照するポインタを返す.
なお, 関数 replace の引数 s2 が参照する文字列の文字数は 1 とし, 1 文字は 1 バイトまたは 3 バイトで構成されることに注意せよ.

このとき以下の問いに答えよ. なお, ポインタが参照する文字列の内容を解答する場合, 下の記述例のようにアドレスと値を対応づけて文字列を表すこと(終端も含めること).
例えば，80 行目の r = str1; の実行直後のポインタ r が参照する文字列の内容は, 下の記述例のように解答する.

|アドレス| r | r+1 | r+2 | r+3 |
| --- | --- | --- | --- | --- |
| 値 | 0x41 | 0x42 | 0x43 |'\0'|

(1) 空欄 A, B, C, D, E にあてはまる式を書いて，関数 concat を完成させよ.

(2) 76 行目の r = index(str1, 1); を実行した直後の r が参照する文字列の内容を記述例にならって書け.

(3) 77 行目の r = index(str2, 2); を実行した直後の r が参照する文字列の内容を記述例にならって書け.

(4) 78 行目の r = index(str3, 3); を実行した直後の r が参照する文字列の内容を記述例にならって書け.

(5) 79 行目の r = replace(str3, str4, 3); 実行時に呼び出される 62 行目の tmp2 = concat_p(string1, string2, tmp1); を実行した直後の tmp2 の内容を記述例にならって書け.

(6) 48 行目では下線部のように固定長の領域を result に割り当てている. しかしながら, 関数 concat_p に与えられる引数によっては領域が不足する. 与えられる引数に応じて必要な領域が割り当てられるように下線部を適切な式に変更せよ.

(7) 空欄 F, G, H にあてはまる式を書いて関数 replace を完成させよ.


#### プログラム P
```text
#include <stdlib.h>

char* index(char* string, int p) {
    char *tmp;
    int i;
    i = 1;
    tmp = string;

    while ((*tmp != '\0') && (i < p) ) {
        i++;
        if ((*tmp & 0x80) == 0)
            tmp++;
        else
            tmp += 3;
    }
    return tmp;
}

int length_b(char* string) {
    int len;
    len = 0;
    while (string[len] != '\0')
        len++;
    return len;
}

char* concat(char* string1, char* string2) {
    char *result, *tmp;
    result = (char*)malloc(sizeof(char) * (length_b(string1) + length_b(string2) + 1));
    tmp = result;
    while (*string1 != '\0') {
        [ 空欄 (A) ] = [ 空欄 (B) ];
        tmp++;
        string1++;
    }
    while (*string2 != '\0') {
        [ 空欄 (C) ] = [ 空欄 (D) ];
        tmp++;
        string2++;
    }
    *tmp = [ 空欄 (E) ];
    return result;
}

char* concat_p(char* string1, char* string2, char* l) {
    char *result, *tmp1, *tmp2;
    tmp1 = string1;
    result = (char*)malloc(sizeof(char) * 100);  // 下線部: 100
    tmp2 = result;
    while ((tmp1 != l) && (*tmp1 != '\0')) {
        *tmp2 = *tmp1;
        tmp1++;
        tmp2++;
    }
    *tmp2 = '\0';
    return concat(result, string2);
}

char* replace(char* string1, char* string2, int p) {
    char *tmp1, *tmp2;
    tmp1 = index(string1, p);
    tmp2 = concat_p(string1, string2, tmp1);
    if ([ 空欄 (F) ] == 0)
        [ 空欄 (G) ];
    else
        [ 空欄 (H) ];
    return concat(tmp2, tmp1);
}

void main() {
    char str1[4] = {0x41, 0x42, 0x43, '\0'};
    char str2[10] = {0xE3, 0x81, 0x82, 0xE3, 0x81, 0x84, 0xE3, 0x81, 0x86, '\0'};
    char str3[9] = {0xE3, 0x81, 0x82, 0x41, 0xE3, 0x81, 0x84, 0x42, '\0'};
    char str4[4] = {0xE3, 0x81, 0x86, '\0'};
    char *r;
    r = index(str1, 1);
    r = index(str2, 2);
    r = index(str3, 3);
    r = replace(str3, str4, 3);
    r = str1;
}
```

## **Kai**
### (1)
- \[ 空欄 (A) \]: *tmp
- \[ 空欄 (B) \]: *string1
- \[ 空欄 (\(C\)) \]: *tmp
- \[ 空欄 (D) \]: *string2
- \[ 空欄 (E) \]: '\0'

### (2)
r: 0x41, 0x42, 0x43, '\0'

|アドレス| r | r+1 | r+2 | r+3 |
| --- | --- | --- | --- | --- |
| 値 | 0x41 | 0x42 | 0x43 |'\0'|

### (3)
r: 0xE3, 0x81, 0x84, 0xE3, 0x81, 0x86, '\0'

|アドレス| r | r+1 | r+2 | r+3 | r+4 | r+5 | r+6 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 値 | 0xE3 | 0x81 | 0x84 | 0xE3 | 0x81 | 0x86 | '\0' |

### (4)
r: 0xE3, 0x81, 0x84, 0x42, '\0'

|アドレス| r | r+1 | r+2 | r+3 | r+4 |
| --- | --- | --- | --- | --- | --- |
| 値 | 0xE3 | 0x81 | 0x84 | 0x42 | '\0' |

### (5)
tmp2: 0xE3, 0x81, 0x82, 0x41, 0xE3, 0x81, 0x86, '\0'

|アドレス| tmp2 | tmp2 + 1 | tmp2 + 2 | tmp2 + 3 | tmp2 + 4 | tmp2  + 5| tmp2 + 6 | tmp2 + 7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 値 | 0xE3 | 0x81 | 0x82 | 0x41 | 0xE3 | 0x81 | 0x86 | '\0' |

### (6)
length_b(string1) - length_b(l) + 1

### (7)
- \[ 空欄 (F) \]: (*tmp1 & 0x80)
- \[ 空欄 (G) \]: tmp1++
- \[ 空欄 (H) \]: tmp1 += 3