---
sidebar_label: "2018年8月実施 情報基礎 問題1"
tags:
  - Ochanomizu-University
  - Computer-Science.Algorithm-Design.Matrix-Multiplication-Algorithms
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2018年8月実施 情報基礎 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

次の C 言語の関数は、`double` 型の $n\times n$ 行列 `a`, `b` の積を `c` に格納する。添字は $0$ 以上 $n$ 未満とする。

```c
void mul (double a[n][n], double b[n][n], double c[n][n]) {
    int i, j, k;
    double v;

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            v = 0;
            for (k = 0; k < n; k++) {
                /* 行列積の (i, j) 要素を求めるために v を更新する */
            }
            c[i][j] = v;
        }
    }
}
```

1. コメント行に書くべきプログラムを示せ。
2. その行が実行される回数を $n$ で表せ。
3. `a`, `b` がともに上三角行列であるとき、零と分かっている要素に関する計算を省く関数 `mul2` を書け。結果配列は初めすべて零とする。
4. `mul2` で $(i,j)$ 要素（$i\le j$）を求めるための掛け算の回数を $i,j$ で表せ。
5. `mul2` 全体での掛け算の回数を $n$ で表せ。
6. `mul2` の計算量を $n$ で表せ。

### 题目描述

补全普通矩阵乘法的核心语句并计数。随后利用两个输入矩阵均为上三角矩阵这一条件，编写跳过必为零的乘法版本，求单个元素和整个程序的乘法次数及渐近复杂度。

## **Kai**

### (1)

```c
v += a[i][k] * b[k][j];
```

### (2)

三重循环的各添字均取 $n$ 个值，因此正確な実行回数は

$$
\boxed{n^3}
$$

回である。

### (3)

上三角行列では $a_{ik}$ が零でない可能性があるのは $i\le k$、$b_{kj}$ が零でない可能性があるのは $k\le j$ のときだけである。したがって次のように書ける。

```c
void mul2 (double a[n][n], double b[n][n], double c[n][n]) {
    int i, j, k;
    double v;

    for (i = 0; i < n; i++) {
        for (j = i; j < n; j++) {
            v = 0;
            for (k = i; k <= j; k++) {
                v += a[i][k] * b[k][j];
            }
            c[i][j] = v;
        }
    }
}
```

$i>j$ の要素は初期値の零のままである。

### (4)

$k=i,i+1,\ldots,j$ について掛け算するので、

$$
\boxed{j-i+1\text{ 回}}
$$

である。

### (5)

掛け算の総数は

$$
\begin{aligned}
\sum_{i=0}^{n-1}\sum_{j=i}^{n-1}(j-i+1)
&=\sum_{d=0}^{n-1}(n-d)(d+1)\\
&=\boxed{\frac{n(n+1)(n+2)}6}.
\end{aligned}
$$

### (6)

最高次の項は $n^3/6$ なので、

$$
\boxed{\Theta(n^3)}
$$

である。通常の積より定数係数は小さいが、漸近的次数は同じである。

