---
sidebar_label: "2017年8月実施 数学B 第2問"
tags:
  - Tohoku-University
  - Mathematics.Differential-Equations.Laplace-Transform
  - Mathematics.Differential-Equations.Volterra-Integral-Equation
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 数学B 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

ラプラス変換を $\mathcal L[f(t)]=F(s)=\int_0^\infty f(t)e^{-st}\,dt$ と定義する。

1. 正の整数 $n$ について $f$ の $n$ 階微分のラプラス変換を導け。
2. (1) を用いて $\sin at,\cos at$（$a>0$）のラプラス変換を求めよ。
3. $G(s)=\mathcal L[g(t)]$ とするとき、$\mathcal L[\int_0^t f(t-\tau)g(\tau)\,d\tau]=F(s)G(s)$ を導け。
4. ラプラス変換により次の積分方程式を解け。

$$
x(t)-\int_0^t\sin 2(t-\tau)x(\tau)\,d\tau=\sin2t+\cos2t.
$$

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

按 $\mathcal L[f]=\int_0^\infty f(t)e^{-st}dt$ 定义拉普拉斯变换。（1）推导 $n$ 阶导数的变换公式，$n$ 为正整数。（2）利用该公式求 $\sin at,\cos at$（$a>0$）的变换。（3）证明卷积定理。（4）用拉普拉斯变换求解 $x(t)-\int_0^t\sin2(t-\tau)x(\tau)d\tau=\sin2t+\cos2t$。

## **Kai**

### (1)

必要な微分・積分が存在し、$s$ の実部を十分大きく取るものとする。部分積分により

$$
\mathcal L[f']=[f(t)e^{-st}]_0^\infty+sF(s)=sF(s)-f(0).
$$

これを繰り返して

$$
\boxed{\mathcal L[f^{(n)}]=s^nF(s)-\sum_{k=0}^{n-1}s^{n-1-k}f^{(k)}(0)}.
$$

各初期値は右極限で解釈する。

### (2)

$f=\sin at$ は $f''=-a^2f,f(0)=0,f'(0)=a$ を満たすから $s^2F-a=-a^2F$。同様に $g=\cos at$ について $s^2G-s=-a^2G$。従って

$$
\boxed{\mathcal L[\sin at]=\frac a{s^2+a^2},\qquad
\mathcal L[\cos at]=\frac s{s^2+a^2}}
\quad(\operatorname{Re}s>0).
$$

### (3)

絶対収束する範囲で積分順序を交換し、$u=t-\tau$ と置くと

$$
\begin{aligned}
\mathcal L[f*g]
&=\int_0^\infty\int_0^t f(t-\tau)g(\tau)e^{-st}\,d\tau\,dt\\
&=\int_0^\infty g(\tau)\int_\tau^\infty f(t-\tau)e^{-st}\,dt\,d\tau\\
&=\int_0^\infty g(\tau)e^{-s\tau}\,d\tau
\int_0^\infty f(u)e^{-su}\,du
=\boxed{F(s)G(s)}.
\end{aligned}
$$

### (4)

$X(s)=\mathcal L[x(t)]$ とすれば

$$
X-\frac2{s^2+4}X=\frac{s+2}{s^2+4},\qquad
X=\frac{s+2}{s^2+2}.
$$

逆変換して

$$
\boxed{x(t)=\cos(\sqrt2t)+\sqrt2\sin(\sqrt2t)\quad(t\ge0)}.
$$

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 8ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
