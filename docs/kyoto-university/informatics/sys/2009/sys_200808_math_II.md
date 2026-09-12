---
sidebar_label: 2008年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Integration-by-Substitution
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---

# 京都大学 情報学研究科 システム科学専攻 2008年8月実施 数学【II】

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
$f$ は $[0,1]$ 上の連続関数とする。

(i) 次の等式を示し、その結果を用いて $\int_0^\pi\frac{x\sin x}{4-\cos^2x}\,dx$ を求めよ。

$$
\int_0^\pi xf(\sin x)\,dx=\frac\pi2\int_0^\pi f(\sin x)\,dx.
$$

(ii) $n$ を自然数として、次を示せ。

$$
\lim_{n\to\infty}\int_0^1xf(|\sin(n\pi x)|)\,dx
=\frac1{2\pi}\int_0^\pi f(\sin x)\,dx.
$$

### 問2
(i) $D_1=\{(x,y):x^2+y^2<1,\ x>0,\ y>0\}$ とする。$x=r\cos\theta,y=r\sin\theta$ を用いて次を求めよ。

$$
I_1=\iint_{D_1}\frac{xy}{(x^2+y^2)^s}\,dx\,dy,\qquad s<\frac32.
$$

(ii) $a,b>0$、$D_2=\{(x,y):x^2/a^2+y^2/b^2<1,\ x>0,\ y>0\}$ とする。$x^2=a^2u(1-v),y^2=b^2uv$ を用いて次を求めよ。

$$
I_2=\iint_{D_2}\frac{xy}{\sqrt{x^2+y^2}}\,dx\,dy.
$$

#### 题目描述

### 问1
$f$ 在 $[0,1]$ 上连续。

(i) 证明 $\int_0^\pi xf(\sin x)\,dx=(\pi/2)\int_0^\pi f(\sin x)\,dx$，并求 $\int_0^\pi x\sin x/(4-\cos^2x)\,dx$。

(ii) 对正整数 $n$，证明 $\lim_{n\to\infty}\int_0^1xf(|\sin(n\pi x)|)\,dx=(2\pi)^{-1}\int_0^\pi f(\sin x)\,dx$。

### 问2
(i) 令 $D_1=\{(x,y):x^2+y^2<1,x>0,y>0\}$，用极坐标求 $I_1=\iint_{D_1}xy/(x^2+y^2)^s\,dx\,dy$，其中 $s<3/2$。

(ii) $a,b>0$，令 $D_2=\{(x,y):x^2/a^2+y^2/b^2<1,x>0,y>0\}$，通过 $x^2=a^2u(1-v),y^2=b^2uv$ 求 $I_2=\iint_{D_2}xy/\sqrt{x^2+y^2}\,dx\,dy$。

## **Kai**

### 問1
(i) 左辺を $J$ とおく。$x\mapsto\pi-x$ によって $J=\int_0^\pi(\pi-x)f(\sin x)\,dx$。元の式と加えて所望の等式を得る。したがって

$$
\int_0^\pi\frac{x\sin x}{4-\cos^2x}\,dx
=\frac\pi2\int_{-1}^1\frac{du}{4-u^2}
=\boxed{\frac\pi4\log3}.
$$

(ii) $h_n(x)=f(|\sin(n\pi x)|)$ とおくと $h_n(1-x)=h_n(x)$。よってすべての自然数 $n$ について

$$
\begin{aligned}
\int_0^1xh_n(x)\,dx
&=\frac12\int_0^1h_n(x)\,dx\\
&=\frac1{2n\pi}\int_0^{n\pi}f(|\sin u|)\,du
=\frac1{2\pi}\int_0^\pi f(\sin u)\,du.
\end{aligned}
$$

右辺は $n$ によらず、極限も同じ値である。

### 問2
(i) $0<r<1,0<\theta<\pi/2$ に変換されるから

$$
I_1=\int_0^{\pi/2}\cos\theta\sin\theta\,d\theta
\int_0^1r^{3-2s}\,dr=\boxed{\frac1{4(2-s)}}.
$$

(ii) 指定の変換で $0<u<1,0<v<1$ となる。また

$$
xy\,dx\,dy=\frac14\,d(x^2)\,d(y^2)
=\frac{a^2b^2u}{4}\,du\,dv.
$$

したがって

$$
I_2=\frac{a^2b^2}{4}\int_0^1\sqrt u\,du
\int_0^1\frac{dv}{\sqrt{a^2+(b^2-a^2)v}}
=\boxed{\frac{a^2b^2}{3(a+b)}}.
$$

最後の等式は $a\ne b$ では直接積分、$a=b$ では被積分関数が $1/a$ となることから得られる。

