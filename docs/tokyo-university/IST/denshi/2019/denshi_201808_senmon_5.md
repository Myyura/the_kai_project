---
sidebar_label: "2018年8月実施 専門 第5問"
tags:
  - Tokyo-University
  - Electrical-Electronic.Signal-Processing.Impulse-Train-Sampling-and-Spectral-Replication
  - Electrical-Electronic.Signal-Processing.Sampling-Theorem-and-Aliasing
---

# 東京大学 情報理工学系研究科 電子情報学専攻 2018年8月実施 専門 第5問

## **Author**

[diohabara](https://github.com/diohabara/open_inshi), 祭音Myyura

## **Description**

信号 $f(t)$ が与えられたとき、$f(t)$ を時間間隔 $t_s$ で標本化することを考える。時間間隔 $t_s$ にデルタ関数 $\delta(t)$ が並ぶ信号を単位インパルス列 $\delta_s(t)$ と呼ぶ。すなわち、

$$
\delta_s(t)=\sum_{i=-\infty}^{\infty}\delta(t-it_s).
$$

この時、$f(t)$ の標本化された信号 $f_s(t)$ は、$f_s(t)=f(t)\cdot\delta_s(t)$ と表される。以下の問いに答えよ。

(1) $\delta_s(t)$ を周期 $t_s$ の周期信号と考え、フーリエ級数展開せよ。

(2) $\delta_s(t)$ のフーリエ変換 $\Delta_s(\omega)$ を求めよ。ただし $\omega_s=2\pi/t_s$ とせよ。

(3) $f(t)$ 並びに $f_s(t)$ のフーリエ変換をそれぞれ $F(\omega)$ と $F_s(\omega)$ とする。$F_s(\omega)$ を $F(\omega)$ を用いて表せ。

(4) 折り返し歪（エイリアシング）の定義を述べよ。また、(3) の結果においてどのような現象となるのか説明せよ。さらに、折り返し歪が起きないために $F(\omega)$ が満足すべき条件を $\omega_s$ を用いて述べよ。

必要に応じて以下を使ってよい。

周期 $T$ の信号 $x(t)$ のフーリエ級数展開：

$$
x(t)=\sum_{i=-\infty}^{\infty}c_i e^{j2\pi it/T},\qquad
c_i=\frac1T\int_{T_0}^{T_0+T}x(t)e^{-j2\pi it/T}\,dt.
$$

信号 $x(t)$ のフーリエ変換 $X(\omega)$：

$$
X(\omega)=\int_{-\infty}^{\infty}x(t)e^{-j\omega t}\,dt.
$$

信号 $x(t)=1$ のフーリエ変換は $2\pi\delta(\omega)$。

$x_1(t)$ と $x_2(t)$ の畳み込み：

$$
x_1(t)*x_2(t)=\int_{-\infty}^{\infty}x_1(t')x_2(t-t')\,dt'.
$$

信号 $x_1(t)$ と $x_2(t)$ のフーリエ変換をそれぞれ $X_1(\omega)$ と $X_2(\omega)$ とすると、$x_1(t)*x_2(t)$ のフーリエ変換は $X_1(\omega)X_2(\omega)$。

同様に $x_1(t)x_2(t)$ のフーリエ変換は $\dfrac1{2\pi}X_1(\omega)*X_2(\omega)$。

### 题目描述

给定信号 $f(t)$，以时间间隔 $t_s$ 对其采样。把每隔 $t_s$ 排列的狄拉克 $\delta$ 函数组成的信号称为单位冲激列 $\delta_s(t)$：

$$
\delta_s(t)=\sum_{i=-\infty}^{\infty}\delta(t-it_s).
$$

采样后的信号为

$$
f_s(t)=f(t)\delta_s(t).
$$

回答下列问题。

(1) 把 $\delta_s(t)$ 看作周期为 $t_s$ 的周期信号，求其傅里叶级数展开。

(2) 求 $\delta_s(t)$ 的傅里叶变换 $\Delta_s(\omega)$，其中 $\omega_s=2\pi/t_s$。

(3) 设 $f(t)$、$f_s(t)$ 的傅里叶变换分别为 $F(\omega)$、$F_s(\omega)$，用 $F(\omega)$ 表示 $F_s(\omega)$。

(4) 给出混叠（折叠失真）的定义，说明它在 (3) 的结果中表现为何种现象，并用 $\omega_s$ 写出为避免混叠而要求 $F(\omega)$ 满足的条件。

必要时可使用以下公式。周期为 $T$ 的信号 $x(t)$ 的傅里叶级数为

$$
\begin{aligned}
x(t)&=\sum_{i=-\infty}^{\infty}c_i e^{j2\pi it/T},\\
c_i&=\frac1T\int_{T_0}^{T_0+T}x(t)e^{-j2\pi it/T}\,\mathrm dt.
\end{aligned}
$$

信号 $x(t)$ 的傅里叶变换定义为

$$
X(\omega)=\int_{-\infty}^{\infty}x(t)e^{-j\omega t}\,\mathrm dt,
$$

且常数信号 $x(t)=1$ 的傅里叶变换为 $2\pi\delta(\omega)$。卷积定义为

$$
x_1(t)*x_2(t)=\int_{-\infty}^{\infty}x_1(t')x_2(t-t')\,\mathrm dt'.
$$

若 $x_1(t),x_2(t)$ 的傅里叶变换分别为 $X_1(\omega),X_2(\omega)$，则 $x_1*x_2$ 的傅里叶变换为 $X_1X_2$，而 $x_1x_2$ 的傅里叶变换为 $\frac1{2\pi}X_1*X_2$。

## **Kai**

### (1)

一周期 $[-t_s/2,t_s/2)$ に含まれるインパルスは $t=0$ の一つなので、

$$
c_i=\frac1{t_s}\int_{-t_s/2}^{t_s/2}\delta(t)e^{-ji\omega_s t}\,dt
=\frac1{t_s}.
$$

したがって、

$$
\boxed{\delta_s(t)=\frac1{t_s}\sum_{i=-\infty}^{\infty}e^{ji\omega_s t}}.
$$

### (2)

$e^{ji\omega_s t}$ のフーリエ変換は $2\pi\delta(\omega-i\omega_s)$ だから、

$$
\boxed{\Delta_s(\omega)=\frac{2\pi}{t_s}\sum_{i=-\infty}^{\infty}\delta(\omega-i\omega_s)
=\omega_s\sum_{i=-\infty}^{\infty}\delta(\omega-i\omega_s)}.
$$

### (3)

時間領域の積は周波数領域の畳み込みになるので、

$$
\begin{aligned}
F_s(\omega)&=\frac1{2\pi}(F*\Delta_s)(\omega)\\
&=\boxed{\frac1{t_s}\sum_{i=-\infty}^{\infty}F(\omega-i\omega_s)}.
\end{aligned}
$$

### (4)

エイリアシングとは、標本化によって異なる周波数の成分が区別できなくなり、別の周波数成分として現れる現象である。実際、$\omega$ と $\omega+k\omega_s$ は標本時刻で同じ複素指数列を与える。

(3) では、$\omega_s$ 間隔で複製されたスペクトルが重なり、加算されることに相当する。通常の低域信号でこれを防ぐ条件は

$$
\boxed{F(\omega)=0\qquad\left(|\omega|\ge\frac{\omega_s}{2}\right)}.
$$

すなわち、信号の最高角周波数を $\omega_m$ とすれば、$\omega_s>2\omega_m$ とすればよい。
