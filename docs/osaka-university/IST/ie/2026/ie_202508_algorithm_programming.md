---
sidebar_label: 2025年8月実施 アルゴリズムとプログラミング
tags:
  - Osaka-University
  - Computer-Science.Algorithm-Design.Bubble-Sort
  - Computer-Science.Algorithm-Design.Binary-Search
  - Computer-Science.Programming
---
# 大阪大学 情報科学研究科 情報工学 2025年8月実施 アルゴリズムとプログラミング

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

`data.txt` の第1行に整数 $n,s_1,s_2$（$n\ge1, s_1<s_2$）、第2行以降に $n$ 組の整数 `ID score` が記録される。次の主要部分を持つANSI Cプログラムを考える。`student_type` は整数メンバ `id, score` を持つ構造体である。`main` は入力を読み終えた後、`funcA(students,n)`、`funcC(students,n,s1,s2)` の順に呼ぶ。これは[公式問題（2ページ）](https://www.ist.osaka-u.ac.jp/files/examinees/admission/past-exam/5_Information%20engineering_2026_JA.pdf)の省略部分を要約したものである。

```text
 9  void funcA(student_type students[], int n)
10  {
11      int i, j;
12      for(i = 0; i < n - 1; i++){
13          for(j = 0; j < n - 1 - i; j++){
14              if(students[j].score > students[j + 1].score){
15                  student_type tmp = students[j];
16                  students[j] = students[j + 1];
17                  students[j + 1] = tmp;
18              }
19          }
20      }
21  }

23  int funcB(student_type students[], int n, int target)
24  {
25      int left = 0, right = n;
26      while(left < right){
27          int mid = (left + right) / 2;
28          if(students[mid].score < target)
29              left = mid + 1;
30          else
31              right = mid;
32      }
33      return left;
34  }

36  void funcC(student_type students[], int n, int s1, int s2)
37  {
38      int i;
39      int lower = funcB(students, n, s1);
40      int upper = funcB(students, n, s2);
41
42      for(i = lower; i < upper; i++)
43          printf("%d %d\n", students[i].id, students[i].score);
44  }
```

### (1)

- (1-1) `funcA` の14行目の条件式が評価される最大回数を $n$ で表せ。
- (1-2) 39行目から呼ばれる `funcB` について、28行目の条件式が評価される最大回数を $n$ で表せ。
- (1-3) `funcB` の最悪時間計算量を次から選べ。

```text
O(1), O(log N), O(N), O(N log N), O(N²), O(N³), O(2ᴺ), O(N!)
```

### (2)

次の `data.txt` に対する出力を、開始から終了まで示せ。

```text
10 70 80
1006 70
1002 60
1008 69
1005 80
1001 78
1009 79
1004 100
1007 79
1010 81
1003 85
```

### (3)

`data.txt` が上の図2の内容である場合について、`funcA` の終了時の配列順序を変えずに比較回数を減らすため、次の3文を互いに異なる位置へ追加する。

```c
int flag = 0;
if(flag == 0) break;
flag = 1;
```

- (3-1) 各文を原プログラムの何行目の直後へ追加するか答えよ。
- (3-2) 改変後の `funcA` の最悪時間計算量を選べ。

### 题目描述

本题以学生成绩为数据，考查冒泡排序的精确比较次数和稳定性、lower_bound 型二分查找的精确迭代次数与复杂度、半开区间筛选，以及“某一趟无交换即提前终止”的优化。

## **Kai**

### (1)

#### (1-1)

外側ループの各 $i$ に対して条件式は $n-1-i$ 回評価される。したがって

$$
\boxed{
\sum_{i=0}^{n-2}(n-1-i)=\frac{n(n-1)}2
}.
$$

#### (1-2)

探索区間長を $m=\texttt{right}-\texttt{left}$ とすると、1回の反復後の最大長は $\lfloor m/2\rfloor$ である。$n\ge1$ より最大評価回数は

$$
\boxed{\lfloor\log_2 n\rfloor+1}
$$

である。

#### (1-3)

探索区間を毎回ほぼ半分にするので

$$
\boxed{O(\log N)}.
$$

### (2)

`funcA` は `score` の昇順に安定ソートする。整列後は

```text
1002 60
1008 69
1006 70
1001 78
1009 79
1007 79
1005 80
1010 81
1003 85
1004 100
```

となる。`funcB` は `target` 以上となる最初の添字を返すため、出力範囲は $70\le\text{score}<80$ である。よって出力は

```text
1006 70
1001 78
1009 79
1007 79
```

となる。

### (3)

#### (3-1)

| 追加する文 | 追加位置 |
|---|---:|
| `int flag = 0;` | 12行目の直後 |
| `flag = 1;` | 17行目の直後 |
| `if(flag == 0) break;` | 19行目の直後 |

すなわち

```c
for(i = 0; i < n - 1; i++){
    int flag = 0;
    for(j = 0; j < n - 1 - i; j++){
        if(students[j].score > students[j + 1].score){
            student_type tmp = students[j];
            students[j] = students[j + 1];
            students[j + 1] = tmp;
            flag = 1;
        }
    }
    if(flag == 0) break;
}
```

とする。

#### (3-2)

逆順入力では各周回で交換が発生し、最後まで比較を行う。したがって最悪時間計算量は変わらず

$$
\boxed{O(N^2)}.
$$
