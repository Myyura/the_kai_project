---
sidebar_label: "2017年8月実施 専門科目 [8]（熱方程式と整関数への拡張）"
tags:
  - Kyoto-University
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Mathematics.Complex-Analysis.Analytic-Continuation
---

# 京都大学 理学研究科 数学・数理解析専攻 2017年8月実施 専門科目 問題8

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$C^2$ 級関数 $u:\mathbb R\times[0,\infty)\to\mathbb R$ は

$$
\begin{aligned}
\frac{\partial u}{\partial t}(x,t)-\frac{\partial^2u}{\partial x^2}(x,t)&=0,
&& (x,t)\in\mathbb R\times(0,\infty),\\
u(x+2\pi,t)&=u(x,t),
&& (x,t)\in\mathbb R\times[0,\infty)
\end{aligned}
$$

を満たすとする。この $u$ に対して次の命題(P)を考える。

(P) 任意の $t>0$ に対し，$x$ の関数 $u(x,t)$ は $\mathbb C$ 上の正則関数に拡張できる。

このとき，以下の問に答えよ。

(1) $u(x,0)=\sin x$ のとき，(P)が成り立つことを示せ。

(2) 一般に，(P)が成り立つことを示せ。

#### 题目描述

假设 $C^2$ 函数 $u:\mathbb R\times[0,\infty)\to\mathbb R$ 满足

$$
\begin{aligned}
\frac{\partial u}{\partial t}(x,t)-\frac{\partial^2u}{\partial x^2}(x,t)&=0,
&& (x,t)\in\mathbb R\times(0,\infty),\\
u(x+2\pi,t)&=u(x,t),
&& (x,t)\in\mathbb R\times[0,\infty).
\end{aligned}
$$

对于该函数 $u$，考虑下列命题(P)。

(P) 对任意 $t>0$，关于 $x$ 的函数 $u(x,t)$ 都能延拓为 $\mathbb C$ 上的全纯函数。

回答下列问题。

(1) 当 $u(x,0)=\sin x$ 时，证明(P)成立。

(2) 证明一般情况下(P)成立。

## **Kai**

### (1)

$u(x,t)=e^{-t}\sin x$ が方程式と初期値を満たすことを直接確認できる。周期解の一意性は、初期値ゼロの差 $v$ に対して

$$
\frac d{dt}\int_0^{2\pi}v(x,t)^2\,dx=-2\int_0^{2\pi}v_x(x,t)^2\,dx\le0
$$

を用いれば従う。よって $e^{-t}\sin z$ が求める整関数への拡張である。

### (2)

$c_n=(2\pi)^{-1}\int_0^{2\pi}u(x,0)e^{-inx}\,dx$ とおく。$u$ の Fourier 係数は、方程式と周期境界条件により $\widehat u_n'(t)=-n^2\widehat u_n(t)$ を満たすから

$$
\widehat u_n(t)=c_ne^{-n^2t}.
$$

$t>0$ を固定して

$$
U_t(z)=\sum_{n\in\mathbb Z}c_ne^{-n^2t}e^{inz}
$$

と定める。$|c_n|\le\|u(\cdot,0)\|_\infty=:M$ であり、$|\operatorname{Im}z|\le R$ では各項の絶対値は $Me^{-n^2t+|n|R}$ 以下である。この優級数は収束するので、上の級数は $\mathbb C$ の各コンパクト集合上一様収束する。したがって $U_t$ は整関数である。

実軸上の $U_t$ と $u(\cdot,t)$ はすべての Fourier 係数が等しく、ともに連続であるから一致する。これで (P) が示された。

## **Reference**

- [京都大学公式問題（2018年度・専門科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2017math_senmon.pdf)
- [照合用参考解答（2018年度・専門科目 問題8、PDF 4–6ページ）](https://drive.google.com/file/d/1p45zSLvddYW09FsKE0ycCMExLWfELlhi/view?usp=sharing)
