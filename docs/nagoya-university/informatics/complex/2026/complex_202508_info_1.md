---
sidebar_label: "2025年8月実施 情1"
tags:
  - Nagoya-University
  - Computer-Science.Programming.Fundamentals
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
