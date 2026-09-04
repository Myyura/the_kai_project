---
sidebar_label: 2014年8月実施 専門 第3問
tags:
  - Tokyo-University
  - Mathematics.Number-Theory.Greatest-Common-Divisor
  - Computer-Science.Algorithm-Design.Euclidean-Algorithm
---

# 東京大学 情報理工学系研究科 電子情報学専攻 2014年8月実施 専門 第3問

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

変数 $x$ に関する多項式を $f=a_0+a_1x+\cdots+a_mx^m$, $g=b_0+b_1x+\cdots+b_nx^n$（$a_i,b_i$ は実数、$a_m\ne0$, $b_n\ne0$）とする。多項式 $f,g$ の先頭項を $\operatorname{LT}(f)=a_mx^m$, $\operatorname{LT}(g)=b_nx^n$ とし、次数を $\deg(f)=m$, $\deg(g)=n$ と表す。多項式 $f$ を0でない多項式 $g$ で割る除算は

$$
f=qg+r
$$

で与えられる。ここで商 $q$、余り $r$ は $x$ に関する多項式で、$r=0$ または $\deg(r)<\deg(g)$ が成り立つ。この場合 $r=\operatorname{remainder}(f,g)$, $q=\operatorname{quotient}(f,g)$ と表す。

(1) $f=x^2+7x+3$, $g=x+1$ の場合に $\operatorname{quotient}(f,g)$ と $\operatorname{remainder}(f,g)$ を求めよ。

(2) $q=\operatorname{quotient}(f,g)$ と $r=\operatorname{remainder}(f,g)$ を計算する除算アルゴリズムの擬似コードを (a) を埋めることで完成させよ。ただし、単項式（一つの項だけからできている式。例：$7x^3$ や $-5x^{10}$）の四則演算及び多項式の加法・減法はそのまま使えるとして良い。

```text
Input: f, g
Output: q, r
q = 0, r = f
while (r ≠ 0 and deg(g) ≤ deg(r)) {
    q = q + LT(r)/LT(g)
    r = (a)
}
```

(3) (2) で示した除算アルゴリズムは必ず停止することを示せ。

(4) 多項式 $f,g$ の最大公約元 GCD (Greatest Common Divisor) とは、以下の条件を満たす多項式 $h$ を表す。

- $h$ は $f$ と $g$ を割り切る。
- 多項式 $p$ が $f$ と $g$ を割り切るなら、$p$ は $h$ を割り切る。

この場合 $h=\operatorname{GCD}(f,g)$ と表す。$\operatorname{GCD}(f,g)$ は0でない定数倍の違いを除いて一意に決まる。$f=qg+r$ の時、$\operatorname{GCD}(f,g)=\operatorname{GCD}(f-qg,g)$ 及び $\operatorname{GCD}(f,0)=f$ の関係式を用いると、$\operatorname{GCD}(f,g)$ は以下のコードで計算できる（一般性を失うことなく $\deg(f)\ge\deg(g)$ を仮定する）。空欄 (b) と (c) を埋めよ。

```text
Input: f, g
Output: h
h = f
s = g
while (s ≠ 0) {
    rem = remainder(h, s)
    h = (b)
    s = (c)
}
```

(5) 任意の $f$ と $g$（$\deg(f)\ge\deg(g)$）に対して、$\operatorname{GCD}(f,g)$ を実行したとき GCD アルゴリズム中の while ループにある remainder が呼ばれる回数の上界を計算せよ。また、結果の理由も書け。

### 题目描述

设

$$
f=a_0+a_1x+\dots+a_mx^m,\qquad
g=b_0+b_1x+\dots+b_nx^n
$$

为关于 $x$ 的多项式，其中 $a_i,b_i$ 为实数，$a_m\ne0$、$b_n\ne0$。定义首项 $\operatorname{LT}(f)=a_mx^m$、$\operatorname{LT}(g)=b_nx^n$，次数 $\deg(f)=m$、$\deg(g)=n$。用非零多项式 $g$ 除 $f$ 时，

$$
f=qg+r,
$$

其中商 $q$、余式 $r$ 均为多项式，且 $r=0$ 或 $\deg(r)<\deg(g)$；记 $r=\operatorname{remainder}(f,g)$、$q=\operatorname{quotient}(f,g)$。

(1) 当 $f=x^2+7x+3$、$g=x+1$ 时，计算 $\operatorname{quotient}(f,g)$ 和 $\operatorname{remainder}(f,g)$。

(2) 在下列多项式除法伪代码中，用适当表达式填充 (a)。可以直接使用单项式（如 $7x^3$ 或 $-5x^{10}$）的四则运算以及多项式的加减运算。

```text
Input: f, g
Output: q, r
q = 0, r = f
while (r ≠ 0 and deg(g) ≤ deg(r)) {
    q = q + LT(r)/LT(g)
    r = _____ (a) _____
}
```

(3) 证明 (2) 的算法一定终止。

(4) 多项式 $f,g$ 的最大公因式是满足下列条件的多项式 $h$：

- $h$ 同时整除 $f$ 和 $g$；
- 若多项式 $p$ 同时整除 $f$ 和 $g$，则 $p$ 也整除 $h$。

记 $h=\operatorname{GCD}(f,g)$；它在相差非零常数倍的意义下唯一。利用

$$
\operatorname{GCD}(f,g)=\operatorname{GCD}(f-qg,g),\qquad
\operatorname{GCD}(f,0)=f
$$

可按下列过程计算最大公因式，并不失一般性地假设 $\deg(f)\ge\deg(g)$。填写 (b)、(c)。

```text
Input: f, g
Output: h
h = f
s = g
while (s ≠ 0) {
    rem = remainder(h, s)
    h = ______ (b) ______
    s = ______ (c) ______
}
```

(5) 对任意满足 $\deg(f)\ge\deg(g)$ 的多项式 $f,g$，给出计算 $\operatorname{GCD}(f,g)$ 时，`while` 循环内调用 `remainder` 次数的上界，并说明理由。

## **Kai**

### (1)

$$
x^2+7x+3=(x+6)(x+1)-3
$$

より、$\boxed{q=x+6,\quad r=-3}$。

### (2)

```text
(a): r - (LT(r)/LT(g)) * g
```

### (3)

更新時には $r$ の最高次項が打ち消されるため、更新後は $r=0$ となるか、その次数が真に減少する。非零多項式の次数は非負整数なので、この減少は無限には続かない。従って必ず停止する。

### (4)

```text
(b): s
(c): rem
```

### (5)

$\boxed{\deg(g)+1}$ 回が上界である。各呼出し後、$s$ は0になるか次数が少なくとも1減る。呼出し直前の次数は最大でも

$$
\deg(g),\ \deg(g)-1,\ \ldots,\ 1,\ 0
$$

であり、定数多項式で割る最後の1回も数える。
