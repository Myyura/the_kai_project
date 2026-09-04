---
sidebar_label: 2014年3月実施 基礎科目 問題4 情報基礎2
tags:
  - Tohoku-University
  - Computer-Science.Algorithm-Design.Binary-Search
---

# 東北大学 工学研究科 電気・情報系 2014年3月実施 基礎科目 問題4 情報基礎2

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

配列 $A$ には $0$ から $n$ の範囲の相異なる $n$ 個の整数 $A[1],A[2],\ldots,A[n]$ が含まれているとする。したがって，$0$ から $n$ の範囲の整数で，この配列 $A$ に含まれないものがちょうど1つある。入力として与えられた配列 $A$ から，この欠損した数を見つける問題を $P$ とする。

(1) $P$ を効率的に解くアルゴリズムの概略を示し，その計算量を与えよ。

(2) 配列 $A$ の要素があらかじめ昇順に並べられていると仮定したとき，$P$ をより効率的に解くアルゴリズムの概略を示し，その計算量を与えよ。

### 题目描述

数组 $A[1],\ldots,A[n]$ 包含 $0,1,\ldots,n$ 中互不相同的 $n$ 个整数，因此恰好缺少一个数。

1. 给出寻找缺失数的高效算法及复杂度。
2. 若数组已经严格递增排列，给出更高效的算法及复杂度。

## **Kai**

### (1)

利用异或中 $a\oplus a=0$，计算

$$
r=(0\oplus1\oplus\cdots\oplus n)\oplus A[1]\oplus\cdots\oplus A[n].
$$

出现过的整数两两抵消，故 $r$ 即缺失数。时间 $\Theta(n)$，额外空间 $O(1)$。

### (2)

设缺失数为 $m$。若 $i\le m$，则 $A[i]=i-1$；若 $i>m$，则 $A[i]=i$。二分寻找第一个满足 $A[i]=i$ 的位置；若不存在则返回 $n$。

```text
lo = 1; hi = n + 1
while lo < hi:
    mid = floor((lo + hi) / 2)
    if A[mid] == mid:
        hi = mid
    else:
        lo = mid + 1
return lo - 1
```

循环中 $mid\le n$，不读取 $A[n+1]$。时间 $O(\log(n+1))$，额外空间 $O(1)$。
