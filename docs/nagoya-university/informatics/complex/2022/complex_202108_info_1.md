---
sidebar_label: "2021年8月実施 情1"
tags:
  - Nagoya-University
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

### 题目描述

**[1]** 写出题面 C 程序的标准输出。程序包含十进制 `5321`、十六进制 `0xf0f0`、八进制 `037`，并以 `%x %d %d %x` 输出 `x1`、`x1-x2`、`x2+x3`、`x1>>2`。

**[2]** 补全 C 程序 (1)—(5)：遍历只含半角字母、数字和半角空格的字符串 `"This is a pen"`，统计并输出空格数；给定输出为 `3`。

**[3]** 补全递归 C 函数 `f` 的 (1)—(3)，计算两个长度为 $n$ 的 `double` 数组的内积。题面给定 $n=5$ 及数组

```text
a = {5,4,3,2,1}
b = {1,10,100,1000,10000}
```

程序须输出内积。

#### 考点

- **进制转换、补码运算与位移**：按指定格式解释不同字面量及整数表达式。
- **C 字符串与指针遍历**：初始化计数器，逐字符比较空格并在 `'\0'` 处停止。
- **递归数组内积**：设计含数组指针和长度的函数参数、递归项及基例。

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
