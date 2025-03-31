---
sidebar_label: "2021年8月実施 専門科目 問題2"
sidebar_position: 39
tags:
  - Tokyo-University
  - Sorting-Algorithm
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2021年8月実施 専門科目 問題2

## **Author**
祭音Myyura, [zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
C言語で書かれた以下のプログラムは整数配列 a の a\[i\] から a\[j-1\] までを昇順に整列する関数 mysort(a, i, j) を定義している (i < j)。
プログラム中の関数 multifrac(k, l, m) は k, l, m が正の整数であるときに $k \times \frac{1}{m}$ 以上の最小の整数を求める関数であり、w, x, y, z は正の整数定数とする。
整数の演算はオーバーフローしないものとする。

```text
int multifrac(int k, int l, int m) {
    return (k * l + (m-1))/m;
}

void compare_swap(int *p, int *q) {
    if (*p > *q) {
        int tmp = *p;
        *p = *q;
        *q = tmp;
    }
}

void mysort(int a[], int i, int j) {
    int k = j - i;
    if (k < 4) {
        [ 空欄 X ]
    } else {
        mysort(a, i, i + multifrac(k, x, w));
        mysort(a, j - multifrac(k, y, w), j);
        mysort(a, i, i + multifrac(k, z, w));
    }
}
```

以下の問いに答えよ。

(1) (w, x, y, z) が (4, 3, 3, 3) である場合、空欄 X に入れるべき適切なコードを考えよ。
ただし、compare_swap 以外の関数呼び出しは不可とする。
なお、コードは複数行にわたってもよい。

(2) mysort(a, 0, n) が呼び出された時にコード断片 X が実行される回数の合計を $T(n)$ と表記する。
(w, x, y, z) が (4, 3, 3, 3) である場合、$T(n)$ の $n$ に関するオーダーを与えよ。

(3) (w, x, y, z) が (4, 2, 3, 3), (4, 3, 2, 3), (4, 3, 3, 2), (4, 2, 3, 2) である場合のそれぞれについて、mysort 関数が常に正しく動作するか否かを答えよ。

(4) mysort が常に正しく動作するために w, x, y, z が満たすべき必要十分条件を答えよ。

## **Kai**
### (1)

```text
if (k == 3) {
    compare_swap(&a[i], &a[i+1]);
    compare_swap(&a[i+1], &a[i+2]);
    compare_swap(&a[i], &a[i+1]);
} else if (k == 2) {
    compare_swap(&a[i], &a[i+1]);
} else {
    // Do nothing if k == 1, as a single element is already sorted.
}
```

### (2)
When $(w, x, y, z) = (4, 3, 3, 3)$, we have $\text{multifrac}(n, x, w) = \lceil \frac{3n}{4} \rceil$, $\text{multifrac}(n, y, w) = \lceil \frac{3n}{4} \rceil$ and $\text{multifrac}(n, z, w) = \lceil \frac{3n}{4} \rceil$.

Hence,

$$
\begin{aligned}
  T(n) &= T \left(\frac{3}{4}n \right) + T \left(\frac{3}{4}n \right) + T \left(\frac{3}{4}n \right) \\
  &= 3T \left( \frac{3}{4}n \right) \\
  &= O(n^{\log_{\frac{4}{3}} 3}) \qquad \text{(By master theorem)}
\end{aligned}
$$

### (3)

- Case (4, 2, 3, 3), (4, 3, 2, 3) and (4, 3, 3, 2) works
- (4, 2, 3, 2): not work

### (4)
#### Key Insights

To guarantee that `mysort` always works correctly, the recursive calls must ensure that all elements in the array are covered and sorted properly. This requires:

1. **Coverage:** The recursive calls must cover all elements in the array.
2. **Overlap:** There must be sufficient overlap to ensure that elements are sorted correctly and their positions are fixed in each step.
3. **Problem Size Reduction:** Each recursive call must reduce the problem size to ensure termination.

#### Critical Observation

After the first two recursive calls:

- The largest $\lceil \frac{x+y}{w} - 1 \rceil$ elements must be correctly positioned at the end of the array.

Thus, for the third call to ensure full sorting:

- The third call must cover the remaining $\lceil 1 - \left( \frac{x+y}{w} - 1 \right) \rceil$ elements.

#### Necessary and Sufficient Conditions

Based on our analysis of the `multfrac` function and the requirements for correct sorting, we can derive the following necessary and sufficient conditions:

1. **Problem Size Reduction Condition:**

$$
\max\left(\frac{x}{w}, \frac{y}{w}, \frac{z}{w}\right) < \frac{3w+1}{4w}
$$

This condition, derived from the analysis of the `multfrac` function, guarantees that each recursive call reduces the problem size for any $k \geq 4$.

2. **Overlap Condition for Third Call:**

$$
\frac{z}{w} \geq 2 - \frac{x+y}{w}
$$

This ensures that the third call covers all elements not fully sorted by the first two calls.

2. **Integer Parameter Conditions:**

$$
0 < x, y, z < w
$$

$$
w, x, y, z \in \mathbb{Z}^+
$$

These conditions ensure that all parameters are positive integers and that x, y, and z are strictly less than w.

#### Complete Necessary and Sufficient Condition

Combining all these conditions, the complete necessary and sufficient condition for `mysort` to work correctly is:

$$
\begin{cases}
\max\left(x, y, z\right) < \frac{3w+1}{4} \\
x + y + z \geq 2w \\
0 < x, y, z < w \\
w, x, y, z \in \mathbb{Z}^+
\end{cases}
$$

#### Explanation

1. The first condition ensures proper coverage of the array by the first two recursive calls.
2. The second condition, derived from the `multfrac` function analysis, guarantees problem size reduction in each recursive call, preventing infinite recursion.
3. The third condition ensures that the third call covers any elements not fully sorted by the first two calls.
4. The fourth and fifth conditions ensure that all parameters are valid positive integers, with x, y, and z being strictly less than w.

These conditions together guarantee that `mysort` will correctly sort the array and terminate for any input size.

## **Knowledge**

递归 分治算法 排序算法

### 解题技巧和信息

1. 递归调用的正确性依赖于覆盖和重叠。每个递归调用必须覆盖整个数组段，确保所有元素最终被排序。
2. [[时间复杂度#递归算法的时间复杂度 / Time Complexity of Recursive Algorithms|主定理（Master Theorem）]] 是解决递归关系的有力工具，特别是在分析算法复杂度时。
3. 对于分治算法，理解各个部分的覆盖范围和重叠部分对于正确性和效率的保证非常重要。

### 重点词汇

recursive call 递归调用

coverage 覆盖

overlap 重叠

Master Theorem 主定理

complexity analysis 复杂度分析

### 参考资料

1. Introduction to Algorithms, Third Edition, by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein, Chap. 4.
2. Algorithms, Fourth Edition, by Robert Sedgewick and Kevin Wayne, Chap. 2.
