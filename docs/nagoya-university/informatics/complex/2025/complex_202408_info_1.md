---
sidebar_label: "2024年8月実施 情1"
tags:
  - Nagoya-University
  - Computer-Science.Programming.Base-Conversion
  - Computer-Science.Programming.Bitwise-Operation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2024年8月実施 情1

## **Author**
祭音Myyura

## **Description**
以下のC言語の問いに答えよ。

### \[1\]
次のプログラム実行時の標準出力への表示結果を示せ。

```c
#include <stdio.h>

int main(void)
{
    int x1 = 0xebda, x2 = 0456;
    printf("%d %d %x %x %x \n", x1, x2, x1-x2, x1&x2, x2>>2);
    return 0;
}
```

### \[2\]
整数値からなるベクトルの成分のうち、偶数であるものの積を求めて表示するプログラムを作成した。下線部を適切に埋めよ。

```c
#include <stdio.h>

int f(int *a, int n)
{
    int i, ans = 1;
    for(    (1)    ){
        if(    (2)    %2 == 0 ) ans *=    (2)    ;
    }
    return    (3)    ;
}

int main(void)
{
    int n = 10, a[] = {7,2,13,-4,5,9,-1,21,-6,3};
    printf("%d\n", f(a,n));
    return 0;
}
```

標準出力結果例：

```text
48
```

### \[3\]
整数値からなるベクトルの成分のうち、数値が0より大きいものの個数を求めるプログラムを再帰的プログラミングにより作成した。下線部を適切に埋めよ。

```c
#include <stdio.h>

int f(    (1)    )
{
    if( m == 0 ){
        return    (2)    ;
    }else{
        if( a[m-1] > 0 ){
            return f(    (3)    );
        }else{
            return f(    (4)    );
        }
    }
}

int main(void)
{
    int n = 0, m = 10, a[] = {1,2,3,-1,-10,5,-20,10,10,-3};
    printf("%d\n", f(a,m,n));
    return 0;
}
```

標準出力結果例：

```text
6
```

### 题目描述

回答下列 C 语言程序设计问题。

1. 已知 `int x1 = 0xebda, x2 = 0456;`，求语句
   `printf("%d %d %x %x %x\n", x1, x2, x1-x2, x1&x2, x2>>2);`
   的标准输出。需要正确解释十六进制、八进制整数常量，以及减法、按位与和右移运算。
2. 对整数数组 `{7, 2, 13, -4, 5, 9, -1, 21, -6, 3}`，补全原题程序中的循环，使其计算所有偶数元素的乘积。完整代码见上文，程序应输出 `48`。
3. 对整数数组 `{1, 2, 3, -1, -10, 5, -20, 10, 10, -3}`，补全递归函数 `count`，统计数组中的正数个数。完整代码见上文，程序应输出 `6`。

#### 考点

- **整数常量与进制转换**：辨认 C 语言中十六进制和以 `0` 开头的八进制常量，并按指定格式输出。
- **位运算**：掌握按位与、右移等运算的逐位计算方法。
- **数组遍历与条件判断**：筛选满足条件的数组元素并累计乘积。
- **递归与数组处理**：设计递归终止条件，并逐项累计符合条件的元素数量。

## **Kai**
### \[1\]

```text
60378 302 eaac 10a 4b 
```

### \[2\]
空欄は次のように埋める。

| 空欄 | 解答 |
|---|---|
| (1) | `i = 0; i < n; i++` |
| (2) | `a[i]` |
| (3) | `ans` |

```c
#include <stdio.h>

int f(int *a, int n)
{
    int i, ans = 1;
    for(i = 0; i < n; i++){
        if(a[i] % 2 == 0) ans *= a[i];
    }
    return ans;
}

int main(void)
{
    int n = 10, a[] = {7,2,13,-4,5,9,-1,21,-6,3};
    printf("%d\n", f(a,n));
    return 0;
}
```

偶数は `2`, `-4`, `-6` であり、積は `2 × (-4) × (-6) = 48` となる。

### \[3\]
空欄は次のように埋める。

| 空欄 | 解答 |
|---|---|
| (1) | `int *a, int m, int n` |
| (2) | `n` |
| (3) | `a, m-1, n+1` |
| (4) | `a, m-1, n` |

```c
#include <stdio.h>

int f(int *a, int m, int n)
{
    if(m == 0){
        return n;
    }else{
        if(a[m-1] > 0){
            return f(a, m-1, n+1);
        }else{
            return f(a, m-1, n);
        }
    }
}

int main(void)
{
    int n = 0, m = 10, a[] = {1,2,3,-1,-10,5,-20,10,10,-3};
    printf("%d\n", f(a,m,n));
    return 0;
}
```

再帰関数 `f` は、配列の後ろから `a[m-1]` を調べ、正の値ならカウンタ `n` を1増やす。`m` が `0` になったら、数え終わった個数 `n` を返す。

正の値は `1`, `2`, `3`, `5`, `10`, `10` の6個なので、出力は `6` である。
