---
sidebar_label: 2017年3月実施 基礎科目 問題4 情報基礎2
tags:
  - Tohoku-University
  - Discrete-Mathematics.Combinatorics.Binomial-Coefficient
  - Computer-Science.Dynamic-Programming.Dynamic-Programming-Principle
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---

# 東北大学 工学研究科 電気・情報系 2017年3月実施 基礎科目 問題4 情報基礎2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

(1) Fig. 4(a) のように、原点 $(0,0)$ を出発点として、幅 $1$ の間隔で上方向と右方向に広がっている碁盤目状の一方通行の道路がある。一方通行の方向は Fig. 4(a) の通りである。次の問に答えよ。

(a) 原点から座標 $(8,6)$ の地点に至る経路の数を求めよ。また、その求め方も説明せよ。

(b) $0\le x$ かつ $0\le y$ を満たす整数 $x,y$ が与えられたとき、原点から座標 $(x,y)$ の地点に至る経路の数を $c_{x,y}$ で表す。以下の式の空欄 $\boxed{\mathrm A}$ を埋めて、$c_{x,y}$ に関する漸化式を示せ。

$$
c_{x,y}=\begin{cases}1&(x=0\text{ または }y=0)\\\boxed{\mathrm A}&(\text{その他のとき})\end{cases}
$$

(2) Fig. 4(b) のように、$(3,3)$–$(4,3)$ のブロックが通行止めになっている碁盤目状の一方通行の道路を考える。一方通行の方向は Fig. 4(b) の通りである。原点から座標 $(m,n)$ の地点に至る経路の数を $c_{m,n}$ で表す。ただし、整数 $m$ と $n$ はそれぞれ、$4\le m,3\le n$ を満たすこととする。次の問に答えよ。

(a) Fig. 4(c) に示したプログラムは、$c_{m,n}$ の値を再帰により求める。例えば、関数呼び出し `crec(8,6)` は原点から座標 $(8,6)$ の地点に至る経路の数を返す。空欄 $\boxed{\mathrm B},\boxed{\mathrm C},\boxed{\mathrm D}$ に適切な式を埋めて、C 言語のプログラムを完成させよ。

(b) Fig. 4(d) に示したプログラムは、$c_{m,n}$ の値を動的計画法により求める。例えば、関数呼び出し `cdp(8,6)` は原点から座標 $(8,6)$ の地点に至る経路の数を返す。空欄 $\boxed{\mathrm E},\boxed{\mathrm F},\boxed{\mathrm G}$ に適切な式を埋めて、C 言語のプログラムを完成させよ。ただし、`int c[m+1][n+1]` は、サイズが $(m+1)\times(n+1)$ の 2 次元配列 `c` を宣言する。

(c) Fig. 4(c) のプログラムと Fig. 4(d) のプログラムで $c_{m,n}$ の値を求めるときの時間計算量を、それぞれ $O$ 記法で示せ。

(d) Fig. 4(c) のプログラムの時間計算量を削減する方法としてメモ化がある。以下の点に触れながら、メモ化について説明せよ。

- Fig. 4(c) のプログラムの効率が悪い理由
- メモ化を導入するために必要な Fig. 4(c) のプログラムの変更点
- メモ化が時間計算量を削減する理由

Fig. 4(c)：

```c
int crec(int m, int n)
{
    if (m == 0 || n == 0) {
        return 1;
    } else if ( B ) {
        return C;
    } else {
        return D;
    }
}
```

Fig. 4(d)：

```c
int cdp(int m, int n)
{
    int i, j;
    int c[m+1][n+1];
    for (i = 0; i <= m; ++i)
        c[i][0] = 1;
    for (j = 0; j <= n; ++j)
        c[0][j] = 1;
    for (i = 1; i <= m; ++i)
        for (j = 1; j <= n; ++j)
            if ( E )
                F;
            else
                G;
    return c[m][n];
}
```

### 题目描述

第一象限的单位方格道路只允许向右或向上行走，从 $(0,0)$ 出发。

1. 求到 $(8,6)$ 的路径数并说明理由。记到 $(x,y)$ 的路径数为 $c_{x,y}$，补全递推式：当 $x=0$ 或 $y=0$ 时 $c_{x,y}=1$，否则 $c_{x,y}=\boxed A$。
2. 现封闭道路 $(3,3)\to(4,3)$，其余方向不变，设 $m\ge4,n\ge3$。补全以下递归与动态规划程序，分别给出时间复杂度，并说明如何利用记忆化改善递归算法。

```c
int crec(int m, int n) {
    if (m == 0 || n == 0) return 1;
    else if (B) return C;
    else return D;
}
int cdp(int m, int n) {
    int i, j, c[m+1][n+1];
    for (i = 0; i <= m; ++i) c[i][0] = 1;
    for (j = 0; j <= n; ++j) c[0][j] = 1;
    for (i = 1; i <= m; ++i)
        for (j = 1; j <= n; ++j)
            if (E) F;
            else G;
    return c[m][n];
}
```

![封闭一条道路的有向格点图](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201703_kiso_4_grid.svg)

## **Kai**

### (1)

每条路径含 $8$ 次向右和 $6$ 次向上，故

$$
\boxed{c_{8,6}=\binom{14}{6}=3003},\qquad \boxed{A=c_{x-1,y}+c_{x,y-1}}.
$$

### (2)

只有到达 $(4,3)$ 时不能从左侧进入。因此各空为：

| 空 | 内容 |
|---|---|
| B | `m == 4 && n == 3` |
| C | `crec(m, n-1)` |
| D | `crec(m-1, n) + crec(m, n-1)` |
| E | `i == 4 && j == 3` |
| F | `c[i][j] = c[i][j-1]` |
| G | `c[i][j] = c[i-1][j] + c[i][j-1]` |

递归调用的深度至多 $m+n$、每次至多两个分支，因此时间为 $O(2^{m+n})$；动态规划逐格求值，时间为 $O(mn)$，空间为 $O(mn)$。

递归程序反复计算相同的 $(i,j)$。增加缓存表，首次求值后保存，后续调用直接读取，即可使每个状态仅计算一次，时间降为 $O(mn)$。

例如封路后的 $(8,6)$ 路径数为

$$
3003-\binom63\binom73=2303,
$$

其中减去项是经过被封闭道路的路径数。
