---
sidebar_label: 2009年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
---

# 京都大学 情報学研究科 システム科学専攻 2009年8月実施 数学【II】

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
$n,N$ は自然数とする。

(i) $f(x)=e^x-\sum_{k=0}^n x^k/k!$ の符号を調べ、$x>0$ で $\sum_{k=0}^n x^k/k!<e^x$ を示せ。

(ii) $g(x)=e^x-(x/n)e^x-\sum_{k=0}^n x^k/k!$ の符号を調べ、$x>0$ で $\sum_{k=0}^n x^k/k!>e^x-(x/n)e^x$ を示せ。

(iii) 関数 $F(t)$ を

$$
F(t)=\int_0^t\left|e^{-x}\sum_{k=0}^{2N}\frac{x^k}{k!}-1\right|\,dx
$$

により定義する。(i)、(ii) の結果を使い、$F(t)=N$ が区間 $(N,2N)$ に少なくとも一つ解をもつことを示せ。

### 問2
$f$ は区間 $[a,b]$ 上で微分可能、$f'$ は連続で、$f(a)=0$ とする。

(i) $a\le x\le b$ において $g(x)=\int_a^x|f'(t)|\,dt$ とおく。$|f(x)|\le g(x)$ を示せ。

(ii) (i) と $|f'(x)|=g'(x)$、$g(a)=0$ を用いて、次を示せ。

$$
\int_a^b|f(x)f'(x)|\,dx\le\frac{b-a}{2}\int_a^b[f'(x)]^2\,dx.
$$

#### 题目描述

### 问1
设 $n,N$ 为正整数。

(i) 考察 $f(x)=e^x-\sum_{k=0}^n x^k/k!$ 的符号，证明 $x>0$ 时 $\sum_{k=0}^n x^k/k!<e^x$。

(ii) 考察 $g(x)=e^x-(x/n)e^x-\sum_{k=0}^n x^k/k!$ 的符号，证明 $x>0$ 时 $\sum_{k=0}^n x^k/k!>e^x-(x/n)e^x$。

(iii) 定义

$$
F(t)=\int_0^t\left|e^{-x}\sum_{k=0}^{2N}\frac{x^k}{k!}-1\right|\,dx.
$$

利用 (i)、(ii) 证明方程 $F(t)=N$ 在 $(N,2N)$ 内至少有一个解。

### 问2
$f$ 在 $[a,b]$ 上可微，$f'$ 连续且 $f(a)=0$。

(i) 令 $g(x)=\int_a^x|f'(t)|\,dt$，证明 $|f(x)|\le g(x)$。

(ii) 利用 (i) 及 $|f'|=g'$、$g(a)=0$，证明 $\int_a^b|ff'|\,dx\le\frac{b-a}{2}\int_a^b(f')^2\,dx$。

## **Kai**

### 問1
(i) $f^{(n)}(x)=e^x-1>0$、$f^{(j)}(0)=0$（$0\le j\le n$）である。順次積分すれば $f(x)>0$ を得る。

(ii) $0\le j\le n$ について

$$
g^{(j)}(x)=\left(1-\frac{x+j}{n}\right)e^x-\sum_{k=0}^{n-j}\frac{x^k}{k!}.
$$

特に $g^{(n)}(x)=-(x/n)e^x-1<0$、$g^{(j)}(0)=-j/n\le0$。順次積分すれば $g(x)<0$ となる。

(iii) この命題は、表示された $F$ の定義では成り立たない。(i)、(ii) に $n=2N$ を代入すると、$x>0$ において

$$
0<1-e^{-x}\sum_{k=0}^{2N}\frac{x^k}{k!}<\frac{x}{2N}.
$$

よって $0<t\le2N$ ならば

$$
F(t)<\int_0^t\frac{x}{2N}\,dx=\frac{t^2}{4N}\le N.
$$

したがって、区間 $(N,2N)$ に $F(t)=N$ の解は存在しない。

### 問2
(i) 微積分学の基本定理と積分の三角不等式より

$$
|f(x)|=\left|\int_a^xf'(t)\,dt\right|\le\int_a^x|f'(t)|\,dt=g(x).
$$

(ii) $g'\ge0$ とコーシー・シュワルツの不等式より

$$
\begin{aligned}
\int_a^b|ff'|\,dx
&\le\int_a^bgg'\,dx=\frac{g(b)^2}{2}\\
&=\frac12\left(\int_a^b|f'(x)|\,dx\right)^2
\le\frac{b-a}{2}\int_a^b[f'(x)]^2\,dx.
\end{aligned}
$$

