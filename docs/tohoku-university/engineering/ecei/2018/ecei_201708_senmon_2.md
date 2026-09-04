---
sidebar_label: 2017年8月実施 専門科目 問題2 通信工学
tags:
  - Tohoku-University
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Electrical-Electronic.Signal-Processing.Fourier-Conjugate-Symmetry-and-Modulation
---

# 東北大学 工学研究科 電気・情報系 2017年8月実施 専門科目 問題2 通信工学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

Fig. 2 に示す送信器を考える。周期 $T$ の周期信号

$$
g(t)=\sum_{n=-\infty}^{+\infty}g_0(t-nT)
$$

を入力する。ここで、信号 $g_0(t)$ は

$$
g_0(t)=\begin{cases}1&-\tau/2\le t\le\tau/2\text{ のとき}\\0&\text{その他}\end{cases}
$$

で与えられる。ただし、$0<\tau<T$ とする。搬送波は $\cos(2\pi f_ct)$ であり、$f_c$ は搬送波周波数で $1/T\ll f_c$ を満たす。Fig. 2 の理想低域通過フィルタ（LPF）の伝達関数 $H(f)$ は

$$
H(f)=\begin{cases}1&(|f|\le M/T)\\0&(\text{otherwise})\end{cases}
$$

で与えられる。ここで、$M$ は 0 以上の整数である。以下の問に答えよ。なお、$\delta(x)$ は単位インパルス関数を表す。

(1) 信号 $g(t)$ のフーリエ級数展開を求めよ。

(2) 信号 $g(t)$ の振幅スペクトル $G(f)$ を求めよ。

(3) フィルタ出力 $x(t)$ のフーリエ変換 $X(f)$ が、

$$
X(f)=\frac\tau T\sum_{n=-M}^M\frac{\sin(n\pi\tau/T)}{n\pi\tau/T}\delta\left(f-\frac nT\right)
$$

で与えられることを示せ。

(4) $M=1$ のとき、LPF の出力信号 $x(t)$ を求めよ。必要に応じて以下の公式を用いよ。

$$
\int_{-\infty}^{+\infty}\delta(x-a)p(x)\,dx=p(a)
$$

ここで、$p(x)$ は実関数、$a$ は実数である。

(5) $M=0$ のとき、送信器出力 $y(t)$ のフーリエ変換 $Y(f)$ を求めよ。

### 题目描述

周期为 $T$ 的矩形脉冲列为

$$
g(t)=\sum_{n\in\mathbb Z}g_0(t-nT),\qquad
g_0(t)=\begin{cases}1,&-\tau/2\le t\le\tau/2,\\0,&\text{其他},\end{cases}\quad0<\tau<T.
$$

信号先通过理想低通 $H(f)=1$（$|f|\le M/T$），其余为零，$M$ 为非负整数，输出 $x(t)$；再乘载波 $\cos(2\pi f_ct)$ 得 $y(t)$，其中 $f_c\gg1/T$。

1. 求 $g(t)$ 的 Fourier 级数。
2. 求 $g(t)$ 的频谱 $G(f)$。
3. 证明
   

$$
X(f)=\frac\tau T\sum_{n=-M}^M\frac{\sin(n\pi\tau/T)}{n\pi\tau/T}\delta\left(f-\frac nT\right).
$$

4. $M=1$ 时求 $x(t)$。
5. $M=0$ 时求 $y(t)$ 的 Fourier 变换 $Y(f)$。

## **Kai**

记 $d=\tau/T$，$\operatorname{sinc}u=\sin(\pi u)/(\pi u)$。

### (1)、(2)

Fourier 系数为

$$
c_n=\frac1T\int_{-\tau/2}^{\tau/2}e^{-i2\pi nt/T}\,dt=d\operatorname{sinc}(nd).
$$

故

$$
\boxed{g(t)=\sum_{n\in\mathbb Z}d\operatorname{sinc}(nd)e^{i2\pi nt/T}
=d+2d\sum_{n=1}^\infty\operatorname{sinc}(nd)\cos\frac{2\pi nt}{T}},
$$

跳跃点处级数取左右极限的平均值，且

$$
\boxed{G(f)=\sum_{n\in\mathbb Z}d\operatorname{sinc}(nd)\delta(f-n/T)}.
$$

幅度线谱在 $f=n/T$ 处的权重为 $|d\operatorname{sinc}(nd)|$。

### (3)

由 $X(f)=H(f)G(f)$，只留下 $|n|\le M$ 的项，恰为题示结果；$n=0$ 的比值取极限 $1$。

### (4)、(5)

$M=1$ 时

$$
\boxed{x(t)=\frac\tau T+\frac2\pi\sin\frac{\pi\tau}{T}\cos\frac{2\pi t}{T}}.
$$

$M=0$ 时 $x(t)=\tau/T$，因此

$$
\boxed{Y(f)=\frac\tau{2T}\{\delta(f-f_c)+\delta(f+f_c)\}}.
$$
