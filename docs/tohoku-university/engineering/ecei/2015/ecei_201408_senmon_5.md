---
sidebar_label: 2014年8月実施 専門科目 問題5 計算機2
tags:
  - Tohoku-University
  - Mathematics.Number-Theory.Greatest-Common-Divisor
  - Computer-Science.Algorithm-Design
---

# 東北大学 工学研究科 電気・情報系 2014年8月実施 専門科目 問題5 計算機2

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

Fig. 5 に示す再帰関数 $f$ を考える。ここで，関数 $\operatorname{mod}(x,y)$ は整数 $x$ を整数 $y$ で割った余りを返し，式 “if $e_1=e_2$ then $e_3$ else $e_4$” の値は，$e_1$ の値が $e_2$ の値に等しければ $e_3$ の値に，そうでなければ $e_4$ の値に等しい。また，入力 $p$ と $q$（$p\ge q$）は非負の整数であると仮定する。

(1) $f(901,255)$ を計算せよ。計算の過程も示すこと。

(2) 任意の非負の整数 $p$ と $q$（$p\ge q$）に対して，$f(p,q)$ の計算が停止することを示せ。

(3) $f(p,q)$ を計算する際，$n$ 回目の再帰関数呼び出しにおける $q$ の値を $q_n$ で表す。$n$ 回目（$n\ge3$）の再帰関数呼び出しが行われた場合，$q_n<q_{n-2}/2$ が成り立つことを示せ。

(4) 問(3)の関係を用いて，$f(p,q)$（$q>0$）を計算するための再帰関数呼び出しの回数は $O(\log q)$ であることを示せ。

```text
f(p,q) =
    if q=0 then p
    else f(q,mod(p,q))
```

### 题目描述

给定非负整数 $p\ge q$，函数

```text
f(p, q) =
    if q == 0 then p
    else f(q, mod(p, q))
```

其中 `mod` 为余数。

1. 计算 $f(901,255)$，写出过程。
2. 证明任意允许输入均使计算终止。
3. 令第 $n$ 次调用的第二参数为 $q_n$，证明只要第 $n$ 次调用发生且 $n\ge3$，就有 $q_n<q_{n-2}/2$。
4. 利用上式证明 $q>0$ 时的调用次数为 $O(\log q)$。

## **Kai**

### (1)

$$
\begin{aligned}
f(901,255)&=f(255,136)=f(136,119)\\
&=f(119,17)=f(17,0)=\boxed{17}.
\end{aligned}
$$

### (2)

当第二参数非零时，下一次调用的第二参数满足 $0\le p\bmod q<q$。非负整数不能无限严格递减，故必到达 $q=0$ 而终止。

### (3)

设 $a=q_{n-2},b=q_{n-1},c=q_n$，则 $a=kb+c$，其中 $k\ge1$ 且 $0\le c<b$。

若 $b\le a/2$，则 $c<b\le a/2$；若 $b>a/2$，则 $k=1$，从而 $c=a-b<a/2$。两种情况均得 $\boxed{q_n<q_{n-2}/2}$。

### (4)

每两次递归，正的第二参数至少减半。至多经过 $2\lceil\log_2q\rceil+O(1)$ 次调用便到达 $0$，故调用次数为 $\boxed{O(\log q)}$（包含 $q=1$ 可写 $O(1+\log q)$）。
