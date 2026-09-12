---
sidebar_label: 2007年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Intermediate-Value-Theorem
  - Mathematics.Linear-Algebra.Unitary-Discrete-Fourier-Transform-Matrix
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Improper-Integral
---

# 京都大学 情報学研究科 システム科学専攻 2007年8月実施 数学【II】

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
(i) 開区間 $K\subset\mathbb R$ 上で微分可能な実関数 $f$ が常に $f'(x)>f(x)$ を満たすとき、$g(x)=e^{-x}f(x)$ は $K$ で単調増加することを示せ。

(ii) 同じ条件下で $f(x)=0$ の解は $K$ 内に高々一つであることを示せ。

(iii) $0<a<1$、$n$ を自然数とする。方程式 $ae^x=\sum_{k=0}^n x^k/k!$ は $(0,\infty)$ に解をちょうど一つもつことを示せ。

### 問2
$n$ を自然数、$\omega=e^{2\pi i/n}$ とし、$A=(\omega^{(j-1)(k-1)})_{j,k=1}^n$ とする。

(i) 各成分の共役をとった行列を $\bar A$ とするとき、$A\bar A=nI$ を示せ。

(ii) 次の行列式の表示を使い、$n^n=\prod_{1\le j<k\le n}(2\sin((k-j)\pi/n))^2$ を示せ。

$$
\det A=\prod_{1\le j<k\le n}\left(2i\omega^{(j+k)/2-1}\sin\frac{(k-j)\pi}{n}\right).
$$

(iii) (ii) の結果を使い、$\iint_{0\le x\le y\le\pi}\log\sin(y-x)\,dx\,dy$ を求めよ。

#### 题目描述

### 问1
(i) 开区间 $K$ 上的可微实函数 $f$ 满足 $f'>f$，证明 $e^{-x}f(x)$ 严格递增。

(ii) 证明相同条件下 $f(x)=0$ 在 $K$ 内至多有一个解。

(iii) $0<a<1$，$n$ 为正整数。证明 $ae^x=\sum_{k=0}^n x^k/k!$ 在 $(0,\infty)$ 恰有一个解。

### 问2
令 $\omega=e^{2\pi i/n}$，$A_{jk}=\omega^{(j-1)(k-1)}$。

(i) $\bar A$ 表示逐元素取共轭，证明 $A\bar A=nI$。

(ii) 利用 $\det A=\prod_{1\le j<k\le n}[2i\omega^{(j+k)/2-1}\sin((k-j)\pi/n)]$，证明 $n^n=\prod_{1\le j<k\le n}[2\sin((k-j)\pi/n)]^2$。

(iii) 利用 (ii) 计算 $\iint_{0\le x\le y\le\pi}\log\sin(y-x)\,dx\,dy$。

## **Kai**

### 問1
(i) $g'(x)=e^{-x}(f'(x)-f(x))>0$。

(ii) $e^{-x}>0$ より $f$ と $g$ の零点は一致する。厳密単調増加な $g$ の零点は高々一つ。

(iii) $f(x)=ae^x-\sum_{k=0}^n x^k/k!$ とおくと $f'(x)-f(x)=x^n/n!>0$。よって正の零点は高々一つ。一方、$f(0)=a-1<0$、$\lim_{x\to\infty}f(x)=\infty$ なので、中間値の定理より正の零点が存在する。

### 問2
(i) 等比数列の和より

$$
(A\bar A)_{jk}=\sum_{\ell=0}^{n-1}\omega^{(j-k)\ell}
=\begin{cases}n&j=k,\\0&j\ne k.\end{cases}
$$

(ii) (i) の行列式をとれば $|\det A|^2=n^n$。与えられた積表示の各因子の絶対値が $2\sin((k-j)\pi/n)$ であることから従う。

(iii) (ii) の両辺の対数をとり、$d=k-j$ ごとにまとめると

$$
\frac{\log n}{2n}
=\frac1n\sum_{d=1}^{n-1}\left(1-\frac dn\right)
\log\left(2\sin\frac{\pi d}{n}\right).
$$

$n\to\infty$ とすれば右辺は $\int_0^1(1-u)\log(2\sin\pi u)\,du$ に収束し、その値は $0$。端点付近では $\sin\pi u\asymp u$、$\sin\pi u\asymp1-u$ であり、幅 $\delta$ の区間の積分と和は $O(\delta|\log\delta|)+O((\log n)/n)$ で抑えられるため、この極限は正当化される。

$u=(y-x)/\pi$ と変数変換して

$$
\begin{aligned}
\iint_{0\le x\le y\le\pi}\log\sin(y-x)\,dx\,dy
&=\pi^2\int_0^1(1-u)\log\sin(\pi u)\,du\\
&=\boxed{-\frac{\pi^2}{2}\log2}.
\end{aligned}
$$

