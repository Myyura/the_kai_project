---
sidebar_label: '2014年8月実施 数学 第3問'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Branch-Cut
  - Mathematics.Complex-Analysis.Cauchy-Integral-Formula
  - Mathematics.Complex-Analysis.Contour-Integration
---

# 東京大学 工学系研究科 2014年8月実施 数学 第3問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

複素関数 $g$ の実軸の上下からの境界値を

$$
g^\pm(x)=\lim_{\varepsilon\downarrow0}g(x\pm i\varepsilon).
$$

と定義する。$\varphi$ は $[-1,1]$ 上で連続とし、$f$ を次式で定義する。

$$
f(z)=\frac1{2\pi i}\int_{-1}^1\frac{\varphi(t)}{t-z}\,\mathrm dt.
$$

I. $-1<x<1$ において $f^+(x)-f^-(x)=\varphi(x)$ を示せ。

II. $X(z)=\sqrt{z^2-1}$ の分枝切断線を $[-1,1]$ とする。次の関係を示せ。

$$
\frac{X^+(x)}{X^-(x)}=
\begin{cases}-1,&|x|<1,\\1,&|x|>1.\end{cases}
$$

III. $\varphi(x)=X^+(x)$ のとき $f(z)$ を求めよ。

#### 题目描述

对复函数 $g$ 定义实轴上下侧的边界值

$$
g^\pm(x)=\lim_{\varepsilon\downarrow0}g(x\pm i\varepsilon).
$$

设 $\varphi$ 在 $[-1,1]$ 上连续，令

$$
f(z)=\frac1{2\pi i}\int_{-1}^1\frac{\varphi(t)}{t-z}\,\mathrm dt.
$$

I. 对 $-1<x<1$，证明 $f^+(x)-f^-(x)=\varphi(x)$。

II. 设 $X(z)=\sqrt{z^2-1}$ 的割线为 $[-1,1]$，证明

$$
\frac{X^+(x)}{X^-(x)}=
\begin{cases}-1,&|x|<1,\\1,&|x|>1.\end{cases}
$$

III. 当 $\varphi(x)=X^+(x)$ 时求 $f(z)$。

## **Kai**

### I

$\varepsilon>0$ に対して直接差を取ると、

$$
f(x+i\varepsilon)-f(x-i\varepsilon)
=\frac1\pi\int_{-1}^1
\frac{\varepsilon\varphi(t)}{(t-x)^2+\varepsilon^2}\,\mathrm dt.
$$

$t=x+\varepsilon u$ とおけば、

$$
\frac1\pi\int_{(-1-x)/\varepsilon}^{(1-x)/\varepsilon}
\frac{\varphi(x+\varepsilon u)}{1+u^2}\,\mathrm du
\longrightarrow\frac{\varphi(x)}\pi\int_{-\infty}^{\infty}\frac{\mathrm du}{1+u^2}
=\varphi(x).
$$

$\varphi$ の有界性と連続性より支配収束定理を適用できる。したがって、上下の境界値が存在する場合、

$$
\boxed{f^+(x)-f^-(x)=\varphi(x).}
$$

### II

まず $X(z)/z\to1$ を満たす分枝を取る。その境界値は

$$
X^\pm(x)=
\begin{cases}
\sqrt{x^2-1},&x>1,\\
\pm i\sqrt{1-x^2},&-1<x<1,\\
-\sqrt{x^2-1},&x<-1.
\end{cases}
$$

よって比は切断線上で $-1$、切断線外で $1$ となる。全体の符号を変えても比は変わらない。

### III

$X(z)/z\to1$ の分枝を用いる。$X_0(z)=X(z)-z$ とおくと $X_0(z)=O(z^{-1})$ であり、

$$
X_0^+(x)-X_0^-(x)=2X^+(x).
$$

$X_0$ に対して切断線の周囲でコーシーの積分公式を用いる。大円上の積分は半径を無限大にすると消えるので、

$$
X(z)-z=\frac1{2\pi i}\int_{-1}^1
\frac{2X^+(t)}{t-z}\,\mathrm dt=2f(z).
$$

したがって

$$
\boxed{f(z)=\frac{\sqrt{z^2-1}-z}{2},\qquad X(z)/z\to1.}
$$

一般に $X(z)/z\to\sigma\in\{1,-1\}$ を満たす分枝では、$\boxed{f(z)=(X(z)-\sigma z)/2}$ である。
