---
sidebar_label: 2014年3月実施 専門科目 問題7 物理専門2
tags:
  - Tohoku-University
  - Mathematics.Complex-Analysis.Fresnel-Integral-by-Contour-Rotation
---

# 東北大学 工学研究科 電気・情報系 2014年3月実施 専門科目 問題7 物理専門2

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

複素変数 $z$ の関数 $f(z)=\exp(iz^2)$ を考える。$i$ は虚数単位である。また，$C_1,C_2,C_3$ は，以下のように定義された積分路である（Fig. 7）。

$$
\begin{aligned}
C_1&:z=t&&(0\le t\le R),\\
C_2&:z=Re^{it}&&(0\le t\le\pi/4),\\
C_3&:z=e^{i\pi/4}(R-t)&&(0\le t\le R).
\end{aligned}
$$

以下の問に答えよ。

(1) 複素積分 $\int_{C_1+C_2+C_3}f(z)\,dz$ を求めよ。

(2) 任意の実数 $x$ に対して $\int_0^{+\infty}\exp(-x^2)\,dx=\sqrt\pi/2$ であることを利用して，複素積分 $\lim_{R\to+\infty}\int_{C_3}f(z)\,dz$ を求めよ。

(3) 複素変数 $z$ の関数 $g(z)$ が滑らかな曲線 $C$ 上で定義された連続関数であるとき，$|\int_Cg(z)\,dz|\le\int_C|g(z)|\,|dz|$ が成り立つ。この不等式を利用して，複素積分 $\lim_{R\to+\infty}\int_{C_2}f(z)\,dz$ を求めよ。ただし，$0\le\theta\le\pi/2$ を満たす実数 $\theta$ に対して成り立つ不等式 $2\theta/\pi\le\sin\theta\le\theta$ を用いてよい。

(4) 実定積分 $\int_0^{+\infty}\sin(x^2)\,dx$ および $\int_0^{+\infty}\cos(x^2)\,dx$ を求めよ。

### 题目描述

令 $f(z)=e^{iz^2}$，积分路径为

$$
C_1:z=t\ (0\le t\le R),\quad C_2:z=Re^{it}\ (0\le t\le\pi/4),\quad
C_3:z=e^{i\pi/4}(R-t)\ (0\le t\le R).
$$

三段依次构成第一象限中夹角 $\pi/4$ 的扇形边界，方向为 $0\to R\to Re^{i\pi/4}\to0$。

1. 求 $\int_{C_1+C_2+C_3}f(z)\,dz$。
2. 利用 $\int_0^\infty e^{-x^2}\,dx=\sqrt\pi/2$，求 $\lim_{R\to\infty}\int_{C_3}f(z)\,dz$。
3. 利用 $|\int_Cg(z)\,dz|\le\int_C|g(z)|\,|dz|$ 及 $2\theta/\pi\le\sin\theta\le\theta$（$0\le\theta\le\pi/2$），求 $\lim_{R\to\infty}\int_{C_2}f(z)\,dz$。
4. 求 $\int_0^\infty\sin(x^2)\,dx$ 和 $\int_0^\infty\cos(x^2)\,dx$。

## **Kai**

### (1)

$f$ 为整函数，由 Cauchy 积分定理，$\boxed{\int_{C_1+C_2+C_3}f(z)\,dz=0}$。

### (2)

沿 $C_3$ 令 $z=e^{i\pi/4}u$，$u:R\to0$，则

$$
\int_{C_3}f(z)\,dz=-e^{i\pi/4}\int_0^R e^{-u^2}\,du
\longrightarrow\boxed{-\frac{\sqrt\pi}{2}e^{i\pi/4}}.
$$

### (3)

$$
\left|\int_{C_2}f(z)\,dz\right|
\le R\int_0^{\pi/4}e^{-R^2\sin2t}\,dt
\le R\int_0^{\pi/4}e^{-4R^2t/\pi}\,dt
=\frac\pi{4R}(1-e^{-R^2})\longrightarrow0.
$$

故所求极限为 $\boxed0$。

### (4)

由前三问，

$$
\int_0^\infty e^{ix^2}\,dx=\frac{\sqrt\pi}{2}e^{i\pi/4}.
$$

取实部、虚部，得

$$
\boxed{\int_0^\infty\sin(x^2)\,dx=\int_0^\infty\cos(x^2)\,dx=\sqrt{\frac\pi8}}.
$$
