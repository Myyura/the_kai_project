---
sidebar_label: "2018年1月実施 専門科目I 問題6"
sidebar_position: 19
tags:
  - Hiroshima-University
  - Sorting-Algorithm
  - Merge-Sort
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2018年1月実施 専門科目I 問題6


## **Author**
祭音Myyura

## **Description**
Algorithm 1 は、整数列 $a_0, a_1, \ldots, a_{n-1}$ を昇順に整列する。
ただし、列 $Q$ を引数とし、その長さを $|Q|$ とする。
また、列 $Q$ の先頭要素を $\text{head}(Q)$ と表し、$i$ 番目の要素を $Q[i]$ と表す。
$Q$ が空のとき、$\text{head}(Q) = \infty$ とする。
関数 $\text{Delete-head}(Q)$ は $Q$ の先頭要素を削除するものとする。
関数 $\text{Allocate}(L, k)$ は長さ $k$ の列 $L$ を確保するものとする。

(1) 入力列 $21, 1, 26, 45, 29, 28, 2, 9$ に対して、Algorithm 1 を実行したときの列の変化の様子を示せ。
また、この時の比較回数を答えよ。ただし、一方の値が $\infty$ であることが分かっているときの要素の比較は、回数に含めなくてよいものとする。

(2) Algorithm 1 の比較回数が最も多くなるような要素数が $8$ の場合の入力列を挙げよ。

(3) Algorithm 1 の最悪時間計算量を答えよ。また、その理由も説明せよ。

------------------------------------------

Algorithm 1 sorts an integer list $a_0, a_1, \ldots, a_{n-1}$ in ascending order.
This algorithm takes a list $Q$ as an argument, and let $|Q|$ be the length of $Q$.
Let $\text{head}(Q)$ be the first element of $Q$, and $Q[i]$ be the $i$-th member of $Q$.
If $Q$ is empty, $\text{head}(Q) = \infty$.
Let $\text{Delete-head}(Q)$ be a function to delete the first element of $Q$.
Let $\text{Allocate}(L, k)$ be a function to prepare a list $L$ which size is $k$.

(1) Apply Algorithm 1 to the input list $21, 1, 26, 45, 29, 28, 2, 9,$ and illustrate lists after each operation.
In addition, show the number of comparison during the execution.
However, do not count the comparison when the on value is $\infty$.

(2) Show an input list such that its size is $8$ and the number of comparison is the biggest in Algorithm 1.

(3) Show the time complexity of Algorithm 1. Explain its reason.

```text
Algorithm1(Q)
    if |Q| > 1 then
        m = |Q| / 2;  // rounded down
        p = |Q| - m;
        Allocate(L1, m);
        Allocate(L2, p);
        for i = 0 to m - 1 do
            L1[i] = Q[i];
        for i = 0 to p - 1 do
            L2[i] = Q[m + i];
        Algorithm1(L1);
        Algorithm1(L2);
        merge(L1, L2, Q);
    end

merge(L1, L2, Q)
    for i = 0 to |Q| - 1 do
        if head(L1) < head(L2) then
            Q[i] = head(L1);
            Delete-head(L1);
        else
            Q[i] = head(L2);
            Delete-head(L2);
        end
```

## **Kai**
### (1)

```text
[21, 1, 26, 45, 29, 28, 2, 9]
[1, 21, 26, 45, 29, 28, 2, 9]
[1, 21, 26, 45, 29, 28, 2, 9]
[1, 21, 26, 45, 29, 28, 2, 9]
[1, 21, 26, 45, 28, 29, 2, 9]
[1, 21, 26, 45, 28, 29, 2, 9]
[1, 21, 26, 45, 2, 9, 28, 29]
[1, 2, 9, 21, 26, 28, 29, 45]
```

number of comparison: 15

### (2)

```text
7, 3, 5, 1, 8, 4, 6, 2
```

the biggest number of comparison: 17

### (3)
Let $T(|Q|)$ denote the time complexity of Algorithm 1.
Since the time complexity of $\text{merge}(L1, L2, Q)$ is $O(|Q|)$, we have

$$
\begin{aligned}
T(|Q|) &= 2 T \left( \frac{|Q|}{2} \right) + O(|Q|)
\end{aligned}
$$

by master-theorem we have

$$
T(|Q|) = O(|Q| \log |Q|)
$$
