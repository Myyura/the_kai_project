---
sidebar_label: 2014年8月実施 専門科目 問題7 物理専門2
tags:
  - Tohoku-University
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Fourier-Analysis
  - Mathematics.Differential-Equations.Boundary-Value-Problem
---

# 東北大学 工学研究科 電気・情報系 2014年8月実施 専門科目 問題7 物理専門2

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

区間 $-\infty<x<+\infty$ における実数 $x$ の関数

$$
f(x)=\begin{cases}\pi,&|x|\le1,\\0,&|x|>1\end{cases}
$$

を考える。また，区間 $-\infty<x<+\infty$ において次の微分方程式

$$
\frac{d^2}{dx^2}g(x)-g(x)=f(x)
$$

を満足する関数 $g(x)$ を考える。$g(x),\frac d{dx}g(x)$ および $\frac{d^2}{dx^2}g(x)$ は区間 $-\infty<x<+\infty$ で有界，連続かつ絶対積分可能な関数であるとする。$C_1,C_2,C_3,C_4$ は，以下のように定義された積分路である（Fig. 7）。

$$
\begin{aligned}
C_1&:z=t&&(r\le t\le R),\\
C_2&:z=Re^{it}&&(0\le t\le\pi),\\
C_3&:z=t&&(-R\le t\le-r),\\
C_4&:z=re^{i(\pi-t)}&&(0\le t\le\pi).
\end{aligned}
$$

ただし，$z$ は複素変数，$t$ は媒介変数である。また，$r$ と $R$ はそれぞれ $0<r<1,1<R$ を満たす実数である。$i$ は虚数単位である。以下の問に答えよ。

(1) $u$ を正の実数とするとき，複素積分 $\int_{C_1+C_2+C_3+C_4}\frac{-e^{iuz}}{z(z^2+1)}\,dz$ を求めよ。

(2) 関数 $f(x)$ のフーリエ変換 $F(\omega)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}f(x)e^{-i\omega x}\,dx$ を求めよ。

(3) 関数 $g(x)$ のフーリエ変換 $G(\omega)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}g(x)e^{-i\omega x}\,dx$ を求めよ。

(4) 実数 $\omega$ および $x$ の関数 $H(\omega,x)=\frac{-e^{i\omega x}}{\omega(\omega^2+1)}$ を考える。

$$
g(x)=\frac1{2i}\left(\int_{-\infty}^{+\infty}H(\omega,x+1)\,d\omega-\int_{-\infty}^{+\infty}H(\omega,x-1)\,d\omega\right)
$$

となることを示せ。

(5) 実数 $x$ に対して関数 $g(x)$ を求めよ。ただし，1位の極 $\alpha$ を持つ複素関数 $k(z)$ に対して，

$$
\lim_{q\to0}\int_Ck(z)\,dz=i(\theta_2-\theta_1)\operatorname{Res}_{z=\alpha}k(z)
$$

となることを用いてよい。ただし，$C$ は $C:z=\alpha+qe^{i\theta}$（$\theta_1\le\theta\le\theta_2,0<\theta_2-\theta_1\le2\pi,0<q$）と定義される積分路である。

### 题目描述

设 $f(x)=\pi$（$|x|\le1$），$f(x)=0$（$|x|>1$），并考虑 $g''(x)-g(x)=f(x)$。题面要求 $g,g',g''$ 在实轴上有界、连续且绝对可积。

令 $0<r<1<R$，路径为

$$
\begin{aligned}
C_1&:z=t\quad(r\le t\le R),& C_2&:z=Re^{it}\quad(0\le t\le\pi),\\
C_3&:z=t\quad(-R\le t\le-r),& C_4&:z=re^{i(\pi-t)}\quad(0\le t\le\pi).
\end{aligned}
$$

它们构成上半平面避开原点的小半圆凹口围道。

1. 对 $u>0$，求 $\int_{C_1+C_2+C_3+C_4}\frac{-e^{iuz}}{z(z^2+1)}\,dz$。
2. 求 $F(\omega)=\frac1{\sqrt{2\pi}}\int_{-\infty}^\infty f(x)e^{-i\omega x}\,dx$。
3. 在同一约定下求 $G(\omega)$。
4. 定义 $H(\omega,x)=-e^{i\omega x}/[\omega(\omega^2+1)]$，证明

$$
g(x)=\frac1{2i}\left[\int_{-\infty}^\infty H(\omega,x+1)\,d\omega-
\int_{-\infty}^\infty H(\omega,x-1)\,d\omega\right].
$$

5. 求 $g(x)$。可用小圆弧积分极限等于 $i$ 乘以圆心角再乘留数的公式。

## **Kai**

由于 $f$ 在 $\pm1$ 跳跃，而连续的 $g''-g$ 不会跳跃，**原题要求的全局 $C^2$ 解不存在**。下文求满足题意积分计算的解：$g,g'$ 连续，$g''$ 分段连续，方程在 $x\ne\pm1$ 处成立，并在实轴上以弱解意义成立。

### (1)

围道内只有极点 $i$，其留数为 $e^{-u}/2$，故

$$
\boxed{\int_{C_1+C_2+C_3+C_4}\frac{-e^{iuz}}{z(z^2+1)}\,dz=\pi i e^{-u}}.
$$

### (2)、(3)

$$
\boxed{F(\omega)=\sqrt{2\pi}\,\frac{\sin\omega}{\omega}},\qquad F(0)=\sqrt{2\pi}.
$$

傅里叶变换将方程化为 $-(\omega^2+1)G=F$，故

$$
\boxed{G(\omega)=-\sqrt{2\pi}\frac{\sin\omega}{\omega(\omega^2+1)}}.
$$

### (4)

由逆变换及 $\sin\omega=(e^{i\omega}-e^{-i\omega})/(2i)$，

$$
g(x)=-\int_{-\infty}^\infty\frac{e^{i\omega x}\sin\omega}{\omega(\omega^2+1)}\,d\omega
=\frac1{2i}\operatorname{PV}\!\int_{-\infty}^\infty[H(\omega,x+1)-H(\omega,x-1)]\,d\omega.
$$

拆成两个积分时，各积分应理解为 **Cauchy 主值**；合并后的奇点可去。

### (5)

令 $J(u)=\operatorname{PV}\int_{-\infty}^\infty H(\omega,u)\,d\omega$。$u>0$ 时，大圆弧积分趋于 $0$，原点小半圆顺时针且留数为 $-1$，故其积分趋于 $i\pi$。由 (1)，

$$
J(u)=i\pi(e^{-u}-1).
$$

由奇偶性扩展到实数，

$$
J(u)=i\pi\operatorname{sgn}(u)(e^{-|u|}-1),\qquad J(0)=0.
$$

因此

$$
\boxed{g(x)=\begin{cases}
-\pi e^{-|x|}\sinh1,&|x|\ge1,\\
\pi(e^{-1}\cosh x-1),&|x|\le1.
\end{cases}}
$$

两式在 $|x|=1$ 处相等，且一阶导数也连续；直接代入可验证分段方程。
