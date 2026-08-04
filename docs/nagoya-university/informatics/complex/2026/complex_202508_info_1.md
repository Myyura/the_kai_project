---
sidebar_label: "2025年8月実施 情1"
tags:
  - Nagoya-University
  - Computer-Science.Programming.Base-Conversion
  - Computer-Science.Programming.Bitwise-Operation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2025年8月実施 情1

## **Author**
祭音Myyura

## **Description**
### \[1\]
次のプログラム実行時の標準出力への出力結果を示せ。

```c
#include <stdio.h>
int main(void)
{
    int x1=0x0f0f, x2=8765, x3=07456;
    printf("%x %d %x %d %x %d\n", x2, x1+x2, x1-x2, x3>>3, x1|x3, x2&x3);
    return 0;
}
```

### \[2\]
文字列に特定の文字が含まれる個数を求めて表示するプログラムを作成した。下線部を適切に埋めよ。

```c
#include <stdio.h>

int count(    (1)    )
{
    int i=0, c=0;
    while (    (2)    ) {
        if(s[i]==w) c++;
        (3)    ;
    }
    (4)    ;
}

int main(void)
{
    char s[]="Graduate School of Informatics", w='a';
    printf("%d\n", count(s, w));
    return 0;
}
```

標準出力結果例：

```text
3
```

### \[3\]
入力された自然数 `n`（`n >= 2`）を素数判定するプログラムを作成した。自然数 `n` が素数の場合は `y`、素数でない場合は `n` を表示する。下線部を適切に埋めよ。

```c
#include <stdio.h>

char check(int n)
{
    int i;
    char     (1)    ;
    for(     (2)     ; i<n/2+1; i++ )
        if(    (3)    ) id='n';
    (4)    ;
}

int main(void)
{
    int n;
    scanf("%d", &n);
    printf("%c\n", check(n));
    return 0;
}
```

標準入出力結果例：

```text
9
n
```

### \[4\]
入力された2つの自然数 `n1` と `n2` について、`n1` 以上で `n2` 以下の素数の最大値と最小値を求めるプログラムを作成した。ただし、`1 <= n1 < n2` であって、`n1` 以上で `n2` 以下の間に素数が1つは存在するものとする。このプログラムでは問 \[3\] で作成した関数 `check` を用いる。下線部を適切に埋めよ。

```c
#include <stdio.h>

int maxmin(int n1, int n2,     (1)    ){
    if(    (2)    ){
        if(    (3)    ){
            if( *min > n1 ) *min=n1;
            if( *max < n1 ) *max=n1;
        }
        return maxmin(    (4)    );
    }else{
        return 0;
    }
}

int main(void)
{
    int n1, n2, max, min;
    scanf("%d", &n1);
    scanf("%d", &n2);
    max=n1;
    min=n2;
    maxmin(n1, n2, &max, &min);
    printf("%d\n %d\n", max, min);
    return 0;
}
```

標準入出力結果例：

```text
4
10
7
 5
```

### 题目描述

回答下列 C 语言程序设计问题。

1. 已知 `int x1 = 0x0f0f, x2 = 8765, x3 = 07456;`，求语句
   `printf("%x %d %x %d %x %d\n", x2, x1+x2, x1-x2, x3>>3, x1|x3, x2&x3);`
   的标准输出。需要处理十六进制、十进制和八进制常量，以及加减、右移、按位或和按位与运算。
2. 补全原题中的 `count` 函数，统计字符串 `"Graduate School of Informatics"` 中字符 `'a'` 出现的次数；程序应输出 `3`。完整代码见上文。
3. 补全判定素数的程序。输入整数 $n\ge 2$，若 $n$ 为素数则输出 `y`，否则输出 `n`；示例输入 `9` 时输出 `n`。完整代码见上文。
4. 补全递归函数，在给定的两个整数 $n_1,n_2$ 之间（含端点）寻找最大素数和最小素数。保证区间内至少存在一个素数；示例输入 `4`、`10` 时，应输出最大值 `7` 和最小值 `5`。完整代码与输入输出格式见上文。

## **Kai**
### 1


```text
223d 12620 ffffecd2 485 f2f 556
```

### 2


```text
(1) char s[], char w
(2) s[i] != '\0'
(3) i++
(4) return c
```

```c
#include <stdio.h>

int count(char s[], char w)
{
    int i=0, c=0;
    while (s[i] != '\0') {
        if(s[i]==w) c++;
        i++;
    }
    return c;
}

int main(void)
{
    char s[]="Graduate School of Informatics", w='a';
    printf("%d\n", count(s, w));
    return 0;
}
```

### 3

```text
(1) id='y'
(2) i=2
(3) n%i==0
(4) return id
```

```c
#include <stdio.h>

char check(int n)
{
    int i;
    char id='y';
    for(i=2; i<n/2+1; i++ )
        if(n%i==0) id='n';
    return id;
}

int main(void)
{
    int n;
    scanf("%d", &n);
    printf("%c\n", check(n));
    return 0;
}
```

### 4

```text
(1) int *max, int *min
(2) n1 <= n2
(3) check(n1) == 'y'
(4) n1+1, n2, max, min
```

```c
#include <stdio.h>

char check(int n)
{
    int i;
    char id='y';
    for(i=2; i<n/2+1; i++ )
        if(n%i==0) id='n';
    return id;
}

int maxmin(int n1, int n2, int *max, int *min){
    if(n1 <= n2){
        if(check(n1) == 'y'){
            if( *min > n1 ) *min=n1;
            if( *max < n1 ) *max=n1;
        }
        return maxmin(n1+1, n2, max, min);
    }else{
        return 0;
    }
}

int main(void)
{
    int n1, n2, max, min;
    scanf("%d", &n1);
    scanf("%d", &n2);
    max=n1;
    min=n2;
    maxmin(n1, n2, &max, &min);
    printf("%d\n %d\n", max, min);
    return 0;
}
```
