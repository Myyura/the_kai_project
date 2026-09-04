---
sidebar_label: "2019年8月実施 数理科学 II [5]"
tags:
  - Osaka-University
  - Mathematics.Functional-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 II \[5\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$X=C([0,1],\mathbb R)$、$d(f,g)=\max_{x\in[0,1]}|f(x)-g(x)|$ とする。

$$
A=\{f\in X\mid f(x)\le f(y)\ (0\le x\le y\le1)\},
$$

$$
B=\{f\in X\mid f(x)<f(y)\ (0\le x<y\le1)\}
$$

とし、$P\subset X$ を $[0,1]$ 上の多項式全体とする。

(1) $A$ が閉集合であることを証明せよ。

(2) $B$ が開集合でも閉集合でもないことを証明せよ。

(3) 制限距離 $d|_P$ に関して $P$ は完備か。証明を付けて答えよ。

## **Kai**

### (1)
$f_n\in A$ が $f\in X$ に一様収束するとする。$x\le y$ に対し $f_n(x)\le f_n(y)$ の極限をとると $f(x)\le f(y)$。ゆえに $f\in A$ であり、$A$ は閉集合。

### (2)
$f_n(x)=x/n\in B$ は零関数へ一様収束するが、零関数は $B$ に属さない。よって閉集合ではない。

また $f(x)=x\in B$ に対し、$0<\delta<1$ として $g_\delta(x)=\max(x-\delta,0)$ とおく。$d(f,g_\delta)\le\delta$ だが $g_\delta$ は $[0,\delta]$ 上一定なので $B$ に属さない。したがって $B$ は開集合ではない。

### (3)
完備ではない。多項式 $p_n(x)=\sum_{k=0}^nx^k/k!$ は $e^x$ に一様収束するのでコーシー列である。もし $P$ 内に極限 $p$ があれば極限の一意性より $p=e^x$ となるが、$e^x$ は多項式ではない。
