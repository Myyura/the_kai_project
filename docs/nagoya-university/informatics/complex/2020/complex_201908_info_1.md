---
sidebar_label: "2019年8月実施 情1"
tags:
  - Nagoya-University
  - Computer-Science.Programming.Base-Conversion
  - Computer-Science.Programming.Bitwise-Operation
  - Computer-Science.Programming.Palindrome-Number
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2019年8月実施 情1

## **Author**
祭音Myyura

## **Description**
### \[1\]
次のプログラムの出力結果を示せ。

```c
#include <stdio.h>
int main() {
    int a[]={100,0x200,0300}, *p=a;
    printf("%x %d %o %d\n", a[0], *(p+1), a[1]<<1, (*p+1)|a[2]);
    return 0;
}
```

### \[2\]
乱数を利用して，6面のサイコロ2個を同時に振ったときの出目の合計値 `x` の頻度分布とその平均値を計算するプログラムを以下のように作成する。乱数の生成には，呼び出されるたびに，`0` 以上 `RAND_MAX` 以下のいずれか1つの整数を返す関数 `rand()` を使用する。`RAND_MAX` は `stdlib.h` で定義されているものとする。関数 `rand()` を使用して，6面のサイコロ1個を振った時の出目を返す関数 `dice()` を作成して，`main` 関数の中で使用するものとする。

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define XMAX  (1)

int dice() { return (2); }

double mean(int (3), int n) {
    double m=0.0;
    for(int i=2; i<=XMAX; i++) m += (4);
    return m;
}

int main() {
    int n;              /* nはサイコロ2個を同時に振る回数 */
    int x;              /* xはサイコロ2個の出目の合計値 */
    int h[XMAX+1];      /* hはxを記録する配列（頻度分布） */
    srand(time(NULL));  /* 乱数の種を設定する */
    scanf("%d", (5));   /* nを標準入力する */

    for(int i=0; i<=XMAX; i++) (6);  /* hを初期化する */

    for(int i=0; i<n; i++) {
        x = (7);        /* サイコロ2個を振ってxを求める */
        (8);            /* xをhに記録する */
    }

    for(int i=2; i<=XMAX; i++) {     /* hを表示する */
        printf("x=%dの頻度は%.1fe+4\n", i, h[i]/10000.0);
    }
    printf("平均値は%.1f\n", mean(h, n));  /* hの平均値を表示する */
    return 0;
}
```

1) 空欄を適切に埋めよ。
2) `n = 10^6` として，このプログラムを実行したときに期待される出力結果を示せ。

### \[3\]
アルファベットの文字列を対象として，文字列の長さを計算したり，文字列の左右を反転したり，回文かどうかを判定したりするプログラムを以下のように作成する。空欄を適切に埋めよ。また，プログラムの実行結果を示せ。

```c
#include <stdio.h>

int str_len(char s[]) {        /* 文字列の長さを計算する */
    int len;
    for(len=0; (1)!='\0'; (2));
    return len;
}

void reverse_str(char s[]) {   /* 文字列の左右を反転する */
    int i, len=str_len(s);
    (3) temp;
    for(i=0; i<(4); i++){
        temp = s[i];
        s[i] = s[(5)];
        s[(5)] = temp;
    }
}

int palindrome(char s[]){      /* 文字列が回文かどうかを判定する */
    int i, j;
    for(i=0, j=(6); (7); i++, j--){
        if(s[i] (8) s[j]) return 0;
    }
    return 1;
}

int main(){
    char ss[2][20]={"ahitiinnok", "imayuuyami"};
    reverse_str(ss[0]);
    printf("%s\n", ss[0]);
    printf("%s\n", ss[1]);
    printf("%d\n", palindrome(ss[0]));
    printf("%d\n", palindrome(ss[1]));
    return 0;
}
```

## **Kai**
### \[1\]

```text
64 512 2000 229
```

### \[2\]
#### 1)

```text
(1) 12
(2) rand()%6+1
(3) h[]
(4) i*h[i]/(double)n
(5) &n
(6) h[i]=0
(7) dice()+dice()
(8) h[x]++
```

#### 2)

```text
x=2の頻度は2.8e+4
x=3の頻度は5.6e+4
x=4の頻度は8.3e+4
x=5の頻度は11.1e+4
x=6の頻度は13.9e+4
x=7の頻度は16.7e+4
x=8の頻度は13.9e+4
x=9の頻度は11.1e+4
x=10の頻度は8.3e+4
x=11の頻度は5.6e+4
x=12の頻度は2.8e+4
平均値は7.0
```

### \[3\]

```text
(1) s[len]
(2) len++
(3) char
(4) len/2
(5) len-i-1
(6) str_len(s)-1
(7) i<j
(8) !=
```
