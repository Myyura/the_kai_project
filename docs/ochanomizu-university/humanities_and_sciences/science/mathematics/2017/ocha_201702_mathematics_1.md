---
sidebar_label: "2017年2月実施 数学コース 問題1"
tags:
  - Ochanomizu-University
  - Mathematics.Differential-Equations.Hermite-Equation-and-Polynomial-Recurrence
  - Mathematics.Calculus.Power-Series
---
# お茶の水女子大学 人間文化創成科学研究科 理学専攻 数学コース 2017年2月実施 問題1

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
実変数 $x$ についての $C^2$ 級関数 $f(x)$ に対する操作

$$
L_xf(x)=f''(x)-xf'(x)
$$

を考える。

### (1)
関数

$$
g(s,x)=e^{sx-\frac{s^2}{2}}
$$

について、

$$
s\frac{\partial g(s,x)}{\partial s}=-L_xg(s,x) \qquad (\spadesuit)
$$

が成り立つことを示せ。

### (2)
$g(s,x)$ の $s$ に関する $0$ を中心とした Taylor 級数を

$$
g(s,x)=\sum_{k=0}^{\infty}\frac{s^k}{k!}H_k(x)
$$

とする。式 $(\spadesuit)$ の両辺における $s^k$ の係数の比較から、

$$
-L_xH_k(x)=kH_k(x)
$$

を導け。

### (3)
再び式 $(\spadesuit)$ の両辺における $s^k$ の係数の比較から、$k\geq 2$ について

$$
H_k(x)=xH_{k-1}(x)-(k-1)H_{k-2}(x)
$$

が成り立つことを示せ。

### 题目描述

定义作用于实变量 $x$ 的 $C^2$ 函数的算子 $L_xf=f''-xf'$，并令 $g(s,x)=e^{sx-s^2/2}$。

1. 证明 $s\,\partial g/\partial s=-L_xg$。
2. 将 $g$ 按 $s$ 展开为 $\sum_{k\geq0}s^kH_k(x)/k!$，比较系数证明 $-L_xH_k=kH_k$。
3. 再次比较系数，证明对 $k\geq2$，有 $H_k=xH_{k-1}-(k-1)H_{k-2}$。

## **Kai**

### (1)

$g=g(s,x)$ と略記すると、

$$
\frac{\partial g}{\partial s}=(x-s)g,
\qquad
\frac{\partial g}{\partial x}=sg,
\qquad
\frac{\partial^2g}{\partial x^2}=s^2g.
$$

したがって

$$
L_xg=(s^2-xs)g=-s(x-s)g
$$

であるから、

$$
s\frac{\partial g}{\partial s}=s(x-s)g=-L_xg
$$

を得る。

### (2)

級数を項別に微分すると、

$$
s\frac{\partial g}{\partial s}
=\sum_{k=0}^{\infty}\frac{s^k}{k!}\,kH_k(x),
$$

一方、$L_x$ は $x$ のみに作用するので、

$$
-L_xg
=\sum_{k=0}^{\infty}\frac{s^k}{k!}\{-L_xH_k(x)\}.
$$

式 $(\spadesuit)$ における $s^k/k!$ の係数を比較して、

$$
\boxed{-L_xH_k(x)=kH_k(x)}
$$

を得る。

### (3)

(1) より

$$
-L_xg=(xs-s^2)g
=(xs-s^2)\sum_{j=0}^{\infty}\frac{s^j}{j!}H_j(x).
$$

$k\geq2$ とすると、右辺の $s^k/k!$ の係数は

$$
kxH_{k-1}(x)-k(k-1)H_{k-2}(x)
$$

である。(2) より左辺の同じ係数は $kH_k(x)$ だから、$k$ で割って

$$
\boxed{H_k(x)=xH_{k-1}(x)-(k-1)H_{k-2}(x)}
$$

を得る。なお、級数から $H_0(x)=1$, $H_1(x)=x$ である。
