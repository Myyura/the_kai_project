---
sidebar_label: "2018年8月実施 情報数理学 数学解析"
tags:
  - Osaka-University
  - Mathematics.Complex-Analysis
  - Mathematics.Differential-Equations
  - Mathematics.Fourier-Analysis.Fourier-Series
---
# 大阪大学 情報科学研究科 情報数理学専攻 2018年8月実施 情報数理学 数学解析

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 1

$n\ge2$、$\omega^n=1$、$\omega^k\ne1$（$1\le k<n$）とする。

(1) $z^n-1=(z-1)(z-\omega)\cdots(z-\omega^{n-1})$ を示せ。

(2) $\prod_{k=1}^{n-1}(z-\omega^k)=\sum_{k=0}^{n-1}z^k$ を示せ。

(3) $\prod_{k=1}^{n-1}(1-\omega^k)=n$ を用いて $\prod_{k=1}^{n-1}\sin(k\pi/n)=n/2^{n-1}$ を示せ。

### 2

微分方程式 $\ddot x+2\dot x\tan t-x=0$ について、(1) $x_0=\sin t$ が解であることを示し、(2) 一般解を求めよ。

### 3

$2\pi$ 周期関数の複素フーリエ係数を $c_n$ とし、$\lim_{n\to\infty}n^kc_n=0$ となる最大の整数を $k$ とする。次の3関数を $k$ の小さい順に並べ、理由を述べよ。

$$
f(x)=x,\qquad g(x)=|x|\qquad(-\pi<x\le\pi),
$$

$$
h(x)=\begin{cases}
-\dfrac2\pi(x+\pi)^2+\pi&-\pi<x\le-\pi/2,\\
\dfrac2\pi x^2&-\pi/2<x\le\pi/2,\\
-\dfrac2\pi(x-\pi)^2+\pi&\pi/2<x\le\pi.
\end{cases}
$$

## **Kai**

### 1

(1) $1,\omega,\ldots,\omega^{n-1}$ は互いに異なる $z^n-1$ の根である。両辺は同じ根を持つモニックな $n$ 次多項式なので等しい。

(2) $z^n-1=(z-1)\sum_{k=0}^{n-1}z^k$ と(1)を比較すれば、多項式の恒等式として結論を得る。

(3) $\omega=e^{2\pi i/n}$ を選ぶと $|1-\omega^k|=2\sin(k\pi/n)$。各正弦は正なので、(2)に $z=1$ を代入した式の絶対値を取れば

$$
n=\prod_{k=1}^{n-1}|1-\omega^k|=2^{n-1}\prod_{k=1}^{n-1}\sin\frac{k\pi}{n}.
$$

### 2

(1) $-\sin t+2\cos t\tan t-\sin t=0$ なので、確かに解である。

(2) 階数低下法より、第2の解は定数倍を除いて

$$
\sin t\int\frac{e^{-\int2\tan t\,dt}}{\sin^2t}\,dt
=\sin t\int\cot^2t\,dt=-\cos t-t\sin t.
$$

したがって、$\cos t\ne0$ の各区間での一般解は

$$
\boxed{x(t)=C_1\sin t+C_2(\cos t+t\sin t)}.
$$

2解のロンスキー行列式は $-\cos^2t\ne0$ である。

### 3

$c_n=(2\pi)^{-1}\int_{-\pi}^{\pi}F(x)e^{-inx}\,dx$ とする。$n\ne0$ に対し、直接積分すると

$$
c_n(f)=\frac{i(-1)^n}{n},\qquad
c_n(g)=\frac{(-1)^n-1}{\pi n^2},\qquad
c_n(h)=-\frac{8\sin(n\pi/2)}{\pi^2n^3}.
$$

よって $n^0c_n(f)$, $nc_n(g)$, $n^2c_n(h)$ は0に収束する。一方、それぞれもう1乗すると、非零値を繰り返す部分列があるため0には収束しない。したがって

$$
\boxed{k(f)=0<k(g)=1<k(h)=2}.
$$
