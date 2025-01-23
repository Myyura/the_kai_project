---
comments: false
title: 大阪大学 情報科学研究科 情報工学 2019年度 アルゴリズムとプログラミング
tags:
  - Osaka-University
  - Sorting-Algorithm
  - Bubble-Sort
  - Quick-Sort
---
# 大阪大学 情報科学研究科 情報工学 2019年度 アルゴリズムとプログラミング

## **Author**
祭音Myyura

## **Description**
図 1 に示す ANSI-C 準拠である C 言語のプログラム (program) は所有している複数のくじ (lottery) のそれぞれが当選 (win) しているかを調べて、当選しているくじ番号 (lottery number) と等級 (grade) をもれなく出力 (output) するものである.
くじ番号は 1000 未満の自然数 (natural number) で定められており, いずれのくじ番号のくじもたかだか一つしか存在しない.
所有しているくじ番号が、当選番号 (winning number) と一致した場合に、その当選番号に対応する等級に当選したとする.
当選番号は 10000 未満の自然数から重複なく選ばれた $N$ 個 ($N$ は $3 \le N \le 100$ の自然数) の数字で, 等級は 1 等から 3 等まであり、1 等が 1 本、 2 等が 1 本、 3 等が $N - 2$ 本である.

当選番号と等級は図 2 に示すような形式 (format) のファイル win.txt で与えられ、1 行目に当選番号の総数 $N$、2 行目以降の $N$ 行は全ての当選番号とその等級 $r$ ($r$ は $1 le r \le 3$ の自然数) が書かれている. また、所有しているくじ番号は図 3 に示すような形式のファイル lots.txt で与えられ、所有しているくじ番号が 1 行目から各行に一つずつ書かれている.
以下の各間に答えよ.

(1) 図 2 の win.txt、図 3 の lots.txt を与えてプログラムを実行することを考える.
プログラムの 36 行目で関数 functionA が呼び出されたときに、プログラム 6~13 行目の for 文処理において、i=1 および i=3 の時に、j に関する for 文が終了した時点で a\[0\] ~ a\[9\] および b\[0\] ~ b\[9\] の値が以下のようになった.
8 行目の空欄(A)を配列 a に関する適切な条件式で埋めよ.

|     | a\[0\]  | a\[1\] | a\[2\] | a\[3\] | a\[4\] | a\[5\] | a\[6\] | a\[7\] | a\[8\] | a\[9\] |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  i=1 | 5308 | 900 | 7888 | 3500 | 8 | 4905 | 8698 | 1328 | 89 | 9003 |
|  i=3 | 900 | 3500 | 8 | 4905 | 5308 | 1328 | 89 | 7888 | 8698 | 9003 |

|     | b\[0\] | b\[1\] | b\[2\] | b\[3\] | b\[4\] | b\[5\] | b\[6\] | b\[7\] | b\[8\] | b\[9\] |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  i=1 | 3 | 3 | 2 | 3 | 3 | 1 | 3 | 3 | 3 | 3 |
|  i=3 | 3 | 3 | 3 | 1 | 3 | 3 | 3 | 2 | 3 | 3 |

(2) 36 行目で呼び出された関数 functionA の処理によって、配列 win および配列 grade はどのようになるか、説明せよ、またその処理の平均時間計算量 (average case time complexity) を、変数 $n$ を用いて, オーダ表記 (order notation) で表わせ、その理由も答えよ. ただし、win.txt 内では、当選番号は無作為 (at random) な順序で並んでいる.

(3) 39 行目で呼び出された関数 functionB はどのような処理をしているのか、配列 win、変数 lot、変数 n を 用いて説明せよ. また、関数の戻り値 (return value) についても言及すること.

(4) 4 ~ 14 行目で定義されている関数 functionA を以下のように変更することで、36 行目で functionA を実行する時の平均時間計算量を少なくすることを考える. 以下の各小問に答えよ.

```text
void functionA(int a[], int b[], int t, int w) {
    if (t < w) {
        int i, j, x, tmp;
        i = t, j = w;
        x = a[t];

        while (1) {
            while (a[i] < x) i++;
            while (a[j] > x) j--;
            if (i >= j) break;
            tmp = a[i]; a[i] = a[j]; a[j] = tmp; tmp = b[i]; b[i] = b[j]; b[j] = tmp;
            i++; j--;
        }

        functionA(a, b, 空欄(あ), 空欄(い));
        functionA(a, b, 空欄(う), 空欄(え));
    }
}
```

- (4-1) 空欄(あ)~(え)に入るものの組み合わせとして、適切なものを下の (i) ~ (iv) から一つ選び、答えよ.

|     | (あ) | (い) | (う) | (え) |
| --- | --- | --- | --- | --- |
| (i) | i-1 | t | w | j+1 |
| (ii) | t | j-1 | i+1 | w |
| (iii) | t | i-1 | j+1 | w |
| (iv) | j-1 | t | w | i+1 |

- (4-2) 関数 functionA の変更後の平均時間計算量を、変数 $n$ を用いて、オーダ表記で表わせ. ただし、win.txt 内では、当選番号は無作為な順序で並んでいる.

(5) 図 1 のプログラムを、下線 (ア) および下線 (イ) で示した main 関数中の関数 functionA の引数 (argument) と if 文の条件式のみを変更し、1 等に当選している場合にのみ、当選しているくじ番号と等級を出力するようにする. 当選番号と等級、および所有しているくじ番号は図 2 および図 3 と同じ形式で与えられる. 39 行目の下線 (イ) における判定を平均時間計算量 $O(1)$ で実現するためには、下線 (ア) および下線 (イ) をそれぞれどのように変更すればよいか，(ア) には適切な引数を、(イ) には適切な式をそれぞれ答えよ.

