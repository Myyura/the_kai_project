---
sidebar_label: "2024年度 数理科学 [II-4]"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations
  - Mathematics.Functional-Analysis
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [II-4]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$f:\mathbb R\to\mathbb R$ は $|f(z_1)-f(z_2)|\le|z_1-z_2|$ を満たす。$a\in\mathbb R$ とし、$t\ge0$ に対して

$$
x_1(t)=a,\qquad x_{n+1}(t)=a+\int_0^tf(x_n(s))\,ds
$$

と定める。$T>0$ に対し $C([0,T])$ を $[0,T]$ 上の実数値連続関数全体とし、そのノルムを $\|x\|_T=\max_{0\le t\le T}|x(t)|$ とする。この空間の完備性を用いてよい。

(1) 任意の $T>0,n\ge1$ について $\|x_{n+1}-x_n\|_T\le T^n|f(a)|$ を示せ。

(2) $a$ に依存しない $T_0>0$ と $x\in C([0,T_0])$ があり、$x_n\to x$ が一様収束することを示せ。さらに $x(0)=a$、$x'(t)=f(x(t))$（$0<t<T_0$）を示せ。

(3) $x(t)=a+\int_0^tf(x(s))\,ds$ をすべての $t\in[0,T]$ で満たす $x\in C([0,T])$ が存在するような $T>0$ の上限を $T_m(a)$ とする。背理法により $T_m(a)=\infty$ を示せ。

## **Kai**

### (1)

$\|x_2-x_1\|_T=T|f(a)|$。リプシッツ条件から

$$
|x_{n+2}(t)-x_{n+1}(t)|\le\int_0^t|x_{n+1}(s)-x_n(s)|\,ds
\le T\|x_{n+1}-x_n\|_T.
$$

従って帰納法により結論を得る。

### (2)

$T_0=1/2$ とする。$m>n$ に対して

$$
\|x_m-x_n\|_{T_0}\le|f(a)|\sum_{j=n}^{m-1}T_0^j
\le2|f(a)|\,2^{-n}\longrightarrow0.
$$

完備性により一様極限 $x\in C([0,T_0])$ が存在する。また $f$ のリプシッツ性から $f(x_n)\to f(x)$ も一様なので、積分の極限を取ると

$$
x(t)=a+\int_0^tf(x(s))\,ds.
$$

これより $x(0)=a$。被積分関数が連続なので $x'=f(x)$ である。

### (3)

$T_m(a)<\infty$ と仮定する。上限の定義から、$T_m(a)-T_0/2<T\le T_m(a)$ で解 $x$ が存在するように $T$ を選べる。(2)を初期値 $x(T)$ に適用すると、同じ長さ $T_0$ の区間上に解 $y$ が存在する。

$[0,T]$ では $x(t)$、$[T,T+T_0]$ では $y(t-T)$ と定めれば、接続点で値が一致し、全区間で積分方程式を満たす。ところが $T+T_0>T_m(a)$ となり上限の定義に矛盾する。よって $\boxed{T_m(a)=\infty}$。
