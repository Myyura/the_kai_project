---
sidebar_label: '2012年8月実施 数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Fourier-Analysis.Fourier-Transform
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Mathematics.Linear-Algebra.Unitary-Discrete-Fourier-Transform-Matrix
---

# 東京大学 工学系研究科 2012年8月実施 数学 第5問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

フーリエ変換を $F(\omega)=\int_{-\infty}^\infty f(t)e^{-i\omega t}\,dt$、逆変換を
$f(t)=(2\pi)^{-1}\int_{-\infty}^\infty F(\omega)e^{i\omega t}\,d\omega$ とする。
周期 $t_0$ の関数 $g$ は $c_n=t_0^{-1}\int_0^{t_0}g(t)e^{-in\omega_0t}\,dt$、$\omega_0=2\pi/t_0$ により $g(t)=\sum_{n\in\mathbb Z}c_ne^{in\omega_0t}$ と展開される。

I. $T_0>0$、$\delta$ をデルタ関数とし、$f_d(t)=\sum_{k\in\mathbb Z}f(kT_0)\delta(t-kT_0)$ と定める。$f_d$ のフーリエ変換 $F_d$ を求めよ。

II. $F_d$ が $\omega$ に関して周期的であることを示し、任意の $f$ に共通の周期を求めよ。

III. $f$ が $KT_0$ を周期とする場合、$f_d$ のフーリエ係数 $d_n$ を求めよ。$K$ は正の整数で、積分区間を $[-\varepsilon,KT_0-\varepsilon]$（$\varepsilon>0$ は十分小さい）としてよい。
また $d_n$ が $n$ に関して周期的であることを示し、共通周期 $L$ を求めよ。

IV. $K=6$、$a=e^{-2\pi i/6}$ とする。$\boldsymbol d=(d_0,\ldots,d_{L-1})^T$、$\boldsymbol f=(f(0),\ldots,f(5T_0))^T$ に対し $\boldsymbol d=W\boldsymbol f$ を満たす行列 $W$ を求め、各成分を $a^m$（$m=0,1,2$）と $T_0$ で表せ。

#### 题目描述

采用 $F(\omega)=\int_{-\infty}^\infty f(t)e^{-i\omega t}\,dt$、
$f(t)=(2\pi)^{-1}\int_{-\infty}^\infty F(\omega)e^{i\omega t}\,d\omega$。
周期 $t_0$ 的函数 $g$ 的 Fourier 系数为
$c_n=t_0^{-1}\int_0^{t_0}g(t)e^{-in\omega_0t}\,dt$，$\omega_0=2\pi/t_0$，
且 $g(t)=\sum_{n\in\mathbb Z}c_ne^{in\omega_0t}$。

I. 设 $T_0>0$、$\delta$ 为 Dirac delta，令
$f_d(t)=\sum_{k\in\mathbb Z}f(kT_0)\delta(t-kT_0)$。求其 Fourier 变换 $F_d$。

II. 证明 $F_d$ 关于 $\omega$ 周期，并求对任意 $f$ 都适用的共同周期。

III. 若 $f$ 周期为 $KT_0$（$K$ 为正整数），把 $f_d$ 也视作周期 $KT_0$ 的函数，求其 Fourier 系数 $d_n$。
积分可取 $[-\varepsilon,KT_0-\varepsilon]$，$\varepsilon>0$ 足够小。证明 $d_n$ 关于整数 $n$ 周期，并求共同周期 $L$。

IV. 取 $K=6$，令 $a=e^{-2\pi i/6}$。写出使 $(d_0,\ldots,d_{L-1})^T=W(f(0),\ldots,f(5T_0))^T$ 的矩阵 $W$，用 $a^m$（$m=0,1,2$）和 $T_0$ 表示各元素。

## **Kai**

### I–II

delta 関数の抽出性から、

$$
\boxed{F_d(\omega)=\sum_{k\in\mathbb Z}f(kT_0)e^{-i\omega kT_0}}.
$$

$e^{-i(\omega+2\pi/T_0)kT_0}=e^{-i\omega kT_0}$ なので、共通周期は
$\boxed{2\pi/T_0}$ である。標本値のうち $f(T_0)$ だけが非零の場合を考えれば、これが全ての $f$ に共通する最小正周期と分かる。

### III

一周期の積分には $k=0,\ldots,K-1$ のパルスが一つずつ含まれるので、

$$
\boxed{d_n=\frac1{KT_0}\sum_{k=0}^{K-1}f(kT_0)e^{-2\pi ink/K}}.
$$

$d_{n+K}=d_n$ より、共通の整数周期は $\boxed{L=K}$。個々のデータでは周期が短くなることもある。
パルスを含む展開は超関数の意味で解釈する。

### IV

$W_{nk}=a^{nk}/(6T_0)$、$0\le n,k\le5$ であり、$a^3=-1$ を用いて、

$$
\boxed{W=\frac1{6T_0}\begin{pmatrix}
1&1&1&1&1&1\\
1&a&a^2&-1&-a&-a^2\\
1&a^2&-a&1&a^2&-a\\
1&-1&1&-1&1&-1\\
1&-a&a^2&1&-a&a^2\\
1&-a^2&-a&-1&a^2&a
\end{pmatrix}}.
$$

