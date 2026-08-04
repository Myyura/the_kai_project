---
sidebar_label: "2017年8月実施 情1"
tags:
  - Nagoya-University
  - Computer-Science.Programming.Base-Conversion
  - Computer-Science.Programming.Bitwise-Operation
  - Computer-Science.Programming.Pascal-Triangle
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2017年8月実施 情1

## **Author**
祭音Myyura

## **Description**
### \[1\]
次のプログラムの出力結果を示せ。

```c
#include <stdio.h>

int main(void) {
    int a = 0x456;
    int b = 0x0ff;
    printf("%x %d %d %x\n", a, b, a|b, b>>1);
    return 0;
}
```

### \[2\]
組み合わせの数 ${}_nC_k = \frac{n!}{(n-k)!k!}$ に関するプログラムを作成する。ただし，$n$ と $k$ は正の整数で，$n \ge k$ とする。

1) ${}_nC_k$ を計算する関数 `comb` を以下のように作成する。空欄を適切に埋めよ。

```c
int comb(int n, int k) {
    int num=1, den=1;
    while( (1) ) {
        num *= (2);
        den (3) k--;
    }
    return num/den;
}
```

2) 関数 `comb` を使って ${}_nC_k$ を計算し，右下図のような三角形を出力する関数 `pascal` を作成する。
上下連続する段と段の数値の関係を考慮すると，これらの数値の配置には規則性があることがわかる。`pascal(5)` を実行したとき，右下図のように表示されるように，空欄を適切に埋めよ。

```c
void pascal(int n) {
    int i, j, k;
    for(i=0; i<n; i++) {
        for(j=0; j< (4) ; j++)
            printf(" ");
        for(k=0; k<= (5) ; k++)
            printf("%2d", (6) );
        printf("\n");
    }
}
```

実行例：

```text
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

3) 再帰法を用いて ${}_nC_k$ を計算する関数 `comb2` を作成する。空欄を適切に埋めよ。

```c
int comb2(int n, int k) {
    if( (7) || n == k) return 1;
    else
        return (8) + (9);
}
```

### \[3\]
整数値の列

```text
50, 40, 80, 70, 30, 10, 90, 60, 80
```

を処理するプログラムを作成する。

以下のプログラムでは，これらの整数値は配列 `data` の要素として前から順に格納されており，配列の末尾に `-1` を追加して値の終わりを表現している。

```c
#include <stdio.h>

int get_min(int data[]) {
    int *p=data;
    int min=*p;
    while( (1) != -1) {
        if( (2) ) min=*p;
    }
    return min;
}

int get_order(int data[], int n);

int main(void) {
    int data[]={50,40,80,70,30,10,90,60,80,-1};
    int n;

    scanf("%d", &n);

    printf("最小値は%dです\n", get_min(data));
    printf("data[%d]=%dは%d番目に大きい\n", 
           n, data[n], get_order(data, n));

    return 0;
}
```

1) 配列 `data` の最小値を求める関数 `get_min` の空欄を適切に埋めよ。
2) 配列 `data[n]` が，全体の大きい方から数えて何番目かを返す関数 `get_order` を作成する。ただし，`n` は `0` 以上の整数で，キーボードから入力するものとする。関数 `get_order` を作成せよ。
3) `n = 3` のときのプログラムの実行結果を示せ。

### 题目描述

**[1] 位运算**：写出题面 C 程序的输出。程序令 `a=0x456`、`b=0x0ff`，并分别按 `%x %d %d %x` 输出 `a`、`b`、`a|b`、`b>>1`。

**[2] 组合数与 Pascal 三角**：对正整数 $n\ge k$：

1. 补全 `comb(n,k)` 的空格 (1)—(3)，用乘积计算 ${}_nC_k$。
2. 使用 `comb` 补全 `pascal(n)` 的 (4)—(6)，使 `pascal(5)` 输出题面所示五层 Pascal 三角。
3. 利用 ${}_nC_k={}_{n-1}C_{k-1}+{}_{n-1}C_k$，补全递归函数 `comb2` 的 (7)—(9)。

**[3] 数组、指针与排名**：数组依次为

```text
50, 40, 80, 70, 30, 10, 90, 60, 80, -1
```

其中 `-1` 是结束标记。补全 `get_min` 的两个空格求最小值；实现 `get_order(data,n)`，返回 `data[n]` 从大到小的名次；并写出输入 `n=3` 时完整程序输出。

## **Kai**
### \[1\]

```text
456 255 1279 7f
```

### \[2\]
#### 1)

```text
(1) k > 0
(2) n--
(3) *=
```

#### 2)

```text
(4) n-i-1
(5) i
(6) comb(i,k)
```

#### 3)

```text
(7) k == 0
(8) comb2(n-1,k-1)
(9) comb2(n-1,k)
```

### \[3\]
#### 1)

```text
(1) *++p
(2) *p < min
```

#### 2)

```c
int get_order(int data[], int n) {
    int i=0;
    int order=1;

    while(data[i] != -1) {
        if(data[i] > data[n])
            order++;
        i++;
    }

    return order;
}
```

#### 3)

```text
最小値は10です
data[3]=70は4番目に大きい
```
