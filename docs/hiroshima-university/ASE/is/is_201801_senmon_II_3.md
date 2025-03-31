---
sidebar_label: "2018年1月実施 専門科目II 問題3"
sidebar_position: 22
tags:
  - Hiroshima-University
  - Programming
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2018年1月実施 専門科目II 問題3


## **Author**
祭音Myyura

## **Description**
図１および図２に示すＣ言語による関数 power1, power2 は引数 $\text{x}$, $\text{y}$ で与えられた整数値（$\text{y}$ は正の整数とする）に対して、$\text{x}^\text{y}$ を繰り返し処理または再帰処理で計算して返す。
以下の問いに答えよ。

(1) 図１で示す関数 power1 において、引数 $\text{x}=2$, $\text{y}=4$ で実行したときの標準出力への出力結果を答えよ。

(2) 図２に示す関数 power2 は再帰的に $\text{x}^\text{y}$ を計算する関数である（$\text{y}$ は正の整数とする）。
関数 power2 を完成させるために、\[a\], \[b\], \[c\] に当てはまる式を答えよ。

(3) ある環境で関数 power1 を引数 $\text{x}=10$, $\text{y}=10$ で実行したところ、標準出力に図３に示す数値が含まれていた。
この結果の異常な部分を指摘し、この結果が出力された理由をデータ型の観点から述べよ。

(4) 図２に示す関数 power2 を参考にし、正の整数 $\text{x}$ の階乗を再帰的に計算して返す関数 factorial を定義せよ。

-----------------------------------------

Figures 1 and 2 show the functions power1 and power2 written in C.
These functions calculate $\text{x}^\text{y}$ with the arguments $\text{x}$, $\text{y}$ ($\text{y}$ is a positive integer value) repetitively or recursively and return the result.
Answer the following questions.

(1) When power1 in Figure 1 is executed with $\text{x}=2$, $\text{y}=4$, answer the output dumped into the standard output.

(2) The function power2 in Figure 2 calculates $\text{x}^\text{y}$ with the arguments $\text{x}$, $\text{y}$ re ($\text{y}$ is a positive integer value).
Answer the expressions can be filled with the blanks \[a\], \[b\], \[c\] to complete power2.

(3) When power1 in Figure 1 is executed with  $\text{x}=10$, $\text{y}=10$ in an environment, the standard output includes numbers in Figure 3.
Answer the abnormal part in the output and the reason why the output is generated in terms of the data types.

(4) Referring to the function power2 in Figure 2, define the function factorial which calculates the factorial of the positive integer value $\text{x}$ recursively.

##### <center> Figure 1
```text
int power1(int x, int y) {
    int i, num = 1;
    if (y > 0) {
        for (i = 1; i <= y; i++) {
            num = num * x;
            printf("%d:%d\n", i, num);
        }
        return num;
    } else exit(1);
}
```

##### <center> Figure 2
```text
int power2(int x, int y) {
    if (y > 0) {
        if ( [a] ) return [b];
        else return [c];
    } else exit(1);
}
```

##### <center> Figure 3
```text
9: 1000000000
10: 1410065408
```

## **Kai**
### (1)
```text
1:2
2:4
3:8
4:16
```

### (2)
- \[a\]: y > 1
- \[b\]: x * power2(x, y - 1)
- \[c\]: x

### (3)
[Integer overflow](https://en.wikipedia.org/wiki/Integer_overflow)

### (4)
```text
int factorial(int n) {
    if (n >= 1)
        return n * factorial(n-1);
    else
        return 1;
}
```