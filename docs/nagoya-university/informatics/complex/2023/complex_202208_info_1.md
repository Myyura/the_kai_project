---
sidebar_label: "2022年8月実施 情1"
tags:
  - Nagoya-University
  - Computer-Science.Programming.Base-Conversion
  - Computer-Science.Programming.Bitwise-Operation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2022年8月実施 情1

## **Author**
祭音Myyura

## **Description**
以下の問に答えよ。

### \[1\]
次の C 言語プログラムの標準出力への表示結果を示せ。

```c
#include <stdio.h>
int main(void)
{
    int x1 = 4321, x2 = 0xf0f0;
    printf(" %x %d %d %x \n", x1, x1+x2, x1&x2, x1>>4);
    return 0;
}
```

### \[2\]
整数値を要素とする配列変数の要素を逆順に並べるプログラムを C 言語で作成した。関数 f には整数型配列変数 a と整数型変数 n を引数として与える。下線部を適切に埋めよ。

```c
#include <stdio.h>
int f(int a[], int n)
{
        int     (1)     ;
        while( i < n/2 ){
            b = a[i];
            a[i] =     (2)     ;
            (2)     = b;
            (3)     ;
        }
        return 0;
}
int main(void)
{
        int n = 5,i;
        int a[] = {1,2,3,4,5};
        f(a,n);
        for( i=0; i<n; i++ ) printf("%d",a[i]);
        return 0;
}
```

標準出力結果例：

```text
54321
```

### \[3\]
文字列変数の長さを計算するプログラムを，再帰的プログラミングを用いて C 言語で作成した。関数 f には文字型配列変数 a と整数型変数 n を引数として与える。下線部を適切に埋めよ。

```c
#include <stdio.h>
int f(char *a, int n)
{
        if( *a ==     (1)     ){
                return     (2)     ;
        }else{
                return f(     (3)     ) ;
        }
}
int main(void)
{
        int n = 0;
        char a[] = "This is a pen.";

        printf("%d", f(a,n));
        return 0;
}
```

標準出力結果例：

```text
14
```

---

### 题目描述

**[1]** 写出 C 程序的输出：`x1=4321`、`x2=0xf0f0`，按 `%x %d %d %x` 输出 `x1`、`x1+x2`、`x1&x2`、`x1>>4`。

**[2]** 补全 C 函数 `f(a,n)` 的 (1)—(3)，原地逆序整数数组 `{1,2,3,4,5}`；程序应输出 `54321`。

**[3]** 补全递归 C 函数 `f(char *a,int n)` 的 (1)—(3)，计算字符串 `"This is a pen."` 的长度；程序应输出 `14`。

#### 考点

- **整数进制与位运算**：计算十六进制格式、整数加法、按位与和右移。
- **数组原地反转**：用双端对称下标交换前半数组元素。
- **递归字符串长度**：以空字符为基例，每次递进指针并累加长度。

## **Kai**
### \[1\]

```text
 10e1 66001 4320 10e
```

### \[2\]

```text
(1) i = 0, b
(2) a[n - i - 1]
(3) i++
```

完成コード：

```c
#include <stdio.h>

int f(int a[], int n)
{
    int i = 0, b;

    while (i < n / 2) {
        b = a[i];
        a[i] = a[n - i - 1];
        a[n - i - 1] = b;
        i++;
    }

    return 0;
}

int main(void)
{
    int n = 5, i;
    int a[] = {1, 2, 3, 4, 5};

    f(a, n);

    for (i = 0; i < n; i++)
        printf("%d", a[i]);

    return 0;
}
```

### \[3\]

```text
(1) '\0'
(2) n
(3) a + 1, n + 1
```

完成コード：

```c
#include <stdio.h>

int f(char *a, int n)
{
    if (*a == '\0') {
        return n;
    } else {
        return f(a + 1, n + 1);
    }
}

int main(void)
{
    int n = 0;
    char a[] = "This is a pen.";

    printf("%d", f(a, n));

    return 0;
}
```
