---
sidebar_label: '2025年8月実施 数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Fourier-Analysis.Fourier-Transform
  - Mathematics.Fourier-Analysis.Convolution
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Mathematics.Fourier-Analysis.Infinite-Series-from-Fourier-Series
---

# 東京大学 工学系研究科 2025年8月実施 数学 第5問

## **Author**
GPT-5.6 Sol

## **Description**

### I

Fourier transform を

$$
F(k)=\int_{-\infty}^{\infty}f(x)e^{-ikx}\,dx
$$

と定義する。$a,b>0$ として、次の関数の Fourier transform を求めよ。

1.
   $$
   f(x)=\begin{cases}
   \dfrac1{2a},&|x|\le a,\\
   0,&|x|>a.
   \end{cases}
   $$
2. $f(x)=e^{-a|x|}\cos bx$。
3.
   $$
   f(x)=\int_{-\infty}^{\infty}e^{-y^2-|x-y|}\,dy.
   $$

### II

$2\pi$ 周期関数 $g$ の Fourier 級数を

$$
\widetilde g(x)=\frac{a_0}{2}
+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)
$$

とする。

1. $-\pi\le x<\pi$ で
   $$
   g(x)=\begin{cases}
   0,&-\pi\le x<0,\\
   1,&0\le x<\pi
   \end{cases}
   $$
   と定義した関数の係数を求めよ。
2. $g(x)=\cos(x/2)$ の係数を求めよ。
3. $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{2n-1}$ の収束値を求めよ。

## **Kai**

### I.1

$$
\begin{aligned}
F(k)
&=\frac1{2a}\int_{-a}^{a}e^{-ikx}\,dx\\
&=\frac{\sin ak}{ak}.
\end{aligned}
$$

$k=0$ では極限を取れば $F(0)=1$ なので、

$$
\boxed{
F(k)=\begin{cases}
\dfrac{\sin ak}{ak},&k\ne0,\\
1,&k=0
\end{cases}}
$$

である。

### I.2

基本変換

$$
\int_{-\infty}^{\infty}e^{-a|x|}e^{-ikx}\,dx
=\frac{2a}{a^2+k^2}
$$

と

$$
\cos bx=\frac{e^{ibx}+e^{-ibx}}2
$$

を用いる。周波数移動により、

$$
\boxed{
F(k)=\frac{a}{a^2+(k-b)^2}
+\frac{a}{a^2+(k+b)^2}
}
$$

となる。

### I.3

$$
p(x)=e^{-x^2},\qquad q(x)=e^{-|x|}
$$

とおくと、与えられた $f$ は畳み込み $p*q$ である。それぞれの変換は

$$
\widehat p(k)=\sqrt\pi e^{-k^2/4},
\qquad
\widehat q(k)=\frac{2}{1+k^2}.
$$

畳み込み定理より、

$$
\boxed{F(k)=\frac{2\sqrt\pi e^{-k^2/4}}{1+k^2}}
$$

を得る。

### II.1

定義から

$$
a_0=\frac1\pi\int_0^\pi1\,dx=1,
$$

$$
a_n=\frac1\pi\int_0^\pi\cos nx\,dx=0,
$$

$$
b_n=\frac1\pi\int_0^\pi\sin nx\,dx
=\frac{1-(-1)^n}{\pi n}.
$$

したがって、

$$
\boxed{a_0=1,\qquad a_n=0,\qquad
b_n=\frac{1-(-1)^n}{\pi n}}
$$

である。特に $b_n$ は奇数 $n$ で $2/(\pi n)$、偶数 $n$ で $0$ となる。

### II.2

$g$ は偶関数なので $b_n=0$ である。また、

$$
a_0=\frac1\pi\int_{-\pi}^{\pi}\cos\frac{x}{2}\,dx
=\frac4\pi.
$$

$n\ge1$ について積和公式を用いると、

$$
\begin{aligned}
a_n
&=\frac2\pi\int_0^\pi\cos\frac{x}{2}\cos nx\,dx\\
&=\frac{4(-1)^{n+1}}{\pi(4n^2-1)}.
\end{aligned}
$$

よって、

$$
\boxed{a_0=\frac4\pi,\qquad
a_n=\frac{4(-1)^{n+1}}{\pi(4n^2-1)},\qquad b_n=0}
$$

である。

### II.3

II.1 で得た Fourier 級数は、連続点 $x=\pi/2$ で $g(\pi/2)=1$ に収束する。したがって、

$$
1=\frac12+\frac2\pi
\sum_{m=0}^{\infty}\frac{\sin((2m+1)\pi/2)}{2m+1}.
$$

$\sin((2m+1)\pi/2)=(-1)^m$ なので、

$$
\boxed{
\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{2n-1}=\frac\pi4
}
$$

を得る。

## **Reference**

- [東京大学大学院工学系研究科 2026年度大学院入学試験問題 数学](https://www.t.u-tokyo.ac.jp/hubfs/admission/2026/M_J_E_2026.pdf)
