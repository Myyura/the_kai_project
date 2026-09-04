---
sidebar_label: 2019年8月実施 専門 第3問
tags:
  - Tokyo-University
  - Computer-Science.String-Algorithms.Minimum-Window-Substring
---

# 東京大学 情報理工学系研究科 電子情報学専攻 2019年8月実施 専門 第3問

## **Author**

[adj-matrix](https://github.com/adj-matrix), 祭音Myyura

## **Description**

$M\ (\ge2)$ 未満の全ての非負整数を最低1回ずつ含む要素数 $N$ の配列 $A$ がある。$A$ の部分配列 $A_i^j:=A[i\ldots j-1]$ $(0\le i<j\le N)$ で $M$ 未満の全ての非負整数を最低1回ずつ含むもののうち、長さが最も短いものを見つけたい。ただし、そのような部分配列が複数あるときには、開始位置が最大のものを求める。例えば $N=4$, $M=2$, $A=\langle1,1,0,1\rangle$ に対しては $A_2^4=\langle0,1\rangle$ を求める。以下の問いに答えよ。

(1) $A$ の各部分配列に対し $M$ 未満の非負整数を最低1回ずつ含むか確認し、条件を満たすもので長さが最も短く開始位置が最大の部分配列を返すアルゴリズム FIND-SNIPPET を考える。

```text
FIND-SNIPPET(N, M, A):
    start = 0
    end = N
    for i = 0 to N - 1 do
        for j = i + 1 to N do
            (P)
        end
    end
    return A_start^end
```

この擬似コードを (P) を埋めて完成させよ。ただし、`break` 文を用いて `for` ループから抜けてはならない。なお、部分配列 $A_i^j$ $(0\le i<j\le N)$ 中に $M$ 未満の全ての非負整数が最低1回ずつ含まれるかを確認し、結果を真偽値として返す関数 `CONTAIN-INTEGERS(M, A, i, j)` を用いてよい。

(2) $N=4$, $M=2$, $A=\langle1,1,0,1\rangle$ に対して (1) のアルゴリズムを適用したときの $i,j,A_{start}^{end},start,end$ の値の推移を示せ。

FIND-SNIPPET は $A$ の全ての部分配列を考慮するため、$O(N^2)$ の時間計算量を必要とし、$N$ が大きくなると効率が悪くなる。

(3) FIND-SNIPPET を $O(N)$ で実行できるように改善し、その擬似コードを示せ。(1) の CONTAIN-INTEGERS は $O(1)$ で動作すると仮定して用いてよい。

(4) (3) のアルゴリズムにおいて、$O(1)$ で動作する CONTAIN-INTEGERS の実現方法を述べよ。

### 题目描述

设长度为 $N$ 的数组 $A$ 至少各包含一次所有小于 $M$ 的非负整数，其中 $M\ge2$。对半开子数组

$$
A_i^j:=A[i\dots j-1]\qquad(0\le i<j\le N),
$$

希望在至少各包含一次 $0,1,\ldots,M-1$ 的子数组中找出最短者；若最短者不止一个，取起始位置最大的一个。例如 $N=4$、$M=2$、$A=\langle1,1,0,1\rangle$ 时，应得到 $A_2^4=\langle0,1\rangle$。

(1) 算法 `FIND-SNIPPET` 检查 $A$ 的每个子数组是否包含全部小于 $M$ 的非负整数，并返回满足条件、长度最短且起点最大的子数组。填写框中 `(P)`，且不得用 `break` 跳出 `for` 循环。可以调用 `CONTAIN-INTEGERS(M,A,i,j)`，该函数判断 $A_i^j$ 是否至少各包含一次 $0,\ldots,M-1$ 并返回布尔值。

```text
FIND-SNIPPET(N, M, A):
    start = 0
    end = N
    for i = 0 to N - 1 do
        for j = i + 1 to N do
            +-------------------+
            |                   |
            |        (P)        |
            |                   |
            +-------------------+
    return A_start^end
```

(2) 对 $N=4$、$M=2$、$A=\langle1,1,0,1\rangle$ 执行 (1) 的算法，按执行过程给出 `i`、`j`、$A_{start}^{end}$、`start`、`end` 的值如何变化。

上述算法枚举所有子数组，时间复杂度为 $O(N^2)$，当 $N$ 很大时效率不足。

(3) 改进 `FIND-SNIPPET`，使其在假定 `CONTAIN-INTEGERS` 为 $O(1)$ 的条件下以 $O(N)$ 时间运行，并写出伪代码。

(4) 说明如何为 (3) 的算法实现一个每次调用耗时 $O(1)$ 的 `CONTAIN-INTEGERS`。

## **Kai**

### (1)

```text
if CONTAIN-INTEGERS(M, A, i, j) and j - i <= end - start:
    start = i
    end = j
```

$i$ は昇順に走査されるため、等長の場合も更新すれば最大の開始位置を選べる。

### (2)

各反復の (P) 実行後の値を示す。

| $i$ | $j$ | $A_{start}^{end}$ | $start$ | $end$ |
| :--: | :--: | :--: | :--: | :--: |
| 0 | 1 | $\langle1,1,0,1\rangle$ | 0 | 4 |
| 0 | 2 | $\langle1,1,0,1\rangle$ | 0 | 4 |
| 0 | 3 | $\langle1,1,0\rangle$ | 0 | 3 |
| 0 | 4 | $\langle1,1,0\rangle$ | 0 | 3 |
| 1 | 2 | $\langle1,1,0\rangle$ | 0 | 3 |
| 1 | 3 | $\langle1,0\rangle$ | 1 | 3 |
| 1 | 4 | $\langle1,0\rangle$ | 1 | 3 |
| 2 | 3 | $\langle1,0\rangle$ | 1 | 3 |
| 2 | 4 | $\langle0,1\rangle$ | 2 | 4 |
| 3 | 4 | $\langle0,1\rangle$ | 2 | 4 |

### (3)

左右の端を戻さずに動かす。`ADD` と `REMOVE` は (4) の計数状態を更新する操作である。

```text
FIND-SNIPPET(N, M, A):
    start = 0
    end = N
    count[0 .. M-1] = 0
    distinct = 0
    ADD(A[0])
    j = 1
    for i = 0 to N - 1:
        while j < N and not CONTAIN-INTEGERS(M, A, i, j):
            ADD(A[j])
            j = j + 1
        if CONTAIN-INTEGERS(M, A, i, j):
            if j - i <= end - start:
                start = i
                end = j
        REMOVE(A[i])
    return A_start^end
```

各 $i$ で条件を満たす最小の $j$ を選び、$i,j$ は各高々 $N$ 回増えるので、時間は $O(N)$。初期化も $M\le N$ より $O(N)$ である。

### (4)

現在の区間における各整数の出現回数 `count[x]` と、出現回数が正の整数の種類数 `distinct` を保持する。

```text
ADD(x):
    if 0 <= x < M:
        if count[x] == 0:
            distinct = distinct + 1
        count[x] = count[x] + 1

REMOVE(x):
    if 0 <= x < M:
        count[x] = count[x] - 1
        if count[x] == 0:
            distinct = distinct - 1

CONTAIN-INTEGERS(M, A, i, j):
    return distinct == M
```

区間端を1要素動かす際の更新も判定も $O(1)$、追加空間は $O(M)$ となる。
