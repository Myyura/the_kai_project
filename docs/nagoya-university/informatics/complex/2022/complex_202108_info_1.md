---
sidebar_label: "2021年8月実施 情1"
tags:
  - Nagoya-University
  - Computer-Science.Programming.Fundamentals
  - Computer-Science.Programming.Base-Conversion
  - Computer-Science.Programming.Bitwise-Operation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2021年8月実施 情1

## **Author**
祭音Myyura

## **Description**
### \[1\]

次の C 言語プログラムの標準出力結果を示せ。

```c
#include <stdio.h>

int main(void){
    int x1 = 5321, x2 = 0xf0f0, x3 = 037;
    printf(" %x %d %d %x \n", x1, x1-x2, x2+x3, x1>>2 );
    return 0;
}
```

### \[2\]
半角英数文字と半角空白からなる文字列に含まれる半角空白の個数を数えて標準出力に表示するプログラムを C 言語で作成した。下線部を適切に埋めよ。

```c
#include <stdio.h>

int main(void){
    char s[] = "This is a pen";
    int ______(1)______ ;
    char *p;

    p = s;

    while( *p ______(2)______ ){
        if( *p ______(3)______ ){
            n++;
        }

        ______(4)______ ;
    }

    printf( ______(5)______ , n );

    return 0;
}
```

出力結果を以下に示す。

```text
3
```

### \[3\]
ベクトルの内積を計算して標準出力に表示するプログラムを再帰的プログラミングによって C 言語で作成した。下線部を適切に埋めよ。

```c
#include <stdio.h>

double f( ______(1)______ ){
    if( n > 1 ){
        return ( ______(2)______ + f(a,b,n-1) );
    }else{
        return ( ______(3)______ );
    }
}

int main(void){
    int n = 5;
    double a[] = {5.0,4.0,3.0,2.0,1.0}, b[] = {1.0,10.0,100.0,1000.0,10000.0};

    printf( "%lf\n", f(a,b,n) );

    return 0;
}
```

## **Kai**
### \[1\]

```text
 14c9 -56359 61711 532 
```

### \[2\]

```text
(1) n = 0
(2) != '\0'
(3) == ' '
(4) p++
(5) "%d\n"
```

```c
#include <stdio.h>

int main(void){
    char s[] = "This is a pen";
    int n = 0;
    char *p;

    p = s;

    while (*p != '\0'){
        if (*p == ' '){
            n++;
        }
        p++;
    }

    printf("%d\n", n);

    return 0;
}
```

### \[3\]

```text
(1) double a[], double b[], int n
(2) a[n-1] * b[n-1]
(3) a[0] * b[0]
```

```c
#include <stdio.h>

double f(double a[], double b[], int n){
    if (n > 1){
        return (a[n-1] * b[n-1] + f(a, b, n-1));
    }else{
        return (a[0] * b[0]);
    }
}

int main(void){
    int n = 5;
    double a[] = {5.0,4.0,3.0,2.0,1.0};
    double b[] = {1.0,10.0,100.0,1000.0,10000.0};

    printf("%lf\n", f(a,b,n));

    return 0;
}
```
