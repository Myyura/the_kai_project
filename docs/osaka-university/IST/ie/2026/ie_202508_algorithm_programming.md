---
sidebar_label: 2025年8月実施 アルゴリズムとプログラミング
tags:
  - Osaka-University
  - Computer-Science.Algorithm-Design.Bubble-Sort
  - Computer-Science.Algorithm-Design.Binary-Search
  - Computer-Science.Programming.Pointers-and-Arrays
---
# 大阪大学 情報科学研究科 情報工学 2025年8月実施 アルゴリズムとプログラミング

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

配点：(1-1) 20、(1-2) 25、(1-3) 15、(2) 25、(3-1) 20、(3-2) 20

図1は ANSI C で記述されたプログラム（program）である。このプログラムは `data.txt` を読み込んで（read）処理を行い、その結果を出力（output）する。`data.txt` には、1行目に $n,s_1,s_2$ が記述されている。$n,s_1,s_2$ は整数（integer）であり、$n\ge1$ および $s_1<s_2$ を満たす。2行目以降は $n$ 件の識別子（ID）と得点（score）の対（pair）が各行（each line）に記述されている。識別子および得点は整数とする。図1のプログラムに関する以下の各問に答えよ。

### (1)

以下の各小問に答えよ。

(1-1) 関数（function）`funcA` において、14行目の条件式（conditional expression）`students[j].score > students[j + 1].score` が評価（evaluate）される最大（maximum）の回数を、引数（argument）$n$ を用いて示せ。

(1-2) 39行目で呼び出される関数 `funcB` において、28行目の条件式 `students[mid].score < target` が評価される最大の回数を、引数 $n$ を用いて示せ。

(1-3) 関数 `funcB` は、第一引数として与えられる配列（array）を扱うアルゴリズムを実装している。このアルゴリズムの最悪時間計算量（worst-case time complexity）のオーダ表記（order notation）として最も適しているものを、下記の選択肢から一つ選択せよ。ただし、配列のサイズを $N$ とする。

$O(1)$、$O(\log N)$、$O(N)$、$O(N\log N)$、$O(N^2)$、$O(N^3)$、$O(2^N)$、$O(N!)$

### (2)

`data.txt` が図2の内容である場合、図1のプログラムが開始（start）してから終了（finish）するまでに出力される内容を記述せよ。

### (3)

関数 `funcA` を改変することにより、14行目の条件式 `students[j].score > students[j + 1].score` が評価される回数を減らすことを考える。ただし、関数 `funcA` の終了時における配列 `students` の要素（element）の並びは、改変の前後で変わらないようにせよ。以下の各小問に答えよ。

(3-1) `data.txt` が図2の内容である場合、以下の三つの文（statement）を追加することで14行目の条件式が評価される回数を減らすことができる。図1のどの行の直後に追加すればよいか、それぞれの文に対して行番号を一つずつ答えよ。ただし、三つの文が追加される位置はそれぞれ異なる。また、文の追加によって行番号が変わることは考えなくてよい。

- `int flag = 0;`
- `if(flag == 0) break;`
- `flag = 1;`

(3-2) 小問 (3-1) で完成させた関数 `funcA` は、第一引数として与えられる配列を扱うアルゴリズムを実装している。このアルゴリズムの最悪時間計算量のオーダ表記として最も適しているものを、下記の選択肢から一つ選択せよ。ただし、配列のサイズを $N$ とする。

$O(1)$、$O(\log N)$、$O(N)$、$O(N\log N)$、$O(N^2)$、$O(N^3)$、$O(2^N)$、$O(N!)$

図1：プログラム

```c showLineNumbers
#include <stdio.h>
#include <stdlib.h>

typedef struct{
  int id;
  int score;
} student_type;

void funcA(student_type students[], int n)
{
  int i, j;
  for(i = 0; i < n - 1; i++){
    for(j = 0; j < n - 1 - i; j++){
      if(students[j].score > students[j + 1].score){
        student_type tmp = students[j];
        students[j] = students[j + 1];
        students[j + 1] = tmp;
      }
    }
  }
}

int funcB(student_type students[], int n, int target)
{
  int left = 0, right = n;
  while(left < right){
    int mid = (left + right) / 2;
    if(students[mid].score < target)
      left = mid + 1;
    else
      right = mid;
  }
  return left;
}

void funcC(student_type students[], int n, int s1, int s2)
{
  int i;
  int lower = funcB(students, n, s1);
  int upper = funcB(students, n, s2);

  for(i = lower; i < upper; i++)
    printf("%d %d\n", students[i].id, students[i].score);
}

int main(void)
{
  int n, s1, s2, i;
  student_type *students;
  FILE *fp;

  fp = fopen("data.txt", "r");
  fscanf(fp, "%d %d %d\n", &n, &s1, &s2);
  students = malloc(sizeof(student_type) * n);
  for(i = 0; i < n; i++)
    fscanf(fp, "%d %d\n", &students[i].id, &students[i].score);
  fclose(fp);

  funcA(students, n);
  funcC(students, n, s1, s2);

  return 0;
}
```

図2：`data.txt` の例

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

#### 题目描述

分值：(1-1) 20、(1-2) 25、(1-3) 15、(2) 25、(3-1) 20、(3-2) 20。

图1是用 ANSI C 编写的程序，读取 `data.txt`，处理数据并输出结果。文件第一行给出整数 $n,s_1,s_2$，满足 $n\ge1$、$s_1<s_2$；之后的各行分别记录一组标识符 ID 和分数 score，共 $n$ 组，二者均为整数。回答下列有关图1程序的问题。

### (1)

回答各小问。

(1-1) 在 `funcA` 中，第14行条件表达式 `students[j].score > students[j + 1].score` 最多被计算多少次？用参数 $n$ 表示。

(1-2) 对第39行调用的 `funcB`，第28行条件表达式 `students[mid].score < target` 最多被计算多少次？用参数 $n$ 表示。

(1-3) `funcB` 实现了处理第一个参数所传入数组的算法。设数组大小为 $N$，从以下选项中选择最适合表示其最坏时间复杂度的量级。

$O(1)$、$O(\log N)$、$O(N)$、$O(N\log N)$、$O(N^2)$、$O(N^3)$、$O(2^N)$、$O(N!)$

### (2)

当 `data.txt` 的内容为图2时，写出图1程序从开始到结束的所有输出。

### (3)

通过修改 `funcA`，减少第14行条件表达式 `students[j].score > students[j + 1].score` 的计算次数。要求修改前后，函数结束时 `students` 中的元素顺序相同。回答各小问。

(3-1) 当 `data.txt` 为图2时，加入以下三条语句可减少第14行条件表达式的计算次数。分别写出每条语句应插入图1的哪一行之后。三个插入位置必须不同，不考虑插入导致的行号变化。

- `int flag = 0;`
- `if(flag == 0) break;`
- `flag = 1;`

(3-2) (3-1) 中完成的 `funcA` 实现了处理第一个参数所传入数组的算法。设数组大小为 $N$，从以下选项中选择最适合表示其最坏时间复杂度的量级。

$O(1)$、$O(\log N)$、$O(N)$、$O(N\log N)$、$O(N^2)$、$O(N^3)$、$O(2^N)$、$O(N!)$

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

## **Reference**

- [大学公式問題](https://www.ist.osaka-u.ac.jp/files/examinees/admission/past-exam/5_Information%20engineering_2026_JA.pdf)
