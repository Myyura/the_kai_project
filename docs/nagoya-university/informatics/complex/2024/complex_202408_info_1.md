---
sidebar_label: "2023年8月実施 情1"
tags:
  - Nagoya-University
  - Computer-Science.Programming
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2023年8月実施 情1

## **Author**
祭音Myyura

## **Description**
以下の C 言語の問に答えよ。

### \[1\]
次のプログラム実行時の標準出力への表示結果を示せ。

```c
#include <stdio.h>
int main(void){
    int x1 = 0xaca, x2 = 1010;
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

## **Kai**
### \[1\]

```text
  3f2 3772 3066 159 
```

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
