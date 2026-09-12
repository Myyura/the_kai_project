---
sidebar_label: 2015年8月実施 数学 II
tags:
  - Kyoto-University
  - Mathematics.Calculus.Integration-by-Parts
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Real-Analysis.Functional-Equation
---

# 京都大学 情報学研究科 システム科学専攻 2015年8月実施 数学 II

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1

正整数 $n$ について

$$
P_n(x)=\frac1{2^nn!}\frac{d^n}{dx^n}(x^2-1)^n,\qquad Q_n(x)=(x^2-1)^n
$$

と定義する。$n!$ は階乗である。$l=0,\ldots,n-1$ について $Q_n^{(l)}(1)=Q_n^{(l)}(-1)=0$ が成り立つ。

(i) $\int_{-1}^{1}Q_n(x)\,dx$ を求めよ。

(ii) $P_n$ は $n$ 次多項式である。$x^n$ の係数を求めよ。

(iii) $n-1$ 次以下の任意の多項式 $h(x)$ について $\int_{-1}^{1}P_n(x)h(x)\,dx=0$ を示せ。

(iv) $\int_{-1}^{1}\{P_n(x)\}^2\,dx$ を求めよ。

### 問2

$\mathbb R_+$ を非負実数の集合とする。恒等的に $0$ ではない連続関数 $f:\mathbb R_+\to\mathbb R_+$ が

$$
f((x^p+y^p)^{1/p})=f(x)f(y),\qquad x,y\in\mathbb R_+
$$

を満たす。ただし $p$ は正整数。

(i) $f(0)=1$ を示せ。

(ii) 任意の正整数 $n$ と $x\in\mathbb R_+$ に対し $f(n^{1/p}x)=f(x)^n$ を示せ。

(iii) 任意の正有理数 $r=m/n$ に対し $f(r)=f(1)^{r^p}$ を示せ。

(iv) (iii) を用いて、ある実数 $c$ により $f(x)=e^{cx^p}$ ($x\in\mathbb R_+$) と表せることを示せ。

#### 题目描述

**问1** 对正整数 $n$ 定义

$$
P_n(x)=\frac1{2^nn!}\frac{d^n}{dx^n}(x^2-1)^n,\qquad Q_n(x)=(x^2-1)^n.
$$

$n!$ 表示阶乘。已知对 $l=0,\ldots,n-1$ 有 $Q_n^{(l)}(1)=Q_n^{(l)}(-1)=0$。

（i）求 $\int_{-1}^{1}Q_n(x)\,dx$。（ii）$P_n$ 为 $n$ 次多项式，求其 $x^n$ 的系数。（iii）对任意次数不超过 $n-1$ 的多项式 $h(x)$，证明 $\int_{-1}^{1}P_n(x)h(x)\,dx=0$。（iv）求 $\int_{-1}^{1}P_n(x)^2\,dx$。

**问2** 以 $\mathbb R_+$ 表示非负实数集合。连续函数 $f:\mathbb R_+\to\mathbb R_+$ 不恒等于 $0$，且满足

$$
f((x^p+y^p)^{1/p})=f(x)f(y),\quad x,y\ge0,
$$

其中 $p$ 为正整数。（i）证明 $f(0)=1$。（ii）证明对正整数 $n$，$f(n^{1/p}x)=f(x)^n$。（iii）证明对正有理数 $r=m/n$，$f(r)=f(1)^{r^p}$。（iv）利用（iii）证明存在实数 $c$ 使 $f(x)=e^{cx^p}$。


## **Kai**

### 問1

(i) $x=\sin t$ とおくと

$$
\int_{-1}^1Q_n(x)\,dx
=2(-1)^n\int_0^{\pi/2}\cos^{2n+1}t\,dt
=\boxed{(-1)^n\frac{2^{2n+1}(n!)^2}{(2n+1)!}}.
$$

最後には部分積分による漸化式を用いた。

(ii) $(x^2-1)^n$ の最高次項は $x^{2n}$ なので、求める係数は

$$
\boxed{c_n=\frac{(2n)!}{2^n(n!)^2}}.
$$

(iii) 境界で $Q_n$ の $n-1$ 階までの導関数が消えるため、$n$ 回部分積分して

$$
\int_{-1}^1P_nh\,dx=\frac{(-1)^n}{2^nn!}\int_{-1}^1Q_nh^{(n)}\,dx=0.
$$

(iv) $P_n=c_nx^n+h$、$\deg h\le n-1$ とおく。(iii) と部分積分から

$$
\int_{-1}^1P_n^2\,dx=c_n\int_{-1}^1P_nx^n\,dx
=\frac{c_n(-1)^n}{2^n}\int_{-1}^1Q_n\,dx
=\boxed{\frac2{2n+1}}.
$$

### 問2

(i) $f$ は恒等的に $0$ でないので $f(x_0)>0$ となる $x_0$ がある。$y=0$ を代入すると $f(x_0)=f(x_0)f(0)$ より $\boxed{f(0)=1}$。

(ii) $n=1$ では明らか。$n$ で成立すると、

$$
f((n+1)^{1/p}x)=f(((n^{1/p}x)^p+x^p)^{1/p})
=f(n^{1/p}x)f(x)=f(x)^{n+1}.
$$

(iii) まず $f(x)>0$ を示す。もし $f(x_0)=0$ なら (ii) により $f(x_0/n^{1/p})^n=0$。$n\to\infty$ と連続性から $f(0)=0$ となり矛盾する。

$r=m/n$ に対し (ii) をそれぞれ整数 $n^p,m^p$ に適用すると

$$
f(r)^{n^p}=f(m)=f(1)^{m^p}.
$$

正の $n^p$ 乗根をとって $\boxed{f(r)=f(1)^{(m/n)^p}}$。

(iv) 正有理数の稠密性と $f$ の連続性により、(iii) はすべての $x\ge0$ で成り立つ。$c=\log f(1)$ とおけば

$$
\boxed{f(x)=e^{cx^p}}.
$$