```text
#include <stdio.h>
#define MAXN 100

void functionA(int a[], int b[], int t, int w) {
    int tmp, i, j;
    for (i = t+1; i <= w; i++) {
        for (j = t; j <= w-i; j++) {
            if ([   空欄(A)   ]) {
                tmp = a[j+1]; a[j+1] = a[j]; a[j] = tmp;
                tmp = b[j+1]; b[j+1] = b[j]; b[j] = tmp;
            }
        }
    }
}

int functionB(int a[], int x, int n) {
    int t, w, m;
    t = 0; w = n - 1;
    do {
        m = (t + w) / 2;
        if (x < a[m]) w = m - 1;
        else t = m + 1;
    } while (t <= m);
    if (w >= 0 && x == a[w]) return w;
    else return -1;
}

int main() {
    int n, i, k;
    FILE *fp;
    int win[MAXN], grade[MAXN], lot;
    fp = fopen("win.txt", "r");
    fscanf(fp, "%d", &n);
    for (i = 0; i < n; i++) fscanf(fp, "%d %d", &win[i], &grade[i]);
    fclose(fp);
    functionA(win, grade, 0, n-1);  // 下線 (ア): (win, grade, 0, n-1)
    fp = fopen("lots.txt", "r");
    while (fscanf(fp, "%d", &lot) != EOF) {
        if ((k = functionB(win, lot, n)) != -1) {  // 下線 (イ): (k = functionB(win, lot, n)) != -1
            printf("***winning number: %4d, grade: %d\n", lot, grade[k]);
        }
    }
    fclose(fp);
    return 0;
}
```
#### <center> 図１ プログラム

```text
10
5308    3
7888    2
900     3
8698    3
3500    3
8       3
4905    1
9003    3
1328    3
89      3
```
#### <center> 図２ win.txt

```text
9003
7888
356
28
2457
4905
43
29
3500
81
48
444
314
1028
777
```
#### <center> 図３ lots.txt

## **Kai**
### (1)
Hint: funcationA is "Bubble Sort"

空欄(A): a\[j\] > a\[j+1\]

### (2)
The array `win` and array `grade` will be sorted in ascending order.

The inner loop is iterating $(n-1) + (n-2) + \cdots + 1 = \frac{n(n-1)}{2}$ times and,
in every iteration of the inner loop, it takes $O(1)$ time to compare the element with adjacent element and takes $O(1)$ time to swap the elements when necessary.

Therefore, the average case time complexity is $O(n^2)$.

### (3)
Hint: funcationB is "Binary Search"

In every iteration, functionB compares `lot` to the middle element (the element of index $n/2$) of the array `win`.
If the middle element is greater than `lot`, then the right sub-array of the middle element is searched.
Otherwise, the left sub-array is searched.
This process continues iteratively until the size of a sub-array reduces to zero.

If we find an element of the array `win` which is equal to `lot`, then return the index of the element.
Otherwise, $-1$ is returned.

### (4)
Hint: functionA is "Quick Sort"

#### (4-1)
(iii)

#### (4-2)
$O(n \log n)$

Hint:

Let $T(n)$ denote the time complexity of "Quick Sort" of $n$ elements. Let $c > 0$ be a constant.
Then we have

$$
\begin{align}
T(n) &= \frac{1}{n} \Big(\sum_{i=0}^{n-1} T(i) T(n-i-1) \Big) + cn \nonumber \\
T(n) &= \frac{2}{n} \Big(\sum_{i=0}^{n-1} T(i) \Big) + cn \nonumber \\
nT(n) &= 2\Big(\sum_{i=0}^{n-1} T(i) \Big) + cn^2 \tag{1} \label{1}
\end{align}
$$

and

$$
\begin{align}
(n-1)T(n-1) = 2\Big(\sum_{i=0}^{n-2} T(i) \Big) + c(n-1)^2 \tag{2} \label{2}
\end{align}
$$

$(\ref{1}) - (\ref{2})$ and we have

$$
\begin{aligned}
nT(n) - (n-1)T(n-1) &= 2T(n-1) + cn^2 - c(n-1)^2 \\
nT(n) &= (n+1)T(n-1) + c(2n - 1) \\
\frac{T(n)}{n+1} &= \frac{T(n-1)}{n} + c \frac{2n - 1}{n(n+1)} \\
\frac{T(n)}{n+1} - \frac{T(n-1)}{n} &= c (\frac{3}{n+1} - \frac{1}{n})
\end{aligned}
$$

By the Euler–Maclaurin formula we know that $\sum_{i}^{n} \frac{1}{i} = O(\log n)$.
Hence, summing the following equations

$$
\begin{aligned}
\frac{T(n)}{n+1} - \frac{T(n-1)}{n} &= c (\frac{3}{n+1} - \frac{1}{n}) \\
\frac{T(n-1)}{n} - \frac{T(n-2)}{n-1} &= c (\frac{3}{n} - \frac{1}{n-1}) \\
&\cdots \\
\frac{T(1)}{2} - \frac{T(0)}{1} &= c (\frac{3}{2} - \frac{1}{1})
\end{aligned}
$$

we have

$$
\begin{aligned}
\frac{T(n)}{n+1} &= O(\log n)\\
T(n) &= O(n \log n)
\end{aligned}
$$

### (5)
下線 (ア): (grade, win, 0, n-1)

下線 (イ): lot == win\[0\]