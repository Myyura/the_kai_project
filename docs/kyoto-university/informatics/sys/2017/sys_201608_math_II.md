---
sidebar_label: 2016年8月実施 数学 II
tags:
  - Kyoto-University
  - Mathematics.Calculus.Infinite-Series
  - Mathematics.Calculus.Integration-by-Parts
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Definite-Integral
---

# 京都大学 情報学研究科 システム科学専攻 2016年8月実施 数学 II

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1

以下は収束するか、理由をつけて答え、収束する場合は値を求めよ。$n$ は正整数、$a$ は正の定数とする。

$$
\text{(i)}\quad\lim_{n\to\infty}\left(1+\frac12+\cdots+\frac1n\right),
$$

$$
\text{(ii)}\quad\lim_{n\to\infty}\left(\frac1{n+a}+\frac1{n+2a}+\cdots+\frac1{n+na}\right),
$$

$$
\text{(iii)}\quad\lim_{n\to\infty}\left(1-\frac12+\frac13-\cdots+(-1)^{n-1}\frac1n\right).
$$

### 問2

非負整数 $n$ に対して

$$
A_n=\int_0^{\pi/2}\cos^{2n}x\,dx,\qquad B_n=\int_0^{\pi/2}x^2\cos^{2n}x\,dx
$$

と定義する。正整数 $m$ について $(2m)!!=2m(2m-2)\cdots4\cdot2$、$(2m-1)!!=(2m-1)(2m-3)\cdots3\cdot1$、$0!!=(-1)!!=1$ とする。

(i) 部分積分により $A_n=\dfrac{(2n-1)!!}{(2n)!!}\dfrac\pi2$ ($n\ge0$) を示せ。

(ii) 部分積分により $A_n=n(2n-1)B_{n-1}-2n^2B_n$ ($n\ge1$) を示せ。

(iii) (i),(ii) を用いて

$$
\frac1{n^2}=\frac4\pi\left(\frac{(2n-2)!!}{(2n-3)!!}B_{n-1}-\frac{(2n)!!}{(2n-1)!!}B_n\right)
$$

を示せ。

(iv) $x\le(\pi/2)\sin x$ ($0\le x\le\pi/2$) を用いて

$$
B_n\le\frac{\pi^3}{8}\frac{(2n-1)!!}{(2n+2)!!}\qquad(n\ge1)
$$

を示せ。

(v) $\sum_{n=1}^{\infty}n^{-2}$ を $\pi$ を用いて表せ。

#### 题目描述

**问1** 判断下列极限是否收敛，说明理由；若收敛则求值。$n$ 为正整数，$a>0$ 为常数。

$$
\text{（i）}\ \lim_{n\to\infty}\sum_{k=1}^n\frac1k,\qquad
\text{（ii）}\ \lim_{n\to\infty}\sum_{k=1}^n\frac1{n+ka},\qquad
\text{（iii）}\ \lim_{n\to\infty}\sum_{k=1}^n\frac{(-1)^{k-1}}k.
$$

**问2** 对非负整数 $n$ 定义

$$
A_n=\int_0^{\pi/2}\cos^{2n}x\,dx,\qquad B_n=\int_0^{\pi/2}x^2\cos^{2n}x\,dx.
$$

双阶乘定义为 $(2m)!!=2m(2m-2)\cdots2$、$(2m-1)!!=(2m-1)(2m-3)\cdots1$，并规定 $0!!=(-1)!!=1$。

（i）用分部积分证明 $A_n=\dfrac{(2n-1)!!}{(2n)!!}\dfrac\pi2$。（ii）用分部积分证明 $A_n=n(2n-1)B_{n-1}-2n^2B_n$（$n\ge1$）。（iii）利用前两问证明

$$
\frac1{n^2}=\frac4\pi\left(\frac{(2n-2)!!}{(2n-3)!!}B_{n-1}-\frac{(2n)!!}{(2n-1)!!}B_n\right).
$$

（iv）用 $x\le(\pi/2)\sin x$（$0\le x\le\pi/2$）证明

$$
B_n\le\frac{\pi^3}{8}\frac{(2n-1)!!}{(2n+2)!!}\quad(n\ge1).
$$

（v）用 $\pi$ 表示 $\sum_{n=1}^{\infty}n^{-2}$。


## **Kai**

### 問1

(i) $\sum_{k=1}^n1/k\ge\int_1^{n+1}dx/x=\log(n+1)\to\infty$。したがって発散する。

(ii) Riemann 和より

$$
\lim_{n\to\infty}\frac1n\sum_{k=1}^n\frac1{1+a(k/n)}
=\int_0^1\frac{dx}{1+ax}=\boxed{\frac{\log(1+a)}a}.
$$

(iii) 部分和を $S_n$ とすると $S_{2n}=\sum_{k=1}^n1/(n+k)$。よって (ii) の $a=1$ から $S_{2n}\to\log2$。$S_{2n+1}-S_{2n}=1/(2n+1)\to0$ なので全体も $\boxed{\log2}$ に収束する。

### 問2

(i) $n\ge1$ では部分積分から

$$
A_n=(2n-1)\int_0^{\pi/2}\sin^2x\cos^{2n-2}x\,dx
=(2n-1)(A_{n-1}-A_n).
$$

$A_0=\pi/2$ と合わせて所望の公式を得る。

(ii) $F(x)=\sin x\cos^{2n-1}x$ とおくと

$$
F'=2n\cos^{2n}x-(2n-1)\cos^{2n-2}x.
$$

端点項は消えるので

$$
2nB_n-(2n-1)B_{n-1}
=\int_0^{\pi/2}x^2F'\,dx
=-2\int_0^{\pi/2}xF\,dx=-\frac{A_n}{n}.
$$

最後の等式には $(\cos^{2n}x)'=-2nF$ と部分積分を用いた。整理して与式を得る。

(iii) (ii) に (i) を代入し、両辺を $n^2A_n$ で割って整理すると所望の式となる。

(iv)

$$
B_n\le\frac{\pi^2}{4}\int_0^{\pi/2}\sin^2x\cos^{2n}x\,dx
=\frac{\pi^2}{4}(A_n-A_{n+1})
=\frac{\pi^3}{8}\frac{(2n-1)!!}{(2n+2)!!}.
$$

(v) $C_n=\dfrac{(2n)!!}{(2n-1)!!}B_n$ とおく。$C_0=B_0=\pi^3/24$ で、(iv) より $0\le C_n\le\pi^3/[8(2n+2)]\to0$。したがって (iii) を足し合わせると

$$
\boxed{\sum_{n=1}^{\infty}\frac1{n^2}=\frac4\pi\lim_{N\to\infty}(C_0-C_N)=\frac{\pi^2}{6}}.
$$

