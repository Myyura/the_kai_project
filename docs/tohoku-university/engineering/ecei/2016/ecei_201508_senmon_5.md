---
sidebar_label: 2015年8月実施 専門科目 問題5 計算機2
tags:
  - Tohoku-University
  - Mathematics.Linear-Algebra.Matrix-Power
  - Computer-Science.Programming.Recursion
---

# 東北大学 工学研究科 電気・情報系 2015年8月実施 専門科目 問題5 計算機2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

Fig. 5(a) および Fig. 5(b) で定義した，非負整数 $n$ に対する再帰関数 $f(n)$ と $g(n)$ について以下の問に答えよ。ただし，式 “if $e_1=e_2$ then $e_3$ else $e_4$” の値は，$e_1$ の値が $e_2$ の値と等しければ，$e_3$ の値に，そうでなければ $e_4$ の値に等しい。演算子 $+,-,*$ はそれぞれ整数加算，整数減算，行列乗算を表す。以下において，$A^n$ は正方行列 $A$ の $n$ 乗を表す。ただし，$A^0$ は $A$ と同じサイズの単位行列と定義する。

(1) $f(2),f(3),g(1),g(2)$ を計算せよ。計算の過程も示すこと。

(2) 任意の非負整数 $n$ について $g(n)=\begin{pmatrix}1&1\\1&0\end{pmatrix}^n*\binom11$ となることを帰納法を用いて証明せよ。

(3) 任意の非負整数 $n$ について $g(n)=\binom{f(n+1)}{f(n)}$ となることを帰納法を用いて証明せよ。

(4) Fig. 5(c) に示す構文に従い，任意の非負整数 $n$ について以下の性質を満たす再帰関数 $h(n)$ の定義を書け。

- $g(n)$ の値と $h(n)*\binom11$ の値が等しい。
- $h(n)$ の値の計算に必要な再帰呼び出し回数が $O(\log n)$。

ただし，整数 $n$ と $m$ に対し，$n$ を $m$ で割ったときの商を求める関数 $\operatorname{div}(n,m)$ とその剰余を求める関数 $\operatorname{mod}(n,m)$ を用いてよい。また，任意の正方行列 $A$ と非負整数 $n$ に対し $A^{2n+1}=A(A^n)^2$ および $A^{2n}=(A^n)^2$ となることと，$A^2$ を求める関数 $\operatorname{square}(A)$ も用いてよい。

Fig. 5(a), Fig. 5(b)

$$
f(x)=\begin{cases}1&x=0\\1&x=1\\f(x-1)+f(x-2)&\text{otherwise},\end{cases}\qquad
g(x)=\begin{cases}\binom11&x=0\\\begin{pmatrix}1&1\\1&0\end{pmatrix}*g(x-1)&\text{otherwise}.
\end{cases}
$$

Fig. 5(c)

```text
関数定義  d ::= f(x) = e
式        e ::= x | n | A | e1 + e2 | e1 - e2
             | div(e1,e2) | mod(e1,e2) | e1 * e2 | square(e)
             | if e1 = e2 then e3 else e4 | f(e)
```

$x$：変数，$n$：整数定数，$A$：行列定数。

### 题目描述

对非负整数 $n$，定义

$$
f(0)=f(1)=1,\quad f(n)=f(n-1)+f(n-2)\ (n\ge2),
$$

$$
g(0)=\binom11,\qquad g(n)=Ag(n-1)\ (n\ge1),\qquad A=\begin{pmatrix}1&1\\1&0\end{pmatrix}.
$$

1. 计算 $f(2),f(3),g(1),g(2)$，给出过程。
2. 归纳证明 $g(n)=A^n\binom11$。
3. 归纳证明 $g(n)=\binom{f(n+1)}{f(n)}$。
4. 用下述语言写递归函数 $h(n)$，满足 $g(n)=h(n)\binom11$，且计算 $h(n)$ 所需递归调用次数为 $O(\log n)$。允许变量、整数和矩阵常量、加减、$\operatorname{div}$（整数商）、$\operatorname{mod}$（余数）、矩阵乘法、$\operatorname{square}(A)=A^2$、条件表达式及函数调用。

## **Kai**

### (1)

$$
f(2)=1+1=2,\qquad f(3)=2+1=3,
$$

$$
g(1)=A\binom11=\binom21,\qquad g(2)=A\binom21=\binom32.
$$

### (2)

$n=0$ 时 $g(0)=I\binom11$。若 $g(n)=A^n\binom11$，则

$$
g(n+1)=Ag(n)=A^{n+1}\binom11,
$$

归纳成立。

### (3)

$n=0$ 时两边均为 $\binom11$。若结论对 $n$ 成立，则

$$
g(n+1)=A\binom{f(n+1)}{f(n)}=\binom{f(n+1)+f(n)}{f(n+1)}=\binom{f(n+2)}{f(n+1)},
$$

所以对所有 $n\ge0$ 成立。

### (4)

用二分幂：

```text
h(n) =
    if n = 0 then I
    else if mod(n, 2) = 0 then
        square(h(div(n, 2)))
    else
        A * square(h(div(n, 2)))
```

由 $A^{2k}=(A^k)^2$、$A^{2k+1}=A(A^k)^2$，归纳可得 $h(n)=A^n$。每层仅调用一次 $h(\lfloor n/2\rfloor)$，故递归调用次数为 $O(\log n)$。
