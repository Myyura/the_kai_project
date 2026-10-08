---
sidebar_label: "2018年8月実施 専門科目 [8]"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.Energy-Estimates-for-Parabolic-Equations
---

# 京都大学 理学研究科 数学・数理解析専攻 2018年8月実施 専門科目 [8]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

区間 $[0,1]$ 上の二乗可積分関数 $g$ に関して

$$
\|g\|=\left(\int_0^1|g(x)|^2\,dx\right)^{1/2}
$$

とする。$C^2$ 級関数 $u:[0,\infty)\times[0,1]\to\mathbb R$ は

$$
\begin{cases}
\displaystyle\frac{\partial u}{\partial t}(t,x)
=\frac{\partial^2u}{\partial x^2}(t,x),
&t>0,\ x\in(0,1),\\
u(t,0)=u(t,1)=0,&t>0
\end{cases}
$$

を満たすとする。$f(x)=u(0,x)$ と置くとき、以下の問に答えよ。

(1) 次の $V(t)$ は $t\ge0$ によらない定数であることを示せ。

$$
V(t)=\|u(t,\cdot)\|^2
+2\int_0^t\left\|\frac{\partial u}{\partial x}(s,\cdot)\right\|^2\,ds.
$$

(2) $t>0$ を固定し、$h(x)=u(t,x)$ と置く。任意の $x\in[0,1]$ について次の不等式を示せ。

$$
|h(x)|^2\le2\|h\|\left\|\frac{dh}{dx}\right\|.
$$

(3) 次の不等式が成り立つことを示せ。

$$
\int_0^\infty\left(\sup_{x\in[0,1]}|u(t,x)|^4\right)\,dt
\le2\|f\|^4.
$$

#### 题目描述

记 $\|g\|=(\int_0^1|g(x)|^2\,dx)^{1/2}$。设实值 $C^2$ 函数 $u:[0,\infty)\times[0,1]\to\mathbb R$ 满足热方程与齐次 Dirichlet 边界条件：

$$
u_t=u_{xx}\quad(t>0,\ 0<x<1),\qquad
u(t,0)=u(t,1)=0\quad(t>0).
$$

令 $f(x)=u(0,x)$。

(1) 证明

$$
V(t)=\|u(t,\cdot)\|^2+2\int_0^t\|u_x(s,\cdot)\|^2\,ds
$$

与 $t\ge0$ 无关。

(2) 固定 $t>0$，记 $h(x)=u(t,x)$，证明对任意 $x\in[0,1]$，

$$
|h(x)|^2\le2\|h\|\|h'\|.
$$

(3) 证明

$$
\int_0^\infty\sup_{x\in[0,1]}|u(t,x)|^4\,dt\le2\|f\|^4.
$$

## **Kai**

### (1)

$E(t)=\|u(t,\cdot)\|^2$、$D(t)=\|u_x(t,\cdot)\|^2$ と置く。$t>0$ で、熱方程式と境界条件を用いて部分積分すると

$$
\begin{aligned}
E'(t)
&=2\int_0^1u(t,x)u_t(t,x)\,dx\\
&=2\int_0^1u(t,x)u_{xx}(t,x)\,dx\\
&=2[u(t,x)u_x(t,x)]_0^1-2\int_0^1u_x(t,x)^2\,dx\\
&=-2D(t).
\end{aligned}
$$

よって $V'(t)=E'(t)+2D(t)=0$ である。$V$ は $t=0$ でも連続なので、

$$
\boxed{V(t)=V(0)=\|f\|^2\qquad(t\ge0)}.
$$

特に $E(t)\le\|f\|^2$ であり、

$$
\int_0^\infty D(t)\,dt\le\frac12\|f\|^2.
$$

### (2)

$h(0)=0$ であるから、Cauchy–Schwarz の不等式により

$$
|h(x)|^2
=2\int_0^x h(s)h'(s)\,ds
\le2\int_0^1|h(s)h'(s)|\,ds
\le\boxed{2\|h\|\|h'\|}.
$$

### (3)

(2) を二乗し、$x$ に関する上限を取ると

$$
\sup_{x\in[0,1]}|u(t,x)|^4
\le4E(t)D(t)
\le4\|f\|^2D(t).
$$

これを $t$ について積分し、(1) の評価を使えば

$$
\int_0^\infty\sup_{x\in[0,1]}|u(t,x)|^4\,dt
\le4\|f\|^2\int_0^\infty D(t)\,dt
\le\boxed{2\|f\|^4}.
$$

## **Reference**

- [京都大学公式問題（2019年度・専門科目、PDF 4ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2018math_senmon.pdf)
- [照合用参考解答（2019年度・専門科目 問題8、PDF 7–9ページ）](https://drive.google.com/file/d/1MAZDX0zU8Pe3RWo9Nh835ZeyUE-uAMJN/view)
