---
sidebar_label: "2016年8月実施 数学基礎 問題1"
tags:
  - Ochanomizu-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Vector-Calculus.Tangent-Plane
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 情報科学コース 2016年8月実施 数学基礎 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 【1】

次の各問に答えよ。

#### (1)

関数 $\sqrt{1+x}$ のマクローリン展開を $x^3$ の項まで求めよ。

#### (2)

定積分

$$
\int_1^2\frac{\sqrt{x-1}}{x}\,dx
$$

の値を $\sqrt{x-1}=t$ と置換することによって求めよ。

#### (3)

$3$ 次元空間の曲面

$$
z(x,y)=x^2-2xy-y+y^3+3
$$

において、曲面上の点 $(1,0,z(1,0))$ における接平面の方程式を求めよ。

### 【2】

関数 $P_n(x)$ が $P_0(x)=1$ および

$$
P_n(x)=\frac{1}{2^n n!}\frac{d^n f(x)}{dx^n}\qquad(n=1,2,\ldots)
$$

によって定められているとする。ただし $f(x)=(x^2-1)^n$ である。このとき、次の各問に答えよ。

#### (1)

$P_1(x)$ と $P_2(x)$ を $x$ の多項式として表せ。

#### (2)

次式が成立することを示せ。

$$
(x^2-1)\frac{df(x)}{dx}=2nxf(x)
$$

#### (3)

式 $(x^2-1)\dfrac{df(x)}{dx}=2nxf(x)$ の両辺を $x$ で $n+1$ 回微分することによって、次式を導出せよ。

$$
(x^2-1)\frac{d^2P_n(x)}{dx^2}
+2x\frac{dP_n(x)}{dx}
-n(n+1)P_n(x)=0
$$

### 题目描述

1. 求 $\sqrt{1+x}$ 到 $x^3$ 项的 Maclaurin 展开；用 $t=\sqrt{x-1}$ 计算 $\displaystyle\int_1^2\frac{\sqrt{x-1}}x\,dx$；求曲面 $z=x^2-2xy-y+y^3+3$ 在 $(1,0,z(1,0))$ 处的切平面。
2. 由 Rodrigues 公式定义

   $$
   P_n(x)=\frac1{2^n n!}\frac{d^n}{dx^n}(x^2-1)^n.
   $$

   求 $P_1,P_2$，证明题给恒等式，并推导 $P_n$ 满足的二阶微分方程。

## **Kai**

### 【1】

#### (1)

二項級数より

$$
\boxed{
\sqrt{1+x}=1+\frac{x}{2}-\frac{x^2}{8}+\frac{x^3}{16}+O(x^4)
}.
$$

#### (2)

$t=\sqrt{x-1}$ とおくと $x=t^2+1$、$dx=2t\,dt$ であり、積分区間は $0\le t\le1$ となる。よって

$$
\begin{aligned}
\int_1^2\frac{\sqrt{x-1}}x\,dx
&=\int_0^1\frac{2t^2}{1+t^2}\,dt\\
&=2\int_0^1\left(1-\frac1{1+t^2}\right)dt
=\boxed{2-\frac\pi2}.
\end{aligned}
$$

#### (3)

$$
z(1,0)=4,\qquad z_x=2x-2y,\qquad z_y=-2x-1+3y^2.
$$

したがって $z_x(1,0)=2$、$z_y(1,0)=-3$ であり、接平面は

$$
z-4=2(x-1)-3y,\qquad
\boxed{z=2x-3y+2}.
$$

### 【2】

#### (1)

定義から

$$
P_1(x)=\frac12\frac d{dx}(x^2-1)=x,
$$

$$
P_2(x)=\frac1{8}\frac{d^2}{dx^2}(x^2-1)^2
=\frac12(3x^2-1).
$$

よって

$$
\boxed{P_1(x)=x,\qquad P_2(x)=\frac12(3x^2-1)}.
$$

#### (2)

$f(x)=(x^2-1)^n$ より

$$
f'(x)=2nx(x^2-1)^{n-1}.
$$

両辺に $x^2-1$ を掛ければ

$$
\boxed{(x^2-1)f'(x)=2nxf(x)}.
$$

#### (3)

$D=d/dx$ とする。Leibniz の公式により

$$
\begin{aligned}
D^{n+1}\bigl((x^2-1)f'\bigr)
={}&(x^2-1)f^{(n+2)}
+2(n+1)xf^{(n+1)}\\
&+n(n+1)f^{(n)},
\end{aligned}
$$

また

$$
D^{n+1}(2nxf)=2nx f^{(n+1)}+2n(n+1)f^{(n)}.
$$

両者を等置して整理すると

$$
(x^2-1)f^{(n+2)}+2xf^{(n+1)}-n(n+1)f^{(n)}=0.
$$

これを $2^n n!$ で割り、$P_n=f^{(n)}/(2^n n!)$ を用いれば

$$
\boxed{
(x^2-1)P_n''(x)+2xP_n'(x)-n(n+1)P_n(x)=0
}.
$$
