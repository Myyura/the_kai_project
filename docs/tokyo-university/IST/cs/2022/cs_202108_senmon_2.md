---
sidebar_label: 2021年8月実施 専門科目 問題2
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Sorting-Algorithm
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2021年8月実施 専門科目 問題2

## **Author**
祭音Myyura, [zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
C言語で書かれた以下のプログラムは整数配列 a の a\[i\] から a\[j-1\] までを昇順に整列する関数 mysort(a, i, j) を定義している (i < j)。
プログラム中の関数 multifrac(k, l, m) は k, l, m が正の整数であるときに $k \times \frac{l}{m}$ 以上の最小の整数を求める関数であり、w, x, y, z は正の整数定数とする。
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

### 题目描述

题中 C 程序定义函数 `mysort(a,i,j)`，用于将整数数组
`a[i]` 至 `a[j-1]` 升序排列，其中 $i<j$。函数
`multifrac(k,l,m)` 返回

$$
\left\lceil\frac{kl}{m}\right\rceil
=\frac{kl+(m-1)}m
$$

（按整数除法计算）；$w,x,y,z$ 是正整数常量，整数运算不会溢出。
`compare_swap(p,q)` 在 `*p > *q` 时交换两数。`mysort` 对长度
$k=j-i<4$ 的区间执行空白代码 $X$；否则依次递归排序：

$$
[i,\ i+\lceil kx/w\rceil),\quad
[j-\lceil ky/w\rceil,\ j),\quad
[i,\ i+\lceil kz/w\rceil).
$$

回答下列问题。

（1）当 $(w,x,y,z)=(4,3,3,3)$ 时，写出空白 $X$ 中的适当代码；除
`compare_swap` 外不得调用其他函数，代码可有多行。

（2）调用 `mysort(a,0,n)` 时，记代码片段 $X$ 的总执行次数为 $T(n)$。
当 $(w,x,y,z)=(4,3,3,3)$ 时，给出 $T(n)$ 关于 $n$ 的渐近阶。

（3）分别对

$$
(w,x,y,z)=(4,2,3,3),(4,3,2,3),(4,3,3,2),(4,2,3,2)
$$

判断 `mysort` 是否总能正确排序。

（4）给出使 `mysort` 对所有输入均正确工作的 $w,x,y,z$ 的充要条件。

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

The exact recurrence is

$$
T(n)=\begin{cases}1,&1\le n<4,\\3T(\lceil3n/4\rceil),&n\ge4.\end{cases}
$$

The recursion depth is $\log_{4/3}n+O(1)$: the rounding error in each step is less than one, and the accumulated error under repeated multiplication by $3/4$ stays bounded. All three children have the same length. Therefore

$$
T(n)=\Theta\left(n^{\log_{4/3}3}\right).
$$

### (3)

- Case (4, 2, 3, 3), (4, 3, 2, 3) and (4, 3, 3, 2) works
- (4, 2, 3, 2): not work

### (4)
For positive integers $w,x,y,z$, the necessary and sufficient conditions are

$$
\boxed{4\max\{x,y,z\}\le3w,\qquad x+y+z\ge2w}.
$$

Indeed, a recursive length $\lceil k\ell/w\rceil$ is smaller than $k$ for every $k\ge4$ iff $4\ell\le3w$.  Also, sorting a prefix of length $A$, a suffix of length $B$, and a prefix of length $C$ sorts every length-$k$ sequence iff
$A+B+C\ge2k$.  Here this holds for every $k$ when
$x+y+z\ge2w$.  Conversely, if the latter inequality fails, choose a sufficiently large multiple of $w$; then the three ceilings sum to less than $2k$, so the routine fails on some input.

To justify the three-sort criterion, it suffices to consider zero-one inputs, since thresholding commutes with sorting. Put $u=k-B$, and suppose the first prefix of length $A$ initially contains $z_A$ zeros, while the whole array contains $z$ zeros. If $A+B+C\ge2k$, then $A>u$ and $C>u$.

After the first two sorts, the first $u$ entries and the last $B$ entries are each sorted. If $z_A\ge u$, the first $u$ entries are all zero and the whole array is already sorted. Otherwise, the last zero in the suffix is at position $u+z-z_A$ (using positions $1,\ldots,k$), and

$$
u+z-z_A\le k-B+k-A\le C.
$$

The final prefix sort therefore places all zeros before all ones. Conversely, take $A$ ones followed by $k-A$ zeros. After the first two sorts, an inversion survives the final sort whenever $C<2k-A-B$. This proves the criterion and, by induction on the recursive length, the stated condition.

## **Knowledge**

递归 分治算法 排序算法

### 解题技巧和信息

1. 递归调用的正确性依赖于覆盖和重叠。递归调用分别排序子区间；这些子区间的覆盖和重叠必须足以保证整个数组有序。
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
