---
sidebar_label: 2006年8月実施 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Complex-Roots
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Harmonic-Functions-and-Harmonic-Conjugates
---

# 京都大学 情報学研究科 システム科学専攻 2006年8月実施 工業数学

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
(1) $1$ の16乗根のうち偏角が正で最小のものを $z\ne1$ とする。$S=\sum_{k=0}^7z^{2k}$ を求めよ。

(2) $0<a<b$ とするとき $I=\int_{-\infty}^\infty dx/\{(x^2+a^2)(x^2+b^2)\}$ を求めよ。

(3) $z=x+iy$ とするとき、$f(z)=\sin(z^2)$ の実部を $x,y$ で表せ。

### 問題2
正則関数を $f(z)=u(x,y)+iv(x,y)$、$z=x+iy$ と書く。導出過程を示して答えよ。

(1) $z_1=x+\Delta x+iy,z_2=x+i(y+\Delta y)$ とする。差商 $(f(z_1)-f(z))/(z_1-z)$、$(f(z_2)-f(z))/(z_2-z)$ の $\Delta x\to0,\Delta y\to0$ における極限を $u,v$ で表せ。

(2) 上の結果からコーシー・リーマンの関係式を導け。

(3) $u(x,y)=x^3-3xy^2$ のとき $f(z)$ を求めよ。

#### 题目描述

### 问题1
(1) $z\ne1$ 是 $1$ 的16次方根中正辐角最小者，求 $\sum_{k=0}^7z^{2k}$。

(2) $0<a<b$，求 $\int_{-\infty}^\infty dx/[(x^2+a^2)(x^2+b^2)]$。

(3) $z=x+iy$，用 $x,y$ 表示 $\sin(z^2)$ 的实部。

### 问题2
全纯函数 $f(z)=u(x,y)+iv(x,y)$，$z=x+iy$。给出推导：

(1) 设 $z_1=x+\Delta x+iy$，$z_2=x+i(y+\Delta y)$，分别求沿实轴、虚轴差商 $(f(z_j)-f(z))/(z_j-z)$ 的极限。

(2) 据此推导柯西–黎曼方程。

(3) 若 $u=x^3-3xy^2$，求 $f$。

## **Kai**

### 問題1
(1) $z=e^{i\pi/8}$、$z^2\ne1$、$z^{16}=1$ より $\boxed{S=(1-z^{16})/(1-z^2)=0}$。

(2) 部分分数分解より

$$
I=\frac1{b^2-a^2}\left(\int_{-\infty}^\infty\frac{dx}{x^2+a^2}-\int_{-\infty}^\infty\frac{dx}{x^2+b^2}\right)
=\boxed{\frac\pi{ab(a+b)}}.
$$

(3) $z^2=x^2-y^2+2ixy$ と $\sin(\alpha+i\beta)=\sin\alpha\cosh\beta+i\cos\alpha\sinh\beta$ より

$$
\boxed{\operatorname{Re}\sin(z^2)=\sin(x^2-y^2)\cosh(2xy)}.
$$

### 問題2
(1) 実方向の極限は $u_x+iv_x$、虚方向の極限は $(u_y+iv_y)/i=v_y-iu_y$。

(2) 正則性により両極限は一致するので、実部と虚部を比較して

$$
\boxed{u_x=v_y,\qquad u_y=-v_x}.
$$

(3) $v_y=3x^2-3y^2$ より $v=3x^2y-y^3+C(x)$。さらに $v_x=6xy=-u_y$ より $C'(x)=0$。したがって

$$
\boxed{f(z)=z^3+iC,\qquad C\in\mathbb R}.
$$

