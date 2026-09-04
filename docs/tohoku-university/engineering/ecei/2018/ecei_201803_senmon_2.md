---
sidebar_label: 2018年3月実施 専門科目 問題2 通信工学
tags:
  - Tohoku-University
  - Electrical-Electronic.Signal-Processing.Impulse-Train-Sampling-and-Spectral-Replication
  - Electrical-Electronic.Signal-Processing.Sampling-Theorem-and-Aliasing
  - Mathematics.Fourier-Analysis.Fourier-Series
---

# 東北大学 工学研究科 電気・情報系 2018年3月実施 専門科目 問題2 通信工学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

Fig. 2 に示す送信器を考える。送信信号として、$[-f_m,f_m]$ に帯域制限された信号 $g(t)$ を考える。また $0<f_m\ll f_c$ とする。ここで $f_c$ は搬送波周波数である。以下の問に答えよ。

(1) 信号 $g(t)$ が次の周期 $T$ のインパルス系列 $p_s(t)$ を用いて標本化される。

$$
g_s(t)=g(t)p_s(t),\qquad p_s(t)=\sum_{n=-\infty}^{+\infty}\delta(t-nT).
$$

ここで、$g_s(t)$ は標本化された信号、$\delta(t)$ は単位インパルス関数である。

(a) $p_s(t)$ のフーリエ変換を $P_s(f)$ とする。以下の式が成り立つことを示せ。

$$
P_s(f)=\frac1T\sum_{n=-\infty}^{+\infty}\delta\left(f-\frac nT\right).
$$

(b) $g(t)$、$g_s(t)$ のフーリエ変換をそれぞれ $G(f)$、$G_s(f)$ とする。以下の式が成り立つことを示せ。

$$
G_s(f)=\frac1T\sum_{n=-\infty}^{+\infty}G\left(f-\frac nT\right).
$$

必要に応じて以下の公式を用いてよい。

$$
\int_{-\infty}^{+\infty}\delta(x-a)f(x)dx=f(a).
$$

ここで、$f(x)$ は実関数、$a$ は実数である。

(c) 標本化された信号 $g_s(t)$ から元の信号 $g(t)$ を復元するために必要な標本周期 $T$ の条件を示せ。

(2) 標本化された $g_s(t)$ を量子化及び符号化することでバイナリ系列 $\{a_n\}$（$n$ は整数）を得る。両側波帯 (DSB) 変調器に入力される信号 $u_m(t)$ は、以下の式で表される。

$$
u_m(t)=\sum_{n=-\infty}^{\infty}b_nu(t-nT_b).
$$

ここで、$b_n$ は $a_n$ の値によって定まる係数で、$T_b$ は $1$ ビットあたりのパルス幅で、$u(t)$ は以下の式で与えられる単位パルス信号である。

$$
u(t)=\begin{cases}1&0\le t\le T_b\text{ のとき}\\0&\text{その他}\end{cases}
$$

送信器出力を位相シフトキーイングとする場合、$b_n$ を以下のように定める。

$$
b_n=\begin{cases}-A&a_n=0\text{ のとき}\\A&a_n=1\text{ のとき}\end{cases}
$$

このときバイナリ系列 $\{a_n\}$ を $(0,1)$ の無限繰り返し系列 $(\ldots,0,1,0,1,\ldots)$ とした場合、DSB 変調器入力信号 $u_m(t)$ のフーリエ級数を求めよ。ただし $a_0=0$ である。

### 题目描述

信号 $g(t)$ 的频谱限制在 $[-f_m,f_m]$，其中 $0<f_m\ll f_c$，$f_c$ 为载波频率。

1. 用周期冲激列 $p_s(t)=\sum_{n\in\mathbb Z}\delta(t-nT)$ 采样，得到 $g_s(t)=g(t)p_s(t)$。
   - (a) 证明 $P_s(f)=\frac1T\sum_{n\in\mathbb Z}\delta(f-n/T)$。
   - (b) 证明 $G_s(f)=\frac1T\sum_{n\in\mathbb Z}G(f-n/T)$。
   - (c) 求能从 $g_s(t)$ 恢复 $g(t)$ 的采样周期条件。
2. 采样信号经量化编码得到二进制序列 $a_n$，再转换为 DSB 调制器的输入
   

$$
u_m(t)=\sum_{n\in\mathbb Z}b_nu(t-nT_b),\qquad
   u(t)=\begin{cases}1,&0\le t\le T_b,\\0,&\text{其他},\end{cases}
$$

   其中 $b_n=-A$（$a_n=0$），$b_n=A$（$a_n=1$）。若 $a_n$ 为无限交替序列 $\ldots,0,1,0,1,\ldots$，且 $a_0=0$，求 $u_m(t)$ 的 Fourier 级数。

## **Kai**

### (1)

**(a)** 周期冲激列的每个 Fourier 系数为 $1/T$，故在分布意义下

$$
p_s(t)=\frac1T\sum_{n\in\mathbb Z}e^{i2\pi nt/T}
\quad\Longrightarrow\quad
\boxed{P_s(f)=\frac1T\sum_{n\in\mathbb Z}\delta(f-n/T)}.
$$

**(b)** 由时域相乘对应频域卷积，

$$
\boxed{G_s(f)=G*P_s(f)=\frac1T\sum_{n\in\mathbb Z}G(f-n/T)}.
$$

**(c)** 频谱副本不重叠要求 $1/T>2f_m$，即

$$
\boxed{0<T<\frac1{2f_m}}.
$$

此时用通带增益 $T$、截止频率位于 $f_m$ 与 $1/T-f_m$ 之间的理想低通即可恢复。若已排除带宽端点的非零谱线，可允许临界等号。

### (2)

$u_m$ 的周期为 $2T_b$，在 $(0,T_b)$ 为 $-A$，在 $(-T_b,0)$ 为 $A$，故为奇函数，只含正弦项。第 $n$ 个正弦系数为

$$
\beta_n=\frac2{T_b}\int_0^{T_b}(-A)\sin\frac{n\pi t}{T_b}\,dt
=-\frac{2A}{n\pi}\bigl(1-(-1)^n\bigr).
$$

因此

$$
\boxed{u_m(t)=-\frac{4A}{\pi}\sum_{k=0}^\infty\frac1{2k+1}
\sin\frac{(2k+1)\pi t}{T_b}}.
$$

跳跃点处 Fourier 级数取左右极限均值 $0$。
