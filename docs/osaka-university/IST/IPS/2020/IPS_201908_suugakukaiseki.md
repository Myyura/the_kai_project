---
sidebar_label: "2019年8月実施 情報数理学 数学解析"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations.Systems-of-ODEs
  - Mathematics.Fourier-Analysis.Convolution
  - Mathematics.Complex-Analysis.Residue-Theorem
---
# 大阪大学 情報科学研究科 情報数理学専攻 2019年8月実施 情報数理学 数学解析

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 1

初期値問題

$$
\frac{dx_0}{dt}=-x_0,\quad x_0(0)=1,\qquad
\frac{dx_k}{dt}=-x_k+x_{k-1},\quad x_k(0)=0\quad(k\ge1)
$$

の解 $x_k(t)$ を求めよ。

### 2

(1) $a>0$ に対し $f(x)=e^{-a|x|}$ のフーリエ変換 $\hat f(\omega)$ を求めよ。

(2) $\phi(\omega)=1/\{\pi(1+\omega^2)\}$ とし、$\phi_1=\phi$、

$$
\phi_n(\omega)=(\phi_{n-1}*\phi)(\omega)=\int_{-\infty}^{\infty}\phi_{n-1}(\omega-s)\phi(s)\,ds
$$

と定める。$\phi_n$ を求めよ。

### 3

複素積分 $I=\displaystyle\oint_{|z|=1}\frac{dz}{|z-2|^2}$ を求めよ。

## **Kai**

### 1

$x_0(t)=e^{-t}$。$k\ge1$ に対して積分因子 $e^t$ を用いると

$$
\frac d{dt}(e^tx_k)=e^tx_{k-1},\qquad
x_k(t)=e^{-t}\int_0^t e^s x_{k-1}(s)\,ds.
$$

これを帰納的に計算すれば

$$
\boxed{x_k(t)=\frac{t^k}{k!}e^{-t}\qquad(k=0,1,2,\ldots)}.
$$

### 2

(1) $\hat f(\omega)=\int_{\mathbb R}f(x)e^{-i\omega x}\,dx$ とする。

$$
\hat f(\omega)=\int_{-\infty}^0e^{(a-i\omega)x}\,dx+
\int_0^\infty e^{-(a+i\omega)x}\,dx
=\boxed{\frac{2a}{a^2+\omega^2}}.
$$

(2) (1)と逆変換より、$\phi$ のフーリエ変換は $e^{-|t|}$ である。畳み込み定理から $\widehat{\phi_n}(t)=e^{-n|t|}$。逆変換すると

$$
\boxed{\phi_n(\omega)=\frac{n}{\pi(n^2+\omega^2)}}.
$$

### 3

円周を正向きに取る。$|z|=1$ 上では $\bar z=1/z$ なので

$$
\frac1{|z-2|^2}=\frac1{(z-2)(\bar z-2)}=\frac{z}{(z-2)(1-2z)}.
$$

右辺の単位円内の極は $z=1/2$ のみで、留数は

$$
\frac{1/2}{(-3/2)(-2)}=\frac16.
$$

従って留数定理より $\boxed{I=\pi i/3}$。
