---
sidebar_label: "2023年8月実施 情1"
tags:
  - Nagoya-University
  - Computer-Science.Programming.Base-Conversion
  - Computer-Science.Programming.Bitwise-Operation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2023年8月実施 情1

## **Author**
祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2017/09/e430ba234e241d162a59ab76f6efe083.pdf)

以下の C 言語の問に答えよ。

### \[1\]
次のプログラム実行時の標準出力への表示結果を示せ。

```c
#include <stdio.h>
int main(void){
    int x1 = 0xacac, x2 = 1010;
    printf(" %4x %d %d %x \n", x2, x1+x2, x1|x2, x1>>3);
    return 0;
}
```

### \[2\]
行列の積を求めるプログラムを作成した。下線部を適切に埋めよ。

```c
#include <stdio.h>
int f(____(1)____){
    int i,k,l;
    for(k=0; k<n; k++)
        for(l=0; l<n; l++){
            ____(2)____;
            for(i=0; i<m; i++) c[k][l] ____(3)____;
        }
    return 0;
}
int main(void){
    int a[2][3]={{1,2,3},{7,8,9}},
        b[3][2]={{1,-1},{10,-10},{100,-100}}, c[2][2],
        i, j, n=2, m=3;
    f(a,b,c,m,n);
    for(i=0; i<n; i++)
        for(j=0; j<n; j++)
            printf("%d\n",c[i][j]);
    return 0;
}
```

標準出力結果例：

```text
321
-321
987
-987
```

### \[3\]
配列の要素の最大値を出力するプログラムを再帰的プログラミングを用いて作成した。下線部を適切に埋めよ。

```c
#include <stdio.h>
int f(int a[], int n, int max){
    if( n < 0 ){
        return ____(1)____;
    }else if( a[n] > max ){
        return f( ____(2)____ );
    }else{
        return f( ____(3)____ );
    }
}
int main(void){
    int a[]={-5,0,10,2,-3,5,-1,3,-20,1}, n=10;
    printf("%d\n",f(a, n-2, a[n-1]));
    return 0;
}
```

標準出力結果例：

```text
10
```

---

### 题目描述

**[1]** 写出 C 程序输出：`x1=0xaca`、`x2=1010`，按 `%4x %d %d %x` 输出 `x2`、`x1+x2`、`x1|x2`、`x1>>3`。

**[2] 矩阵乘法**：补全 C 函数 `f` 的 (1)—(3)，计算题面 $2\times3$ 矩阵与 $3\times2$ 矩阵的乘积；结果应逐行输出 `321,-321,987,-987`。

**[3] 递归求最大值**：补全递归函数 `f(a,n,max)` 的 (1)—(3)，求数组

```text
-5, 0, 10, 2, -3, 5, -1, 3, -20, 1
```

的最大值；给定输出为 `10`。

## **Kai**
### \[1\]

```text
  3f2 45214 45054 1595
```

末尾には半角空白が1個ある。

### \[2\]

```text
(1) int a[][3], int b[][2], int c[][2], int m, int n
(2) c[k][l] = 0
(3) += a[k][i] * b[i][l]
```

完成コード：

```c
#include <stdio.h>
int f(int a[][3], int b[][2], int c[][2], int m, int n){
    int i,k,l;
    for(k=0; k<n; k++)
        for(l=0; l<n; l++){
            c[k][l] = 0;
            for(i=0; i<m; i++) c[k][l] += a[k][i] * b[i][l];
        }
    return 0;
}
int main(void){
    int a[2][3]={{1,2,3},{7,8,9}},
        b[3][2]={{1,-1},{10,-10},{100,-100}}, c[2][2],
        i, j, n=2, m=3;
    f(a,b,c,m,n);
    for(i=0; i<n; i++)
        for(j=0; j<n; j++)
            printf("%d\n",c[i][j]);
    return 0;
}
```

### \[3\]

```text
(1) max
(2) a, n-1, a[n]
(3) a, n-1, max
```

完成コード：

```c
#include <stdio.h>
int f(int a[], int n, int max){
    if( n < 0 ){
        return max;
    }else if( a[n] > max ){
        return f(a, n-1, a[n]);
    }else{
        return f(a, n-1, max);
    }
}
int main(void){
    int a[]={-5,0,10,2,-3,5,-1,3,-20,1}, n=10;
    printf("%d\n",f(a, n-2, a[n-1]));
    return 0;
}
```
